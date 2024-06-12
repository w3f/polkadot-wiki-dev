"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1207],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=o.createContext({}),l=function(t){var e=o.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},m=function(t){var e=l(t.components);return o.createElement(d.Provider,{value:e},t.children)},p="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),p=l(a),k=r,u=p["".concat(d,".").concat(k)]||p[k]||h[k]||n;return a?o.createElement(u,s(s({ref:e},m),{},{components:a})):o.createElement(u,s({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,s=new Array(n);s[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[p]="string"==typeof t?t:r,s[1]=i;for(var l=2;l<n;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},15726:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=a(87462),r=a(63366),n=(a(67294),a(3905)),s=["components"],i={id:"polkadot-dashboards-staking",title:"Polkadot Dashboards: Staking",sidebar_label:"Staking",description:"This document demonstrated various Polkadot staking dashboards, offering insights into staking rewards, validator and nominator metrics, nomination pools, and pool member activities. These dashboards aim to provide a comprehensive view of staking dynamics within the Polkadot network.",keywords:["polkadot","governance","staking","dashboard","dune"],slug:"../polkadot-dashboards-staking"},d="Polkadot Dashboards Staking",l={unversionedId:"general/dune-analytics/polkadot-dashboards/polkadot-dashboards-staking",id:"general/dune-analytics/polkadot-dashboards/polkadot-dashboards-staking",title:"Polkadot Dashboards: Staking",description:"This document demonstrated various Polkadot staking dashboards, offering insights into staking rewards, validator and nominator metrics, nomination pools, and pool member activities. These dashboards aim to provide a comprehensive view of staking dynamics within the Polkadot network.",source:"@site/../docs/general/dune-analytics/polkadot-dashboards/polkadot-dashboards-staking.md",sourceDirName:"general/dune-analytics/polkadot-dashboards",slug:"/general/dune-analytics/polkadot-dashboards-staking",permalink:"/docs/general/dune-analytics/polkadot-dashboards-staking",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/dune-analytics/polkadot-dashboards/polkadot-dashboards-staking.md",tags:[],version:"current",lastUpdatedBy:"MK",lastUpdatedAt:1717658873,formattedLastUpdatedAt:"Jun 6, 2024",frontMatter:{id:"polkadot-dashboards-staking",title:"Polkadot Dashboards: Staking",sidebar_label:"Staking",description:"This document demonstrated various Polkadot staking dashboards, offering insights into staking rewards, validator and nominator metrics, nomination pools, and pool member activities. These dashboards aim to provide a comprehensive view of staking dynamics within the Polkadot network.",keywords:["polkadot","governance","staking","dashboard","dune"],slug:"../polkadot-dashboards-staking"},sidebar:"docs",previous:{title:"Governance",permalink:"/docs/general/dune-analytics/polkadot-dashboards-governance"},next:{title:"Network",permalink:"/docs/general/dune-analytics/polkadot-dashboards-network"}},m={},p=[{value:"Overview",id:"overview",level:2},{value:"Polkadot Staking Dashboard",id:"polkadot-staking-dashboard",level:2},{value:"Completed Era",id:"completed-era",level:3},{value:"Reward Rate Math",id:"reward-rate-math",level:3},{value:"Staking Analytics",id:"staking-analytics",level:3},{value:"Polkadot Staking Dashboard (Validators)",id:"polkadot-staking-dashboard-validators",level:2},{value:"Polkadot Staking Rewards",id:"polkadot-staking-rewards",level:3},{value:"Polkadot Staking Dashboard (Nominators)",id:"polkadot-staking-dashboard-nominators",level:2},{value:"Polkadot Staking Dashboard (Nomination Pool)",id:"polkadot-staking-dashboard-nomination-pool",level:2},{value:"Polkadot Staking Dashboard (Pool Member)",id:"polkadot-staking-dashboard-pool-member",level:2}],h={toc:p},k="wrapper";function u(t){var e=t.components,a=(0,r.Z)(t,s);return(0,n.kt)(k,(0,o.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"polkadot-dashboards-staking"},"Polkadot Dashboards Staking"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This document demonstrated various Polkadot staking dashboards, offering insights into staking\nrewards, validator and nominator metrics, nomination pools, and pool member activities. These\ndashboards aim to provide a comprehensive view of staking dynamics within the Polkadot network."),(0,n.kt)("p",null,"Authored by ",(0,n.kt)("a",{parentName:"p",href:"https://x.com/colorfulnotion"},(0,n.kt)("strong",{parentName:"a"},"@ colorfulnotion"))),(0,n.kt)("h2",{id:"polkadot-staking-dashboard"},"Polkadot Staking Dashboard"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"View On Dune:")," ",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/substrate/polkadot-staking"},"Polkadot Staking Dashboard")),(0,n.kt)("h3",{id:"completed-era"},"Completed Era"),(0,n.kt)("p",null,"Completed eras can have at most a 2-day delay before the staking rewards & APY computation becomes\navailable. The Staking Home Page shows the most recently completed era."),(0,n.kt)("h3",{id:"reward-rate-math"},"Reward Rate Math"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reward Rate"),": (validator_erasRewardPoints / erasRewardPoints_total) ","*"," ErasValidatorReward /\nvalidator_total_stake."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Effective Reward Rate"),": (1 - validator_commission) ","*"," Reward Rate."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Normalized Reward Rate"),": total_era_rewards / number_of_validators ","*"," (1 - commission) /\nvalidator_total_stake.")),(0,n.kt)("p",null,"Source Table: ",(0,n.kt)("strong",{parentName:"p"},"polkadot.stakings"),", MaterializedView:\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/queries/3302709"},(0,n.kt)("strong",{parentName:"a"},"dune.substrate.result_polkadot_validators")),",\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/queries/3326829"},(0,n.kt)("strong",{parentName:"a"},"dune.substrate.result_polkadot_nominators")),",\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/queries/3327350"},(0,n.kt)("strong",{parentName:"a"},"dune.substrate.result_polkadot_nominationpools")),",\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/queries/3327479"},(0,n.kt)("strong",{parentName:"a"},"dune.substrate.result_polkadot_poolmembers")),",\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/queries/3420617"},(0,n.kt)("strong",{parentName:"a"},"dune.substrate.result_polkadot_identity"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Github repo"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/colorfulnotion/substrate-etl"},(0,n.kt)("em",{parentName:"a"},(0,n.kt)("strong",{parentName:"em"},"substrate-etl")))),(0,n.kt)("h3",{id:"staking-analytics"},"Staking Analytics"),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3335920/5589273/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3338274/5593554/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3345583/5606404/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3338274/5817115/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3334573/5586661/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3459220/5813496/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3302959/5531365/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3303032/5531577/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3459195/5813464/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3414552/5732594/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3334817/5603258/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3334817/5587364/",height:"350",width:"100%"}),(0,n.kt)("h2",{id:"polkadot-staking-dashboard-validators"},"Polkadot Staking Dashboard (Validators)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"View On Dune:"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/substrate/polkadot-staking-validators"},"Polkadot Staking Dashboard (Validators)")),(0,n.kt)("h3",{id:"polkadot-staking-rewards"},"Polkadot Staking Rewards"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reward Rate"),": (validator_erasRewardPoints / erasRewardPoints_total) ","*"," ErasValidatorReward /\nvalidator_total_stake."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Effective Reward Rate"),": (1 - validator_commission) ","*"," Reward Rate."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Normalized Reward Rate"),": total_era_rewards / number_of_validators ","*"," (1 - commission) /\nvalidator_total_stake.")),(0,n.kt)("p",null,"Source Table: ",(0,n.kt)("strong",{parentName:"p"},"polkadot.stakings"),", MaterializedView:\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/queries/3302709"},(0,n.kt)("strong",{parentName:"a"},"dune.substrate.result_polkadot_validators"))),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3459458/5813993/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3459458/5814228/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3459458/5814232/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3459458/5814240/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3459458/5814241/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3459458/5814242/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3459458/5814243/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3459458/5814244/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3459613/5814194/",height:"350",width:"100%"}),(0,n.kt)("h2",{id:"polkadot-staking-dashboard-nominators"},"Polkadot Staking Dashboard (Nominators)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"View On Dune:"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/substrate/polkadot-staking-nominators"},"Polkadot Staking Dashboard (Nominators)")),(0,n.kt)("p",null,"For a specific nominator, this dashboard shows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Nominator Staking Rewards"),(0,n.kt)("li",{parentName:"ul"},"Nominator Shares"),(0,n.kt)("li",{parentName:"ul"},"Delegated Amount"),(0,n.kt)("li",{parentName:"ul"},"Nominator Staking Rewards Raw Data")),(0,n.kt)("p",null,"Source Table: ",(0,n.kt)("strong",{parentName:"p"},"polkadot.stakings"),", MaterializedView:\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/queries/3326829"},(0,n.kt)("strong",{parentName:"a"},"dune.substrate.result_polkadot_nominators"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Default parameters")," are applied to all parameterized charts on this Wiki page as a demonstration.\nVisit our dashboard on Dune to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"nominator_ss58")," parameter for more in-depth analysis. For\nmore information, please visit the\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.dune.com/web-app/query-editor/parameters"},"Dune documentation on parameters"),".")),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3343697/5602826/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3343697/5817852/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3459410/5813864/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3343697/5817857/",height:"350",width:"100%"}),(0,n.kt)("h2",{id:"polkadot-staking-dashboard-nomination-pool"},"Polkadot Staking Dashboard (Nomination Pool)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"View On Dune:"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/substrate/polkadot-staking-nomination-pool"},"Polkadot Staking Dashboard (Nomination Pool)")),(0,n.kt)("p",null,"For a specific nomination pool ID, this dashboard shows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pool Members"),(0,n.kt)("li",{parentName:"ul"},"Historical APY, Daily Pool Rewards & Fees")),(0,n.kt)("p",null,"Raw data is presented at the bottom."),(0,n.kt)("p",null,"Source Table: ",(0,n.kt)("strong",{parentName:"p"},"polkadot.stakings"),", MaterializedView:\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/queries/3327350"},(0,n.kt)("strong",{parentName:"a"},"dune.substrate.result_polkadot_nominationpools"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Default parameters")," are applied to all parameterized charts on this Wiki page as a demonstration.\nVisit our dashboard on Dune to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"pool_id")," parameter for more in-depth analysis. For more\ninformation, please visit the\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.dune.com/web-app/query-editor/parameters"},"Dune documentation on parameters"),".")),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3343291/5817752/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3341534/5599076/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3343291/5817681/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3343291/5817723/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3343291/5602160/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3343291/5817736/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3343291/5817692/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3343291/5817706/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3341597/5599169/",height:"350",width:"100%"}),(0,n.kt)("h2",{id:"polkadot-staking-dashboard-pool-member"},"Polkadot Staking Dashboard (Pool Member)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"View On Dune:"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/substrate/polkadot-staking-pool-member"},"Polkadot Staking Dashboard (Pool Member)")),(0,n.kt)("p",null,"For a specific nomination pool member, this dashboard shows raw data of member activity within the\npool."),(0,n.kt)("p",null,"Member Pool Fee: 365 ","*"," member_staking_rewards / member_bonded"),(0,n.kt)("p",null,"Source Table: ",(0,n.kt)("strong",{parentName:"p"},"polkadot.stakings"),", MaterializedView:\n",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/queries/3327479"},(0,n.kt)("strong",{parentName:"a"},"dune.substrate.result_polkadot_poolmembers"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Default parameters")," are applied to all parameterized charts on this Wiki page as a demonstration.\nVisit our dashboard on Dune to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"user_ss58")," parameter for more in-depth analysis. For more\ninformation, please visit the\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.dune.com/web-app/query-editor/parameters"},"Dune documentation on parameters"),".")),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3341609/5599266/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3341609/5599280/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3341609/5599290/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3341609/5599317/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3343369/5602279/",height:"350",width:"100%"}),(0,n.kt)("iframe",{src:"https://dune.com/embeds/3343707/5602761/",height:"350",width:"100%"}))}u.isMDXComponent=!0}}]);