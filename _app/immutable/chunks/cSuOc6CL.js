import"./DsnmJJEf.js";import"./CzfqKHad.js";import{f as l,s as r,b as i,a as u,c as k,r as f}from"./w_B2EKov.js";import{h as d}from"./xYCquVpF.js";import{l as m,s as h}from"./C7WgT5_Y.js";import{B as g}from"./BtA9EKY3.js";const a={title:"Rename File Extensions with Node.js",date:"2021-07-27T00:00:00.000Z",tags:["Code Snippet","JavaScript","Node.js"]},{title:F,date:j,tags:R}=a;var y=l('<p>A Node.js script to rename the file extension for all matching files in a directory.</p> <pre class="language-js"><!></pre>',1);function D(t,p){const e=m(p,["children","$$slots","$$events","$$legacy"]);g(t,h(()=>e,()=>a,{children:(o,b)=>{var n=y(),s=r(i(n),2),c=k(s);d(c,()=>`<code class="language-js"><span class="token hashbang comment">#!/usr/bin/env node</span>

<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> readdir<span class="token punctuation">,</span> rename <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'fs/promises'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> resolve <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'path'</span>

<span class="token comment">/**
 * Rename the file extension for all matching files in a directory.
 *
 * @param &#123;string&#125; baseDir Where to find the files.
 * @param &#123;function&#125; shouldRenameFile Filter function that should return a
 *   boolean for whether or not to rename the file.
 * @param &#123;string&#125; beforeExt The file extension to replace. If &#96;beforeExt&#96; is an
 *   empty string, the &#96;afterExt&#96; will be added to the original filename.
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

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>renamedCount<span class="token punctuation">)</span></code>`),f(s),u(o,n)},$$slots:{default:!0}}))}export{D as default,a as metadata};
