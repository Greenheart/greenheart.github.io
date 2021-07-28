import{S as n,i as s,s as a,B as t,j as p,m as e,o,p as c,q as l,x as u,u as r,v as i,Q as k,e as f,t as d,k as m,c as h,a as g,g as x,d as b,n as w,b as y,f as E,D as $,G as j}from"../../chunks/vendor-fb5041ca.js";import{P as v}from"../../chunks/_post-a68d3f67.js";import"../../chunks/Tags-4c25b7f6.js";function F(n){let s,a,t,p;return{c(){s=f("p"),a=d("A Node.js script to rename the file extension for all matching files in a directory."),t=m(),p=f("pre"),this.h()},l(n){s=h(n,"P",{});var e=g(s);a=x(e,"A Node.js script to rename the file extension for all matching files in a directory."),e.forEach(b),t=w(n),p=h(n,"PRE",{class:!0}),g(p).forEach(b),this.h()},h(){y(p,"class","language-js")},m(n,e){E(n,s,e),$(s,a),E(n,t,e),E(n,p,e),p.innerHTML='<code class="language-js"><span class="token hashbang comment">#!/usr/bin/env node</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> readdir<span class="token punctuation">,</span> rename <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'fs/promises\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> resolve <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'path\'</span>\n\n<span class="token comment">/**\n * Rename the file extension for all matching files in a directory.\n *\n * @param &#123;string&#125; baseDir Where to find the files.\n * @param &#123;function&#125; shouldRenameFile Filter function that should\n *   return a boolean for whether or not to rename the file.\n * @param &#123;string&#125; beforeExt The file extension to replace. If\n *   &#96;beforeExt&#96; is an empty string, the &#96;afterExt&#96; will be added to\n *   the original filename.\n * @param &#123;string&#125; afterExt The new file extension to use instead.\n * @returns The number of files renamed.\n */</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">updateFileExtensions</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span>\n    baseDir<span class="token punctuation">,</span>\n    shouldRenameFile<span class="token punctuation">,</span>\n    beforeExt<span class="token punctuation">,</span>\n    afterExt<span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    <span class="token keyword">const</span> files <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">readdir</span><span class="token punctuation">(</span>baseDir<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>shouldRenameFile<span class="token punctuation">)</span>\n\n    <span class="token keyword">const</span> renamed <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>\n        files<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n            <span class="token keyword">const</span> before <span class="token operator">=</span> <span class="token function">resolve</span><span class="token punctuation">(</span>baseDir<span class="token punctuation">,</span> f<span class="token punctuation">)</span>\n            <span class="token keyword">const</span> after <span class="token operator">=</span> beforeExt<span class="token punctuation">.</span>length\n                <span class="token operator">?</span> before<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>beforeExt<span class="token punctuation">,</span> afterExt<span class="token punctuation">)</span>\n                <span class="token operator">:</span> before <span class="token operator">+</span> afterExt\n            <span class="token keyword">return</span> <span class="token function">rename</span><span class="token punctuation">(</span>before<span class="token punctuation">,</span> after<span class="token punctuation">)</span>\n        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> renamed<span class="token punctuation">.</span>length\n<span class="token punctuation">&#125;</span>\n\n<span class="token keyword">const</span> renamedCount <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">updateFileExtensions</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n    baseDir<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'images\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">shouldRenameFile</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token operator">=></span> f<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">64</span><span class="token punctuation">,</span>\n    beforeExt<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    afterExt<span class="token operator">:</span> <span class="token string">\'.jpg\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>renamedCount<span class="token punctuation">)</span></code>'},p:j,d(n){n&&b(s),n&&b(t),n&&b(p)}}}function R(n){let s,a;const k=[n[0],D];let f={$$slots:{default:[F]},$$scope:{ctx:n}};for(let p=0;p<k.length;p+=1)f=t(f,k[p]);return s=new v({props:f}),{c(){p(s.$$.fragment)},l(n){e(s.$$.fragment,n)},m(n,t){o(s,n,t),a=!0},p(n,[a]){const t=1&a?c(k,[1&a&&l(n[0]),0&a&&l(D)]):{};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(u(s.$$.fragment,n),a=!0)},o(n){r(s.$$.fragment,n),a=!1},d(n){i(s,n)}}}const D={title:"Rename File Extensions with Node.js",date:"2021-07-27T00:00:00.000Z",tags:["Code Snippet","JavaScript","Node.js"]};function T(n,s,a){return n.$$set=n=>{a(0,s=t(t({},s),k(n)))},[s=k(s)]}export default class extends n{constructor(n){super(),s(this,n,T,R,a,{})}}export{D as metadata};
