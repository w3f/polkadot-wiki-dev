"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,b=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return a?r.createElement(b,i(i({ref:t},c),{},{components:a})):r.createElement(b,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<s;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=["components"],o={id:"learn-wasm",title:"WebAssembly (Wasm)",sidebar_label:"WebAssembly (Wasm)",description:"Learn how Wasm plays a role in Polkadot's runtime.",keywords:["webassembly","wasm","runtime"],slug:"../learn-wasm"},l=void 0,m={unversionedId:"learn/learn-wasm",id:"learn/learn-wasm",title:"WebAssembly (Wasm)",description:"Learn how Wasm plays a role in Polkadot's runtime.",source:"@site/../docs/learn/learn-wasm.md",sourceDirName:"learn",slug:"/learn-wasm",permalink:"/docs/learn-wasm",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-wasm.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649959959,formattedLastUpdatedAt:"Apr 14, 2022",frontMatter:{id:"learn-wasm",title:"WebAssembly (Wasm)",sidebar_label:"WebAssembly (Wasm)",description:"Learn how Wasm plays a role in Polkadot's runtime.",keywords:["webassembly","wasm","runtime"],slug:"../learn-wasm"},sidebar:"docs",previous:{title:"SPREE",permalink:"/docs/learn-spree"},next:{title:"Cryptography Explainer",permalink:"/docs/learn-cryptography"}},c={},p=[{value:"What is WebAssembly?",id:"what-is-webassembly",level:2},{value:"Why WebAssembly?",id:"why-webassembly",level:2},{value:"Forkless Upgrades",id:"forkless-upgrades",level:3},{value:"Resources",id:"resources",level:2}],u={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"WebAssembly is used in Polkadot and Substrate as the compilation target for the runtime."),(0,s.kt)("h2",{id:"what-is-webassembly"},"What is WebAssembly?"),(0,s.kt)("p",null,"WebAssembly, shortened to simply ",(0,s.kt)("em",{parentName:"p"},"Wasm"),", is a binary instruction format for a stack-based virtual\nmachine. Wasm is designed as a portable target for compilation of high-level languages like\nC/C++/Rust, enabling deployment on the web for client and server applications."),(0,s.kt)("h2",{id:"why-webassembly"},"Why WebAssembly?"),(0,s.kt)("p",null,"WebAssembly is a platform agnostic binary format, meaning that it will run the same instructions\nacross whatever machine it is operating on. Blockchains need determinacy in order to have reliable\nstate transition updates across all nodes in the peer-to-peer network without forcing every peer to\nrun the same exact hardware. Wasm is a nice fit for reliability among the possibly diverse set of\nmachines. Wasm is both efficient and fast. The efficiency means that it can be uploaded onto the\nchain as a blob of code without causing too much state bloat while keeping its ability to execute at\nnear-native speeds."),(0,s.kt)("h3",{id:"forkless-upgrades"},"Forkless Upgrades"),(0,s.kt)("p",null,"By using Wasm in Substrate, the framework powering Polkadot, Kusama, and many connecting chains, the\nchains are given the ability to upgrade their runtime logic without hard forking. Hard forking is a\nstandard method of upgrading a blockchain that is slow, inefficient, and error prone due to the\nlevels of offline coordination required, and thus, the propensity to bundle many upgrades into one\nlarge-scale event. By deploying Wasm on-chain and having nodes auto-enact the new logic at a certain\nblock height, upgrades can be small, isolated, and very specific."),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"WebAssembly.org")," - WebAssembly homepage that contains a link to the\nspec."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/paritytech/Wasmi"},"Wasmi")," - WebAssembly interpreter written in Rust."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/paritytech/parity-Wasm"},"Parity Wasm")," - WebAssembly\nserialization/deserialization in Rust."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/paritytech/Wasm-utils"},"Wasm utils")," - Collection of Wasm utilities used in\nParity and Wasm contract development.")))}d.isMDXComponent=!0}}]);