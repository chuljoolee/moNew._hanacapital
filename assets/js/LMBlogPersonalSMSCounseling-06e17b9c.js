import{_ as v,k as N,B as A,b as U,l as F}from"./index-9e106429.js";import{P as E}from"./PageContents-1df8324b.js";import{P as w}from"./PageTextGroup-90dfb158.js";import{B as O,a as j}from"./ButtonListItem-86502814.js";import{F as G,a as V}from"./FormInvalidMessage-c0abb742.js";import{F as H}from"./FormList-4a2af706.js";import{F as R}from"./FormListItem-10f86a80.js";import{B as q}from"./BasicTextarea-995d7b56.js";import{I as z,a as J}from"./InputBlockCell-d7e6e489.js";import{U as K}from"./UiAccordion-176fdf2d.js";import{U as D,a as Q,b as W}from"./UiAccordionOpener-f7d12057.js";import{C as X,a as Y,b as Z}from"./CheckBoxObject-d5873b33.js";import{B as ee}from"./BottomSticky-04097cb1.js";import{b as te,k as se,T as ae,A as le,H as t,J as l,q as oe,K as e,v as o,L as _,x as r}from"./vue-c1e56059.js";import"./vendor-58bdd0ff.js";import"./chart-387708a7.js";import"./dropdown-5c299e7b.js";import"./check-0a3a9b31.js";import"./check-l-b746aa41.js";const re={"agree-list":"_agree-list_1b0ta_1","agree-list__container":"_agree-list__container_1b0ta_4","agree-list__right":"_agree-list__right_1b0ta_9","agree-list__all":"_agree-list__all_1b0ta_20","agree-list__all-head":"_agree-list__all-head_1b0ta_23","agree-list__all-checkbox":"_agree-list__all-checkbox_1b0ta_30","agree-list__all-opener":"_agree-list__all-opener_1b0ta_34","agree-list__all-contents":"_agree-list__all-contents_1b0ta_41","agree-list__depth":"_agree-list__depth_1b0ta_44","agree-list__depth-item":"_agree-list__depth-item_1b0ta_50","agree-list__depth-head":"_agree-list__depth-head_1b0ta_53","agree-list__depth-checkbox":"_agree-list__depth-checkbox_1b0ta_57","agree-list__depth-opener":"_agree-list__depth-opener_1b0ta_61","agree-list__depth-contents":"_agree-list__depth-contents_1b0ta_70","agree-list__list":"_agree-list__list_1b0ta_73","agree-list__item":"_agree-list__item_1b0ta_78","agree-list__head":"_agree-list__head_1b0ta_81","agree-list__checkbox":"_agree-list__checkbox_1b0ta_88","agree-list__link":"_agree-list__link_1b0ta_92","agree-list__link-text":"_agree-list__link-text_1b0ta_137","agree-list__detail":"_agree-list__detail_1b0ta_155","agree-list__detail-secondary":"_agree-list__detail-secondary_1b0ta_158","agree-list__list--secondary":"_agree-list__list--secondary_1b0ta_161","agree-list__list--tertiary":"_agree-list__list--tertiary_1b0ta_171"},_e={components:{PageContents:E,PageTextGroup:w,PageMainText:N,BasicButton:A,ButtonList:O,ButtonListItem:j,BasicInput:U,FormInvalid:G,FormInvalidMessage:V,FormList:H,FormListItem:R,BasicTextarea:q,InputBlock:z,InputBlockCell:J,UiAccordion:K,UiAccordionItem:D,UiAccordionLayer:Q,UiAccordionOpener:W,CheckBox:X,CheckBoxLabelText:Y,CheckBoxObject:Z,BottomSticky:ee},setup(){const s=te({commentError:!1,nameError:!1,phoneError:!1}),a={ui:{header:F()}};return se(()=>{a.ui.header.setTitle(()=>"SMS 상담"),a.ui.header.setLeftButtons(()=>["back"]),a.ui.header.setRightButtons(()=>[])}),ae(()=>{a.ui.header.setTitle(),a.ui.header.setLeftButtons(),a.ui.header.setRightButtons()}),{state:s}}},ne={class:"bottom-wrap"};function ie(s,a,me,n,ge,de){const b=l("PageMainText"),h=l("PageTextGroup"),i=l("FormInvalidMessage"),k=l("BasicTextarea"),d=l("BasicInput"),u=l("InputBlockCell"),p=l("InputBlock"),f=l("FormInvalid"),B=l("FormListItem"),y=l("FormList"),c=l("CheckBoxObject"),m=l("CheckBoxLabelText"),g=l("CheckBox"),C=l("UiAccordionOpener"),I=l("UiAccordionLayer"),x=l("UiAccordionItem"),L=l("UiAccordion"),M=l("BasicButton"),S=l("ButtonListItem"),P=l("ButtonList"),$=l("BottomSticky"),T=l("PageContents");return oe(),le(T,null,{foot:t(()=>[e($,null,{default:t(()=>[o("div",ne,[e(P,{classNames:{wrap:"row-margin-none"}},{default:t(()=>[e(S,null,{default:t(()=>[e(M,null,{default:t(()=>a[7]||(a[7]=[_("상담신청")])),_:1})]),_:1})]),_:1})])]),_:1})]),default:t(()=>[e(h,null,{default:t(()=>[e(b,null,{default:t(()=>a[0]||(a[0]=[_(" 고객님의 상담에"),o("br",null,null,-1),_(" 최대한 빠르게 답변해 드리겠습니다 ")])),_:1})]),_:1}),e(y,null,{default:t(()=>[e(k,{error:n.state.commentError,titleText:"상담내용",title:"상담내용"},{bottom:t(()=>[e(i,null,{default:t(()=>a[1]||(a[1]=[_("Error Message")])),_:1})]),_:1},8,["error"]),e(B,{titleText:"이름",target:"#lmBlogPersonalSMSCounselingName"},{default:t(()=>[e(f,{error:n.state.nameError},{default:t(()=>[e(p,{error:n.state.nameError},{default:t(()=>[e(u,{flexible:!0},{default:t(()=>[e(d,{title:"이름",id:"lmBlogPersonalSMSCounselingName"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>a[2]||(a[2]=[_("Error Message")])),_:1})]),_:1},8,["error"])]),_:1}),e(B,{titleText:"연락처",target:"#lmBlogPersonalSMSCounselingPhone"},{default:t(()=>[e(f,{error:n.state.phoneError},{default:t(()=>[e(p,{error:n.state.phoneError},{default:t(()=>[e(u,{flexible:!0},{default:t(()=>[e(d,{pattern:"\\d*",title:"연락처",id:"lmBlogPersonalSMSCounselingPhone"})]),_:1})]),_:1},8,["error"]),e(i,null,{default:t(()=>a[3]||(a[3]=[_("Error Message")])),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),o("div",{class:r([s.$style["agree-list"],"row-margin-contents-group"])},[e(L,{classNames:{wrap:s.$style["agree-list__container"]}},{default:t(()=>[e(x,{classNames:{item:s.$style["agree-list__all"]},initialOpen:!0},{default:t(()=>[o("div",{class:r(s.$style["agree-list__all-head"])},[e(g,{id:"lmBlogPersonalSMSCounselingAgreeAll",classNames:{wrap:s.$style["agree-list__all-checkbox"]}},{default:t(()=>[e(c),e(m,null,{default:t(()=>a[4]||(a[4]=[_("전체동의")])),_:1})]),_:1},8,["classNames"]),o("div",{class:r(s.$style["agree-list__right"])},[e(C,{classNames:{button:s.$style["agree-list__all-opener"]}},null,8,["classNames"])],2)],2),e(I,null,{default:t(()=>[o("div",{class:r(s.$style["agree-list__all-contents"])},[o("ul",{class:r(s.$style["agree-list__list"])},[o("li",{class:r(s.$style["agree-list__item"])},[o("div",{class:r(s.$style["agree-list__head"])},[e(g,{id:"lmBlogPersonalSMSCounselingAgree_001",classNames:{wrap:s.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[e(c),e(m,null,{default:t(()=>a[5]||(a[5]=[_("개인정보 수집 및 이용 동의")])),_:1})]),_:1},8,["classNames"]),o("div",{class:r(s.$style["agree-list__right"])},[o("button",{type:"button",class:r(s.$style["agree-list__link"])},[o("span",{class:r(s.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2),o("li",{class:r(s.$style["agree-list__item"])},[o("div",{class:r(s.$style["agree-list__head"])},[e(g,{id:"lmBlogPersonalSMSCounselingAgree_002",classNames:{wrap:s.$style["agree-list__checkbox"]},theme:"tertiary"},{default:t(()=>[e(c),e(m,null,{default:t(()=>a[6]||(a[6]=[_("개인정보 제공 동의")])),_:1})]),_:1},8,["classNames"]),o("div",{class:r(s.$style["agree-list__right"])},[o("button",{type:"button",class:r(s.$style["agree-list__link"])},[o("span",{class:r(s.$style["agree-list__link-text"])}," 상세보기 ",2)],2)],2)],2)],2)],2)],2)]),_:1})]),_:1},8,["classNames"])]),_:1},8,["classNames"])],2)]),_:1})}const ce={$style:re},Ae=v(_e,[["render",ie],["__cssModules",ce]]);export{Ae as default};
