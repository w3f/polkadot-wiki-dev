(self.webpackChunk=self.webpackChunk||[]).push([[7654],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var o=a(74165),n=a(15861),i=a(67294),r=a(87152),s=a(14741),l=a(67425);function p(e,t,a){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)((0,o.Z)().mark((function e(t,a,n){var i,l,p,d,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return p=new r.U(i),e.next=21,s.G.create({provider:p});case 21:d=e.sent,(u=a.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=d.toString(),e.abrupt("break",35);case 29:return e.next=31,d();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,a,o){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,o);break;case"precise":(0,l.Precise)(e,a,o);break;case"blocksToDays":(0,l.BlocksToDays)(e,o);break;case"erasToDays":(0,l.ErasToDays)(e,o,a);break;case"percentage":(0,l.Percentage)(e,o);break;case"permillToPercent":(0,l.PermillToPercent)(e,o);break;case"arrayLength":(0,l.ArrayLength)(e,o);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,a=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,d=(0,i.useState)(""),c=d[0],h=d[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?u(r.toString(),l,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,n.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,a,h);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(n,l,t,h):h(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),c}},67425:e=>{var t="polkadot",a="kusama",o="statemine",n="statemint",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,r,s){var l=void 0;if(r===t||r===n)l=3;else{if(r!==a&&r!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),s((e=Number.isInteger(e/i[r].precision)?e/i[r].precision+" "+i[r].symbol:(e/i[r].precision).toFixed(l)+" "+i[r].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/i[t].precision+" "+i[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,i,r){var s=void 0;if(r===t||r===n)s=1;else{if(r!==a&&r!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}i((e/=s).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},40569:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var o=a(87462),n=a(63366),i=(a(67294),a(3905)),r=a(47940),s=["components"],l={id:"learn-guides-polkadot-opengov",title:"Polkadot-JS Guides about OpenGov",sidebar_label:"OpenGov Guides",description:"Polkadot-JS Guides about Polkadot OpenGov.",keywords:["opengov","polkadot opengov","referenda","cancel","polkadot-js"],slug:"../learn-guides-polkadot-opengov"},p=void 0,d={unversionedId:"learn/learn-guides-polkadot-opengov",id:"learn/learn-guides-polkadot-opengov",title:"Polkadot-JS Guides about OpenGov",description:"Polkadot-JS Guides about Polkadot OpenGov.",source:"@site/../docs/learn/learn-guides-polkadot-opengov.md",sourceDirName:"learn",slug:"/learn-guides-polkadot-opengov",permalink:"/docs/learn-guides-polkadot-opengov",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-polkadot-opengov.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1710309813,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{id:"learn-guides-polkadot-opengov",title:"Polkadot-JS Guides about OpenGov",sidebar_label:"OpenGov Guides",description:"Polkadot-JS Guides about Polkadot OpenGov.",keywords:["opengov","polkadot opengov","referenda","cancel","polkadot-js"],slug:"../learn-guides-polkadot-opengov"},sidebar:"docs",previous:{title:"Nomination Pool Guides",permalink:"/docs/learn-guides-staking-pools"},next:{title:"Treasury Guides",permalink:"/docs/learn-guides-treasury"}},u={},c=[{value:"Create a Referenda Proposal",id:"create-a-referenda-proposal",level:2},{value:"Submitting a Preimage",id:"submitting-a-preimage",level:3},{value:"Submitting a Proposal",id:"submitting-a-proposal",level:3},{value:"Submitting a Referendum on the Whitelisted Caller Track",id:"submitting-a-referendum-on-the-whitelisted-caller-track",level:3},{value:"Voting on Referenda",id:"voting-on-referenda",level:2},{value:"Removing Votes",id:"removing-votes",level:3},{value:"Removing Expired Voting Locks",id:"removing-expired-voting-locks",level:3},{value:"Delegations",id:"delegations",level:2},{value:"Delegate Votes",id:"delegate-votes",level:3},{value:"Undelegate Votes",id:"undelegate-votes",level:3},{value:"Remove Expired Locks from Delegations",id:"remove-expired-locks-from-delegations",level:3},{value:"Modify your Delegations",id:"modify-your-delegations",level:3},{value:"Claiming OpenGov Deposits",id:"claiming-opengov-deposits",level:2},{value:"Claiming the Preimage and Decision Deposits",id:"claiming-the-preimage-and-decision-deposits",level:3},{value:"Claiming the Referendum Submission Deposit",id:"claiming-the-referendum-submission-deposit",level:3},{value:"Cancel or Kill a Referendum",id:"cancel-or-kill-a-referendum",level:2}],h={toc:c},m="wrapper";function k(e){var t=e.components,l=(0,n.Z)(e,s);return(0,i.kt)(m,(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"this page")," to learn about Polkadot OpenGov."),(0,i.kt)("p",null,"This guide will instruct token holders how to propose and vote on public referenda using the\nReferenda module (OpenGov). Below are a few links to stay informed and directly engage with the\ncommunity."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/#Polkadot-Direction:parity.io"},"Polkadot Direction")," - a place to discuss\ngovernance and the future of Polkadot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/#Kusama-Direction:parity.io"},"Kusama Direction")," - a place to discuss\ngovernance and the future of Kusama."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.polkassembly.io"},"Polkadot")," and ",(0,i.kt)("a",{parentName:"li",href:"https://kusama.polkassembly.io"},"Kusama"),"\nPolkassembly - for current referenda, latest proposals, motions, treasury proposals, tips,\nbounties, and more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/#dailydigest:web3.foundation"},"Polkadot Daily Digest")," - News about what is\nhappening in the Polkadot ecosystem, published every weekday except holidays.")),(0,i.kt)("h2",{id:"create-a-referenda-proposal"},"Create a Referenda Proposal"),(0,i.kt)("h3",{id:"submitting-a-preimage"},"Submitting a Preimage"),(0,i.kt)("p",null,"The act of creating a proposal is split from submitting the preimage for the proposal since the\nstorage cost of submitting a large preimage could be expensive. Allowing the preimage submission to\ncome as a separate transaction means that another account could submit the preimage for you and pay\nthe fee. The example below demonstrates the creation of a preimage to propose and approve a spend of\ntreasury funds."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"submit preimage",src:a(10579).Z,width:"1078",height:"606"})),(0,i.kt)("p",null,"Follow the steps below to submit a preimage as shown in the screenshot above."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to Governance -> Referenda."),(0,i.kt)("li",{parentName:"ol"},'Click on the "Add preimage" button.'),(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("em",{parentName:"li"},"propose")," drop-down field, select ",(0,i.kt)("inlineCode",{parentName:"li"},"treasury"),"."),(0,i.kt)("li",{parentName:"ol"},"From the unlabeled drop-down field to the right of the ",(0,i.kt)("em",{parentName:"li"},"propose")," drop-down field, select\n",(0,i.kt)("inlineCode",{parentName:"li"},"spend(amount, beneficiary)"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"amount: Compact<u128> (BalanceOf)")," text field, enter the spend amount."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"beneficiary: MultiAddress (AccountIdLookupOf)")," drop-down field will have ",(0,i.kt)("inlineCode",{parentName:"li"},"Id")," selected by\ndefault. Select the beneficiary from the ",(0,i.kt)("inlineCode",{parentName:"li"},"Id: AccountId")," drop-down field.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"preimage hash"),' value before clicking the "Submit preimage" button.')),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},'Click the "Submit preimage" button.')),(0,i.kt)("p",null,"After the preimage is submitted successfully on-chain, Polkadot-JS UI lists it under the tab of\nGovernance -> Preimages."),(0,i.kt)("h3",{id:"submitting-a-proposal"},"Submitting a Proposal"),(0,i.kt)("p",null,'Submitting a proposal requires you to bond some tokens. On Polkadot-JS UI, you can navigate to the\nGovernance -> Referenda to make a new proposal. In order to submit a proposal, you will need to\nsubmit what\'s called the preimage hash. The preimage hash is simply the hash of the proposal to be\nenacted. The easiest way to get the preimage hash is by clicking on the "Submit preimage" button as\nshown in the previous section.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"submit proposal",src:a(31993).Z,width:"1936",height:"1118"})),(0,i.kt)("p",null,"The proposal will be registered from the account selected and the balance lock will be applied to\nit. An appropriate origin must be chosen, as each origin has different privileges, and acceptance\ncriteria. After entering the hash of the preimage for the proposal, the preimage length field is\nautomatically populated. The enactment delay can be specified either as a block number, or as a\nspecific number of blocks after the referendum is approved. The deposit for this proposal will be\nlocked for the referendum duration."),(0,i.kt)("h3",{id:"submitting-a-referendum-on-the-whitelisted-caller-track"},"Submitting a Referendum on the Whitelisted Caller Track"),(0,i.kt)("p",null,"Let's consider increasing the number of validators participating in parachain consensus. You could\n",(0,i.kt)("a",{parentName:"p",href:"#submitting-a-preimage"},"submit a preimage")," with the call that sets the number of validators to\n1,000 and submit a referendum to the Root track directly. However, this requires a large decision\ndeposit and has very conservative passing parameters such that it will probably need the entire\n28-day voting period to pass."),(0,i.kt)("p",null,"Operations that are deemed safe or time critical by the Polkadot Technical Fellowship can use the\nWhitelisted Caller track. This track requires less turnout in the first half of the decision period\nso that it can pass more quickly. This track is typically used for more neutral, technical proposals\nlike runtime upgrades or changing the system's parachain validation configuration."),(0,i.kt)("p",null,"Using the Whitelisted Caller track requires some special calls. Submitting a referendum in the same\nform as other tracks will not work. Namely, rather than voting on a particular ",(0,i.kt)("inlineCode",{parentName:"p"},"proposal"),", the\nWhitelisted Caller track requires a vote to ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"proposal")," via the Whitelist pallet.\nBefore opening a referendum on this track, you should also attempt to get a positive signal from the\nFellowship that they will whitelist the proposal. If they do not, then even if the public referendum\npasses, it will not execute."),(0,i.kt)("p",null,"Below are the steps to follow when submitting a proposal to the Whitelist track."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#submitting-a-preimage"},"Submit a preimage")," with the call to ",(0,i.kt)("em",{parentName:"li"},"dispatch")," the proposal (",(0,i.kt)("inlineCode",{parentName:"li"},"call"),") you\nwant to submit -- ",(0,i.kt)("inlineCode",{parentName:"li"},"whitelist.dispatchWhitelistedCallWithPreimage(call)")," -- and obtain the preimage\nhash. This is the preimage for the ",(0,i.kt)("em",{parentName:"li"},"public referendum")," on the Whitelisted Caller track.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"preimage-whitelist",src:a(80474).Z,width:"2146",height:"1113"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Obtain the hash of ",(0,i.kt)("inlineCode",{parentName:"p"},"call"),". The Polkadot Fellowship needs to start a Fellowship referendum to\nwhitelist the call with ",(0,i.kt)("inlineCode",{parentName:"p"},"whitelist.whitelistCall(callHash)"),". The Fellowship referendum gets voted\non by the Polkadot Fellowship members only."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"call-hash",src:a(78249).Z,width:"2257",height:"858"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The public now votes on the referendum. Someone must place a decision deposit to go into the\ndeciding phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once passed, it gets enacted successfully as long as the call has been whitelisted by the\nFellowship."))),(0,i.kt)("p",null,"Note that the public referendum and Fellowship referendum can happen simultaneously. However, if the\nFellowship does not whitelist the call, you must submit it directly to the Root origin."),(0,i.kt)("h2",{id:"voting-on-referenda"},"Voting on Referenda"),(0,i.kt)("p",null,"As Polkadot OpenGov takes both the approval and support into account, there are four options to\nchoose from when voting on a referendum:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aye"),(0,i.kt)("li",{parentName:"ul"},"Nay"),(0,i.kt)("li",{parentName:"ul"},"Split"),(0,i.kt)("li",{parentName:"ul"},"Abstain")),(0,i.kt)("p",null,"Also, you have to specify the conviction multiplier for this vote. The longer you are willing to\nlock your tokens, the stronger your vote will be weighted. Unwillingness to lock your tokens means\nthat your vote only counts for 10% of the tokens that you hold."),(0,i.kt)("p",null,"For detailed instructions on how to vote on Polkadot OpenGov referenda, check\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000184120-polkadot-opengov-how-to-vote"},"this support guide.")),(0,i.kt)("admonition",{title:"Polkadot OpenGov uses Conviction Voting Pallet (Not Democracy Pallet)",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"convictionVoting.vote")," for voting on Referenda in Polkadot OpenGov instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"democracy.vote"),"\n(which only works for the old version of governance).")),(0,i.kt)("h3",{id:"removing-votes"},"Removing Votes"),(0,i.kt)("p",null,"To remove votes, you need to use the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics tab")," and\ncall the ",(0,i.kt)("inlineCode",{parentName:"p"},"removeVote")," function through the ",(0,i.kt)("inlineCode",{parentName:"p"},"convictionVoting")," pallet."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rm-vote",src:a(28422).Z,width:"2388",height:"594"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," is the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-origins"},"OpenGov track")," of the referendum you voted\non and the ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," is the referendum number."),(0,i.kt)("h3",{id:"removing-expired-voting-locks"},"Removing Expired Voting Locks"),(0,i.kt)("p",null,"To remove an expired lock, you need to use the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics tab")," and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"unlock")," function through\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"convictionVoting")," pallet. Note that if you voted on referenda in multiple tracks, the tokens\nwill be unlocked after removing votes and unlocking on all the tracks. Similarly, if you you\n",(0,i.kt)("a",{parentName:"p",href:"#delegations"},"delegated")," on multiple tracks, the funds will be unlocked after\n",(0,i.kt)("a",{parentName:"p",href:"#undelegate-votes"},"undelegating")," and unlocking on all the tracks."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rm-voting-lock",src:a(43577).Z,width:"2382",height:"684"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," is the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-origins"},"OpenGov track")," where you have the lock."),(0,i.kt)("p",null,"For additional instructions, check\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000184129-polkadot-js-ui-how-to-remove-expired-referenda-locks"},"this support guide.")),(0,i.kt)("h2",{id:"delegations"},"Delegations"),(0,i.kt)("admonition",{title:"Video Tutorial about Delegations using the Polkadot-JS UI",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/PNGs11EvCB0"},"this video tutorial")," to learn about how to delegate, modify\ndelegations and remove delegations using the Polkadot-JS UI.")),(0,i.kt)("p",null,"For an overview of how delegation works in Polkadot OpenGov, check out the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov#multirole-delegation"},"Multirole Delegation")," section on the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"Learn Polkadot OpenGov")," page."),(0,i.kt)("p",null,"Instructions to do delegations with Polkadot-JS are also available on the\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000184776-polkadot-js-ui-how-to-delegate-your-voting-power-on-polkadot-opengov"},"Support Pages"),"."),(0,i.kt)("h3",{id:"delegate-votes"},"Delegate Votes"),(0,i.kt)("p",null,'You can start delegating your votes by clicking the "Delegate" button on\n',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Governance > Referenda"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"js-delegation-start",src:a(90691).Z,width:"1055",height:"497"})),(0,i.kt)("p",null,"If it is the first time you delegate or vote, there will be a banner message. You can delegate on a\nsingle track or all the tracks. You have an option to specify the number of votes (i.e., the number\nof tokens) and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov#voluntary-locking"},"conviction multiplier"),'. After\nclicking "Next", you will need to specify the account to delegate your votes to, and after clicking\n"Delegate" and "Sign and Submit" your delegations will appear for each track (see below).'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"js-delegation-allTracks",src:a(62428).Z,width:"2116",height:"1438"})),(0,i.kt)("p",null,"Note that if you want to delegate just a few tracks, you have two options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Repeat the process using the "Delegate" button multiple times'),(0,i.kt)("li",{parentName:"ul"},"Issue a batch call with multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"convictionVoting.delegate")," extrinsics under\n",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/extrinsics"},"Developer > Extrinsics"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"js-delegation-delegate",src:a(54853).Z,width:"2694",height:"1104"})),(0,i.kt)("p",null,'By clicking on "Add item" you can add new extrinsics for multiple tracks.'),(0,i.kt)("h3",{id:"undelegate-votes"},"Undelegate Votes"),(0,i.kt)("p",null,'The "Delegate" button on ',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Governance > Referenda")," is only\nfor delegating votes. You cannot undelegate or modify your delegations. If you wish to undelegate,\nyou will need to go to ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Developer > Extrinsics")," and\nsubmit a ",(0,i.kt)("inlineCode",{parentName:"p"},"convictionVoting.undelegate")," extrinsic, specifying the track you wish to undelegate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"js-delegation-undelegate",src:a(9459).Z,width:"2708",height:"632"})),(0,i.kt)("p",null,'Undelegated tracks will show up as "0 votes" on the Delegate tab.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"js-delegation-undelegate",src:a(93996).Z,width:"2128",height:"1432"})),(0,i.kt)("p",null,"After you undelegated, the conviction lock will start the countdown, and your funds will be\navailable for unlocking after the countdown ends."),(0,i.kt)("h3",{id:"remove-expired-locks-from-delegations"},"Remove Expired Locks from Delegations"),(0,i.kt)("p",null,"To remove expired locks from delegations, you can\n",(0,i.kt)("a",{parentName:"p",href:"#removing-expired-voting-locks"},"follow the same procedure as how to remove expired voting locks"),"."),(0,i.kt)("h3",{id:"modify-your-delegations"},"Modify your Delegations"),(0,i.kt)("p",null,'The "Delegate" button on ',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Governance > Referenda")," is only\nfor delegating votes. You cannot undelegate or modify your delegations. If you wish to update the\ndelegated account, the conviction, and the number of votes you will need to go to\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Developer > Extrinsics"),", ",(0,i.kt)("a",{parentName:"p",href:"#undelegate-votes"},"undelegate"),"\nthe track and ",(0,i.kt)("a",{parentName:"p",href:"#delegate-votes"},"delegate")," again with updated information."),(0,i.kt)("h2",{id:"claiming-opengov-deposits"},"Claiming OpenGov Deposits"),(0,i.kt)("admonition",{title:"Video Tutorial about OpenGov deposits using the Polkadot-JS UI",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/kkEq5cqW2Pk"},"this video tutorial")," to learn about how to claim OpenGov deposits\nusing the Polkadot-JS UI.")),(0,i.kt)("h3",{id:"claiming-the-preimage-and-decision-deposits"},"Claiming the Preimage and Decision Deposits"),(0,i.kt)("p",null,"After a referendum finishes its life cycle (and gets approved or rejected or timed out), the\npreimage and decision deposits can be claimed. For claiming the preimage deposit, navigate to\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/preimages"},"Polkadot-JS UI > Governance > Preimages")," and click on\nunnote button shown on the preimage you submitted."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Claim Preimage Deposit",src:a(80560).Z,width:"2828",height:"362"})),(0,i.kt)("p",null,"Similarly, to claim the decision deposit, navigate to\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Polkadot-JS UI > Governance > Referenda")," and scroll down\nto the end of the page to click on the referenda with the decision deposit and claim it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Claim Referendum Deposits",src:a(62248).Z,width:"2830",height:"444"})),(0,i.kt)("h3",{id:"claiming-the-referendum-submission-deposit"},"Claiming the Referendum Submission Deposit"),(0,i.kt)("p",null,"The submission deposit for a referendum can be claimed\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/cfb29254f74412cea35e8048d8aea94bc789fcb1/substrate/frame/referenda/src/types.rs#L261"},"only if the referendum was ",(0,i.kt)("inlineCode",{parentName:"a"},"Approved")," or ",(0,i.kt)("inlineCode",{parentName:"a"},"Canceled")),".\nThe submission deposit can be claimed by issuing the ",(0,i.kt)("inlineCode",{parentName:"p"},"refundSubmissionDeposit")," extrinsic."),(0,i.kt)("p",null,"Users can not refund their submission deposit while the referendum is ",(0,i.kt)("inlineCode",{parentName:"p"},"Ongoing")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Rejected"),".\nSimilarly, users cannot refund their submission deposit if the proposal has ",(0,i.kt)("inlineCode",{parentName:"p"},"TimedOut")," (failing to\nsubmit the decision deposit within a\n",(0,i.kt)(r.Z,{network:"polkadot",path:"const.referenda.undecidingTimeout",defaultValue:201600,filter:"blocksToDays",mdxType:"RPC"}),"","-day\nperiod will lead to a referendum timeout). This behavior exists so that users can refrain from\nspamming the chain with proposals that have no interest from the community. If a proposal is in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"TimedOut")," state, any user can call ",(0,i.kt)("inlineCode",{parentName:"p"},"slash_proposal_deposit"),", which will move the funds from the\nuser to a runtime-configured account, like the treasury."),(0,i.kt)("p",null,"To refund your slashed deposit, you can start a new referendum and specifically request a refund\nfrom the treasury. You need to make sure you have enough balance for a new submission and decision\ndeposit, and you will need to select the right track to ask for a refund. For example, the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-origins#small-tipper"},"Small Tipper Track")," would be fine for any kind of\ndeposit refund up to 250 DOT."),(0,i.kt)("h2",{id:"cancel-or-kill-a-referendum"},"Cancel or Kill a Referendum"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Anybody can cancel an ongoing referendum (i.e., a referendum within the Lead-in or\nvoting/confirmation period). For more information about the referenda timeline in Polkadot OpenGov,\nsee the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov#referenda-timeline"},"dedicated page"),"."),(0,i.kt)("p",{parentName:"admonition"},"To successfully cancel a referendum through the track ",(0,i.kt)("inlineCode",{parentName:"p"},"20 / Referendum Canceller"),", you will need to\nattain\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-origins#referendum-canceller"},"specific approval and support levels"),".")),(0,i.kt)("p",null,"To cancel a referendum, you need first to submit a preimage with the ",(0,i.kt)("inlineCode",{parentName:"p"},"referenda.cancel")," extrinsic.\nGo to the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Polkadot-JS UI > Governance > Referenda"),' and\nclick on the "Add Preimage" button. You must specify the ',(0,i.kt)("inlineCode",{parentName:"p"},"referenda.cancel")," extrinsic with the index\nequal to the ongoing Referendum you wish to cancel. In the screenshot below, the Referendum to be\ncancelled is 249."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cancel-referenda-preimage-creation",src:a(78996).Z,width:"2144",height:"944"})),(0,i.kt)("p",null,"This call will cancel the referendum and return the deposit. You can also kill a referendum using\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"referenda.kill")," extrinsic. This will cancel the referendum and slash the deposit."),(0,i.kt)("admonition",{title:"Preimage Submission Deposit",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A deposit is required for the preimage to be stored on chain. The preimage deposit is proportional\nto the amount of information stored within the preimage. The deposit amount required for a preimage\nwith a treasury spend transaction is around\n41 DOT. Ensure you have enough account\nbalance to pay for this submission deposit as well as the transaction fees.")),(0,i.kt)("p",null,"Once a preimage is submitted, it can be checked under\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/preimages"},"Governance > Preimages"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cancel-referenda-preimage-check",src:a(16212).Z,width:"2758",height:"190"})),(0,i.kt)("p",null,"You must copy the preimage to use it when you submit your proposal. To submit the proposal to cancel\nreferendum 249, for example, you need to go under\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Governance > Referenda"),' and click the "Submit Proposal"\nbutton.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cancel-referenda-proposal",src:a(81405).Z,width:"2130",height:"1226"})),(0,i.kt)("p",null,"You must specify the account to submit the proposal (this can differ from the account used to create\nthe preimage). Then you will need to specify the track ",(0,i.kt)("inlineCode",{parentName:"p"},"20 / Referendum Canceller")," and add the\npreimage hash containing the specific action that will be enacted if the referendum passes. Note\nthat a submission deposit of\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.referenda.submissionDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),"","\nwill be reserved for submitting the proposal."),(0,i.kt)("p",null,"Once the proposal has been submitted, it will stay in the Lead-in period until there is enough space\nwithin the track, and a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-origins#polkadot-opengov-terminology-and-parameters"},"track-dependent preparation period and decision deposit"),"\nhave been met. Failing to submit the decision deposit within a\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.referenda.undecidingTimeout",defaultValue:201600,filter:"blocksToDays",mdxType:"RPC"}),"","-day\nperiod will lead to a referendum timeout."))}k.isMDXComponent=!0},16212:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/cancel-referenda-preimage-check-45ef7f984450113a2b1a87e9e2751d69.png"},78996:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/cancel-referenda-preimage-creation-3923463db47aec298f74a426dba23166.png"},81405:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/cancel-referenda-proposal-b9c5e90784ec8216360053d8bda84980.png"},80560:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/claim-preimage-deposit-069843b91eba35d4829b237b59ab2d12.png"},62248:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/claim-referendum-decision-deposit-6352bbad189dac6fe7a651b5a3c8f5a5.png"},78249:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/encoded-call-hash-4e0347923993beea4d12d5a787649f8f.png"},80474:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/opengov-submit-preimage-whitelist-67d383745b6e7b3ef31a37567e044e80.png"},10579:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/opengov-submit-preimage-ddb9c9c348a6c169f24bf70b9439712e.png"},31993:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/opengov-submit-proposal-0c82b35f3f7b1d9e66130a621b76c44b.png"},62428:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/js-delegation-allTracks-788efa580f296aa78b65b77691570181.png"},54853:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/js-delegation-delegate-3bcce735bcc35b831079cd44ad0eef15.png"},90691:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/js-delegation-start-c8186f8875fd402b993abfd5ab09f515.png"},9459:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/js-delegation-undelegate-a5018d2ecd2d5523f711199cd6fa1e63.png"},93996:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/js-delegation-undelegated-9b5efde53d2016c4e4b1f0f6b651ecf5.png"},28422:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/rm-vote-8572ff30a00c8d6fe903fae7a39147f4.png"},43577:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/rm-voting-lock-214119c2fcfe92488190b321cdfe823a.png"},46601:()=>{}}]);