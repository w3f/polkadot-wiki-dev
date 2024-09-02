"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9188],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,y=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},11470:(e,t,n)=>{n.d(t,{A:()=>C});var a=n(58168),r=n(96540),i=n(20053),l=n(23104),o=n(56347),s=n(57485),u=n(31682),p=n(89466);function c(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function y(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,o.W6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function d(e){var t,n,a,i,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,c=m(e),d=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:c})})),f=d[0],N=d[1],h=y({queryString:s,groupId:u}),v=h[0],b=h[1],C=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Dv)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),x=C[0],w=C[1],E=function(){var e=null!=v?v:x;return g({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){E&&N(E)}),[E]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);N(e),b(e),w(e)}),[b,w,c]),tabValues:c}}var f=n(92303);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],c=(0,l.a_)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},g=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=p.indexOf(e.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var i,l=p.indexOf(e.currentTarget)-1;n=null!=(i=p[l])?i:p[p.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return p.push(e)},onKeyDown:g,onClick:m},l,{className:(0,i.A)("tabs__item",N.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function b(e){var t=d(e);return r.createElement("div",{className:(0,i.A)("tabs-container",N.tabList)},r.createElement(h,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function C(e){var t=(0,f.A)();return r.createElement(b,(0,a.A)({key:String(t)},e))}},62012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>N,frontMatter:()=>u,metadata:()=>c,toc:()=>g});var a,r=n(58168),i=n(98587),l=(n(96540),n(15680)),o=n(11470),s=["components"],u={id:"learn-xcm-instructions",title:"XCM Instructions & Register Specification",sidebar_label:"XCM Instructions",description:"Specification for Instructions and Registers for the XCM Format.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-instructions"},p=void 0,c={unversionedId:"learn/learn-xcm-instructions",id:"learn/learn-xcm-instructions",title:"XCM Instructions & Register Specification",description:"Specification for Instructions and Registers for the XCM Format.",source:"@site/../docs/learn/learn-xcm-instructions.md",sourceDirName:"learn",slug:"/learn-xcm-instructions",permalink:"/docs/learn-xcm-instructions",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-xcm-instructions.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1717993655,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{id:"learn-xcm-instructions",title:"XCM Instructions & Register Specification",sidebar_label:"XCM Instructions",description:"Specification for Instructions and Registers for the XCM Format.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-instructions"},sidebar:"docs",previous:{title:"XCM Virtual Machine (XCVM)",permalink:"/docs/learn-xcvm"},next:{title:"Accounts",permalink:"/docs/learn-account-advanced"}},m={},g=[{value:"XCVM Registers",id:"xcvm-registers",level:2},{value:"XCVM Instruction Set",id:"xcvm-instruction-set",level:2},{value:"Instructions Application Example",id:"instructions-application-example",level:2}],y=(a="TabItem",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.yg)("div",e)}),d={toc:g},f="wrapper";function N(e){var t=e.components,n=(0,i.A)(e,s);return(0,l.yg)(f,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("admonition",{title:"XCM Documentation",type:"info"},(0,l.yg)("p",{parentName:"admonition"},"For a more practical approach to utilizing XCM, refer to the ",(0,l.yg)("a",{parentName:"p",href:"./learn/xcm"},"XCM Docs"),". Please keep in\nmind that XCM is under active development.")),(0,l.yg)("p",null,"This page can also be viewed at the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},(0,l.yg)("inlineCode",{parentName:"a"},"xcm-format")),"\nrepository, where each instruction and register is explained in-depth."),(0,l.yg)("h2",{id:"xcvm-registers"},"XCVM Registers"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Programme")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Programme Counter")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Error")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Error Handler")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Appendix")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Origin")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Holding")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Surplus Weight")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Refunded Weight")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Transact Status")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Topic")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Transact Status Register")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("em",{parentName:"li"},"Topic Register"))),(0,l.yg)("h2",{id:"xcvm-instruction-set"},"XCVM Instruction Set"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"WithdrawAsset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ReserveAssetDeposited")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ReceiveTeleportedAsset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"QueryResponse")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"TransferAsset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"TransferReserveAsset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"Transact")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"HrmpNewChannelOpenRequest")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"HrmpChannelAccepted")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"HrmpChannelClosing")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ClearOrigin")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"DescendOrigin")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ReportError")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"DepositAsset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"DepositReserveAsset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ExchangeAsset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"InitiateReserveWithdraw")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"InitiateTeleport")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"QueryHolding")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"BuyExecution")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"RefundSurplus")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SetErrorHandler")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SetAppendix")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ClearError")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ClaimAsset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"Trap")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SubscribeVersion")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"UnsubscribeVersion")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"BurnAsset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ExpectAsset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ExpectError")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ExpectOrigin")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"QueryPallet")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ExpectPallet")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ReportTransactStatus")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ClearTransactStatus")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"LockAsset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"UnlockAsset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"NoteUnlockable")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"RequestUnlock"))),(0,l.yg)("h2",{id:"instructions-application-example"},"Instructions Application Example"),(0,l.yg)("p",null,"The following presents the practical mapping of instructions to some\n",(0,l.yg)("a",{parentName:"p",href:"/docs/learn-xcm/#core-functionality-of-xcm"},"core functionality in XCM"),"."),(0,l.yg)(o.A,{groupId:"operating-systems",values:[{label:"Programmability",value:"program"},{label:"Functional Multichain Decomposition",value:"fmd"}],mdxType:"Tabs"},(0,l.yg)(y,{value:"program",mdxType:"TabItem"}," These are the primary instructions that enable programmability and branching to be possible. Branching in this context is the ability for errors and logic to be handled as needed when dealing with a message.",(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format/tree/master#expectassetmultiassets"},(0,l.yg)("inlineCode",{parentName:"a"},"ExpectAsset(MultiAssets)"))," -\nChecks if the Holding register has a specific amount of assets, throws an error if it doesn't.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format/tree/master#expecterroroptionu32-error"},(0,l.yg)("inlineCode",{parentName:"a"},"ExpectError(Option<(u32, Error)>)"))," -\nEnsures the Error register contains the given error, and throws an error if it doesn't.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format/tree/master#expectoriginmultilocation"},(0,l.yg)("inlineCode",{parentName:"a"},"ExpectOrigin(MultiLocation)"))," -\nEnsures the Origin register contains the expected origin, and throws an error if it doesn't.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"QueryPallet")," - Queries the existence of a particular pallet type.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"ExpectPallet")," - Ensure that a particular pallet with a particular version exists.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"ReportTransactStatus(QueryResponseInfo)")," - Send a ",(0,l.yg)("inlineCode",{parentName:"p"},"QueryResponse")," message containing the value of\nthe Transact Status Register to some destination.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"ClearTransactStatus")," - Set the Transact Status Register to its default, cleared, value.")))),(0,l.yg)(y,{value:"fmd",mdxType:"TabItem"},(0,l.yg)("p",null,"These instructions highlight the key instructions focused on Functional Multichain Decomposition."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"LockAsset(MultiAsset, MultiLocation)")," - Lock the locally held asset and prevent further transfer\nor withdrawal.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"UnlockAsset(MultiAsset, MultiLocation)")," - Remove the lock over ",(0,l.yg)("inlineCode",{parentName:"p"},"asset")," on this chain and (if\nnothing else is preventing it) allow the asset to be transferred.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"NoteUnlockable(MultiAsset, MultiLocation)")," - Asset (",(0,l.yg)("inlineCode",{parentName:"p"},"asset"),") has been locked on the ",(0,l.yg)("inlineCode",{parentName:"p"},"origin"),"\nsystem and may not be transferred. It may only be unlocked with the receipt of the ",(0,l.yg)("inlineCode",{parentName:"p"},"UnlockAsset"),"\ninstruction from this chain.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"RequestUnlock(MultiAsset, MultiLocation)")," - Send an ",(0,l.yg)("inlineCode",{parentName:"p"},"UnlockAsset")," instruction to the ",(0,l.yg)("inlineCode",{parentName:"p"},"locker")," for\nthe given ",(0,l.yg)("inlineCode",{parentName:"p"},"asset"),"."))))))}N.isMDXComponent=!0}}]);