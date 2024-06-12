"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,d=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return r?n.createElement(d,a(a({ref:t},m),{},{components:r})):n.createElement(d,a({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},37579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"learn-xcm-docs-overview-xcvm",title:"The XCVM",sidebar_label:"The XCVM",description:"The Cross-Consensus Virtual Machine.",keywords:["xcm","cross-consensus messaging","xcvm"],slug:"../overview-xcvm"},c="The XCVM",l={unversionedId:"learn/xcm/overview/learn-xcm-docs-overview-xcvm",id:"learn/xcm/overview/learn-xcm-docs-overview-xcvm",title:"The XCVM",description:"The Cross-Consensus Virtual Machine.",source:"@site/../docs/learn/xcm/overview/xcvm.md",sourceDirName:"learn/xcm/overview",slug:"/learn/xcm/overview-xcvm",permalink:"/docs/learn/xcm/overview-xcvm",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/overview/xcvm.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712558849,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{id:"learn-xcm-docs-overview-xcvm",title:"The XCVM",sidebar_label:"The XCVM",description:"The Cross-Consensus Virtual Machine.",keywords:["xcm","cross-consensus messaging","xcvm"],slug:"../overview-xcvm"},sidebar:"docs",previous:{title:"A Format, not a Protocol",permalink:"/docs/learn/xcm/overview-format"},next:{title:"Architecture",permalink:"/docs/learn/xcm/overview-architecture"}},m={},u=[],p={toc:u},h="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(h,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-xcvm"},"The XCVM"),(0,i.kt)("p",null,"At the core of XCM lies the XCVM (Cross-Consensus Virtual Machine). A message in XCM (referred to as\nan XCM, cross-consensus message, or XCMs for more than one) is an XCVM program. The XCVM is a\nregister-based state machine that executes every program by processing its instructions one at a\ntime. During execution, state is tracked in domain-specific registers, and is constantly being used\nand updated. Most of the XCM format comprises these registers and the instructions used to compose\nXCVM programs."),(0,i.kt)("p",null,"Like XCM, the XCVM is also a specification. The implementation that will be used in this\ndocumentation is the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/xcm-executor"},"xcm-executor"),",\nprovided by Parity. The executor is highly configurable. For more information on the extensive\nconfiguration options available, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/xcm/config-deep-dive"},"Config Deep Dive")," chapter."),(0,i.kt)("p",null,"Anyone can create an implementation of the XCVM. As long as they follow the standard, they'll be\nable to send XCMs to systems using other implementations."),(0,i.kt)("p",null,"Typically, an XCM takes the following path through the XCVM:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instructions within an XCM are read one-by-one."),(0,i.kt)("li",{parentName:"ul"},"The instruction is executed. This means that the current values of the XCVM registers, the\ninstruction type, and the instruction operands are all used to execute some operation, which might\nresult in some registers changing their value, or in an error being thrown, which would halt\nexecution."),(0,i.kt)("li",{parentName:"ul"},"Each subsequent instruction within the XCM is read until the end of the message has been reached.")),(0,i.kt)("p",null,"An example of an XCVM register is the holding register. Any XCVM program that handles assets will be\nputting them in and taking them from this register. This register is used by several of the\ninstructions we will look at later, including ",(0,i.kt)("inlineCode",{parentName:"p"},"DepositAsset")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"WithdrawAsset"),"."),(0,i.kt)("p",null,"For more information on other registers, see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/xcm/reference-xcvm-registers"},"All XCVM Registers")," section."))}d.isMDXComponent=!0}}]);