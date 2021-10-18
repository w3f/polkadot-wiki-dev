(self.webpackChunk=self.webpackChunk||[]).push([[1829],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=s,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(d,r(r({ref:t},h),{},{components:a})):n.createElement(d,r({ref:t},h))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},15894:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>h,default:()=>p});var n=a(22122),s=a(19756),o=(a(67294),a(3905)),r=["components"],i={id:"learn-cross-consensus",title:"Cross-Consensus Message Format (XCM)",sidebar_label:"Cross-Consensus Message Format (XCM)",description:"Learn about the messaging format at the forefront of interoperability.",slug:"../learn-crosschain"},l=void 0,c={unversionedId:"learn/learn-cross-consensus",id:"learn/learn-cross-consensus",isDocsHomePage:!1,title:"Cross-Consensus Message Format (XCM)",description:"Learn about the messaging format at the forefront of interoperability.",source:"@site/../docs/learn/learn-cross-consensus.md",sourceDirName:"learn",slug:"/learn-crosschain",permalink:"/docs/learn-crosschain",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-cross-consensus.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1633976845,formattedLastUpdatedAt:"10/11/2021",frontMatter:{id:"learn-cross-consensus",title:"Cross-Consensus Message Format (XCM)",sidebar_label:"Cross-Consensus Message Format (XCM)",description:"Learn about the messaging format at the forefront of interoperability.",slug:"../learn-crosschain"},sidebar:"docs",previous:{title:"Randomness",permalink:"/docs/learn-randomness"},next:{title:"SPREE",permalink:"/docs/learn-spree"}},h=[{value:"Overview of XCM: A Format, Not a Protocol",id:"overview-of-xcm-a-format-not-a-protocol",children:[{value:"General Use-Cases",id:"general-use-cases",children:[],level:3},{value:"XCVM (Cross-Consensus Virtual Machine)",id:"xcvm-cross-consensus-virtual-machine",children:[],level:3},{value:"VMP (Vertical Message Passing)",id:"vmp-vertical-message-passing",children:[],level:3},{value:"XCMP (Cross-Chain Message Passing)",id:"xcmp-cross-chain-message-passing",children:[{value:"Overview of XCMP",id:"overview-of-xcmp",children:[],level:4},{value:"<code>XCMP-Lite (HRMP)</code>",id:"xcmp-lite-hrmp",children:[],level:4},{value:"<code>XCMP Message Format</code>",id:"xcmp-message-format",children:[],level:4},{value:"How To Make <code>Cross-Chain Transfers</code>",id:"how-to-make-cross-chain-transfers",children:[],level:4},{value:"<code>High-Level XCMP</code>",id:"high-level-xcmp",children:[],level:4}],level:3}],level:2},{value:"Resources",id:"resources",children:[],level:2}],m={toc:h};function p(e){var t=e.components,i=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"What started as an approach to ",(0,o.kt)("em",{parentName:"p"},"cross-chain communication"),", has evolved into a format for\n",(0,o.kt)("strong",{parentName:"p"},"Cross-Consensus"),". Communication is not only conducted between chains, but also smart contracts,\npallets, bridges, and even sharded enclaves like ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-spree"},"SPREE"),"."),(0,o.kt)("h2",{id:"overview-of-xcm-a-format-not-a-protocol"},"Overview of XCM: A Format, Not a Protocol"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"XCM is related to cross-chain in the same way that REST is related RESTful."),"\nXCM cannot actually send messages between systems. It is a format for how message\ntransfer should be performed, similar to how RESTful services use REST as an architectural style\nof deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'XCM aims to be a language communicating ideas between consensus systems, hence, "Cross-Consensus"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A format for sending messages between chains")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Transacting with a chain whose transaction format is unknown. XCM is well-versioned, abstract and general:\nit can be used as a means of providing a long-lasting transaction format for wallets to use to create many common transactions."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"As a result, XCM should be general enough for it to be properly useful throughout a growing ecosystem. It should be ",(0,o.kt)("em",{parentName:"li"},"extensible"),", and, in turn, ",(0,o.kt)("em",{parentName:"li"},"future-proof")," and ",(0,o.kt)("em",{parentName:"li"},"forwards-compatible"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Efficient enough to run on-chain, and in a metered environment."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"XCM is not designed in that every system supporting the format is expected to be able to interpret any\npossible XCM message. Practically speaking, one can imagine that some messages will not have reasonable\ninterpretations under some systems or will be intentionally unsupported."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Still, XCM offers a format for ",(0,o.kt)("em",{parentName:"p"},"general")," systems, including gas-metered smart contract platform and community\nparachains - all the way to trusted interactions between system parachains and their Relay Chain."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Although, the format should not bake elements, such as fee payment, too deep and irreversibly in the protocol.")))),(0,o.kt)("h3",{id:"general-use-cases"},"General Use-Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The optional payment of fees"),(0,o.kt)("li",{parentName:"ul"},"Conduct some ",(0,o.kt)("strong",{parentName:"li"},"platform-specific actions")),(0,o.kt)("li",{parentName:"ul"},"Support a number of ",(0,o.kt)("strong",{parentName:"li"},"token transfer models")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Remote Transfers"),": control an account on a remote chain, allowing the local chain to have an address on the\nremote chain for receiving funds and to eventually transfer those funds it controls into other accounts on that remote chain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Teleporting"),": movement of an asset happens by destroying it on one side and creating a clone on the other\nside."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reverse-Based Transfer"),": there may be two chains that want to nominate a third chain, where one\nincludes a native asset that can be used as a reserve for that asset. Then, the derivative form of the\nasset on each of those chains would be fully backed, allowing the derivative asset to be exchanged for the underlying asset on the reserve chain backing it.")),(0,o.kt)("h3",{id:"xcvm-cross-consensus-virtual-machine"},"XCVM (Cross-Consensus Virtual Machine)"),(0,o.kt)("p",null,"An ultra-high level non-Turing-complete computer whose instructions are designed in a way to be roughly at\nthe same level as transactions."),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"message")," in XCM is simply just a programme that runs on the ",(0,o.kt)("inlineCode",{parentName:"p"},"XCVM"),": in other words, one or more XCM instructions. To learn more about the XCVM and the XCM Format, see the latest ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392"},"blog post")," by Dr. Gavin Wood."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  Polkadot comes with three distinct systems for actually communicating XCM messages between\n  its constituent chains.\n")),(0,o.kt)("p",null,"The following diagram shows the XCM tech stack:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"xcm tech stack",src:a(65290).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"XCM can be used to express the meaning of the messages over each of these three communication channels.")),(0,o.kt)("h3",{id:"vmp-vertical-message-passing"},"VMP (Vertical Message Passing)"),(0,o.kt)("p",null,"There are two kinds of vertical message-passing transport protocols:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UMP (Upward Message Passing)"),": allows parachains to send messages to their Relay Chain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DMP (Downward Message Passing)"),": allows the Relay Chain to pass messages down to one of their\nparachains.")),(0,o.kt)("p",null,"Messages that are passed via ",(0,o.kt)("inlineCode",{parentName:"p"},"DMP")," may originate from a parachain. In which case, first ",(0,o.kt)("inlineCode",{parentName:"p"},"UMP")," is used to\ncommunicate the message to the Relay Chain and ",(0,o.kt)("inlineCode",{parentName:"p"},"DMP")," is used to move it down to another parachain."),(0,o.kt)("h3",{id:"xcmp-cross-chain-message-passing"},"XCMP (Cross-Chain Message Passing)"),(0,o.kt)("p",null,"The cross-chain message-passing transport protocol:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"XCMP")," (Cross-Chain Message Passing): allows the parachains to send messages between themselves.")),(0,o.kt)("p",null,"Cross-chain transactions are resolved using a simple queuing mechanism based around a Merkle tree to\nensure fidelity. It is the task of the Relay Chain validators to move transactions on the output\nqueue of one parachain into the input queue of the destination parachain. However, only the\nassociated metadata is stored as a hash in the Relay Chain storage."),(0,o.kt)("p",null,"The input and output queue are sometimes referred to in the codebase and associated documentation as\n",(0,o.kt)("inlineCode",{parentName:"p"},"ingress")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"egress")," messages respectively."),(0,o.kt)("h4",{id:"overview-of-xcmp"},"Overview of XCMP"),(0,o.kt)("p",null,"XCMP is currently under development and the details are subject to change. However, the overall\narchitecture and design decisions are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cross-chain messages will ",(0,o.kt)("em",{parentName:"li"},"not")," go on to the Relay Chain."),(0,o.kt)("li",{parentName:"ul"},"Cross-chain messages will be constrained to a maximum size in bytes."),(0,o.kt)("li",{parentName:"ul"},"Parachains are allowed to block messages from other parachains, in which case the dispatching\nparachain would be aware of this block."),(0,o.kt)("li",{parentName:"ul"},"Collator nodes are responsible for routing messages between chains."),(0,o.kt)("li",{parentName:"ul"},'Collators produce a list of "egress" messages and will receive the "ingress" messages from other\nparachains.'),(0,o.kt)("li",{parentName:"ul"},"On each block, parachains are expected to route messages from some subset of all other parachains."),(0,o.kt)("li",{parentName:"ul"},"When a collator produces a new block to hand off to a validator, it will collect the latest\ningress queue information and process it."),(0,o.kt)("li",{parentName:"ul"},"Validators will check the proof that the new candidate for the next parachain block includes the\nprocessing of the expected ingress messages to that parachain.")),(0,o.kt)("p",null,"XCMP queues must be initiated by first opening a channel between two parachains. The channel is\nidentified by both the sender and recipient parachains, meaning that it's a one-way channel. A pair\nof parachains can have at most two channels between them, one for sending messages to the other\nchain and another for receiving messages. The channel will require a deposit in DOT to be opened,\nwhich will get returned when the channel is closed."),(0,o.kt)("h4",{id:"xcmp-lite-hrmp"},(0,o.kt)("inlineCode",{parentName:"h4"},"XCMP-Lite (HRMP)")),(0,o.kt)("p",null,"While XCMP is still being implemented, a stop-gap protocol (see definition below) known as\n",(0,o.kt)("strong",{parentName:"p"},"Horizontal Relay-routed Message Passing (HRMP)")," exists in its place. HRMP has the same interface\nand functionality as XCMP but is much more demanding on resources since it stores all messages in\nthe Relay Chain storage. When XCMP has been implemented, HRMP is planned to be deprecated and phased\nout in favor of it."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: A stop-gap protocol is a temporary substitute for the functionality that is not fully\ncomplete. While XCMP proper is still in development, HRMP is a working replacement.")),(0,o.kt)("h4",{id:"xcmp-message-format"},(0,o.kt)("inlineCode",{parentName:"h4"},"XCMP Message Format")),(0,o.kt)("p",null,"For a description of the XCMP message format please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"xcm-format")," repository on GitHub."),(0,o.kt)("h4",{id:"how-to-make-cross-chain-transfers"},"How To Make ",(0,o.kt)("inlineCode",{parentName:"h4"},"Cross-Chain Transfers")),(0,o.kt)("p",null,"You can try out cross-chain transfers on the the ",(0,o.kt)("a",{parentName:"p",href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"Rococo")," testnet. A\ntutorial on downward, upward, and lateral transfers can be found\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-pdk###how-to-make-cross-chain-transfers"},"here"),"."),(0,o.kt)("h4",{id:"high-level-xcmp"},(0,o.kt)("inlineCode",{parentName:"h4"},"High-Level XCMP")),(0,o.kt)("p",null,"A smart contract that exists on parachain A will route a message to parachain B in which another\nsmart contract is called that makes a transfer of some assets within that chain."),(0,o.kt)("p",null,"Charlie executes the smart contract on parachain A, which initiates a new cross-chain message for\nthe destination of a smart contract on parachain B."),(0,o.kt)("p",null,"The collator node of parachain A will place this new cross-chain message into its outbound messages\nqueue, along with a ",(0,o.kt)("inlineCode",{parentName:"p"},"destination")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,o.kt)("p",null,"The collator node of parachain B routinely pings all other collator nodes asking for new messages\n(filtering by the ",(0,o.kt)("inlineCode",{parentName:"p"},"destination")," field). When the collator of parachain B makes its next ping, it\nwill see this new message on parachain A and add it into its own inbound queue for processing into\nthe next block."),(0,o.kt)("p",null,"Validators for parachain A will also read the outbound queue and know the message. Validators for\nparachain B will do the same. This is so that they will be able to verify the message transmission\nhappened."),(0,o.kt)("p",null,"When the collator of parachain B is building the next block in its chain, it will process the new\nmessage in its inbound queue as well as any other messages it may have found/received."),(0,o.kt)("p",null,"During processing, the message will execute the smart contract on parachain B and complete the asset\ntransfer like intended."),(0,o.kt)("p",null,"The collator now hands this block to the validator, which itself will verify that this message was\nprocessed. If the message was processed and all other aspects of the block are valid, the validator\nwill include this block for parachain B into the Relay Chain."),(0,o.kt)("p",null,"Check out our animated video below that explores how XCMP works."),(0,o.kt)("video",{controls:"controls",name:"XCMP Animated Video",width:"560",height:"315",src:"https://storage.googleapis.com/w3f-tech-ed-contents/XCMP.mp4"}," Sorry, your browser doesn't support embedded videos. "),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392"},"XCM: The Cross-Consensus Message Format")," - Detailed blog post by Dr. Gavin Wood about the XCM Format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format"},"XCM Format")," - Description of the high-level XCM format\nsent via XCMP."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://research.web3.foundation/en/latest/polkadot/XCMP.html"},"XCMP Scheme")," - Full technical\ndescription of cross-chain communication on Web3 Foundation research wiki."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://w3f.github.io/parachain-implementers-guide/messaging.html"},"Messaging Overview")," - An\noverview of the messaging schemes from the Parachain Implementor's guide.")))}p.isMDXComponent=!0},65290:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/cross-consensus-tech-stack-e9c1b2ab8b6f6f3f9a78b3a412af0698.png"}}]);