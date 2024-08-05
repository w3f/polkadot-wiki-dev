(self.webpackChunk=self.webpackChunk||[]).push([[150],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(74165),r=n(15861),i=n(67294),o=n(87152),s=n(18509),l=n(67425);function c(e,t,n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)((0,a.Z)().mark((function e(t,n,r){var i,l,c,u,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return i="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return i="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==i){e.next=22;break}return e.abrupt("return");case 22:return c=new o.U(i),e.next=25,s.G.create({provider:c});case 25:u=e.sent,(d=n.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=d[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=u.toString(),e.abrupt("break",39);case 33:return e.next=35,u();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+d[0]+") in "+n);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"precise":(0,l.Precise)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"erasToDays":(0,l.ErasToDays)(e,a,n);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,n=e.path,o=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,u=(0,i.useState)(""),p=u[0],m=u[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?d(o.toString(),l,t,m):m(o.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,n,m);case 2:if(void 0!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(r,l,t,m):m(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),p}},67425:e=>{var t="polkadot",n="kusama",a="statemine",r="statemint",i="polkadotpeople",o="kusamapeople",s={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e7,symbol:"milliDOT"},kusamapeople:{precision:1e9,symbol:"milliKSM"}};e.exports={HumanReadable:function(e,l,c){var u=void 0;if(l===t||l===r||l==i)u=3;else{if(l!==n&&l!==a&&l!=o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");u=6}e=parseFloat(e),c((e=Number.isInteger(e/s[l].precision)?e/s[l].precision+" "+s[l].symbol:(e/s[l].precision).toFixed(u)+" "+s[l].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/s[t].precision+" "+s[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,s,l){var c=void 0;if(l===t||l===r||l==i)c=1;else{if(l!==n&&l!==a&&l!=o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=4}s((e/=c).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},52991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var a=n(67294),r=n(86010),i=n(53438),o=n(39960),s=n(13919),l=n(95999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){var t=e.href,n=e.children;return a.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",c.cardContainer)},n)}function d(e){var t=e.href,n=e.icon,i=e.title,o=e.description;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",c.cardTitle),title:i},n," ",i),o&&a.createElement("p",{className:(0,r.Z)("text--truncate",c.cardDescription),title:o},o))}function p(e){var t,n=e.item,r=(0,i.Wl)(n);return r?a.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function m(e){var t,n,r=e.item,o=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=r.docId)?t:void 0);return a.createElement(d,{href:r.href,icon:o,title:r.label,description:null!=(n=r.description)?n:null==l?void 0:l.description})}function h(e){var t=e.item;switch(t.type){case"link":return a.createElement(m,{item:t});case"category":return a.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){var t=e.className,n=(0,i.jA)();return a.createElement(k,{items:n.items,className:t})}function k(e){var t=e.items,n=e.className;if(!t)return a.createElement(f,e);var o=(0,i.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},o.map((function(e,t){return a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(h,{item:e}))})))}},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),s=n(16550),l=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function f(e){var t,n,a,i,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,c=e.groupId,d=p(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:d})})),k=f[0],b=f[1],g=h({queryString:l,groupId:c}),v=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),x=w[0],T=w[1],N=function(){var e=null!=v?v:x;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){N&&b(N)}),[N]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),T(e)}),[y,T,d]),tabValues:d}}var k=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(d(t),l(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var i,o=u.indexOf(e.currentTarget)-1;n=null!=(i=u[o])?i:u[u.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){var t=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},32465:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=(n(47940),n(74866),n(85162),n(52991),["components"]),s={id:"learn-transactions",title:"Types of Transactions (a.k.a. Extrinsics)",sidebar_label:"Transactions",description:"Types of Transactions on Polkadot.",keywords:["transaction","transfer","DOT","extrinsics"],slug:"../learn-transactions"},l=void 0,c={unversionedId:"learn/learn-transactions",id:"learn/learn-transactions",title:"Types of Transactions (a.k.a. Extrinsics)",description:"Types of Transactions on Polkadot.",source:"@site/../docs/learn/learn-transactions.md",sourceDirName:"learn",slug:"/learn-transactions",permalink:"/docs/learn-transactions",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-transactions.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1722839977,formattedLastUpdatedAt:"Aug 5, 2024",frontMatter:{id:"learn-transactions",title:"Types of Transactions (a.k.a. Extrinsics)",sidebar_label:"Transactions",description:"Types of Transactions on Polkadot.",keywords:["transaction","transfer","DOT","extrinsics"],slug:"../learn-transactions"},sidebar:"docs",previous:{title:"Pure Proxy Accounts",permalink:"/docs/learn-proxies-pure"},next:{title:"Staking",permalink:"/docs/learn-staking-index"}},u={},d=[{value:"Pallets and Extrinsics",id:"pallets-and-extrinsics",level:2},{value:"Types of Extrinsics",id:"types-of-extrinsics",level:2},{value:"Mortal and Immortal Extrinsics",id:"mortal-and-immortal-extrinsics",level:3},{value:"Balance Transfers",id:"balance-transfers",level:3},{value:"Vested Transfers",id:"vested-transfers",level:3},{value:"Verifying Extrinsics",id:"verifying-extrinsics",level:2},{value:"Transaction Fees",id:"transaction-fees",level:2},{value:"Fee Multiplier",id:"fee-multiplier",level:3},{value:"Other Resource Limitation Strategies",id:"other-resource-limitation-strategies",level:3},{value:"Parachain Transactions",id:"parachain-transactions",level:2},{value:"Block Limits and Transaction Priority",id:"block-limits-and-transaction-priority",level:2}],p={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pallets-and-extrinsics"},"Pallets and Extrinsics"),(0,i.kt)("p",null,"Polkadot is built using\n",(0,i.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate"),", a modular framework to efficiently build blockchains.\nSubstrate's FRAME development environment provides modules called pallets and support libraries that\nyou can use, modify, and extend to build the runtime logic to suit the needs of your blockchain. You\ncan explore Substrate's FRAME pallets on\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/frame-pallets/"},"this dedicated page"),"."),(0,i.kt)("p",null,"Within each functional ",(0,i.kt)("strong",{parentName:"p"},"pallet")," on the blockchain, one can ",(0,i.kt)("strong",{parentName:"p"},"call")," its functions and execute them\nsuccessfully, provided they have the permission to do so. Because these calls originate outside of\nthe blockchain runtime, such transactions are referred to as ",(0,i.kt)("strong",{parentName:"p"},"extrinsics"),". Extrinsics normally\ncontain a signature, some data to describe if the extrinsic has passed some validity checks and a\nreference to the pallet and call that it is intended for. For example, the Staking pallet contains\nall functions related to staking. A nominator can bond funds and nominate validators by issuing the\nrespective extrinsics. Some extrinsics might also trigger an event on the chain such as a reward\npayout to the nominators."),(0,i.kt)("h2",{id:"types-of-extrinsics"},"Types of Extrinsics"),(0,i.kt)("p",null,"Now that we introduced the term ",(0,i.kt)("em",{parentName:"p"},"extrinsic"),", let us dive deeper and understand what extrinsics\nreally are. Extrinsics can be one of 3 distinct types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Signed transactions:")," these must contain the signature of the account sending the inbound\nrequest to the runtime. With signed transactions, the account used to submit the request typically\npays the transaction fee and must sign it using the account's private key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unsigned transactions:")," these don't carry any information about who submitted the transaction,\nsince the format of this type of transaction doesn't require a signature. You can define what\nconditions must be met for such a transaction to be valid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inherents:")," are a special type of unsigned transaction made by block authors which carry\ninformation required to build a block such as timestamps, storage proofs and uncle blocks.")),(0,i.kt)("p",null,"Signed transactions is the way that most users will interact with\nPolkadot. Signed transactions come from an\naccount that has funds, and therefore Polkadot\ncan charge a transaction fee as a way to prevent spam."),(0,i.kt)("p",null,"Unsigned transactions are for special cases where a user needs to submit an extrinsic from a key\npair that does not control funds. For example, validator's ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-cryptography"},"session keys"),"\nnever control funds. Unsigned transactions are only used in special cases because, since\nPolkadot cannot charge a fee for them, each\none needs its own, custom validation logic."),(0,i.kt)("p",null,'Inherents are pieces of information that are not signed or included in the transaction queue. As\nsuch, only the block author can add inherents to a block. Inherents are assumed to be "true" simply\nbecause a sufficiently large number of validators have agreed on them being reasonable. For example,\nPolkadot blocks include a timestamp inherent.\nThere is no way to prove that a timestamp is true the way one proves the desire to send funds with a\nsignature. Rather, validators accept or reject the block based on how reasonable they find the\ntimestamp. In Polkadot, it must be within\nsome acceptable range of their own system clocks.'),(0,i.kt)("p",null,"Here are some key differences between the different types of extrinsics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contrary to signed transactions, unsigned transaction types require implementing custom validation\nlogic which can consume more resources for checking validity compared to signed transactions."),(0,i.kt)("li",{parentName:"ul"},"Unsigned transactions have no economic deterrent to prevent spam or replay attacks, so custom\nlogic must account for protecting the network from these types of transactions being misused."),(0,i.kt)("li",{parentName:"ul"},"Inherents exist to address the need of adding some data to a block, whereas signed or unsigned\ntransactions exist to potentially change the state of the blockchain.")),(0,i.kt)("h3",{id:"mortal-and-immortal-extrinsics"},"Mortal and Immortal Extrinsics"),(0,i.kt)("p",null,"Transactions are generally irreversible once confirmed and added to the blockchain, an immutable\nledger of all transactions. This means users must exercise caution, as mistakes such as sending\nDOT to the wrong address cannot be reverted. The\npermanence of transactions highlights the importance of careful verification before signing any\ntransaction on a blockchain network. It is usually a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/transaction-attacks"},"good practice not to blind sign transactions")," to avoid being\nvictim of an attack."),(0,i.kt)("p",null,"In blockchain terms, transactions can be ",(0,i.kt)("strong",{parentName:"p"},"mortal")," extrinsics (i.e. valid within a defined block\ninterval, usually short), or ",(0,i.kt)("strong",{parentName:"p"},"immortal")," extrinsics (i.e. always valid). It is possible to make\nimmortal transactions on Polkadot. However,\n",(0,i.kt)("a",{parentName:"p",href:"/docs/transaction-attacks#replay-attack"},"for security reasons"),", it is highly recommended\nnot to do so and most wallet software will not allow you to make an immortal extrinsic."),(0,i.kt)("h3",{id:"balance-transfers"},"Balance Transfers"),(0,i.kt)("p",null,"Balance transfers are transfers of token balances between accounts. This is the most well-known type\nof transfer."),(0,i.kt)("h3",{id:"vested-transfers"},"Vested Transfers"),(0,i.kt)("p",null,"DOT may have a lock to account for vesting funds.\nLike other types of ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-account-balances#locks"},"locks"),", these funds cannot be transferred\nbut can be used in other parts of the protocol such as voting in governance or being staked as a\nvalidator or nominator."),(0,i.kt)("p",null,"Vesting funds are on a release schedule that unlocks a constant number of tokens at each block\n(",(0,i.kt)("strong",{parentName:"p"},"linear vesting"),") or the full amount after a specific block number (",(0,i.kt)("strong",{parentName:"p"},"cliff vesting"),"). In all\nvesting cases, the lock decreases over time until all the funds are transferable."),(0,i.kt)("h2",{id:"verifying-extrinsics"},"Verifying Extrinsics"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Do not sign a transaction if you can't verify what you are signing or you suspect you might be\nsigning a different extrinsic than the one intended.")),(0,i.kt)("p",null,"Verifying the extrinsic you are signing can take some more time before signing for a transaction but\nit allows you to add an extra security step. There are\n",(0,i.kt)("a",{parentName:"p",href:"/docs/transaction-attacks"},"a multitude of possible attacks")," that will prevent you to send\nfunds to the desired destination account."),(0,i.kt)("h2",{id:"transaction-fees"},"Transaction Fees"),(0,i.kt)("p",null,"Storage and computation are limited resources in a blockchain network. Transaction fees prevent\nindividual users from consuming too many resources.\nPolkadot uses a ",(0,i.kt)("strong",{parentName:"p"},"weight-based fee model")," as\nopposed to a gas-metering model. As such, fees are charged before transaction execution. Once the\nfee is paid, nodes will execute the transaction."),(0,i.kt)("p",null,"Polkadot fees consist of three parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Base fee"),": a fixed fee applied to every transaction and set by the runtime."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Length fee"),": a fee that gets multiplied by the length of the transaction in bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Weight fee"),": a fee for each varying runtime function. Runtime implementers must implement a\nconversion mechanism that determines the corresponding currency amount for the calculated weight.")),(0,i.kt)("p",null,"The final fee can be summarized as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fee = base_fee + length_of_transaction_in_bytes * length_fee + weight_fee\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("p",null,"Base fee: 1 milliDOT"),(0,i.kt)("p",null,"Length fee: 0.1 DOT per byte"),(0,i.kt)("p",null,"The weight-to-fee conversion is calculated as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"weight_fee = weight/1.26 * (10\u22128)\n")),(0,i.kt)("p",null,"A weight of 126,000 nS is mapped to 1 mDOT. This fee will always be, at most, the max size of an\nunsigned 128-bit integer."),(0,i.kt)("p",null,"See\n",(0,i.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/id-weights#id-definitions-in-polkadot"},"the Polkadot specification"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/build/tx-weights-fees/"},"the Substrate documentation")," for more\ndetails."),(0,i.kt)("h3",{id:"fee-multiplier"},"Fee Multiplier"),(0,i.kt)("p",null,"Polkadot can add an additional fee to\ntransactions if the network becomes too busy and starts to decelerate the system. This additional\nfee is known as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Fee Multiplier")," and its value is defined by the\nPolkadot runtime. The multiplier compares the\nsaturation of blocks; if the previous block is less saturated than the current block (implying an\nuptrend in usage), the fee is slightly increased. Similarly, the fee is decreased if the previous\nblock is more saturated than the current block (implying a downtrend in usage)."),(0,i.kt)("p",null,"The multiplier can create an incentive to avoid the production of low-priority or insignificant\ntransactions. In contrast, those additional fees will decrease if the network calms down and\ntransactions can be executed without overheads."),(0,i.kt)("p",null,"The final fee is calculated as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"final_fee = fee * fee_multiplier\n")),(0,i.kt)("p",null,"See\n",(0,i.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/id-weights#id-fee-multiplier"},"the documentation about the Polkadot specifications"),"\nfor more details."),(0,i.kt)("h3",{id:"other-resource-limitation-strategies"},"Other Resource Limitation Strategies"),(0,i.kt)("p",null,"Transaction weight must be computable before execution and can only represent fixed logic. Some\ntransactions warrant limiting resources with other strategies. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bonds: Some transactions, like voting, may require a bond that will be returned or\n",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-offenses"},"slashed")," after an on-chain event. In the voting example, returned at the end\nof the election or slashed if the voter tried anything malicious."),(0,i.kt)("li",{parentName:"ul"},"Deposits: Some transactions, like setting an ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-identity"},"identity")," or claiming an index,\nuse storage space indefinitely. These require a deposit to be returned if the user decides to\nclear their identity and free the storage."),(0,i.kt)("li",{parentName:"ul"},"Burns: A transaction may burn funds internally based on its logic. For example, a transaction may\nburn funds from the sender if it creates new storage entries, thus increasing the state size."),(0,i.kt)("li",{parentName:"ul"},"Limits: Some limits are part of the protocol. For example, nominators can only nominate 16\nvalidators. This limits the complexity of ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-phragmen"},"Phragm\xe9n"),".")),(0,i.kt)("h2",{id:"parachain-transactions"},"Parachain Transactions"),(0,i.kt)("p",null,"The transactions that take place within\nPolkadot's parachains do not incur Relay Chain\ntransaction fees. Users of shard applications do not even need to hold DOT tokens, as each shard has\nits own economic model and may or may not have a token. There are, however, situations where shards\nthemselves make transactions on the Relay Chain."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"Parachains")," have a dedicated slot on the Relay Chain for execution, so their\ncollators do not need to own DOT in order to include blocks. The parachain will make some\ntransactions itself, for example, opening or closing an ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," channel, participating\nin an ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"auction")," to renew its slot, or upgrading its runtime. Parachains have their\nown accounts on the Relay Chain and will need to use those funds to issue transactions on the\nparachain's behalf."),(0,i.kt)("h2",{id:"block-limits-and-transaction-priority"},"Block Limits and Transaction Priority"),(0,i.kt)("p",null,"Blocks in Polkadot have both a maximum length\n(in bytes) and a maximum weight. Block producers will fill blocks with transactions up to these\nlimits. A portion of each block - currently 25% - is reserved for critical transactions that are\nrelated to the chain's operation. Block producers will only fill up to 75% of a block with normal\ntransactions. Some examples of operational transactions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Misbehavior reports"),(0,i.kt)("li",{parentName:"ul"},"Council operations"),(0,i.kt)("li",{parentName:"ul"},"Member operations in an election (e.g. renouncing candidacy)")),(0,i.kt)("p",null,"Block producers prioritize transactions based on each transaction's total fee. Since a portion of\nthe fee will go to the block producer, producers will include the transactions with the highest fees\nto maximize their reward."),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"Polkadot-JS Guides",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you are an advanced user, see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-guides-transfers"},"Polkadot-JS guides about transfers"),".")))}h.isMDXComponent=!0},46601:()=>{}}]);