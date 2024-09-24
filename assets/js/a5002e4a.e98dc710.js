"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1067],{53029:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(74848),o=a(28453);const r={id:"build-oracle",title:"Oracles",sidebar_label:"Oracles",description:"Information about building with oracles.",keywords:["build","oracles","contracts"],slug:"../build-oracle"},i=void 0,s={id:"build/build-oracle",title:"Oracles",description:"Information about building with oracles.",source:"@site/../docs/build/build-oracle.md",sourceDirName:"build",slug:"/build-oracle",permalink:"/docs/build-oracle",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-oracle.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726729589e3,frontMatter:{id:"build-oracle",title:"Oracles",sidebar_label:"Oracles",description:"Information about building with oracles.",keywords:["build","oracles","contracts"],slug:"../build-oracle"}},l={},c=[];function d(e){const t={a:"a",em:"em",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["In the blockchain context, an ",(0,n.jsx)(t.em,{children:"oracle"})," is a way to bring real-world data onto the blockchain so that\nit can be used by a decentralized application."]}),"\n",(0,n.jsx)(t.p,{children:"Oracles serve many purposes for application builders. For example:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Most stablecoin designs use an oracle to bring in data of the exchange rate of assets, in order to\npeg their value to a real world currency."}),"\n",(0,n.jsx)(t.li,{children:"Synthetic assets use oracles as price feeds in order to determine if the underlying cryptocurrency\ncan sufficiently collateralize the debt position."}),"\n",(0,n.jsx)(t.li,{children:"Prediction markets use oracles to decide the outcome of real world events and determine the payout\nof the prediction shares."}),"\n",(0,n.jsx)(t.li,{children:"Decentralized insurance markets use oracles to bring in information about whether a claim is valid\nor not."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Oracle solutions range from centralized and trusted to decentralized and game-theory based. On the\ncentralized end of the spectrum, an oracle could be a single account that has the authority to\ndictate the real-world data on-chain. On the decentralized end, a\n",(0,n.jsx)(t.a,{href:"https://blog.ethereum.org/2014/03/28/schellingcoin-a-minimal-trust-universal-data-feed/",children:'complex game of "chicken"'}),"\ncan be played among various staked actors who risk getting slashed if they don't submit the same\ndata as everyone else. Solutions such as\n",(0,n.jsx)(t.a,{href:"https://polkadot.network/chainlink-reaches-milestone-with-polkadot/",children:"Chainlink"})," fit somewhere in\nthe middle, where the amount of trust you put into the reporting oracles can be adjusted based on\nyour preferences. A Chainlink\n",(0,n.jsx)(t.a,{href:"https://github.com/smartcontractkit/chainlink-polkadot/blob/master/pallet-chainlink-feed/README.md",children:"Feed Pallet"}),"\nwas recently released to allow smart contract applications across Polkadot to access price reference\ndata, made available as a Substrate oracle pallet. ",(0,n.jsx)(t.a,{href:"https://acurast.com/",children:"Acurast"})," is another\nsolution that enables developers to define their off-chain data and computation requirements and\nreceive the outputs to the ",(0,n.jsx)(t.a,{href:"https://docs.acurast.com/integrations/substrate",children:"Acurast Pallet"})," and EVM\nor WASM environments."]}),"\n",(0,n.jsx)(t.p,{children:"When using an oracle in your application you should be aware of the benefits and risks that are\nbaked into its specific model. As the Polkadot ecosystem develops and oracle parachains begin to\nappear, this article will be updated with a comparison of the different solutions and the benefits\nand drawbacks that each provide."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var n=a(96540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);