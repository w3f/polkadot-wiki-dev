(self.webpackChunk=self.webpackChunk||[]).push([[1090],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(a),m=o,p=h["".concat(s,".").concat(m)]||h[m]||d[m]||r;return a?n.createElement(p,i(i({ref:t},c),{},{components:a})):n.createElement(p,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7007:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>c,default:()=>h});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i=["components"],l={id:"kusama-timeline",title:"Kusama Timeline",sidebar_label:"Timeline",description:"Stay up-to-date with the latest action on Kusama.",slug:"../../kusama-timeline"},s=void 0,u={unversionedId:"general/kusama/kusama-timeline",id:"general/kusama/kusama-timeline",isDocsHomePage:!1,title:"Kusama Timeline",description:"Stay up-to-date with the latest action on Kusama.",source:"@site/../docs/general/kusama/kusama-timeline.md",sourceDirName:"general/kusama",slug:"/kusama-timeline",permalink:"/docs/kusama-timeline",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-timeline.md",tags:[],version:"current",lastUpdatedBy:"alex",lastUpdatedAt:1634966075,formattedLastUpdatedAt:"10/23/2021",frontMatter:{id:"kusama-timeline",title:"Kusama Timeline",sidebar_label:"Timeline",description:"Stay up-to-date with the latest action on Kusama.",slug:"../../kusama-timeline"}},c=[{value:"Rollout plan",id:"rollout-plan",children:[],level:2},{value:"Kusama&#39;s First Adventure",id:"kusamas-first-adventure",children:[],level:2},{value:"Kusama&#39;s Current Adventure: Auctions",id:"kusamas-current-adventure-auctions",children:[{value:"Round One",id:"round-one",children:[],level:3},{value:"Round Two",id:"round-two",children:[],level:3}],level:2}],d={toc:c};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kusama network started as a Proof-of-Authority network and was transitioned to Proof-of-Stake on\nOctober 28, 2019 at approximately 16:43 UTC. The first successful validator set rotation\ntook place at 20:45 UTC."),(0,r.kt)("p",null,"Currently, Kusama is a healthy Proof-of-Stake network with over 900 validators and over eight\nmillion blocks produced. If you are curious about the history of the Kusama network, you will find\nmore information in the sections below."),(0,r.kt)("h2",{id:"rollout-plan"},"Rollout plan"),(0,r.kt)("p",null,"The rollout of full functionality of Kusama was staggered to allow for a safe transition. The first\nPoS phase began with 20 validators. Of the 20, Web3 Foundation ran nine and Parity Technologies\nran six. Five were ran by highly staked community members as voted in by the Phragm\xe9n election."),(0,r.kt)("p",null,"When the initial transition was successful, additional validator spots were opened 10 at a time in\norder to allow for more validators to enter the active set."),(0,r.kt)("p",null,"When the first transition to PoS took place, the full functionality of Kusama was not fully\navailable. Notably, the Sudo key still existed and was used to initiate further upgrades. Balance\ntransfers were still disabled for a short while."),(0,r.kt)("p",null,"Kusama now has its full functionality enabled."),(0,r.kt)("h2",{id:"kusamas-first-adventure"},"Kusama's First Adventure"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/kusamas-first-adventure/"},"Source")),(0,r.kt)("p",null,"On January 4, 2020, the Polkadot mainnet runtime, which at that time still wasn't live, was\nuploaded to the Kusama chain during a runtime upgrade. The mishap was due to a recent split of the\nKusama logic from the Polkadot logic and that runtime was not correctly named. This led to a halt of\nblock production on the Kusama chain and bricked the chain entirely."),(0,r.kt)("p",null,"The solution to the issue involved a rollback of the chain history before the problematic runtime\nupgrade. However, due to intricacies of the block production mechanism, it was also\nnecessary to encapsulate the validators of the chain into a time bubble to trick them into believing\nthat they were producing blocks in the past. Furthermore, in order for the chain to catch up to the\npresent moment it was necessary to make time flow in the bubble at a speed of six times greater than\nthe speed of time in the real world. Therefore, the session of Kusama which would normally last one\nhour would last only 10 minutes until the validators caught up to the present moment."),(0,r.kt)("p",null,"The above plan was executed successfully on January 7, 2020. Due to the time warp, the number of\nmissed blocks in the sessions directly following\n",(0,r.kt)("a",{parentName:"p",href:"https://polkascan.io/kusama/block/516558"},"block #516558")," was significantly higher. This is partly\nwhat contributes to the much higher ratio of missed blocks on Kusama versus Polkadot today."),(0,r.kt)("h2",{id:"kusamas-current-adventure-auctions"},"Kusama's Current Adventure: Auctions"),(0,r.kt)("h3",{id:"round-one"},"Round One"),(0,r.kt)("p",null,"Kusama promised chaos, and it delivered on that promise. On June 15th, 2021, the roll out of the\nfirst public parachain slot auction commenced, marking the beginning of the end to deliver on the\nlast piece of core functionality outlined in the Polkadot whitepaper: purpose-built, interoperable\nparachains."),(0,r.kt)("p",null,"Teams and projects looking to become an official parachain on the Kusama network have been working\nhard to bring their technologies to life, many of whom started a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-crowdloans##starting-a-crowdloan-campaign"},"crowdloan campaign")," in order to participate in\nthe slot auctions."),(0,r.kt)("p",null,"The five Kusama parachain winners for the first batch were:\nKarura, Moonriver, Shiden, Khala, and Bifrost."),(0,r.kt)("p",null,"Kusama made history with a permissionless launch of five independent parachains. As parachains become operational, the community will determine which additional features and network upgrades should be added over time."),(0,r.kt)("h3",{id:"round-two"},"Round Two"),(0,r.kt)("p",null,"While Kusama\u2019s first five parachains are taking advantage of the built-in features of the network and forkless upgradability provided by Substrate,"),(0,r.kt)("p",null,"chaos continues."),(0,r.kt)("p",null,"And in the spirit of chaos, more teams are eager to deploy on Kusama.\nThe launch of the second batch of parachain slot auctions officially went live in September 2021.\nSlot auctions occurred over six weeks, where the auctions were expanded by Kusama Council to include\nsix auctions instead of the original five. "),(0,r.kt)("p",null,"There will be a pause for evaluation of overall network performance before a third batch of auctions begins\nin a similar schedule."),(0,r.kt)("p",null,"The six Kusama parachain winners for the second batch were:\nKILT, Calamari, Basilisk, Altair, Parallel Heiko and ****"),(0,r.kt)("p",null,"The path of Kusama deployment will pave the way to Polkadot's parachains as the technology becomes proven."))}h.isMDXComponent=!0}}]);