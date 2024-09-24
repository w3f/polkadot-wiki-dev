"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1369],{77371:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=o(74848),i=o(28453);const s={id:"start-building",title:"Build on Polkadot",sidebar_label:"Build on Polkadot",description:"Start Building with the Polkadot SDK.",slug:"../start-building"},r=void 0,l={id:"general/start-building",title:"Build on Polkadot",description:"Start Building with the Polkadot SDK.",source:"@site/../docs/general/start-building.md",sourceDirName:"general",slug:"/start-building",permalink:"/docs/start-building",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/start-building.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1715065584e3,frontMatter:{id:"start-building",title:"Build on Polkadot",sidebar_label:"Build on Polkadot",description:"Start Building with the Polkadot SDK.",slug:"../start-building"},sidebar:"docs",previous:{title:"Transaction Verification",permalink:"/docs/transaction-attacks"},next:{title:"FAQ",permalink:"/docs/faq"}},a={},d=[{value:"Polkadot SDK",id:"polkadot-sdk",level:2},{value:"Requests for Comment (RFCs)",id:"requests-for-comment-rfcs",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"polkadot-sdk",children:"Polkadot SDK"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk",children:"Polkadot SDK"})," repository provides all the resources\nneeded to start building on the Polkadot network, a multi-chain blockchain platform that enables\ndifferent blockchains to interoperate and share information in a secure and scalable way. The\nPolkadot SDK comprises three main pieces of software:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot",children:"Polkadot Node"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate",children:"Substrate Blockchain SDK"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus",children:"Cumulus Tool Suite for Parachains"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The programming language used for development is ",(0,n.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["For more information about building on Polkadot, see ",(0,n.jsx)(t.a,{href:"/docs/build-guide",children:"the Builder's Guide"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"requests-for-comment-rfcs",children:"Requests for Comment (RFCs)"}),"\n",(0,n.jsxs)(t.p,{children:["With the release of ",(0,n.jsx)(t.a,{href:"/docs/polkadot-v1",children:"Polkadot runtime 1.0"}),", Polkadot's codebase is in the hands of\nthe community. Anyone can open a\n",(0,n.jsx)(t.a,{href:"https://github.com/polkadot-fellows/RFCs",children:"Request for Comment (RFC)"})," to propose and discuss changes\nto the network protocol, runtime logic, public interfaces, and other technical matters."]}),"\n",(0,n.jsxs)(t.p,{children:["To submit an RFC, follow the instructions ",(0,n.jsx)(t.a,{href:"https://github.com/polkadot-fellows/RFCs#process",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["RFCs can only be approved and merged by III-Dan members of\n",(0,n.jsx)(t.a,{href:"/docs/learn-polkadot-technical-fellowship",children:"Polkadot Technical Fellowship"})," via on-chain voting\nmechanism. Definitive approval or rejection is done by issuing the ",(0,n.jsx)(t.code,{children:"RFC_APPROVE(xxxx, h)"})," or\n",(0,n.jsx)(t.code,{children:"RFC_REJECT(xxxx, h)"})," on-chain remark from the Fellowship origin on the Polkadot Collectives\nparachain, where ",(0,n.jsx)(t.code,{children:"xxxx"})," is the RFC number and ",(0,n.jsx)(t.code,{children:"h"})," is the hash of the raw proposal text."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, the first RFC ",(0,n.jsx)(t.a,{href:"https://github.com/polkadot-fellows/RFCs/pull/1",children:"RFC-1"})," about Agile\nCoretime was proposed by Gavin Wood on the 30th of June 2023 and merged on the 12th of August 2023.\nSubsequently, the\n",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/pull/14568",children:"code for the Agile Coretime Broker pallet"}),"\nwas added to the Substrate FRAME system."]}),"\n",(0,n.jsx)(t.p,{children:"In general, the workflow from RFC write-up submission to its implementation follows the timeline\nbelow:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["RFC submitted by following the ",(0,n.jsx)(t.a,{href:"https://github.com/polkadot-fellows/RFCs#process",children:"instructions"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["RFC review by the Technical Fellowship ",(0,n.jsx)(t.a,{href:"https://github.com/polkadot-fellows/RFCs",children:"via GitHub"})]}),"\n",(0,n.jsxs)(t.li,{children:["Polkadot Technical Fellowship Referendum of the RFC submitted to the Track ",(0,n.jsx)(t.code,{children:"3 / Fellows"})," by\nmembers with a rank greater than or equal to 3."]}),"\n",(0,n.jsx)(t.li,{children:"If the Referendum is approved through on-chain vote by the Technical Fellowship, changes discussed\nin the RFC will be implemented."}),"\n",(0,n.jsxs)(t.li,{children:["If the changes requested through the RFC require a broader consensus of DOT holders, an OpenGov\nreferendum may be created. For instance,\n",(0,n.jsx)(t.a,{href:"https://github.com/polkadot-fellows/RFCs/blob/main/text/0012-process-for-adding-new-collectives.md",children:"adding a new system collective"}),"\nor making changes to network parameters like inflation rate, treasury inflow etc."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Polkadot Runtime Code Changes through Root track",type:"note",children:(0,n.jsxs)(t.p,{children:["Although the Technical Fellowship maintains the\n",(0,n.jsx)(t.a,{href:"https://github.com/polkadot-fellows/runtimes",children:"runtimes of Polkadot and Kusama"}),", changes to the\nnetwork protocol are not gated by the fellowship. Any DOT holder can submit a referendum on\n",(0,n.jsx)(t.a,{href:"/docs/learn-polkadot-opengov-origins#root",children:"the Polkadot OpenGov Root track"})," to set the\nruntime code with the proposed changes."]})}),"\n",(0,n.jsxs)(t.p,{children:["For more information about the adoption of RFCs within the Polkadot ecosystem, see\n",(0,n.jsx)(t.a,{href:"https://www.polkadotphilosophy.com/polkadots-strategic-adoption-of-rfcs-pioneering-a-collaborative-future-in-blockchain-3330843cfd4f",children:"this Medium article"}),"\nand the\n",(0,n.jsx)(t.a,{href:"https://forum.polkadot.network/t/polkadot-protocol-proposals-rfc-process/1421/1",children:"original Polkadot Forum post"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>l});var n=o(96540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);