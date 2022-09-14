"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={id:"learn-launch",title:"Polkadot Launch Phases",sidebar_label:"Polkadot Launch Phases",description:"An explanation of Polkadot's launch process and its individual phases.",keyword:["launch","phases","polkadot 2.0"],slug:"../learn-launch"},s=void 0,c={unversionedId:"learn/learn-launch",id:"learn/learn-launch",title:"Polkadot Launch Phases",description:"An explanation of Polkadot's launch process and its individual phases.",source:"@site/../docs/learn/learn-launch.md",sourceDirName:"learn",slug:"/learn-launch",permalink:"/docs/learn-launch",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-launch.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1652800323,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{id:"learn-launch",title:"Polkadot Launch Phases",sidebar_label:"Polkadot Launch Phases",description:"An explanation of Polkadot's launch process and its individual phases.",keyword:["launch","phases","polkadot 2.0"],slug:"../learn-launch"},sidebar:"docs",previous:{title:"Cosmos",permalink:"/docs/learn-comparisons-cosmos"},next:{title:"Video Tutorials",permalink:"/docs/learn-video-tutorials"}},d={},u=[{value:"The PoA Launch",id:"the-poa-launch",level:2},{value:"Nominated Proof of Stake",id:"nominated-proof-of-stake",level:2},{value:"Governance",id:"governance",level:2},{value:"Removal of Sudo",id:"removal-of-sudo",level:2},{value:"Balance Transfers",id:"balance-transfers",level:2},{value:"Redenomination",id:"redenomination",level:2},{value:"Core Functionality",id:"core-functionality",level:2},{value:"Polkadot 2.0",id:"polkadot-20",level:2}],h={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Polkadot network has a phased roll-out plan, with important milestones toward decentralization\nmarking each phase. Keep up-to-date with the Polkadot's phased roll-out plan at by viewing the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/launch-roadmap/"},"roadmap")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Current Phase: Parachain Rollout")),(0,r.kt)("h2",{id:"the-poa-launch"},"The PoA Launch"),(0,r.kt)("p",null,"The Genesis block of the Polkadot network was launched on May 26, 2020, as a Proof of Authority\n(PoA) network. Governance was restricted to the single Sudo (super-user) key, which was held by Web3\nFoundation to issue the commands and upgrades necessary to complete the launch process. During this\ntime, validators started joining the network and signaling their intention to participate in\nconsensus."),(0,r.kt)("h2",{id:"nominated-proof-of-stake"},"Nominated Proof of Stake"),(0,r.kt)("p",null,"Once Web3 Foundation was confident in the stability of the network and there was a sufficient number\nof validator intentions, Web3 Foundation used ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/InekMjJpVdo"},"Sudo")," ","\u2014"," a\nsuperuser account with access to governance functions ","\u2014"," to initiate the first validator\nelection. Following this election, the network transitioned from PoA into its second phase,\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"Nominated Proof of Stake (NPoS)"),", on June 18, 2020."),(0,r.kt)("h2",{id:"governance"},"Governance"),(0,r.kt)("p",null,"After the chain had been running well with the validator set, the Sudo key issued a runtime upgrade\nthat enabled the suite of governance modules in Polkadot; namely, the modules to enable a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance#council"},"Council"),", a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance#technical-committee"},"Technical Committee"),", and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance#public-referenda"},"public referenda"),"."),(0,r.kt)("h2",{id:"removal-of-sudo"},"Removal of Sudo"),(0,r.kt)("p",null,"The Sudo module was removed by a runtime upgrade on July 20, 2020, transitioning the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance")," of the chain into the hands of the token (DOT) holders."),(0,r.kt)("p",null,"From this point, the network has been entirely in the hands of the token holders and is no longer\nunder control of any centralized authority."),(0,r.kt)("h2",{id:"balance-transfers"},"Balance Transfers"),(0,r.kt)("p",null,"To enable balance transfers, the community ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"made a public proposal"),"\nfor a runtime upgrade that lifted the restriction on balance transfers. Transfer functionality was\nsubsequently enabled on Polkadot at block number 1_205_128 on August 18, 2020, at 16:39 UTC."),(0,r.kt)("h2",{id:"redenomination"},"Redenomination"),(0,r.kt)("p",null,"On August 21, 2020, ",(0,r.kt)("a",{parentName:"p",href:"/docs/redenomination"},"redenomination")," of DOT, the native token on Polkadot,\noccurred. From this date, one DOT (old) equals 100 new DOT."),(0,r.kt)("h2",{id:"core-functionality"},"Core Functionality"),(0,r.kt)("p",null,"After 5 years of research and development, and a multi-stage launch that began in May of 2020, Polkadot launch\nis completed on December 18, 2021, with all auction-winning  parachains producing blocks on the network. "),(0,r.kt)("p",null,"Check out these resources for further information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/parachains-are-live-polkadot-launch-is-now-complete/"},"Polkadot Network blog"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/Polkadot/comments/s3yb3d/l_for_polkadot_launch_polkadot_a_to_z/"},"Polkadot A to Z: L for Polkadot Launch"),".")),(0,r.kt)("h2",{id:"polkadot-20"},"Polkadot 2.0"),(0,r.kt)("p",null,"Researchers are in the midst of research for the next version of the Polkadot network. With many\nquestions yet to be answered, as of now, some big areas of research will be in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Economics and Networking (Zero-Knowledge): How will scalability work in Polkadot 2.0?"),(0,r.kt)("li",{parentName:"ul"},"Horizontal vs. Vertical scalability: What is the breaking point of the maximum number of\nparachains built with horizontal scalability?"),(0,r.kt)("li",{parentName:"ul"},"Nested Relay Chain: How can multiple Relay Chains exist connected through parachains? How many\ntiers of Relay Chains can be nested? How will validators work together to validate blocks on\nvarious Relay Chains? How does ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-crosschain"},"XCM")," work in the nested setup? How is\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-availability"},"AnV")," going to work there?")))}p.isMDXComponent=!0}}]);