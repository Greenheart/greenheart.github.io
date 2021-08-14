import{S as o,i as t,s as e,B as a,j as s,m as i,o as r,p as n,q as l,x as c,u,v as m,R as h,e as p,t as f,k as d,c as g,a as $,g as w,d as y,n as b,b as k,f as v,D as E}from"../../chunks/vendor-49daea19.js";import{P as j}from"../../chunks/_post-2795fb03.js";import{L as G}from"../../chunks/Link-666b6af4.js";import"../../chunks/Tags-522f9d05.js";function T(o){let t;return{c(){t=f("StackOverflow")},l(o){t=w(o,"StackOverflow")},m(o,e){v(o,t,e)},d(o){o&&y(t)}}}function L(o){let t,e,a,n,l,h,j,L,H,I,R,A,P,x,_,B,O,C,M,S,U;return S=new G({props:{href:"https://stackoverflow.com/a/2931914/4183985",rel:"nofollow",$$slots:{default:[T]},$$scope:{ctx:o}}}),{c(){t=p("p"),e=f("Here’s a quick way to update commit author email and display name for previous commits in a local project."),a=d(),n=p("p"),l=f("Two things worth mentioning before using this:"),h=d(),j=p("ol"),L=p("li"),H=p("p"),I=f("If you change your email, it might no longer count as contributions on your GitHub/GitLab profile. But as long as you keep the old email as a hidden email connected to your account, it should work."),R=d(),A=p("li"),P=p("p"),x=f("Remember that rewriting history in shared projects is a bad idea. Especially when working in a collaborative environment with other people. But for old local projects that you want to upload to a public Git repository, this method could be useful to hide some personal information."),_=d(),B=p("pre"),O=d(),C=p("p"),M=f("Credit: "),s(S.$$.fragment),this.h()},l(o){t=g(o,"P",{});var s=$(t);e=w(s,"Here’s a quick way to update commit author email and display name for previous commits in a local project."),s.forEach(y),a=b(o),n=g(o,"P",{});var r=$(n);l=w(r,"Two things worth mentioning before using this:"),r.forEach(y),h=b(o),j=g(o,"OL",{});var c=$(j);L=g(c,"LI",{});var u=$(L);H=g(u,"P",{});var m=$(H);I=w(m,"If you change your email, it might no longer count as contributions on your GitHub/GitLab profile. But as long as you keep the old email as a hidden email connected to your account, it should work."),m.forEach(y),u.forEach(y),R=b(c),A=g(c,"LI",{});var p=$(A);P=g(p,"P",{});var f=$(P);x=w(f,"Remember that rewriting history in shared projects is a bad idea. Especially when working in a collaborative environment with other people. But for old local projects that you want to upload to a public Git repository, this method could be useful to hide some personal information."),f.forEach(y),p.forEach(y),c.forEach(y),_=b(o),B=g(o,"PRE",{class:!0}),$(B).forEach(y),O=b(o),C=g(o,"P",{});var d=$(C);M=w(d,"Credit: "),i(S.$$.fragment,d),d.forEach(y),this.h()},h(){k(B,"class","language-shell")},m(o,s){v(o,t,s),E(t,e),v(o,a,s),v(o,n,s),E(n,l),v(o,h,s),v(o,j,s),E(j,L),E(L,H),E(H,I),E(j,R),E(j,A),E(A,P),E(P,x),v(o,_,s),v(o,B,s),B.innerHTML='<code class="language-shell"><span class="token function">git</span> filter-branch --commit-filter <span class="token string">\'\n      if [ "$GIT_AUTHOR_EMAIL" = "old@email.com" ];\n      then\n              GIT_AUTHOR_NAME="Your Name";\n              GIT_AUTHOR_EMAIL="new@email.com";\n              git commit-tree "$@";\n      else\n              git commit-tree "$@";\n      fi\'</span> HEAD</code>',v(o,O,s),v(o,C,s),E(C,M),r(S,C,null),U=!0},p(o,t){const e={};2&t&&(e.$$scope={dirty:t,ctx:o}),S.$set(e)},i(o){U||(c(S.$$.fragment,o),U=!0)},o(o){u(S.$$.fragment,o),U=!1},d(o){o&&y(t),o&&y(a),o&&y(n),o&&y(h),o&&y(j),o&&y(_),o&&y(B),o&&y(O),o&&y(C),m(S)}}}function H(o){let t,e;const h=[o[0],I];let p={$$slots:{default:[L]},$$scope:{ctx:o}};for(let s=0;s<h.length;s+=1)p=a(p,h[s]);return t=new j({props:p}),{c(){s(t.$$.fragment)},l(o){i(t.$$.fragment,o)},m(o,a){r(t,o,a),e=!0},p(o,[e]){const a=1&e?n(h,[1&e&&l(o[0]),0&e&&l(I)]):{};2&e&&(a.$$scope={dirty:e,ctx:o}),t.$set(a)},i(o){e||(c(t.$$.fragment,o),e=!0)},o(o){u(t.$$.fragment,o),e=!1},d(o){m(t,o)}}}const I={title:"Update Your Git Commit Email Address Before Pushing to Remote Repository",date:"2021-07-23T00:00:00.000Z",tags:["Git","Code Snippet"]};function R(o,t,e){return o.$$set=o=>{e(0,t=a(a({},t),h(o)))},[t=h(t)]}class A extends o{constructor(o){super(),t(this,o,R,H,e,{})}}export{A as default,I as metadata};
