"use strict";(self.webpackChunkmy_les=self.webpackChunkmy_les||[]).push([[766],{766:function(a,e,s){s.r(e),s.d(e,{default:function(){return k}});var i=s(1413),r=(s(2791),"Dialogs_dialogs__tzAmJ"),n="Dialogs_dialogsItem__iFsXs",o="Dialogs_messages__nmtNN",l="Dialog1_dialog__8kMDa",t="Dialog1_active__cQKY9",d=s(3504),c=s(184),g=function(a){return a.isActive?t:l},m=function(a){var e="/dialogs/"+a.id;return(0,c.jsx)("div",{className:l,children:(0,c.jsx)(d.OL,{to:e,className:g,children:a.name})})},u="Message_dialog__EISLA",_=function(a){return(0,c.jsx)("div",{className:u,children:a.message})},x=s(5705),h="FormDialog_formDialogError__e7pll",j="FormDialog_sendBut__oVZgp",f="FormDialog_textarea__ozbjp",v="FormDialog_formErrorArea__vHULb",D=s(132),N=D.Ry().shape({areaDialog:D.Z_().min(0,"Too Short!").max(100,"Too Long!").required("Too Short!")}),p=function(a){return(0,c.jsx)("div",{children:(0,c.jsx)(x.J9,{initialValues:{areaDialog:""},validationSchema:N,onSubmit:function(e,s){var i=s.setSubmitting;a.addNewMes(e.areaDialog),i(!1),e.areaDialog=""},children:function(a){var e=a.isSubmitting,s=a.errors;return(0,c.jsxs)(x.l0,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(x.gN,{as:"textarea",name:"areaDialog",placeholder:"Enter message here",className:"".concat(s.areaDialog?v:f)}),(0,c.jsx)("p",{}),s.areaDialog&&(0,c.jsx)("div",{className:h,children:s.areaDialog})]}),(0,c.jsx)("p",{}),(0,c.jsx)("button",{className:j,type:"submit",disabled:e,children:"Send"})]})}})})},b=function(a){var e=a.messagesPage,s=e.dialogs.map((function(a){return(0,c.jsx)(m,{name:a.name,id:a.id},a.id)})),i=e.messages.map((function(a){return(0,c.jsx)(_,{message:a.message},a.id)}));return(0,c.jsxs)("div",{className:r,children:[(0,c.jsx)("div",{className:n,children:s}),(0,c.jsxs)("div",{className:o,children:[i,(0,c.jsx)(p,{addNewMes:function(e){a.addMesKey(e)}})]})]})},S=s(364),y=s(6871),M=s(1575);var k=(0,s(7781).qC)((0,S.$j)((function(a){return{messagesPage:a.messagesPage}}),{addMesKey:M.N.addMesKey}),(function(a){return function(e){var s=(0,y.TH)(),r=(0,y.s0)(),n=(0,y.UO)();return(0,c.jsx)(a,(0,i.Z)((0,i.Z)({},e),{},{router:{location:s,navigate:r,params:n}}))}}))(b)}}]);
//# sourceMappingURL=766.efbbb7aa.chunk.js.map