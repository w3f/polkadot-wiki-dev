"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1486],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),p=o,m=c["".concat(s,".").concat(p)]||c[p]||h[p]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},63349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],l={id:"doc-thousand-validators",title:"Thousand Validators Programme",sidebar_label:"Thousand Validators Programme",description:"Learn about the Thousand Validators Programme and how it can support your validator endeavors.",keywords:["thousand validators programme","validator","validate","maintain","TVP"],slug:"../thousand-validators"},s=void 0,d={unversionedId:"general/doc-thousand-validators",id:"general/doc-thousand-validators",title:"Thousand Validators Programme",description:"Learn about the Thousand Validators Programme and how it can support your validator endeavors.",source:"@site/../docs/general/thousand-validators.md",sourceDirName:"general",slug:"/thousand-validators",permalink:"/docs/thousand-validators",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/thousand-validators.md",tags:[],version:"current",lastUpdatedBy:"Will | Paradox",lastUpdatedAt:1665789852,formattedLastUpdatedAt:"Oct 14, 2022",frontMatter:{id:"doc-thousand-validators",title:"Thousand Validators Programme",sidebar_label:"Thousand Validators Programme",description:"Learn about the Thousand Validators Programme and how it can support your validator endeavors.",keywords:["thousand validators programme","validator","validate","maintain","TVP"],slug:"../thousand-validators"},sidebar:"docs",previous:{title:"How to Do Your Own Research",permalink:"/docs/how-to-dyor"},next:{title:"Frequently Asked Questions (FAQs)",permalink:"/docs/faq"}},u={},h=[{value:"How it Works",id:"how-it-works",level:2},{value:"Weights",id:"weights",level:3},{value:"Inclusion",id:"inclusion",level:4},{value:"Span Inclusion *",id:"span-inclusion-",level:4},{value:"Discovered *",id:"discovered-",level:4},{value:"Nominated *",id:"nominated-",level:4},{value:"Rank *",id:"rank-",level:4},{value:"Unclaimed",id:"unclaimed",level:4},{value:"Bonded *",id:"bonded-",level:4},{value:"Faults *",id:"faults-",level:4},{value:"Offline time",id:"offline-time",level:4},{value:"Location *",id:"location-",level:4},{value:"Council",id:"council",level:4},{value:"Democracy",id:"democracy",level:4},{value:"Setting up a Validator",id:"setting-up-a-validator",level:2},{value:"How to Apply",id:"how-to-apply",level:2},{value:"Requirements",id:"requirements",level:4},{value:"Nominators",id:"nominators",level:4}],c={toc:h};function p(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Thousand Validators Programme is an initiative by Web3 Foundation and Parity Technologies to use\nthe funds held by both organizations to nominate validators in the community."),(0,i.kt)("p",null,"It serves two major purposes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Give validators a structured on-ramp to join the active set of validators on Kusama and Polkadot"),(0,i.kt)("li",{parentName:"ol"},"Further decentralize the validator active set.")),(0,i.kt)("h2",{id:"how-it-works"},"How it Works"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/1k-validators-be"},"nominating backend")," will routinely change its\nnominations at every era. The backend does\nthis by short-listing candidates by validity and then sorts validators by their weighted score in\ndescending order."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Validators with a higher weighted score are selected for any possible slots. As validators are\nnominated and actively validate, their weighted scores decrease allowing other validators to be\nselected in subsequent rounds of assessment.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If a validator is active during a single nomination period (the time after a new nomination and\nbefore the next one) and does not break any of the requirements, it will have its rank increased\nby 1. Validators with higher rank have performed well within the programme for a longer period of\ntime."))),(0,i.kt)("p",null,"The backend nominates as many validators as it reasonably can in such a manner to allow each nominee\nan opportunity to be elected into the active set."),(0,i.kt)("h3",{id:"weights"},"Weights"),(0,i.kt)("p",null,"Each candidate is assessed by on-chain parameters to produce a weighted score. In this section,\nwe'll briefly review the weights of each metric and how they contribute to the total score."),(0,i.kt)("h4",{id:"inclusion"},"Inclusion"),(0,i.kt)("p",null,"The inclusion weight accounts for 40 points. It is assessed by an evaluation of the validator's\ninclusion in the active set over the past 84 eras. A candidate can be assured of full score if there\nwere no stints of active validation in 84 eras."),(0,i.kt)("h4",{id:"span-inclusion-"},"Span Inclusion ","*"),(0,i.kt)("p",null,"The span inclusion weight accounts for 40 points. It is assessed by an evaluation of the validator's\ninclusion in the active set over the past 28 eras. A candidate can be assured of full score if there\nwere no stints of active validation in 28 eras."),(0,i.kt)("h4",{id:"discovered-"},"Discovered ","*"),(0,i.kt)("p",null,"The discovered weight accounts for 5 points. It is determined by comparing the candidates tenure in\nthe programme relative to other candidates. A candidate that is in the programme for a longer\nduration relative to the entire group of validators allows for a higher score."),(0,i.kt)("h4",{id:"nominated-"},"Nominated ","*"),(0,i.kt)("p",null,"The nominated weight accounts for 10 points, and it is assessed based on when the candidate was last\nnominated relative to the other candidates in the programme."),(0,i.kt)("h4",{id:"rank-"},"Rank ","*"),(0,i.kt)("p",null,"The rank weight accounts for 5 points and is assessed relative to the ranks of other candidates\nwithin the programme."),(0,i.kt)("h4",{id:"unclaimed"},"Unclaimed"),(0,i.kt)("p",null,"The unclaimed weight relates to the number of payouts outstanding for greater than\nfour eras. Each payout that exceeds this\nthreshold would attribute a negative score of 10 points."),(0,i.kt)("h4",{id:"bonded-"},"Bonded ","*"),(0,i.kt)("p",null,"Candidates with a bond size that is relatively higher than others would receive a score of 50\npoints."),(0,i.kt)("h4",{id:"faults-"},"Faults ","*"),(0,i.kt)("p",null,"A fault is attained when a candidate has an offline event when actively validating. A legitimate\nfault is irrevocable. Faults account for 5 points in the system and are relative to others in the\nprogramme."),(0,i.kt)("h4",{id:"offline-time"},"Offline time"),(0,i.kt)("p",null,"Candidates who have accumulated < 200 minutes offline time during the weekly period will receive 2\npoints in the system. Offline time is judged by a candidate's connection to the W3F Telemetry and is\nreset on Sundays."),(0,i.kt)("h4",{id:"location-"},"Location ","*"),(0,i.kt)("p",null,"The system allocates a score of 40 points for candidates who host their validators in uniquely\nlocated data centres. A candidate's location is determined from Telemetry and is relative to the\nnumber of other candidates located at the same data centre."),(0,i.kt)("h4",{id:"council"},"Council"),(0,i.kt)("p",null,"Candidates will receive a score of up to 50 points for voting for council members. Candidates may\nback as few as one candidate; to attain a full score of 50 points, the 1KV candidate should\nallocate > 75% of their bond to the respective council members."),(0,i.kt)("h4",{id:"democracy"},"Democracy"),(0,i.kt)("p",null,"Candidates will receive 10 ","*"," 1KV points for each referendum they have voted on (Aye/Nay) to a limit\nof 100 points. Scores are based on votes for referendum\n49 and beyond."),(0,i.kt)("p",null,"*"," Scores that are based on their relative position against others are assessed as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The respective weight is assigned high and low percentiles. Any scores lower than the score at the\nlow percentile and higher than the score at the high percentile are removed."),(0,i.kt)("li",{parentName:"ul"},"The weighted score is then obtained by ((candidate_value - low_threshold) / (high_threshold -\nlow_threshold)) ","*"," weight.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The default low and high percentiles are 10 and 90%, respectively."),(0,i.kt)("li",{parentName:"ul"},"Inclusion and Span Inclusions are measured against low and high percentiles of 20 and 75%,\nrespectively."),(0,i.kt)("li",{parentName:"ul"},"Bonded is measured against low and high percentiles of 5 and 85%, respectively."),(0,i.kt)("li",{parentName:"ul"},"Finally, location is measured against low and high percentiles of 10 and 95%, respectively.")),(0,i.kt)("h2",{id:"setting-up-a-validator"},"Setting up a Validator"),(0,i.kt)("p",null,"Please see the guide on how to\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-polkadot"},"set up a validator")," as well as additional\ninformation on how to ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-secure-validator"},"secure a validator"),"."),(0,i.kt)("h2",{id:"how-to-apply"},"How to Apply"),(0,i.kt)("p",null,"",""),(0,i.kt)("p",null,"",(0,i.kt)("strong",{parentName:"p"},"Entrance to the Polkadot programme requires a rank of 25 or higher in the Kusama programme."),"\nAttaining a rank of 25 usually takes around two months. The leaderboard is available ",(0,i.kt)("a",{parentName:"p",href:"https://thousand-validators.kusama.network/#/leaderboard"},"here"),". In order to apply to the Polkadot programme, set up your node to adhere to the requirements below\nand fill in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSdS-alI-J2wgIRCQVjQC7ZbFiTnf36hYBdmO-1ARMjKbC7H9w/viewform"},"application form"),". You will hear back from the team shortly."),(0,i.kt)("h4",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verified identity (see ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-identity#setting-an-identity"},"here")," for instructions)"),(0,i.kt)("li",{parentName:"ul"},"Connect to dedicated telemetry (use\n",(0,i.kt)("inlineCode",{parentName:"li"},"--telemetry-url 'wss://telemetry-backend.w3f.community/submit 1'")," when starting the node)"),(0,i.kt)("li",{parentName:"ul"},"Minimum of 5_000 DOTs self stake\n(exceptions by approval for good intentions)"),(0,i.kt)("li",{parentName:"ul"},"No more than 5% commission"),(0,i.kt)("li",{parentName:"ul"},"Separate controller and stash (or have a Staking proxy set up)"),(0,i.kt)("li",{parentName:"ul"},"Must be on the latest release"),(0,i.kt)("li",{parentName:"ul"},"Reward destination 'Staked'"),(0,i.kt)("li",{parentName:"ul"},"Validators must operate nodes themselves, they may not be operated by third parties or staking\nproviders.")),(0,i.kt)("h4",{id:"nominators"},"Nominators"),(0,i.kt)("p",null,'The below addresses are the stash / controller pairs for the primary nominators involved in the\nPolkadot Thousand Validators programme. They\nare formatted like "',(0,i.kt)("inlineCode",{parentName:"p"},"stash")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"controller"),'".'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"","","",(0,i.kt)("inlineCode",{parentName:"li"},"14Ns6kKbCoka3MS4Hn6b7oRw9fFejG8RH5rq5j63cWUfpPDJ")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"16XJHQ58dEPnZn5J5YqmRcJmKtvVFFMoMrXgj6fWJfeGGkQw"),""),(0,i.kt)("li",{parentName:"ul"},"","","",(0,i.kt)("inlineCode",{parentName:"li"},"12RYJb5gG4hfoWPK3owEYtmWoko8G6zwYpvDYTyXFVSfJr8Y")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"13GLXK1TZKKDM9aRBBK3VYZymHjKChtQjJznsRqaR9dwwrQU"),""),(0,i.kt)("li",{parentName:"ul"},"","","",(0,i.kt)("inlineCode",{parentName:"li"},"16GMHo9HZv8CcJy4WLoMaU9qusgzx2wxKDLbXStEBvt5274B")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"16eM1npMwKzpGy48NDna1jC6P71S783wjpbdeKT8RgzQx8Jd"),""),(0,i.kt)("li",{parentName:"ul"},"",(0,i.kt)("inlineCode",{parentName:"li"},"13yk62yQYctYsRPXDFvC5WzBtanAsHDasenooLAxKvf5bNkK")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"1324GSzD4bfBYj6ZnJjvMzWCjCJqwdVRNyyzgcncyX8C1VEN"),"")),(0,i.kt)("p",null,"A time delay proxy is used as the interaction method for some of these accounts."),(0,i.kt)("p",null,"",""),(0,i.kt)("p",null,"Since approximately early January 2021, the nominators will select an automatic number of validators\nto nominate based on the lowest amount staked for a validator and the amount of funds it holds. This\ncan be anywhere from a few validators receiving nomination from a single nominator, to the max of\n16 nominators on\nPolkadot."))}p.isMDXComponent=!0}}]);