import{a as T,b as k,aL as M,a_ as l,k as y,cr as C,e,a8 as o,B as c,a4 as v,cs as S,ct as x,cu as d,E as g,cv as u,cw as B,cx as n,a$ as h,n as F,a3 as L}from"./index.eaf6b471.js";import{q as D}from"./index.3cc433d3.js";import{D as H}from"./DeletePopover.ad66f5f6.js";import{W as R}from"./Wether.0f9b2135.js";const I=()=>{const r=T();D("manage.sidemenu.metas");const{to:i}=k(),[p,m]=M(()=>l.get("/admin/meta/list")),[f,w]=y([]),a=async()=>{const t=await m();h(t,s=>w(s.content))};a();const[$,b]=C(t=>l.post(`/admin/meta/delete?id=${t}`));return e(L,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",get children(){return[e(c,{colorScheme:"accent",get loading(){return p()},onClick:a,get children(){return r("global.refresh")}}),e(c,{onClick:()=>{i("/@manage/metas/add")},get children(){return r("global.add")}})]}}),e(v,{w:"$full",overflowX:"auto",get children(){return e(S,{highlightOnHover:!0,dense:!0,get children(){return[e(x,{get children(){return e(d,{get children(){return[e(g,{each:["path","password","write"],children:t=>e(u,{get children(){return r(`metas.${t}`)}})}),e(u,{get children(){return r("global.operations")}})]}})}}),e(B,{get children(){return e(g,{get each(){return f()},children:t=>e(d,{get children(){return[e(n,{get children(){return t.path}}),e(n,{get children(){return t.password}}),e(n,{get children(){return e(R,{get yes(){return t.write}})}}),e(n,{get children(){return e(o,{spacing:"$2",get children(){return[e(c,{onClick:()=>{i(`/@manage/metas/edit/${t.id}`)},get children(){return r("global.edit")}}),e(H,{get name(){return t.path},get loading(){return $()===t.id},onClick:async()=>{const s=await b(t.id);h(s,()=>{F.success(r("global.delete_success")),a()})}})]}})}})]}})})}})]}})}})]}})};export{I as default};
