import{u as f,a as i,j as o,w as p,k as g,p as $,q as d,s as c,y as _,x as m}from"./vue-c1e56059.js";import{_ as u}from"./index-9e106429.js";const y="_invalid_1sigw_1",C="_invalid__message_1sigw_4",b="_invalid__help_1sigw_10",w={invalid:y,invalid__message:C,"invalid--error":"_invalid--error_1sigw_7",invalid__help:b,"invalid--disabled":"_invalid--disabled_1sigw_13"},n=()=>({wrap:""}),N={props:{classNames:{Type:Object,default(){return n()}},error:{Type:Boolean,default:!1},disabled:{Type:Boolean,default:!1}},setup(s){const r=f(),e=i("formListItem",{}),a=o(()=>{const{classNames:l}=s;return Object.assign(n(),l)});return p(()=>s.error,l=>{e&&e.error&&e.error(l)}),g(()=>{e&&e.error&&s.error&&e.error(!0)}),$("formInvalid",{messageClass:r.invalid__message,helpClass:r.invalid__help}),{customClassNames:a}}};function h(s,r,e,a,l,v){return d(),c("div",{class:m([s.$style.invalid,{[s.$style["invalid--error"]]:e.error,[s.$style["invalid--disabled"]]:e.disabled},a.customClassNames.wrap])},[_(s.$slots,"default")],2)}const I={$style:w},F=u(N,[["render",h],["__cssModules",I]]),M={"invalid-message":"_invalid-message_1d6y8_1"},t=()=>({wrap:""}),T={props:{classNames:{Type:Object,default(){return t()}}},setup(s){const r=i("formInvalid",{}),e=i("basicTextarea",{});return{customClassNames:o(()=>{const{classNames:l}=s;return Object.assign(t(),l)}),formInvalid:r,basicTextarea:e}}};function j(s,r,e,a,l,v){return d(),c("p",{class:m([s.$style["invalid-message"],a.formInvalid.messageClass,a.basicTextarea.invalidClass,a.customClassNames.wrap])},[_(s.$slots,"default")],2)}const B={$style:M},x=u(T,[["render",j],["__cssModules",B]]);export{F,x as a};
