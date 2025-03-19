import{_ as P,B as O,R as z,b as j,j as G,l as U}from"./index-9e106429.js";import{P as J}from"./PageContents-1df8324b.js";import{B as W,a as Q}from"./ButtonListItem-86502814.js";import{B as X}from"./BasicBox-59544550.js";import{B as Y}from"./BasicBoxHead-aee43d87.js";import{B as Z}from"./BasicBoxHeadLeft-df2cc302.js";import{B as $}from"./BasicBoxHeadRight-3c8ec40b.js";import{K as h,a as ee,b as te,c as le}from"./KeyValueText-8775725c.js";import{I as ae,a as se}from"./InputBlockCell-d7e6e489.js";import{B as oe}from"./BankSelect-f1cc6443.js";import{F as ne}from"./FormList-4a2af706.js";import{F as re}from"./FormListItem-10f86a80.js";import{F as ie,a as ue}from"./FormInvalidMessage-c0abb742.js";import{F as de}from"./FormHelpText-2c5b5418.js";import{C as me}from"./CarEmblem-d7b95f02.js";import{B as fe}from"./BasicSelect-b3b422b7.js";import{B as pe,a as _e}from"./BoxCheckLabel-cf75aaf1.js";import{B as ve,a as xe}from"./BoxCheckListItem-d22f194a.js";import{B as ye}from"./BottomSticky-04097cb1.js";import{I as be}from"./check-document-3988de8e.js";import{b as Re,k as Be,T as Se,A as Ee,H as t,J as o,q as ge,K as e,v as s,L as a,x as m}from"./vue-c1e56059.js";import"./vendor-58bdd0ff.js";import"./chart-387708a7.js";import"./SelectButton-f1b412cc.js";import"./dropdown-5c299e7b.js";import"./PopupTitle-44083e3f.js";import"./ToastPopup-29747444.js";import"./ToastPopupHead-d9b90fc7.js";import"./UiTabPanel-03a39b02.js";import"./RoundTabButton-99f061f9.js";import"./BankLogo-6ffcf03b.js";import"./check-l-b746aa41.js";const ce={"add-button":"_add-button_1pfkv_1","add-button__inner":"_add-button__inner_1pfkv_29","add-button__text":"_add-button__text_1pfkv_33","add-button__icon":"_add-button__icon_1pfkv_42","add-button__icon--secondary":"_add-button__icon--secondary_1pfkv_54","appoint-wrap":"_appoint-wrap_1pfkv_58","appoint-wrap-input":"_appoint-wrap-input_1pfkv_62","appoint-btn":"_appoint-btn_1pfkv_66","appoint-btn-large":"_appoint-btn-large_1pfkv_74"},Le={components:{PageContents:J,ButtonList:W,ButtonListItem:Q,BasicButton:O,BasicBox:X,BasicBoxHead:Y,BasicBoxHeadLeft:Z,BasicBoxHeadRight:$,RoundStatus:z,KeyValue:h,KeyValueItem:ee,KeyValueTitle:te,KeyValueText:le,InputBlock:ae,InputBlockCell:se,BasicInput:j,BankSelect:oe,FormList:ne,FormListItem:re,FormInvalid:ie,FormInvalidMessage:ue,FormHelpText:de,CarEmblem:me,BasicSelect:fe,BoxCheck:pe,BoxCheckLabel:_e,BoxCheckList:ve,BoxCheckListItem:xe,BottomSticky:ye,IconLink:G,IconCheckDocument:be},setup(){const d=Re({storeError:!1,salespersonError:!1,bankError:!1,accountError:!1,domesticBankNameError:!1,accountSelectError:!1}),l={ui:{header:U()}};return Be(()=>{l.ui.header.setTitle(()=>"품의등록"),l.ui.header.setLeftButtons(()=>["back"]),l.ui.header.setRightButtons(()=>[])}),Se(()=>{l.ui.header.setTitle(),l.ui.header.setLeftButtons(),l.ui.header.setRightButtons()}),{state:d}}},we={class:"row-margin-container-medium"},ke={class:"row-margin-container-medium"},Ae={class:"flex-box justify-conten-end"},qe={class:"flex-box__cell"},Ie={class:"flex-box justify-conten-end"},Te={class:"flex-box__cell"},Ce={class:"row-margin-container-medium"},Ne={class:"row-margin-container-medium"},De={class:"row-margin-container-medium"},Fe={class:"flex-box"},Ve={class:"flex-box__cell"},Me={class:"flex-box__cell"},He={class:"bottom-wrap"};function Ke(d,l,Oe,n,ze,je){const I=o("BasicBoxHeadLeft"),c=o("RoundStatus"),T=o("BasicBoxHeadRight"),C=o("BasicBoxHead"),r=o("KeyValueTitle"),i=o("KeyValueText"),u=o("KeyValueItem"),L=o("KeyValue"),E=o("BasicBox"),w=o("CarEmblem"),g=o("BasicInput"),p=o("InputBlockCell"),y=o("BasicButton"),_=o("InputBlock"),v=o("FormInvalidMessage"),x=o("FormInvalid"),f=o("FormListItem"),b=o("BasicSelect"),k=o("FormList"),R=o("BoxCheckLabel"),B=o("BoxCheck"),S=o("BoxCheckListItem"),A=o("BoxCheckList"),N=o("BankSelect"),D=o("FormHelpText"),F=o("IconLink"),V=o("IconCheckDocument"),q=o("ButtonListItem"),M=o("ButtonList"),H=o("BottomSticky"),K=o("PageContents");return ge(),Ee(K,null,{foot:t(()=>[e(H,null,{default:t(()=>[s("div",He,[e(M,{classNames:{wrap:"row-margin-none"}},{default:t(()=>[e(q,null,{default:t(()=>[e(y,{minSide:!0,line:!0,theme:"quaternary"},{default:t(()=>l[66]||(l[66]=[a("이전")])),_:1})]),_:1}),e(q,null,{default:t(()=>[e(y,{minSide:!0},{default:t(()=>l[67]||(l[67]=[a("품의등록 요청")])),_:1})]),_:1})]),_:1})])]),_:1})]),default:t(()=>[s("div",null,[s("section",we,[l[36]||(l[36]=s("h3",{class:"text-title-2 row-margin-contents"},"계약자 정보",-1)),e(E,null,{default:t(()=>[e(C,null,{default:t(()=>[e(I,null,{default:t(()=>l[0]||(l[0]=[s("h3",{class:"text-body-1 font-weight-medium"},"홍길동",-1)])),_:1}),e(T,null,{default:t(()=>[e(c,{block:!0,size:"small",theme:"secondary",square:"true"},{default:t(()=>l[1]||(l[1]=[a(" 개인 ")])),_:1}),e(c,{block:!0,size:"small",theme:"secondary",square:"true"},{default:t(()=>l[2]||(l[2]=[a(" 개인사업자 ")])),_:1}),e(c,{block:!0,size:"small",theme:"secondary",square:"true"},{default:t(()=>l[3]||(l[3]=[a(" 법인사업자 ")])),_:1})]),_:1})]),_:1}),e(L,{margin:"regular"},{default:t(()=>[e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[4]||(l[4]=[a("주민등록번호")])),_:1}),e(i,null,{default:t(()=>l[5]||(l[5]=[a("710908-1******")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[6]||(l[6]=[a("진행일정")])),_:1}),e(i,null,{default:t(()=>l[7]||(l[7]=[a("2022.10.03")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[8]||(l[8]=[a("상품명")])),_:1}),e(i,null,{default:t(()=>l[9]||(l[9]=[a(" 운용리스 "),s("br",null,null,-1),a(" 할부 ")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[10]||(l[10]=[a("대표자 이름")])),_:1}),e(i,null,{default:t(()=>l[11]||(l[11]=[a("홍길동")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[12]||(l[12]=[a("대표자 주민등록번호")])),_:1}),e(i,null,{default:t(()=>l[13]||(l[13]=[a("710908-1******")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[14]||(l[14]=[a("사업자번호")])),_:1}),e(i,null,{default:t(()=>l[15]||(l[15]=[a("123-12-12345")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[16]||(l[16]=[a("법인등록번호")])),_:1}),e(i,null,{default:t(()=>l[17]||(l[17]=[a("123-12-12345")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[18]||(l[18]=[a("사업자번호")])),_:1}),e(i,null,{default:t(()=>l[19]||(l[19]=[a("123-12-12345")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[20]||(l[20]=[a("연대보증인 이름")])),_:1}),e(i,null,{default:t(()=>l[21]||(l[21]=[a("홍길동")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[22]||(l[22]=[a("연대보증인 주민등록번호")])),_:1}),e(i,null,{default:t(()=>l[23]||(l[23]=[a("710908-1******")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[24]||(l[24]=[a("견적번호")])),_:1}),e(i,null,{default:t(()=>l[25]||(l[25]=[a("[대구지점]A12345678978")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[26]||(l[26]=[a("모델")])),_:1}),e(i,null,{default:t(()=>l[27]||(l[27]=[a(" 더 뉴 G70 2021년형 가솔린 2.0 터보"),s("br",null,null,-1),a(" (개소세5%기준) 2WD A/T ")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[28]||(l[28]=[a("취득원가")])),_:1}),e(i,null,{default:t(()=>l[29]||(l[29]=[a("42,915,025 원")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[30]||(l[30]=[a("선납금/보증금")])),_:1}),e(i,null,{default:t(()=>l[31]||(l[31]=[a("4,110,000 원 / 8,220,000 원")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[32]||(l[32]=[a("월납입금")])),_:1}),e(i,null,{default:t(()=>l[33]||(l[33]=[a("628,190 원")])),_:1})]),_:1}),e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[34]||(l[34]=[a("출고/유형")])),_:1}),e(i,null,{default:t(()=>l[35]||(l[35]=[a("대리점출고 / 현금결제, 리스사명의")])),_:1})]),_:1})]),_:1})]),_:1})]),s("section",ke,[l[48]||(l[48]=s("h3",{class:"text-title-2 row-margin-contents"},"판매점 정보",-1)),e(E,{className:"row-margin-contents"},{default:t(()=>[e(L,null,{default:t(()=>[e(u,{classNames:{item:"text-body-3"}},{default:t(()=>[e(r,null,{default:t(()=>l[37]||(l[37]=[a("브랜드")])),_:1}),e(i,null,{default:t(()=>[s("div",Ae,[s("div",qe,[e(w,{src:"/images/_dummy/car-emblem.png",name:"현대"})]),l[38]||(l[38]=s("div",{class:"flex-box__cell flex-box__cell--small"},"현대",-1))]),s("div",Ie,[s("div",Te,[e(w,{src:"/images/_dummy/car-emblem.png",name:"벤츠"})]),l[39]||(l[39]=s("div",{class:"flex-box__cell flex-box__cell--small"},"벤츠",-1))])]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(f,{titleText:"판매대리점",target:"#leaseRentEstimationSystemSaveReviewApprovalRequestLeaseStoreSearch",class:m(d.$style["appoint-wrap"])},{default:t(()=>[e(x,{error:n.state.storeError},{default:t(()=>[e(_,{error:n.state.storeError},{right:t(()=>[e(y,{size:"mini",theme:"tertiary",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseStoreSearch",class:m(d.$style["appoint-btn"])},{default:t(()=>l[40]||(l[40]=[a("검색")])),_:1},8,["class"])]),default:t(()=>[e(p,{flexible:!0,class:m(d.$style["appoint-wrap-input"])},{default:t(()=>[e(g,{title:"판매대리점",disabled:!0})]),_:1},8,["class"])]),_:1},8,["error"]),e(v,null,{default:t(()=>l[41]||(l[41]=[a("Error Message")])),_:1})]),_:1},8,["error"])]),_:1},8,["class"]),e(f,{titleText:"딜러사",target:"#leaseRentEstimationSystemSaveReviewApprovalRequestLeaseDealer001Button",selectOnly:!0},{default:t(()=>[e(x,{error:n.state.dealer001Error},{default:t(()=>[e(_,{error:n.state.dealer001Error},{default:t(()=>[e(p,{flexible:!0},{default:t(()=>[e(b,{option:[{value:"1",text:"한성자동차㈜"},{value:"2",text:"주식회사진모터스"},{value:"3",text:"중앙모터스㈜"},{value:"4",text:"교학모터스㈜"},{value:"5",text:"경남자동차판매㈜"}],buttonTitle:"딜러사 선택하기",layerTitle:"딜러사를 선택해 주세요",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseDealer001",buttonId:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseDealer001Button"})]),_:1})]),_:1},8,["error"]),e(v,null,{default:t(()=>l[42]||(l[42]=[a("Error Message")])),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"전시장",titleOptionalText:"(판매대리점)",target:"#leaseRentEstimationSystemSaveReviewApprovalRequestLeaseAgency001Button",selectOnly:!0,disabled:!0},{default:t(()=>[e(x,{error:n.state.agency001Error},{default:t(()=>[e(_,{error:n.state.agency001Error,disabled:!0},{default:t(()=>[e(p,{flexible:!0},{default:t(()=>[e(b,{option:[{value:"1",text:"강남지점"},{value:"2",text:"서초지점"},{value:"3",text:"잠실지점"}],buttonTitle:"전시장 선택하기",layerTitle:"전시장을 선택해 주세요",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseAgency001",buttonId:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseAgency001Button",disabled:!0})]),_:1})]),_:1},8,["error"]),e(v,null,{default:t(()=>l[43]||(l[43]=[a("Error Message")])),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"딜러사",target:"#leaseRentEstimationSystemSaveReviewApprovalRequestLeaseDealer002Button",selectOnly:!0,disabled:!0},{default:t(()=>[e(x,{error:n.state.dealer002Error},{default:t(()=>[e(_,{error:n.state.dealer002Error,disabled:!0},{default:t(()=>[e(p,{flexible:!0},{default:t(()=>[e(b,{option:[{value:"1",text:"한성자동차㈜"},{value:"2",text:"주식회사진모터스"},{value:"3",text:"중앙모터스㈜"},{value:"4",text:"교학모터스㈜"},{value:"5",text:"경남자동차판매㈜"}],buttonTitle:"딜러사 선택하기",layerTitle:"딜러사를 선택해 주세요",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseDealer002",buttonId:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseDealer002Button",defaultValue:"1",disabled:!0})]),_:1})]),_:1},8,["error"]),e(v,null,{default:t(()=>l[44]||(l[44]=[a("Error Message")])),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"전시장",titleOptionalText:"(판매대리점)",target:"#leaseRentEstimationSystemSaveReviewApprovalRequestLeaseAgency002Button",selectOnly:!0},{default:t(()=>[e(x,{error:n.state.agency002Error},{default:t(()=>[e(_,{error:n.state.agency002Error},{default:t(()=>[e(p,{flexible:!0},{default:t(()=>[e(b,{option:[{value:"1",text:"강남지점"},{value:"2",text:"서초지점"},{value:"3",text:"잠실지점"}],buttonTitle:"전시장 선택하기",layerTitle:"전시장을 선택해 주세요",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseAgency002",buttonId:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseAgency002Button"})]),_:1})]),_:1},8,["error"]),e(v,null,{default:t(()=>l[45]||(l[45]=[a("Error Message")])),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"판매사원",titleOptionalText:"(선택)",target:"#leaseRentEstimationSystemSaveReviewApprovalRequestLeaseSalespersonSearch",class:m(d.$style["appoint-wrap"])},{default:t(()=>[e(x,{error:n.state.salespersonError},{default:t(()=>[e(_,{error:n.state.salespersonError},{right:t(()=>[e(y,{size:"mini",theme:"tertiary",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseSalespersonSearch",class:m(d.$style["appoint-btn"])},{default:t(()=>l[46]||(l[46]=[a("검색")])),_:1},8,["class"])]),default:t(()=>[e(p,{flexible:!0,class:m(d.$style["appoint-wrap-input"])},{default:t(()=>[e(g,{title:"판매사원",disabled:!0})]),_:1},8,["class"])]),_:1},8,["error"]),e(v,null,{default:t(()=>l[47]||(l[47]=[a("Error Message")])),_:1})]),_:1},8,["error"])]),_:1},8,["class"])]),_:1})]),s("section",Ce,[l[50]||(l[50]=s("h3",{class:"text-title-2 row-margin-contents"},"영업사원(AG) 정보",-1)),e(E,null,{default:t(()=>l[49]||(l[49]=[s("h4",{class:"text-body-1 font-weight-medium"},"김사원",-1)])),_:1})]),s("section",Ne,[l[62]||(l[62]=s("div",{class:"row-margin-contents"},[s("div",{class:"flex-box align-items-end"},[s("div",{class:"flex-box__cell"},[s("h3",{class:"text-title-2"},"계약금 송금계좌")]),s("div",{class:"flex-box__cell flex-box__cell--small"},[s("div",{class:"text-body-3"},"(선택)")])]),s("div",{class:"flex-box align-items-end"},[s("div",{class:"flex-box__cell"},[s("h3",{class:"text-title-2"},"차량대금 송금계좌")]),s("div",{class:"flex-box__cell flex-box__cell--small"},[s("div",{class:"text-body-3"},"(선택)")])]),s("h3",{class:"text-title-2"},"차량대금 송금계좌")],-1)),e(k,null,{default:t(()=>[e(f,{titleText:"지급처",forceFocus:!0},{default:t(()=>[e(A,null,{default:t(()=>[e(S,null,{default:t(()=>[e(B,{name:"leaseRentEstimationSystemSaveReviewApprovalRequestLeasePaymentDestination001",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeasePaymentDestination001_001",defaultChecked:!0},{default:t(()=>[e(R,null,{default:t(()=>l[51]||(l[51]=[a(" 판매사"),s("br",null,null,-1),a(" (가상) ")])),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(B,{name:"leaseRentEstimationSystemSaveReviewApprovalRequestLeasePaymentDestination001",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeasePaymentDestination001_002"},{default:t(()=>[e(R,null,{default:t(()=>l[52]||(l[52]=[a(" 고객"),s("br",null,null,-1),a(" (가상) ")])),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(B,{name:"leaseRentEstimationSystemSaveReviewApprovalRequestLeasePaymentDestination001",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeasePaymentDestination001_003"},{default:t(()=>[e(R,null,{default:t(()=>l[53]||(l[53]=[a("고객")])),_:1})]),_:1})]),_:1})]),_:1}),e(A,null,{default:t(()=>[e(S,null,{default:t(()=>[e(B,{name:"leaseRentEstimationSystemSaveReviewApprovalRequestLeasePaymentDestination002",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeasePaymentDestination002_001",defaultChecked:!0},{default:t(()=>[e(R,null,{default:t(()=>l[54]||(l[54]=[a(" 할부약정"),s("br",null,null,-1),a(" 판매대리점 ")])),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(B,{name:"leaseRentEstimationSystemSaveReviewApprovalRequestLeasePaymentDestination002",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeasePaymentDestination002_002"},{default:t(()=>[e(R,null,{default:t(()=>l[55]||(l[55]=[a(" 할부약정"),s("br",null,null,-1),a(" 판매대리점 (가상) ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{titleText:"은행명",target:"#leaseRentEstimationSystemSaveReviewApprovalRequestLeaseBankButton",selectOnly:!0},{default:t(()=>[e(x,{error:n.state.bankError},{default:t(()=>[e(_,{error:n.state.bankError},{default:t(()=>[e(p,{flexible:!0},{default:t(()=>[e(N,{id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseBank",buttonId:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseBankButton"})]),_:1})]),_:1},8,["error"]),e(v,null,{default:t(()=>l[56]||(l[56]=[a("Error Message")])),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"계좌번호",target:"#leaseRentEstimationSystemSaveReviewApprovalRequestLeaseAccount",class:m(d.$style["appoint-wrap"])},{default:t(()=>[e(x,{error:n.state.accountError},{default:t(()=>[e(_,{error:n.state.accountError},{right:t(()=>[e(y,{size:"mini",theme:"tertiary",class:m(d.$style["appoint-btn-large"])},{default:t(()=>l[57]||(l[57]=[a(" 계좌확인 ")])),_:1},8,["class"])]),default:t(()=>[e(p,{flexible:!0,class:m(d.$style["appoint-wrap-input"])},{default:t(()=>[e(g,{pattern:"\\d*",title:"계좌번호",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseAccount"})]),_:1},8,["class"])]),_:1},8,["error"]),e(v,null,{default:t(()=>l[58]||(l[58]=[a("계좌번호를 다시 입력해 주세요")])),_:1}),e(D,null,{default:t(()=>l[59]||(l[59]=[a("-없이 숫자만 입력해 주세요.")])),_:1})]),_:1},8,["error"])]),_:1},8,["class"]),e(f,{titleText:"예금주명",target:"#leaseRentEstimationSystemSaveReviewApprovalRequestLeaseDomesticBankName",disabled:!0},{default:t(()=>[e(x,{error:n.state.domesticBankNameError},{default:t(()=>[e(_,{error:n.state.domesticBankNameError,disabled:!0},{default:t(()=>[e(p,{flexible:!0},{default:t(()=>[e(g,{title:"예금주명",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseDomesticBankName",disabled:!0})]),_:1})]),_:1},8,["error"]),e(v,null,{default:t(()=>l[60]||(l[60]=[a("Error Message")])),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"계좌정보",target:"#leaseRentEstimationSystemSaveReviewApprovalRequestLeaseAccountButton",selectOnly:!0},{default:t(()=>[e(x,{error:n.state.accountSelectError},{default:t(()=>[e(_,{error:n.state.accountSelectError},{default:t(()=>[e(p,{flexible:!0},{default:t(()=>[e(b,{option:[{value:"1",text:"하나 123-456-78457 / 김하나"}],buttonTitle:"계좌정보 선택하기",layerTitle:"계좌정보를 선택해 주세요",id:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseAccount",buttonId:"leaseRentEstimationSystemSaveReviewApprovalRequestLeaseAccountButton"})]),_:1})]),_:1},8,["error"]),e(v,null,{default:t(()=>l[61]||(l[61]=[a("Error Message")])),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),s("section",De,[l[65]||(l[65]=s("div",{class:"row-margin-contents"},[s("div",{class:"flex-box align-items-end"},[s("div",{class:"flex-box__cell"},[s("h3",{class:"text-title-2"},"서류등록")]),s("div",{class:"flex-box__cell flex-box__cell--small"},[s("div",{class:"text-body-3"},"(선택)")])]),s("p",{class:"text-body-3 font-weight-light color-gray-tertiary row-margin-small"}," 매매계약서, 계좌확인증을 등록해 주세요. ")],-1)),s("button",{type:"button",class:m([d.$style["add-button"],"row-margin-item"])},[s("span",{class:m(d.$style["add-button__inner"])},[s("span",{class:m(d.$style["add-button__text"])},"서류등록",2),s("span",{class:m([d.$style["add-button__icon"],d.$style["add-button__icon--secondary"]])},[e(F)],2)],2)],2),e(E,null,{default:t(()=>[s("div",Fe,[s("div",Ve,[e(V,{class:"display-block"})]),l[64]||(l[64]=s("div",{class:"flex-box__cell flex-1"},[s("div",{class:"text-body-3"},"등록 완료")],-1)),s("div",Me,[e(y,{size:"mini",theme:"quaternary"},{default:t(()=>l[63]||(l[63]=[a(" 추가첨부 ")])),_:1})])])]),_:1})])])]),_:1})}const Pe={$style:ce},Et=P(Le,[["render",Ke],["__cssModules",Pe]]);export{Et as default};
