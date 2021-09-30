(self.webpackChunk=self.webpackChunk||[]).push([[3262],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>h,kt:()=>u});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return t?n.createElement(m,i(i({ref:a},h),{},{components:t})):n.createElement(m,i({ref:a},h))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34204:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>h,default:()=>d});var n=t(22122),o=t(19756),r=(t(67294),t(3905)),i=["components"],s={id:"build-parachains",title:"Parachain Development",sidebar_label:"Parachain Development",description:"An extensive guide on what it means to become a Parachain and the steps to do so.",slug:"../build-pdk"},l=void 0,c={unversionedId:"build/build-parachains",id:"build/build-parachains",isDocsHomePage:!1,title:"Parachain Development",description:"An extensive guide on what it means to become a Parachain and the steps to do so.",source:"@site/../docs/build/build-parachains.md",sourceDirName:"build",slug:"/build-pdk",permalink:"/docs/build-pdk",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-parachains.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1633032772,formattedLastUpdatedAt:"9/30/2021",frontMatter:{id:"build-parachains",title:"Parachain Development",sidebar_label:"Parachain Development",description:"An extensive guide on what it means to become a Parachain and the steps to do so.",slug:"../build-pdk"},sidebar:"docs",previous:{title:"Parachain Implementer's Guide",permalink:"/docs/learn-implementers-guide"},next:{title:"Decentralised Storage",permalink:"/docs/build-storage"}},h=[{value:"Why Create a Parachain?",id:"why-create-a-parachain",children:[{value:"Benefits of Deploying on Polkadot",id:"benefits-of-deploying-on-polkadot",children:[]}]},{value:"Things to Consider",id:"things-to-consider",children:[{value:"Para-Economics",id:"para-economics",children:[]},{value:"Para-objects",id:"para-objects",children:[]},{value:"Migration",id:"migration",children:[]}]},{value:"Parachain Development Kit (PDK)",id:"parachain-development-kit-pdk",children:[{value:"Key Components",id:"key-components",children:[]},{value:"What PDKs Exist?",id:"what-pdks-exist",children:[]},{value:"Cumulus",id:"cumulus",children:[]}]},{value:"Testing a Parachain: Rococo Testnet",id:"testing-a-parachain-rococo-testnet",children:[{value:"What Parachains are on Rococo Now?",id:"what-parachains-are-on-rococo-now",children:[]},{value:"Obtaining ROC",id:"obtaining-roc",children:[]},{value:"Build and Register a Rococo Parathread",id:"build-and-register-a-rococo-parathread",children:[]},{value:"How to Make Cross Chain Transfers",id:"how-to-make-cross-chain-transfers",children:[]},{value:"How to Connect to a Parachain",id:"how-to-connect-to-a-parachain",children:[]},{value:"Parachain Playground",id:"parachain-playground",children:[]}]},{value:"Deploy a Parachain or Parathread on Polkadot",id:"deploy-a-parachain-or-parathread-on-polkadot",children:[{value:"Parachain",id:"parachain",children:[]},{value:"Parathread",id:"parathread",children:[]}]},{value:"Future PDKs",id:"future-pdks",children:[]}],p={toc:h};function d(e){var a=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section will cover the motivation to build a parachain or parathread, the tools available\nto facilitate this, the steps to test, and finally, how to launch your network on Polkadot."),(0,r.kt)("h2",{id:"why-create-a-parachain"},"Why Create a Parachain?"),(0,r.kt)("p",null,"Parachains are connected to and secured by the Relay Chain. They benefit from the ",(0,r.kt)("em",{parentName:"p"},"pooled security"),",\n",(0,r.kt)("em",{parentName:"p"},"thought-through governance"),", and overall ",(0,r.kt)("em",{parentName:"p"},"scalability")," of the heterogeneous sharding approach of the network. Creating a parachain can be seen as creating a ",(0,r.kt)("strong",{parentName:"p"},"Layer-1 blockchain"),", which has its own logic and runs in parallel within the Polkadot ecosystem."),(0,r.kt)("p",null,"Developers can focus on creating state-of-the-art chains that take advantage of Polkadot's next-generation\napproach. Some examples of what a parachain could be are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DeFi (Decentralized Finance) Applications"),(0,r.kt)("li",{parentName:"ul"},"Digital Wallets"),(0,r.kt)("li",{parentName:"ul"},"IoT (Internet of Things) Applications"),(0,r.kt)("li",{parentName:"ul"},"Gaming"),(0,r.kt)("li",{parentName:"ul"},"Web 3.0 Infrastructure")),(0,r.kt)("p",null,"and more."),(0,r.kt)("p",null,"Polkadot aims to be a bet against so-called ",(0,r.kt)("em",{parentName:"p"},"chain-maximalism"),", where the success of Polkadot's\nheterogeneous multi-chain approach will play a key part in the overall advancement of Web 3.0 and\ndecentralized systems. As a result, Polkadot\u2019s parachain model was designed with the belief that the\ninternet of the future will have many different types of blockchains working together."),(0,r.kt)("h3",{id:"benefits-of-deploying-on-polkadot"},"Benefits of Deploying on Polkadot"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The parachain model attempts to alleviate five key ",(0,r.kt)("em",{parentName:"p"},"build")," failures of present technology stacks,\nas described in the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/PolkaDotPaper.pdf"},"Polkadot Whitepaper"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scalability"),": How much is spent on resources and will the network be subject to bottlenecks?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Isolatability"),": Are the needs of many accounted for under the same framework?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developability"),": Is the system tooling, system support, and overall system integrity dependable?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Governance"),": Can the network remain flexible to evolve and adapt over time? Can decisions be\nmade with sufficient inclusivity, legitimacy, and transparency to provide effective leadership of a\ndecentralised system?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Applicability"),": Does the technology address a burning need on its own? Is other \u201cmiddleware\u201d\nrequired to bridge the gap to actual applications?"))),(0,r.kt)("h4",{id:"pooled-security"},"Pooled Security"),(0,r.kt)("p",null,"Parachains can ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-security"},"lease the security")," of the Polkadot network by bonding\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-DOT"},"DOT")," for a parachain slot. This means that the social costs of building a community\naround your project and convincing validators to participate in your network security are reduced.\nPolkadot has strong security, and decentralized application projects wishing to benefit from this\nsecurity would want to become a parachain to share in that pooled security. For more information\non the mechanic of leasing a parachain slot through a ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"candle auction"),"."),(0,r.kt)("h4",{id:"interoperability"},"Interoperability"),(0,r.kt)("p",null,"Any decentralized application or chain that wants to enable trustless messaging to other parachains\nalready connected to Polkadot would want to become a parachain. Interoperability between sovereign\nchains involves certain constraints and complex protocols to enable across a wide breadth of chains.\nWith Polkadot, you will get this feature out of the box if you build your application as a\nparachain. The ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-crosschain"},"XCM format")," allows any parachains to communicate by\npassing messages between them. Furthermore, as bridges to other chains are connected (such as those\nto Bitcoin or Ethereum) Polkadot's parachains will be able to communicate with these as well."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: Despite the benefits of becoming a parachain, developers should be conscious of the challenges in\nbecoming a parachain, and whether building a blockchain with an end goal of becoming a\nparachain is a viable one for their project.")),(0,r.kt)("p",null,"On Polkadot, you are able to put your blockchain\u2019s latest block head onto the relay chain.\nAs a parachain, the blocks you submit are verified by validators with a Wasm runtime, which can\nbe stored on the relay chain. You also get the ability to communicate with other parachains using the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-crosschain"},"XCM")," format: an abstract message passing system.\nMessage passing is tracked on the relay chain - as such, you can prove the delivery of messages and\nfacilitate trustless interactions."),(0,r.kt)("p",null,"As you can place your blockchain\u2019s latest block head, you can achieve deterministic finalization\nfor your chain. The hard part of reaching finalization for blockchains tends to be the consensus, where,\nin the parachain model, a blockchain can offload consensus to the overall shared network, and focus on\nblock production. Since the validators have the Wasm runtime for all the parachains, your parachain\nshares the security of the validator pool with everyone on the relay chain."),(0,r.kt)("p",null,"Any validator in the validator pool can help validate your blockchain."),(0,r.kt)("h1",{id:"creating-a-parachain"},"Creating a Parachain"),(0,r.kt)("h2",{id:"things-to-consider"},"Things to Consider"),(0,r.kt)("h3",{id:"para-economics"},"Para-Economics"),(0,r.kt)("p",null,"Parachains can be seen as autonomous agents; networks that act as decentralised digital nation states.\nParachains have their own communities, rules, economies, governance, treasuries, and relationships\nwith external chains. As a result, the economic policies within parachain ecosystems are subject to the\ndevelopers and overall community of that parachain ecosystem; there isn't necessarily a go-to economic\nmodel a parachain should follow."),(0,r.kt)("p",null,"Nonetheless, ",(0,r.kt)("em",{parentName:"p"},"becoming a parachain")," has an opportunity cost associated. Ideally, you can increase the value\nof the network by participating in the parachain selection process, and this should serve as a good return\non investment."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"Collators")," are incentivized with a native token payout from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transaction fees collected"),(0,r.kt)("li",{parentName:"ul"},"Parathread token sponsorship",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Blocks are naturally produced when a parathread bid is less than the native token payout.")))),(0,r.kt)("h3",{id:"para-objects"},"Para-objects"),(0,r.kt)("p",null,"The Polkadot network will encourage the connection and interoperability between different ",(0,r.kt)("em",{parentName:"p"},"para-objects"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Here, para-objects is referring to objects on the network that operate in parallel.")),(0,r.kt)("p",null,"These could be in the form of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System level chains (permanent chains):\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-auction"},"leased slots"),",\n",(0,r.kt)("a",{parentName:"li",href:"learn-parathreads.md"},"parathread pool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-bridges"},"Bridge")," Hubs"),(0,r.kt)("li",{parentName:"ul"},"Nested Relay Chains: ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-launch##polkadot2.0"},"Polkadot 2.0"))),(0,r.kt)("h3",{id:"migration"},"Migration"),(0,r.kt)("p",null,"Projects that are already functioning as solochains or in isolated environments may be interested\nin migrating onto Polkadot as a para-object. While the parachain model has its benefits, it may\nnot be the go-to strategy for some projects."),(0,r.kt)("p",null,"As a path for migration onto Polkadot, it may be more viable to migrate to one of the\nchains in one of the reserved slots."),(0,r.kt)("p",null,"For instance, there are currently options for smart contract deployment on Kusama through the\nnetworks that have secured a slot in the latest slot auctions."),(0,r.kt)("h2",{id:"parachain-development-kit-pdk"},"Parachain Development Kit (PDK)"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"PDK")," is a set of tools that allows developers to easily create a parachain. In\npractice, the PDK will consist of the following key components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"State transition function"),": a way for your application to move from one state to another state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Collator node"),": - a type of peer-to-peer node in the Polkadot network with certain\nresponsibilities regarding parachains.")),(0,r.kt)("h3",{id:"key-components"},"Key Components"),(0,r.kt)("p",null,"The state transition function (STF) can be an abstract way for an application to go from one state\nto another state. The only constraint that Polkadot places on this STF is that it must be easily\nverifiable -- usually through what we call a ",(0,r.kt)("em",{parentName:"p"},"witness")," or ",(0,r.kt)("em",{parentName:"p"},"proof"),". It must be so because the Relay\nChain validators will need to check that each state it receives from the collator node is correct\nwithout actually running through the entire computation. Some examples of these proofs include the\nProof-of-Validity blocks or zk-SNARKs, which require less computational resources to verify than\nthey do to generate. The verification asymmetry in the proof generation of the STF is one of the\nintegral insights that allows Polkadot to scale while keeping high-security guarantees."),(0,r.kt)("p",null,"A collator node is one of the types of network maintainers in the Polkadot protocol. They are\nresponsible for ",(0,r.kt)("strong",{parentName:"p"},"keeping availability")," of the state of the parachain and the new states returned\nfrom the iteration of the state transition function. They must remain online to keep track of\nthe state and also of the XCMP messages that it will route between itself and other parachains.\nCollator nodes are responsible for passing the succinct proofs to the relay chain's validators and\ntracking the latest blocks from the relay chain. In essence, a collator node also acts as a light\nclient for the relay chain. For more on collator nodes, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"collator page"),"."),(0,r.kt)("h3",{id:"what-pdks-exist"},"What PDKs Exist?"),(0,r.kt)("p",null,"Currently, the only PDK is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Parity Substrate")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus"),". ",(0,r.kt)("strong",{parentName:"p"},"Substrate")," is a blockchain framework that provides\nthe basic building blocks of a blockchain (things like the networking layer, consensus, a Wasm\ninterpreter) while providing an intuitive way to construct your runtime. Substrate is made to ease the\nprocess of creating a new chain, but it does not provide support for Polkadot compatibility\ndirectly. For this reason, ",(0,r.kt)("inlineCode",{parentName:"p"},"Cumulus"),", an added ",(0,r.kt)("em",{parentName:"p"},"library")," contains all of the Polkadot compatibility\nglue code. Cumulus is still in development, but the idea is that it should be simple to take a\nSubstrate chain and add the parachain code by importing the crates and adding a single line of code.\nKeep up-to-date with the latest Cumulus developments from the ",(0,r.kt)("a",{parentName:"p",href:"###cumulus"},"Cumulus section"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Substrate and Cumulus provide a PDK from the abstraction of the blockchain format, but it is ",(0,r.kt)("strong",{parentName:"p"},"not\nnecessary")," that a parachain even needs to be a blockchain. For example, a parachain just needs to\nsatisfy the two constraints listed above: ",(0,r.kt)("em",{parentName:"p"},"state transition function")," and ",(0,r.kt)("em",{parentName:"p"},"collator node"),"."),(0,r.kt)("p",{parentName:"blockquote"},"Everything else is up to the implementer of the PDK.")),(0,r.kt)("p",null,"Interested in building a PDK? See the ",(0,r.kt)("a",{parentName:"p",href:"##future-pdks"},"future PDKs")," section for details."),(0,r.kt)("h3",{id:"cumulus"},"Cumulus"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Cumulus clouds are shaped sort of like dots; together they form an intricate system;\nbeautiful and functional."')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus")," is an extension to Substrate that makes it easy to\nmake any Substrate-built runtime into a Polkadot-compatible parachain."),(0,r.kt)("p",null,"Cumulus Consensus is a consensus engine for Substrate that follows a Polkadot relay chain (i.e.,\nparachains). This runs a Polkadot node internally, and dictates to the client and synchronization\nalgorithms which chain to follow, finalize, and treat as correct."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/blob/master/docs/overview.md"},"Cumulus overview")," for a\nmore detailed description of Cumulus, and for those with experience in Substrate, give the\n",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/cumulus-workshop/"},"Cumulus Workshop")," a try."),(0,r.kt)("h2",{id:"testing-a-parachain-rococo-testnet"},"Testing a Parachain: Rococo Testnet"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus#rococo-crown"},"Rococo")," is a Polkadot testnet built for testing\nparachains. Rococo utilizes Cumulus and HRMP (Horizontal Relay-routed Message Passing) in order to\nsend transfers and messages between parachains and a relay chain. Every message is sent to the\nrelay chain, then from the relay chain to the desired parachain. Rococo currently runs four test\nsystem parachains (Statemint, Tick, Trick, and Track), as well as several externally developed parachains."),(0,r.kt)("h3",{id:"what-parachains-are-on-rococo-now"},"What Parachains are on Rococo Now?"),(0,r.kt)("p",null,"You can see the list of included parachains\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains"},"here"),". A list of\nproposed parachains is available\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains/proposals"},"here"),"."),(0,r.kt)("h3",{id:"obtaining-roc"},"Obtaining ROC"),(0,r.kt)("p",null,"ROC are available in the ",(0,r.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/#rococo-faucet:matrix.org"},"Rococo Faucet"),"\nchannel on Matrix. To receive ROC tokens, use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"!drip YOUR_ROCOCO_ADDRESS\n")),(0,r.kt)("h3",{id:"build-and-register-a-rococo-parathread"},"Build and Register a Rococo Parathread"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus#rococo"},"Cumulus")," is set of tools for writing Substrate-based\nparachains."),(0,r.kt)("p",null,"If you are interested in running and launching your own parathread or parachain, Parity Technologies\nhas created a ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/cumulus-workshop/"},"cumulus parachain workshop")," to show you how.\nGet stuck or need support along the way? Join the\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#parachain-technical:matrix.parity.io"},"Parachain Technical matrix chat channel"),"\nand connect with other builders there."),(0,r.kt)("h3",{id:"how-to-make-cross-chain-transfers"},"How to Make Cross Chain Transfers"),(0,r.kt)("p",null,'To send a transfer between parachains, navigate to "Accounts" > "Transfer". From here, you\'ll need\nto select the parachain node that you are running. Next, enter in the amount that you\'d like to send\nto another parachain. Be sure to select the correct parachain you\'d like to send an amount to. Once\nyou\'ve hit the "Submit" button, you should see a green notification, indicating a successful\ntransfer.'),(0,r.kt)("h4",{id:"downward-transfers"},"Downward Transfers"),(0,r.kt)("p",null,"Downward transfers are when an account on the Relay Chain sends a transfer to their account on a\ndifferent parachain. This type of transfer uses a depository and mint model, meaning that when the\nDOT leave the sender's account on the Relay Chain and are transferred into an account on a\nparachain, the parachain mints a corresponding amount of tokens on the parachain."),(0,r.kt)("p",null,'For example, we can send tokens from Alice\'s account on the Relay Chain to her account on\nparachain 200. To do so, we will need to head to the "Network" > "Parachains" tab and click on the\n"Transfer to chain" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo downward transfer",src:t(7731).Z})),(0,r.kt)("p",null,"Notice here, that we can select which parachain to send the funds to, specify the amount to be sent,\nand add any comments or a memo for the transfer."),(0,r.kt)("h4",{id:"upward-transfers"},"Upward Transfers"),(0,r.kt)("p",null,"Upward transfers occur ",(0,r.kt)("em",{parentName:"p"},"from")," a parachain ",(0,r.kt)("em",{parentName:"p"},"to"),' an account on the Relay Chain. To proceed with this\nkind of transfer, we need to be connected to a parachain node on the network and be on the\n"Network" > "Parachains" tab. Click on the "Transfer to chain" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo upward transfer",src:t(83115).Z})),(0,r.kt)("p",null,"Note that the toggle should be set to off, ensuring that the funds go to the Relay Chain and not\nanother parachain."),(0,r.kt)("h4",{id:"lateral-transfers"},"Lateral Transfers"),(0,r.kt)("p",null,"Lateral transfers are only possible with at least two different registered parachains. In true\nXCMP, lateral transfers would allow for messages to be sent directly from one parachain to another.\nHowever, this is not yet implemented, so the Relay Chain is helping us deliver messages for the time\nbeing. Lateral transfers work through the depository model, which means that in order to transfer\ntokens from chain 200 to chain 300, tokens must already be owned by chain 200 deposited on\nchain 300. Lateral transfers are called HRMP, Horizontal Relay-Chain Message Passing."),(0,r.kt)("p",null,"Before we can send funds from one parachain to another, we must ensure that the chain's\naccount on the recipient chain has some funds in it. In this example, Alice will be sending some\nfunds from her account on parachain 200 to her account on parachain 300."),(0,r.kt)("p",null,"We can get that parachain account address, from our parachain 300's terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2020-08-26 14:46:34 Parachain Account: 5Ec4AhNv5ArwGxtngtW8qcVgzpCAu8nokvnh6vhtvvFkJtpq\n")),(0,r.kt)("p",null,"From Alice's account on the Relay Chain, she can send some amount to parachain 200's\ndepository."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo lateral transfer",src:t(92871).Z})),(0,r.kt)("p",null,"Alice is now able to send from her account on parachain 200 to her account on parachain 300."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rococo lateral transfer part 2",src:t(32671).Z})),(0,r.kt)("h3",{id:"how-to-connect-to-a-parachain"},"How to Connect to a Parachain"),(0,r.kt)("p",null,"If you would like to connect to a parachain via ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot-JS Apps"),',\nyou may do so by clicking on the network selection at the top left-hand corner of the navigation and\nselecting any parachain of choice. For the purpose of these following examples, we will be using the\nRococo testnet "Custom Node" underneath "Development", following the\n',(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/cumulus-workshop/"},"parachain workshop"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"parachains on polkadotjs",src:t(7052).Z})),(0,r.kt)("h3",{id:"parachain-playground"},"Parachain Playground"),(0,r.kt)("p",null,"You can also take advanatge of the account functions offered on PolkadotJS Apps\nto test the entire Parachain onboarding process (e.g. crowdloans, auctions, registrations)."),(0,r.kt)("p",null,"Start a local node on ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-networks###westend-test-network"},"Westend"),"\nby running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot --chain=westend-dev --alice\n")),(0,r.kt)("p",null,"Then, connect your local node with PolkadotJS Apps."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"parachains playground",src:t(35649).Z})),(0,r.kt)("h2",{id:"deploy-a-parachain-or-parathread-on-polkadot"},"Deploy a Parachain or Parathread on Polkadot"),(0,r.kt)("p",null,"Substrate-based chains, including the Polkadot and Kusama relay chains, use an\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)"},"SS58 encoding")," for\ntheir address formats. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/ss58-registry.json"},"This page"),"\nserves as the canonical registry for teams to see which chain corresponds to a given prefix, and which prefixes are available."),(0,r.kt)("h3",{id:"parachain"},"Parachain"),(0,r.kt)("p",null,"To include your parachain into the Polkadot network, you will need to acquire a parachain\nslot."),(0,r.kt)("p",null,"Parachain slots will be sold in open auctions, the mechanics of which can be found on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"parachain auction"),"\n"," page of the wiki."),(0,r.kt)("h3",{id:"parathread"},"Parathread"),(0,r.kt)("p",null,"Parathreads will not require a parachain slot, so you will not need to engage in the candle auction\nmechanism. Instead, you will be able to register your parathread code to a relay chain for a fee\nand from then be able to start participating in the per-block auctions for inclusion of your state\ntransition into a relay chain."),(0,r.kt)("p",null,"For more information on how parathread per-block auctions work, see the more detailed\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"parathread"),"\n"," page."),(0,r.kt)("h2",{id:"future-pdks"},"Future PDKs"),(0,r.kt)("p",null,"One example of a PDK W3F is interested in supporting is a\n",(0,r.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/roll-up-roll-back-snark-side-chain-17000-tps/3675"},"roll-up")," kit that allowed\ndevelopers to create SNARK-based parachains. If we review the roll-up write-up, we see that the\nsystem uses two roles: users that update ",(0,r.kt)("strong",{parentName:"p"},"state")," and an operator that ",(0,r.kt)("strong",{parentName:"p"},"aggregates the state\nupdates")," into a single on-chain update. It should be straightforward to see how we can translate\nthis to the parachain terms. The state transition function for a roll-up-like parachain would be\nupdating the state (in practice, most likely a Merkle tree, which would be easily verifiable) from\nthe user inputs. The operator would act as the collator node, which would aggregate the state and\ncreate the zk-SNARK proof that it would hand to a relay chain's validators for verification."),(0,r.kt)("p",null,"If you or your team are interested in developing a PDK feel free to open an issue on the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Web3-collaboration"},"W3F collaboration repository")," for comment.\nThere may be grants available for this type of work."))}d.isMDXComponent=!0},35649:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/parachain-playground-7873519d5357d27cd254133f7c6ae79f.png"},7052:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/polkadotjs_network_parachains-7056d93de2ce994a07c23cd229de34e6.png"},7731:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-downward-transfer-b5c167bf833760e06130c7ffb91006bc.png"},92871:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-lateral-transfer-312054a2d9d0d676de02fb20a170ed64.png"},32671:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-lateral-transfer2-9d6fded610bdc51b7140adcae0c27be6.png"},83115:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-upward-transfer-d6b7d116c2a96a5a18cebe77b40620a7.png"}}]);