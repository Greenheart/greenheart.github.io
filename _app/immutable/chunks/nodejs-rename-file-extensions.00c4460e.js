import{s as h,B as i,C as k,n as g}from"./scheduler.d8bdb3a2.js";import{S as x,i as y,r as w,u as b,v,d as E,t as j,w as C,g as f,s as $,K as F,h as m,C as R,c as D,j as P,L as T,f as r,k as N,a as u}from"./index.676e8c1b.js";import{g as S,a as d}from"./Link.e38fcbd0.js";import{P as H}from"./_post.9e2f40df.js";function q(c){let n,p="A Node.js script to rename the file extension for all matching files in a directory.",e,t,s,o=`<code class="language-js"><span class="token hashbang comment">#!/usr/bin/env node</span>

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

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>renamedCount<span class="token punctuation">)</span></code>`;return{c(){n=f("p"),n.textContent=p,e=$(),t=f("pre"),s=new F(!1),this.h()},l(a){n=m(a,"P",{"data-svelte-h":!0}),R(n)!=="svelte-fs7a6n"&&(n.textContent=p),e=D(a),t=m(a,"PRE",{class:!0});var l=P(t);s=T(l,!1),l.forEach(r),this.h()},h(){s.a=null,N(t,"class","language-js")},m(a,l){u(a,n,l),u(a,e,l),u(a,t,l),s.m(o,t)},p:g,d(a){a&&(r(n),r(e),r(t))}}}function A(c){let n,p;const e=[c[0],_];let t={$$slots:{default:[q]},$$scope:{ctx:c}};for(let s=0;s<e.length;s+=1)t=i(t,e[s]);return n=new H({props:t}),{c(){w(n.$$.fragment)},l(s){b(n.$$.fragment,s)},m(s,o){v(n,s,o),p=!0},p(s,[o]){const a=o&1?S(e,[o&1&&d(s[0]),o&0&&d(_)]):{};o&2&&(a.$$scope={dirty:o,ctx:s}),n.$set(a)},i(s){p||(E(n.$$.fragment,s),p=!0)},o(s){j(n.$$.fragment,s),p=!1},d(s){C(n,s)}}}const _={title:"Rename File Extensions with Node.js",date:"2021-07-27T00:00:00.000Z",tags:["Code Snippet","JavaScript","Node.js"]};function B(c,n,p){return c.$$set=e=>{p(0,n=i(i({},n),k(e)))},n=k(n),[n]}class W extends x{constructor(n){super(),y(this,n,B,A,h,{})}}export{W as default,_ as metadata};
