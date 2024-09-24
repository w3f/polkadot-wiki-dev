"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5033],{72083:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var s=i(74848),n=i(28453);const a={id:"maintain-guides-society-kusama",title:"Kappa Sigma Mu",sidebar_label:"Kappa Sigma Mu",description:"Learn about the Kappa Sigma Mu society and join as a member.",keywords:["kappa sigma mu","society","kusama","member"],slug:"../../maintain-guides-society-kusama"},o=void 0,r={id:"maintain/kusama/maintain-guides-society-kusama",title:"Kappa Sigma Mu",description:"Learn about the Kappa Sigma Mu society and join as a member.",source:"@site/../docs/maintain/kusama/maintain-guides-society-kusama.md",sourceDirName:"maintain/kusama",slug:"/maintain-guides-society-kusama",permalink:"/docs/maintain-guides-society-kusama",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/kusama/maintain-guides-society-kusama.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1711359007e3,frontMatter:{id:"maintain-guides-society-kusama",title:"Kappa Sigma Mu",sidebar_label:"Kappa Sigma Mu",description:"Learn about the Kappa Sigma Mu society and join as a member.",keywords:["kappa sigma mu","society","kusama","member"],slug:"../../maintain-guides-society-kusama"},sidebar:"docs",previous:{title:"Adversarial Cheatsheet",permalink:"/docs/kusama-adversarial-cheatsheet"},next:{title:"How to run a Validator on Kusama",permalink:"/docs/maintain-guides-how-to-validate-kusama"}},d={},h=[{value:"UI Overview",id:"ui-overview",level:2},{value:"User Types",id:"user-types",level:2},{value:"Procedure",id:"procedure",level:2},{value:"1. Bid Phase",id:"1-bid-phase",level:3},{value:"2. Candidate Phase",id:"2-candidate-phase",level:3},{value:"Lock-up Time",id:"lock-up-time",level:4},{value:"3. Member Phase",id:"3-member-phase",level:3},{value:"Useful links",id:"useful-links",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Kappa Sigma Mu is a membership club using the Substrate\n",(0,s.jsx)(t.a,{href:"https://paritytech.github.io/substrate/master/pallet_society/index.html",children:"Society pallet"}),". It is an\neconomic game to incentivize users to join a society that coordinates around whatever the rules are\ndecided to be. The members of the society are incentivized to participate in the society via the\nrewards paid by the treasury. Currently, there is only one society on Kusama but it is possible to\nhave multiple societies in the future through a runtime upgrade."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"kusama_society_page",src:i(82214).A+"",width:"2880",height:"1650"}),"\n",(0,s.jsx)(t.img,{alt:"kusama_society_page2",src:i(72198).A+"",width:"2874",height:"716"})]}),"\n",(0,s.jsxs)(t.p,{children:["Before joining the society, let's take a brief look at the\n",(0,s.jsx)(t.a,{href:"https://polkadot.js.org/apps/#/society",children:"Society UI"})," on Polkadot-JS apps and read through all the\n",(0,s.jsx)(t.a,{href:"https://kusama.subscan.io/extrinsic/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17",children:"rules"}),"\nto become a member."]}),"\n",(0,s.jsx)(t.h2,{id:"ui-overview",children:"UI Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Members"}),": The number of members in the society. Currently, the maximum number of members is set\nto ",(0,s.jsx)(t.code,{children:"150"}),". It can be changed by using governance to increase the number."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Rotation"}),": The time period for membership rotations."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Challenge"}),": The time period to randomly select one of the members to defend his membership in the\nsociety."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Pot"}),": Resource balance that is used to support members of the society."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Bids"}),": A list of users who submitted a bid to join the society."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"user-types",children:"User Types"}),"\n",(0,s.jsx)(t.p,{children:"Below are the various types of users at different stages."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Bidder"})," - A token holder who intends to join the society by placing a bid."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Candidate"})," - The selected bidders that will be voted on by members of the society."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Suspended Candidate"})," - The candidates that failed to join the society."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Member"})," - Member of the society."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Suspender Member"})," - A member of the society who has accumulated too many strikes or failed their\nmembership challenge."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Head"})," - One winning candidate will be randomly chosen as head of the members, weighted by the\nnumber of approvals the winning candidates accumulated."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Defender"})," - In every challenge period, one of the members will be randomly selected to defend\ntheir membership in the society. The rules for defending the membership are documented\n",(0,s.jsx)(t.a,{href:"https://kusama.subscan.io/extrinsic/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17",children:"in the rules"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(t.p,{children:["Remember to take a look at the\n",(0,s.jsx)(t.a,{href:"https://kusama.subscan.io/extrinsic/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17",children:"rules"}),"\nfirst. And since those rules are not enforced entirely on-chain, it is recommended to join the\n",(0,s.jsx)(t.a,{href:"https://app.element.io/#/room/!BUmiAAnAYSRGarqwOt:matrix.parity.io",children:"Kappa Sigma Mu Lounge"})," to ask\nany questions if anything is unclear."]}),"\n",(0,s.jsx)(t.h3,{id:"1-bid-phase",children:"1. Bid Phase"}),"\n",(0,s.jsxs)(t.p,{children:["To submit a bid, click the Submit Bid button on the\n",(0,s.jsx)(t.a,{href:"https://cloudflare-ipfs.com/ipns/kusama.dotapps.io/#/society",children:"Society page"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Anyone can submit a bid to join the society by reserving a deposit or finding an existing member to\ncreate a bid on their behalf by vouching for them. At every rotation period, as many bids as the\nsociety pot can support will be selected. The selected bids will be moved to the candidate phase,\nwhereas bids that were not selected will stay in the bidder pool until they are selected or a user\nchooses to unbid."}),"\n",(0,s.jsx)(t.p,{children:"Anyone who wants to join the society is required to deposit 1.6 KSM for reserve on Kusama and\ndeclare the bid amount (1 KSM in this case) that they will receive for joining the society."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"test_bid",src:i(79289).A+"",width:"2490",height:"498"})}),"\n",(0,s.jsxs)(t.p,{children:["Once you have submitted the transaction, your bid will be shown on the\n",(0,s.jsx)(t.a,{href:"https://cloudflare-ipfs.com/ipns/kusama.dotapps.io/#/society",children:"Society page"})," under the bids section.\nYou can cancel the bidding if you changed your mind about joining the society by calling ",(0,s.jsx)(t.code,{children:"unbid"})," on\nthe same page."]}),"\n",(0,s.jsxs)(t.p,{children:["You can find an existing member to place a bid on your behalf if you do not have KSM and you are\nwilling to give them a tip. An existing member can submit a ",(0,s.jsx)(t.code,{children:"vouch"})," transaction through the\nExtrinsics page."]}),"\n",(0,s.jsxs)(t.admonition,{title:"vouch(who,value,tip)",type:"info",children:[(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"who: The user you are vouching for"}),"\n",(0,s.jsx)(t.li,{children:"value: The value that the user would like to get when joining the society"}),"\n",(0,s.jsx)(t.li,{children:"tip: Fees you get"}),"\n"]}),(0,s.jsx)(t.p,{children:"The final value that the candidate will get = (value - tip)"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"vouch",src:i(98710).A+"",width:"1210",height:"461"})}),"\n",(0,s.jsx)(t.h3,{id:"2-candidate-phase",children:"2. Candidate Phase"}),"\n",(0,s.jsx)(t.p,{children:"Bids selected in this phase will be voted on by the existing members to decide whether or not you\nwill be approved to join the society. Members will vote for all the candidates and the final outcome\nwill be randomly selected by one of the votes. Let's take a look the example shown below:"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"If the randomly selected member does not vote, it will be treated as a rejection. For each rotation\nperiod, the maximum number of members that can be accepted is set as 10."})}),"\n",(0,s.jsx)(t.p,{children:"A - Accept, R - Reject, S - Skeptic"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Member"}),(0,s.jsx)(t.th,{children:"1"}),(0,s.jsx)(t.th,{children:"2"}),(0,s.jsx)(t.th,{children:"3"}),(0,s.jsx)(t.th,{children:"4"}),(0,s.jsx)(t.th,{children:"5"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Vote"}),(0,s.jsx)(t.td,{children:"A"}),(0,s.jsx)(t.td,{children:"A"}),(0,s.jsx)(t.td,{children:"A"}),(0,s.jsx)(t.td,{children:"R"}),(0,s.jsx)(t.td,{children:"S"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Selected"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.p,{children:'In this example, a candidate will be approved to join the society since member 3 was selected as a\nfinal voting outcome. A number of members will also be randomly chosen as "skeptics" to vote for the\ncandidates during the rotation period.'}),"\n",(0,s.jsx)(t.p,{children:"Since member 5 was chosen as a skeptic, they are required to participate in the voting process. If\nthey do not participate in voting, they will be punished with one strike per missing vote. If one\naccumulates too many strikes, one's membership is suspended which means they may need to re-apply\nand their unclaimed payouts will be slashed. Moreover, each member who voted opposite to the\nrandomly selected vote will have their unclaimed payouts slashed and strikes increased. In this\ncase, member 4 will be punished."}),"\n",(0,s.jsx)(t.admonition,{title:"The maximum number of strikes you can have is on Kusama is 10",type:"info"}),"\n",(0,s.jsx)(t.p,{children:"The slashed funds (2 KSM currently) will be given to a random member who voted the same as the\nselected vote as a reward for participating in the vote. The reward is escrowed for some period of\ntime - see below."}),"\n",(0,s.jsx)(t.h4,{id:"lock-up-time",children:"Lock-up Time"}),"\n",(0,s.jsxs)(t.p,{children:["It would take the number of members of the society as the variable to determine how many blocks you\nhave to wait in order to get the payout. The longest lockup time is close to 3 years. The formula is\ndefined\n",(0,s.jsx)(t.a,{href:"https://paritytech.github.io/substrate/master/pallet_society/index.html",children:"in the society pallet"})," if\nyou would like to have a look."]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Let's assume we have 5 members in the society\n\nlock_duration = 100 - 50_000 / (5 + 500)\nlock_duration * MAX_LOCK_DURATION_IN_BLOCKS\n\nResult = 1% * 15_552_000 ~ 11 days\n"})}),"\n",(0,s.jsx)(t.p,{children:"Based on the above calculation, it is required to wait close to 11 days to get the slashed funds."}),"\n",(0,s.jsx)(t.p,{children:"If the candidate wins the vote, they receive their bid reward as a future payout. If the bid was\nplaced by a voucher, they will get back the reward that was set during vouching with the remainder\ngiven to the candidate - both escrowed for some time."}),"\n",(0,s.jsxs)(t.p,{children:["If the candidate loses the vote, they are suspended and it is up to the founder of the society (the\n",(0,s.jsx)(t.code,{children:"Suspension Judgement Origin"}),") to determine if the candidate should go through the bidding process\nagain, should be accepted into the membership society, or rejected and their deposit slashed."]}),"\n",(0,s.jsx)(t.h3,{id:"3-member-phase",children:"3. Member Phase"}),"\n",(0,s.jsx)(t.p,{children:"Once you become a member of the society, you will get back the deposit that you have reserved during\nthe bidding. A few things you need to be aware of. First, you should vote on candidates who applied\nfor the membership in every rotation period."}),"\n",(0,s.jsxs)(t.p,{children:["Second, you will need to claim your payout manually by calling ",(0,s.jsx)(t.code,{children:"payout"})," after the lockup time. It is\nthe same as the above mentioned lockup formula."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Society Payout",src:i(99935).A+"",width:"2580",height:"572"})}),"\n",(0,s.jsxs)(t.p,{children:["Third, there will be a membership challenge every seven days on Kusama. So one of the members will\nbe randomly selected as a defender. Then, other members can vote whether this defender should stay\nin the society or not. A simple majority wins the vote. You can take a look\n",(0,s.jsx)(t.a,{href:"https://kusama.subscan.io/extrinsic/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17",children:"here"}),'\nand search for "Existing Members (Challenges)". Besides that, you can earn extra KSM by helping a\nuser apply for the membership and requesting a tip. This is useful when a user does not have enough\nbalance to reserve a deposit. The tip will be given when a user successfully joins the society.']}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Each member can only vouch for one user at a time. A member is not required to reserve the deposit\nwhen vouching for a user."})}),"\n",(0,s.jsx)(t.p,{children:"If a member accumulates too many strikes or fails their membership challenge, they will become\nsuspended. While a member is suspended, they are unable to claim matured payouts. It is up to the\nsuspension judgment origin to determine if the member should re-enter society or be removed from\nsociety with all their future payouts slashed."}),"\n",(0,s.jsx)(t.h2,{id:"useful-links",children:"Useful links"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://kusama.subscan.io/extrinsic/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17",children:"Convention of Approval of Membership"})," -\nRules about joining the Kusama society"]}),"\n",(0,s.jsx)(t.p,{children:'The rules are encoded on-chain in UTF-8 format. This is displayed in most block explorers as a\nhexadecimal string. In order to see the rules in human-readable format, you can convert it. In the\nextrinsic\'s parameters go to Element 1 ("proposal") -> "value" -> "params" -> Element 2 ("rules")\nand copy the value corresponding to the key "value". You can use a hex-to-UTF8 converter to then\ndisplay the text. Note that the text is formatted with Markdown.'})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},82214:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/kusama_society_page-e9e3297982c38b1f88e7b7a123c83b0c.png"},72198:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/kusama_society_page2-042fd01000b37b4bff71e974384e6eb6.png"},99935:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/payout-9a8517b19e461e4c56fa825885986f97.jpg"},79289:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/test_bid-ce5ef28a241c20b3afa46b8d491bf9ee.jpg"},98710:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/vouch-4bdeb1a9c73bb236ecc042feb375149f.jpg"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var s=i(96540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);