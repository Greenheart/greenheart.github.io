import{S as e,i as t,s as a,e as s,t as n,c as r,a as l,g as c,d as o,b as i,f as u,D as f,E as h,F as p,G as m,h as d,H as g,I as $,j as x,m as v,o as y,x as w,u as b,v as E,J as k,k as S,K as A,n as P,L as j,w as D,M as G,N as F,O as L,P as M,r as I}from"../chunks/vendor-d3a3d99b.js";import{L as _}from"../chunks/Link-14343103.js";function C(e){let t,a,$,x,v;return{c(){t=s("a"),a=s("span"),$=n(e[0]),this.h()},l(s){t=r(s,"A",{href:!0,class:!0});var n=l(t);a=r(n,"SPAN",{class:!0});var i=l(a);$=c(i,e[0]),i.forEach(o),n.forEach(o),this.h()},h(){i(a,"class","whitespace-nowrap"),i(t,"href",e[1]),i(t,"class","bg-mantis  py-3 px-8 inline-flex rounded-md shadow-lg hover:shadow-xl transform-gpu hover:scale-105 duration-150 justify-self-center text-black font-black justify-center")},m(s,n){u(s,t,n),f(t,a),f(a,$),x||(v=h(t,"click",p(m(e[2])),{once:!0}),x=!0)},p(e,[a]){1&a&&d($,e[0]),2&a&&i(t,"href",e[1])},i:g,o:g,d(e){e&&o(t),x=!1,v()}}}function H(e,t,a){var s=this&&this.__awaiter||function(e,t,a,s){return new(a||(a=Promise))((function(n,r){function l(e){try{o(s.next(e))}catch(t){r(t)}}function c(e){try{o(s.throw(e))}catch(t){r(t)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((s=s.apply(e,t||[])).next())}))};let{pl:n="tseJF9Rza4skuXd9mdpeR4r14SlMnULaFAZ/rjE4ScF46g4VyWOCC5pdAG/omd9yxyOM73/o0SAqW1G2UpDy++C3y29lcj3CA9NjI5sY3XQ2"}=t,{pwd:r="may the forest be with you"}=t;if(!n||!r)throw"Missing data";let l="Show Email",c="#";function o(e,t){return s(this,void 0,void 0,(function*(){const a=new TextDecoder,n=$.parse(e),r=n.slice(0,32),l=n.slice(32,48),c=n.slice(48),o=yield function(e,t){return s(this,void 0,void 0,(function*(){const a=new TextEncoder,s=yield crypto.subtle.importKey("raw",a.encode(t),"PBKDF2",!1,["deriveKey"]);return yield crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:2e5,hash:"SHA-256"},s,{name:"AES-GCM",length:256},!0,["decrypt"])}))}(r,t),i=new Uint8Array(yield crypto.subtle.decrypt({name:"AES-GCM",iv:l},o,c));if(!i)throw"Malformed data";return a.decode(i)}))}return e.$$set=e=>{"pl"in e&&a(3,n=e.pl),"pwd"in e&&a(4,r=e.pwd)},[l,c,function(){return s(this,void 0,void 0,(function*(){a(0,l="Loading...");const e=yield o(n,r);a(1,c="mailto:"+e),a(0,l=e)}))},n,r]}class K extends e{constructor(e){super(),t(this,e,H,C,a,{pl:3,pwd:4})}}function O(e,t,a){const s=e.slice();return s[3]=t[a],s}function R(e){let t;return{c(){t=n("Samuel Plumppu")},l(e){t=c(e,"Samuel Plumppu")},m(e,a){u(e,t,a)},d(e){e&&o(t)}}}function B(e){let t,a=e[3].text+"";return{c(){t=n(a)},l(e){t=c(e,a)},m(e,a){u(e,t,a)},p:g,d(e){e&&o(t)}}}function N(e){let t,a;return t=new _({props:{href:e[3].href,$$slots:{default:[B]},$$scope:{ctx:e}}}),{c(){x(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,s){y(t,e,s),a=!0},p(e,a){const s={};4&a&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){a||(w(t.$$.fragment,e),a=!0)},o(e){b(t.$$.fragment,e),a=!1},d(e){E(t,e)}}}function V(e){let t,a,h,p,m,d,g,$,C,H,B,V,T,U,J,W,X,Y,q,z,Q,Z,ee,te,ae,se,ne,re,le,ce=(new Date).getFullYear()+"";h=new _({props:{href:"/",$$slots:{default:[R]},$$scope:{ctx:e}}});let oe=e[0],ie=[];for(let s=0;s<oe.length;s+=1)ie[s]=N(O(e,oe,s));const ue=e=>b(ie[e],1,1,(()=>{ie[e]=null})),fe=e[1].default,he=k(fe,e,e[2],null);return J=new K({}),{c(){t=S(),a=s("header"),x(h.$$.fragment),p=S(),m=s("nav");for(let e=0;e<ie.length;e+=1)ie[e].c();d=S(),g=s("div"),he&&he.c(),$=S(),C=s("footer"),H=s("hr"),B=S(),V=s("h2"),T=n("Let's co-create a sustainable future!"),U=S(),x(J.$$.fragment),W=S(),X=s("p"),Y=n("Samuel Plumppu © 2015 - "),q=n(ce),z=S(),Q=s("div"),Z=s("a"),ee=s("img"),ae=S(),se=s("a"),ne=s("img"),this.h()},l(e){A('[data-svelte="svelte-muyues"]',document.head).forEach(o),t=P(e),a=r(e,"HEADER",{class:!0});var s=l(a);v(h.$$.fragment,s),p=P(s),m=r(s,"NAV",{class:!0});var n=l(m);for(let t=0;t<ie.length;t+=1)ie[t].l(n);n.forEach(o),s.forEach(o),d=P(e),g=r(e,"DIV",{class:!0});var i=l(g);he&&he.l(i),i.forEach(o),$=P(e),C=r(e,"FOOTER",{class:!0});var u=l(C);H=r(u,"HR",{class:!0,id:!0}),B=P(u),V=r(u,"H2",{class:!0});var f=l(V);T=c(f,"Let's co-create a sustainable future!"),f.forEach(o),U=P(u),v(J.$$.fragment,u),W=P(u),X=r(u,"P",{class:!0});var x=l(X);Y=c(x,"Samuel Plumppu © 2015 - "),q=c(x,ce),x.forEach(o),z=P(u),Q=r(u,"DIV",{class:!0});var y=l(Q);Z=r(y,"A",{href:!0,target:!0,rel:!0,"aria-label":!0});var w=l(Z);ee=r(w,"IMG",{src:!0,alt:!0,class:!0}),w.forEach(o),ae=P(y),se=r(y,"A",{href:!0,target:!0,rel:!0,"aria-label":!0});var b=l(se);ne=r(b,"IMG",{src:!0,alt:!0,class:!0}),b.forEach(o),y.forEach(o),u.forEach(o),this.h()},h(){document.title="\r\n        Samuel Plumppu | Sustainability Entrepreneur & Fullstack Developer\r\n    ",i(m,"class","flex space-x-4"),i(a,"class","flex flex-1 justify-between p-4 max-w-6xl mx-auto"),i(g,"class","container mx-auto max-w-6xl p-4"),i(H,"class","my-16 max-w-sm mx-auto border-ming"),i(H,"id","contact"),i(V,"class","text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none mb-6"),i(X,"class","mt-8"),j(ee.src,te="/_app/assets/github.4ea99f48.svg")||i(ee,"src","/_app/assets/github.4ea99f48.svg"),i(ee,"alt","GitHub"),i(ee,"class","w-8 h-8"),i(Z,"href","https://github.com/Greenheart"),i(Z,"target","_blank"),i(Z,"rel","noopener noreferrer"),i(Z,"aria-label","See my profile on GitHub"),j(ne.src,re="/_app/assets/linkedin.9dac6797.svg")||i(ne,"src","/_app/assets/linkedin.9dac6797.svg"),i(ne,"alt","LinkedIn"),i(ne,"class","w-8 h-8"),i(se,"href","https://linkedin.com/in/samuelplumppu"),i(se,"target","_blank"),i(se,"rel","noopener noreferrer"),i(se,"aria-label","Connect with me on LinkedIn"),i(Q,"class","flex justify-center space-x-4 items-center my-8"),i(C,"class","container px-4 pb-4 text-center max-w-6xl mx-auto font-light")},m(e,s){u(e,t,s),u(e,a,s),y(h,a,null),f(a,p),f(a,m);for(let t=0;t<ie.length;t+=1)ie[t].m(m,null);u(e,d,s),u(e,g,s),he&&he.m(g,null),u(e,$,s),u(e,C,s),f(C,H),f(C,B),f(C,V),f(V,T),f(C,U),y(J,C,null),f(C,W),f(C,X),f(X,Y),f(X,q),f(C,z),f(C,Q),f(Q,Z),f(Z,ee),f(Q,ae),f(Q,se),f(se,ne),le=!0},p(e,[t]){const a={};if(4&t&&(a.$$scope={dirty:t,ctx:e}),h.$set(a),1&t){let a;for(oe=e[0],a=0;a<oe.length;a+=1){const s=O(e,oe,a);ie[a]?(ie[a].p(s,t),w(ie[a],1)):(ie[a]=N(s),ie[a].c(),w(ie[a],1),ie[a].m(m,null))}for(I(),a=oe.length;a<ie.length;a+=1)ue(a);D()}he&&he.p&&(!le||4&t)&&G(he,fe,e,e[2],le?L(fe,e[2],t,null):F(e[2]),null)},i(e){if(!le){w(h.$$.fragment,e);for(let e=0;e<oe.length;e+=1)w(ie[e]);w(he,e),w(J.$$.fragment,e),le=!0}},o(e){b(h.$$.fragment,e),ie=ie.filter(Boolean);for(let t=0;t<ie.length;t+=1)b(ie[t]);b(he,e),b(J.$$.fragment,e),le=!1},d(e){e&&o(t),e&&o(a),E(h),M(ie,e),e&&o(d),e&&o(g),he&&he.d(e),e&&o($),e&&o(C),E(J)}}}function T(e,t,a){let{$$slots:s={},$$scope:n}=t;return e.$$set=e=>{"$$scope"in e&&a(2,n=e.$$scope)},[[{text:"Blog",href:"/blog"}],s,n]}export default class extends e{constructor(e){super(),t(this,e,T,V,a,{})}}
