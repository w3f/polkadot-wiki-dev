"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8679],{29446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(74848),i=n(28453);const r={id:"learn-xcm-pallet",title:"XCM FRAME Pallet Overview",sidebar_label:"XCM Pallet",description:"Mechanics of the XCM Pallet and its role in Polkadot's Ecosystem.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-pallet"},a=void 0,o={id:"learn/learn-xcm-pallet",title:"XCM FRAME Pallet Overview",description:"Mechanics of the XCM Pallet and its role in Polkadot's Ecosystem.",source:"@site/../docs/learn/learn-xcm-pallet.md",sourceDirName:"learn",slug:"/learn-xcm-pallet",permalink:"/docs/learn-xcm-pallet",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-xcm-pallet.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:169692814e4,frontMatter:{id:"learn-xcm-pallet",title:"XCM FRAME Pallet Overview",sidebar_label:"XCM Pallet",description:"Mechanics of the XCM Pallet and its role in Polkadot's Ecosystem.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-pallet"},sidebar:"docs",previous:{title:"Cross-Consensus Message Format (XCM)",permalink:"/docs/learn-xcm"},next:{title:"XCM Use-cases",permalink:"/docs/learn-xcm-usecases"}},c={},l=[{value:"Primitive Extrinsics",id:"primitive-extrinsics",level:2},{value:"Asset Transfer Extrinsics",id:"asset-transfer-extrinsics",level:2},{value:"Transfer Reserve vs. Teleport",id:"transfer-reserve-vs-teleport",level:3},{value:"Version Negotiation Extrinsics",id:"version-negotiation-extrinsics",level:2},{value:"Fees in the XCM Pallet",id:"fees-in-the-xcm-pallet",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"XCM Documentation",type:"info",children:(0,s.jsxs)(t.p,{children:["For a more practical approach to utilizing XCM, refer to the ",(0,s.jsx)(t.a,{href:"./learn/xcm",children:"XCM Docs"}),". Please keep in\nmind that XCM is under active development."]})}),"\n",(0,s.jsxs)(t.p,{children:["The XCM pallet\n(",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/master/polkadot/xcm/pallet-xcm/src/lib.rs",children:(0,s.jsx)(t.code,{children:"pallet-xcm"})}),")\nprovides a set of pre-defined, commonly used XCVM programs in the form of a set of extrinsics using\n",(0,s.jsx)(t.a,{href:"https://docs.substrate.io/reference/frame-pallets/",children:"FRAME"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This pallet provides some default implementations for traits required by ",(0,s.jsx)(t.code,{children:"XcmConfig"}),". The XCM\nexecutor is also included as an associated type within the pallet's configuration."]}),"\n",(0,s.jsxs)(t.p,{children:["Where the XCM format defines a set of instructions used to construct XCVM programs, ",(0,s.jsx)(t.code,{children:"pallet-xcm"}),"\ndefines a set of extrinsics that can be utilized to build XCVM programs, either to target the local\nor external chains. ",(0,s.jsx)(t.code,{children:"pallet-xcm"}),"'s functionality is separated into three categories:"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Remember, all XCMs are XCVM programs that follow\n",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/xcm-format",children:"the XCM format"}),". It is the job of the XCM executor is to\nhandle and execute these programs."]})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Primitive, dispatchable functions to locally execute an XCM."}),"\n",(0,s.jsx)(t.li,{children:"High-level, dispatchable functions for asset transfers."}),"\n",(0,s.jsx)(t.li,{children:"Version negotiation-specific dispatchable functions."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"primitive-extrinsics",children:"Primitive Extrinsics"}),"\n",(0,s.jsx)(t.p,{children:"There are two primary primitive extrinsics. These extrinsics handle sending and executing XCVM\nprograms as dispatchable functions within the pallet."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/a808a3a0918ffbce314dbe00e03761e7a8f8ce79/polkadot/xcm/pallet-xcm/src/lib.rs#L902",children:(0,s.jsx)(t.code,{children:"execute"})})," -\nThis call contains direct access to the XCM executor. It is the job of the executor to check the\nmessage and ensure that no barrier/filter will block the execution of the XCM. Once it is deemed\nvalid, the message will then be ",(0,s.jsx)(t.em,{children:"locally"})," executed, therein returning the outcome as an event.\nThis operation is executed on behalf of whichever account has signed the extrinsic. It's possible\nfor only a partial execution to occur."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/a808a3a0918ffbce314dbe00e03761e7a8f8ce79/polkadot/xcm/pallet-xcm/src/lib.rs#L769",children:(0,s.jsx)(t.code,{children:"send"})})," -\nThis call specifies where a message should be sent\n(",(0,s.jsx)(t.a,{href:"/docs/learn-xcm-transport",children:"via a transport method"}),") externally to a particular destination, i.e.\na parachain, smart contract, or any system which is governed by consensus. In contrast to\n",(0,s.jsx)(t.code,{children:"execute"}),", the executor is not called locally, as the execution will occur on the destination\nchain."]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:["The XCM pallet needs the ",(0,s.jsx)(t.code,{children:"XcmRouter"})," to send XCMs. It is used to dictate where XCMs are allowed to\nbe sent, and which XCM transport protocol to use. For example, Kusama, the canary network, uses the\n",(0,s.jsx)(t.code,{children:"ChildParachainRouter"})," which only allows for Downward Message Passing from the relay to parachains\nto occur."]}),(0,s.jsxs)(t.p,{children:["You can read more about ",(0,s.jsx)(t.a,{href:"/docs/learn-xcm-transport",children:"XCM transport protocols here"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"asset-transfer-extrinsics",children:"Asset Transfer Extrinsics"}),"\n",(0,s.jsxs)(t.p,{children:["Several extrinsics within the pallet handle asset transfer logic. They define a predetermined set of\ninstructions for sending and executing XCMs. Two variants of these functions are prefixed with\n",(0,s.jsx)(t.code,{children:"limited_"}),". They have the same functionality but can specify a weight to pay for the XCM fee."]}),"\n",(0,s.jsx)(t.p,{children:"Otherwise, the fee is taken as needed from the asset being transferred."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/a808a3a0918ffbce314dbe00e03761e7a8f8ce79/polkadot/xcm/pallet-xcm/src/lib.rs#L872",children:(0,s.jsx)(t.code,{children:"reserve_transfer_assets"})})," -\nTransfer some assets from the local chain to the sovereign account of a destination chain and\nforward an XCM containing a\n",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/xcm-format#reserveassetdeposited",children:(0,s.jsx)(t.code,{children:"ReserveAssetDeposited"})}),"\ninstruction, which serves as a notification."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/a808a3a0918ffbce314dbe00e03761e7a8f8ce79/polkadot/xcm/pallet-xcm/src/lib.rs#L827",children:(0,s.jsx)(t.code,{children:"teleport_assets"})})," -\nTeleport some assets from the local chain to some destination chain."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"transfer-reserve-vs-teleport",children:"Transfer Reserve vs. Teleport"}),"\n",(0,s.jsx)(t.p,{children:"While both extrinsics deal with transferring assets, they exhibit fundamentally different behavior."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Teleporting"})," an asset implies a two-step process: the assets are taken out of circulating\nsupply (typically by burning/destroying) in the origin chain and re-minted to whatever account is\nspecified at the destination. Teleporting should only occur if there is an inherent and bilateral\ntrust between the two chains, as the tokens destroyed at the origin ",(0,s.jsx)(t.em,{children:"could not"})," necessarily be\nguaranteed to have the same properties when minted at the destination. There has to be ",(0,s.jsx)(t.strong,{children:"trust"}),"\nthat the a particular chain burned, or re-minted the assets."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Transferring"})," or ",(0,s.jsx)(t.strong,{children:"reserving"})," an asset implies that ",(0,s.jsx)(t.strong,{children:"equivalent"})," assets (i.e, native\ncurrency, like ",(0,s.jsx)(t.code,{children:"DOT"})," or ",(0,s.jsx)(t.code,{children:"KSM"}),") are withdrawn from ",(0,s.jsx)(t.em,{children:"sovereign account"})," of the origin chain and\ndeposited into the sovereign account on the destination chain. Unlike teleporting an asset, it is\nnot destroyed and re-minted, rather a trusted, third entity is used (i.e., Asset Hub) to\n",(0,s.jsx)(t.strong,{children:"reserve"})," the assets, wherein the sovereign account of the destination chain on the reserve\nchain obtains ownership of these assets."]}),"\n",(0,s.jsx)(t.p,{children:"It's worth noting that this means that some other mechanism is needed to ensure that the balance\non the destination does not exceed the amount being held in reserve chain."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"A sovereign account refers to an account within a particular consensus system. Even though accounts\nmay be different in terms of factors such as an address format, XCM agnostic nature enables\ncommunication between these sovereign accounts that are in other consensus systems."})}),"\n",(0,s.jsx)(t.h2,{id:"version-negotiation-extrinsics",children:"Version Negotiation Extrinsics"}),"\n",(0,s.jsx)(t.p,{children:"The following extrinsics require root, as they are only used when bypassing XCM version negotiation.\nThey change any relevant storage aspects that enforce anything to do with XCM version negotiations."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/a808a3a0918ffbce314dbe00e03761e7a8f8ce79/polkadot/xcm/pallet-xcm/src/lib.rs#L934",children:(0,s.jsx)(t.code,{children:"force_xcm_version"})})," -\nModifies the ",(0,s.jsx)(t.code,{children:"SupportedVersion"})," storage to change a particular destination's stated XCM version."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/a808a3a0918ffbce314dbe00e03761e7a8f8ce79/polkadot/xcm/pallet-xcm/src/lib.rs#L957",children:(0,s.jsx)(t.code,{children:"force_default_xcm_version"})})," -\nModifies the ",(0,s.jsx)(t.code,{children:"SafeXcmVersion"})," storage, which stores the default XCM version to use when the\ndestination's version is unknown."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/a808a3a0918ffbce314dbe00e03761e7a8f8ce79/polkadot/xcm/pallet-xcm/src/lib.rs#L972",children:(0,s.jsx)(t.code,{children:"force_subscribe_version_notify"})})," -\nSends an XCM with a\n",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/xcm-format#subscribeversion",children:(0,s.jsx)(t.code,{children:"SubscribeVersion"})})," instruction to a\ndestination."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/a808a3a0918ffbce314dbe00e03761e7a8f8ce79/polkadot/xcm/pallet-xcm/src/lib.rs#L996",children:(0,s.jsx)(t.code,{children:"force_unsubscribe_version_notify"})})," -\nSends an XCM with a\n",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/xcm-format#unsubscribeversion",children:(0,s.jsx)(t.code,{children:"UnsubscribeVersion"})})," instruction\nto a destination."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"fees-in-the-xcm-pallet",children:"Fees in the XCM Pallet"}),"\n",(0,s.jsxs)(t.p,{children:["Message fees are only paid if the interior location does not equal the interpreting consensus system\n(known as Here in the context of an XCM ",(0,s.jsx)(t.code,{children:"Multilocation"}),"). Otherwise, the chain bears the fees. If\napplicable, fees are withdrawn from the assets from the specified ",(0,s.jsx)(t.code,{children:"MultiLocation"})," and used as\npayment to execute any subsequent instructions within the XCM."]}),"\n",(0,s.jsxs)(t.p,{children:["Fees are generally dependent on several factors within the ",(0,s.jsx)(t.code,{children:"XcmConfig"}),". For example, the barrier may\nnegate any fees to be paid at all."]}),"\n",(0,s.jsxs)(t.p,{children:["Before any XCM is sent, and if the destination chain\u2019s barrier requires it, a\n",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/xcm-format#buyexecution",children:(0,s.jsx)(t.code,{children:"BuyExecution"})})," instruction is used to buy\nthe necessary weight for the XCM. XCM fee calculation is handled by the Trader, which iteratively\ncalculates the total fee based on the number of instructions."]}),"\n",(0,s.jsx)(t.p,{children:"The Trader used to calculate the weight (time for computation in consensus) to include in the\nmessage. Fee calculation in XCM is highly configurable and, for this reason, subjective to whichever\nconfiguration is in place."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);