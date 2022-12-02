(self.webpackChunk=self.webpackChunk||[]).push([[8080],{7940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(4165),o=n(5861),r=n(7294),s=n(3444),i=n(7764),l=n(7425);function p(e,t,n){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)((0,a.Z)().mark((function e(t,n,o){var r,l,p,u,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return p=new s.U(r),e.next=21,i.G.create({provider:p});case 21:u=e.sent,(c=n.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=u.toString(),e.abrupt("break",35);case 29:return e.next=31,u();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+n);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"precise":(0,l.Precise)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,n=e.path,s=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,u=(0,r.useState)(""),d=u[0],k=u[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?c(s.toString(),l,t,k):k(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n,k);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?c(o,l,t,k):k(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(i){console.log(i)}}}),[]),d}},7425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,n,a){var o=void 0;if("polkadot"===n||"statemint"===n)o=3;else{if("kusama"!==n&&"statemine"!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),a((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(o)+" "+t[n].symbol).toString())},Precise:function(e,n,a){a(e=(e=parseFloat(e))/t[n].precision+" "+t[n].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},3583:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=n(7940),i=["components"],l={id:"learn-balance-transfers",title:"Balance Transfers",sidebar_label:"Balances Transfers",keywords:["balance","transfers","transaction","signing"],description:"Steps on how to perform balance transfers.",slug:"../learn-balance-transfers"},p=void 0,u={unversionedId:"learn/learn-balance-transfers",id:"learn/learn-balance-transfers",title:"Balance Transfers",description:"Steps on how to perform balance transfers.",source:"@site/../docs/learn/learn-balance-transfers.md",sourceDirName:"learn",slug:"/learn-balance-transfers",permalink:"/docs/learn-balance-transfers",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-balance-transfers.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1668498311,formattedLastUpdatedAt:"Nov 15, 2022",frontMatter:{id:"learn-balance-transfers",title:"Balance Transfers",sidebar_label:"Balances Transfers",keywords:["balance","transfers","transaction","signing"],description:"Steps on how to perform balance transfers.",slug:"../learn-balance-transfers"},sidebar:"docs",previous:{title:"Account Generation",permalink:"/docs/learn-account-generation"},next:{title:"Extrinsics",permalink:"/docs/learn-extrinsics"}},c={},d=[{value:"Sending Funds using UI, Extension, Parity Signer &amp; Ledger",id:"sending-funds-using-ui-extension-parity-signer--ledger",level:2},{value:"Keep-Alive Checks",id:"keep-alive-checks",level:2},{value:"Existing Reference Error",id:"existing-reference-error",level:2},{value:"Bonded Tokens",id:"bonded-tokens",level:3},{value:"Checking for Locks",id:"checking-for-locks",level:3},{value:"Purging Session Keys",id:"purging-session-keys",level:3},{value:"Existing Recovery Info",id:"existing-recovery-info",level:3},{value:"Existing {{ polkadot: Non-DOT :polkadot }}{{ kusama: Non-KSM :kusama }} Assets",id:"existing--polkadot-non-dot-polkadot--kusama-non-ksm-kusama--assets",level:3}],k={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Balance transfers are used to send a balance from one account to another account. To start\ntransferring a balance, we will begin by using\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),". This guide assumes that you've already\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-generation"},"created an account")," and have some funds that are ready to be\ntransferred."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We support only the use of the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},(0,r.kt)("strong",{parentName:"a"},"Polkadot-JS UI")),"\ntogether with the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},(0,r.kt)("strong",{parentName:"a"},"browser extension")),",\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},(0,r.kt)("strong",{parentName:"a"},"Ledger"))," and\n",(0,r.kt)("a",{parentName:"p",href:"https://www.parity.io/technologies/signer/"},(0,r.kt)("strong",{parentName:"a"},"Parity Signer"))," for signing transactions. We do not\nprovide support for third party applications.")),(0,r.kt)("h2",{id:"sending-funds-using-ui-extension-parity-signer--ledger"},"Sending Funds using UI, Extension, Parity Signer & Ledger"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the video tutorial below to learn how to send funds using the supported tools.")),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://youtube.com/embed/gbvrHzr4EDY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"Transfer of Funds",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the Polkadot Support pages for detailed information about transferring funds using the\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170304-how-to-send-transfer-funds-out-of-your-dot-account-on-the-polkadot-js-ui"},"Polkadot-JS UI"),".")),(0,r.kt)("admonition",{title:"Signing Transactions",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the Polkadot Support pages for detailed information about signing transactions using:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000181993-how-to-sign-a-transaction-directly-on-polkadot-js-ui"},"The Polkadot-JS UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000181989"},"The Polkadot-JS browser extension")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000181994-how-to-sign-a-transaction-on-ledger"},"Ledger devices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000182000-how-to-sign-a-transaction-in-parity-signer"},"The Parity Signer app"),"."))),(0,r.kt)("h2",{id:"keep-alive-checks"},"Keep-Alive Checks"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/Wg0pH05CC9Y"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," and\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-"},(0,r.kt)("strong",{parentName:"a"},"this support page")),"\nto learn about keep-alive checks and existential deposit.")),(0,r.kt)("p",null,"In Polkadot there are two main ways to\ntransfer funds from one account to another:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transfer keep-alive")," (default option) will not allow you to send an amount that would allow the\nsending account to be removed due to it going below the\n",(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-"},"existential deposit"),"\nof\n",(0,r.kt)(s.Z,{network:"polkadot",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),".\n",""),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transfer")," will allow you to send DOT\nregardless of the consequence. If the balance drops below the existential deposit your account\nwill be reaped. It may be that you do not want to keep the account alive (for example, because you\nare moving all of your funds to a different address). To switch the keep-alive check off visit\n",(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000169248"},"this support article"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Attempting to send less than the existential deposit to an account with\n0 DOT will always fail, no matter if the\nkeep-alive check is on or not.")),(0,r.kt)("p",null,"For instance, attempting to transfer 0.1 DOT to an account you just generated\n(and thus has no DOT) will fail, since 0.1 is less than the existential deposit of 1 DOT and the account\ncannot be initialized with such a low balance."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Even if the transfer fails due to a keep-alive check, the transaction fee will be deducted from the\nsending account if you attempt to transfer.")),(0,r.kt)("h2",{id:"existing-reference-error"},"Existing Reference Error"),(0,r.kt)("p",null,"If you are trying to reap an account and you receive an error similar to\n",(0,r.kt)("inlineCode",{parentName:"p"},'"There is an existing reference count on the sender account. As such the account cannot be reaped from the state"'),",\nthen you have existing references to this account that must be first removed before it can be\nreaped. References may still exist from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bonded tokens (most likely)"),(0,r.kt)("li",{parentName:"ul"},"Unpurged session keys (if you were previously a validator)"),(0,r.kt)("li",{parentName:"ul"},"Token locks"),(0,r.kt)("li",{parentName:"ul"},"Existing recovery info"),(0,r.kt)("li",{parentName:"ul"},"Existing assets")),(0,r.kt)("h3",{id:"bonded-tokens"},"Bonded Tokens"),(0,r.kt)("p",null,"If you have tokens that are bonded, you will need to unbond them before you can reap your account.\nFollow the instructions at ",(0,r.kt)("a",{parentName:"p",href:"../maintain/maintain-guides-how-to-unbond.md"},"Unbonding and Rebonding"),"\nto check if you have bonded tokens, stop nominating (if necessary) and unbond your tokens."),(0,r.kt)("h3",{id:"checking-for-locks"},"Checking for Locks"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/LHgY7ds_bZ0"},"this video tutorial")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169437-why-can-t-i-transfer-tokens-"},"this support page"),"\nto learn how to check for locks and remove them.")),(0,r.kt)("p",null,"You can also check for locks by querying ",(0,r.kt)("inlineCode",{parentName:"p"},"system.account(AccountId)")," in\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},(0,r.kt)("inlineCode",{parentName:"a"},"Chain state")," tab under the ",(0,r.kt)("inlineCode",{parentName:"a"},"Developer")," drop-down menu in the Polkadot-JS UI"),'.\nSelect your account, then click the "+" button next to the dropdowns, and check the relative ',(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\nJSON object. If you see a non-zero value for anything other than ",(0,r.kt)("inlineCode",{parentName:"p"},"free"),", you have locks on your\naccount that need to get resolved."),(0,r.kt)("h3",{id:"purging-session-keys"},"Purging Session Keys"),(0,r.kt)("p",null,"If you used this account to set up a validator and you did not purge your keys before unbonding your\ntokens, you need to purge your keys. You can do this by seeing the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-stop-validating"},"How to Stop Validating")," page. This can also\nbe checked by checking ",(0,r.kt)("inlineCode",{parentName:"p"},"session.nextKeys")," in the chain state for an existing key."),(0,r.kt)("h3",{id:"existing-recovery-info"},"Existing Recovery Info"),(0,r.kt)("p",null,"Currently, Polkadot does not use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/frame/recovery/"},"Recovery Pallet"),", so this is\nprobably not the reason for your tokens having existing references."),(0,r.kt)("p",null,"","","",""),(0,r.kt)("h3",{id:"existing--polkadot-non-dot-polkadot--kusama-non-ksm-kusama--assets"},"Existing Non-DOT Assets"),(0,r.kt)("p",null,"Currently, Polkadot does not use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/assets"},"Assets Pallet"),", so this is\nprobably not the reason for your tokens having existing references."))}h.isMDXComponent=!0},3971:()=>{},6601:()=>{}}]);