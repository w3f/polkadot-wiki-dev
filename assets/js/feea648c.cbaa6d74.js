"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9175],{35543:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(74848),i=t(28453);const o={id:"learn-xcvm",title:"XCM Virtual Machine (XCVM) & XCM Executor",sidebar_label:"XCM Virtual Machine (XCVM)",description:"Design of the XCM Executor and Mechanics of the XCM Virtual Machine.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcvm"},a=void 0,r={id:"learn/learn-xcvm",title:"XCM Virtual Machine (XCVM) & XCM Executor",description:"Design of the XCM Executor and Mechanics of the XCM Virtual Machine.",source:"@site/../docs/learn/learn-xcvm.md",sourceDirName:"learn",slug:"/learn-xcvm",permalink:"/docs/learn-xcvm",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-xcvm.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712558849e3,frontMatter:{id:"learn-xcvm",title:"XCM Virtual Machine (XCVM) & XCM Executor",sidebar_label:"XCM Virtual Machine (XCVM)",description:"Design of the XCM Executor and Mechanics of the XCM Virtual Machine.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcvm"},sidebar:"docs",previous:{title:"XCM Transport",permalink:"/docs/learn-xcm-transport"},next:{title:"XCM Instructions",permalink:"/docs/learn-xcm-instructions"}},c={},l=[{value:"XCMs are XCVM Programs",id:"xcms-are-xcvm-programs",level:2},{value:"XCM Executor &amp; Configuration",id:"xcm-executor--configuration",level:2},{value:"Cross Consensus Message (XCM) Anatomy &amp; Flow",id:"cross-consensus-message-xcm-anatomy--flow",level:2},{value:"Example Register: The Holding Register",id:"example-register-the-holding-register",level:3},{value:"Example: TransferAsset",id:"example-transferasset",level:3},{value:"Locations in XCM",id:"locations-in-xcm",level:2},{value:"MultiLocation Scenario Example",id:"multilocation-scenario-example",level:3},{value:"UniversalLocation in XCM",id:"universallocation-in-xcm",level:3},{value:"Simulating XCVM using the xcm-simulator",id:"simulating-xcvm-using-the-xcm-simulator",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"XCM Documentation",type:"info",children:(0,s.jsxs)(n.p,{children:["For a more practical approach to utilizing XCM, refer to the ",(0,s.jsx)(n.a,{href:"./learn/xcm",children:"XCM Docs"}),". Please keep in\nmind that XCM is under active development."]})}),"\n",(0,s.jsxs)(n.p,{children:["At the core of XCM lies the Cross-Consensus Virtual Machine (XCVM). A \u201cmessage\u201d in XCM is an XCVM\nprogram, referred to as an ",(0,s.jsx)(n.strong,{children:'"XCM"'})," or ",(0,s.jsx)(n.strong,{children:'"XCMs"'})," for multiple messages. The XCVM is a\nregister-based state machine. The state is tracked in domain-specific registers that hold\ninformation that is used and mutated along the execution of a particular message. Most of the XCM\nformat comprises these registers and the instructions used to compose XCVM programs."]}),"\n",(0,s.jsx)(n.p,{children:"The XCVM is an ultra-high-level non-Turing-complete computer whose instructions are designed to be\nroughly at the same level as transactions in terms of definition. Messages are one or more XCM\ninstructions executed in order by the XCVM. An XCM is executed until it either runs to the end or\nhits an error, at which point it finishes up and halts."}),"\n",(0,s.jsxs)(n.p,{children:["The first implementation of the XCVM is the\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/polkadot/tree/26b0c4f6273190f4538b24939a56b6a0b51a344c/xcm/xcm-executor",children:(0,s.jsx)(n.code,{children:"xcm-executor"})}),".\nIt follows the XCVM specification provided by Parity. It's engineered to be extendable, providing\nmaximum customizability when configuring XCM. Because the ",(0,s.jsx)(n.code,{children:"xcm-executor"})," is just an implementation\nof XCVM, it's entirely possible to create another implementation if desired."]}),"\n",(0,s.jsx)(n.h2,{id:"xcms-are-xcvm-programs",children:"XCMs are XCVM Programs"}),"\n",(0,s.jsxs)(n.p,{children:["A cross consensus message (XCM) is just a program that runs on the ",(0,s.jsx)(n.code,{children:"XCVM"}),": in other words, one or\nmore XCM instructions that are executed by an XCVM implementation, such as the ",(0,s.jsx)(n.code,{children:"xcm-executor"}),". To\nlearn more about the XCVM and the XCM format, see the latest\n",(0,s.jsx)(n.a,{href:"https://medium.com/polkadot-network/xcm-part-iii-execution-and-error-management-ceb8155dd166",children:"blog post on XCM"}),"\nby Dr. Gavin Wood."]}),"\n",(0,s.jsx)(n.p,{children:"XCM instructions might change a register, the state of the consensus system, or both. Depending on\nthe program's goal, whether it is to teleport assets from one chain to another or call a smart\ncontract on another chain, XCMs usually require changes to the registers before any changes to the\nconsensus system can be made."}),"\n",(0,s.jsx)(n.h2,{id:"xcm-executor--configuration",children:"XCM Executor & Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The XCM Executor's implementation centers around a core piece: the XCM configuration. Each instance\nof the Executor must have a valid configuration, which specifies a multitude of options on how a\nchain may treat incoming messages via\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/polkadot/blob/26b0c4f6273190f4538b24939a56b6a0b51a344c/xcm/xcm-executor/src/config.rs#L52",children:"Barriers"}),",\ncalculate weight for a message via the\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/polkadot/blob/26b0c4f6273190f4538b24939a56b6a0b51a344c/xcm/xcm-executor/src/config.rs#L55",children:"Weigher"}),",\nhow much weight to purchase via the\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/polkadot/blob/26b0c4f6273190f4538b24939a56b6a0b51a344c/xcm/xcm-executor/src/config.rs#L58",children:"Trader"}),",\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/polkadot/blob/26b0c4f6273190f4538b24939a56b6a0b51a344c/xcm/xcm-executor/src/config.rs#L89",children:"configure fees"}),",\nhow to\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/polkadot/blob/26b0c4f6273190f4538b24939a56b6a0b51a344c/xcm/xcm-executor/src/config.rs#L40",children:"convert origins"}),",\nand more."]}),"\n",(0,s.jsx)(n.h2,{id:"cross-consensus-message-xcm-anatomy--flow",children:"Cross Consensus Message (XCM) Anatomy & Flow"}),"\n",(0,s.jsx)(n.p,{children:"An XCM is made up of a list of instructions that are executed in order. There are four different\nkinds of XCM instructions:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Instruction"})," - Results in a state change in the local consensus system or some state change."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Trusted Indication"})," - Tells the XCVM, or the Executor, that some action has been done before\nalready - meaning, this action is now trusted and can be acted on, i.e., in a teleport scenario."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Information"})," - Provides additional information about a particular origin, usually the result\nof a query, i.e., a ",(0,s.jsx)(n.code,{children:"QueryResponse"})," instruction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"System Notification"})," - Typically used in the context of when an HRMP channel is being opened,\nclosed, or accepted."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Typically, an XCM takes the following path through the XCVM:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Instructions within an XCM are read one-by-one by the XCVM. An XCM may contain one or more\ninstructions."}),"\n",(0,s.jsxs)(n.li,{children:["The instruction is executed. This means that the current values of the ",(0,s.jsx)(n.em,{children:"XCVM registers"}),", the\n",(0,s.jsx)(n.em,{children:"instruction type"}),", and the ",(0,s.jsx)(n.em,{children:"instruction operands"})," are all used to execute some operation, which\nmight result in some registers changing their value, or in an error being thrown, which would\nhalt execution."]}),"\n",(0,s.jsx)(n.li,{children:"Each subsequent instruction within the XCM is read until the end of the message has been\nreached."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-register-the-holding-register",children:"Example Register: The Holding Register"}),"\n",(0,s.jsxs)(n.p,{children:["There are many instructions that depend on the ",(0,s.jsx)(n.em,{children:"Holding register"}),". The ",(0,s.jsx)(n.em,{children:"Holding register"})," is an XCVM\nregister that provides a place for any assets that are in an intermediary state to be held until\nthey are taken out of the Holding register. It requires an instruction to place assets within it and\nanother to withdraw them. The simplest example of this occurring is the ",(0,s.jsx)(n.code,{children:"DepositAsset"})," instruction,\nwhich in its Rust form looks like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"enum Instruction {\n    DepositAsset {\n        assets: MultiAssetFilter,\n        beneficiary: MultiLocation,\n    },\n    /* snip */\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This instruction specifies which assets (asset type and amount), already present in the Holding\nregister, are going to be taken from it and deposited to the specified beneficiary (recipient). It\nis very common for instructions to remove and place assets into the Holding register when\ntransacting between chains."}),"\n",(0,s.jsx)(n.h3,{id:"example-transferasset",children:"Example: TransferAsset"}),"\n",(0,s.jsxs)(n.p,{children:["An example below illustrates how a chain may transfer assets locally, or locally on a remote chain\n(as part of another instruction) using an XCM. In this message, the ",(0,s.jsx)(n.code,{children:"TransferAsset"})," instruction is\ndefined with two parameters: ",(0,s.jsx)(n.code,{children:"assets"}),", which are the assets to be transferred, and the\n",(0,s.jsx)(n.code,{children:"beneficiary"}),", whoever will be the sole beneficiary of these assets. More complex instructions,\nespecially those which perform actions that target a location other than the interpreting consensus\nsystem may make use of XCVM registers."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"enum Instruction {\n    TransferAsset {\n        assets: MultiAssets,\n        beneficiary: MultiLocation,\n    }\n    /* snip */\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"MultiAsset"})," is a general identifier for an asset. It may represent both fungible and\nnon-fungible assets, and in the case of a fungible asset, it represents some defined amount of the\nasset."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"MultiLocation"})," is a relative identifier, meaning that it can only be used to define the\nrelative path between two locations, and cannot generally be used to refer to a location\nuniversally."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"TransferAsset"})," is one of the many instructions that can be contained within an XCM. For more\ninformation, please read ",(0,s.jsx)(n.a,{href:"/docs/learn-xcm-instructions",children:"XCM Instructions in the wiki"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"locations-in-xcm",children:"Locations in XCM"}),"\n",(0,s.jsxs)(n.p,{children:['XCM\'s generic nature involves specifying a wide array of "locations", or any body that is governed\nby consensus (parachains, solochains, smart contracts, accounts, etc). These are relatively abstract\nnotions that point to ',(0,s.jsx)(n.em,{children:"where"})," but also ",(0,s.jsx)(n.em,{children:"to who"})," a particular action may affect. The ",(0,s.jsx)(n.code,{children:"MulitLocation"}),"\ntype is what XCM uses to define these locations."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"MultiLocation"})," is a relative identifier that defines a ",(0,s.jsx)(n.strong,{children:"relative"})," path into some state-bearing\nconsensus system."]}),"\n",(0,s.jsxs)(n.p,{children:["It is used to define the relative path between two locations, and cannot generally be used to refer\nto a location universally. It is very much akin to how a ",(0,s.jsx)(n.strong,{children:"relative"})," filesystem path works and is\ndependent on which consensus system the location expression is being evaluated."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"XCM MultiLocation",src:t(84627).A+"",width:"3612",height:"772"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MultiLocation"})," has two primary fields:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A series of paths, called ",(0,s.jsx)(n.code,{children:"Junctions"}),', which define an interior portion of state to descend into\nit (sometimes called a "sub-consensus" system, such as a smart contract or pallet). An interior\nlocation may also be used to refer to a Junction, used in the context of "a parachain is an\n',(0,s.jsx)(n.strong,{children:"interior location"})," of the relay chain\", or how a UTXO is interior to Bitcoin's consensus."]}),"\n",(0,s.jsxs)(n.li,{children:["The number of parent junctions at the beginning of a ",(0,s.jsx)(n.code,{children:"MultiLocation"}),"'s formation - in other words,\nthe number of parent consensus systems above it."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["There are a number of various ",(0,s.jsx)(n.code,{children:"Junction"})," variants that may be used to describe a particular\nlocation - whether it's a 32 byte account, a Substrate pallet, or a pluralistic body."]}),"\n",(0,s.jsx)(n.h3,{id:"multilocation-scenario-example",children:"MultiLocation Scenario Example"}),"\n",(0,s.jsxs)(n.p,{children:["In this scenario, assume an XCM is to be sent from our parachain to the Asset Hub\n(",(0,s.jsx)(n.code,{children:"Parachain 1000"}),"). This XCM references an account on the Asset Hub. As a general path, the\n",(0,s.jsx)(n.code,{children:"MultiLocation"})," would look like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"../Parachain(1000)/AccountId32(<some_account_id>)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or, as a Rust enum:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"MultiLocation {\n  parents: 1,\n  interior: X2(Parachain(1000), <some_account_id>.into())\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the first field, ",(0,s.jsx)(n.code,{children:"parents"}),", there is a parent of ",(0,s.jsx)(n.code,{children:"1"}),". This is because our parachain has the\nrelay chain as a parent - in other words, it will go ",(0,s.jsx)(n.strong,{children:"up"})," by one consensus system to the relay\nchain. This is also illustrated by the ",(0,s.jsx)(n.code,{children:"../"}),' of the "file path" representation.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The second field, ",(0,s.jsx)(n.code,{children:"interior"}),", defines where to go after the relay chain. In this case, from the\nrelay chain this message will go to the Asset Hub (",(0,s.jsx)(n.code,{children:"Parachain 1000"}),"), then reference the account\n(",(0,s.jsx)(n.code,{children:"some_account_id"}),") located within."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Keep in mind that this location is specific to this interaction. The identities may need to change\nif this location was defined on another consensus system, such as Kusama. On other consensus\nsystems, such as Ethereum, it won't be able to interpret it."}),"\n",(0,s.jsx)(n.h3,{id:"universallocation-in-xcm",children:"UniversalLocation in XCM"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"UniversalLocation"})," refers to any global consensus system. A global consensus system is an entity\nthat provides its top-level consensus through some non-derivative consensus algorithm that can exist\nwithout reference to any other singleton data system. Such global consensus systems include Polkadot\n(or other relay chains), Bitcoin, or Ethereum. It provides a point of reference for overarching\nconsensus systems."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"GlobalConsensus"})," junction refers to a global consensus system and takes a ",(0,s.jsx)(n.code,{children:"NetworkId"})," that\nspecifies a particular remote network. A ",(0,s.jsx)(n.code,{children:"UniversalLocation"})," allows overarching consensus systems to\ncommunicate using this junction. Sub-consensus systems (i.e., a parachain on Polkadot) may refer to\nother ",(0,s.jsx)(n.em,{children:"remote"})," sub-consensus systems (i.e., a parachain on Kusama) using a relative path defined via\na ",(0,s.jsx)(n.code,{children:"MultiLocation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"simulating-xcvm-using-the-xcm-simulator",children:"Simulating XCVM using the xcm-simulator"}),"\n",(0,s.jsxs)(n.p,{children:["Within the Polkadot repository exists the\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/xcm-simulator",children:(0,s.jsx)(n.code,{children:"xcm-simulator"})}),",\nwhich allows developers to experiment with building, executing, and simulating various XCM use\nscenarios."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},84627:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/multilocation-faf4a11faddbbf2111e7fa25e08f7758.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);