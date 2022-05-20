"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],s={id:"learn-staking-miner",title:"Staking Miner",sidebar_label:"Staking Miner",description:"Learn about Phragm\xe9n optimization on-chain via staking miners",keywords:["staking","npos","miner","phragm\xe9n"],slug:"../learn-staking-miner"},l=void 0,d={unversionedId:"learn/learn-staking-miner",id:"learn/learn-staking-miner",title:"Staking Miner",description:"Learn about Phragm\xe9n optimization on-chain via staking miners",source:"@site/../docs/learn/learn-staking-miner.md",sourceDirName:"learn",slug:"/learn-staking-miner",permalink:"/docs/learn-staking-miner",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-staking-miner.md",tags:[],version:"current",lastUpdatedBy:"Emre Surmeli",lastUpdatedAt:1653080637,formattedLastUpdatedAt:"5/20/2022",frontMatter:{id:"learn-staking-miner",title:"Staking Miner",sidebar_label:"Staking Miner",description:"Learn about Phragm\xe9n optimization on-chain via staking miners",keywords:["staking","npos","miner","phragm\xe9n"],slug:"../learn-staking-miner"},sidebar:"docs",previous:{title:"SPREE",permalink:"/docs/learn-spree"},next:{title:"WebAssembly (Wasm)",permalink:"/docs/learn-wasm"}},c={},u=[{value:"NPoS election optimization",id:"npos-election-optimization",level:2},{value:"Signed Phase of the election pallet",id:"signed-phase-of-the-election-pallet",level:2},{value:"Further Resources",id:"further-resources",level:2}],p={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The staking-miner code is experimental and it is still in development phase. Use is at your own discretion, as there is a risk of losing some funds."))),(0,a.kt)("p",null,"Staking miner is a passive validator functionality that runs when a new set of validators need to be elected for NPoS. This is a computationally intense process, hence the mining. Staking miners compete with each other to produce election solutions which consist of a validator set, stake distribution across that set, and a score indicating how optimal the solution is. Staking miners run the sequential Phragm\xe9n algortihm to produce results, and the result is then sent as a transaction to the relay chain via a normal signed extrinsic. The transaction requires a bond, and a transaction fee. The best solution is rewarded\nwhich in the least covers the transaction fee, and the bond is returned to the account. If the solution is not valid, the bond and the fee are lost."),(0,a.kt)("p",null,"Staking miner uses a pallet called ",(0,a.kt)("inlineCode",{parentName:"p"},"pallet_election_provider_multi_phase")," and can only produce solutions during the signed phase of the pallet's life cycle. Once the signed phase is over and the unsigned phase starts, only the off-chain workers can provide election results."),(0,a.kt)("h2",{id:"npos-election-optimization"},"NPoS election optimization"),(0,a.kt)("p",null,"A basic election solution is a simple distribution of stake across validators, but this can be optimized for better distribution equaling a higher security score. The staking miner does not act as a validator and focuses solely on the election result and optimization of the solution. It connects to a specified chain and keeps listening to new signed phase of the election pallet in order to submit solutions to the NPoS election. When the correct time comes, it computes its solution and submit it to the chain. The default miner algorithm is sequential Phragm\xe9n with a configurable number of balancing iterations that improve the score."),(0,a.kt)("p",null,"Running the staking miner requires passing the seed of a funded account in order to pay the fees for the transactions that will be sent. The same account's balance is used to reserve deposits as well. The best solution in each round is rewarded. All correct solutions will get their bond back. And some invalid solutions will lose their bond."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"NPoS election optimization",src:n(83471).Z,width:"1868",height:"804"})),(0,a.kt)("h2",{id:"signed-phase-of-the-election-pallet"},"Signed Phase of the election pallet"),(0,a.kt)("p",null,"The election provider pallet ",(0,a.kt)("inlineCode",{parentName:"p"},"pallet_election_provider_multi_phase")," is divided into two phases, ",(0,a.kt)("strong",{parentName:"p"},"signed")," and ",(0,a.kt)("strong",{parentName:"p"},"unsigned"),". And in the end of the pallets timeline, the function",(0,a.kt)("inlineCode",{parentName:"p"},"elect()")," is called. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"                                                                   elect()\n                +   <--T::SignedPhase--\x3e  +  <--T::UnsignedPhase--\x3e   +\n  +-------------------------------------------------------------------+\n   Phase::Off   +       Phase::Signed     +      Phase::Unsigned      +\n")),(0,a.kt)("p",null,"Solutions provided by the staking miner can only be submitted during the signed phase. Solutions are submitted and queued on the chain as a ",(0,a.kt)("inlineCode",{parentName:"p"},"RawSolution"),". Once submitted, a solution cannot be retracted by the orinating account."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RawSolution")," struct definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pub struct RawSolution<S> {\n    pub solution: S, // The solution itself\n    pub score: ElectionScore, // The claimed score of the solution.\n    pub round: u32, // The round at which this solution should be submitted.\n}\n")),(0,a.kt)("p",null,"A maximum of ",(0,a.kt)("inlineCode",{parentName:"p"},"pallet::Config::MaxSignedSubmissions")," will be stored on-chain and they will be sorted based on score. Higher the score the more optimal the election solution is. "),(0,a.kt)("p",null,"Upon arrival of a new solution:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If the queue is not full, it is stored in the appropriate sorted index."),(0,a.kt)("li",{parentName:"ol"},"If the queue is full but the submitted solution is better than one of the queued ones, the worse solution is discarded, the bond of the outgoing solution is returned, and the new solution is stored in the correct index."),(0,a.kt)("li",{parentName:"ol"},"If the queue is full and the solution is not an improvement compared to any of the queued ones, it is instantly rejected and no additional bond is reserved.")),(0,a.kt)("p",null,"Upon the end of the signed phase, no more solutions can be submitted and the solutions in the queue will be checked using ",(0,a.kt)("inlineCode",{parentName:"p"},"Pallet::feasibility_check")," which ensures the score is indeed correct, and marks them as valid or invalid. By checking each solution in the queue, the queue will be reorganized by score. The highest valid score will be rewarded. Invalid solutions with higher score than the winning solution will be slashed. The rest of the solutions will be discarded and their deposit will be returned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Queue\n+-------------------------------+\n|Solution(score=20, valid=false)| +--\x3e  Slashed\n+-------------------------------+\n|Solution(score=15, valid=true )| +--\x3e  Rewarded, Saved\n+-------------------------------+\n|Solution(score=10, valid=true )| +--\x3e  Discarded\n+-------------------------------+\n|Solution(score=05, valid=false)| +--\x3e  Discarded\n+-------------------------------+\n|             None              |\n+-------------------------------+\n")),(0,a.kt)("p",null,"If you want to run a staking miner on your validator, refer to the repository provided in the resources section below."),(0,a.kt)("h2",{id:"further-resources"},"Further Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://crates.parity.io/pallet_election_provider_multi_phase/index.html"},"Election Pallet definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/tree/master/utils/staking-miner"},"Staking Miner repository"))))}h.isMDXComponent=!0},83471:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/NPoS-election-optimization-3ef1b7bd0a99f64c4198511b4216989d.png"}}]);