(self.webpackChunk=self.webpackChunk||[]).push([[2914],{47940:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var i=n(74165),a=n(15861),o=n(67294),s=n(87152),r=n(14741),d=n(67425);function l(t,e,n){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,i.Z)().mark((function t(e,n,a){var o,d,l,u,p;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=void 0,d=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){t.next=18;break}return t.abrupt("return");case 18:return l=new s.U(o),t.next=21,r.G.create({provider:l});case 21:u=t.sent,(p=n.split(".")).forEach((function(t){t in u&&(u=u[t])})),t.t1=p[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return d=u.toString(),t.abrupt("break",35);case 29:return t.next=31,u();case 31:return d=(d=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+n);case 35:return t.abrupt("return",d);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t,e,n,i){switch(e){case"humanReadable":(0,d.HumanReadable)(t,n,i);break;case"precise":(0,d.Precise)(t,n,i);break;case"blocksToDays":(0,d.BlocksToDays)(t,i);break;case"erasToDays":(0,d.ErasToDays)(t,i,n);break;case"percentage":(0,d.Percentage)(t,i);break;case"permillToPercent":(0,d.PermillToPercent)(t,i);break;case"arrayLength":(0,d.ArrayLength)(t,i);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(t){var e=t.network,n=t.path,s=t.defaultValue,r=t.filter,d=void 0===r?void 0:r,u=(0,o.useState)(""),c=u[0],h=u[1];return e=e.toLowerCase(),(0,o.useEffect)((function(){void 0!==d?p(s.toString(),d,e,h):h(s.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":t="wss://polkadot-asset-hub-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var t=(0,a.Z)((0,i.Z)().mark((function t(){var a;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e,n,h);case 2:if(void 0!==(a=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==d?p(a,d,e,h):h(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),c}},67425:t=>{var e="polkadot",n="kusama",i="statemine",a="statemint",o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,s,r){var d=void 0;if(s===e||s===a)d=3;else{if(s!==n&&s!==i)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=6}t=parseFloat(t),r((t=Number.isInteger(t/o[s].precision)?t/o[s].precision+" "+o[s].symbol:(t/o[s].precision).toFixed(d)+" "+o[s].symbol).toString())},Precise:function(t,e,n){n(t=(t=parseFloat(t))/o[e].precision+" "+o[e].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},ErasToDays:function(t,o,s){var r=void 0;if(s===e||s===a)r=1;else{if(s!==n&&s!==i)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");r=4}o((t/=r).toString())},Percentage:function(t,e){e((t/=1e7).toString())},PermillToPercent:function(t,e){e((t/=1e4).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},77078:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),s=n(47940),r=["components"],d={id:"learn-guides-identity",title:"Polkadot-JS Guides about Identity",sidebar_label:"Identity",description:"Polkadot-JS Guides about Identity.",keywords:["registrar","identity","sub-identity","polkadot-js"],slug:"../learn-guides-identity"},l=void 0,u={unversionedId:"learn/learn-guides-identity",id:"learn/learn-guides-identity",title:"Polkadot-JS Guides about Identity",description:"Polkadot-JS Guides about Identity.",source:"@site/../docs/learn/learn-guides-identity.md",sourceDirName:"learn",slug:"/learn-guides-identity",permalink:"/docs/learn-guides-identity",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-identity.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1708696776,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{id:"learn-guides-identity",title:"Polkadot-JS Guides about Identity",sidebar_label:"Identity",description:"Polkadot-JS Guides about Identity.",keywords:["registrar","identity","sub-identity","polkadot-js"],slug:"../learn-guides-identity"},sidebar:"docs",previous:{title:"Bounties",permalink:"/docs/learn-guides-bounties"},next:{title:"Ledger",permalink:"/docs/learn-guides-ledger"}},p={},c=[{value:"Setting an Identity",id:"setting-an-identity",level:2},{value:"Format Caveat",id:"format-caveat",level:3},{value:"Request Judgement",id:"request-judgement",level:2},{value:"Clearing and Killing an Identity",id:"clearing-and-killing-an-identity",level:2},{value:"Setting Sub-Identities",id:"setting-sub-identities",level:2},{value:"Setting Sub-Identity (Sub-ID) for your Ledger Account",id:"setting-sub-identity-sub-id-for-your-ledger-account",level:3},{value:"Registrars",id:"registrars",level:2},{value:"Becoming a Registrar",id:"becoming-a-registrar",level:3}],h={toc:c},m="wrapper";function g(t){var e=t.components,d=(0,a.Z)(t,r);return(0,o.kt)(m,(0,i.Z)({},h,d,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is an advanced guide that is relevant for entities that would like to become registrars or\nwould like to set sub-identities to an existing account with an identity. See\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-identity"},"this page")," to learn about how to set an identity and have it verified."),(0,o.kt)("h2",{id:"setting-an-identity"},"Setting an Identity"),(0,o.kt)("p",null,"Users can set an identity by registering through default fields such as legal name, display name,\nwebsite, Twitter handle, Riot handle, etc. along with some extra, custom fields for which they would\nlike attestations (see ",(0,o.kt)("a",{parentName:"p",href:"#judgements"},"Judgements"),")."),(0,o.kt)("admonition",{title:"Instructions for setting and clearing Identities",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The procedure to set and clear identities is explained in detail in this support article -\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181981-how-to-set-and-clear-an-identity"},"How to set and clear an Identity"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The Ledger app on ",(0,o.kt)("strong",{parentName:"p"},"Nano S")," doesn't support the extrinsic for setting identity. As a workaround,\ncreate a primary identity with an on-chain account and then using that primary identity, assign a\n",(0,o.kt)("a",{parentName:"p",href:"#sub-accounts"},"sub-identity")," to the Ledger stash.")),(0,o.kt)("h3",{id:"format-caveat"},"Format Caveat"),(0,o.kt)("p",null,"Please note the following caveat: because the fields support different formats, from raw bytes to\nvarious hashes, a UI has no way of telling how to encode a given field it encounters. The\nPolkadot-JS UI currently encodes the raw bytes it encounters as UTF8 strings, which makes these\nvalues readable on-screen. However, given that there are no restrictions on the values that can be\nplaced into these fields, a different UI may interpret them as, for example, IPFS hashes or encoded\nbitmaps. This means any field stored as raw bytes will become unreadable by that specific UI. As\nfield standards crystallize, things will become easier to use but for now, every custom\nimplementation of displaying user information will likely have to make a conscious decision on the\napproach to take, or support multiple formats and then attempt multiple encodings until the output\nmakes sense."),(0,o.kt)("h2",{id:"request-judgement"},"Request Judgement"),(0,o.kt)("admonition",{title:"Instructions for requesting and cancelling Identity judgments",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The procedure to request and cancel identity judgments is explained in detail in this\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181990-how-to-request-and-cancel-identity-judgement"},"support article"))),(0,o.kt)("p",null,"To be judged after submitting your identity information, go to the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics tab in the Polkadot-JS UI")," and select the\n",(0,o.kt)("inlineCode",{parentName:"p"},"identity")," pallet, then ",(0,o.kt)("inlineCode",{parentName:"p"},"requestJudgement"),". For the ",(0,o.kt)("inlineCode",{parentName:"p"},"reg_index")," put the index of the registrar you\nwant to be judged by, and for the ",(0,o.kt)("inlineCode",{parentName:"p"},"max_fee")," put the maximum you're willing to pay for these\nconfirmations."),(0,o.kt)("p",null,"If you don't know which registrar to pick, first check the available registrars by going to\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain State tab in the Polkadot-JS UI")," and selecting\n",(0,o.kt)("inlineCode",{parentName:"p"},"identity.registrars()")," to get the full list."),(0,o.kt)("p",null,"To find out how to contact the registrar after the application for judgement or to learn who they\nare, you can check their identity by adding them to your Address Book. Their identity will be\nautomatically loaded."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chevdor is registrar #1",src:n(65494).Z,width:"579",height:"217"})),(0,o.kt)("admonition",{title:"Requesting judgement through Web3 Foundation Registrar",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you requested judgement for your on-chain identity through the Web3 Foundation Registrar (i.e.\nRegistrar #0) you will need to complete a few additional tasks. For more information visit\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000179747-how-to-use-the-w3f-registrar-page"},"this support article"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The set identity calls go on-chain. Hence, the contact information is available publicly, for both\nlegitimate entities, like registrars or validators, but also scammers who might impersonate them.\nThe strings in the identity fields are good candidates for homograph attacks, as someone could list\na fraudulent website (web3.f0undation instead of web3.foundation for example) and still get verified\nby the registrar (if the checks are automated)!"),(0,o.kt)("p",{parentName:"admonition"},"In a decentralized network, one should be cautious making transactions with accounts solely based on\ntheir identity. If an account on-chain claims to be of Web3 Foundation, it is wise to verify its\nauthenticity by checking directly with Web3 Foundation or examining the established history of that\naccount on-chain.")),(0,o.kt)("h2",{id:"clearing-and-killing-an-identity"},"Clearing and Killing an Identity"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'Visit the section "Clear an Identity" on\n',(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181981"},"this support article")," for\nguidelines about clearing identities.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Clearing:")," Users can clear their identity information and have their deposit returned. Clearing\nan identity also clears all sub accounts and returns their deposits."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Killing:")," The Council can kill an identity that it deems erroneous. This results in a slash of\nthe deposit."),(0,o.kt)("h2",{id:"setting-sub-identities"},"Setting Sub-Identities"),(0,o.kt)("p",null,"To set up sub-identities with Polkadot-JS see the\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181991-how-to-set-identities-for-sub-accounts"},"how to set sub-identities"),"\nsupport article and this ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=0Yh1JYg3ZKU"},"video tutorial"),"."),(0,o.kt)("h3",{id:"setting-sub-identity-sub-id-for-your-ledger-account"},"Setting Sub-Identity (Sub-ID) for your Ledger Account"),(0,o.kt)("p",null,"Setting an Identity is not possible on Ledger app yet, but as a workaround, you can\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-identity#setting-an-identity"},"set the identity for an on-chain account ")," and then\nuse it to set a sub-identity to your Ledger account."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"https://polkadot.js.org/apps/#/accounts"),". Click on the three vertical dots correponding to\nthe account to which you already set identity. You should see an option to set onchain\nsub-identities. Click on it."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Add sub-identity in PolkadotJS",src:n(6865).Z,width:"520",height:"338"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the pop-up window, select your Ledger account from the dropdown and enter text in sub name\nfield. Then, click on set subs button.\n",(0,o.kt)("img",{alt:"Set sub-identity in PolkadotJS",src:n(34440).Z,width:"2155",height:"554"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sign and submit the transaction from the parent account with the identity"))),(0,o.kt)("p",null,"You should now see the sub-identity displayed on-chain. You need to be aware that\n",(0,o.kt)(s.Z,{network:"kusama",path:"consts.identity.basicDeposit",defaultValue:33333e6,filter:"humanReadable",mdxType:"RPC"}),"\n","\nis reserved for setting identity and\n",(0,o.kt)(s.Z,{network:"kusama",path:"consts.identity.subAccountDeposit",defaultValue:6666e6,filter:"humanReadable",mdxType:"RPC"}),"\n","\nfor each sub-identity. This reserved account balance is freed once you\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-identity#clearing-and-killing-an-identity"},"clear the identities")," on the account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sub-identity example",src:n(31495).Z,width:"370",height:"554"})),(0,o.kt)("h2",{id:"registrars"},"Registrars"),(0,o.kt)("h3",{id:"becoming-a-registrar"},"Becoming a Registrar"),(0,o.kt)("p",null,"To become a registrar, submit a pre-image and proposal on\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-guides-polkadot-opengov"},"OpenGov"),", then wait for people to vote on it. For best\nresults, write a post about your identity and intentions beforehand, and once the proposal is in the\nqueue ask people to endorse it so that it gets ahead in the referendum queue."),(0,o.kt)("p",null,"Here's how to submit a proposal to become a registrar:"),(0,o.kt)("p",null,'Go to the Democracy tab, select "Submit preimage", and input the information for this motion -\nnotably which account you\'re nominating to be a registrar in the ',(0,o.kt)("inlineCode",{parentName:"p"},"identity.setRegistrar")," function."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Setting a registrar",src:n(59097).Z,width:"841",height:"417"})),(0,o.kt)("p",null,"Copy the preimage hash. In the above image, that's\n",(0,o.kt)("inlineCode",{parentName:"p"},"0x90a1b2f648fc4eaff4f236b9af9ead77c89ecac953225c5fafb069d27b7131b7"),". Submit the preimage by signing\na transaction."),(0,o.kt)("p",null,'Next, select "Submit Proposal" and enter the previously copied preimage hash. The ',(0,o.kt)("inlineCode",{parentName:"p"},"locked balance"),"\nfield needs to be at least\n",(0,o.kt)(s.Z,{network:"polkadot",path:"consts.identity.basicDeposit",defaultValue:20258e7,filter:"humanReadable",mdxType:"RPC"}),".\n","\nYou can find out the minimum by querying the chain state under\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain State")," -> Constants -> democracy ->\nminimumDeposit."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Submitting a proposal",src:n(45208).Z,width:"852",height:"337"})),(0,o.kt)("p",null,"At this point, DOT holders can endorse the motion. With enough endorsements, the motion will become\na referendum, which is then voted on. If it passes, users will be able to request judgement from\nthis registrar."))}g.isMDXComponent=!0},59097:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const i=n.p+"assets/images/12-0b101bf170ff7602551199f625c54b7d.jpg"},45208:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const i=n.p+"assets/images/13-df6ee832e734da72fd9461f4446ea3b9.jpg"},65494:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const i=n.p+"assets/images/16-95dc969648d23cdfdd68bf04135818bb.jpg"},6865:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const i=n.p+"assets/images/sub-id-1-18df099d5c97fdff246815ad91922e32.png"},34440:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const i=n.p+"assets/images/sub-id-2-40b39041ca30296d805003d186f66763.png"},31495:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const i=n.p+"assets/images/sub-id-3-a650cce50e6bfef97c03ebd7b463419c.png"},46601:()=>{}}]);