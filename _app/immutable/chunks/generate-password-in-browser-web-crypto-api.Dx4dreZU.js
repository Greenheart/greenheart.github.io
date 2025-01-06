import{a as P,t as W}from"./disclose-version.D5g0bMZL.js";import"./legacy.CjxW4MSY.js";import{s as a,f as I,c as n,r as s,n as G}from"./runtime.D9GYYi2j.js";import{h as e}from"./html.Bz0YsFcd.js";import{l as U,s as $}from"./props.DQfrSCu4.js";import{B as E}from"./BlogLayoutWrapper.Dw_fYpOP.js";const L={title:"Use the Web Crypto API to Generate a Cryptographically Secure Password in the Browser and Node.js",date:"2021-07-28T00:00:00.000Z",tags:["JavaScript","Web Crypto API","Node.js"]};var H=W('<p>Strong, cryptographically safe passwords are an essential foundation to live a secure digital life. With an open source password manager like <a href="https://bitwarden.com/" rel="nofollow">Bitwarden</a>, it’s never been more accessible to generate unique, strong passwords for every online account, and then storing them in your password vault.</p> <p>But what if you want to add password generation directly to your web app? That’s recently been getting much more accessible as well thanks to the standard <a href="https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto" rel="nofollow">Web Crypto API</a>.</p> <h2>Use the Web Crypto API in Any Environment</h2> <p>In order to make the generator work in both browsers and Node.js, we need an abstraction. This ensures we can use the same Web Crypto API no matter where the generator is used.</p> <pre class="language-js"><!></pre> <h2>Creating a Password by Selecting Random Characters</h2> <p>The way our generator is going to work is by creating an array of a given length (matching the password length), and then filling it with random characters.</p> <p>First, we’ll import the crypto abstraction and define the character set we want to use.</p> <pre class="language-js"><!></pre> <p>Using <code>Array.from()</code>, we can provide a <code>Array.prototype.map()</code> callback to add the random characters directly while the array is created. Then, we just have to join the password into a string and we’re done - except for the details of <code>getRandomCharacter()</code> which we’ll cover soon.</p> <pre class="language-js"><!></pre> <h2>Cryptographically Secure Random Number Generation</h2> <p>Let’s implement <code>getRandomCharacter()</code>. To ensure the characters are randomized in a cryptographically safe way, we use <code>crypto.getRandomValues()</code>. This is <em>strongly</em> recommended instead of using <code>Math.random()</code> which may seem simpler, but is not secure enough for our needs.</p> <pre class="language-js"><!></pre> <p>To explain <code>getRandomCharacter()</code>, let’s start by thinking about the character set again. Since our character set has less than 256 characters (8 bytes), we can pass an <code>Uint8Array</code> to <code>crypto.getRandomValues()</code>, to fill it with random numbers. In our case, this will be a single number between 0-255 since we created an <code>Uint8Array</code> with <code>1</code> byte. We’ll retrieve the <code>randomNumber</code> and can now use this to calculate the random index from where to pick the next character.</p> <p>Since our character set contains less than 256 characters, we need to ensure the random number isn’t out of range to avoid crashes. This can be done using <code>%</code> - the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder" rel="nofollow">Remainder operator</a>, which allows us to use a random number potentially much larger than our character set length, and always get a value within our desired range.</p> <p>However, this method has a severe security issue - it will cause the first characters in our set to appear more often, greatly reducing the password security. This is caused by the fact that the result when using the remainder operator will restart from 0 once <code>randomNumber</code> has reached another multiple of the character set length. <code>39 % 40</code> yields <code>39</code> and <code>40 % 40</code> yields <code>0</code>, meaning we’ll get the last character and then the first character again. This repeats for larger multiples such as 80 and so on, until the final iteration where we’ve reached the final multiple before 255. Then the remaining indices will add additional probability to pick the fist characters with the lowest indices.</p> <pre class="language-js"><!></pre> <h2>Ensure Random Characters Have Equal Distribution</h2> <p>To work around the issue caused by the remainder operator, we can only allow random numbers that are smaller than the maximum multiple of the character set length that is in turn smaller than 255 (the maximum possible value for our random number when using an <code>Uint8Array</code>).</p> <p>To calculate the maximum value, we can use the following expression:</p> <pre class="language-js"><!></pre> <p>To give an example, this means that a character set length of 60 would yield the maximum random number 240, since 240 is the largest number that is both less than 256 and evenly divisible by 60.</p> <pre class="language-js"><!></pre> <p>Getting back to implementing <code>getRandomCharacter()</code>, the next step would be to ensure that the we regenerate <code>randomNumber</code> as long as it’s larger than our maximum allowed value. In the final version of <code>getRandomCharacter()</code>, we’ll use a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while" rel="nofollow">do…while</a> loop to achieve this:</p> <pre class="language-js"><!></pre> <h2>The Finished Password Generator</h2> <p>Here’s how the generator looks when all pieces come together!</p> <pre class="language-js"><!></pre> <h2>Generate Passwords with <code>pagecrypt</code> in Your Next Project</h2> <p>This post is based on what I learned while creating the <a href="https://github.com/greenheart/pagecrypt" rel="nofollow">pagecrypt</a> package which implements the code from this blog post, along with other related Web Crypto utilities. Since pagecrypt is just a standard ES module, it works with any JavaScript framework both on the frontend and the backend.</p> <p>Install it with</p> <pre class="language-shell"><!></pre> <p>Then, you can generate random passwords both in <a href="https://caniuse.com/cryptography" rel="nofollow">browsers newer than 2018</a> and Node.js newer than v15.</p> <pre class="language-js"><!></pre> <p><strong>Enjoy!</strong></p> <p>Let me know if you have any suggestions and further improvements!</p>',1);function q(g,w){const y=U(w,["children","$$slots","$$events","$$legacy"]);E(g,$(()=>y,L,{children:(f,B)=>{var h=H(),t=a(I(h),8),b=n(t);e(b,()=>`<code class="language-js"><span class="token comment">// crypto.js</span>

<span class="token comment">/**
 * Get a reference to the Web Crypto API in any modern JS environment
 *
 * @returns An object implementing the Web Crypto API.
 */</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">loadCrypto</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">'undefined'</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>crypto<span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token punctuation">(</span>globalThis <span class="token operator">&amp;&amp;</span> globalThis<span class="token punctuation">.</span>crypto<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// Running in browsers released after 2017, and other</span>
        <span class="token comment">// runtimes with &#96;globalThis&#96; like Deno or CloudFlare Workers</span>
        <span class="token keyword">const</span> crypto <span class="token operator">=</span> window<span class="token punctuation">.</span>crypto <span class="token operator">||</span> globalThis<span class="token punctuation">.</span>crypto

        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span>crypto<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// Running in Node.js >= 15</span>
        <span class="token keyword">const</span> nodeCrypto <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'crypto'</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> nodeCrypto<span class="token punctuation">.</span>webcrypto
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> crypto <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadCrypto</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> crypto</code>`),s(t);var o=a(t,8),v=n(o);e(v,()=>`<code class="language-js"><span class="token comment">// generate-password.js</span>

<span class="token keyword">import</span> crypto <span class="token keyword">from</span> <span class="token string">'./crypto'</span>

<span class="token keyword">const</span> digits <span class="token operator">=</span> <span class="token string">'0123456789'</span>
<span class="token keyword">const</span> upper <span class="token operator">=</span> <span class="token string">'ABCDEFGHIJKLMNOPQRSTUVWXYZ'</span>
<span class="token keyword">const</span> lower <span class="token operator">=</span> upper<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">CHAR_SET</span> <span class="token operator">=</span> digits <span class="token operator">+</span> upper <span class="token operator">+</span> lower</code>`),s(o);var p=a(o,4),_=n(p);e(_,()=>`<code class="language-js"><span class="token comment">/**
 * Generate a random password of a given length.
 *
 * @param &#123;number&#125; length The password length.
 * @param &#123;string&#125; characters The set of characters to pick from.
 * @returns A random password.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generatePassword</span><span class="token punctuation">(</span><span class="token parameter">length <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">,</span> characters <span class="token operator">=</span> <span class="token constant">CHAR_SET</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> length <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        <span class="token function">getRandomCharacter</span><span class="token punctuation">(</span>characters<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`),s(p);var r=a(p,6),C=n(r);e(C,()=>`<code class="language-js">
<span class="token comment">/**
 * Get a random character from a given set of characters.
 *
 * @param &#123;string&#125; characters The set of characters to pick from.
 * @returns A random character.
 */</span>
<span class="token keyword">function</span> <span class="token function">getRandomCharacter</span><span class="token punctuation">(</span><span class="token parameter">characters</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> randomNumber <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">getRandomValues</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> characters<span class="token punctuation">[</span>randomNumber <span class="token operator">%</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`),s(r);var c=a(r,8),T=n(c);e(T,()=>`<code class="language-js"><span class="token keyword">const</span> characters <span class="token operator">=</span> <span class="token string">'...'</span>
<span class="token keyword">const</span> characterLength <span class="token operator">=</span> <span class="token number">40</span>

<span class="token keyword">const</span> randomNumber1 <span class="token operator">=</span> <span class="token number">39</span>
<span class="token keyword">const</span> randomNumber2 <span class="token operator">=</span> <span class="token number">40</span>


<span class="token keyword">const</span> index1 <span class="token operator">=</span> randomNumber1 <span class="token operator">%</span> characterLength <span class="token comment">// 39 % 40 = 39</span>
<span class="token keyword">const</span> index2 <span class="token operator">=</span> randomNumber2 <span class="token operator">%</span> characterLength <span class="token comment">// 40 % 40 = 0</span>

<span class="token keyword">const</span> first <span class="token operator">=</span> characters<span class="token punctuation">[</span>index1<span class="token punctuation">]</span> <span class="token comment">// Returns the last character</span>
<span class="token keyword">const</span> second <span class="token operator">=</span> characters<span class="token punctuation">[</span>index2<span class="token punctuation">]</span> <span class="token comment">// Returns the first character!</span></code>`),s(c);var l=a(c,8),j=n(l);e(j,()=>'<code class="language-js"><span class="token keyword">const</span> max <span class="token operator">=</span> <span class="token number">256</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">256</span> <span class="token operator">%</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">)</span></code>'),s(l);var u=a(l,4),R=n(u);e(R,()=>'<code class="language-js"><span class="token keyword">const</span> max <span class="token operator">=</span> <span class="token number">256</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">256</span> <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token comment">// 240</span></code>'),s(u);var i=a(u,4),A=n(i);e(A,()=>`<code class="language-js"><span class="token comment">/**
 * Get a random character from a given set of characters.
 *
 * @param &#123;string&#125; characters The set of characters to pick from.
 * @returns A random character.
 */</span>
<span class="token keyword">function</span> <span class="token function">getRandomCharacter</span><span class="token punctuation">(</span><span class="token parameter">characters</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> randomNumber
    <span class="token comment">/**
     * Due to the repeating nature of results from the remainder
     * operator, we potentially need to regenerate the random number
     * several times. This is required to ensure all characters have
     * the same probability to get picked. Otherwise, the first
     * characters would appear more often, resulting in a weaker
     * password security.
     */</span>
    <span class="token keyword">do</span> <span class="token punctuation">&#123;</span>
        randomNumber <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">getRandomValues</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>randomNumber <span class="token operator">>=</span> <span class="token number">256</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">256</span> <span class="token operator">%</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> characters<span class="token punctuation">[</span>randomNumber <span class="token operator">%</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`),s(i);var k=a(i,6),N=n(k);e(N,()=>`<code class="language-js"><span class="token comment">// generate-password.js</span>

<span class="token keyword">import</span> crypto <span class="token keyword">from</span> <span class="token string">'./crypto'</span>

<span class="token keyword">const</span> digits <span class="token operator">=</span> <span class="token string">'0123456789'</span>
<span class="token keyword">const</span> upper <span class="token operator">=</span> <span class="token string">'ABCDEFGHIJKLMNOPQRSTUVWXYZ'</span>
<span class="token keyword">const</span> lower <span class="token operator">=</span> upper<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">CHAR_SET</span> <span class="token operator">=</span> digits <span class="token operator">+</span> upper <span class="token operator">+</span> lower

<span class="token comment">/**
 * Generate a random password of a given length.
 *
 * @param &#123;number&#125; length The password length.
 * @param &#123;string&#125; characters The set of characters to pick from.
 * @returns A random password.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generatePassword</span><span class="token punctuation">(</span><span class="token parameter">length <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">,</span> characters <span class="token operator">=</span> <span class="token constant">CHAR_SET</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> length <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        <span class="token function">getRandomCharacter</span><span class="token punctuation">(</span>characters<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/**
 * Get a random character from a given set of characters.
 *
 * @param &#123;string&#125; characters The set of characters to pick from.
 * @returns A random character.
 */</span>
<span class="token keyword">function</span> <span class="token function">getRandomCharacter</span><span class="token punctuation">(</span><span class="token parameter">characters</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> randomNumber
    <span class="token comment">/**
     * Due to the repeating nature of results from the remainder
     * operator, we potentially need to regenerate the random number
     * several times. This is required to ensure all characters have
     * the same probability to get picked. Otherwise, the first
     * characters would appear more often, resulting in a weaker
     * password security.
     */</span>
    <span class="token keyword">do</span> <span class="token punctuation">&#123;</span>
        randomNumber <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">getRandomValues</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>randomNumber <span class="token operator">>=</span> <span class="token number">256</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">256</span> <span class="token operator">%</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> characters<span class="token punctuation">[</span>randomNumber <span class="token operator">%</span> characters<span class="token punctuation">.</span>length<span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`),s(k);var d=a(k,8),x=n(d);e(x,()=>'<code class="language-shell"><span class="token function">npm</span> i pagecrypt</code>'),s(d);var m=a(d,4),S=n(m);e(S,()=>`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> generatePassword <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'pagecrypt/core'</span>

<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token function">generatePassword</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span></code>`),s(m),G(4),P(f,h)},$$slots:{default:!0}}))}export{q as default,L as metadata};
