"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),b=a,h=c["".concat(l,".").concat(b)]||c[b]||p[b]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},22343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"neuroweb-dashboards",title:"Neuroweb Dashboards",sidebar_label:"Neuroweb",description:"Neuroweb is a decentralized AI blockchain that rewards knowledge creation and sharing.",keywords:["polkadot","dashboard","dune","neuroweb","DKG","OTP","knowledgeasset"],slug:"../neuroweb-dashboards"},l="Neuroweb Dashboards",d={unversionedId:"general/dune-analytics/parachain-dashboards/neuroweb-dashboards",id:"general/dune-analytics/parachain-dashboards/neuroweb-dashboards",title:"Neuroweb Dashboards",description:"Neuroweb is a decentralized AI blockchain that rewards knowledge creation and sharing.",source:"@site/../docs/general/dune-analytics/parachain-dashboards/neuroweb-dashboards.md",sourceDirName:"general/dune-analytics/parachain-dashboards",slug:"/general/dune-analytics/neuroweb-dashboards",permalink:"/docs/general/dune-analytics/neuroweb-dashboards",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/dune-analytics/parachain-dashboards/neuroweb-dashboards.md",tags:[],version:"current",lastUpdatedBy:"MK",lastUpdatedAt:1719215716,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"neuroweb-dashboards",title:"Neuroweb Dashboards",sidebar_label:"Neuroweb",description:"Neuroweb is a decentralized AI blockchain that rewards knowledge creation and sharing.",keywords:["polkadot","dashboard","dune","neuroweb","DKG","OTP","knowledgeasset"],slug:"../neuroweb-dashboards"},sidebar:"docs",previous:{title:"Moonbeam",permalink:"/docs/general/dune-analytics/moonbeam-dashboards"},next:{title:"Nodle",permalink:"/docs/general/dune-analytics/nodle-dashboards"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Featured Dashboards on Dune",id:"featured-dashboards-on-dune",level:2},{value:"Key Tables",id:"key-tables",level:2},{value:"Useful Queries",id:"useful-queries",level:2},{value:"Getting Started with Queries",id:"getting-started-with-queries",level:2}],p={toc:c},b="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(b,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"neuroweb-dashboards"},"Neuroweb Dashboards"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"NeuroWeb is a decentralized AI blockchain that rewards knowledge creation and sharing. Its NEURO\ntoken supports the AI economy by incentivizing contributions to the OriginTrail Decentralized\nKnowledge Graph (DKG). NeuroWeb builds upon the groundwork established by its predecessor, the\nOriginTrail Parachain (OTP). This transformation into NeuroWeb was facilitated through a community\ngovernance vote on OTP in December 2023."),(0,o.kt)("h2",{id:"featured-dashboards-on-dune"},"Featured Dashboards on Dune"),(0,o.kt)("p",null,"Here you will find a variety of dashboards that help visualize data from the Neuroweb parachain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dune.com/substrate/neuroweb"},"Neuroweb"),": A comprehensive analysis of NeuroWeb, including:\nDKG, knowledge asset, asset, and XCM analysis.")),(0,o.kt)("h2",{id:"key-tables"},"Key Tables"),(0,o.kt)("p",null,"Data from the NeuroWeb parachain is organized into several key tables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"neuroweb.balances")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"neuroweb.blocks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"neuroweb.calls")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"neuroweb.events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"neuroweb.extrinsics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"neuroweb.transfers"))),(0,o.kt)("p",null,"Start building your own queries using granular data on Dune\n",(0,o.kt)("a",{parentName:"p",href:"https://dune.com/queries?category=canonical&namespace=neuroweb"},"here"),"."),(0,o.kt)("h2",{id:"useful-queries"},"Useful Queries"),(0,o.kt)("p",null,"Some useful queries for Neuroweb are provided:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Query"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Neuroweb Knowledge Asset"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://dune.com/queries/3695045"},"query_3695045")),(0,o.kt)("td",{parentName:"tr",align:null},"Find all transfer records of knowledge assets on Neuroweb")))),(0,o.kt)("h2",{id:"getting-started-with-queries"},"Getting Started with Queries"),(0,o.kt)("p",null,"To get started with querying data from Unique, you are welcome to use the mentioned materialized\nqueries. You can use the following DuneSQL queries as examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Neuroweb Knowledge Asset Distribution" showLineNumbers',title:'"Neuroweb',Knowledge:!0,Asset:!0,'Distribution"':!0,showLineNumbers:!0},"SELECT DISTINCT\n  get_href(\n    'https://dkg.origintrail.io/profile?wallet=' || CAST(To AS VARCHAR),\n    CONCAT(\n      SUBSTR(To, 1, 4),\n      '...',\n      SUBSTR(To, LENGTH(To) - 3)\n    )\n  ) AS Holder_URL,\n  CONCAT(\n    SUBSTR(To, 1, 4),\n    '...',\n    SUBSTR(To, LENGTH(To) - 3)\n  ) AS Holder,\n  COUNT(\"Token ID\") AS \"# of Tokens\"\nFROM\n  query_3695045\nGROUP BY\n  To\nORDER BY\n  \"# of Tokens\" DESC;\n")),(0,o.kt)("p",null,"Query result:"),(0,o.kt)("iframe",{src:"https://dune.com/embeds/3696553/6219067",height:"350",width:"100%"}),(0,o.kt)("admonition",{title:"DuneSQL Referece",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more information on DuneSQL, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/general/dunesql-cheatsheet"},"DuneSQL Cheatsheet"),"\nand\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.dune.com/query-engine/Functions-and-operators/index"},"DuneSQL Official Documentation"),".")))}h.isMDXComponent=!0}}]);