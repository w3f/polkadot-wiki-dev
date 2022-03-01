"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=h(n),p=o,m=u["".concat(s,".").concat(p)]||u[p]||c[p]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var h=2;h<i;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89501:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>h,toc:()=>d,default:()=>u});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"learn-auction",title:"Parachain Slots Auction",sidebar_label:"Parachain Slots Auction",description:"Learn about slot auctions.",slug:"../learn-auction"},s=void 0,h={unversionedId:"learn/learn-auction",id:"learn/learn-auction",title:"Parachain Slots Auction",description:"Learn about slot auctions.",source:"@site/../docs/learn/learn-auction.md",sourceDirName:"learn",slug:"/learn-auction",permalink:"/ru-RU/docs/learn-auction",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-auction.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1646152438,formattedLastUpdatedAt:"01.03.2022",frontMatter:{id:"learn-auction",title:"Parachain Slots Auction",sidebar_label:"Parachain Slots Auction",description:"Learn about slot auctions.",slug:"../learn-auction"},sidebar:"docs",previous:{title:"Common Good Parachains",permalink:"/ru-RU/docs/learn-common-goods"},next:{title:"Parachain Crowdloans",permalink:"/ru-RU/docs/learn-crowdloans"}},d=[{value:"Mechanics of a Candle Auction",id:"mechanics-of-a-candle-auction",children:[{value:"Randomness in action",id:"randomness-in-action",children:[],level:3}],level:2},{value:"Rationale",id:"rationale",children:[],level:2},{value:"Polkadot Implementation",id:"polkadot-implementation",children:[],level:2},{value:"Bidding",id:"bidding",children:[{value:"Examples",id:"examples",children:[],level:3}],level:2},{value:"FAQ",id:"faq",children:[{value:"Why doesn&#39;t everyone bid for the max length?",id:"why-doesnt-everyone-bid-for-the-max-length",children:[],level:3},{value:"How does this mechanism help ensure parachain diversity?",id:"how-does-this-mechanism-help-ensure-parachain-diversity",children:[],level:3},{value:"Why is randomness difficult on blockchains?",id:"why-is-randomness-difficult-on-blockchains",children:[],level:3},{value:"Are there other ways of acquiring a slot besides the candle auction?",id:"are-there-other-ways-of-acquiring-a-slot-besides-the-candle-auction",children:[],level:3}],level:2},{value:"Resources",id:"resources",children:[],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For a ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-parachains"},"parachain")," to be added to Polkadot it must inhabit one of the available\nparachain slots. A parachain slot is a scarce resource on Polkadot and only a limited number will be\navailable. As parachains ramp up, there may only be a few slots that are unlocked every few months.\nThe goal is to eventually have 100 parachain slots available on Polkadot\n(these will be split between parachains and the\n",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-parathreads"},"parathread pool"),"). If a parachain wants to have guaranteed block inclusion at\nevery Relay Chain block, it must acquire a parachain slot."),(0,i.kt)("p",null,"The parachain slots will be sold according to an unpermissioned\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Candle_auction"},"candle auction")," that has been slightly modified to be\nsecure on a blockchain."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/i5-Rw2Sf7-w"},(0,i.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/i5-Rw2Sf7-w/0.jpg",alt:"A Beginner's guide to Parachain Slot Auctions"}))),(0,i.kt)("h2",{id:"mechanics-of-a-candle-auction"},"Mechanics of a Candle Auction"),(0,i.kt)("p",null,"Candle auctions are a variant of open auctions where bidders submit bids that are increasingly\nhigher and the highest bidder at the conclusion of the auction is considered the winner."),(0,i.kt)("p",null,'Candle auctions were originally employed in 16th century for the sale of ships and get their name\nfrom the "inch of a candle" that determined the open period of the auction. When the flame\nextinguished and the candle went out, the auction would suddenly terminate and the standing bid at\nthat point would win.'),(0,i.kt)("p",null,"When candle auctions are used online, they require a random number to decide the moment of\ntermination. Parachain slot auctions differ slightly from a normal candle auction in that they do\nnot randomly terminate the auction. Instead, they run for an entire fixed duration and the winner is\nchosen retroactively."),(0,i.kt)("p",null,"The candle auction on Polkadot is split into two parts: the ",(0,i.kt)("em",{parentName:"p"},"opening period")," which is in effect\nimmediately after the auction starts. This period lasts for one day and eighteen hours and serves as\na buffer time for parachain candidates to setup their initial bids, and likely start executing their\nstrategy on how to win the slot auction. During the opening phase, bids will continue to be\naccepted, but they do not have any effect on the outcome of the auction."),(0,i.kt)("p",null,"The opening period then transitions into an ",(0,i.kt)("em",{parentName:"p"},"ending period")," of five days, where the auction is\nsubject to end based on the candle auction mechanism."),(0,i.kt)("p",null,"The auction\u2019s ending time can be any time within this ending period, and is automatically and\nrandomly chosen by the ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-randomness##vrf"},"Verifiable Random Function (VRF)"),". The probability\nof winning the auction is equal to the number of blocks with a winning bid divided by the total\nnumber of blocks in the ending period. The random ending is managed by propagating through the\nentire ending period, where a snapshot is taken at each block within the ending period to capture\nthe winners during that block. At the end of the period, one of the snapshots is randomly selected\nto determine the winner of the auction."),(0,i.kt)("p",null,"This process is executed in the next epoch (which lasts for six hours on Polkadot) after the ending\nperiod. ",(0,i.kt)("strong",{parentName:"p"},"The parachain candidate with the highest bid at the ending time chosen by the VRF wins the\nslot auction"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-crowdloans##supporting-a-crowdloan-campaign"},"Crowdloan contributions")," cannot be made\nduring these six hours when the winning block for the auction is being determined on-chain.")),(0,i.kt)("p",null,"With one day and eighteen hours for the starting period, five days for the ending period (candle\nauction phase) and six hours for determining the auction winner, a parachain auction on Polkadot\nlasts exactly one week from the start."),(0,i.kt)("p",null,"More details on this is available in the ",(0,i.kt)("a",{parentName:"p",href:"#polkadot-implementation"},"Polkadot Implementation"),"\nsection."),(0,i.kt)("h3",{id:"randomness-in-action"},(0,i.kt)("a",{parentName:"h3",href:"/ru-RU/docs/learn-randomness"},"Randomness")," in action"),(0,i.kt)("p",null,"The following example will showcase the randomness mechanics of the candle auction for the ninth\nauction on Kusama. Keep in mind that the candle phase has a uniform termination profile and has an\nequal probability of ending at any given block, and the termination block cannot be predicted before\nor during the auction."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Auction 9 starts at\n",(0,i.kt)("a",{parentName:"li",href:"https://kusama.subscan.io/extrinsic/0x7b67d653c9522b623a97e20a967b83a8517fe3821370475ddb6611cd37c29a03?event=9335014-26"},(0,i.kt)("inlineCode",{parentName:"a"},"block 9362014")),".",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"The auction has a full duration equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"block 9362014")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"72000"),". Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"block 72000"),' is the\n"ending period", which is divided into ',(0,i.kt)("strong",{parentName:"p"},"3600 samples of 20 blocks"),". Figuratively, the candle\nis lit, and the candle phase lasts for 72,000 blocks."))),(0,i.kt)("li",{parentName:"ul"},"The winning sample during the ending period turned out to have the ",(0,i.kt)("inlineCode",{parentName:"li"},"index 1078"),".",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Sample 1078 refers to the winner as of ",(0,i.kt)("inlineCode",{parentName:"p"},"block 9362014 + 21560"),", which equals\n",(0,i.kt)("a",{parentName:"p",href:"https://kusama.subscan.io/block/9383574"},(0,i.kt)("inlineCode",{parentName:"a"},"block 9383574")),"."))),(0,i.kt)("li",{parentName:"ul"},"The parent block was a new BABE session in the 'Logs', which updated the randomness that was used\nto select that ",(0,i.kt)("a",{parentName:"li",href:"https://kusama.subscan.io/block/9434277"},"sample index"),".",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"You'd be able to inspect the state at the end of ",(0,i.kt)("inlineCode",{parentName:"p"},"block 9434277")," and see the sample indices with\nan ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/maintain-sync####types-of-nodes"},"archive node"),". The digest in the 'Logs' of\n",(0,i.kt)("inlineCode",{parentName:"p"},"9434277")," is decodable and contains the random value as well as the BABE authorities."))),(0,i.kt)("li",{parentName:"ul"},"As a result, the winner of this auction did not turn out to be the highest bid during the full\nduration.")),(0,i.kt)("h2",{id:"rationale"},"Rationale"),(0,i.kt)("p",null,"The open and transparent nature of blockchain systems opens attack vectors that are non-existent in\ntraditional auction formats. Normal open auctions in particular can be vulnerable to ",(0,i.kt)("em",{parentName:"p"},"auction\nsniping")," when implemented over the internet or on a blockchain."),(0,i.kt)("p",null,"Auction sniping takes place when the end of an auction is known and bidders are hesitant to bid\ntheir true price early, in hopes of paying less than they actually value the item."),(0,i.kt)("p",null,"For example, Alice may value an item at auction for 30 USD. She submits an initial bid of 10 USD in\nhopes of acquiring the items at a lower price. Alice's strategy is to place incrementally higher\nbids until her true value of 30 USD is exceeded. Another bidder Eve values the same item at 11 USD.\nEve's strategy is to watch the auction and submit a bid of 11 USD at the last second. Alice will\nhave no time to respond to this bid before the close of the auction and will lose the item. The\nauction mechanism is sub-optimal because it has not discovered the true price of the item and the\nitem has not gone to the actor who valued it the most."),(0,i.kt)("p",null,"On blockchains this problem may be even worse, since it potentially gives the producer of the block\nan opportunity to snipe any auction at the last concluding block by adding it themselves and/or\nignoring other bids. There is also the possibility of a malicious bidder or a block producer trying\nto ",(0,i.kt)("em",{parentName:"p"},"grief")," honest bidders by sniping auctions."),(0,i.kt)("p",null,"For this reason, ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Vickrey_auction"},"Vickrey auctions"),", a variant of\nsecond price auction in which bids are hidden and only revealed in a later phase, have emerged as a\nwell-regarded mechanic. For example, it is implemented as the mechanism to auction human readable\nnames on the ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/ens"},"ENS"),". The Candle auction is another solution that does not need the\ntwo-step commit and reveal schemes (a main component of Vickrey auctions), and for this reason\nallows smart contracts to participate."),(0,i.kt)("p",null,"Candle auctions allow everyone to always know the states of the bid, but not when the auction will\nbe determined to have ended. This helps to ensure that bidders are willing to bid their true bids\nearly. Otherwise, they might find themselves in the situation that the auction was determined to\nhave ended before they even bid."),(0,i.kt)("h2",{id:"polkadot-implementation"},"Polkadot Implementation"),(0,i.kt)("p",null,"Polkadot will use a ",(0,i.kt)("em",{parentName:"p"},"random beacon")," based on the VRF that's used also in other places of the\nprotocol. The VRF will provide the base of the randomness, which will retroactively determine the\nend-time of the auction."),(0,i.kt)("p",null,"The slot durations are capped to 2 years and divided into 3-month periods\n; Parachains may lease a slot for any\ncombination of periods of the slot duration. Parachains may lease more than one slot over time,\nmeaning that they could extend their lease to Polkadot past the maximum duration by leasing a\ncontiguous slot."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Individual parachain slots are fungible. This means that parachains do not need to always\ninhabit the same slot, but as long as a parachain inhabits any slot it can continue as a\nparachain.")),(0,i.kt)("h2",{id:"bidding"},"Bidding"),(0,i.kt)("p",null,"Parachains, or parachain teams, can bid in the auction by specifying the slot range that they want\nto lease as well as the number of tokens they are willing to reserve. Bidders can be either ordinary\naccounts, or use the ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-crowdloans"},"crowdloan functionality")," to source tokens from the\ncommunity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Parachain slots at genesis\n\n       --3 months--\n       v          v\nSlot A |     1    |     2     |     3     |     4     |     5     |     6    |     7     |     8     |     9     |...\nSlot B |     1    |     2     |     3     |     4     |     5     |     6    |     7     |     8     |     9     |...\nSlot C |__________|     1     |     2     |     3     |     4     |     5    |     6     |     7     |     8     |     9     |...\nSlot D |__________|     1     |     2     |     3     |     4     |     5    |     6     |     7     |     8     |     9     |...\nSlot E |__________|___________|     1     |     2     |     3     |     4    |     5     |     6     |     7     |     8     |     9     |...\n       ^                                                                                             ^\n       ---------------------------------------------max lease-----------------------------------------\n\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Each period of the range 1 - 4 represents a\n3-month duration for a total of 2 years\n")),(0,i.kt)("p",null,"Bidders will submit a configuration of bids specifying the token amount they are willing to bond and\nfor which periods. The slot ranges may be any of the periods 1 - ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," is the number of\nperiods available for a slot (",(0,i.kt)("inlineCode",{parentName:"p"},"n")," will be 8 for both Polkadot and Kusama)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please note: If you bond tokens with a parachain slot, you cannot stake with those tokens. In this\nway, you pay for the parachain slot by forfeiting the opportunity to earn staking rewards.")),(0,i.kt)("p",null,"A bidder configuration for a single bidder may look like the following pseudocode example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const bids = [\n  {\n    range: [1, 2, 3, 4, 5, 6, 7, 8],\n    bond_amount: 300,\n  },\n  {\n    range: [1, 2, 3, 4],\n    bond_amount: 777,\n  },\n  {\n    range: [2, 3, 4, 5, 6, 7],\n    bond_amount: 450,\n  },\n];\n")),(0,i.kt)("p",null,"The important concept to understand from this example is that bidders may submit different\nconfigurations at different prices (",(0,i.kt)("inlineCode",{parentName:"p"},"bond_amount"),"). However, only one of these bids would be\neligible to win exclusive of the others."),(0,i.kt)("p",null,"The winner selection algorithm will pick bids that may be non-overlapping in order to maximize the\namount of tokens held over the entire lease duration of the parachain slot. This means that the\nhighest bidder for any given slot lease period might not always win (see the\n",(0,i.kt)("a",{parentName:"p",href:"#examples"},"example below"),")."),(0,i.kt)("p",null,"A random number, which is based on the VRF used by Polkadot, is determined at each block.\nAdditionally, each auction will have a threshold that starts at 0 and increases to 1. The random\nnumber produced by the VRF is examined next to the threshold to determine if that block is the end\nof the auction within the so-called ",(0,i.kt)("em",{parentName:"p"},"ending period"),". Additionally, the VRF will pick a block from\nthe last epoch to take the state of bids from (to mitigate some types of attacks from malicious\nvalidators)."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"There is one parachain slot available."),(0,i.kt)("p",null,"Charlie bids ",(0,i.kt)("inlineCode",{parentName:"p"},"75")," for the range 1 - 8."),(0,i.kt)("p",null,"Dave bids ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," for the range 5 - 8."),(0,i.kt)("p",null,"Emily bids ",(0,i.kt)("inlineCode",{parentName:"p"},"40")," for the range 1 - 4."),(0,i.kt)("p",null,"Let's calculate each bidder's valuation according to the algorithm. We do this by multiplying the\nbond amount by the number of periods in the specified range of the bid."),(0,i.kt)("p",null,"Charlie - 75 ","*"," 8 = 600 for range 1 - 8"),(0,i.kt)("p",null,"Dave - 100 ","*"," 4 = 400 for range 5 - 8"),(0,i.kt)("p",null,"Emily - 40 ","*"," 4 = 160 for range 1 - 4"),(0,i.kt)("p",null,"Although Dave had the highest bid in accordance to token amount, when we do the calculations we see\nthat since he only bid for a range of 4, he would need to share the slot with Emily who bid much\nless. Together Dave's and Emily's bids only equals a valuation of ",(0,i.kt)("inlineCode",{parentName:"p"},"560"),"."),(0,i.kt)("p",null,"Charlie's valuation for the entire range is ",(0,i.kt)("inlineCode",{parentName:"p"},"600"),". Therefore Charlie is awarded the complete range\nof the parachain slot."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"why-doesnt-everyone-bid-for-the-max-length"},"Why doesn't everyone bid for the max length?"),(0,i.kt)("p",null,"For the duration of the slot the tokens bid in the auction will be locked up. This means that there\nare opportunity costs from the possibility of using those tokens for something else. For parachains\nthat are beneficial to Polkadot, this should align the interests between parachains and the Polkadot\nRelay Chain."),(0,i.kt)("h3",{id:"how-does-this-mechanism-help-ensure-parachain-diversity"},"How does this mechanism help ensure parachain diversity?"),(0,i.kt)("p",null,"The method for dividing the parachain slots into intervals was partly inspired by the desire to\nallow for a greater amount of parachain diversity, and prevent particularly large and well-funded\nparachains from hoarding slots. By making each period a three-month duration but the\noverall slot a 2-year duration, the mechanism can cope with well-funded parachains that will ensure they secure\na slot at the end of their lease, while gradually allowing other parachains to enter the ecosystem\nto occupy the durations that are not filled. For example, if a large, well-funded parachain has\nalready acquired a slot for range 1 - 8, they would be very interested in getting the next slot that\nwould open for 2 - 9. Under this mechanism that parachain could acquire just the period 9 (since\nthat is the only one it needs) and allow range 2 - 8 of the second parachain slot to be occupied by\nanother."),(0,i.kt)("h3",{id:"why-is-randomness-difficult-on-blockchains"},"Why is randomness difficult on blockchains?"),(0,i.kt)("p",null,"Randomness is problematic for blockchain systems. Generating a random number trustlessly on a\ntransparent and open network in which other parties must be able to verify opens the possibility for\nactors to attempt to alter or manipulate the randomness. There have been a few solutions that have\nbeen put forward, including hash-onions like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/randao/randao"},"RANDAO")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Verifiable_random_function"},"verifiable random functions")," (VRFs). The\nlatter is what Polkadot uses as a base for its randomness."),(0,i.kt)("h3",{id:"are-there-other-ways-of-acquiring-a-slot-besides-the-candle-auction"},"Are there other ways of acquiring a slot besides the candle auction?"),(0,i.kt)("p",null,"Another way, besides the candle auction, to acquire a parachain slot is through a secondary market\nwhere an actor who has already won a parachain slot can resell the slot along with the associated\ndeposit of tokens that is locked up to another buyer. This would allow the seller to get liquid\ntokens in exchange for the parachain slot and the buyer to acquire the slot as well as the deposited\ntokens."),(0,i.kt)("p",null,"A number of system or common-good parachains may be granted slots by the\n",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-governance"},"governing bodies")," of the Relay Chain. System parachains can be recognized by a\nparachain ID lower than 1_000, and common-good parachains by a parachain ID between 1_000 and 1_999.\nOther parachains will have IDs 2_000 or higher. Such parachains would not have to bid for or renew\ntheir slots as they would be considered essential to the ecosystem's future."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://w3f-research.readthedocs.io/en/latest/polkadot/overview/3-parachain-allocation.html"},"Parachain Allocation")," -\nW3F research page on parachain allocation that goes more in depth to the mechanism"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/research-update-the-case-for-candle-auctions/"},"Research Update: The Case for Candle Auctions")," -\nW3F breakdown and research update about candle auctions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3846363"},"Front-Running, Smart Contracts, and Candle Auctions"),"\nW3F Research team discusses how to remedy current blockchain auction setbacks with candle auctions")))}u.isMDXComponent=!0}}]);