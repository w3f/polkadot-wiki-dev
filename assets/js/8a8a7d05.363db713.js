(self.webpackChunk=self.webpackChunk||[]).push([[3262],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>h,kt:()=>d});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return t?n.createElement(m,i(i({ref:a},h),{},{components:t})):n.createElement(m,i({ref:a},h))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34204:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>h,default:()=>u});var n=t(22122),o=t(19756),r=(t(67294),t(3905)),i=["components"],s={id:"build-parachains",title:"Parachain Development",sidebar_label:"Parachain Development",slug:"../build-parachains"},l=void 0,c={unversionedId:"build/build-parachains",id:"build/build-parachains",isDocsHomePage:!1,title:"Parachain Development",description:"This section will cover the motivation to build a parachian or parathread, the tools available",source:"@site/../docs/build/build-parachains.md",sourceDirName:"build",slug:"/build-parachains",permalink:"/docs/build-parachains",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-parachains.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1631476629,formattedLastUpdatedAt:"9/12/2021",frontMatter:{id:"build-parachains",title:"Parachain Development",sidebar_label:"Parachain Development",slug:"../build-parachains"}},h=[{value:"Why Create a Parachain?",id:"why-create-a-parachain",children:[]},{value:"What is a Parachain Development Kit (PDK)?",id:"what-is-a-parachain-development-kit-pdk",children:[]},{value:"What PDKs exist?",id:"what-pdks-exist",children:[{value:"Cumulus",id:"cumulus",children:[]}]},{value:"Parachain Testing: Rococo",id:"parachain-testing-rococo",children:[{value:"What Parachains are on Rococo Now?",id:"what-parachains-are-on-rococo-now",children:[]},{value:"Obtaining ROC",id:"obtaining-roc",children:[]},{value:"Build and Register a Rococo Parathread",id:"build-and-register-a-rococo-parathread",children:[]},{value:"How to connect to a Parachain",id:"how-to-connect-to-a-parachain",children:[]}]},{value:"Deploy your parachain or parathread on Polkadot",id:"deploy-your-parachain-or-parathread-on-polkadot",children:[{value:"Parachain",id:"parachain",children:[]},{value:"Parathread",id:"parathread",children:[]}]},{value:"Future PDKs",id:"future-pdks",children:[]}],p={toc:h};function u(e){var a=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section will cover the motivation to build a parachian or parathread, the tools available\nto facilitate this, and the steps to test, and finally launch your network on Polkadot!"),(0,r.kt)("h2",{id:"why-create-a-parachain"},"Why Create a Parachain?"),(0,r.kt)("p",null,"Parachains can ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-security"},"lease the security")," of the Polkadot network by bonding\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-DOT"},"DOT")," for a parachain slot. This means that the social costs of building a community\naround your project and convincing validators to participate in your network security are reduced.\nPolkadot has strong security, and decentralized application projects wishing to benefit from this\nsecurity would want to become a parachain to share in that pooled security. For more information\non the mechanic of leasing a parachain slot through a candle auction see ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"here"),"."),(0,r.kt)("p",null,"Any decentralized application or chain that wants to enable trustless messaging to other parachains\nalready connected to Polkadot would want to become a parachain. Interoperability between sovereign\nchains involves certain constraints and complex protocols to enable across a wide breadth of chains.\nWith Polkadot, you will get this feature out of the box if your build your application as a\nparachain. The ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-crosschain"},"XCMP protocol")," allows any parachains to communicate by\npassing messages between them. Furthermore, as bridges to other chains are connected (such as those\nto Bitcoin or Ethereum) Polkadot's parachains will be able to communicate with these as well!"),(0,r.kt)("h2",{id:"what-is-a-parachain-development-kit-pdk"},"What is a Parachain Development Kit (PDK)?"),(0,r.kt)("p",null,"A PDK is a set of tools that allows developers to easily create a parachain. In\npractice this means that the PDK will consist of a couple key components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"State transition function")," - a way for your application to move from one state to another state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Collator node")," - a type of peer-to-peer node in the Polkadot network with certain\nresponsibilities in regard to parachains.")),(0,r.kt)("p",null,"The state transition function (STF) can be any abstract way for an application to go from one state\nto another state. The only constraint that Polkadot places on this STF is that it must be easily\nverifiable -- usually though what we call a ",(0,r.kt)("em",{parentName:"p"},"witness")," or ",(0,r.kt)("em",{parentName:"p"},"proof"),". It must be so because the Relay\nChain validators will need to check that each state it receives from the collator node is correct\nwithout actually running through the entire computation. Some examples of these proofs include the\nProof-of-Validity blocks or zk-SNARKs, which require less computational resources to verify than\nthey do to generate. The verification asymmetry in proof generation of the STF is one of the\nintegral insights that allows Polkadot to scale while keeping high security guarantees."),(0,r.kt)("p",null,"A collator node is one of the types of network maintainers in the Polkadot protocol. They are\nresponsible for ",(0,r.kt)("strong",{parentName:"p"},"keeping availability")," of the state of the parachain and the new states returned\nfrom iteration of the state transition function. They must remain online in order to keep track of\nthe state and also of the XCMP messages that it will route between itself and other parachains.\nCollator nodes are responsible for passing the succinct proofs to the relay chain's validators, and\ntracking the latest blocks from the relay chain. In essence, a collator node also acts as a light\nclient for the relay chain. For more on collator nodes see ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"here"),"."),(0,r.kt)("h2",{id:"what-pdks-exist"},"What PDKs exist?"),(0,r.kt)("p",null,"Currently the only PDK is Parity ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus"),". Substrate is a blockchain framework that provides\nthe basic building blocks of a blockchain (things like the networking layer, consensus, a Wasm\ninterpreter) and provides an intuitive way to construct your runtime. Substrate is made to ease the\nprocess of creating a new chain, but it does not provide support for Polkadot compatibility\ndirectly. For this reason, Cumulus, an added library contains all of the Polkadot compatibility\nglue code. Cumulus is still in development, but the idea is that it should be simple to take a\nSubstrate chain and add the parachain code by importing the crates and adding a single line of code."),(0,r.kt)("p",null,"Substrate and Cumulus provide a PDK from the abstraction of the blockchain format, but it is not\nnecessary that a parachain even needs to be a blockchain. For example, a parachain just needs to\nsatisfy the two constraints listed above: ",(0,r.kt)("em",{parentName:"p"},"state transition function")," and ",(0,r.kt)("em",{parentName:"p"},"collator node"),".\nEverything else is up to the implementer of the PDK."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Interested in building a PDK? See the ",(0,r.kt)("a",{parentName:"p",href:"#future-pdks"},"future PDKs")," section for details!")),(0,r.kt)("h3",{id:"cumulus"},"Cumulus"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Cumulus clouds are shaped sort of like dots; together they form a system that is intricate,\nbeautiful and functional."')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus")," is an extension to Substrate that makes it easy to\nmake any Substrate built runtime into a Polkadot-compatible parachain."),(0,r.kt)("p",null,"Cumulus Consensus is a consensus engine for Substrate that follows a Polkadot relay chain (i.e.,\nparachains). This runs a Polkadot node internally, and dictate to the client and synchronization\nalgorithms which chain to follow, finalize, and treat as correct."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/blob/master/docs/overview.md"},"Cumulus overview")," for a\nmore detailed description of Cumulus, and for those with experience in Substrate, give the\n",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/cumulus-workshop/"},"Cumulus Workshop")," a go!"),(0,r.kt)("h2",{id:"parachain-testing-rococo"},"Parachain Testing: Rococo"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus#rococo-crown"},"Rococo")," is a Polkadot testnet built for testing\nparachains. Rococo utilizes Cumulus and HRMP (Horizontal Relay-routed Message Passing) in order to\nsend transfers and messages between parachains and a relay chain. Every message is sent to the\nrelay chain, then from the relay chain to the desired parachain. Rococo currently runs four test\nsystem parachains (Statemint, Tick, Trick, and Track), as well as several externally developed parachains."),(0,r.kt)("h3",{id:"what-parachains-are-on-rococo-now"},"What Parachains are on Rococo Now?"),(0,r.kt)("p",null,"You can see the list of included parachains\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains"},"here"),". A list of\nproposed parachains is available\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains/proposals"},"here"),"."),(0,r.kt)("h3",{id:"obtaining-roc"},"Obtaining ROC"),(0,r.kt)("p",null,"ROC are available in the ",(0,r.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/#rococo-faucet:matrix.org"},"Rococo Faucet"),"\nchannel on Matrix. To receive ROC tokens, use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"!drip YOUR_ROCOCO_ADDRESS\n")),(0,r.kt)("h3",{id:"build-and-register-a-rococo-parathread"},"Build and Register a Rococo Parathread"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus#rococo"},"Cumulus")," is set of tools for writing Substrate-based\nparachains."),(0,r.kt)("p",null,"If you are interested in running and launching your own parathread or parachain, Parity Technologies\nhas created a ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/cumulus-workshop/"},"cumulus parachain workshop")," to show you how.\nGet stuck or need support along the way? Join the\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#parachain-technical:matrix.parity.io"},"Parachain Technical matrix chat channel"),"\nand connect with other builders there."),(0,r.kt)("h3",{id:"how-to-connect-to-a-parachain"},"How to connect to a Parachain"),(0,r.kt)("p",null,"If you would like to connect to a parachain via ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot-JS Apps"),',\nyou may do so by clicking on the network selection at the top left hand corner of the navigation and\nselecting any parachain of choice. For the purpose of these following examples, we will be using the\nRococo testnet "Custom Node" underneath "Development", following the\n',(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/cumulus-workshop/"},"parachain workshop"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"parachains on polkadotjs",src:t(7052).Z})),(0,r.kt)("h2",{id:"deploy-your-parachain-or-parathread-on-polkadot"},"Deploy your parachain or parathread on Polkadot"),(0,r.kt)("p",null,"Substrate-based chains, including the Polkadot and Kusama relay chains, use an\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)"},"SS58 encoding")," for\ntheir address formats. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/ss58-registry.json"},"This page"),"\nserves as the canonical registry for teams to see which chain corresponds to a given prefix, and which prefixes are availabe."),(0,r.kt)("h3",{id:"parachain"},"Parachain"),(0,r.kt)("p",null,"In order to include your parachain into the Polkadot network, you will need to acquire a parachain\nslot."),(0,r.kt)("p",null,"Parachain slots will be sold in open auctions, the mechanics of which can be found on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"parachain auction"),"\n"," page of the wiki."),(0,r.kt)("h3",{id:"parathread"},"Parathread"),(0,r.kt)("p",null,"Parathreads will not require a parachain slot, so you will not need to engage in the candle auction\nmechanism. Instead, you will be able to register your parathread code to a relay chain for a fee\nand from then be able to start participating in the per-block auctions for inclusion of your state\ntransition into a relay chain."),(0,r.kt)("p",null,"For more information on how parathread per-block auctions work, see the more detailed\n",(0,r.kt)("a",{parentName:"p",href:"../learn-parathreads.md"},"parathread"),"\n"," page."),(0,r.kt)("h2",{id:"future-pdks"},"Future PDKs"),(0,r.kt)("p",null,"One example of a PDK W3F is interested in supporting is a\n",(0,r.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/roll-up-roll-back-snark-side-chain-17000-tps/3675"},"roll-up")," kit that allowed\ndevelopers to create SNARK-based parachains. If we review the roll-up write-up, we see that the\nsystem uses two roles: users that update ",(0,r.kt)("strong",{parentName:"p"},"state")," and an operator that ",(0,r.kt)("strong",{parentName:"p"},"aggregates the state\nupdates")," into a single on-chain update. It should be straightforward to see how we can translate\nthis to the parachain terms. The state transition function for a roll-up-like parachain would be\nupdating the state (in practice, most likely a merkle tree, which would be easily verifiable) from\nthe user inputs. The operator would act as the collator node, which would aggregate the state and\ncreate the zk-SNARK proof that it would hand to a relay chain's validators for verification."),(0,r.kt)("p",null,"If you or your team are interested in developing a PDK feel free to open an issue on the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Web3-collaboration"},"W3F collaboration repository")," for comment.\nThere may be grants available for this type of work."))}u.isMDXComponent=!0},7052:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/polkadotjs_network_parachains-7056d93de2ce994a07c23cd229de34e6.png"}}]);