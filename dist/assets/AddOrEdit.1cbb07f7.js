import{d as L,c as t,bj as V,a0 as H,ax as J,a1 as s,C as T,bv as G,T as P,bl as K,bm as U,bn as Z,bo as z,bp as Q,bq as W,br as X,J as S,bs as Y,bt as p,bu as ee,S as w,F as te,bw as re,e as ne,aU as v,b7 as f,q as ae,bZ as k,m as ie,bM as de,a5 as ue,cK as ce,cp as le,cq as ge,aM as oe,H as O,E as se,n as _,R as me,b8 as y,a9 as he}from"./index.9949964a.js";import{T as c}from"./item_type.be442da4.js";import{R as ve}from"./ResponsiveGrid.e8ef64a1.js";const b=e=>{const d=L();return t(re,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[t(V,{get for(){return e.name},display:"flex",alignItems:"center",get children(){var a;return d(((a=e.full_name_path)!=null?a:e.driver==="common")?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),t(H,{get fallback(){return t(J,{get children(){return d("settings.unknown_type")}})},get children(){return[t(s,{get when(){return e.type===c.String},get children(){return t(T,{get id(){return e.name},get type(){return e.name=="password"?"password":"text"},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===c.String?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===c.Number},get children(){return t(T,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===c.Number?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,parseInt(a.currentTarget.value))}:void 0}})}}),t(s,{get when(){return e.type===c.Bool},get children(){return t(G,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===c.Bool?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a.currentTarget.checked)}:void 0}})}}),t(s,{get when(){return e.type===c.Text},get children(){return t(P,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===c.Text?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===c.Select},get children(){return t(K,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===c.Select?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a)}:void 0},get children(){return[t(U,{get children(){return[t(Z,{get children(){return d("global.choose")}}),t(z,{}),t(Q,{})]}}),t(W,{get children(){return t(X,{get children(){return t(S,{get each(){var a;return(a=e.options)==null?void 0:a.split(",")},children:a=>t(Y,{value:a,get children(){return[t(p,{get children(){var i;return d(((i=e.options_prefix)!=null?i:e.driver==="common"?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`)+`.${a}`)}}),t(ee,{})]}})})}})}})]}})}})]}}),t(w,{get when(){return e.help},get children(){return t(te,{get children(){return d(e.driver==="common"?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function I(e,d){switch(e){case c.Bool:return d?d==="true":!1;case c.Number:return d?parseInt(d):0;default:return d||""}}const we=()=>{const e=L(),{params:d,back:a,to:i}=ne(),{id:l}=d,[R,q]=v(()=>f.get("/admin/driver/list"),!0),[g,$]=ae({}),F=async()=>{const r=await q();y(r,$)},[A,B]=v(()=>f.get(`/admin/storage/get?id=${l}`),!0),[M,N]=v(()=>f.get(`/admin/driver/info?driver=${u.driver}`),!0);l?(async()=>{const r=await B();y(r,async n=>{o(n),m(JSON.parse(n.addition));const h=await N();y(h,E=>$({[u.driver]:E}))})})():F();const[u,o]=k({}),[C,m]=k({}),[j,D]=v(()=>(o("addition",JSON.stringify(C)),f.post(`/admin/storage/${l?"update":"create"}`,u))),x=ie(()=>{var n;const r=(n=g()[u.driver])==null?void 0:n.config.alert;if(console.log(r),r)return r.split("|")[0]});return t(he,{get loading(){return l?A()||M():R()},get children(){return[t(de,{mb:"$2",get children(){return e(`global.${l?"edit":"add"}`)}}),t(ue,{mb:"$2",spacing:"$2",get children(){return[t(b,{name:"driver",default:"",readonly:l!==void 0,required:!0,get type(){return c.Select},get options(){return l?u.driver:Object.keys(g()).join(",")},get value(){return u.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:r=>{for(const n of g()[r].common)o(n.name,I(n.type,n.default));m(ce(n=>{for(const h in n)delete n[h]}));for(const n of g()[r].additional)m(n.name,I(n.type,n.default));o("driver",r)}}),t(w,{get when(){return x()},get children(){return t(le,{get status(){return x()},w:"$full",get children(){return[t(ge,{}),oe(()=>e(`drivers.config.${u.driver}.alert`))]}})}})]}}),t(ve,{get children(){return t(w,{get when(){return g()[u.driver]},get children(){return[t(S,{get each(){return g()[u.driver].common},children:r=>t(b,O(r,{driver:"common",get value(){return u[r.name]},onChange:n=>{o(r.name,n)}}))}),t(S,{get each(){return g()[u.driver].additional},children:r=>t(b,O(r,{get driver(){return u.driver},get value(){return C[r.name]},onChange:n=>{m(r.name,n)}}))})]}})}}),t(se,{mt:"$2",get loading(){return j()},onClick:async()=>{g()[u.driver].config.need_ms&&(_.info(e("manage.add_storage-tips")),window.open(me("/@amore/messenger"),"_blank"));const r=await D();y(r,()=>{_.success(e("global.save_success")),a()},(n,h)=>{r.data.id&&i(`/@amore/storages/edit/${r.data.id}`)})},get children(){return e(`global.${l?"save":"add"}`)}})]}})};export{we as default};
