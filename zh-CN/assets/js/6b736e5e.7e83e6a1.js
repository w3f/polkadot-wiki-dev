(self.webpackChunk=self.webpackChunk||[]).push([[9469],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>h,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=c(a),p=o,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||s;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65893:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>c,toc:()=>h,default:()=>u});var n=a(22122),o=a(19756),s=(a(67294),a(3905)),i=["components"],r={id:"learn-comparisons-cosmos",title:"Polkadot and Cosmos",sidebar_label:"Cosmos"},l=void 0,c={unversionedId:"learn-comparisons-cosmos",id:"learn-comparisons-cosmos",isDocsHomePage:!1,title:"Polkadot and Cosmos",description:"Polkadot and Cosmos are both protocols that provide an interface for different state machines to",source:"@site/../docs/learn-comparisons-cosmos.md",sourceDirName:".",slug:"/learn-comparisons-cosmos",permalink:"/zh-CN/docs/learn-comparisons-cosmos",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-comparisons-cosmos.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1626452468,formattedLastUpdatedAt:"2021/7/16",frontMatter:{id:"learn-comparisons-cosmos",title:"Polkadot and Cosmos",sidebar_label:"Cosmos"},sidebar:"docs",previous:{title:"Ethereum 2.0",permalink:"/zh-CN/docs/learn-comparisons-ethereum-2"},next:{title:"Other comparisons",permalink:"/zh-CN/docs/learn-comparisons"}},h=[{value:"Model",id:"model",children:[]},{value:"Architecture",id:"architecture",children:[{value:"Polkadot",id:"polkadot",children:[]},{value:"Cosmos",id:"cosmos",children:[]}]},{value:"Consensus",id:"consensus",children:[]},{value:"Staking Mechanics",id:"staking-mechanics",children:[]},{value:"Message Passing",id:"message-passing",children:[]},{value:"Governance",id:"governance",children:[]},{value:"Upgrades",id:"upgrades",children:[]},{value:"Development Framework",id:"development-framework",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={toc:h};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Polkadot and Cosmos are both protocols that provide an interface for different state machines to\ncommunicate with each other. Both protocols are predicated on the thesis that the future will have\nmultiple blockchains that need to interoperate with each other rather than individual blockchains\nexisting in isolation."),(0,s.kt)("h2",{id:"model"},"Model"),(0,s.kt)("p",null,'Polkadot uses a sharded model where each shard in the protocol has an abstract state transition\nfunction (STF). Polkadot uses WebAssembly (Wasm) as a "meta-protocol". A shard\'s STF can be abstract\nas long as the validators on Polkadot can execute it within a Wasm environment.'),(0,s.kt)("p",null,'The shards of Polkadot are called "',(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-parachains"},"parachains"),"\". Every time a parachain wants\nto make a state transition, it submits a block (batch of state transitions) along with a state proof\nthat Polkadot validators can independently verify. These blocks are finalized for the parachains\nwhen they are finalized by Polkadot's Relay Chain, the main chain of the system. As such, all\nparachains share state with the entire system, meaning that a chain re-organization of a single\nparachain would require a re-organization of all parachains and the Relay Chain."),(0,s.kt)("p",null,'Cosmos uses a bridge-hub model that connects Tendermint chains. The system can have multiple hubs\n(the primary being the "Cosmos Hub"), but each hub connects a group of exterior chains, called\n"zones". Each zone is responsible for securing the chain with a sufficiently staked and\ndecentralized validator set. Zones send messages and tokens to each other via the hub using a\nprotocol called Inter-Blockchain Communication (IBC). As zones do not share state, a re-organization\nof one zone would not re-organize other zones, meaning each message is trust-bound by the\nrecipient\'s trust in the security of the sender.'),(0,s.kt)("h2",{id:"architecture"},"Architecture"),(0,s.kt)("h3",{id:"polkadot"},"Polkadot"),(0,s.kt)("p",null,"Polkadot has a Relay Chain acting as the main chain of the system. All validators in Polkadot are on\nthe Relay Chain. Parachains have collators, who construct and propose parachain blocks to\nvalidators. Collators don't have any security responsibilities, and thus do not require a robust\nincentive system. Collators can submit a single parachain block for every Relay Chain block every 6\nseconds. Once a parachain submits a block, validators perform a series of availability and validity\nchecks before committing it to the final chain."),(0,s.kt)("p",null,"Parachain slots are limited, and thus parachain candidates participate in an auction to reserve a\nslot for up to two years. For chains that do not have the funding for a parachain slot or the\nnecessity to execute with a six-second block time, Polkadot also has\n",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-parathreads"},"parathreads"),". Parathreads execute on a pay-as-you-go basis, only paying to\nexecute a block when they need to."),(0,s.kt)("p",null,"In order to interact with chains that want to use their own finalization process (e.g. Bitcoin),\nPolkadot has ",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-bridges"},"bridge parachains")," that offer two-way compatibility."),(0,s.kt)("h3",{id:"cosmos"},"Cosmos"),(0,s.kt)("p",null,'Cosmos has a main chain called a "Hub" that connects other blockchains called "zones". Cosmos can\nhave multiple hubs, but this overview will consider a single hub. Each zone must maintain its own\nstate, and therefore have its own validator community. When a zone wants to communicate with another\nzone, it sends packets over IBC. The Hub maintains a multi-token ledger of token balances\n(non-transfer messages are relayed but their state not stored in the Hub).'),(0,s.kt)("p",null,"Zones monitor the state of the Hub with a light client, but the Hub does not track zone states.\nZones must use a deterministic finality algorithm (currently, all use Tendermint) and implement the\nIBC interface to be able to send messages to other chains through the Hub."),(0,s.kt)("p",null,'Cosmos can also interact with external chains by using "peg zones", which are similar to bridge\nparachains.'),(0,s.kt)("h2",{id:"consensus"},"Consensus"),(0,s.kt)("p",null,"Polkadot uses a hybrid ",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-consensus"},"consensus"),' protocol with two sub-protocols: BABE and\nGRANDPA, together called "Fast Forward". BABE (Blind Assignment for Blockchain Extension) uses a\nverifiable random function (VRF) to assign slots to validators and a fallback round-robin pattern to\nguarantee that each slot has an author. GRANDPA (GHOST-based Recursive Ancestor Deriving Prefix\nAgreement) votes on chains, rather than individual blocks. Together, BABE can author candidate\nblocks to extend the finalized chain and GRANDPA can finalize them in batches (up to millions of\nblocks at a time).'),(0,s.kt)("p",null,"This isolation of tasks provides several benefits. First, it represents a reduction in transport\ncomplexity for both block production and finalization. BABE has linear complexity, making it easy to\nscale to thousands of block producers with low networking overhead. GRANDPA has quadratic\ncomplexity, but reduced by a factor of the latency, or how many blocks it finalizes in one batch."),(0,s.kt)("p",null,"Second, having the capacity to extend the chain with unfinalized blocks allows other validators to\nperform extensive availability and validity checks to ensure that no invalid state transitions make\ntheir way into the final chain."),(0,s.kt)("p",null,"Cosmos (both the Hub and the zones) uses Tendermint consensus, a round-robin protocol that provides\ninstant finality. Block production and finalization are on the same path of the algorithm, meaning\nit produces and finalizes one block at a time. Because it is a PBFT-based algorithm (like GRANDPA),\nit has quadratic transport complexity, but can only finalize one block at a time."),(0,s.kt)("h2",{id:"staking-mechanics"},"Staking Mechanics"),(0,s.kt)("p",null,"Polkadot uses ",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-staking"},"Nominated Proof of Stake (NPoS)")," to select validators using the\n",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-phragmen"},"sequential Phragm\xe9n algorithm"),". The validator set size is set by governance\n(1_000 validators planned) and stakers who do not want to run validator infrastructure can nominate\nup to 16 validators. Phragm\xe9n's algorithm selects the optimal allocation of stake, where optimal is\nbased on having the most evenly staked set."),(0,s.kt)("p",null,"All validators in Polkadot have the same weight in the consensus protocols. That is, to reach\ngreater than 2/3 of support for a chain, more than 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"validators")," must commit to it, rather\nthan 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"stake.")," Likewise, validator rewards are tied to their activity, primarily block\nproduction and finality justifications, not their amount of stake. This creates an incentive to\nnominate validators with lower stake, as they will earn higher returns on their staked tokens."),(0,s.kt)("p",null,"The Cosmos Hub uses Bonded Proof of Stake (a variant of Delegated PoS) to elect validators. Stakers\nmust bond funds and submit a delegate transaction for each validator they would like to delegate to\nwith the number of tokens to delegate. The Cosmos Hub plans to support up to 300 validators."),(0,s.kt)("p",null,"Consensus voting and rewards are both stake-based in Cosmos. In the case of consensus voting, more\nthan 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"stake")," must commit, rather than 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"validators.")," Likewise, a validator with\n10% of the total stake will earn 10% of the rewards."),(0,s.kt)("p",null,"Finally, in Cosmos, if a staker does not vote in a governance referendum, the validators assume\ntheir voting power. Because of this, many validators in Cosmos have zero commission in order to\nacquire more control over the protocol. In Polkadot, governance and staking are completely disjoint;\nnominating a validator does not assign any governance voting rights to the validator."),(0,s.kt)("h2",{id:"message-passing"},"Message Passing"),(0,s.kt)("p",null,"Polkadot uses ",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-crosschain"},"Cross-Chain Message Passing (XCMP)")," for parachains to send\narbitrary messages to each other. Parachains open connections with each other and can send messages\nvia their established channels. ",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-collator"},"Collators")," are full nodes of parachains and full\nnodes of the relay chain, so collator nodes are a key component of message passing. Messages do not\npass through the Relay Chain, only proofs of post and channel operations (open, close, etc.) go into\nthe Relay Chain. This enhances scalability by keeping data on the edges of the system."),(0,s.kt)("p",null,"In the case of a chain re-organization, messages can be rolled back to the point of the\nre-organization based on the proofs of post in the Relay Chain. The shared state amongst parachains\nmeans that messages are free from trust bounds; they all operate in the same context."),(0,s.kt)("p",null,"Polkadot has an additional protocol called ",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-spree"},"SPREE")," that provides shared logic for\ncross-chain messages. Messages sent with SPREE carry additional guarantees about provenance and\ninterpretation by the receiving chain."),(0,s.kt)("p",null,"Cosmos uses a cross chain protocol called Inter-Blockchain Communication (IBC). The current\nimplementation of Cosmos uses the Hub to pass tokens between zones. However, Cosmos does have a new\nspecification for passing arbitrary data. Nonetheless, as chains do not share state, receiving\nchains must trust the security of a message's origin."),(0,s.kt)("h2",{id:"governance"},"Governance"),(0,s.kt)("p",null,"Polkadot has a multicameral ",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance"},"governance")," system with several avenues to pass\nproposals. All proposals ultimately pass through a public referendum, where the majority of tokens\ncan always control the outcome. For low-turnout referenda, Polkadot uses adaptive quorum biasing to\nset the passing threshold. Referenda can contain a variety of proposals, including fund allocation\nfrom an on-chain ",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-treasury"},"Treasury"),". Decisions get enacted on-chain and are binding and\nautonomous."),(0,s.kt)("p",null,"Polkadot has several on-chain, permissionless bodies. The primary one is the Council, which\ncomprises a set of accounts that are elected in Phragm\xe9n fashion. The Council represents minority\ninterests and as such, proposals that are unanimously approved of by the Council have a lower\npassing threshold in the public referendum. There is also a Technical Committee for making technical\nrecommendations (e.g. emergency runtime upgrade to fix a bug)."),(0,s.kt)("p",null,"Cosmos uses coin-vote signalling to pass referenda. The actual enactment of governance decisions is\ncarried out via a protocol fork, much like other blockchains. All token holders can vote, however,\nif a delegator abstains from a vote then the validator they delegate to assume their voting power.\nValidators in Polkadot do not receive any voting power based on their nominators."),(0,s.kt)("h2",{id:"upgrades"},"Upgrades"),(0,s.kt)("p",null,"Using the Wasm meta-protocol, Polkadot can enact chain upgrades and successful proposals without a\nhard fork. Anything that is within the STF, the transaction queue, or off-chain workers can be\nupgraded without forking the chain."),(0,s.kt)("p",null,"As Cosmos is not based on a meta-protocol, it must enact upgrades and proposals via a normal forking\nmechanism."),(0,s.kt)("h2",{id:"development-framework"},"Development Framework"),(0,s.kt)("p",null,"Both Cosmos and Polkadot are designed such that each chain has its own STF and both provide support\nfor smart contracts in both Wasm and the Ethereum Virtual Machine (EVM). Polkadot provides an\nahead-of-time Wasm compiler as well as an interpreter (Wasmi) for execution, while Cosmos only\nexcutes smart contracts in an interpreter."),(0,s.kt)("p",null,"Cosmos chains can be developed using the Cosmos SDK, written in Go. The Cosmos SDK contains about 10\nmodules (e.g. staking, governance, etc.) that can be included in a chain's STF. The SDK builds on\ntop of Tendermint."),(0,s.kt)("p",null,"The primary development framework for parachains is ",(0,s.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/"},"Substrate"),",\nwritten in Rust. Substrate comes with FRAME, a set of about 40 modules (called \"pallets\") to use in\na chain's STF. Beyond simply using the pallets, Substrate adds a further layer of abstraction that\nallows developers to compose FRAME's pallets by adding custom modules and configuring the parameters\nand initial storage values for the chain."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note: Polkadot can support an STF written in any language, so long as it compiles to its\nmeta-protocol Wasm. Likewise, it could still use the Substrate client (database, RPC, networking,\netc.); it only needs to implement the primitives at the interface.")),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"Polkadot was designed on the principle that scalability and interoperability require shared\nvalidation logic to create a trust-free environment. As more blockchains are developed, their\nsecurity must be cooperative, not competitive. Therefore, Polkadot provides the shared validation\nlogic and security processes across chains so that they can interact knowing that their\ninterlocutors execute within the same security context."),(0,s.kt)("p",null,"The Cosmos network uses a bridge-hub model to connect chains with independent security guarantees,\nmeaning that inter-chain communication is still bounded by the trust that the receiving chain has in\nthe sending chain."))}u.isMDXComponent=!0}}]);