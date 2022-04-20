import{S as ve,i as be,s as we,e as v,t as O,c as b,a as y,h as T,d as p,b as c,g as L,F as d,G as ye,H as $e,I as Ee,j as ke,n as te,x as ae,y as re,z as le,r as N,p as q,C as se,J as Se,k as S,K as Ae,m as A,L as he,q as Le,M as Pe,N as Ge,O as He,P as Ie,o as Ke}from"../chunks/index-95479843.js";import{b as me}from"../chunks/constants-662300d2.js";import{L as ge}from"../chunks/Link-93d4693b.js";function De(l,e,t){var a;if(t===void 0&&(t={}),!e.codes){e.codes={};for(var s=0;s<e.chars.length;++s)e.codes[e.chars[s]]=s}if(!t.loose&&l.length*e.bits&7)throw new SyntaxError("Invalid padding");for(var f=l.length;l[f-1]==="=";)if(--f,!t.loose&&!((l.length-f)*e.bits&7))throw new SyntaxError("Invalid padding");for(var o=new((a=t.out)!=null?a:Uint8Array)(f*e.bits/8|0),i=0,n=0,g=0,u=0;u<f;++u){var P=e.codes[l[u]];if(P===void 0)throw new SyntaxError("Invalid character "+l[u]);n=n<<e.bits|P,i+=e.bits,i>=8&&(i-=8,o[g++]=255&n>>i)}if(i>=e.bits||255&n<<8-i)throw new SyntaxError("Unexpected end of data");return o}function Me(l,e,t){t===void 0&&(t={});for(var a=t,s=a.pad,f=s===void 0?!0:s,o=(1<<e.bits)-1,i="",n=0,g=0,u=0;u<l.length;++u)for(g=g<<8|255&l[u],n+=8;n>e.bits;)n-=e.bits,i+=e.chars[o&g>>n];if(n&&(i+=e.chars[o&g<<e.bits-n]),f)for(;i.length*e.bits&7;)i+="=";return i}var pe={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bits:6},Be={parse:function(e,t){return De(e,pe,t)},stringify:function(e,t){return Me(e,pe,t)}};function Ne(l){let e,t,a,s,f;return{c(){e=v("a"),t=v("span"),a=O(l[0]),this.h()},l(o){e=b(o,"A",{href:!0,class:!0});var i=y(e);t=b(i,"SPAN",{class:!0});var n=y(t);a=T(n,l[0]),n.forEach(p),i.forEach(p),this.h()},h(){c(t,"class","whitespace-nowrap"),c(e,"href",l[1]),c(e,"class","bg-mantis py-3 px-8 inline-flex rounded-md shadow-lg hover:shadow-xl transform-gpu hover:scale-105 duration-150 justify-self-center text-black font-black justify-center")},m(o,i){L(o,e,i),d(e,t),d(t,a),s||(f=ye(e,"click",$e(Ee(l[2])),{once:!0}),s=!0)},p(o,[i]){i&1&&ke(a,o[0]),i&2&&c(e,"href",o[1])},i:te,o:te,d(o){o&&p(e),s=!1,f()}}}async function Ue(l,e){const t=new TextEncoder,a=await crypto.subtle.importKey("raw",t.encode(e),"PBKDF2",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"PBKDF2",salt:l,iterations:2e5,hash:"SHA-256"},a,{name:"AES-GCM",length:256},!0,["decrypt"])}async function qe(l,e){const t=new TextDecoder,a=Be.parse(l),s=a.slice(0,32),f=a.slice(32,32+16),o=a.slice(32+16),i=await Ue(s,e),n=new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv:f},i,o));if(!n)throw"Malformed data";return t.decode(n)}function Oe(l,e,t){let{pl:a="HipYU6pNBLgd7a9ovfPByLMpH4cO80WqWPhVnWby3On536QaLQYLO70cPYvLCR8vYtbABQtU5UBfiiAkL6q0TvW7e6NeQp7A4Vhl94oKlmlk"}=e,{pwd:s="eRx1sD0LrHTNubycv1IYgyNqU3Qc9GKPGcl3XT63JG7djgMxU9etkVNcK5Hak5GWDzm4mx6AQFlpOPsY"}=e;if(!a||!s)throw"EncryptedEmail.svelte: Missing data";let f="Show Email",o="#";async function i(){t(0,f="Loading...");const n=await qe(a,s);t(1,o="mailto:"+n),t(0,f=n)}return l.$$set=n=>{"pl"in n&&t(3,a=n.pl),"pwd"in n&&t(4,s=n.pwd)},[f,o,i,a,s]}class Te extends ve{constructor(e){super(),be(this,e,Oe,Ne,we,{pl:3,pwd:4})}}function de(l,e,t){const a=l.slice();return a[3]=e[t],a}function Ye(l){let e;return{c(){e=O("Samuel Plumppu")},l(t){e=T(t,"Samuel Plumppu")},m(t,a){L(t,e,a)},d(t){t&&p(e)}}}function je(l){let e=l[3].text+"",t;return{c(){t=O(e)},l(a){t=T(a,e)},m(a,s){L(a,t,s)},p:te,d(a){a&&p(t)}}}function _e(l){let e,t;return e=new ge({props:{href:l[3].href,$$slots:{default:[je]},$$scope:{ctx:l}}}),{c(){ae(e.$$.fragment)},l(a){re(e.$$.fragment,a)},m(a,s){le(e,a,s),t=!0},p(a,s){const f={};s&4&&(f.$$scope={dirty:s,ctx:a}),e.$set(f)},i(a){t||(N(e.$$.fragment,a),t=!0)},o(a){q(e.$$.fragment,a),t=!1},d(a){se(e,a)}}}function Ce(l){let e,t,a,s,f,o,i,n,g,u,P,C,U,F,Q,H,V,I,R,ne=new Date().getFullYear()+"",W,z,G,E,K,oe,J,k,D,ie,M;document.title=e=`
        `+me+`
    `,s=new ge({props:{href:"/",$$slots:{default:[Ye]},$$scope:{ctx:l}}});let B=l[0],h=[];for(let r=0;r<B.length;r+=1)h[r]=_e(de(l,B,r));const xe=r=>q(h[r],1,1,()=>{h[r]=null}),X=l[1].default,w=Se(X,l,l[2],null);return H=new Te({}),{c(){t=S(),a=v("header"),ae(s.$$.fragment),f=S(),o=v("nav");for(let r=0;r<h.length;r+=1)h[r].c();i=S(),n=v("div"),w&&w.c(),g=S(),u=v("footer"),P=v("hr"),C=S(),U=v("h2"),F=O("Let's co-create a sustainable future!"),Q=S(),ae(H.$$.fragment),V=S(),I=v("p"),R=O("Samuel Plumppu \xA9 2015 - "),W=O(ne),z=S(),G=v("div"),E=v("a"),K=v("img"),J=S(),k=v("a"),D=v("img"),this.h()},l(r){Ae('[data-svelte="svelte-rnwlgi"]',document.head).forEach(p),t=A(r),a=b(r,"HEADER",{class:!0});var x=y(a);re(s.$$.fragment,x),f=A(x),o=b(x,"NAV",{class:!0});var _=y(o);for(let ee=0;ee<h.length;ee+=1)h[ee].l(_);_.forEach(p),x.forEach(p),i=A(r),n=b(r,"DIV",{class:!0});var Y=y(n);w&&w.l(Y),Y.forEach(p),g=A(r),u=b(r,"FOOTER",{class:!0});var $=y(u);P=b($,"HR",{class:!0,id:!0}),C=A($),U=b($,"H2",{class:!0});var ce=y(U);F=T(ce,"Let's co-create a sustainable future!"),ce.forEach(p),Q=A($),re(H.$$.fragment,$),V=A($),I=b($,"P",{class:!0});var Z=y(I);R=T(Z,"Samuel Plumppu \xA9 2015 - "),W=T(Z,ne),Z.forEach(p),z=A($),G=b($,"DIV",{class:!0});var j=y(G);E=b(j,"A",{href:!0,target:!0,rel:!0,"aria-label":!0});var fe=y(E);K=b(fe,"IMG",{src:!0,alt:!0,class:!0}),fe.forEach(p),J=A(j),k=b(j,"A",{href:!0,target:!0,rel:!0,"aria-label":!0});var ue=y(k);D=b(ue,"IMG",{src:!0,alt:!0,class:!0}),ue.forEach(p),j.forEach(p),$.forEach(p),this.h()},h(){c(o,"class","flex space-x-4"),c(a,"class","flex flex-1 justify-between p-4 max-w-6xl mx-auto"),c(n,"class","container mx-auto max-w-6xl p-4"),c(P,"class","my-16 max-w-sm mx-auto border-ming"),c(P,"id","contact"),c(U,"class","text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none mb-6"),c(I,"class","mt-8"),he(K.src,oe="/images/github.svg")||c(K,"src",oe),c(K,"alt","GitHub"),c(K,"class","w-8 h-8"),c(E,"href","https://github.com/Greenheart"),c(E,"target","_blank"),c(E,"rel","noopener noreferrer"),c(E,"aria-label","See my profile on GitHub"),he(D.src,ie="/images/linkedin.svg")||c(D,"src",ie),c(D,"alt","LinkedIn"),c(D,"class","w-8 h-8"),c(k,"href","https://linkedin.com/in/samuelplumppu"),c(k,"target","_blank"),c(k,"rel","noopener noreferrer"),c(k,"aria-label","Connect with me on LinkedIn"),c(G,"class","flex justify-center space-x-4 items-center my-8"),c(u,"class","container px-4 pb-4 text-center max-w-6xl mx-auto font-light")},m(r,m){L(r,t,m),L(r,a,m),le(s,a,null),d(a,f),d(a,o);for(let x=0;x<h.length;x+=1)h[x].m(o,null);L(r,i,m),L(r,n,m),w&&w.m(n,null),L(r,g,m),L(r,u,m),d(u,P),d(u,C),d(u,U),d(U,F),d(u,Q),le(H,u,null),d(u,V),d(u,I),d(I,R),d(I,W),d(u,z),d(u,G),d(G,E),d(E,K),d(G,J),d(G,k),d(k,D),M=!0},p(r,[m]){(!M||m&0)&&e!==(e=`
        `+me+`
    `)&&(document.title=e);const x={};if(m&4&&(x.$$scope={dirty:m,ctx:r}),s.$set(x),m&1){B=r[0];let _;for(_=0;_<B.length;_+=1){const Y=de(r,B,_);h[_]?(h[_].p(Y,m),N(h[_],1)):(h[_]=_e(Y),h[_].c(),N(h[_],1),h[_].m(o,null))}for(Ke(),_=B.length;_<h.length;_+=1)xe(_);Le()}w&&w.p&&(!M||m&4)&&Pe(w,X,r,r[2],M?He(X,r[2],m,null):Ge(r[2]),null)},i(r){if(!M){N(s.$$.fragment,r);for(let m=0;m<B.length;m+=1)N(h[m]);N(w,r),N(H.$$.fragment,r),M=!0}},o(r){q(s.$$.fragment,r),h=h.filter(Boolean);for(let m=0;m<h.length;m+=1)q(h[m]);q(w,r),q(H.$$.fragment,r),M=!1},d(r){r&&p(t),r&&p(a),se(s),Ie(h,r),r&&p(i),r&&p(n),w&&w.d(r),r&&p(g),r&&p(u),se(H)}}}function Fe(l,e,t){let{$$slots:a={},$$scope:s}=e;const f=[{text:"Blog",href:"/blog"}];return l.$$set=o=>{"$$scope"in o&&t(2,s=o.$$scope)},[f,a,s]}class We extends ve{constructor(e){super(),be(this,e,Fe,Ce,we,{})}}export{We as default};
