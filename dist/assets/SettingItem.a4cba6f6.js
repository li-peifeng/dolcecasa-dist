import{d as h,c as t,S as c,bl as d,aN as i,I as y,a1 as b,aw as m,a2 as g,D as f,bx as S,T as w,bn as C,bo as T,bp as k,bq as v,br as x,bs as O,bt as D,K as I,bu as o,bv as $,bw as E,F,by as L}from"./index.f97c31d3.js";import{F as u}from"./index.8d5478ae.js";import{T as a}from"./item_type.be442da4.js";import{l as N}from"./index.f526870a.js";const P=e=>{const l=h();return t(L,{get w(){var n;return(n=e.w)!=null?n:"100%"},display:"flex",flexDirection:"column",get children(){return[t(c,{get when(){return!e.hideLabel},get children(){return t(d,{get for(){return e.key},display:"flex",alignItems:"center",get children(){return[i(()=>l(`settings.${e.key}`)),t(c,{get when(){return e.flag===u.DEPRECATED},get children(){return t(y,{ml:"$2",as:N,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:()=>{var n;(n=e.onDelete)==null||n.call(e)}})}})]}})}}),t(b,{get fallback(){return t(m,{get children(){return l("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[a.String,a.Number].includes(e.type)},get children(){return t(f,{get type(){return e.type===a.Number?"number":""},get id(){return e.key},get value(){return e.value},onInput:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Bool},get children(){return t(S,{get id(){return e.key},get defaultChecked(){return e.value==="true"},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.checked?"true":"false")},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Text},get children(){return t(w,{get id(){return e.key},get value(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Select},get children(){return t(C,{get id(){return e.key},get defaultValue(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n)},get readOnly(){return e.flag===u.READONLY},get children(){return[t(T,{get children(){return[t(k,{get children(){return l("global.choose")}}),t(v,{}),t(x,{})]}}),t(O,{get children(){return t(D,{get children(){return t(I,{get each(){var n;return(n=e.options)==null?void 0:n.split(",")},children:n=>t(o,{value:n,get children(){return[t($,{get children(){return l(`settings.${e.key}s.${n}`)}}),t(E,{})]}})})}})}})]}})}})]}}),t(F,{get children(){return i(()=>!!e.help,!0)()?l(`settings.${e.key}-tips`):""}})]}})};export{P as I};
