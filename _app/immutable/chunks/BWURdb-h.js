import{au as s,av as f,aw as w,L as y,af as S,P as T,ag as L,W as P}from"./BiC3_cZZ.js";function M(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const V=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function j(t){return V.includes(t)}const A={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function q(t){return t=t.toLowerCase(),A[t]??t}const I=["touchstart","touchmove"];function C(t){return I.includes(t)}function N(t){var e=w,a=y;s(null),f(null);try{return t()}finally{s(e),f(a)}}const O=new Set,W=new Set;function x(t,e,a,i={}){function o(r){if(i.capture||B.call(e,r),!r.cancelBubble)return N(()=>a==null?void 0:a.call(this,r))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?T(()=>{e.addEventListener(t,o,i)}):e.addEventListener(t,o,i),o}function R(t,e,a,i,o){var r={capture:i,passive:o},u=x(t,e,a,r);(e===document.body||e===window||e===document)&&S(()=>{e.removeEventListener(t,u,r)})}function z(t){for(var e=0;e<t.length;e++)O.add(t[e]);for(var a of W)a(t)}function B(t){var b;var e=this,a=e.ownerDocument,i=t.type,o=((b=t.composedPath)==null?void 0:b.call(t))||[],r=o[0]||t.target,u=0,_=t.__root;if(_){var d=o.indexOf(_);if(d!==-1&&(e===document||e===window)){t.__root=e;return}var v=o.indexOf(e);if(v===-1)return;d<=v&&(u=d)}if(r=o[u]||t.target,r!==e){L(t,"currentTarget",{configurable:!0,get(){return r||a}});var g=w,E=y;s(null),f(null);try{for(var n,h=[];r!==null;){var p=r.assignedSlot||r.parentNode||r.host||null;try{var c=r["__"+i];if(c!=null&&(!r.disabled||t.target===r))if(P(c)){var[k,...m]=c;k.apply(r,[t,...m])}else c.call(r,t)}catch(l){n?h.push(l):n=l}if(t.cancelBubble||p===e||p===null)break;r=p}if(n){for(let l of h)queueMicrotask(()=>{throw l});throw n}}finally{t.__root=e,delete t.currentTarget,s(g),f(E)}}}export{O as a,M as b,x as c,z as d,R as e,j as f,B as h,C as i,q as n,W as r,N as w};
