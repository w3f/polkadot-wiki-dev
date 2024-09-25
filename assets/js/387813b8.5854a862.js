"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2409],{68766:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var n=r(74848),i=r(28453);const t={id:"learn-guides-coretime-parachains",title:"Agile Coretime for Parachains",sidebar_label:"Coretime for Parachains",description:"Agile Coretime from Parachains perspective",keywords:["coretime","blockspace","parathread","parachain","cores"],slug:"../learn-guides-coretime-parachains"},s=void 0,o={id:"learn/learn-guides-coretime-parachains",title:"Agile Coretime for Parachains",description:"Agile Coretime from Parachains perspective",source:"@site/../docs/learn/learn-guides-coretime-parachains.md",sourceDirName:"learn",slug:"/learn-guides-coretime-parachains",permalink:"/docs/learn-guides-coretime-parachains",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-coretime-parachains.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1727269449e3,frontMatter:{id:"learn-guides-coretime-parachains",title:"Agile Coretime for Parachains",sidebar_label:"Coretime for Parachains",description:"Agile Coretime from Parachains perspective",keywords:["coretime","blockspace","parathread","parachain","cores"],slug:"../learn-guides-coretime-parachains"},sidebar:"docs",previous:{title:"Coretime Marketplaces",permalink:"/docs/learn-guides-coretime-marketplaces"},next:{title:"Bridges",permalink:"/docs/learn-bridges"}},c={},d=[{value:"Reserve ParaID",id:"reserve-paraid",level:2},{value:"Register Parachain State and Code",id:"register-parachain-state-and-code",level:2},{value:"Run Parachain Collator",id:"run-parachain-collator",level:2},{value:"Run a Parachain with Bulk Coretime",id:"run-a-parachain-with-bulk-coretime",level:2},{value:"Run a Parachain with On-demand Coretime",id:"run-a-parachain-with-on-demand-coretime",level:2}];function l(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["If you aren't sure what Agile Coretime is, be sure to read the\n",(0,n.jsx)(a.a,{href:"/docs/learn-agile-coretime",children:"introduction"}),",\n",(0,n.jsx)(a.a,{href:"/docs/learn-agile-coretime#agile-coretime-terminology",children:"terminology"}),", and\n",(0,n.jsx)(a.a,{href:"/docs/learn-agile-coretime#agile-coretime-faq",children:"FAQ"}),"."]})}),"\n",(0,n.jsxs)(a.p,{children:["The landscape for parachains changes with the rollout of\n",(0,n.jsx)(a.a,{href:"/docs/learn-agile-coretime",children:"Agile Coretime"}),". With ",(0,n.jsx)(a.a,{href:"./learn-auction.md",children:"parachain auctions"})," being\nphased out in favor of direct ",(0,n.jsx)(a.a,{href:"/docs/learn-agile-coretime#coretime",children:"coretime"})," sales, the existing\nparachains on the relaychain and the prospective parachains are presented with the following\nscenarios:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Migrating"})," from a legacy parachain lease into a\n",(0,n.jsx)(a.a,{href:"/docs/learn-agile-coretime#bulk-coretime",children:"bulk coretime"})," model"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Starting"})," with bulk coretime model from scratch"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Running"}),' a parachain with on-demand coretime purchases ("pay as you go")']}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["The parachain lease auctions stopped on-chain with the enactment of the\n",(0,n.jsx)(a.a,{href:"https://github.com/polkadot-fellows/runtimes/releases/tag/v1.2.0",children:"runtime upgrade 1.2.0"})," on the\n19th of September 2024, and the existing leases were migrated to bulk coretime automatically. Leases\nthat had not started were canceled, and the locked tokens were refunded. The existing parachains\nbenefit from ",(0,n.jsx)(a.a,{href:"https://docs.lastic.xyz/coretime/renewals.html",children:"coretime renewals"}),", allowing for the\ncontinued assignment of bulk coretime for a core without going through the regular purchasing\nprocess."]}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["The tutorials below assume that you have already developed the parachain runtime and a fully\nconfigured parachain ",(0,n.jsx)(a.a,{href:"/docs/learn-collator",children:"collator"})," for the target relay chain using the Polkadot\nSDK."]})}),"\n",(0,n.jsxs)(a.p,{children:["For the tutorials below,\n",(0,n.jsx)(a.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/6f3d890ed35bfdee3e3f7d59018345635a62d1cd/polkadot/parachain/test-parachains/adder",children:"the adder test parachain"}),"\non the Polkadot SDK has been used. To compile the ",(0,n.jsx)(a.code,{children:"adder-collator"}),", run the command below in the\n",(0,n.jsx)(a.em,{children:"root"})," of the Polkadot SDK repository. You must have ",(0,n.jsx)(a.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust"}),"\nand its associated tooling installed before following along."]}),"\n",(0,n.jsxs)(a.p,{children:["Ensure the Polkadot SDK is cloned, and you are within the root directory (",(0,n.jsx)(a.code,{children:"cd polkadot-sdk"}),")"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:"cargo build -r -p test-parachain-adder-collator\n"})}),"\n",(0,n.jsx)(a.p,{children:"After the test parachain collator node is successfully compiled, export its genesis state and the\ncode using the following commands. If the export succeeds, these two files should appear in the\nPolkadot-SDK repository."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:"./target/release/adder-collator export-genesis-state genesis\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:"./target/release/adder-collator export-genesis-wasm genesis-wasm\n"})}),"\n",(0,n.jsx)(a.h2,{id:"reserve-paraid",children:"Reserve ParaID"}),"\n",(0,n.jsxs)(a.p,{children:["Reserving a ",(0,n.jsx)(a.code,{children:"ParaID"})," requires a\n",(0,n.jsx)(a.a,{href:"/docs/chain-state-values#parachain-id-registration-deposit",children:"deposit"}),". The first step is to\nregister a ",(0,n.jsx)(a.a,{href:"/docs/glossary#paraid",children:(0,n.jsx)(a.code,{children:"ParaID"})})," for the parachain. This can be done through\nPolkadot-JS UI by navigating to\n",(0,n.jsx)(a.a,{href:"https://polkadot.js.org/apps/#/parachains/parathreads",children:"Network > Parachains > Parathreads"})," and\nclicking on ParaID button. Ensure that you have sufficient tokens to reserve the displayed ",(0,n.jsx)(a.code,{children:"ParaID"}),"\nsuccessfully."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"coretime-reserve-paraID",src:r(74180).A+"",width:"2161",height:"713"})}),"\n",(0,n.jsx)(a.h2,{id:"register-parachain-state-and-code",children:"Register Parachain State and Code"}),"\n",(0,n.jsxs)(a.admonition,{title:"Deposit requirements for registering a parachain",type:"info",children:[(0,n.jsxs)(a.p,{children:["Due to the reasons ",(0,n.jsx)(a.a,{href:"https://github.com/paritytech/polkadot-sdk/pull/2372",children:"discussed here"}),", instead\nof the usual per-byte method of charging for storing validation and genesis code upon registration,\nthe cost is fixed to the maximum possible code size (",(0,n.jsx)(a.code,{children:"MAX_CODE_SIZE"}),"), regardless of the actual\nsize."]}),(0,n.jsxs)(a.p,{children:["On ",(0,n.jsx)(a.strong,{children:"Kusama"}),", the deposit required to register a parachain is ",(0,n.jsx)(a.strong,{children:"~1100 KSM"})," and an estimated fee of\n",(0,n.jsx)(a.strong,{children:"~5 KSM"}),"."]}),(0,n.jsxs)(a.p,{children:["On ",(0,n.jsx)(a.strong,{children:"Polkadot"}),", the deposit required to register a parachain is ",(0,n.jsx)(a.strong,{children:"~3300 DOT"})," and an estimated fee\nof ",(0,n.jsx)(a.strong,{children:"~150 DOT"}),"."]}),(0,n.jsx)(a.p,{children:"It is possible to deregister the parachain and withdraw the deposit if the parachain has not\nproduced any blocks. If the parachain produced blocks, then the parachain can only be deregistered\nthrough the relay chain's governance."})]}),"\n",(0,n.jsxs)(a.p,{children:["The next step is to register the parachain's genesis wasm and state, which you should have generated\nearlier. Note that for this example, we are using ",(0,n.jsx)(a.code,{children:"adder-collator"}),", but in theory a custom runtime\ncompiled from a\n",(0,n.jsx)(a.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/88a2f360238787bf5256cfdd14b40c08f519b38e/templates/parachain",children:"template"}),"\nwould work as well."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"coretime-register-parathread",src:r(13070).A+"",width:"2140",height:"978"})}),"\n",(0,n.jsx)(a.p,{children:"After successful registration, the parachain starts onboarding as a parathread."}),"\n",(0,n.jsx)(a.h2,{id:"run-parachain-collator",children:"Run Parachain Collator"}),"\n",(0,n.jsxs)(a.p,{children:["While the parachain is onboarding, start syncing the ",(0,n.jsx)(a.a,{href:"/docs/learn-collator",children:"collator"})," using the\nfollowing command to rapidly sync with the specified relay chain."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"./target/release/adder-collator --parachain-id= $ParaID --chain=rococo --sync fast-unsafe\n"})}),"\n",(0,n.jsx)(a.h2,{id:"run-a-parachain-with-bulk-coretime",children:"Run a Parachain with Bulk Coretime"}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["Note that we have two options: ",(0,n.jsx)(a.strong,{children:"bulk coretime"})," and ",(0,n.jsx)(a.strong,{children:"on-demand coretime"}),". Bulk coretime is\npurchased via the ",(0,n.jsx)(a.code,{children:"broker"})," pallet, which is on the respective Coretime system parachain. On-demand\ncoretime is ordered via the ",(0,n.jsx)(a.code,{children:"OnDemandAssignment"})," pallet/module, which is located on the respective\nrelay chain."]})}),"\n",(0,n.jsxs)(a.p,{children:["You can purchase bulk coretime on ",(0,n.jsx)(a.a,{href:"/docs/learn-guides-coretime-marketplaces",children:"Coretime chain"})," and\nassign the purchased core to the registered ",(0,n.jsx)(a.code,{children:"ParaID"}),". The snapshot below is from\n",(0,n.jsx)(a.a,{href:"https://test.lastic.xyz/",children:"Lastic"})," interface."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"coretime-bulk-assign-lastic",src:r(64653).A+"",width:"1322",height:"1033"})}),"\n",(0,n.jsxs)(a.p,{children:["After successful assignment of the core, the ",(0,n.jsx)(a.code,{children:"adder-collator"})," logs show new collations at regular\nintervals, gradually incrementing the state by ",(0,n.jsx)(a.code,{children:"2"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"coretime-collation-bulk",src:r(57502).A+"",width:"1777",height:"696"})}),"\n",(0,n.jsx)(a.h2,{id:"run-a-parachain-with-on-demand-coretime",children:"Run a Parachain with On-demand Coretime"}),"\n",(0,n.jsxs)(a.p,{children:["After the collator node is fully synced with the relay chain, navigate to\n",(0,n.jsx)(a.a,{href:"https://polkadot.js.org/apps/#/extrinsics",children:"Developer > Extrinsics"})," on the relay chain and issue\n",(0,n.jsx)(a.code,{children:"onDemandAssignmentProvider.placeOrderAllowDeath"})," extrinsic from the account that registered the\n",(0,n.jsx)(a.code,{children:"ParaID"})," by specifying sufficient ",(0,n.jsx)(a.code,{children:"maxAmount"}),"for the transaction to go through successfully."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"coretime-ondemand-assignment",src:r(4265).A+"",width:"2873",height:"1394"})}),"\n",(0,n.jsxs)(a.admonition,{type:"info",children:[(0,n.jsx)(a.p,{children:"There are two extrinsics which allow you to place orders for on-demand coretime:"}),(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"onDemandAssignmentProvider.placeOrderAllowDeath"})," will\n",(0,n.jsx)(a.a,{href:"/docs/learn-accounts#existential-deposit-and-reaping",children:"reap"})," the account once the provided funds\nrun out."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"onDemandAssignmentProvider.placeOrderKeepAlive"})," includes a check which will ",(0,n.jsx)(a.strong,{children:"not"})," reap the\naccount if the provided funds will run out, ensuring the account is kept alive."]}),"\n"]}),"\n"]})]}),"\n",(0,n.jsx)(a.p,{children:"With each successful on-demand extrinsic, the parachain head changes (you may have to zoom out on\nthe browser for parachain head details to show up on Polkadot-JS UI)."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"coretime-ondemand-parahead",src:r(68806).A+"",width:"1435",height:"319"})}),"\n",(0,n.jsxs)(a.p,{children:["The successful collation can also be verified in the parachain collator logs. It can be noticed that\nwith each parachain block, the state of ",(0,n.jsx)(a.code,{children:"adder-collator"})," is incremented by ",(0,n.jsx)(a.code,{children:"2"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"coretime-new-collation",src:r(82303).A+"",width:"1782",height:"426"})})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},13070:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/Register-Parachain-771de918d394808bfc41e9b6fd097a44.png"},57502:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/coretime-collation-bulk-d6f817e5970e0194d4d5a3dfe70959b7.png"},82303:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/coretime-create-new-collation-7da7b7b28f77f12a731dc4d84baf2e38.png"},4265:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/coretime-on-demand-assignment-098632f2c2246a688ffb1405c12e87b5.png"},68806:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/coretime-on-demand-parahead-36a2079a7b6575851931724c54415a4d.png"},74180:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/coretime-reserve-paraID-59fe64fdbcc55e6029182070bf3d416d.png"},64653:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/lastic-assign-core-bf4ebbb0f6bf5633a10a17c08f22cd79.png"},28453:(e,a,r)=>{r.d(a,{R:()=>s,x:()=>o});var n=r(96540);const i={},t=n.createContext(i);function s(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);