"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4672],{24567:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=(a(74866),a(85162),a(52991)),l=["components"],s={id:"build-guide",title:"Polkadot Developer Portal",sidebar_label:"Polkadot Developer Portal",description:"Start building with Polkadot/Kusama.",keywords:["build","how to build","develop","parachain","smart contract"],slug:"../build-guide"},p=void 0,d={unversionedId:"build/build-guide",id:"build/build-guide",title:"Polkadot Developer Portal",description:"Start building with Polkadot/Kusama.",source:"@site/../docs/build/build-guide.md",sourceDirName:"build",slug:"/build-guide",permalink:"/docs/build-guide",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-guide.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1704384612,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"build-guide",title:"Polkadot Developer Portal",sidebar_label:"Polkadot Developer Portal",description:"Start building with Polkadot/Kusama.",keywords:["build","how to build","develop","parachain","smart contract"],slug:"../build-guide"},sidebar:"docs",previous:{title:"Controller Accounts",permalink:"/docs/learn/learn-controller"},next:{title:"Client-side Development",permalink:"/docs/build-client-index"}},c={},u=[{value:"Development Ecosystem Overview",id:"development-ecosystem-overview",level:2},{value:"Building Parachains",id:"building-parachains",level:2},{value:"Constructing FRAME Runtimes with Substrate",id:"constructing-frame-runtimes-with-substrate",level:3},{value:"Building Parachains with Cumulus",id:"building-parachains-with-cumulus",level:4},{value:"Parachains Benefits",id:"parachains-benefits",level:4},{value:"Building a Pallet",id:"building-a-pallet",level:3},{value:"Developing Smart Contracts",id:"developing-smart-contracts",level:2},{value:"ink! and EVM-based Smart Contracts",id:"ink-and-evm-based-smart-contracts",level:3},{value:"Developing a dApp/uApp",id:"developing-a-dappuapp",level:2}],h={toc:u},m="wrapper";function k(t){var e=t.components,s=(0,i.Z)(t,l);return(0,o.kt)(m,(0,n.Z)({},h,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{mdxType:"DocCardList"}),(0,o.kt)("p",null,"Polkadot is a blockchain protocol with two\ngoals: providing ",(0,o.kt)("strong",{parentName:"p"},"shared security")," among all connected parachains and allowing all connected\nchains to ",(0,o.kt)("strong",{parentName:"p"},"interoperate")," by using ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM"),". With the advent of\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-pdk#parachain-development-kit"},"PDKs")," like\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus"),", the time it\ntakes to develop and launch a new chain has dropped significantly. While before, it would take years\nto launch a new chain, now it may only take weeks or even days, depending on your goals."),(0,o.kt)("p",null,"This guide will walk you through the steps you can take today to get started building your vision\nwith Polkadot. It will explain the difference\nbetween a ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachain")," and a smart contract in deciding which best fits\nyour architectural needs."),(0,o.kt)("p",null,"This build guide provides three different tracks:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#building-parachains"},"Protocol Development - Blockchain & Parachain Development")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#developing-smart-contracts"},"Developing Smart Contracts")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#developing-a-dappuapp"},"Developing a dApp"))),(0,o.kt)("admonition",{title:"Keep reading to find out more, or visit each respective track",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that these tracks are merely suggestive, and there are many ways to utilize\nPolkadot, Substrate, and their various\ndevelopmental components. For more inspiration, look at the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-open-source"},"open source projects")," featured here in the wiki!")),(0,o.kt)("h2",{id:"development-ecosystem-overview"},"Development Ecosystem Overview"),(0,o.kt)("mermaid",{value:"%%{\n  init: {\n    'theme': 'base',\n    'themeVariables': {\n      'fontFamily': 'Unbounded',\n      'primaryColor': '#E6007A',\n      'fontSize': '16px',\n      'primaryTextColor': '#fff',\n      'primaryBorderColor': '#7C0000',\n      'lineColor': '#140523',\n      'secondaryColor': '#552BBF',\n      'tertiaryColor': '#fff'\n    }\n  }\n}%%\nflowchart TB\n    subgraph PL [\"Protocol Land (Parachains, Smart Contracts)\"]\n\n        subgraph SCD [\"Smart Contract Development\"]\n          direction LR\n          SC[\"Use Smart Contract Parachain\"]\n          SC --\x3e ink!\n          SC --\x3e Solidity\n        end\n\n        subgraph PSL [\"Blockchain Development\"]\n           direction LR\n           PS[\"Polkadot SDK\"] --\x3e R[WASM Runtime - Substrate & FRAME]\n           R --\x3eParachain[\"Parachain\"]--\x3eSSC[\"Shared Security - Cumulus\"]\n           R --\x3eSoloChain[Solo Chain]--\x3eNSS[\"No Shared Security\"]\n        end\n    end\n\n    PL--\x3e| Develop apps| CS\n\n    subgraph CS [\"Client/User Land (dApps/uApps)\"]\n        LC[\"Light Clients (Smoldot)\"]\n        UA[uApp]\n        UA --\x3e PAPI[Polkadot API]\n        UA --\x3e PJS[Polkadot JS]\n        UA --\x3e SubXT\n        PAPI --\x3e LC\n        PJS --\x3e LC\n        SubXT --\x3e LC\n    end"}),(0,o.kt)("p",null,"Before diving into the various paths, one can take in developing on\nPolkadot, it's important to realize and know key terms that make up the\nfollowing sections. Even before considering what kind of application you want to build, it's prudent\nto understand what Polkadot ",(0,o.kt)("em",{parentName:"p"},"is")," and how\nrelates to it, and what each developmental component can do for you within the Polkadot ecosystem."),(0,o.kt)("p",null,"Before diving into any one of these tracks, it is encouraged to read about\nPolkadot and its networks in order to gain\ncontext about the application you could make."),(0,o.kt)("h2",{id:"building-parachains"},"Building Parachains"),(0,o.kt)("p",null,"Polkadot is canonically referred to as the\nRelay Chain. It is also considered a ",(0,o.kt)("em",{parentName:"p"},"layer zero")," protocol, as it enables the interoperability and\nshared security of multiple ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachains"),", which are ",(0,o.kt)("em",{parentName:"p"},"layer one"),"\nprotocols. Parachains connect to a relay chain using the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"Parachains Protocol"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"build 1",src:a(41227).Z,width:"1296",height:"907"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Throughout this document, you will encounter the term ",(0,o.kt)("strong",{parentName:"p"},"runtime")," or ",(0,o.kt)("strong",{parentName:"p"},"STF (State Transition\nFunction)"),". Both refer to the same concept, as they define how a particular system, i.e., a\nblockchain, should deal with state changes externally and internally. Both of these terms are used\nextensively in Polkadot, and by association,\nSubstrate contexts.")),(0,o.kt)("p",null,"Parachains open possibilities to construct complex ",(0,o.kt)("strong",{parentName:"p"},"runtime"),", or ",(0,o.kt)("strong",{parentName:"p"},"STF")," (state transition\nfunction) the logic that would be too expensive to execute with smart contracts. However, unlike\nsmart contracts, parachains lack a mandatory gas metering system entirely and could potentially be\nvulnerable to bugs that cause infinite loops (something that is prevented by design in smart\ncontracts). This vulnerability is mitigated by the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/build/tx-weights-fees/"},"weight system")," that is implemented in Substrate\n-- although it places more of a burden on the developer of the parachain to perform properly\nbenchmarks."),(0,o.kt)("admonition",{title:"What is a parathread?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'Parathreads, or "on-demand parachains," are like parachains and enable the developer to have\nlower-level control of the logic of their application. The main difference between the two is\neconomical since parathreads will be much less expensive to secure than a parachain and is a\n"pay-as-you-go" model. The lower costs of parathreads are because parathreads will only produce a\nblock when needed, unlike parachains, which have secured a slot to produce a block at every block of\nthe Relay Chain. When building a parathread, you will use the same tools (like PDKs) and get all the\nbenefits of building a parachain without the cost drawback.')),(0,o.kt)("h3",{id:"constructing-frame-runtimes-with-substrate"},"Constructing FRAME Runtimes with Substrate"),(0,o.kt)("p",null,"Polkadot is built using the ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate")," framework.\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate")," is a highly configurable and dynamic framework for building\nblockchains. At a lower level, Substrate provides a set of tools and libraries ranging from\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/rust-api/"},"block production, finality gadgets to peer-to-peer networking"),".\nBoth Polkadot and Kusama, as well as most parachains, are built using Substrate."),(0,o.kt)("p",null,"In essence, Substrate can break down a blockchain's development process by providing crucial\nbuilding blocks of functionality, removing the need for re-engineering complex mechanisms that\nusually involved when developing a blockchain."),(0,o.kt)("p",null,"Substrate can be used as a basis for a parachain to connect to a relay chain like Polkadot or\nKusama, or even as a basis to form a conventional layer one solo chain."),(0,o.kt)("p",null,"Currently, the most streamlined way of utilizing Substrate is\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/learn/runtime-development/#frame"},"FRAME"),", which conveniently allows for a\nruntime/STF to be generated from a set of modules (called\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/frame-pallets/"},"pallets"),").\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/learn/architecture/#runtime"},"Runtimes")," in Substrate are built using\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"WebAssembly")," (Wasm), and represent the state transition function for a\nnetwork. FRAME allows for a collection of business logic-oriented modules, called\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/frame-pallets/"},"pallets"),", to construct a runtime/STF and define\nhow exactly the blockchain is supposed to behave. Ranging from\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_identity/index.html"},"identity")," to\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_contracts/index.html"},"smart contracts"),",\npallets can be quite extensive in providing on-chain functionality."),(0,o.kt)("p",null,"Even though FRAME is heavily used, it is not the only way to create a valid runtime/STF using\nSubstrate. Substrate can be used to create new paradigms and abstractions that build on the concept\nof web3."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Although most parachains utilize FRAME and Substrate to build runtime/STFs for connecting to the\nrelay chain, it is not contingent. Building a parachain using other tools is possible, as long as\nthey follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"Parachains Protocol"),"."),(0,o.kt)("p",{parentName:"admonition"},"As a general rule of thumb, Substrate provides the means for this to become possible through\ncomparably minimal effort.")),(0,o.kt)("h4",{id:"building-parachains-with-cumulus"},"Building Parachains with Cumulus"),(0,o.kt)("p",null,"Diving further into building parachains, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus")," is another\nset of tools that aid in building a parachain-ready blockchain for Polkadot or Kusama. Cumulus\nutilizes FRAME and Substrate to create an easy way to build your first parachain. It ensures the\nchain follows the Parachain Protocol."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"Cumulus clouds are shaped like dots; together, they form an intricate, beautiful and functional\nsystem."))),(0,o.kt)("p",null,"For most developers, the best place to start is to get familiar with Substrate independently,\nfollowed by FRAME, with Cumulus as the final step to understanding the entire parachain building\nprocess. This way, one can view how various paradigms are applied and decide on integrating or\nutilizing Substrate for their particular use case."),(0,o.kt)("p",null,"Please see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/build-pdk"},"parachain development guide")," for how to get started on building\na parachain or parathread."),(0,o.kt)("h4",{id:"parachains-benefits"},"Parachains Benefits"),(0,o.kt)("p",null,"Parachains contain their own runtime/STF logic and benefit from the shared security and the\ncross-consensus messaging provided by the Polkadot relay chain. Parachains\npermit high flexibility and customization but require more effort to create and maintain over time.\nA production-grade parachain is typically more involved to create due to the complexity involved in\nblockchain networks' technical and economic aspects."),(0,o.kt)("p",null,"Parachains grant the creators more space to build the monetary system and other chain aspects from\nthe ground up. They will allow for a more concise and efficient execution of complex logic than a\nsmart contract platform could offer. Parachains also provide more flexibility in the form of\ngovernance and can perform complete upgrades in a less controversial way than the current process of\nhard forks."),(0,o.kt)("p",null,"Some examples of features you can have on a parachain or parathread:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Custom fee structure (for example, pay a flat transaction fee or pay per byte)."),(0,o.kt)("li",{parentName:"ul"},"Shared security and finalization via the relay chain (Polkadot or Kusama)."),(0,o.kt)("li",{parentName:"ul"},"Custom monetary policy for the native token and local economy."),(0,o.kt)("li",{parentName:"ul"},"Treasury to be funded through transitions in your state function."),(0,o.kt)("li",{parentName:"ul"},"A governance mechanism that could manage a DAO that is responsible for allocating your on-chain\ntreasury.")),(0,o.kt)("h3",{id:"building-a-pallet"},"Building a Pallet"),(0,o.kt)("p",null,"While parachains are highly customizable, they are often complex to develop. If you wish to get\nfamiliar with FRAME and Substrate, a good place to start is by building a pallet in a development\nenvironment. A pallet is a fully customizable module that allows you to implement layer one logic\nwith relatively minimal development time on a fundamental level while still allowing the possibility\nof building advanced functionality into your custom chain."),(0,o.kt)("p",null,"To learn how to build a pallet, follow the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/build-application-logic/"},"Substrate documentation"),"."),(0,o.kt)("h2",{id:"developing-smart-contracts"},"Developing Smart Contracts"),(0,o.kt)("p",null,"Smart contracts are another option that enables an often simpler developer experience. Below is a\nquick comparison of how building a smart contract compares to building a parachain:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Parachains"),(0,o.kt)("th",{parentName:"tr",align:null},"Smart Contracts"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Speed of Development"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ease of Deployment"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Complexity of logic"),(0,o.kt)("td",{parentName:"tr",align:null},"+"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Maintenance overhead"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Level of customization"),(0,o.kt)("td",{parentName:"tr",align:null},"+"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Strict resource control"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Native chain features"),(0,o.kt)("td",{parentName:"tr",align:null},"+"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Scalability"),(0,o.kt)("td",{parentName:"tr",align:null},"+"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("admonition",{title:"What's the difference between a smart contract and a pallet?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you recall, a parachain comprises a runtime/STF usually built on Substrate. These runtime/STFs\noften utilize FRAME, which is subsequently made of pallets. Pallets are part of a Substrate\nruntime/STF, whereas smart contracts are a product of a pallet (see:\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_contracts/index.html"},"pallet_contracts"),").\nPallets require more engineering and thought, as they can directly affect the chain's state.")),(0,o.kt)("h3",{id:"ink-and-evm-based-smart-contracts"},"ink! and EVM-based Smart Contracts"),(0,o.kt)("p",null,"At a high level, a ",(0,o.kt)("em",{parentName:"p"},"smart contract")," is simply some code that exists at an address on a chain and is\ncallable by external actors. Whether it's\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/integrate-with-tools/evm-integration/"},"EVM-based"),", or written\nusing ",(0,o.kt)("a",{parentName:"p",href:"https://use.ink/"},"ink!"),", smart contracts sandboxed, executable programs that live on-chain."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The Polkadot relay chain does not support smart contracts. However, several parachains do. See the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-smart-contracts#smart-contract-environments-are-still-maturing"},"smart contracts guide")," for\nmore information about the environments provided.")),(0,o.kt)("p",null,"A popular choice for smart contracts is ",(0,o.kt)("a",{parentName:"p",href:"https://use.ink/"},"ink!"),". Other parachains that offer\nEVM-based contracts written in Solidity alongside ink!\n",(0,o.kt)("a",{parentName:"p",href:"./build-smart-contracts#parachains"},"are also available"),"."),(0,o.kt)("p",null,"Because smart contracts exist on a single chain at a time, they can have smooth interoperability\nwith other smart contracts on the same chain. However, they will always be constrained and limited\nby the inherent characteristics of their host chain."),(0,o.kt)("p",null,"As a developer, you will need to consider the storage and complexity of your smart contract to\nensure that gas usage stays within reasonable bounds. Consider using the listed options on the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-storage"},"decentralized storage")," page to keep the data and submit only the content address\non the chain."),(0,o.kt)("admonition",{title:"Building a smart contract",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/build-smart-contracts"},"smart contracts guide")," for how to get started on building\na smart contract.")),(0,o.kt)("h2",{id:"developing-a-dappuapp"},"Developing a dApp/uApp"),(0,o.kt)("p",null,"If one aims to develop a ",(0,o.kt)("strong",{parentName:"p"},"dApp")," (Decentralized App) or ",(0,o.kt)("strong",{parentName:"p"},"uApp")," (Unstoppable App), the Polkadot\necosystem contains various SDKs to tap into the relay chain and parachains."),(0,o.kt)("p",null,"For front-end applications, several options exist for interfacing with Substrate-based chains\n(parachains, relay chains, etc.) and smart contracts. These often will interact with the RPC of a\nSubstrate node."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"build-dapp"},"Please visit the full documentation for developing dApps and other general client-side development resources.")),(0,o.kt)("p",null,"For a complete list of tools, please take a look here:\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-open-source"},"Tools, APIs, and Languages")))}k.isMDXComponent=!0},41227:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/build-1-706b8858ef80594b1c9d2cd9c4ce0421.png"}}]);