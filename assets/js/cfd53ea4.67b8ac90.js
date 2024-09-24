"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7482],{36531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var n=a(74848),o=a(28453);const i={id:"kusama-timeline",title:"Kusama Timeline",sidebar_label:"Timeline",description:"Stay up-to-date with the latest action on Kusama.",keywords:["timeline","roadmap","kusama"],slug:"../../kusama-timeline"},s=void 0,r={id:"general/kusama/kusama-timeline",title:"Kusama Timeline",description:"Stay up-to-date with the latest action on Kusama.",source:"@site/../docs/general/kusama/kusama-timeline.md",sourceDirName:"general/kusama",slug:"/kusama-timeline",permalink:"/docs/kusama-timeline",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-timeline.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1711003964e3,frontMatter:{id:"kusama-timeline",title:"Kusama Timeline",sidebar_label:"Timeline",description:"Stay up-to-date with the latest action on Kusama.",keywords:["timeline","roadmap","kusama"],slug:"../../kusama-timeline"},sidebar:"docs",previous:{title:"Home",permalink:"/docs/kusama-getting-started"},next:{title:"Code of Conduct",permalink:"/docs/kusama-coc"}},l={},u=[{value:"Rollout plan",id:"rollout-plan",level:2},{value:"Kusama&#39;s First Adventure",id:"kusamas-first-adventure",level:2},{value:"Kusama&#39;s Current Adventure: Auctions",id:"kusamas-current-adventure-auctions",level:2}];function d(e){const t={a:"a",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Kusama network started as a Proof-of-Authority network and was transitioned to Proof-of-Stake on\nOctober 28, 2019 at approximately 16:43 UTC. The first successful validator set rotation took place\nat 20:45 UTC."}),"\n",(0,n.jsx)(t.p,{children:"Currently, Kusama is a healthy Proof-of-Stake network with over 900 validators and over eight\nmillion blocks produced. If you are curious about the history of the Kusama network, you will find\nmore information in the sections below."}),"\n",(0,n.jsx)(t.h2,{id:"rollout-plan",children:"Rollout plan"}),"\n",(0,n.jsx)(t.p,{children:"The rollout of full functionality of Kusama was staggered to allow for a safe transition. The first\nPoS phase began with 20 validators. Of the 20, Web3 Foundation ran nine and Parity Technologies ran\nsix. Five were ran by highly staked community members as voted in by the Phragm\xe9n election."}),"\n",(0,n.jsx)(t.p,{children:"When the initial transition was successful, additional validator spots were opened 10 at a time in\norder to allow for more validators to enter the active set."}),"\n",(0,n.jsx)(t.p,{children:"When the first transition to PoS took place, the full functionality of Kusama was not fully\navailable. Notably, the Sudo key still existed and was used to initiate further upgrades. Balance\ntransfers were still disabled for a short while."}),"\n",(0,n.jsx)(t.p,{children:"Kusama now has its full functionality enabled."}),"\n",(0,n.jsx)(t.h2,{id:"kusamas-first-adventure",children:"Kusama's First Adventure"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://polkadot.network/kusamas-first-adventure/",children:"Source"})}),"\n",(0,n.jsx)(t.p,{children:"On January 4, 2020, the Polkadot mainnet runtime, which at that time still wasn't live, was uploaded\nto the Kusama chain during a runtime upgrade. The mishap was due to a recent split of the Kusama\nlogic from the Polkadot logic and that runtime was not correctly named. This led to a halt of block\nproduction on the Kusama chain and bricked the chain entirely."}),"\n",(0,n.jsx)(t.p,{children:"The solution to the issue involved a rollback of the chain history before the problematic runtime\nupgrade. However, due to intricacies of the block production mechanism, it was also necessary to\nencapsulate the validators of the chain into a time bubble to trick them into believing that they\nwere producing blocks in the past. Furthermore, in order for the chain to catch up to the present\nmoment it was necessary to make time flow in the bubble at a speed of six times greater than the\nspeed of time in the real world. Therefore, the session of Kusama which would normally last one hour\nwould last only 10 minutes until the validators caught up to the present moment."}),"\n",(0,n.jsxs)(t.p,{children:["The above plan was executed successfully on January 7, 2020. Due to the time warp, the number of\nmissed blocks in the sessions directly following\n",(0,n.jsx)(t.a,{href:"https://kusama.subscan.io/block/516558",children:"block #516558"})," was significantly higher. This is partly\nwhat contributes to the much higher ratio of missed blocks on Kusama versus Polkadot today."]}),"\n",(0,n.jsx)(t.h2,{id:"kusamas-current-adventure-auctions",children:"Kusama's Current Adventure: Auctions"}),"\n",(0,n.jsx)(t.p,{children:"Kusama promised chaos, and it delivered on that promise. On June 15th, 2021, the roll out of the\nfirst public parachain slot auction commenced, marking the beginning of the end to deliver on the\nlast piece of core functionality outlined in the Polkadot whitepaper: purpose-built, interoperable\nparachains."}),"\n",(0,n.jsxs)(t.p,{children:["Teams and projects looking to become an official parachain on the Kusama network have been working\nhard to bring their technologies to life, many of whom started a\n",(0,n.jsx)(t.a,{href:"/docs/learn-crowdloans##starting-a-crowdloan-campaign",children:"crowdloan campaign"})," in order to\nparticipate in the slot auctions."]}),"\n",(0,n.jsx)(t.p,{children:"Kusama has made history with the permissionless launch of several independent parachains, and\ncontinues to do so with ongoing slot auction. As parachains become operational, the community will\ndetermine which additional features and network upgrades should be added over time."}),"\n",(0,n.jsx)(t.p,{children:"While Kusama\u2019s current parachains are taking advantage of the built-in features of the network and\nforkless upgradability provided by Substrate, chaos continues, and in the spirit of chaos, more\nteams are eager to deploy on Kusama. The path of Kusama deployment has paved the way to Polkadot's\nparachains as the technology became proven."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>r});var n=a(96540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);