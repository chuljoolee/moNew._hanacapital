import{P as U}from"./PageContents-1df8324b.js";import{_ as F,U as O,F as R,a as V,P as q,k as z,b as A,B as C}from"./index-9e106429.js";import{B as P,a as $}from"./ButtonListItem-86502814.js";import{F as J,a as K}from"./FormInvalidMessage-c0abb742.js";import{F as j}from"./FormList-4a2af706.js";import{F as D}from"./FormListItem-10f86a80.js";import{I as Q,a as W}from"./InputBlockCell-d7e6e489.js";import{P as X}from"./PageTextGroup-90dfb158.js";import{S as Y}from"./SecurityInput-365e31ae.js";import{b as Z,r as v,J as s,q as k,A as M,H as e,K as t,L as a,v as i,x as o}from"./vue-c1e56059.js";import"./vendor-58bdd0ff.js";import"./chart-387708a7.js";const h={"basic-list":"_basic-list_1dy5d_1","basic-list__item":"_basic-list__item_1dy5d_6","basic-list__symbol":"_basic-list__symbol_1dy5d_19","basic-list__content":"_basic-list__content_1dy5d_54","basic-list--regular":"_basic-list--regular_1dy5d_59","basic-list--large-margin":"_basic-list--large-margin_1dy5d_74","basic-list--medium-margin":"_basic-list--medium-margin_1dy5d_77","basic-list--regular-margin":"_basic-list--regular-margin_1dy5d_80","basic-list--normal-margin":"_basic-list--normal-margin_1dy5d_83","basic-list--small-margin":"_basic-list--small-margin_1dy5d_86","basic-list--mini-margin":"_basic-list--mini-margin_1dy5d_89","basic-list--none-margin":"_basic-list--none-margin_1dy5d_92","basic-list--fixed-width":"_basic-list--fixed-width_1dy5d_95","notice-section":"_notice-section_1dy5d_99","notice-section__title":"_notice-section__title_1dy5d_105"},tt={components:{UiLayer:O,FullPopup:R,FullPopupHead:V,PopupButton:q,PageTextGroup:X,PageMainText:z,FormList:j,FormListItem:D,FormInvalid:J,InputBlock:Q,InputBlockCell:W,BasicInput:A,FormInvalidMessage:K,ButtonList:P,ButtonListItem:$,BasicButton:C,SecurityInput:Y},setup(){const n=Z({nameError:!1,idNumberError:!1}),l=v(null);return{state:n,layer:l}}},et={class:"row-margin-contents"};function st(n,l,u,r,N,S){const m=s("PopupButton"),d=s("FullPopupHead"),p=s("PageMainText"),f=s("PageTextGroup"),c=s("BasicInput"),_=s("InputBlockCell"),y=s("InputBlock"),b=s("FormInvalidMessage"),g=s("FormInvalid"),B=s("FormListItem"),T=s("SecurityInput"),w=s("FormList"),I=s("BasicButton"),L=s("ButtonListItem"),E=s("ButtonList"),x=s("FullPopup"),G=s("UiLayer");return k(),M(G,{ref:"layer",type:"full"},{default:e(H=>[t(x,null,{head:e(()=>[t(d,null,{right:e(()=>[t(m,{onClick:at=>H.close()},null,8,["onClick"])]),_:2},1024)]),foot:e(()=>[t(E,{classNames:{wrap:"row-margin-none"}},{default:e(()=>[t(L,null,{default:e(()=>[t(I,{line:!0,theme:"quaternary"},{default:e(()=>l[4]||(l[4]=[a("삭제")])),_:1})]),_:1}),t(L,null,{default:e(()=>[t(I,null,{default:e(()=>l[5]||(l[5]=[a("등록")])),_:1})]),_:1})]),_:1})]),default:e(()=>[t(f,null,{default:e(()=>[t(p,null,{default:e(()=>l[0]||(l[0]=[a(" 공동인증서를"),i("br",null,null,-1),a(" 등록해 주세요 ")])),_:1})]),_:1}),t(w,null,{default:e(()=>[t(B,{titleText:"이름",target:"#layerSignCertificateName"},{default:e(()=>[t(g,{error:r.state.nameError},{default:e(()=>[t(y,{error:r.state.nameError},{default:e(()=>[t(_,{flexible:!0},{default:e(()=>[t(c,{title:"이름",id:"layerSignCertificateName"})]),_:1})]),_:1},8,["error"]),t(b,null,{default:e(()=>l[1]||(l[1]=[a("Error Message")])),_:1})]),_:1},8,["error"])]),_:1}),t(B,{titleText:"주민등록번호",target:"#layerSignCertificateIdNumber01"},{default:e(()=>[t(g,{error:r.state.idNumberError},{default:e(()=>[t(y,{error:r.state.idNumberError},{default:e(()=>[t(_,{flexible:!0},{default:e(()=>[t(c,{type:"number",pattern:"\\d*",title:"주민등록번호 앞 6자리",id:"layerSignCertificateIdNumber01"})]),_:1}),t(_,{type:"sub"},{default:e(()=>l[2]||(l[2]=[a("-")])),_:1}),t(_,{flexible:!0},{default:e(()=>[t(T,{title:"주민등록번호 뒤 7자리",dot:[!0,!0,!0,!1,!1,!1,!1]})]),_:1})]),_:1},8,["error"]),t(b,null,{default:e(()=>l[3]||(l[3]=[a("Error Message")])),_:1})]),_:1},8,["error"])]),_:1})]),_:1}),i("div",et,[i("section",{class:o(n.$style["notice-section"])},[i("h3",{class:o(n.$style["notice-section__title"])},"공동인증서 등록",2),i("ul",{class:o([n.$style["basic-list"],n.$style["basic-list--regular"]])},[i("li",{class:o(n.$style["basic-list__item"])},[i("div",{class:o(n.$style["basic-list__symbol"])},null,2),i("div",{class:o(n.$style["basic-list__content"])}," 개인/개인사업자 회원은 공동인증서 로그인을 위해 아이디에 공동인증서를 등록해야 합니다. (법인 회원은 별도 등록이 필요하지 않습니다.) ",2)],2)],2)],2),i("section",{class:o(n.$style["notice-section"])},[i("h3",{class:o(n.$style["notice-section__title"])},"공동인증서 삭제",2),i("ul",{class:o([n.$style["basic-list"],n.$style["basic-list--regular"]])},[i("li",{class:o(n.$style["basic-list__item"])},[i("div",{class:o(n.$style["basic-list__symbol"])},null,2),i("div",{class:o(n.$style["basic-list__content"])}," 아이디에 등록했던 공동인증서를 삭제합니다. 공동인증서를 삭제할 경우 로그인을 위해 공동인증서를 다시 등록해야 합니다. ",2)],2)],2)],2)])]),_:2},1024)]),_:1},512)}const nt={$style:h},lt=F(tt,[["render",st],["__cssModules",nt]]),it={components:{PageContents:U,BasicButton:C,ButtonList:P,ButtonListItem:$,LayerSignInCertificateRegist:lt},setup(){const n=v(null);return{layer001:n,layer001Open:(u={})=>{n.value.layer.open(u.target)}}}};function ot(n,l,u,r,N,S){const m=s("BasicButton"),d=s("ButtonListItem"),p=s("ButtonList"),f=s("LayerSignInCertificateRegist"),c=s("PageContents");return k(),M(c,null,{default:e(()=>[t(p,{classNames:{wrap:"row-margin-none"},align:"full"},{default:e(()=>[t(d,null,{default:e(()=>[t(m,{onClick:r.layer001Open},{default:e(()=>l[0]||(l[0]=[a(" 공동인증서 등록"),i("br",null,null,-1),a("Member_M02_l001 ")])),_:1},8,["onClick"])]),_:1})]),_:1}),t(f,{ref:"layer001"},null,512)]),_:1})}const It=F(it,[["render",ot]]);export{It as default};
