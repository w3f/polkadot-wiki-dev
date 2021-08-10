(self.webpackChunk=self.webpackChunk||[]).push([[7786],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>h,kt:()=>m});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=s,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?n.createElement(u,i(i({ref:a},h),{},{components:t})):n.createElement(u,i({ref:a},h))}));function m(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76936:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>c,toc:()=>h,default:()=>d});var n=t(22122),s=t(19756),r=(t(67294),t(3905)),i=["components"],o={id:"learn-crosschain",title:"Cross-chain Message Passing (XCMP)",sidebar_label:"Cross-chain Message Passing (XCMP)"},l=void 0,c={unversionedId:"learn/learn-crosschain",id:"learn/learn-crosschain",isDocsHomePage:!1,title:"Cross-chain Message Passing (XCMP)",description:"Cross-chain transactions are resolved using a simple queuing mechanism based around a Merkle tree to",source:"@site/../docs/learn/learn-crosschain.md",sourceDirName:"learn",slug:"/learn/learn-crosschain",permalink:"/docs/learn/learn-crosschain",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-crosschain.md",version:"current",lastUpdatedBy:"Bill Laboon",lastUpdatedAt:1628602213,formattedLastUpdatedAt:"8/10/2021",frontMatter:{id:"learn-crosschain",title:"Cross-chain Message Passing (XCMP)",sidebar_label:"Cross-chain Message Passing (XCMP)"},sidebar:"docs",previous:{title:"Randomness",permalink:"/docs/learn/learn-randomness"},next:{title:"SPREE",permalink:"/docs/learn/learn-spree"}},h=[{value:"Overview of XCMP",id:"overview-of-xcmp",children:[]},{value:"XCMP-Lite (HRMP)",id:"xcmp-lite-hrmp",children:[]},{value:"Vertical Message Passing",id:"vertical-message-passing",children:[]},{value:"XCMP Message Format",id:"xcmp-message-format",children:[]},{value:"How To Make Cross Chain Transfers",id:"how-to-make-cross-chain-transfers",children:[]},{value:"High-Level XCMP",id:"high-level-xcmp",children:[]},{value:"Resources",id:"resources",children:[]}],p={toc:h};function d(e){var a=e.components,t=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cross-chain transactions are resolved using a simple queuing mechanism based around a Merkle tree to\nensure fidelity. It is the task of the Relay Chain validators to move transactions on the output\nqueue of one parachain into the input queue of the destination parachain. However, only the\nassociated metadata is stored as a hash in the Relay Chain storage."),(0,r.kt)("p",null,"The input and output queue are sometimes referred to in the codebase and associated documentation as\n",(0,r.kt)("inlineCode",{parentName:"p"},"ingress")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"egress")," messages respectively."),(0,r.kt)("h2",{id:"overview-of-xcmp"},"Overview of XCMP"),(0,r.kt)("p",null,"XCMP is currently under development and the details are subject to change. However, the overall\narchitecture and design decisions are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cross-chain messages will ",(0,r.kt)("em",{parentName:"li"},"not")," go on to the Relay Chain."),(0,r.kt)("li",{parentName:"ul"},"Cross-chain messages will be constrained to a maximum size in bytes."),(0,r.kt)("li",{parentName:"ul"},"Parachains are allowed to block messages from other parachains, in which case the dispatching\nparachain would be aware of this block."),(0,r.kt)("li",{parentName:"ul"},"Collator nodes are responsible for routing messages between chains."),(0,r.kt)("li",{parentName:"ul"},'Collators produce a list of "egress" messages and will receive the "ingress" messages from other\nparachains.'),(0,r.kt)("li",{parentName:"ul"},"On each block, parachains are expected to route messages from some subset of all other parachains."),(0,r.kt)("li",{parentName:"ul"},"When a collator produces a new block to hand off to a validator, it will collect the latest\ningress queue information and process it."),(0,r.kt)("li",{parentName:"ul"},"Validators will check a proof that the new candidate for the next parachain block includes the\nprocessing of the expected ingress messages to that parachain.")),(0,r.kt)("p",null,"XCMP queues must be initiated by first opening a channel between two parachains. The channel is\nidentified by both the sender and recipient parachains, meaning that it's a one-way channel. A pair\nof parachains can have at most two channels between them, one for sending messages to the other\nchain and another for receiving messages. The channel will require a deposit in DOT to be opened,\nwhich will get returned when the channel is closed."),(0,r.kt)("h2",{id:"xcmp-lite-hrmp"},"XCMP-Lite (HRMP)"),(0,r.kt)("p",null,"While XCMP is still being implemented, a stop-gap protocol (see definition below) known as\n",(0,r.kt)("strong",{parentName:"p"},"Horizontal Relay-routed Message Passing (HRMP)")," exists in its place. HRMP has the same interface\nand functionality as XCMP but is much more demanding on resources since it stores all messages in\nthe Relay Chain storage. When XCMP has been implemented, HRMP is planned to be deprecated and phased\nout in favor of it."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: A stop-gap protocol is a temporary substitute for the functionality that is not fully\ncomplete. While XCMP proper is still in development, HRMP is a working replacement.")),(0,r.kt)("h2",{id:"vertical-message-passing"},"Vertical Message Passing"),(0,r.kt)("p",null,"There are two kinds of Vertical Message Passing, Upward Message Passing (UMP) and Downward Message\nPassing (DMP). UMP is used when a message originates on a parachain or a parathread to go from that\nparachain up to the Relay Chain. DMP is used to go the other way around, when a message originates\nfrom the Relay Chain and is destined for a parachain. Messages that are passed via DMP may originate\nfrom a parachain. In which case, first UMP is used to communicate the message to the Relay Chain and\nDMP is used to move it down to another parachain."),(0,r.kt)("h2",{id:"xcmp-message-format"},"XCMP Message Format"),(0,r.kt)("p",null,"For a description of the XCMP message format please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"xcm-format")," repository on GitHub."),(0,r.kt)("h2",{id:"how-to-make-cross-chain-transfers"},"How To Make Cross Chain Transfers"),(0,r.kt)("p",null,"You can try out cross-chain transfers on the the ",(0,r.kt)("a",{parentName:"p",href:"/docs/build/build-parachains-rococo"},"Rococo")," testnet. A\ntutorial on downward, upward, and lateral transfers can be found\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build/build-parachains-rococo#how-to-make-cross-chain-transfers"},"here"),"."),(0,r.kt)("h2",{id:"high-level-xcmp"},"High-Level XCMP"),(0,r.kt)("p",null,"A smart contract that exists on parachain A will route a message to parachain B in which another\nsmart contract is called that makes a transfer of some assets within that chain."),(0,r.kt)("p",null,"Charlie executes the smart contract on parachain A, which initiates a new cross-chain message for\nthe destination of a smart contract on parachain B."),(0,r.kt)("p",null,"The collator node of parachain A will place this new cross-chain message into its outbound messages\nqueue, along with a ",(0,r.kt)("inlineCode",{parentName:"p"},"destination")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,r.kt)("p",null,"The collator node of parachain B routinely pings all other collator nodes asking for new messages\n(filtering by the ",(0,r.kt)("inlineCode",{parentName:"p"},"destination")," field). When the collator of parachain B makes its next ping, it\nwill see this new message on parachain A and add it into its own inbound queue for processing into\nthe next block."),(0,r.kt)("p",null,"Validators for parachain A will also read the outbound queue and know the message. Validators for\nparachain B will do the same. This is so that they will be able to verify the message transmission\nhappened."),(0,r.kt)("p",null,"When the collator of parachain B is building the next block in its chain, it will process the new\nmessage in its inbound queue as well as any other messages it may have found/received."),(0,r.kt)("p",null,"During processing, the message will execute the smart contract on parachain B and complete the asset\ntransfer like intended."),(0,r.kt)("p",null,"The collator now hands this block to the validator, which itself will verify that this message was\nprocessed. If the message was processed and all other aspects of the block are valid, the validator\nwill include this block for parachain B into the Relay Chain."),(0,r.kt)("p",null,"Check out our animated video below that explores how XCMP works."),(0,r.kt)("video",{controls:"controls",name:"XCMP Animated Video",width:"560",height:"315",src:"https://storage.googleapis.com/w3f-tech-ed-contents/XCMP.mp4"}," Sorry, your browser doesn't support embedded videos. "),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://research.web3.foundation/en/latest/polkadot/XCMP.html"},"XCMP Scheme")," - Full technical\ndescription of cross-chain communication on the Web3 Foundation research wiki."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://w3f.github.io/parachain-implementers-guide/messaging.html"},"Messaging Overview")," - An\noverview of the messaging schemes from the Parachain Implementor's guide."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format"},"XCM Format")," - Description of the high-level XCM format\nsent via XCMP.")))}d.isMDXComponent=!0}}]);