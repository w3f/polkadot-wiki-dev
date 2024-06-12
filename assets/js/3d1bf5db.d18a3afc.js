"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3452],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>h});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?t.createElement(h,l(l({ref:a},p),{},{components:n})):t.createElement(h,l({ref:a},p))}));function h(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85453:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={id:"maintain-guides-async-backing",title:"Upgrade Parachain for Asynchronous Backing Compatibility",sidebar_label:"Async Backing Upgrade",description:"Steps on how to upgrade a parachain to be compatible with the relay chain's async backing feature.",keywords:["async","backing","parachain","consensus"],slug:"../maintain-guides-async-backing"},s=void 0,c={unversionedId:"maintain/maintain-guides-async-backing",id:"maintain/maintain-guides-async-backing",title:"Upgrade Parachain for Asynchronous Backing Compatibility",description:"Steps on how to upgrade a parachain to be compatible with the relay chain's async backing feature.",source:"@site/../docs/maintain/maintain-guides-async-backing.md",sourceDirName:"maintain",slug:"/maintain-guides-async-backing",permalink:"/docs/maintain-guides-async-backing",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-async-backing.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1716630535,formattedLastUpdatedAt:"May 25, 2024",frontMatter:{id:"maintain-guides-async-backing",title:"Upgrade Parachain for Asynchronous Backing Compatibility",sidebar_label:"Async Backing Upgrade",description:"Steps on how to upgrade a parachain to be compatible with the relay chain's async backing feature.",keywords:["async","backing","parachain","consensus"],slug:"../maintain-guides-async-backing"},sidebar:"docs",previous:{title:"Collator Guides",permalink:"/docs/maintain-collator-index"},next:{title:"Validator Guides",permalink:"/docs/maintain-validator-index"}},p={},u=[{value:"Async Backing Prerequisites",id:"async-backing-prerequisites",level:2},{value:"Async Backing Terminology and Parameters",id:"async-backing-terminology-and-parameters",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Phase 1 - Update Parachain Runtime",id:"phase-1---update-parachain-runtime",level:2},{value:"Phase 2 - Update Parachain Nodes",id:"phase-2---update-parachain-nodes",level:2},{value:"Phase 3 - Activate Async Backing",id:"phase-3---activate-async-backing",level:2},{value:"Timing by Block Number",id:"timing-by-block-number",level:2}],m={toc:u},d="wrapper";function h(e){var a=e.components,n=(0,i.Z)(e,l);return(0,r.kt)(d,(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Who is this guide for?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This guide is relevant for cumulus based parachain projects started in 2023 or before. Later\nprojects should already be async backing compatible. If starting a new parachain project, please use\nan async backing compatible template such as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/templates/parachain"},(0,r.kt)("inlineCode",{parentName:"a"},"cumulus/parachain-template")),".")),(0,r.kt)("p",null,"The rollout process for Async Backing has three phases. Phases 1 and 2 below put new infrastructure\nin place. Then we can simply turn on async backing in phase 3. But first, some pre-reqs and context\nto set the stage."),(0,r.kt)("h2",{id:"async-backing-prerequisites"},"Async Backing Prerequisites"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more contextual information about asynchronous backing, see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-async-backing"},"this page"),".")),(0,r.kt)("p",null,"Pull the latest version of Cumulus for use with your parachain. It contains necessary changes for\nasync backing compatibility. Latest on master branch of\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk"},"Polkadot-SDK")," is currently sufficient. Any 2024 release\nwill work as well."),(0,r.kt)("h2",{id:"async-backing-terminology-and-parameters"},"Async Backing Terminology and Parameters"),(0,r.kt)("p",null,"Time for a bit of context before we get started. The following concepts will aid in demystifying the\ncollator side of Async Backing and establish a basic understanding of the changes being made:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unincluded segment")," - From the perspective of a parachain block under construction, the\nunincluded segment describes a chain of recent block ancestors which have yet to be included on\nthe relay chain. The ability to build new blocks on top of the unincluded segment rather than on\ntop of blocks freshly included in the relay chain is the core of asynchronous backing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Capacity")," - The maximum size of the unincluded segment. The longer this is, the farther ahead a\nparachain can work, producing new candidates before the ancestors of those candidates have been\nseen as included on-chain. Practically, a capacity of 2-3 is sufficient to realize the full\nbenefits of asynchronous backing, at least until the release of elastic scaling."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Velocity")," - The base rate at which a parachain should produce blocks. A velocity of 1 indicates\nthat 1 parachain block should be produced per relay chain block. In order to fill the unincluded\nsegment with candidates, collators may build up to ",(0,r.kt)("inlineCode",{parentName:"li"},"Velocity + 1")," candidates per aura slot while\nthere is remaining capacity. When elastic scaling has been released velocities greater than 1 will\nbe supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AllowMultipleBlocksPerSlot")," - If this is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", Aura will allow slots to stay the same across\nsequential parablocks. Otherwise the slot number must increase with each block. To fill the\nunincluded segment as described above we need this to be ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FixedVelocityConsensusHook")," - This is a variety of ",(0,r.kt)("inlineCode",{parentName:"li"},"ConsensusHook")," intended to be passed to\n",(0,r.kt)("inlineCode",{parentName:"li"},"parachain-system")," as part of its ",(0,r.kt)("inlineCode",{parentName:"li"},"Config"),". It is triggered on initialization of a new runtime. An\ninstance of ",(0,r.kt)("inlineCode",{parentName:"li"},"FixedVelocityConsensusHook")," is defined with both a fixed capacity and velocity. It\naborts the runtime early if either capacity or velocity is exceeded, as the collator shouldn\u2019t be\ncreating additional blocks in that case."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AsyncBackingParams.max_candidate_depth")," - This parameter determines the maximum unincluded\nsegment depth the relay chain will support. Candidates sent to validators which exceed\n",(0,r.kt)("inlineCode",{parentName:"li"},"max_candidate_depth")," will be ignored. ",(0,r.kt)("inlineCode",{parentName:"li"},"Capacity"),", as mentioned above, should not exceed\n",(0,r.kt)("inlineCode",{parentName:"li"},"max_candidate_depth"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AsyncBackingParams.allowed_ancestry_len")," - Each parachain block candidate has a ",(0,r.kt)("inlineCode",{parentName:"li"},"relay_parent"),"\nfrom which its execution and validation context is derived. Before async backing the\n",(0,r.kt)("inlineCode",{parentName:"li"},"relay_parent")," for a candidate not yet backed was required to be the fresh head of a fork. With\nasync backing we can relax this requirement. Instead we set a conservative maximum age in blocks\nfor the ",(0,r.kt)("inlineCode",{parentName:"li"},"relay_parent"),"s of candidates in the unincluded segment. This age, ",(0,r.kt)("inlineCode",{parentName:"li"},"allowed_ancestry_len"),"\nlives on the relay chain and is queried by parachains when deciding which block to build on top\nof."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lookahead Collator")," - A collator for Aura that looks ahead of the most recently included\nparachain block when determining what to build upon. This collator also builds additional blocks\nwhen the maximum backlog is not saturated. The size of the backlog is determined by invoking the\nAuraUnincludedSegmentApi. If that runtime API is not supported, this assumes a maximum backlog\nsize of 1.")),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"The relay chain needs to have async backing enabled so double-check that the relay-chain\nconfiguration contains the following three parameters (especially when testing locally e.g. with\nzombienet):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"async_backing_params": {\n    "max_candidate_depth": 3,\n    "allowed_ancestry_len": 2\n},\n"scheduling_lookahead": 2\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"warning ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"scheduling_lookahead")," must be set to 2, otherwise parachain block times will"),(0,r.kt)("p",{parentName:"admonition"},"degrade to worse than with sync backing! ")),(0,r.kt)("h2",{id:"phase-1---update-parachain-runtime"},"Phase 1 - Update Parachain Runtime"),(0,r.kt)("p",null,"This phase involves configuring your parachain\u2019s runtime to make use of async backing system."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Establish constants for ",(0,r.kt)("inlineCode",{parentName:"p"},"capacity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"velocity")," and set both of them to 1 in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/runtime/src/lib.rs"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Establish a constant relay chain slot duration measured in milliseconds equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"6000")," in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/runtime/src/lib.rs"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Maximum number of blocks simultaneously accepted by the Runtime, not yet included into the\n/// relay chain.\npub const UNINCLUDED_SEGMENT_CAPACITY: u32 = 1;\n/// How many parachain blocks are processed by the relay chain per parent. Limits the number of\n/// blocks authored per slot.\npub const BLOCK_PROCESSING_VELOCITY: u32 = 1;\n/// Relay chain slot duration, in milliseconds.\npub const RELAY_CHAIN_SLOT_DURATION_MILLIS: u32 = 6000;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Establish constants ",(0,r.kt)("inlineCode",{parentName:"p"},"MILLISECS_PER_BLOCK")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SLOT_DURATION")," if not already present in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/runtime/src/lib.rs"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\n/// BLOCKSkkhasd will be produced at a minimum duration defined by `SLOT_DURATION`.\n/// `SLOT_DURATION` is picked up by `pallet_timestamp` which is in turn picked\n/// up by `pallet_aura` to implement `fn slot_duration()`.\n///\n/// Change this to adjust the block time.\npub const MILLISECS_PER_BLOCK: u64 = 12000;\npub const SLOT_DURATION: u64 = MILLISECS_PER_BLOCK;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"cumulus_pallet_parachain_system")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime/src/lib.rs")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define a ",(0,r.kt)("inlineCode",{parentName:"li"},"FixedVelocityConsensusHook")," using our capacity, velocity, and relay slot duration\nconstants. Use this to set the parachain system ",(0,r.kt)("inlineCode",{parentName:"li"},"ConsensusHook")," property.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl cumulus_pallet_parachain_system::Config for Runtime {\n    type RuntimeEvent = RuntimeEvent;\n    type OnSystemEvent = ();\n    type SelfParaId = parachain_info::Pallet<Runtime>;\n    type OutboundXcmpMessageSource = XcmpQueue;\n    type DmpQueue = frame_support::traits::EnqueueWithOrigin<MessageQueue, RelayOrigin>;\n    type ReservedDmpWeight = ReservedDmpWeight;\n    type XcmpMessageHandler = XcmpQueue;\n    type ReservedXcmpWeight = ReservedXcmpWeight;\n    type CheckAssociatedRelayNumber = RelayNumberMonotonicallyIncreases;\n // highlight-next-line\n    type ConsensusHook = ConsensusHook;\n    type WeightInfo = weights::cumulus_pallet_parachain_system::WeightInfo<Runtime>;\n}\n// highlight-start\ntype ConsensusHook = cumulus_pallet_aura_ext::FixedVelocityConsensusHook<\n    Runtime,\n    RELAY_CHAIN_SLOT_DURATION_MILLIS,\n    BLOCK_PROCESSING_VELOCITY,\n    UNINCLUDED_SEGMENT_CAPACITY,\n>;\n// highlight-end\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set the parachain system property ",(0,r.kt)("inlineCode",{parentName:"li"},"CheckAssociatedRelayNumber")," to\n",(0,r.kt)("inlineCode",{parentName:"li"},"RelayNumberMonotonicallyIncreases"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl cumulus_pallet_parachain_system::Config for Runtime {\n    type RuntimeEvent = RuntimeEvent;\n    type OnSystemEvent = ();\n    type SelfParaId = parachain_info::Pallet<Runtime>;\n    type OutboundXcmpMessageSource = XcmpQueue;\n    type DmpQueue = frame_support::traits::EnqueueWithOrigin<MessageQueue, RelayOrigin>;\n    type ReservedDmpWeight = ReservedDmpWeight;\n    type XcmpMessageHandler = XcmpQueue;\n    type ReservedXcmpWeight = ReservedXcmpWeight;\n // highlight-next-line\n    type CheckAssociatedRelayNumber = RelayNumberMonotonicallyIncreases;\n    type ConsensusHook = ConsensusHook;\n    type WeightInfo = weights::cumulus_pallet_parachain_system::WeightInfo<Runtime>;\n}\ntype ConsensusHook = cumulus_pallet_aura_ext::FixedVelocityConsensusHook<\n    Runtime,\n    RELAY_CHAIN_SLOT_DURATION_MILLIS,\n    BLOCK_PROCESSING_VELOCITY,\n    UNINCLUDED_SEGMENT_CAPACITY,\n>;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet_aura")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime/src/lib.rs")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"AllowMultipleBlocksPerSlot")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," (don't worry, we will set it to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," when we\nactivate async backing in phase 3)."),(0,r.kt)("li",{parentName:"ul"},"Define ",(0,r.kt)("inlineCode",{parentName:"li"},"pallet_aura::SlotDuration")," using our constant ",(0,r.kt)("inlineCode",{parentName:"li"},"SLOT_DURATION"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl pallet_aura::Config for Runtime {\n    type AuthorityId = AuraId;\n    type DisabledValidators = ();\n    type MaxAuthorities = ConstU32<100_000>;\n // highlight-start\n    type AllowMultipleBlocksPerSlot = ConstBool<false>;\n    #[cfg(feature = "experimental")]\n    type SlotDuration = ConstU64<SLOT_DURATION>;\n // highlight-end\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update ",(0,r.kt)("inlineCode",{parentName:"p"},"aura_api::SlotDuration()")," to match the constant ",(0,r.kt)("inlineCode",{parentName:"p"},"SLOT_DURATION")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl_runtime_apis! {\n    impl sp_consensus_aura::AuraApi<Block, AuraId> for Runtime {\n        fn slot_duration() -> sp_consensus_aura::SlotDuration {\n         // highlight-next-line\n            sp_consensus_aura::SlotDuration::from_millis(SLOT_DURATION)\n        }\n\n        fn authorities() -> Vec<AuraId> {\n            Aura::authorities().into_inner()\n        }\n    }\n...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"AuraUnincludedSegmentApi"),", which allows the collator client to query its runtime\nto determine whether it should author a block."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add the dependency ",(0,r.kt)("inlineCode",{parentName:"li"},"cumulus-primitives-aura")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"runtime/Cargo.toml")," file for your runtime")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'cumulus-pallet-aura-ext = { path = "../../../../pallets/aura-ext", default-features = false }\ncumulus-pallet-parachain-system = { path = "../../../../pallets/parachain-system", default-features = false, features = ["parameterized-consensus-hook"] }\ncumulus-pallet-session-benchmarking = { path = "../../../../pallets/session-benchmarking", default-features = false }\ncumulus-pallet-xcm = { path = "../../../../pallets/xcm", default-features = false }\ncumulus-pallet-xcmp-queue = { path = "../../../../pallets/xcmp-queue", default-features = false, features = ["bridging"] }\n// highlight-next-line\ncumulus-primitives-aura = { path = "../../../../primitives/aura", default-features = false }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the same file, add ",(0,r.kt)("inlineCode",{parentName:"p"},'"cumulus-primitives-aura/std",')," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"std")," feature.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"impl_runtime_apis!")," block for your runtime, implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"AuraUnincludedSegmentApi"),"\nas shown below."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl cumulus_primitives_aura::AuraUnincludedSegmentApi<Block> for Runtime {\n    fn can_build_upon(\n        included_hash: <Block as BlockT>::Hash,\n        slot: cumulus_primitives_aura::Slot,\n    ) -> bool {\n        ConsensusHook::can_build_upon(included_hash, slot)\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," With a capacity of 1 we have an effective velocity of \xbd even when velocity is configured\nto some larger value. This is because capacity will be filled after a single block is produced and\nwill only be freed up after that block is included on the relay chain, which takes 2 relay blocks to\naccomplish. Thus with capacity 1 and velocity 1 we get the customary 12 second parachain block time."),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"If your ",(0,r.kt)("inlineCode",{parentName:"li"},"runtime/src/lib.rs")," provides a ",(0,r.kt)("inlineCode",{parentName:"li"},"CheckInherents")," type to ",(0,r.kt)("inlineCode",{parentName:"li"},"register_validate_block"),",\nremove it. ",(0,r.kt)("inlineCode",{parentName:"li"},"FixedVelocityConsensusHook")," makes it unnecessary. The following example shows how\n",(0,r.kt)("inlineCode",{parentName:"li"},"register_validate_block")," should look after removing ",(0,r.kt)("inlineCode",{parentName:"li"},"CheckInherents"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"cumulus_pallet_parachain_system::register_validate_block! {\n    Runtime = Runtime,\n    BlockExecutor = cumulus_pallet_aura_ext::BlockExecutor::<Runtime, Executive>,\n}\n")),(0,r.kt)("h2",{id:"phase-2---update-parachain-nodes"},"Phase 2 - Update Parachain Nodes"),(0,r.kt)("p",null,"This phase consists of plugging in the new lookahead collator node."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import ",(0,r.kt)("inlineCode",{parentName:"li"},"cumulus_primitives_core::ValidationCode")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"node/src/service.rs"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use cumulus_primitives_core::{\n// highlight-next-line\n    relay_chain::{CollatorPair, ValidationCode},\n    ParaId,\n};\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"node/src/service.rs"),", modify ",(0,r.kt)("inlineCode",{parentName:"li"},"sc_service::spawn_tasks")," to use a clone of ",(0,r.kt)("inlineCode",{parentName:"li"},"Backend")," rather\nthan the original")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"sc_service::spawn_tasks(sc_service::SpawnTasksParams {\n    rpc_builder,\n    client: client.clone(),\n    transaction_pool: transaction_pool.clone(),\n    task_manager: &mut task_manager,\n    config: parachain_config,\n    keystore: params.keystore_container.keystore(),\n  // highlight-next-line\n    backend: backend.clone(),\n    network: network.clone(),\n    sync_service: sync_service.clone(),\n    system_rpc_tx,\n    tx_handler_controller,\n    telemetry: telemetry.as_mut(),\n})?;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"backend")," as a parameter to ",(0,r.kt)("inlineCode",{parentName:"li"},"start_consensus()")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"node/src/service.rs"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn start_consensus(\n    client: Arc<ParachainClient>,\n    // highlight-next-line\n    backend: Arc<ParachainBackend>,\n    block_import: ParachainBlockImport,\n    prometheus_registry: Option<&Registry>,\n    telemetry: Option<TelemetryHandle>,\n    task_manager: &TaskManager,\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"if validator {\n    start_consensus(\n    client.clone(),\n    // highlight-next-line\n    backend.clone(),\n    block_import,\n    prometheus_registry.as_ref(),\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"node/src/service.rs")," import the lookahead collator rather than the basic collator")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use cumulus_client_consensus_aura::collators::lookahead::{self as aura, Params as AuraParams};\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"start_consensus()")," replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"BasicAuraParams")," struct with ",(0,r.kt)("inlineCode",{parentName:"li"},"AuraParams"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Change the struct type from ",(0,r.kt)("inlineCode",{parentName:"li"},"BasicAuraParams")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"AuraParams")),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"para_client")," field, pass in a cloned para client rather than the original"),(0,r.kt)("li",{parentName:"ul"},"Add a ",(0,r.kt)("inlineCode",{parentName:"li"},"para_backend")," parameter after ",(0,r.kt)("inlineCode",{parentName:"li"},"para_client"),", passing in our para backend"),(0,r.kt)("li",{parentName:"ul"},"Provide a ",(0,r.kt)("inlineCode",{parentName:"li"},"code_hash_provider")," closure like that shown below"),(0,r.kt)("li",{parentName:"ul"},"Increase ",(0,r.kt)("inlineCode",{parentName:"li"},"authoring_duration")," from 500 milliseconds to 1500")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let params = AuraParams {\n    create_inherent_data_providers: move |_, ()| async move { Ok(()) },\n    block_import,\n    para_client: client.clone(),\n    para_backend: backend.clone(),\n    relay_client: relay_chain_interface,\n    code_hash_provider: move |block_hash| {\n        client.code_at(block_hash).ok().map(|c| ValidationCode::from(c).hash())\n    },\n    sync_oracle,\n    keystore,\n    collator_key,\n    para_id,\n    overseer_handle,\n    relay_chain_slot_duration,\n    proposer,\n    collator_service,\n    // highlight-next-line\n    authoring_duration: Duration::from_millis(1500),\n    reinitialize: false,\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Set ",(0,r.kt)("inlineCode",{parentName:"p"},"authoring_duration")," to whatever you want, taking your own hardware into account. But\nif the backer who should be slower than you due to reading from disk, times out at two seconds your\ncandidates will be rejected."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"start_consensus()")," replace ",(0,r.kt)("inlineCode",{parentName:"li"},"basic_aura::run")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"aura::run"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let fut = aura::run::<\n    Block,\n    sp_consensus_aura::sr25519::AuthorityPair,\n    _,\n    _,\n    _,\n    _,\n    _,\n    _,\n    _,\n    _,\n    _,\n    >(params);\ntask_manager.spawn_essential_handle().spawn("aura", None, fut);\n')),(0,r.kt)("h2",{id:"phase-3---activate-async-backing"},"Phase 3 - Activate Async Backing"),(0,r.kt)("p",null,"This phase consists of changes to your parachain\u2019s runtime that activate async backing feature."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure ",(0,r.kt)("inlineCode",{parentName:"li"},"pallet_aura"),", setting ",(0,r.kt)("inlineCode",{parentName:"li"},"AllowMultipleBlocksPerSlot")," to true in ",(0,r.kt)("inlineCode",{parentName:"li"},"runtime/src/lib.rs"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl pallet_aura::Config for Runtime {\n    type AuthorityId = AuraId;\n    type DisabledValidators = ();\n    type MaxAuthorities = ConstU32<100_000>;\n    // highlight-next-line\n    type AllowMultipleBlocksPerSlot = ConstBool<true>;\n    #[cfg(feature = "experimental")]\n    type SlotDuration = ConstU64<SLOT_DURATION>;\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Increase the maximum ",(0,r.kt)("inlineCode",{parentName:"li"},"UNINCLUDED_SEGMENT_CAPACITY")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"runtime/src/lib.rs"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Maximum number of blocks simultaneously accepted by the Runtime, not yet included into the\n/// relay chain.\npub const UNINCLUDED_SEGMENT_CAPACITY: u32 = 3;\n/// How many parachain blocks are processed by the relay chain per parent. Limits the number of\n/// blocks authored per slot.\npub const BLOCK_PROCESSING_VELOCITY: u32 = 1;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Decrease ",(0,r.kt)("inlineCode",{parentName:"li"},"MILLISECS_PER_BLOCK")," to 6000.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note: For a parachain which measures time in terms of its own block number rather than by relay\nblock number it may be preferable to increase velocity. Changing block time may cause\ncomplications, requiring additional changes. See the section \u201cTiming by Block Number\u201d."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// This determines the average expected block time that we are targeting.\n/// Blocks will be produced at a minimum duration defined by `SLOT_DURATION`.\n/// `SLOT_DURATION` is picked up by `pallet_timestamp` which is in turn picked\n/// up by `pallet_aura` to implement `fn slot_duration()`.\n///\n/// Change this to adjust the block time.\npub const MILLISECS_PER_BLOCK: u64 = 6000;\n")))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"MAXIMUM_BLOCK_WEIGHT")," to reflect the increased time available for block production.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// We allow for 2 seconds of compute with a 6 second average block.\npub const MAXIMUM_BLOCK_WEIGHT: Weight = Weight::from_parts(\n    WEIGHT_REF_TIME_PER_SECOND.saturating_mul(2),\n    cumulus_primitives_core::relay_chain::MAX_POV_SIZE as u64,\n);\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Add a feature flagged alternative for ",(0,r.kt)("inlineCode",{parentName:"li"},"MinimumPeriod")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"pallet_timestamp"),". The type should be\n",(0,r.kt)("inlineCode",{parentName:"li"},"ConstU64<0>")," with the feature flag experimental, and ",(0,r.kt)("inlineCode",{parentName:"li"},"ConstU64<{SLOT_DURATION / 2}>")," without.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl pallet_timestamp::Config for Runtime {\n    type Moment = u64;\n    type OnTimestampSet = Aura;\n    #[cfg(feature = "experimental")]\n    type MinimumPeriod = ConstU64<0>;\n    #[cfg(not(feature = "experimental"))]\n    type MinimumPeriod = ConstU64<{ SLOT_DURATION / 2 }>;\n    type WeightInfo = weights::pallet_timestamp::WeightInfo<Runtime>;\n}\n')),(0,r.kt)("h2",{id:"timing-by-block-number"},"Timing by Block Number"),(0,r.kt)("p",null,"With asynchronous backing it will be possible for parachains to opt for a block time of 6 seconds\nrather than 12 seconds. But modifying block duration isn\u2019t so simple for a parachain which was\nmeasuring time in terms of its own block number. It could result in expected and actual time not\nmatching up, stalling the parachain."),(0,r.kt)("p",null,"One strategy to deal with this issue is to instead rely on relay chain block numbers for timing.\nRelay block number is kept track of by each parachain in ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-parachain-system")," with the storage\nvalue ",(0,r.kt)("inlineCode",{parentName:"p"},"LastRelayChainBlockNumber"),". This value can be obtained and used wherever timing based on\nblock number is needed."))}h.isMDXComponent=!0}}]);