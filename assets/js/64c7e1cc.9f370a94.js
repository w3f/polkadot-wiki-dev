"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9217],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(g,a(a({ref:e},c),{},{components:n})):o.createElement(g,a({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45725:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,assets:()=>c,toc:()=>d,default:()=>m});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"build-integration",title:"Polkadot Integration Guide",sidebar_label:"Integration Initiation",description:"Reference point for the Polkadot integration guides.",slug:"../build-integration"},s=void 0,u={unversionedId:"build/build-integration",id:"build/build-integration",title:"Polkadot Integration Guide",description:"Reference point for the Polkadot integration guides.",source:"@site/../docs/build/build-integration.md",sourceDirName:"build",slug:"/build-integration",permalink:"/docs/build-integration",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-integration.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1631864714,formattedLastUpdatedAt:"9/17/2021",frontMatter:{id:"build-integration",title:"Polkadot Integration Guide",sidebar_label:"Integration Initiation",description:"Reference point for the Polkadot integration guides.",slug:"../build-integration"},sidebar:"docs",previous:{title:"SS58 Registry",permalink:"/docs/build-ss58-registry"},next:{title:"Polkadot Protocol",permalink:"/docs/build-protocol-info"}},c={},d=[{value:"Structure",id:"structure",level:2},{value:"Recommendation",id:"recommendation",level:2}],p={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the Polkadot integration guide. This guide will provide all the information you need to\nget started on your integration. The target audiences for this guide are wallets and custodians, but\nit will be useful to any infrastructure provider such as validators or chain indexers."),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("p",null,"The guide focuses on Polkadot and Kusama, but the principles will apply to parachains and other\nSubstrate-based chains. The guide contains four sections:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/build-protocol-info"},"Protocol Info"),": The entry point to the guide. Please read it carefully\nas it provides information about Polkadot that differentiates it from other blockchains. Use this\npage to check your assumptions."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/build-integrate-assets"},"Assets"),": The guide to integrating assets on Polkadot into your\nsystems."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/build-node-management"},"Node Management"),": This page will guide you to starting and monitoring\na node."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/build-node-interaction"},"Node Interaction"),": This page will teach you to interact with your\nnode via multiple RPC tooling options."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/build-transaction-construction"},"Transaction Construction"),": A guide to transaction\nconstruction, signing, decoding, and serialization using several available tools.")),(0,i.kt)("h2",{id:"recommendation"},"Recommendation"),(0,i.kt)("p",null,"Each page in the guide, especially the Node Interaction and Transaction Construction pages, tries to\nlist several options to accomplish the same thing. We want you to know your options and choose the\nsolution that is best for you."),(0,i.kt)("p",null,"That said, the easiest path to integration is almost always to use\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar")," to interact with your\nnode and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/"},"TxWrapper Core")," to construct and sign\ntransactions. Parity and Web3 Foundation will be able to provide the best support if you use these\ntools."),(0,i.kt)("p",null,"If your team would like support, join some of our ",(0,i.kt)("a",{parentName:"p",href:"/docs/community"},"community channels")," or contact\n",(0,i.kt)("a",{parentName:"p",href:"mailto:support@polkadot.network"},"support@polkadot.network"),"."))}m.isMDXComponent=!0}}]);