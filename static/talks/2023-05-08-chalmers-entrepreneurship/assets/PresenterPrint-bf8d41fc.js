import{d as _,i as d,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as o,h as a,F as g,r as v,n as x,j as y,o as r,k as b,l as N,m as k,p as P,q as S,_ as w}from"./index-e16601ed.js";import{N as L}from"./NoteDisplay-0a5a3f5d.js";const V={class:"m-4"},j={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),A={key:0,class:"border-gray-400/50 mb-8"},E=_({__name:"PresenterPrint",setup(F){d(p),h(`
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
`),u({title:`Notes - ${m.title}`});const i=f(()=>y.slice(0,-1).map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(r(),n("div",{id:"page-root",style:x(a(S))},[t("div",V,[t("div",j,[t("h1",T,o(a(m).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(a(b)),1),N(" "+o(e==null?void 0:e.title)+" ",1),z])]),k(L,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",A)):P("v-if",!0)]))),128))])],4))}}),q=w(E,[["__file","/Users/grh/PERSONAL/talks/2023-05-08-chalmers-entrepreneurship/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{q as default};
