"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[810],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(a),m=s,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||i;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>h});var n=a(87462),s=a(63366),i=(a(67294),a(3905)),r=["components"],o={id:"build-integrate-assets",title:"Assets on Polkadot",sidebar_label:"Integrating Assets",description:"Tools that you can use to integrating assets.",keywords:["assets","integration","api","operations"],slug:"../build-integrate-assets"},l=void 0,p={unversionedId:"build/build-integrate-assets",id:"build/build-integrate-assets",title:"Assets on Polkadot",description:"Tools that you can use to integrating assets.",source:"@site/../docs/build/build-integrate-assets.md",sourceDirName:"build",slug:"/build-integrate-assets",permalink:"/docs/build-integrate-assets",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-integrate-assets.md",tags:[],version:"current",lastUpdatedBy:"Alberto Nicolas Penayo",lastUpdatedAt:1710964607,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{id:"build-integrate-assets",title:"Assets on Polkadot",sidebar_label:"Integrating Assets",description:"Tools that you can use to integrating assets.",keywords:["assets","integration","api","operations"],slug:"../build-integrate-assets"},sidebar:"docs",previous:{title:"Parachain Development",permalink:"/docs/build-pdk"},next:{title:"Opening HRMP Channels",permalink:"/docs/build-hrmp-channels"}},c={},h=[{value:"Assets Basics",id:"assets-basics",level:2},{value:"Asset Operations",id:"asset-operations",level:3},{value:"Integration",id:"integration",level:2},{value:"Parachain Node",id:"parachain-node",level:3},{value:"Asset Transfer API",id:"asset-transfer-api",level:3},{value:"Sidecar",id:"sidecar",level:3},{value:"Tx Wrapper Polkadot",id:"tx-wrapper-polkadot",level:3},{value:"XCM Transfer Monitoring",id:"xcm-transfer-monitoring",level:3},{value:"Monitoring of XCM deposits",id:"monitoring-of-xcm-deposits",level:4},{value:"Tracking back XCM information",id:"tracking-back-xcm-information",level:4},{value:"Additional Examples of Monitoring XCM Transfers",id:"additional-examples-of-monitoring-xcm-transfers",level:4},{value:"Monitoring of Failed XCM Transfers",id:"monitoring-of-failed-xcm-transfers",level:4}],d={toc:h},m="wrapper";function u(e){var t=e.components,a=(0,s.Z)(e,r);return(0,i.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Polkadot Relay Chain does not natively\nsupport assets beyond DOT. This functionality\nexists in parachains. On both Polkadot and Kusama, this parachain is called Asset Hub."),(0,i.kt)("p",null,"The Asset Hub provides a first-class interface for creating, managing, and using fungible and\nnon-fungible assets. The fungible interface is similar to Ethereum's ERC-20 standard. However, the\ndata structures and stateful operations are encoded directly into the chain's runtime, making\noperations fast and fee-efficient."),(0,i.kt)("p",null,"Beyond merely supporting assets, integrating an Asset Hub into your systems has several benefits for\ninfrastructure providers and users:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support for on-chain assets."),(0,i.kt)("li",{parentName:"ul"},"Significantly lower transaction fees (about 1/10) than the Relay Chain."),(0,i.kt)("li",{parentName:"ul"},"Significantly lower deposits (1/100) than the Relay Chain. This includes the existential deposit\nand deposits for proxy/multisig operations."),(0,i.kt)("li",{parentName:"ul"},"Ability to pay transaction fees in certain assets. As in, accounts would ",(0,i.kt)("strong",{parentName:"li"},"not")," need DOT to exist\non-chain or pay fees.")),(0,i.kt)("p",null,"The Asset Hub will use DOT as its native currency. Users can transfer DOT from the Relay Chain into\nthe Asset Hub and use it natively. The Relay Chain will also accept DOT transfers from the Asset Hub\nback to the Relay Chain for staking, governance, or any other activity."),(0,i.kt)("p",null,"Using the Asset Hub for DOT/KSM balance transfers will be much more efficient than the Relay Chain\nand is highly recommended. Until domain-specific parachains are built, the Relay Chain will still\nneed to be used for staking and governance."),(0,i.kt)("h2",{id:"assets-basics"},"Assets Basics"),(0,i.kt)("p",null,"See the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/assets"},"Assets pallet")," for\nthe most up-to-date info and reference documentation."),(0,i.kt)("p",null,"Assets are stored as a map from an ID to information about the asset, including a management team,\ntotal supply, total number of accounts, its sufficiency for account existence, and more.\nAdditionally, the asset owner can register metadata like the name, symbol, and number of decimals\nfor representation."),(0,i.kt)("p",null,"Some assets, as determined by on-chain governance, are regarded as \u201csufficient\u201d. Sufficiency means\nthat the asset balance is enough to create the account on-chain, with no need for the DOT/KSM\nexistential deposit. Likewise, you cannot send a non-sufficient asset to an account that does not\nexist. Sufficient assets can be used to pay transaction fees (i.e. there is no need to hold DOT/KSM\non the account)."),(0,i.kt)("p",null,"Assets do have a minimum balance (set by the creator), and if an account drops below that balance,\nthe dust is lost."),(0,i.kt)("h3",{id:"asset-operations"},"Asset Operations"),(0,i.kt)("p",null,"The Assets pallet has its interface for dealing with assets. See the ",(0,i.kt)("a",{parentName:"p",href:"#integration"},"Integration"),"\nsection below for how to fetch information and construct transactions."),(0,i.kt)("p",null,"The main functions you will probably interact with are ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive"),". These\nfunctions transfer some ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," (balance) of an ",(0,i.kt)("inlineCode",{parentName:"p"},"AssetId")," (a ",(0,i.kt)("inlineCode",{parentName:"p"},"u32"),", not a contract address) to\nanother account."),(0,i.kt)("p",null,"The Assets pallet also provides an ",(0,i.kt)("inlineCode",{parentName:"p"},"approve_transfer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cancel_approval"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer_approved"),"\ninterface for non-custodial operations."),(0,i.kt)("p",null,"Asset transfers will result in an ",(0,i.kt)("inlineCode",{parentName:"p"},"assets.transferred")," event. The same instructions for\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-protocol-info#events"},"monitoring events and ",(0,i.kt)("strong",{parentName:"a"},"not")," transactions")," applies to asset\ntransfers."),(0,i.kt)("p",null,"Note that you can use the same addresses (except\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-proxies-pure#anonymous-proxy-pure-proxy"},"pure proxies"),"!) on the Asset Hub that\nyou use on the Relay Chain. The SS58 encodings are the same; only the chain information (genesis\nhash, etc.) will change on transaction construction."),(0,i.kt)("h2",{id:"integration"},"Integration"),(0,i.kt)("p",null,"The Asset Hub will come with the same tooling suite that Parity Technologies provides for the Relay\nChain, namely ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"API Sidecar")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/tree/main/packages/txwrapper-polkadot"},"TxWrapper Polkadot"),",\nas well as the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/asset-transfer-api"},"Asset Transfer API"),". If you have a\ntechnical question or issue about how to use one of the integration tools, please file a GitHub\nissue so a developer can help."),(0,i.kt)("h3",{id:"parachain-node"},"Parachain Node"),(0,i.kt)("p",null,"Using the Asset Hub will require running a parachain node to sync the chain. This is very similar to\nrunning a Polkadot node, with the addition of\nsome extra flags. You can follow\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus#asset-hub-"},"these guidelines")," to set\nup an Asset Hub node."),(0,i.kt)("h3",{id:"asset-transfer-api"},"Asset Transfer API"),(0,i.kt)("p",null,"Asset-transfer-api is a library focused on simplifying the construction of asset transfers for\nSubstrate-based chains that involve system parachains like Asset Hub (Polkadot and Kusama). It\nexposes a reduced set of methods that facilitate users to send transfers to other (para) chains or\nlocally. You can refer to\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/asset-transfer-api/tree/main#current-cross-chain-support"},"this table"),"\nfor the current cross-chain support and ",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/asset-transfer-api/"},"here")," for\nthe complete documentation, including installation guide and usage examples."),(0,i.kt)("h3",{id:"sidecar"},"Sidecar"),(0,i.kt)("p",null,"API Sidecar is a REST service for Relay Chain and parachain nodes. It comes with endpoints to query\ninformation about assets and asset balances on the Asset Hub."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asset lookups always use the ",(0,i.kt)("inlineCode",{parentName:"li"},"AssetId")," to refer to an asset class. On-chain metadata is subject to\nchange and thus unsuitable as a canonical index."),(0,i.kt)("li",{parentName:"ul"},"Please refer to ",(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate-api-sidecar/dist/"},"docs")," for full usage\ninformation. Details on options like how to make a historical query are not included here.")),(0,i.kt)("p",null,"Here are the available public instances:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot-asset-hub-public-sidecar.parity-chains.parity.io"},"Sidecar connected to Polkadot Asset Hub"),"\nand"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kusama-asset-hub-public-sidecar.parity-chains.parity.io"},"Sidecar connected to Kusama Asset Hub"))),(0,i.kt)("p",null,"The purpose of these instances is to allow anyone to check and get a quick overview of the info that\nthe asset-related endpoints provide."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"These instances should only be used for ad-hoc checks or tests and not for production, heavy testing\nor any other critical purpose.")),(0,i.kt)("h3",{id:"tx-wrapper-polkadot"},"Tx Wrapper Polkadot"),(0,i.kt)("p",null,"TxWrapper Polkadot is a library designed to facilitate transaction construction and signing in\noffline environments. It comes with asset-specific functions to use on the Asset Hub. When\nconstructing parachain transactions, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"txwrapper-polkadot")," exactly as on the Relay Chain,\nbut construct transactions with the appropriate parachain metadata like genesis hash, spec version,\nand type registry."),(0,i.kt)("h3",{id:"xcm-transfer-monitoring"},"XCM Transfer Monitoring"),(0,i.kt)("h4",{id:"monitoring-of-xcm-deposits"},"Monitoring of XCM deposits"),(0,i.kt)("p",null,"Thanks to XCM and a growing number of parachains,\nDOT can exist across several blockchains, which\nmeans the providers need to monitor cross-chain transfers on top of local transfers and\ncorresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"balances.transfer")," events."),(0,i.kt)("p",null,"Currently DOT can be sent and received in the\nRelay Chain either with a ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-teleport"},"Teleport")," from\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-system-chains"},"system parachains")," or with a\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-xcm-pallet#transfer-reserve-vs-teleport"},"Reserve Backed Transfer"),"\nfrom any other parachain. In both cases, the event emitted when processing the transfer is the\n",(0,i.kt)("inlineCode",{parentName:"p"},"balances.deposit")," event. Hence, providers should listen to these events, pointing to an address in\ntheir system. For this, the service provider must query every new block created, loop through the\nevents array, filter for any ",(0,i.kt)("inlineCode",{parentName:"p"},"balances.deposit")," event, and apply the appropriate business logic."),(0,i.kt)("h4",{id:"tracking-back-xcm-information"},"Tracking back XCM information"),(0,i.kt)("p",null,"What has been mentioned earlier should be sufficient to confirm that\nDOT has arrived in a given account via XCM.\nHowever, in some cases, it may be interesting to identify the cross-chain message that emitted the\nrelevant ",(0,i.kt)("inlineCode",{parentName:"p"},"balances.deposit")," event. This can be done as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Query the Relay Chain ",(0,i.kt)("inlineCode",{parentName:"li"},"at")," the block the ",(0,i.kt)("inlineCode",{parentName:"li"},"balances.deposit")," event was emitted."),(0,i.kt)("li",{parentName:"ol"},"Filter for a ",(0,i.kt)("inlineCode",{parentName:"li"},"messageQueue(Processed)")," event, also emitted during block initialization. This\nevent has a parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"Id"),". The value of ",(0,i.kt)("inlineCode",{parentName:"li"},"Id")," identifies the cross-chain message received in the\nRelay Chain. It can be used to track back the message in the origin parachain if needed. Note\nthat a block may contain several ",(0,i.kt)("inlineCode",{parentName:"li"},"messageQueue(Processed)")," events corresponding to several\ncross-chain messages processed for this block.")),(0,i.kt)("h4",{id:"additional-examples-of-monitoring-xcm-transfers"},"Additional Examples of Monitoring XCM Transfers"),(0,i.kt)("p",null,"The two previous sections outline the process of monitoring XCM deposits to specific account(s) and\nthen tracing back the origin of these deposits. However, the process of tracking an XCM transfer\n(hence the events to look for) may vary based on the direction of the XCM message. Here are some\nexamples to showcase the slight differences:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For an XCM transfer from a Parachain to a Relay chain\n",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("a",{parentName:"em",href:"https://polkadot.subscan.io/xcm_message/polkadot-2f4138e73affe763bebbefa82ee2eb2633425541"},"example"),")"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://moonbeam.subscan.io/extrinsic/4531955-6?event=4531955-29"},"event")," to look for in\nthe Parachain side is called ",(0,i.kt)("inlineCode",{parentName:"li"},"parachainsystem (UpwardMessageSent)"),", and the parameter\n",(0,i.kt)("inlineCode",{parentName:"li"},"message_hash")," in this event identifies the XCM transfer."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.subscan.io/extrinsic/17487547-0?event=17487547-3"},"event")," to track in the\nRelay chain side is called ",(0,i.kt)("inlineCode",{parentName:"li"},"messagequeue (Processed)"),", and the parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," of the event\nshould be the same as the ",(0,i.kt)("inlineCode",{parentName:"li"},"message_hash")," found in the Parachain event."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For an XCM transfer from a Relay chain to a Parachain\n",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("a",{parentName:"em",href:"https://polkadot.subscan.io/xcm_message/polkadot-9b01c2916c4d3c5ad01ee350bdda13059358981f"},"example"),")"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.subscan.io/extrinsic/17487930-2?tab=xcm_transfer"},"XCM Transfer Hash")," is\nwhat we need to check on the Relay chain side."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://acala.subscan.io/extrinsic/4553422-1?event=4553422-5"},"event")," to look for in the\nParachain side is called ",(0,i.kt)("inlineCode",{parentName:"li"},"dmpqueue (ExecutedDownward)"),", and the parameter that identifies the\nXCM message is either called ",(0,i.kt)("inlineCode",{parentName:"li"},"message_hash")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"message_id"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For an XCM transfer from a System Parachain to a Parachain\n",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("a",{parentName:"em",href:"https://polkadot.subscan.io/xcm_message/polkadot-7a1c6fd86e290680f8ee48cee8a64df8e75f7040"},"example"),")"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://assethub-polkadot.subscan.io/extrinsic/4677169-2?event=4677169-4"},"event")," to look\nfor in the System Parachain side is called ",(0,i.kt)("inlineCode",{parentName:"li"},"xcmpqueue (XcmpMessageSent)"),", and again the\n",(0,i.kt)("inlineCode",{parentName:"li"},"message_hash")," is one of the parameters of the event."),(0,i.kt)("li",{parentName:"ul"},"The corresponding ",(0,i.kt)("a",{parentName:"li",href:"https://astar.subscan.io/extrinsic/4540721-1?event=4540721-7"},"event")," in the\nParachain side is the ",(0,i.kt)("inlineCode",{parentName:"li"},"xcmpqueue (Success)")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"message_hash")," found in that event should\nhave the same value as the one in the System parachain.")))),(0,i.kt)("p",null,"More examples with different directions and their corresponding events, can be found in this\n",(0,i.kt)("a",{parentName:"p",href:"https://hackmd.io/@LwMsxe3-SFmNXxugAXOKgg/SJrREymlp"},'"How to trace XCM Transfers"')," page."),(0,i.kt)("h4",{id:"monitoring-of-failed-xcm-transfers"},"Monitoring of Failed XCM Transfers"),(0,i.kt)("p",null,"In case that an XCM transfer fails to complete successfully, then we will notice some different\nparameters in the events emitted or different events. Below are some examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From a Relay chain to a System Parachain\n",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("a",{parentName:"em",href:"https://polkadot.subscan.io/xcm_message/polkadot-c8d7186edb43a592d65b3b5a87c4ecaac38c5aa2"},"example"),")"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We will see the\n",(0,i.kt)("a",{parentName:"li",href:"https://assethub-polkadot.subscan.io/extrinsic/4671081-0?event=4671081-1"},"event"),(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"dmpqueue (ExecutedDownward)"))," in the System Parachain side with the following parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"outcome"))," with value ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Incomplete"))," and with the type of error which in this example is\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/blob/c54ea64af43b522d23bfabb8d917a490c0f23217/polkadot/xcm/src/v2/traits.rs#L43"},"UntrustedReserveLocation"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"message_id"))," which shows the hash of the XCM Transfer."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From a Parachain to another Parachain\n",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("a",{parentName:"em",href:"https://polkadot.subscan.io/xcm_message/polkadot-3e74e95204faa6ecf3c81f5129b85f498b89cff2"},"example"),")"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We will see the ",(0,i.kt)("a",{parentName:"li",href:"https://interlay.subscan.io/extrinsic/3627057-1?event=3627057-8"},"event"),(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"xcmpqueue (Fail)"))," in the destination Parachain with the following parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"error"))," which in this example is\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/blob/c54ea64af43b522d23bfabb8d917a490c0f23217/polkadot/xcm/src/v2/traits.rs#L98"},"TooExpensive"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"message_hash"))," which identifies the XCM Transfer."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Note")," : there might be another\n",(0,i.kt)("a",{parentName:"li",href:"https://interlay.subscan.io/extrinsic/3627057-1?event=3627057-7"},"event")," called\n",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"polkadotxcm (AssetsTrapped)"))," which indicates that some assets have been trapped (and hence\ncan be claimed).")))),(0,i.kt)("p",null,"A great resource to learn more about Error Management in XCM is the Polkadot blog post from Gavin\nWood,\n",(0,i.kt)("a",{parentName:"p",href:"https://www.polkadot.network/blog/xcm-part-three-execution-and-error-management"},"XCM Part III: Execution and Error Management"),"."))}u.isMDXComponent=!0}}]);