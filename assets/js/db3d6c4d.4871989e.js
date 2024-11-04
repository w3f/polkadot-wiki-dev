"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7845],{5065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"learn/learn-account-abstraction","title":"Polkadot\'s Account Abstraction","description":"Polkadot\'s Native Account Abstraction.","source":"@site/../docs/learn/learn-account-abstraction.md","sourceDirName":"learn","slug":"/learn-account-abstraction","permalink":"/docs/learn-account-abstraction","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-account-abstraction.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1726731604000,"frontMatter":{"id":"learn-account-abstraction","title":"Polkadot\'s Account Abstraction","sidebar_label":"Account Abstraction","description":"Polkadot\'s Native Account Abstraction.","keywords":["account","polkadot account","account abstraction","proxy","multisig","batch"],"slug":"../learn-account-abstraction"},"sidebar":"docs","previous":{"title":"Account Balances","permalink":"/docs/learn-account-balances"},"next":{"title":"Account Identity","permalink":"/docs/learn-identity"}}');var i=n(74848),o=n(28453);const s={id:"learn-account-abstraction",title:"Polkadot's Account Abstraction",sidebar_label:"Account Abstraction",description:"Polkadot's Native Account Abstraction.",keywords:["account","polkadot account","account abstraction","proxy","multisig","batch"],slug:"../learn-account-abstraction"},c=void 0,r={},l=[{value:"Your Keys, Your Responsibility",id:"your-keys-your-responsibility",level:2},{value:"Definition of Account Abstraction",id:"definition-of-account-abstraction",level:2},{value:"Origin Abstraction in Polkadot",id:"origin-abstraction-in-polkadot",level:2},{value:"Protocol-level Account Abstraction",id:"protocol-level-account-abstraction",level:3},{value:"Smart-contract Level Account Abstraction",id:"smart-contract-level-account-abstraction",level:3},{value:"Further Readings",id:"further-readings",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"your-keys-your-responsibility",children:"Your Keys, Your Responsibility"}),"\n",(0,i.jsxs)(t.p,{children:["Account abstraction addresses the challenges of managing cryptographic keys representing accounts on\nblockchains. Accounts on blockchains represent entities, from an individual's identity to an\ninstitution. In ",(0,i.jsx)(t.a,{href:"/docs/web3-and-polkadot",children:"Web3"}),", you digitally sign any transaction or, more\ngenerally, any message using your private key. Data is recorded on a public ledger (usually\nblockchain-based) whose multiple copies of it are stored in computers participating in a P2P\nnetwork."]}),"\n",(0,i.jsx)(t.p,{children:"While the account\u2019s private keys grant users control and ownership, losing them results in losing\naccess to digital assets and fragmentation of your digital identity since you will need to create a\nnew account with a new set of keys. This poses a hurdle for both users and developers regarding\nsecurity and adoption."}),"\n",(0,i.jsx)(t.h2,{id:"definition-of-account-abstraction",children:"Definition of Account Abstraction"}),"\n",(0,i.jsxs)(t.p,{children:["The concept of account ",(0,i.jsx)(t.em,{children:"abstraction"})," was first mentioned via Ethereum's\n",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-4337",children:"EIP-4337"})," focused on allowing users to flexibly program\nmore security and better user experiences into their accounts. The idea also aims to separate the\nuser experience from the private key, enabling a piece of code to dictate account behavior. This\nallows for increased flexibility of accounts that originally were not engineered to be flexible and\ndecreased chances of key mismanagement."]}),"\n",(0,i.jsx)(t.p,{children:"Users are still responsible for their keys, but through account abstraction, they can take\nprecautions to ensure they do not end up losing their accounts."}),"\n",(0,i.jsx)(t.p,{children:"Account abstraction introduces a layer of on-chain logic that controls an account, typically in the\nform of a smart contract, that completely avoids the need for consensus-layer protocol changes.\nWithout a smart contract, abstracting accounts would require changes in the core architecture of the\nprotocol."}),"\n",(0,i.jsx)(t.p,{children:"Polkadot's generic codebase makes the concept of an account natively flexible and abstract without\nthe direct need for smart contracts."}),"\n",(0,i.jsx)(t.h2,{id:"origin-abstraction-in-polkadot",children:"Origin Abstraction in Polkadot"}),"\n",(0,i.jsxs)(t.p,{children:["Adopting a generic design is crucial in scaling ",(0,i.jsx)(t.a,{href:"/docs/web3-and-polkadot",children:"Web3"}),"\ntechnologies. Abstraction and generalization of protocols are essential to improving user experience\nand security in blockchain adoption."]}),"\n",(0,i.jsxs)(t.p,{children:["When users interact with a blockchain they call ",(0,i.jsx)(t.em,{children:"dispatchable"})," functions to do something. Because\nthose functions are called from the outside of the blockchain interface, in Polkadot's terms any\naction that involves a dispatchable function is an ",(0,i.jsx)(t.a,{href:"/docs/learn-transactions",children:"extrinsic"}),". Extrinsics\nare calls coming from the ",(0,i.jsx)(t.em,{children:"outside"})," of the blockchain interface that (if successfully executed)\ninvoke some changes in the ",(0,i.jsx)(t.em,{children:"inside"})," of the blockchain's state. An extrinsic is always directed to a\nspecific function within a particular ",(0,i.jsx)(t.a,{href:"/docs/glossary#pallet",children:"pallet"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, the ",(0,i.jsx)(t.code,{children:"balances.transferKeepAlive"})," extrinsic is directed to the ",(0,i.jsx)(t.code,{children:"transferKeepAlive"}),"\nfunction within the ",(0,i.jsx)(t.code,{children:"balances"})," pallet. If successful, the execution of that function will transfer\nfunds between two accounts, changing the balances of those accounts and thus the chain state (as\naccounts hold some state within the blockchain)."]}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.a,{href:"/docs/glossary#substrate",children:"Substrate"}),"'s FRAME, functions are not necessarily called by\naccounts. Functions can be called by any origin, where origins are caller-personas associated with\nprivilege levels. For example, the Polkadot ",(0,i.jsx)(t.a,{href:"/docs/learn-polkadot-opengov",children:"OpenGov"})," has different\norigins with different privileges, such as allocating treasury funds, cancelling a referendum, etc.\nNeither of those origins is subservient to the concept of an account or assume anything about state\nor associated data. Custom origins can be created while designing your chain using the Substrate\n(which is part of the ",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk",children:"Polkadot SDK"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["The figure below shows Polkadot's origin abstraction. Accounts happen to be just one variant (or\ncorner case) of Substrate's FRAME possible origins, the ",(0,i.jsx)(t.code,{children:"frame_system::RawOrigin::Signed"}),". OpenGov\norigins function in a way that, if conditions (approval and support) are met and a proposal passes,\nthe appropriate\n",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/1835c091c42456e8df3ecbf0a94b7b88c395f623/substrate/frame/referenda/src/lib.rs#L884",children:"origin is then associated with the scheduled call"}),".\nThose origins are caller-personas that do not have any entity behind them, and do not hold any state\non chain."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"origin-abstraction",src:n(68685).A+"",width:"1920",height:"800"})}),"\n",(0,i.jsx)(t.p,{children:"In Substrate, the concept of account is completely deprioritized. Substrate itself remains\nindifferent to an account's balance and nonce. While FRAME can support their presence, it\nfundamentally does not need to rely on them."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"./learn-xcm-index",children:"Cross-Consensus Messaging (XCM)"})," format can take advantage of origin\nabstraction for cross-consensus communications by specifying the context for a particular message.\nOrigins in this case imply the authority under which a message is being sent (and thereby,\nexecuted)."]}),"\n",(0,i.jsx)(t.p,{children:"On a lower level, the XCM format also provides a much powerful origin abstraction that allows\ncalling personas that are so abstract to not necessarily have direct representation on the local\nchain within its FRAME system origin."}),"\n",(0,i.jsx)(t.h3,{id:"protocol-level-account-abstraction",children:"Protocol-level Account Abstraction"}),"\n",(0,i.jsxs)(t.p,{children:["While the ",(0,i.jsx)(t.a,{href:"https://docs.substrate.io/reference/frame-pallets/",children:"Substrate FRAME system"})," does not have\na single pallet (module) for complete account abstraction, it incorporates various pallets that\ncollectively achieve similar functionalities. Polkadot's native account abstraction functionalities\ninclude:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/learn-account-multisig",children:"Multi-signature accounts"})," to control an account using different ones"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/learn-proxies",children:"Proxy accounts"})," for role-based representation, and ownership representation\nthrough ",(0,i.jsx)(t.a,{href:"/docs/learn-proxies#anonymous-proxy-pure-proxy",children:"pure proxies"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/learn-account-advanced#derivation-paths",children:"Derivative accounts"})," for using the same ",(0,i.jsx)(t.em,{children:"parent"}),"\nprivate key on multiple ",(0,i.jsx)(t.em,{children:"children"})," accounts"]}),"\n",(0,i.jsx)(t.li,{children:"Account recovery mechanisms such as social recovery to help regain access to your key using\ntrusted third-party accounts"}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/learn-guides-transfers#batch-transfers-with-the-polkadot-js-ui",children:"Batching functionality"})," to\nsubmit multiple calls in one single transaction"]}),"\n",(0,i.jsx)(t.li,{children:"Payments with non-native tokens"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["All the above can be used together, meaning that, for example, you can create a multi-signature\naccount of pure proxies to keep the same multi-signature account when signatories change. A more\ncomplex combination to build a hot wallet can be found in this\n",(0,i.jsx)(t.a,{href:"https://www.parity.io/blog/building-a-hot-wallet-with-substrate-primitives/",children:"blog post"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Additionally, developers have the flexibility to design their own rules for abstraction."}),"\n",(0,i.jsx)(t.p,{children:"In the Substrate FRAME system, accounts are represented by Accounts IDs. Such unique identifiers can\nbe any 32-byte number and are not limited to just a public key (with a corresponding private key).\nFor example, multi-signature accounts do not have a private key, and their Account ID is built with\nhashed information from signatories\u2019 public keys and the multisig threshold."}),"\n",(0,i.jsx)(t.h3,{id:"smart-contract-level-account-abstraction",children:"Smart-contract Level Account Abstraction"}),"\n",(0,i.jsxs)(t.p,{children:["Account abstraction can be implemented in parachains also with traditional smart-contracts for\nexample using the ",(0,i.jsx)(t.a,{href:"/docs/build-smart-contracts#ink",children:"ink!"})," smart contract language."]}),"\n",(0,i.jsx)(t.h2,{id:"further-readings",children:"Further Readings"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://hackernoon.com/abstracting-away-account-abstraction-on-polkadot",children:"Hackernoon Article"})," by\n",(0,i.jsx)(t.a,{href:"/docs/contributors#bader-youssef",children:"Bader Youssef"}),' - "Abstracting Away Account Abstraction\non Polkadot"']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.parity.io/blog/building-a-hot-wallet-with-substrate-primitives/",children:"Parity Blog Post"}),' by\nJoe Petrowski - "Building a Hot Wallet with Substrate Primitives"']}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs/frame_origin/index.html",children:"FRAME Origin - Polkadot-SDK Docs"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},68685:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/origin-abstraction-31b6a7245c3537d4be00fc83b037eec8.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var a=n(96540);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);