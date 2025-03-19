import{_ as N,k as b,B as P,b as U,l as M}from"./index-9e106429.js";import{P as h}from"./PageContents-1df8324b.js";import{P as v}from"./PageTextGroup-90dfb158.js";import{B as y,a as H}from"./ButtonListItem-86502814.js";import{F as S}from"./FormList-4a2af706.js";import{F as R}from"./FormListItem-10f86a80.js";import{F as G,a as V}from"./FormInvalidMessage-c0abb742.js";import{F as q}from"./FormHelpText-2c5b5418.js";import{B as A}from"./BasicTextarea-995d7b56.js";import{I as J,a as K}from"./InputBlockCell-d7e6e489.js";import{B as O,a as j}from"./BoxCheckLabel-cf75aaf1.js";import{B as z,a as D}from"./BoxCheckListItem-d22f194a.js";import{b as Q,k as W,T as X,A as Y,H as t,J as r,q as Z,K as e,L as n,v as m}from"./vue-c1e56059.js";import"./vendor-58bdd0ff.js";import"./chart-387708a7.js";const $={components:{PageContents:h,PageTextGroup:v,PageMainText:b,BasicButton:P,ButtonList:y,ButtonListItem:H,InputBlock:J,InputBlockCell:K,BasicInput:U,FormList:S,FormListItem:R,FormInvalid:G,FormInvalidMessage:V,FormHelpText:q,BoxCheck:O,BoxCheckLabel:j,BoxCheckList:z,BoxCheckListItem:D,BasicTextarea:A},setup(){const a={ui:{header:M()}},o=Q({nameError:!1,birthdayError:!1,phoneError:!1,productError:!1,memoError:!1});return W(()=>{a.ui.header.setTitle(()=>"중고할부·론"),a.ui.header.setLeftButtons(()=>["back"]),a.ui.header.setRightButtons(()=>[])}),X(()=>{a.ui.header.setTitle(),a.ui.header.setLeftButtons(),a.ui.header.setRightButtons()}),{state:o}}},ee={class:"row-margin-contents-group row-margin-bottom-none"};function te(a,o,oe,s,re,ne){const L=r("PageMainText"),k=r("PageTextGroup"),d=r("BasicInput"),f=r("InputBlockCell"),p=r("InputBlock"),l=r("FormInvalidMessage"),u=r("FormInvalid"),i=r("FormListItem"),c=r("FormHelpText"),C=r("BoxCheckLabel"),g=r("BoxCheck"),x=r("BoxCheckListItem"),T=r("BoxCheckList"),F=r("BasicTextarea"),w=r("FormList"),_=r("BasicButton"),B=r("ButtonListItem"),I=r("ButtonList"),E=r("PageContents");return Z(),Y(E,null,{default:t(()=>[e(k,null,{default:t(()=>[e(L,null,{default:t(()=>o[0]||(o[0]=[n(" 손님 정보를"),m("br",null,null,-1),n(" 입력해 주세요 ")])),_:1})]),_:1}),m("div",null,[e(w,null,{default:t(()=>[e(i,{titleText:"성명",target:"#salesUsedCarNewCounselingName"},{default:t(()=>[e(u,{error:s.state.nameError},{default:t(()=>[e(p,{error:s.state.nameError},{default:t(()=>[e(f,{flexible:!0},{default:t(()=>[e(d,{title:"성명",id:"salesUsedCarNewCounselingName"})]),_:1})]),_:1},8,["error"]),e(l,null,{default:t(()=>o[1]||(o[1]=[n("Error Message")])),_:1})]),_:1},8,["error"])]),_:1}),e(i,{titleText:"생년월일",target:"#salesUsedCarNewCounselingBirthday"},{default:t(()=>[e(u,{error:s.state.birthdayError},{default:t(()=>[e(p,{error:s.state.birthdayError},{default:t(()=>[e(f,{flexible:!0},{default:t(()=>[e(d,{type:"number",pattern:"\\d*",title:"생년월일",id:"salesUsedCarNewCounselingBirthday"})]),_:1})]),_:1},8,["error"]),e(l,null,{default:t(()=>o[2]||(o[2]=[n("Error Message")])),_:1}),e(c,null,{default:t(()=>o[3]||(o[3]=[n("숫자만 입력해 주세요. (예:230503)")])),_:1})]),_:1},8,["error"])]),_:1}),e(i,{titleText:"휴대폰번호",target:"#salesUsedCarNewCounselingPhone"},{default:t(()=>[e(u,{error:s.state.phoneError},{default:t(()=>[e(p,{error:s.state.phoneError},{default:t(()=>[e(f,{flexible:!0},{default:t(()=>[e(d,{pattern:"\\d*",title:"휴대폰번호",id:"salesUsedCarNewCounselingPhone"})]),_:1})]),_:1},8,["error"]),e(l,null,{default:t(()=>o[4]||(o[4]=[n("Error Message")])),_:1})]),_:1},8,["error"])]),_:1}),e(i,{titleText:"상품선택",forceFocus:!0},{default:t(()=>[e(u,{error:s.state.productError},{default:t(()=>[e(T,{classNames:{wrap:"row-margin-item-group"}},{default:t(()=>[e(x,null,{default:t(()=>[e(g,{minSide:!0,name:"salesUsedCarNewCounselingProduct",id:"salesUsedCarNewCounselingProduct001",defaultChecked:!0},{default:t(()=>[e(C,null,{default:t(()=>o[5]||(o[5]=[n("모바일")])),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(g,{minSide:!0,name:"salesUsedCarNewCounselingProduct",id:"salesUsedCarNewCounselingProduct002"},{default:t(()=>[e(C,null,{default:t(()=>o[6]||(o[6]=[n("중고차할부")])),_:1})]),_:1})]),_:1})]),_:1}),e(l,null,{default:t(()=>o[7]||(o[7]=[n("Error Message")])),_:1})]),_:1},8,["error"])]),_:1}),e(F,{error:s.state.memoError,titleText:"메모",titleOptionalText:"(매매상사, 직원명, 연락처를 입력하세요.)",maxlength:20,count:!0,title:"메모"},{bottom:t(()=>[e(l,null,{default:t(()=>o[8]||(o[8]=[n("Error Message")])),_:1}),e(c,null,{default:t(()=>o[9]||(o[9]=[n("최대 20자 이내로 입력해주세요.")])),_:1})]),_:1},8,["error"])]),_:1})]),m("section",ee,[o[12]||(o[12]=m("h3",{class:"text-body-2 row-margin-item-medium"},"신용조회동의 요청",-1)),e(I,{classNames:{wrap:"row-margin-none"}},{default:t(()=>[e(B,null,{default:t(()=>[e(_,{theme:"tertiary"},{default:t(()=>o[10]||(o[10]=[n("ARS연결")])),_:1})]),_:1}),e(B,null,{default:t(()=>[e(_,null,{default:t(()=>o[11]||(o[11]=[n("URL전송")])),_:1})]),_:1})]),_:1})]),e(I,null,{default:t(()=>[e(B,null,{default:t(()=>[e(_,{line:!0,theme:"quaternary"},{default:t(()=>o[13]||(o[13]=[n("목록")])),_:1})]),_:1})]),_:1})]),_:1})}const Ie=N($,[["render",te]]);export{Ie as default};
