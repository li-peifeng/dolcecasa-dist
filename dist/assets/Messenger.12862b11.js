import{c as e,bM as i,au as w,d as y,n as b,q as C,aU as r,b7 as c,bZ as R,i as k,a5 as o,J as x,aq as H,H as T,C as W,af as q,E as g,bD as D,aW as F,cK as L}from"./index.9949964a.js";const M=n=>e(i,{get children(){return n.content}}),N=n=>e(w,{get src(){return n.content}}),z={string:M,image:N},E=()=>{const n=y();b.info(n("manage.messenger-tips"));const[a,l]=C(""),[u,d]=r(()=>c.post("/admin/message/get")),[p,m]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=R([]),s=async()=>{const t=await d();D(t,I=>{S(L($=>$.push(I)))})},f=async()=>{const t=await m();F(t)},v=setInterval(s,1e3);return k(()=>clearInterval(v)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:h,children:t=>e(H,T({get component(){return z[t.type]}},t))})]}}),e(W,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(q,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return u()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:f,get children(){return n("manage.send")}})]}})]}})};export{E as Messenger,z as Shower,E as default};
