(self.webpackChunk=self.webpackChunk||[]).push([[8355],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(74165),r=n(15861),i=n(67294),o=n(87152),s=n(14741),l=n(67425);function u(e,t,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)((0,a.Z)().mark((function e(t,n,r){var i,l,u,d,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return u=new o.U(i),e.next=21,s.G.create({provider:u});case 21:d=e.sent,(c=n.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=d.toString(),e.abrupt("break",35);case 29:return e.next=31,d();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+n);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"precise":(0,l.Precise)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"erasToDays":(0,l.ErasToDays)(e,a,n);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,n=e.path,o=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,d=(0,i.useState)(""),p=d[0],m=d[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?c(o.toString(),l,t,m):m(o.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,n,m);case 2:if(void 0!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?c(r,l,t,m):m(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),p}},67425:e=>{var t="polkadot",n="kusama",a="statemine",r="statemint",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,o,s){var l=void 0;if(o===t||o===r)l=3;else{if(o!==n&&o!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),s((e=Number.isInteger(e/i[o].precision)?e/i[o].precision+" "+i[o].symbol:(e/i[o].precision).toFixed(l)+" "+i[o].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/i[t].precision+" "+i[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,i,o){var s=void 0;if(o===t||o===r)s=1;else{if(o!==n&&o!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}i((e/=s).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},48693:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(47940),s=["components"],l={id:"learn-identity",title:"Account Identity",sidebar_label:"Account Identity",description:"On-chain Identity, Judgements and Registrars.",keywords:["identity","registrars","judgements"],slug:"../learn-identity"},u=void 0,d={unversionedId:"learn/learn-identity",id:"learn/learn-identity",title:"Account Identity",description:"On-chain Identity, Judgements and Registrars.",source:"@site/../docs/learn/learn-identity.md",sourceDirName:"learn",slug:"/learn-identity",permalink:"/docs/learn-identity",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-identity.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1704717291,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{id:"learn-identity",title:"Account Identity",sidebar_label:"Account Identity",description:"On-chain Identity, Judgements and Registrars.",keywords:["identity","registrars","judgements"],slug:"../learn-identity"},sidebar:"docs",previous:{title:"Account Abstraction",permalink:"/docs/learn-account-abstraction"},next:{title:"Multi-Signature Accounts",permalink:"/docs/learn-account-multisig"}},c={},p=[{value:"Judgements",id:"judgements",level:2},{value:"Registrars",id:"registrars",level:2},{value:"Sub-Identities",id:"sub-identities",level:2}],m={toc:p},k="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Polkadot provides a naming system that allows\nparticipants to add personal information to their on-chain account and subsequently ask for\nverification of this information by ",(0,i.kt)("a",{parentName:"p",href:"#registrars"},"registrars"),"."),(0,i.kt)("p",null,"Users must reserve funds in a bond to store their information on chain:\n",(0,i.kt)(o.Z,{network:"polkadot",path:"consts.identity.basicDeposit",defaultValue:20258e7,filter:"humanReadable",mdxType:"RPC"}),"\n","\nand\n",(0,i.kt)(o.Z,{network:"polkadot",path:"consts.identity.fieldDeposit",defaultValue:66e7,filter:"humanReadable",mdxType:"RPC"}),"\n","\nper each field beyond the legal name. These funds are ",(0,i.kt)("em",{parentName:"p"},"locked"),", not spent - they are returned when\nthe identity is cleared."),(0,i.kt)("h2",{id:"judgements"},"Judgements"),(0,i.kt)("p",null,"After a user injects their information on chain, they can request judgement from a registrar. Users\ndeclare a maximum fee that they are willing to pay for judgement, and registrars whose fee is below\nthat amount can provide a judgement."),(0,i.kt)("p",null,"When a registrar provides judgement, they can select up to six levels of confidence in their\nattestation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unknown: The default value, no judgement made yet."),(0,i.kt)("li",{parentName:"ul"},"Reasonable: The data appears reasonable, but no in-depth checks (e.g. formal KYC process) were\nperformed (all the currently verified identities on-chain)."),(0,i.kt)("li",{parentName:"ul"},"Known Good: The registrar has certified that the information is correct (this step involves\nverification of state issued identity documents, and at the moment no account has known good\nidentity, with the exception of registrars)."),(0,i.kt)("li",{parentName:"ul"},"Out of Date: The information used to be good, but is now out of date."),(0,i.kt)("li",{parentName:"ul"},"Low Quality: The information is low quality or imprecise, but can be fixed with an update."),(0,i.kt)("li",{parentName:"ul"},"Erroneous: The information is erroneous and may indicate malicious intent.")),(0,i.kt)("p",null,'A seventh state, "fee paid", is for when a user has requested judgement and it is in progress.\nInformation that is in this state or "erroneous" is "sticky" and cannot be modified; it can only be\nremoved by the complete removal of the identity.'),(0,i.kt)("p",null,"Registrars gain trust by performing proper due diligence and would presumably be replaced for\nissuing faulty judgments."),(0,i.kt)("h2",{id:"registrars"},"Registrars"),(0,i.kt)("p",null,"Registrars can set a fee for their services and limit their attestation to certain fields. For\nexample, a registrar could charge 1 DOT to\nverify one's legal name, email, and GPG key. When a user requests judgement, they will pay this fee\nto the registrar who provides the judgement on those claims. Users set a maximum fee they are\nwilling to pay and only registrars below this amount would provide judgement."),(0,i.kt)("p",null,"There are multiple registrars on Polkadot.\nUnless no additional information is available here, you must reach out to specific registrars\nindividually if you want to be judged by those."),(0,i.kt)("p",null,"Registrar 0: ",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"p"},"URL"),": ",(0,i.kt)("a",{parentName:"p",href:"https://registrar.web3.foundation/"},"https://registrar.web3.foundation/")," ",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"p"},"Account"),":\n12j3Cz8qskCGJxmSJpVL2z2t3Fpmw3KoBaBaRGPnuibFc7o8\n",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"p"},"Fee"),":\n0 DOT ",(0,i.kt)("br",null)),(0,i.kt)("p",null,"Registrar 1: ",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"p"},"URL"),": ",(0,i.kt)("a",{parentName:"p",href:"https://registrar.d11d.net/"},"https://registrar.d11d.net/")," ",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"p"},"Account"),":\n1Reg2TYv9rGfrQKpPREmrHRxrNsUDBQKzkYwP1UstD97wpJ\n",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"p"},"Fee"),":\n20 DOT ",(0,i.kt)("br",null)),(0,i.kt)("p",null,"Registrar 2: ",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"p"},"Account"),":\n1EpXirnoTimS1SWq52BeYx7sitsusXNGzMyGx8WPujPd1HB\n",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"p"},"Fee"),":\n0 DOT ",(0,i.kt)("br",null)),(0,i.kt)("p",null,"Registrar 3: ",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"p"},"Account"),":\n13SceNt2ELz3ti4rnQbY1snpYH4XE4fLFsW8ph9rpwJd6HFC\n",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"p"},"Fee"),":\n0.5 DOT ",(0,i.kt)("br",null)),(0,i.kt)("p",null,"","","","","",""),(0,i.kt)("p",null,"","","","","",""),(0,i.kt)("p",null,"Polkassembly (Registrar 3) provides setting on-chain ID as a service on their ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/"},"website"),".\n",""),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-guides-identity#registrars"},"this page")," to learn how to become a Registrar."),(0,i.kt)("h2",{id:"sub-identities"},"Sub-Identities"),(0,i.kt)("p",null,'Users can also link accounts by setting "sub accounts", each with its own identity, under a primary\naccount. The system reserves a bond for each sub account. An example of how you might use this would\nbe a validation company running multiple validators. A single entity, "My Staking Company", could\nregister multiple sub accounts that represent the ',(0,i.kt)("a",{parentName:"p",href:"/docs/learn-cryptography"},"Stash accounts")," of each of\ntheir validators."),(0,i.kt)("p",null,"An account can have a maximum of 100 sub-accounts. Note that a deposit of\n",(0,i.kt)(o.Z,{network:"polkadot",path:"consts.identity.subAccountDeposit",defaultValue:20053e7,filter:"humanReadable",mdxType:"RPC"}),"\n","\nis required for every sub-account."),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"Polkadot-JS Guides",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you are an advanced user, see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-guides-identity"},"Polkadot-JS guides about account identity"),".")))}h.isMDXComponent=!0},46601:()=>{}}]);