"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[409],{7409:function(n,e,t){t.r(e),t.d(e,{default:function(){return rn}});var a=t(9434),r=t(7689),i=t(799),s=t(1999),o=t(8141),l=t(2716),c=t(501),d=t(6015),u=t(2751),m=t(4942),v=t(3366),h=t(7462),p=t(2791),x=t(8182),Z=t(4419),f=t(9853),j=t(4565),b=t(1211),g=t(529),z=t(277),y=t(5878),w=t(1217);function C(n){return(0,w.Z)("MuiInputAdornment",n)}var I,A=(0,y.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),P=t(5513),S=t(184),E=["children","className","component","disablePointerEvents","disableTypography","position","variant"],M=(0,z.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["position".concat((0,f.Z)(t.position))],!0===t.disablePointerEvents&&e.disablePointerEvents,e[t.variant]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,h.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&(0,m.Z)({},"&.".concat(A.positionStart,"&:not(.").concat(A.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),k=p.forwardRef((function(n,e){var t=(0,P.Z)({props:n,name:"MuiInputAdornment"}),a=t.children,r=t.className,i=t.component,s=void 0===i?"div":i,o=t.disablePointerEvents,l=void 0!==o&&o,c=t.disableTypography,d=void 0!==c&&c,u=t.position,m=t.variant,z=(0,v.Z)(t,E),y=(0,g.Z)()||{},w=m;m&&y.variant,y&&!w&&(w=y.variant);var A=(0,h.Z)({},t,{hiddenLabel:y.hiddenLabel,size:y.size,disablePointerEvents:l,position:u,variant:w}),k=function(n){var e=n.classes,t=n.disablePointerEvents,a=n.hiddenLabel,r=n.position,i=n.size,s=n.variant,o={root:["root",t&&"disablePointerEvents",r&&"position".concat((0,f.Z)(r)),s,a&&"hiddenLabel",i&&"size".concat((0,f.Z)(i))]};return(0,Z.Z)(o,C,e)}(A);return(0,S.jsx)(b.Z.Provider,{value:null,children:(0,S.jsx)(M,(0,h.Z)({as:s,ownerState:A,className:(0,x.Z)(k.root,r),ref:e},z,{children:"string"!==typeof a||d?(0,S.jsxs)(p.Fragment,{children:["start"===u?I||(I=(0,S.jsx)("span",{className:"notranslate",children:"\u200b"})):null,a]}):(0,S.jsx)(j.Z,{color:"text.secondary",children:a})}))})})),L=t(9541),N=function(){var n=(0,a.I0)(),e=(0,a.v9)(s.DI);return(0,S.jsxs)(d.Z,{sx:{width:"250px"},children:[(0,S.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=t.target,r=t.target.elements,s=r.name,o=r.number,l=e.find((function(n){var e;return null!==(e=n.name===s.value)&&void 0!==e?e:n.number===o.value}));if(l)return alert("".concat(l.name," alredy have"));n((0,i.uK)({name:s.value,number:o.value})),a.reset()},children:[(0,S.jsx)(u.Z,{required:!0,name:"name",label:"Name",fullWidth:!0,size:"small",sx:{mt:2},InputProps:{startAdornment:(0,S.jsx)(k,{position:"start",children:(0,S.jsx)(c.Z,{color:"primary"})}),type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},children:"Name"}),(0,S.jsx)(u.Z,{type:"tel",required:!0,name:"number",label:"Number",fullWidth:!0,size:"small",sx:{mt:2},InputProps:{startAdornment:(0,S.jsx)(k,{position:"start",children:(0,S.jsx)(l.Z,{color:"primary"})}),type:"tel",name:"number",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"},children:"Number"}),(0,S.jsx)(L.Z,{size:"small",startIcon:(0,S.jsx)(o.Z,{}),type:"submit",sx:{mt:2},children:"Add Contact"})]}),(0,S.jsx)(r.j3,{})]})},H=t(4029),V=t(9952);var D,T,F,_,q=function(){var n=(0,a.I0)(),e=(0,a.v9)(s.aT);return(0,S.jsx)(d.Z,{sx:{width:"250px"},children:(0,S.jsxs)(u.Z,{type:"text",name:"search",margin:"normal",fullWidth:!0,size:"small",label:"Seacr Contact",value:e,onChange:function(e){var t=e.target.value;n((0,H.xO)(t))},InputProps:{startAdornment:(0,S.jsx)(k,{position:"start",children:(0,S.jsx)(V.Z,{color:"primary"})})},children:[(0,S.jsx)(V.Z,{}),"Find contact by name"]})})},B=t(644),R=t(9332),W=t(4918),G=t(7247),J=t(1286),O=t(7952),$=function(){var n=(0,a.I0)(),e=(0,a.v9)(s.DI),t=(0,a.v9)(s.vZ);(0,p.useEffect)((function(){n((0,i.yF)())}),[n,t]);var r=e.map((function(t){var a=t.id,r=t.name,s=t.number;return(0,S.jsxs)(O.Z,{component:"li",flexGrow:2,container:!0,rowSpacing:3,spacing:2,sx:{listStyle:"none",alignItems:"center"},children:[(0,S.jsx)(O.Z,{children:(0,S.jsx)(L.Z,{size:"small",variant:"outlined",startIcon:(0,S.jsx)(G.Z,{}),type:"button",onClick:function(){return function(e){return n((0,i.zY)(e))}(a)},children:(0,S.jsx)(j.Z,{variant:"caption",children:"Delete"})})}),(0,S.jsx)(O.Z,{children:(0,S.jsx)(L.Z,{size:"small",variant:"outlined",startIcon:(0,S.jsx)(J.Z,{}),type:"button",onClick:function(){return function(t){var a=e.find((function(n){return n.id===t}));n((0,B.m)(a))}(a)},children:(0,S.jsx)(j.Z,{variant:"caption",children:"Edit"})})}),(0,S.jsx)(O.Z,{children:(0,S.jsxs)(j.Z,{variant:"subtitle1",sx:{display:"flex",alignItems:"center"},children:[(0,S.jsx)(R.Z,{color:"primary"}),r,":"]})}),(0,S.jsx)(O.Z,{children:(0,S.jsxs)(j.Z,{variant:"subtitle1",sx:{display:"flex",alignItems:"center"},children:[(0,S.jsx)(W.Z,{color:"primary"}),s]})})]},a)}));return(0,S.jsxs)(d.Z,{component:"ul",sx:{p:0,mt:1},children:[e.length<1&&(0,S.jsx)(j.Z,{variant:"h6",sx:{ml:5},children:"Haven't any contact..."})," ",r]})},K=t(4164),Y=t(3329),Q=t(168),U=t(225),X=U.Z.div(D||(D=(0,Q.Z)(["\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.1);\n    top: 0;\n    left: 0;\n"]))),nn=U.Z.form(T||(T=(0,Q.Z)([" \n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 20px;\n    border: 2px solid rgb(181, 170, 242);\n    border-radius: 10px;\n    background-color: whitesmoke;\n    box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),\n             0.3em 0.3em 1em rgba(0,0,0,0.3);\n"]))),en=U.Z.div(F||(F=(0,Q.Z)(["\n    margin-top: 5px;\n    width: 200px;\n    &:first-of-type{\n        margin-top: 0;\n    }\n"]))),tn=U.Z.input(_||(_=(0,Q.Z)(["\n    width: 200px;\n    height: 25px;\n    border-radius: 8px;\n    border-color: whitesmoke;\n"]))),an=function(){var n=document.getElementById("popup-root"),e=(0,a.I0)(),t=(0,a.v9)(s.vZ);(0,p.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var r=function(){e((0,B.m)(null))},o=function(n){"Escape"===n.code&&r()};return(0,K.createPortal)((0,S.jsx)(X,{onClick:function(n){n.currentTarget===n.target&&r()},children:(0,S.jsxs)(nn,{onSubmit:function(n){n.preventDefault();var a=n.target;e((0,i._n)(t.id),{name:t.name,number:t.number}),r(),a.reset()},children:[(0,S.jsx)(en,{children:(0,S.jsxs)("label",{children:[(0,S.jsx)(j.Z,{variant:"overline",children:"Name"}),(0,S.jsx)(tn,{type:"text",name:"name",onChange:function(n){return e((0,B.m)({id:t.id,name:n.target.value,number:t.number}))},value:t.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})}),(0,S.jsx)(en,{children:(0,S.jsxs)("label",{children:[(0,S.jsx)(j.Z,{variant:"overline",children:"Number"}),(0,S.jsx)(tn,{type:"tel",name:"number",onChange:function(n){return e((0,B.m)({id:t.id,name:t.name,number:n.target.value}))},value:t.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})}),(0,S.jsx)(L.Z,{type:"submit",size:"small",color:"primary",startIcon:(0,S.jsx)(Y.Z,{}),variant:"contained",sx:{mt:2},children:"Save Contact"})]})}),n)},rn=function(){var n=(0,a.v9)(s.h3),e=(0,a.v9)(s.vZ),t=(0,a.v9)(s.y0).loading;return(0,S.jsx)(d.Z,{sx:{flexGrow:1},children:(0,S.jsxs)(O.Z,{container:!0,columns:16,children:[(0,S.jsxs)(O.Z,{xs:5,children:[(0,S.jsx)(j.Z,{component:"h3",variant:"h5",children:"Add Contact"}),(0,S.jsx)(N,{}),(0,S.jsx)(q,{})]}),(0,S.jsxs)(O.Z,{xs:10,children:[(0,S.jsx)(j.Z,{component:"h2",variant:"h5",sx:{ml:5},children:"Contacts"}),(0,S.jsx)($,{}),t&&(0,S.jsx)(j.Z,{variant:"h6",sx:{ml:5},children:"...Loading"}),e?(0,S.jsx)(an,{}):n]})]})})}},9332:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),s=(0,r.default)((0,i.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"}),"AccountBox");e.Z=s},9952:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),s=(0,r.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");e.Z=s},8141:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),s=(0,r.default)((0,i.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");e.Z=s},7247:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),s=(0,r.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=s},1286:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),s=(0,r.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.Z=s},501:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),s=(0,r.default)((0,i.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");e.Z=s},2716:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),s=(0,r.default)((0,i.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");e.Z=s},4918:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),s=(0,r.default)((0,i.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"}),"PhoneInTalk");e.Z=s},3329:function(n,e,t){var a=t(4836);e.Z=void 0;var r=a(t(5649)),i=t(184),s=(0,r.default)((0,i.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");e.Z=s}}]);
//# sourceMappingURL=409.04b76b7e.chunk.js.map