import{C as d,s as v}from"./index.dcc872af.js";const c=[];function p(e,t=d){let n;const o=new Set;function r(s){if(v(e,s)&&(e=s,n)){const u=!c.length;for(const l of o)l[1](),c.push(l,e);if(u){for(let l=0;l<c.length;l+=2)c[l][0](c[l+1]);c.length=0}}}function i(s){r(s(e))}function a(s,u=d){const l=[s,u];return o.add(l),o.size===1&&(n=t(r)||d),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:a}}var g;const E=((g=globalThis.__sveltekit_1ram9xa)==null?void 0:g.base)??"";var k;const w=((k=globalThis.__sveltekit_1ram9xa)==null?void 0:k.assets)??E,A="1679789158459",x="sveltekit:snapshot",I="sveltekit:scroll",y="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function m(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=m(e)}}function N(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||S(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:r,target:o}}function V(e){let t=null,n=null,o=null,r=null,i=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=m(s);return{preload_code:b[o??"off"],preload_data:b[r??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:i==="off"?!1:i===""?!0:null,replace_state:a==="off"?!1:a===""?!0:null}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function i(a){let s;return t.subscribe(u=>{(s===void 0||n&&u!==s)&&a(s=u)})}return{notify:o,set:r,subscribe:i}}function R(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);const r=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const a=(await r.json()).version!==A;return a&&(e(!0),clearTimeout(n)),a}else throw new Error(`Version check failed: ${r.status}`)}return{subscribe:t,check:o}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function P(e){e.client}const Y={url:h({}),page:h({}),navigating:p(null),updated:R()};export{y as I,_ as P,I as S,x as a,N as b,V as c,U as d,E as e,L as f,O as g,P as h,S as i,Y as s};
