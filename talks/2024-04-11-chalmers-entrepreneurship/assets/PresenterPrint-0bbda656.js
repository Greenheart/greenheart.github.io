import{d,i as p,a as _,u,b as h,c as m,e as f,f as l,g as t,t as a,h as n,F as g,r as v,n as x,j as y,o as r,k as b,l as k,m as N,p as P,q as w,_ as S}from"./index-deaa8842.js";import{N as V}from"./NoteDisplay-07a8321a.js";const j={class:"m-4"},C={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(M){p(_),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=f(()=>y.slice(0,-1).map(o=>{var s;return(s=o.meta)==null?void 0:s.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,s)=>(r(),l("div",{id:"page-root",style:x(n(w))},[t("div",j,[t("div",C,[t("h1",L,a(n(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(r(!0),l(g,null,v(n(i),(e,c)=>(r(),l("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(n(b)),1),k(" "+a(e==null?void 0:e.title)+" ",1),s[0]||(s[0]=t("div",{class:"flex-auto"},null,-1))])]),N(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<n(i).length-1?(r(),l("hr",z)):P("v-if",!0)]))),128))])],4))}}),E=S(F,[["__file","/home/grh/Code/personal/talks/node_modules/.pnpm/@slidev+client@0.40.16_postcss@8.5.3_rollup@4.40.0_typescript@5.8.3_vite@4.5.13_@types+node@18.19.86_/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
