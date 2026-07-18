(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function nM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bf={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function iM(){if(Hg)return ht;Hg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(O,te,Ne){this.props=O,this.context=te,this.refs=E,this.updater=Ne||x}S.prototype.isReactComponent={},S.prototype.setState=function(O,te){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,te,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(O,te,Ne){this.props=O,this.context=te,this.refs=E,this.updater=Ne||x}var b=L.prototype=new y;b.constructor=L,M(b,S.prototype),b.isPureReactComponent=!0;var R=Array.isArray,U=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function k(O,te,Ne){var K,ce={},Me=null,_e=null;if(te!=null)for(K in te.ref!==void 0&&(_e=te.ref),te.key!==void 0&&(Me=""+te.key),te)U.call(te,K)&&!F.hasOwnProperty(K)&&(ce[K]=te[K]);var Ae=arguments.length-2;if(Ae===1)ce.children=Ne;else if(1<Ae){for(var Fe=Array(Ae),Je=0;Je<Ae;Je++)Fe[Je]=arguments[Je+2];ce.children=Fe}if(O&&O.defaultProps)for(K in Ae=O.defaultProps,Ae)ce[K]===void 0&&(ce[K]=Ae[K]);return{$$typeof:n,type:O,key:Me,ref:_e,props:ce,_owner:N.current}}function P(O,te){return{$$typeof:n,type:O.type,key:te,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function V(O){var te={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ne){return te[Ne]})}var oe=/\/+/g;function Q(O,te){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):te.toString(36)}function ue(O,te,Ne,K,ce){var Me=typeof O;(Me==="undefined"||Me==="boolean")&&(O=null);var _e=!1;if(O===null)_e=!0;else switch(Me){case"string":case"number":_e=!0;break;case"object":switch(O.$$typeof){case n:case e:_e=!0}}if(_e)return _e=O,ce=ce(_e),O=K===""?"."+Q(_e,0):K,R(ce)?(Ne="",O!=null&&(Ne=O.replace(oe,"$&/")+"/"),ue(ce,te,Ne,"",function(Je){return Je})):ce!=null&&(C(ce)&&(ce=P(ce,Ne+(!ce.key||_e&&_e.key===ce.key?"":(""+ce.key).replace(oe,"$&/")+"/")+O)),te.push(ce)),1;if(_e=0,K=K===""?".":K+":",R(O))for(var Ae=0;Ae<O.length;Ae++){Me=O[Ae];var Fe=K+Q(Me,Ae);_e+=ue(Me,te,Ne,Fe,ce)}else if(Fe=v(O),typeof Fe=="function")for(O=Fe.call(O),Ae=0;!(Me=O.next()).done;)Me=Me.value,Fe=K+Q(Me,Ae++),_e+=ue(Me,te,Ne,Fe,ce);else if(Me==="object")throw te=String(O),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return _e}function he(O,te,Ne){if(O==null)return O;var K=[],ce=0;return ue(O,K,"","",function(Me){return te.call(Ne,Me,ce++)}),K}function le(O){if(O._status===-1){var te=O._result;te=te(),te.then(function(Ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ne)},function(Ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ne)}),O._status===-1&&(O._status=0,O._result=te)}if(O._status===1)return O._result.default;throw O._result}var ie={current:null},z={transition:null},ae={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:z,ReactCurrentOwner:N};function re(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:he,forEach:function(O,te,Ne){he(O,function(){te.apply(this,arguments)},Ne)},count:function(O){var te=0;return he(O,function(){te++}),te},toArray:function(O){return he(O,function(te){return te})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ht.Component=S,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=L,ht.StrictMode=r,ht.Suspense=d,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ht.act=re,ht.cloneElement=function(O,te,Ne){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var K=M({},O.props),ce=O.key,Me=O.ref,_e=O._owner;if(te!=null){if(te.ref!==void 0&&(Me=te.ref,_e=N.current),te.key!==void 0&&(ce=""+te.key),O.type&&O.type.defaultProps)var Ae=O.type.defaultProps;for(Fe in te)U.call(te,Fe)&&!F.hasOwnProperty(Fe)&&(K[Fe]=te[Fe]===void 0&&Ae!==void 0?Ae[Fe]:te[Fe])}var Fe=arguments.length-2;if(Fe===1)K.children=Ne;else if(1<Fe){Ae=Array(Fe);for(var Je=0;Je<Fe;Je++)Ae[Je]=arguments[Je+2];K.children=Ae}return{$$typeof:n,type:O.type,key:ce,ref:Me,props:K,_owner:_e}},ht.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},ht.createElement=k,ht.createFactory=function(O){var te=k.bind(null,O);return te.type=O,te},ht.createRef=function(){return{current:null}},ht.forwardRef=function(O){return{$$typeof:c,render:O}},ht.isValidElement=C,ht.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:le}},ht.memo=function(O,te){return{$$typeof:h,type:O,compare:te===void 0?null:te}},ht.startTransition=function(O){var te=z.transition;z.transition={};try{O()}finally{z.transition=te}},ht.unstable_act=re,ht.useCallback=function(O,te){return ie.current.useCallback(O,te)},ht.useContext=function(O){return ie.current.useContext(O)},ht.useDebugValue=function(){},ht.useDeferredValue=function(O){return ie.current.useDeferredValue(O)},ht.useEffect=function(O,te){return ie.current.useEffect(O,te)},ht.useId=function(){return ie.current.useId()},ht.useImperativeHandle=function(O,te,Ne){return ie.current.useImperativeHandle(O,te,Ne)},ht.useInsertionEffect=function(O,te){return ie.current.useInsertionEffect(O,te)},ht.useLayoutEffect=function(O,te){return ie.current.useLayoutEffect(O,te)},ht.useMemo=function(O,te){return ie.current.useMemo(O,te)},ht.useReducer=function(O,te,Ne){return ie.current.useReducer(O,te,Ne)},ht.useRef=function(O){return ie.current.useRef(O)},ht.useState=function(O){return ie.current.useState(O)},ht.useSyncExternalStore=function(O,te,Ne){return ie.current.useSyncExternalStore(O,te,Ne)},ht.useTransition=function(){return ie.current.useTransition()},ht.version="18.3.1",ht}var Gg;function Dh(){return Gg||(Gg=1,bf.exports=iM()),bf.exports}var we=Dh();const Te=nM(we);var Yl={},Df={exports:{}},On={},Lf={exports:{}},If={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function rM(){return Wg||(Wg=1,(function(n){function e(z,ae){var re=z.length;z.push(ae);e:for(;0<re;){var O=re-1>>>1,te=z[O];if(0<o(te,ae))z[O]=ae,z[re]=te,re=O;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ae=z[0],re=z.pop();if(re!==ae){z[0]=re;e:for(var O=0,te=z.length,Ne=te>>>1;O<Ne;){var K=2*(O+1)-1,ce=z[K],Me=K+1,_e=z[Me];if(0>o(ce,re))Me<te&&0>o(_e,ce)?(z[O]=_e,z[Me]=re,O=Me):(z[O]=ce,z[K]=re,O=K);else if(Me<te&&0>o(_e,re))z[O]=_e,z[Me]=re,O=Me;else break e}}return ae}function o(z,ae){var re=z.sortIndex-ae.sortIndex;return re!==0?re:z.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],m=1,g=null,v=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(z){for(var ae=t(h);ae!==null;){if(ae.callback===null)r(h);else if(ae.startTime<=z)r(h),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=t(h)}}function R(z){if(E=!1,b(z),!M)if(t(d)!==null)M=!0,le(U);else{var ae=t(h);ae!==null&&ie(R,ae.startTime-z)}}function U(z,ae){M=!1,E&&(E=!1,y(k),k=-1),x=!0;var re=v;try{for(b(ae),g=t(d);g!==null&&(!(g.expirationTime>ae)||z&&!V());){var O=g.callback;if(typeof O=="function"){g.callback=null,v=g.priorityLevel;var te=O(g.expirationTime<=ae);ae=n.unstable_now(),typeof te=="function"?g.callback=te:g===t(d)&&r(d),b(ae)}else r(d);g=t(d)}if(g!==null)var Ne=!0;else{var K=t(h);K!==null&&ie(R,K.startTime-ae),Ne=!1}return Ne}finally{g=null,v=re,x=!1}}var N=!1,F=null,k=-1,P=5,C=-1;function V(){return!(n.unstable_now()-C<P)}function oe(){if(F!==null){var z=n.unstable_now();C=z;var ae=!0;try{ae=F(!0,z)}finally{ae?Q():(N=!1,F=null)}}else N=!1}var Q;if(typeof L=="function")Q=function(){L(oe)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=oe,Q=function(){he.postMessage(null)}}else Q=function(){S(oe,0)};function le(z){F=z,N||(N=!0,Q())}function ie(z,ae){k=S(function(){z(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,le(U))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ae=3;break;default:ae=v}var re=v;v=ae;try{return z()}finally{v=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=v;v=z;try{return ae()}finally{v=re}},n.unstable_scheduleCallback=function(z,ae,re){var O=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,z){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=re+te,z={id:m++,callback:ae,priorityLevel:z,startTime:re,expirationTime:te,sortIndex:-1},re>O?(z.sortIndex=re,e(h,z),t(d)===null&&z===t(h)&&(E?(y(k),k=-1):E=!0,ie(R,re-O))):(z.sortIndex=te,e(d,z),M||x||(M=!0,le(U))),z},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(z){var ae=v;return function(){var re=v;v=ae;try{return z.apply(this,arguments)}finally{v=re}}}})(If)),If}var Xg;function sM(){return Xg||(Xg=1,Lf.exports=rM()),Lf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function oM(){if(jg)return On;jg=1;var n=Dh(),e=sM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(i){return d.call(g,i)?!0:d.call(m,i)?!1:h.test(i)?g[i]=!0:(m[i]=!0,!1)}function x(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,f){if(s===null||typeof s>"u"||x(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(i,s,a,f,p,_,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new E(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,L);S[s]=new E(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,L);S[s]=new E(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,L);S[s]=new E(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,a,f){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,p,f)&&(a=null),f||p===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,f=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),z=Symbol.iterator;function ae(i){return i===null||typeof i!="object"?null:(i=z&&i[z]||i["@@iterator"],typeof i=="function"?i:null)}var re=Object.assign,O;function te(i){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var Ne=!1;function K(i,s){if(!i||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(Z){var f=Z}Reflect.construct(i,[],s)}else{try{s.call()}catch(Z){f=Z}i.call(s.prototype)}else{try{throw Error()}catch(Z){f=Z}i()}}catch(Z){if(Z&&f&&typeof Z.stack=="string"){for(var p=Z.stack.split(`
`),_=f.stack.split(`
`),T=p.length-1,I=_.length-1;1<=T&&0<=I&&p[T]!==_[I];)I--;for(;1<=T&&0<=I;T--,I--)if(p[T]!==_[I]){if(T!==1||I!==1)do if(T--,I--,0>I||p[T]!==_[I]){var B=`
`+p[T].replace(" at new "," at ");return i.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",i.displayName)),B}while(1<=T&&0<=I);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?te(i):""}function ce(i){switch(i.tag){case 5:return te(i.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return i=K(i.type,!1),i;case 11:return i=K(i.type.render,!1),i;case 1:return i=K(i.type,!0),i;default:return""}}function Me(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case N:return"Portal";case P:return"Profiler";case k:return"StrictMode";case Q:return"Suspense";case ue:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case C:return(i._context.displayName||"Context")+".Provider";case oe:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case he:return s=i.displayName||null,s!==null?s:Me(i.type)||"Memo";case le:s=i._payload,i=i._init;try{return Me(i(s))}catch{}}return null}function _e(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(s);case 8:return s===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ae(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Fe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Je(i){var s=Fe(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Pt(i){i._valueTracker||(i._valueTracker=Je(i))}function gt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Fe(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function It(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function H(i,s){var a=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function Tn(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=Ae(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function pt(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function ft(i,s){pt(i,s);var a=Ae(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Ct(i,s.type,a):s.hasOwnProperty("defaultValue")&&Ct(i,s.type,Ae(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Ye(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Ct(i,s,a){(s!=="number"||It(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var je=Array.isArray;function D(i,s,a,f){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&f&&(i[a].defaultSelected=!0)}else{for(a=""+Ae(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,f&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function w(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function $(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(je(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:Ae(a)}}function pe(i,s){var a=Ae(s.value),f=Ae(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function ge(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function fe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?fe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,Oe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ct(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(i){ze.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Se[s]=Se[i]})});function Ke(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Se.hasOwnProperty(i)&&Se[i]?(""+s).trim():s+"px"}function tt(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,p=Ke(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,p):i[a]=p}}var Ve=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(i,s){if(s){if(Ve[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function st(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function X(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Re=null,se=null,de=null;function Le(i){if(i=Ko(i)){if(typeof Re!="function")throw Error(t(280));var s=i.stateNode;s&&(s=ul(s),Re(i.stateNode,i.type,s))}}function De(i){se?de?de.push(i):de=[i]:se=i}function ot(){if(se){var i=se,s=de;if(de=se=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function Nt(i,s){return i(s)}function en(){}var xt=!1;function Dn(i,s,a){if(xt)return i(s,a);xt=!0;try{return Nt(i,s,a)}finally{xt=!1,(se!==null||de!==null)&&(en(),ot())}}function wn(i,s){var a=i.stateNode;if(a===null)return null;var f=ul(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var ws=!1;if(c)try{var or={};Object.defineProperty(or,"passive",{get:function(){ws=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{ws=!1}function Li(i,s,a,f,p,_,T,I,B){var Z=Array.prototype.slice.call(arguments,3);try{s.apply(a,Z)}catch(ve){this.onError(ve)}}var Ii=!1,Hr=null,Gr=!1,ar=null,Ha={onError:function(i){Ii=!0,Hr=i}};function As(i,s,a,f,p,_,T,I,B){Ii=!1,Hr=null,Li.apply(Ha,arguments)}function Ga(i,s,a,f,p,_,T,I,B){if(As.apply(this,arguments),Ii){if(Ii){var Z=Hr;Ii=!1,Hr=null}else throw Error(t(198));Gr||(Gr=!0,ar=Z)}}function Ei(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function Wa(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Xa(i){if(Ei(i)!==i)throw Error(t(188))}function Qu(i){var s=i.alternate;if(!s){if(s=Ei(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(f=p.return,f!==null){a=f;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return Xa(p),i;if(_===f)return Xa(p),s;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=p,f=_;else{for(var T=!1,I=p.child;I;){if(I===a){T=!0,a=p,f=_;break}if(I===f){T=!0,f=p,a=_;break}I=I.sibling}if(!T){for(I=_.child;I;){if(I===a){T=!0,a=_,f=p;break}if(I===f){T=!0,f=_,a=p;break}I=I.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function ja(i){return i=Qu(i),i!==null?qa(i):null}function qa(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=qa(i);if(s!==null)return s;i=i.sibling}return null}var A=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,J=e.unstable_shouldYield,ee=e.unstable_requestPaint,G=e.unstable_now,xe=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Ue=e.unstable_UserBlockingPriority,ke=e.unstable_NormalPriority,nt=e.unstable_LowPriority,it=e.unstable_IdlePriority,qe=null,at=null;function Mt(i){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(qe,i,void 0,(i.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:$e,Bt=Math.log,yt=Math.LN2;function $e(i){return i>>>=0,i===0?32:31-(Bt(i)/yt|0)|0}var Wt=64,vt=4194304;function cn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function ai(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,p=i.suspendedLanes,_=i.pingedLanes,T=a&268435455;if(T!==0){var I=T&~p;I!==0?f=cn(I):(_&=T,_!==0&&(f=cn(_)))}else T=a&~p,T!==0?f=cn(T):_!==0&&(f=cn(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&p)===0&&(p=f&-f,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-Et(s),p=1<<a,f|=i[a],s&=~p;return f}function An(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wr(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-Et(_),I=1<<T,B=p[T];B===-1?((I&a)===0||(I&f)!==0)&&(p[T]=An(I,s)):B<=s&&(i.expiredLanes|=I),_&=~I}}function bt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Cn(){var i=Wt;return Wt<<=1,(Wt&4194240)===0&&(Wt=64),i}function pn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function qt(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Et(s),i[s]=a}function mn(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-Et(a),_=1<<p;s[p]=0,f[p]=-1,i[p]=-1,a&=~_}}function Xr(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-Et(a),p=1<<f;p&s|i[f]&s&&(i[f]|=s),a&=~p}}var mt=0;function xp(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Sp,Ju,Mp,Ep,Tp,ec=!1,Ya=[],lr=null,ur=null,cr=null,Uo=new Map,No=new Map,fr=[],Tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wp(i,s){switch(i){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Uo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(s.pointerId)}}function Fo(i,s,a,f,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[p]},s!==null&&(s=Ko(s),s!==null&&Ju(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function wx(i,s,a,f,p){switch(s){case"focusin":return lr=Fo(lr,i,s,a,f,p),!0;case"dragenter":return ur=Fo(ur,i,s,a,f,p),!0;case"mouseover":return cr=Fo(cr,i,s,a,f,p),!0;case"pointerover":var _=p.pointerId;return Uo.set(_,Fo(Uo.get(_)||null,i,s,a,f,p)),!0;case"gotpointercapture":return _=p.pointerId,No.set(_,Fo(No.get(_)||null,i,s,a,f,p)),!0}return!1}function Ap(i){var s=jr(i.target);if(s!==null){var a=Ei(s);if(a!==null){if(s=a.tag,s===13){if(s=Wa(a),s!==null){i.blockedOn=s,Tp(i.priority,function(){Mp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function $a(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=nc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);At=f,a.target.dispatchEvent(f),At=null}else return s=Ko(a),s!==null&&Ju(s),i.blockedOn=a,!1;s.shift()}return!0}function Cp(i,s,a){$a(i)&&a.delete(s)}function Ax(){ec=!1,lr!==null&&$a(lr)&&(lr=null),ur!==null&&$a(ur)&&(ur=null),cr!==null&&$a(cr)&&(cr=null),Uo.forEach(Cp),No.forEach(Cp)}function Oo(i,s){i.blockedOn===s&&(i.blockedOn=null,ec||(ec=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ax)))}function ko(i){function s(p){return Oo(p,i)}if(0<Ya.length){Oo(Ya[0],i);for(var a=1;a<Ya.length;a++){var f=Ya[a];f.blockedOn===i&&(f.blockedOn=null)}}for(lr!==null&&Oo(lr,i),ur!==null&&Oo(ur,i),cr!==null&&Oo(cr,i),Uo.forEach(s),No.forEach(s),a=0;a<fr.length;a++)f=fr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)Ap(a),a.blockedOn===null&&fr.shift()}var Cs=R.ReactCurrentBatchConfig,Ka=!0;function Cx(i,s,a,f){var p=mt,_=Cs.transition;Cs.transition=null;try{mt=1,tc(i,s,a,f)}finally{mt=p,Cs.transition=_}}function Rx(i,s,a,f){var p=mt,_=Cs.transition;Cs.transition=null;try{mt=4,tc(i,s,a,f)}finally{mt=p,Cs.transition=_}}function tc(i,s,a,f){if(Ka){var p=nc(i,s,a,f);if(p===null)yc(i,s,f,Za,a),wp(i,f);else if(wx(p,i,s,a,f))f.stopPropagation();else if(wp(i,f),s&4&&-1<Tx.indexOf(i)){for(;p!==null;){var _=Ko(p);if(_!==null&&Sp(_),_=nc(i,s,a,f),_===null&&yc(i,s,f,Za,a),_===p)break;p=_}p!==null&&f.stopPropagation()}else yc(i,s,f,null,a)}}var Za=null;function nc(i,s,a,f){if(Za=null,i=X(f),i=jr(i),i!==null)if(s=Ei(i),s===null)i=null;else if(a=s.tag,a===13){if(i=Wa(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Za=i,null}function Rp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xe()){case Pe:return 1;case Ue:return 4;case ke:case nt:return 16;case it:return 536870912;default:return 16}default:return 16}}var dr=null,ic=null,Qa=null;function Pp(){if(Qa)return Qa;var i,s=ic,a=s.length,f,p="value"in dr?dr.value:dr.textContent,_=p.length;for(i=0;i<a&&s[i]===p[i];i++);var T=a-i;for(f=1;f<=T&&s[a-f]===p[_-f];f++);return Qa=p.slice(i,1<f?1-f:void 0)}function Ja(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function el(){return!0}function bp(){return!1}function Hn(i){function s(a,f,p,_,T){this._reactName=a,this._targetInst=p,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(a=i[I],this[I]=a?a(_):_[I]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?el:bp,this.isPropagationStopped=bp,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),s}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Hn(Rs),Bo=re({},Rs,{view:0,detail:0}),Px=Hn(Bo),sc,oc,zo,tl=re({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==zo&&(zo&&i.type==="mousemove"?(sc=i.screenX-zo.screenX,oc=i.screenY-zo.screenY):oc=sc=0,zo=i),sc)},movementY:function(i){return"movementY"in i?i.movementY:oc}}),Dp=Hn(tl),bx=re({},tl,{dataTransfer:0}),Dx=Hn(bx),Lx=re({},Bo,{relatedTarget:0}),ac=Hn(Lx),Ix=re({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ux=Hn(Ix),Nx=re({},Rs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Fx=Hn(Nx),Ox=re({},Rs,{data:0}),Lp=Hn(Ox),kx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vx(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=zx[i])?!!s[i]:!1}function lc(){return Vx}var Hx=re({},Bo,{key:function(i){if(i.key){var s=kx[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Ja(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Bx[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(i){return i.type==="keypress"?Ja(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ja(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Gx=Hn(Hx),Wx=re({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=Hn(Wx),Xx=re({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),jx=Hn(Xx),qx=re({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yx=Hn(qx),$x=re({},tl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Kx=Hn($x),Zx=[9,13,27,32],uc=c&&"CompositionEvent"in window,Vo=null;c&&"documentMode"in document&&(Vo=document.documentMode);var Qx=c&&"TextEvent"in window&&!Vo,Up=c&&(!uc||Vo&&8<Vo&&11>=Vo),Np=" ",Fp=!1;function Op(i,s){switch(i){case"keyup":return Zx.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ps=!1;function Jx(i,s){switch(i){case"compositionend":return kp(s);case"keypress":return s.which!==32?null:(Fp=!0,Np);case"textInput":return i=s.data,i===Np&&Fp?null:i;default:return null}}function eS(i,s){if(Ps)return i==="compositionend"||!uc&&Op(i,s)?(i=Pp(),Qa=ic=dr=null,Ps=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Up&&s.locale!=="ko"?null:s.data;default:return null}}var tS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!tS[i.type]:s==="textarea"}function zp(i,s,a,f){De(f),s=ol(s,"onChange"),0<s.length&&(a=new rc("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var Ho=null,Go=null;function nS(i){rm(i,0)}function nl(i){var s=Us(i);if(gt(s))return i}function iS(i,s){if(i==="change")return s}var Vp=!1;if(c){var cc;if(c){var fc="oninput"in document;if(!fc){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),fc=typeof Hp.oninput=="function"}cc=fc}else cc=!1;Vp=cc&&(!document.documentMode||9<document.documentMode)}function Gp(){Ho&&(Ho.detachEvent("onpropertychange",Wp),Go=Ho=null)}function Wp(i){if(i.propertyName==="value"&&nl(Go)){var s=[];zp(s,Go,i,X(i)),Dn(nS,s)}}function rS(i,s,a){i==="focusin"?(Gp(),Ho=s,Go=a,Ho.attachEvent("onpropertychange",Wp)):i==="focusout"&&Gp()}function sS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return nl(Go)}function oS(i,s){if(i==="click")return nl(s)}function aS(i,s){if(i==="input"||i==="change")return nl(s)}function lS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var li=typeof Object.is=="function"?Object.is:lS;function Wo(i,s){if(li(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var p=a[f];if(!d.call(s,p)||!li(i[p],s[p]))return!1}return!0}function Xp(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function jp(i,s){var a=Xp(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xp(a)}}function qp(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?qp(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Yp(){for(var i=window,s=It();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=It(i.document)}return s}function dc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function uS(i){var s=Yp(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&qp(a.ownerDocument.documentElement,a)){if(f!==null&&dc(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,_=Math.min(f.start,p);f=f.end===void 0?_:Math.min(f.end,p),!i.extend&&_>f&&(p=f,f=_,_=p),p=jp(a,_);var T=jp(a,f);p&&T&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var cS=c&&"documentMode"in document&&11>=document.documentMode,bs=null,hc=null,Xo=null,pc=!1;function $p(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pc||bs==null||bs!==It(f)||(f=bs,"selectionStart"in f&&dc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Xo&&Wo(Xo,f)||(Xo=f,f=ol(hc,"onSelect"),0<f.length&&(s=new rc("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=bs)))}function il(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Ds={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},mc={},Kp={};c&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function rl(i){if(mc[i])return mc[i];if(!Ds[i])return i;var s=Ds[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in Kp)return mc[i]=s[a];return i}var Zp=rl("animationend"),Qp=rl("animationiteration"),Jp=rl("animationstart"),em=rl("transitionend"),tm=new Map,nm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(i,s){tm.set(i,s),l(s,[i])}for(var gc=0;gc<nm.length;gc++){var vc=nm[gc],fS=vc.toLowerCase(),dS=vc[0].toUpperCase()+vc.slice(1);hr(fS,"on"+dS)}hr(Zp,"onAnimationEnd"),hr(Qp,"onAnimationIteration"),hr(Jp,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(em,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function im(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,Ga(f,s,void 0,i),i.currentTarget=null}function rm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],p=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var T=f.length-1;0<=T;T--){var I=f[T],B=I.instance,Z=I.currentTarget;if(I=I.listener,B!==_&&p.isPropagationStopped())break e;im(p,I,Z),_=B}else for(T=0;T<f.length;T++){if(I=f[T],B=I.instance,Z=I.currentTarget,I=I.listener,B!==_&&p.isPropagationStopped())break e;im(p,I,Z),_=B}}}if(Gr)throw i=ar,Gr=!1,ar=null,i}function Ft(i,s){var a=s[wc];a===void 0&&(a=s[wc]=new Set);var f=i+"__bubble";a.has(f)||(sm(s,i,2,!1),a.add(f))}function _c(i,s,a){var f=0;s&&(f|=4),sm(a,i,f,s)}var sl="_reactListening"+Math.random().toString(36).slice(2);function qo(i){if(!i[sl]){i[sl]=!0,r.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||_c(a,!1,i),_c(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[sl]||(s[sl]=!0,_c("selectionchange",!1,s))}}function sm(i,s,a,f){switch(Rp(s)){case 1:var p=Cx;break;case 4:p=Rx;break;default:p=tc}a=p.bind(null,s,a,i),p=void 0,!ws||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),f?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function yc(i,s,a,f,p){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var I=f.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(T===4)for(T=f.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===p||B.nodeType===8&&B.parentNode===p))return;T=T.return}for(;I!==null;){if(T=jr(I),T===null)return;if(B=T.tag,B===5||B===6){f=_=T;continue e}I=I.parentNode}}f=f.return}Dn(function(){var Z=_,ve=X(a),ye=[];e:{var me=tm.get(i);if(me!==void 0){var Ie=rc,He=i;switch(i){case"keypress":if(Ja(a)===0)break e;case"keydown":case"keyup":Ie=Gx;break;case"focusin":He="focus",Ie=ac;break;case"focusout":He="blur",Ie=ac;break;case"beforeblur":case"afterblur":Ie=ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=jx;break;case Zp:case Qp:case Jp:Ie=Ux;break;case em:Ie=Yx;break;case"scroll":Ie=Px;break;case"wheel":Ie=Kx;break;case"copy":case"cut":case"paste":Ie=Fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Ip}var Ge=(s&4)!==0,Yt=!Ge&&i==="scroll",q=Ge?me!==null?me+"Capture":null:me;Ge=[];for(var W=Z,Y;W!==null;){Y=W;var Ee=Y.stateNode;if(Y.tag===5&&Ee!==null&&(Y=Ee,q!==null&&(Ee=wn(W,q),Ee!=null&&Ge.push(Yo(W,Ee,Y)))),Yt)break;W=W.return}0<Ge.length&&(me=new Ie(me,He,null,a,ve),ye.push({event:me,listeners:Ge}))}}if((s&7)===0){e:{if(me=i==="mouseover"||i==="pointerover",Ie=i==="mouseout"||i==="pointerout",me&&a!==At&&(He=a.relatedTarget||a.fromElement)&&(jr(He)||He[Ui]))break e;if((Ie||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(He=a.relatedTarget||a.toElement,Ie=Z,He=He?jr(He):null,He!==null&&(Yt=Ei(He),He!==Yt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ie=null,He=Z),Ie!==He)){if(Ge=Dp,Ee="onMouseLeave",q="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(Ge=Ip,Ee="onPointerLeave",q="onPointerEnter",W="pointer"),Yt=Ie==null?me:Us(Ie),Y=He==null?me:Us(He),me=new Ge(Ee,W+"leave",Ie,a,ve),me.target=Yt,me.relatedTarget=Y,Ee=null,jr(ve)===Z&&(Ge=new Ge(q,W+"enter",He,a,ve),Ge.target=Y,Ge.relatedTarget=Yt,Ee=Ge),Yt=Ee,Ie&&He)t:{for(Ge=Ie,q=He,W=0,Y=Ge;Y;Y=Ls(Y))W++;for(Y=0,Ee=q;Ee;Ee=Ls(Ee))Y++;for(;0<W-Y;)Ge=Ls(Ge),W--;for(;0<Y-W;)q=Ls(q),Y--;for(;W--;){if(Ge===q||q!==null&&Ge===q.alternate)break t;Ge=Ls(Ge),q=Ls(q)}Ge=null}else Ge=null;Ie!==null&&om(ye,me,Ie,Ge,!1),He!==null&&Yt!==null&&om(ye,Yt,He,Ge,!0)}}e:{if(me=Z?Us(Z):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var Xe=iS;else if(Bp(me))if(Vp)Xe=aS;else{Xe=sS;var Ze=rS}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=oS);if(Xe&&(Xe=Xe(i,Z))){zp(ye,Xe,a,ve);break e}Ze&&Ze(i,me,Z),i==="focusout"&&(Ze=me._wrapperState)&&Ze.controlled&&me.type==="number"&&Ct(me,"number",me.value)}switch(Ze=Z?Us(Z):window,i){case"focusin":(Bp(Ze)||Ze.contentEditable==="true")&&(bs=Ze,hc=Z,Xo=null);break;case"focusout":Xo=hc=bs=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,$p(ye,a,ve);break;case"selectionchange":if(cS)break;case"keydown":case"keyup":$p(ye,a,ve)}var Qe;if(uc)e:{switch(i){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Ps?Op(i,a)&&(rt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Up&&a.locale!=="ko"&&(Ps||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Ps&&(Qe=Pp()):(dr=ve,ic="value"in dr?dr.value:dr.textContent,Ps=!0)),Ze=ol(Z,rt),0<Ze.length&&(rt=new Lp(rt,i,null,a,ve),ye.push({event:rt,listeners:Ze}),Qe?rt.data=Qe:(Qe=kp(a),Qe!==null&&(rt.data=Qe)))),(Qe=Qx?Jx(i,a):eS(i,a))&&(Z=ol(Z,"onBeforeInput"),0<Z.length&&(ve=new Lp("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:Z}),ve.data=Qe))}rm(ye,s)})}function Yo(i,s,a){return{instance:i,listener:s,currentTarget:a}}function ol(i,s){for(var a=s+"Capture",f=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=wn(i,a),_!=null&&f.unshift(Yo(i,_,p)),_=wn(i,s),_!=null&&f.push(Yo(i,_,p))),i=i.return}return f}function Ls(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function om(i,s,a,f,p){for(var _=s._reactName,T=[];a!==null&&a!==f;){var I=a,B=I.alternate,Z=I.stateNode;if(B!==null&&B===f)break;I.tag===5&&Z!==null&&(I=Z,p?(B=wn(a,_),B!=null&&T.unshift(Yo(a,B,I))):p||(B=wn(a,_),B!=null&&T.push(Yo(a,B,I)))),a=a.return}T.length!==0&&i.push({event:s,listeners:T})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function am(i){return(typeof i=="string"?i:""+i).replace(pS,`
`).replace(mS,"")}function al(i,s,a){if(s=am(s),am(i)!==s&&a)throw Error(t(425))}function ll(){}var xc=null,Sc=null;function Mc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(i){return lm.resolve(null).then(i).catch(_S)}:Ec;function _S(i){setTimeout(function(){throw i})}function Tc(i,s){var a=s,f=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(f===0){i.removeChild(p),ko(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=p}while(a);ko(s)}function pr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function um(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Is,$o="__reactProps$"+Is,Ui="__reactContainer$"+Is,wc="__reactEvents$"+Is,yS="__reactListeners$"+Is,xS="__reactHandles$"+Is;function jr(i){var s=i[Ti];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Ui]||a[Ti]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=um(i);i!==null;){if(a=i[Ti])return a;i=um(i)}return s}i=a,a=i.parentNode}return null}function Ko(i){return i=i[Ti]||i[Ui],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Us(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function ul(i){return i[$o]||null}var Ac=[],Ns=-1;function mr(i){return{current:i}}function Ot(i){0>Ns||(i.current=Ac[Ns],Ac[Ns]=null,Ns--)}function Ut(i,s){Ns++,Ac[Ns]=i.current,i.current=s}var gr={},gn=mr(gr),Ln=mr(!1),qr=gr;function Fs(i,s){var a=i.type.contextTypes;if(!a)return gr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function In(i){return i=i.childContextTypes,i!=null}function cl(){Ot(Ln),Ot(gn)}function cm(i,s,a){if(gn.current!==gr)throw Error(t(168));Ut(gn,s),Ut(Ln,a)}function fm(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var p in f)if(!(p in s))throw Error(t(108,_e(i)||"Unknown",p));return re({},a,f)}function fl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||gr,qr=gn.current,Ut(gn,i),Ut(Ln,Ln.current),!0}function dm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=fm(i,s,qr),f.__reactInternalMemoizedMergedChildContext=i,Ot(Ln),Ot(gn),Ut(gn,i)):Ot(Ln),Ut(Ln,a)}var Ni=null,dl=!1,Cc=!1;function hm(i){Ni===null?Ni=[i]:Ni.push(i)}function SS(i){dl=!0,hm(i)}function vr(){if(!Cc&&Ni!==null){Cc=!0;var i=0,s=mt;try{var a=Ni;for(mt=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}Ni=null,dl=!1}catch(p){throw Ni!==null&&(Ni=Ni.slice(i+1)),A(Pe,vr),p}finally{mt=s,Cc=!1}}return null}var Os=[],ks=0,hl=null,pl=0,Kn=[],Zn=0,Yr=null,Fi=1,Oi="";function $r(i,s){Os[ks++]=pl,Os[ks++]=hl,hl=i,pl=s}function pm(i,s,a){Kn[Zn++]=Fi,Kn[Zn++]=Oi,Kn[Zn++]=Yr,Yr=i;var f=Fi;i=Oi;var p=32-Et(f)-1;f&=~(1<<p),a+=1;var _=32-Et(s)+p;if(30<_){var T=p-p%5;_=(f&(1<<T)-1).toString(32),f>>=T,p-=T,Fi=1<<32-Et(s)+p|a<<p|f,Oi=_+i}else Fi=1<<_|a<<p|f,Oi=i}function Rc(i){i.return!==null&&($r(i,1),pm(i,1,0))}function Pc(i){for(;i===hl;)hl=Os[--ks],Os[ks]=null,pl=Os[--ks],Os[ks]=null;for(;i===Yr;)Yr=Kn[--Zn],Kn[Zn]=null,Oi=Kn[--Zn],Kn[Zn]=null,Fi=Kn[--Zn],Kn[Zn]=null}var Gn=null,Wn=null,zt=!1,ui=null;function mm(i,s){var a=ti(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function gm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Gn=i,Wn=pr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Gn=i,Wn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Yr!==null?{id:Fi,overflow:Oi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ti(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Gn=i,Wn=null,!0):!1;default:return!1}}function bc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Dc(i){if(zt){var s=Wn;if(s){var a=s;if(!gm(i,s)){if(bc(i))throw Error(t(418));s=pr(a.nextSibling);var f=Gn;s&&gm(i,s)?mm(f,a):(i.flags=i.flags&-4097|2,zt=!1,Gn=i)}}else{if(bc(i))throw Error(t(418));i.flags=i.flags&-4097|2,zt=!1,Gn=i}}}function vm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Gn=i}function ml(i){if(i!==Gn)return!1;if(!zt)return vm(i),zt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Mc(i.type,i.memoizedProps)),s&&(s=Wn)){if(bc(i))throw _m(),Error(t(418));for(;s;)mm(i,s),s=pr(s.nextSibling)}if(vm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Wn=pr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Wn=null}}else Wn=Gn?pr(i.stateNode.nextSibling):null;return!0}function _m(){for(var i=Wn;i;)i=pr(i.nextSibling)}function Bs(){Wn=Gn=null,zt=!1}function Lc(i){ui===null?ui=[i]:ui.push(i)}var MS=R.ReactCurrentBatchConfig;function Zo(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var p=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(T){var I=p.refs;T===null?delete I[_]:I[_]=T},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function gl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function ym(i){var s=i._init;return s(i._payload)}function xm(i){function s(q,W){if(i){var Y=q.deletions;Y===null?(q.deletions=[W],q.flags|=16):Y.push(W)}}function a(q,W){if(!i)return null;for(;W!==null;)s(q,W),W=W.sibling;return null}function f(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function p(q,W){return q=wr(q,W),q.index=0,q.sibling=null,q}function _(q,W,Y){return q.index=Y,i?(Y=q.alternate,Y!==null?(Y=Y.index,Y<W?(q.flags|=2,W):Y):(q.flags|=2,W)):(q.flags|=1048576,W)}function T(q){return i&&q.alternate===null&&(q.flags|=2),q}function I(q,W,Y,Ee){return W===null||W.tag!==6?(W=Tf(Y,q.mode,Ee),W.return=q,W):(W=p(W,Y),W.return=q,W)}function B(q,W,Y,Ee){var Xe=Y.type;return Xe===F?ve(q,W,Y.props.children,Ee,Y.key):W!==null&&(W.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===le&&ym(Xe)===W.type)?(Ee=p(W,Y.props),Ee.ref=Zo(q,W,Y),Ee.return=q,Ee):(Ee=zl(Y.type,Y.key,Y.props,null,q.mode,Ee),Ee.ref=Zo(q,W,Y),Ee.return=q,Ee)}function Z(q,W,Y,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==Y.containerInfo||W.stateNode.implementation!==Y.implementation?(W=wf(Y,q.mode,Ee),W.return=q,W):(W=p(W,Y.children||[]),W.return=q,W)}function ve(q,W,Y,Ee,Xe){return W===null||W.tag!==7?(W=is(Y,q.mode,Ee,Xe),W.return=q,W):(W=p(W,Y),W.return=q,W)}function ye(q,W,Y){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Tf(""+W,q.mode,Y),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case U:return Y=zl(W.type,W.key,W.props,null,q.mode,Y),Y.ref=Zo(q,null,W),Y.return=q,Y;case N:return W=wf(W,q.mode,Y),W.return=q,W;case le:var Ee=W._init;return ye(q,Ee(W._payload),Y)}if(je(W)||ae(W))return W=is(W,q.mode,Y,null),W.return=q,W;gl(q,W)}return null}function me(q,W,Y,Ee){var Xe=W!==null?W.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Xe!==null?null:I(q,W,""+Y,Ee);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case U:return Y.key===Xe?B(q,W,Y,Ee):null;case N:return Y.key===Xe?Z(q,W,Y,Ee):null;case le:return Xe=Y._init,me(q,W,Xe(Y._payload),Ee)}if(je(Y)||ae(Y))return Xe!==null?null:ve(q,W,Y,Ee,null);gl(q,Y)}return null}function Ie(q,W,Y,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(Y)||null,I(W,q,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case U:return q=q.get(Ee.key===null?Y:Ee.key)||null,B(W,q,Ee,Xe);case N:return q=q.get(Ee.key===null?Y:Ee.key)||null,Z(W,q,Ee,Xe);case le:var Ze=Ee._init;return Ie(q,W,Y,Ze(Ee._payload),Xe)}if(je(Ee)||ae(Ee))return q=q.get(Y)||null,ve(W,q,Ee,Xe,null);gl(W,Ee)}return null}function He(q,W,Y,Ee){for(var Xe=null,Ze=null,Qe=W,rt=W=0,ln=null;Qe!==null&&rt<Y.length;rt++){Qe.index>rt?(ln=Qe,Qe=null):ln=Qe.sibling;var Tt=me(q,Qe,Y[rt],Ee);if(Tt===null){Qe===null&&(Qe=ln);break}i&&Qe&&Tt.alternate===null&&s(q,Qe),W=_(Tt,W,rt),Ze===null?Xe=Tt:Ze.sibling=Tt,Ze=Tt,Qe=ln}if(rt===Y.length)return a(q,Qe),zt&&$r(q,rt),Xe;if(Qe===null){for(;rt<Y.length;rt++)Qe=ye(q,Y[rt],Ee),Qe!==null&&(W=_(Qe,W,rt),Ze===null?Xe=Qe:Ze.sibling=Qe,Ze=Qe);return zt&&$r(q,rt),Xe}for(Qe=f(q,Qe);rt<Y.length;rt++)ln=Ie(Qe,q,rt,Y[rt],Ee),ln!==null&&(i&&ln.alternate!==null&&Qe.delete(ln.key===null?rt:ln.key),W=_(ln,W,rt),Ze===null?Xe=ln:Ze.sibling=ln,Ze=ln);return i&&Qe.forEach(function(Ar){return s(q,Ar)}),zt&&$r(q,rt),Xe}function Ge(q,W,Y,Ee){var Xe=ae(Y);if(typeof Xe!="function")throw Error(t(150));if(Y=Xe.call(Y),Y==null)throw Error(t(151));for(var Ze=Xe=null,Qe=W,rt=W=0,ln=null,Tt=Y.next();Qe!==null&&!Tt.done;rt++,Tt=Y.next()){Qe.index>rt?(ln=Qe,Qe=null):ln=Qe.sibling;var Ar=me(q,Qe,Tt.value,Ee);if(Ar===null){Qe===null&&(Qe=ln);break}i&&Qe&&Ar.alternate===null&&s(q,Qe),W=_(Ar,W,rt),Ze===null?Xe=Ar:Ze.sibling=Ar,Ze=Ar,Qe=ln}if(Tt.done)return a(q,Qe),zt&&$r(q,rt),Xe;if(Qe===null){for(;!Tt.done;rt++,Tt=Y.next())Tt=ye(q,Tt.value,Ee),Tt!==null&&(W=_(Tt,W,rt),Ze===null?Xe=Tt:Ze.sibling=Tt,Ze=Tt);return zt&&$r(q,rt),Xe}for(Qe=f(q,Qe);!Tt.done;rt++,Tt=Y.next())Tt=Ie(Qe,q,rt,Tt.value,Ee),Tt!==null&&(i&&Tt.alternate!==null&&Qe.delete(Tt.key===null?rt:Tt.key),W=_(Tt,W,rt),Ze===null?Xe=Tt:Ze.sibling=Tt,Ze=Tt);return i&&Qe.forEach(function(tM){return s(q,tM)}),zt&&$r(q,rt),Xe}function Yt(q,W,Y,Ee){if(typeof Y=="object"&&Y!==null&&Y.type===F&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case U:e:{for(var Xe=Y.key,Ze=W;Ze!==null;){if(Ze.key===Xe){if(Xe=Y.type,Xe===F){if(Ze.tag===7){a(q,Ze.sibling),W=p(Ze,Y.props.children),W.return=q,q=W;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===le&&ym(Xe)===Ze.type){a(q,Ze.sibling),W=p(Ze,Y.props),W.ref=Zo(q,Ze,Y),W.return=q,q=W;break e}a(q,Ze);break}else s(q,Ze);Ze=Ze.sibling}Y.type===F?(W=is(Y.props.children,q.mode,Ee,Y.key),W.return=q,q=W):(Ee=zl(Y.type,Y.key,Y.props,null,q.mode,Ee),Ee.ref=Zo(q,W,Y),Ee.return=q,q=Ee)}return T(q);case N:e:{for(Ze=Y.key;W!==null;){if(W.key===Ze)if(W.tag===4&&W.stateNode.containerInfo===Y.containerInfo&&W.stateNode.implementation===Y.implementation){a(q,W.sibling),W=p(W,Y.children||[]),W.return=q,q=W;break e}else{a(q,W);break}else s(q,W);W=W.sibling}W=wf(Y,q.mode,Ee),W.return=q,q=W}return T(q);case le:return Ze=Y._init,Yt(q,W,Ze(Y._payload),Ee)}if(je(Y))return He(q,W,Y,Ee);if(ae(Y))return Ge(q,W,Y,Ee);gl(q,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,W!==null&&W.tag===6?(a(q,W.sibling),W=p(W,Y),W.return=q,q=W):(a(q,W),W=Tf(Y,q.mode,Ee),W.return=q,q=W),T(q)):a(q,W)}return Yt}var zs=xm(!0),Sm=xm(!1),vl=mr(null),_l=null,Vs=null,Ic=null;function Uc(){Ic=Vs=_l=null}function Nc(i){var s=vl.current;Ot(vl),i._currentValue=s}function Fc(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function Hs(i,s){_l=i,Ic=Vs=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Un=!0),i.firstContext=null)}function Qn(i){var s=i._currentValue;if(Ic!==i)if(i={context:i,memoizedValue:s,next:null},Vs===null){if(_l===null)throw Error(t(308));Vs=i,_l.dependencies={lanes:0,firstContext:i}}else Vs=Vs.next=i;return s}var Kr=null;function Oc(i){Kr===null?Kr=[i]:Kr.push(i)}function Mm(i,s,a,f){var p=s.interleaved;return p===null?(a.next=a,Oc(s)):(a.next=p.next,p.next=a),s.interleaved=a,ki(i,f)}function ki(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var _r=!1;function kc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Em(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Bi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function yr(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(St&2)!==0){var p=f.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),f.pending=s,ki(i,a)}return p=f.interleaved,p===null?(s.next=s,Oc(f)):(s.next=p.next,p.next=s),f.interleaved=s,ki(i,a)}function yl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,Xr(i,a)}}function Tm(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?p=_=s:_=_.next=s}else p=_=s;a={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function xl(i,s,a,f){var p=i.updateQueue;_r=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var B=I,Z=B.next;B.next=null,T===null?_=Z:T.next=Z,T=B;var ve=i.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==T&&(I===null?ve.firstBaseUpdate=Z:I.next=Z,ve.lastBaseUpdate=B))}if(_!==null){var ye=p.baseState;T=0,ve=Z=B=null,I=_;do{var me=I.lane,Ie=I.eventTime;if((f&me)===me){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=i,Ge=I;switch(me=s,Ie=a,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){ye=He.call(Ie,ye,me);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,me=typeof He=="function"?He.call(Ie,ye,me):He,me==null)break e;ye=re({},ye,me);break e;case 2:_r=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,me=p.effects,me===null?p.effects=[I]:me.push(I))}else Ie={eventTime:Ie,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(Z=ve=Ie,B=ye):ve=ve.next=Ie,T|=me;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;me=I,I=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);if(ve===null&&(B=ye),p.baseState=B,p.firstBaseUpdate=Z,p.lastBaseUpdate=ve,s=p.shared.interleaved,s!==null){p=s;do T|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);Jr|=T,i.lanes=T,i.memoizedState=ye}}function wm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],p=f.callback;if(p!==null){if(f.callback=null,f=a,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var Qo={},wi=mr(Qo),Jo=mr(Qo),ea=mr(Qo);function Zr(i){if(i===Qo)throw Error(t(174));return i}function Bc(i,s){switch(Ut(ea,s),Ut(Jo,i),Ut(wi,Qo),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:We(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=We(s,i)}Ot(wi),Ut(wi,s)}function Gs(){Ot(wi),Ot(Jo),Ot(ea)}function Am(i){Zr(ea.current);var s=Zr(wi.current),a=We(s,i.type);s!==a&&(Ut(Jo,i),Ut(wi,a))}function zc(i){Jo.current===i&&(Ot(wi),Ot(Jo))}var Vt=mr(0);function Sl(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Vc=[];function Hc(){for(var i=0;i<Vc.length;i++)Vc[i]._workInProgressVersionPrimary=null;Vc.length=0}var Ml=R.ReactCurrentDispatcher,Gc=R.ReactCurrentBatchConfig,Qr=0,Ht=null,tn=null,on=null,El=!1,ta=!1,na=0,ES=0;function vn(){throw Error(t(321))}function Wc(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!li(i[a],s[a]))return!1;return!0}function Xc(i,s,a,f,p,_){if(Qr=_,Ht=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ml.current=i===null||i.memoizedState===null?CS:RS,i=a(f,p),ta){_=0;do{if(ta=!1,na=0,25<=_)throw Error(t(301));_+=1,on=tn=null,s.updateQueue=null,Ml.current=PS,i=a(f,p)}while(ta)}if(Ml.current=Al,s=tn!==null&&tn.next!==null,Qr=0,on=tn=Ht=null,El=!1,s)throw Error(t(300));return i}function jc(){var i=na!==0;return na=0,i}function Ai(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Ht.memoizedState=on=i:on=on.next=i,on}function Jn(){if(tn===null){var i=Ht.alternate;i=i!==null?i.memoizedState:null}else i=tn.next;var s=on===null?Ht.memoizedState:on.next;if(s!==null)on=s,tn=i;else{if(i===null)throw Error(t(310));tn=i,i={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},on===null?Ht.memoizedState=on=i:on=on.next=i}return on}function ia(i,s){return typeof s=="function"?s(i):s}function qc(i){var s=Jn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=tn,p=f.baseQueue,_=a.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}f.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,f=f.baseState;var I=T=null,B=null,Z=_;do{var ve=Z.lane;if((Qr&ve)===ve)B!==null&&(B=B.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),f=Z.hasEagerState?Z.eagerState:i(f,Z.action);else{var ye={lane:ve,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};B===null?(I=B=ye,T=f):B=B.next=ye,Ht.lanes|=ve,Jr|=ve}Z=Z.next}while(Z!==null&&Z!==_);B===null?T=f:B.next=I,li(f,s.memoizedState)||(Un=!0),s.memoizedState=f,s.baseState=T,s.baseQueue=B,a.lastRenderedState=f}if(i=a.interleaved,i!==null){p=i;do _=p.lane,Ht.lanes|=_,Jr|=_,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Yc(i){var s=Jn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,p=a.pending,_=s.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do _=i(_,T.action),T=T.next;while(T!==p);li(_,s.memoizedState)||(Un=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,f]}function Cm(){}function Rm(i,s){var a=Ht,f=Jn(),p=s(),_=!li(f.memoizedState,p);if(_&&(f.memoizedState=p,Un=!0),f=f.queue,$c(Dm.bind(null,a,f,i),[i]),f.getSnapshot!==s||_||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,ra(9,bm.bind(null,a,f,p,s),void 0,null),an===null)throw Error(t(349));(Qr&30)!==0||Pm(a,s,p)}return p}function Pm(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function bm(i,s,a,f){s.value=a,s.getSnapshot=f,Lm(s)&&Im(i)}function Dm(i,s,a){return a(function(){Lm(s)&&Im(i)})}function Lm(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!li(i,a)}catch{return!0}}function Im(i){var s=ki(i,1);s!==null&&hi(s,i,1,-1)}function Um(i){var s=Ai();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:i},s.queue=i,i=i.dispatch=AS.bind(null,Ht,i),[s.memoizedState,i]}function ra(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function Nm(){return Jn().memoizedState}function Tl(i,s,a,f){var p=Ai();Ht.flags|=i,p.memoizedState=ra(1|s,a,void 0,f===void 0?null:f)}function wl(i,s,a,f){var p=Jn();f=f===void 0?null:f;var _=void 0;if(tn!==null){var T=tn.memoizedState;if(_=T.destroy,f!==null&&Wc(f,T.deps)){p.memoizedState=ra(s,a,_,f);return}}Ht.flags|=i,p.memoizedState=ra(1|s,a,_,f)}function Fm(i,s){return Tl(8390656,8,i,s)}function $c(i,s){return wl(2048,8,i,s)}function Om(i,s){return wl(4,2,i,s)}function km(i,s){return wl(4,4,i,s)}function Bm(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function zm(i,s,a){return a=a!=null?a.concat([i]):null,wl(4,4,Bm.bind(null,s,i),a)}function Kc(){}function Vm(i,s){var a=Jn();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Wc(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function Hm(i,s){var a=Jn();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Wc(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function Gm(i,s,a){return(Qr&21)===0?(i.baseState&&(i.baseState=!1,Un=!0),i.memoizedState=a):(li(a,s)||(a=Cn(),Ht.lanes|=a,Jr|=a,i.baseState=!0),s)}function TS(i,s){var a=mt;mt=a!==0&&4>a?a:4,i(!0);var f=Gc.transition;Gc.transition={};try{i(!1),s()}finally{mt=a,Gc.transition=f}}function Wm(){return Jn().memoizedState}function wS(i,s,a){var f=Er(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},Xm(i))jm(s,a);else if(a=Mm(i,s,a,f),a!==null){var p=Pn();hi(a,i,f,p),qm(a,s,f)}}function AS(i,s,a){var f=Er(i),p={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xm(i))jm(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var T=s.lastRenderedState,I=_(T,a);if(p.hasEagerState=!0,p.eagerState=I,li(I,T)){var B=s.interleaved;B===null?(p.next=p,Oc(s)):(p.next=B.next,B.next=p),s.interleaved=p;return}}catch{}finally{}a=Mm(i,s,p,f),a!==null&&(p=Pn(),hi(a,i,f,p),qm(a,s,f))}}function Xm(i){var s=i.alternate;return i===Ht||s!==null&&s===Ht}function jm(i,s){ta=El=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function qm(i,s,a){if((a&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,Xr(i,a)}}var Al={readContext:Qn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},CS={readContext:Qn,useCallback:function(i,s){return Ai().memoizedState=[i,s===void 0?null:s],i},useContext:Qn,useEffect:Fm,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Tl(4194308,4,Bm.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Tl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Tl(4,2,i,s)},useMemo:function(i,s){var a=Ai();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Ai();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=wS.bind(null,Ht,i),[f.memoizedState,i]},useRef:function(i){var s=Ai();return i={current:i},s.memoizedState=i},useState:Um,useDebugValue:Kc,useDeferredValue:function(i){return Ai().memoizedState=i},useTransition:function(){var i=Um(!1),s=i[0];return i=TS.bind(null,i[1]),Ai().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Ht,p=Ai();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),an===null)throw Error(t(349));(Qr&30)!==0||Pm(f,s,a)}p.memoizedState=a;var _={value:a,getSnapshot:s};return p.queue=_,Fm(Dm.bind(null,f,_,i),[i]),f.flags|=2048,ra(9,bm.bind(null,f,_,a,s),void 0,null),a},useId:function(){var i=Ai(),s=an.identifierPrefix;if(zt){var a=Oi,f=Fi;a=(f&~(1<<32-Et(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=na++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=ES++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},RS={readContext:Qn,useCallback:Vm,useContext:Qn,useEffect:$c,useImperativeHandle:zm,useInsertionEffect:Om,useLayoutEffect:km,useMemo:Hm,useReducer:qc,useRef:Nm,useState:function(){return qc(ia)},useDebugValue:Kc,useDeferredValue:function(i){var s=Jn();return Gm(s,tn.memoizedState,i)},useTransition:function(){var i=qc(ia)[0],s=Jn().memoizedState;return[i,s]},useMutableSource:Cm,useSyncExternalStore:Rm,useId:Wm,unstable_isNewReconciler:!1},PS={readContext:Qn,useCallback:Vm,useContext:Qn,useEffect:$c,useImperativeHandle:zm,useInsertionEffect:Om,useLayoutEffect:km,useMemo:Hm,useReducer:Yc,useRef:Nm,useState:function(){return Yc(ia)},useDebugValue:Kc,useDeferredValue:function(i){var s=Jn();return tn===null?s.memoizedState=i:Gm(s,tn.memoizedState,i)},useTransition:function(){var i=Yc(ia)[0],s=Jn().memoizedState;return[i,s]},useMutableSource:Cm,useSyncExternalStore:Rm,useId:Wm,unstable_isNewReconciler:!1};function ci(i,s){if(i&&i.defaultProps){s=re({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function Zc(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:re({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Cl={isMounted:function(i){return(i=i._reactInternals)?Ei(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=Pn(),p=Er(i),_=Bi(f,p);_.payload=s,a!=null&&(_.callback=a),s=yr(i,_,p),s!==null&&(hi(s,i,p,f),yl(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=Pn(),p=Er(i),_=Bi(f,p);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=yr(i,_,p),s!==null&&(hi(s,i,p,f),yl(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Pn(),f=Er(i),p=Bi(a,f);p.tag=2,s!=null&&(p.callback=s),s=yr(i,p,f),s!==null&&(hi(s,i,f,a),yl(s,i,f))}};function Ym(i,s,a,f,p,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,T):s.prototype&&s.prototype.isPureReactComponent?!Wo(a,f)||!Wo(p,_):!0}function $m(i,s,a){var f=!1,p=gr,_=s.contextType;return typeof _=="object"&&_!==null?_=Qn(_):(p=In(s)?qr:gn.current,f=s.contextTypes,_=(f=f!=null)?Fs(i,p):gr),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Cl,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function Km(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Cl.enqueueReplaceState(s,s.state,null)}function Qc(i,s,a,f){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},kc(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=Qn(_):(_=In(s)?qr:gn.current,p.context=Fs(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Zc(i,s,_,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Cl.enqueueReplaceState(p,p.state,null),xl(i,a,p,f),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ws(i,s){try{var a="",f=s;do a+=ce(f),f=f.return;while(f);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Jc(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function ef(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var bS=typeof WeakMap=="function"?WeakMap:Map;function Zm(i,s,a){a=Bi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){Ul||(Ul=!0,gf=f),ef(i,s)},a}function Qm(i,s,a){a=Bi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var p=s.value;a.payload=function(){return f(p)},a.callback=function(){ef(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){ef(i,s),typeof f!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),a}function Jm(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new bS;var p=new Set;f.set(s,p)}else p=f.get(s),p===void 0&&(p=new Set,f.set(s,p));p.has(a)||(p.add(a),i=WS.bind(null,i,s,a),s.then(i,i))}function eg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function tg(i,s,a,f,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Bi(-1,1),s.tag=2,yr(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var DS=R.ReactCurrentOwner,Un=!1;function Rn(i,s,a,f){s.child=i===null?Sm(s,null,a,f):zs(s,i.child,a,f)}function ng(i,s,a,f,p){a=a.render;var _=s.ref;return Hs(s,p),f=Xc(i,s,a,f,_,p),a=jc(),i!==null&&!Un?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,zi(i,s,p)):(zt&&a&&Rc(s),s.flags|=1,Rn(i,s,f,p),s.child)}function ig(i,s,a,f,p){if(i===null){var _=a.type;return typeof _=="function"&&!Ef(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,rg(i,s,_,f,p)):(i=zl(a.type,null,f,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:Wo,a(T,f)&&i.ref===s.ref)return zi(i,s,p)}return s.flags|=1,i=wr(_,f),i.ref=s.ref,i.return=s,s.child=i}function rg(i,s,a,f,p){if(i!==null){var _=i.memoizedProps;if(Wo(_,f)&&i.ref===s.ref)if(Un=!1,s.pendingProps=f=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Un=!0);else return s.lanes=i.lanes,zi(i,s,p)}return tf(i,s,a,f,p)}function sg(i,s,a){var f=s.pendingProps,p=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(js,Xn),Xn|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ut(js,Xn),Xn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Ut(js,Xn),Xn|=f}else _!==null?(f=_.baseLanes|a,s.memoizedState=null):f=a,Ut(js,Xn),Xn|=f;return Rn(i,s,p,a),s.child}function og(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function tf(i,s,a,f,p){var _=In(a)?qr:gn.current;return _=Fs(s,_),Hs(s,p),a=Xc(i,s,a,f,_,p),f=jc(),i!==null&&!Un?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,zi(i,s,p)):(zt&&f&&Rc(s),s.flags|=1,Rn(i,s,a,p),s.child)}function ag(i,s,a,f,p){if(In(a)){var _=!0;fl(s)}else _=!1;if(Hs(s,p),s.stateNode===null)Pl(i,s),$m(s,a,f),Qc(s,a,f,p),f=!0;else if(i===null){var T=s.stateNode,I=s.memoizedProps;T.props=I;var B=T.context,Z=a.contextType;typeof Z=="object"&&Z!==null?Z=Qn(Z):(Z=In(a)?qr:gn.current,Z=Fs(s,Z));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==f||B!==Z)&&Km(s,T,f,Z),_r=!1;var me=s.memoizedState;T.state=me,xl(s,f,T,p),B=s.memoizedState,I!==f||me!==B||Ln.current||_r?(typeof ve=="function"&&(Zc(s,a,ve,f),B=s.memoizedState),(I=_r||Ym(s,a,I,f,me,B,Z))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=B),T.props=f,T.state=B,T.context=Z,f=I):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{T=s.stateNode,Em(i,s),I=s.memoizedProps,Z=s.type===s.elementType?I:ci(s.type,I),T.props=Z,ye=s.pendingProps,me=T.context,B=a.contextType,typeof B=="object"&&B!==null?B=Qn(B):(B=In(a)?qr:gn.current,B=Fs(s,B));var Ie=a.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==ye||me!==B)&&Km(s,T,f,B),_r=!1,me=s.memoizedState,T.state=me,xl(s,f,T,p);var He=s.memoizedState;I!==ye||me!==He||Ln.current||_r?(typeof Ie=="function"&&(Zc(s,a,Ie,f),He=s.memoizedState),(Z=_r||Ym(s,a,Z,f,me,He,B)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,He,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,He,B)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=He),T.props=f,T.state=He,T.context=B,f=Z):(typeof T.componentDidUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=1024),f=!1)}return nf(i,s,a,f,_,p)}function nf(i,s,a,f,p,_){og(i,s);var T=(s.flags&128)!==0;if(!f&&!T)return p&&dm(s,a,!1),zi(i,s,_);f=s.stateNode,DS.current=s;var I=T&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&T?(s.child=zs(s,i.child,null,_),s.child=zs(s,null,I,_)):Rn(i,s,I,_),s.memoizedState=f.state,p&&dm(s,a,!0),s.child}function lg(i){var s=i.stateNode;s.pendingContext?cm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&cm(i,s.context,!1),Bc(i,s.containerInfo)}function ug(i,s,a,f,p){return Bs(),Lc(p),s.flags|=256,Rn(i,s,a,f),s.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function sf(i){return{baseLanes:i,cachePool:null,transitions:null}}function cg(i,s,a){var f=s.pendingProps,p=Vt.current,_=!1,T=(s.flags&128)!==0,I;if((I=T)||(I=i!==null&&i.memoizedState===null?!1:(p&2)!==0),I?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Ut(Vt,p&1),i===null)return Dc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(T=f.children,i=f.fallback,_?(f=s.mode,_=s.child,T={mode:"hidden",children:T},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Vl(T,f,0,null),i=is(i,f,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=sf(a),s.memoizedState=rf,i):of(s,T));if(p=i.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return LS(i,s,T,f,I,p,a);if(_){_=f.fallback,T=s.mode,p=i.child,I=p.sibling;var B={mode:"hidden",children:f.children};return(T&1)===0&&s.child!==p?(f=s.child,f.childLanes=0,f.pendingProps=B,s.deletions=null):(f=wr(p,B),f.subtreeFlags=p.subtreeFlags&14680064),I!==null?_=wr(I,_):(_=is(_,T,a,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,T=i.child.memoizedState,T=T===null?sf(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~a,s.memoizedState=rf,f}return _=i.child,i=_.sibling,f=wr(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function of(i,s){return s=Vl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Rl(i,s,a,f){return f!==null&&Lc(f),zs(s,i.child,null,a),i=of(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function LS(i,s,a,f,p,_,T){if(a)return s.flags&256?(s.flags&=-257,f=Jc(Error(t(422))),Rl(i,s,T,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,p=s.mode,f=Vl({mode:"visible",children:f.children},p,0,null),_=is(_,p,T,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&zs(s,i.child,null,T),s.child.memoizedState=sf(T),s.memoizedState=rf,_);if((s.mode&1)===0)return Rl(i,s,T,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var I=f.dgst;return f=I,_=Error(t(419)),f=Jc(_,f,void 0),Rl(i,s,T,f)}if(I=(T&i.childLanes)!==0,Un||I){if(f=an,f!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(f.suspendedLanes|T))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ki(i,p),hi(f,i,p,-1))}return Mf(),f=Jc(Error(t(421))),Rl(i,s,T,f)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=XS.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,Wn=pr(p.nextSibling),Gn=s,zt=!0,ui=null,i!==null&&(Kn[Zn++]=Fi,Kn[Zn++]=Oi,Kn[Zn++]=Yr,Fi=i.id,Oi=i.overflow,Yr=s),s=of(s,f.children),s.flags|=4096,s)}function fg(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),Fc(i.return,s,a)}function af(i,s,a,f,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=p)}function dg(i,s,a){var f=s.pendingProps,p=f.revealOrder,_=f.tail;if(Rn(i,s,f.children,a),f=Vt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&fg(i,a,s);else if(i.tag===19)fg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Ut(Vt,f),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&Sl(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),af(s,!1,p,a,_);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Sl(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}af(s,!0,a,null,_);break;case"together":af(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Pl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function zi(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),Jr|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=wr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=wr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function IS(i,s,a){switch(s.tag){case 3:lg(s),Bs();break;case 5:Am(s);break;case 1:In(s.type)&&fl(s);break;case 4:Bc(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,p=s.memoizedProps.value;Ut(vl,f._currentValue),f._currentValue=p;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Ut(Vt,Vt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?cg(i,s,a):(Ut(Vt,Vt.current&1),i=zi(i,s,a),i!==null?i.sibling:null);Ut(Vt,Vt.current&1);break;case 19:if(f=(a&s.childLanes)!==0,(i.flags&128)!==0){if(f)return dg(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ut(Vt,Vt.current),f)break;return null;case 22:case 23:return s.lanes=0,sg(i,s,a)}return zi(i,s,a)}var hg,lf,pg,mg;hg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},lf=function(){},pg=function(i,s,a,f){var p=i.memoizedProps;if(p!==f){i=s.stateNode,Zr(wi.current);var _=null;switch(a){case"input":p=H(i,p),f=H(i,f),_=[];break;case"select":p=re({},p,{value:void 0}),f=re({},f,{value:void 0}),_=[];break;case"textarea":p=w(i,p),f=w(i,f),_=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=ll)}dt(a,f);var T;a=null;for(Z in p)if(!f.hasOwnProperty(Z)&&p.hasOwnProperty(Z)&&p[Z]!=null)if(Z==="style"){var I=p[Z];for(T in I)I.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(o.hasOwnProperty(Z)?_||(_=[]):(_=_||[]).push(Z,null));for(Z in f){var B=f[Z];if(I=p!=null?p[Z]:void 0,f.hasOwnProperty(Z)&&B!==I&&(B!=null||I!=null))if(Z==="style")if(I){for(T in I)!I.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in B)B.hasOwnProperty(T)&&I[T]!==B[T]&&(a||(a={}),a[T]=B[T])}else a||(_||(_=[]),_.push(Z,a)),a=B;else Z==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(_=_||[]).push(Z,B)):Z==="children"?typeof B!="string"&&typeof B!="number"||(_=_||[]).push(Z,""+B):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(o.hasOwnProperty(Z)?(B!=null&&Z==="onScroll"&&Ft("scroll",i),_||I===B||(_=[])):(_=_||[]).push(Z,B))}a&&(_=_||[]).push("style",a);var Z=_;(s.updateQueue=Z)&&(s.flags|=4)}},mg=function(i,s,a,f){a!==f&&(s.flags|=4)};function sa(i,s){if(!zt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function _n(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function US(i,s,a){var f=s.pendingProps;switch(Pc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(s),null;case 1:return In(s.type)&&cl(),_n(s),null;case 3:return f=s.stateNode,Gs(),Ot(Ln),Ot(gn),Hc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(ml(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,ui!==null&&(yf(ui),ui=null))),lf(i,s),_n(s),null;case 5:zc(s);var p=Zr(ea.current);if(a=s.type,i!==null&&s.stateNode!=null)pg(i,s,a,f,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return _n(s),null}if(i=Zr(wi.current),ml(s)){f=s.stateNode,a=s.type;var _=s.memoizedProps;switch(f[Ti]=s,f[$o]=_,i=(s.mode&1)!==0,a){case"dialog":Ft("cancel",f),Ft("close",f);break;case"iframe":case"object":case"embed":Ft("load",f);break;case"video":case"audio":for(p=0;p<jo.length;p++)Ft(jo[p],f);break;case"source":Ft("error",f);break;case"img":case"image":case"link":Ft("error",f),Ft("load",f);break;case"details":Ft("toggle",f);break;case"input":Tn(f,_),Ft("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Ft("invalid",f);break;case"textarea":$(f,_),Ft("invalid",f)}dt(a,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var I=_[T];T==="children"?typeof I=="string"?f.textContent!==I&&(_.suppressHydrationWarning!==!0&&al(f.textContent,I,i),p=["children",I]):typeof I=="number"&&f.textContent!==""+I&&(_.suppressHydrationWarning!==!0&&al(f.textContent,I,i),p=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Ft("scroll",f)}switch(a){case"input":Pt(f),Ye(f,_,!0);break;case"textarea":Pt(f),ge(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=ll)}f=p,s.updateQueue=f,f!==null&&(s.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=fe(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=T.createElement(a,{is:f.is}):(i=T.createElement(a),a==="select"&&(T=i,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):i=T.createElementNS(i,a),i[Ti]=s,i[$o]=f,hg(i,s,!1,!1),s.stateNode=i;e:{switch(T=st(a,f),a){case"dialog":Ft("cancel",i),Ft("close",i),p=f;break;case"iframe":case"object":case"embed":Ft("load",i),p=f;break;case"video":case"audio":for(p=0;p<jo.length;p++)Ft(jo[p],i);p=f;break;case"source":Ft("error",i),p=f;break;case"img":case"image":case"link":Ft("error",i),Ft("load",i),p=f;break;case"details":Ft("toggle",i),p=f;break;case"input":Tn(i,f),p=H(i,f),Ft("invalid",i);break;case"option":p=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},p=re({},f,{value:void 0}),Ft("invalid",i);break;case"textarea":$(i,f),p=w(i,f),Ft("invalid",i);break;default:p=f}dt(a,p),I=p;for(_ in I)if(I.hasOwnProperty(_)){var B=I[_];_==="style"?tt(i,B):_==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Oe(i,B)):_==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&ct(i,B):typeof B=="number"&&ct(i,""+B):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?B!=null&&_==="onScroll"&&Ft("scroll",i):B!=null&&b(i,_,B,T))}switch(a){case"input":Pt(i),Ye(i,f,!1);break;case"textarea":Pt(i),ge(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Ae(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?D(i,!!f.multiple,_,!1):f.defaultValue!=null&&D(i,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=ll)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return _n(s),null;case 6:if(i&&s.stateNode!=null)mg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=Zr(ea.current),Zr(wi.current),ml(s)){if(f=s.stateNode,a=s.memoizedProps,f[Ti]=s,(_=f.nodeValue!==a)&&(i=Gn,i!==null))switch(i.tag){case 3:al(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&al(f.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[Ti]=s,s.stateNode=f}return _n(s),null;case 13:if(Ot(Vt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(zt&&Wn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)_m(),Bs(),s.flags|=98560,_=!1;else if(_=ml(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ti]=s}else Bs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;_n(s),_=!1}else ui!==null&&(yf(ui),ui=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Vt.current&1)!==0?nn===0&&(nn=3):Mf())),s.updateQueue!==null&&(s.flags|=4),_n(s),null);case 4:return Gs(),lf(i,s),i===null&&qo(s.stateNode.containerInfo),_n(s),null;case 10:return Nc(s.type._context),_n(s),null;case 17:return In(s.type)&&cl(),_n(s),null;case 19:if(Ot(Vt),_=s.memoizedState,_===null)return _n(s),null;if(f=(s.flags&128)!==0,T=_.rendering,T===null)if(f)sa(_,!1);else{if(nn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(T=Sl(i),T!==null){for(s.flags|=128,sa(_,!1),f=T.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)_=a,i=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Ut(Vt,Vt.current&1|2),s.child}i=i.sibling}_.tail!==null&&G()>qs&&(s.flags|=128,f=!0,sa(_,!1),s.lanes=4194304)}else{if(!f)if(i=Sl(T),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),sa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!zt)return _n(s),null}else 2*G()-_.renderingStartTime>qs&&a!==1073741824&&(s.flags|=128,f=!0,sa(_,!1),s.lanes=4194304);_.isBackwards?(T.sibling=s.child,s.child=T):(a=_.last,a!==null?a.sibling=T:s.child=T,_.last=T)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=G(),s.sibling=null,a=Vt.current,Ut(Vt,f?a&1|2:a&1),s):(_n(s),null);case 22:case 23:return Sf(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Xn&1073741824)!==0&&(_n(s),s.subtreeFlags&6&&(s.flags|=8192)):_n(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function NS(i,s){switch(Pc(s),s.tag){case 1:return In(s.type)&&cl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Gs(),Ot(Ln),Ot(gn),Hc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return zc(s),null;case 13:if(Ot(Vt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Bs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ot(Vt),null;case 4:return Gs(),null;case 10:return Nc(s.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var bl=!1,yn=!1,FS=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Xs(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Xt(i,s,f)}else a.current=null}function uf(i,s,a){try{a()}catch(f){Xt(i,s,f)}}var gg=!1;function OS(i,s){if(xc=Ka,i=Yp(),dc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var p=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var T=0,I=-1,B=-1,Z=0,ve=0,ye=i,me=null;t:for(;;){for(var Ie;ye!==a||p!==0&&ye.nodeType!==3||(I=T+p),ye!==_||f!==0&&ye.nodeType!==3||(B=T+f),ye.nodeType===3&&(T+=ye.nodeValue.length),(Ie=ye.firstChild)!==null;)me=ye,ye=Ie;for(;;){if(ye===i)break t;if(me===a&&++Z===p&&(I=T),me===_&&++ve===f&&(B=T),(Ie=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Ie}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sc={focusedElem:i,selectionRange:a},Ka=!1,Be=s;Be!==null;)if(s=Be,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Be=i;else for(;Be!==null;){s=Be;try{var He=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,Yt=He.memoizedState,q=s.stateNode,W=q.getSnapshotBeforeUpdate(s.elementType===s.type?Ge:ci(s.type,Ge),Yt);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Y=s.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Xt(s,s.return,Ee)}if(i=s.sibling,i!==null){i.return=s.return,Be=i;break}Be=s.return}return He=gg,gg=!1,He}function oa(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&uf(s,a,_)}p=p.next}while(p!==f)}}function Dl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function cf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function vg(i){var s=i.alternate;s!==null&&(i.alternate=null,vg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ti],delete s[$o],delete s[wc],delete s[yS],delete s[xS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function _g(i){return i.tag===5||i.tag===3||i.tag===4}function yg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||_g(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ff(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=ll));else if(f!==4&&(i=i.child,i!==null))for(ff(i,s,a),i=i.sibling;i!==null;)ff(i,s,a),i=i.sibling}function df(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(df(i,s,a),i=i.sibling;i!==null;)df(i,s,a),i=i.sibling}var fn=null,fi=!1;function xr(i,s,a){for(a=a.child;a!==null;)xg(i,s,a),a=a.sibling}function xg(i,s,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(qe,a)}catch{}switch(a.tag){case 5:yn||Xs(a,s);case 6:var f=fn,p=fi;fn=null,xr(i,s,a),fn=f,fi=p,fn!==null&&(fi?(i=fn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):fn.removeChild(a.stateNode));break;case 18:fn!==null&&(fi?(i=fn,a=a.stateNode,i.nodeType===8?Tc(i.parentNode,a):i.nodeType===1&&Tc(i,a),ko(i)):Tc(fn,a.stateNode));break;case 4:f=fn,p=fi,fn=a.stateNode.containerInfo,fi=!0,xr(i,s,a),fn=f,fi=p;break;case 0:case 11:case 14:case 15:if(!yn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&uf(a,s,T),p=p.next}while(p!==f)}xr(i,s,a);break;case 1:if(!yn&&(Xs(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(I){Xt(a,s,I)}xr(i,s,a);break;case 21:xr(i,s,a);break;case 22:a.mode&1?(yn=(f=yn)||a.memoizedState!==null,xr(i,s,a),yn=f):xr(i,s,a);break;default:xr(i,s,a)}}function Sg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new FS),s.forEach(function(f){var p=jS.bind(null,i,f);a.has(f)||(a.add(f),f.then(p,p))})}}function di(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var p=a[f];try{var _=i,T=s,I=T;e:for(;I!==null;){switch(I.tag){case 5:fn=I.stateNode,fi=!1;break e;case 3:fn=I.stateNode.containerInfo,fi=!0;break e;case 4:fn=I.stateNode.containerInfo,fi=!0;break e}I=I.return}if(fn===null)throw Error(t(160));xg(_,T,p),fn=null,fi=!1;var B=p.alternate;B!==null&&(B.return=null),p.return=null}catch(Z){Xt(p,s,Z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Mg(s,i),s=s.sibling}function Mg(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(di(s,i),Ci(i),f&4){try{oa(3,i,i.return),Dl(3,i)}catch(Ge){Xt(i,i.return,Ge)}try{oa(5,i,i.return)}catch(Ge){Xt(i,i.return,Ge)}}break;case 1:di(s,i),Ci(i),f&512&&a!==null&&Xs(a,a.return);break;case 5:if(di(s,i),Ci(i),f&512&&a!==null&&Xs(a,a.return),i.flags&32){var p=i.stateNode;try{ct(p,"")}catch(Ge){Xt(i,i.return,Ge)}}if(f&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,T=a!==null?a.memoizedProps:_,I=i.type,B=i.updateQueue;if(i.updateQueue=null,B!==null)try{I==="input"&&_.type==="radio"&&_.name!=null&&pt(p,_),st(I,T);var Z=st(I,_);for(T=0;T<B.length;T+=2){var ve=B[T],ye=B[T+1];ve==="style"?tt(p,ye):ve==="dangerouslySetInnerHTML"?Oe(p,ye):ve==="children"?ct(p,ye):b(p,ve,ye,Z)}switch(I){case"input":ft(p,_);break;case"textarea":pe(p,_);break;case"select":var me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ie=_.value;Ie!=null?D(p,!!_.multiple,Ie,!1):me!==!!_.multiple&&(_.defaultValue!=null?D(p,!!_.multiple,_.defaultValue,!0):D(p,!!_.multiple,_.multiple?[]:"",!1))}p[$o]=_}catch(Ge){Xt(i,i.return,Ge)}}break;case 6:if(di(s,i),Ci(i),f&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(Ge){Xt(i,i.return,Ge)}}break;case 3:if(di(s,i),Ci(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{ko(s.containerInfo)}catch(Ge){Xt(i,i.return,Ge)}break;case 4:di(s,i),Ci(i);break;case 13:di(s,i),Ci(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(mf=G())),f&4&&Sg(i);break;case 22:if(ve=a!==null&&a.memoizedState!==null,i.mode&1?(yn=(Z=yn)||ve,di(s,i),yn=Z):di(s,i),Ci(i),f&8192){if(Z=i.memoizedState!==null,(i.stateNode.isHidden=Z)&&!ve&&(i.mode&1)!==0)for(Be=i,ve=i.child;ve!==null;){for(ye=Be=ve;Be!==null;){switch(me=Be,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:oa(4,me,me.return);break;case 1:Xs(me,me.return);var He=me.stateNode;if(typeof He.componentWillUnmount=="function"){f=me,a=me.return;try{s=f,He.props=s.memoizedProps,He.state=s.memoizedState,He.componentWillUnmount()}catch(Ge){Xt(f,a,Ge)}}break;case 5:Xs(me,me.return);break;case 22:if(me.memoizedState!==null){wg(ye);continue}}Ie!==null?(Ie.return=me,Be=Ie):wg(ye)}ve=ve.sibling}e:for(ve=null,ye=i;;){if(ye.tag===5){if(ve===null){ve=ye;try{p=ye.stateNode,Z?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(I=ye.stateNode,B=ye.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=Ke("display",T))}catch(Ge){Xt(i,i.return,Ge)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=Z?"":ye.memoizedProps}catch(Ge){Xt(i,i.return,Ge)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===i)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===i)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===i)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:di(s,i),Ci(i),f&4&&Sg(i);break;case 21:break;default:di(s,i),Ci(i)}}function Ci(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(_g(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(ct(p,""),f.flags&=-33);var _=yg(i);df(i,_,p);break;case 3:case 4:var T=f.stateNode.containerInfo,I=yg(i);ff(i,I,T);break;default:throw Error(t(161))}}catch(B){Xt(i,i.return,B)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function kS(i,s,a){Be=i,Eg(i)}function Eg(i,s,a){for(var f=(i.mode&1)!==0;Be!==null;){var p=Be,_=p.child;if(p.tag===22&&f){var T=p.memoizedState!==null||bl;if(!T){var I=p.alternate,B=I!==null&&I.memoizedState!==null||yn;I=bl;var Z=yn;if(bl=T,(yn=B)&&!Z)for(Be=p;Be!==null;)T=Be,B=T.child,T.tag===22&&T.memoizedState!==null?Ag(p):B!==null?(B.return=T,Be=B):Ag(p);for(;_!==null;)Be=_,Eg(_),_=_.sibling;Be=p,bl=I,yn=Z}Tg(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Be=_):Tg(i)}}function Tg(i){for(;Be!==null;){var s=Be;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:yn||Dl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!yn)if(a===null)f.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:ci(s.type,a.memoizedProps);f.componentDidUpdate(p,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&wm(s,_,f);break;case 3:var T=s.updateQueue;if(T!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}wm(s,T,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var B=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var Z=s.alternate;if(Z!==null){var ve=Z.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&ko(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||s.flags&512&&cf(s)}catch(me){Xt(s,s.return,me)}}if(s===i){Be=null;break}if(a=s.sibling,a!==null){a.return=s.return,Be=a;break}Be=s.return}}function wg(i){for(;Be!==null;){var s=Be;if(s===i){Be=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Be=a;break}Be=s.return}}function Ag(i){for(;Be!==null;){var s=Be;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Dl(4,s)}catch(B){Xt(s,a,B)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var p=s.return;try{f.componentDidMount()}catch(B){Xt(s,p,B)}}var _=s.return;try{cf(s)}catch(B){Xt(s,_,B)}break;case 5:var T=s.return;try{cf(s)}catch(B){Xt(s,T,B)}}}catch(B){Xt(s,s.return,B)}if(s===i){Be=null;break}var I=s.sibling;if(I!==null){I.return=s.return,Be=I;break}Be=s.return}}var BS=Math.ceil,Ll=R.ReactCurrentDispatcher,hf=R.ReactCurrentOwner,ei=R.ReactCurrentBatchConfig,St=0,an=null,Qt=null,dn=0,Xn=0,js=mr(0),nn=0,aa=null,Jr=0,Il=0,pf=0,la=null,Nn=null,mf=0,qs=1/0,Vi=null,Ul=!1,gf=null,Sr=null,Nl=!1,Mr=null,Fl=0,ua=0,vf=null,Ol=-1,kl=0;function Pn(){return(St&6)!==0?G():Ol!==-1?Ol:Ol=G()}function Er(i){return(i.mode&1)===0?1:(St&2)!==0&&dn!==0?dn&-dn:MS.transition!==null?(kl===0&&(kl=Cn()),kl):(i=mt,i!==0||(i=window.event,i=i===void 0?16:Rp(i.type)),i)}function hi(i,s,a,f){if(50<ua)throw ua=0,vf=null,Error(t(185));qt(i,a,f),((St&2)===0||i!==an)&&(i===an&&((St&2)===0&&(Il|=a),nn===4&&Tr(i,dn)),Fn(i,f),a===1&&St===0&&(s.mode&1)===0&&(qs=G()+500,dl&&vr()))}function Fn(i,s){var a=i.callbackNode;Wr(i,s);var f=ai(i,i===an?dn:0);if(f===0)a!==null&&j(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&j(a),s===1)i.tag===0?SS(Rg.bind(null,i)):hm(Rg.bind(null,i)),vS(function(){(St&6)===0&&vr()}),a=null;else{switch(xp(f)){case 1:a=Pe;break;case 4:a=Ue;break;case 16:a=ke;break;case 536870912:a=it;break;default:a=ke}a=Fg(a,Cg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Cg(i,s){if(Ol=-1,kl=0,(St&6)!==0)throw Error(t(327));var a=i.callbackNode;if(Ys()&&i.callbackNode!==a)return null;var f=ai(i,i===an?dn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=Bl(i,f);else{s=f;var p=St;St|=2;var _=bg();(an!==i||dn!==s)&&(Vi=null,qs=G()+500,ts(i,s));do try{HS();break}catch(I){Pg(i,I)}while(!0);Uc(),Ll.current=_,St=p,Qt!==null?s=0:(an=null,dn=0,s=nn)}if(s!==0){if(s===2&&(p=bt(i),p!==0&&(f=p,s=_f(i,p))),s===1)throw a=aa,ts(i,0),Tr(i,f),Fn(i,G()),a;if(s===6)Tr(i,f);else{if(p=i.current.alternate,(f&30)===0&&!zS(p)&&(s=Bl(i,f),s===2&&(_=bt(i),_!==0&&(f=_,s=_f(i,_))),s===1))throw a=aa,ts(i,0),Tr(i,f),Fn(i,G()),a;switch(i.finishedWork=p,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:ns(i,Nn,Vi);break;case 3:if(Tr(i,f),(f&130023424)===f&&(s=mf+500-G(),10<s)){if(ai(i,0)!==0)break;if(p=i.suspendedLanes,(p&f)!==f){Pn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Ec(ns.bind(null,i,Nn,Vi),s);break}ns(i,Nn,Vi);break;case 4:if(Tr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,p=-1;0<f;){var T=31-Et(f);_=1<<T,T=s[T],T>p&&(p=T),f&=~_}if(f=p,f=G()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*BS(f/1960))-f,10<f){i.timeoutHandle=Ec(ns.bind(null,i,Nn,Vi),f);break}ns(i,Nn,Vi);break;case 5:ns(i,Nn,Vi);break;default:throw Error(t(329))}}}return Fn(i,G()),i.callbackNode===a?Cg.bind(null,i):null}function _f(i,s){var a=la;return i.current.memoizedState.isDehydrated&&(ts(i,s).flags|=256),i=Bl(i,s),i!==2&&(s=Nn,Nn=a,s!==null&&yf(s)),i}function yf(i){Nn===null?Nn=i:Nn.push.apply(Nn,i)}function zS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var p=a[f],_=p.getSnapshot;p=p.value;try{if(!li(_(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Tr(i,s){for(s&=~pf,s&=~Il,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-Et(s),f=1<<a;i[a]=-1,s&=~f}}function Rg(i){if((St&6)!==0)throw Error(t(327));Ys();var s=ai(i,0);if((s&1)===0)return Fn(i,G()),null;var a=Bl(i,s);if(i.tag!==0&&a===2){var f=bt(i);f!==0&&(s=f,a=_f(i,f))}if(a===1)throw a=aa,ts(i,0),Tr(i,s),Fn(i,G()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ns(i,Nn,Vi),Fn(i,G()),null}function xf(i,s){var a=St;St|=1;try{return i(s)}finally{St=a,St===0&&(qs=G()+500,dl&&vr())}}function es(i){Mr!==null&&Mr.tag===0&&(St&6)===0&&Ys();var s=St;St|=1;var a=ei.transition,f=mt;try{if(ei.transition=null,mt=1,i)return i()}finally{mt=f,ei.transition=a,St=s,(St&6)===0&&vr()}}function Sf(){Xn=js.current,Ot(js)}function ts(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,gS(a)),Qt!==null)for(a=Qt.return;a!==null;){var f=a;switch(Pc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&cl();break;case 3:Gs(),Ot(Ln),Ot(gn),Hc();break;case 5:zc(f);break;case 4:Gs();break;case 13:Ot(Vt);break;case 19:Ot(Vt);break;case 10:Nc(f.type._context);break;case 22:case 23:Sf()}a=a.return}if(an=i,Qt=i=wr(i.current,null),dn=Xn=s,nn=0,aa=null,pf=Il=Jr=0,Nn=la=null,Kr!==null){for(s=0;s<Kr.length;s++)if(a=Kr[s],f=a.interleaved,f!==null){a.interleaved=null;var p=f.next,_=a.pending;if(_!==null){var T=_.next;_.next=p,f.next=T}a.pending=f}Kr=null}return i}function Pg(i,s){do{var a=Qt;try{if(Uc(),Ml.current=Al,El){for(var f=Ht.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}El=!1}if(Qr=0,on=tn=Ht=null,ta=!1,na=0,hf.current=null,a===null||a.return===null){nn=1,aa=s,Qt=null;break}e:{var _=i,T=a.return,I=a,B=s;if(s=dn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var Z=B,ve=I,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=eg(T);if(Ie!==null){Ie.flags&=-257,tg(Ie,T,I,_,s),Ie.mode&1&&Jm(_,Z,s),s=Ie,B=Z;var He=s.updateQueue;if(He===null){var Ge=new Set;Ge.add(B),s.updateQueue=Ge}else He.add(B);break e}else{if((s&1)===0){Jm(_,Z,s),Mf();break e}B=Error(t(426))}}else if(zt&&I.mode&1){var Yt=eg(T);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),tg(Yt,T,I,_,s),Lc(Ws(B,I));break e}}_=B=Ws(B,I),nn!==4&&(nn=2),la===null?la=[_]:la.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var q=Zm(_,B,s);Tm(_,q);break e;case 1:I=B;var W=_.type,Y=_.stateNode;if((_.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(Sr===null||!Sr.has(Y)))){_.flags|=65536,s&=-s,_.lanes|=s;var Ee=Qm(_,I,s);Tm(_,Ee);break e}}_=_.return}while(_!==null)}Lg(a)}catch(Xe){s=Xe,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function bg(){var i=Ll.current;return Ll.current=Al,i===null?Al:i}function Mf(){(nn===0||nn===3||nn===2)&&(nn=4),an===null||(Jr&268435455)===0&&(Il&268435455)===0||Tr(an,dn)}function Bl(i,s){var a=St;St|=2;var f=bg();(an!==i||dn!==s)&&(Vi=null,ts(i,s));do try{VS();break}catch(p){Pg(i,p)}while(!0);if(Uc(),St=a,Ll.current=f,Qt!==null)throw Error(t(261));return an=null,dn=0,nn}function VS(){for(;Qt!==null;)Dg(Qt)}function HS(){for(;Qt!==null&&!J();)Dg(Qt)}function Dg(i){var s=Ng(i.alternate,i,Xn);i.memoizedProps=i.pendingProps,s===null?Lg(i):Qt=s,hf.current=null}function Lg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=US(a,s,Xn),a!==null){Qt=a;return}}else{if(a=NS(a,s),a!==null){a.flags&=32767,Qt=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{nn=6,Qt=null;return}}if(s=s.sibling,s!==null){Qt=s;return}Qt=s=i}while(s!==null);nn===0&&(nn=5)}function ns(i,s,a){var f=mt,p=ei.transition;try{ei.transition=null,mt=1,GS(i,s,a,f)}finally{ei.transition=p,mt=f}return null}function GS(i,s,a,f){do Ys();while(Mr!==null);if((St&6)!==0)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(mn(i,_),i===an&&(Qt=an=null,dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Nl||(Nl=!0,Fg(ke,function(){return Ys(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=ei.transition,ei.transition=null;var T=mt;mt=1;var I=St;St|=4,hf.current=null,OS(i,a),Mg(a,i),uS(Sc),Ka=!!xc,Sc=xc=null,i.current=a,kS(a),ee(),St=I,mt=T,ei.transition=_}else i.current=a;if(Nl&&(Nl=!1,Mr=i,Fl=p),_=i.pendingLanes,_===0&&(Sr=null),Mt(a.stateNode),Fn(i,G()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],f(p.value,{componentStack:p.stack,digest:p.digest});if(Ul)throw Ul=!1,i=gf,gf=null,i;return(Fl&1)!==0&&i.tag!==0&&Ys(),_=i.pendingLanes,(_&1)!==0?i===vf?ua++:(ua=0,vf=i):ua=0,vr(),null}function Ys(){if(Mr!==null){var i=xp(Fl),s=ei.transition,a=mt;try{if(ei.transition=null,mt=16>i?16:i,Mr===null)var f=!1;else{if(i=Mr,Mr=null,Fl=0,(St&6)!==0)throw Error(t(331));var p=St;for(St|=4,Be=i.current;Be!==null;){var _=Be,T=_.child;if((Be.flags&16)!==0){var I=_.deletions;if(I!==null){for(var B=0;B<I.length;B++){var Z=I[B];for(Be=Z;Be!==null;){var ve=Be;switch(ve.tag){case 0:case 11:case 15:oa(8,ve,_)}var ye=ve.child;if(ye!==null)ye.return=ve,Be=ye;else for(;Be!==null;){ve=Be;var me=ve.sibling,Ie=ve.return;if(vg(ve),ve===Z){Be=null;break}if(me!==null){me.return=Ie,Be=me;break}Be=Ie}}}var He=_.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var Yt=Ge.sibling;Ge.sibling=null,Ge=Yt}while(Ge!==null)}}Be=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,Be=T;else e:for(;Be!==null;){if(_=Be,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:oa(9,_,_.return)}var q=_.sibling;if(q!==null){q.return=_.return,Be=q;break e}Be=_.return}}var W=i.current;for(Be=W;Be!==null;){T=Be;var Y=T.child;if((T.subtreeFlags&2064)!==0&&Y!==null)Y.return=T,Be=Y;else e:for(T=W;Be!==null;){if(I=Be,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Dl(9,I)}}catch(Xe){Xt(I,I.return,Xe)}if(I===T){Be=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Be=Ee;break e}Be=I.return}}if(St=p,vr(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(qe,i)}catch{}f=!0}return f}finally{mt=a,ei.transition=s}}return!1}function Ig(i,s,a){s=Ws(a,s),s=Zm(i,s,1),i=yr(i,s,1),s=Pn(),i!==null&&(qt(i,1,s),Fn(i,s))}function Xt(i,s,a){if(i.tag===3)Ig(i,i,a);else for(;s!==null;){if(s.tag===3){Ig(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Sr===null||!Sr.has(f))){i=Ws(a,i),i=Qm(s,i,1),s=yr(s,i,1),i=Pn(),s!==null&&(qt(s,1,i),Fn(s,i));break}}s=s.return}}function WS(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=Pn(),i.pingedLanes|=i.suspendedLanes&a,an===i&&(dn&a)===a&&(nn===4||nn===3&&(dn&130023424)===dn&&500>G()-mf?ts(i,0):pf|=a),Fn(i,s)}function Ug(i,s){s===0&&((i.mode&1)===0?s=1:(s=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var a=Pn();i=ki(i,s),i!==null&&(qt(i,s,a),Fn(i,a))}function XS(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Ug(i,a)}function jS(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Ug(i,a)}var Ng;Ng=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||Ln.current)Un=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Un=!1,IS(i,s,a);Un=(i.flags&131072)!==0}else Un=!1,zt&&(s.flags&1048576)!==0&&pm(s,pl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Pl(i,s),i=s.pendingProps;var p=Fs(s,gn.current);Hs(s,a),p=Xc(null,s,f,i,p,a);var _=jc();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,In(f)?(_=!0,fl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,kc(s),p.updater=Cl,s.stateNode=p,p._reactInternals=s,Qc(s,f,i,a),s=nf(null,s,f,!0,_,a)):(s.tag=0,zt&&_&&Rc(s),Rn(null,s,p,a),s=s.child),s;case 16:f=s.elementType;e:{switch(Pl(i,s),i=s.pendingProps,p=f._init,f=p(f._payload),s.type=f,p=s.tag=YS(f),i=ci(f,i),p){case 0:s=tf(null,s,f,i,a);break e;case 1:s=ag(null,s,f,i,a);break e;case 11:s=ng(null,s,f,i,a);break e;case 14:s=ig(null,s,f,ci(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:ci(f,p),tf(i,s,f,p,a);case 1:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:ci(f,p),ag(i,s,f,p,a);case 3:e:{if(lg(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,p=_.element,Em(i,s),xl(s,f,null,a);var T=s.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=Ws(Error(t(423)),s),s=ug(i,s,f,a,p);break e}else if(f!==p){p=Ws(Error(t(424)),s),s=ug(i,s,f,a,p);break e}else for(Wn=pr(s.stateNode.containerInfo.firstChild),Gn=s,zt=!0,ui=null,a=Sm(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bs(),f===p){s=zi(i,s,a);break e}Rn(i,s,f,a)}s=s.child}return s;case 5:return Am(s),i===null&&Dc(s),f=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,T=p.children,Mc(f,p)?T=null:_!==null&&Mc(f,_)&&(s.flags|=32),og(i,s),Rn(i,s,T,a),s.child;case 6:return i===null&&Dc(s),null;case 13:return cg(i,s,a);case 4:return Bc(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=zs(s,null,f,a):Rn(i,s,f,a),s.child;case 11:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:ci(f,p),ng(i,s,f,p,a);case 7:return Rn(i,s,s.pendingProps,a),s.child;case 8:return Rn(i,s,s.pendingProps.children,a),s.child;case 12:return Rn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,p=s.pendingProps,_=s.memoizedProps,T=p.value,Ut(vl,f._currentValue),f._currentValue=T,_!==null)if(li(_.value,T)){if(_.children===p.children&&!Ln.current){s=zi(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var I=_.dependencies;if(I!==null){T=_.child;for(var B=I.firstContext;B!==null;){if(B.context===f){if(_.tag===1){B=Bi(-1,a&-a),B.tag=2;var Z=_.updateQueue;if(Z!==null){Z=Z.shared;var ve=Z.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),Z.pending=B}}_.lanes|=a,B=_.alternate,B!==null&&(B.lanes|=a),Fc(_.return,a,s),I.lanes|=a;break}B=B.next}}else if(_.tag===10)T=_.type===s.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=a,I=T.alternate,I!==null&&(I.lanes|=a),Fc(T,a,s),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===s){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Rn(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,f=s.pendingProps.children,Hs(s,a),p=Qn(p),f=f(p),s.flags|=1,Rn(i,s,f,a),s.child;case 14:return f=s.type,p=ci(f,s.pendingProps),p=ci(f.type,p),ig(i,s,f,p,a);case 15:return rg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:ci(f,p),Pl(i,s),s.tag=1,In(f)?(i=!0,fl(s)):i=!1,Hs(s,a),$m(s,f,p),Qc(s,f,p,a),nf(null,s,f,!0,i,a);case 19:return dg(i,s,a);case 22:return sg(i,s,a)}throw Error(t(156,s.tag))};function Fg(i,s){return A(i,s)}function qS(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(i,s,a,f){return new qS(i,s,a,f)}function Ef(i){return i=i.prototype,!(!i||!i.isReactComponent)}function YS(i){if(typeof i=="function")return Ef(i)?1:0;if(i!=null){if(i=i.$$typeof,i===oe)return 11;if(i===he)return 14}return 2}function wr(i,s){var a=i.alternate;return a===null?(a=ti(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function zl(i,s,a,f,p,_){var T=2;if(f=i,typeof i=="function")Ef(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case F:return is(a.children,p,_,s);case k:T=8,p|=8;break;case P:return i=ti(12,a,s,p|2),i.elementType=P,i.lanes=_,i;case Q:return i=ti(13,a,s,p),i.elementType=Q,i.lanes=_,i;case ue:return i=ti(19,a,s,p),i.elementType=ue,i.lanes=_,i;case ie:return Vl(a,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:T=10;break e;case V:T=9;break e;case oe:T=11;break e;case he:T=14;break e;case le:T=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ti(T,a,s,p),s.elementType=i,s.type=f,s.lanes=_,s}function is(i,s,a,f){return i=ti(7,i,f,s),i.lanes=a,i}function Vl(i,s,a,f){return i=ti(22,i,f,s),i.elementType=ie,i.lanes=a,i.stateNode={isHidden:!1},i}function Tf(i,s,a){return i=ti(6,i,null,s),i.lanes=a,i}function wf(i,s,a){return s=ti(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function $S(i,s,a,f,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Af(i,s,a,f,p,_,T,I,B){return i=new $S(i,s,a,I,B),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ti(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(_),i}function KS(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function Og(i){if(!i)return gr;i=i._reactInternals;e:{if(Ei(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(In(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(In(a))return fm(i,a,s)}return s}function kg(i,s,a,f,p,_,T,I,B){return i=Af(a,f,!0,i,p,_,T,I,B),i.context=Og(null),a=i.current,f=Pn(),p=Er(a),_=Bi(f,p),_.callback=s??null,yr(a,_,p),i.current.lanes=p,qt(i,p,f),Fn(i,f),i}function Hl(i,s,a,f){var p=s.current,_=Pn(),T=Er(p);return a=Og(a),s.context===null?s.context=a:s.pendingContext=a,s=Bi(_,T),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=yr(p,s,T),i!==null&&(hi(i,p,T,_),yl(i,p,T)),T}function Gl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Bg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Cf(i,s){Bg(i,s),(i=i.alternate)&&Bg(i,s)}function ZS(){return null}var zg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Rf(i){this._internalRoot=i}Wl.prototype.render=Rf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Hl(i,s,null,null)},Wl.prototype.unmount=Rf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;es(function(){Hl(null,i,null,null)}),s[Ui]=null}};function Wl(i){this._internalRoot=i}Wl.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ep();i={blockedOn:null,target:i,priority:s};for(var a=0;a<fr.length&&s!==0&&s<fr[a].priority;a++);fr.splice(a,0,i),a===0&&Ap(i)}};function Pf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Xl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Vg(){}function QS(i,s,a,f,p){if(p){if(typeof f=="function"){var _=f;f=function(){var Z=Gl(T);_.call(Z)}}var T=kg(s,f,i,0,null,!1,!1,"",Vg);return i._reactRootContainer=T,i[Ui]=T.current,qo(i.nodeType===8?i.parentNode:i),es(),T}for(;p=i.lastChild;)i.removeChild(p);if(typeof f=="function"){var I=f;f=function(){var Z=Gl(B);I.call(Z)}}var B=Af(i,0,!1,null,null,!1,!1,"",Vg);return i._reactRootContainer=B,i[Ui]=B.current,qo(i.nodeType===8?i.parentNode:i),es(function(){Hl(s,B,a,f)}),B}function jl(i,s,a,f,p){var _=a._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var I=p;p=function(){var B=Gl(T);I.call(B)}}Hl(s,T,i,p)}else T=QS(a,s,i,p,f);return Gl(T)}Sp=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=cn(s.pendingLanes);a!==0&&(Xr(s,a|1),Fn(s,G()),(St&6)===0&&(qs=G()+500,vr()))}break;case 13:es(function(){var f=ki(i,1);if(f!==null){var p=Pn();hi(f,i,1,p)}}),Cf(i,1)}},Ju=function(i){if(i.tag===13){var s=ki(i,134217728);if(s!==null){var a=Pn();hi(s,i,134217728,a)}Cf(i,134217728)}},Mp=function(i){if(i.tag===13){var s=Er(i),a=ki(i,s);if(a!==null){var f=Pn();hi(a,i,s,f)}Cf(i,s)}},Ep=function(){return mt},Tp=function(i,s){var a=mt;try{return mt=i,s()}finally{mt=a}},Re=function(i,s,a){switch(s){case"input":if(ft(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var p=ul(f);if(!p)throw Error(t(90));gt(f),ft(f,p)}}}break;case"textarea":pe(i,a);break;case"select":s=a.value,s!=null&&D(i,!!a.multiple,s,!1)}},Nt=xf,en=es;var JS={usingClientEntryPoint:!1,Events:[Ko,Us,ul,De,ot,xf]},ca={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eM={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ja(i),i===null?null:i.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||ZS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{qe=ql.inject(eM),at=ql}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JS,On.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(s))throw Error(t(200));return KS(i,s,null,a)},On.createRoot=function(i,s){if(!Pf(i))throw Error(t(299));var a=!1,f="",p=zg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Af(i,1,!1,null,null,a,!1,f,p),i[Ui]=s.current,qo(i.nodeType===8?i.parentNode:i),new Rf(s)},On.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ja(s),i=i===null?null:i.stateNode,i},On.flushSync=function(i){return es(i)},On.hydrate=function(i,s,a){if(!Xl(s))throw Error(t(200));return jl(null,i,s,!0,a)},On.hydrateRoot=function(i,s,a){if(!Pf(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,p=!1,_="",T=zg;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),s=kg(s,null,i,1,a??null,p,!1,_,T),i[Ui]=s.current,qo(i),f)for(i=0;i<f.length;i++)a=f[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new Wl(s)},On.render=function(i,s,a){if(!Xl(s))throw Error(t(200));return jl(null,i,s,!1,a)},On.unmountComponentAtNode=function(i){if(!Xl(i))throw Error(t(40));return i._reactRootContainer?(es(function(){jl(null,null,i,!1,function(){i._reactRootContainer=null,i[Ui]=null})}),!0):!1},On.unstable_batchedUpdates=xf,On.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!Xl(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return jl(i,s,a,!1,f)},On.version="18.3.1-next-f1338f8080-20240426",On}var qg;function aM(){if(qg)return Df.exports;qg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Df.exports=oM(),Df.exports}var Yg;function lM(){if(Yg)return Yl;Yg=1;var n=aM();return Yl.createRoot=n.createRoot,Yl.hydrateRoot=n.hydrateRoot,Yl}var uM=lM(),Uf={exports:{}},fa={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function cM(){if($g)return fa;$g=1;var n=Dh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var m,g={},v=null,x=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:c,key:v,ref:x,props:g,_owner:o.current}}return fa.Fragment=t,fa.jsx=u,fa.jsxs=u,fa}var Kg;function fM(){return Kg||(Kg=1,Uf.exports=cM()),Uf.exports}var Qi=fM();const Lh=we.createContext({});function Ih(n){const e=we.useRef(null);return e.current===null&&(e.current=n()),e.current}const Hu=we.createContext(null),Uh=we.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class dM extends we.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function hM({children:n,isPresent:e}){const t=we.useId(),r=we.useRef(null),o=we.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=we.useContext(Uh);return we.useInsertionEffect(()=>{const{width:u,height:c,top:d,left:h}=o.current;if(e||!r.current||!u||!c)return;r.current.dataset.motionPopId=t;const m=document.createElement("style");return l&&(m.nonce=l),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            top: ${d}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[e]),Qi.jsx(dM,{isPresent:e,childRef:r,sizeRef:o,children:we.cloneElement(n,{ref:r})})}const pM=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:u})=>{const c=Ih(mM),d=we.useId(),h=we.useCallback(g=>{c.set(g,!0);for(const v of c.values())if(!v)return;r&&r()},[c,r]),m=we.useMemo(()=>({id:d,initial:e,isPresent:t,custom:o,onExitComplete:h,register:g=>(c.set(g,!1),()=>c.delete(g))}),l?[Math.random(),h]:[t,h]);return we.useMemo(()=>{c.forEach((g,v)=>c.set(v,!1))},[t]),we.useEffect(()=>{!t&&!c.size&&r&&r()},[t]),u==="popLayout"&&(n=Qi.jsx(hM,{isPresent:t,children:n})),Qi.jsx(Hu.Provider,{value:m,children:n})};function mM(){return new Map}function h_(n=!0){const e=we.useContext(Hu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=we.useId();we.useEffect(()=>{n&&o(l)},[n]);const u=we.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const $l=n=>n.key||"";function Zg(n){const e=[];return we.Children.forEach(n,t=>{we.isValidElement(t)&&e.push(t)}),e}const Nh=typeof window<"u",p_=Nh?we.useLayoutEffect:we.useEffect,gM=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1})=>{const[c,d]=h_(u),h=we.useMemo(()=>Zg(n),[n]),m=u&&!c?[]:h.map($l),g=we.useRef(!0),v=we.useRef(h),x=Ih(()=>new Map),[M,E]=we.useState(h),[S,y]=we.useState(h);p_(()=>{g.current=!1,v.current=h;for(let R=0;R<S.length;R++){const U=$l(S[R]);m.includes(U)?x.delete(U):x.get(U)!==!0&&x.set(U,!1)}},[S,m.length,m.join("-")]);const L=[];if(h!==M){let R=[...h];for(let U=0;U<S.length;U++){const N=S[U],F=$l(N);m.includes(F)||(R.splice(U,0,N),L.push(N))}l==="wait"&&L.length&&(R=L),y(Zg(R)),E(h);return}const{forceRender:b}=we.useContext(Lh);return Qi.jsx(Qi.Fragment,{children:S.map(R=>{const U=$l(R),N=u&&!c?!1:h===S||m.includes(U),F=()=>{if(x.has(U))x.set(U,!0);else return;let k=!0;x.forEach(P=>{P||(k=!1)}),k&&(b==null||b(),y(v.current),u&&(d==null||d()),r&&r())};return Qi.jsx(pM,{isPresent:N,initial:!g.current||t?void 0:!1,custom:N?void 0:e,presenceAffectsLayout:o,mode:l,onExitComplete:N?void 0:F,children:R},U)})})},Yn=n=>n;let m_=Yn;function Fh(n){let e;return()=>(e===void 0&&(e=n()),e)}const xo=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},Ji=n=>n*1e3,er=n=>n/1e3,vM={useManualTiming:!1};function _M(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function c(h){l.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,m=!1,g=!1)=>{const x=g&&r?e:t;return m&&l.add(h),x.has(h)||x.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(c),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const Kl=["read","resolveKeyframes","update","preRender","render","postRender"],yM=40;function g_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=Kl.reduce((y,L)=>(y[L]=_M(l),y),{}),{read:c,resolveKeyframes:d,update:h,preRender:m,render:g,postRender:v}=u,x=()=>{const y=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(y-o.timestamp,yM),1),o.timestamp=y,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),m.process(o),g.process(o),v.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(x))},M=()=>{t=!0,r=!0,o.isProcessing||n(x)};return{schedule:Kl.reduce((y,L)=>{const b=u[L];return y[L]=(R,U=!1,N=!1)=>(t||M(),b.schedule(R,U,N)),y},{}),cancel:y=>{for(let L=0;L<Kl.length;L++)u[Kl[L]].cancel(y)},state:o,steps:u}}const{schedule:kt,cancel:Or,state:hn,steps:Nf}=g_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yn,!0),v_=we.createContext({strict:!1}),Qg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},So={};for(const n in Qg)So[n]={isEnabled:e=>Qg[n].some(t=>!!e[t])};function xM(n){for(const e in n)So[e]={...So[e],...n[e]}}const SM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Lu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||SM.has(n)}let __=n=>!Lu(n);function MM(n){n&&(__=e=>e.startsWith("on")?!Lu(e):n(e))}try{MM(require("@emotion/is-prop-valid").default)}catch{}function EM(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(__(o)||t===!0&&Lu(o)||!e&&!Lu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function TM(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Gu=we.createContext({});function Aa(n){return typeof n=="string"||Array.isArray(n)}function Wu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Oh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],kh=["initial",...Oh];function Xu(n){return Wu(n.animate)||kh.some(e=>Aa(n[e]))}function y_(n){return!!(Xu(n)||n.variants)}function wM(n,e){if(Xu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Aa(t)?t:void 0,animate:Aa(r)?r:void 0}}return n.inherit!==!1?e:{}}function AM(n){const{initial:e,animate:t}=wM(n,we.useContext(Gu));return we.useMemo(()=>({initial:e,animate:t}),[Jg(e),Jg(t)])}function Jg(n){return Array.isArray(n)?n.join(" "):n}const CM=Symbol.for("motionComponentSymbol");function co(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function RM(n,e,t){return we.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):co(t)&&(t.current=r))},[e])}const Bh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),PM="framerAppearId",x_="data-"+Bh(PM),{schedule:zh}=g_(queueMicrotask,!1),S_=we.createContext({});function bM(n,e,t,r,o){var l,u;const{visualElement:c}=we.useContext(Gu),d=we.useContext(v_),h=we.useContext(Hu),m=we.useContext(Uh).reducedMotion,g=we.useRef(null);r=r||d.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const v=g.current,x=we.useContext(S_);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&DM(g.current,t,o,x);const M=we.useRef(!1);we.useInsertionEffect(()=>{v&&M.current&&v.update(t,h)});const E=t[x_],S=we.useRef(!!E&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,E))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,E)));return p_(()=>{v&&(M.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),zh.render(v.render),S.current&&v.animationState&&v.animationState.animateChanges())}),we.useEffect(()=>{v&&(!S.current&&v.animationState&&v.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,E)}),S.current=!1))}),v}function DM(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:M_(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||c&&co(c),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function M_(n){if(n)return n.options.allowProjection!==!1?n.projection:M_(n.parent)}function LM({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,u;n&&xM(n);function c(h,m){let g;const v={...we.useContext(Uh),...h,layoutId:IM(h)},{isStatic:x}=v,M=AM(h),E=r(h,x);if(!x&&Nh){UM();const S=NM(v);g=S.MeasureLayout,M.visualElement=bM(o,E,v,e,S.ProjectionNode)}return Qi.jsxs(Gu.Provider,{value:M,children:[g&&M.visualElement?Qi.jsx(g,{visualElement:M.visualElement,...v}):null,t(o,h,RM(E,M.visualElement,m),E,x,M.visualElement)]})}c.displayName=`motion.${typeof o=="string"?o:`create(${(u=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&u!==void 0?u:""})`}`;const d=we.forwardRef(c);return d[CM]=o,d}function IM({layoutId:n}){const e=we.useContext(Lh).id;return e&&n!==void 0?e+"-"+n:n}function UM(n,e){we.useContext(v_).strict}function NM(n){const{drag:e,layout:t}=So;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const FM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Vh(n){return typeof n!="string"||n.includes("-")?!1:!!(FM.indexOf(n)>-1||/[A-Z]/u.test(n))}function ev(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Hh(n,e,t,r){if(typeof e=="function"){const[o,l]=ev(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=ev(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const wd=n=>Array.isArray(n),OM=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),kM=n=>wd(n)?n[n.length-1]||0:n,En=n=>!!(n&&n.getVelocity);function Eu(n){const e=En(n)?n.get():n;return OM(e)?e.toValue():e}function BM({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const u={latestValues:zM(r,o,l,n),renderState:e()};return t&&(u.onMount=c=>t({props:r,current:c,...u}),u.onUpdate=c=>t(c)),u}const E_=n=>(e,t)=>{const r=we.useContext(Gu),o=we.useContext(Hu),l=()=>BM(n,e,r,o);return t?l():Ih(l)};function zM(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Eu(l[v]);let{initial:u,animate:c}=n;const d=Xu(n),h=y_(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const g=m?c:u;if(g&&typeof g!="boolean"&&!Wu(g)){const v=Array.isArray(g)?g:[g];for(let x=0;x<v.length;x++){const M=Hh(n,v[x]);if(M){const{transitionEnd:E,transition:S,...y}=M;for(const L in y){let b=y[L];if(Array.isArray(b)){const R=m?b.length-1:0;b=b[R]}b!==null&&(o[L]=b)}for(const L in E)o[L]=E[L]}}}return o}const bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ts=new Set(bo),T_=n=>e=>typeof e=="string"&&e.startsWith(n),w_=T_("--"),VM=T_("var(--"),Gh=n=>VM(n)?HM.test(n.split("/*")[0].trim()):!1,HM=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,A_=(n,e)=>e&&typeof n=="number"?e.transform(n):n,nr=(n,e,t)=>t>e?e:t<n?n:t,Do={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ca={...Do,transform:n=>nr(0,1,n)},Zl={...Do,default:1},La=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Ir=La("deg"),bi=La("%"),et=La("px"),GM=La("vh"),WM=La("vw"),tv={...bi,parse:n=>bi.parse(n)/100,transform:n=>bi.transform(n*100)},XM={borderWidth:et,borderTopWidth:et,borderRightWidth:et,borderBottomWidth:et,borderLeftWidth:et,borderRadius:et,radius:et,borderTopLeftRadius:et,borderTopRightRadius:et,borderBottomRightRadius:et,borderBottomLeftRadius:et,width:et,maxWidth:et,height:et,maxHeight:et,top:et,right:et,bottom:et,left:et,padding:et,paddingTop:et,paddingRight:et,paddingBottom:et,paddingLeft:et,margin:et,marginTop:et,marginRight:et,marginBottom:et,marginLeft:et,backgroundPositionX:et,backgroundPositionY:et},jM={rotate:Ir,rotateX:Ir,rotateY:Ir,rotateZ:Ir,scale:Zl,scaleX:Zl,scaleY:Zl,scaleZ:Zl,skew:Ir,skewX:Ir,skewY:Ir,distance:et,translateX:et,translateY:et,translateZ:et,x:et,y:et,z:et,perspective:et,transformPerspective:et,opacity:Ca,originX:tv,originY:tv,originZ:et},nv={...Do,transform:Math.round},Wh={...XM,...jM,zIndex:nv,size:et,fillOpacity:Ca,strokeOpacity:Ca,numOctaves:nv},qM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},YM=bo.length;function $M(n,e,t){let r="",o=!0;for(let l=0;l<YM;l++){const u=bo[l],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=A_(c,Wh[u]);if(!d){o=!1;const m=qM[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function Xh(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Ts.has(d)){u=!0;continue}else if(w_(d)){o[d]=h;continue}else{const m=A_(h,Wh[d]);d.startsWith("origin")?(c=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=$M(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}const KM={offset:"stroke-dashoffset",array:"stroke-dasharray"},ZM={offset:"strokeDashoffset",array:"strokeDasharray"};function QM(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?KM:ZM;n[l.offset]=et.transform(-r);const u=et.transform(e),c=et.transform(t);n[l.array]=`${u} ${c}`}function iv(n,e,t){return typeof n=="string"?n:et.transform(e+t*n)}function JM(n,e,t){const r=iv(e,n.x,n.width),o=iv(t,n.y,n.height);return`${r} ${o}`}function jh(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...h},m,g){if(Xh(n,h,g),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:x,dimensions:M}=n;v.transform&&(M&&(x.transform=v.transform),delete v.transform),M&&(o!==void 0||l!==void 0||x.transform)&&(x.transformOrigin=JM(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),u!==void 0&&QM(v,u,c,d,!1)}const qh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),C_=()=>({...qh(),attrs:{}}),Yh=n=>typeof n=="string"&&n.toLowerCase()==="svg";function R_(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const P_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function b_(n,e,t,r){R_(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(P_.has(o)?o:Bh(o),e.attrs[o])}const Iu={};function eE(n){Object.assign(Iu,n)}function D_(n,{layout:e,layoutId:t}){return Ts.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Iu[n]||n==="opacity")}function $h(n,e,t){var r;const{style:o}=n,l={};for(const u in o)(En(o[u])||e.style&&En(e.style[u])||D_(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function L_(n,e,t){const r=$h(n,e,t);for(const o in n)if(En(n[o])||En(e[o])){const l=bo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function tE(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const rv=["x","y","width","height","cx","cy","r"],nE={useVisualState:E_({scrapeMotionValuesFromProps:L_,createRenderState:C_,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const c in o)if(Ts.has(c)){l=!0;break}}if(!l)return;let u=!e;if(e)for(let c=0;c<rv.length;c++){const d=rv[c];n[d]!==e[d]&&(u=!0)}u&&kt.read(()=>{tE(t,r),kt.render(()=>{jh(r,o,Yh(t.tagName),n.transformTemplate),b_(t,r)})})}})},iE={useVisualState:E_({scrapeMotionValuesFromProps:$h,createRenderState:qh})};function I_(n,e,t){for(const r in e)!En(e[r])&&!D_(r,t)&&(n[r]=e[r])}function rE({transformTemplate:n},e){return we.useMemo(()=>{const t=qh();return Xh(t,e,n),Object.assign({},t.vars,t.style)},[e])}function sE(n,e){const t=n.style||{},r={};return I_(r,t,n),Object.assign(r,rE(n,e)),r}function oE(n,e){const t={},r=sE(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function aE(n,e,t,r){const o=we.useMemo(()=>{const l=C_();return jh(l,e,Yh(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};I_(l,n.style,n),o.style={...l,...o.style}}return o}function lE(n=!1){return(t,r,o,{latestValues:l},u)=>{const d=(Vh(t)?aE:oE)(r,l,u,t),h=EM(r,typeof t=="string",n),m=t!==we.Fragment?{...h,...d,ref:o}:{},{children:g}=r,v=we.useMemo(()=>En(g)?g.get():g,[g]);return we.createElement(t,{...m,children:v})}}function uE(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...Vh(r)?nE:iE,preloadedFeatures:n,useRender:lE(o),createVisualElement:e,Component:r};return LM(u)}}function U_(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function ju(n,e,t){const r=n.getProps();return Hh(r,e,t!==void 0?t:r.custom,n)}const cE=Fh(()=>window.ScrollTimeline!==void 0);class fE{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(cE()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class dE extends fE{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function Kh(n,e){return n?n[e]||n.default||n:void 0}const Ad=2e4;function N_(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Ad;)e+=t,r=n.next(e);return e>=Ad?1/0:e}function Zh(n){return typeof n=="function"}function sv(n,e){n.timeline=e,n.onfinish=null}const Qh=n=>Array.isArray(n)&&typeof n[0]=="number",hE={linearEasing:void 0};function pE(n,e){const t=Fh(n);return()=>{var r;return(r=hE[e])!==null&&r!==void 0?r:t()}}const Uu=pE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),F_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(xo(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function O_(n){return!!(typeof n=="function"&&Uu()||!n||typeof n=="string"&&(n in Cd||Uu())||Qh(n)||Array.isArray(n)&&n.every(O_))}const _a=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Cd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_a([0,.65,.55,1]),circOut:_a([.55,0,1,.45]),backIn:_a([.31,.01,.66,-.59]),backOut:_a([.33,1.53,.69,.99])};function k_(n,e){if(n)return typeof n=="function"&&Uu()?F_(n,e):Qh(n)?_a(n):Array.isArray(n)?n.map(t=>k_(t,e)||Cd.easeOut):Cd[n]}const vi={x:!1,y:!1};function B_(){return vi.x||vi.y}function mE(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function z_(n,e){const t=mE(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function ov(n){return e=>{e.pointerType==="touch"||B_()||n(e)}}function gE(n,e,t={}){const[r,o,l]=z_(n,t),u=ov(c=>{const{target:d}=c,h=e(c);if(typeof h!="function"||!d)return;const m=ov(g=>{h(g),d.removeEventListener("pointerleave",m)});d.addEventListener("pointerleave",m,o)});return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),l}const V_=(n,e)=>e?n===e?!0:V_(n,e.parentElement):!1,Jh=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,vE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function _E(n){return vE.has(n.tagName)||n.tabIndex!==-1}const ya=new WeakSet;function av(n){return e=>{e.key==="Enter"&&n(e)}}function Ff(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const yE=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=av(()=>{if(ya.has(t))return;Ff(t,"down");const o=av(()=>{Ff(t,"up")}),l=()=>Ff(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function lv(n){return Jh(n)&&!B_()}function xE(n,e,t={}){const[r,o,l]=z_(n,t),u=c=>{const d=c.currentTarget;if(!lv(c)||ya.has(d))return;ya.add(d);const h=e(c),m=(x,M)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),!(!lv(x)||!ya.has(d))&&(ya.delete(d),typeof h=="function"&&h(x,{success:M}))},g=x=>{m(x,t.useGlobalTarget||V_(d,x.target))},v=x=>{m(x,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(c=>{!_E(c)&&c.getAttribute("tabindex")===null&&(c.tabIndex=0),(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),c.addEventListener("focus",h=>yE(h,o),o)}),l}function SE(n){return n==="x"||n==="y"?vi[n]?null:(vi[n]=!0,()=>{vi[n]=!1}):vi.x||vi.y?null:(vi.x=vi.y=!0,()=>{vi.x=vi.y=!1})}const H_=new Set(["width","height","top","left","right","bottom",...bo]);let Tu;function ME(){Tu=void 0}const Di={now:()=>(Tu===void 0&&Di.set(hn.isProcessing||vM.useManualTiming?hn.timestamp:performance.now()),Tu),set:n=>{Tu=n,queueMicrotask(ME)}};function ep(n,e){n.indexOf(e)===-1&&n.push(e)}function tp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class np{constructor(){this.subscriptions=[]}add(e){return ep(this.subscriptions,e),()=>tp(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function G_(n,e){return e?n*(1e3/e):0}const uv=30,EE=n=>!isNaN(parseFloat(n));class TE{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=Di.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Di.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=EE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new np);const r=this.events[e].add(t);return e==="change"?()=>{r(),kt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Di.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>uv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,uv);return G_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ra(n,e){return new TE(n,e)}function wE(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Ra(t))}function AE(n,e){const t=ju(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const c=kM(l[u]);wE(n,u,c)}}function CE(n){return!!(En(n)&&n.add)}function Rd(n,e){const t=n.getValue("willChange");if(CE(t))return t.add(e)}function W_(n){return n.props[x_]}const X_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,RE=1e-7,PE=12;function bE(n,e,t,r,o){let l,u,c=0;do u=e+(t-e)/2,l=X_(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>RE&&++c<PE);return u}function Ia(n,e,t,r){if(n===e&&t===r)return Yn;const o=l=>bE(l,0,1,n,t);return l=>l===0||l===1?l:X_(o(l),e,r)}const j_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,q_=n=>e=>1-n(1-e),Y_=Ia(.33,1.53,.69,.99),ip=q_(Y_),$_=j_(ip),K_=n=>(n*=2)<1?.5*ip(n):.5*(2-Math.pow(2,-10*(n-1))),rp=n=>1-Math.sin(Math.acos(n)),Z_=q_(rp),Q_=j_(rp),J_=n=>/^0[^.\s]+$/u.test(n);function DE(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||J_(n):!0}const Ma=n=>Math.round(n*1e5)/1e5,sp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function LE(n){return n==null}const IE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,op=(n,e)=>t=>!!(typeof t=="string"&&IE.test(t)&&t.startsWith(n)||e&&!LE(t)&&Object.prototype.hasOwnProperty.call(t,e)),ey=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,c]=r.match(sp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},UE=n=>nr(0,255,n),Of={...Do,transform:n=>Math.round(UE(n))},vs={test:op("rgb","red"),parse:ey("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Of.transform(n)+", "+Of.transform(e)+", "+Of.transform(t)+", "+Ma(Ca.transform(r))+")"};function NE(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Pd={test:op("#"),parse:NE,transform:vs.transform},fo={test:op("hsl","hue"),parse:ey("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+bi.transform(Ma(e))+", "+bi.transform(Ma(t))+", "+Ma(Ca.transform(r))+")"},Mn={test:n=>vs.test(n)||Pd.test(n)||fo.test(n),parse:n=>vs.test(n)?vs.parse(n):fo.test(n)?fo.parse(n):Pd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?vs.transform(n):fo.transform(n)},FE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function OE(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(sp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(FE))===null||t===void 0?void 0:t.length)||0)>0}const ty="number",ny="color",kE="var",BE="var(",cv="${}",zE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Pa(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const c=e.replace(zE,d=>(Mn.test(d)?(r.color.push(l),o.push(ny),t.push(Mn.parse(d))):d.startsWith(BE)?(r.var.push(l),o.push(kE),t.push(d)):(r.number.push(l),o.push(ty),t.push(parseFloat(d))),++l,cv)).split(cv);return{values:t,split:c,indexes:r,types:o}}function iy(n){return Pa(n).values}function ry(n){const{split:e,types:t}=Pa(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const c=t[u];c===ty?l+=Ma(o[u]):c===ny?l+=Mn.transform(o[u]):l+=o[u]}return l}}const VE=n=>typeof n=="number"?0:n;function HE(n){const e=iy(n);return ry(n)(e.map(VE))}const kr={test:OE,parse:iy,createTransformer:ry,getAnimatableNone:HE},GE=new Set(["brightness","contrast","saturate","opacity"]);function WE(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(sp)||[];if(!r)return n;const o=t.replace(r,"");let l=GE.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const XE=/\b([a-z-]*)\(.*?\)/gu,bd={...kr,getAnimatableNone:n=>{const e=n.match(XE);return e?e.map(WE).join(" "):n}},jE={...Wh,color:Mn,backgroundColor:Mn,outlineColor:Mn,fill:Mn,stroke:Mn,borderColor:Mn,borderTopColor:Mn,borderRightColor:Mn,borderBottomColor:Mn,borderLeftColor:Mn,filter:bd,WebkitFilter:bd},ap=n=>jE[n];function sy(n,e){let t=ap(n);return t!==bd&&(t=kr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const qE=new Set(["auto","none","0"]);function YE(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!qE.has(l)&&Pa(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=sy(t,o)}const fv=n=>n===Do||n===et,dv=(n,e)=>parseFloat(n.split(", ")[e]),hv=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return dv(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?dv(l[1],n):0}},$E=new Set(["x","y","z"]),KE=bo.filter(n=>!$E.has(n));function ZE(n){const e=[];return KE.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Mo={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:hv(4,13),y:hv(5,14)};Mo.translateX=Mo.x;Mo.translateY=Mo.y;const xs=new Set;let Dd=!1,Ld=!1;function oy(){if(Ld){const n=Array.from(xs).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=ZE(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var c;(c=r.getValue(l))===null||c===void 0||c.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ld=!1,Dd=!1,xs.forEach(n=>n.complete()),xs.clear()}function ay(){xs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Ld=!0)})}function QE(){ay(),oy()}class lp{constructor(e,t,r,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(xs.add(this),Dd||(Dd=!0,kt.read(ay),kt.resolveKeyframes(oy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const u=o==null?void 0:o.get(),c=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,c);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=c),o&&u===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),xs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,xs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ly=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),JE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function eT(n){const e=JE.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function uy(n,e,t=1){const[r,o]=eT(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return ly(u)?parseFloat(u):u}return Gh(o)?uy(o,e,t+1):o}const cy=n=>e=>e.test(n),tT={test:n=>n==="auto",parse:n=>n},fy=[Do,et,bi,Ir,WM,GM,tT],pv=n=>fy.find(cy(n));class dy extends lp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),Gh(h))){const m=uy(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!H_.has(r)||e.length!==2)return;const[o,l]=e,u=pv(o),c=pv(l);if(u!==c)if(fv(u)&&fv(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)DE(e[o])&&r.push(o);r.length&&YE(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mo[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=Mo[r](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const mv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(kr.test(n)||n==="0")&&!n.startsWith("url("));function nT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function iT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=mv(o,e),c=mv(l,e);return!u||!c?!1:nT(n)||(t==="spring"||Zh(t))&&r}const rT=n=>n!==null;function qu(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(rT),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const sT=40;class hy{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...c}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Di.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,...c},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>sT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&QE(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Di.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:u,onComplete:c,onUpdate:d,isGenerator:h}=this.options;if(!h&&!iT(e,r,o,l))if(u)this.options.duration=0;else{d&&d(qu(e,this.options,t)),c&&c(),this.resolveFinishedPromise();return}const m=this.initPlayback(e,t);m!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...m},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Gt=(n,e,t)=>n+(e-n)*t;function kf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function oT({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=kf(d,c,n+1/3),l=kf(d,c,n),u=kf(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Nu(n,e){return t=>t>0?e:n}const Bf=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},aT=[Pd,vs,fo],lT=n=>aT.find(e=>e.test(n));function gv(n){const e=lT(n);if(!e)return!1;let t=e.parse(n);return e===fo&&(t=oT(t)),t}const vv=(n,e)=>{const t=gv(n),r=gv(e);if(!t||!r)return Nu(n,e);const o={...t};return l=>(o.red=Bf(t.red,r.red,l),o.green=Bf(t.green,r.green,l),o.blue=Bf(t.blue,r.blue,l),o.alpha=Gt(t.alpha,r.alpha,l),vs.transform(o))},uT=(n,e)=>t=>e(n(t)),Ua=(...n)=>n.reduce(uT),Id=new Set(["none","hidden"]);function cT(n,e){return Id.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function fT(n,e){return t=>Gt(n,e,t)}function up(n){return typeof n=="number"?fT:typeof n=="string"?Gh(n)?Nu:Mn.test(n)?vv:pT:Array.isArray(n)?py:typeof n=="object"?Mn.test(n)?vv:dT:Nu}function py(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>up(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function dT(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=up(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function hT(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],c=n.indexes[u][o[u]],d=(t=n.values[c])!==null&&t!==void 0?t:0;r[l]=d,o[u]++}return r}const pT=(n,e)=>{const t=kr.createTransformer(e),r=Pa(n),o=Pa(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Id.has(n)&&!o.values.length||Id.has(e)&&!r.values.length?cT(n,e):Ua(py(hT(r,o),o.values),t):Nu(n,e)};function my(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Gt(n,e,t):up(n)(n,e)}const mT=5;function gy(n,e,t){const r=Math.max(e-mT,0);return G_(t-n(r),e-r)}const jt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},zf=.001;function gT({duration:n=jt.duration,bounce:e=jt.bounce,velocity:t=jt.velocity,mass:r=jt.mass}){let o,l,u=1-e;u=nr(jt.minDamping,jt.maxDamping,u),n=nr(jt.minDuration,jt.maxDuration,er(n)),u<1?(o=h=>{const m=h*u,g=m*n,v=m-t,x=Ud(h,u),M=Math.exp(-g);return zf-v/x*M},l=h=>{const g=h*u*n,v=g*t+t,x=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-g),E=Ud(Math.pow(h,2),u);return(-o(h)+zf>0?-1:1)*((v-x)*M)/E}):(o=h=>{const m=Math.exp(-h*n),g=(h-t)*n+1;return-zf+m*g},l=h=>{const m=Math.exp(-h*n),g=(t-h)*(n*n);return m*g});const c=5/n,d=_T(o,l,c);if(n=Ji(n),isNaN(d))return{stiffness:jt.stiffness,damping:jt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const vT=12;function _T(n,e,t){let r=t;for(let o=1;o<vT;o++)r=r-n(r)/e(r);return r}function Ud(n,e){return n*Math.sqrt(1-e*e)}const yT=["duration","bounce"],xT=["stiffness","damping","mass"];function _v(n,e){return e.some(t=>n[t]!==void 0)}function ST(n){let e={velocity:jt.velocity,stiffness:jt.stiffness,damping:jt.damping,mass:jt.mass,isResolvedFromDuration:!1,...n};if(!_v(n,xT)&&_v(n,yT))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*nr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:jt.mass,stiffness:o,damping:l}}else{const t=gT(n);e={...e,...t,mass:jt.mass},e.isResolvedFromDuration=!0}return e}function vy(n=jt.visualDuration,e=jt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:g,velocity:v,isResolvedFromDuration:x}=ST({...t,velocity:-er(t.velocity||0)}),M=v||0,E=h/(2*Math.sqrt(d*m)),S=u-l,y=er(Math.sqrt(d/m)),L=Math.abs(S)<5;r||(r=L?jt.restSpeed.granular:jt.restSpeed.default),o||(o=L?jt.restDelta.granular:jt.restDelta.default);let b;if(E<1){const U=Ud(y,E);b=N=>{const F=Math.exp(-E*y*N);return u-F*((M+E*y*S)/U*Math.sin(U*N)+S*Math.cos(U*N))}}else if(E===1)b=U=>u-Math.exp(-y*U)*(S+(M+y*S)*U);else{const U=y*Math.sqrt(E*E-1);b=N=>{const F=Math.exp(-E*y*N),k=Math.min(U*N,300);return u-F*((M+E*y*S)*Math.sinh(k)+U*S*Math.cosh(k))/U}}const R={calculatedDuration:x&&g||null,next:U=>{const N=b(U);if(x)c.done=U>=g;else{let F=0;E<1&&(F=U===0?Ji(M):gy(b,U,N));const k=Math.abs(F)<=r,P=Math.abs(u-N)<=o;c.done=k&&P}return c.value=c.done?u:N,c},toString:()=>{const U=Math.min(N_(R),Ad),N=F_(F=>R.next(U*F).value,U,30);return U+"ms "+N}};return R}function yv({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:m}){const g=n[0],v={done:!1,value:g},x=k=>c!==void 0&&k<c||d!==void 0&&k>d,M=k=>c===void 0?d:d===void 0||Math.abs(c-k)<Math.abs(d-k)?c:d;let E=t*e;const S=g+E,y=u===void 0?S:u(S);y!==S&&(E=y-g);const L=k=>-E*Math.exp(-k/r),b=k=>y+L(k),R=k=>{const P=L(k),C=b(k);v.done=Math.abs(P)<=h,v.value=v.done?y:C};let U,N;const F=k=>{x(v.value)&&(U=k,N=vy({keyframes:[v.value,M(v.value)],velocity:gy(b,k,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return F(0),{calculatedDuration:null,next:k=>{let P=!1;return!N&&U===void 0&&(P=!0,R(k),F(k)),U!==void 0&&k>=U?N.next(k-U):(!P&&R(k),v)}}}const MT=Ia(.42,0,1,1),ET=Ia(0,0,.58,1),_y=Ia(.42,0,.58,1),TT=n=>Array.isArray(n)&&typeof n[0]!="number",wT={linear:Yn,easeIn:MT,easeInOut:_y,easeOut:ET,circIn:rp,circInOut:Q_,circOut:Z_,backIn:ip,backInOut:$_,backOut:Y_,anticipate:K_},xv=n=>{if(Qh(n)){m_(n.length===4);const[e,t,r,o]=n;return Ia(e,t,r,o)}else if(typeof n=="string")return wT[n];return n};function AT(n,e,t){const r=[],o=t||my,l=n.length-1;for(let u=0;u<l;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||Yn:e;c=Ua(d,c)}r.push(c)}return r}function CT(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(m_(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=AT(e,r,o),d=c.length,h=m=>{if(u&&m<n[0])return e[0];let g=0;if(d>1)for(;g<n.length-2&&!(m<n[g+1]);g++);const v=xo(n[g],n[g+1],m);return c[g](v)};return t?m=>h(nr(n[0],n[l-1],m)):h}function RT(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=xo(0,e,r);n.push(Gt(t,1,o))}}function PT(n){const e=[0];return RT(e,n.length-1),e}function bT(n,e){return n.map(t=>t*e)}function DT(n,e){return n.map(()=>e||_y).splice(0,n.length-1)}function Fu({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=TT(r)?r.map(xv):xv(r),l={done:!1,value:e[0]},u=bT(t&&t.length===e.length?t:PT(e),n),c=CT(u,e,{ease:Array.isArray(o)?o:DT(e,o)});return{calculatedDuration:n,next:d=>(l.value=c(d),l.done=d>=n,l)}}const LT=n=>{const e=({timestamp:t})=>n(t);return{start:()=>kt.update(e,!0),stop:()=>Or(e),now:()=>hn.isProcessing?hn.timestamp:Di.now()}},IT={decay:yv,inertia:yv,tween:Fu,keyframes:Fu,spring:vy},UT=n=>n/100;class cp extends hy{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,u=(o==null?void 0:o.KeyframeResolver)||lp,c=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(l,c,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,c=Zh(t)?t:IT[t]||Fu;let d,h;c!==Fu&&typeof e[0]!="number"&&(d=Ua(UT,my(e[0],e[1])),e=[0,100]);const m=c({...this.options,keyframes:e});l==="mirror"&&(h=c({...this.options,keyframes:[...e].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=N_(m));const{calculatedDuration:g}=m,v=g+o,x=v*(r+1)-o;return{generator:m,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:g,resolvedDuration:v,totalDuration:x}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:k}=this.options;return{done:!0,value:k[k.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:c,keyframes:d,calculatedDuration:h,totalDuration:m,resolvedDuration:g}=r;if(this.startTime===null)return l.next(0);const{delay:v,repeat:x,repeatType:M,repeatDelay:E,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-m/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-v*(this.speed>=0?1:-1),L=this.speed>=0?y<0:y>m;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=m);let b=this.currentTime,R=l;if(x){const k=Math.min(this.currentTime,m)/g;let P=Math.floor(k),C=k%1;!C&&k>=1&&(C=1),C===1&&P--,P=Math.min(P,x+1),!!(P%2)&&(M==="reverse"?(C=1-C,E&&(C-=E/g)):M==="mirror"&&(R=u)),b=nr(0,1,C)*g}const U=L?{done:!1,value:d[0]}:R.next(b);c&&(U.value=c(U.value));let{done:N}=U;!L&&h!==null&&(N=this.speed>=0?this.currentTime>=m:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return F&&o!==void 0&&(U.value=qu(d,this.options,o)),S&&S(U.value),F&&this.finish(),U}get duration(){const{resolved:e}=this;return e?er(e.calculatedDuration):0}get time(){return er(this.currentTime)}set time(e){e=Ji(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=er(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=LT,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const NT=new Set(["opacity","clipPath","filter","transform"]);function FT(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:c="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const m=k_(c,o);return Array.isArray(m)&&(h.easing=m),n.animate(h,{delay:r,duration:o,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const OT=Fh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ou=10,kT=2e4;function BT(n){return Zh(n.type)||n.type==="spring"||!O_(n.ease)}function zT(n,e){const t=new cp({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<kT;)r=t.sample(l),o.push(r.value),l+=Ou;return{times:void 0,keyframes:o,duration:l-Ou,ease:"linear"}}const yy={anticipate:K_,backInOut:$_,circInOut:Q_};function VT(n){return n in yy}class Sv extends hy{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new dy(l,(u,c)=>this.onKeyframesResolved(u,c),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:l,type:u,motionValue:c,name:d,startTime:h}=this.options;if(!c.owner||!c.owner.current)return!1;if(typeof l=="string"&&Uu()&&VT(l)&&(l=yy[l]),BT(this.options)){const{onComplete:g,onUpdate:v,motionValue:x,element:M,...E}=this.options,S=zT(e,E);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,l=S.ease,u="keyframes"}const m=FT(c.owner.current,d,e,{...this.options,duration:r,times:o,ease:l});return m.startTime=h??this.calcStartTime(),this.pendingTimeline?(sv(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:g}=this.options;c.set(qu(e,this.options,t)),g&&g(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:r,times:o,type:u,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return er(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return er(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=Ji(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Yn;const{animation:r}=t;sv(r,e)}return Yn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:u,times:c}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:m,onComplete:g,element:v,...x}=this.options,M=new cp({...x,keyframes:r,duration:o,type:l,ease:u,times:c,isGenerator:!0}),E=Ji(this.time);h.setWithVelocity(M.sample(E-Ou).value,M.sample(E).value,Ou)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:u,type:c}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return OT()&&r&&NT.has(r)&&!d&&!h&&!o&&l!=="mirror"&&u!==0&&c!=="inertia"}}const HT={type:"spring",stiffness:500,damping:25,restSpeed:10},GT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),WT={type:"keyframes",duration:.8},XT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},jT=(n,{keyframes:e})=>e.length>2?WT:Ts.has(n)?n.startsWith("scale")?GT(e[1]):HT:XT;function qT({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const fp=(n,e,t,r={},o,l)=>u=>{const c=Kh(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-Ji(d);let m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:v=>{e.set(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:l?void 0:o};qT(c)||(m={...m,...jT(n,m)}),m.duration&&(m.duration=Ji(m.duration)),m.repeatDelay&&(m.repeatDelay=Ji(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let g=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(g=!0)),g&&!l&&e.get()!==void 0){const v=qu(m.keyframes,c);if(v!==void 0)return kt.update(()=>{m.onUpdate(v),m.onComplete()}),new dE([])}return!l&&Sv.supports(m)?new Sv(m):new cp(m)};function YT({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function xy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:u=n.getDefaultTransition(),transitionEnd:c,...d}=e;r&&(u=r);const h=[],m=o&&n.animationState&&n.animationState.getState()[o];for(const g in d){const v=n.getValue(g,(l=n.latestValues[g])!==null&&l!==void 0?l:null),x=d[g];if(x===void 0||m&&YT(m,g))continue;const M={delay:t,...Kh(u||{},g)};let E=!1;if(window.MotionHandoffAnimation){const y=W_(n);if(y){const L=window.MotionHandoffAnimation(y,g,kt);L!==null&&(M.startTime=L,E=!0)}}Rd(n,g),v.start(fp(g,v,x,n.shouldReduceMotion&&H_.has(g)?{type:!1}:M,n,E));const S=v.animation;S&&h.push(S)}return c&&Promise.all(h).then(()=>{kt.update(()=>{c&&AE(n,c)})}),h}function Nd(n,e,t={}){var r;const o=ju(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const u=o?()=>Promise.all(xy(n,o,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:v}=l;return $T(n,e,m+h,g,v,t)}:()=>Promise.resolve(),{when:d}=l;if(d){const[h,m]=d==="beforeChildren"?[u,c]:[c,u];return h().then(()=>m())}else return Promise.all([u(),c(t.delay)])}function $T(n,e,t=0,r=0,o=1,l){const u=[],c=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>c-h*r;return Array.from(n.variantChildren).sort(KT).forEach((h,m)=>{h.notify("AnimationStart",e),u.push(Nd(h,e,{...l,delay:t+d(m)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function KT(n,e){return n.sortNodePosition(e)}function ZT(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Nd(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=Nd(n,e,t);else{const o=typeof e=="function"?ju(n,e,t.custom):e;r=Promise.all(xy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const QT=kh.length;function Sy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Sy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<QT;t++){const r=kh[t],o=n.props[r];(Aa(o)||o===!1)&&(e[r]=o)}return e}const JT=[...Oh].reverse(),e1=Oh.length;function t1(n){return e=>Promise.all(e.map(({animation:t,options:r})=>ZT(n,t,r)))}function n1(n){let e=t1(n),t=Mv(),r=!0;const o=d=>(h,m)=>{var g;const v=ju(n,m,d==="exit"?(g=n.presenceContext)===null||g===void 0?void 0:g.custom:void 0);if(v){const{transition:x,transitionEnd:M,...E}=v;h={...h,...E,...M}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,m=Sy(n.parent)||{},g=[],v=new Set;let x={},M=1/0;for(let S=0;S<e1;S++){const y=JT[S],L=t[y],b=h[y]!==void 0?h[y]:m[y],R=Aa(b),U=y===d?L.isActive:null;U===!1&&(M=S);let N=b===m[y]&&b!==h[y]&&R;if(N&&r&&n.manuallyAnimateOnMount&&(N=!1),L.protectedKeys={...x},!L.isActive&&U===null||!b&&!L.prevProp||Wu(b)||typeof b=="boolean")continue;const F=i1(L.prevProp,b);let k=F||y===d&&L.isActive&&!N&&R||S>M&&R,P=!1;const C=Array.isArray(b)?b:[b];let V=C.reduce(o(y),{});U===!1&&(V={});const{prevResolvedValues:oe={}}=L,Q={...oe,...V},ue=ie=>{k=!0,v.has(ie)&&(P=!0,v.delete(ie)),L.needsAnimating[ie]=!0;const z=n.getValue(ie);z&&(z.liveStyle=!1)};for(const ie in Q){const z=V[ie],ae=oe[ie];if(x.hasOwnProperty(ie))continue;let re=!1;wd(z)&&wd(ae)?re=!U_(z,ae):re=z!==ae,re?z!=null?ue(ie):v.add(ie):z!==void 0&&v.has(ie)?ue(ie):L.protectedKeys[ie]=!0}L.prevProp=b,L.prevResolvedValues=V,L.isActive&&(x={...x,...V}),r&&n.blockInitialAnimation&&(k=!1),k&&(!(N&&F)||P)&&g.push(...C.map(ie=>({animation:ie,options:{type:y}})))}if(v.size){const S={};v.forEach(y=>{const L=n.getBaseTarget(y),b=n.getValue(y);b&&(b.liveStyle=!0),S[y]=L??null}),g.push({animation:S})}let E=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(g):Promise.resolve()}function c(d,h){var m;if(t[d].isActive===h)return Promise.resolve();(m=n.variantChildren)===null||m===void 0||m.forEach(v=>{var x;return(x=v.animationState)===null||x===void 0?void 0:x.setActive(d,h)}),t[d].isActive=h;const g=u(d);for(const v in t)t[v].protectedKeys={};return g}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t,reset:()=>{t=Mv(),r=!0}}}function i1(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!U_(e,n):!1}function rs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Mv(){return{animate:rs(!0),whileInView:rs(),whileHover:rs(),whileTap:rs(),whileDrag:rs(),whileFocus:rs(),exit:rs()}}class Vr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class r1 extends Vr{constructor(e){super(e),e.animationState||(e.animationState=n1(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Wu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let s1=0;class o1 extends Vr{constructor(){super(...arguments),this.id=s1++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const a1={animation:{Feature:r1},exit:{Feature:o1}};function ba(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Na(n){return{point:{x:n.pageX,y:n.pageY}}}const l1=n=>e=>Jh(e)&&n(e,Na(e));function Ea(n,e,t,r){return ba(n,e,l1(t),r)}const Ev=(n,e)=>Math.abs(n-e);function u1(n,e){const t=Ev(n.x,e.x),r=Ev(n.y,e.y);return Math.sqrt(t**2+r**2)}class My{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Hf(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,x=u1(g.offset,{x:0,y:0})>=3;if(!v&&!x)return;const{point:M}=g,{timestamp:E}=hn;this.history.push({...M,timestamp:E});const{onStart:S,onMove:y}=this.handlers;v||(S&&S(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=Vf(v,this.transformPagePoint),kt.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:x,onSessionEnd:M,resumeAnimation:E}=this.handlers;if(this.dragSnapToOrigin&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Hf(g.type==="pointercancel"?this.lastMoveEventInfo:Vf(v,this.transformPagePoint),this.history);this.startEvent&&x&&x(g,S),M&&M(g,S)},!Jh(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=Na(e),c=Vf(u,this.transformPagePoint),{point:d}=c,{timestamp:h}=hn;this.history=[{...d,timestamp:h}];const{onSessionStart:m}=t;m&&m(e,Hf(c,this.history)),this.removeListeners=Ua(Ea(this.contextWindow,"pointermove",this.handlePointerMove),Ea(this.contextWindow,"pointerup",this.handlePointerUp),Ea(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Or(this.updatePoint)}}function Vf(n,e){return e?{point:e(n.point)}:n}function Tv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Hf({point:n},e){return{point:n,delta:Tv(n,Ey(e)),offset:Tv(n,c1(e)),velocity:f1(e,.1)}}function c1(n){return n[0]}function Ey(n){return n[n.length-1]}function f1(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=Ey(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>Ji(e)));)t--;if(!r)return{x:0,y:0};const l=er(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const Ty=1e-4,d1=1-Ty,h1=1+Ty,wy=.01,p1=0-wy,m1=0+wy;function $n(n){return n.max-n.min}function g1(n,e,t){return Math.abs(n-e)<=t}function wv(n,e,t,r=.5){n.origin=r,n.originPoint=Gt(e.min,e.max,n.origin),n.scale=$n(t)/$n(e),n.translate=Gt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=d1&&n.scale<=h1||isNaN(n.scale))&&(n.scale=1),(n.translate>=p1&&n.translate<=m1||isNaN(n.translate))&&(n.translate=0)}function Ta(n,e,t,r){wv(n.x,e.x,t.x,r?r.originX:void 0),wv(n.y,e.y,t.y,r?r.originY:void 0)}function Av(n,e,t){n.min=t.min+e.min,n.max=n.min+$n(e)}function v1(n,e,t){Av(n.x,e.x,t.x),Av(n.y,e.y,t.y)}function Cv(n,e,t){n.min=e.min-t.min,n.max=n.min+$n(e)}function wa(n,e,t){Cv(n.x,e.x,t.x),Cv(n.y,e.y,t.y)}function _1(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Gt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Gt(t,n,r.max):Math.min(n,t)),n}function Rv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function y1(n,{top:e,left:t,bottom:r,right:o}){return{x:Rv(n.x,t,o),y:Rv(n.y,e,r)}}function Pv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function x1(n,e){return{x:Pv(n.x,e.x),y:Pv(n.y,e.y)}}function S1(n,e){let t=.5;const r=$n(n),o=$n(e);return o>r?t=xo(e.min,e.max-r,n.min):r>o&&(t=xo(n.min,n.max-o,e.min)),nr(0,1,t)}function M1(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Fd=.35;function E1(n=Fd){return n===!1?n=0:n===!0&&(n=Fd),{x:bv(n,"left","right"),y:bv(n,"top","bottom")}}function bv(n,e,t){return{min:Dv(n,e),max:Dv(n,t)}}function Dv(n,e){return typeof n=="number"?n:n[e]||0}const Lv=()=>({translate:0,scale:1,origin:0,originPoint:0}),ho=()=>({x:Lv(),y:Lv()}),Iv=()=>({min:0,max:0}),$t=()=>({x:Iv(),y:Iv()});function ri(n){return[n("x"),n("y")]}function Ay({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function T1({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function w1(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Gf(n){return n===void 0||n===1}function Od({scale:n,scaleX:e,scaleY:t}){return!Gf(n)||!Gf(e)||!Gf(t)}function fs(n){return Od(n)||Cy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Cy(n){return Uv(n.x)||Uv(n.y)}function Uv(n){return n&&n!=="0%"}function ku(n,e,t){const r=n-t,o=e*r;return t+o}function Nv(n,e,t,r,o){return o!==void 0&&(n=ku(n,o,r)),ku(n,t,r)+e}function kd(n,e=0,t=1,r,o){n.min=Nv(n.min,e,t,r,o),n.max=Nv(n.max,e,t,r,o)}function Ry(n,{x:e,y:t}){kd(n.x,e.translate,e.scale,e.originPoint),kd(n.y,t.translate,t.scale,t.originPoint)}const Fv=.999999999999,Ov=1.0000000000001;function A1(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&mo(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,Ry(n,u)),r&&fs(l.latestValues)&&mo(n,l.latestValues))}e.x<Ov&&e.x>Fv&&(e.x=1),e.y<Ov&&e.y>Fv&&(e.y=1)}function po(n,e){n.min=n.min+e,n.max=n.max+e}function kv(n,e,t,r,o=.5){const l=Gt(n.min,n.max,o);kd(n,e,t,l,r)}function mo(n,e){kv(n.x,e.x,e.scaleX,e.scale,e.originX),kv(n.y,e.y,e.scaleY,e.scale,e.originY)}function Py(n,e){return Ay(w1(n.getBoundingClientRect(),e))}function C1(n,e,t){const r=Py(n,t),{scroll:o}=e;return o&&(po(r.x,o.offset.x),po(r.y,o.offset.y)),r}const by=({current:n})=>n?n.ownerDocument.defaultView:null,R1=new WeakMap;class P1{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$t(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=m=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Na(m).point)},l=(m,g)=>{const{drag:v,dragPropagation:x,onDragStart:M}=this.getProps();if(v&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=SE(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ri(S=>{let y=this.getAxisMotionValue(S).get()||0;if(bi.test(y)){const{projection:L}=this.visualElement;if(L&&L.layout){const b=L.layout.layoutBox[S];b&&(y=$n(b)*(parseFloat(y)/100))}}this.originPoint[S]=y}),M&&kt.postRender(()=>M(m,g)),Rd(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},u=(m,g)=>{const{dragPropagation:v,dragDirectionLock:x,onDirectionLock:M,onDrag:E}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:S}=g;if(x&&this.currentDirection===null){this.currentDirection=b1(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),E&&E(m,g)},c=(m,g)=>this.stop(m,g),d=()=>ri(m=>{var g;return this.getAnimationState(m)==="paused"&&((g=this.getAxisMotionValue(m).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new My(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:by(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&kt.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Ql(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=_1(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&co(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=y1(o.layoutBox,t):this.constraints=!1,this.elastic=E1(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&ri(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=M1(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!co(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=C1(r,o.root,this.visualElement.getTransformPagePoint());let u=x1(o.layout.layoutBox,l);if(t){const c=t(T1(u));this.hasMutatedConstraints=!!c,c&&(u=Ay(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=ri(m=>{if(!Ql(m,t,this.currentDirection))return;let g=d&&d[m]||{};u&&(g={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Rd(this.visualElement,e),r.start(fp(e,r,0,t,this.visualElement,!1))}stopAnimation(){ri(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ri(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ri(t=>{const{drag:r}=this.getProps();if(!Ql(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-Gt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!co(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ri(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=S1({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ri(u=>{if(!Ql(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(Gt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;R1.set(this.visualElement,this);const e=this.visualElement.current,t=Ea(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();co(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),kt.read(r);const u=ba(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(ri(m=>{const g=this.getAxisMotionValue(m);g&&(this.originPoint[m]+=d[m].translate,g.set(g.get()+d[m].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Fd,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function Ql(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function b1(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class D1 extends Vr{constructor(e){super(e),this.removeGroupControls=Yn,this.removeListeners=Yn,this.controls=new P1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Yn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Bv=n=>(e,t)=>{n&&kt.postRender(()=>n(e,t))};class L1 extends Vr{constructor(){super(...arguments),this.removePointerDownListener=Yn}onPointerDown(e){this.session=new My(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:by(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Bv(e),onStart:Bv(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&kt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Ea(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const wu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function zv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const da={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(et.test(n))n=parseFloat(n);else return n;const t=zv(n,e.target.x),r=zv(n,e.target.y);return`${t}% ${r}%`}},I1={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=kr.parse(n);if(o.length>5)return r;const l=kr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=Gt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};class U1 extends we.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;eE(N1),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),wu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,u=r.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||kt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),zh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Dy(n){const[e,t]=h_(),r=we.useContext(Lh);return Qi.jsx(U1,{...n,layoutGroup:r,switchLayoutGroup:we.useContext(S_),isPresent:e,safeToRemove:t})}const N1={borderRadius:{...da,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:da,borderTopRightRadius:da,borderBottomLeftRadius:da,borderBottomRightRadius:da,boxShadow:I1};function F1(n,e,t){const r=En(n)?n:Ra(n);return r.start(fp("",r,e,t)),r.animation}function O1(n){return n instanceof SVGElement&&n.tagName!=="svg"}const k1=(n,e)=>n.depth-e.depth;class B1{constructor(){this.children=[],this.isDirty=!1}add(e){ep(this.children,e),this.isDirty=!0}remove(e){tp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(k1),this.isDirty=!1,this.children.forEach(e)}}function z1(n,e){const t=Di.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(Or(r),n(l-e))};return kt.read(r,!0),()=>Or(r)}const Ly=["TopLeft","TopRight","BottomLeft","BottomRight"],V1=Ly.length,Vv=n=>typeof n=="string"?parseFloat(n):n,Hv=n=>typeof n=="number"||et.test(n);function H1(n,e,t,r,o,l){o?(n.opacity=Gt(0,t.opacity!==void 0?t.opacity:1,G1(r)),n.opacityExit=Gt(e.opacity!==void 0?e.opacity:1,0,W1(r))):l&&(n.opacity=Gt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<V1;u++){const c=`border${Ly[u]}Radius`;let d=Gv(e,c),h=Gv(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Hv(d)===Hv(h)?(n[c]=Math.max(Gt(Vv(d),Vv(h),r),0),(bi.test(h)||bi.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=Gt(e.rotate||0,t.rotate||0,r))}function Gv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const G1=Iy(0,.5,Z_),W1=Iy(.5,.95,Yn);function Iy(n,e,t){return r=>r<n?0:r>e?1:t(xo(n,e,r))}function Wv(n,e){n.min=e.min,n.max=e.max}function ni(n,e){Wv(n.x,e.x),Wv(n.y,e.y)}function Xv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function jv(n,e,t,r,o){return n-=e,n=ku(n,1/t,r),o!==void 0&&(n=ku(n,1/o,r)),n}function X1(n,e=0,t=1,r=.5,o,l=n,u=n){if(bi.test(e)&&(e=parseFloat(e),e=Gt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Gt(l.min,l.max,r);n===l&&(c-=e),n.min=jv(n.min,e,t,c,o),n.max=jv(n.max,e,t,c,o)}function qv(n,e,[t,r,o],l,u){X1(n,e[t],e[r],e[o],e.scale,l,u)}const j1=["x","scaleX","originX"],q1=["y","scaleY","originY"];function Yv(n,e,t,r){qv(n.x,e,j1,t?t.x:void 0,r?r.x:void 0),qv(n.y,e,q1,t?t.y:void 0,r?r.y:void 0)}function $v(n){return n.translate===0&&n.scale===1}function Uy(n){return $v(n.x)&&$v(n.y)}function Kv(n,e){return n.min===e.min&&n.max===e.max}function Y1(n,e){return Kv(n.x,e.x)&&Kv(n.y,e.y)}function Zv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Ny(n,e){return Zv(n.x,e.x)&&Zv(n.y,e.y)}function Qv(n){return $n(n.x)/$n(n.y)}function Jv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class $1{constructor(){this.members=[]}add(e){ep(this.members,e),e.scheduleRender()}remove(e){if(tp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function K1(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:g,rotateY:v,skewX:x,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),x&&(r+=`skewX(${x}deg) `),M&&(r+=`skewY(${M}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const ds={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},xa=typeof window<"u"&&window.MotionDebug!==void 0,Wf=["","X","Y","Z"],Z1={visibility:"hidden"},e0=1e3;let Q1=0;function Xf(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function Fy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=W_(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",kt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Fy(r)}function Oy({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e==null?void 0:e()){this.id=Q1++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,xa&&(ds.totalNodes=ds.resolvedTargetDeltas=ds.recalculatedProjection=0),this.nodes.forEach(tw),this.nodes.forEach(ow),this.nodes.forEach(aw),this.nodes.forEach(nw),xa&&window.MotionDebug.record(ds)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new B1)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new np),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=O1(u),this.instance=u;const{layoutId:d,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||d)&&(this.isLayoutDirty=!0),n){let g;const v=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=z1(v,250),wu.hasAnimatedSinceResize&&(wu.hasAnimatedSinceResize=!1,this.nodes.forEach(n0))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeTargetChanged:x,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||m.getDefaultTransition()||dw,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=m.getProps(),L=!this.targetLayout||!Ny(this.targetLayout,M)||x,b=!v&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||b||v&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,b);const R={...Kh(E,"layout"),onPlay:S,onComplete:y};(m.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R)}else v||n0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Or(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(lw),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Fy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const g=this.path[m];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(t0);return}this.isUpdating||this.nodes.forEach(rw),this.isUpdating=!1,this.nodes.forEach(sw),this.nodes.forEach(J1),this.nodes.forEach(ew),this.clearAllSnapshots();const c=Di.now();hn.delta=nr(0,1e3/60,c-hn.timestamp),hn.timestamp=c,hn.isProcessing=!0,Nf.update.process(hn),Nf.preRender.process(hn),Nf.render.process(hn),hn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,zh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(iw),this.sharedNodes.forEach(uw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,kt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){kt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=$t(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!Uy(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&(c||fs(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),hw(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:c}=this.options;if(!c)return $t();const d=c.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(pw))){const{scroll:m}=this.root;m&&(po(d.x,m.offset.x),po(d.y,m.offset.y))}return d}removeElementScroll(u){var c;const d=$t();if(ni(d,u),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return d;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:g,options:v}=m;m!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&ni(d,u),po(d.x,g.offset.x),po(d.y,g.offset.y))}return d}applyTransform(u,c=!1){const d=$t();ni(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!c&&m.options.layoutScroll&&m.scroll&&m!==m.root&&mo(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),fs(m.latestValues)&&mo(d,m.latestValues)}return fs(this.latestValues)&&mo(d,this.latestValues),d}removeTransform(u){const c=$t();ni(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!fs(h.latestValues))continue;Od(h.latestValues)&&h.updateSnapshot();const m=$t(),g=h.measurePageBox();ni(m,g),Yv(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return fs(this.latestValues)&&Yv(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==hn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=hn.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$t(),this.relativeTargetOrigin=$t(),wa(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),ni(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=$t(),this.targetWithTransforms=$t()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),v1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ni(this.target,this.layout.layoutBox),Ry(this.target,this.targetDelta)):ni(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$t(),this.relativeTargetOrigin=$t(),wa(this.relativeTargetOrigin,this.target,x.target),ni(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}xa&&ds.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Od(this.parent.latestValues)||Cy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===hn.timestamp&&(h=!1),h)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;ni(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;A1(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=$t());const{target:M}=c;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Xv(this.prevProjectionDelta.x,this.projectionDelta.x),Xv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ta(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!Jv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Jv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),xa&&ds.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ho(),this.projectionDelta=ho(),this.projectionDeltaWithTransform=ho()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},g=ho();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=$t(),x=d?d.source:void 0,M=this.layout?this.layout.source:void 0,E=x!==M,S=this.getStack(),y=!S||S.members.length<=1,L=!!(E&&!y&&this.options.crossfade===!0&&!this.path.some(fw));this.animationProgress=0;let b;this.mixTargetDelta=R=>{const U=R/1e3;i0(g.x,u.x,U),i0(g.y,u.y,U),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wa(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),cw(this.relativeTarget,this.relativeTargetOrigin,v,U),b&&Y1(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=$t()),ni(b,this.relativeTarget)),E&&(this.animationValues=m,H1(m,h,this.latestValues,U,L,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=U},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Or(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=kt.update(()=>{wu.hasAnimatedSinceResize=!0,this.currentAnimation=F1(0,e0,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(e0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:m}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&ky(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||$t();const g=$n(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const v=$n(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}ni(c,d),mo(c,m),Ta(this.projectionDeltaWithTransform,this.layoutCorrected,c,m)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new $1),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&Xf("z",u,h,this.animationValues);for(let m=0;m<Wf.length;m++)Xf(`rotate${Wf[m]}`,u,h,this.animationValues),Xf(`skew${Wf[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}getProjectionStyles(u){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Z1;const h={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Eu(u==null?void 0:u.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const E={};return this.options.layoutId&&(E.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,E.pointerEvents=Eu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!fs(this.latestValues)&&(E.transform=m?m({},""):"none",this.hasProjected=!1),E}const v=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=K1(this.projectionDeltaWithTransform,this.treeScale,v),m&&(h.transform=m(v,h.transform));const{x,y:M}=this.projectionDelta;h.transformOrigin=`${x.origin*100}% ${M.origin*100}% 0`,g.animationValues?h.opacity=g===this?(d=(c=v.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const E in Iu){if(v[E]===void 0)continue;const{correct:S,applyTo:y}=Iu[E],L=h.transform==="none"?v[E]:S(v[E],g);if(y){const b=y.length;for(let R=0;R<b;R++)h[y[R]]=L}else h[E]=L}return this.options.layoutId&&(h.pointerEvents=g===this?Eu(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(t0),this.root.sharedNodes.clear()}}}function J1(n){n.updateLayout()}function ew(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=t.source!==n.layout.source;l==="size"?ri(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],x=$n(v);v.min=r[g].min,v.max=v.min+x}):ky(l,t.layoutBox,r)&&ri(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],x=$n(r[g]);v.max=v.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+x)});const c=ho();Ta(c,r,t.layoutBox);const d=ho();u?Ta(d,n.applyTransform(o,!0),t.measuredBox):Ta(d,r,t.layoutBox);const h=!Uy(c);let m=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:x}=g;if(v&&x){const M=$t();wa(M,t.layoutBox,v.layoutBox);const E=$t();wa(E,r,x.layoutBox),Ny(M,E)||(m=!0),g.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=M,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:c,hasLayoutChanged:h,hasRelativeTargetChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function tw(n){xa&&ds.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function nw(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function iw(n){n.clearSnapshot()}function t0(n){n.clearMeasurements()}function rw(n){n.isLayoutDirty=!1}function sw(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function n0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function ow(n){n.resolveTargetDelta()}function aw(n){n.calcProjection()}function lw(n){n.resetSkewAndRotation()}function uw(n){n.removeLeadSnapshot()}function i0(n,e,t){n.translate=Gt(e.translate,0,t),n.scale=Gt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function r0(n,e,t,r){n.min=Gt(e.min,t.min,r),n.max=Gt(e.max,t.max,r)}function cw(n,e,t,r){r0(n.x,e.x,t.x,r),r0(n.y,e.y,t.y,r)}function fw(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const dw={duration:.45,ease:[.4,0,.1,1]},s0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),o0=s0("applewebkit/")&&!s0("chrome/")?Math.round:Yn;function a0(n){n.min=o0(n.min),n.max=o0(n.max)}function hw(n){a0(n.x),a0(n.y)}function ky(n,e,t){return n==="position"||n==="preserve-aspect"&&!g1(Qv(e),Qv(t),.2)}function pw(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const mw=Oy({attachResizeListener:(n,e)=>ba(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),jf={current:void 0},By=Oy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!jf.current){const n=new mw({});n.mount(window),n.setOptions({layoutScroll:!0}),jf.current=n}return jf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),gw={pan:{Feature:L1},drag:{Feature:D1,ProjectionNode:By,MeasureLayout:Dy}};function l0(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&kt.postRender(()=>l(e,Na(e)))}class vw extends Vr{mount(){const{current:e}=this.node;e&&(this.unmount=gE(e,t=>(l0(this.node,t,"Start"),r=>l0(this.node,r,"End"))))}unmount(){}}class _w extends Vr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ua(ba(this.node.current,"focus",()=>this.onFocus()),ba(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function u0(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&kt.postRender(()=>l(e,Na(e)))}class yw extends Vr{mount(){const{current:e}=this.node;e&&(this.unmount=xE(e,t=>(u0(this.node,t,"Start"),(r,{success:o})=>u0(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Bd=new WeakMap,qf=new WeakMap,xw=n=>{const e=Bd.get(n.target);e&&e(n)},Sw=n=>{n.forEach(xw)};function Mw({root:n,...e}){const t=n||document;qf.has(t)||qf.set(t,{});const r=qf.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(Sw,{root:n,...e})),r[o]}function Ew(n,e,t){const r=Mw(e);return Bd.set(n,t),r.observe(n),()=>{Bd.delete(n),r.unobserve(n)}}const Tw={some:0,all:1};class ww extends Vr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:Tw[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:g}=this.node.getProps(),v=h?m:g;v&&v(d)};return Ew(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(Aw(e,t))&&this.startObserver()}unmount(){}}function Aw({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const Cw={inView:{Feature:ww},tap:{Feature:yw},focus:{Feature:_w},hover:{Feature:vw}},Rw={layout:{ProjectionNode:By,MeasureLayout:Dy}},zd={current:null},zy={current:!1};function Pw(){if(zy.current=!0,!!Nh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>zd.current=n.matches;n.addListener(e),e()}else zd.current=!1}const bw=[...fy,Mn,kr],Dw=n=>bw.find(cy(n)),c0=new WeakMap;function Lw(n,e,t){for(const r in e){const o=e[r],l=t[r];if(En(o))n.addValue(r,o);else if(En(l))n.addValue(r,Ra(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Ra(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const f0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Iw{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=lp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Di.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,kt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:m}=u;this.onUpdate=m,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!l,this.isControllingVariants=Xu(t),this.isVariantNode=y_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(t,{},this);for(const x in v){const M=v[x];d[x]!==void 0&&En(M)&&M.set(d[x],!1)}}mount(e){this.current=e,c0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),zy.current||Pw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:zd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){c0.delete(this.current),this.projection&&this.projection.unmount(),Or(this.notifyUpdate),Or(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Ts.has(e),o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&kt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in So){const t=So[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$t()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<f0.length;r++){const o=f0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=Lw(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Ra(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(ly(o)||J_(o))?o=parseFloat(o):!Dw(o)&&kr.test(t)&&(o=sy(e,t)),this.setBaseTarget(e,En(o)?o.get():o)),En(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=Hh(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!En(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new np),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class Vy extends Iw{constructor(){super(...arguments),this.KeyframeResolver=dy}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;En(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function Uw(n){return window.getComputedStyle(n)}class Nw extends Vy{constructor(){super(...arguments),this.type="html",this.renderInstance=R_}readValueFromInstance(e,t){if(Ts.has(t)){const r=ap(t);return r&&r.default||0}else{const r=Uw(e),o=(w_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Py(e,t)}build(e,t,r){Xh(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return $h(e,t,r)}}class Fw extends Vy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$t}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ts.has(t)){const r=ap(t);return r&&r.default||0}return t=P_.has(t)?t:Bh(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return L_(e,t,r)}build(e,t,r){jh(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){b_(e,t,r,o)}mount(e){this.isSVGTag=Yh(e.tagName),super.mount(e)}}const Ow=(n,e)=>Vh(n)?new Fw(e):new Nw(e,{allowProjection:n!==we.Fragment}),kw=uE({...a1,...Cw,...gw,...Rw},Ow),d0=TM(kw);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hy=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=we.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...c},d)=>we.createElement("svg",{ref:d,...zw,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:Hy("lucide",o),...c},[...u.map(([h,m])=>we.createElement(h,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=(n,e)=>{const t=we.forwardRef(({className:r,...o},l)=>we.createElement(Vw,{ref:l,iconNode:e,className:Hy(`lucide-${Bw(n)}`,r),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=Mi("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=Mi("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=Mi("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=Mi("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=Mi("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=Mi("MessageCircleHeart",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=Mi("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=Mi("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=Mi("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=Mi("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=Mi("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dp="171",Yw=0,m0=1,$w=2,Wy=1,Kw=2,qi=3,Br=0,Bn=1,Yi=2,Nr=0,vo=1,g0=2,v0=3,_0=4,Zw=5,ms=100,Qw=101,Jw=102,eA=103,tA=104,nA=200,iA=201,rA=202,sA=203,Gd=204,Wd=205,oA=206,aA=207,lA=208,uA=209,cA=210,fA=211,dA=212,hA=213,pA=214,Xd=0,jd=1,qd=2,Eo=3,Yd=4,$d=5,Kd=6,Zd=7,Xy=0,mA=1,gA=2,Fr=0,vA=1,_A=2,yA=3,xA=4,SA=5,MA=6,EA=7,jy=300,To=301,wo=302,Qd=303,Jd=304,Yu=306,eh=1e3,_s=1001,th=1002,xi=1003,TA=1004,Jl=1005,Pi=1006,Yf=1007,ys=1008,ir=1009,qy=1010,Yy=1011,Da=1012,hp=1013,Ms=1014,$i=1015,Fa=1016,pp=1017,mp=1018,Ao=1020,$y=35902,Ky=1021,Zy=1022,yi=1023,Qy=1024,Jy=1025,_o=1026,Co=1027,ex=1028,gp=1029,tx=1030,vp=1031,_p=1033,Au=33776,Cu=33777,Ru=33778,Pu=33779,nh=35840,ih=35841,rh=35842,sh=35843,oh=36196,ah=37492,lh=37496,uh=37808,ch=37809,fh=37810,dh=37811,hh=37812,ph=37813,mh=37814,gh=37815,vh=37816,_h=37817,yh=37818,xh=37819,Sh=37820,Mh=37821,bu=36492,Eh=36494,Th=36495,nx=36283,wh=36284,Ah=36285,Ch=36286,wA=3200,AA=3201,CA=0,RA=1,Ur="",si="srgb",Ro="srgb-linear",Bu="linear",Dt="srgb",$s=7680,y0=519,PA=512,bA=513,DA=514,ix=515,LA=516,IA=517,UA=518,NA=519,x0=35044,S0="300 es",Ki=2e3,zu=2001;class Lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=Math.PI/180,Rh=180/Math.PI;function Oa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function FA(n,e){return(n%e+e)%e}function Kf(n,e,t){return(1-t)*n+t*e}function ha(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,t=0){Lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,o,l,u,c,d,h){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h)}set(e,t,r,o,l,u,c,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],m=r[4],g=r[7],v=r[2],x=r[5],M=r[8],E=o[0],S=o[3],y=o[6],L=o[1],b=o[4],R=o[7],U=o[2],N=o[5],F=o[8];return l[0]=u*E+c*L+d*U,l[3]=u*S+c*b+d*N,l[6]=u*y+c*R+d*F,l[1]=h*E+m*L+g*U,l[4]=h*S+m*b+g*N,l[7]=h*y+m*R+g*F,l[2]=v*E+x*L+M*U,l[5]=v*S+x*b+M*N,l[8]=v*y+x*R+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*c*h-r*l*m+r*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=m*u-c*h,v=c*d-m*l,x=h*l-u*d,M=t*g+r*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*h-m*r)*E,e[2]=(c*r-o*u)*E,e[3]=v*E,e[4]=(m*t-o*d)*E,e[5]=(o*l-c*t)*E,e[6]=x*E,e[7]=(r*d-h*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Zf.makeScale(e,t)),this}rotate(e){return this.premultiply(Zf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new lt;function rx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function OA(){const n=Vu("canvas");return n.style.display="block",n}const M0={};function uo(n){n in M0||(M0[n]=!0,console.warn(n))}function kA(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function BA(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zA(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const E0=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),T0=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VA(){const n={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Dt&&(o.r=tr(o.r),o.g=tr(o.g),o.b=tr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(o.r=yo(o.r),o.g=yo(o.g),o.b=yo(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?Bu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ro]:{primaries:e,whitePoint:r,transfer:Bu,toXYZ:E0,fromXYZ:T0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:E0,fromXYZ:T0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),n}const wt=VA();function tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ks;class HA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ks===void 0&&(Ks=Vu("canvas")),Ks.width=e.width,Ks.height=e.height;const r=Ks.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=tr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(tr(t[r]/255)*255):t[r]=tr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GA=0;class sx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=Oa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(Qf(o[u].image)):l.push(Qf(o[u]))}else l=Qf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Qf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?HA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WA=0;class zn extends Lo{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,r=_s,o=_s,l=Pi,u=ys,c=yi,d=ir,h=zn.DEFAULT_ANISOTROPY,m=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WA++}),this.uuid=Oa(),this.name="",this.source=new sx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eh:e.x=e.x-Math.floor(e.x);break;case _s:e.x=e.x<0?0:1;break;case th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eh:e.y=e.y-Math.floor(e.y);break;case _s:e.y=e.y<0?0:1;break;case th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=jy;zn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,r=0,o=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],x=d[5],M=d[9],E=d[2],S=d[6],y=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,R=(x+1)/2,U=(y+1)/2,N=(m+v)/4,F=(g+E)/4,k=(M+S)/4;return b>R&&b>U?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=N/r,l=F/r):R>U?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=N/o,l=k/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=F/l,o=k/l),this.set(r,o,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(v-m)*(v-m));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-E)/L,this.z=(v-m)/L,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XA extends Lo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new zn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends XA{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ox extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xi,this.minFilter=xi,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jA extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xi,this.minFilter=xi,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let d=r[o+0],h=r[o+1],m=r[o+2],g=r[o+3];const v=l[u+0],x=l[u+1],M=l[u+2],E=l[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==v||h!==x||m!==M){let S=1-c;const y=d*v+h*x+m*M+g*E,L=y>=0?1:-1,b=1-y*y;if(b>Number.EPSILON){const U=Math.sqrt(b),N=Math.atan2(U,y*L);S=Math.sin(S*N)/U,c=Math.sin(c*N)/U}const R=c*L;if(d=d*S+v*R,h=h*S+x*R,m=m*S+M*R,g=g*S+E*R,S===1-c){const U=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=U,h*=U,m*=U,g*=U}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],d=r[o+1],h=r[o+2],m=r[o+3],g=l[u],v=l[u+1],x=l[u+2],M=l[u+3];return e[t]=c*M+m*g+d*x-h*v,e[t+1]=d*M+m*v+h*g-c*x,e[t+2]=h*M+m*x+c*v-d*g,e[t+3]=m*M-c*g-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),m=c(o/2),g=c(l/2),v=d(r/2),x=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=v*m*g+h*x*M,this._y=h*x*g-v*m*M,this._z=h*m*M+v*x*g,this._w=h*m*g-v*x*M;break;case"YXZ":this._x=v*m*g+h*x*M,this._y=h*x*g-v*m*M,this._z=h*m*M-v*x*g,this._w=h*m*g+v*x*M;break;case"ZXY":this._x=v*m*g-h*x*M,this._y=h*x*g+v*m*M,this._z=h*m*M+v*x*g,this._w=h*m*g-v*x*M;break;case"ZYX":this._x=v*m*g-h*x*M,this._y=h*x*g+v*m*M,this._z=h*m*M-v*x*g,this._w=h*m*g+v*x*M;break;case"YZX":this._x=v*m*g+h*x*M,this._y=h*x*g+v*m*M,this._z=h*m*M-v*x*g,this._w=h*m*g-v*x*M;break;case"XZY":this._x=v*m*g-h*x*M,this._y=h*x*g-v*m*M,this._z=h*m*M+v*x*g,this._w=h*m*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],m=t[6],g=t[10],v=r+c+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-o)*x}else if(r>c&&r>g){const x=2*Math.sqrt(1+r-c-g);this._w=(m-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+h)/x}else if(c>g){const x=2*Math.sqrt(1+c-r-g);this._w=(l-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+g-r-c);this._w=(u-o)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*c+o*h-l*d,this._y=o*m+u*d+l*c-r*h,this._z=l*m+u*h+r*d-o*c,this._w=u*m-r*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,c),g=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(w0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(w0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),m=2*(c*t-l*o),g=2*(l*r-u*t);return this.x=t+d*h+u*g-c*m,this.y=r+d*m+c*h-l*g,this.z=o+d*g+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new ne,w0=new ka;class Ba{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,pi):pi.fromBufferAttribute(l,u),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),eu.copy(r.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),tu.subVectors(this.max,pa),Zs.subVectors(e.a,pa),Qs.subVectors(e.b,pa),Js.subVectors(e.c,pa),Cr.subVectors(Qs,Zs),Rr.subVectors(Js,Qs),ss.subVectors(Zs,Js);let t=[0,-Cr.z,Cr.y,0,-Rr.z,Rr.y,0,-ss.z,ss.y,Cr.z,0,-Cr.x,Rr.z,0,-Rr.x,ss.z,0,-ss.x,-Cr.y,Cr.x,0,-Rr.y,Rr.x,0,-ss.y,ss.x,0];return!ed(t,Zs,Qs,Js,tu)||(t=[1,0,0,0,1,0,0,0,1],!ed(t,Zs,Qs,Js,tu))?!1:(nu.crossVectors(Cr,Rr),t=[nu.x,nu.y,nu.z],ed(t,Zs,Qs,Js,tu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],pi=new ne,eu=new Ba,Zs=new ne,Qs=new ne,Js=new ne,Cr=new ne,Rr=new ne,ss=new ne,pa=new ne,tu=new ne,nu=new ne,os=new ne;function ed(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){os.fromArray(n,l);const c=o.x*Math.abs(os.x)+o.y*Math.abs(os.y)+o.z*Math.abs(os.z),d=e.dot(os),h=t.dot(os),m=r.dot(os);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const qA=new Ba,ma=new ne,td=new ne;class $u{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):qA.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ma,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(td)),this.expandByPoint(ma.copy(e.center).sub(td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new ne,nd=new ne,iu=new ne,Pr=new ne,id=new ne,ru=new ne,rd=new ne;class ax{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){nd.copy(e).add(t).multiplyScalar(.5),iu.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(nd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(iu),c=Pr.dot(this.direction),d=-Pr.dot(iu),h=Pr.lengthSq(),m=Math.abs(1-u*u);let g,v,x,M;if(m>0)if(g=u*d-c,v=u*c-d,M=l*m,g>=0)if(v>=-M)if(v<=M){const E=1/m;g*=E,v*=E,x=g*(g+u*v+2*c)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*d)+h;else v<=-M?(g=Math.max(0,-(-u*l+c)),v=g>0?-l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+h):(g=Math.max(0,-(u*l+c)),v=g>0?l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(nd).addScaledVector(iu,v),x}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const r=Gi.dot(this.direction),o=Gi.dot(Gi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,r,o,l){id.subVectors(t,e),ru.subVectors(r,e),rd.crossVectors(id,ru);let u=this.direction.dot(rd),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Pr.subVectors(this.origin,e);const d=c*this.direction.dot(ru.crossVectors(Pr,ru));if(d<0)return null;const h=c*this.direction.dot(id.cross(Pr));if(h<0||d+h>u)return null;const m=-c*Pr.dot(rd);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,r,o,l,u,c,d,h,m,g,v,x,M,E,S){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h,m,g,v,x,M,E,S)}set(e,t,r,o,l,u,c,d,h,m,g,v,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/eo.setFromMatrixColumn(e,0).length(),l=1/eo.setFromMatrixColumn(e,1).length(),u=1/eo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*m,x=u*g,M=c*m,E=c*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=x+M*h,t[5]=v-E*h,t[9]=-c*d,t[2]=E-v*h,t[6]=M+x*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,x=d*g,M=h*m,E=h*g;t[0]=v+E*c,t[4]=M*c-x,t[8]=u*h,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=x*c-M,t[6]=E+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,x=d*g,M=h*m,E=h*g;t[0]=v-E*c,t[4]=-u*g,t[8]=M+x*c,t[1]=x+M*c,t[5]=u*m,t[9]=E-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,x=u*g,M=c*m,E=c*g;t[0]=d*m,t[4]=M*h-x,t[8]=v*h+E,t[1]=d*g,t[5]=E*h+v,t[9]=x*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,x=u*h,M=c*d,E=c*h;t[0]=d*m,t[4]=E-v*g,t[8]=M*g+x,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-h*m,t[6]=x*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=u*d,x=u*h,M=c*d,E=c*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=v*g+E,t[5]=u*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=c*m,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YA,e,$A)}lookAt(e,t,r){const o=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),br.crossVectors(r,jn),br.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),br.crossVectors(r,jn)),br.normalize(),su.crossVectors(jn,br),o[0]=br.x,o[4]=su.x,o[8]=jn.x,o[1]=br.y,o[5]=su.y,o[9]=jn.y,o[2]=br.z,o[6]=su.z,o[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],m=r[1],g=r[5],v=r[9],x=r[13],M=r[2],E=r[6],S=r[10],y=r[14],L=r[3],b=r[7],R=r[11],U=r[15],N=o[0],F=o[4],k=o[8],P=o[12],C=o[1],V=o[5],oe=o[9],Q=o[13],ue=o[2],he=o[6],le=o[10],ie=o[14],z=o[3],ae=o[7],re=o[11],O=o[15];return l[0]=u*N+c*C+d*ue+h*z,l[4]=u*F+c*V+d*he+h*ae,l[8]=u*k+c*oe+d*le+h*re,l[12]=u*P+c*Q+d*ie+h*O,l[1]=m*N+g*C+v*ue+x*z,l[5]=m*F+g*V+v*he+x*ae,l[9]=m*k+g*oe+v*le+x*re,l[13]=m*P+g*Q+v*ie+x*O,l[2]=M*N+E*C+S*ue+y*z,l[6]=M*F+E*V+S*he+y*ae,l[10]=M*k+E*oe+S*le+y*re,l[14]=M*P+E*Q+S*ie+y*O,l[3]=L*N+b*C+R*ue+U*z,l[7]=L*F+b*V+R*he+U*ae,l[11]=L*k+b*oe+R*le+U*re,l[15]=L*P+b*Q+R*ie+U*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15];return M*(+l*d*g-o*h*g-l*c*v+r*h*v+o*c*x-r*d*x)+E*(+t*d*x-t*h*v+l*u*v-o*u*x+o*h*m-l*d*m)+S*(+t*h*g-t*c*x-l*u*g+r*u*x+l*c*m-r*h*m)+y*(-o*c*m-t*d*g+t*c*v+o*u*g-r*u*v+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],L=g*S*h-E*v*h+E*d*x-c*S*x-g*d*y+c*v*y,b=M*v*h-m*S*h-M*d*x+u*S*x+m*d*y-u*v*y,R=m*E*h-M*g*h+M*c*x-u*E*x-m*c*y+u*g*y,U=M*g*d-m*E*d-M*c*v+u*E*v+m*c*S-u*g*S,N=t*L+r*b+o*R+l*U;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=L*F,e[1]=(E*v*l-g*S*l-E*o*x+r*S*x+g*o*y-r*v*y)*F,e[2]=(c*S*l-E*d*l+E*o*h-r*S*h-c*o*y+r*d*y)*F,e[3]=(g*d*l-c*v*l-g*o*h+r*v*h+c*o*x-r*d*x)*F,e[4]=b*F,e[5]=(m*S*l-M*v*l+M*o*x-t*S*x-m*o*y+t*v*y)*F,e[6]=(M*d*l-u*S*l-M*o*h+t*S*h+u*o*y-t*d*y)*F,e[7]=(u*v*l-m*d*l+m*o*h-t*v*h-u*o*x+t*d*x)*F,e[8]=R*F,e[9]=(M*g*l-m*E*l-M*r*x+t*E*x+m*r*y-t*g*y)*F,e[10]=(u*E*l-M*c*l+M*r*h-t*E*h-u*r*y+t*c*y)*F,e[11]=(m*c*l-u*g*l-m*r*h+t*g*h+u*r*x-t*c*x)*F,e[12]=U*F,e[13]=(m*E*o-M*g*o+M*r*v-t*E*v-m*r*S+t*g*S)*F,e[14]=(M*c*o-u*E*o-M*r*d+t*E*d+u*r*S-t*c*S)*F,e[15]=(u*g*o-m*c*o+m*r*d-t*g*d-u*r*v+t*c*v)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,d=e.z,h=l*u,m=l*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,m*c+r,m*d-o*u,0,h*d-o*c,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,m=u+u,g=c+c,v=l*h,x=l*m,M=l*g,E=u*m,S=u*g,y=c*g,L=d*h,b=d*m,R=d*g,U=r.x,N=r.y,F=r.z;return o[0]=(1-(E+y))*U,o[1]=(x+R)*U,o[2]=(M-b)*U,o[3]=0,o[4]=(x-R)*N,o[5]=(1-(v+y))*N,o[6]=(S+L)*N,o[7]=0,o[8]=(M+b)*F,o[9]=(S-L)*F,o[10]=(1-(v+E))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=eo.set(o[0],o[1],o[2]).length();const u=eo.set(o[4],o[5],o[6]).length(),c=eo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],mi.copy(this);const h=1/l,m=1/u,g=1/c;return mi.elements[0]*=h,mi.elements[1]*=h,mi.elements[2]*=h,mi.elements[4]*=m,mi.elements[5]*=m,mi.elements[6]*=m,mi.elements[8]*=g,mi.elements[9]*=g,mi.elements[10]*=g,t.setFromRotationMatrix(mi),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=Ki){const d=this.elements,h=2*l/(t-e),m=2*l/(r-o),g=(t+e)/(t-e),v=(r+o)/(r-o);let x,M;if(c===Ki)x=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(c===zu)x=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=Ki){const d=this.elements,h=1/(t-e),m=1/(r-o),g=1/(u-l),v=(t+e)*h,x=(r+o)*m;let M,E;if(c===Ki)M=(u+l)*g,E=-2*g;else if(c===zu)M=l*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const eo=new ne,mi=new Zt,YA=new ne(0,0,0),$A=new ne(1,1,1),br=new ne,su=new ne,jn=new ne,A0=new Zt,C0=new ka;class rr{constructor(e=0,t=0,r=0,o=rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],m=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return A0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(A0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return C0.setFromEuler(this),this.setFromQuaternion(C0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rr.DEFAULT_ORDER="XYZ";class lx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KA=0;const R0=new ne,to=new ka,Wi=new Zt,ou=new ne,ga=new ne,ZA=new ne,QA=new ka,P0=new ne(1,0,0),b0=new ne(0,1,0),D0=new ne(0,0,1),L0={type:"added"},JA={type:"removed"},no={type:"childadded",child:null},sd={type:"childremoved",child:null};class Vn extends Lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KA++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new ne,t=new rr,r=new ka,o=new ne(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new lt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(P0,e)}rotateY(e){return this.rotateOnAxis(b0,e)}rotateZ(e){return this.rotateOnAxis(D0,e)}translateOnAxis(e,t){return R0.copy(e).applyQuaternion(this.quaternion),this.position.add(R0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(P0,e)}translateY(e){return this.translateOnAxis(b0,e)}translateZ(e){return this.translateOnAxis(D0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ou.copy(e):ou.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(ga,ou,this.up):Wi.lookAt(ou,ga,this.up),this.quaternion.setFromRotationMatrix(Wi),o&&(Wi.extractRotation(o.matrixWorld),to.setFromRotationMatrix(Wi),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(L0),no.child=e,this.dispatchEvent(no),no.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(JA),sd.child=e,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(L0),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,ZA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,QA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Vn.DEFAULT_UP=new ne(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new ne,Xi=new ne,od=new ne,ji=new ne,io=new ne,ro=new ne,I0=new ne,ad=new ne,ld=new ne,ud=new ne,cd=new Kt,fd=new Kt,dd=new Kt;class _i{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),gi.subVectors(e,t),o.cross(gi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){gi.subVectors(o,t),Xi.subVectors(r,t),od.subVectors(e,t);const u=gi.dot(gi),c=gi.dot(Xi),d=gi.dot(od),h=Xi.dot(Xi),m=Xi.dot(od),g=u*h-c*c;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(h*d-c*m)*v,M=(u*m-c*d)*v;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,r,o,l,u,c,d){return this.getBarycoord(e,t,r,o,ji)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ji.x),d.addScaledVector(u,ji.y),d.addScaledVector(c,ji.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return cd.setScalar(0),fd.setScalar(0),dd.setScalar(0),cd.fromBufferAttribute(e,t),fd.fromBufferAttribute(e,r),dd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(cd,l.x),u.addScaledVector(fd,l.y),u.addScaledVector(dd,l.z),u}static isFrontFacing(e,t,r,o){return gi.subVectors(r,t),Xi.subVectors(e,t),gi.cross(Xi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),gi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return _i.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;io.subVectors(o,r),ro.subVectors(l,r),ad.subVectors(e,r);const d=io.dot(ad),h=ro.dot(ad);if(d<=0&&h<=0)return t.copy(r);ld.subVectors(e,o);const m=io.dot(ld),g=ro.dot(ld);if(m>=0&&g<=m)return t.copy(o);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(io,u);ud.subVectors(e,l);const x=io.dot(ud),M=ro.dot(ud);if(M>=0&&x<=M)return t.copy(l);const E=x*h-d*M;if(E<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(r).addScaledVector(ro,c);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return I0.subVectors(l,o),c=(g-m)/(g-m+(x-M)),t.copy(o).addScaledVector(I0,c);const y=1/(S+E+v);return u=E*y,c=v*y,t.copy(r).addScaledVector(io,u).addScaledVector(ro,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},au={h:0,s:0,l:0};function hd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=FA(e,1),t=_t(t,0,1),r=_t(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=hd(u,l,e+1/3),this.g=hd(u,l,e),this.b=hd(u,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=si){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const r=ux[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return wt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(_t(Sn.r*255,0,255))*65536+Math.round(_t(Sn.g*255,0,255))*256+Math.round(_t(Sn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Sn.copy(this),t);const r=Sn.r,o=Sn.g,l=Sn.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let d,h;const m=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=m<=.5?g/(u+c):g/(2-u-c),u){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=si){wt.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,o=Sn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(au);const r=Kf(Dr.h,au.h,t),o=Kf(Dr.s,au.s,t),l=Kf(Dr.l,au.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Rt;Rt.NAMES=ux;let eC=0;class za extends Lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eC++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=vo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gd,this.blendDst=Wd,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(r.blending=this.blending),this.side!==Br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gd&&(r.blendSrc=this.blendSrc),this.blendDst!==Wd&&(r.blendDst=this.blendDst),this.blendEquation!==ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==y0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cx extends za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=Xy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new ne,lu=new Lt;class Si{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=x0,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)lu.fromBufferAttribute(this,t),lu.applyMatrix3(e),this.setXY(t,lu.x,lu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ha(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array),o=kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array),o=kn(o,this.array),l=kn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==x0&&(e.usage=this.usage),e}}class fx extends Si{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class dx extends Si{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ss extends Si{constructor(e,t,r){super(new Float32Array(e),t,r)}}let tC=0;const ii=new Zt,pd=new Vn,so=new ne,qn=new Ba,va=new Ba,un=new ne;class sr extends Lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tC++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rx(e)?dx:fx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,r){return ii.makeTranslation(e,t,r),this.applyMatrix4(ii),this}scale(e,t,r){return ii.makeScale(e,t,r),this.applyMatrix4(ii),this}lookAt(e){return pd.lookAt(e),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ss(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];qn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $u);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];va.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors(qn.min,va.min),qn.expandByPoint(un),un.addVectors(qn.max,va.max),qn.expandByPoint(un)):(qn.expandByPoint(va.min),qn.expandByPoint(va.max))}qn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)un.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(un));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)un.fromBufferAttribute(c,h),d&&(so.fromBufferAttribute(e,h),un.add(so)),o=Math.max(o,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let k=0;k<r.count;k++)c[k]=new ne,d[k]=new ne;const h=new ne,m=new ne,g=new ne,v=new Lt,x=new Lt,M=new Lt,E=new ne,S=new ne;function y(k,P,C){h.fromBufferAttribute(r,k),m.fromBufferAttribute(r,P),g.fromBufferAttribute(r,C),v.fromBufferAttribute(l,k),x.fromBufferAttribute(l,P),M.fromBufferAttribute(l,C),m.sub(h),g.sub(h),x.sub(v),M.sub(v);const V=1/(x.x*M.y-M.x*x.y);isFinite(V)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(V),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(V),c[k].add(E),c[P].add(E),c[C].add(E),d[k].add(S),d[P].add(S),d[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let k=0,P=L.length;k<P;++k){const C=L[k],V=C.start,oe=C.count;for(let Q=V,ue=V+oe;Q<ue;Q+=3)y(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const b=new ne,R=new ne,U=new ne,N=new ne;function F(k){U.fromBufferAttribute(o,k),N.copy(U);const P=c[k];b.copy(P),b.sub(U.multiplyScalar(U.dot(P))).normalize(),R.crossVectors(N,P);const V=R.dot(d[k])<0?-1:1;u.setXYZW(k,b.x,b.y,b.z,V)}for(let k=0,P=L.length;k<P;++k){const C=L[k],V=C.start,oe=C.count;for(let Q=V,ue=V+oe;Q<ue;Q+=3)F(e.getX(Q+0)),F(e.getX(Q+1)),F(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new ne,l=new ne,u=new ne,c=new ne,d=new ne,h=new ne,m=new ne,g=new ne;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),c.fromBufferAttribute(r,M),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,S),c.add(m),d.add(m),h.add(m),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,g=c.normalized,v=new h.constructor(d.length*m);let x=0,M=0;for(let E=0,S=d.length;E<S;E++){c.isInterleavedBufferAttribute?x=d[E]*c.data.stride+c.offset:x=d[E]*m;for(let y=0;y<m;y++)v[M++]=h[x++]}return new Si(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sr,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let m=0,g=h.length;m<g;m++){const v=h[m],x=e(v,r);d.push(x)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const x=h[g];m.push(x.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const U0=new Zt,as=new ax,uu=new $u,N0=new ne,cu=new ne,fu=new ne,du=new ne,md=new ne,hu=new ne,F0=new ne,pu=new ne;class Zi extends Vn{constructor(e=new sr,t=new cx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){hu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=c[d],g=l[d];m!==0&&(md.fromBufferAttribute(g,e),u?hu.addScaledVector(md,m):hu.addScaledVector(md.sub(t),m))}t.add(hu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uu.copy(r.boundingSphere),uu.applyMatrix4(l),as.copy(e.ray).recast(e.near),!(uu.containsPoint(as.origin)===!1&&(as.intersectSphere(uu,N0)===null||as.origin.distanceToSquared(N0)>(e.far-e.near)**2))&&(U0.copy(l).invert(),as.copy(e.ray).applyMatrix4(U0),!(r.boundingBox!==null&&as.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),b=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let R=L,U=b;R<U;R+=3){const N=c.getX(R),F=c.getX(R+1),k=c.getX(R+2);o=mu(this,y,e,r,h,m,g,N,F,k),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(c.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const L=c.getX(S),b=c.getX(S+1),R=c.getX(S+2);o=mu(this,u,e,r,h,m,g,L,b,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),b=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let R=L,U=b;R<U;R+=3){const N=R,F=R+1,k=R+2;o=mu(this,y,e,r,h,m,g,N,F,k),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const L=S,b=S+1,R=S+2;o=mu(this,u,e,r,h,m,g,L,b,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function nC(n,e,t,r,o,l,u,c){let d;if(e.side===Bn?d=r.intersectTriangle(u,l,o,!0,c):d=r.intersectTriangle(o,l,u,e.side===Br,c),d===null)return null;pu.copy(c),pu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(pu);return h<t.near||h>t.far?null:{distance:h,point:pu.clone(),object:n}}function mu(n,e,t,r,o,l,u,c,d,h){n.getVertexPosition(c,cu),n.getVertexPosition(d,fu),n.getVertexPosition(h,du);const m=nC(n,e,t,r,cu,fu,du,F0);if(m){const g=new ne;_i.getBarycoord(F0,cu,fu,du,g),o&&(m.uv=_i.getInterpolatedAttribute(o,c,d,h,g,new Lt)),l&&(m.uv1=_i.getInterpolatedAttribute(l,c,d,h,g,new Lt)),u&&(m.normal=_i.getInterpolatedAttribute(u,c,d,h,g,new ne),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:d,c:h,normal:new ne,materialIndex:0};_i.getNormal(cu,fu,du,v.normal),m.face=v,m.barycoord=g}return m}class Va extends sr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Ss(h,3)),this.setAttribute("normal",new Ss(m,3)),this.setAttribute("uv",new Ss(g,2));function M(E,S,y,L,b,R,U,N,F,k,P){const C=R/F,V=U/k,oe=R/2,Q=U/2,ue=N/2,he=F+1,le=k+1;let ie=0,z=0;const ae=new ne;for(let re=0;re<le;re++){const O=re*V-Q;for(let te=0;te<he;te++){const Ne=te*C-oe;ae[E]=Ne*L,ae[S]=O*b,ae[y]=ue,h.push(ae.x,ae.y,ae.z),ae[E]=0,ae[S]=0,ae[y]=N>0?1:-1,m.push(ae.x,ae.y,ae.z),g.push(te/F),g.push(1-re/k),ie+=1}}for(let re=0;re<k;re++)for(let O=0;O<F;O++){const te=v+O+he*re,Ne=v+O+he*(re+1),K=v+(O+1)+he*(re+1),ce=v+(O+1)+he*re;d.push(te,Ne,ce),d.push(Ne,K,ce),z+=6}c.addGroup(x,z,P),x+=z,v+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Po(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function bn(n){const e={};for(let t=0;t<n.length;t++){const r=Po(n[t]);for(const o in r)e[o]=r[o]}return e}function iC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const rC={clone:Po,merge:bn};var sC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sC,this.fragmentShader=oC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=iC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class px extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new ne,O0=new Lt,k0=new Lt;class oi extends px{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($f*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rh*2*Math.atan(Math.tan($f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,O0,k0),t.subVectors(k0,O0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($f*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oo=-90,ao=1;class aC extends Vn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new oi(oo,ao,e,t);o.layers=this.layers,this.add(o);const l=new oi(oo,ao,e,t);l.layers=this.layers,this.add(l);const u=new oi(oo,ao,e,t);u.layers=this.layers,this.add(u);const c=new oi(oo,ao,e,t);c.layers=this.layers,this.add(c);const d=new oi(oo,ao,e,t);d.layers=this.layers,this.add(d);const h=new oi(oo,ao,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===zu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,v,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class mx extends zn{constructor(e,t,r,o,l,u,c,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:To,super(e,t,r,o,l,u,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lC extends Es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new mx(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Va(5,5,5),l=new zr({name:"CubemapFromEquirect",uniforms:Po(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Nr});l.uniforms.tEquirect.value=t;const u=new Zi(o,l),c=t.minFilter;return t.minFilter===ys&&(t.minFilter=Pi),new aC(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class uC extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gd=new ne,cC=new ne,fC=new lt;class hs{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=gd.subVectors(r,t).cross(cC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(gd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||fC.getNormalMatrix(e),o=this.coplanarPoint(gd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new $u,gu=new ne;class gx{constructor(e=new hs,t=new hs,r=new hs,o=new hs,l=new hs,u=new hs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ki){const r=this.planes,o=e.elements,l=o[0],u=o[1],c=o[2],d=o[3],h=o[4],m=o[5],g=o[6],v=o[7],x=o[8],M=o[9],E=o[10],S=o[11],y=o[12],L=o[13],b=o[14],R=o[15];if(r[0].setComponents(d-l,v-h,S-x,R-y).normalize(),r[1].setComponents(d+l,v+h,S+x,R+y).normalize(),r[2].setComponents(d+u,v+m,S+M,R+L).normalize(),r[3].setComponents(d-u,v-m,S-M,R-L).normalize(),r[4].setComponents(d-c,v-g,S-E,R-b).normalize(),t===Ki)r[5].setComponents(d+c,v+g,S+E,R+b).normalize();else if(t===zu)r[5].setComponents(c,g,E,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(gu.x=o.normal.x>0?e.max.x:e.min.x,gu.y=o.normal.y>0?e.max.y:e.min.y,gu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(gu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vx extends za{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const B0=new Zt,Ph=new ax,vu=new $u,_u=new ne;class dC extends Vn{constructor(e=new sr,t=new vx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),vu.copy(r.boundingSphere),vu.applyMatrix4(o),vu.radius+=l,e.ray.intersectsSphere(vu)===!1)return;B0.copy(o).invert(),Ph.copy(e.ray).applyMatrix4(B0);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=r.index,g=r.attributes.position;if(h!==null){const v=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let M=v,E=x;M<E;M++){const S=h.getX(M);_u.fromBufferAttribute(g,S),z0(_u,S,d,o,e,t,this)}}else{const v=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let M=v,E=x;M<E;M++)_u.fromBufferAttribute(g,M),z0(_u,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function z0(n,e,t,r,o,l,u){const c=Ph.distanceSqToPoint(n);if(c<t){const d=new ne;Ph.closestPointToPoint(n,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class yu extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class _x extends zn{constructor(e,t,r,o,l,u,c,d,h,m=_o){if(m!==_o&&m!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===_o&&(r=Ms),r===void 0&&m===Co&&(r=Ao),super(null,o,l,u,c,d,m,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:xi,this.minFilter=d!==void 0?d:xi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ku extends sr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,m=d+1,g=e/c,v=t/d,x=[],M=[],E=[],S=[];for(let y=0;y<m;y++){const L=y*v-u;for(let b=0;b<h;b++){const R=b*g-l;M.push(R,-L,0),E.push(0,0,1),S.push(b/c),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<c;L++){const b=L+h*y,R=L+h*(y+1),U=L+1+h*(y+1),N=L+1+h*y;x.push(b,R,N),x.push(R,U,N)}this.setIndex(x),this.setAttribute("position",new Ss(M,3)),this.setAttribute("normal",new Ss(E,3)),this.setAttribute("uv",new Ss(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.width,e.height,e.widthSegments,e.heightSegments)}}class hC extends za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pC extends za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mC extends px{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gC extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function V0(n,e,t,r){const o=vC(r);switch(t){case Ky:return n*e;case Qy:return n*e;case Jy:return n*e*2;case ex:return n*e/o.components*o.byteLength;case gp:return n*e/o.components*o.byteLength;case tx:return n*e*2/o.components*o.byteLength;case vp:return n*e*2/o.components*o.byteLength;case Zy:return n*e*3/o.components*o.byteLength;case yi:return n*e*4/o.components*o.byteLength;case _p:return n*e*4/o.components*o.byteLength;case Au:case Cu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ru:case Pu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ih:case sh:return Math.max(n,16)*Math.max(e,8)/4;case nh:case rh:return Math.max(n,8)*Math.max(e,8)/2;case oh:case ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _h:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bu:case Eh:case Th:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nx:case wh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ah:case Ch:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vC(n){switch(n){case ir:case qy:return{byteLength:1,components:1};case Da:case Yy:case Fa:return{byteLength:2,components:1};case pp:case mp:return{byteLength:2,components:4};case Ms:case hp:case $i:return{byteLength:4,components:1};case $y:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yx(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function _C(n){const e=new WeakMap;function t(c,d){const h=c.array,m=c.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,m),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,d,h){const m=d.array,g=d.updateRanges;if(n.bindBuffer(h,c),g.length===0)n.bufferSubData(h,0,m);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],E=g[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const E=g[x];n.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:l,update:u}}var yC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,SC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,RC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,IC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,HC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$C="gl_FragColor = linearToOutputTexel( gl_FragColor );",KC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_R=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ER=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$R=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _P=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$P=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:yC,alphahash_pars_fragment:xC,alphamap_fragment:SC,alphamap_pars_fragment:MC,alphatest_fragment:EC,alphatest_pars_fragment:TC,aomap_fragment:wC,aomap_pars_fragment:AC,batching_pars_vertex:CC,batching_vertex:RC,begin_vertex:PC,beginnormal_vertex:bC,bsdfs:DC,iridescence_fragment:LC,bumpmap_pars_fragment:IC,clipping_planes_fragment:UC,clipping_planes_pars_fragment:NC,clipping_planes_pars_vertex:FC,clipping_planes_vertex:OC,color_fragment:kC,color_pars_fragment:BC,color_pars_vertex:zC,color_vertex:VC,common:HC,cube_uv_reflection_fragment:GC,defaultnormal_vertex:WC,displacementmap_pars_vertex:XC,displacementmap_vertex:jC,emissivemap_fragment:qC,emissivemap_pars_fragment:YC,colorspace_fragment:$C,colorspace_pars_fragment:KC,envmap_fragment:ZC,envmap_common_pars_fragment:QC,envmap_pars_fragment:JC,envmap_pars_vertex:eR,envmap_physical_pars_fragment:fR,envmap_vertex:tR,fog_vertex:nR,fog_pars_vertex:iR,fog_fragment:rR,fog_pars_fragment:sR,gradientmap_pars_fragment:oR,lightmap_pars_fragment:aR,lights_lambert_fragment:lR,lights_lambert_pars_fragment:uR,lights_pars_begin:cR,lights_toon_fragment:dR,lights_toon_pars_fragment:hR,lights_phong_fragment:pR,lights_phong_pars_fragment:mR,lights_physical_fragment:gR,lights_physical_pars_fragment:vR,lights_fragment_begin:_R,lights_fragment_maps:yR,lights_fragment_end:xR,logdepthbuf_fragment:SR,logdepthbuf_pars_fragment:MR,logdepthbuf_pars_vertex:ER,logdepthbuf_vertex:TR,map_fragment:wR,map_pars_fragment:AR,map_particle_fragment:CR,map_particle_pars_fragment:RR,metalnessmap_fragment:PR,metalnessmap_pars_fragment:bR,morphinstance_vertex:DR,morphcolor_vertex:LR,morphnormal_vertex:IR,morphtarget_pars_vertex:UR,morphtarget_vertex:NR,normal_fragment_begin:FR,normal_fragment_maps:OR,normal_pars_fragment:kR,normal_pars_vertex:BR,normal_vertex:zR,normalmap_pars_fragment:VR,clearcoat_normal_fragment_begin:HR,clearcoat_normal_fragment_maps:GR,clearcoat_pars_fragment:WR,iridescence_pars_fragment:XR,opaque_fragment:jR,packing:qR,premultiplied_alpha_fragment:YR,project_vertex:$R,dithering_fragment:KR,dithering_pars_fragment:ZR,roughnessmap_fragment:QR,roughnessmap_pars_fragment:JR,shadowmap_pars_fragment:eP,shadowmap_pars_vertex:tP,shadowmap_vertex:nP,shadowmask_pars_fragment:iP,skinbase_vertex:rP,skinning_pars_vertex:sP,skinning_vertex:oP,skinnormal_vertex:aP,specularmap_fragment:lP,specularmap_pars_fragment:uP,tonemapping_fragment:cP,tonemapping_pars_fragment:fP,transmission_fragment:dP,transmission_pars_fragment:hP,uv_pars_fragment:pP,uv_pars_vertex:mP,uv_vertex:gP,worldpos_vertex:vP,background_vert:_P,background_frag:yP,backgroundCube_vert:xP,backgroundCube_frag:SP,cube_vert:MP,cube_frag:EP,depth_vert:TP,depth_frag:wP,distanceRGBA_vert:AP,distanceRGBA_frag:CP,equirect_vert:RP,equirect_frag:PP,linedashed_vert:bP,linedashed_frag:DP,meshbasic_vert:LP,meshbasic_frag:IP,meshlambert_vert:UP,meshlambert_frag:NP,meshmatcap_vert:FP,meshmatcap_frag:OP,meshnormal_vert:kP,meshnormal_frag:BP,meshphong_vert:zP,meshphong_frag:VP,meshphysical_vert:HP,meshphysical_frag:GP,meshtoon_vert:WP,meshtoon_frag:XP,points_vert:jP,points_frag:qP,shadow_vert:YP,shadow_frag:$P,sprite_vert:KP,sprite_frag:ZP},be={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ri={basic:{uniforms:bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:bn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:bn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:bn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:bn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:bn([be.points,be.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:bn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:bn([be.common,be.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:bn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:bn([be.sprite,be.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:bn([be.common,be.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:bn([be.lights,be.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ri.physical={uniforms:bn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const xu={r:0,b:0,g:0},us=new rr,QP=new Zt;function JP(n,e,t,r,o,l,u){const c=new Rt(0);let d=l===!0?0:1,h,m,g=null,v=0,x=null;function M(b){let R=b.isScene===!0?b.background:null;return R&&R.isTexture&&(R=(b.backgroundBlurriness>0?t:e).get(R)),R}function E(b){let R=!1;const U=M(b);U===null?y(c,d):U&&U.isColor&&(y(U,1),R=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(b,R){const U=M(R);U&&(U.isCubeTexture||U.mapping===Yu)?(m===void 0&&(m=new Zi(new Va(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:Po(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),us.copy(R.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.material.uniforms.envMap.value=U,m.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(QP.makeRotationFromEuler(us)),m.material.toneMapped=wt.getTransfer(U.colorSpace)!==Dt,(g!==U||v!==U.version||x!==n.toneMapping)&&(m.material.needsUpdate=!0,g=U,v=U.version,x=n.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):U&&U.isTexture&&(h===void 0&&(h=new Zi(new Ku(2,2),new zr({name:"BackgroundMaterial",uniforms:Po(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=U,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=wt.getTransfer(U.colorSpace)!==Dt,U.matrixAutoUpdate===!0&&U.updateMatrix(),h.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||v!==U.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,g=U,v=U.version,x=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function y(b,R){b.getRGB(xu,hx(n)),r.buffers.color.setClear(xu.r,xu.g,xu.b,R,u)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(b,R=1){c.set(b),d=R,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(c,d)},render:E,addToRenderList:S,dispose:L}}function eb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function c(C,V,oe,Q,ue){let he=!1;const le=g(Q,oe,V);l!==le&&(l=le,h(l.object)),he=x(C,Q,oe,ue),he&&M(C,Q,oe,ue),ue!==null&&e.update(ue,n.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,R(C,V,oe,Q),ue!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return n.createVertexArray()}function h(C){return n.bindVertexArray(C)}function m(C){return n.deleteVertexArray(C)}function g(C,V,oe){const Q=oe.wireframe===!0;let ue=r[C.id];ue===void 0&&(ue={},r[C.id]=ue);let he=ue[V.id];he===void 0&&(he={},ue[V.id]=he);let le=he[Q];return le===void 0&&(le=v(d()),he[Q]=le),le}function v(C){const V=[],oe=[],Q=[];for(let ue=0;ue<t;ue++)V[ue]=0,oe[ue]=0,Q[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:oe,attributeDivisors:Q,object:C,attributes:{},index:null}}function x(C,V,oe,Q){const ue=l.attributes,he=V.attributes;let le=0;const ie=oe.getAttributes();for(const z in ie)if(ie[z].location>=0){const re=ue[z];let O=he[z];if(O===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),re===void 0||re.attribute!==O||O&&re.data!==O.data)return!0;le++}return l.attributesNum!==le||l.index!==Q}function M(C,V,oe,Q){const ue={},he=V.attributes;let le=0;const ie=oe.getAttributes();for(const z in ie)if(ie[z].location>=0){let re=he[z];re===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const O={};O.attribute=re,re&&re.data&&(O.data=re.data),ue[z]=O,le++}l.attributes=ue,l.attributesNum=le,l.index=Q}function E(){const C=l.newAttributes;for(let V=0,oe=C.length;V<oe;V++)C[V]=0}function S(C){y(C,0)}function y(C,V){const oe=l.newAttributes,Q=l.enabledAttributes,ue=l.attributeDivisors;oe[C]=1,Q[C]===0&&(n.enableVertexAttribArray(C),Q[C]=1),ue[C]!==V&&(n.vertexAttribDivisor(C,V),ue[C]=V)}function L(){const C=l.newAttributes,V=l.enabledAttributes;for(let oe=0,Q=V.length;oe<Q;oe++)V[oe]!==C[oe]&&(n.disableVertexAttribArray(oe),V[oe]=0)}function b(C,V,oe,Q,ue,he,le){le===!0?n.vertexAttribIPointer(C,V,oe,ue,he):n.vertexAttribPointer(C,V,oe,Q,ue,he)}function R(C,V,oe,Q){E();const ue=Q.attributes,he=oe.getAttributes(),le=V.defaultAttributeValues;for(const ie in he){const z=he[ie];if(z.location>=0){let ae=ue[ie];if(ae===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),ae!==void 0){const re=ae.normalized,O=ae.itemSize,te=e.get(ae);if(te===void 0)continue;const Ne=te.buffer,K=te.type,ce=te.bytesPerElement,Me=K===n.INT||K===n.UNSIGNED_INT||ae.gpuType===hp;if(ae.isInterleavedBufferAttribute){const _e=ae.data,Ae=_e.stride,Fe=ae.offset;if(_e.isInstancedInterleavedBuffer){for(let Je=0;Je<z.locationSize;Je++)y(z.location+Je,_e.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Je=0;Je<z.locationSize;Je++)S(z.location+Je);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Je=0;Je<z.locationSize;Je++)b(z.location+Je,O/z.locationSize,K,re,Ae*ce,(Fe+O/z.locationSize*Je)*ce,Me)}else{if(ae.isInstancedBufferAttribute){for(let _e=0;_e<z.locationSize;_e++)y(z.location+_e,ae.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<z.locationSize;_e++)S(z.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let _e=0;_e<z.locationSize;_e++)b(z.location+_e,O/z.locationSize,K,re,O*ce,O/z.locationSize*_e*ce,Me)}}else if(le!==void 0){const re=le[ie];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(z.location,re);break;case 3:n.vertexAttrib3fv(z.location,re);break;case 4:n.vertexAttrib4fv(z.location,re);break;default:n.vertexAttrib1fv(z.location,re)}}}}L()}function U(){k();for(const C in r){const V=r[C];for(const oe in V){const Q=V[oe];for(const ue in Q)m(Q[ue].object),delete Q[ue];delete V[oe]}delete r[C]}}function N(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const oe in V){const Q=V[oe];for(const ue in Q)m(Q[ue].object),delete Q[ue];delete V[oe]}delete r[C.id]}function F(C){for(const V in r){const oe=r[V];if(oe[C.id]===void 0)continue;const Q=oe[C.id];for(const ue in Q)m(Q[ue].object),delete Q[ue];delete oe[C.id]}}function k(){P(),u=!0,l!==o&&(l=o,h(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:k,resetDefaultState:P,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function tb(n,e,t){let r;function o(h){r=h}function l(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,g){g!==0&&(n.drawArraysInstanced(r,h,m,g),t.update(m,r,g))}function c(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,r,1)}function d(h,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)u(h[M],m[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,m,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*v[E];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function nb(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==yi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(F){const k=F===Fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ir&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==$i&&!k)}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),L=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:U,maxSamples:N}}function ib(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new hs,c=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||r!==0||o;return o=v,r=g.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,y=n.get(g);if(!o||M===null||M.length===0||l&&!S)l?m(null):h();else{const L=l?0:r,b=L*4;let R=y.clippingState||null;d.value=R,R=m(M,v,b,x);for(let U=0;U!==b;++U)R[U]=t[U];y.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,v,x,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const y=x+E*4,L=v.matrixWorldInverse;c.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let b=0,R=x;b!==E;++b,R+=4)u.copy(g[b]).applyMatrix4(L,c),u.normal.toArray(S,R),S[R+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function rb(n){let e=new WeakMap;function t(u,c){return c===Qd?u.mapping=To:c===Jd&&(u.mapping=wo),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===Qd||c===Jd)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new lC(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const go=4,H0=[.125,.215,.35,.446,.526,.582],gs=20,vd=new mC,G0=new Rt;let _d=null,yd=0,xd=0,Sd=!1;const ps=(1+Math.sqrt(5))/2,lo=1/ps,W0=[new ne(-ps,lo,0),new ne(ps,lo,0),new ne(-lo,0,ps),new ne(lo,0,ps),new ne(0,ps,-lo),new ne(0,ps,lo),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class X0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,yd,xd),this._renderer.xr.enabled=Sd,e.scissorTest=!1,Su(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===To||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:Fa,format:yi,colorSpace:Ro,depthBuffer:!1},o=j0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=j0(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sb(l)),this._blurMaterial=ob(l,e,t)}return o}_compileMaterial(e){const t=new Zi(this._lodPlanes[0],e);this._renderer.compile(t,vd)}_sceneToCubeUV(e,t,r,o){const c=new oi(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(G0),m.toneMapping=Fr,m.autoClear=!1;const x=new cx({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new Zi(new Va,x);let E=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,E=!0):(x.color.copy(G0),E=!0);for(let y=0;y<6;y++){const L=y%3;L===0?(c.up.set(0,d[y],0),c.lookAt(h[y],0,0)):L===1?(c.up.set(0,0,d[y]),c.lookAt(0,h[y],0)):(c.up.set(0,d[y],0),c.lookAt(0,0,h[y]));const b=this._cubeSize;Su(o,L*b,y>2?b:0,b,b),m.setRenderTarget(o),E&&m.render(M,c),m.render(e,c)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===To||e.mapping===wo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Zi(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;Su(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,vd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=W0[(o-l-1)%W0.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Zi(this._lodPlanes[o],h),v=h.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*gs-1),E=l/M,S=isFinite(l)?1+Math.floor(m*E):gs;S>gs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${gs}`);const y=[];let L=0;for(let F=0;F<gs;++F){const k=F/E,P=Math.exp(-k*k/2);y.push(P),F===0?L+=P:F<S&&(L+=2*P)}for(let F=0;F<y.length;F++)y[F]=y[F]/L;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:b}=this;v.dTheta.value=M,v.mipInt.value=b-r;const R=this._sizeLods[o],U=3*R*(o>b-go?o-b+go:0),N=4*(this._cubeSize-R);Su(t,U,N,3*R,2*R),d.setRenderTarget(t),d.render(g,vd)}}function sb(n){const e=[],t=[],r=[];let o=n;const l=n-go+1+H0.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-go?d=H0[u-n+go-1]:u===0&&(d=0),r.push(d);const h=1/(c-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,E=3,S=2,y=1,L=new Float32Array(E*M*x),b=new Float32Array(S*M*x),R=new Float32Array(y*M*x);for(let N=0;N<x;N++){const F=N%3*2/3-1,k=N>2?0:-1,P=[F,k,0,F+2/3,k,0,F+2/3,k+1,0,F,k,0,F+2/3,k+1,0,F,k+1,0];L.set(P,E*M*N),b.set(v,S*M*N);const C=[N,N,N,N,N,N];R.set(C,y*M*N)}const U=new sr;U.setAttribute("position",new Si(L,E)),U.setAttribute("uv",new Si(b,S)),U.setAttribute("faceIndex",new Si(R,y)),e.push(U),o>go&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function j0(n,e,t){const r=new Es(n,e,t);return r.texture.mapping=Yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Su(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function ob(n,e,t){const r=new Float32Array(gs),o=new ne(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function q0(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Y0(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function yp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ab(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,h=d===Qd||d===Jd,m=d===To||d===wo;if(h||m){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new X0(n)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return h&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new X0(n)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",l),g.texture):null}}}return c}function o(c){let d=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function lb(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&uo("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function ub(n,e,t,r){const o={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const x in v)e.update(v[x],n.ARRAY_BUFFER)}function h(g){const v=[],x=g.index,M=g.attributes.position;let E=0;if(x!==null){const L=x.array;E=x.version;for(let b=0,R=L.length;b<R;b+=3){const U=L[b+0],N=L[b+1],F=L[b+2];v.push(U,N,N,F,F,U)}}else if(M!==void 0){const L=M.array;E=M.version;for(let b=0,R=L.length/3-1;b<R;b+=3){const U=b+0,N=b+1,F=b+2;v.push(U,N,N,F,F,U)}}else return;const S=new(rx(v)?dx:fx)(v,1);S.version=E;const y=l.get(g);y&&e.remove(y),l.set(g,S)}function m(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&h(g)}else h(g);return l.get(g)}return{get:c,update:d,getWireframeAttribute:m}}function cb(n,e,t){let r;function o(v){r=v}let l,u;function c(v){l=v.type,u=v.bytesPerElement}function d(v,x){n.drawElements(r,x,l,v*u),t.update(x,r,1)}function h(v,x,M){M!==0&&(n.drawElementsInstanced(r,x,l,v*u,M),t.update(x,r,M))}function m(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,r,1)}function g(v,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/u,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,v,0,E,0,M);let y=0;for(let L=0;L<M;L++)y+=x[L]*E[L];t.update(y,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function fb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function db(n,e,t){const r=new WeakMap,o=new Kt;function l(u,c,d){const h=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(c);if(v===void 0||v.count!==g){let C=function(){k.dispose(),r.delete(c),c.removeEventListener("dispose",C)};var x=C;v!==void 0&&v.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let R=0;M===!0&&(R=1),E===!0&&(R=2),S===!0&&(R=3);let U=c.attributes.position.count*R,N=1;U>e.maxTextureSize&&(N=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const F=new Float32Array(U*N*4*g),k=new ox(F,U,N,g);k.type=$i,k.needsUpdate=!0;const P=R*4;for(let V=0;V<g;V++){const oe=y[V],Q=L[V],ue=b[V],he=U*N*4*V;for(let le=0;le<oe.count;le++){const ie=le*P;M===!0&&(o.fromBufferAttribute(oe,le),F[he+ie+0]=o.x,F[he+ie+1]=o.y,F[he+ie+2]=o.z,F[he+ie+3]=0),E===!0&&(o.fromBufferAttribute(Q,le),F[he+ie+4]=o.x,F[he+ie+5]=o.y,F[he+ie+6]=o.z,F[he+ie+7]=0),S===!0&&(o.fromBufferAttribute(ue,le),F[he+ie+8]=o.x,F[he+ie+9]=o.y,F[he+ie+10]=o.z,F[he+ie+11]=ue.itemSize===4?o.w:1)}}v={count:g,texture:k,size:new Lt(U,N)},r.set(c,v),c.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const E=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function hb(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const xx=new zn,$0=new _x(1,1),Sx=new ox,Mx=new jA,Ex=new mx,K0=[],Z0=[],Q0=new Float32Array(16),J0=new Float32Array(9),e_=new Float32Array(4);function Io(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=K0[o];if(l===void 0&&(l=new Float32Array(o),K0[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Zu(n,e){let t=Z0[e];t===void 0&&(t=new Int32Array(e),Z0[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function pb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function gb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function _b(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;e_.set(r),n.uniformMatrix2fv(this.addr,!1,e_),sn(t,r)}}function yb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;J0.set(r),n.uniformMatrix3fv(this.addr,!1,J0),sn(t,r)}}function xb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;Q0.set(r),n.uniformMatrix4fv(this.addr,!1,Q0),sn(t,r)}}function Sb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function Eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function Tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function wb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function Cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function Rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function Pb(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?($0.compareFunction=ix,l=$0):l=xx,t.setTexture2D(e||l,o)}function bb(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Mx,o)}function Db(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Ex,o)}function Lb(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Sx,o)}function Ib(n){switch(n){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return vb;case 35674:return _b;case 35675:return yb;case 35676:return xb;case 5124:case 35670:return Sb;case 35667:case 35671:return Mb;case 35668:case 35672:return Eb;case 35669:case 35673:return Tb;case 5125:return wb;case 36294:return Ab;case 36295:return Cb;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Lb}}function Ub(n,e){n.uniform1fv(this.addr,e)}function Nb(n,e){const t=Io(e,this.size,2);n.uniform2fv(this.addr,t)}function Fb(n,e){const t=Io(e,this.size,3);n.uniform3fv(this.addr,t)}function Ob(n,e){const t=Io(e,this.size,4);n.uniform4fv(this.addr,t)}function kb(n,e){const t=Io(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bb(n,e){const t=Io(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zb(n,e){const t=Io(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vb(n,e){n.uniform1iv(this.addr,e)}function Hb(n,e){n.uniform2iv(this.addr,e)}function Gb(n,e){n.uniform3iv(this.addr,e)}function Wb(n,e){n.uniform4iv(this.addr,e)}function Xb(n,e){n.uniform1uiv(this.addr,e)}function jb(n,e){n.uniform2uiv(this.addr,e)}function qb(n,e){n.uniform3uiv(this.addr,e)}function Yb(n,e){n.uniform4uiv(this.addr,e)}function $b(n,e,t){const r=this.cache,o=e.length,l=Zu(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||xx,l[u])}function Kb(n,e,t){const r=this.cache,o=e.length,l=Zu(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Mx,l[u])}function Zb(n,e,t){const r=this.cache,o=e.length,l=Zu(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Ex,l[u])}function Qb(n,e,t){const r=this.cache,o=e.length,l=Zu(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Sx,l[u])}function Jb(n){switch(n){case 5126:return Ub;case 35664:return Nb;case 35665:return Fb;case 35666:return Ob;case 35674:return kb;case 35675:return Bb;case 35676:return zb;case 5124:case 35670:return Vb;case 35667:case 35671:return Hb;case 35668:case 35672:return Gb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return jb;case 36295:return qb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Qb}}class e2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Ib(t.type)}}class t2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jb(t.type)}}class n2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function t_(n,e){n.seq.push(e),n.map[e.id]=e}function i2(n,e,t){const r=n.name,o=r.length;for(Md.lastIndex=0;;){const l=Md.exec(r),u=Md.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){t_(t,h===void 0?new e2(c,n,e):new t2(c,n,e));break}else{let g=t.map[c];g===void 0&&(g=new n2(c),t_(t,g)),t=g}}}class Du{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);i2(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function n_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const r2=37297;let s2=0;function o2(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const i_=new lt;function a2(n){wt._getMatrix(i_,wt.workingColorSpace,n);const e=`mat3( ${i_.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case Bu:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function r_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+o2(n.getShaderSource(e),u)}else return o}function l2(n,e){const t=a2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function u2(n,e){let t;switch(e){case vA:t="Linear";break;case _A:t="Reinhard";break;case yA:t="Cineon";break;case xA:t="ACESFilmic";break;case MA:t="AgX";break;case EA:t="Neutral";break;case SA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mu=new ne;function c2(){wt.getLuminanceCoefficients(Mu);const n=Mu.x.toFixed(4),e=Mu.y.toFixed(4),t=Mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function d2(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function h2(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function Sa(n){return n!==""}function s_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p2=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(p2,g2)}const m2=new Map;function g2(n,e){let t=ut[e];if(t===void 0){const r=m2.get(e);if(r!==void 0)t=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bh(t)}const v2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(n){return n.replace(v2,_2)}function _2(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function l_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function x2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case To:case wo:e="ENVMAP_TYPE_CUBE";break;case Yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case wo:e="ENVMAP_MODE_REFRACTION";break}return e}function M2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xy:e="ENVMAP_BLENDING_MULTIPLY";break;case mA:e="ENVMAP_BLENDING_MIX";break;case gA:e="ENVMAP_BLENDING_ADD";break}return e}function E2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function T2(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=y2(t),h=x2(t),m=S2(t),g=M2(t),v=E2(t),x=f2(t),M=d2(l),E=o.createProgram();let S,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Sa).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Sa).join(`
`),y.length>0&&(y+=`
`)):(S=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),y=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?ut.tonemapping_pars_fragment:"",t.toneMapping!==Fr?u2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,l2("linearToOutputTexel",t.outputColorSpace),c2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),u=bh(u),u=s_(u,t),u=o_(u,t),c=bh(c),c=s_(c,t),c=o_(c,t),u=a_(u),c=a_(c),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===S0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===S0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=L+S+u,R=L+y+c,U=n_(o,o.VERTEX_SHADER,b),N=n_(o,o.FRAGMENT_SHADER,R);o.attachShader(E,U),o.attachShader(E,N),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function F(V){if(n.debug.checkShaderErrors){const oe=o.getProgramInfoLog(E).trim(),Q=o.getShaderInfoLog(U).trim(),ue=o.getShaderInfoLog(N).trim();let he=!0,le=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(he=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,E,U,N);else{const ie=r_(o,U,"vertex"),z=r_(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+oe+`
`+ie+`
`+z)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(Q===""||ue==="")&&(le=!1);le&&(V.diagnostics={runnable:he,programLog:oe,vertexShader:{log:Q,prefix:S},fragmentShader:{log:ue,prefix:y}})}o.deleteShader(U),o.deleteShader(N),k=new Du(o,E),P=h2(o,E)}let k;this.getUniforms=function(){return k===void 0&&F(this),k};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(E,r2)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=U,this.fragmentShader=N,this}let w2=0;class A2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new C2(e),t.set(e,r)),r}}class C2{constructor(e){this.id=w2++,this.code=e,this.usedTimes=0}}function R2(n,e,t,r,o,l,u){const c=new lx,d=new A2,h=new Set,m=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,C,V,oe,Q){const ue=oe.fog,he=Q.geometry,le=P.isMeshStandardMaterial?oe.environment:null,ie=(P.isMeshStandardMaterial?t:e).get(P.envMap||le),z=ie&&ie.mapping===Yu?ie.image.height:null,ae=M[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,O=re!==void 0?re.length:0;let te=0;he.morphAttributes.position!==void 0&&(te=1),he.morphAttributes.normal!==void 0&&(te=2),he.morphAttributes.color!==void 0&&(te=3);let Ne,K,ce,Me;if(ae){const xt=Ri[ae];Ne=xt.vertexShader,K=xt.fragmentShader}else Ne=P.vertexShader,K=P.fragmentShader,d.update(P),ce=d.getVertexShaderID(P),Me=d.getFragmentShaderID(P);const _e=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Fe=Q.isInstancedMesh===!0,Je=Q.isBatchedMesh===!0,Pt=!!P.map,gt=!!P.matcap,It=!!ie,H=!!P.aoMap,Tn=!!P.lightMap,pt=!!P.bumpMap,ft=!!P.normalMap,Ye=!!P.displacementMap,Ct=!!P.emissiveMap,je=!!P.metalnessMap,D=!!P.roughnessMap,w=P.anisotropy>0,$=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,fe=P.sheen>0,We=P.transmission>0,Ce=w&&!!P.anisotropyMap,Oe=$&&!!P.clearcoatMap,ct=$&&!!P.clearcoatNormalMap,Se=$&&!!P.clearcoatRoughnessMap,ze=ge&&!!P.iridescenceMap,Ke=ge&&!!P.iridescenceThicknessMap,tt=fe&&!!P.sheenColorMap,Ve=fe&&!!P.sheenRoughnessMap,dt=!!P.specularMap,st=!!P.specularColorMap,At=!!P.specularIntensityMap,X=We&&!!P.transmissionMap,Re=We&&!!P.thicknessMap,se=!!P.gradientMap,de=!!P.alphaMap,Le=P.alphaTest>0,De=!!P.alphaHash,ot=!!P.extensions;let Nt=Fr;P.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const en={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:K,defines:P.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:Je,batchingColor:Je&&Q._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&Q.instanceColor!==null,instancingMorph:Fe&&Q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ro,alphaToCoverage:!!P.alphaToCoverage,map:Pt,matcap:gt,envMap:It,envMapMode:It&&ie.mapping,envMapCubeUVHeight:z,aoMap:H,lightMap:Tn,bumpMap:pt,normalMap:ft,displacementMap:v&&Ye,emissiveMap:Ct,normalMapObjectSpace:ft&&P.normalMapType===RA,normalMapTangentSpace:ft&&P.normalMapType===CA,metalnessMap:je,roughnessMap:D,anisotropy:w,anisotropyMap:Ce,clearcoat:$,clearcoatMap:Oe,clearcoatNormalMap:ct,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:ge,iridescenceMap:ze,iridescenceThicknessMap:Ke,sheen:fe,sheenColorMap:tt,sheenRoughnessMap:Ve,specularMap:dt,specularColorMap:st,specularIntensityMap:At,transmission:We,transmissionMap:X,thicknessMap:Re,gradientMap:se,opaque:P.transparent===!1&&P.blending===vo&&P.alphaToCoverage===!1,alphaMap:de,alphaTest:Le,alphaHash:De,combine:P.combine,mapUv:Pt&&E(P.map.channel),aoMapUv:H&&E(P.aoMap.channel),lightMapUv:Tn&&E(P.lightMap.channel),bumpMapUv:pt&&E(P.bumpMap.channel),normalMapUv:ft&&E(P.normalMap.channel),displacementMapUv:Ye&&E(P.displacementMap.channel),emissiveMapUv:Ct&&E(P.emissiveMap.channel),metalnessMapUv:je&&E(P.metalnessMap.channel),roughnessMapUv:D&&E(P.roughnessMap.channel),anisotropyMapUv:Ce&&E(P.anisotropyMap.channel),clearcoatMapUv:Oe&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&E(P.sheenRoughnessMap.channel),specularMapUv:dt&&E(P.specularMap.channel),specularColorMapUv:st&&E(P.specularColorMap.channel),specularIntensityMapUv:At&&E(P.specularIntensityMap.channel),transmissionMapUv:X&&E(P.transmissionMap.channel),thicknessMapUv:Re&&E(P.thicknessMap.channel),alphaMapUv:de&&E(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ft||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!he.attributes.uv&&(Pt||de),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Pt&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:Ct&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Yi,flipSided:P.side===Bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return en.vertexUv1s=h.has(1),en.vertexUv2s=h.has(2),en.vertexUv3s=h.has(3),h.clear(),en}function y(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)C.push(V),C.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(L(C,P),b(C,P),C.push(n.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function L(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function b(P,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),P.push(c.mask)}function R(P){const C=M[P.type];let V;if(C){const oe=Ri[C];V=rC.clone(oe.uniforms)}else V=P.uniforms;return V}function U(P,C){let V;for(let oe=0,Q=m.length;oe<Q;oe++){const ue=m[oe];if(ue.cacheKey===C){V=ue,++V.usedTimes;break}}return V===void 0&&(V=new T2(n,C,P,l),m.push(V)),V}function N(P){if(--P.usedTimes===0){const C=m.indexOf(P);m[C]=m[m.length-1],m.pop(),P.destroy()}}function F(P){d.remove(P)}function k(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:R,acquireProgram:U,releaseProgram:N,releaseShaderCache:F,programs:m,dispose:k}}function P2(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function b2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function u_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function c_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,v,x,M,E,S){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},n[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=E,y.group=S),e++,y}function c(g,v,x,M,E,S){const y=u(g,v,x,M,E,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):t.push(y)}function d(g,v,x,M,E,S){const y=u(g,v,x,M,E,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,v){t.length>1&&t.sort(g||b2),r.length>1&&r.sort(v||u_),o.length>1&&o.sort(v||u_)}function m(){for(let g=e,v=n.length;g<v;g++){const x=n[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:d,finish:m,sort:h}}function D2(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new c_,n.set(r,[u])):o>=l.length?(u=new c_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function L2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Rt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}function I2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let U2=0;function N2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function F2(n){const e=new L2,t=I2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ne);const o=new ne,l=new Zt,u=new Zt;function c(h){let m=0,g=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,L=0,b=0,R=0,U=0,N=0,F=0;h.sort(N2);for(let P=0,C=h.length;P<C;P++){const V=h[P],oe=V.color,Q=V.intensity,ue=V.distance,he=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=oe.r*Q,g+=oe.g*Q,v+=oe.b*Q;else if(V.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(V.sh.coefficients[le],Q);F++}else if(V.isDirectionalLight){const le=e.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ie=V.shadow,z=t.get(V);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,r.directionalShadow[x]=z,r.directionalShadowMap[x]=he,r.directionalShadowMatrix[x]=V.shadow.matrix,L++}r.directional[x]=le,x++}else if(V.isSpotLight){const le=e.get(V);le.position.setFromMatrixPosition(V.matrixWorld),le.color.copy(oe).multiplyScalar(Q),le.distance=ue,le.coneCos=Math.cos(V.angle),le.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),le.decay=V.decay,r.spot[E]=le;const ie=V.shadow;if(V.map&&(r.spotLightMap[U]=V.map,U++,ie.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[E]=ie.matrix,V.castShadow){const z=t.get(V);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,r.spotShadow[E]=z,r.spotShadowMap[E]=he,R++}E++}else if(V.isRectAreaLight){const le=e.get(V);le.color.copy(oe).multiplyScalar(Q),le.halfWidth.set(V.width*.5,0,0),le.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=le,S++}else if(V.isPointLight){const le=e.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity),le.distance=V.distance,le.decay=V.decay,V.castShadow){const ie=V.shadow,z=t.get(V);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,z.shadowCameraNear=ie.camera.near,z.shadowCameraFar=ie.camera.far,r.pointShadow[M]=z,r.pointShadowMap[M]=he,r.pointShadowMatrix[M]=V.shadow.matrix,b++}r.point[M]=le,M++}else if(V.isHemisphereLight){const le=e.get(V);le.skyColor.copy(V.color).multiplyScalar(Q),le.groundColor.copy(V.groundColor).multiplyScalar(Q),r.hemi[y]=le,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==x||k.pointLength!==M||k.spotLength!==E||k.rectAreaLength!==S||k.hemiLength!==y||k.numDirectionalShadows!==L||k.numPointShadows!==b||k.numSpotShadows!==R||k.numSpotMaps!==U||k.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=E,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+U-N,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,k.directionalLength=x,k.pointLength=M,k.spotLength=E,k.rectAreaLength=S,k.hemiLength=y,k.numDirectionalShadows=L,k.numPointShadows=b,k.numSpotShadows=R,k.numSpotMaps=U,k.numLightProbes=F,r.version=U2++)}function d(h,m){let g=0,v=0,x=0,M=0,E=0;const S=m.matrixWorldInverse;for(let y=0,L=h.length;y<L;y++){const b=h[y];if(b.isDirectionalLight){const R=r.directional[g];R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),g++}else if(b.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),x++}else if(b.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(S),u.identity(),l.copy(b.matrixWorld),l.premultiply(S),u.extractRotation(l),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(S),v++}else if(b.isHemisphereLight){const R=r.hemi[E];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(S),E++}}}return{setup:c,setupView:d,state:r}}function f_(n){const e=new F2(n),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function c(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:l,pushShadow:u}}function O2(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new f_(n),e.set(o,[c])):l>=u.length?(c=new f_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const k2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z2(n,e,t){let r=new gx;const o=new Lt,l=new Lt,u=new Kt,c=new hC({depthPacking:AA}),d=new pC,h={},m=t.maxTextureSize,g={[Br]:Bn,[Bn]:Br,[Yi]:Yi},v=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:k2,fragmentShader:B2}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new sr;M.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Zi(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wy;let y=this.type;this.render=function(N,F,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const P=n.getRenderTarget(),C=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(Nr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const Q=y!==qi&&this.type===qi,ue=y===qi&&this.type!==qi;for(let he=0,le=N.length;he<le;he++){const ie=N[he],z=ie.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const ae=z.getFrameExtents();if(o.multiply(ae),l.copy(z.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ae.x),o.x=l.x*ae.x,z.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ae.y),o.y=l.y*ae.y,z.mapSize.y=l.y)),z.map===null||Q===!0||ue===!0){const O=this.type!==qi?{minFilter:xi,magFilter:xi}:{};z.map!==null&&z.map.dispose(),z.map=new Es(o.x,o.y,O),z.map.texture.name=ie.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const re=z.getViewportCount();for(let O=0;O<re;O++){const te=z.getViewport(O);u.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),oe.viewport(u),z.updateMatrices(ie,O),r=z.getFrustum(),R(F,k,z.camera,ie,this.type)}z.isPointLightShadow!==!0&&this.type===qi&&L(z,k),z.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(P,C,V)};function L(N,F){const k=e.update(E);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Es(o.x,o.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(F,null,k,v,E,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(F,null,k,x,E,null)}function b(N,F,k,P){let C=null;const V=k.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)C=V;else if(C=k.isPointLight===!0?d:c,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const oe=C.uuid,Q=F.uuid;let ue=h[oe];ue===void 0&&(ue={},h[oe]=ue);let he=ue[Q];he===void 0&&(he=C.clone(),ue[Q]=he,F.addEventListener("dispose",U)),C=he}if(C.visible=F.visible,C.wireframe=F.wireframe,P===qi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:g[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=n.properties.get(C);oe.light=k}return C}function R(N,F,k,P,C){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===qi)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,N.matrixWorld);const Q=e.update(N),ue=N.material;if(Array.isArray(ue)){const he=Q.groups;for(let le=0,ie=he.length;le<ie;le++){const z=he[le],ae=ue[z.materialIndex];if(ae&&ae.visible){const re=b(N,ae,P,C);N.onBeforeShadow(n,N,F,k,Q,re,z),n.renderBufferDirect(k,null,Q,re,N,z),N.onAfterShadow(n,N,F,k,Q,re,z)}}}else if(ue.visible){const he=b(N,ue,P,C);N.onBeforeShadow(n,N,F,k,Q,he,null),n.renderBufferDirect(k,null,Q,he,N,null),N.onAfterShadow(n,N,F,k,Q,he,null)}}const oe=N.children;for(let Q=0,ue=oe.length;Q<ue;Q++)R(oe[Q],F,k,P,C)}function U(N){N.target.removeEventListener("dispose",U);for(const k in h){const P=h[k],C=N.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const V2={[Xd]:jd,[qd]:Kd,[Yd]:Zd,[Eo]:$d,[jd]:Xd,[Kd]:qd,[Zd]:Yd,[$d]:Eo};function H2(n,e){function t(){let X=!1;const Re=new Kt;let se=null;const de=new Kt(0,0,0,0);return{setMask:function(Le){se!==Le&&!X&&(n.colorMask(Le,Le,Le,Le),se=Le)},setLocked:function(Le){X=Le},setClear:function(Le,De,ot,Nt,en){en===!0&&(Le*=Nt,De*=Nt,ot*=Nt),Re.set(Le,De,ot,Nt),de.equals(Re)===!1&&(n.clearColor(Le,De,ot,Nt),de.copy(Re))},reset:function(){X=!1,se=null,de.set(-1,0,0,0)}}}function r(){let X=!1,Re=!1,se=null,de=null,Le=null;return{setReversed:function(De){if(Re!==De){const ot=e.get("EXT_clip_control");Re?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Nt=Le;Le=null,this.setClear(Nt)}Re=De},getReversed:function(){return Re},setTest:function(De){De?_e(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(De){se!==De&&!X&&(n.depthMask(De),se=De)},setFunc:function(De){if(Re&&(De=V2[De]),de!==De){switch(De){case Xd:n.depthFunc(n.NEVER);break;case jd:n.depthFunc(n.ALWAYS);break;case qd:n.depthFunc(n.LESS);break;case Eo:n.depthFunc(n.LEQUAL);break;case Yd:n.depthFunc(n.EQUAL);break;case $d:n.depthFunc(n.GEQUAL);break;case Kd:n.depthFunc(n.GREATER);break;case Zd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=De}},setLocked:function(De){X=De},setClear:function(De){Le!==De&&(Re&&(De=1-De),n.clearDepth(De),Le=De)},reset:function(){X=!1,se=null,de=null,Le=null,Re=!1}}}function o(){let X=!1,Re=null,se=null,de=null,Le=null,De=null,ot=null,Nt=null,en=null;return{setTest:function(xt){X||(xt?_e(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!X&&(n.stencilMask(xt),Re=xt)},setFunc:function(xt,Dn,wn){(se!==xt||de!==Dn||Le!==wn)&&(n.stencilFunc(xt,Dn,wn),se=xt,de=Dn,Le=wn)},setOp:function(xt,Dn,wn){(De!==xt||ot!==Dn||Nt!==wn)&&(n.stencilOp(xt,Dn,wn),De=xt,ot=Dn,Nt=wn)},setLocked:function(xt){X=xt},setClear:function(xt){en!==xt&&(n.clearStencil(xt),en=xt)},reset:function(){X=!1,Re=null,se=null,de=null,Le=null,De=null,ot=null,Nt=null,en=null}}}const l=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let m={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,y=null,L=null,b=null,R=null,U=null,N=null,F=new Rt(0,0,0),k=0,P=!1,C=null,V=null,oe=null,Q=null,ue=null;const he=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ie=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(z)[1]),le=ie>=1):z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),le=ie>=2);let ae=null,re={};const O=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),Ne=new Kt().fromArray(O),K=new Kt().fromArray(te);function ce(X,Re,se,de){const Le=new Uint8Array(4),De=n.createTexture();n.bindTexture(X,De),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<se;ot++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Re+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return De}const Me={};Me[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),c.setClear(0),_e(n.DEPTH_TEST),u.setFunc(Eo),pt(!1),ft(m0),_e(n.CULL_FACE),H(Nr);function _e(X){m[X]!==!0&&(n.enable(X),m[X]=!0)}function Ae(X){m[X]!==!1&&(n.disable(X),m[X]=!1)}function Fe(X,Re){return g[X]!==Re?(n.bindFramebuffer(X,Re),g[X]=Re,X===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Re),X===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function Je(X,Re){let se=x,de=!1;if(X){se=v.get(Re),se===void 0&&(se=[],v.set(Re,se));const Le=X.textures;if(se.length!==Le.length||se[0]!==n.COLOR_ATTACHMENT0){for(let De=0,ot=Le.length;De<ot;De++)se[De]=n.COLOR_ATTACHMENT0+De;se.length=Le.length,de=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,de=!0);de&&n.drawBuffers(se)}function Pt(X){return M!==X?(n.useProgram(X),M=X,!0):!1}const gt={[ms]:n.FUNC_ADD,[Qw]:n.FUNC_SUBTRACT,[Jw]:n.FUNC_REVERSE_SUBTRACT};gt[eA]=n.MIN,gt[tA]=n.MAX;const It={[nA]:n.ZERO,[iA]:n.ONE,[rA]:n.SRC_COLOR,[Gd]:n.SRC_ALPHA,[cA]:n.SRC_ALPHA_SATURATE,[lA]:n.DST_COLOR,[oA]:n.DST_ALPHA,[sA]:n.ONE_MINUS_SRC_COLOR,[Wd]:n.ONE_MINUS_SRC_ALPHA,[uA]:n.ONE_MINUS_DST_COLOR,[aA]:n.ONE_MINUS_DST_ALPHA,[fA]:n.CONSTANT_COLOR,[dA]:n.ONE_MINUS_CONSTANT_COLOR,[hA]:n.CONSTANT_ALPHA,[pA]:n.ONE_MINUS_CONSTANT_ALPHA};function H(X,Re,se,de,Le,De,ot,Nt,en,xt){if(X===Nr){E===!0&&(Ae(n.BLEND),E=!1);return}if(E===!1&&(_e(n.BLEND),E=!0),X!==Zw){if(X!==S||xt!==P){if((y!==ms||R!==ms)&&(n.blendEquation(n.FUNC_ADD),y=ms,R=ms),xt)switch(X){case vo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case g0:n.blendFunc(n.ONE,n.ONE);break;case v0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case vo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case g0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case v0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,b=null,U=null,N=null,F.set(0,0,0),k=0,S=X,P=xt}return}Le=Le||Re,De=De||se,ot=ot||de,(Re!==y||Le!==R)&&(n.blendEquationSeparate(gt[Re],gt[Le]),y=Re,R=Le),(se!==L||de!==b||De!==U||ot!==N)&&(n.blendFuncSeparate(It[se],It[de],It[De],It[ot]),L=se,b=de,U=De,N=ot),(Nt.equals(F)===!1||en!==k)&&(n.blendColor(Nt.r,Nt.g,Nt.b,en),F.copy(Nt),k=en),S=X,P=!1}function Tn(X,Re){X.side===Yi?Ae(n.CULL_FACE):_e(n.CULL_FACE);let se=X.side===Bn;Re&&(se=!se),pt(se),X.blending===vo&&X.transparent===!1?H(Nr):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const de=X.stencilWrite;c.setTest(de),de&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ct(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(X){C!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),C=X)}function ft(X){X!==Yw?(_e(n.CULL_FACE),X!==V&&(X===m0?n.cullFace(n.BACK):X===$w?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),V=X}function Ye(X){X!==oe&&(le&&n.lineWidth(X),oe=X)}function Ct(X,Re,se){X?(_e(n.POLYGON_OFFSET_FILL),(Q!==Re||ue!==se)&&(n.polygonOffset(Re,se),Q=Re,ue=se)):Ae(n.POLYGON_OFFSET_FILL)}function je(X){X?_e(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function D(X){X===void 0&&(X=n.TEXTURE0+he-1),ae!==X&&(n.activeTexture(X),ae=X)}function w(X,Re,se){se===void 0&&(ae===null?se=n.TEXTURE0+he-1:se=ae);let de=re[se];de===void 0&&(de={type:void 0,texture:void 0},re[se]=de),(de.type!==X||de.texture!==Re)&&(ae!==se&&(n.activeTexture(se),ae=se),n.bindTexture(X,Re||Me[X]),de.type=X,de.texture=Re)}function $(){const X=re[ae];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(X){Ne.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Ne.copy(X))}function Ve(X){K.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),K.copy(X))}function dt(X,Re){let se=h.get(Re);se===void 0&&(se=new WeakMap,h.set(Re,se));let de=se.get(X);de===void 0&&(de=n.getUniformBlockIndex(Re,X.name),se.set(X,de))}function st(X,Re){const de=h.get(Re).get(X);d.get(Re)!==de&&(n.uniformBlockBinding(Re,de,X.__bindingPointIndex),d.set(Re,de))}function At(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},ae=null,re={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,y=null,L=null,b=null,R=null,U=null,N=null,F=new Rt(0,0,0),k=0,P=!1,C=null,V=null,oe=null,Q=null,ue=null,Ne.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),c.reset()}return{buffers:{color:l,depth:u,stencil:c},enable:_e,disable:Ae,bindFramebuffer:Fe,drawBuffers:Je,useProgram:Pt,setBlending:H,setMaterial:Tn,setFlipSided:pt,setCullFace:ft,setLineWidth:Ye,setPolygonOffset:Ct,setScissorTest:je,activeTexture:D,bindTexture:w,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ze,texImage3D:Ke,updateUBOMapping:dt,uniformBlockBinding:st,texStorage2D:ct,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:We,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Oe,scissor:tt,viewport:Ve,reset:At}}function G2(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Lt,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,w){return x?new OffscreenCanvas(D,w):Vu("canvas")}function E(D,w,$){let pe=1;const ge=je(D);if((ge.width>$||ge.height>$)&&(pe=$/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);g===void 0&&(g=M(fe,We));const Ce=w?M(fe,We):g;return Ce.width=fe,Ce.height=We,Ce.getContext("2d").drawImage(D,0,0,fe,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+We+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function S(D){return D.generateMipmaps}function y(D){n.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,w,$,pe,ge=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=w;if(w===n.RED&&($===n.FLOAT&&(fe=n.R32F),$===n.HALF_FLOAT&&(fe=n.R16F),$===n.UNSIGNED_BYTE&&(fe=n.R8)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(fe=n.R8UI),$===n.UNSIGNED_SHORT&&(fe=n.R16UI),$===n.UNSIGNED_INT&&(fe=n.R32UI),$===n.BYTE&&(fe=n.R8I),$===n.SHORT&&(fe=n.R16I),$===n.INT&&(fe=n.R32I)),w===n.RG&&($===n.FLOAT&&(fe=n.RG32F),$===n.HALF_FLOAT&&(fe=n.RG16F),$===n.UNSIGNED_BYTE&&(fe=n.RG8)),w===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(fe=n.RG8UI),$===n.UNSIGNED_SHORT&&(fe=n.RG16UI),$===n.UNSIGNED_INT&&(fe=n.RG32UI),$===n.BYTE&&(fe=n.RG8I),$===n.SHORT&&(fe=n.RG16I),$===n.INT&&(fe=n.RG32I)),w===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),$===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),$===n.UNSIGNED_INT&&(fe=n.RGB32UI),$===n.BYTE&&(fe=n.RGB8I),$===n.SHORT&&(fe=n.RGB16I),$===n.INT&&(fe=n.RGB32I)),w===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),$===n.UNSIGNED_INT&&(fe=n.RGBA32UI),$===n.BYTE&&(fe=n.RGBA8I),$===n.SHORT&&(fe=n.RGBA16I),$===n.INT&&(fe=n.RGBA32I)),w===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),w===n.RGBA){const We=ge?Bu:wt.getTransfer(pe);$===n.FLOAT&&(fe=n.RGBA32F),$===n.HALF_FLOAT&&(fe=n.RGBA16F),$===n.UNSIGNED_BYTE&&(fe=We===Dt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(D,w){let $;return D?w===null||w===Ms||w===Ao?$=n.DEPTH24_STENCIL8:w===$i?$=n.DEPTH32F_STENCIL8:w===Da&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ms||w===Ao?$=n.DEPTH_COMPONENT24:w===$i?$=n.DEPTH_COMPONENT32F:w===Da&&($=n.DEPTH_COMPONENT16),$}function U(D,w){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==xi&&D.minFilter!==Pi?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function N(D){const w=D.target;w.removeEventListener("dispose",N),k(w),w.isVideoTexture&&m.delete(w)}function F(D){const w=D.target;w.removeEventListener("dispose",F),C(w)}function k(D){const w=r.get(D);if(w.__webglInit===void 0)return;const $=D.source,pe=v.get($);if(pe){const ge=pe[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(D),Object.keys(pe).length===0&&v.delete($)}r.remove(D)}function P(D){const w=r.get(D);n.deleteTexture(w.__webglTexture);const $=D.source,pe=v.get($);delete pe[w.__cacheKey],u.memory.textures--}function C(D){const w=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ge=0;ge<w.__webglFramebuffer[pe].length;ge++)n.deleteFramebuffer(w.__webglFramebuffer[pe][ge]);else n.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)n.deleteFramebuffer(w.__webglFramebuffer[pe]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=D.textures;for(let pe=0,ge=$.length;pe<ge;pe++){const fe=r.get($[pe]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove($[pe])}r.remove(D)}let V=0;function oe(){V=0}function Q(){const D=V;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),V+=1,D}function ue(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function he(D,w){const $=r.get(D);if(D.isVideoTexture&&Ye(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,D,w);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function le(D,w){const $=r.get(D);if(D.version>0&&$.__version!==D.version){K($,D,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function ie(D,w){const $=r.get(D);if(D.version>0&&$.__version!==D.version){K($,D,w);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function z(D,w){const $=r.get(D);if(D.version>0&&$.__version!==D.version){ce($,D,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}const ae={[eh]:n.REPEAT,[_s]:n.CLAMP_TO_EDGE,[th]:n.MIRRORED_REPEAT},re={[xi]:n.NEAREST,[TA]:n.NEAREST_MIPMAP_NEAREST,[Jl]:n.NEAREST_MIPMAP_LINEAR,[Pi]:n.LINEAR,[Yf]:n.LINEAR_MIPMAP_NEAREST,[ys]:n.LINEAR_MIPMAP_LINEAR},O={[PA]:n.NEVER,[NA]:n.ALWAYS,[bA]:n.LESS,[ix]:n.LEQUAL,[DA]:n.EQUAL,[UA]:n.GEQUAL,[LA]:n.GREATER,[IA]:n.NOTEQUAL};function te(D,w){if(w.type===$i&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Pi||w.magFilter===Yf||w.magFilter===Jl||w.magFilter===ys||w.minFilter===Pi||w.minFilter===Yf||w.minFilter===Jl||w.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ae[w.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ae[w.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ae[w.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,re[w.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===xi||w.minFilter!==Jl&&w.minFilter!==ys||w.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(D,w){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",N));const pe=w.source;let ge=v.get(pe);ge===void 0&&(ge={},v.set(pe,ge));const fe=ue(w);if(fe!==D.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,$=!0),ge[fe].usedTimes++;const We=ge[D.__cacheKey];We!==void 0&&(ge[D.__cacheKey].usedTimes--,We.usedTimes===0&&P(w)),D.__cacheKey=fe,D.__webglTexture=ge[fe].texture}return $}function K(D,w,$){let pe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=n.TEXTURE_3D);const ge=Ne(D,w),fe=w.source;t.bindTexture(pe,D.__webglTexture,n.TEXTURE0+$);const We=r.get(fe);if(fe.version!==We.__version||ge===!0){t.activeTexture(n.TEXTURE0+$);const Ce=wt.getPrimaries(wt.workingColorSpace),Oe=w.colorSpace===Ur?null:wt.getPrimaries(w.colorSpace),ct=w.colorSpace===Ur||Ce===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Se=E(w.image,!1,o.maxTextureSize);Se=Ct(w,Se);const ze=l.convert(w.format,w.colorSpace),Ke=l.convert(w.type);let tt=b(w.internalFormat,ze,Ke,w.colorSpace,w.isVideoTexture);te(pe,w);let Ve;const dt=w.mipmaps,st=w.isVideoTexture!==!0,At=We.__version===void 0||ge===!0,X=fe.dataReady,Re=U(w,Se);if(w.isDepthTexture)tt=R(w.format===Co,w.type),At&&(st?t.texStorage2D(n.TEXTURE_2D,1,tt,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,tt,Se.width,Se.height,0,ze,Ke,null));else if(w.isDataTexture)if(dt.length>0){st&&At&&t.texStorage2D(n.TEXTURE_2D,Re,tt,dt[0].width,dt[0].height);for(let se=0,de=dt.length;se<de;se++)Ve=dt[se],st?X&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ve.width,Ve.height,ze,Ke,Ve.data):t.texImage2D(n.TEXTURE_2D,se,tt,Ve.width,Ve.height,0,ze,Ke,Ve.data);w.generateMipmaps=!1}else st?(At&&t.texStorage2D(n.TEXTURE_2D,Re,tt,Se.width,Se.height),X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se.width,Se.height,ze,Ke,Se.data)):t.texImage2D(n.TEXTURE_2D,0,tt,Se.width,Se.height,0,ze,Ke,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&At&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,tt,dt[0].width,dt[0].height,Se.depth);for(let se=0,de=dt.length;se<de;se++)if(Ve=dt[se],w.format!==yi)if(ze!==null)if(st){if(X)if(w.layerUpdates.size>0){const Le=V0(Ve.width,Ve.height,w.format,w.type);for(const De of w.layerUpdates){const ot=Ve.data.subarray(De*Le/Ve.data.BYTES_PER_ELEMENT,(De+1)*Le/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,De,Ve.width,Ve.height,1,ze,ot)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ve.width,Ve.height,Se.depth,ze,Ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,tt,Ve.width,Ve.height,Se.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ve.width,Ve.height,Se.depth,ze,Ke,Ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,tt,Ve.width,Ve.height,Se.depth,0,ze,Ke,Ve.data)}else{st&&At&&t.texStorage2D(n.TEXTURE_2D,Re,tt,dt[0].width,dt[0].height);for(let se=0,de=dt.length;se<de;se++)Ve=dt[se],w.format!==yi?ze!==null?st?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Ve.width,Ve.height,ze,Ve.data):t.compressedTexImage2D(n.TEXTURE_2D,se,tt,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?X&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ve.width,Ve.height,ze,Ke,Ve.data):t.texImage2D(n.TEXTURE_2D,se,tt,Ve.width,Ve.height,0,ze,Ke,Ve.data)}else if(w.isDataArrayTexture)if(st){if(At&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,tt,Se.width,Se.height,Se.depth),X)if(w.layerUpdates.size>0){const se=V0(Se.width,Se.height,w.format,w.type);for(const de of w.layerUpdates){const Le=Se.data.subarray(de*se/Se.data.BYTES_PER_ELEMENT,(de+1)*se/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,ze,Ke,Le)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ze,Ke,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,tt,Se.width,Se.height,Se.depth,0,ze,Ke,Se.data);else if(w.isData3DTexture)st?(At&&t.texStorage3D(n.TEXTURE_3D,Re,tt,Se.width,Se.height,Se.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ze,Ke,Se.data)):t.texImage3D(n.TEXTURE_3D,0,tt,Se.width,Se.height,Se.depth,0,ze,Ke,Se.data);else if(w.isFramebufferTexture){if(At)if(st)t.texStorage2D(n.TEXTURE_2D,Re,tt,Se.width,Se.height);else{let se=Se.width,de=Se.height;for(let Le=0;Le<Re;Le++)t.texImage2D(n.TEXTURE_2D,Le,tt,se,de,0,ze,Ke,null),se>>=1,de>>=1}}else if(dt.length>0){if(st&&At){const se=je(dt[0]);t.texStorage2D(n.TEXTURE_2D,Re,tt,se.width,se.height)}for(let se=0,de=dt.length;se<de;se++)Ve=dt[se],st?X&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ze,Ke,Ve):t.texImage2D(n.TEXTURE_2D,se,tt,ze,Ke,Ve);w.generateMipmaps=!1}else if(st){if(At){const se=je(Se);t.texStorage2D(n.TEXTURE_2D,Re,tt,se.width,se.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,Ke,Se)}else t.texImage2D(n.TEXTURE_2D,0,tt,ze,Ke,Se);S(w)&&y(pe),We.__version=fe.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ce(D,w,$){if(w.image.length!==6)return;const pe=Ne(D,w),ge=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+$);const fe=r.get(ge);if(ge.version!==fe.__version||pe===!0){t.activeTexture(n.TEXTURE0+$);const We=wt.getPrimaries(wt.workingColorSpace),Ce=w.colorSpace===Ur?null:wt.getPrimaries(w.colorSpace),Oe=w.colorSpace===Ur||We===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,ze=[];for(let de=0;de<6;de++)!ct&&!Se?ze[de]=E(w.image[de],!0,o.maxCubemapSize):ze[de]=Se?w.image[de].image:w.image[de],ze[de]=Ct(w,ze[de]);const Ke=ze[0],tt=l.convert(w.format,w.colorSpace),Ve=l.convert(w.type),dt=b(w.internalFormat,tt,Ve,w.colorSpace),st=w.isVideoTexture!==!0,At=fe.__version===void 0||pe===!0,X=ge.dataReady;let Re=U(w,Ke);te(n.TEXTURE_CUBE_MAP,w);let se;if(ct){st&&At&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,dt,Ke.width,Ke.height);for(let de=0;de<6;de++){se=ze[de].mipmaps;for(let Le=0;Le<se.length;Le++){const De=se[Le];w.format!==yi?tt!==null?st?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,De.width,De.height,tt,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,dt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,De.width,De.height,tt,Ve,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,dt,De.width,De.height,0,tt,Ve,De.data)}}}else{if(se=w.mipmaps,st&&At){se.length>0&&Re++;const de=je(ze[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,dt,de.width,de.height)}for(let de=0;de<6;de++)if(Se){st?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ze[de].width,ze[de].height,tt,Ve,ze[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,dt,ze[de].width,ze[de].height,0,tt,Ve,ze[de].data);for(let Le=0;Le<se.length;Le++){const ot=se[Le].image[de].image;st?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,ot.width,ot.height,tt,Ve,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,dt,ot.width,ot.height,0,tt,Ve,ot.data)}}else{st?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,tt,Ve,ze[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,dt,tt,Ve,ze[de]);for(let Le=0;Le<se.length;Le++){const De=se[Le];st?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,tt,Ve,De.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,dt,tt,Ve,De.image[de])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),fe.__version=ge.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Me(D,w,$,pe,ge,fe){const We=l.convert($.format,$.colorSpace),Ce=l.convert($.type),Oe=b($.internalFormat,We,Ce,$.colorSpace),ct=r.get(w),Se=r.get($);if(Se.__renderTarget=w,!ct.__hasExternalTextures){const ze=Math.max(1,w.width>>fe),Ke=Math.max(1,w.height>>fe);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,fe,Oe,ze,Ke,w.depth,0,We,Ce,null):t.texImage2D(ge,fe,Oe,ze,Ke,0,We,Ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ge,Se.__webglTexture,0,pt(w)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ge,Se.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(D,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,D),w.depthBuffer){const pe=w.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,fe=R(w.stencilBuffer,ge),We=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=pt(w);ft(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,fe,w.width,w.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,fe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,We,n.RENDERBUFFER,D)}else{const pe=w.textures;for(let ge=0;ge<pe.length;ge++){const fe=pe[ge],We=l.convert(fe.format,fe.colorSpace),Ce=l.convert(fe.type),Oe=b(fe.internalFormat,We,Ce,fe.colorSpace),ct=pt(w);$&&ft(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Oe,w.width,w.height):ft(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,Oe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const ge=pe.__webglTexture,fe=pt(w);if(w.depthTexture.format===_o)ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Co)ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Fe(D){const w=r.get(D),$=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=pe}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,D)}else if($){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=n.createRenderbuffer(),_e(w.__webglDepthbuffer[pe],D,!1);else{const ge=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),_e(w.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,ge)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(D,w,$){const pe=r.get(D);w!==void 0&&Me(pe.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Fe(D)}function Pt(D){const w=D.texture,$=r.get(D),pe=r.get(w);D.addEventListener("dispose",F);const ge=D.textures,fe=D.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=w.version,u.memory.textures++),fe){$.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[Ce]=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)$.__webglFramebuffer[Ce][Oe]=n.createFramebuffer()}else $.__webglFramebuffer[Ce]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)$.__webglFramebuffer[Ce]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(We)for(let Ce=0,Oe=ge.length;Ce<Oe;Ce++){const ct=r.get(ge[Ce]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),u.memory.textures++)}if(D.samples>0&&ft(D)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ge.length;Ce++){const Oe=ge[Ce];$.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Ce]);const ct=l.convert(Oe.format,Oe.colorSpace),Se=l.convert(Oe.type),ze=b(Oe.internalFormat,ct,Se,Oe.colorSpace,D.isXRRenderTarget===!0),Ke=pt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,ze,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,$.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),_e($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),te(n.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)Me($.__webglFramebuffer[Ce][Oe],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Oe);else Me($.__webglFramebuffer[Ce],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ce=0,Oe=ge.length;Ce<Oe;Ce++){const ct=ge[Ce],Se=r.get(ct);t.bindTexture(n.TEXTURE_2D,Se.__webglTexture),te(n.TEXTURE_2D,ct),Me($.__webglFramebuffer,D,ct,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),S(ct)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let Ce=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,pe.__webglTexture),te(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)Me($.__webglFramebuffer[Oe],D,w,n.COLOR_ATTACHMENT0,Ce,Oe);else Me($.__webglFramebuffer,D,w,n.COLOR_ATTACHMENT0,Ce,0);S(w)&&y(Ce),t.unbindTexture()}D.depthBuffer&&Fe(D)}function gt(D){const w=D.textures;for(let $=0,pe=w.length;$<pe;$++){const ge=w[$];if(S(ge)){const fe=L(D),We=r.get(ge).__webglTexture;t.bindTexture(fe,We),y(fe),t.unbindTexture()}}}const It=[],H=[];function Tn(D){if(D.samples>0){if(ft(D)===!1){const w=D.textures,$=D.width,pe=D.height;let ge=n.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,We=r.get(D),Ce=w.length>1;if(Ce)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,We.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,We.__webglColorRenderbuffer[Oe]);const ct=r.get(w[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ct,0)}n.blitFramebuffer(0,0,$,pe,0,0,$,pe,ge,n.NEAREST),d===!0&&(It.length=0,H.length=0,It.push(n.COLOR_ATTACHMENT0+Oe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(It.push(fe),H.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,We.__webglColorRenderbuffer[Oe]);const ct=r.get(w[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,We.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,ct,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const w=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function pt(D){return Math.min(o.maxSamples,D.samples)}function ft(D){const w=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(D){const w=u.render.frame;m.get(D)!==w&&(m.set(D,w),D.update())}function Ct(D,w){const $=D.colorSpace,pe=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Ro&&$!==Ur&&(wt.getTransfer($)===Dt?(pe!==yi||ge!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=le,this.setTexture3D=ie,this.setTextureCube=z,this.rebindTextures=Je,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ft}function W2(n,e){function t(r,o=Ur){let l;const u=wt.getTransfer(o);if(r===ir)return n.UNSIGNED_BYTE;if(r===pp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===mp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===$y)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===qy)return n.BYTE;if(r===Yy)return n.SHORT;if(r===Da)return n.UNSIGNED_SHORT;if(r===hp)return n.INT;if(r===Ms)return n.UNSIGNED_INT;if(r===$i)return n.FLOAT;if(r===Fa)return n.HALF_FLOAT;if(r===Ky)return n.ALPHA;if(r===Zy)return n.RGB;if(r===yi)return n.RGBA;if(r===Qy)return n.LUMINANCE;if(r===Jy)return n.LUMINANCE_ALPHA;if(r===_o)return n.DEPTH_COMPONENT;if(r===Co)return n.DEPTH_STENCIL;if(r===ex)return n.RED;if(r===gp)return n.RED_INTEGER;if(r===tx)return n.RG;if(r===vp)return n.RG_INTEGER;if(r===_p)return n.RGBA_INTEGER;if(r===Au||r===Cu||r===Ru||r===Pu)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Au)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ru)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Au)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ru)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nh||r===ih||r===rh||r===sh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===nh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ih)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===oh||r===ah||r===lh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===oh||r===ah)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===lh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uh||r===ch||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===vh||r===_h||r===yh||r===xh||r===Sh||r===Mh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===uh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ch)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ph)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_h)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bu||r===Eh||r===Th)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===bu)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Eh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Th)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nx||r===wh||r===Ah||r===Ch)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===bu)return l.COMPRESSED_RED_RGTC1_EXT;if(r===wh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ah)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ch)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ao?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const X2={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),y=this._getHandJoint(h,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,M=.005;h.inputState.pinching&&v>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(X2)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new yu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const j2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Y2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new zn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new zr({vertexShader:j2,fragmentShader:q2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zi(new Ku(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $2 extends Lo{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,m=null,g=null,v=null,x=null,M=null;const E=new Y2,S=t.getContextAttributes();let y=null,L=null;const b=[],R=[],U=new Lt;let N=null;const F=new oi;F.viewport=new Kt;const k=new oi;k.viewport=new Kt;const P=[F,k],C=new gC;let V=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=b[K];return ce===void 0&&(ce=new Ed,b[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=b[K];return ce===void 0&&(ce=new Ed,b[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=b[K];return ce===void 0&&(ce=new Ed,b[K]=ce),ce.getHandSpace()};function Q(K){const ce=R.indexOf(K.inputSource);if(ce===-1)return;const Me=b[ce];Me!==void 0&&(Me.update(K.inputSource,K.frame,h||u),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function ue(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",he);for(let K=0;K<b.length;K++){const ce=R[K];ce!==null&&(R[K]=null,b[K].disconnect(ce))}V=null,oe=null,E.reset(),e.setRenderTarget(y),x=null,v=null,g=null,o=null,L=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(U),o.renderState.layers===void 0){const ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,ce),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Es(x.framebufferWidth,x.framebufferHeight,{format:yi,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ce=null,Me=null,_e=null;S.depth&&(_e=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=S.stencil?Co:_o,Me=S.stencil?Ao:Ms);const Ae={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Ae),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Es(v.textureWidth,v.textureHeight,{format:yi,type:ir,depthTexture:new _x(v.textureWidth,v.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function he(K){for(let ce=0;ce<K.removed.length;ce++){const Me=K.removed[ce],_e=R.indexOf(Me);_e>=0&&(R[_e]=null,b[_e].disconnect(Me))}for(let ce=0;ce<K.added.length;ce++){const Me=K.added[ce];let _e=R.indexOf(Me);if(_e===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=R.length){R.push(Me),_e=Fe;break}else if(R[Fe]===null){R[Fe]=Me,_e=Fe;break}if(_e===-1)break}const Ae=b[_e];Ae&&Ae.connect(Me)}}const le=new ne,ie=new ne;function z(K,ce,Me){le.setFromMatrixPosition(ce.matrixWorld),ie.setFromMatrixPosition(Me.matrixWorld);const _e=le.distanceTo(ie),Ae=ce.projectionMatrix.elements,Fe=Me.projectionMatrix.elements,Je=Ae[14]/(Ae[10]-1),Pt=Ae[14]/(Ae[10]+1),gt=(Ae[9]+1)/Ae[5],It=(Ae[9]-1)/Ae[5],H=(Ae[8]-1)/Ae[0],Tn=(Fe[8]+1)/Fe[0],pt=Je*H,ft=Je*Tn,Ye=_e/(-H+Tn),Ct=Ye*-H;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ct),K.translateZ(Ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const je=Je+Ye,D=Pt+Ye,w=pt-Ct,$=ft+(_e-Ct),pe=gt*Pt/D*je,ge=It*Pt/D*je;K.projectionMatrix.makePerspective(w,$,pe,ge,je,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let ce=K.near,Me=K.far;E.texture!==null&&(E.depthNear>0&&(ce=E.depthNear),E.depthFar>0&&(Me=E.depthFar)),C.near=k.near=F.near=ce,C.far=k.far=F.far=Me,(V!==C.near||oe!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,oe=C.far),F.layers.mask=K.layers.mask|2,k.layers.mask=K.layers.mask|4,C.layers.mask=F.layers.mask|k.layers.mask;const _e=K.parent,Ae=C.cameras;ae(C,_e);for(let Fe=0;Fe<Ae.length;Fe++)ae(Ae[Fe],_e);Ae.length===2?z(C,F,k):C.projectionMatrix.copy(F.projectionMatrix),re(K,C,_e)};function re(K,ce,Me){Me===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Rh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(K){d=K,v!==null&&(v.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(C)};let O=null;function te(K,ce){if(m=ce.getViewerPose(h||u),M=ce,m!==null){const Me=m.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let _e=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let Fe=0;Fe<Me.length;Fe++){const Je=Me[Fe];let Pt=null;if(x!==null)Pt=x.getViewport(Je);else{const It=g.getViewSubImage(v,Je);Pt=It.viewport,Fe===0&&(e.setRenderTargetTextures(L,It.colorTexture,v.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(L))}let gt=P[Fe];gt===void 0&&(gt=new oi,gt.layers.enable(Fe),gt.viewport=new Kt,P[Fe]=gt),gt.matrix.fromArray(Je.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Je.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Fe===0&&(C.matrix.copy(gt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(gt)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Fe=g.getDepthInformation(Me[0]);Fe&&Fe.isValid&&Fe.texture&&E.init(e,Fe,o.renderState)}}for(let Me=0;Me<b.length;Me++){const _e=R[Me],Ae=b[Me];_e!==null&&Ae!==void 0&&Ae.update(_e,ce,h||u)}O&&O(K,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),M=null}const Ne=new yx;Ne.setAnimationLoop(te),this.setAnimationLoop=function(K){O=K},this.dispose=function(){}}}const cs=new rr,K2=new Zt;function Z2(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,hx(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,L,b,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,R)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),E(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?d(S,y,L,b):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Bn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Bn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=e.get(y),b=L.envMap,R=L.envMapRotation;b&&(S.envMap.value=b,cs.copy(R),cs.x*=-1,cs.y*=-1,cs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),S.envMapRotation.value.setFromMatrix4(K2.makeRotationFromEuler(cs)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,L,b){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=b*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Bn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const L=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Q2(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,b){const R=b.program;r.uniformBlockBinding(L,R)}function h(L,b){let R=o[L.id];R===void 0&&(M(L),R=m(L),o[L.id]=R,L.addEventListener("dispose",S));const U=b.program;r.updateUBOMapping(L,U);const N=e.render.frame;l[L.id]!==N&&(v(L),l[L.id]=N)}function m(L){const b=g();L.__bindingPointIndex=b;const R=n.createBuffer(),U=L.__size,N=L.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,U,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,R),R}function g(){for(let L=0;L<c;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const b=o[L.id],R=L.uniforms,U=L.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let N=0,F=R.length;N<F;N++){const k=Array.isArray(R[N])?R[N]:[R[N]];for(let P=0,C=k.length;P<C;P++){const V=k[P];if(x(V,N,P,U)===!0){const oe=V.__offset,Q=Array.isArray(V.value)?V.value:[V.value];let ue=0;for(let he=0;he<Q.length;he++){const le=Q[he],ie=E(le);typeof le=="number"||typeof le=="boolean"?(V.__data[0]=le,n.bufferSubData(n.UNIFORM_BUFFER,oe+ue,V.__data)):le.isMatrix3?(V.__data[0]=le.elements[0],V.__data[1]=le.elements[1],V.__data[2]=le.elements[2],V.__data[3]=0,V.__data[4]=le.elements[3],V.__data[5]=le.elements[4],V.__data[6]=le.elements[5],V.__data[7]=0,V.__data[8]=le.elements[6],V.__data[9]=le.elements[7],V.__data[10]=le.elements[8],V.__data[11]=0):(le.toArray(V.__data,ue),ue+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,oe,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(L,b,R,U){const N=L.value,F=b+"_"+R;if(U[F]===void 0)return typeof N=="number"||typeof N=="boolean"?U[F]=N:U[F]=N.clone(),!0;{const k=U[F];if(typeof N=="number"||typeof N=="boolean"){if(k!==N)return U[F]=N,!0}else if(k.equals(N)===!1)return k.copy(N),!0}return!1}function M(L){const b=L.uniforms;let R=0;const U=16;for(let F=0,k=b.length;F<k;F++){const P=Array.isArray(b[F])?b[F]:[b[F]];for(let C=0,V=P.length;C<V;C++){const oe=P[C],Q=Array.isArray(oe.value)?oe.value:[oe.value];for(let ue=0,he=Q.length;ue<he;ue++){const le=Q[ue],ie=E(le),z=R%U,ae=z%ie.boundary,re=z+ae;R+=ae,re!==0&&U-re<ie.storage&&(R+=U-re),oe.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=R,R+=ie.storage}}}const N=R%U;return N>0&&(R+=U-N),L.__size=R,L.__cache={},this}function E(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function S(L){const b=L.target;b.removeEventListener("dispose",S);const R=u.indexOf(b.__bindingPointIndex);u.splice(R,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function y(){for(const L in o)n.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class J2{constructor(e={}){const{canvas:t=OA(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const L=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=Fr,this.toneMappingExposure=1;const R=this;let U=!1,N=0,F=0,k=null,P=-1,C=null;const V=new Kt,oe=new Kt;let Q=null;const ue=new Rt(0);let he=0,le=t.width,ie=t.height,z=1,ae=null,re=null;const O=new Kt(0,0,le,ie),te=new Kt(0,0,le,ie);let Ne=!1;const K=new gx;let ce=!1,Me=!1;const _e=new Zt,Ae=new Zt,Fe=new ne,Je=new Kt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function It(){return k===null?z:1}let H=r;function Tn(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dp}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),H===null){const j="webgl2";if(H=Tn(j,A),H===null)throw Tn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,ft,Ye,Ct,je,D,w,$,pe,ge,fe,We,Ce,Oe,ct,Se,ze,Ke,tt,Ve,dt,st,At,X;function Re(){pt=new lb(H),pt.init(),st=new W2(H,pt),ft=new nb(H,pt,e,st),Ye=new H2(H,pt),ft.reverseDepthBuffer&&v&&Ye.buffers.depth.setReversed(!0),Ct=new fb(H),je=new P2,D=new G2(H,pt,Ye,je,ft,st,Ct),w=new rb(R),$=new ab(R),pe=new _C(H),At=new eb(H,pe),ge=new ub(H,pe,Ct,At),fe=new hb(H,ge,pe,Ct),tt=new db(H,ft,D),Se=new ib(je),We=new R2(R,w,$,pt,ft,At,Se),Ce=new Z2(R,je),Oe=new D2,ct=new O2(pt),Ke=new JP(R,w,$,Ye,fe,x,d),ze=new z2(R,fe,ft),X=new Q2(H,Ct,ft,Ye),Ve=new tb(H,pt,Ct),dt=new cb(H,pt,Ct),Ct.programs=We.programs,R.capabilities=ft,R.extensions=pt,R.properties=je,R.renderLists=Oe,R.shadowMap=ze,R.state=Ye,R.info=Ct}Re();const se=new $2(R,H);this.xr=se,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(le,ie,!1))},this.getSize=function(A){return A.set(le,ie)},this.setSize=function(A,j,J=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,ie=j,t.width=Math.floor(A*z),t.height=Math.floor(j*z),J===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(le*z,ie*z).floor()},this.setDrawingBufferSize=function(A,j,J){le=A,ie=j,z=J,t.width=Math.floor(A*J),t.height=Math.floor(j*J),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,j,J,ee){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,j,J,ee),Ye.viewport(V.copy(O).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,j,J,ee){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,j,J,ee),Ye.scissor(oe.copy(te).multiplyScalar(z).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){Ye.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,j=!0,J=!0){let ee=0;if(A){let G=!1;if(k!==null){const xe=k.texture.format;G=xe===_p||xe===vp||xe===gp}if(G){const xe=k.texture.type,Pe=xe===ir||xe===Ms||xe===Da||xe===Ao||xe===pp||xe===mp,Ue=Ke.getClearColor(),ke=Ke.getClearAlpha(),nt=Ue.r,it=Ue.g,qe=Ue.b;Pe?(M[0]=nt,M[1]=it,M[2]=qe,M[3]=ke,H.clearBufferuiv(H.COLOR,0,M)):(E[0]=nt,E[1]=it,E[2]=qe,E[3]=ke,H.clearBufferiv(H.COLOR,0,E))}else ee|=H.COLOR_BUFFER_BIT}j&&(ee|=H.DEPTH_BUFFER_BIT),J&&(ee|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ke.dispose(),Oe.dispose(),ct.dispose(),je.dispose(),w.dispose(),$.dispose(),fe.dispose(),At.dispose(),X.dispose(),We.dispose(),se.dispose(),se.removeEventListener("sessionstart",ws),se.removeEventListener("sessionend",or),Li.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const A=Ct.autoReset,j=ze.enabled,J=ze.autoUpdate,ee=ze.needsUpdate,G=ze.type;Re(),Ct.autoReset=A,ze.enabled=j,ze.autoUpdate=J,ze.needsUpdate=ee,ze.type=G}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const j=A.target;j.removeEventListener("dispose",ot),Nt(j)}function Nt(A){en(A),je.remove(A)}function en(A){const j=je.get(A).programs;j!==void 0&&(j.forEach(function(J){We.releaseProgram(J)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,J,ee,G,xe){j===null&&(j=Pt);const Pe=G.isMesh&&G.matrixWorld.determinant()<0,Ue=Wa(A,j,J,ee,G);Ye.setMaterial(ee,Pe);let ke=J.index,nt=1;if(ee.wireframe===!0){if(ke=ge.getWireframeAttribute(J),ke===void 0)return;nt=2}const it=J.drawRange,qe=J.attributes.position;let at=it.start*nt,Mt=(it.start+it.count)*nt;xe!==null&&(at=Math.max(at,xe.start*nt),Mt=Math.min(Mt,(xe.start+xe.count)*nt)),ke!==null?(at=Math.max(at,0),Mt=Math.min(Mt,ke.count)):qe!=null&&(at=Math.max(at,0),Mt=Math.min(Mt,qe.count));const Et=Mt-at;if(Et<0||Et===1/0)return;At.setup(G,ee,Ue,J,ke);let Bt,yt=Ve;if(ke!==null&&(Bt=pe.get(ke),yt=dt,yt.setIndex(Bt)),G.isMesh)ee.wireframe===!0?(Ye.setLineWidth(ee.wireframeLinewidth*It()),yt.setMode(H.LINES)):yt.setMode(H.TRIANGLES);else if(G.isLine){let $e=ee.linewidth;$e===void 0&&($e=1),Ye.setLineWidth($e*It()),G.isLineSegments?yt.setMode(H.LINES):G.isLineLoop?yt.setMode(H.LINE_LOOP):yt.setMode(H.LINE_STRIP)}else G.isPoints?yt.setMode(H.POINTS):G.isSprite&&yt.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)yt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const $e=G._multiDrawStarts,Wt=G._multiDrawCounts,vt=G._multiDrawCount,cn=ke?pe.get(ke).bytesPerElement:1,ai=je.get(ee).currentProgram.getUniforms();for(let An=0;An<vt;An++)ai.setValue(H,"_gl_DrawID",An),yt.render($e[An]/cn,Wt[An])}else if(G.isInstancedMesh)yt.renderInstances(at,Et,G.count);else if(J.isInstancedBufferGeometry){const $e=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Wt=Math.min(J.instanceCount,$e);yt.renderInstances(at,Et,Wt)}else yt.render(at,Et)};function xt(A,j,J){A.transparent===!0&&A.side===Yi&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,As(A,j,J),A.side=Br,A.needsUpdate=!0,As(A,j,J),A.side=Yi):As(A,j,J)}this.compile=function(A,j,J=null){J===null&&(J=A),y=ct.get(J),y.init(j),b.push(y),J.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),A!==J&&A.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights();const ee=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const xe=G.material;if(xe)if(Array.isArray(xe))for(let Pe=0;Pe<xe.length;Pe++){const Ue=xe[Pe];xt(Ue,J,G),ee.add(Ue)}else xt(xe,J,G),ee.add(xe)}),b.pop(),y=null,ee},this.compileAsync=function(A,j,J=null){const ee=this.compile(A,j,J);return new Promise(G=>{function xe(){if(ee.forEach(function(Pe){je.get(Pe).currentProgram.isReady()&&ee.delete(Pe)}),ee.size===0){G(A);return}setTimeout(xe,10)}pt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Dn=null;function wn(A){Dn&&Dn(A)}function ws(){Li.stop()}function or(){Li.start()}const Li=new yx;Li.setAnimationLoop(wn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(A){Dn=A,se.setAnimationLoop(A),A===null?Li.stop():Li.start()},se.addEventListener("sessionstart",ws),se.addEventListener("sessionend",or),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(j),j=se.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,j,k),y=ct.get(A,b.length),y.init(j),b.push(y),Ae.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),K.setFromProjectionMatrix(Ae),Me=this.localClippingEnabled,ce=Se.init(this.clippingPlanes,Me),S=Oe.get(A,L.length),S.init(),L.push(S),se.enabled===!0&&se.isPresenting===!0){const xe=R.xr.getDepthSensingMesh();xe!==null&&Ii(xe,j,-1/0,R.sortObjects)}Ii(A,j,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(ae,re),gt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,gt&&Ke.addToRenderList(S,A),this.info.render.frame++,ce===!0&&Se.beginShadows();const J=y.state.shadowsArray;ze.render(J,A,j),ce===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=S.opaque,G=S.transmissive;if(y.setupLights(),j.isArrayCamera){const xe=j.cameras;if(G.length>0)for(let Pe=0,Ue=xe.length;Pe<Ue;Pe++){const ke=xe[Pe];Gr(ee,G,A,ke)}gt&&Ke.render(A);for(let Pe=0,Ue=xe.length;Pe<Ue;Pe++){const ke=xe[Pe];Hr(S,A,ke,ke.viewport)}}else G.length>0&&Gr(ee,G,A,j),gt&&Ke.render(A),Hr(S,A,j);k!==null&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(R,A,j),At.resetDefaultState(),P=-1,C=null,b.pop(),b.length>0?(y=b[b.length-1],ce===!0&&Se.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Ii(A,j,J,ee){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){ee&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const Pe=fe.update(A),Ue=A.material;Ue.visible&&S.push(A,Pe,Ue,J,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const Pe=fe.update(A),Ue=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Je.copy(Pe.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ue)){const ke=Pe.groups;for(let nt=0,it=ke.length;nt<it;nt++){const qe=ke[nt],at=Ue[qe.materialIndex];at&&at.visible&&S.push(A,Pe,at,J,Je.z,qe)}}else Ue.visible&&S.push(A,Pe,Ue,J,Je.z,null)}}const xe=A.children;for(let Pe=0,Ue=xe.length;Pe<Ue;Pe++)Ii(xe[Pe],j,J,ee)}function Hr(A,j,J,ee){const G=A.opaque,xe=A.transmissive,Pe=A.transparent;y.setupLightsView(J),ce===!0&&Se.setGlobalState(R.clippingPlanes,J),ee&&Ye.viewport(V.copy(ee)),G.length>0&&ar(G,j,J),xe.length>0&&ar(xe,j,J),Pe.length>0&&ar(Pe,j,J),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Gr(A,j,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ee.id]===void 0&&(y.state.transmissionRenderTarget[ee.id]=new Es(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Fa:ir,minFilter:ys,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const xe=y.state.transmissionRenderTarget[ee.id],Pe=ee.viewport||V;xe.setSize(Pe.z,Pe.w);const Ue=R.getRenderTarget();R.setRenderTarget(xe),R.getClearColor(ue),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),gt&&Ke.render(J);const ke=R.toneMapping;R.toneMapping=Fr;const nt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),y.setupLightsView(ee),ce===!0&&Se.setGlobalState(R.clippingPlanes,ee),ar(A,J,ee),D.updateMultisampleRenderTarget(xe),D.updateRenderTargetMipmap(xe),pt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let qe=0,at=j.length;qe<at;qe++){const Mt=j[qe],Et=Mt.object,Bt=Mt.geometry,yt=Mt.material,$e=Mt.group;if(yt.side===Yi&&Et.layers.test(ee.layers)){const Wt=yt.side;yt.side=Bn,yt.needsUpdate=!0,Ha(Et,J,ee,Bt,yt,$e),yt.side=Wt,yt.needsUpdate=!0,it=!0}}it===!0&&(D.updateMultisampleRenderTarget(xe),D.updateRenderTargetMipmap(xe))}R.setRenderTarget(Ue),R.setClearColor(ue,he),nt!==void 0&&(ee.viewport=nt),R.toneMapping=ke}function ar(A,j,J){const ee=j.isScene===!0?j.overrideMaterial:null;for(let G=0,xe=A.length;G<xe;G++){const Pe=A[G],Ue=Pe.object,ke=Pe.geometry,nt=ee===null?Pe.material:ee,it=Pe.group;Ue.layers.test(J.layers)&&Ha(Ue,j,J,ke,nt,it)}}function Ha(A,j,J,ee,G,xe){A.onBeforeRender(R,j,J,ee,G,xe),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(R,j,J,ee,A,xe),G.transparent===!0&&G.side===Yi&&G.forceSinglePass===!1?(G.side=Bn,G.needsUpdate=!0,R.renderBufferDirect(J,j,ee,G,A,xe),G.side=Br,G.needsUpdate=!0,R.renderBufferDirect(J,j,ee,G,A,xe),G.side=Yi):R.renderBufferDirect(J,j,ee,G,A,xe),A.onAfterRender(R,j,J,ee,G,xe)}function As(A,j,J){j.isScene!==!0&&(j=Pt);const ee=je.get(A),G=y.state.lights,xe=y.state.shadowsArray,Pe=G.state.version,Ue=We.getParameters(A,G.state,xe,j,J),ke=We.getProgramCacheKey(Ue);let nt=ee.programs;ee.environment=A.isMeshStandardMaterial?j.environment:null,ee.fog=j.fog,ee.envMap=(A.isMeshStandardMaterial?$:w).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",ot),nt=new Map,ee.programs=nt);let it=nt.get(ke);if(it!==void 0){if(ee.currentProgram===it&&ee.lightsStateVersion===Pe)return Ei(A,Ue),it}else Ue.uniforms=We.getUniforms(A),A.onBeforeCompile(Ue,R),it=We.acquireProgram(Ue,ke),nt.set(ke,it),ee.uniforms=Ue.uniforms;const qe=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Se.uniform),Ei(A,Ue),ee.needsLights=Qu(A),ee.lightsStateVersion=Pe,ee.needsLights&&(qe.ambientLightColor.value=G.state.ambient,qe.lightProbe.value=G.state.probe,qe.directionalLights.value=G.state.directional,qe.directionalLightShadows.value=G.state.directionalShadow,qe.spotLights.value=G.state.spot,qe.spotLightShadows.value=G.state.spotShadow,qe.rectAreaLights.value=G.state.rectArea,qe.ltc_1.value=G.state.rectAreaLTC1,qe.ltc_2.value=G.state.rectAreaLTC2,qe.pointLights.value=G.state.point,qe.pointLightShadows.value=G.state.pointShadow,qe.hemisphereLights.value=G.state.hemi,qe.directionalShadowMap.value=G.state.directionalShadowMap,qe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,qe.spotShadowMap.value=G.state.spotShadowMap,qe.spotLightMatrix.value=G.state.spotLightMatrix,qe.spotLightMap.value=G.state.spotLightMap,qe.pointShadowMap.value=G.state.pointShadowMap,qe.pointShadowMatrix.value=G.state.pointShadowMatrix),ee.currentProgram=it,ee.uniformsList=null,it}function Ga(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Du.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Ei(A,j){const J=je.get(A);J.outputColorSpace=j.outputColorSpace,J.batching=j.batching,J.batchingColor=j.batchingColor,J.instancing=j.instancing,J.instancingColor=j.instancingColor,J.instancingMorph=j.instancingMorph,J.skinning=j.skinning,J.morphTargets=j.morphTargets,J.morphNormals=j.morphNormals,J.morphColors=j.morphColors,J.morphTargetsCount=j.morphTargetsCount,J.numClippingPlanes=j.numClippingPlanes,J.numIntersection=j.numClipIntersection,J.vertexAlphas=j.vertexAlphas,J.vertexTangents=j.vertexTangents,J.toneMapping=j.toneMapping}function Wa(A,j,J,ee,G){j.isScene!==!0&&(j=Pt),D.resetTextureUnits();const xe=j.fog,Pe=ee.isMeshStandardMaterial?j.environment:null,Ue=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ro,ke=(ee.isMeshStandardMaterial?$:w).get(ee.envMap||Pe),nt=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,it=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!J.morphAttributes.position,at=!!J.morphAttributes.normal,Mt=!!J.morphAttributes.color;let Et=Fr;ee.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Et=R.toneMapping);const Bt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yt=Bt!==void 0?Bt.length:0,$e=je.get(ee),Wt=y.state.lights;if(ce===!0&&(Me===!0||A!==C)){const qt=A===C&&ee.id===P;Se.setState(ee,A,qt)}let vt=!1;ee.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Wt.state.version||$e.outputColorSpace!==Ue||G.isBatchedMesh&&$e.batching===!1||!G.isBatchedMesh&&$e.batching===!0||G.isBatchedMesh&&$e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&$e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&$e.instancing===!1||!G.isInstancedMesh&&$e.instancing===!0||G.isSkinnedMesh&&$e.skinning===!1||!G.isSkinnedMesh&&$e.skinning===!0||G.isInstancedMesh&&$e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&$e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&$e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&$e.instancingMorph===!1&&G.morphTexture!==null||$e.envMap!==ke||ee.fog===!0&&$e.fog!==xe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Se.numPlanes||$e.numIntersection!==Se.numIntersection)||$e.vertexAlphas!==nt||$e.vertexTangents!==it||$e.morphTargets!==qe||$e.morphNormals!==at||$e.morphColors!==Mt||$e.toneMapping!==Et||$e.morphTargetsCount!==yt)&&(vt=!0):(vt=!0,$e.__version=ee.version);let cn=$e.currentProgram;vt===!0&&(cn=As(ee,j,G));let ai=!1,An=!1,Wr=!1;const bt=cn.getUniforms(),Cn=$e.uniforms;if(Ye.useProgram(cn.program)&&(ai=!0,An=!0,Wr=!0),ee.id!==P&&(P=ee.id,An=!0),ai||C!==A){Ye.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),BA(_e),zA(_e),bt.setValue(H,"projectionMatrix",_e)):bt.setValue(H,"projectionMatrix",A.projectionMatrix),bt.setValue(H,"viewMatrix",A.matrixWorldInverse);const mn=bt.map.cameraPosition;mn!==void 0&&mn.setValue(H,Fe.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&bt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&bt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,An=!0,Wr=!0)}if(G.isSkinnedMesh){bt.setOptional(H,G,"bindMatrix"),bt.setOptional(H,G,"bindMatrixInverse");const qt=G.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),bt.setValue(H,"boneTexture",qt.boneTexture,D))}G.isBatchedMesh&&(bt.setOptional(H,G,"batchingTexture"),bt.setValue(H,"batchingTexture",G._matricesTexture,D),bt.setOptional(H,G,"batchingIdTexture"),bt.setValue(H,"batchingIdTexture",G._indirectTexture,D),bt.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&bt.setValue(H,"batchingColorTexture",G._colorsTexture,D));const pn=J.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&tt.update(G,J,cn),(An||$e.receiveShadow!==G.receiveShadow)&&($e.receiveShadow=G.receiveShadow,bt.setValue(H,"receiveShadow",G.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Cn.envMap.value=ke,Cn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&j.environment!==null&&(Cn.envMapIntensity.value=j.environmentIntensity),An&&(bt.setValue(H,"toneMappingExposure",R.toneMappingExposure),$e.needsLights&&Xa(Cn,Wr),xe&&ee.fog===!0&&Ce.refreshFogUniforms(Cn,xe),Ce.refreshMaterialUniforms(Cn,ee,z,ie,y.state.transmissionRenderTarget[A.id]),Du.upload(H,Ga($e),Cn,D)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Du.upload(H,Ga($e),Cn,D),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&bt.setValue(H,"center",G.center),bt.setValue(H,"modelViewMatrix",G.modelViewMatrix),bt.setValue(H,"normalMatrix",G.normalMatrix),bt.setValue(H,"modelMatrix",G.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const qt=ee.uniformsGroups;for(let mn=0,Xr=qt.length;mn<Xr;mn++){const mt=qt[mn];X.update(mt,cn),X.bind(mt,cn)}}return cn}function Xa(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Qu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,j,J){je.get(A.texture).__webglTexture=j,je.get(A.depthTexture).__webglTexture=J;const ee=je.get(A);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const J=je.get(A);J.__webglFramebuffer=j,J.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,J=0){k=A,N=j,F=J;let ee=!0,G=null,xe=!1,Pe=!1;if(A){const ke=je.get(A);if(ke.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(H.FRAMEBUFFER,null),ee=!1;else if(ke.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(ke.__hasExternalTextures)D.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qe=A.depthTexture;if(ke.__boundDepthTexture!==qe){if(qe!==null&&je.has(qe)&&(A.width!==qe.image.width||A.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Pe=!0);const it=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[j])?G=it[j][J]:G=it[j],xe=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?G=je.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?G=it[J]:G=it,V.copy(A.viewport),oe.copy(A.scissor),Q=A.scissorTest}else V.copy(O).multiplyScalar(z).floor(),oe.copy(te).multiplyScalar(z).floor(),Q=Ne;if(Ye.bindFramebuffer(H.FRAMEBUFFER,G)&&ee&&Ye.drawBuffers(A,G),Ye.viewport(V),Ye.scissor(oe),Ye.setScissorTest(Q),xe){const ke=je.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,ke.__webglTexture,J)}else if(Pe){const ke=je.get(A.texture),nt=j||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.__webglTexture,J||0,nt)}P=-1},this.readRenderTargetPixels=function(A,j,J,ee,G,xe,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){Ye.bindFramebuffer(H.FRAMEBUFFER,Ue);try{const ke=A.texture,nt=ke.format,it=ke.type;if(!ft.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ee&&J>=0&&J<=A.height-G&&H.readPixels(j,J,ee,G,st.convert(nt),st.convert(it),xe)}finally{const ke=k!==null?je.get(k).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,j,J,ee,G,xe,Pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){const ke=A.texture,nt=ke.format,it=ke.type;if(!ft.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-ee&&J>=0&&J<=A.height-G){Ye.bindFramebuffer(H.FRAMEBUFFER,Ue);const qe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,qe),H.bufferData(H.PIXEL_PACK_BUFFER,xe.byteLength,H.STREAM_READ),H.readPixels(j,J,ee,G,st.convert(nt),st.convert(it),0);const at=k!==null?je.get(k).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,at);const Mt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await kA(H,Mt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,qe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,xe),H.deleteBuffer(qe),H.deleteSync(Mt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,J=0){A.isTexture!==!0&&(uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const ee=Math.pow(2,-J),G=Math.floor(A.image.width*ee),xe=Math.floor(A.image.height*ee),Pe=j!==null?j.x:0,Ue=j!==null?j.y:0;D.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,Pe,Ue,G,xe),Ye.unbindTexture()};const ja=H.createFramebuffer(),qa=H.createFramebuffer();this.copyTextureToTexture=function(A,j,J=null,ee=null,G=0,xe=null){A.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,A=arguments[1],j=arguments[2],xe=arguments[3]||0,J=null),xe===null&&(G!==0?(uo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=G,G=0):xe=0);let Pe,Ue,ke,nt,it,qe,at,Mt,Et;const Bt=A.isCompressedTexture?A.mipmaps[xe]:A.image;if(J!==null)Pe=J.max.x-J.min.x,Ue=J.max.y-J.min.y,ke=J.isBox3?J.max.z-J.min.z:1,nt=J.min.x,it=J.min.y,qe=J.isBox3?J.min.z:0;else{const pn=Math.pow(2,-G);Pe=Math.floor(Bt.width*pn),Ue=Math.floor(Bt.height*pn),A.isDataArrayTexture?ke=Bt.depth:A.isData3DTexture?ke=Math.floor(Bt.depth*pn):ke=1,nt=0,it=0,qe=0}ee!==null?(at=ee.x,Mt=ee.y,Et=ee.z):(at=0,Mt=0,Et=0);const yt=st.convert(j.format),$e=st.convert(j.type);let Wt;j.isData3DTexture?(D.setTexture3D(j,0),Wt=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),Wt=H.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),Wt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=H.getParameter(H.UNPACK_ROW_LENGTH),cn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ai=H.getParameter(H.UNPACK_SKIP_PIXELS),An=H.getParameter(H.UNPACK_SKIP_ROWS),Wr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qe);const bt=A.isDataArrayTexture||A.isData3DTexture,Cn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const pn=je.get(A),qt=je.get(j),mn=je.get(pn.__renderTarget),Xr=je.get(qt.__renderTarget);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xr.__webglFramebuffer);for(let mt=0;mt<ke;mt++)bt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(A).__webglTexture,G,qe+mt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(j).__webglTexture,xe,Et+mt)),H.blitFramebuffer(nt,it,Pe,Ue,at,Mt,Pe,Ue,H.DEPTH_BUFFER_BIT,H.NEAREST);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||je.has(A)){const pn=je.get(A),qt=je.get(j);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,ja),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,qa);for(let mn=0;mn<ke;mn++)bt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,G,qe+mn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,G),Cn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qt.__webglTexture,xe,Et+mn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qt.__webglTexture,xe),G!==0?H.blitFramebuffer(nt,it,Pe,Ue,at,Mt,Pe,Ue,H.COLOR_BUFFER_BIT,H.NEAREST):Cn?H.copyTexSubImage3D(Wt,xe,at,Mt,Et+mn,nt,it,Pe,Ue):H.copyTexSubImage2D(Wt,xe,at,Mt,nt,it,Pe,Ue);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Cn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Wt,xe,at,Mt,Et,Pe,Ue,ke,yt,$e,Bt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,xe,at,Mt,Et,Pe,Ue,ke,yt,Bt.data):H.texSubImage3D(Wt,xe,at,Mt,Et,Pe,Ue,ke,yt,$e,Bt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,xe,at,Mt,Pe,Ue,yt,$e,Bt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,xe,at,Mt,Bt.width,Bt.height,yt,Bt.data):H.texSubImage2D(H.TEXTURE_2D,xe,at,Mt,Pe,Ue,yt,$e,Bt);H.pixelStorei(H.UNPACK_ROW_LENGTH,vt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,cn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ai),H.pixelStorei(H.UNPACK_SKIP_ROWS,An),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Wr),xe===0&&j.generateMipmaps&&H.generateMipmap(Wt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,j,J=null,ee=null,G=0){return A.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,A=arguments[2],j=arguments[3],G=arguments[4]||0),uo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,J,ee,G)},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){N=0,F=0,k=null,Ye.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const eD="/assets/blue-alien-bear-Br9C3dP_.png",tD=7200*1e3,d_=1364,Td="vivi-chat-clean";function nD(n){const e=Math.max(0,n),t=Math.floor(e/60),r=e%60;return`${String(t).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function iD(n){const t=n.trim().toLowerCase().replace(/\s+/g," ").match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/);if(!t)return null;let r=Number(t[1]);const o=Number(t[2]??"0"),l=t[3];if(o>59)return null;if(l){if(r<1||r>12)return null;l==="am"&&(r=r===12?0:r),l==="pm"&&(r=r===12?12:r+12)}else if(r>23)return null;let u=r*60+o;return u<d_&&(u+=1440),u-d_}function rD(){const e=new URLSearchParams(window.location.search).get("room");if(e)return e;const t=localStorage.getItem("vivi-room-id");if(t)return t;const r=Math.random().toString(36).slice(2,8);return localStorage.setItem("vivi-room-id",r),r}function sD(){const n=we.useRef(null);return we.useEffect(()=>{const e=n.current,t=new uC,r=new oi(65,1,.1,100),o=new J2({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),l=520,u=new sr,c=new Float32Array(l*3);for(let M=0;M<l;M+=1)c[M*3]=(Math.random()-.5)*36,c[M*3+1]=(Math.random()-.5)*20,c[M*3+2]=(Math.random()-.5)*22;u.setAttribute("position",new Si(c,3));const d=new vx({color:16777215,size:.035,transparent:!0,opacity:.75}),h=new dC(u,d);t.add(h),r.position.z=8;const m=()=>{const M=e.getBoundingClientRect();o.setSize(M.width,M.height),r.aspect=M.width/Math.max(M.height,1),r.updateProjectionMatrix()};m(),e.appendChild(o.domElement);let g=0,v;const x=()=>{g+=.004,h.rotation.y=g,h.rotation.x=Math.sin(g*.7)*.12,o.render(t,r),v=requestAnimationFrame(x)};return x(),window.addEventListener("resize",m),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",m),e.removeChild(o.domElement),u.dispose(),d.dispose(),o.dispose()}},[]),Te.createElement("div",{ref:n,className:"starfield","aria-hidden":"true"})}function oD(){return Te.createElement("svg",{className:"stitch-trail",viewBox:"0 0 1000 190","aria-hidden":"true"},Te.createElement("path",{className:"thread-line",d:"M18 125 C155 22 246 178 374 84 S601 77 714 133 S898 159 982 44"}),Array.from({length:24}).map((n,e)=>Te.createElement("path",{key:e,className:"thread-stitch",style:{animationDelay:`${e*.045}s`},d:`M${28+e*41} ${e%2?88:126} l22 -20`})))}function aD({active:n,total:e,onSelect:t}){return Te.createElement("div",{className:"progress-dots","aria-label":"Slides"},Array.from({length:e}).map((r,o)=>Te.createElement("button",{key:o,className:o===n?"dot active":"dot",type:"button","aria-label":`Go to slide ${o+1}`,onClick:()=>t(o)})))}function lD({name:n}){const e=we.useMemo(rD,[]),[t,r]=we.useState(()=>{const g=localStorage.getItem(`${Td}-${e}`);return g?JSON.parse(g):[]}),[o,l]=we.useState(""),u=we.useRef(null),c=we.useRef(!0);we.useEffect(()=>{localStorage.setItem(`${Td}-${e}`,JSON.stringify(t.slice(-40)))},[t,e]),we.useEffect(()=>{const g="BroadcastChannel"in window?new BroadcastChannel(`vivi-${e}`):null;return u.current=g,g&&(g.onmessage=v=>{r(x=>x.some(M=>M.id===v.data.id)?x:[...x,v.data].slice(-40))}),()=>g==null?void 0:g.close()},[e]),we.useEffect(()=>{let g=!0;const v=()=>{c.current&&fetch(`/api/chat?room=${encodeURIComponent(e)}`).then(M=>M.ok?M.json():null).then(M=>{!g||!(M!=null&&M.messages)||r(E=>{const S=[...E,...M.messages];return Array.from(new Map(S.map(y=>[y.id,y])).values()).slice(-40)})}).catch(()=>{c.current=!1})};v();const x=window.setInterval(v,2200);return()=>{g=!1,window.clearInterval(x)}},[e]);const d=async g=>{var M;g.preventDefault();const v=o.trim();if(!v)return;const x={id:`${Date.now()}-${Math.random().toString(16).slice(2)}`,author:n||"Dikush special",text:v,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};r(E=>[...E,x].slice(-40)),(M=u.current)==null||M.postMessage(x),l(""),fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room:e,message:x})}).catch(()=>{})},h=()=>{r([]),localStorage.removeItem(`${Td}-${e}`),localStorage.removeItem(`vivi-chat-${e}`),fetch(`/api/chat?room=${encodeURIComponent(e)}`,{method:"DELETE"}).catch(()=>{})},m=`${window.location.origin}${window.location.pathname}?room=${e}`;return Te.createElement("div",{className:"chat-shell"},Te.createElement("div",{className:"chat-head"},Te.createElement(Gy,{size:22}),Te.createElement("div",null,Te.createElement("p",null,"Chat i perkohshem"),Te.createElement("span",null,"Dhoma: ",e)),Te.createElement("button",{className:"chat-clear",type:"button",onClick:h,"aria-label":"Pastro chat-in"},Te.createElement(jw,{size:17}))),Te.createElement("div",{className:"chat-list","aria-live":"polite"},t.length===0?Te.createElement("div",{className:"empty-chat"},"Shkruaj mesazhin e pare te embel."):t.map(g=>Te.createElement("div",{className:"bubble",key:g.id},Te.createElement("strong",null,g.author),Te.createElement("span",null,g.text),Te.createElement("small",null,g.time)))),Te.createElement("form",{className:"chat-form",onSubmit:d},Te.createElement("input",{value:o,onChange:g=>l(g.target.value),placeholder:"Shkruaj dicka...",maxLength:180}),Te.createElement("button",{type:"submit","aria-label":"Dergo"},Te.createElement(Xw,{size:18}))),Te.createElement("input",{className:"share-url",value:m,readOnly:!0,onFocus:g=>g.target.select()}))}function uD({name:n,setName:e,receivedAt:t,setReceivedAt:r}){const o=t.trim().length>0,l=o?iD(t):null,u=l!==null,c=o&&u&&l*6e4<=tD,d=o?c?"okay":"done":"neutral",h=o?u?c?"Ju e keni falur Enesin <3":"Falja nuk pranohet":"Formati: 00:30":"Vendos oren e pranimit",m=c?"Tani dergoji Enesit nje snap me buzeqeshje.":"";return Te.createElement("div",{className:"logic-grid"},Te.createElement("label",{className:"field"},Te.createElement("span",null,Te.createElement(qw,{size:17}),"Emri"),Te.createElement("input",{value:n,onChange:g=>e(g.target.value),placeholder:"Shkruaj emrin"})),Te.createElement("label",{className:"field"},Te.createElement("span",null,Te.createElement(Vd,{size:17}),"Shkruaj oren e pranimit"),Te.createElement("input",{value:t,onChange:g=>r(g.target.value),placeholder:"Formati: 00:30",inputMode:"text"})),Te.createElement("div",{className:`timer-card ${d}`},Te.createElement(Vd,{size:24}),Te.createElement("span",null,o&&u?nD(l):"10:44 PM"),Te.createElement("strong",null,h),m?Te.createElement("p",null,m):null))}function cD({name:n}){const t=`def kerko_falje(emri):
    zemra = "e sinqerte"
    gabimi = True

    if gabimi and zemra == "e sinqerte":
        return f"Me fal, {emri}. Do ta bej me mire."

print(kerko_falje("${n.trim()||"zemra ime"}"))`;return Te.createElement("pre",{className:"code-card"},Te.createElement("code",null,t))}function fD({name:n,setName:e,receivedAt:t,setReceivedAt:r}){const o=n.trim()||"te bukuren time <3";return[{icon:Hd,eyebrow:"Slide 01",title:`Per ${o}`,body:"E bera kete faqe te vogel sepse ndonjehere fjalet duken me te sinqerta kur marrin pak drite, levizje dhe kujdes.",accent:"heart",visual:Te.createElement("div",{className:"bear-frame"},Te.createElement("img",{src:eD,alt:"Cute original blue alien teddy bear holding a heart"}))},{icon:Ww,eyebrow:"Slide 02",title:"Falja ne menyre kodi",body:"Nuk eshte program perfekt, por qellimi eshte i paster: te kerkoj falje bukur, qarte dhe me zemer.",accent:"code",visual:Te.createElement(cD,{name:n})},{icon:Vd,eyebrow:"Slide 03",title:"Rregulli i profesorit",body:"Email-i u dergua ne 10:44 PM. Ajo vendos vetem oren e pranimit; nese eshte brenda dy ore, falja pranohet.",accent:"clock",visual:Te.createElement(uD,{name:n,setName:e,receivedAt:t,setReceivedAt:r})},{icon:h0,eyebrow:"Slide 04",title:"Arsyeja pse po perpiqem",body:"Sepse buzeqeshja jote ndryshon diten time. Edhe kur une ngaterrohem, ti prape mbetesh personi qe dua ta bej te ndihet e zgjedhur.",accent:"spark",visual:Te.createElement("div",{className:"memory-wall"},Te.createElement("span",null,"kujdes"),Te.createElement("span",null,"besim"),Te.createElement("span",null,"qetesi"),Te.createElement("span",null,"ne te dy"))},{icon:p0,eyebrow:"Slide 05",title:"Premtimi i vogel",body:"Me pak krenari, me shume degjim, me shume butesi. Jo vetem sot, por sa here qe duhet ta rregulloj nje gabim timin.",accent:"promise",visual:Te.createElement("div",{className:"promise-stack"},Te.createElement("div",null,Te.createElement(Hd,{size:20})," me fal"),Te.createElement("div",null,Te.createElement(h0,{size:20})," po mesoj"),Te.createElement("div",null,Te.createElement(p0,{size:20})," te zgjedh prape"))},{icon:Gy,eyebrow:"Slide 06",title:"Chat vetem per qejf",body:"Hape kete link me te njejten dhome dhe lini mesazhe te vogla. Ne Vercel ruhen perkohesisht ne nje JSON nga API.",accent:"chat",visual:Te.createElement(lD,{name:n})}]}function dD(){const[n,e]=we.useState(""),[t,r]=we.useState(0),[o,l]=we.useState(1),[u,c]=we.useState(""),d=fD({name:n,setName:e,receivedAt:u,setReceivedAt:c}),h=d[t],m=h.icon,g=M=>{l(M>t?1:-1),r((M+d.length)%d.length)},v=()=>g(t+1),x=()=>g(t-1);return Te.createElement("main",{className:"app-shell"},Te.createElement(sD,null),Te.createElement(oD,null),Te.createElement("section",{className:"deck","aria-label":"Romantic apology slideshow"},Te.createElement("div",{className:"topbar"},Te.createElement("div",{className:"brand"},Te.createElement(Hd,{size:20}),"Vivi"),Te.createElement(aD,{active:t,total:d.length,onSelect:g})),Te.createElement("div",{className:"slide-stage"},Te.createElement(gM,{mode:"wait",custom:o},Te.createElement(d0.article,{key:t,className:`slide accent-${h.accent}`,custom:o,initial:{opacity:0,x:o*90,rotate:o*1.6},animate:{opacity:1,x:0,rotate:0},exit:{opacity:0,x:o*-90,rotate:o*-1.6},transition:{type:"spring",stiffness:120,damping:18},drag:"x",dragConstraints:{left:0,right:0},dragElastic:.16,onDragEnd:(M,E)=>{E.offset.x<-80&&v(),E.offset.x>80&&x()}},Te.createElement("div",{className:"copy"},Te.createElement("span",{className:"eyebrow"},Te.createElement(m,{size:18}),h.eyebrow),Te.createElement("h1",null,h.title),Te.createElement("p",null,h.body)),Te.createElement(d0.div,{className:"visual",initial:{opacity:0,scale:.94},animate:{opacity:1,scale:1},transition:{delay:.16,duration:.46}},h.visual)))),Te.createElement("div",{className:"controls"},Te.createElement("button",{type:"button",onClick:x,"aria-label":"Previous slide"},Te.createElement(Hw,{size:20})),Te.createElement("span",null,t+1," / ",d.length),Te.createElement("button",{type:"button",onClick:v,"aria-label":"Next slide"},Te.createElement(Gw,{size:20})))))}uM.createRoot(document.getElementById("root")).render(Te.createElement(dD,null));
