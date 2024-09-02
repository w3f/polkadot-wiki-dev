"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[566],{15680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>y});var a=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(o),p=n,y=h["".concat(c,".").concat(p)]||h[p]||d[p]||r;return o?a.createElement(y,i(i({ref:t},u),{},{components:o})):a.createElement(y,i({ref:t},u))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},96365:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var a=o(58168),n=o(98587),r=(o(96540),o(15680)),i=["components"],s={id:"build-guides-coretime-troubleshoot",title:"Coretime Troubleshooting FAQ",sidebar_label:"Troubleshooting FAQ",description:"FAQ on issues related to using coretime and testing/deploying parachains using Polkadot SDK",keywords:["coretime","blockspace","parathread","parachain","cores","coretime","agile"],slug:"../build-guides-coretime-troubleshoot"},c=void 0,l={unversionedId:"build/build-guides-coretime-troubleshoot",id:"build/build-guides-coretime-troubleshoot",title:"Coretime Troubleshooting FAQ",description:"FAQ on issues related to using coretime and testing/deploying parachains using Polkadot SDK",source:"@site/../docs/build/build-guides-coretime-troubleshoot.md",sourceDirName:"build",slug:"/build-guides-coretime-troubleshoot",permalink:"/docs/build-guides-coretime-troubleshoot",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-guides-coretime-troubleshoot.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1716182800,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"build-guides-coretime-troubleshoot",title:"Coretime Troubleshooting FAQ",sidebar_label:"Troubleshooting FAQ",description:"FAQ on issues related to using coretime and testing/deploying parachains using Polkadot SDK",keywords:["coretime","blockspace","parathread","parachain","cores","coretime","agile"],slug:"../build-guides-coretime-troubleshoot"}},u={},h=[{value:"FAQ / Troubleshooting",id:"faq--troubleshooting",level:2},{value:"Why do I have to sync Rococo locally? Can&#39;t I just use a remote, trusted node and connect to that?",id:"why-do-i-have-to-sync-rococo-locally-cant-i-just-use-a-remote-trusted-node-and-connect-to-that",level:3},{value:"Is there a faster way to sync Rococo? Why not warp sync?",id:"is-there-a-faster-way-to-sync-rococo-why-not-warp-sync",level:3},{value:"My collator is not producing blocks",id:"my-collator-is-not-producing-blocks",level:3},{value:"I want to run more than one collator, how do I do that?",id:"i-want-to-run-more-than-one-collator-how-do-i-do-that",level:3},{value:"Why do we only have one collator in the parachain guides on the Wiki? Isn&#39;t it better to have more?",id:"why-do-we-only-have-one-collator-in-the-parachain-guides-on-the-wiki-isnt-it-better-to-have-more",level:3},{value:"Why are we registering parathreads and not parachains?",id:"why-are-we-registering-parathreads-and-not-parachains",level:3}],d={toc:h},p="wrapper";function y(e){var t=e.components,o=(0,n.A)(e,i);return(0,r.yg)(p,(0,a.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This page aims to cover and aggregate various resources that relate to troubleshooting common\nproblems when using the Polkadot SDK or deploying on a core."),(0,r.yg)("h2",{id:"faq--troubleshooting"},"FAQ / Troubleshooting"),(0,r.yg)("h3",{id:"why-do-i-have-to-sync-rococo-locally-cant-i-just-use-a-remote-trusted-node-and-connect-to-that"},"Why do I have to sync Rococo locally? Can't I just use a remote, trusted node and connect to that?"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"A:")," You can remotely connect to Rococo network via the --relay-chain-rpc-urls flag, which can be\npassed to your node. Unfortunately, the caveat is you can't use this node for collation at this\ntime - meaning if you intend on being a collator/validator for your blockchain and intend to create\nblocks, you need to sync the chain locally."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"is-there-a-faster-way-to-sync-rococo-why-not-warp-sync"},"Is there a faster way to sync Rococo? Why not warp sync?"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"A:")," Warp sync is currently not possible on Rococo or Westend.\n",(0,r.yg)("a",{parentName:"p",href:"https://substrate.stackexchange.com/questions/9730/rococo-cant-warp-sync-stuck-at-16mb-finality-proof-download"},"See this answer for more context."),".\nHowever, ",(0,r.yg)("inlineCode",{parentName:"p"},"--chain=rococo\u2014-sync fast-unsafe")," should provide a faster way to sync with the relay chain\nby skipping downloading state proofs and just verifying the block headers."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"my-collator-is-not-producing-blocks"},"My collator is not producing blocks"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"A:")," Check these sanity checklists:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://substrate.stackexchange.com/questions/178/how-can-i-get-my-parachain-to-produce-blocks-sanity-checklist"},"https://substrate.stackexchange.com/questions/178/how-can-i-get-my-parachain-to-produce-blocks-sanity-checklist")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://substrate.stackexchange.com/questions/1394/our-parachain-doesnt-produce-blocks-checklist"},"https://substrate.stackexchange.com/questions/1394/our-parachain-doesnt-produce-blocks-checklist"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"i-want-to-run-more-than-one-collator-how-do-i-do-that"},"I want to run more than one collator, how do I do that?"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"A:")," Ideally, you would want to run these on separate machines/servers, but you could as long as\nyou ensure you can provide different RPC/WebSocket and P2P ports for each collator. You also may\nneed to sync a separate instance of Rococo for each collator on the same machine. You also will need\nto choose the block production mechanism like\n",(0,r.yg)("a",{parentName:"p",href:"https://substrate.stackexchange.com/questions/5572/production-like-parachain-setup-and-launch"},"Aura"),"."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"why-do-we-only-have-one-collator-in-the-parachain-guides-on-the-wiki-isnt-it-better-to-have-more"},"Why do we only have one collator in the parachain guides on the Wiki? Isn't it better to have more?"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"A:")," Mostly for simplicity. If we have more than one collator, we would have to also spin it up,\nwhich would be a hassle on a single machine (it is possible though). Of course, if you had an actual\nnetwork with multiple collators, it is assumed you'd have separate VPS/servers for each."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"why-are-we-registering-parathreads-and-not-parachains"},"Why are we registering parathreads and not parachains?"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"A:")," When registering a parachain on a relay chain, they are assigned a ",(0,r.yg)("inlineCode",{parentName:"p"},"ParaID"),", and they are\nreferred to as Parathreads till they start producing blocks. ",(0,r.yg)("em",{parentName:"p"},"Parathreads")," are a bit of an outdated\nterm now. They refer to what are now known as on-demand parachains. Although they be references in\nvarious places through PolkadotJS, docs, or other UIs, really we only have two types of parachain:\non-demand parachains, and parachains which use bulk coretime."),(0,r.yg)("hr",null))}y.isMDXComponent=!0}}]);