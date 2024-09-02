(self.webpackChunk=self.webpackChunk||[]).push([[1431],{67141:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var n=a(96540);const o=function(e){var t,a=e.message,o=(0,n.useState)(!0),r=o[0],s=o[1];return n.createElement(n.Fragment,null,r&&n.createElement("div",{className:"message-box"},n.createElement("button",{className:"close-button",onClick:function(){s(!1)}},"\u2716 "),n.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=a,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},47379:(e,t,a)=>{"use strict";a.d(t,{A:()=>p});var n=a(90675),o=a(10467),r=a(96540),s=a(69761),i=a(82285),l=a(11135);function c(e,t,a){return u.apply(this,arguments)}function u(){return(u=(0,o.A)((0,n.A)().mark((function e(t,a,o){var r,l,c,u,d;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return r="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return r="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==r){e.next=22;break}return e.abrupt("return");case 22:return c=new s.E(r),e.next=25,i.G.create({provider:c});case 25:u=e.sent,(d=a.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=d[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=u.toString(),e.abrupt("break",39);case 33:return e.next=35,u();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+d[0]+") in "+a);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"erasToDays":(0,l.ErasToDays)(e,n,a);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,a=e.path,s=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,u=(0,r.useState)(""),p=u[0],h=u[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?d(s.toString(),l,t,h):h(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,o.A)((0,n.A)().mark((function e(){var o;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,a,h);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(o,l,t,h):h(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(i){console.log(i)}}}),[]),p}},11135:e=>{var t="polkadot",a="kusama",n="statemine",o="statemint",r="polkadotpeople",s="kusamapeople",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e7,symbol:"milliDOT"},kusamapeople:{precision:1e9,symbol:"milliKSM"}};e.exports={HumanReadable:function(e,l,c){var u=void 0;if(l===t||l===o||l==r)u=3;else{if(l!==a&&l!==n&&l!=s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");u=6}e=parseFloat(e),c((e=Number.isInteger(e/i[l].precision)?e/i[l].precision+" "+i[l].symbol:(e/i[l].precision).toFixed(u)+" "+i[l].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/i[t].precision+" "+i[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,i,l){var c=void 0;if(l===t||l===o||l==r)c=1;else{if(l!==a&&l!==n&&l!=s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=4}i((e/=c).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},3514:(e,t,a)=>{"use strict";a.d(t,{A:()=>y});var n=a(96540),o=a(20053),r=a(84142),s=a(75489),i=a(16654),l=a(21312);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){var t=e.href,a=e.children;return n.createElement(s.A,{href:t,className:(0,o.A)("card padding--lg",c.cardContainer)},a)}function d(e){var t=e.href,a=e.icon,r=e.title,s=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.A)("text--truncate",c.cardTitle),title:r},a," ",r),s&&n.createElement("p",{className:(0,o.A)("text--truncate",c.cardDescription),title:s},s))}function p(e){var t,a=e.item,o=(0,r._o)(a);return o?n.createElement(d,{href:o,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:null!=(t=a.description)?t:(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function h(e){var t,a,o=e.item,s=(0,i.A)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,r.cC)(null!=(t=o.docId)?t:void 0);return n.createElement(d,{href:o.href,icon:s,title:o.label,description:null!=(a=o.description)?a:null==l?void 0:l.description})}function m(e){var t=e.item;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,a=(0,r.$S)();return n.createElement(y,{items:a.items,className:t})}function y(e){var t=e.items,a=e.className;if(!t)return n.createElement(g,e);var s=(0,r.d1)(t);return n.createElement("section",{className:(0,o.A)("row",a)},s.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e}))})))}},19365:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var n=a(96540),o=a(20053);const r={tabItem:"tabItem_Ymn6"};function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:a},t)}},11470:(e,t,a)=>{"use strict";a.d(t,{A:()=>v});var n=a(58168),o=a(96540),r=a(20053),s=a(23104),i=a(56347),l=a(57485),c=a(31682),u=a(89466);function d(e){return function(e){var t,a;return null!=(t=null==(a=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,a=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:d(a);return function(e){var t=(0,c.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,r=(0,i.W6)(),s=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,l.aZ)(s),(0,o.useCallback)((function(e){if(s){var t=new URLSearchParams(r.location.search);t.set(s,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[s,r])]}function g(e){var t,a,n,r,s=e.defaultValue,i=e.queryString,l=void 0!==i&&i,c=e.groupId,d=p(e),g=(0,o.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var o=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:s,tabValues:d})})),y=g[0],f=g[1],b=m({queryString:l,groupId:c}),k=b[0],w=b[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),a=(0,u.Dv)(t),n=a[0],r=a[1],[n,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),N=v[0],S=v[1],A=function(){var e=null!=k?k:N;return h({value:e,tabValues:d})?e:null}();return(0,o.useLayoutEffect)((function(){A&&f(A)}),[A]),{selectedValue:y,selectValue:(0,o.useCallback)((function(e){if(!h({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);f(e),w(e),S(e)}),[w,S,d]),tabValues:d}}var y=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,a=e.block,i=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],d=(0,s.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(d(t),l(n))},h=function(e){var t,a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,o=u.indexOf(e.currentTarget)+1;a=null!=(n=u[o])?n:u[0];break;case"ArrowLeft":var r,s=u.indexOf(e.currentTarget)-1;a=null!=(r=u[s])?r:u[u.length-1]}null==(t=a)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t)},c.map((function(e){var t=e.value,a=e.label,s=e.attributes;return o.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:h,onClick:p},s,{className:(0,r.A)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function k(e){var t=e.lazy,a=e.children,n=e.selectedValue,r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var s=r.find((function(e){return e.props.value===n}));return s?(0,o.cloneElement)(s,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=g(e);return o.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},o.createElement(b,(0,n.A)({},e,t)),o.createElement(k,(0,n.A)({},e,t)))}function v(e){var t=(0,y.A)();return o.createElement(w,(0,n.A)({key:String(t)},e))}},16968:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=a(58168),o=a(98587),r=(a(96540),a(15680)),s=(a(47379),a(11470),a(19365),a(3514)),i=a(67141),l=["components"],c={id:"learn-guides-accounts",title:"Polkadot-JS Guides about Accounts",sidebar_label:"Account Guides",description:"Polkadot-JS Guides about Accounts",keyword:["guides","polkadot-js","accounts"],slug:"../learn-guides-accounts"},u=void 0,d={unversionedId:"learn/learn-guides-accounts",id:"learn/learn-guides-accounts",title:"Polkadot-JS Guides about Accounts",description:"Polkadot-JS Guides about Accounts",source:"@site/../docs/learn/learn-guides-accounts.md",sourceDirName:"learn",slug:"/learn-guides-accounts",permalink:"/docs/learn-guides-accounts",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-accounts.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1714545713,formattedLastUpdatedAt:"May 1, 2024",frontMatter:{id:"learn-guides-accounts",title:"Polkadot-JS Guides about Accounts",sidebar_label:"Account Guides",description:"Polkadot-JS Guides about Accounts",keyword:["guides","polkadot-js","accounts"],slug:"../learn-guides-accounts"},sidebar:"docs",previous:{title:"Polkadot-JS Guides",permalink:"/docs/learn-polkadot-js-guides"},next:{title:"Multisig Guides",permalink:"/docs/learn-guides-accounts-multisig"}},p={},h=[{value:"Account Address Format",id:"account-address-format",level:2},{value:"Polkadot-JS Browser Extension",id:"polkadot-js-browser-extension",level:2},{value:"Account Backup using the Polkadot-JS Browser Extension",id:"account-backup-using-the-polkadot-js-browser-extension",level:3},{value:"Reset Password using the Polkadot-JS Browser Extension",id:"reset-password-using-the-polkadot-js-browser-extension",level:3},{value:"Restore Account on the Polkadot-JS Browser Extension",id:"restore-account-on-the-polkadot-js-browser-extension",level:3},{value:"Polkadot-JS UI",id:"polkadot-js-ui",level:2},{value:"Account Backup using the Polkadot-JS UI",id:"account-backup-using-the-polkadot-js-ui",level:3},{value:"Reset password using the Polkadot-JS UI",id:"reset-password-using-the-polkadot-js-ui",level:3},{value:"Restore Account on the Polkadot-JS UI",id:"restore-account-on-the-polkadot-js-ui",level:3},{value:"Unlocking Locks",id:"unlocking-locks",level:3},{value:"Query Account Data in Polkadot-JS",id:"query-account-data-in-polkadot-js",level:2},{value:"Vanity Generator",id:"vanity-generator",level:2},{value:"Encryption Enhancement",id:"encryption-enhancement",level:2}],m={toc:h},g="wrapper";function y(e){var t=e.components,c=(0,o.A)(e,l);return(0,r.yg)(g,(0,n.A)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(i.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,r.yg)(s.A,{mdxType:"DocCardList"}),(0,r.yg)("h2",{id:"account-address-format"},"Account Address Format"),(0,r.yg)("p",null,"An account created for Polkadot can also be\nused on multiple chains in the Polkadot\necosystem. More specifically, the account of a chain that uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"*25519")," account address format\n(the latest list can be accessed on the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/ss58-registry/blob/main/ss58-registry.json"},"ss58 registry repository"),"\nis cross-compatible with all the chains that use the similar format. To switch between the accounts\non different chains, you can follow the guidelines in\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000103707-can-i-use-the-same-account-on-polkadot-kusama-and-parachains-"},"this support article"),".\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.subscan.io/tools/format_transform"},"Subscan has a tool")," you can use to convert your\naddress between the different chain formats."),(0,r.yg)("admonition",{title:"Using the same account on multiple chains - Pros and Cons",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The address format differs from chain to chain, but that difference is only visual. The same private\nkey can be used to sign transactions on behalf of the respective accounts on multiple chains. Using\na single account on multiple chains is convenient, as you do not have to deal with multiple mnemonic\nphrases or private keys. But, if your account gets compromised on one chain, the attacker can gain\nfull access to the accounts on all other chains. This also has implications for the account holder's\nprivacy, as knowing the identity of an account on one chain can expose the account holder's identity\non all the chains. In the Accounts tab, the Polkadot-JS UI displays a warning message next to each\nAccount you are using on multiple chains and recommends using different Accounts on different chains\n(see below)."),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("img",{alt:"warning multiple chains",src:a(36105).A,width:"1103",height:"343"}))),(0,r.yg)("p",null,'On Polkadot-JS Extension, you can copy your address by clicking the account\'s icon while the desired\nchain format is active. E.g. selecting "Substrate" as the format will change your address, and\nclicking the colorful icon of your account will copy it in that format. While in\nPolkadot mode, that address format will be\ncopied, and so on.'),(0,r.yg)("h2",{id:"polkadot-js-browser-extension"},"Polkadot-JS Browser Extension"),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col text--center"},(0,r.yg)("a",{href:"https://www.youtube.com/watch?v=DNU0p5G0Gqc"},(0,r.yg)("img",{src:"https://img.youtube.com/vi/DNU0p5G0Gqc/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.yg)("p",null,(0,r.yg)("a",{href:"https://www.youtube.com/watch?v=DNU0p5G0Gqc"},"Polkadot-JS Browser Extension Tutorial")))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"For guidelines about how to create an account using the Polkadot Extension, see\n",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/DNU0p5G0Gqc"},(0,r.yg)("strong",{parentName:"a"},"this video tutorial"))," and visit\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000098878-how-to-create-a-dot-account"},(0,r.yg)("strong",{parentName:"a"},"this support article")),".")),(0,r.yg)("p",null,"The Polkadot-JS Browser Extension (the Polkadot Extension) provides a reasonable balance of security\nand usability. It provides a separate local mechanism to generate your address and interact with\nPolkadot."),(0,r.yg)("p",null,'This method involves installing the Polkadot Extension and using it as a \u201cvirtual vault," separate\nfrom your browser, to store your private keys. It also allows the signing of transactions and\nsimilar functionality.'),(0,r.yg)("p",null,"It is still running on the same computer you use to connect to the internet and thus is less secure\nthan using Parity Signer or other air-gapped approaches."),(0,r.yg)("h3",{id:"account-backup-using-the-polkadot-js-browser-extension"},"Account Backup using the Polkadot-JS Browser Extension"),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/DNU0p5G0Gqc"},(0,r.yg)("strong",{parentName:"a"},"this video tutorial"))," and visit\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000177677-how-to-export-your-json-backup-file"},(0,r.yg)("strong",{parentName:"a"},"this support page")),"\nto know how to back up your account."),(0,r.yg)("h3",{id:"reset-password-using-the-polkadot-js-browser-extension"},"Reset Password using the Polkadot-JS Browser Extension"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"See ",(0,r.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=DNU0p5G0Gqc&t=280s"},(0,r.yg)("strong",{parentName:"a"},"this video tutorial"))," to learn how to\nchange the password for an account that has been created on the Polkadot-JS browser extension (i.e.\nan injected account).")),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"Before following the instructions below, make sure you have your mnemonic phrase stored in a safe\nplace accessible to you.")),(0,r.yg)("p",null,"Let's say you created ",(0,r.yg)("inlineCode",{parentName:"p"},"ACCOUNT 1")," protected by password ",(0,r.yg)("inlineCode",{parentName:"p"},"PSW 1"),". To reset the password of your\n",(0,r.yg)("inlineCode",{parentName:"p"},"ACCOUNT 1")," using the browser extension, you must follow the following steps:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Go to ",(0,r.yg)("inlineCode",{parentName:"li"},"ACCOUNT 1"),' on the browser extension and click "Forget account". This action will delete the\naccess to your account. Note that your tokens are still in your account on the\nPolkadot blockchain network.'),(0,r.yg)("li",{parentName:"ul"},'On the browser extension click the "+" button in the top right corner and select the option\n"Import account from pre-existing seed". After entering the mnemonic phrase, you can choose a new\npassword, ',(0,r.yg)("inlineCode",{parentName:"li"},"PSW 2"),".")),(0,r.yg)("admonition",{title:"JSON files do not allow changing account passwords",type:"info"},(0,r.yg)("p",{parentName:"admonition"},'If you add the account to the extension using the option "Restore account from backup JSON file",\nthis will allow you to restore access to your account using a JSON file protected by the password\n',(0,r.yg)("inlineCode",{parentName:"p"},"PSW 1"),", but does not let you set a new password. Thus, ",(0,r.yg)("inlineCode",{parentName:"p"},"PSW 1")," will become the account password by\ndefault.")),(0,r.yg)("admonition",{title:"Accounts on Cold wallets do not need passwords",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"For hardware wallets such as ",(0,r.yg)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger"),", you may have to set a PIN for\naccessing the accounts on the device, but you do not need to set a password for every individual\naccount. When you need to make transactions with your account, you are required to sign using your\nLedger device. Also, Ledger wallets let you generate multiple accounts for multiple blockchain\nnetworks without setting different passwords to access such accounts.")),(0,r.yg)("h3",{id:"restore-account-on-the-polkadot-js-browser-extension"},"Restore Account on the Polkadot-JS Browser Extension"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"See ",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/9ohp8k4Hz8c"},(0,r.yg)("strong",{parentName:"a"},"this video tutorial"))," and\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169952-how-to-restore-your-account-in-the-polkadot-extension"},(0,r.yg)("strong",{parentName:"a"},"this support page")),"\nto learn how to restore your account on the Polkadot-JS UI.")),(0,r.yg)("h2",{id:"polkadot-js-ui"},"Polkadot-JS UI"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"For guidelines about how to create an account using Polkadot-JS UI, see\n",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/DNU0p5G0Gqc"},(0,r.yg)("strong",{parentName:"a"},"this video tutorial"))," and visit\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000180529"},(0,r.yg)("strong",{parentName:"a"},"this support article")),".")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"If you use this method to create your account and clear your cookies in your browser, your account\nwill be lost forever if you do not ",(0,r.yg)("a",{parentName:"p",href:"#restore-account-on-the-polkadot-js-ui"},"back it up"),". Make sure\nyou store your seed phrase in a safe place or download the account's JSON file if using the\nPolkadot{.js} browser extension. Learn more about account backup and restoration\n",(0,r.yg)("a",{parentName:"p",href:"#restore-account-on-the-polkadot-js-ui"},"here"),".")),(0,r.yg)("p",null,"Local in-browser account storage is disabled by default on the Polkadot-JS UI. To create an account\nusing the Polkadot-JS UI, navigate to settings > account options and click on allow local in-browser\naccount storage in the drop-down menu. Using the Polkadot-JS user interface without a browser\nextension is ",(0,r.yg)("strong",{parentName:"p"},"not recommended"),". It is the least secure way of generating an account. It should\nonly be used if all other methods are not feasible."),(0,r.yg)("h3",{id:"account-backup-using-the-polkadot-js-ui"},"Account Backup using the Polkadot-JS UI"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"See ",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/DNU0p5G0Gqc"},(0,r.yg)("strong",{parentName:"a"},"this video tutorial"))," and visit\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000177677-how-to-export-your-json-backup-file"},(0,r.yg)("strong",{parentName:"a"},"this support page")),"\nto know how to back up your account.")),(0,r.yg)("h3",{id:"reset-password-using-the-polkadot-js-ui"},"Reset password using the Polkadot-JS UI"),(0,r.yg)("p",null,'To reset the password of an account created with Polkadot-JS Apps UI, you need to go to the\n"Accounts" tab, click the icon with three vertical dots on your account and select "Change this\naccount\'s password".'),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/DNU0p5G0Gqc?t=261"},(0,r.yg)("strong",{parentName:"a"},"this video tutorial"))," to learn how to change the\npassword for an account created on the Polkadot-JS UI (i.e. a non-injected account)."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If you create an account first using Polkadot-JS Apps UI and then add it to the browser extension,\nyou need to follow the\n",(0,r.yg)("a",{parentName:"p",href:"#reset-password-using-the-browser-extension"},"guidelines for the browser extension")," to change the\npassword of such an account.")),(0,r.yg)("h3",{id:"restore-account-on-the-polkadot-js-ui"},"Restore Account on the Polkadot-JS UI"),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/cBsZqFpBANY"},(0,r.yg)("strong",{parentName:"a"},"this video tutorial"))," and\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000180110-how-to-restore-your-account-in-polkadot-js-ui"},(0,r.yg)("strong",{parentName:"a"},"this support page")),"\nto learn how to restore your account on the Polkadot-JS UI."),(0,r.yg)("h3",{id:"unlocking-locks"},"Unlocking Locks"),(0,r.yg)("admonition",{title:"Locks do not stack!",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The biggest lock decides the total amount of locked funds. See\n",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/LHgY7ds_bZ0"},(0,r.yg)("strong",{parentName:"a"},"this walk-through video tutorial"))," that will guide you in the\nprocess of unlocking funds in the example above.")),(0,r.yg)("p",null,"In the example, the locked balance is 0.55 KSM because the biggest lock is on democracy and is 0.55\nKSM. As soon as the democracy lock is removed the next biggest lock is on staking 0.5 KSM (bonded\n0.4 KSM + redeemable 0.1 KSM). This means that the locked balance will be 0.5 KSM, and 0.05 KSM will\nbe added to the transferrable balance. After redeeming the unbonded 0.1 KSM, the locked balance will\nbe 0.4 KSM, and an additional 0.1 KSM will be added to the transferrable balance. Now the biggest\nlock is still the bonded one. This means that even if we remove the vested lock, the locked balance\nwill still be 0.4 KSM and no tokens will be added to the transferrable balance. To free those bonded\ntokens we will need to unbond them and wait for the unbonding period to make them redeemable. If we\nremove the proxy the reserved funds will be automatically added to the transferrable balance."),(0,r.yg)("h2",{id:"query-account-data-in-polkadot-js"},"Query Account Data in Polkadot-JS"),(0,r.yg)("p",null,"In the Polkadot-JS UI, you can also query account data under\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Developer > Chain state"),". Under ",(0,r.yg)("inlineCode",{parentName:"p"},"selected state query"),"\nchoose the system pallet followed by ",(0,r.yg)("inlineCode",{parentName:"p"},"account(AccountId32): FrameSystemAccountInfo"),", under ",(0,r.yg)("inlineCode",{parentName:"p"},"Option"),'\nchoose an account, and then click on the "+" button on the right.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"account_balance_types",src:a(59637).A,width:"1636",height:"343"})),(0,r.yg)("p",null,"Account information include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"nonce"),", the number of transactions the account sent."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"consumers"),", the number of other modules that currently depend on this account's existence. The\naccount cannot be reaped until this is zero."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"providers"),", the number of other modules that allow this account to exist. The account may not be\nreaped until this and ",(0,r.yg)("inlineCode",{parentName:"li"},"sufficients")," are both zero."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"sufficients"),", the number of modules that allow this account to exist for their own purposes. The\naccount may not be reaped until this and ",(0,r.yg)("inlineCode",{parentName:"li"},"providers")," are both zero."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"data"),", the additional data that belongs to this account. Used to store the balance(s) in a lot of\nchains.")),(0,r.yg)("p",null,"More in-depth information about the above data can be found in the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/2e7fde832b77b242269b136f1c3b6fffef86f9b6/frame/system/src/lib.rs#LL767C1-L781C24"},"substrate code base"),"."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"AccountData")," structure defines the balance types in Substrate. The three types of balances\ninclude:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"free"),", is the balance that is free but not necessarily transferrable."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"reserved"),", is the balance that is not free, and it is put on hold for on-chain activity such as\ndeposits for multi-signature calls, setting up proxies and identities, and other actions that hold\nstate on the network."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"frozen"),", is the amount that is free to use for on-chain activity but is locked in staking,\ngovernance, or vesting.")),(0,r.yg)("p",null,"The ",(0,r.yg)("strong",{parentName:"p"},"usable")," or transferrable balance of the account is currently calculated using the formula\nbelow:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"transferable = free - max(frozen - reserved, ED)\n")),(0,r.yg)("p",null,"Where ED is the existential deposit. The ",(0,r.yg)("strong",{parentName:"p"},"total")," balance of the account is the sum of ",(0,r.yg)("inlineCode",{parentName:"p"},"free")," and\n",(0,r.yg)("inlineCode",{parentName:"p"},"reserved")," funds. The ",(0,r.yg)("inlineCode",{parentName:"p"},"flags")," describe extra information about the account."),(0,r.yg)("p",null,"More in-depth information about the above data can be found in the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/2e7fde832b77b242269b136f1c3b6fffef86f9b6/frame/balances/src/types.rs#LL95-L114"},"balances pallet in the Substrate code base"),"."),(0,r.yg)("h2",{id:"vanity-generator"},"Vanity Generator"),(0,r.yg)("p",null,"The vanity generator is a tool on ",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts/vanity"},"Polkadot-JS UI"),"\nthat lets you generate addresses that contain a specific substring. For the tutorial on how to\ncreate an account using Vanity Generator, visit\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000171416"},"this support article"),"."),(0,r.yg)("h2",{id:"encryption-enhancement"},"Encryption Enhancement"),(0,r.yg)("p",null,"Some newly generated ",(0,r.yg)("inlineCode",{parentName:"p"},"JSON")," account files cannot be imported (restored) into older wallet software.\nThis is due to an enhanced encryption method, noticeable in a slight delay when\nencrypting/decrypting your wallet. If you cannot load a ",(0,r.yg)("inlineCode",{parentName:"p"},"JSON")," file, please use the latest version\nof the wallet software. If you cannot load it, ensure that the wallet software uses the newest\nversion of the ",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/api/"},"Polkadot API"),"."))}y.isMDXComponent=!0},59637:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=a.p+"assets/images/AccountData-struct-118d0bf533806084460cba05bef62b9c.png"},36105:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=a.p+"assets/images/warning-multichain-account-0719ff59691f3ff48562d92ef2295e84.png"},47790:()=>{}}]);