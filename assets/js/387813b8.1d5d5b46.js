"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[660],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>u});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,u=p["".concat(l,".").concat(m)]||p[m]||h[m]||i;return t?r.createElement(u,o(o({ref:a},d),{},{components:t})):r.createElement(u,o({ref:a},d))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93487:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=t(87462),n=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"learn-guides-coretime-parachains",title:"Agile Coretime for Parachains",sidebar_label:"Coretime for Parachains",description:"Agile Coretime from Parachains perspective",keywords:["coretime","blockspace","parathread","parachain","cores"],slug:"../learn-guides-coretime-parachains"},l=void 0,c={unversionedId:"learn/learn-guides-coretime-parachains",id:"learn/learn-guides-coretime-parachains",title:"Agile Coretime for Parachains",description:"Agile Coretime from Parachains perspective",source:"@site/../docs/learn/learn-guides-coretime-parachains.md",sourceDirName:"learn",slug:"/learn-guides-coretime-parachains",permalink:"/docs/learn-guides-coretime-parachains",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-coretime-parachains.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1713346378,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"learn-guides-coretime-parachains",title:"Agile Coretime for Parachains",sidebar_label:"Coretime for Parachains",description:"Agile Coretime from Parachains perspective",keywords:["coretime","blockspace","parathread","parachain","cores"],slug:"../learn-guides-coretime-parachains"},sidebar:"docs",previous:{title:"Coretime Marketplaces",permalink:"/docs/learn-guides-coretime-marketplaces"},next:{title:"Bridges",permalink:"/docs/learn-bridges"}},d={},p=[{value:"Reserve ParaID",id:"reserve-paraid",level:2},{value:"Register Parachain State and Code",id:"register-parachain-state-and-code",level:2},{value:"Run Parachain Collator",id:"run-parachain-collator",level:2},{value:"Run a Parachain with Bulk Coretime",id:"run-a-parachain-with-bulk-coretime",level:2},{value:"Run a Parachain with On-demand Coretime",id:"run-a-parachain-with-on-demand-coretime",level:2}],h={toc:p},m="wrapper";function u(e){var a=e.components,s=(0,n.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},h,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The landscape for parachains on Polkadot\nchanges with the rollout of ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-agile-coretime"},"Agile Coretime"),". With\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"auctions")," being phased out in favor of direct coretime sales, the existing\nparachains on the relaychain and the prospective parachains are presented with the following\nscenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Migrating from a legacy lease into a bulk coretime model"),(0,i.kt)("li",{parentName:"ul"},"Starting with bulk coretime model from scratch"),(0,i.kt)("li",{parentName:"ul"},"Running a parachain with on-demand coretime purchases")),(0,i.kt)("p",null,"The parachain lease auctions will stop on-chain with the enactment of the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/runtimes/releases/tag/v1.2.0"},"runtime upgrade 1.2.0")," and the\nexisting leases will be migrated to bulk coretime automatically. Leases that are yet to be started\nwill be cancelled and the locked DOT",(0,i.kt)("br",{parentName:"p"}),"\n","will be refunded. The existing parachains benefit from\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.lastic.xyz/coretime/renewals.html"},"coretime renewals")," which allows for the continued\nassignment of bulk coretime for a core without going through the regular purchasing process."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The tutorials below assume that you already developed the parachain runtime and a fully configured\nparachain collator for the target relay chain using Polkadot-SDK.")),(0,i.kt)("p",null,"For the tutorials below,\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/6f3d890ed35bfdee3e3f7d59018345635a62d1cd/polkadot/parachain/test-parachains/adder"},"the adder test parachain"),"\non Polkadot-SDK has been used. To compile the ",(0,i.kt)("inlineCode",{parentName:"p"},"adder-collator"),", run the command below in the\nPolkadot-SDK repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cargo build -r -p test-parachain-adder-collator\n")),(0,i.kt)("p",null,"After the test parachain collator node is successfully compiled, export its genesis state and the\ncode by using the following commands. If the export is successful, these two files should show up in\nthe Polkadot-SDK repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./target/release/adder-collator export-genesis-state genesis\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./target/release/adder-collator export-genesis-wasm genesis-wasm\n")),(0,i.kt)("h2",{id:"reserve-paraid"},"Reserve ParaID"),(0,i.kt)("p",null,"The first step is to register a ",(0,i.kt)("inlineCode",{parentName:"p"},"ParaID"),"for the on-demand parachain. This can be done through\nPolkadot-JS UI by navigating to Network > Parachains > Parathreads and clicking on ParaID button.\nEnsure that you have sufficient tokens to successfully reserve the displayed ",(0,i.kt)("inlineCode",{parentName:"p"},"ParaID")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Reserving a ",(0,i.kt)("inlineCode",{parentName:"p"},"ParaID")," requires a deposit of 40 KSM on Kusama and 100 DOT on Polkadot.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"coretime-reserve-paraID",src:t(56770).Z,width:"2161",height:"713"})),(0,i.kt)("h2",{id:"register-parachain-state-and-code"},"Register Parachain State and Code"),(0,i.kt)("p",null,"The next step is to register the parachain's genesis wasm and state."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Registering the state and wasm code of the parachain requires a deposit that is computed based on\nthe size. For the ",(0,i.kt)("inlineCode",{parentName:"p"},"adder-collator")," example here, it turns out to be around 46 KSM on Kusama and 116\nDOT on Polkadot. As, the deposit used for registering ",(0,i.kt)("inlineCode",{parentName:"p"},"ParaID")," is already counted in for this\ndeposit, the total deposit requirement for registering ",(0,i.kt)("inlineCode",{parentName:"p"},"ParaID"),", state and code for ",(0,i.kt)("inlineCode",{parentName:"p"},"adder-collator"),"\nis around 46 KSM on Kusama and 116 DOT on Polkadot.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"coretime-register-parathread",src:t(13670).Z,width:"2136",height:"977"})),(0,i.kt)("p",null,"After successful registration, the parachain starts onboarding as a parathread."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"coretime-onboarding-parathread",src:t(83177).Z,width:"2873",height:"352"})),(0,i.kt)("h2",{id:"run-parachain-collator"},"Run Parachain Collator"),(0,i.kt)("p",null,"While the parachain is onboarding, start syncing the collator using the following command to rapidly\nsync with the specified relaychain."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./target/release/adder-collator --parachain-id= $ParaID --chain=rococo --sync fast-unsafe\n")),(0,i.kt)("h2",{id:"run-a-parachain-with-bulk-coretime"},"Run a Parachain with Bulk Coretime"),(0,i.kt)("p",null,"Now, you can purchase bulk coretime on ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-guides-coretime-marketplaces"},"Coretime chain")," and\nassign the purchased core to the registered ",(0,i.kt)("inlineCode",{parentName:"p"},"ParaID"),". The snapshot below is from\n",(0,i.kt)("a",{parentName:"p",href:"https://test.lastic.xyz/"},"Lastic")," interface."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"coretime-bulk-assign-lastic",src:t(17765).Z,width:"1322",height:"1033"})),(0,i.kt)("p",null,"After successful assignment of the core, the ",(0,i.kt)("inlineCode",{parentName:"p"},"adder-collator")," logs show new collations at regular\nintervals, gradually incrementing the state by ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"coretime-collation-bulk",src:t(49799).Z,width:"1777",height:"696"})),(0,i.kt)("h2",{id:"run-a-parachain-with-on-demand-coretime"},"Run a Parachain with On-demand Coretime"),(0,i.kt)("p",null,"After the collator node is fully synced with the relay chain, navigate to Developer > Extrinsics on\nthe relay chain and issue ",(0,i.kt)("inlineCode",{parentName:"p"},"onDemandAssignmentProvider.placeOrderAllowDeath")," extrinsic from the\naccount that registered the ",(0,i.kt)("inlineCode",{parentName:"p"},"ParaID")," by specifying sufficient ",(0,i.kt)("inlineCode",{parentName:"p"},"maxAmount"),"for the transaction to go\nthrough successfully."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"coretime-ondemand-assignment",src:t(11075).Z,width:"2873",height:"1394"})),(0,i.kt)("p",null,"With each successful on-demand extrinsic, the parachain head changes (you may have to zoom out on\nthe browser for parachain head details to show up on Polkadot-JS UI)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"coretime-ondemand-parahead",src:t(8486).Z,width:"1435",height:"319"})),(0,i.kt)("p",null,"The successful collation can also be verified in the logs of the parachain collator. It can be\nnoticed that with each parachain block, the state of ",(0,i.kt)("inlineCode",{parentName:"p"},"adder-collator")," is incremented by ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"coretime-new-collation",src:t(70567).Z,width:"1782",height:"426"})))}u.isMDXComponent=!0},49799:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/coretime-collation-bulk-d6f817e5970e0194d4d5a3dfe70959b7.png"},70567:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/coretime-create-new-collation-7da7b7b28f77f12a731dc4d84baf2e38.png"},11075:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/coretime-on-demand-assignment-098632f2c2246a688ffb1405c12e87b5.png"},8486:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/coretime-on-demand-parahead-36a2079a7b6575851931724c54415a4d.png"},83177:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/coretime-parachain-onboarding-9d96e69f180f0a932f526855ef990f73.png"},13670:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/coretime-register-parathread-c49534aa188c71fcb462ba7ded9014ce.png"},56770:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/coretime-reserve-paraID-59fe64fdbcc55e6029182070bf3d416d.png"},17765:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/lastic-assign-core-bf4ebbb0f6bf5633a10a17c08f22cd79.png"}}]);