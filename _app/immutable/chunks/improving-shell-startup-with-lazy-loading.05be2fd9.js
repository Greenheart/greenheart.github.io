import{S as ms,i as ds,s as us,a0 as Te,y as ss,z as ts,A as as,a1 as fs,a2 as Qe,g as ns,d as os,B as ls,a3 as Ve,k as i,q as a,a as v,l as r,m as p,r as n,h as t,c as k,n as Ye,b as m,E as s}from"./index.dcc872af.js";import{P as hs}from"./_post.bb479317.js";import{L as _s}from"./Link.cdc7cac1.js";function ys(E){let o;return{c(){o=a("Oh My Zsh")},l(d){o=n(d,"Oh My Zsh")},m(d,u){m(d,o,u)},d(d){d&&t(o)}}}function vs(E){let o,d,u,z,c,y,x,W,S,ne,X,w,is=`<code class="language-shell"><span class="token comment"># ~/.zshrc</span>
<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>nvm <span class="token function">git</span><span class="token punctuation">)</span> <span class="token comment"># 1</span>
zstyle <span class="token string">':omz:plugins:nvm'</span> lazy <span class="token function">yes</span> <span class="token comment"># 2</span>

<span class="token builtin class-name">source</span> <span class="token variable">$ZSH</span>/oh-my-zsh.sh <span class="token comment"># 3</span></code>`,F,g,L,oe,P,le,ie,re,b,pe,T,ce,me,de,A,ue,J,h,fe,I,he,_e,Z,ye,ve,j,ke,ge,K,f,Ee,R,$e,ze,q,we,Le,U,be,Oe,B,xe,Se,G,Ce,De,Q,C,He,V,D,Me,Y,O,rs=`<code class="language-shell"><span class="token comment"># ~/.zshrc</span>
<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>nvm <span class="token function">git</span><span class="token punctuation">)</span>

<span class="token comment"># This excludes any subdirectory of "/your-project/"</span>
<span class="token comment"># =~ is used for RegExp matching.</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token environment constant">$PWD</span> <span class="token operator">=~</span> <span class="token string">"/your-project/"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  zstyle <span class="token string">':omz:plugins:nvm'</span> lazy <span class="token function">yes</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">source</span> <span class="token variable">$ZSH</span>/oh-my-zsh.sh</code>`,ee,H,Pe,se;return u=new _s({props:{href:"https://ohmyz.sh/",rel:"nofollow",$$slots:{default:[ys]},$$scope:{ctx:E}}}),{c(){o=i("p"),d=a("Using "),ss(u.$$.fragment),z=a(" is usually a great experience. However, adding heavy plugins (like "),c=i("code"),y=a("nvm"),x=a(") to load at startup time can really hurt performance. Luckily there’s a way to lazy load them."),W=v(),S=i("h2"),ne=a("A Simple Solution"),X=v(),w=i("pre"),F=v(),g=i("ol"),L=i("li"),oe=a("Add the nvm plugin to your "),P=i("code"),le=a(".zshrc"),ie=a(" file."),re=v(),b=i("li"),pe=a("Enable lazy loading for the "),T=i("code"),ce=a("nvm"),me=a(" plugin."),de=v(),A=i("li"),ue=a("Make sure you source Oh My Zsh at the end."),J=v(),h=i("p"),fe=a("This method reduced my shell startup time from "),I=i("em"),he=a("~1.5 s"),_e=a(" to "),Z=i("em"),ye=a("~200 ms"),ve=a(". A "),j=i("strong"),ke=a("huge"),ge=a(" improvement for a common action I perform many times daily."),K=v(),f=i("p"),Ee=a("However, I soon realised some of my projects had external dependencies that relied on commands like "),R=i("code"),$e=a("node"),ze=a(" and "),q=i("code"),we=a("npm"),Le=a(" (and other package managers) to always be defined in the shell environment. This caused weird crashes, since lazy loading "),U=i("code"),be=a("nvm"),Oe=a(" means commands like "),B=i("code"),xe=a("node"),Se=a(" and "),G=i("code"),Ce=a("npm"),De=a(" only gets enabled when they first got used."),Q=v(),C=i("h2"),He=a("Conditionally Lazy Loading for Specific Directories"),V=v(),D=i("p"),Me=a("Adding an if statement to avoid lazy loading in specific directories:"),Y=v(),O=i("pre"),ee=v(),H=i("p"),Pe=a("Hopefully this saves some time, allowing you move at the speed of thought 💭"),this.h()},l(e){o=r(e,"P",{});var l=p(o);d=n(l,"Using "),ts(u.$$.fragment,l),z=n(l," is usually a great experience. However, adding heavy plugins (like "),c=r(l,"CODE",{});var N=p(c);y=n(N,"nvm"),N.forEach(t),x=n(l,") to load at startup time can really hurt performance. Luckily there’s a way to lazy load them."),l.forEach(t),W=k(e),S=r(e,"H2",{});var Ae=p(S);ne=n(Ae,"A Simple Solution"),Ae.forEach(t),X=k(e),w=r(e,"PRE",{class:!0});var ps=p(w);ps.forEach(t),F=k(e),g=r(e,"OL",{});var M=p(g);L=r(M,"LI",{});var te=p(L);oe=n(te,"Add the nvm plugin to your "),P=r(te,"CODE",{});var Ie=p(P);le=n(Ie,".zshrc"),Ie.forEach(t),ie=n(te," file."),te.forEach(t),re=k(M),b=r(M,"LI",{});var ae=p(b);pe=n(ae,"Enable lazy loading for the "),T=r(ae,"CODE",{});var Ze=p(T);ce=n(Ze,"nvm"),Ze.forEach(t),me=n(ae," plugin."),ae.forEach(t),de=k(M),A=r(M,"LI",{});var je=p(A);ue=n(je,"Make sure you source Oh My Zsh at the end."),je.forEach(t),M.forEach(t),J=k(e),h=r(e,"P",{});var $=p(h);fe=n($,"This method reduced my shell startup time from "),I=r($,"EM",{});var Re=p(I);he=n(Re,"~1.5 s"),Re.forEach(t),_e=n($," to "),Z=r($,"EM",{});var qe=p(Z);ye=n(qe,"~200 ms"),qe.forEach(t),ve=n($,". A "),j=r($,"STRONG",{});var Ue=p(j);ke=n(Ue,"huge"),Ue.forEach(t),ge=n($," improvement for a common action I perform many times daily."),$.forEach(t),K=k(e),f=r(e,"P",{});var _=p(f);Ee=n(_,"However, I soon realised some of my projects had external dependencies that relied on commands like "),R=r(_,"CODE",{});var Be=p(R);$e=n(Be,"node"),Be.forEach(t),ze=n(_," and "),q=r(_,"CODE",{});var Ge=p(q);we=n(Ge,"npm"),Ge.forEach(t),Le=n(_," (and other package managers) to always be defined in the shell environment. This caused weird crashes, since lazy loading "),U=r(_,"CODE",{});var Ne=p(U);be=n(Ne,"nvm"),Ne.forEach(t),Oe=n(_," means commands like "),B=r(_,"CODE",{});var We=p(B);xe=n(We,"node"),We.forEach(t),Se=n(_," and "),G=r(_,"CODE",{});var Xe=p(G);Ce=n(Xe,"npm"),Xe.forEach(t),De=n(_," only gets enabled when they first got used."),_.forEach(t),Q=k(e),C=r(e,"H2",{});var Fe=p(C);He=n(Fe,"Conditionally Lazy Loading for Specific Directories"),Fe.forEach(t),V=k(e),D=r(e,"P",{});var Je=p(D);Me=n(Je,"Adding an if statement to avoid lazy loading in specific directories:"),Je.forEach(t),Y=k(e),O=r(e,"PRE",{class:!0});var cs=p(O);cs.forEach(t),ee=k(e),H=r(e,"P",{});var Ke=p(H);Pe=n(Ke,"Hopefully this saves some time, allowing you move at the speed of thought 💭"),Ke.forEach(t),this.h()},h(){Ye(w,"class","language-shell"),Ye(O,"class","language-shell")},m(e,l){m(e,o,l),s(o,d),as(u,o,null),s(o,z),s(o,c),s(c,y),s(o,x),m(e,W,l),m(e,S,l),s(S,ne),m(e,X,l),m(e,w,l),w.innerHTML=is,m(e,F,l),m(e,g,l),s(g,L),s(L,oe),s(L,P),s(P,le),s(L,ie),s(g,re),s(g,b),s(b,pe),s(b,T),s(T,ce),s(b,me),s(g,de),s(g,A),s(A,ue),m(e,J,l),m(e,h,l),s(h,fe),s(h,I),s(I,he),s(h,_e),s(h,Z),s(Z,ye),s(h,ve),s(h,j),s(j,ke),s(h,ge),m(e,K,l),m(e,f,l),s(f,Ee),s(f,R),s(R,$e),s(f,ze),s(f,q),s(q,we),s(f,Le),s(f,U),s(U,be),s(f,Oe),s(f,B),s(B,xe),s(f,Se),s(f,G),s(G,Ce),s(f,De),m(e,Q,l),m(e,C,l),s(C,He),m(e,V,l),m(e,D,l),s(D,Me),m(e,Y,l),m(e,O,l),O.innerHTML=rs,m(e,ee,l),m(e,H,l),s(H,Pe),se=!0},p(e,l){const N={};l&2&&(N.$$scope={dirty:l,ctx:e}),u.$set(N)},i(e){se||(ns(u.$$.fragment,e),se=!0)},o(e){os(u.$$.fragment,e),se=!1},d(e){e&&t(o),ls(u),e&&t(W),e&&t(S),e&&t(X),e&&t(w),e&&t(F),e&&t(g),e&&t(J),e&&t(h),e&&t(K),e&&t(f),e&&t(Q),e&&t(C),e&&t(V),e&&t(D),e&&t(Y),e&&t(O),e&&t(ee),e&&t(H)}}}function ks(E){let o,d;const u=[E[0],es];let z={$$slots:{default:[vs]},$$scope:{ctx:E}};for(let c=0;c<u.length;c+=1)z=Te(z,u[c]);return o=new hs({props:z}),{c(){ss(o.$$.fragment)},l(c){ts(o.$$.fragment,c)},m(c,y){as(o,c,y),d=!0},p(c,[y]){const x=y&1?fs(u,[y&1&&Qe(c[0]),y&0&&Qe(es)]):{};y&2&&(x.$$scope={dirty:y,ctx:c}),o.$set(x)},i(c){d||(ns(o.$$.fragment,c),d=!0)},o(c){os(o.$$.fragment,c),d=!1},d(c){ls(o,c)}}}const es={title:"Improving Oh My Zsh Startup Time with Lazy Loading",date:"2023-03-23T00:00:00.000Z",tags:["DX","Code Snippet"]};function gs(E,o,d){return E.$$set=u=>{d(0,o=Te(Te({},o),Ve(u)))},o=Ve(o),[o]}class ws extends ms{constructor(o){super(),ds(this,o,gs,ks,us,{})}}export{ws as default,es as metadata};
