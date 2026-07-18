import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const DATA_FILE = join(tmpdir(), 'vivi-chat-messages.json');
const rooms = globalThis.__viviRooms || {};
globalThis.__viviRooms = rooms;

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function cleanRoomId(value) {
  return String(value || 'default')
    .replace(/[^a-zA-Z0-9_-]/g, '')
    .slice(0, 48) || 'default';
}

async function readRooms() {
  try {
    const file = await readFile(DATA_FILE, 'utf8');
    const parsed = JSON.parse(file);
    Object.assign(rooms, parsed);
  } catch {
    await writeRooms();
  }

  return rooms;
}

async function writeRooms() {
  await writeFile(DATA_FILE, JSON.stringify(rooms, null, 2), 'utf8');
}

async function readJsonBody(req) {
  let body = '';
  for await (const chunk of req) {
    body += chunk;
  }
  return JSON.parse(body || '{}');
}

export default async function handler(req, res) {
  const room = cleanRoomId(req.query.room);
  await readRooms();

  if (req.method === 'GET') {
    send(res, 200, { messages: rooms[room] || [] });
    return;
  }

  if (req.method === 'DELETE') {
    delete rooms[room];
    await writeRooms();
    send(res, 200, { ok: true, messages: [] });
    return;
  }

  if (req.method === 'POST') {
    try {
      const data = await readJsonBody(req);
      const cleanRoom = cleanRoomId(data.room || room);
      const message = data.message;

      if (!message?.text) {
        send(res, 400, { error: 'Missing message text' });
        return;
      }

      const current = rooms[cleanRoom] || [];
      const next = [
        ...current,
        {
          id: String(message.id || Date.now()),
          author: String(message.author || 'Guest').slice(0, 40),
          text: String(message.text).slice(0, 180),
          time: String(message.time || '')
        }
      ].slice(-80);

      rooms[cleanRoom] = next;
      await writeRooms();
      send(res, 200, { ok: true, messages: next });
    } catch {
      send(res, 400, { error: 'Invalid JSON' });
    }
    return;
  }

  send(res, 405, { error: 'Method not allowed' });
}
