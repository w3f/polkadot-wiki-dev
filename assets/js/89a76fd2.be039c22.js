"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(n),u=a,p=h["".concat(s,".").concat(u)]||h[u]||m[u]||i;return n?o.createElement(p,r(r({ref:t},c),{},{components:n})):o.createElement(p,r({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35703:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294);const a=function(e){var t,n=e.message,a=(0,o.useState)(!0),i=a[0],r=a[1];return o.createElement(o.Fragment,null,i&&o.createElement("div",{className:"message-box"},o.createElement("button",{className:"close-button",onClick:function(){r(!1)}},"\u2716 "),o.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},31703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=n(35703),l=["components"],s={id:"learn-redenomination",title:"Redenomination of DOT",sidebar_label:"Redenomination of DOT",description:"Everything about the DOT Token Redenomination.",keywords:["DOT","redenomination"],slug:"../learn-redenomination"},d=void 0,c={unversionedId:"learn/archive/learn-redenomination",id:"learn/archive/learn-redenomination",title:"Redenomination of DOT",description:"Everything about the DOT Token Redenomination.",source:"@site/../docs/learn/archive/learn-redenomination.md",sourceDirName:"learn/archive",slug:"/learn/learn-redenomination",permalink:"/docs/learn/learn-redenomination",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/archive/learn-redenomination.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1714545713,formattedLastUpdatedAt:"May 1, 2024",frontMatter:{id:"learn-redenomination",title:"Redenomination of DOT",sidebar_label:"Redenomination of DOT",description:"Everything about the DOT Token Redenomination.",keywords:["DOT","redenomination"],slug:"../learn-redenomination"},sidebar:"docs",previous:{title:"Polkadot Launch Phases",permalink:"/docs/learn/learn-launch"},next:{title:"Controller Accounts",permalink:"/docs/learn/learn-controller"}},h={},m=[{value:"Origins",id:"origins",level:2},{value:"The Vote",id:"the-vote",level:2},{value:"The Outcome",id:"the-outcome",level:2},{value:"What This Means for the Community",id:"what-this-means-for-the-community",level:3},{value:"What This Means for Builders of Tools",id:"what-this-means-for-builders-of-tools",level:3}],u={toc:m},p="wrapper";function f(e){var t=e.components,s=(0,a.Z)(e,l);return(0,i.kt)(p,(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{message:"The content on this page is archived.",mdxType:"MessageBox"}),(0,i.kt)("p",null,"On August 21, 2020, the redenomination of DOT, the native token on Polkadot, occurred. From this\ndate, one DOT (old) equals 100 new DOT."),(0,i.kt)("admonition",{title:"Denomination Day",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The DOT redenomination took place on 21 August 2020, known as Denomination Day, at block number\n1_248_328.")),(0,i.kt)("p",null,"While ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-DOT"},"DOT"),' is the unit of currency on Polkadot that most people use when\ninteracting with the system, the smallest unit of account is the Planck. A Planck\'s relation to DOT\nis like the relation of a Satoshi to Bitcoin. Before 21 August, the DOT was denominated as 1e12\nPlancks, that is, twelve decimal places. After Denomination Day, DOT is denominated as 1e10 Plancks,\nas in, ten decimal places. DOT denominated to twelve decimal places is referred to as "DOT (old)"\nand DOT denominated to ten decimal places is generally referred to as "DOT". When the difference\nmust be made explicit, the current ten-decimal-denominated DOT is referred to as "',(0,i.kt)("em",{parentName:"p"},"New DOT"),'".'),(0,i.kt)("admonition",{title:"Redenomination Explainer",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Check out our\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=xXIcnBV4uUE&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=22&ab_channel=Polkadot"},"technical explainer video that explains more of Redenomination"),".")),(0,i.kt)("p",null,"The change in denomination, henceforth referred to as the ",(0,i.kt)("em",{parentName:"p"},"redenomination"),", was voted on by the\ncommunity of DOT holders. The community decided between four options, to change the DOT denomination\nby a factor of ten, one hundred, one thousand, or not at all. The end result was to change the\ndenomination by a factor of one hundred."),(0,i.kt)("p",null,"The overall effect of this change was that the number of Polkadot's smallest unit, the Planck,\nremained constant, while the DOT balance for all holders was increased by a factor of one hundred.\nAs one can see from the example below, the number of Plancks a user has does not change, only the\nnumber of Plancks that constitute a single DOT. A user with 1_000_000_000_000 Plancks still has the\nsame number of Plancks but will have 100 DOT under the new denomination, as opposed to one DOT under\nthe old denomination."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   Before the change the decimal was here\n   v\n  1.000000000000 DOT\n\n  100.0000000000 DOT\n     ^\n     After the change the decimal is here\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"There are no state changes with redenomination. There are no transfers. The real change regards the\nsocial consensus around where to put the decimal place when we talk about what constitutes a DOT.")),(0,i.kt)("h2",{id:"origins"},"Origins"),(0,i.kt)("p",null,"The initial vote for redenomination occurred as a\n",(0,i.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/referendum/52"},"referendum")," on the Kusama blockchain. The referendum\nwas summarized as having four effects if approved by KSM holders."),(0,i.kt)("admonition",{title:"Referendum Summary",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The total allocations of DOT will increase one hundred times from 10 million to 1 billion."),(0,i.kt)("li",{parentName:"ul"},"DOT allocation balances will increase by a factor of one hundred, such that 1 DOT will be 100 DOT."),(0,i.kt)("li",{parentName:"ul"},"The distribution of DOT does not change, and holders of DOT still own an equal share of the\nnetwork as before the change."),(0,i.kt)("li",{parentName:"ul"},"The precision of DOT will change from 12 decimal places to 10 decimal places."),(0,i.kt)("li",{parentName:"ul"},"The main benefit of this change is to avoid using small decimals when dealing with DOT and to\nachieve an easier calculation system."))),(0,i.kt)("p",null,"The initial referendum was proposed before the Polkadot genesis block, assuming that making a\nredenomination would be simpler before the Polkadot chain was live. However, many in the community\npointed out the disconnect between the two networks and how it was unfair for holders of DOT to be\nimpacted by a vote by a different token holder set. For this reason, Web3 Foundation\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/results-of-dot-redenomination-referendum/"},"decided to make a new vote on Polkadot"),"\nwhen it went live, although the Kusama vote ended with a majority in favor of the redenomination\nchange."),(0,i.kt)("p",null,"Web3 Foundation summarized the decision not to change:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"However, given the non-negligible amount of opposition, including from some within the ranks of Web3\nFoundation and Parity, ",(0,i.kt)("strong",{parentName:"p"},"the Foundation decided that we cannot, in good faith, sponsor the\nredenomination."))),(0,i.kt)("h2",{id:"the-vote"},"The Vote"),(0,i.kt)("p",null,"After the genesis block of Polkadot was created and the network was running with a decentralized\ncommunity of validators securing the network, Web3 Foundation decided to put the redenomination\ntopic up for a vote again. This time, the vote was explicitly binding ","\u2014"," meaning that it would\nbe executed if voted through. In comparison, the vote on Kusama was non-binding to capture a signal\nwithout a direct way to affect the Polkadot chain."),(0,i.kt)("p",null,"Based on the feedback received during the Kusama referendum, the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/the-first-polkadot-vote/"},"Polkadot vote")," was held as an approval vote,\nwith four available options. DOT holders could issue votes for any configuration of the four\noptions: no change, a change of 10x, a change of 100x, or a change of 1000x. The voting logic was\ncontained in a specially-built Substrate pallet included in Polkadot's runtime for this poll."),(0,i.kt)("admonition",{title:"Summary of the Vote",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Any combination of the four options may have been approved by the voter. There was no need to\nselect only one option."),(0,i.kt)("li",{parentName:"ul"},"Approving all or none of the options was equivalent and did not affect the outcome."),(0,i.kt)("li",{parentName:"ul"},"All voters could alter their votes any number of times before the close of the poll."),(0,i.kt)("li",{parentName:"ul"},"No discretionary lock-voting was in place; all DOT used to vote counts the same."),(0,i.kt)("li",{parentName:"ul"},"Voting was made on a per-account basis; a single account must have voted the same way and could\nnot split its vote."),(0,i.kt)("li",{parentName:"ul"},"This vote did not affect any economics of the Polkadot platform. As in, staking rewards,\ninflation, effective market capitalization, and the underlying balances of every account remained\ncompletely unchanged. It was \u201cmerely\u201d about what units the network uses to denominate the balances\ninto \u201cDOT\u201d."))),(0,i.kt)("p",null,"With a voting period of two weeks set, the redenomination was now in the hands of the Polkadot\ncommunity for a final, binding decision."),(0,i.kt)("h2",{id:"the-outcome"},"The Outcome"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"redenomination",src:n(75421).Z,width:"2000",height:"1000"})),(0,i.kt)("p",null,"After two weeks of voting, the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/the-results-are-in/"},"results")," of the\nredenomination vote were tallied. About one-third of the total DOT in the network participated in\nthe vote. The redenomination proposal passed with 86% of the voters favoring a 100x factor increase\n(or two decimal places of precision loss)."),(0,i.kt)("p",null,"Polkadot's redenomination then took place on 21 August, now known as Denomination Day, at block\n#1_248_328."),(0,i.kt)("h3",{id:"what-this-means-for-the-community"},"What This Means for the Community"),(0,i.kt)("p",null,"If you are a DOT holder or user of the network, then you do not need to take any action. The DOT\nredenomination was a purely front-end change. You still hold the same amount of Plancks after the\nchange, but now it will appear that you hold 100x more DOT. This change applies proportionally to\nevery account."),(0,i.kt)("h3",{id:"what-this-means-for-builders-of-tools"},"What This Means for Builders of Tools"),(0,i.kt)("p",null,"If you are the builder of a tool that consumes the\n",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/package/@polkadot/api"},(0,i.kt)("inlineCode",{parentName:"a"},"@polkadot/api"))," package ","\u2014"," then there should be no\nreal changes to be made in your application. The denomination is technically a cosmetic change, and\nevery value remains a constant amount of Plancks."),(0,i.kt)("p",null,"However ","\u2014"," if you are a builder of a tool that displays DOT balances to users (e.g. a wallet)\nor handles DOT balances in an off-chain or custodial way, then you will need to ensure that you\ndisplay the correct denomination of DOT to users."),(0,i.kt)("p",null,"Please see our\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1yAzoDh99PgR_7dYAKTWLMVu2Fy5Ga-J6t9lof4f4JUw/edit#"},"Ecosystem Redenomination Guide"),"\nfor recommendations."),(0,i.kt)("p",null,"Please reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@polkadot.network"},"support@polkadot.network")," if you need any\nassistance in making sure your software is compatible with the redenomination."))}f.isMDXComponent=!0},75421:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/redenomination-49b0f06a8bd85c8944fb35b6fd864759.png"}}]);