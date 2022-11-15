"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[678],{678:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var i=t(7689),r=t(9434),o=t(799),a=t(1999),s=t(1087),c=t(7608),d=t(7952),l=t(4942),u=t(3366),h=t(7462),m=t(2791),p=t(1184),v=t(5682),x=t(8519),f=t(2466),b=t(277),Z=t(5513),j=t(184),g=["component","direction","spacing","divider","children"];function k(e,n){var t=m.Children.toArray(e).filter(Boolean);return t.reduce((function(e,i,r){return e.push(i),r<t.length-1&&e.push(m.cloneElement(n,{key:"separator-".concat(r)})),e}),[])}var y=(0,b.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,i=(0,h.Z)({display:"flex",flexDirection:"column"},(0,p.k9)({theme:t},(0,p.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var r=(0,v.hB)(t),o=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),a=(0,p.P$)({values:n.direction,base:o}),s=(0,p.P$)({values:n.spacing,base:o});"object"===typeof a&&Object.keys(a).forEach((function(e,n,t){if(!a[e]){var i=n>0?a[t[n-1]]:"column";a[e]=i}}));i=(0,f.Z)(i,(0,p.k9)({theme:t},s,(function(e,t){return{"& > :not(style) + :not(style)":(0,l.Z)({margin:0},"margin".concat((i=t?a[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i])),(0,v.NA)(r,e))};var i})))}return i=(0,p.dt)(t.breakpoints,i)})),S=m.forwardRef((function(e,n){var t=(0,Z.Z)({props:e,name:"MuiStack"}),i=(0,x.Z)(t),r=i.component,o=void 0===r?"div":r,a=i.direction,s=void 0===a?"column":a,c=i.spacing,d=void 0===c?0:c,l=i.divider,m=i.children,p=(0,u.Z)(i,g),v={direction:s,spacing:d};return(0,j.jsx)(y,(0,h.Z)({as:o,ownerState:v,ref:n},p,{children:l?k(m,l):m}))})),w=S,L=t(476),W=t(6015),C=t(9541),R=t(4565),M=function(){var e=(0,r.I0)(),n=(0,r.v9)(a.Qb),t=(0,r.v9)(a.tT);return(0,j.jsxs)(L.Z,{children:[(0,j.jsx)("header",{children:(0,j.jsx)(W.Z,{component:"ul",className:"list",sx:{pb:2},children:n?(0,j.jsx)("li",{children:(0,j.jsxs)(d.Z,{component:"ul",container:!0,direction:"row",spacing:5,sx:{listStyle:"none",alignItems:"center",justifyContent:"center"},children:[(0,j.jsx)(d.Z,{component:"li",children:(0,j.jsx)(s.OL,{className:"navLinkStyle",to:"/",children:(0,j.jsx)(R.Z,{variant:"button",children:"Main"})})}),(0,j.jsx)(d.Z,{component:"li",children:(0,j.jsx)(s.OL,{className:"navLinkStyle",to:"/contacts",children:(0,j.jsx)(R.Z,{variant:"button",children:"Phonebook"})})}),(0,j.jsx)(d.Z,{component:"li",children:(0,j.jsxs)(R.Z,{variant:"subtitle1",children:["Welcome, ",t.name]})}),(0,j.jsx)(d.Z,{component:"li",children:(0,j.jsxs)(C.Z,{type:"button",onClick:function(){e((0,o.GB)())},variant:"outlined",children:[(0,j.jsx)(c.Z,{}),"Log Out"]})})]})}):(0,j.jsxs)(w,{spacing:2,direction:"row",sx:{justifyContent:"center"},children:[(0,j.jsx)("li",{children:(0,j.jsx)(C.Z,{variant:"button",children:(0,j.jsx)(s.OL,{className:"navLinkStyle",to:"/",children:"Main"})})}),(0,j.jsx)("li",{children:(0,j.jsx)(C.Z,{children:(0,j.jsx)(s.OL,{className:"navLinkStyle",to:"/register",children:"Register"})})}),(0,j.jsx)("li",{children:(0,j.jsx)(C.Z,{children:(0,j.jsx)(s.OL,{className:"navLinkStyle btnLogin",to:"/login",children:"Login In"})})})]})})}),(0,j.jsx)("main",{children:(0,j.jsx)(i.j3,{})})]})}},7608:function(e,n,t){var i=t(4836);n.Z=void 0;var r=i(t(5649)),o=t(184),a=(0,r.default)((0,o.jsx)("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ExitToApp");n.Z=a},476:function(e,n,t){t.d(n,{Z:function(){return S}});var i=t(4942),r=t(3366),o=t(7462),a=t(2791),s=t(8182),c=t(7312),d=t(1217),l=t(4419),u=t(7078),h=t(3457),m=t(5080),p=t(184),v=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,m.Z)(),f=(0,h.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,c.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),b=function(e){return(0,u.Z)({props:e,name:"MuiContainer",defaultTheme:x})},Z=function(e,n){var t=e.classes,i=e.fixed,r=e.disableGutters,o=e.maxWidth,a={root:["root",o&&"maxWidth".concat((0,c.Z)(String(o))),i&&"fixed",r&&"disableGutters"]};return(0,l.Z)(a,(function(e){return(0,d.Z)(n,e)}),t)};var j=t(9853),g=t(277),k=t(5513),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?f:n,c=e.useThemeProps,d=void 0===c?b:c,l=e.componentName,u=void 0===l?"MuiContainer":l,h=t((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,i.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(e){var n=e.theme;return e.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(e,t){var i=t,r=n.breakpoints.values[i];return 0!==r&&(e[n.breakpoints.up(i)]={maxWidth:"".concat(r).concat(n.breakpoints.unit)}),e}),{})}),(function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({},"xs"===t.maxWidth&&(0,i.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,i.Z)({},n.breakpoints.up(t.maxWidth),{maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)}))})),m=a.forwardRef((function(e,n){var t=d(e),i=t.className,a=t.component,c=void 0===a?"div":a,l=t.disableGutters,m=void 0!==l&&l,x=t.fixed,f=void 0!==x&&x,b=t.maxWidth,j=void 0===b?"lg":b,g=(0,r.Z)(t,v),k=(0,o.Z)({},t,{component:c,disableGutters:m,fixed:f,maxWidth:j}),y=Z(k,u);return(0,p.jsx)(h,(0,o.Z)({as:c,ownerState:k,className:(0,s.Z)(y.root,i),ref:n},g))}));return m}({createStyledComponent:(0,g.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,j.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiContainer"})}}),S=y}}]);
//# sourceMappingURL=678.1c6e5ed2.chunk.js.map