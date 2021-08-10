(self.webpackChunk=self.webpackChunk||[]).push([[9217],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>d,kt:()=>m});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=u(n),m=i,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?o.createElement(b,a(a({ref:e},d),{},{components:n})):o.createElement(b,a({ref:e},d))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19210:(t,e,n)=>{"use strict";n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>d,default:()=>p});var o=n(22122),i=n(19756),r=(n(67294),n(3905)),a=["components"],l={id:"build-integration",title:"Polkadot Integration Guide",sidebar_label:"Integration Initiation"},s=void 0,u={unversionedId:"build/build-integration",id:"build/build-integration",isDocsHomePage:!1,title:"Polkadot Integration Guide",description:"Welcome to the Polkadot integration guide. This guide will provide all the information you need to",source:"@site/../docs/build/build-integration.md",sourceDirName:"build",slug:"/build/build-integration",permalink:"/docs/build/build-integration",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-integration.md",version:"current",lastUpdatedBy:"Bill Laboon",lastUpdatedAt:1628602213,formattedLastUpdatedAt:"8/10/2021",frontMatter:{id:"build-integration",title:"Polkadot Integration Guide",sidebar_label:"Integration Initiation"},sidebar:"docs",previous:{title:"Polkadot Wallets",permalink:"/docs/build/build-wallets"},next:{title:"Polkadot Protocol",permalink:"/docs/build/build-protocol-info"}},d=[{value:"Structure",id:"structure",children:[]},{value:"Recommendation",id:"recommendation",children:[]}],c={toc:d};function p(t){var e=t.components,n=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the Polkadot integration guide. This guide will provide all the information you need to\nget started on your integration. The target audiences for this guide are wallets and custodians, but\nit will be useful to any infrastructure provider such as validators or chain indexers."),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"The guide focuses on Polkadot and Kusama, but the principles will apply to parachains and other\nSubstrate-based chains. The guide contains four sections:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/build/build-protocol-info"},"Protocol Info"),": The entry point to the guide. Please read it carefully\nas it provides information about Polkadot that differentiates it from other blockchains. Use this\npage to check your assumptions."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/build/build-integrate-assets"},"Assets"),": The guide to integrating assets on Polkadot into your\nsystems."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/build/build-node-management"},"Node Management"),": This page will guide you to starting and monitoring\na node."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/build/build-node-interaction"},"Node Interaction"),": This page will teach you to interact with your\nnode via multiple RPC tooling options."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/build/build-transaction-construction"},"Transaction Construction"),": A guide to transaction\nconstruction, signing, decoding, and serialization using several available tools.")),(0,r.kt)("h2",{id:"recommendation"},"Recommendation"),(0,r.kt)("p",null,"Each page in the guide, especially the Node Interaction and Transaction Construction pages, tries to\nlist several options to accomplish the same thing. We want you to know your options and choose the\nsolution that is best for you."),(0,r.kt)("p",null,"That said, the easiest path to integration is almost always to use\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar")," to interact with your\nnode and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/"},"TxWrapper Core")," to construct and sign\ntransactions. Parity and Web3 Foundation will be able to provide the best support if you use these\ntools."),(0,r.kt)("p",null,"If your team would like support, join some of our ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/community"},"community channels")," or contact\n",(0,r.kt)("a",{parentName:"p",href:"mailto:support@polkadot.network"},"support@polkadot.network"),"."))}p.isMDXComponent=!0}}]);