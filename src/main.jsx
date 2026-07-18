import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Code2,
  Heart,
  MessageCircleHeart,
  Send,
  Sparkles,
  Star,
  Trash2,
  UserRound
} from 'lucide-react';
import * as THREE from 'three';
import bearImage from './assets/blue-alien-bear.png';
import './styles.css';

const TWO_HOURS_MS = 2 * 60 * 60 * 1000;
const EMAIL_SENT_MINUTES = 22 * 60 + 44;
const CHAT_STORAGE_PREFIX = 'vivi-chat-clean';

function formatDuration(totalMinutes) {
  const safeMinutes = Math.max(0, totalMinutes);
  const hours = Math.floor(safeMinutes / 60);
  const rest = safeMinutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(rest).padStart(2, '0')}`;
}

function parseReceivedTime(value) {
  const cleaned = value.trim().toLowerCase().replace(/\s+/g, ' ');
  const match = cleaned.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/);
  if (!match) return null;

  let hour = Number(match[1]);
  const minute = Number(match[2] ?? '0');
  const suffix = match[3];

  if (minute > 59) return null;

  if (suffix) {
    if (hour < 1 || hour > 12) return null;
    if (suffix === 'am') hour = hour === 12 ? 0 : hour;
    if (suffix === 'pm') hour = hour === 12 ? 12 : hour + 12;
  } else if (hour > 23) {
    return null;
  }

  let receivedMinutes = hour * 60 + minute;
  if (receivedMinutes < EMAIL_SENT_MINUTES) receivedMinutes += 24 * 60;

  return receivedMinutes - EMAIL_SENT_MINUTES;
}

function getRoomId() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get('room');
  if (fromUrl) return fromUrl;

  const saved = localStorage.getItem('vivi-room-id');
  if (saved) return saved;

  const created = Math.random().toString(36).slice(2, 8);
  localStorage.setItem('vivi-room-id', created);
  return created;
}

function Starfield() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true });
    const particles = 520;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);

    for (let i = 0; i < particles; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 36;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 22;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.035,
      transparent: true,
      opacity: 0.75
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    camera.position.z = 8;

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      camera.aspect = rect.width / Math.max(rect.height, 1);
      camera.updateProjectionMatrix();
    };

    resize();
    mount.appendChild(renderer.domElement);
    let frame = 0;
    let rafId;

    const animate = () => {
      frame += 0.004;
      points.rotation.y = frame;
      points.rotation.x = Math.sin(frame * 0.7) * 0.12;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="starfield" aria-hidden="true" />;
}

function StitchTrail() {
  return (
    <svg className="stitch-trail" viewBox="0 0 1000 190" aria-hidden="true">
      <path
        className="thread-line"
        d="M18 125 C155 22 246 178 374 84 S601 77 714 133 S898 159 982 44"
      />
      {Array.from({ length: 24 }).map((_, index) => (
        <path
          key={index}
          className="thread-stitch"
          style={{ animationDelay: `${index * 0.045}s` }}
          d={`M${28 + index * 41} ${index % 2 ? 88 : 126} l22 -20`}
        />
      ))}
    </svg>
  );
}

function ProgressDots({ active, total, onSelect }) {
  return (
    <div className="progress-dots" aria-label="Slides">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          className={index === active ? 'dot active' : 'dot'}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}

function TemporaryChat({ name }) {
  const roomId = useMemo(getRoomId, []);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(`${CHAT_STORAGE_PREFIX}-${roomId}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [draft, setDraft] = useState('');
  const channelRef = useRef(null);
  const apiAvailableRef = useRef(true);

  useEffect(() => {
    localStorage.setItem(`${CHAT_STORAGE_PREFIX}-${roomId}`, JSON.stringify(messages.slice(-40)));
  }, [messages, roomId]);

  useEffect(() => {
    const channel = 'BroadcastChannel' in window ? new BroadcastChannel(`vivi-${roomId}`) : null;
    channelRef.current = channel;
    if (channel) {
      channel.onmessage = (event) => {
        setMessages((current) => {
          if (current.some((item) => item.id === event.data.id)) return current;
          return [...current, event.data].slice(-40);
        });
      };
    }
    return () => channel?.close();
  }, [roomId]);

  useEffect(() => {
    let isActive = true;

    const pullMessages = () => {
      if (!apiAvailableRef.current) return;
      fetch(`/api/chat?room=${encodeURIComponent(roomId)}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (!isActive || !data?.messages) return;
          setMessages((current) => {
            const merged = [...current, ...data.messages];
            return Array.from(new Map(merged.map((item) => [item.id, item])).values()).slice(-40);
          });
        })
        .catch(() => {
          apiAvailableRef.current = false;
        });
    };

    pullMessages();
    const intervalId = window.setInterval(pullMessages, 2200);

    return () => {
      isActive = false;
      window.clearInterval(intervalId);
    };
  }, [roomId]);

  const sendMessage = async (event) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    const message = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      author: name || 'Dikush special',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((current) => [...current, message].slice(-40));
    channelRef.current?.postMessage(message);
    setDraft('');

    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ room: roomId, message })
    }).catch(() => {});
  };

  const clearMessages = () => {
    setMessages([]);
    localStorage.removeItem(`${CHAT_STORAGE_PREFIX}-${roomId}`);
    localStorage.removeItem(`vivi-chat-${roomId}`);
    fetch(`/api/chat?room=${encodeURIComponent(roomId)}`, { method: 'DELETE' }).catch(() => {});
  };

  const shareUrl = `${window.location.origin}${window.location.pathname}?room=${roomId}`;

  return (
    <div className="chat-shell">
      <div className="chat-head">
        <MessageCircleHeart size={22} />
        <div>
          <p>Chat i perkohshem</p>
          <span>Dhoma: {roomId}</span>
        </div>
        <button className="chat-clear" type="button" onClick={clearMessages} aria-label="Pastro chat-in">
          <Trash2 size={17} />
        </button>
      </div>

      <div className="chat-list" aria-live="polite">
        {messages.length === 0 ? (
          <div className="empty-chat">Shkruaj mesazhin e pare te embel.</div>
        ) : (
          messages.map((message) => (
            <div className="bubble" key={message.id}>
              <strong>{message.author}</strong>
              <span>{message.text}</span>
              <small>{message.time}</small>
            </div>
          ))
        )}
      </div>

      <form className="chat-form" onSubmit={sendMessage}>
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Shkruaj dicka..."
          maxLength={180}
        />
        <button type="submit" aria-label="Dergo">
          <Send size={18} />
        </button>
      </form>
      <input className="share-url" value={shareUrl} readOnly onFocus={(event) => event.target.select()} />
    </div>
  );
}

function NameAndTimer({ name, setName, receivedAt, setReceivedAt }) {
  const hasReceivedTime = receivedAt.trim().length > 0;
  const elapsedMinutes = hasReceivedTime ? parseReceivedTime(receivedAt) : null;
  const isValid = elapsedMinutes !== null;
  const isAccepted = hasReceivedTime && isValid && elapsedMinutes * 60000 <= TWO_HOURS_MS;
  const statusClass = !hasReceivedTime ? 'neutral' : isAccepted ? 'okay' : 'done';
  const message = !hasReceivedTime
    ? 'Vendos oren e pranimit'
    : !isValid
      ? 'Formati: 00:30'
    : isAccepted
      ? 'Ju e keni falur Enesin <3'
      : 'Falja nuk pranohet';
  const snapMessage = isAccepted ? 'Tani dergoji Enesit nje snap me buzeqeshje.' : '';

  return (
    <div className="logic-grid">
      <label className="field">
        <span>
          <UserRound size={17} />
          Emri
        </span>
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Shkruaj emrin" />
      </label>

      <label className="field">
        <span>
          <Clock3 size={17} />
          Shkruaj oren e pranimit
        </span>
        <input
          value={receivedAt}
          onChange={(event) => setReceivedAt(event.target.value)}
          placeholder="Formati: 00:30"
          inputMode="text"
        />
      </label>

      <div className={`timer-card ${statusClass}`}>
        <Clock3 size={24} />
        <span>{hasReceivedTime && isValid ? formatDuration(elapsedMinutes) : '10:44 PM'}</span>
        <strong>{message}</strong>
        {snapMessage ? <p>{snapMessage}</p> : null}
      </div>
    </div>
  );
}

function CodeApology({ name }) {
  const prettyName = name.trim() || 'zemra ime';
  const code = `def kerko_falje(emri):\n    zemra = \"e sinqerte\"\n    gabimi = True\n\n    if gabimi and zemra == \"e sinqerte\":\n        return f\"Me fal, {emri}. Do ta bej me mire.\"\n\nprint(kerko_falje(\"${prettyName}\"))`;

  return (
    <pre className="code-card">
      <code>{code}</code>
    </pre>
  );
}

function slideData({ name, setName, receivedAt, setReceivedAt }) {
  const displayName = name.trim() || 'te bukuren time <3';

  return [
    {
      icon: Heart,
      eyebrow: 'Slide 01',
      title: `Per ${displayName}`,
      body:
        'E bera kete faqe te vogel sepse ndonjehere fjalet duken me te sinqerta kur marrin pak drite, levizje dhe kujdes.',
      accent: 'heart',
      visual: (
        <div className="bear-frame">
          <img src={bearImage} alt="Cute original blue alien teddy bear holding a heart" />
        </div>
      )
    },
    {
      icon: Code2,
      eyebrow: 'Slide 02',
      title: 'Falja ne menyre kodi',
      body: 'Nuk eshte program perfekt, por qellimi eshte i paster: te kerkoj falje bukur, qarte dhe me zemer.',
      accent: 'code',
      visual: <CodeApology name={name} />
    },
    {
      icon: Clock3,
      eyebrow: 'Slide 03',
      title: 'Rregulli i profesorit',
      body:
        "Email-i u dergua ne 10:44 PM. Ajo vendos vetem oren e pranimit; nese eshte brenda dy ore, falja pranohet.",
      accent: 'clock',
      visual: (
        <NameAndTimer name={name} setName={setName} receivedAt={receivedAt} setReceivedAt={setReceivedAt} />
      )
    },
    {
      icon: Sparkles,
      eyebrow: 'Slide 04',
      title: 'Arsyeja pse po perpiqem',
      body:
        'Sepse buzeqeshja jote ndryshon diten time. Edhe kur une ngaterrohem, ti prape mbetesh personi qe dua ta bej te ndihet e zgjedhur.',
      accent: 'spark',
      visual: (
        <div className="memory-wall">
          <span>kujdes</span>
          <span>besim</span>
          <span>qetesi</span>
          <span>ne te dy</span>
        </div>
      )
    },
    {
      icon: Star,
      eyebrow: 'Slide 05',
      title: 'Premtimi i vogel',
      body:
        'Me pak krenari, me shume degjim, me shume butesi. Jo vetem sot, por sa here qe duhet ta rregulloj nje gabim timin.',
      accent: 'promise',
      visual: (
        <div className="promise-stack">
          <div><Heart size={20} /> me fal</div>
          <div><Sparkles size={20} /> po mesoj</div>
          <div><Star size={20} /> te zgjedh prape</div>
        </div>
      )
    },
    {
      icon: MessageCircleHeart,
      eyebrow: 'Slide 06',
      title: 'Chat vetem per qejf',
      body:
        'Hape kete link me te njejten dhome dhe lini mesazhe te vogla. Ne Vercel ruhen perkohesisht ne nje JSON nga API.',
      accent: 'chat',
      visual: <TemporaryChat name={name} />
    }
  ];
}

function App() {
  const [name, setName] = useState('');
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [receivedAt, setReceivedAt] = useState('');

  const slides = slideData({ name, setName, receivedAt, setReceivedAt });
  const slide = slides[active];
  const Icon = slide.icon;

  const goTo = (index) => {
    setDirection(index > active ? 1 : -1);
    setActive((index + slides.length) % slides.length);
  };

  const next = () => goTo(active + 1);
  const previous = () => goTo(active - 1);

  return (
    <main className="app-shell">
      <Starfield />
      <StitchTrail />

      <section className="deck" aria-label="Romantic apology slideshow">
        <div className="topbar">
          <div className="brand">
            <Heart size={20} />
            Vivi
          </div>
          <ProgressDots active={active} total={slides.length} onSelect={goTo} />
        </div>

        <div className="slide-stage">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={active}
              className={`slide accent-${slide.accent}`}
              custom={direction}
              initial={{ opacity: 0, x: direction * 90, rotate: direction * 1.6 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: direction * -90, rotate: direction * -1.6 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next();
                if (info.offset.x > 80) previous();
              }}
            >
              <div className="copy">
                <span className="eyebrow">
                  <Icon size={18} />
                  {slide.eyebrow}
                </span>
                <h1>{slide.title}</h1>
                <p>{slide.body}</p>
              </div>
              <motion.div
                className="visual"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.16, duration: 0.46 }}
              >
                {slide.visual}
              </motion.div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="controls">
          <button type="button" onClick={previous} aria-label="Previous slide">
            <ArrowLeft size={20} />
          </button>
          <span>{active + 1} / {slides.length}</span>
          <button type="button" onClick={next} aria-label="Next slide">
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
