import{j as t,p,u as y,q as _,s as n,v as c,x as r,y as m,a as N}from"./vue-c1e56059.js";import{_ as u,u as C}from"./index-9e106429.js";const S={"slide-scroll":"_slide-scroll_1045s_1","slide-scroll__frame":"_slide-scroll__frame_1045s_8","slide-scroll__scroller":"_slide-scroll__scroller_1045s_16","slide-scroll__inner":"_slide-scroll__inner_1045s_20","slide-scroll__list":"_slide-scroll__list_1045s_25","slide-scroll__item":"_slide-scroll__item_1045s_41","slide-scroll--hide-scrollbar":"_slide-scroll--hide-scrollbar_1045s_54","slide-scroll--pc":"_slide-scroll--pc_1045s_61"},i=()=>({wrap:"",frame:"",scroller:"",inner:"",list:""}),b={props:{classNames:{Type:Object,default(){return i()}},hideScrollbar:{Type:Boolean,default:!0}},setup(s){const o={ui:{common:C()}},e=t(()=>{const{classNames:a}=s;return Object.assign(i(),a)}),l=t(()=>o.ui.common.scrollbarsWidth);return p("slideScrollStyleModule",y()),{customClassNames:e,scrollbarsWidth:l}}};function $(s,o,e,l,a,f){return _(),n("div",{class:r([s.$style["slide-scroll"],{[s.$style["slide-scroll--hide-scrollbar"]]:e.hideScrollbar,[s.$style["slide-scroll--pc"]]:l.scrollbarsWidth>0},l.customClassNames.wrap])},[c("div",{class:r([s.$style["slide-scroll__frame"],l.customClassNames.frame])},[c("div",{class:r([s.$style["slide-scroll__scroller"],l.customClassNames.scroller])},[c("div",{class:r([s.$style["slide-scroll__inner"],l.customClassNames.inner])},[c("ul",{class:r([s.$style["slide-scroll__list"],l.customClassNames.list])},[m(s.$slots,"default")],2)],2)],2)],2)],2)}const h={$style:S},O=u(b,[["render",$],["__cssModules",h]]),d=()=>({item:""}),M={props:{classNames:{Type:Object,default(){return d()}}},setup(s){const o=N("slideScrollStyleModule"),e=t(()=>{const{classNames:l}=s;return Object.assign(d(),l)});return{styleModule:o,customClassNames:e}}};function j(s,o,e,l,a,f){return _(),n("li",{class:r([l.styleModule["slide-scroll__item"],l.customClassNames.item])},[m(s.$slots,"default")],2)}const T=u(M,[["render",j]]);export{O as S,T as a};
