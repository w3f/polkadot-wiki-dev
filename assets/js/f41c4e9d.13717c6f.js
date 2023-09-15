"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"learn-xcm-pallet",title:"XCM FRAME Pallet Overview",sidebar_label:"XCM Pallet",description:"Mechanics of the XCM Pallet and its role in Polkadot's Ecosystem.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-pallet"},l=void 0,c={unversionedId:"learn/learn-xcm-pallet",id:"learn/learn-xcm-pallet",title:"XCM FRAME Pallet Overview",description:"Mechanics of the XCM Pallet and its role in Polkadot's Ecosystem.",source:"@site/../docs/learn/learn-xcm-pallet.md",sourceDirName:"learn",slug:"/learn-xcm-pallet",permalink:"/docs/learn-xcm-pallet",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-xcm-pallet.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1694432988,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"learn-xcm-pallet",title:"XCM FRAME Pallet Overview",sidebar_label:"XCM Pallet",description:"Mechanics of the XCM Pallet and its role in Polkadot's Ecosystem.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-pallet"},sidebar:"docs",previous:{title:"Cross-Consensus Message Format (XCM)",permalink:"/docs/learn-xcm"},next:{title:"XCM Use-cases",permalink:"/docs/learn-xcm-usecases"}},p={},h=[{value:"Primitive Extrinsics",id:"primitive-extrinsics",level:2},{value:"Asset Transfer Extrinsics",id:"asset-transfer-extrinsics",level:2},{value:"Transfer Reserve vs. Teleport",id:"transfer-reserve-vs-teleport",level:3},{value:"Version Negotiation Extrinsics",id:"version-negotiation-extrinsics",level:2},{value:"Fees in the XCM Pallet",id:"fees-in-the-xcm-pallet",level:2}],m={toc:h},d="wrapper";function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"XCM Documentation",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For a more practical approach to utilizing XCM, refer to the ",(0,i.kt)("a",{parentName:"p",href:"./learn/xcm"},"XCM Docs"),". Please keep in\nmind that XCM is under active development.")),(0,i.kt)("p",null,"The XCM pallet (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/tree/master/xcm/pallet-xcm"},(0,i.kt)("inlineCode",{parentName:"a"},"pallet-xcm")),")\nprovides a set of pre-defined, commonly used XCVM programs in the form of a set of extrinsics using\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/frame-pallets/"},"FRAME"),"."),(0,i.kt)("p",null,"This pallet provides some default implementations for traits required by ",(0,i.kt)("inlineCode",{parentName:"p"},"XcmConfig"),". The XCM\nexecutor is also included as an associated type within the pallet's configuration."),(0,i.kt)("p",null,"Where the XCM format defines a set of instructions used to construct XCVM programs, ",(0,i.kt)("inlineCode",{parentName:"p"},"pallet-xcm"),"\ndefines a set of extrinsics that can be utilized to build XCVM programs, either to target the local\nor external chains. ",(0,i.kt)("inlineCode",{parentName:"p"},"pallet-xcm"),"'s functionality is separated into three categories:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Remember, all XCMs are XCVM programs that follow\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"the XCM format"),". It is the job of the XCM executor is to\nhandle and execute these programs.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Primitive, dispatchable functions to locally execute an XCM."),(0,i.kt)("li",{parentName:"ol"},"High-level, dispatchable functions for asset transfers."),(0,i.kt)("li",{parentName:"ol"},"Version negotiation-specific dispatchable functions.")),(0,i.kt)("h2",{id:"primitive-extrinsics"},"Primitive Extrinsics"),(0,i.kt)("p",null,"There are two primary primitive extrinsics. These extrinsics handle sending and executing XCVM\nprograms as dispatchable functions within the pallet."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/blob/master/xcm/pallet-xcm/src/lib.rs#L871"},(0,i.kt)("inlineCode",{parentName:"a"},"execute"))," -\nThis call contains direct access to the XCM executor. It is the job of the executor to check the\nmessage and ensure that no barrier/filter will block the execution of the XCM. Once it is deemed\nvalid, the message will then be ",(0,i.kt)("em",{parentName:"li"},"locally")," executed, therein returning the outcome as an event.\nThis operation is executed on behalf of whichever account has signed the extrinsic. It's possible\nfor only a partial execution to occur."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/blob/master/xcm/pallet-xcm/src/lib.rs#L761"},(0,i.kt)("inlineCode",{parentName:"a"},"send"))," -\nThis call specifies where a message should be sent\n(",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-xcm-transport"},"via a transport method"),") externally to a particular destination, i.e.\na parachain, smart contract, or any system which is governed by consensus. In contrast to\n",(0,i.kt)("inlineCode",{parentName:"li"},"execute"),", the executor is not called locally, as the execution will occur on the destination\nchain.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The XCM pallet needs the ",(0,i.kt)("inlineCode",{parentName:"p"},"XcmRouter")," to send XCMs. It is used to dictate where XCMs are allowed to\nbe sent, and which XCM transport protocol to use. For example, Kusama, the canary network, uses the\n",(0,i.kt)("inlineCode",{parentName:"p"},"ChildParachainRouter")," which only allows for Downward Message Passing from the relay to parachains\nto occur."),(0,i.kt)("p",{parentName:"admonition"},"You can read more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-xcm-transport"},"XCM transport protocols here"),".")),(0,i.kt)("h2",{id:"asset-transfer-extrinsics"},"Asset Transfer Extrinsics"),(0,i.kt)("p",null,"Several extrinsics within the pallet handle asset transfer logic. They define a predetermined set of\ninstructions for sending and executing XCMs. Two variants of these functions are prefixed with\n",(0,i.kt)("inlineCode",{parentName:"p"},"limited_"),". They have the same functionality but can specify a weight to pay for the XCM fee."),(0,i.kt)("p",null,"Otherwise, the fee is taken as needed from the asset being transferred."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/xcm/pallet-xcm/src/lib.rs#L823"},(0,i.kt)("inlineCode",{parentName:"a"},"reserve_transfer_assets"))," -\nTransfer some assets from the local chain to the sovereign account of a destination chain and\nforward an XCM containing a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format#reserveassetdeposited"},(0,i.kt)("inlineCode",{parentName:"a"},"ReserveAssetDeposited")),"\ninstruction, which serves as a notification.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/xcm/pallet-xcm/src/lib.rs#L777"},(0,i.kt)("inlineCode",{parentName:"a"},"teleport_assets"))," -\nTeleport some assets from the local chain to some destination chain."))),(0,i.kt)("h3",{id:"transfer-reserve-vs-teleport"},"Transfer Reserve vs. Teleport"),(0,i.kt)("p",null,"While both extrinsics deal with transferring assets, they exhibit fundamentally different behavior."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Teleporting")," an asset implies a two-step process: the assets are taken out of circulating\nsupply (typically by burning/destroying) in the origin chain and re-minted to whatever account is\nspecified at the destination. Teleporting should only occur if there is an inherent and bilateral\ntrust between the two chains, as the tokens destroyed at the origin ",(0,i.kt)("em",{parentName:"p"},"could not")," necessarily be\nguaranteed to have the same properties when minted at the destination. There has to be ",(0,i.kt)("strong",{parentName:"p"},"trust"),"\nthat the a particular chain burned, or re-minted the assets.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Transferring")," or ",(0,i.kt)("strong",{parentName:"p"},"reserving")," an asset implies that ",(0,i.kt)("strong",{parentName:"p"},"equivalent")," assets (i.e, native\ncurrency, like ",(0,i.kt)("inlineCode",{parentName:"p"},"DOT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"KSM"),") are withdrawn from ",(0,i.kt)("em",{parentName:"p"},"sovereign account")," of the origin chain and\ndeposited into the sovereign account on the destination chain. Unlike teleporting an asset, it is\nnot destroyed and re-minted, rather a trusted, third entity is used (i.e., Asset Hub) to\n",(0,i.kt)("strong",{parentName:"p"},"reserve")," the assets, wherein the sovereign account of the destination chain on the reserve\nchain obtains ownership of these assets."),(0,i.kt)("p",{parentName:"li"},"It's worth noting that this means that some other mechanism is needed to ensure that the balance\non the destination does not exceed the amount being held in reserve chain."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A sovereign account refers to an account within a particular consensus system. Even though accounts\nmay be different in terms of factors such as an address format, XCM agnostic nature enables\ncommunication between these sovereign accounts that are in other consensus systems.")),(0,i.kt)("h2",{id:"version-negotiation-extrinsics"},"Version Negotiation Extrinsics"),(0,i.kt)("p",null,"The following extrinsics require root, as they are only used when bypassing XCM version negotiation.\nThey change any relevant storage aspects that enforce anything to do with XCM version negotiations."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/blob/master/xcm/pallet-xcm/src/lib.rs#L908"},(0,i.kt)("inlineCode",{parentName:"a"},"force_xcm_version"))," -\nModifies the ",(0,i.kt)("inlineCode",{parentName:"li"},"SupportedVersion")," storage to change a particular destination's stated XCM version."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/blob/master/xcm/pallet-xcm/src/lib.rs#L932"},(0,i.kt)("inlineCode",{parentName:"a"},"force_default_xcm_version"))," -\nModifies the ",(0,i.kt)("inlineCode",{parentName:"li"},"SafeXcmVersion")," storage, which stores the default XCM version to use when the\ndestination's version is unknown."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/blob/master/xcm/pallet-xcm/src/lib.rs#L948"},(0,i.kt)("inlineCode",{parentName:"a"},"force_subscribe_version_notify"))," -\nSends an XCM with a\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#subscribeversion"},(0,i.kt)("inlineCode",{parentName:"a"},"SubscribeVersion"))," instruction to a\ndestination."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/blob/master/xcm/pallet-xcm/src/lib.rs#L970"},(0,i.kt)("inlineCode",{parentName:"a"},"force_unsubscribe_version_notify"))," -\nSends an XCM with a\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#unsubscribeversion"},(0,i.kt)("inlineCode",{parentName:"a"},"UnsubscribeVersion"))," instruction\nto a destination.")),(0,i.kt)("h2",{id:"fees-in-the-xcm-pallet"},"Fees in the XCM Pallet"),(0,i.kt)("p",null,"Message fees are only paid if the interior location does not equal the interpreting consensus system\n(known as Here in the context of an XCM ",(0,i.kt)("inlineCode",{parentName:"p"},"Multilocation"),"). Otherwise, the chain bears the fees. If\napplicable, fees are withdrawn from the assets from the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiLocation")," and used as\npayment to execute any subsequent instructions within the XCM."),(0,i.kt)("p",null,"Fees are generally dependent on several factors within the ",(0,i.kt)("inlineCode",{parentName:"p"},"XcmConfig"),". For example, the barrier may\nnegate any fees to be paid at all."),(0,i.kt)("p",null,"Before any XCM is sent, and if the destination chain\u2019s barrier requires it, a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format#buyexecution"},(0,i.kt)("inlineCode",{parentName:"a"},"BuyExecution"))," instruction is used to buy\nthe necessary weight for the XCM. XCM fee calculation is handled by the Trader, which iteratively\ncalculates the total fee based on the number of instructions."),(0,i.kt)("p",null,"The Trader used to calculate the weight (time for computation in consensus) to include in the\nmessage. Fee calculation in XCM is highly configurable and, for this reason, subjective to whichever\nconfiguration is in place."))}u.isMDXComponent=!0}}]);