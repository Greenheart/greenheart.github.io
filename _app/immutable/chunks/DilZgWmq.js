import{B as g,y as H,H as I,v as O,x as m,l as h,k as E,e as b,u as _,C,w as Y,D as k,F as M,G as S,I as V,J as $,o as j,h as w,p as B,K as F,L as G,a as J}from"./BiC3_cZZ.js";import{a as K,r as D,h as c,i as P}from"./BWURdb-h.js";import{r as W}from"./d75KEXOw.js";import{d as q}from"./BVvg2sek.js";let L=!0;function x(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t+"")}function z(r,e){return N(r,e)}function ee(r,e){g(),e.intro=e.intro??!1;const t=e.target,u=w,l=_;try{for(var a=H(t);a&&(a.nodeType!==8||a.data!==I);)a=O(a);if(!a)throw m;h(!0),E(a),b();const d=N(r,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==C)throw Y(),m;return h(!1),d}catch(d){if(d===m)return e.recover===!1&&k(),g(),M(t),h(!1),z(r,e);throw d}finally{h(u),E(l),W()}}const i=new Map;function N(r,{target:e,anchor:t,props:u={},events:l,context:a,intro:d=!0}){g();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var f=P(n);e.addEventListener(n,c,{passive:f});var T=i.get(n);T===void 0?(document.addEventListener(n,c,{passive:f}),i.set(n,1)):i.set(n,T+1)}}};y(S(K)),D.add(y);var p=void 0,A=V(()=>{var o=t??e.appendChild($());return j(()=>{if(a){B({});var s=F;s.c=a}l&&(u.$$events=l),w&&q(o,null),L=d,p=r(o,u)||{},L=!0,w&&(G.nodes_end=_),a&&J()}),()=>{var f;for(var s of v){e.removeEventListener(s,c);var n=i.get(s);--n===0?(document.removeEventListener(s,c),i.delete(s)):i.set(s,n)}D.delete(y),o!==t&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(p,A),p}let R=new WeakMap;function re(r,e){const t=R.get(r);return t?(R.delete(r),t(e)):Promise.resolve()}export{L as a,ee as h,z as m,x as s,re as u};
