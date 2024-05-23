import{d as b,c as t,bz as p,bm as y,D as O,cO as _,G as g,K as A,J as C,a6 as $,aX as v,ba as f,cb as B,cL as F,r as J,cM as K,S as L,bb as k,n as u,bO as G,ag as N}from"./index.e49c1bef.js";import{g as T}from"./useTitle.88c0ce30.js";import{G as R}from"./index.f3d15e32.js";import{I as q}from"./SettingItem.5eb2d2d6.js";import{R as H}from"./ResponsiveGrid.232cc0f1.js";import{a as M}from"./FolderTree.68204e36.js";import{c as d}from"./index.84f46a3b.js";import"./index.45bfc67c.js";import"./index.78999331.js";import"./item_type.be442da4.js";import"./_commonjs-dynamic-modules.30ae7933.js";const W=e=>{const s=b();return t(_,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[t(p,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(y,{for:"path",display:"flex",alignItems:"center",get children(){return s("global.name")}}),t(O,{id:"name",get value(){return e.name},onChange:n=>e.onChange({...e,name:n.currentTarget.value})})]}}),t(p,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(y,{for:"path",display:"flex",alignItems:"center",get children(){return s("metas.path")}}),t(M,{id:"path",get value(){return e.path},onChange:n=>e.onChange({...e,path:n})})]}}),t(_,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return t(g,{colorScheme:"danger",onClick:async()=>{e.onDelete()},get children(){return s("global.delete")}})}})]}})},X=e=>{const s=b();return console.log(e.buckets),t($,{alignItems:"start",w:"$full",get children(){return[t(y,{display:"flex",alignItems:"center",get children(){return s("settings.s3_buckets")}}),t(g,{onClick:()=>{e.setSettings(n=>n.key==="s3_buckets","value",JSON.stringify([...e.buckets,{name:"",path:""}])),console.log(e.buckets)},get children(){return s("global.add")}}),t(A,{get each(){return e.buckets},children:n=>t(W,C(n,{onChange:r=>{console.log(r),e.setSettings(a=>a.key==="s3_buckets","value",JSON.stringify(e.buckets.map(a=>a.name===n.name?r:a)))},onDelete:()=>{e.setSettings(r=>r.key==="s3_buckets","value",JSON.stringify(e.buckets.filter(r=>r.name!==n.name)))}}))})]}})},w=e=>{const s={...e.find(n=>n.key==="s3_buckets")};return s.value?JSON.parse(s.value):[]},ne=()=>{const e=b();T("manage.sidemenu.s3");const[s,n]=v(()=>f.get(`/admin/setting/list?group=${R.S3}`)),[r,a]=B([]),m=async()=>{const c=await n();k(c,a)};m();const[I,x]=v(()=>f.post("/admin/setting/save",F(r))),[D,S]=J(!1);return t($,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(H,{get children(){return[t(K,{each:r,children:(c,o)=>t(L,{get when(){return c().key!="s3_buckets"},get children(){return t(q,C(c,{onChange:l=>{a(i=>c().key===i.key,"value",l)},onDelete:async()=>{S(!0);const l=await f.post(`/admin/setting/delete?key=${c().key}`);S(!1),k(l,()=>{u.success(e("global.delete_success")),m()})}}))}})}),t(g,{onClick:()=>{const c=d.lib.WordArray.random(15),o=d.lib.WordArray.random(240/8),l=d.enc.Base64.stringify(c).replace(/[\r\n]/g,""),i=d.enc.Base64.stringify(o).replace(/[\r\n]/g,"");a(h=>h.key==="s3_access_key_id","value",l),a(h=>h.key==="s3_secret_access_key","value",i)},get children(){return e("settings.s3_generate")}}),t(G,{get children(){return e("settings.s3_restart_to_apply")}}),t(X,{get buckets(){return w(r)},setSettings:a})]}}),t(N,{spacing:"$2",get children(){return[t(g,{colorScheme:"accent",onClick:m,get loading(){return s()||D()},get children(){return e("global.refresh")}}),t(g,{get loading(){return I()},onClick:async()=>{const c=w(r),o=new Set;for(const i of c){if(i.name===""||i.path===""){u.error(e("settings.s3_buckets_empty"));return}if(o.has(i.name)){u.error(e("settings.s3_buckets_duplicate_name"));return}o.add(i.name)}const l=await x();k(l,()=>u.success(e("global.save_success")))},get children(){return e("global.save")}})]}})]}})};export{ne as default};
