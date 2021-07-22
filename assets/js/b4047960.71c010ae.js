(self.webpackChunk=self.webpackChunk||[]).push([[3615],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>h,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?o.createElement(m,s(s({ref:t},h),{},{components:n})):o.createElement(m,s({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11288:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>c,toc:()=>h,default:()=>p});var o=n(22122),a=n(19756),i=(n(67294),n(3905)),s=["components"],r={id:"learn-consensus",title:"Polkadot Consensus",sidebar_label:"Polkadot Consensus",description:"An explanation of the consensus model used in Polkadot and Kusama"},l=void 0,c={unversionedId:"learn-consensus",id:"learn-consensus",isDocsHomePage:!1,title:"Polkadot Consensus",description:"An explanation of the consensus model used in Polkadot and Kusama",source:"@site/../docs/learn-consensus.md",sourceDirName:".",slug:"/learn-consensus",permalink:"/docs/learn-consensus",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-consensus.md",version:"current",lastUpdatedBy:"Dee Evans",lastUpdatedAt:1626917827,formattedLastUpdatedAt:"7/22/2021",frontMatter:{id:"learn-consensus",title:"Polkadot Consensus",sidebar_label:"Polkadot Consensus",description:"An explanation of the consensus model used in Polkadot and Kusama"},sidebar:"docs",previous:{title:"Security of the network",permalink:"/docs/learn-security"},next:{title:"Nominator",permalink:"/docs/learn-nominator"}},h=[{value:"Why do we need consensus?",id:"why-do-we-need-consensus",children:[]},{value:"What are PoW and PoS?",id:"what-are-pow-and-pos",children:[]},{value:"Why not Proof of Work?",id:"why-not-proof-of-work",children:[]},{value:"Probabilistic vs. provable finality",id:"probabilistic-vs-provable-finality",children:[]},{value:"What is GRANDPA/BABE?",id:"what-is-grandpababe",children:[{value:"Hybrid Consensus",id:"hybrid-consensus",children:[]},{value:"BABE",id:"babe",children:[]},{value:"GRANDPA: Finality gadget",id:"grandpa-finality-gadget",children:[]},{value:"Fork Choice",id:"fork-choice",children:[]}]},{value:"Comparisons",id:"comparisons",children:[{value:"Nakamoto consensus",id:"nakamoto-consensus",children:[]},{value:"PBFT / Tendermint",id:"pbft--tendermint",children:[]},{value:"Casper FFG",id:"casper-ffg",children:[]}]},{value:"Resources",id:"resources",children:[]}],d={toc:h};function p(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-do-we-need-consensus"},"Why do we need consensus?"),(0,i.kt)("p",null,"Consensus is a method for coming to agreement over a shared state. In order for the state of the\nblockchain to continue to build and move forward, all nodes in the network must agree and come to\nconsensus. It is the way that the nodes in a decentralized network are able to stay synced with each\nother. Without consensus for the decentralized network of nodes in a blockchain, there is no way to\nensure that the state one node believes is true will be shared by the other nodes. Consensus aims to\nprovide the ",(0,i.kt)("em",{parentName:"p"},"objective")," view of the state amid participants who each have their own ",(0,i.kt)("em",{parentName:"p"},"subjective"),"\nviews of the network. It is the process by which these nodes communicate and come to agreement, and\nare able to build new blocks."),(0,i.kt)("h2",{id:"what-are-pow-and-pos"},"What are PoW and PoS?"),(0,i.kt)("p",null,"Proof of Work (PoW) and Proof of Stake (PoS) have been inaccurately used as short hand to refer to\nconsensus mechanisms of blockchains, but that does not capture the full picture. PoW is the method\nfor agreeing on a block author and part of the fuller ",(0,i.kt)("a",{parentName:"p",href:"#nakamoto-consensus"},"Nakamoto consensus")," that\nalso encompasses a chain selection algorithm (longest chain rule in Bitcoin). Similarly, PoS is a\nset of rules for selecting the validator set and does not specify a chain selection rule or how a\nchain might reach finality. PoS algorithms have traditionally been paired with an algorithm for\ncoming to Byzantine agreement between nodes. For example, ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-comparisons-cosmos"},"Tendermint"),"\nis a practical Byzantine fault tolerant algorithm that uses PoS as its validator set selection\nmethod."),(0,i.kt)("h2",{id:"why-not-proof-of-work"},"Why not Proof of Work?"),(0,i.kt)("p",null,"Although simple and effective in coming to a decentralized consensus on the next block producer,\nproof of work with Nakamoto consensus consumes an incredible amount of energy, has no economic or\nprovable finality, and has no effective strategy in resisting cartels."),(0,i.kt)("h2",{id:"probabilistic-vs-provable-finality"},"Probabilistic vs. provable finality"),(0,i.kt)("p",null,"A pure Nakamoto consensus blockchain that runs PoW is only able to achieve the notion of\n",(0,i.kt)("em",{parentName:"p"},"probabilistic finality")," and reach ",(0,i.kt)("em",{parentName:"p"},"eventual consensus"),". Probabilistic finality means that under\nsome assumptions about the network and participants, if we see a few blocks building on a given\nblock, we can estimate the probability that it is final. Eventual consensus means that at some point\nin the future, all nodes will agree on the truthfulness of one set of data. This eventual consensus\nmay take a long time and will not be able to be determined how long it will take ahead of time.\nHowever, finality gadgets such as GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement)\nor Ethereum's Casper FFG (the Friendly Finality Gadget) are designed to give stronger and quicker\nguarantees on the finality of blocks - specifically, that they can never be reverted after some\nprocess of Byzantine agreements has taken place. The notion of irreversible consensus is known as\n",(0,i.kt)("em",{parentName:"p"},"provable finality.")),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf"},"GRANDPA paper"),", it is phrased\nin this way:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We say an oracle A in a protocol is ",(0,i.kt)("em",{parentName:"p"},"eventually consistent")," if it returns the same value to all\nparticipants after some unspecified time.")),(0,i.kt)("h2",{id:"what-is-grandpababe"},"What is GRANDPA/BABE?"),(0,i.kt)("h3",{id:"hybrid-consensus"},"Hybrid Consensus"),(0,i.kt)("p",null,"There are two protocols we use when we talk about the consensus protocol of Polkadot, GRANDPA and\nBABE (Blind Assignment for Blockchain Extension). We talk about both of these because Polkadot uses\nwhat is known as ",(0,i.kt)("em",{parentName:"p"},"hybrid consensus"),". Hybrid consensus splits up the finality gadget from the block\nproduction mechanism."),(0,i.kt)("p",null,'This is a way of getting the benefits of probabilistic finality (the ability to always produce new\nblocks) and provable finality (having a universal agreement on the canonical chain with no chance\nfor reversion) in Polkadot. It also avoids the corresponding drawbacks of each mechanism (the chance\nof unknowingly following the wrong fork in probabilistic finality, and a chance for "stalling" - not\nbeing able to produce new blocks - in provable finality). By combining these two mechanisms,\nPolkadot allows for blocks to be rapidly produced, and the slower finality mechanism to run in a\nseparate process to finalize blocks without risking slower transaction processing or stalling.'),(0,i.kt)("p",null,"Hybrid consensus has been proposed in the past. Notably, it was proposed (now defunct) as a step in\nEthereum's transition to proof of stake in ",(0,i.kt)("a",{parentName:"p",href:"http://eips.ethereum.org/EIPS/eip-1011"},"EIP 1011"),", which\nspecified ",(0,i.kt)("a",{parentName:"p",href:"#casper-ffg"},"Casper FFG"),"."),(0,i.kt)("h3",{id:"babe"},"BABE"),(0,i.kt)("p",null,"BABE (Blind Assignment for Blockchain Extension) is the block production mechanism that runs between\nthe validator nodes and determines the authors of new blocks. BABE is comparable as an algorithm to\nOuroboros Praos, with some key differences in chain selection rule and slot time adjustments. BABE\nassigns block production slots to validators according to stake and using the Polkadot\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-randomness"},"randomness cycle"),"."),(0,i.kt)("p",null,"Validators in Polkadot will participate in a lottery in every slot that will tell them whether or\nnot they are the block producer candidate for that slot. Slots are discrete units of time, nominally\n6 seconds in length. Because of this randomness mechanism, multiple validators could be candidates\nfor the same slot. Other times, a slot could be empty, resulting in inconsistent block time."),(0,i.kt)("h4",{id:"multiple-validators-per-slot"},"Multiple Validators per Slot"),(0,i.kt)("p",null,"When multiple validators are block producer candidates in a given slot, all will produce a block and\nbroadcast it to the network. At that point, it's a race. The validator whose block reaches most of\nthe network first wins. Depending on network topology and latency, both chains will continue to\nbuild in some capacity, until finalization kicks in and amputates a fork. See Fork Choice below for\nhow that works."),(0,i.kt)("h4",{id:"no-validators-in-slot"},"No Validators in Slot"),(0,i.kt)("p",null,"When no validators have rolled low enough in the randomness lottery to qualify for block production,\na slot can remain seemingly blockless. We avoid this by running a secondary, round-robin style\nvalidator selection algorithm in the background. The validators selected to produce blocks through\nthis algorithm always produce blocks, but these ",(0,i.kt)("em",{parentName:"p"},"secondary")," blocks are ignored if the same slot also\nproduces a primary block from a ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-randomness"},"VRF-selected")," validator. Thus, a slot can have\neither a ",(0,i.kt)("em",{parentName:"p"},"primary")," or a ",(0,i.kt)("em",{parentName:"p"},"secondary")," block, and no slots are ever skipped."),(0,i.kt)("p",null,"For more details on BABE, please see the\n",(0,i.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html"},"BABE paper"),"."),(0,i.kt)("h3",{id:"grandpa-finality-gadget"},"GRANDPA: Finality gadget"),(0,i.kt)("p",null,"GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement) is the finality gadget that is\nimplemented for the Polkadot Relay Chain."),(0,i.kt)("p",null,"It works in a partially synchronous network model as long as 2/3 of nodes are honest and can cope\nwith 1/5 Byzantine nodes in an asynchronous setting."),(0,i.kt)("p",null,"A notable distinction is that GRANDPA reaches agreements on chains rather than blocks, greatly\nspeeding up the finalization process, even after long-term network partitioning or other networking\nfailures."),(0,i.kt)("p",null,"In other words, as soon as more than 2/3 of validators attest to a chain containing a certain block,\nall blocks leading up to that one are finalized at once."),(0,i.kt)("h4",{id:"protocol"},"Protocol"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf"},"the GRANDPA paper"),"\nfor a full description of the protocol."),(0,i.kt)("h4",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"The\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/frame/grandpa/src/lib.rs"},"Substrate implementation of GRANDPA"),"\nis part of Substrate Frame."),(0,i.kt)("h3",{id:"fork-choice"},"Fork Choice"),(0,i.kt)("p",null,"Bringing BABE and GRANDPA together, the fork choice of Polkadot becomes clear. BABE must always\nbuild on the chain that has been finalized by GRANDPA. When there are forks after the finalized\nhead, BABE provides probabilistic finality by building on the chain with the most primary blocks."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Best chain choice",src:n(1665).Z})),(0,i.kt)("p",null,'In the above image, the black blocks are finalized, and the yellow blocks are not. Blocks marked\nwith a "1" are primary blocks; those marked with a "2" are secondary blocks. Even though the topmost\nchain is the longest chain on the latest finalized block, it does not qualify because it has fewer\nprimaries at the time of evaluation than the one below it.'),(0,i.kt)("h2",{id:"comparisons"},"Comparisons"),(0,i.kt)("h3",{id:"nakamoto-consensus"},"Nakamoto consensus"),(0,i.kt)("p",null,"Nakamoto consensus consists of the longest chain rule using proof of work as its sybil resistance\nmechanism and leader election."),(0,i.kt)("p",null,"Nakamoto consensus only gives us probabilistic finality. Probabilistic finality states that a block\nin the past is only as safe as the number of confirmations it has, or the number of blocks that have\nbeen built on top of it. As more blocks are built on top of a specific block in a Proof of Work\nchain, more computational work has been expended behind this particular chain. However, it does not\nguarantee that the chain containing the block will always remain the agreed-upon chain, since an\nactor with unlimited resources could potentially build a competing chain and expend enough\ncomputational resources to create a chain that did not contain a specific block. In such a\nsituation, the longest chain rule employed in Bitcoin and other proof of work chains would move to\nthis new chain as the canonical one."),(0,i.kt)("h3",{id:"pbft--tendermint"},"PBFT / Tendermint"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-comparisons-cosmos#consensus"},"relevant section")," in the Cosmos comparison\narticle."),(0,i.kt)("h3",{id:"casper-ffg"},"Casper FFG"),(0,i.kt)("p",null,"The two main differences between GRANDPA and Casper FFG are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in GRANDPA, different voters can cast votes simultaneously for blocks at different heights"),(0,i.kt)("li",{parentName:"ul"},"GRANDPA only depends on finalized blocks to affect the fork-choice rule of the underlying block\nproduction mechanism")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html"},"BABE paper")," - The\nacademic description of the BABE protocol."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf"},"GRANDPA paper")," - The academic\ndescription of the GRANDPA finality gadget. Contains formal proofs of the algorithm."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/finality-grandpa"},"Rust implementation")," - The reference\nimplementation and the accompanying\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/master/frame/grandpa/src/lib.rs"},"Substrate pallet"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/polkadot-block-production"},"Block Production and Finalization in Polkadot")," -\nAn explanation of how BABE and GRANDPA work together to produce and finalize blocks on Kusama,\nwith Bill Laboon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=1CuTSluL7v4&t=4s"},"Block Production and Finalization in Polkadot: Understanding the BABE and GRANDPA Protocols")," -\nAn academic talk by Bill Laboon, given at MIT Cryptoeconomic Systems 2020, describing Polkadot's\nhybrid consensus model in-depth.")))}p.isMDXComponent=!0},1665:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/best_chain-52a3da00fb2f804a198c73690fcedc4f.png"}}]);