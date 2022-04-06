"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7908],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=d(a),c=i,u=h["".concat(l,".").concat(c)]||h[c]||p[c]||o;return a?n.createElement(u,r(r({ref:t},m),{},{components:a})):n.createElement(u,r({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},46437:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>m,default:()=>h});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],s={id:"maintain-guides-society-kusama",title:"Kappa Sigma Mu",sidebar_label:"Kappa Sigma Mu",description:"Learn about the Kappa Sigma Mu society and join as a member.",slug:"../../maintain-guides-society-kusama"},l=void 0,d={unversionedId:"maintain/kusama/maintain-guides-society-kusama",id:"maintain/kusama/maintain-guides-society-kusama",title:"Kappa Sigma Mu",description:"Learn about the Kappa Sigma Mu society and join as a member.",source:"@site/../docs/maintain/kusama/maintain-guides-society-kusama.md",sourceDirName:"maintain/kusama",slug:"/maintain-guides-society-kusama",permalink:"/ru-RU/docs/maintain-guides-society-kusama",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/kusama/maintain-guides-society-kusama.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649216799,formattedLastUpdatedAt:"06.04.2022",frontMatter:{id:"maintain-guides-society-kusama",title:"Kappa Sigma Mu",sidebar_label:"Kappa Sigma Mu",description:"Learn about the Kappa Sigma Mu society and join as a member.",slug:"../../maintain-guides-society-kusama"}},m=[{value:"UI Overview",id:"ui-overview",children:[],level:2},{value:"User Types",id:"user-types",children:[],level:2},{value:"Procedure",id:"procedure",children:[{value:"1. Bid Phase",id:"1-bid-phase",children:[],level:3},{value:"2. Candidate Phase",id:"2-candidate-phase",children:[{value:"Lock-up Time",id:"lock-up-time",children:[],level:4}],level:3},{value:"3. Member Phase",id:"3-member-phase",children:[],level:3}],level:2},{value:"Useful links",id:"useful-links",children:[],level:2}],p={toc:m};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kappa Sigma Mu is a membership club using the Substrate ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/rustdocs/latest/pallet_society/index.html"},"Society pallet"),". It is an\neconomic game to incentivize users to join a society that coordinates around whatever the rules are\ndecided to be. The members of the society are incentivized to participate in the society via the\nrewards paid by the treasury. Currently, there is only one society on Kusama but it is possible to\nhave multiple societies in the future through a runtime upgrade."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Society Dashboard",src:a(77906).Z,width:"2880",height:"1650"}),"\n",(0,o.kt)("img",{alt:"Society Dashboard",src:a(65698).Z,width:"2874",height:"716"})),(0,o.kt)("p",null,"Before joining the society, let's take a brief look at the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/society"},"Society UI")," on Polkadot-JS apps and read through all the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkascan.io/pre/kusama/transaction/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17"},"rules")," to become a member."),(0,o.kt)("h2",{id:"ui-overview"},"UI Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Members"),": The number of members in the society. Currently, the maximum number of members is set\nto ",(0,o.kt)("inlineCode",{parentName:"li"},"150"),". It can be changed by using governance to increase the number."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Rotation"),": The time period for membership rotations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Challenge"),": The time period to randomly select one of the members to defend his membership in the\nsociety."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Pot"),": Resource balance that is used to support members of the society."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Bids"),": A list of users who submitted a bid to join the society.")),(0,o.kt)("h2",{id:"user-types"},"User Types"),(0,o.kt)("p",null,"Below are the various types of users at different stages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Bidder")," - A token holder who intends to join the society by placing a bid."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Candidate")," - The selected bidders that will be voted on by members of the society."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Suspended Candidate")," - The candidates that failed to join the society."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Member")," - Member of the society."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Suspender Member")," - A member of the society who has accumulated too many strikes or failed their\nmembership challenge."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Head")," - One winning candidate will be randomly chosen as head of the members, weighted by the\nnumber of approvals the winning candidates accumulated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Defender")," - In every challenge period, one of the members will be randomly selected to defend\ntheir membership in the society. The rules for defending the membership are documented ",(0,o.kt)("a",{parentName:"li",href:"https://polkascan.io/pre/kusama/transaction/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17"},"in the\nrules"),".")),(0,o.kt)("h2",{id:"procedure"},"Procedure"),(0,o.kt)("p",null,"Remember to take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://polkascan.io/pre/kusama/transaction/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17"},"rules")," first. And since those rules are not enforced\nentirely on-chain, it is recommended to join the\n",(0,o.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/!BUmiAAnAYSRGarqwOt:matrix.parity.io"},"Kappa Sigma Mu Lounge")," to ask\nany questions if anything is unclear."),(0,o.kt)("h3",{id:"1-bid-phase"},"1. Bid Phase"),(0,o.kt)("p",null,"To submit a bid, click the Submit Bid button on the\n",(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/ipns/kusama.dotapps.io/#/society"},"Society page"),"."),(0,o.kt)("p",null,"Anyone can submit a bid to join the society by reserving a deposit or finding an existing member to\ncreate a bid on their behalf by vouching for them. At every rotation period, as many bids as the\nsociety pot can support will be selected. The selected bids will be moved to the candidate phase,\nwhereas bids that were not selected will stay in the bidder pool until they are selected or a user\nchooses to unbid."),(0,o.kt)("p",null,"Anyone who wants to join the society is required to deposit 1.6 KSM for reserve on Kusama and\ndeclare the bid amount (1 KSM in this case) that they will receive for joining the society."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Society Dashboard",src:a(27011).Z,width:"2490",height:"498"})),(0,o.kt)("p",null,"Once you have submitted the transaction, your bid will be shown on the\n",(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/ipns/kusama.dotapps.io/#/society"},"Society page")," under the bids section. You can\ncancel the bidding if you changed your mind about joining the society by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"unbid")," on the same\npage."),(0,o.kt)("p",null,"You can find an existing member to place a bid on your behalf if you do not have KSM and you are\nwilling to give them a tip. An existing member can submit a ",(0,o.kt)("inlineCode",{parentName:"p"},"vouch")," transaction through the\nExtrinsics page."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"vouch(who,value,tip)")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"who: The user you are vouching for"),(0,o.kt)("li",{parentName:"ul"},"value: The value that the user would like to get when joining the society"),(0,o.kt)("li",{parentName:"ul"},"tip: Fees you get")),(0,o.kt)("p",{parentName:"div"},"The final value that the candidate will get = (value - tip)"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Society Dashboard",src:a(24904).Z,width:"1210",height:"461"})),(0,o.kt)("h3",{id:"2-candidate-phase"},"2. Candidate Phase"),(0,o.kt)("p",null,"Bids selected in this phase will be voted on by the existing members to decide whether or not you\nwill be approved to join the society. Members will vote for all the candidates and the final outcome\nwill be randomly selected by one of the votes. Let's take a look the example shown below:"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the randomly selected member does not vote, it will be treated as a rejection. For each\nrotation period, the maximum number of members that can be accepted is set as 10."))),(0,o.kt)("p",null,"A - Accept, R - Reject, S - Skeptic"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Member"),(0,o.kt)("th",{parentName:"tr",align:null},"1"),(0,o.kt)("th",{parentName:"tr",align:null},"2"),(0,o.kt)("th",{parentName:"tr",align:null},"3"),(0,o.kt)("th",{parentName:"tr",align:null},"4"),(0,o.kt)("th",{parentName:"tr",align:null},"5"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Vote"),(0,o.kt)("td",{parentName:"tr",align:null},"A"),(0,o.kt)("td",{parentName:"tr",align:null},"A"),(0,o.kt)("td",{parentName:"tr",align:null},"A"),(0,o.kt)("td",{parentName:"tr",align:null},"R"),(0,o.kt)("td",{parentName:"tr",align:null},"S")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Selected"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,'In this example, a candidate will be approved to join the society since member 3 was selected as a\nfinal voting outcome. A number of members will also be randomly chosen as "skeptics" to vote for the\ncandidates during the rotation period.'),(0,o.kt)("p",null,"Since member 5 was chosen as a skeptic, they are required to participate in the voting process. If\nthey do not participate in voting, they will be punished with one strike per missing vote. If one\naccumulates too many strikes, one's membership is suspended which means they may need to re-apply\nand their unclaimed payouts will be slashed. Moreover, each member who voted opposite to the\nrandomly selected vote will have their unclaimed payouts slashed and strikes increased. In this\ncase, member 4 will be punished."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"The maximum number of strikes you can have is on Kusama is 10")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("p",null,"The slashed funds (2 KSM currently) will be given to a random member who voted the same as the\nselected vote as a reward for participating in the vote. The reward is escrowed for some period of\ntime - see below."),(0,o.kt)("h4",{id:"lock-up-time"},"Lock-up Time"),(0,o.kt)("p",null,"It would take the number of members of the society as the variable to determine how many blocks you\nhave to wait in order to get the payout. The longest lockup time is close to 3 years. The formula\nis defined ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/rustdocs/latest/pallet_society/index.html"},"in the society pallet")," if you would like to have a look."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Let's assume we have 5 members in the society.\n\nlock_duration = 100 - 50_000 / (5 + 500)\nlock_duration * MAX_LOCK_DURATION_IN_BLOCKS\n\nResult = 1% * 15_552_000 ~ 11 days\n")),(0,o.kt)("p",null,"Based on the above calculation, it is required to wait close to 11 days to get the slashed funds."),(0,o.kt)("p",null,"If the candidate wins the vote, they receive their bid reward as a future payout. If the bid was\nplaced by a voucher, they will get back the reward that was set during vouching with the remainder\ngiven to the candidate - both escrowed for some time."),(0,o.kt)("p",null,"If the candidate loses the vote, they are suspended and it is up to the founder of the society (the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Suspension Judgement Origin"),") to determine if the candidate should go through the bidding process\nagain, should be accepted into the membership society, or rejected and their deposit slashed."),(0,o.kt)("h3",{id:"3-member-phase"},"3. Member Phase"),(0,o.kt)("p",null,"Once you become a member of the society, you will get back the deposit that you have reserved during\nthe bidding. A few things you need to be aware of. First, you should vote on candidates who applied\nfor the membership in every rotation period."),(0,o.kt)("p",null,"Second, you will need to claim your payout manually by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"payout")," after the lockup time. It\nis the same as the above mentioned lockup formula."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Society Payout",src:a(38520).Z,width:"2580",height:"572"})),(0,o.kt)("p",null,"Third, there will be a membership challenge every seven days on Kusama. So one of the members will\nbe randomly selected as a defender. Then, other members can vote whether this defender should stay\nin the society or not. A simple majority wins the vote. You can take a look ",(0,o.kt)("a",{parentName:"p",href:"https://polkascan.io/pre/kusama/transaction/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17"},"here"),' and\nsearch for "Existing Members (Challenges)". Besides that, you can earn extra KSM by helping a user\napply for the membership and requesting a tip. This is useful when a user does not have enough\nbalance to reserve a deposit. The tip will be given when a user successfully joins the society.'),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Each member can only vouch for one user at a time. ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A member is not required to reserve the deposit when vouching for a user."))),(0,o.kt)("p",null,"If a member accumulates too many strikes or fails their membership challenge, they will become\nsuspended. While a member is suspended, they are unable to claim matured payouts. It is up to the\nsuspension judgment origin to determine if the member should re-enter society or be removed from\nsociety with all their future payouts slashed."),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://polkascan.io/pre/kusama/transaction/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17"},"Convention of Approval of Membership")," -\nRules about joining the Kusama society"))}h.isMDXComponent=!0},77906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusama_society_page-e9e3297982c38b1f88e7b7a123c83b0c.png"},65698:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusama_society_page2-042fd01000b37b4bff71e974384e6eb6.png"},38520:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/payout-9a8517b19e461e4c56fa825885986f97.jpg"},27011:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/test_bid-ce5ef28a241c20b3afa46b8d491bf9ee.jpg"},24904:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vouch-4bdeb1a9c73bb236ecc042feb375149f.jpg"}}]);