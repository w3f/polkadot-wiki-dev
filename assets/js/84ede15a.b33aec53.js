(self.webpackChunk=self.webpackChunk||[]).push([[4338],{35703:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(67294);const o=function(e){var t,a=e.message,o=(0,n.useState)(!0),r=o[0],s=o[1];return n.createElement(n.Fragment,null,r&&n.createElement("div",{className:"message-box"},n.createElement("button",{className:"close-button",onClick:function(){s(!1)}},"\u2716 "),n.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=a,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(74165),o=a(15861),r=a(67294),s=a(87152),i=a(18509),l=a(67425);function u(e,t,a){return c.apply(this,arguments)}function c(){return(c=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var r,l,u,c,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return u=new s.U(r),e.next=21,i.G.create({provider:u});case 21:c=e.sent,(p=a.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=p[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=c.toString(),e.abrupt("break",35);case 29:return e.next=31,c();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"erasToDays":(0,l.ErasToDays)(e,n,a);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,a=e.path,s=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,c=(0,r.useState)(""),d=c[0],h=c[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?p(s.toString(),l,t,h):h(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusama-people":e="wss://kusama-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,a,h);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?p(o,l,t,h):h(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(i){console.log(i)}}}),[]),d}},67425:e=>{var t="polkadot",a="kusama",n="statemine",o="statemint",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,s,i){var l=void 0;if(s===t||s===o)l=3;else{if(s!==a&&s!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),i((e=Number.isInteger(e/r[s].precision)?e/r[s].precision+" "+r[s].symbol:(e/r[s].precision).toFixed(l)+" "+r[s].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/r[t].precision+" "+r[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,r,s){var i=void 0;if(s===t||s===o)i=1;else{if(s!==a&&s!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=4}r((e/=i).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},85162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(67294),o=a(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(87462),o=a(67294),r=a(86010),s=a(12466),i=a(16550),l=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){var t,a;return null!=(t=null==(a=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function k(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,r=(0,i.k6)(),s=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,l._X)(s),(0,o.useCallback)((function(e){if(s){var t=new URLSearchParams(r.location.search);t.set(s,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[s,r])]}function f(e){var t,a,n,r,s=e.defaultValue,i=e.queryString,l=void 0!==i&&i,u=e.groupId,p=d(e),f=(0,o.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var o=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:s,tabValues:p})})),m=f[0],g=f[1],v=k({queryString:l,groupId:u}),b=v[0],w=v[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],r=a[1],[n,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),N=y[0],x=y[1],T=function(){var e=null!=b?b:N;return h({value:e,tabValues:p})?e:null}();return(0,o.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:m,selectValue:(0,o.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),x(e)}),[w,x,p]),tabValues:p}}var m=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,a=e.block,i=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],p=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),l(n))},h=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,o=c.indexOf(e.currentTarget)+1;a=null!=(n=c[o])?n:c[0];break;case"ArrowLeft":var r,s=c.indexOf(e.currentTarget)-1;a=null!=(r=c[s])?r:c[c.length-1]}null==(t=a)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,s=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},s,{className:(0,r.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function b(e){var t=e.lazy,a=e.children,n=e.selectedValue,r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var s=r.find((function(e){return e.props.value===n}));return s?(0,o.cloneElement)(s,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(v,(0,n.Z)({},e,t)),o.createElement(b,(0,n.Z)({},e,t)))}function y(e){var t=(0,m.Z)();return o.createElement(w,(0,n.Z)({key:String(t)},e))}},6555:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>p,toc:()=>h});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=a(47940),i=(a(74866),a(85162),a(35703)),l=["components"],u={id:"learn-guides-transfers",title:"Polkadot-JS Guides about Transfers",sidebar_label:"Transfer Guides",description:"Polkadot-JS Guides about Balances Transfers.",keywords:["gides","advanced","polkadot-js","transfers"],slug:"../learn-guides-transfers"},c=void 0,p={unversionedId:"learn/learn-guides-transfers",id:"learn/learn-guides-transfers",title:"Polkadot-JS Guides about Transfers",description:"Polkadot-JS Guides about Balances Transfers.",source:"@site/../docs/learn/learn-guides-transfers.md",sourceDirName:"learn",slug:"/learn-guides-transfers",permalink:"/docs/learn-guides-transfers",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-transfers.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1714545713,formattedLastUpdatedAt:"May 1, 2024",frontMatter:{id:"learn-guides-transfers",title:"Polkadot-JS Guides about Transfers",sidebar_label:"Transfer Guides",description:"Polkadot-JS Guides about Balances Transfers.",keywords:["gides","advanced","polkadot-js","transfers"],slug:"../learn-guides-transfers"},sidebar:"docs",previous:{title:"Pure Proxy Guides",permalink:"/docs/learn-guides-accounts-proxy-pure"},next:{title:"Staking Guides",permalink:"/docs/learn-guides-staking"}},d={},h=[{value:"Metadata Updates with the Polkadot-JS Browser Extension",id:"metadata-updates-with-the-polkadot-js-browser-extension",level:2},{value:"Transfers using the Polkadot-JS UI and Browser Extension",id:"transfers-using-the-polkadot-js-ui-and-browser-extension",level:2},{value:"Verify Extrinsics with the Polkadot-JS Browser Extension",id:"verify-extrinsics-with-the-polkadot-js-browser-extension",level:3},{value:"Verify Extrinsics with the Polkadot-JS UI",id:"verify-extrinsics-with-the-polkadot-js-ui",level:3},{value:"Keep-Alive Checks with the Polkadot-JS UI",id:"keep-alive-checks-with-the-polkadot-js-ui",level:3},{value:"Vested Transfers with the Polkadot-JS UI",id:"vested-transfers-with-the-polkadot-js-ui",level:3},{value:"Lazy Vesting",id:"lazy-vesting",level:4},{value:"Calculating When Vesting DOT Will Be Available",id:"calculating-when-vesting-dot-will-be-available",level:4},{value:"Batch Transfers with the Polkadot-JS UI",id:"batch-transfers-with-the-polkadot-js-ui",level:3},{value:"Teleporting Tokens using the Polkadot-JS UI",id:"teleporting-tokens-using-the-polkadot-js-ui",level:3},{value:"Calculating Fees with Polkadot-JS",id:"calculating-fees-with-polkadot-js",level:2},{value:"Existing Reference Error",id:"existing-reference-error",level:2},{value:"Bonded Tokens",id:"bonded-tokens",level:3},{value:"Checking for Locks",id:"checking-for-locks",level:3},{value:"Purging Session Keys",id:"purging-session-keys",level:3},{value:"Existing Recovery Info",id:"existing-recovery-info",level:3},{value:"Existing Non-Native Assets",id:"existing-non-native-assets",level:3}],k={toc:h},f="wrapper";function m(e){var t=e.components,u=(0,o.Z)(e,l);return(0,r.kt)(f,(0,n.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,r.kt)("h2",{id:"metadata-updates-with-the-polkadot-js-browser-extension"},"Metadata Updates with the Polkadot-JS Browser Extension"),(0,r.kt)("p",null,"Before signing extrinsics with the Polkadot-JS Browser Extension, always check for metadata updates.\n",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/gbvrHzr4EDY?t=84"},(0,r.kt)("strong",{parentName:"a"},"This video tutorial"))," will explain how to do it."),(0,r.kt)("admonition",{title:"Polkadot Vault vs Polkadot-JS Browser Extension",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Polkadot Vault app updates the full metadata through the QR fountain while the extension updates\nthe metadata index (the metadata is not loaded into it). As a consequence the process of updating\nmetadata is different in this two cases (you will notice that on the Vault app the update takes\nlonger for example). Having outdated metadata on the Vault app will prevent you from signing, while\non the extension you will be able to click the sign button but the extrinsic will likely fail\n(similarly of having an outdated Ledger app). In general, failing to update metadata will most\nlikely result in you not being able to sign extrinsics.")),(0,r.kt)("h2",{id:"transfers-using-the-polkadot-js-ui-and-browser-extension"},"Transfers using the Polkadot-JS UI and Browser Extension"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=gbvrHzr4EDY"},"this video tutorial")," to learn how to send funds\nusing the Polkadot-JS UI and Browser Extension. See also the Polkadot Support pages for detailed\ninformation about signing transactions using\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181993-how-to-sign-a-transaction-directly-on-polkadot-js-ui"},"the Polkadot-JS UI"),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181989"},"the Polkadot-JS browser extension"),"."),(0,r.kt)("h3",{id:"verify-extrinsics-with-the-polkadot-js-browser-extension"},"Verify Extrinsics with the Polkadot-JS Browser Extension"),(0,r.kt)("p",null,"Visit the\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000179161-how-can-i-verify-what-extrinsic-i-m-signing-#Verify-an-extrinsic-in-the-Polkadot-extension"},(0,r.kt)("strong",{parentName:"a"},"dedicated support page")),"\nand see ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/bxMs-9fBtFk?t=261"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," tutorial to learn about how to\nverify extrinsics before signing them. The video will also mention potential attacks that can happen\nto you while signing for transactions."),(0,r.kt)("h3",{id:"verify-extrinsics-with-the-polkadot-js-ui"},"Verify Extrinsics with the Polkadot-JS UI"),(0,r.kt)("p",null,"Visit the\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000179161-how-can-i-verify-what-extrinsic-i-m-signing-#Verify-an-extrinsic-in-the-Polkadot-JS-UI"},(0,r.kt)("strong",{parentName:"a"},"dedicated support page")),"\nand see ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/bxMs-9fBtFk?t=163"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," tutorial to learn about how to\nverify extrinsics before signing them. The video will also mention potential attacks that can happen\nto you while signing for transactions."),(0,r.kt)("h3",{id:"keep-alive-checks-with-the-polkadot-js-ui"},"Keep-Alive Checks with the Polkadot-JS UI"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/mgPHVztHJWk"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," and\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-"},(0,r.kt)("strong",{parentName:"a"},"this support page")),"\nto learn about keep-alive checks and existential deposit.")),(0,r.kt)("p",null,"In Polkadot there are two main ways to\ntransfer funds from one account to another:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transfer keep-alive")," (default option) will not allow you to send an amount that would allow the\nsending account to be removed due to it going below the\n",(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-"},"existential deposit"),"\nof\n",(0,r.kt)(s.Z,{network:"polkadot",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),".\n",""),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transfer allow-death")," will allow you to send\nDOT regardless of the consequence. If the\nbalance drops below the existential deposit your account will be reaped. It may be that you do not\nwant to keep the account alive (for example, because you are moving all of your funds to a\ndifferent address). To switch the keep-alive check off visit\n",(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000169248"},"this support article"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Attempting to send less than the existential deposit to an account with\n0 DOT will always fail, no matter if the\nkeep-alive check is on or not. For instance, attempting to transfer\n0.1 DOT to an account you just generated\n(and thus has no balance) will fail, since\n0.1 DOT is less than the existential\ndeposit of\n",(0,r.kt)(s.Z,{network:"polkadot",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),"\n","\nand the account cannot be initialized with such a low balance."),(0,r.kt)("p",{parentName:"admonition"},"Even if the transfer fails due to a keep-alive check, the transaction fee will be deducted from the\nsending account if you attempt to transfer.")),(0,r.kt)("h3",{id:"vested-transfers-with-the-polkadot-js-ui"},"Vested Transfers with the Polkadot-JS UI"),(0,r.kt)("p",null,"You can watch ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/JVlwTQBwNGc"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," to understand how to do vested\ntransfers using the Polkadot-JS UI, including linear and cliff vesting. Note the tutorial uses the\nWestend Testnet, but the same applies to\nPolkadot."),(0,r.kt)("p",null,"There are two ways that vesting schedules can be created."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One way is through an extrinsic type available in the Vesting pallet, ",(0,r.kt)("inlineCode",{parentName:"li"},"vested_transfer"),". The\nvested transfer function allows anyone to create a vesting schedule with a transfer of funds, as\nlong as the account for which the vesting schedule will be created does not already have one and\nthe transfer moves at least ",(0,r.kt)("inlineCode",{parentName:"li"},"MinVestedTransfer")," funds, which is specified as a chain constant."),(0,r.kt)("li",{parentName:"ul"},"A second way is as part of the genesis configuration of the chain. In the case of\nPolkadot, the chain specification genesis\nscript reads the state of the Claims contract that exists on the Ethereum blockchain and creates\nvesting schedules in genesis for all the allocations registered as being vested.")),(0,r.kt)("p",null,"Vesting schedules have three parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"locked"),", the amount of tokens to be transferred in\n",(0,r.kt)("a",{parentName:"li",href:"../learn/learn-DOT#the-planck-unit"},"Planck units"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"per block"),", the number of tokens that are released per block"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"starting block"),", the block number after which the vesting schedule starts")),(0,r.kt)("p",null,"The configuration of these three fields dictates the amount of funds that are originally locked, the\nslope of the unlock line and the block number for when the unlocking begins."),(0,r.kt)("h4",{id:"lazy-vesting"},"Lazy Vesting"),(0,r.kt)("p",null,"Like ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking-advanced"},"simple payouts"),", vesting is ",(0,r.kt)("em",{parentName:"p"},"lazy"),", which means that someone must\nexplicitly call an extrinsic to update the lock that is placed on an account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"vest")," extrinsic will update the lock that is placed on the caller."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"vest_other"),' will update the lock that is placed on another "target" account\'s funds.')),(0,r.kt)("p",null,"These extrinsics are exposed from the Vesting pallet."),(0,r.kt)("p",null,"If you are using the Polkadot-JS UI, when there are\nDOT available to vest for an account, then you\nwill have the ability to unlock DOT which has\nalready vested from the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts")," page."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"unbond",src:a(27152).Z,width:"241",height:"301"})),(0,r.kt)("h4",{id:"calculating-when-vesting-dot-will-be-available"},"Calculating When Vesting DOT Will Be Available"),(0,r.kt)("p",null,"Generally, you should be able to see from the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts"),' by\nlooking at your accounts and seeing when the vesting will finish. However, some DOT vest with\n"cliffs" - a single block where all the DOT are released, instead of vesting over time. In this\ncase, you will have to query the chain state directly to see when they will be available (since\ntechnically, the vesting has not yet started - all of the vesting will occur in a single block in\nthe future).'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the\n",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/chainstate"},"Chain State")," page on\nPolkadot-JS."),(0,r.kt)("li",{parentName:"ol"},"Query chain state for ",(0,r.kt)("inlineCode",{parentName:"li"},"vesting.vesting(ACCOUNT_ID)")),(0,r.kt)("li",{parentName:"ol"},"Note the ",(0,r.kt)("inlineCode",{parentName:"li"},"startingBlock")," where the unlock starts, and how much DOT is unlocked per block\n(",(0,r.kt)("inlineCode",{parentName:"li"},"perBlock"),")."),(0,r.kt)("li",{parentName:"ol"},'You will have to calculate the result into \u201chuman time". To do this, remember that there are\napproximately 14\u2019400 blocks per day, and you can see what the latest block is shown on the\n',(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/explorer"},"Explorer")," page.")),(0,r.kt)("h3",{id:"batch-transfers-with-the-polkadot-js-ui"},"Batch Transfers with the Polkadot-JS UI"),(0,r.kt)("p",null,"Batch transfers are balances transfers to multiple accounts executed by one account. In order to\nconstruct a batch transfer you need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"utility.batch(calls)")," extrinsic using the\n",(0,r.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/pallet_utility/index.html"},"utility pallet"),", and"),(0,r.kt)("li",{parentName:"ul"},"Within the batch call you can create multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"balances.transferKeepAlive")," extrinsics using the\n",(0,r.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/pallet_balances/index.html"},"balances pallet"),". You\ncan specify as many receivers as you desire.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can watch ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/uoUC2K8muvw"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," to learn how to do batch\ntransfers. Note the tutorial uses the Westend Testnet, but the same applies to both Polkadot and\nKusama.")),(0,r.kt)("h3",{id:"teleporting-tokens-using-the-polkadot-js-ui"},"Teleporting Tokens using the Polkadot-JS UI"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/3tE9ouub5Tg"},"this video tutorial")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181119-how-to-teleport-dot-or-ksm-between-statemint-or-statemine"},"this additional support article"),"\nto learn more about how to teleport tokens."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'If you do not see "Accounts > Teleport" in the Polkadot-JS UI, the source chain that you have\nselected does not support teleportation yet.')),(0,r.kt)("h2",{id:"calculating-fees-with-polkadot-js"},"Calculating Fees with Polkadot-JS"),(0,r.kt)("p",null,"One useful utility for estimating transaction fees programmatically is the via the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polkadot/api"},"@polkadot/api"),". Check out the following script that\nlogs some relevant fee information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Estimate the fees as RuntimeDispatchInfo using the signer\nconst info = await api.tx.balances.transfer(recipient, 123).paymentInfo(sender);\n\n// Log relevant info, partialFee is Balance, estimated for current\nconsole.log(`\n  class=${info.class.toString()},\n  weight=${info.weight.toString()},\n  partialFee=${info.partialFee.toHuman()}\n`);\n")),(0,r.kt)("p",null,"For additional information on interacting with the API, checkout\n",(0,r.kt)("a",{parentName:"p",href:"/docs/polkadotjs"},"Polkadot-JS"),"."),(0,r.kt)("h2",{id:"existing-reference-error"},"Existing Reference Error"),(0,r.kt)("p",null,"If you are trying to reap an account and you receive an error similar to\n",(0,r.kt)("inlineCode",{parentName:"p"},'"There is an existing reference count on the sender account. As such the account cannot be reaped from the state"'),",\nthen you have existing references to this account that must be first removed before it can be\nreaped. References may still exist from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bonded tokens (most likely)"),(0,r.kt)("li",{parentName:"ul"},"Unpurged session keys (if you were previously a validator)"),(0,r.kt)("li",{parentName:"ul"},"Token locks"),(0,r.kt)("li",{parentName:"ul"},"Existing recovery info"),(0,r.kt)("li",{parentName:"ul"},"Existing assets")),(0,r.kt)("h3",{id:"bonded-tokens"},"Bonded Tokens"),(0,r.kt)("p",null,"If you have tokens that are bonded, you will need to unbond them before you can reap your account.\nFollow the instructions at ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-guides-nominator#bond-your-tokens"},"Unbonding and Rebonding"),"\nto check if you have bonded tokens, stop nominating (if necessary) and unbond your tokens."),(0,r.kt)("h3",{id:"checking-for-locks"},"Checking for Locks"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/LHgY7ds_bZ0"},"this video tutorial")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169437-why-can-t-i-transfer-tokens-"},"this support page"),"\nto learn how to check for locks and remove them.")),(0,r.kt)("p",null,"You can also check for locks by querying ",(0,r.kt)("inlineCode",{parentName:"p"},"system.account(AccountId)")," in\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},(0,r.kt)("inlineCode",{parentName:"a"},"Chain state")," tab under the ",(0,r.kt)("inlineCode",{parentName:"a"},"Developer")," drop-down menu in the Polkadot-JS UI"),'.\nSelect your account, then click the "+" button next to the dropdowns, and check the relative ',(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\nJSON object. If you see a non-zero value for anything other than ",(0,r.kt)("inlineCode",{parentName:"p"},"free"),", you have locks on your\naccount that need to get resolved."),(0,r.kt)("h3",{id:"purging-session-keys"},"Purging Session Keys"),(0,r.kt)("p",null,"If you used this account to set up a validator and you did not purge your keys before unbonding your\ntokens, you need to purge your keys. You can do this by seeing the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-stop-validating"},"How to Stop Validating")," page. This can also\nbe checked by checking ",(0,r.kt)("inlineCode",{parentName:"p"},"session.nextKeys")," in the chain state for an existing key."),(0,r.kt)("h3",{id:"existing-recovery-info"},"Existing Recovery Info"),(0,r.kt)("p",null,"Currently, Polkadot does not use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/recovery/"},"Recovery Pallet"),", so this is\nprobably not the reason for your tokens having existing references."),(0,r.kt)("p",null,"","","",""),(0,r.kt)("h3",{id:"existing-non-native-assets"},"Existing Non-Native Assets"),(0,r.kt)("p",null,"Currently, Polkadot does not use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/assets"},"Assets Pallet"),", so\nthis is probably not the reason for your tokens having existing references."))}m.isMDXComponent=!0},27152:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/unlock-vesting-deefc0d6d9a08a91af1490a82e01069b.png"},46601:()=>{}}]);