import{J as ae,b as re,M as U,h as N,j as k,e as ne,N as ie,G as W,H as le,i as G,k as D,q as H,O as S,l as Z,m as z,o as fe,P as te,K as J,Q as y,R as K,S as L,T as ue,F as se,V as ve,y as _e,x as ce,C as de,W as oe,X as he,Y as Ee,Z as P,_ as pe,u as Te}from"./runtime.D9GYYi2j.js";let O=null;function Ce(f,e){return e}function me(f,e,a,u){for(var s=[],_=e.length,t=0;t<_;t++)ue(e[t].e,s,!0);var p=_>0&&s.length===0&&a!==null;if(p){var d=a.parentNode;se(d),d.append(a),u.clear(),C(f,e[0].prev,e[_-1].next)}ve(s,()=>{for(var m=0;m<_;m++){var c=e[m];p||(u.delete(c.k),C(f,c.prev,c.next)),_e(c.e,!p)}})}function Ne(f,e,a,u,s,_=null){var t=f,p={flags:e,items:new Map,first:null},d=(e&U)!==0;if(d){var m=f;t=N?k(ce(m)):m.appendChild(ae())}N&&ne();var c=null,A=!1;re(()=>{var x=a(),n=ie(x)?x:x==null?[]:W(x),v=n.length;if(A&&v===0)return;A=v===0;let r=!1;if(N){var g=t.data===le;g!==(v===0)&&(t=G(),k(t),D(!1),r=!0)}if(N){for(var o=null,h,E=0;E<v;E++){if(H.nodeType===8&&H.data===de){t=H,r=!0,D(!1);break}var T=n[E],i=u(T,E);h=$(H,p,o,null,T,i,E,s,e),p.items.set(i,h),o=h}v>0&&k(G())}if(!N){var l=oe;Ae(n,p,t,s,e,(l.f&S)!==0,u)}_!==null&&(v===0?c?Z(c):c=z(()=>_(t)):c!==null&&fe(c,()=>{c=null})),r&&D(!0),a()}),N&&(t=H)}function Ae(f,e,a,u,s,_,t,p){var Y,q,X,B;var d=(s&he)!==0,m=(s&(y|L))!==0,c=f.length,A=e.items,x=e.first,n=x,v,r=null,g,o=[],h=[],E,T,i,l;if(d)for(l=0;l<c;l+=1)E=f[l],T=t(E,l),i=A.get(T),i!==void 0&&((Y=i.a)==null||Y.measure(),(g??(g=new Set)).add(i));for(l=0;l<c;l+=1){if(E=f[l],T=t(E,l),i=A.get(T),i===void 0){var j=n?n.e.nodes_start:a;r=$(j,e,r,r===null?e.first:r.next,E,T,l,u,s),A.set(T,r),o=[],h=[],n=r.next;continue}if(m&&xe(i,E,l,s),i.e.f&S&&(Z(i.e),d&&((q=i.a)==null||q.unfix(),(g??(g=new Set)).delete(i))),i!==n){if(v!==void 0&&v.has(i)){if(o.length<h.length){var R=h[0],I;r=R.prev;var V=o[0],M=o[o.length-1];for(I=0;I<o.length;I+=1)Q(o[I],R,a);for(I=0;I<h.length;I+=1)v.delete(h[I]);C(e,V.prev,M.next),C(e,r,V),C(e,M,R),n=R,r=M,l-=1,o=[],h=[]}else v.delete(i),Q(i,n,a),C(e,i.prev,i.next),C(e,i,r===null?e.first:r.next),C(e,r,i),r=i;continue}for(o=[],h=[];n!==null&&n.k!==T;)(_||!(n.e.f&S))&&(v??(v=new Set)).add(n),h.push(n),n=n.next;if(n===null)continue;i=n}o.push(i),r=i,n=i.next}if(n!==null||v!==void 0){for(var w=v===void 0?[]:W(v);n!==null;)(_||!(n.e.f&S))&&w.push(n),n=n.next;var b=w.length;if(b>0){var ee=s&U&&c===0?a:null;if(d){for(l=0;l<b;l+=1)(X=w[l].a)==null||X.measure();for(l=0;l<b;l+=1)(B=w[l].a)==null||B.fix()}me(e,w,ee,A)}}d&&te(()=>{var F;if(g!==void 0)for(i of g)(F=i.a)==null||F.apply()}),J.first=e.first&&e.first.e,J.last=r&&r.e}function xe(f,e,a,u){u&y&&K(f.v,e),u&L?K(f.i,a):f.i=a}function $(f,e,a,u,s,_,t,p,d,m){var c=O,A=(d&y)!==0,x=(d&pe)===0,n=A?x?Ee(s):P(s):s,v=d&L?P(t):t,r={i:v,v:n,k:_,a:null,e:null,prev:a,next:u};O=r;try{return r.e=z(()=>p(f,n,v),N),r.e.prev=a&&a.e,r.e.next=u&&u.e,a===null?e.first=r:(a.next=r,a.e.next=r.e),u!==null&&(u.prev=r,u.e.prev=r.e),r}finally{O=c}}function Q(f,e,a){for(var u=f.next?f.next.e.nodes_start:a,s=e?e.e.nodes_start:a,_=f.e.nodes_start;_!==u;){var t=Te(_);s.before(_),_=t}}function C(f,e,a){e===null?f.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{O as c,Ne as e,Ce as i};