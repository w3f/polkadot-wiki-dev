"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),g=a,b=h["".concat(l,".").concat(g)]||h[g]||u[g]||i;return n?r.createElement(b,o(o({ref:t},d),{},{components:n})):r.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},39051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"learn-bridge-hub",title:"Bridge Hub",sidebar_label:"Bridge Hub",description:"Overview of Bridge Hub System Parachain.",keywords:["Bridge","XCM","Bridge Hub"],slug:"../learn-bridge-hub"},l=void 0,c={unversionedId:"learn/learn-bridge-hub",id:"learn/learn-bridge-hub",title:"Bridge Hub",description:"Overview of Bridge Hub System Parachain.",source:"@site/../docs/learn/learn-bridge-hub.md",sourceDirName:"learn",slug:"/learn-bridge-hub",permalink:"/docs/learn-bridge-hub",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-bridge-hub.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1712756939,formattedLastUpdatedAt:"Apr 10, 2024",frontMatter:{id:"learn-bridge-hub",title:"Bridge Hub",sidebar_label:"Bridge Hub",description:"Overview of Bridge Hub System Parachain.",keywords:["Bridge","XCM","Bridge Hub"],slug:"../learn-bridge-hub"},sidebar:"docs",previous:{title:"Bridges",permalink:"/docs/learn-bridges"},next:{title:"DOT <> KSM Bridge",permalink:"/docs/learn-dot-ksm-bridge"}},d={},h=[{value:"Trustless Bridges on Bridge Hub",id:"trustless-bridges-on-bridge-hub",level:2},{value:"On-chain Bridge Components",id:"on-chain-bridge-components",level:3},{value:"Offchain Bridge Components",id:"offchain-bridge-components",level:3}],u={toc:h},g="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The primary functionality of Polkadot relay\nchain is to secure the parachains and facilitate secure communication between them. All other\nfunctionalities like asset transfers, governance, identities and especially bridging, which can be\nresource intensive can benefit from operating seaparately on system parachains. That's why, the\nBridge Hub system parachain is operating on\nPolkadot since 2023. The Bridge Hub has all\nthe required bridge pallets in its runtime, which enable trustless bridging with other blockchain\nnetworks like Kusama, Ethereum etc. The\nBridge Hub uses the native token of the relay chain,\nDOT."),(0,i.kt)("h2",{id:"trustless-bridges-on-bridge-hub"},"Trustless Bridges on Bridge Hub"),(0,i.kt)("p",null,"A two-way trustless bridge between chains A and B can be viewed as two one-way bridges (A \u2192 B and B\n\u2192 A). Hence, the design of a two-way bridge can be explained in terms of a one-way bridge with a\nsource and a target chain. Any bridge operating on the Bridge Hub will have on-chain (pallets) and\noffchain (relayers) components."),(0,i.kt)("h3",{id:"on-chain-bridge-components"},"On-chain Bridge Components"),(0,i.kt)("p",null,"On-chain bridge components are modules (pallets or smart contracts) that are deployed on the chain's\nruntime. Modules that track the finality of the source chain are required to be deployed on the\ntarget chain, while the modules that deal with cross-chain messaging need to be deployed on both,\nsource and target chains."),(0,i.kt)("p",null,"Operating a bridge between chains that finalize through GRANDPA consensus is straight-forward. A\nGRANDPA light client of the source chain built into the target chain's runtime provides a \"source of\ntruth\" about the source chain's finality. For instance, Polkadot Bridge Hub runs an on-chain light\nclient of Kusama which uses GRANDPA consensus and infers the finality of all the transactions on\nKusama and its parachains."),(0,i.kt)("p",null,"Operating a bridge between chains with different consensus models can require a sophisticated\ndesign. For instance, Polkadot Bridge Hub\nneeds to run an on-chain light client of Ethereum to infer the finality of transactions on Ethereum\nchain. On the other hand, running a GRANDPA light client through smart contracts on Ethereum is\npossible but can be very expensive. Hence, BEEFY (Bridge Efficiency Enabling Finality Yielder)\nconsensus layer has been added to Polkadot\nwhich enables a cost effective solution for operating a trustless bridge with Ethereum. Trustless\nbridges to chains like Solana, Cosmos, Avalanche, NEAR etc. would require custom pallets to be\ndeployed on Polkadot Bridge Hub."),(0,i.kt)("p",null,"There are also on-chain components that are responsible for queuing messages at the source chain and\nfor receiving the messages proofs at the target chain. The messages are sent through a particular\n",(0,i.kt)("strong",{parentName:"p"},"lane"),", where they are guaranteed to be received in the same order they are sent. On\nPolkadot Bridge Hub, the messages are in XCM\nformat and an XCM executor is used to dispatch them."),(0,i.kt)("h3",{id:"offchain-bridge-components"},"Offchain Bridge Components"),(0,i.kt)("p",null,"Offchain bridge components are separate processes, called relayers. Relayers are connected both to\nthe source chain and target chain nodes. For instance, the task of relayer between chains that run\non GRANDPA consensus is to submit source chain GRANDPA justifications and their corresponding\nheaders to the Bridge GRANDPA Finality Pallet deployed at the target chain. For that, the relayer\nsubscribes to the source chain GRANDPA justifications stream and submits every new justification it\nsees to the target chain GRANDPA light client."),(0,i.kt)("p",null,"Messages between chains are relayed through the relayers, which involve messages delivery relay and\ndelivery confirmation relay. For more information on relayers and the Bridge Hub design, read\nthrough the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/master/bridges/docs/high-level-overview.md"},"high level documentation on bridges on the Polkadot-SDK repository"),"."))}b.isMDXComponent=!0}}]);