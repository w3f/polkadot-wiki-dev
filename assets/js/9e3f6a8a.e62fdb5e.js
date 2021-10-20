(self.webpackChunk=self.webpackChunk||[]).push([[2758],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>c,kt:()=>p});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),h=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=h(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=h(t),p=o,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return t?n.createElement(m,s(s({ref:a},c),{},{components:t})):n.createElement(m,s({ref:a},c))}));function p(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var h=2;h<r;h++)s[h]=t[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14865:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>h,toc:()=>c,default:()=>u});var n=t(22122),o=t(19756),r=(t(67294),t(3905)),s=["components"],i={id:"learn-comparisons-ethereum-2",title:"Polkadot and Ethereum 2.0",sidebar_label:"Ethereum 2.0",description:"A high-level comparison between Polkadot and Ethereum 2.0.",slug:"../learn-comparisons-ethereum-2"},l=void 0,h={unversionedId:"learn/learn-comparisons-ethereum-2",id:"learn/learn-comparisons-ethereum-2",isDocsHomePage:!1,title:"Polkadot and Ethereum 2.0",description:"A high-level comparison between Polkadot and Ethereum 2.0.",source:"@site/../docs/learn/learn-comparison-ethereum-2.md",sourceDirName:"learn",slug:"/learn-comparisons-ethereum-2",permalink:"/docs/learn-comparisons-ethereum-2",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-comparison-ethereum-2.md",tags:[],version:"current",lastUpdatedBy:"a-jwc",lastUpdatedAt:1633540105,formattedLastUpdatedAt:"10/6/2021",frontMatter:{id:"learn-comparisons-ethereum-2",title:"Polkadot and Ethereum 2.0",sidebar_label:"Ethereum 2.0",description:"A high-level comparison between Polkadot and Ethereum 2.0.",slug:"../learn-comparisons-ethereum-2"},sidebar:"docs",previous:{title:"Comparing Polkadot and Kusama",permalink:"/docs/learn-kusama-vs-polkadot"},next:{title:"Cosmos",permalink:"/docs/learn-comparisons-cosmos"}},c=[{value:"Model",id:"model",children:[],level:2},{value:"Architecture",id:"architecture",children:[{value:"Ethereum 2.0",id:"ethereum-20",children:[],level:3},{value:"Polkadot",id:"polkadot",children:[],level:3}],level:2},{value:"Consensus",id:"consensus",children:[],level:2},{value:"Staking Mechanics",id:"staking-mechanics",children:[],level:2},{value:"Shards",id:"shards",children:[],level:2},{value:"Message Passing",id:"message-passing",children:[],level:2},{value:"Governance",id:"governance",children:[],level:2},{value:"Upgrades",id:"upgrades",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:c};function u(e){var a=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot and Ethereum 2.0 are both sharded blockchain protocols. As such, they provide scalability\nby executing transactions in separate shards and provide a protocol to send messages between shards."),(0,r.kt)("h2",{id:"model"},"Model"),(0,r.kt)("p",null,"The shards in Ethereum 2.0 all have the same state transition function (STF), as in the rules\ngoverning how the blockchain can change state with each block. This STF provides an interface for\nsmart contract execution. Contracts exist on a single shard and can send asynchronous messages\nbetween shards."),(0,r.kt)("p",null,'Likewise, in Polkadot, each shard hosts core logic, the shards are executed in parallel, and\nPolkadot can send cross-shard asynchronous messages. However, each Polkadot shard (in Polkadot\nterminology, "',(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachain"),'") has a unique STF. Applications can exist either\nwithin a single shard or across shards by composing logic. Polkadot uses WebAssembly (Wasm) as a\n"meta-protocol". A shard\'s STF can be abstract as long as the validators on Polkadot can execute it\nwithin a Wasm environment. Polkadot will support smart contracts through parachains. To offer some\nperspective, on Ethereum, smart contracts can call each other synchronously in the same shard and\nasynchronously between shards. On Polkadot, smart contracts will be able to call each other\nsynchronously in the same parachain and asynchronously across parachains.'),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("h3",{id:"ethereum-20"},"Ethereum 2.0"),(0,r.kt)("p",null,"Ethereum 2.0's main chain is called the Beacon Chain. The primary load on the Beacon Chain is\nattestations, which are votes on the availability of shard data and Beacon Chain validity. Each\nshard in Ethereum 2 is simply a blockchain with the Ethereum Wasm (eWasm) interface."),(0,r.kt)("p",null,"Ethereum 2.0 launched phase 0 of a multi-phase rollout in December 2020, operating in parallel to the\nlegacy Ethereum 1.0 chain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 0")," provisioned the Beacon Chain, accepting deposits from validators and implementing\nproof-of-stake consensus, eventually among many shards."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 1"),' launches 64 shards as simple chains, to test the Beacon Chain\'s finality. Each shard\nsubmits "crosslinks" to the Beacon Chain, which contains the information to finalize shard data.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 1.5")," integrates Eth 1 as a shard to finalize the proof-of-work chain's blocks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 2")," implements the eWasm interface, phasing out proof-of-work, finally making the system\nusable to end-users. ","[1]")),(0,r.kt)("p",null,"After the launch of the Beacon Chain in phase 0, the roadmap was altered to prioritize the\ntransition of the legacy Ethereum 1.0 chain from Proof-of-Work to Ethereum 2.0's Proof-of-Stake\nconsensus, preceding the rollout of shards on the network. ","[2]"),(0,r.kt)("p",null,'The network will also have "side chains" to interact with chains that are not under the finality\nprotocol of Ethereum 2.0.'),(0,r.kt)("h3",{id:"polkadot"},"Polkadot"),(0,r.kt)("p",null,"Like Ethereum 2.0, Polkadot also has a main chain, called the Relay Chain, with several shards,\ncalled ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachains"),". Parachains are not restricted to a single interface like\neWasm. Instead, they can define their own logic and interface, as long as they provide their STF to\nthe Relay Chain validators so that they can execute it."),(0,r.kt)("p",null,"Polkadot, now live as a Relay Chain, only plans to launch the ability to validate up to 20 shards\nper block, gradually scaling up to 100 shards per block. Besides parachains, which are scheduled for\nexecution every block, Polkadot also has ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"parathreads"),", which are scheduled on\na dynamic basis. This allows chains to share the sharded slots, much like multiple small airlines\nmight share a gate at an airport."),(0,r.kt)("p",null,"In order to interact with chains that want to use their own finalization process (e.g. Bitcoin),\nPolkadot has ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-bridges"},"bridge parachains")," that offer two-way compatibility."),(0,r.kt)("h2",{id:"consensus"},"Consensus"),(0,r.kt)("p",null,"Both Ethereum 2.0 and Polkadot use hybrid consensus models where block production and finality each\nhave their own protocol. The finality protocols - Casper FFG for Ethereum 2.0 and GRANDPA for\nPolkadot - are both GHOST-based and can both finalize batches of blocks in one round. For block\nproduction, both protocols use slot-based protocols that randomly assign validators to a slot and\nprovide a fork choice rule for unfinalized blocks - RandDAO/LMD for Ethereum 2.0 and BABE for\nPolkadot."),(0,r.kt)("p",null,"There are two main differences between Ethereum 2.0 and Polkadot consensus:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Ethereum 2.0 finalizes batches of blocks according to periods of time called "epochs". The\ncurrent plan is to have 32 blocks per epoch, and finalize them all in one round. With a predicted\nblock time of 12 seconds, this means the expected time to finality is 6 minutes (12 minutes\nmaximum). ',"[3]"," Polkadot's finality protocol, GRANDPA, finalizes batches of blocks based on\navailability and validity checks that happen as the proposed chain grows. The time to finality\nvaries with the number of checks that need to be performed (and invalidity reports cause the\nprotocol to require extra checks). The expected time to finality is 12-60 seconds."),(0,r.kt)("li",{parentName:"ol"},"Ethereum 2.0 requires a large number of validators per shard to provide strong validity\nguarantees. Polkadot can provide stronger guarantees with fewer validators per shard. Polkadot\nachieves this by making validators distribute an erasure coding to all validators in the system,\nsuch that anyone - not only the shard's validators - can reconstruct a parachain's block and test\nits validity. The random parachain-validator assignments and secondary checks performed by\nrandomly selected validators make it impossible for the small set of validators on each parachain\nto collude.")),(0,r.kt)("h2",{id:"staking-mechanics"},"Staking Mechanics"),(0,r.kt)("p",null,'Ethereum 2.0 is a proof-of-stake network that requires 32 ETH to stake for each validator instance.\nValidators run a primary Beacon Chain node and multiple validator clients - one for each 32 ETH.\nThese validators get assigned to "committees", which are randomly selected groups to validate shards\nin the network. Ethereum 2.0 relies on having a large validator set to provide availability and\nvalidity guarantees: They need at least 111 validators per shard to run the network and 256\nvalidators per shard to finalize all shards within one epoch. With 64 shards, that\'s 16_384\nvalidators (given 256 validators per shard). ',"[4][5]"),(0,r.kt)("p",null,"Polkadot can provide strong finality and availability guarantees with much fewer validators.\nPolkadot uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"Nominated Proof of Stake (NPoS)")," to select validators from a\nsmaller set, letting smaller holders nominate validators to run infrastructure while still claiming\nthe rewards of the system, without running a node of their own. Polkadot plans to have 1_000\nvalidators by the end of its first year of operation, and needs about ten validators for each\nparachain in the network."),(0,r.kt)("h2",{id:"shards"},"Shards"),(0,r.kt)("p",null,'Every shard in Ethereum 2.0 has the same STF. Each shards will submit "crosslinks" to the beacon chain\nand implement an eWasm execution environment. EWasm is a restricted subset of Wasm for contracts in\nEthereum. The eWasm interface provides a set of methods available to contracts. There should be a\nsimilar set of development tools like Truffle and Ganache to develop for eWasm. ',"[7]"),(0,r.kt)("p",null,'Every shard in Polkadot has an abstract STF based on Wasm. Each shard can expose a custom interface,\nas long as the logic compiles to Wasm and the shard provides an "execute block" function to Polkadot\nvalidators. Polkadot has the Substrate development framework that allows full spectrum composability\nwith a suite of modules that can be configured, composed, and extended to develop a chain\'s STF.'),(0,r.kt)("h2",{id:"message-passing"},"Message Passing"),(0,r.kt)("p",null,"Shards in Ethereum 2.0 will have access to each other's state via their crosslinks and state proofs.\nIn the model of Ethereum 2.0 with 64 shards, each one posts a crosslink in the Beacon Chain for\nevery block, ","[4]"," meaning that shards could contain logic that executes based on some light client\nproof of a transaction on another shard. ","[8]"," Ethereum 2.0 has not released a specification for which\nnodes pass messages between shards."),(0,r.kt)("p",null,"Polkadot uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-crosschain"},"Cross-Consensus Message Passing Format (XCM)")," for\nparachains to send arbitrary messages to each other. Parachains open connections with each other\nand can send messages via their established channels. Given that collators will need to be full\nnodes of the Relay Chain as well, they will be connected and will be able to relay messages from\nparachain A to parachain B.. Messages do not pass through the Relay Chain, only proofs of post and\nchannel operations (open, close, etc.) go into the Relay Chain. This enhances scalability by keeping\ndata on the edges of the system."),(0,r.kt)("p",null,"Polkadot will add a protocol called ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-spree"},"SPREE")," that provides shared logic for\ncross-chain messages. Messages sent with SPREE carry additional guarantees about provenance and\ninterpretation by the receiving chain."),(0,r.kt)("h2",{id:"governance"},"Governance"),(0,r.kt)("p",null,"Ethereum 2.0 governance is still unresolved. Ethereum currently uses off-chain governance procedures\nlike GitHub discussions, All Core Devs calls, and Ethereum Magicians to make decisions about the\nprotocol. ","[9]"),(0,r.kt)("p",null,"Polkadot uses on-chain ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance")," with a multicameral system. There are\nseveral avenues to issue proposals, e.g. from the on-chain Council, the Technical Committee, or from\nthe public. All proposals ultimately pass through a public referendum, where the majority of tokens\ncan always control the outcome. For low-turnout referenda, Polkadot uses adaptive quorum biasing to\nset the passing threshold. Referenda can cover a variety of topics, including fund allocation from\nan on-chain ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-treasury"},"Treasury")," or modifying the underlying runtime code of the chain.\nDecisions get enacted on-chain and are binding and autonomous."),(0,r.kt)("h2",{id:"upgrades"},"Upgrades"),(0,r.kt)("p",null,"Upgrades on Ethereum 2.0 will follow the normal hard-fork procedure, requiring validators to upgrade\ntheir nodes to implement protocol changes."),(0,r.kt)("p",null,"Using the Wasm meta-protocol, Polkadot can enact chain upgrades and successful proposals without a\nhard fork. Anything that is within the STF, the transaction queue, or off-chain workers can be\nupgraded without forking the chain."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,'Ethereum 2.0 and Polkadot both use a sharded model where shard chains ("shards" in Ethereum 2.0 and\n"parachains/parathreads" in Polkadot) are secured by a main chain by linking shard state in the\nblocks of the main chains. The two protocols differ in a few main areas. First, all shards in\nEthereum 2.0 has the same STF, while Polkadot lets shards have an abstract STF. Second, governance\nprocesses in Ethereum 2.0 are planned to be off-chain and thus require coordination for a hard fork\nto enact governance decisions, while in Polkadot the decisions are on-chain and enacted\nautonomously. Third, the validator selection mechanisms are different because Polkadot can provide\nstrong availability and validity guarantees with a smaller number of validators per shard.'),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-phases/"},"Ethereum 2.0 Phases")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/eth2/merge/"},"Ethereum 2.0 Merge")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethereum/eth2.0-specs/blob/676e216/specs/phase0/beacon-chain.md#time-parameters"},"Ethereum 2 Block Time")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-economics/"},"Ethereum 2.0 Economics")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://notes.ethereum.org/@vbuterin/HkiULaluS"},"Buterin, Eth2 shard chain simplification proposal")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://messari.io/report/crypto-theses-for-2020"},"Messari Crypto Theses for 2020")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ewasm/design"},"eWasm Design")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethereum/wiki/wiki/Sharding-FAQ#how-would-synchronous-cross-shard-messages-work"},"Sharding FAQ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethereum/wiki/wiki/Governance-compendium"},"Ethereum Governance Compendium"))))}u.isMDXComponent=!0}}]);