(self.webpackChunk=self.webpackChunk||[]).push([[4505],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96949:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>p});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),s=["components"],i={id:"learn-balance-transfers",title:"Balance Transfers",sidebar_label:"How to transfer Balances"},l=void 0,c={unversionedId:"learn-balance-transfers",id:"learn-balance-transfers",isDocsHomePage:!1,title:"Balance Transfers",description:"Balance transfers are used to send balance from one account to another account. To start",source:"@site/../docs/learn-balance-transfers.md",sourceDirName:".",slug:"/learn-balance-transfers",permalink:"/docs/learn-balance-transfers",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-balance-transfers.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1627355829,formattedLastUpdatedAt:"7/27/2021",frontMatter:{id:"learn-balance-transfers",title:"Balance Transfers",sidebar_label:"How to transfer Balances"},sidebar:"docs",previous:{title:"Identity",permalink:"/docs/learn-identity"},next:{title:"Transaction Fees",permalink:"/docs/learn-transaction-fees"}},u=[{value:"Polkadot-JS Apps",id:"polkadot-js-apps",children:[{value:"Using the Transfer Tab",id:"using-the-transfer-tab",children:[]},{value:"Keep-Alive Checks",id:"keep-alive-checks",children:[]},{value:"Existing Reference Error",id:"existing-reference-error",children:[]},{value:"From the Accounts Page",id:"from-the-accounts-page",children:[]}]}],d={toc:u};function p(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Balance transfers are used to send balance from one account to another account. To start\ntransferring balances, we will begin by using ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps"),". This guide assumes that you've\nalready ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-generation"},"created an account")," and have some funds that are ready to be\ntransferred."),(0,r.kt)("h2",{id:"polkadot-js-apps"},"Polkadot-JS Apps"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: In this walkthrough we will be using the Polkadot network, but this is the same process for\nKusama. If you would like to switch to a different network, you can change it by clicking the top\nleft navigation dropdown and selecting a different network.")),(0,r.kt)("p",null,"Let's begin by opening ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps"),". There are two ways to make a balance transfer:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'By using the "Transfer" tab in the "Accounts" dropdown (located on the top navigational menu).'),(0,r.kt)("li",{parentName:"ol"},'Clicking the "send" button while in the "Accounts" page.')),(0,r.kt)("h3",{id:"using-the-transfer-tab"},"Using the Transfer Tab"),(0,r.kt)("p",null,'Click on the "Transfer" tab in the "Accounts" dropdown.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"transfer",src:n(56607).Z})),(0,r.kt)("p",null,"Now a modal window will appear on the page. The modal asks you to enter 3 inputs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"send from account": Your account with funds that you will send from.'),(0,r.kt)("li",{parentName:"ul"},'"send to address": The address of the account that will receive the funds.'),(0,r.kt)("li",{parentName:"ul"},'"amount": The amount of tokens you will transfer.')),(0,r.kt)("p",null,'The "existential deposit" box shows you the ',(0,r.kt)("strong",{parentName:"p"},"minimum amount of funds you must keep in the account\nfor it to remain active.")," See the ",(0,r.kt)("a",{parentName:"p",href:"build-protocol-info#existential-deposit"},"existential deposit")," section for more information."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"transfer",src:n(60701).Z})),(0,r.kt)("p",null,'After setting your inputs correctly, click the "Make Transfer" button and confirm. Once the transfer\nis included in a block you will see a green notification in the top-right corner of your screen.'),(0,r.kt)("h3",{id:"keep-alive-checks"},"Keep-Alive Checks"),(0,r.kt)("p",null,"At an ",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary#extrinsic"},"extrinsic")," level, there are two main ways to transfer funds from one\naccount to another. These are ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," will allow you to\nsend DOTs regardless of the consequence; ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive")," will not allow you to send an amount\nthat would allow the sending account to be removed due to it going below the existential deposit."),(0,r.kt)("p",null,"By default, Polkadot-JS Apps will use ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive"),', ensuring that the account you send from\ncannot drop below the existential deposit (1 DOT or 0.001666 KSM). However, it may be that you do\nnot want to keep this account alive (for example, because you are moving all of your funds to a\ndifferent address). In this case, click on the "keep-alive" toggle at the bottom of the modal\nwindow. The label should switch from "Transfer with account keep-alive checks"(',(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive"),'\nwill be used) to "Normal transfer without keep-alive checks" (',(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," extrinsic will be used). As\na common use case for using normal transfers is to entirely clear out the account, a second toggle\nwill appear if you have the keep-alive check turned off that will send all the tokens in the\naccount, minus a transaction fee, to the destination address."),(0,r.kt)("p",null,"Attempting to send less than the existential deposit to an account with 0 DOT will always fail, no\nmatter if the keep-alive check is on or not. For instance, attempting to transfer 0.1 DOT to an\naccount you just generated (and thus has no DOT) will fail, since 0.1 is less than the existential\ndeposit of 1 DOT and the account cannot be initialized with such a low balance."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: Even if the transfer fails due to a keep-alive check, the transaction fee will be deducted\nfrom the sending account if you attempt to transfer.")),(0,r.kt)("h3",{id:"existing-reference-error"},"Existing Reference Error"),(0,r.kt)("p",null,'If you are trying to reap an account and you recieve an error similar to "There is an existing\nreference count on the sender account. As such the account cannot be reaped from the state", then\nyou have existing references to this account that must first be removed before it can be reaped.\nReferences may still exist from:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bonded tokens (most likely)"),(0,r.kt)("li",{parentName:"ul"},"Unpurged session keys (if you were prevously a validator)"),(0,r.kt)("li",{parentName:"ul"},"Token locks"),(0,r.kt)("li",{parentName:"ul"},"Existing recovery info"),(0,r.kt)("li",{parentName:"ul"},"Existing assets")),(0,r.kt)("h4",{id:"bonded-tokens"},"Bonded Tokens"),(0,r.kt)("p",null,"If you have tokens that are bonded, you will need to unbond them before you can reap your account.\nFollow the instructions at ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-unbond"},"Unbonding and Rebonding")," to check if\nyou have bonded tokens, stop nominating (if necessary) and unbond your tokens."),(0,r.kt)("h4",{id:"purging-session-keys"},"Purging Session Keys"),(0,r.kt)("p",null,"If you used this account to set up a validator and you did not purge your keys before unbonding your\ntokens, you need to purge your keys. You can do this by seeing the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-stop-validating"},"How to Stop Validating")," page. This can also be checked\nby checking ",(0,r.kt)("inlineCode",{parentName:"p"},"session.nextKeys")," in the chain state for an existing key."),(0,r.kt)("h4",{id:"checking-for-locks"},"Checking for Locks"),(0,r.kt)("p",null,"You can check for locks by querying ",(0,r.kt)("inlineCode",{parentName:"p"},"system.account(AccountId)")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer > Chain state"),'.\nSelect your account, then click the "+" button next to the dropdowns, and check the relative ',(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\nJSON object. If you see a non-zero value for anything other than ",(0,r.kt)("inlineCode",{parentName:"p"},"free"),", you have locks on your\naccount that need to get resolved."),(0,r.kt)("p",null,"You can also check for locks by navigating to ",(0,r.kt)("inlineCode",{parentName:"p"},"Accounts > Accounts")," in\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/"},"PolkadotJS Apps"),". Then, click the dropdown arrow of the relevant\naccount under the 'balances' column. If it shows that some tokens are in a 'locked' state, you can\nsee why by hovering over the information icon next to it."),(0,r.kt)("h4",{id:"existing-recovery-info"},"Existing Recovery Info"),(0,r.kt)("p",null,"Currently, Polkadot  does not use the\n",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/frame#recovery"},"Recovery Pallet"),", so this is\nprobably not the reason for your tokens having existing references."),(0,r.kt)("p",null,"","","",""),(0,r.kt)("h4",{id:"existing--polkadot-non-dot-polkadot---kusama-non-ksm-kusama--assets"},"Existing {{ polkadot: Non-DOT :polkadot }} {{ kusama: Non-KSM :kusama }} Assets"),(0,r.kt)("p",null,"Currently, Polkadot  does not use the\n",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/frame#assets"},"Assets Pallet"),", so this is\nprobably not the reason for your tokens having existing references."),(0,r.kt)("h3",{id:"from-the-accounts-page"},"From the Accounts Page"),(0,r.kt)("p",null,'Navigate to the "Accounts" page by selecting the "Accounts" tab from the "Accounts" dropdown located\non the top navigational menu of Polkadot-JS Apps.'),(0,r.kt)("p",null,'You will see a list of accounts you have loaded. Click the "Send" button in the row for the account\nyou will like to send funds from.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"transfer",src:n(56873).Z})),(0,r.kt)("p",null,'Now you will see the same modal window as if using the "Transfer" tab. Fill in the inputs correctly\nand hit "Make Transfer" then confirm the balance transfer. You will see a green notification in the\ntop-right corner of the screen when the transfer is included in a block.'))}p.isMDXComponent=!0},56607:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer-1-f6f309bbc7388327e58853eae66c5d1e.png"},60701:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer-2-65ec4db364371a79f239abe5b190d7b9.png"},56873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer-3-ed7c8c2299bbe828723b721321b88868.png"}}]);