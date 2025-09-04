import"./DsnmJJEf.js";import"./D6tUPSQF.js";import{f as x,a as l,A as p,s as e,c as d,B as o,r}from"./CVtmfPP4.js";import{L as u}from"./00AeCcnI.js";import{C as m}from"./x5pRBw2h.js";const b="improving-shell-startup-with-lazy-loading",w={title:"Improving Oh My Zsh Startup Time with Lazy Loading",date:"2023-03-23",tags:["DX","Code Snippet"]},{title:C,date:H,tags:I}=w,Z=[{level:2,title:"A Simple Solution",id:"a-simple-solution"},{level:2,title:"Conditionally Lazy Loading for Specific Directories",id:"conditionally-lazy-loading-for-specific-directories"},{level:2,title:"Add more commands that should load nvm",id:"add-more-commands-that-should-load-nvm"}];var _=x("<article><p>Using <!> is usually a great experience. However, adding heavy plugins (like <code>nvm</code>) to load at startup time can really hurt performance. Luckily there's a way to lazy load them.</p><h2>A Simple Solution</h2><!><ol><li>Add the nvm plugin to your <code>.zshrc</code> file.</li><li>Enable lazy loading for the <code>nvm</code> plugin.</li><li>Make sure you source Oh My Zsh at the end.</li></ol><p>This method reduced my shell startup time from <em>~1.5 s</em> to <em>~200 ms</em>. A <strong>huge</strong> improvement for a common action I perform many times daily.</p><p>However, I soon realised some of my projects had external dependencies that relied on commands like <code>node</code> and <code>npm</code> (and other package managers) to always be defined in the shell environment. This caused weird crashes, since lazy loading <code>nvm</code> means commands like <code>node</code> and <code>npm</code> only gets enabled when they first got used.</p><h2>Conditionally Lazy Loading for Specific Directories</h2><p>Adding an if statement to avoid lazy loading in specific directories:</p><!><h2>Add more commands that should load nvm</h2><p>In the <!> for <code>nvm</code> plugin, there are also other features that can be useful. For example, this is how to make sure <code>npx</code> and <code>pnpx</code> work even in new terminals.</p><!><p>Hopefully this saves some time, allowing you move at the speed of thought 💭</p></article>");function D(g){var t=_(),a=d(t),y=e(d(a));u(y,{href:"https://ohmyz.sh/",children:(i,z)=>{o();var s=p("Oh My Zsh");l(i,s)},$$slots:{default:!0}}),o(3),r(a);var h=e(a,2);m(h,{"data-language":"sh",code:`# ~/.zshrc
plugins=(nvm git) # 1
zstyle ':omz:plugins:nvm' lazy yes # 2

source $ZSH/oh-my-zsh.sh # 3
`});var c=e(h,6);m(c,{"data-language":"sh",code:`# ~/.zshrc
plugins=(nvm git)

# This excludes any subdirectory of "/your-project/"
# =~ is used for RegExp matching.
if ! [[ $PWD =~ "/your-project/" ]]; then
  zstyle ':omz:plugins:nvm' lazy yes
fi

source $ZSH/oh-my-zsh.sh
`});var n=e(c,2),v=e(d(n));u(v,{href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/nvm",children:(i,z)=>{o();var s=p("documentation");l(i,s)},$$slots:{default:!0}}),o(7),r(n);var f=e(n);m(f,{"data-language":"sh",code:`zstyle ':omz:plugins:nvm' lazy-cmd npx pnpx
`}),o(),r(t),l(g,t)}export{D as default,w as frontmatter,Z as headings,b as slug};
