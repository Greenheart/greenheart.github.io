import"./DsnmJJEf.js";import"./HzuPKAlg.js";import{f as A,a as t,s,c as i,A as n,B as y,r}from"./B2YQBVX4.js";import{L as B}from"./qMC3yWpg.js";import{C as d}from"./DToV4MWq.js";const _="detect-vite-plugin-restarts-to-avoid-rerunning-expensive-tasks",v={title:"Detect Vite Plugin Restarts to Avoid Rerunning Expensive Tasks",date:"2025-09-18",tags:["Node.js","TypeScript","Vite"],featured:!0},{title:T,date:S,tags:x,featured:k}=v,V=[{level:2,title:"A real-world example",id:"a-real-world-example"}];var C=A("<article><p>When developing <!> plugins, you sometimes need to detect when the Vite server restarts. Both the <code>vite</code> dev server and <code>vite build</code> can run your plugin multiple times within the same Node.js process. In my case, I wanted to only execute an expensive task once, and avoid duplicate work.</p><p>It's usually convenient to let Vite restart the dev server whenever the configuration or other imported modules change, and rerunning your Vite plugins. However, this also means that expensive setup work could happen multiple times, wasting both time and resources. This is especially important if your plugin does expensive computations which could slow down the development experience, and if your production build involves a prerendering step, like <!>.</p><p>To make a Vite plugin only execute some task on the first run, we can take advantage of the fact that Vite (I'm using version 7.1.5 at the time of writing) runs the dev server as well as the production build within the same Node.js process. This means we can define properties on <code>globalThis</code> to communicate between different executions of the vite plugin.</p><p>While I generally think global state like <code>globalThis</code> should be avoided as much as possible, this seems like a good time to use it. Here is a minimal example of how you can use this technique in your Vite plugin:</p><!><h2>A real-world example</h2><p>I'm building a Vite plugin specifically to integrate with the SvelteKit production build and prerendering, where the Vite server first creates the production build, which is then prerendered by SvelteKit in a separate restart.</p><p>In the following example, <code>globalThis.HAS_CMS_BUILD_STARTED</code> is only assigned once, and can then be read by all future instances of the Vite plugin to prevent the build from running more than once. Without the <code>globalThis</code> workaround, this would have meant the expensive build logic would be run two times, or even more for development server restarts.</p><!></article>");function M(u){var e=C(),a=i(e),h=s(i(a));B(h,{href:"https://vite.dev",children:(o,E)=>{n();var p=y("Vite");t(o,p)},$$slots:{default:!0}}),n(5),r(a);var l=s(a),F=s(i(l));B(F,{href:"https://svelte.dev/docs/kit/introduction",children:(o,E)=>{n();var p=y("SvelteKit");t(o,p)},$$slots:{default:!0}}),n(),r(l);var c=s(l,3);d(c,{codeHTML:`<pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic">// Add type safety</span></span>
<span class="line"><span style="color:#C678DD">declare</span><span style="color:#E06C75"> global</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">    /** Ensure the Vite plugin only runs some expensive task once */</span></span>
<span class="line"><span style="color:#C678DD">    var</span><span style="color:#E5C07B"> HAS_RUN_BEFORE</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">boolean</span><span style="color:#ABB2BF"> | </span><span style="color:#E5C07B">undefined</span></span>
<span class="line"><span style="color:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD">function</span><span style="color:#61AFEF"> yourVitePlugin</span><span style="color:#ABB2BF">() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">    // Logs \`undefined\` the first time and then \`true\`.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">    // Use \`process.uptime()\` to easily identify whenever Vite reruns your plugin.</span></span>
<span class="line"><span style="color:#E5C07B">    console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">globalThis</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">HAS_RUN_BEFORE</span><span style="color:#ABB2BF">, </span><span style="color:#E5C07B">process</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">uptime</span><span style="color:#ABB2BF">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD">    if</span><span style="color:#ABB2BF"> (</span><span style="color:#56B6C2">!</span><span style="color:#E5C07B">globalThis</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">HAS_RUN_BEFORE</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#61AFEF">        runExpensiveTask</span><span style="color:#ABB2BF">()</span></span>
<span class="line"><span style="color:#E5C07B">        globalThis</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">HAS_RUN_BEFORE</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span></span>
<span class="line"><span style="color:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B">    console</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">log</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">globalThis</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">HAS_RUN_BEFORE</span><span style="color:#ABB2BF">, </span><span style="color:#E5C07B">process</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">uptime</span><span style="color:#ABB2BF">()) </span><span style="color:#7F848E;font-style:italic">// Always logs \`true\`.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic">    // (...)</span></span>
<span class="line"><span style="color:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>`});var f=s(c,4);d(f,{codeHTML:`<pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#C678DD"> type</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">ConfigEnv</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> 'vite'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD">declare</span><span style="color:#E06C75"> global</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">    /** Ensure the CMS is only built at most once for each execution of \`vite\` */</span></span>
<span class="line"><span style="color:#C678DD">    var</span><span style="color:#E5C07B"> HAS_CMS_BUILD_STARTED</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">boolean</span><span style="color:#ABB2BF"> | </span><span style="color:#E5C07B">undefined</span></span>
<span class="line"><span style="color:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD">type</span><span style="color:#E5C07B"> BuildMode</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> 'prio'</span><span style="color:#ABB2BF"> | </span><span style="color:#E5C07B">boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic"> * Only (re)build the CMS when it makes sense. This is a simple way to save</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic"> * resources during development, while building for the actual production build,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic"> * but not when serving.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic"> */</span></span>
<span class="line"><span style="color:#C678DD">function</span><span style="color:#61AFEF"> getBuildMode</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">env</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">ConfigEnv</span><span style="color:#ABB2BF">): </span><span style="color:#E5C07B">BuildMode</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">    // Avoid duplicate builds in the same execution of the \`vite\` command.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">    // We only need to rebuild the CMS when dependencies have changed,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">    // and a simple solution is to build the CMS the first time the Vite</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">    // dev server or production build starts.</span></span>
<span class="line"><span style="color:#C678DD">    if</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">globalThis</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">HAS_CMS_BUILD_STARTED</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#C678DD">        return</span><span style="color:#D19A66"> false</span></span>
<span class="line"><span style="color:#ABB2BF">    } </span><span style="color:#C678DD">else</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">        // We can use \`globalThis\` to reliably determine if there has been</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">        // a previous build. This is possible since \`globalThis\` is shared</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">        // in the Vite parent process that restarts the build, and because</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">        // both the Vite config loading and the SvelteKit dev/build process</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">        // are run by the same parent process.</span></span>
<span class="line"><span style="color:#E5C07B">        globalThis</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">HAS_CMS_BUILD_STARTED</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span></span>
<span class="line"><span style="color:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD">    if</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">env</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">mode</span><span style="color:#56B6C2"> !==</span><span style="color:#98C379"> 'development'</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#C678DD">        if</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">env</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">command</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> 'build'</span><span style="color:#ABB2BF">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">            // In production builds, we want to finish the CMS build before</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">            // other parts of the app. This makes sure the CMS build finishes</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">            // before other parts of the build.</span></span>
<span class="line"><span style="color:#C678DD">            return</span><span style="color:#98C379"> 'prio'</span></span>
<span class="line"><span style="color:#ABB2BF">        } </span><span style="color:#C678DD">else</span><span style="color:#ABB2BF"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">            // Don't build when serving in production.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic">            // In these cases the CMS should already be built.</span></span>
<span class="line"><span style="color:#C678DD">            return</span><span style="color:#D19A66"> false</span></span>
<span class="line"><span style="color:#ABB2BF">        }</span></span>
<span class="line"><span style="color:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic">    // Build the first time during development</span></span>
<span class="line"><span style="color:#C678DD">    return</span><span style="color:#D19A66"> true</span></span>
<span class="line"><span style="color:#ABB2BF">}</span></span>
<span class="line"></span></code></pre>`}),r(e),t(u,e)}export{M as default,v as frontmatter,V as headings,_ as slug};
