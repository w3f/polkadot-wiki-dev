(self.webpackChunk=self.webpackChunk||[]).push([[4384],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3283:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>u,default:()=>c});var n=a(22122),i=a(19756),o=(a(67294),a(3905)),r=["components"],s={id:"maintain-guides-society-kusama",title:"Join Kappa Sigma Mu",sidebar_label:"Join Kappa Sigma Mu"},l=void 0,d={unversionedId:"maintain-guides-society-kusama",id:"maintain-guides-society-kusama",isDocsHomePage:!1,title:"Join Kappa Sigma Mu",description:"Kappa Sigma Mu is a membership club using the Substrate Society pallet. It is an",source:"@site/../docs/maintain-guides-society-kusama.md",sourceDirName:".",slug:"/maintain-guides-society-kusama",permalink:"/docs/maintain-guides-society-kusama",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-society-kusama.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1627355829,formattedLastUpdatedAt:"7/27/2021",frontMatter:{id:"maintain-guides-society-kusama",title:"Join Kappa Sigma Mu",sidebar_label:"Join Kappa Sigma Mu"}},u=[{value:"UI Overview",id:"ui-overview",children:[]},{value:"User Types",id:"user-types",children:[]},{value:"Procedure",id:"procedure",children:[{value:"1. Bid Phase",id:"1-bid-phase",children:[]},{value:"2. Candidate Phase",id:"2-candidate-phase",children:[]},{value:"3. Member Phase",id:"3-member-phase",children:[]}]},{value:"Useful links",id:"useful-links",children:[]}],p={toc:u};function c(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kappa Sigma Mu is a membership club using the Substrate ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/latest/pallet_society/index.html"},"Society")," pallet. It is an\neconomic game to incentivize users to join a society that coordinates around whatever the rules are\ndecided to be. The members of the society are incentivized to participate in the society via the\nrewards paid by the treasury. Currently, there is only one society on Kusama but it is possible to\nhave multiple societies in the future through a runtime upgrade."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Society Dashboard",src:a(9281).Z}),"\n",(0,o.kt)("img",{alt:"Society Dashboard",src:a(92258).Z})),(0,o.kt)("p",null,"Before joining the society, let's take a brief look at the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/society"},"Society UI")," on Polkadot-JS apps and read through all the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkascan.io/pre/kusama/transaction/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17"},"rules")," to become a member."),(0,o.kt)("h2",{id:"ui-overview"},"UI Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Members"),": The number of members in the society. Currently, the maximum number of members is set\nto ",(0,o.kt)("inlineCode",{parentName:"li"},"150"),". It can be changed by using governance to increase the number."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Rotation"),": The time period for membership rotations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Challenge"),": The time period to randomly select one of the members to defend his membership in the\nsociety."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Pot"),": Resource balance that is used to support members of the society."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Bids"),": A list of users who submitted a bid to join the society.")),(0,o.kt)("h2",{id:"user-types"},"User Types"),(0,o.kt)("p",null,"Below are the various types of users at different stages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Bidder")," - A token holder who intends to join the society by placing a bid."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Candidate")," - The selected bidders that will be voted on by members of the society."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Suspended Candidate")," - The candidates that failed to join the society."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Member")," - Member of the society."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Suspender Member")," - A member of the society who has accumulated too many strikes or failed their\nmembership challenge."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Head")," - One winning candidate will be randomly chosen as head of the members, weighted by the\nnumber of approvals the winning candidates accumulated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Defender")," - In every challenge period, one of the members will be randomly selected to defend\ntheir membership in the society. The rules for defending the membership are documented ",(0,o.kt)("a",{parentName:"li",href:"https://polkascan.io/pre/kusama/transaction/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17"},"in the\nrules"),".")),(0,o.kt)("h2",{id:"procedure"},"Procedure"),(0,o.kt)("p",null,"Remember to take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://polkascan.io/pre/kusama/transaction/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17"},"rules")," first. And since those rules are not enforced\nentirely on-chain, it is recommended to join the\n",(0,o.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/!BUmiAAnAYSRGarqwOt:matrix.parity.io"},"Kappa Sigma Mu Lounge")," to ask\nany questions if anything is unclear."),(0,o.kt)("h3",{id:"1-bid-phase"},"1. Bid Phase"),(0,o.kt)("p",null,"To submit a bid, click the Submit Bid button on the\n",(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/ipns/kusama.dotapps.io/#/society"},"Society page"),"."),(0,o.kt)("p",null,"Anyone can submit a bid to join the society by reserving a deposit or finding an existing member to\ncreate a bid on their behalf by vouching for them. At every rotation period, as many bids as the\nsociety pot can support will be selected. The selected bids will be moved to the candidate phase,\nwhereas bids that were not selected will stay in the bidder pool until they are selected or a user\nchooses to unbid."),(0,o.kt)("p",null,"Anyone who wants to join the society is required to deposit 1.6 KSM for reserve on Kusama and\ndeclare the bid amount (1 KSM in this case) that they will receive for joining the society."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Society Dashboard",src:a(66667).Z})),(0,o.kt)("p",null,"Once you have submitted the transaction, your bid will be shown on the\n",(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/ipns/kusama.dotapps.io/#/society"},"Society page")," under the bids section. You can\ncancel the bidding if you changed your mind about joining the society by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"unbid")," on the same\npage."),(0,o.kt)("p",null,"You can find an existing member to place a bid on your behalf if you do not have KSM and you are\nwilling to give them a tip. An existing member can submit a ",(0,o.kt)("inlineCode",{parentName:"p"},"vouch")," transaction through the\nExtrinsics page."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"vouch(who,value,tip)"),(0,o.kt)("p",{parentName:"blockquote"},"who - The user you are vouching for"),(0,o.kt)("p",{parentName:"blockquote"},"value - The value that the user would like to get when joining the society"),(0,o.kt)("p",{parentName:"blockquote"},"tip - Fees you get"),(0,o.kt)("p",{parentName:"blockquote"},"Note: The final value that the candidate will get = (value - tip)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Society Dashboard",src:a(10573).Z})),(0,o.kt)("h3",{id:"2-candidate-phase"},"2. Candidate Phase"),(0,o.kt)("p",null,"Bids selected in this phase will be voted on by the existing members to decide whether or not you\nwill be approved to join the society. Members will vote for all the candidates and the final outcome\nwill be randomly selected by one of the votes. Let's take a look the example shown below:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: If the randomly selected member does not vote, it will be treated as a rejection. For each\nrotation period, the maximum number of members that can be accepted is set as 10.")),(0,o.kt)("p",null,"A - Accept, R - Reject, S - Skeptic"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Member"),(0,o.kt)("th",{parentName:"tr",align:null},"1"),(0,o.kt)("th",{parentName:"tr",align:null},"2"),(0,o.kt)("th",{parentName:"tr",align:null},"3"),(0,o.kt)("th",{parentName:"tr",align:null},"4"),(0,o.kt)("th",{parentName:"tr",align:null},"5"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Vote"),(0,o.kt)("td",{parentName:"tr",align:null},"A"),(0,o.kt)("td",{parentName:"tr",align:null},"A"),(0,o.kt)("td",{parentName:"tr",align:null},"A"),(0,o.kt)("td",{parentName:"tr",align:null},"R"),(0,o.kt)("td",{parentName:"tr",align:null},"S")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Selected"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,'In this example, a candidate will be approved to join the society since member 3 was selected as a\nfinal voting outcome. A number of members will also be randomly chosen as "skeptics" to vote for the\ncandidates during the rotation period.'),(0,o.kt)("p",null,"Since member 5 was chosen as a skeptic, they are required to participate in the voting process. If\nthey do not participate in voting, they will be punished with one strike per missing vote. If one\naccumulates too many strikes, one's membership is suspended which means they may need to re-apply\nand their unclaimed payouts will be slashed. Moreover, each member who voted opposite to the\nrandomly selected vote will have their unclaimed payouts slashed and strikes increased. In this\ncase, member 4 will be punished."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The maximum number of strikes you can have is on Kusama is 10.")),(0,o.kt)("p",null,"The slashed funds (2 KSM currently) will be given to a random member who voted the same as the\nselected vote as a reward for participating in the vote. The reward is escrowed for some period of\ntime - see below."),(0,o.kt)("h4",{id:"lock-up-time"},"Lock-up Time"),(0,o.kt)("p",null,"It would take the number of members of the society as the variable to determine how many blocks you\nhave to wait in order to get the payout. The longest lock-up time is close to 3 years. The formula\nis defined ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/latest/pallet_society/index.html"},"in the society pallet")," if you would like to have a look."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Let's assume we have 5 members in the society.\n\nlock_duration = 100 - 50_000 / (5 + 500)\nlock_duration * MAX_LOCK_DURATION_IN_BLOCKS\n\nResult = 1% * 15_552_000 ~ 11 days\n")),(0,o.kt)("p",null,"Based on the above calculation, it is required to wait close to 11 days to get the slashed funds."),(0,o.kt)("p",null,"If the candidate wins the vote, they receive their bid reward as a future payout. If the bid was\nplaced by a voucher, they will get back the reward that was set during vouching with the remainder\ngiven to the candidate - both escrowed for some time."),(0,o.kt)("p",null,"If the candidate loses the vote, they are suspended and it is up to the founder of the society (the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Suspension Judgement Origin"),") to determine if the candidate should go through the bidding process\nagain, should be accepted into the membership society, or rejected and their deposit slashed."),(0,o.kt)("h3",{id:"3-member-phase"},"3. Member Phase"),(0,o.kt)("p",null,"Once you become a member of the society, you will get back the deposit that you have reserved during\nthe bidding. A few things you need to be aware of. First, you should vote on candidates who applied\nfor the membership in every rotation period."),(0,o.kt)("p",null,"Second, you will need to claim your payout manually by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"payout")," after the lock-up time. It\nis the same as the above mentioned lock-up formula."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Society Payout",src:a(61373).Z})),(0,o.kt)("p",null,"Third, there will be a membership challenge every seven days on Kusama. So one of the members will\nbe randomly selected as a defender. Then, other members can vote whether this defender should stay\nin the society or not. A simple majority wins the vote. You can take a look ",(0,o.kt)("a",{parentName:"p",href:"https://polkascan.io/pre/kusama/transaction/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17"},"here"),' and\nsearch for "Existing Members (Challenges)". Besides that, you can earn extra KSM by helping a user\napply for the membership and requesting a tip. This is useful when a user does not have enough\nbalance to reserve a deposit. The tip will be given when a user successfully joins the society.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Each member can only vouch for one user at a time. A member is not required to reserve the\ndeposit when vouching for a user.")),(0,o.kt)("p",null,"If a member accumulates too many strikes or fails their membership challenge, they will become\nsuspended. While a member is suspended, they are unable to claim matured payouts. It is up to the\nsuspension judgment origin to determine if the member should re-enter society or be removed from\nsociety with all their future payouts slashed."),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://polkascan.io/pre/kusama/transaction/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17"},"Convention of Approval of Membership")," -\nRules about joining the Kusama society"))}c.isMDXComponent=!0},9281:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusama_society_page-e9e3297982c38b1f88e7b7a123c83b0c.png"},92258:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusama_society_page2-042fd01000b37b4bff71e974384e6eb6.png"},61373:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/payout-9a8517b19e461e4c56fa825885986f97.jpg"},66667:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/test_bid-ce5ef28a241c20b3afa46b8d491bf9ee.jpg"},10573:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/vouch-4bdeb1a9c73bb236ecc042feb375149f.jpg"}}]);