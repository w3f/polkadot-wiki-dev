"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1969],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73654:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>p,default:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"learn-simple-payouts",title:"Simple Payouts",sidebar_label:"Simple Payouts",description:"An overview of how payouts work for those staking.",keywords:["payouts","simple payouts","rewards","staking"],slug:"../learn-simple-payouts"},l=void 0,d={unversionedId:"learn/learn-simple-payouts",id:"learn/learn-simple-payouts",title:"Simple Payouts",description:"An overview of how payouts work for those staking.",source:"@site/../docs/learn/learn-simple-payouts.md",sourceDirName:"learn",slug:"/learn-simple-payouts",permalink:"/ru-RU/docs/learn-simple-payouts",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-simple-payouts.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649959884,formattedLastUpdatedAt:"14.04.2022",frontMatter:{id:"learn-simple-payouts",title:"Simple Payouts",sidebar_label:"Simple Payouts",description:"An overview of how payouts work for those staking.",keywords:["payouts","simple payouts","rewards","staking"],slug:"../learn-simple-payouts"},sidebar:"docs",previous:{title:"Randomness",permalink:"/ru-RU/docs/learn-randomness"},next:{title:"SPREE",permalink:"/ru-RU/docs/learn-spree"}},p=[{value:"Claiming Rewards",id:"claiming-rewards",children:[],level:2},{value:"F.A.Q. and Cautionary Notes",id:"faq-and-cautionary-notes",children:[],level:2}],c={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Polkadot and Kusama make stakers claim their rewards for past eras by submitting a transaction. This\nnaturally leads to spreading out reward distribution, as people make transactions at disparate\ntimes, rather than updating the accounts of all stakers in a single block."),(0,o.kt)("p",null,"Even if everyone submitted a reward claim at the same time, the fact that they are individual\ntransactions would allow the block construction algorithm to process only a limited number per block\nand ensure that the network maintains a constant block time. If all rewards were sent out in one\nblock, this could cause serious issues with the stability of the network."),(0,o.kt)("p",null,"Simple payouts require one transaction per validator, per ",(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/glossary##era"},"era"),", to claim rewards.\nThe reason Polkadot requires this is to avoid an attack where someone has several thousand accounts\nnominating a single validator. The major cost in reward distribution is mutating the accounts in\nstorage, and Polkadot cannot pay out several thousand accounts in a single transaction."),(0,o.kt)("h2",{id:"claiming-rewards"},"Claiming Rewards"),(0,o.kt)("p",null,"Polkadot stores the last 84 eras of reward information (e.g. maps of era number to validator points,\nstaking rewards, nomination exposure, etc.). Rewards will not be claimable more than 84 eras after\nthey were earned. This means that all rewards must be claimed within a maximum of 84 eras, although\nunder certain circumstances (described below) this may be as low as 28 eras."),(0,o.kt)("p",null,"If a validator kills their stash, any remaining rewards will no longer be claimable. Before doing\nthis, however, they would need to first stop validating and then unbond the funds in their stash,\nwhich takes 28 eras. If a validator were to immediately chill and start unbonding after rewards are\ncalculated, and nobody issued a payout for that era from that validator in the next 28 eras, the\nreward would no longer be claimable."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"In order to be absolutely sure that staking rewards can be claimed, users should trigger a payout before 28 eras have passed.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("p",null,"Anyone can trigger a payout for any validator, as long as they are willing to pay the transaction\nfee. Someone must submit a transaction with a validator ID and an era index. Polkadot will\nautomatically calculate that validator's reward, find the top 256\nnominators for that era, and distribute the rewards pro rata."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"The Staking system only applies the highest 256 nominations to each validator to reduce the complexity of the staking set.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("p",null,"These details are handled for you automatically if you use the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/payout"},"Polkadot-JS UI"),", which also allows you to submit\nbatches of eras at once."),(0,o.kt)("p",null,'To claim rewards on Polkadot-JS UI, you will need to be in the "Payouts" tab underneath "Staking",\nwhich will list all the pending payouts for your stashes.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pending-payouts",src:a(62910).Z,width:"2876",height:"600"})),(0,o.kt)("p",null,'To then claim your reward, select the "Payout all" button. This will prompt you to select your stash\naccounts for payout.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"select-payouts",src:a(31786).Z,width:"2192",height:"624"})),(0,o.kt)("p",null,"Once you are done with payout, another screen will appear asking for you to sign and submit the\ntransaction."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"transaction-payouts",src:a(28223).Z,width:"2878",height:"818"})),(0,o.kt)("h2",{id:"faq-and-cautionary-notes"},"F.A.Q. and Cautionary Notes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rewards expire after 84 eras. On Polkadot, that's about 84 days. On Kusama, it is approximately\n21 days. Validators should claim all pending rewards before killing their stash in the event the\nvalidator decides to ",(0,o.kt)("inlineCode",{parentName:"li"},"chill")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"unbonds all")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"withdraws unbonded"),". Nominators will not miss\nout on rewards if they claim the pending rewards for a validator within 28 days. Essentially, the\ndeadline to ensure you get staking rewards is 28 eras. If the validator verifies its intent and\ndoes not unbond and withdraw, the 84 era timeline holds."),(0,o.kt)("li",{parentName:"ol"},"Claiming rewards (or neglecting to claim rewards) does not affect nominations in any way.\nNominations will persist after claiming rewards or after the rewards expire."),(0,o.kt)("li",{parentName:"ol"},'Rewards are not minted until they are claimed. Therefore, if your reward destination is "stash,\nincreasing amount at stake", then your staked amount does not reflect your rewards until you\nclaim them. If you want to maximize compounding, then you will need to claim often or nominate\nvalidators which regularly claim for you.'),(0,o.kt)("li",{parentName:"ol"},"Staking operations at the end of an era are closed to allow the off-chain validator election to\ntake place. See ",(0,o.kt)("a",{parentName:"li",href:"/ru-RU/docs/learn-phragmen#off-chain-phragmen"},"Off-chain Phragm\xe9n")," for more information.")))}u.isMDXComponent=!0},28223:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_payout_complete-87ad124d5d70e50c16f1434074562d70.png"},62910:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_payout_page-fc4f62399f71b542e9eaac01405ef528.png"},31786:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_payout_popup-feb847cdfae64f3fa247cdb2beea4ba6.png"}}]);