(self.webpackChunk=self.webpackChunk||[]).push([[601],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52812:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>u,default:()=>p});var o=n(22122),i=n(19756),a=(n(67294),n(3905)),r=["components"],c={id:"maintain-guides-how-to-join-council",title:"Join the Council",sidebar_label:"Join the Council",description:"Steps on how to join the official on-chain council.",slug:"../maintain-guides-how-to-join-council"},s=void 0,l={unversionedId:"maintain/maintain-guides-how-to-join-council",id:"maintain/maintain-guides-how-to-join-council",isDocsHomePage:!1,title:"Join the Council",description:"Steps on how to join the official on-chain council.",source:"@site/../docs/maintain/maintain-guides-how-to-join-council.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-join-council",permalink:"/zh-CN/docs/maintain-guides-how-to-join-council",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-join-council.md",tags:[],version:"current",lastUpdatedBy:"alex",lastUpdatedAt:1634966075,formattedLastUpdatedAt:"2021/10/23",frontMatter:{id:"maintain-guides-how-to-join-council",title:"Join the Council",sidebar_label:"Join the Council",description:"Steps on how to join the official on-chain council.",slug:"../maintain-guides-how-to-join-council"},sidebar:"docs",previous:{title:"Participate in Democracy",permalink:"/zh-CN/docs/maintain-guides-democracy"},next:{title:"Voting for Councillors",permalink:"/zh-CN/docs/maintain-guides-how-to-vote-councillor"}},u=[{value:"Submit Candidacy",id:"submit-candidacy",children:[],level:2},{value:"Voting on Candidates",id:"voting-on-candidates",children:[],level:2},{value:"Winning",id:"winning",children:[],level:2}],d={toc:u};function p(e){var t=e.components,c=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The council is an elected body of on-chain accounts that are intended to represent the passive\nstakeholders of Polkadot and/or Kusama. The council has two major tasks in governance: proposing\nreferenda and vetoing dangerous or malicious referenda. For more information on the council, see the\n",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance#council"},"governance page"),". This guide will walk you through entering your\ncandidacy to the council."),(0,a.kt)("h2",{id:"submit-candidacy"},"Submit Candidacy"),(0,a.kt)("p",null,"Submitting your candidacy for the council requires a small bond of DOT / KSM. Unless your candidacy\nwins, the bond will be forfeited. You can receive your bond back if you manually renounce your\ncandidacy before losing. Runners-up are selected after every round and are reserved members in case\none of the winners gets forcefully removed."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Currently the bond for submitting a council candidacy on Polkadot is 100 DOT, and 0.0033 KSM on\nKusama.")),(0,a.kt)("p",null,"It is a good idea to announce your council intention before submitting your candidacy so that your\nsupporters will know when they can start to vote for you. You can also vote for yourself in case no\none else does."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot Apps Dashboard"),' and navigate to the "Council" tab.\nClick the button on the right that says "Submit Candidacy."'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"submit candidacy button",src:n(79688).Z})),(0,a.kt)("p",null,'After making the transaction, you will see your account appear underneath the row "Candidates."'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"candidates list",src:n(7145).Z})),(0,a.kt)("p",null,"It is a good idea now to lead by example and give yourself a vote."),(0,a.kt)("h2",{id:"voting-on-candidates"},"Voting on Candidates"),(0,a.kt)("p",null,'Next to the button to submit candidacy is another button titled "Vote." You will click this button\nto make a vote for yourself (optional).'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"voting button on UI",src:n(72832).Z})),(0,a.kt)("p",null,"The council uses ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-phragmen"},"Phragm\xe9n"),' approval voting, which is also used in the validator\nelections. This means that you can choose up to 16 distinct candidates to vote for and your stake\nwill equalize between them. For this guide, choose to approve your own candidacy by clicking on the\nswitch next to your account and changing it to say "Aye."'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"voting pop up on UI",src:n(1611).Z})),(0,a.kt)("h2",{id:"winning"},"Winning"),(0,a.kt)("p",null,'If you are one of the lucky ones to win a council election you will see your account move underneath\nthe row "Members".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"council members list",src:n(99158).Z})),(0,a.kt)("p",null,"Now you are able to participate on the council by making motions or voting proposals. To join in on\nthe active discussions, join the\n",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-direction:matrix.parity.io"},"Polkadot Direction channel"),"."))}p.isMDXComponent=!0},7145:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadotjs_candidates-bc420d7637b02bd43169dd6bc44a9bd9.png"},99158:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadotjs_council_members-c731a3fa3e5eb821427126149431dbfe.png"},79688:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadotjs_submit_candidancy-04eabb0aa998c350427386dcff208d1c.png"},72832:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadotjs_vote_button-9f5daf5f27fda6df219d0f959e7632b4.png"},1611:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadotjs_voting-cc5698e8e8f5de77644d3a7cb316a2ea.png"}}]);