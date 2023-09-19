import{s as Y,n as B,o as pe,c as me,d as ne,u as le,g as oe,e as ie}from"../chunks/scheduler.d8bdb3a2.js";import{S as J,i as Q,x as he,f as d,g as S,m as T,h as C,j as P,n as U,k as v,a as w,y as g,z as de,A as be,B as _e,o as ge,s as L,r as O,c as D,C as W,u as V,v as R,d as k,t as E,w as N,e as q,b as ce,p as fe,D as ve}from"../chunks/index.676e8c1b.js";import{e as z}from"../chunks/each.b224194a.js";import{B as xe,L as ue}from"../chunks/Link.e38fcbd0.js";import{d as $e}from"../chunks/singletons.a17e4f8c.js";function ye(a){return document.title=`
        `+xe+`
    `,{c:B,l(e){he("svelte-ffrimp",document.head).forEach(d)},m:B,p:B,i:B,o:B,d:B}}class we extends J{constructor(e){super(),Q(this,e,null,ye,Y,{})}}const ke=()=>{const a=$e;return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated}},Ee={subscribe(a){return ke().page.subscribe(a)}};var $={};Object.defineProperty($,"__esModule",{value:!0});function j(a,e,t){var r;if(t===void 0&&(t={}),!e.codes){e.codes={};for(var s=0;s<e.chars.length;++s)e.codes[e.chars[s]]=s}if(!t.loose&&a.length*e.bits&7)throw new SyntaxError("Invalid padding");for(var c=a.length;a[c-1]==="=";)if(--c,!t.loose&&!((a.length-c)*e.bits&7))throw new SyntaxError("Invalid padding");for(var i=new((r=t.out)!=null?r:Uint8Array)(c*e.bits/8|0),o=0,l=0,f=0,h=0;h<c;++h){var A=e.codes[a[h]];if(A===void 0)throw new SyntaxError("Invalid character "+a[h]);l=l<<e.bits|A,o+=e.bits,o>=8&&(o-=8,i[f++]=255&l>>o)}if(o>=e.bits||255&l<<8-o)throw new SyntaxError("Unexpected end of data");return i}function G(a,e,t){t===void 0&&(t={});for(var r=t,s=r.pad,c=s===void 0?!0:s,i=(1<<e.bits)-1,o="",l=0,f=0,h=0;h<a.length;++h)for(f=f<<8|255&a[h],l+=8;l>e.bits;)l-=e.bits,o+=e.chars[i&f>>l];if(l&&(o+=e.chars[i&f<<e.bits-l]),c)for(;o.length*e.bits&7;)o+="=";return o}var X={chars:"0123456789ABCDEF",bits:4},Z={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bits:5},ee={chars:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bits:5},te={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bits:6},re={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bits:6},Se={parse:function(e,t){return j(e.toUpperCase(),X,t)},stringify:function(e,t){return G(e,X,t)}},Ce={parse:function(e,t){return t===void 0&&(t={}),j(t.loose?e.toUpperCase().replace(/0/g,"O").replace(/1/g,"L").replace(/8/g,"B"):e,Z,t)},stringify:function(e,t){return G(e,Z,t)}},Ae={parse:function(e,t){return j(e,ee,t)},stringify:function(e,t){return G(e,ee,t)}},Me={parse:function(e,t){return j(e,te,t)},stringify:function(e,t){return G(e,te,t)}},He={parse:function(e,t){return j(e,re,t)},stringify:function(e,t){return G(e,re,t)}},Be={parse:j,stringify:G};$.base16=Se;$.base32=Ce;$.base32hex=Ae;$.base64=Me;$.base64url=He;$.codec=Be;$.base16;$.base32;$.base32hex;const Le=$.base64;$.base64url;$.codec;function De(a){let e,t,r,s,c;return{c(){e=S("a"),t=S("span"),r=T(a[0]),this.h()},l(i){e=C(i,"A",{href:!0,class:!0});var o=P(e);t=C(o,"SPAN",{class:!0});var l=P(t);r=U(l,a[0]),l.forEach(d),o.forEach(d),this.h()},h(){v(t,"class","whitespace-nowrap"),v(e,"href",a[1]),v(e,"class","bg-mantis py-3 px-8 inline-flex rounded-md shadow-lg hover:shadow-xl transform-gpu hover:scale-105 duration-150 justify-self-center text-black font-black justify-center")},m(i,o){w(i,e,o),g(e,t),g(t,r),s||(c=de(e,"click",be(_e(a[2])),{once:!0}),s=!0)},p(i,[o]){o&1&&ge(r,i[0]),o&2&&v(e,"href",i[1])},i:B,o:B,d(i){i&&d(e),s=!1,c()}}}async function Pe(a,e){const t=new TextEncoder,r=await crypto.subtle.importKey("raw",t.encode(e),"PBKDF2",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"PBKDF2",salt:a,iterations:2e5,hash:"SHA-256"},r,{name:"AES-GCM",length:256},!0,["decrypt"])}async function Fe(a,e){const t=new TextDecoder,r=Le.parse(a),s=r.slice(0,32),c=r.slice(32,32+16),i=r.slice(32+16),o=await Pe(s,e),l=new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:c},o,i));if(!l)throw"Malformed data";return t.decode(l)}function Ie(a,e,t){let{pl:r="7BKSoCKVo//sZpkSUcdu7edIn1WdAkOcRvQqF33r1JeHe8BX+hyi0tPp5hruHn4CSCsmyROAB9Vlt9UcdHA4pgs5CDHjfLW7tkFYgJ/dtVxD"}=e,{pwd:s="5Su4hPwjnY@9y59_"}=e;if(!r||!s)throw"EncryptedEmail.svelte: Missing data";let c="Show Email",i="#",o="";pe(async()=>{o=await Fe(r,s)});async function l(){t(1,i="mailto:"+o),t(0,c=o)}return a.$$set=f=>{"pl"in f&&t(3,r=f.pl),"pwd"in f&&t(4,s=f.pwd)},[c,i,l,r,s]}class Ke extends J{constructor(e){super(),Q(this,e,Ie,De,Y,{pl:3,pwd:4})}}function Te(a){let e,t,r,s,c="Let's co-create a sustainable future!",i,o,l,f,h,A=new Date().getFullYear()+"",y,F,M,_,p='<a href="https://matrix.to/#/@Greenheart:matrix.org" target="_blank" rel="noopener noreferrer" aria-label="Message me securely with the Matrix protocol"><img src="/images/matrix-logo.svg" alt="Matrix.org logo" class="h-8"/></a> <a href="https://github.com/Greenheart" target="_blank" rel="noopener noreferrer" aria-label="See my libre software at GitHub"><img src="/images/github.svg" alt="GitHub" class="w-8 h-8"/></a> <a href="https://fosstodon.org/@Greenheart" target="_blank" rel="me noopener noreferrer" aria-label="Follow me on Mastodon"><img src="/images/mastodon-logo.svg" alt="Mastodon" class="w-8 h-8"/></a> <a href="https://linkedin.com/in/samuelplumppu" target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn"><img src="/images/linkedin.svg" alt="LinkedIn" class="w-8 h-8"/></a>',I;return o=new Ke({}),{c(){e=S("footer"),t=S("hr"),r=L(),s=S("h2"),s.textContent=c,i=L(),O(o.$$.fragment),l=L(),f=S("p"),h=T("© 2015 - "),y=T(A),F=T(" Samuel Plumppu"),M=L(),_=S("div"),_.innerHTML=p,this.h()},l(x){e=C(x,"FOOTER",{class:!0});var m=P(e);t=C(m,"HR",{class:!0,id:!0}),r=D(m),s=C(m,"H2",{class:!0,"data-svelte-h":!0}),W(s)!=="svelte-g9x2r6"&&(s.textContent=c),i=D(m),V(o.$$.fragment,m),l=D(m),f=C(m,"P",{class:!0});var n=P(f);h=U(n,"© 2015 - "),y=U(n,A),F=U(n," Samuel Plumppu"),n.forEach(d),M=D(m),_=C(m,"DIV",{class:!0,"data-svelte-h":!0}),W(_)!=="svelte-86npz9"&&(_.innerHTML=p),m.forEach(d),this.h()},h(){v(t,"class","my-16 max-w-sm mx-auto border-ming"),v(t,"id","contact"),v(s,"class","text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none mb-6"),v(f,"class","mt-8"),v(_,"class","flex justify-center space-x-8 items-center my-8 flex-wrap"),v(e,"class","container px-4 pb-4 text-center max-w-6xl mx-auto font-light")},m(x,m){w(x,e,m),g(e,t),g(e,r),g(e,s),g(e,i),R(o,e,null),g(e,l),g(e,f),g(f,h),g(f,y),g(f,F),g(e,M),g(e,_),I=!0},p:B,i(x){I||(k(o.$$.fragment,x),I=!0)},o(x){E(o.$$.fragment,x),I=!1},d(x){x&&d(e),N(o)}}}class Ue extends J{constructor(e){super(),Q(this,e,null,Te,Y,{})}}function ae(a,e,t){const r=a.slice();return r[4]=e[t],r}function je(a){let e,t,r,s,c,i,o,l,f,h,A,y,F="@media (max-width:360px){header{justify-content:center!important}}",M;e=new we({}),s=new ue({props:{href:"/",$$slots:{default:[Oe]},$$scope:{ctx:a}}});let _=z(a[1]),p=[];for(let n=0;n<_.length;n+=1)p[n]=se(ae(a,_,n));const I=n=>E(p[n],1,1,()=>{p[n]=null}),x=a[2].default,m=ne(x,a,a[3],null);return h=new Ue({}),{c(){O(e.$$.fragment),t=L(),r=S("header"),O(s.$$.fragment),c=L(),i=S("nav");for(let n=0;n<p.length;n+=1)p[n].c();o=L(),l=S("div"),m&&m.c(),f=L(),O(h.$$.fragment),A=L(),y=S("style"),y.textContent=F,this.h()},l(n){V(e.$$.fragment,n),t=D(n),r=C(n,"HEADER",{class:!0});var u=P(r);V(s.$$.fragment,u),c=D(u),i=C(u,"NAV",{class:!0});var H=P(i);for(let K=0;K<p.length;K+=1)p[K].l(H);H.forEach(d),u.forEach(d),o=D(n),l=C(n,"DIV",{class:!0});var b=P(l);m&&m.l(b),b.forEach(d),f=D(n),V(h.$$.fragment,n),A=D(n),y=C(n,"STYLE",{lang:!0,"data-svelte-h":!0}),W(y)!=="svelte-e7yufa"&&(y.textContent=F),this.h()},h(){v(i,"class","flex space-x-2 xs:space-x-4"),v(r,"class","flex flex-1 justify-between p-4 max-w-6xl mx-auto flex-wrap gap-y-4 gap-x-2"),v(l,"class","container mx-auto max-w-6xl p-4 pb-0"),v(y,"lang","postcss")},m(n,u){R(e,n,u),w(n,t,u),w(n,r,u),R(s,r,null),g(r,c),g(r,i);for(let H=0;H<p.length;H+=1)p[H]&&p[H].m(i,null);w(n,o,u),w(n,l,u),m&&m.m(l,null),w(n,f,u),R(h,n,u),w(n,A,u),w(n,y,u),M=!0},p(n,u){const H={};if(u&8&&(H.$$scope={dirty:u,ctx:n}),s.$set(H),u&2){_=z(n[1]);let b;for(b=0;b<_.length;b+=1){const K=ae(n,_,b);p[b]?(p[b].p(K,u),k(p[b],1)):(p[b]=se(K),p[b].c(),k(p[b],1),p[b].m(i,null))}for(fe(),b=_.length;b<p.length;b+=1)I(b);ce()}m&&m.p&&(!M||u&8)&&le(m,x,n,n[3],M?ie(x,n[3],u,null):oe(n[3]),null)},i(n){if(!M){k(e.$$.fragment,n),k(s.$$.fragment,n);for(let u=0;u<_.length;u+=1)k(p[u]);k(m,n),k(h.$$.fragment,n),M=!0}},o(n){E(e.$$.fragment,n),E(s.$$.fragment,n),p=p.filter(Boolean);for(let u=0;u<p.length;u+=1)E(p[u]);E(m,n),E(h.$$.fragment,n),M=!1},d(n){n&&(d(t),d(r),d(o),d(l),d(f),d(A),d(y)),N(e,n),N(s),ve(p,n),m&&m.d(n),N(h,n)}}}function Ge(a){let e;const t=a[2].default,r=ne(t,a,a[3],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,c){r&&r.m(s,c),e=!0},p(s,c){r&&r.p&&(!e||c&8)&&le(r,t,s,s[3],e?ie(t,s[3],c,null):oe(s[3]),null)},i(s){e||(k(r,s),e=!0)},o(s){E(r,s),e=!1},d(s){r&&r.d(s)}}}function Oe(a){let e;return{c(){e=T("Samuel Plumppu")},l(t){e=U(t,"Samuel Plumppu")},m(t,r){w(t,e,r)},d(t){t&&d(e)}}}function Ve(a){let e=a[4].text+"",t;return{c(){t=T(e)},l(r){t=U(r,e)},m(r,s){w(r,t,s)},p:B,d(r){r&&d(t)}}}function se(a){let e,t;return e=new ue({props:{href:a[4].href,$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){O(e.$$.fragment)},l(r){V(e.$$.fragment,r)},m(r,s){R(e,r,s),t=!0},p(r,s){const c={};s&8&&(c.$$scope={dirty:s,ctx:r}),e.$set(c)},i(r){t||(k(e.$$.fragment,r),t=!0)},o(r){E(e.$$.fragment,r),t=!1},d(r){N(e,r)}}}function Re(a){let e,t,r,s;const c=[Ge,je],i=[];function o(l,f){return l[0].route.id==="/talks/[slug]"&&!l[0].error?0:1}return e=o(a),t=i[e]=c[e](a),{c(){t.c(),r=q()},l(l){t.l(l),r=q()},m(l,f){i[e].m(l,f),w(l,r,f),s=!0},p(l,[f]){let h=e;e=o(l),e===h?i[e].p(l,f):(fe(),E(i[h],1,1,()=>{i[h]=null}),ce(),t=i[e],t?t.p(l,f):(t=i[e]=c[e](l),t.c()),k(t,1),t.m(r.parentNode,r))},i(l){s||(k(t),s=!0)},o(l){E(t),s=!1},d(l){l&&d(r),i[e].d(l)}}}function Ne(a,e,t){let r;me(a,Ee,o=>t(0,r=o));let{$$slots:s={},$$scope:c}=e;const i=[{text:"Blog",href:"/blog"},{text:"About",href:"/about"},{text:"Talks",href:"/talks"}];return a.$$set=o=>{"$$scope"in o&&t(3,c=o.$$scope)},[r,i,s,c]}class ze extends J{constructor(e){super(),Q(this,e,Ne,Re,Y,{})}}export{ze as component};
