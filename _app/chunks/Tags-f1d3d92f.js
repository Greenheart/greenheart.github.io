import{S as s,i as t,s as a,e as n,t as e,k as l,c as r,a as o,g as c,n as i,d as h,b as f,f as u,D as g,h as m,H as d,P as p,B as v,R as x}from"./vendor-d3a3d99b.js";const D=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"numeric"});function b(s){return D.format(new Date(s))}function $(s,t,a){const n=s.slice();return n[4]=t[a],n}function w(s){let t,a,d,p=s[4]+"";return{c(){t=n("span"),a=e(p),d=l(),this.h()},l(s){t=r(s,"SPAN",{class:!0});var n=o(t);a=c(n,p),d=i(n),n.forEach(h),this.h()},h(){f(t,"class","p-1 bg-mantis text-xs rounded-sm leading-3")},m(s,n){u(s,t,n),g(t,a),g(t,d)},p(s,t){1&t&&p!==(p=s[4]+"")&&m(a,p)},d(s){s&&h(t)}}}function y(s){let t,a=s[0],e=[];for(let n=0;n<a.length;n+=1)e[n]=w($(s,a,n));return{c(){t=n("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=r(s,"DIV",{class:!0});var a=o(t);for(let t=0;t<e.length;t+=1)e[t].l(a);a.forEach(h),this.h()},h(){f(t,"class",s[1])},m(s,a){u(s,t,a);for(let n=0;n<e.length;n+=1)e[n].m(t,null)},p(s,[n]){if(1&n){let l;for(a=s[0],l=0;l<a.length;l+=1){const r=$(s,a,l);e[l]?e[l].p(r,n):(e[l]=w(r),e[l].c(),e[l].m(t,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=a.length}},i:d,o:d,d(s){s&&h(t),p(e,s)}}}function B(s,t,a){var n;let{tags:e}=t;const l=`flex space-x-2 items-center ${null!==(n=t.class)&&void 0!==n?n:""}`;return s.$$set=s=>{a(3,t=v(v({},t),x(s))),"tags"in s&&a(0,e=s.tags)},t=x(t),[e,l]}class E extends s{constructor(s){super(),t(this,s,B,y,a,{tags:0})}}export{E as T,b as f};
