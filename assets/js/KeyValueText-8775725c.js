import{j as n,p as g,u as f,q as u,s as r,v as $,y as i,x as t,a as o}from"./vue-c1e56059.js";import{_ as c}from"./index-9e106429.js";const N={"key-value":"_key-value_rqe8n_1","key-value__list":"_key-value__list_rqe8n_4","key-value__item":"_key-value__item_rqe8n_8","key-value__key":"_key-value__key_rqe8n_18","key-value__value":"_key-value__value_rqe8n_23","key-value--align-left":"_key-value--align-left_rqe8n_29","key-value__key2":"_key-value__key2_rqe8n_29","key-value--vertical-align-center":"_key-value--vertical-align-center_rqe8n_38","key-value--direction-vertical":"_key-value--direction-vertical_rqe8n_41","key-value--margin-regular":"_key-value--margin-regular_rqe8n_57","key-value--margin-regular-small":"_key-value--margin-regular-small_rqe8n_60","key-value--margin-mini":"_key-value--margin-mini_rqe8n_63","key-value--size-regular":"_key-value--size-regular_rqe8n_66","key-value--size-regular-small":"_key-value--size-regular-small_rqe8n_69","key-value--size-medium":"_key-value--size-medium_rqe8n_72"},m=()=>({wrap:""}),p={props:{classNames:{Type:Object,default(){return m()}},align:{Type:String,default:null},verticalAlign:{Type:String,default:null},direction:{Type:String,default:null},margin:{Type:String,default:null},size:{Type:String,default:null}},setup(e){const l=n(()=>{const{classNames:a}=e;return Object.assign(m(),a)});return g("keyValueStyleModule",f()),{customClassNames:l}}};function q(e,l,a,s,_,y){return u(),r("div",{class:t([e.$style["key-value"],{[e.$style[`key-value--align-${a.align}`]]:a.align,[e.$style[`key-value--vertical-align-${a.verticalAlign}`]]:a.verticalAlign,[e.$style[`key-value--direction-${a.direction}`]]:a.direction,[e.$style[`key-value--margin-${a.margin}`]]:a.margin,[e.$style[`key-value--size-${a.size}`]]:a.size},s.customClassNames.wrap])},[$("dl",{class:t([e.$style["key-value__list"],s.customClassNames.list])},[i(e.$slots,"default")],2)],2)}const C={$style:N},K=c(p,[["render",q],["__cssModules",C]]),d=()=>({item:""}),M={props:{classNames:{Type:Object,default(){return d()}}},setup(e){const l=o("keyValueStyleModule"),a=n(()=>{const{classNames:s}=e;return Object.assign(d(),s)});return{styleModule:l,customClassNames:a}}};function z(e,l,a,s,_,y){return u(),r("div",{class:t([s.styleModule["key-value__item"],s.customClassNames.item])},[i(e.$slots,"default")],2)}const h=c(M,[["render",z]]),v=()=>({title:""}),T={props:{classNames:{Type:Object,default(){return v()}}},setup(e){const l=o("keyValueStyleModule"),a=n(()=>{const{classNames:s}=e;return Object.assign(v(),s)});return{styleModule:l,customClassNames:a}}};function j(e,l,a,s,_,y){return u(),r("dt",{class:t([s.styleModule["key-value__key"],s.customClassNames.title])},[i(e.$slots,"default")],2)}const A=c(T,[["render",j]]),k=()=>({text:""}),S={props:{classNames:{Type:Object,default(){return k()}}},setup(e){const l=o("keyValueStyleModule"),a=n(()=>{const{classNames:s}=e;return Object.assign(k(),s)});return{styleModule:l,customClassNames:a}}};function b(e,l,a,s,_,y){return u(),r("dd",{class:t([s.styleModule["key-value__value"],s.customClassNames.text])},[i(e.$slots,"default")],2)}const B=c(S,[["render",b]]);export{K,h as a,A as b,B as c};
