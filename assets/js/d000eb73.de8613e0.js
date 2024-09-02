"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4228],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),d=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(i.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),y=r,m=p["".concat(i,".").concat(y)]||p[y]||h[y]||s;return t?n.createElement(m,l(l({ref:a},u),{},{components:t})):n.createElement(m,l({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=y;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<s;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},15181:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=t(58168),r=t(98587),s=(t(96540),t(15680)),l=["components"],o={id:"stellaswap-dashboards",title:"Stellaswap Dashboards",sidebar_label:"Stellaswap (Moonbeam)",description:"Stellaswap is the leading DEX on Moonbeam.",keywords:["polkadot","dashboard","dune","stellaswap","DeFi","moonbeam"],slug:"../stellaswap-dashboards"},i="Stellaswap Dashboards",d={unversionedId:"general/dune-analytics/parachain-dashboards/stellaswap-dashboards",id:"general/dune-analytics/parachain-dashboards/stellaswap-dashboards",title:"Stellaswap Dashboards",description:"Stellaswap is the leading DEX on Moonbeam.",source:"@site/../docs/general/dune-analytics/parachain-dashboards/stellaswap-dashboards.md",sourceDirName:"general/dune-analytics/parachain-dashboards",slug:"/general/dune-analytics/stellaswap-dashboards",permalink:"/docs/general/dune-analytics/stellaswap-dashboards",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/dune-analytics/parachain-dashboards/stellaswap-dashboards.md",tags:[],version:"current",lastUpdatedBy:"MK",lastUpdatedAt:1719215716,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"stellaswap-dashboards",title:"Stellaswap Dashboards",sidebar_label:"Stellaswap (Moonbeam)",description:"Stellaswap is the leading DEX on Moonbeam.",keywords:["polkadot","dashboard","dune","stellaswap","DeFi","moonbeam"],slug:"../stellaswap-dashboards"},sidebar:"docs",previous:{title:"Snowbridge",permalink:"/docs/general/dune-analytics/snowbridge-dashboards"},next:{title:"Unique",permalink:"/docs/general/dune-analytics/unique-dashboards"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Featured Dashboards on Dune",id:"featured-dashboards-on-dune",level:2},{value:"Key Tables",id:"key-tables",level:2},{value:"Useful Queries",id:"useful-queries",level:2},{value:"Getting Started with Queries",id:"getting-started-with-queries",level:2}],h={toc:p},y="wrapper";function m(e){var a=e.components,t=(0,r.A)(e,l);return(0,s.yg)(y,(0,n.A)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"stellaswap-dashboards"},"Stellaswap Dashboards"),(0,s.yg)("h2",{id:"overview"},"Overview"),(0,s.yg)("p",null,"Stellaswap is the leading DEX on Moonbeam, no matter whether you measure by volume, number of pools,\nor accounts using it. It also offers liquid staking for DOT."),(0,s.yg)("p",null,"Users can swap from any asset to any other asset using an automated router that will calculate the\nmost efficient path."),(0,s.yg)("p",null,"Liquidity providers can earn fees from the trades in the pools they provide liquidity to."),(0,s.yg)("h2",{id:"featured-dashboards-on-dune"},"Featured Dashboards on Dune"),(0,s.yg)("p",null,"Here you will find a variety of dashboards that help visualize data from StellaSwap:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://dune.com/substrate/stellaswap"},"stellaswap on Polkadot"),": This dashboard provides a\ncomprehensive view of DEX volumes and liquidity on StellaSwap.")),(0,s.yg)("h2",{id:"key-tables"},"Key Tables"),(0,s.yg)("p",null,"Data from the stellaswap DEX is sourced directly from substrate moonbeam tables: ",(0,s.yg)("inlineCode",{parentName:"p"},"moonbeam.events")),(0,s.yg)("h2",{id:"useful-queries"},"Useful Queries"),(0,s.yg)("p",null,"Some useful queries for Hydration are made available as materialized views."),(0,s.yg)("table",null,(0,s.yg)("thead",{parentName:"table"},(0,s.yg)("tr",{parentName:"thead"},(0,s.yg)("th",{parentName:"tr",align:null},"Subject Area"),(0,s.yg)("th",{parentName:"tr",align:null},"Query"),(0,s.yg)("th",{parentName:"tr",align:null},"Materialized View"),(0,s.yg)("th",{parentName:"tr",align:null},"Description"))),(0,s.yg)("tbody",{parentName:"table"},(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},"Stellaswap V3 Trades"),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("a",{parentName:"td",href:"https://dune.com/queries/3661633"},"query_3661633")),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"dune.substrate.result_stellaswap_v_3_trades")),(0,s.yg)("td",{parentName:"tr",align:null},"Trades in V3 pools, similar to dex.trades format.")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},"Stellaswap V3 Trades (alt)"),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("a",{parentName:"td",href:"https://dune.com/queries/3646057"},"query_3646057")),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"dune.substrate.result_stellaswap_v3_trades")),(0,s.yg)("td",{parentName:"tr",align:null},"Trades in V3 pools, suitable for volume and price analysis")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},"V3 Trades Enriched"),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("a",{parentName:"td",href:"https://dune.com/queries/3656957"},"query_3656957")),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"dune.substrate.result_stellaswap_trades_enriched")),(0,s.yg)("td",{parentName:"tr",align:null},"Trades in V3 pools, with USD equivalent prices.")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},"Stellaswap V3 Pools"),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("a",{parentName:"td",href:"https://dune.com/queries/3639606"},"query_3639606")),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"dune.substrate.dataset_stella_pools")," (dataset)"),(0,s.yg)("td",{parentName:"tr",align:null},"Master data for the pools")))),(0,s.yg)("p",null,"The three queries presented are all very similar, but they are optimized for different use cases."),(0,s.yg)("p",null,'Each trade will provide a token0 and token1, which are the two tokens traded. The order depends on\nthe order in the pool definition (see V3 pools query). Example: for the pool WGLMR-xcDOT, WGLMR is\ntoken0 and xcDOT is token1. Whether someone was buying or selling GLMR can be seen by the sign of\namount0. Positive means "selling", negative means "buying". Only one of the first of the three\nqueries above sorts the tokens into the right order.'),(0,s.yg)("p",null,"The other queries keep token0 and token1 in the order in which they appear in the raw data, which\nalso makes it easier to aggregate for the price and volume."),(0,s.yg)("p",null,"Pool master data is currently provided as a dataset directly, rather than parsed from events or from\na snapshot. This means the latest pools added may not be included in the dataset. (Remains a work in\nprogress.)"),(0,s.yg)("p",null,"Dune users are encouraged to study the source code of the queries, including parts of a query that\nmay have been commented out for future use."),(0,s.yg)("p",null,"Uncommenting these parts may accelerate your effort of adopting a query to a slightly different use\ncase."),(0,s.yg)("h2",{id:"getting-started-with-queries"},"Getting Started with Queries"),(0,s.yg)("p",null,"To get started with querying data from Stellaswap, you are welcome to use the mentioned materialized\nqueries. You can also use the following DuneSQL queries as examples:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql",metastring:'title="Stellaswap Volume Last Day" showLineNumbers',title:'"Stellaswap',Volume:!0,Last:!0,'Day"':!0,showLineNumbers:!0},"WITH maxts AS (\n  SELECT\n    MAX(DATE_TRUNC('day', block_time)) AS maxts\n  FROM\n    dune.substrate.result_stellaswap_trades_enriched T\n)\nSELECT\n  DATE_TRUNC('day', block_time) AS date,\n  T.token_pair,\n  project_contract_address,\n  current_timestamp - MAX(block_time) AS last_seen_ago,\n  ROUND(SUM(ABS(amount_usd))) AS volume_usd,\n  T.subquery\nFROM\n  dune.substrate.result_stellaswap_trades_enriched T\nWHERE\n  DATE_TRUNC('day', block_time) = (SELECT maxts FROM maxts)\nGROUP BY\n  1, 2, 3, 6\nORDER BY\n  1 DESC, 5 DESC;\n\n\n")),(0,s.yg)("p",null,"The query calculates the last available day's volume for each token pair. It also shows which pair\nwas used to calculate the USD value of the tokens involved. For example, if you trade a pair which\ncontains USDC or USDT, the dollar value of the trade is just the amount of USDC or USDT traded. For\nother pairs, the USD value is calculated using another currency as an intermediate, i.e. DOT or\nGLMR. Any pair which does not at least have one of these currencies will not have a USD value\ncalculated."),(0,s.yg)("p",null,"Query result:"),(0,s.yg)("iframe",{src:"https://dune.com/embeds/3676341/6183229/",height:"350",width:"100%"}),(0,s.yg)("admonition",{title:"DuneSQL Reference",type:"info"},(0,s.yg)("p",{parentName:"admonition"},"For more information on DuneSQL, please refer to the ",(0,s.yg)("a",{parentName:"p",href:"/docs/general/dunesql-cheatsheet"},"DuneSQL Cheatsheet"),"\nand\n",(0,s.yg)("a",{parentName:"p",href:"https://docs.dune.com/query-engine/Functions-and-operators/index"},"DuneSQL Official Documentation"),".")))}m.isMDXComponent=!0}}]);