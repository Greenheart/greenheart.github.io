import{S as k,i as I,s as P,k as _,a as S,l as g,m as q,c as O,h as o,I as m,n as h,b,E as w,C as d,O as R}from"./index-a38481fa.js";function C(a,e,i){const t=a.slice();return t[7]=e[i].srcset,t[8]=e[i].type,t}function E(a){let e,i,t;return{c(){e=_("source"),this.h()},l(n){e=g(n,"SOURCE",{srcset:!0,type:!0,width:!0,height:!0}),this.h()},h(){h(e,"srcset",i=a[7]),h(e,"type",t=a[8]),h(e,"width",a[5]),h(e,"height",a[6])},m(n,f){b(n,e,f)},p(n,f){f&4&&i!==(i=n[7])&&h(e,"srcset",i),f&4&&t!==(t=n[8])&&h(e,"type",t),f&32&&h(e,"width",n[5]),f&64&&h(e,"height",n[6])},d(n){n&&o(e)}}}function U(a){let e,i,t,n,f=a[2],c=[];for(let l=0;l<f.length;l+=1)c[l]=E(C(a,f,l));return{c(){e=_("picture");for(let l=0;l<c.length;l+=1)c[l].c();i=S(),t=_("img"),this.h()},l(l){e=g(l,"PICTURE",{});var r=q(e);for(let s=0;s<c.length;s+=1)c[s].l(r);i=O(r),t=g(r,"IMG",{src:!0,width:!0,height:!0,title:!0,alt:!0,class:!0}),r.forEach(o),this.h()},h(){m(t.src,n=a[1])||h(t,"src",n),h(t,"width",a[5]),h(t,"height",a[6]),h(t,"title",a[4]),h(t,"alt",a[3]),h(t,"class",a[0])},m(l,r){b(l,e,r);for(let s=0;s<c.length;s+=1)c[s].m(e,null);w(e,i),w(e,t)},p(l,[r]){if(r&100){f=l[2];let s;for(s=0;s<f.length;s+=1){const u=C(l,f,s);c[s]?c[s].p(u,r):(c[s]=E(u),c[s].c(),c[s].m(e,i))}for(;s<c.length;s+=1)c[s].d(1);c.length=f.length}r&2&&!m(t.src,n=l[1])&&h(t,"src",n),r&32&&h(t,"width",l[5]),r&64&&h(t,"height",l[6]),r&16&&h(t,"title",l[4]),r&8&&h(t,"alt",l[3]),r&1&&h(t,"class",l[0])},i:d,o:d,d(l){l&&o(e),R(c,l)}}}function v(a,e,i){let{class:t=""}=e,{src:n}=e,{sources:f=[]}=e,{alt:c}=e,{title:l=void 0}=e,{width:r}=e,{height:s}=e;return a.$$set=u=>{"class"in u&&i(0,t=u.class),"src"in u&&i(1,n=u.src),"sources"in u&&i(2,f=u.sources),"alt"in u&&i(3,c=u.alt),"title"in u&&i(4,l=u.title),"width"in u&&i(5,r=u.width),"height"in u&&i(6,s=u.height)},[t,n,f,c,l,r,s]}class M extends k{constructor(e){super(),I(this,e,v,U,P,{class:0,src:1,sources:2,alt:3,title:4,width:5,height:6})}}export{M as P};
