(self.webpackChunk=self.webpackChunk||[]).push([[8881],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>k});var n=a(74165),s=a(15861),o=a(67294),i=a(98562),r=a(73100),c="polkadot",l="kusama",u="statemine",d="statemint";function m(t,e,a){return h.apply(this,arguments)}function h(){return(h=(0,s.Z)((0,n.Z)().mark((function t(e,a,s){var o,c,l,u,d;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=void 0,c=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){t.next=18;break}return t.abrupt("return");case 18:return l=new i.U(o),t.next=21,r.G.create({provider:l});case 21:u=t.sent,(d=a.split(".")).forEach((function(t){t in u&&(u=u[t])})),t.t1=d[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return c=u.toString(),t.abrupt("break",35);case 29:return t.next=31,u();case 31:return c=(c=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+a);case 35:return t.abrupt("return",c);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t,e,a,n){var s={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};switch(e){case"humanReadable":var o=void 0;if(a===c||a===d)o=3;else{if(a!==l&&a!==u)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}t=parseFloat(t),t=Number.isInteger(t/s[a].precision)?t/s[a].precision+" "+s[a].symbol:(t/s[a].precision).toFixed(o)+" "+s[a].symbol;break;case"blocksToDays":t=6*t/86400;break;default:return void console.log("Ignoring unknown filter type")}n(t.toString())}const k=function(t){var e=t.network,a=t.path,i=t.defaultValue,r=t.filter,h=void 0===r?void 0:r,k=(0,o.useState)(""),f=k[0],b=k[1];return(0,o.useEffect)((function(){void 0!==h?p(i.toString(),h,e,b):b(i.toString());var t=void 0;switch(e){case c:t="wss://rpc.polkadot.io";break;case l:t="wss://kusama-rpc.polkadot.io/";break;case u:t="wss://statemine-rpc.polkadot.io/";break;case d:t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+net)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e,a,b);case 2:s=t.sent,void 0!==h?p(s,h,e,b):b(s);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),f}},76590:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),i=a(47940),r=["components"],c={id:"kusama-statemine",title:"Statemine",sidebar_label:"Statemine",description:"Statemine and its features",slug:"../../kusama-statemine"},l=void 0,u={unversionedId:"general/kusama/kusama-statemine",id:"general/kusama/kusama-statemine",title:"Statemine",description:"Statemine and its features",source:"@site/../docs/general/kusama/kusama-statemine.md",sourceDirName:"general/kusama",slug:"/kusama-statemine",permalink:"/docs/kusama-statemine",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-statemine.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1658757668,formattedLastUpdatedAt:"Jul 25, 2022",frontMatter:{id:"kusama-statemine",title:"Statemine",sidebar_label:"Statemine",description:"Statemine and its features",slug:"../../kusama-statemine"}},d={},m=[{value:"Creating Assets on Statemine",id:"creating-assets-on-statemine",level:2},{value:"Transferring Assets on Statemine",id:"transferring-assets-on-statemine",level:2}],h={toc:m};function p(t){var e=t.components,c=(0,s.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Statemine is a generic assets parachain which provides functionality for deploying and transferring assets \u2014 both Fungible and Non-Fungible Tokens (NFTs). It is a common good parachain on Kusama (not to be confused with ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-common-goods#statemint"},"Statemint"),", which is a parachain on Polkadot). The native token of Statemine is KSM. Balance transfers and the Existential Deposit (ED) of KSM on Statemine are about 1/10th of the values on the Relay chain. For example, the Existential Deposit of a Statemine account is ",(0,o.kt)(i.Z,{network:"statemine",path:"consts.balances.existentialDeposit",defaultValue:3333333,filter:"humanReadable",mdxType:"RPC"}),",\nwhen compared to ",(0,o.kt)(i.Z,{network:"kusama",path:"consts.balances.existentialDeposit",defaultValue:33333333,filter:"humanReadable",mdxType:"RPC"}),", on Kusama.\nApart from the core protocol token KSM, the assets held on Statemine can be broadly categorized as "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,o.kt)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,o.kt)("li",{parentName:"ul"},"Assets without any backing")),(0,o.kt)("h2",{id:"creating-assets-on-statemine"},"Creating Assets on Statemine"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before minting assets on Statemine, we recommend that you try out this tutorial on Westmint, which is a parachain on Westend.\nThe WND tokens (Westies) are free and are available through a ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-westies"},"faucet"),".")),(0,o.kt)("p",null,"To create an asset on Statemine, you would need a deposit of ",(0,o.kt)(i.Z,{network:"statemine",path:"consts.assets.assetDeposit",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"\nand around ",(0,o.kt)(i.Z,{network:"statemine",path:"consts.assets.metadataDepositBase",defaultValue:668933304,filter:"humanReadable",mdxType:"RPC"})," for the metadata\n. Before you create an asset on Statemine, ensure that your Statemine account balance is a bit more\nthan the sum of those two deposits, which should seamlessly account for the required deposits\nand transaction fees. You can send KSM from a Kusama account to a Statemine account using the\nteleport functionality. For instructions on teleporting KSM, check this ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),"."),(0,o.kt)("p",null,"Assuming you have the required KSM balance on your Statemine account, the following instructions should let you successfully create an asset on Statemine"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access Statemine through Polkdot-JS Apps UI."),(0,o.kt)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Navigate to Assets page",src:a(99638).Z,width:"750",height:"230"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator account, name of the asset to be\ndisplayed on Statemine, the asset's symbol, number of decimals for the asset, the minimum balance required to hold this asset on a Statemine account and the most important field of your asset - the unique asset ID. The UI would not let you enter an ID that has already been taken. After all the details are entered, click on the next button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Asset Metadata",src:a(21569).Z,width:"1180",height:"622"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset managing accounts",src:a(64468).Z,width:"1180",height:"404"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction. (If you like to verify the transaction details before signing, you can click on the dropdown button pointed by the arrow in the snapshot below)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign asset creating transaction",src:a(55470).Z,width:"1184",height:"478"})),(0,o.kt)("p",null,"If the transaction is successful,  you should see the asset and its details displayed in the Network > Assets page on Statemine."),(0,o.kt)("h2",{id:"transferring-assets-on-statemine"},"Transferring Assets on Statemine"),(0,o.kt)("admonition",{title:"Beware of scams",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Due to the permissionless nature of Statemine, anyone can create an asset with any name and symbol. The most important attribute\nof an asset is the asset ID. There could be multiple assets with the same name and symbol, but they cannot have the same asset ID. Ex: The USDT by Tether minted on Statemine holds the asset ID: 1984.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The assets can be Sufficient or Non-Sufficient. To hold a Non-Sufficient asset, the Statemine account needs to exist on-chain. This is different from Ethereum where a non-existent account can hold ERC-20 tokens. Ensure that the receiver account has at least 3.33 microKSM which is the Existential Deposit for a Statemine account. Although, there are a few exceptions to this - If an asset is Sufficient or someone has placed a deposit for that account to hold the asset, the Existential Deposit in KSM on the receiver account is not needed.")),(0,o.kt)("p",null,"To hold, send or receive most of the assets on Statemine (which are Non-Suffcient), the accounts need to have a minimum balance of 3.33 microKSM (The Existential Deposit on Statemine). You can send KSM from a Kusama account to a Statemine account using the teleport functionality. For instructions on teleporting KSM, check this ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),". The balance transfers of KSM on Statemine are similar to the balance transfers KSM on Kusama and can be done on the accounts page on Polkadot-JS Apps UI."),(0,o.kt)("p",null,"In this tutorial, transfer of BILLCOINs (Asset ID: 223, Symbol: BILL) is demonstrated."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access Statemine through Polkdot-JS Apps UI."),(0,o.kt)("li",{parentName:"ul"},"Navigate to Network > Assets and click on the Balances tab"),(0,o.kt)("li",{parentName:"ul"},"Select the asset to transfer from the drop-down (The assets are sorted based on their IDs). If you have accounts with the selected asset, they will be displayed.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Finding the asset",src:a(60062).Z,width:"1440",height:"320"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the send button "),(0,o.kt)("li",{parentName:"ul"},"Enter the receiver address and the amount to transfer.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset transfer transaction",src:a(19837).Z,width:"1176",height:"516"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign asset creating transaction",src:a(39215).Z,width:"1178",height:"454"})),(0,o.kt)("p",null,"If the transaction is successful, the assets are transferred to the receiver account."))}p.isMDXComponent=!0},99638:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-0-c0d765f1c353e064445d3f9c330b6906.png"},21569:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-1-7f4aedc6d554a7cd2c4096e7a945264e.png"},64468:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-2-3fc18f1c44deccb5ac4d110d231db774.png"},55470:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-3-ee5744e11d130f8e61db9e7ce11d9e83.png"},60062:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-transfer-1-aaa7dfc5e75b4860084b7717ab231f62.png"},39215:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/statemine-asset-transfer-3-007cfb046164f925bef27347237ec2ab.png"},19837:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/statemine-transfer-asset-2-192c9086d931335714e037b3d3e756fe.png"},95856:()=>{},46601:()=>{}}]);