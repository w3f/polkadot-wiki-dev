(self.webpackChunk=self.webpackChunk||[]).push([[131],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>h,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=o,m=d["".concat(l,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},20834:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>h,default:()=>d});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i=["components"],s={id:"learn-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Details about Polkadot's on-chain treasury."},l=void 0,p={unversionedId:"learn-treasury",id:"learn-treasury",isDocsHomePage:!1,title:"Treasury",description:"Details about Polkadot's on-chain treasury.",source:"@site/../docs/learn-treasury.md",sourceDirName:".",slug:"/learn-treasury",permalink:"/zh-CN/docs/learn-treasury",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-treasury.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1626886955,formattedLastUpdatedAt:"2021/7/21",frontMatter:{id:"learn-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Details about Polkadot's on-chain treasury."},sidebar:"docs",previous:{title:"Polkadot Host (PH)",permalink:"/zh-CN/docs/learn-polkadot-host"},next:{title:"How to use W3F Registrar",permalink:"/zh-CN/docs/learn-registrar"}},h=[{value:"Funding the Treasury",id:"funding-the-treasury",children:[]},{value:"Creating a Treasury Proposal",id:"creating-a-treasury-proposal",children:[{value:"Announcing the Proposal",id:"announcing-the-proposal",children:[]},{value:"Creating the Proposal",id:"creating-the-proposal",children:[]}]},{value:"Tipping",id:"tipping",children:[{value:"Example",id:"example",children:[]}]},{value:"Bounties Spending",id:"bounties-spending",children:[{value:"Creating a Bounty Proposal",id:"creating-a-bounty-proposal",children:[]},{value:"Closing a bounty",id:"closing-a-bounty",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"What prevents the Treasury from being captured by a majority of the Council?",id:"what-prevents-the-treasury-from-being-captured-by-a-majority-of-the-council",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],u={toc:h};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Treasury is a pot of funds collected through transaction fees, slashing,\n",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-staking#inflation"},"staking inefficiencies"),", etc. The funds held in the Treasury can be\nspent by making a spending proposal that, if approved by the ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance#council"},"Council"),",\nwill enter a waiting period before distribution. This waiting period is known as the budget period,\nand its duration is subject to ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance"},"governance"),", with the current default set to\n24 days. The Treasury attempts to spend as many proposals in the queue as it can\nwithout running out of funds."),(0,r.kt)("p",null,"If the Treasury ends a budget period without spending all of its funds, it suffers a burn of a\npercentage of its funds -- thereby causing deflationary pressure.\nThis percentage is currently at 1%\non Polkadot. ",""),(0,r.kt)("p",null,"When a stakeholder wishes to propose a spend from the Treasury, they must reserve a deposit of at\nleast 5% of the proposed spend (see below for variations). This deposit will be slashed if the\nproposal is rejected, and returned if it is accepted."),(0,r.kt)("p",null,"Proposals may consist of (but are not limited to):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Infrastructure deployment and continued operation."),(0,r.kt)("li",{parentName:"ul"},"Network security operations (monitoring services, continuous auditing)."),(0,r.kt)("li",{parentName:"ul"},"Ecosystem provisions (collaborations with friendly chains)."),(0,r.kt)("li",{parentName:"ul"},"Marketing activities (advertising, paid features, collaborations)."),(0,r.kt)("li",{parentName:"ul"},"Community events and outreach (meetups, pizza parties, hackerspaces)."),(0,r.kt)("li",{parentName:"ul"},"Software development (wallets and wallet integration, clients and client upgrades).")),(0,r.kt)("p",null,"The Treasury is ultimately controlled by the ",(0,r.kt)("a",{parentName:"p",href:"learn-governance#council"},"Council"),", and how the funds\nwill be spent is up to their judgment."),(0,r.kt)("h2",{id:"funding-the-treasury"},"Funding the Treasury"),(0,r.kt)("p",null,"The Treasury is funded from different sources:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Slashing: When a validator is slashed for any reason, the slashed amount is sent to the Treasury\nwith a reward going to the entity that reported the validator (another validator). The reward is\ntaken from the slash amount and varies per offence and number of reporters."),(0,r.kt)("li",{parentName:"ol"},"Transaction fees: A portion of each block's transaction fees goes to the Treasury, with the\nremainder going to the block author."),(0,r.kt)("li",{parentName:"ol"},"Staking inefficiency: ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/learn-staking#inflation"},"Inflation")," is designed to be 10% in the first\nyear, and the ideal staking ratio is set at 50%, meaning half of all tokens should be locked in\nstaking. Any deviation from this ratio will cause a proportional amount of the inflation to go to\nthe Treasury. In other words, if 50% of all tokens are staked, then 100% of the inflation goes to\nthe validators as reward. If the staking rate is greater than or less than 50%, then the\nvalidators will receive less, with the remainder going to the Treasury."),(0,r.kt)("li",{parentName:"ol"},"Parathreads: ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/learn-parathreads"},"Parathreads")," participate in a per-block auction for block\ninclusion. Part of this bid goes to the validator that accepts the block and the remainder goes\nto the Treasury.")),(0,r.kt)("h2",{id:"creating-a-treasury-proposal"},"Creating a Treasury Proposal"),(0,r.kt)("p",null,"The proposer has to deposit 5% of the requested amount or 100.000 DOT (whichever is\nhigher) as an anti-spam measure. This amount is burned if the proposal is rejected, or refunded\notherwise. These values are subject to ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance"},"governance")," so they may change in the\nfuture."),(0,r.kt)("p",null,"Please note that there is no way for a user to revoke a treasury proposal after it has been\nsubmitted. The Council will either accept or reject the proposal, and if the proposal is rejected,\nthe bonded funds are burned."),(0,r.kt)("h3",{id:"announcing-the-proposal"},"Announcing the Proposal"),(0,r.kt)("p",null,"To minimize storage on chain, proposals don't contain contextual information. When a user submits a\nproposal, they will probably need to find an off-chain way to explain the proposal. Most discussion\ntakes place on the following platforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Many community members participate in discussion in the\n",(0,r.kt)("a",{parentName:"li",href:"https://matrix.to/#/#kusama:matrix.parity.io"},"Kusama Element (previously Riot)")," chat or\n",(0,r.kt)("a",{parentName:"li",href:"https://matrix.to/#//#polkadot:matrix.parity.io"},"Polkadot Element"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://polkassembly.io"},"Polkassembly")," discussion platform that allows users to log in with\ntheir Web3 address and automatically reads proposals from the chain, turning them into discussion\nthreads. It also offers a sentiment gauge poll to get a feel for a proposal before committing to a\nvote.")),(0,r.kt)("p",null,"Spreading the word about the proposal's explanation is ultimately up to the proposer - the\nrecommended way is using official Element channels like the\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-watercooler:web3.foundation"},"Polkadot Watercooler")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-direction:matrix.parity.io"},"Polkadot Direction room"),"\n","","."),(0,r.kt)("h3",{id:"creating-the-proposal"},"Creating the Proposal"),(0,r.kt)("p",null,"One way to create the proposal is to use the Polkadot-JS Apps\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"website"),". From the website, use either the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"extrinsics tab")," and select the Treasury pallet, then\n",(0,r.kt)("inlineCode",{parentName:"p"},"proposeSpend")," and enter the desired amount and recipient, or use the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/treasury"},"Treasury tab")," and its dedicated Submit Proposal button:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A proposal being created",src:a(48050).Z})),(0,r.kt)("p",null,"The system will automatically take the required deposit, picking the higher of the two values\nmentioned ",(0,r.kt)("a",{parentName:"p",href:"#creating-a-treasury-proposal"},"above"),"."),(0,r.kt)("p",null,"Once created, your proposal will become visible in the Treasury screen and the Council can start\nvoting on it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pending proposals",src:a(42763).Z})),(0,r.kt)("p",null,"Remember that the proposal has no metadata, so it's up to the proposer to create a description and\npurpose that the Council could study and base their votes on."),(0,r.kt)("p",null,"At this point, a Council member can create a motion to accept or to reject the treasury proposal. It\nis possible that one motion to accept and another motion to reject are both created. The proportions\nto accept and reject Council proposals vary between accept or reject, and possibly depend on which\nnetwork the Treasury is implemented."),(0,r.kt)("p",null,"The threshold for accepting a treasury proposal is at least three-fifths of the Council. On the\nother hand, the threshold for rejecting a proposal is at least one-half of the Council."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Motions in action",src:a(78176).Z})),(0,r.kt)("h2",{id:"tipping"},"Tipping"),(0,r.kt)("p",null,"Next to the proposals process, a separate system for making tips exists for the Treasury. Tips can\nbe suggested by anyone and are supported by members of the Council. Tips do not have any definite\nvalue; the final value of the tip is decided based on the median of all tips issued by the tippers."),(0,r.kt)("p",null,"Currently, the tippers are the same as the members of the Council. However, being a tipper is not\nthe direct responsibility of the Council, and at some point the Council and the tippers may be\ndifferent groups of accounts."),(0,r.kt)("p",null,"A tip will enter a closing phase when more than a half plus one of the tipping group have endorsed a\ntip. During that timeframe, the other members of the tipping group can still issue their tips, but\ndo not have to. Once the window closes, anyone can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"close_tip")," extrinsic, and the tip will\nbe paid out."),(0,r.kt)("p",null,"There are two types of tips: public and tipper-initiated. With public tips, a small bond is required\nto place them. This bond depends on the tip message length, and a fixed bond constant defined on\nchain, currently 1. Public tips carry a finder's fee of\n20% which is paid out from the total amount. Tipper-initiated tips, i.e. tips\nthat a Council member published, do not have a finder's fee or a bond."),(0,r.kt)("p",null,"To better understand the process a tip goes through until it is paid out, let's consider an example."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Bob has done something great for Polkadot .\nAlice has noticed this and decides to report Bob as deserving a tip from the Treasury. The Council\nis composed of three members Charlie, Dave, and Eve."),(0,r.kt)("p",null,"Alice begins the process by issuing the ",(0,r.kt)("inlineCode",{parentName:"p"},"report_awesome")," extrinsic. This extrinsic requires two\narguments, a reason and the address to tip. Alice submits Bob's address with the reason being a\nUTF-8 encoded URL to a post on\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io"},"polkassembly"),"\n"," that explains her reasoning for\nwhy Bob deserves the tip."),(0,r.kt)("p",null,"As mentioned above, Alice must also lock up a deposit for making this report. The deposit is the\nbase deposit as set in the chain's parameter list plus the additional deposit per byte contained in\nthe reason. This is why Alice submitted a URL as the reason instead of the explanation directly, it\nwas cheaper for her to do so."),(0,r.kt)("p",null,"For her trouble, Alice is able to claim the eventual finder's fee if the tip is approved by the\ntippers."),(0,r.kt)("p",null,"Since the tipper group is the same as the Council, the Council must now collectively (but also\nindependently) decide on the value of the tip that Bob deserves."),(0,r.kt)("p",null,"Charlie, Dave, and Eve all review the report and make tips according to their personal valuation of\nthe benefit Bob has provided to Kusama."),(0,r.kt)("p",null,"Charlie tips 10 DOT . Dave tips\n30 DOT . Eve tips\n100 DOT ."),(0,r.kt)("p",null,"The tip could have been closed out with only two of the three tippers. Once more than half of the\ntippers group have issued tip valuations, the countdown to close the tip will begin. In this case,\nthe third tipper issued their tip before the end of the closing period, so all three were able to\nmake their tip valuations known."),(0,r.kt)("p",null,"Now the actual tip that will be paid out to Bob is the median of these tips, so Bob will be paid out\n30 DOT  from the Treasury."),(0,r.kt)("p",null,"In order for Bob to be paid his tip, some account must call the ",(0,r.kt)("inlineCode",{parentName:"p"},"close_tip")," extrinsic at the end of\nthe closing period for the tip. This extrinsic may be called by anyone."),(0,r.kt)("h2",{id:"bounties-spending"},"Bounties Spending"),(0,r.kt)("p",null,"There are practical limits to Council Members curation capabilities when it comes to treasury\nproposals: Council members likely do not have the expertise to make a proper assessment of the\nactivities described in all proposals. Even if individual Councillors have that expertise, it is\nhighly unlikely that a majority of members are capable in such diverse topics."),(0,r.kt)("p",null,"Bounties Spending proposals aim to delegate the curation activity of spending proposals to experts\ncalled Curators: They can be defined as addresses with agency over a portion of the Treasury with\nthe goal of fixing a bug or vulnerability, developing a strategy, or monitoring a set of tasks\nrelated to a specific topic: all for the benefit of the Polkadot ecosystem."),(0,r.kt)("p",null,"A proposer can submit a bounty proposal for the Council to pass, with a curator to be defined later,\nwhose background and expertise is such that they are capable of determining when the task is\ncomplete. Curators are selected by the Council after the bounty proposal passes, and need to add an\nupfront payment to take the position. This deposit can be used to punish them if they act\nmaliciously. However, if they are successful in their task of getting someone to complete the bounty\nwork, they will receive their deposit back and part of the bounty reward."),(0,r.kt)("p",null,"When submitting the value of the bounty, the proposer includes a reward for curators willing to\ninvest their time and expertise in the task: this amount is included in the total value of the\nbounty. In this sense, the curator's fee can be defined as the result of subtracting the value paid\nto the bounty rewardee from the total value of the bounty."),(0,r.kt)("p",null,"In general terms, curators are expected to have a well-balanced track record related to the issues\nthe bounty tries to resolve: they should be at least knowledgeable on the topics the bounty touches,\nand show project management skills or experience. These recommendations ensure an effective use of\nthe mechanism. A Bounty Spending is a reward for a specified body of work - or specified set of\nobjectives - that needs to be executed for a predefined treasury amount to be paid out. The\nresponsibility of assigning a payout address once the specified set of objectives is completed is\ndelegated to the curator."),(0,r.kt)("p",null,"After the Council has activated a bounty, it delegates the work that requires expertise to the\ncurator who gets to close the active bounty. Closing the active bounty enacts a delayed payout to\nthe payout address and a payout of the curator fee. The delay phase allows the Council to act if any\nissues arise."),(0,r.kt)("p",null,"To minimize storage on chain in the same way as any proposal, bounties don't contain contextual\ninformation. When a user submits a bounty spending proposal, they will probably need to find an\noff-chain way to explain the proposal (any of the available community forums serve this purpose).\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1-IBz_owspV5OcvezWXpksWDQReWowschD0TFuaVKKcU/edit?usp=sharing"},"This template"),"\ncan help as a checklist of all needed information for the Council to make an informed decision."),(0,r.kt)("p",null,"The bounty has a predetermined duration of 90 days with the possibility of being extended by the\ncurator. Aiming to maintain flexibility on the tasks\u2019 curation, the curator will be able to create\nsub-bounties for more granularity and allocation in the next iteration of the mechanism."),(0,r.kt)("h3",{id:"creating-a-bounty-proposal"},"Creating a Bounty Proposal"),(0,r.kt)("p",null,"Anyone can create a Bounty proposal using Polkadot JS Apps: Users are able to submit a proposal on\nthe dedicated Bounty section under Governance. The development of a robust user interface to view\nand manage bounties in the Polkadot Apps is still under development and it will serve Council\nmembers, Curators and Beneficiaries of the bounties, as well as all users observing the on-chain\ntreasury governance. For now, the help of a Councillor is needed to open a bounty proposal as a\nmotion to be voted."),(0,r.kt)("p",null,"To submit a bounty, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot JS Apps")," and click on the\ngovernance tab in the options bar on the top of the site. After, click on 'Bounties' and find the\nbutton '+ Add Bounty' on the upper-right side of the interface. Complete the bounty title, the\nrequested allocation (including curator's fee) and confirm the call."),(0,r.kt)("p",null,"After this, a Council member will need to assist you to pass the bounty proposal for vote as a\nmotion. You can contact the Council by joining the\nPolkadot Direction ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-direction:matrix.parity.io"},"channel"),"\n"," in\nElement or joining our\nPolkadot Discord ",(0,r.kt)("a",{parentName:"p",href:"https://parity.link/polkadot-discord"},"server"),"\n"," and publishing a\nshort description of your bounty, with a link to one of the ",(0,r.kt)("a",{parentName:"p",href:"#announcing-the-proposal"},"forums")," for\ncontextual information."),(0,r.kt)("p",null,"A bounty can be cancelled by deleting the earmark for a specific treasury amount or be closed if the\ntasks have been completed. On the opposite side, the 90 days life of a bounty can be extended by\namending the expiry block number of the bounty to stay active."),(0,r.kt)("h3",{id:"closing-a-bounty"},"Closing a bounty"),(0,r.kt)("p",null,"The curator can close the bounty once they approve the completion of its tasks. The curator should\nmake sure to set up the payout address on the active bounty beforehand. Closing the Active bounty\nenacts a delayed payout to the payout address and a payout of the curator fee."),(0,r.kt)("p",null,"A bounty can be closed by using the extrinsics tab and selecting the Treasury pallet, then\n",(0,r.kt)("inlineCode",{parentName:"p"},"Award_bounty"),", making sure the right bounty is to be closed and finally sign the transaction. It is\nimportant to note that those who received a reward after the bounty is completed, must claim the\nspecific amount of the payout from the payout address, by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Claim_bounty")," after the curator\nclosed the allocation."),(0,r.kt)("p",null,"To understand more about Bounties and how this new mechanism works, read this\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/kusama-and-polkadot-now-reward-curators-helping-to-scale-councils-functions-join-the-force-moving-the-community-forward/"},"Polkadot Blog post"),"."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"what-prevents-the-treasury-from-being-captured-by-a-majority-of-the-council"},"What prevents the Treasury from being captured by a majority of the Council?"),(0,r.kt)("p",null,"The majority of the Council can decide the outcome of a treasury spend proposal. In an adversarial\nmindset, we may consider the possibility that the Council may at some point go rogue and attempt to\nsteal all of the treasury funds. It is a possibility that the treasury pot becomes so great, that a\nlarge financial incentive would present itself."),(0,r.kt)("p",null,"For one, the Treasury has deflationary pressure due to the burn that is suffered every spend period.\nThe burn aims to incentivize the complete spend of all treasury funds at every burn period, so\nideally the treasury pot doesn't have time to accumulate mass amounts of wealth. However, it is the\ncase that the burn on the Treasury could be so little that it does not matter - as is the case\ncurrently on Kusama with a 0.2% burn."),(0,r.kt)("p",null,"However, it is the case on Kusama that the Council is composed of mainly well-known members of the\ncommunity. Remember, the Council is voted in by the token holders, so they must do some campaigning\nor otherwise be recognized to earn votes. In the scenario of an attack, the Council members would\nlose their social credibility. Furthermore, members of the Council are usually externally motivated\nby the proper operation of the chain. This external motivation is either because they run businesses\nthat depend on the chain, or they have direct financial gain (through their holdings) of the token\nvalue remaining steady."),(0,r.kt)("p",null,"Concretely, there are a couple on-chain methods that resist this kind of attack. One, the Council\nmajority may not be the token majority of the chain. This means that the token majority could vote\nto replace the Council if they attempted this attack - or even reverse the treasury spend. They\nwould do this through a normal referendum. Two, there are time delays to treasury spends. They are\nonly enacted every spend period. This means that there will be some time to observe this attack is\ntaking place. The time delay then allows chain participants time to respond. The response may take\nthe form of governance measures or - in the most extreme cases a liquidation of their holdings and a\nmigration to a minority fork. However, the possibility of this scenario is quite low."),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/master/frame/treasury/src/lib.rs"},"Substrate's Treasury Pallet")," -\nThe Rust implementation of the Treasury.\n(",(0,r.kt)("a",{parentName:"li",href:"https://substrate.dev/rustdocs/latest/pallet_treasury/index.html"},"Docs"),")")))}d.isMDXComponent=!0},78176:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/motion-f2fc13da7c5579a8d07062ea229791f6.png"},42763:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/proposals-c4ac9aead89864b9bce490955fd7a92f.png"},48050:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/submit-new-2b0f4754866f7a162e0089ec42a09340.png"}}]);