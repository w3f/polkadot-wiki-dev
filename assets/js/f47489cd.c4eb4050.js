"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4544],{39892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"learn/learn-runtime-upgrades","title":"Runtime Upgrades","description":"Forkless Runtime Upgrades on Polkadot.","source":"@site/../docs/learn/learn-runtime-upgrades.md","sourceDirName":"learn","slug":"/learn-runtime-upgrades","permalink":"/docs/learn-runtime-upgrades","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-runtime-upgrades.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1726760224000,"frontMatter":{"id":"learn-runtime-upgrades","title":"Runtime Upgrades","sidebar_label":"Runtime Upgrades","description":"Forkless Runtime Upgrades on Polkadot.","keywords":["runtime","upgrades","releases","forkless"],"slug":"../learn-runtime-upgrades"},"sidebar":"docs","previous":{"title":"WebAssembly (Wasm)","permalink":"/docs/learn-wasm"},"next":{"title":"Advanced","permalink":"/docs/learn-advanced-index"}}');var s=t(74848),i=t(28453);const a={id:"learn-runtime-upgrades",title:"Runtime Upgrades",sidebar_label:"Runtime Upgrades",description:"Forkless Runtime Upgrades on Polkadot.",keywords:["runtime","upgrades","releases","forkless"],slug:"../learn-runtime-upgrades"},o=void 0,l={},d=[{value:"Forkless Upgrades",id:"forkless-upgrades",level:2},{value:"Forkless Upgrades - Parachains &amp; Solo Chains",id:"forkless-upgrades---parachains--solo-chains",level:3},{value:"Client Releases",id:"client-releases",level:2},{value:"Runtime vs Client versions",id:"runtime-vs-client-versions",level:3},{value:"Runtime Upgrades for Various Users",id:"runtime-upgrades-for-various-users",level:2},{value:"For Infrastructure Providers",id:"for-infrastructure-providers",level:3},{value:"For Nominators",id:"for-nominators",level:3},{value:"Monitoring Runtime Changes",id:"monitoring-runtime-changes",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Runtime upgrades allow the relay chain, parachains, and solo blockchains built with the Polkadot SDK\nto change their core business logic (referred to as the ",(0,s.jsx)(n.strong,{children:"runtime"}),") without the need for a hard\nfork."]}),"\n",(0,s.jsx)(n.h2,{id:"forkless-upgrades",children:"Forkless Upgrades"}),"\n",(0,s.jsxs)(n.p,{children:['You may have encountered the term "hard fork" before in the blockchain space. A ',(0,s.jsx)(n.strong,{children:"hard fork"})," occurs\nwhen a blockchain's logic changes such that nodes that do not include the new changes cannot remain\nin consensus with nodes that do. Such changes are backward incompatible. Hard forks can be political\ndue to the nature of the upgrades and logistically demanding due to the number (potentially\nthousands) of nodes in the network that need to upgrade their software. Thus, hard forking is slow,\ninefficient, and error-prone due to the levels of offline coordination required and, therefore, the\npropensity to bundle many upgrades into one large-scale event."]}),"\n",(0,s.jsxs)(n.p,{children:["The usage of ",(0,s.jsx)(n.a,{href:"/docs/learn-wasm",children:"WebAssembly"}),' in the Polkadot SDK (the framework powering Polkadot,\nKusama and their respective parachains), give the relay chain, its parachains, as well as any other\nstandalone solo chains built with the Polkadot SDK the ability to upgrade their runtime (the chain\'s\n"business logic") without a hard fork of the respective network.']}),"\n",(0,s.jsxs)(n.p,{children:["Rather than encoding the runtime in the nodes, Polkadot nodes contain a WebAssembly\n",(0,s.jsx)(n.a,{href:"learn-polkadot-host",children:"execution host"}),". They maintain consensus on a very low-level and\nwell-established instruction set. Upgrades can be small, isolated, and very specific by deploying\nWebAssembly on-chain and having nodes auto-enact the new logic at a particular block height."]}),"\n",(0,s.jsxs)(n.p,{children:["The runtime is stored on the blockchain itself. Polkadot can upgrade its runtime by upgrading the\nlogic stored on-chain and removes the coordination challenge of requiring thousands of node\noperators to upgrade in advance of a given block number. Polkadot stakeholders propose and approve\nupgrades through the ",(0,s.jsx)(n.a,{href:"/docs/learn-polkadot-opengov",children:"on-chain governance"})," system, which also enacts\nthem autonomously once the runtime upgrade referendum is approved through on-chain voting."]}),"\n",(0,s.jsx)(n.p,{children:"As a result of storing the runtime as part of the state, the runtime code itself becomes state\nsensitive, and calls to runtime can change the runtime code itself. Therefore, the Polkadot Host\nmust always ensure it provides the runtime corresponding to the state in which the entry point has\nbeen called."}),"\n",(0,s.jsx)(n.h3,{id:"forkless-upgrades---parachains--solo-chains",children:"Forkless Upgrades - Parachains & Solo Chains"}),"\n",(0,s.jsxs)(n.p,{children:["The node architectural design for parachains and solo chains is similar to that of the relay chain,\nwith the runtime code being a Wasm blob that is stored in chain state. Solo chains built with\nPolkadot SDK, which are blockchains that have a native consensus mechanism that is independent of\nthe relay chain's consensus, can be updated through an on-chain governance system like\n",(0,s.jsx)(n.a,{href:"/docs/learn-polkadot-opengov",children:"OpenGov"})," or a simple sudo/multisig setup."]}),"\n",(0,s.jsx)(n.p,{children:"Parachains must notify the relay chain whenever a new upgrade is to be enacted. This is done using\ntwo key extrinsics:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://paritytech.github.io/polkadot-sdk/master/frame_system/pallet/struct.Pallet.html#method.authorize_upgrade",children:(0,s.jsx)(n.code,{children:"system.authorizeUpgrade"})})," -\nnotifies the relay chain that an upgrade is to take place, and thus a new state transition\nfunction is going to be introduced for that parachain to be validated with."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://paritytech.github.io/polkadot-sdk/master/frame_system/pallet/struct.Pallet.html#method.apply_authorized_upgrade",children:(0,s.jsx)(n.code,{children:"system.applyAuthorizedUpgrade"})})," -\nenacts the upgrade, assuming it has been approved."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"client-releases",children:"Client Releases"}),"\n",(0,s.jsxs)(n.p,{children:["The existing runtime logic is followed to update the ",(0,s.jsx)(n.a,{href:"/docs/learn-wasm",children:"Wasm"})," runtime stored on the\nblockchain to a new version. The upgrade is then included in the blockchain itself, meaning that all\nthe nodes on the network execute it. Generally, there is no need to upgrade your nodes manually\nbefore the runtime upgrade, as they will automatically start to follow the new logic of the chain.\nNodes only need to be updated when the runtime requires new host functions, or there is a change in\nnetworking or consensus."]}),"\n",(0,s.jsx)(n.p,{children:"Transactions constructed for a given runtime version will not work on later versions. Therefore, a\ntransaction constructed based on a runtime version will not be valid in later runtime versions. If\nyou can\u2019t submit a transaction before the upgrade, it is better to wait and construct it afterward."}),"\n",(0,s.jsx)(n.p,{children:"Although upgrading your nodes is generally not necessary to follow an upgrade, we recommend\nfollowing the Polkadot releases and upgrading promptly, especially for high-priority or critical\nreleases."}),"\n",(0,s.jsx)(n.admonition,{title:"New Client Releases",type:"info",children:(0,s.jsxs)(n.p,{children:["The details about the latest client releases can be found in the\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/polkadot-sdk/releases",children:"releases section on the Polkadot repository"}),".\nA detailed analysis for client releases can be viewed on the\n",(0,s.jsx)(n.a,{href:"https://forum.polkadot.network/tag/release-analysis",children:"Polkadot Forum"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"runtime-vs-client-versions",children:"Runtime vs Client versions"}),"\n",(0,s.jsxs)(n.p,{children:["The runtime and client versions are distinct from each other. The runtime versioning typically looks\nlike ",(0,s.jsx)(n.code,{children:"network-xxxx"}),", whereas the client versioning looks like ",(0,s.jsx)(n.code,{children:"vx.x.xx"}),". For instance, the runtime\nversion shown on the top left section of Polkadot-JS UI below is ",(0,s.jsx)(n.code,{children:"kusama-9370"}),", and the client\n(node) version shown on the top right section is ",(0,s.jsx)(n.code,{children:"v0.9.36"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Runtime vs Client versioning",src:t(10650).A+"",width:"1917",height:"280"})}),"\n",(0,s.jsxs)(n.admonition,{title:"Querying runtime and client versions",type:"info",children:[(0,s.jsxs)(n.p,{children:["The runtime version can be queried on-chain through Polkadot-JS UI by navigating to the Developer\ntab > Chain State > Storage > system and query ",(0,s.jsx)(n.code,{children:"lastRuntimeUpgrade()"}),"."]}),(0,s.jsxs)(n.p,{children:["The node version can be queried by navigating to the Developer tab > RPC calls > system and query\n",(0,s.jsx)(n.code,{children:"version()"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"runtime-upgrades-for-various-users",children:"Runtime Upgrades for Various Users"}),"\n",(0,s.jsx)(n.h3,{id:"for-infrastructure-providers",children:"For Infrastructure Providers"}),"\n",(0,s.jsx)(n.p,{children:"Infrastructure services include but are not limited to the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/maintain-guides-how-to-upgrade",children:"Validators"})}),"\n",(0,s.jsx)(n.li,{children:"API services"}),"\n",(0,s.jsx)(n.li,{children:"Node-as-a-Service (NaaS)"}),"\n",(0,s.jsx)(n.li,{children:"General infrastructure management (e.g. block explorers, custodians)"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./wallets",children:"Wallets"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For validators, keeping in sync with the network is key. At times, upgrades will require validators\nto upgrade their clients within a specific time frame, for example, if a release includes breaking\nchanges to networking. It is essential to check the release notes, starting with the upgrade\npriority and acting accordingly."}),"\n",(0,s.jsxs)(n.p,{children:["General infrastructure providers, aside from following the runtime releases and upgrading in a\ntimely manner, should monitor changes to runtime events and auxiliary tooling, such as the\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate-api-sidecar",children:"Substrate API Sidecar"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Transactions constructed for runtime ",(0,s.jsx)(n.code,{children:"n"})," will not work for any other runtime ",(0,s.jsx)(n.code,{children:">n"}),". If a runtime\nupgrade occurs before broadcasting a previously constructed transaction, you will need to\nreconstruct it with the appropriate runtime version and corresponding metadata."]}),"\n",(0,s.jsxs)(n.h3,{id:"for-nominators",children:["For ",(0,s.jsx)(n.a,{href:"/docs/learn-nominator",children:"Nominators"})]}),"\n",(0,s.jsx)(n.p,{children:"Runtime upgrades don't require any actions by a nominator, though it is always encouraged to keep\nup-to-date and participate with the latest runtime upgrade motions and releases while keeping an eye\non how the nodes on the network are reacting to a new upgrade."}),"\n",(0,s.jsx)(n.h2,{id:"monitoring-runtime-changes",children:"Monitoring Runtime Changes"}),"\n",(0,s.jsxs)(n.p,{children:["You can monitor the chain for upcoming upgrades. The client release notes include the hashes of any\nproposals related to any on-chain upgrades for easy matching. We recommend keeping track of the\nPolkadot Fellowship's\n",(0,s.jsx)(n.a,{href:"https://github.com/polkadot-fellows/runtimes/releases/latest",children:"runtime upgrades"})," to be aware of\nchanges in the runtime logic."]}),"\n",(0,s.jsxs)(n.p,{children:["Runtime upgrades are voted on and executed via ",(0,s.jsx)(n.a,{href:"/docs/learn-polkadot-opengov",children:"Polkadot OpenGov"}),". You\nshould monitor the relay chain as follows to know when the next runtime upgrade will be enacted:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Check each block for ",(0,s.jsx)(n.code,{children:"referenda (Submitted)"})," events and check if the ",(0,s.jsx)(n.code,{children:"track"})," is ",(0,s.jsx)(n.code,{children:"0"})," or ",(0,s.jsx)(n.code,{children:"1"}),", which\ncorrespond to the ",(0,s.jsx)(n.code,{children:"Root"})," and ",(0,s.jsx)(n.code,{children:"whitelistedCaller"})," tracks, respectively. These are the only tracks\nthat can enact runtime upgrdes. Log the referendum's ",(0,s.jsx)(n.code,{children:"index"}),"; this will help you keep track of\nthe its progress. With the index you can look up the details of the proposal in\n",(0,s.jsx)(n.a,{href:"https://polkadot.polkassembly.io/whitelisted-caller?trackStatus=all&page=1",children:"Polkassembly.io"})," to\nsee if it corresponds with a runtime upgrade."]}),"\n",(0,s.jsxs)(n.li,{children:["Ongoing referenda will have an ",(0,s.jsx)(n.code,{children:"enactment"})," field under ",(0,s.jsx)(n.code,{children:"referenda.ReferendumInfoFor"})," storage.\nThis is the block number that, if passed, the system will attempt to schedule the inner\nproposal's execution for. Note that there are some constraints like a minimum enactment period\nthat could result in the proposal's execution occurring later. It is not possible for the\nproposal to enact ",(0,s.jsx)(n.em,{children:"before"})," this block number."]}),"\n",(0,s.jsxs)(n.li,{children:["Check also for ",(0,s.jsx)(n.code,{children:"referenda (DecisionDepositPlaced)"})," events where ",(0,s.jsx)(n.code,{children:"index"})," matches the one\npreviously found. This means that the required deposit has been placed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"referenda (DecisionStarted)"})," indicates that the decision period has started for the referendum\nof that ",(0,s.jsx)(n.code,{children:"index"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"referenda (ConfirmStarted)"})," indicates that ",(0,s.jsx)(n.code,{children:"index"}),"'s referendum has entered the confirmation\nperiod.","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"referenda (Confirmed)"})," indicates that ",(0,s.jsx)(n.code,{children:"index"}),"'s referendum has been confirmed and will enter\nthe enactment period. With this and ",(0,s.jsx)(n.code,{children:"enactment_moment"}),", you can calculate when the proposal\nwill be enacted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"referenda (Rejected)"})," indicates that ",(0,s.jsx)(n.code,{children:"index"}),"'s referendum has been rejected and will not be\nenacted."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["When the runtime upgrades, there will be a ",(0,s.jsx)(n.code,{children:"system(CodeUpdated)"})," event confirming the execution\nof the runtime upgrade."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},10650:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/runtime-node-version-2903ab51ac01ad44e6424cafc0f63fdf.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);