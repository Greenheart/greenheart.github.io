import{S as a,i as n,s,B as e,j as t,m as o,o as r,p,q as c,x as l,u as i,v as u,R as h,e as d,t as k,k as m,c as g,a as w,g as f,d as y,n as b,b as v,f as E,D as $}from"../../chunks/vendor-d3a3d99b.js";import{P as C}from"../../chunks/_post-53688762.js";import{L as T}from"../../chunks/Link-14343103.js";import"../../chunks/Tags-f1d3d92f.js";function P(a){let n;return{c(){n=k("Bitwarden")},l(a){n=f(a,"Bitwarden")},m(a,s){E(a,n,s)},d(a){a&&y(n)}}}function R(a){let n;return{c(){n=k("Web Crypto API")},l(a){n=f(a,"Web Crypto API")},m(a,s){E(a,n,s)},d(a){a&&y(n)}}}function x(a){let n;return{c(){n=k("Remainder operator")},l(a){n=f(a,"Remainder operator")},m(a,s){E(a,n,s)},d(a){a&&y(n)}}}function j(a){let n;return{c(){n=k("do…while")},l(a){n=f(a,"do…while")},m(a,s){E(a,n,s)},d(a){a&&y(n)}}}function A(a){let n;return{c(){n=k("pagecrypt")},l(a){n=f(a,"pagecrypt")},m(a,s){E(a,n,s)},d(a){a&&y(n)}}}function N(a){let n;return{c(){n=k("browsers newer than 2018")},l(a){n=f(a,"browsers newer than 2018")},m(a,s){E(a,n,s)},d(a){a&&y(n)}}}function S(a){let n,s,e,p,c,h,C,S,D,H,O,L,I,W,U,G,M,V,B,J,q,F,_,z,Y,Z,K,Q,X,aa,na,sa,ea,ta,oa,ra,pa,ca,la,ia,ua,ha,da,ka,ma,ga,wa,fa,ya,ba,va,Ea,$a,Ca,Ta,Pa,Ra,xa,ja,Aa,Na,Sa,Da,Ha,Oa,La,Ia,Wa,Ua,Ga,Ma,Va,Ba,Ja,qa,Fa,_a,za,Ya,Za,Ka,Qa,Xa,an,nn,sn,en,tn,on,rn,pn,cn,ln,un,hn,dn,kn,mn,gn,wn,fn,yn,bn,vn,En,$n,Cn,Tn,Pn,Rn,xn,jn,An,Nn,Sn,Dn,Hn,On,Ln,In,Wn,Un,Gn,Mn,Vn,Bn,Jn,qn,Fn,_n,zn,Yn,Zn,Kn,Qn,Xn,as,ns,ss,es,ts,os,rs,ps,cs,ls,is,us,hs,ds,ks,ms,gs,ws,fs,ys,bs,vs,Es,$s,Cs,Ts,Ps,Rs,xs,js,As,Ns,Ss,Ds,Hs,Os,Ls,Is,Ws,Us,Gs,Ms,Vs,Bs,Js,qs,Fs,_s,zs;return e=new T({props:{href:"https://bitwarden.com/",rel:"nofollow",$$slots:{default:[P]},$$scope:{ctx:a}}}),S=new T({props:{href:"https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto",rel:"nofollow",$$slots:{default:[R]},$$scope:{ctx:a}}}),rn=new T({props:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder",rel:"nofollow",$$slots:{default:[x]},$$scope:{ctx:a}}}),rs=new T({props:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while",rel:"nofollow",$$slots:{default:[j]},$$scope:{ctx:a}}}),Rs=new T({props:{href:"https://github.com/greenheart/pagecrypt",rel:"nofollow",$$slots:{default:[A]},$$scope:{ctx:a}}}),Is=new T({props:{href:"https://caniuse.com/cryptography",rel:"nofollow",$$slots:{default:[N]},$$scope:{ctx:a}}}),{c(){n=d("p"),s=k("Strong, cryptographically safe passwords are an essential foundation to live a secure digital life. With an open source password manager like "),t(e.$$.fragment),p=k(", it’s never been more accessible to generate unique, strong passwords for every online account, and then storing them in your password vault."),c=m(),h=d("p"),C=k("But what if you want to add password generation directly to your web app? That’s recently been getting much more accessible as well thanks to the standard "),t(S.$$.fragment),D=k("."),H=m(),O=d("h2"),L=k("Use the Web Crypto API in Any Environment"),I=m(),W=d("p"),U=k("In order to make the generator work in both browsers and Node.js, we need an abstraction. This ensures we can use the same Web Crypto API no matter where the generator is used."),G=m(),M=d("pre"),V=m(),B=d("h2"),J=k("Creating a Password by Selecting Random Characters"),q=m(),F=d("p"),_=k("The way our generator is going to work is by creating an array of a given length (matching the password length), and then filling it with random characters."),z=m(),Y=d("p"),Z=k("First, we’ll import the crypto abstraction and define the character set we want to use."),K=m(),Q=d("pre"),X=m(),aa=d("p"),na=k("Using "),sa=d("code"),ea=k("Array.from()"),ta=k(", we can provide a "),oa=d("code"),ra=k("Array.prototype.map()"),pa=k(" callback to add the random characters directly while the array is created. Then, we just have to join the password into a string and we’re done - except for the details of "),ca=d("code"),la=k("getRandomCharacter()"),ia=k(" which we’ll cover soon."),ua=m(),ha=d("pre"),da=m(),ka=d("h2"),ma=k("Cryptographically Secure Random Number Generation"),ga=m(),wa=d("p"),fa=k("Let’s implement "),ya=d("code"),ba=k("getRandomCharacter()"),va=k(". To ensure the characters are randomized in a cryptographically safe way, we use "),Ea=d("code"),$a=k("crypto.getRandomValues()"),Ca=k(". This is "),Ta=d("em"),Pa=k("strongly"),Ra=k(" recommended instead of using "),xa=d("code"),ja=k("Math.random()"),Aa=k(" which may seem simpler, but is not secure enough for our needs."),Na=m(),Sa=d("pre"),Da=m(),Ha=d("p"),Oa=k("To explain "),La=d("code"),Ia=k("getRandomCharacter()"),Wa=k(", let’s start by thinking about the character set again. Since our character set has less than 256 characters (8 bytes), we can pass an "),Ua=d("code"),Ga=k("Uint8Array"),Ma=k(" to "),Va=d("code"),Ba=k("crypto.getRandomValues()"),Ja=k(", to fill it with random numbers. In our case, this will be a single number between 0-255 since we created an "),qa=d("code"),Fa=k("Uint8Array"),_a=k(" with "),za=d("code"),Ya=k("1"),Za=k(" byte. We’ll retrieve the "),Ka=d("code"),Qa=k("randomNumber"),Xa=k(" and can now use this to calculate the random index from where to pick the next character."),an=m(),nn=d("p"),sn=k("Since our character set contains less than 256 characters, we need to ensure the random number isn’t out of range to avoid crashes. This can be done using "),en=d("code"),tn=k("%"),on=k(" - the "),t(rn.$$.fragment),pn=k(", which allows us to use a random number potentially much larger than our character set length, and always get a value within our desired range."),cn=m(),ln=d("p"),un=k("However, this method has a severe security issue - it will cause the first characters in our set to appear more often, greatly reducing the password security. This is caused by the fact that the result when using the remainder operator will restart from 0 once "),hn=d("code"),dn=k("randomNumber"),kn=k(" has reached another multiple of the character set length. "),mn=d("code"),gn=k("39 % 40"),wn=k(" yields "),fn=d("code"),yn=k("39"),bn=k(" and "),vn=d("code"),En=k("40 % 40"),$n=k(" yields "),Cn=d("code"),Tn=k("0"),Pn=k(", meaning we’ll get the last character and then the first character again. This repeats for larger multiples such as 80 and so on, until the final iteration where we’ve reached the final multiple before 255. Then the remaining indices will add additional probability to pick the fist characters with the lowest indices."),Rn=m(),xn=d("pre"),jn=m(),An=d("h2"),Nn=k("Ensure Random Characters Have Equal Distribution"),Sn=m(),Dn=d("p"),Hn=k("To work around the issue caused by the remainder operator, we can only allow random numbers that are smaller than the maximum multiple of the character set length that is in turn smaller than 255 (the maximum possible value for our random number when using an "),On=d("code"),Ln=k("Uint8Array"),In=k(")."),Wn=m(),Un=d("p"),Gn=k("To calculate the maximum value, we can use the following expression:"),Mn=m(),Vn=d("pre"),Bn=m(),Jn=d("p"),qn=k("To give an example, this means that a character set length of 60 would yield the maximum random number 240, since 240 is the largest number that is both less than 256 and evenly divisible by 60."),Fn=m(),_n=d("pre"),zn=m(),Yn=d("p"),Zn=k("Getting back to implementing "),Kn=d("code"),Qn=k("getRandomCharacter()"),Xn=k(", the next step would be to ensure that the we regenerate "),as=d("code"),ns=k("randomNumber"),ss=k(" as long as it’s larger than our maximum allowed value. In the final version of "),es=d("code"),ts=k("getRandomCharacter()"),os=k(", we’ll use a "),t(rs.$$.fragment),ps=k(" loop to achieve this:"),cs=m(),ls=d("pre"),is=m(),us=d("h2"),hs=k("The Finished Password Generator"),ds=m(),ks=d("p"),ms=k("Here’s how the generator looks when all pieces come together!"),gs=m(),ws=d("pre"),fs=m(),ys=d("h2"),bs=k("Generate Passwords with "),vs=d("code"),Es=k("pagecrypt"),$s=k(" in Your Next Project"),Cs=m(),Ts=d("p"),Ps=k("This post is based on what I learned while creating the "),t(Rs.$$.fragment),xs=k(" package which implements the code from this blog post, along with other related Web Crypto utilities. Since pagecrypt is just a standard ES module, it works with any JavaScript framework both on the frontend and the backend."),js=m(),As=d("p"),Ns=k("Install it with"),Ss=m(),Ds=d("pre"),Hs=m(),Os=d("p"),Ls=k("Then, you can generate random passwords both in "),t(Is.$$.fragment),Ws=k(" and Node.js newer than v15."),Us=m(),Gs=d("pre"),Ms=m(),Vs=d("p"),Bs=d("strong"),Js=k("Enjoy!"),qs=m(),Fs=d("p"),_s=k("Let me know if you have any suggestions and further improvements!"),this.h()},l(a){n=g(a,"P",{});var t=w(n);s=f(t,"Strong, cryptographically safe passwords are an essential foundation to live a secure digital life. With an open source password manager like "),o(e.$$.fragment,t),p=f(t,", it’s never been more accessible to generate unique, strong passwords for every online account, and then storing them in your password vault."),t.forEach(y),c=b(a),h=g(a,"P",{});var r=w(h);C=f(r,"But what if you want to add password generation directly to your web app? That’s recently been getting much more accessible as well thanks to the standard "),o(S.$$.fragment,r),D=f(r,"."),r.forEach(y),H=b(a),O=g(a,"H2",{});var l=w(O);L=f(l,"Use the Web Crypto API in Any Environment"),l.forEach(y),I=b(a),W=g(a,"P",{});var i=w(W);U=f(i,"In order to make the generator work in both browsers and Node.js, we need an abstraction. This ensures we can use the same Web Crypto API no matter where the generator is used."),i.forEach(y),G=b(a),M=g(a,"PRE",{class:!0}),w(M).forEach(y),V=b(a),B=g(a,"H2",{});var u=w(B);J=f(u,"Creating a Password by Selecting Random Characters"),u.forEach(y),q=b(a),F=g(a,"P",{});var d=w(F);_=f(d,"The way our generator is going to work is by creating an array of a given length (matching the password length), and then filling it with random characters."),d.forEach(y),z=b(a),Y=g(a,"P",{});var k=w(Y);Z=f(k,"First, we’ll import the crypto abstraction and define the character set we want to use."),k.forEach(y),K=b(a),Q=g(a,"PRE",{class:!0}),w(Q).forEach(y),X=b(a),aa=g(a,"P",{});var m=w(aa);na=f(m,"Using "),sa=g(m,"CODE",{});var v=w(sa);ea=f(v,"Array.from()"),v.forEach(y),ta=f(m,", we can provide a "),oa=g(m,"CODE",{});var E=w(oa);ra=f(E,"Array.prototype.map()"),E.forEach(y),pa=f(m," callback to add the random characters directly while the array is created. Then, we just have to join the password into a string and we’re done - except for the details of "),ca=g(m,"CODE",{});var $=w(ca);la=f($,"getRandomCharacter()"),$.forEach(y),ia=f(m," which we’ll cover soon."),m.forEach(y),ua=b(a),ha=g(a,"PRE",{class:!0}),w(ha).forEach(y),da=b(a),ka=g(a,"H2",{});var T=w(ka);ma=f(T,"Cryptographically Secure Random Number Generation"),T.forEach(y),ga=b(a),wa=g(a,"P",{});var P=w(wa);fa=f(P,"Let’s implement "),ya=g(P,"CODE",{});var R=w(ya);ba=f(R,"getRandomCharacter()"),R.forEach(y),va=f(P,". To ensure the characters are randomized in a cryptographically safe way, we use "),Ea=g(P,"CODE",{});var x=w(Ea);$a=f(x,"crypto.getRandomValues()"),x.forEach(y),Ca=f(P,". This is "),Ta=g(P,"EM",{});var j=w(Ta);Pa=f(j,"strongly"),j.forEach(y),Ra=f(P," recommended instead of using "),xa=g(P,"CODE",{});var A=w(xa);ja=f(A,"Math.random()"),A.forEach(y),Aa=f(P," which may seem simpler, but is not secure enough for our needs."),P.forEach(y),Na=b(a),Sa=g(a,"PRE",{class:!0}),w(Sa).forEach(y),Da=b(a),Ha=g(a,"P",{});var N=w(Ha);Oa=f(N,"To explain "),La=g(N,"CODE",{});var zs=w(La);Ia=f(zs,"getRandomCharacter()"),zs.forEach(y),Wa=f(N,", let’s start by thinking about the character set again. Since our character set has less than 256 characters (8 bytes), we can pass an "),Ua=g(N,"CODE",{});var Ys=w(Ua);Ga=f(Ys,"Uint8Array"),Ys.forEach(y),Ma=f(N," to "),Va=g(N,"CODE",{});var Zs=w(Va);Ba=f(Zs,"crypto.getRandomValues()"),Zs.forEach(y),Ja=f(N,", to fill it with random numbers. In our case, this will be a single number between 0-255 since we created an "),qa=g(N,"CODE",{});var Ks=w(qa);Fa=f(Ks,"Uint8Array"),Ks.forEach(y),_a=f(N," with "),za=g(N,"CODE",{});var Qs=w(za);Ya=f(Qs,"1"),Qs.forEach(y),Za=f(N," byte. We’ll retrieve the "),Ka=g(N,"CODE",{});var Xs=w(Ka);Qa=f(Xs,"randomNumber"),Xs.forEach(y),Xa=f(N," and can now use this to calculate the random index from where to pick the next character."),N.forEach(y),an=b(a),nn=g(a,"P",{});var ae=w(nn);sn=f(ae,"Since our character set contains less than 256 characters, we need to ensure the random number isn’t out of range to avoid crashes. This can be done using "),en=g(ae,"CODE",{});var ne=w(en);tn=f(ne,"%"),ne.forEach(y),on=f(ae," - the "),o(rn.$$.fragment,ae),pn=f(ae,", which allows us to use a random number potentially much larger than our character set length, and always get a value within our desired range."),ae.forEach(y),cn=b(a),ln=g(a,"P",{});var se=w(ln);un=f(se,"However, this method has a severe security issue - it will cause the first characters in our set to appear more often, greatly reducing the password security. This is caused by the fact that the result when using the remainder operator will restart from 0 once "),hn=g(se,"CODE",{});var ee=w(hn);dn=f(ee,"randomNumber"),ee.forEach(y),kn=f(se," has reached another multiple of the character set length. "),mn=g(se,"CODE",{});var te=w(mn);gn=f(te,"39 % 40"),te.forEach(y),wn=f(se," yields "),fn=g(se,"CODE",{});var oe=w(fn);yn=f(oe,"39"),oe.forEach(y),bn=f(se," and "),vn=g(se,"CODE",{});var re=w(vn);En=f(re,"40 % 40"),re.forEach(y),$n=f(se," yields "),Cn=g(se,"CODE",{});var pe=w(Cn);Tn=f(pe,"0"),pe.forEach(y),Pn=f(se,", meaning we’ll get the last character and then the first character again. This repeats for larger multiples such as 80 and so on, until the final iteration where we’ve reached the final multiple before 255. Then the remaining indices will add additional probability to pick the fist characters with the lowest indices."),se.forEach(y),Rn=b(a),xn=g(a,"PRE",{class:!0}),w(xn).forEach(y),jn=b(a),An=g(a,"H2",{});var ce=w(An);Nn=f(ce,"Ensure Random Characters Have Equal Distribution"),ce.forEach(y),Sn=b(a),Dn=g(a,"P",{});var le=w(Dn);Hn=f(le,"To work around the issue caused by the remainder operator, we can only allow random numbers that are smaller than the maximum multiple of the character set length that is in turn smaller than 255 (the maximum possible value for our random number when using an "),On=g(le,"CODE",{});var ie=w(On);Ln=f(ie,"Uint8Array"),ie.forEach(y),In=f(le,")."),le.forEach(y),Wn=b(a),Un=g(a,"P",{});var ue=w(Un);Gn=f(ue,"To calculate the maximum value, we can use the following expression:"),ue.forEach(y),Mn=b(a),Vn=g(a,"PRE",{class:!0}),w(Vn).forEach(y),Bn=b(a),Jn=g(a,"P",{});var he=w(Jn);qn=f(he,"To give an example, this means that a character set length of 60 would yield the maximum random number 240, since 240 is the largest number that is both less than 256 and evenly divisible by 60."),he.forEach(y),Fn=b(a),_n=g(a,"PRE",{class:!0}),w(_n).forEach(y),zn=b(a),Yn=g(a,"P",{});var de=w(Yn);Zn=f(de,"Getting back to implementing "),Kn=g(de,"CODE",{});var ke=w(Kn);Qn=f(ke,"getRandomCharacter()"),ke.forEach(y),Xn=f(de,", the next step would be to ensure that the we regenerate "),as=g(de,"CODE",{});var me=w(as);ns=f(me,"randomNumber"),me.forEach(y),ss=f(de," as long as it’s larger than our maximum allowed value. In the final version of "),es=g(de,"CODE",{});var ge=w(es);ts=f(ge,"getRandomCharacter()"),ge.forEach(y),os=f(de,", we’ll use a "),o(rs.$$.fragment,de),ps=f(de," loop to achieve this:"),de.forEach(y),cs=b(a),ls=g(a,"PRE",{class:!0}),w(ls).forEach(y),is=b(a),us=g(a,"H2",{});var we=w(us);hs=f(we,"The Finished Password Generator"),we.forEach(y),ds=b(a),ks=g(a,"P",{});var fe=w(ks);ms=f(fe,"Here’s how the generator looks when all pieces come together!"),fe.forEach(y),gs=b(a),ws=g(a,"PRE",{class:!0}),w(ws).forEach(y),fs=b(a),ys=g(a,"H2",{});var ye=w(ys);bs=f(ye,"Generate Passwords with "),vs=g(ye,"CODE",{});var be=w(vs);Es=f(be,"pagecrypt"),be.forEach(y),$s=f(ye," in Your Next Project"),ye.forEach(y),Cs=b(a),Ts=g(a,"P",{});var ve=w(Ts);Ps=f(ve,"This post is based on what I learned while creating the "),o(Rs.$$.fragment,ve),xs=f(ve," package which implements the code from this blog post, along with other related Web Crypto utilities. Since pagecrypt is just a standard ES module, it works with any JavaScript framework both on the frontend and the backend."),ve.forEach(y),js=b(a),As=g(a,"P",{});var Ee=w(As);Ns=f(Ee,"Install it with"),Ee.forEach(y),Ss=b(a),Ds=g(a,"PRE",{class:!0}),w(Ds).forEach(y),Hs=b(a),Os=g(a,"P",{});var $e=w(Os);Ls=f($e,"Then, you can generate random passwords both in "),o(Is.$$.fragment,$e),Ws=f($e," and Node.js newer than v15."),$e.forEach(y),Us=b(a),Gs=g(a,"PRE",{class:!0}),w(Gs).forEach(y),Ms=b(a),Vs=g(a,"P",{});var Ce=w(Vs);Bs=g(Ce,"STRONG",{});var Te=w(Bs);Js=f(Te,"Enjoy!"),Te.forEach(y),Ce.forEach(y),qs=b(a),Fs=g(a,"P",{});var Pe=w(Fs);_s=f(Pe,"Let me know if you have any suggestions and further improvements!"),Pe.forEach(y),this.h()},h(){v(M,"class","language-js"),v(Q,"class","language-js"),v(ha,"class","language-js"),v(Sa,"class","language-js"),v(xn,"class","language-js"),v(Vn,"class","language-js"),v(_n,"class","language-js"),v(ls,"class","language-js"),v(ws,"class","language-js"),v(Ds,"class","language-shell"),v(Gs,"class","language-js")},m(a,t){E(a,n,t),$(n,s),r(e,n,null),$(n,p),E(a,c,t),E(a,h,t),$(h,C),r(S,h,null),$(h,D),E(a,H,t),E(a,O,t),$(O,L),E(a,I,t),E(a,W,t),$(W,U),E(a,G,t),E(a,M,t),M.innerHTML='<code class="language-js"><span class="token comment">// crypto.js</span>\n\n<span class="token comment">/**\n * Get a reference to the Web Crypto API in any modern JS environment\n *\n * @returns An object implementing the Web Crypto API.\n */</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">loadCrypto</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>\n        <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">\'undefined\'</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>crypto<span class="token punctuation">)</span> <span class="token operator">||</span>\n        <span class="token punctuation">(</span>globalThis <span class="token operator">&amp;&amp;</span> globalThis<span class="token punctuation">.</span>crypto<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n        <span class="token comment">// Running in browsers released after 2017, and other</span>\n        <span class="token comment">// runtimes with &#96;globalThis&#96; like Deno or CloudFlare Workers</span>\n        <span class="token keyword">const</span> crypto <span class="token operator">=</span> window<span class="token punctuation">.</span>crypto <span class="token operator">||</span> globalThis<span class="token punctuation">.</span>crypto\n\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span>crypto<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n        <span class="token comment">// Running in Node.js >= 15</span>\n        <span class="token keyword">const</span> nodeCrypto <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'crypto\'</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> nodeCrypto<span class="token punctuation">.</span>webcrypto\n    <span class="token punctuation">&#125;</span>\n<span class="token punctuation">&#125;</span>\n\n<span class="token keyword">const</span> crypto <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadCrypto</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> crypto</code>',E(a,V,t),E(a,B,t),$(B,J),E(a,q,t),E(a,F,t),$(F,_),E(a,z,t),E(a,Y,t),$(Y,Z),E(a,K,t),E(a,Q,t),Q.innerHTML='<code class="language-js"><span class="token comment">// generate-password.js</span>\n\n<span class="token keyword">import</span> crypto <span class="token keyword">from</span> <span class="token string">\'./crypto\'</span>\n\n<span class="token keyword">const</span> digits <span class="token operator">=</span> <span class="token string">\'0123456789\'</span>\n<span class="token keyword">const</span> upper <span class="token operator">=</span> <span class="token string">\'ABCDEFGHIJKLMNOPQRSTUVWXYZ\'</span>\n<span class="token keyword">const</span> lower <span class="token operator">=</span> upper<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token constant">CHAR_SET</span> <span class="token operator">=</span> digits <span class="token operator">+</span> upper <span class="token operator">+</span> lower</code>',E(a,X,t),E(a,aa,t),$(aa,na),$(aa,sa),$(sa,ea),$(aa,ta),$(aa,oa),$(oa,ra),$(aa,pa),$(aa,ca),$(ca,la),$(aa,ia),E(a,ua,t),E(a,ha,t),ha.innerHTML='<code class="language-js"><span class="token comment">/**\n * Generate a random password of a given length.\n *\n * @param &#123;number&#125; length The password length.\n * @param &#123;string&#125; characters The set of characters to pick from.\n * @returns A random password.\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generatePassword</span><span class="token punctuation">(</span><span class="token parameter">length <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">,</span> characters <span class="token operator">=</span> <span class="token constant">CHAR_SET</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> length <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token function">getRandomCharacter</span><span class="token punctuation">(</span>characters<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">&#125;</span></code>',E(a,da,t),E(a,ka,t),$(ka,ma),E(a,ga,t),E(a,wa,t),$(wa,fa),$(wa,ya),$(ya,ba),$(wa,va),$(wa,Ea),$(Ea,$a),$(wa,Ca),$(wa,Ta),$(Ta,Pa),$(wa,Ra),$(wa,xa),$(xa,ja),$(wa,Aa),E(a,Na,t),E(a,Sa,t),Sa.innerHTML='<code class="language-js">\n<span class="token comment">/**\n * Get a random character from a given set of characters.\n *\n * @param &#123;string&#125; characters The set of characters to pick from.\n * @returns A random character.\n */</span>\n<span class="token keyword">function</span> <span class="token function">getRandomCharacter</span><span class="token punctuation">(</span><span class="token parameter">characters</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">const</span> randomNumber <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">getRandomValues</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n    <span class="token keyword">return</span> characters<span class="token punctuation">[</span>randomNumber <span class="token operator">%</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span></code>',E(a,Da,t),E(a,Ha,t),$(Ha,Oa),$(Ha,La),$(La,Ia),$(Ha,Wa),$(Ha,Ua),$(Ua,Ga),$(Ha,Ma),$(Ha,Va),$(Va,Ba),$(Ha,Ja),$(Ha,qa),$(qa,Fa),$(Ha,_a),$(Ha,za),$(za,Ya),$(Ha,Za),$(Ha,Ka),$(Ka,Qa),$(Ha,Xa),E(a,an,t),E(a,nn,t),$(nn,sn),$(nn,en),$(en,tn),$(nn,on),r(rn,nn,null),$(nn,pn),E(a,cn,t),E(a,ln,t),$(ln,un),$(ln,hn),$(hn,dn),$(ln,kn),$(ln,mn),$(mn,gn),$(ln,wn),$(ln,fn),$(fn,yn),$(ln,bn),$(ln,vn),$(vn,En),$(ln,$n),$(ln,Cn),$(Cn,Tn),$(ln,Pn),E(a,Rn,t),E(a,xn,t),xn.innerHTML='<code class="language-js"><span class="token keyword">const</span> characters <span class="token operator">=</span> <span class="token string">\'...\'</span>\n<span class="token keyword">const</span> characterLength <span class="token operator">=</span> <span class="token number">40</span>\n\n<span class="token keyword">const</span> randomNumber1 <span class="token operator">=</span> <span class="token number">39</span>\n<span class="token keyword">const</span> randomNumber2 <span class="token operator">=</span> <span class="token number">40</span>\n\n\n<span class="token keyword">const</span> index1 <span class="token operator">=</span> randomNumber1 <span class="token operator">%</span> characterLength <span class="token comment">// 39 % 40 = 39</span>\n<span class="token keyword">const</span> index2 <span class="token operator">=</span> randomNumber2 <span class="token operator">%</span> characterLength <span class="token comment">// 40 % 40 = 0</span>\n\n<span class="token keyword">const</span> first <span class="token operator">=</span> characters<span class="token punctuation">[</span>index1<span class="token punctuation">]</span> <span class="token comment">// Returns the last character</span>\n<span class="token keyword">const</span> second <span class="token operator">=</span> characters<span class="token punctuation">[</span>index2<span class="token punctuation">]</span> <span class="token comment">// Returns the first character!</span></code>',E(a,jn,t),E(a,An,t),$(An,Nn),E(a,Sn,t),E(a,Dn,t),$(Dn,Hn),$(Dn,On),$(On,Ln),$(Dn,In),E(a,Wn,t),E(a,Un,t),$(Un,Gn),E(a,Mn,t),E(a,Vn,t),Vn.innerHTML='<code class="language-js"><span class="token keyword">const</span> max <span class="token operator">=</span> <span class="token number">256</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">256</span> <span class="token operator">%</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">)</span></code>',E(a,Bn,t),E(a,Jn,t),$(Jn,qn),E(a,Fn,t),E(a,_n,t),_n.innerHTML='<code class="language-js"><span class="token keyword">const</span> max <span class="token operator">=</span> <span class="token number">256</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">256</span> <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token comment">// 240</span></code>',E(a,zn,t),E(a,Yn,t),$(Yn,Zn),$(Yn,Kn),$(Kn,Qn),$(Yn,Xn),$(Yn,as),$(as,ns),$(Yn,ss),$(Yn,es),$(es,ts),$(Yn,os),r(rs,Yn,null),$(Yn,ps),E(a,cs,t),E(a,ls,t),ls.innerHTML='<code class="language-js"><span class="token comment">/**\n * Get a random character from a given set of characters.\n *\n * @param &#123;string&#125; characters The set of characters to pick from.\n * @returns A random character.\n */</span>\n<span class="token keyword">function</span> <span class="token function">getRandomCharacter</span><span class="token punctuation">(</span><span class="token parameter">characters</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">let</span> randomNumber\n    <span class="token comment">/**\n     * Due to the repeating nature of results from the remainder\n     * operator, we potentially need to regenerate the random number\n     * several times. This is required to ensure all characters have\n     * the same probability to get picked. Otherwise, the first\n     * characters would appear more often, resulting in a weaker\n     * password security.\n     */</span>\n    <span class="token keyword">do</span> <span class="token punctuation">&#123;</span>\n        randomNumber <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">getRandomValues</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n    <span class="token punctuation">&#125;</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>randomNumber <span class="token operator">>=</span> <span class="token number">256</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">256</span> <span class="token operator">%</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> characters<span class="token punctuation">[</span>randomNumber <span class="token operator">%</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span></code>',E(a,is,t),E(a,us,t),$(us,hs),E(a,ds,t),E(a,ks,t),$(ks,ms),E(a,gs,t),E(a,ws,t),ws.innerHTML='<code class="language-js"><span class="token comment">// generate-password.js</span>\n\n<span class="token keyword">import</span> crypto <span class="token keyword">from</span> <span class="token string">\'./crypto\'</span>\n\n<span class="token keyword">const</span> digits <span class="token operator">=</span> <span class="token string">\'0123456789\'</span>\n<span class="token keyword">const</span> upper <span class="token operator">=</span> <span class="token string">\'ABCDEFGHIJKLMNOPQRSTUVWXYZ\'</span>\n<span class="token keyword">const</span> lower <span class="token operator">=</span> upper<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token constant">CHAR_SET</span> <span class="token operator">=</span> digits <span class="token operator">+</span> upper <span class="token operator">+</span> lower\n\n<span class="token comment">/**\n * Generate a random password of a given length.\n *\n * @param &#123;number&#125; length The password length.\n * @param &#123;string&#125; characters The set of characters to pick from.\n * @returns A random password.\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generatePassword</span><span class="token punctuation">(</span><span class="token parameter">length <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">,</span> characters <span class="token operator">=</span> <span class="token constant">CHAR_SET</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> length <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token function">getRandomCharacter</span><span class="token punctuation">(</span>characters<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">&#125;</span>\n\n<span class="token comment">/**\n * Get a random character from a given set of characters.\n *\n * @param &#123;string&#125; characters The set of characters to pick from.\n * @returns A random character.\n */</span>\n<span class="token keyword">function</span> <span class="token function">getRandomCharacter</span><span class="token punctuation">(</span><span class="token parameter">characters</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">let</span> randomNumber\n    <span class="token comment">/**\n     * Due to the repeating nature of results from the remainder\n     * operator, we potentially need to regenerate the random number\n     * several times. This is required to ensure all characters have\n     * the same probability to get picked. Otherwise, the first\n     * characters would appear more often, resulting in a weaker\n     * password security.\n     */</span>\n    <span class="token keyword">do</span> <span class="token punctuation">&#123;</span>\n        randomNumber <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">getRandomValues</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n    <span class="token punctuation">&#125;</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>randomNumber <span class="token operator">>=</span> <span class="token number">256</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">256</span> <span class="token operator">%</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> characters<span class="token punctuation">[</span>randomNumber <span class="token operator">%</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">]</span>\n<span class="token punctuation">&#125;</span></code>',E(a,fs,t),E(a,ys,t),$(ys,bs),$(ys,vs),$(vs,Es),$(ys,$s),E(a,Cs,t),E(a,Ts,t),$(Ts,Ps),r(Rs,Ts,null),$(Ts,xs),E(a,js,t),E(a,As,t),$(As,Ns),E(a,Ss,t),E(a,Ds,t),Ds.innerHTML='<code class="language-shell"><span class="token function">npm</span> i pagecrypt</code>',E(a,Hs,t),E(a,Os,t),$(Os,Ls),r(Is,Os,null),$(Os,Ws),E(a,Us,t),E(a,Gs,t),Gs.innerHTML='<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> generatePassword <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'pagecrypt/core\'</span>\n\n<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token function">generatePassword</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span></code>',E(a,Ms,t),E(a,Vs,t),$(Vs,Bs),$(Bs,Js),E(a,qs,t),E(a,Fs,t),$(Fs,_s),zs=!0},p(a,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:a}),e.$set(s);const t={};2&n&&(t.$$scope={dirty:n,ctx:a}),S.$set(t);const o={};2&n&&(o.$$scope={dirty:n,ctx:a}),rn.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:a}),rs.$set(r);const p={};2&n&&(p.$$scope={dirty:n,ctx:a}),Rs.$set(p);const c={};2&n&&(c.$$scope={dirty:n,ctx:a}),Is.$set(c)},i(a){zs||(l(e.$$.fragment,a),l(S.$$.fragment,a),l(rn.$$.fragment,a),l(rs.$$.fragment,a),l(Rs.$$.fragment,a),l(Is.$$.fragment,a),zs=!0)},o(a){i(e.$$.fragment,a),i(S.$$.fragment,a),i(rn.$$.fragment,a),i(rs.$$.fragment,a),i(Rs.$$.fragment,a),i(Is.$$.fragment,a),zs=!1},d(a){a&&y(n),u(e),a&&y(c),a&&y(h),u(S),a&&y(H),a&&y(O),a&&y(I),a&&y(W),a&&y(G),a&&y(M),a&&y(V),a&&y(B),a&&y(q),a&&y(F),a&&y(z),a&&y(Y),a&&y(K),a&&y(Q),a&&y(X),a&&y(aa),a&&y(ua),a&&y(ha),a&&y(da),a&&y(ka),a&&y(ga),a&&y(wa),a&&y(Na),a&&y(Sa),a&&y(Da),a&&y(Ha),a&&y(an),a&&y(nn),u(rn),a&&y(cn),a&&y(ln),a&&y(Rn),a&&y(xn),a&&y(jn),a&&y(An),a&&y(Sn),a&&y(Dn),a&&y(Wn),a&&y(Un),a&&y(Mn),a&&y(Vn),a&&y(Bn),a&&y(Jn),a&&y(Fn),a&&y(_n),a&&y(zn),a&&y(Yn),u(rs),a&&y(cs),a&&y(ls),a&&y(is),a&&y(us),a&&y(ds),a&&y(ks),a&&y(gs),a&&y(ws),a&&y(fs),a&&y(ys),a&&y(Cs),a&&y(Ts),u(Rs),a&&y(js),a&&y(As),a&&y(Ss),a&&y(Ds),a&&y(Hs),a&&y(Os),u(Is),a&&y(Us),a&&y(Gs),a&&y(Ms),a&&y(Vs),a&&y(qs),a&&y(Fs)}}}function D(a){let n,s;const h=[a[0],H];let d={$$slots:{default:[S]},$$scope:{ctx:a}};for(let t=0;t<h.length;t+=1)d=e(d,h[t]);return n=new C({props:d}),{c(){t(n.$$.fragment)},l(a){o(n.$$.fragment,a)},m(a,e){r(n,a,e),s=!0},p(a,[s]){const e=1&s?p(h,[1&s&&c(a[0]),0&s&&c(H)]):{};2&s&&(e.$$scope={dirty:s,ctx:a}),n.$set(e)},i(a){s||(l(n.$$.fragment,a),s=!0)},o(a){i(n.$$.fragment,a),s=!1},d(a){u(n,a)}}}const H={title:"Use the Web Crypto API to Generate a Cryptographically Secure Password in the Browser and Node.js",date:"2021-07-28T00:00:00.000Z",tags:["JavaScript","Web Crypto API","Node.js"]};function O(a,n,s){return a.$$set=a=>{s(0,n=e(e({},n),h(a)))},[n=h(n)]}export default class extends a{constructor(a){super(),n(this,a,O,D,s,{})}}export{H as metadata};
