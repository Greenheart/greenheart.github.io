import{S as X,i as Z,s as W,B as P,C as we,h as d,k as w,q as R,l as x,m as y,r as U,n as u,b as M,D as h,E as xe,F as $e,G as ye,u as ke,a as A,w as N,c as G,x as V,H as Q,y as Y,f as I,t as D,z,e as ie,d as pe,I as Ee,g as he,J as de,K as _e,L as be,M as ge,N as Se}from"../../chunks/index-9503b135.js";import{B as ue}from"../../chunks/constants-94f7c113.js";import{L as ve}from"../../chunks/Link-6b9d6e3a.js";import{s as Me}from"../../chunks/singletons-bdbe5925.js";function Ae(l){let e;return document.title=e=`
        `+ue+`
    `,{c:P,l(r){we("svelte-ffrimp",document.head).forEach(d)},m:P,p(r,[t]){t&0&&e!==(e=`
        `+ue+`
    `)&&(document.title=e)},i:P,o:P,d:P}}class Ge extends X{constructor(e){super(),Z(this,e,null,Ae,W,{})}}const Ie=()=>{const l=Me;return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},updated:l.updated}},Le={subscribe(l){return Ie().page.subscribe(l)}};function De(l,e,r){var t;if(r===void 0&&(r={}),!e.codes){e.codes={};for(var s=0;s<e.chars.length;++s)e.codes[e.chars[s]]=s}if(!r.loose&&l.length*e.bits&7)throw new SyntaxError("Invalid padding");for(var f=l.length;l[f-1]==="=";)if(--f,!r.loose&&!((l.length-f)*e.bits&7))throw new SyntaxError("Invalid padding");for(var i=new((t=r.out)!=null?t:Uint8Array)(f*e.bits/8|0),o=0,n=0,_=0,b=0;b<f;++b){var F=e.codes[l[b]];if(F===void 0)throw new SyntaxError("Invalid character "+l[b]);n=n<<e.bits|F,o+=e.bits,o>=8&&(o-=8,i[_++]=255&n>>o)}if(o>=e.bits||255&n<<8-o)throw new SyntaxError("Unexpected end of data");return i}function Fe(l,e,r){r===void 0&&(r={});for(var t=r,s=t.pad,f=s===void 0?!0:s,i=(1<<e.bits)-1,o="",n=0,_=0,b=0;b<l.length;++b)for(_=_<<8|255&l[b],n+=8;n>e.bits;)n-=e.bits,o+=e.chars[i&_>>n];if(n&&(o+=e.chars[i&_<<e.bits-n]),f)for(;o.length*e.bits&7;)o+="=";return o}var fe={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bits:6},Te={parse:function(e,r){return De(e,fe,r)},stringify:function(e,r){return Fe(e,fe,r)}};function je(l){let e,r,t,s,f;return{c(){e=w("a"),r=w("span"),t=R(l[0]),this.h()},l(i){e=x(i,"A",{href:!0,class:!0});var o=y(e);r=x(o,"SPAN",{class:!0});var n=y(r);t=U(n,l[0]),n.forEach(d),o.forEach(d),this.h()},h(){u(r,"class","whitespace-nowrap"),u(e,"href",l[1]),u(e,"class","bg-mantis py-3 px-8 inline-flex rounded-md shadow-lg hover:shadow-xl transform-gpu hover:scale-105 duration-150 justify-self-center text-black font-black justify-center")},m(i,o){M(i,e,o),h(e,r),h(r,t),s||(f=xe(e,"click",$e(ye(l[2])),{once:!0}),s=!0)},p(i,[o]){o&1&&ke(t,i[0]),o&2&&u(e,"href",i[1])},i:P,o:P,d(i){i&&d(e),s=!1,f()}}}async function Pe(l,e){const r=new TextEncoder,t=await crypto.subtle.importKey("raw",r.encode(e),"PBKDF2",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"PBKDF2",salt:l,iterations:2e5,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!0,["decrypt"])}async function Be(l,e){const r=new TextDecoder,t=Te.parse(l),s=t.slice(0,32),f=t.slice(32,32+16),i=t.slice(32+16),o=await Pe(s,e),n=new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:f},o,i));if(!n)throw"Malformed data";return r.decode(n)}function He(l,e,r){let{pl:t="mAarRtN4H19rQ8LQfkmMR9nJPTDFy3A+89L3B+Y26XMOpSUCM4AeydA4Fzhs1X8DUvr++2XJ/33ZqfdjkzY5d8qZ/EDouFpsTlyyI6sm72VG"}=e,{pwd:s="v7tfbS4mjvZE6vjiMMQa355dC5TaWnh6RG8U"}=e;if(!t||!s)throw"EncryptedEmail.svelte: Missing data";let f="Show Email",i="#";async function o(){r(0,f="Loading...");const n=await Be(t,s);r(1,i="mailto:"+n),r(0,f=n)}return l.$$set=n=>{"pl"in n&&r(3,t=n.pl),"pwd"in n&&r(4,s=n.pwd)},[f,i,o,t,s]}class Ke extends X{constructor(e){super(),Z(this,e,He,je,W,{pl:3,pwd:4})}}function Ce(l){let e,r,t,s,f,i,o,n,_,b,F=new Date().getFullYear()+"",L,H,v,$,m,J,K,g,a,c,k,p,E,q,ee,T,C,re,O;return o=new Ke({}),{c(){e=w("footer"),r=w("hr"),t=A(),s=w("h2"),f=R("Let's co-create a sustainable future!"),i=A(),N(o.$$.fragment),n=A(),_=w("p"),b=R("Samuel Plumppu © 2015 - "),L=R(F),H=A(),v=w("div"),$=w("a"),m=w("img"),K=A(),g=w("a"),a=w("img"),k=A(),p=w("a"),E=w("img"),ee=A(),T=w("a"),C=w("img"),this.h()},l(j){e=x(j,"FOOTER",{class:!0});var S=y(e);r=x(S,"HR",{class:!0,id:!0}),t=G(S),s=x(S,"H2",{class:!0});var ae=y(s);f=U(ae,"Let's co-create a sustainable future!"),ae.forEach(d),i=G(S),V(o.$$.fragment,S),n=G(S),_=x(S,"P",{class:!0});var te=y(_);b=U(te,"Samuel Plumppu © 2015 - "),L=U(te,F),te.forEach(d),H=G(S),v=x(S,"DIV",{class:!0});var B=y(v);$=x(B,"A",{href:!0,target:!0,rel:!0,"aria-label":!0});var se=y($);m=x(se,"IMG",{src:!0,alt:!0,class:!0}),se.forEach(d),K=G(B),g=x(B,"A",{href:!0,target:!0,rel:!0,"aria-label":!0});var le=y(g);a=x(le,"IMG",{src:!0,alt:!0,class:!0}),le.forEach(d),k=G(B),p=x(B,"A",{href:!0,target:!0,rel:!0,"aria-label":!0});var ne=y(p);E=x(ne,"IMG",{src:!0,alt:!0,class:!0}),ne.forEach(d),ee=G(B),T=x(B,"A",{href:!0,target:!0,rel:!0,"aria-label":!0});var oe=y(T);C=x(oe,"IMG",{src:!0,alt:!0,class:!0}),oe.forEach(d),B.forEach(d),S.forEach(d),this.h()},h(){u(r,"class","my-16 max-w-sm mx-auto border-ming"),u(r,"id","contact"),u(s,"class","text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none mb-6"),u(_,"class","mt-8"),Q(m.src,J="/images/matrix-logo.svg")||u(m,"src",J),u(m,"alt","Matrix.org logo"),u(m,"class","h-8"),u($,"href","https://matrix.to/#/@Greenheart:matrix.org"),u($,"target","_blank"),u($,"rel","noopener noreferrer"),u($,"aria-label","Message me securely with the Matrix protocol"),Q(a.src,c="/images/github.svg")||u(a,"src",c),u(a,"alt","GitHub"),u(a,"class","w-8 h-8"),u(g,"href","https://github.com/Greenheart"),u(g,"target","_blank"),u(g,"rel","noopener noreferrer"),u(g,"aria-label","See my free software at GitHub"),Q(E.src,q="/images/mastodon-logo.svg")||u(E,"src",q),u(E,"alt","Mastodon"),u(E,"class","w-8 h-8"),u(p,"href","https://fosstodon.org/@Greenheart"),u(p,"target","_blank"),u(p,"rel","me noopener noreferrer"),u(p,"aria-label","Follow me on Mastodon"),Q(C.src,re="/images/linkedin.svg")||u(C,"src",re),u(C,"alt","LinkedIn"),u(C,"class","w-8 h-8"),u(T,"href","https://linkedin.com/in/samuelplumppu"),u(T,"target","_blank"),u(T,"rel","noopener noreferrer"),u(T,"aria-label","Connect with me on LinkedIn"),u(v,"class","flex justify-center space-x-8 items-center my-8 flex-wrap"),u(e,"class","container px-4 pb-4 text-center max-w-6xl mx-auto font-light")},m(j,S){M(j,e,S),h(e,r),h(e,t),h(e,s),h(s,f),h(e,i),Y(o,e,null),h(e,n),h(e,_),h(_,b),h(_,L),h(e,H),h(e,v),h(v,$),h($,m),h(v,K),h(v,g),h(g,a),h(v,k),h(v,p),h(p,E),h(v,ee),h(v,T),h(T,C),O=!0},p:P,i(j){O||(I(o.$$.fragment,j),O=!0)},o(j){D(o.$$.fragment,j),O=!1},d(j){j&&d(e),z(o)}}}class Re extends X{constructor(e){super(),Z(this,e,null,Ce,W,{})}}function ce(l,e,r){const t=l.slice();return t[4]=e[r],t}function Ue(l){let e,r,t,s,f,i,o,n,_,b,F,L,H,v;e=new Ge({}),s=new ve({props:{href:"/",$$slots:{default:[Ne]},$$scope:{ctx:l}}});let $=l[1],m=[];for(let a=0;a<$.length;a+=1)m[a]=me(ce(l,$,a));const J=a=>D(m[a],1,1,()=>{m[a]=null}),K=l[2].default,g=de(K,l,l[3],null);return b=new Re({}),{c(){N(e.$$.fragment),r=A(),t=w("header"),N(s.$$.fragment),f=A(),i=w("nav");for(let a=0;a<m.length;a+=1)m[a].c();o=A(),n=w("div"),g&&g.c(),_=A(),N(b.$$.fragment),F=A(),L=w("style"),H=R("@media (max-width:360px){header{justify-content:center!important}}"),this.h()},l(a){V(e.$$.fragment,a),r=G(a),t=x(a,"HEADER",{class:!0});var c=y(t);V(s.$$.fragment,c),f=G(c),i=x(c,"NAV",{class:!0});var k=y(i);for(let q=0;q<m.length;q+=1)m[q].l(k);k.forEach(d),c.forEach(d),o=G(a),n=x(a,"DIV",{class:!0});var p=y(n);g&&g.l(p),p.forEach(d),_=G(a),V(b.$$.fragment,a),F=G(a),L=x(a,"STYLE",{lang:!0});var E=y(L);H=U(E,"@media (max-width:360px){header{justify-content:center!important}}"),E.forEach(d),this.h()},h(){u(i,"class","flex space-x-2 xs:space-x-4"),u(t,"class","flex flex-1 justify-between p-4 max-w-6xl mx-auto flex-wrap gap-y-4 gap-x-2"),u(n,"class","container mx-auto max-w-6xl p-4 pb-0"),u(L,"lang","postcss")},m(a,c){Y(e,a,c),M(a,r,c),M(a,t,c),Y(s,t,null),h(t,f),h(t,i);for(let k=0;k<m.length;k+=1)m[k].m(i,null);M(a,o,c),M(a,n,c),g&&g.m(n,null),M(a,_,c),Y(b,a,c),M(a,F,c),M(a,L,c),h(L,H),v=!0},p(a,c){const k={};if(c&8&&(k.$$scope={dirty:c,ctx:a}),s.$set(k),c&2){$=a[1];let p;for(p=0;p<$.length;p+=1){const E=ce(a,$,p);m[p]?(m[p].p(E,c),I(m[p],1)):(m[p]=me(E),m[p].c(),I(m[p],1),m[p].m(i,null))}for(he(),p=$.length;p<m.length;p+=1)J(p);pe()}g&&g.p&&(!v||c&8)&&_e(g,K,a,a[3],v?ge(K,a[3],c,null):be(a[3]),null)},i(a){if(!v){I(e.$$.fragment,a),I(s.$$.fragment,a);for(let c=0;c<$.length;c+=1)I(m[c]);I(g,a),I(b.$$.fragment,a),v=!0}},o(a){D(e.$$.fragment,a),D(s.$$.fragment,a),m=m.filter(Boolean);for(let c=0;c<m.length;c+=1)D(m[c]);D(g,a),D(b.$$.fragment,a),v=!1},d(a){z(e,a),a&&d(r),a&&d(t),z(s),Se(m,a),a&&d(o),a&&d(n),g&&g.d(a),a&&d(_),z(b,a),a&&d(F),a&&d(L)}}}function qe(l){let e;const r=l[2].default,t=de(r,l,l[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,f){t&&t.m(s,f),e=!0},p(s,f){t&&t.p&&(!e||f&8)&&_e(t,r,s,s[3],e?ge(r,s[3],f,null):be(s[3]),null)},i(s){e||(I(t,s),e=!0)},o(s){D(t,s),e=!1},d(s){t&&t.d(s)}}}function Ne(l){let e;return{c(){e=R("Samuel Plumppu")},l(r){e=U(r,"Samuel Plumppu")},m(r,t){M(r,e,t)},d(r){r&&d(e)}}}function Ve(l){let e=l[4].text+"",r;return{c(){r=R(e)},l(t){r=U(t,e)},m(t,s){M(t,r,s)},p:P,d(t){t&&d(r)}}}function me(l){let e,r;return e=new ve({props:{href:l[4].href,$$slots:{default:[Ve]},$$scope:{ctx:l}}}),{c(){N(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){Y(e,t,s),r=!0},p(t,s){const f={};s&8&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){r||(I(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){z(e,t)}}}function Ye(l){let e,r,t,s;const f=[qe,Ue],i=[];function o(n,_){return n[0].route.id==="/talks/[slug]"&&!n[0].error?0:1}return e=o(l),r=i[e]=f[e](l),{c(){r.c(),t=ie()},l(n){r.l(n),t=ie()},m(n,_){i[e].m(n,_),M(n,t,_),s=!0},p(n,[_]){let b=e;e=o(n),e===b?i[e].p(n,_):(he(),D(i[b],1,1,()=>{i[b]=null}),pe(),r=i[e],r?r.p(n,_):(r=i[e]=f[e](n),r.c()),I(r,1),r.m(t.parentNode,t))},i(n){s||(I(r),s=!0)},o(n){D(r),s=!1},d(n){i[e].d(n),n&&d(t)}}}const Ze=!0,We="ignore";function ze(l,e,r){let t;Ee(l,Le,o=>r(0,t=o));let{$$slots:s={},$$scope:f}=e;const i=[{text:"Blog",href:"/blog"},{text:"About",href:"/about"},{text:"Talks",href:"/talks"}];return l.$$set=o=>{"$$scope"in o&&r(3,f=o.$$scope)},[t,i,s,f]}class et extends X{constructor(e){super(),Z(this,e,ze,Ye,W,{})}}export{et as default,Ze as prerender,We as trailingSlash};
