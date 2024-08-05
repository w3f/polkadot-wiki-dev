(self.webpackChunk=self.webpackChunk||[]).push([[2914],{35703:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294);const i=function(e){var t,n=e.message,i=(0,a.useState)(!0),o=i[0],s=i[1];return a.createElement(a.Fragment,null,o&&a.createElement("div",{className:"message-box"},a.createElement("button",{className:"close-button",onClick:function(){s(!1)}},"\u2716 "),a.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(74165),i=n(15861),o=n(67294),s=n(87152),r=n(18509),d=n(67425);function l(e,t,n){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)((0,a.Z)().mark((function e(t,n,i){var o,d,l,p,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,d=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return o="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return o="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==o){e.next=22;break}return e.abrupt("return");case 22:return l=new s.U(o),e.next=25,r.G.create({provider:l});case 25:p=e.sent,(u=n.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=u[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return d=p.toString(),e.abrupt("break",39);case 33:return e.next=35,p();case 35:return d=(d=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+u[0]+") in "+n);case 39:return e.abrupt("return",d);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,n,a){switch(t){case"humanReadable":(0,d.HumanReadable)(e,n,a);break;case"precise":(0,d.Precise)(e,n,a);break;case"blocksToDays":(0,d.BlocksToDays)(e,a);break;case"erasToDays":(0,d.ErasToDays)(e,a,n);break;case"percentage":(0,d.Percentage)(e,a);break;case"permillToPercent":(0,d.PermillToPercent)(e,a);break;case"arrayLength":(0,d.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,n=e.path,s=e.defaultValue,r=e.filter,d=void 0===r?void 0:r,p=(0,o.useState)(""),c=p[0],h=p[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==d?u(s.toString(),d,t,h):h(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t,n,h);case 2:if(void 0!==(i=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==d?u(i,d,t,h):h(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),c}},67425:e=>{var t="polkadot",n="kusama",a="statemine",i="statemint",o="polkadotpeople",s="kusamapeople",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e7,symbol:"milliDOT"},kusamapeople:{precision:1e9,symbol:"milliKSM"}};e.exports={HumanReadable:function(e,d,l){var p=void 0;if(d===t||d===i||d==o)p=3;else{if(d!==n&&d!==a&&d!=s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");p=6}e=parseFloat(e),l((e=Number.isInteger(e/r[d].precision)?e/r[d].precision+" "+r[d].symbol:(e/r[d].precision).toFixed(p)+" "+r[d].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/r[t].precision+" "+r[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,r,d){var l=void 0;if(d===t||d===i||d==o)l=1;else{if(d!==n&&d!==a&&d!=s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=4}r((e/=l).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},77078:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),s=n(47940),r=n(35703),d=["components"],l={id:"learn-guides-identity",title:"Polkadot-JS Guides about Identity",sidebar_label:"Identity Guides",description:"Polkadot-JS Guides about Identity.",keywords:["registrar","identity","sub-identity","polkadot-js"],slug:"../learn-guides-identity"},p=void 0,u={unversionedId:"learn/learn-guides-identity",id:"learn/learn-guides-identity",title:"Polkadot-JS Guides about Identity",description:"Polkadot-JS Guides about Identity.",source:"@site/../docs/learn/learn-guides-identity.md",sourceDirName:"learn",slug:"/learn-guides-identity",permalink:"/docs/learn-guides-identity",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-identity.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1721981666,formattedLastUpdatedAt:"Jul 26, 2024",frontMatter:{id:"learn-guides-identity",title:"Polkadot-JS Guides about Identity",sidebar_label:"Identity Guides",description:"Polkadot-JS Guides about Identity.",keywords:["registrar","identity","sub-identity","polkadot-js"],slug:"../learn-guides-identity"},sidebar:"docs",previous:{title:"Bounty Guides",permalink:"/docs/learn-guides-bounties"},next:{title:"Ledger Guides",permalink:"/docs/learn-guides-ledger"}},c={},h=[{value:"Setting an Identity",id:"setting-an-identity",level:2},{value:"Format Caveat",id:"format-caveat",level:3},{value:"Request Judgement",id:"request-judgement",level:2},{value:"Clearing and Killing an Identity",id:"clearing-and-killing-an-identity",level:2},{value:"Setting Sub-Identities",id:"setting-sub-identities",level:2},{value:"Setting Sub-Identity (Sub-ID) for your Ledger Account",id:"setting-sub-identity-sub-id-for-your-ledger-account",level:3},{value:"Registrars",id:"registrars",level:2},{value:"Becoming a Registrar",id:"becoming-a-registrar",level:3}],m={toc:h},k="wrapper";function g(e){var t=e.components,l=(0,i.Z)(e,d);return(0,o.kt)(k,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,o.kt)("admonition",{title:"The identity pallet is no longer on the Kusama Relay Chain.",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"If you are on ",(0,o.kt)("strong",{parentName:"p"},"Kusama"),", any of the extrinsics which require you to use the relay chain now have to\nbe called via the system parachain,\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss://kusama-people-rpc.polkadot.io"},"which you can find here.")),(0,o.kt)("p",{parentName:"admonition"},"The identity pallet, along with all of its data, has been migrated to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary#people-chain"},"People Chain"),", a system parachain which can now be used for\nidentity management.")),(0,o.kt)("p",null,"This is an advanced guide that is relevant for entities that would like to become registrars or\nwould like to set sub-identities to an existing account with an identity. See\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-identity"},"this page")," to learn about how to set an identity and have it verified."),(0,o.kt)("h2",{id:"setting-an-identity"},"Setting an Identity"),(0,o.kt)("p",null,"Users can set an identity by registering through default fields such as legal name, display name,\nwebsite, Twitter handle, Riot handle, etc. along with some extra, custom fields for which they would\nlike attestations (see ",(0,o.kt)("a",{parentName:"p",href:"#judgements"},"Judgements"),")."),(0,o.kt)("admonition",{title:"Instructions for setting and clearing Identities",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The procedure to set and clear identities is explained in detail in this support article -\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181981-how-to-set-and-clear-an-identity"},"How to set and clear an Identity"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The Ledger app on ",(0,o.kt)("strong",{parentName:"p"},"Nano S")," doesn't support the extrinsic for setting identity. As a workaround,\ncreate a primary identity with an on-chain account and then using that primary identity, assign a\n",(0,o.kt)("a",{parentName:"p",href:"#sub-accounts"},"sub-identity")," to the Ledger stash.")),(0,o.kt)("h3",{id:"format-caveat"},"Format Caveat"),(0,o.kt)("p",null,"Please note the following caveat: because the fields support different formats, from raw bytes to\nvarious hashes, a UI has no way of telling how to encode a given field it encounters. The\nPolkadot-JS UI currently encodes the raw bytes it encounters as UTF8 strings, which makes these\nvalues readable on-screen. However, given that there are no restrictions on the values that can be\nplaced into these fields, a different UI may interpret them as, for example, IPFS hashes or encoded\nbitmaps. This means any field stored as raw bytes will become unreadable by that specific UI. As\nfield standards crystallize, things will become easier to use but for now, every custom\nimplementation of displaying user information will likely have to make a conscious decision on the\napproach to take, or support multiple formats and then attempt multiple encodings until the output\nmakes sense."),(0,o.kt)("h2",{id:"request-judgement"},"Request Judgement"),(0,o.kt)("admonition",{title:"Instructions for requesting and cancelling Identity judgements",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The procedure to request and cancel identity judgments is explained in detail in this\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181990-how-to-request-and-cancel-identity-judgement"},"support article"))),(0,o.kt)("p",null,"To be judged after submitting your identity information, go to the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics tab in the Polkadot-JS UI")," and select the\n",(0,o.kt)("inlineCode",{parentName:"p"},"identity")," pallet, then ",(0,o.kt)("inlineCode",{parentName:"p"},"requestJudgement"),". For the ",(0,o.kt)("inlineCode",{parentName:"p"},"reg_index")," put the index of the registrar you\nwant to be judged by, and for the ",(0,o.kt)("inlineCode",{parentName:"p"},"max_fee")," put the maximum you're willing to pay for these\nconfirmations."),(0,o.kt)("p",null,"If you don't know which registrar to pick, first check the available registrars by going to\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain State tab in the Polkadot-JS UI")," and selecting\n",(0,o.kt)("inlineCode",{parentName:"p"},"identity.registrars()")," to get the full list."),(0,o.kt)("p",null,"To find out how to contact the registrar after the application for judgement or to learn who they\nare, you can check their identity by adding them to your Address Book. Their identity will be\nautomatically loaded."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chevdor is registrar #1",src:n(65494).Z,width:"579",height:"217"})),(0,o.kt)("admonition",{title:"Requesting judgement through Web3 Foundation Registrar",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you requested judgement for your on-chain identity through the Web3 Foundation Registrar (i.e.\nRegistrar #0) you will need to complete a few additional tasks. For more information visit\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000179747-how-to-use-the-w3f-registrar-page"},"this support article"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The set identity calls go on-chain. Hence, the contact information is available publicly, for both\nlegitimate entities, like registrars or validators, but also scammers who might impersonate them.\nThe strings in the identity fields are good candidates for homograph attacks, as someone could list\na fraudulent website (web3.f0undation instead of web3.foundation for example) and still get verified\nby the registrar (if the checks are automated)!"),(0,o.kt)("p",{parentName:"admonition"},"In a decentralized network, one should be cautious making transactions with accounts solely based on\ntheir identity. If an account on-chain claims to be of Web3 Foundation, it is wise to verify its\nauthenticity by checking directly with Web3 Foundation or examining the established history of that\naccount on-chain.")),(0,o.kt)("h2",{id:"clearing-and-killing-an-identity"},"Clearing and Killing an Identity"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'Visit the section "Clear an Identity" on\n',(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181981"},"this support article")," for\nguidelines about clearing identities.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Clearing:")," Users can clear their identity information and have their deposit returned. Clearing\nan identity also clears all sub accounts and returns their deposits."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Killing:")," It is is possible to kill an identity that deems erroneous. This results in a slash of\nthe deposit."),(0,o.kt)("h2",{id:"setting-sub-identities"},"Setting Sub-Identities"),(0,o.kt)("p",null,"To set up sub-identities with Polkadot-JS see the\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181991-how-to-set-identities-for-sub-accounts"},"how to set sub-identities"),"\nsupport article and this ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=0Yh1JYg3ZKU"},"video tutorial"),"."),(0,o.kt)("h3",{id:"setting-sub-identity-sub-id-for-your-ledger-account"},"Setting Sub-Identity (Sub-ID) for your Ledger Account"),(0,o.kt)("p",null,"Setting an Identity is not possible on Ledger app yet, but as a workaround, you can\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-identity#setting-an-identity"},"set the identity for an on-chain account ")," and then\nuse it to set a sub-identity to your Ledger account."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"https://polkadot.js.org/apps/#/accounts"),". Click on the three vertical dots corresponding to\nthe account to which you already set identity. You should see an option to set onchain\nsub-identities. Click on it."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Add sub-identity in PolkadotJS",src:n(6865).Z,width:"520",height:"338"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the pop-up window, select your Ledger account from the dropdown and enter text in sub name\nfield. Then, click on set subs button.\n",(0,o.kt)("img",{alt:"Set sub-identity in PolkadotJS",src:n(34440).Z,width:"2155",height:"554"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sign and submit the transaction from the parent account with the identity"))),(0,o.kt)("p",null,"You should now see the sub-identity displayed on-chain. You need to be aware that\n",(0,o.kt)(s.Z,{network:"polkadotpeople",path:"consts.identity.basicDeposit",defaultValue:20017e5,filter:"humanReadable",mdxType:"RPC"}),"\n","\nis reserved for setting identity and\n",(0,o.kt)(s.Z,{network:"polkadotpeople",path:"consts.identity.subAccountDeposit",defaultValue:20053e5,filter:"humanReadable",mdxType:"RPC"}),"\n","\nfor each sub-identity. This reserved account balance is freed once you\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-identity#clearing-and-killing-an-identity"},"clear the identities")," on the account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sub-identity example",src:n(31495).Z,width:"370",height:"554"})),(0,o.kt)("h2",{id:"registrars"},"Registrars"),(0,o.kt)("h3",{id:"becoming-a-registrar"},"Becoming a Registrar"),(0,o.kt)("p",null,"To become a registrar, submit a pre-image and proposal on\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-guides-polkadot-opengov"},"OpenGov"),", then wait for people to vote on it. For best\nresults, write a post about your identity and intentions beforehand, and once the proposal is in the\nqueue ask people to endorse it so that it gets ahead in the referendum queue."))}g.isMDXComponent=!0},65494:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/16-95dc969648d23cdfdd68bf04135818bb.jpg"},6865:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/sub-id-1-18df099d5c97fdff246815ad91922e32.png"},34440:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/sub-id-2-40b39041ca30296d805003d186f66763.png"},31495:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/sub-id-3-a650cce50e6bfef97c03ebd7b463419c.png"},46601:()=>{}}]);