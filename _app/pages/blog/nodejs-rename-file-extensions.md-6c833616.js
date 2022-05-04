import{S as g,i as y,s as x,D as i,x as w,y as b,z as E,A as v,B as u,r as j,p as F,C as $,R as k,e as f,t as R,k as D,c as m,a as d,h as C,d as l,m as N,b as P,g as r,F as T,n as S}from"../../chunks/index-419acfd0.js";import{P as A}from"../../chunks/_post-cce714e6.js";import"../../chunks/constants-fb6fef14.js";import"../../chunks/Tags-f86444bb.js";import"../../chunks/utils-a0fbfa6c.js";import"../../chunks/Link-1be3b9b3.js";function q(c){let n,e,p,t,a=`<code class="language-js"><span class="token hashbang comment">#!/usr/bin/env node</span>

<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> readdir<span class="token punctuation">,</span> rename <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'fs/promises'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> resolve <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'path'</span>

<span class="token comment">/**
 * Rename the file extension for all matching files in a directory.
 *
 * @param &#123;string&#125; baseDir Where to find the files.
 * @param &#123;function&#125; shouldRenameFile Filter function that should
 *   return a boolean for whether or not to rename the file.
 * @param &#123;string&#125; beforeExt The file extension to replace. If
 *   &#96;beforeExt&#96; is an empty string, the &#96;afterExt&#96; will be added to
 *   the original filename.
 * @param &#123;string&#125; afterExt The new file extension to use instead.
 * @returns The number of files renamed.
 */</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">updateFileExtensions</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span>
    baseDir<span class="token punctuation">,</span>
    shouldRenameFile<span class="token punctuation">,</span>
    beforeExt<span class="token punctuation">,</span>
    afterExt<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> files <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">readdir</span><span class="token punctuation">(</span>baseDir<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>shouldRenameFile<span class="token punctuation">)</span>

    <span class="token keyword">const</span> renamed <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
        files<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">const</span> before <span class="token operator">=</span> <span class="token function">resolve</span><span class="token punctuation">(</span>baseDir<span class="token punctuation">,</span> f<span class="token punctuation">)</span>
            <span class="token keyword">const</span> after <span class="token operator">=</span> beforeExt<span class="token punctuation">.</span>length
                <span class="token operator">?</span> before<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>beforeExt<span class="token punctuation">,</span> afterExt<span class="token punctuation">)</span>
                <span class="token operator">:</span> before <span class="token operator">+</span> afterExt
            <span class="token keyword">return</span> <span class="token function">rename</span><span class="token punctuation">(</span>before<span class="token punctuation">,</span> after<span class="token punctuation">)</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">return</span> renamed<span class="token punctuation">.</span>length
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> renamedCount <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">updateFileExtensions</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">baseDir</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'images'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">shouldRenameFile</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token operator">=></span> f<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">64</span><span class="token punctuation">,</span>
    <span class="token literal-property property">beforeExt</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">afterExt</span><span class="token operator">:</span> <span class="token string">'.jpg'</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>renamedCount<span class="token punctuation">)</span></code>`;return{c(){n=f("p"),e=R("A Node.js script to rename the file extension for all matching files in a directory."),p=D(),t=f("pre"),this.h()},l(s){n=m(s,"P",{});var o=d(n);e=C(o,"A Node.js script to rename the file extension for all matching files in a directory."),o.forEach(l),p=N(s),t=m(s,"PRE",{class:!0});var _=d(t);_.forEach(l),this.h()},h(){P(t,"class","language-js")},m(s,o){r(s,n,o),T(n,e),r(s,p,o),r(s,t,o),t.innerHTML=a},p:S,d(s){s&&l(n),s&&l(p),s&&l(t)}}}function z(c){let n,e;const p=[c[0],h];let t={$$slots:{default:[q]},$$scope:{ctx:c}};for(let a=0;a<p.length;a+=1)t=i(t,p[a]);return n=new A({props:t}),{c(){w(n.$$.fragment)},l(a){b(n.$$.fragment,a)},m(a,s){E(n,a,s),e=!0},p(a,[s]){const o=s&1?v(p,[s&1&&u(a[0]),s&0&&u(h)]):{};s&2&&(o.$$scope={dirty:s,ctx:a}),n.$set(o)},i(a){e||(j(n.$$.fragment,a),e=!0)},o(a){F(n.$$.fragment,a),e=!1},d(a){$(n,a)}}}const h={title:"Rename File Extensions with Node.js",date:"2021-07-27T00:00:00.000Z",tags:["Code Snippet","JavaScript","Node.js"]};function B(c,n,e){return c.$$set=p=>{e(0,n=i(i({},n),k(p)))},n=k(n),[n]}class Z extends g{constructor(n){super(),y(this,n,B,z,x,{})}}export{Z as default,h as metadata};
