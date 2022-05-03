"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2248],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>u});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},h=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=d(o),u=a,m=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return o?n.createElement(m,l(l({ref:t},h),{},{components:o})):n.createElement(m,l({ref:t},h))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<i;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},92916:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=o(87462),a=o(63366),i=(o(67294),o(3905)),l=["components"],r={id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Learn about Nomination Pools and their features",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"},s=void 0,d={unversionedId:"learn/learn-nomination-pools",id:"learn/learn-nomination-pools",title:"Nomination Pools",description:"Learn about Nomination Pools and their features",source:"@site/../docs/learn/learn-nomination-pools.md",sourceDirName:"learn",slug:"/learn-nomination-pools",permalink:"/docs/learn-nomination-pools",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-nomination-pools.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1651578203,formattedLastUpdatedAt:"5/3/2022",frontMatter:{id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Learn about Nomination Pools and their features",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"},sidebar:"docs",previous:{title:"Staking FAQ",permalink:"/docs/learn-staking-faq"},next:{title:"Availability and Validity",permalink:"/docs/learn-availability"}},h={},c=[{value:"Key Components of Nomination Pools",id:"key-components-of-nomination-pools",level:2},{value:"Delegator Lifecycle",id:"delegator-lifecycle",level:2},{value:"Join a pool",id:"join-a-pool",level:3},{value:"Claim rewards",id:"claim-rewards",level:3},{value:"Unbond funds",id:"unbond-funds",level:3},{value:"Withdraw unbonded funds",id:"withdraw-unbonded-funds",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Pool Administration",id:"pool-administration",level:2},{value:"States",id:"states",level:3},{value:"Roles:",id:"roles",level:3},{value:"Pool Lifecycle",id:"pool-lifecycle",level:2},{value:"Creation",id:"creation",level:3},{value:"Upkeep",id:"upkeep",level:3},{value:"Destruction",id:"destruction",level:3},{value:"Slashing",id:"slashing",level:2}],p={toc:c};function u(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/10694"},"Nomination pools")," are one of the key\n(expertimental) features from the roadmap of\n",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/kianenigma/aa835946455b9a3f167821b9d05ba376"},"Staking improvements")," on\nPolkadot. They are designed to permissionlessly allow users (delegators) to pool their funds\ntogether and act as a single nominator account. Due to the current runtime constraints, Polkadot can\nonly handle 22,500 nominators comfortably in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nominator#staking-election-stages"},"electing set"),". As one of the objectives of the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"NPoS algorithm")," is to maximize the overall stake on the network, it can be\ninferred that the staking system on Polkadot favors nominators with a larger stake. Only the\nnomiator accounts which back the Validators in the active set are eligible for receiving staking\nrewards. This leaves out nomination intents from the accounts with lower DOT balance than the\nmin-active nomination and places them in a waiting queue to enter electing set. Nomination pools\nwill be handy to the users (delegators) who would like to participate the staking system with a\nstake much lower than the dynamic min-active nomination threshold on the network. All operations are\nconstant space and time complexity relative to the number of delegators, eliminating any theoretical\nupper bound on the quantity of delegators the system can handle and thus scaling the number of\naccounts that can participate and earn rewards in the staking system on Polkadot."),(0,i.kt)("p",null,"The earnings of the pool are split pro rata to a delegators stake in the bonded pool (and thus the\nstaking rewards for delegators will be the same as if they were a nominator). Importantly, slashes\nare also applied proportionally to delegators who may have been actively bonded when a validator\ncommitted a slashable offence."),(0,i.kt)("h2",{id:"key-components-of-nomination-pools"},"Key Components of Nomination Pools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bonded Pool: Tracks the distribution of actively staked funds."),(0,i.kt)("li",{parentName:"ul"},"Reward Pool: Tracks rewards earned by actively staked funds."),(0,i.kt)("li",{parentName:"ul"},"Unbonding Sub Pools: Collection of pools at different phases (i.e. eras) of the unbonding\nlifecycle."),(0,i.kt)("li",{parentName:"ul"},"Delegators: Accounts that are members of pools."),(0,i.kt)("li",{parentName:"ul"},"Point: A unit of measure for a delegator\u2019s portion of a pool's funds.")),(0,i.kt)("h2",{id:"delegator-lifecycle"},"Delegator Lifecycle"),(0,i.kt)("h3",{id:"join-a-pool"},"Join a pool"),(0,i.kt)("p",null,"A user delegates funds to a pool by transferring some amount to the pool\u2019s bonded account with the\njoin extrinsic. The pool then increases its bond with the new funds. A delegator is afforded the\nability to bond additional funds and rewards as long as they are already actively bonded. Note that\na delegator may only belong to one pool at a time."),(0,i.kt)("h3",{id:"claim-rewards"},"Claim rewards"),(0,i.kt)("p",null,"The delegator can claim their portion of any rewards that have accumulated since the previous time\nthey claimed (or in the case that they have never claimed, any rewards that have accumulated since\nthe era after they joined). Rewards are split pro rata among the actively bonded delegators."),(0,i.kt)("h3",{id:"unbond-funds"},"Unbond funds"),(0,i.kt)("p",null,"At any point in time after joining the pool, a delegator can start the process of exiting by\nunbonding. unbond_other will unbond all of the delegators funds. Once this call is made, the\ndelegator will no longer be eligible to claim rewards."),(0,i.kt)("h3",{id:"withdraw-unbonded-funds"},"Withdraw unbonded funds"),(0,i.kt)("p",null,"After unbond_other has been called and the unbonding duration has passed (e.g. 28 days on Polkadot),\na delegator may withdraw their funds with withdraw_unbonded_other. Withdrawing effectively ends a\ndelegator\u2019s relationship with their pool, allowing them to join a different pool if desired."),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A delegator cannot vote with their delegated funds. This can be changed in the future once\naccounts are afforded the ability to split votes."),(0,i.kt)("li",{parentName:"ul"},"In order for a delegator to switch pools they must wait for the normal 28 day unbonding process."),(0,i.kt)("li",{parentName:"ul"},"A delegator cannot partially unbond funds. This functionality may be added in the future.")),(0,i.kt)("h2",{id:"pool-administration"},"Pool Administration"),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open: The pool is open to be joined by anyone."),(0,i.kt)("li",{parentName:"ul"},"Blocked: The pool is blocked; no joiners are permitted."),(0,i.kt)("li",{parentName:"ul"},"Destroying: The pool is in the process of being destroyed. Once in this state the pool may never\nrevert to any other state; it can only proceed to being destroyed. All delegators can be\npermissionlesly unbonded; this allows the pool to be dismantled regardless of any individual\ndelegator\u2019s proactivity.")),(0,i.kt)("h3",{id:"roles"},"Roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Depositor: Creates the pool and is the initial delegator. The depositor can only leave the pool\nonce all other delegators have left. Once they leave by withdrawing, the pool is fully removed\nfrom the system."),(0,i.kt)("li",{parentName:"ul"},"Nominator: Can select the validators the pool nominates."),(0,i.kt)("li",{parentName:"ul"},"State-Toggler: Can change the pool\u2019s state and kick (permissionlessly unbond/withdraw) delegators\nif the pool is blocked."),(0,i.kt)("li",{parentName:"ul"},"Root: Can change the nominator, state-toggler, or itself. Further, it can perform any of the\nactions the nominator or state-toggler can.")),(0,i.kt)("h2",{id:"pool-lifecycle"},"Pool Lifecycle"),(0,i.kt)("h3",{id:"creation"},"Creation"),(0,i.kt)("p",null,"The depositor calls the create extrinsic, setting the administrative roles and transferring some\nfunds to the pool in order to add themselves as the first delegator. As stated above, the depositor\nmust always be a delegator as long as the pool exists; they will be the last delegator to leave,\nensuring they always have some skin in the game. The pool\u2019s \u2018nominator role\u2019 selects validators with\nthe nominate extrinsic."),(0,i.kt)("h3",{id:"upkeep"},"Upkeep"),(0,i.kt)("p",null,"The nominator can update the pool\u2019s validator selection. The state-toggler can update the pool\u2019s\nstate to blocked, then kick delegators by calling unbond_other and withdraw_unbonded_other. (The\nstate can also be toggled back to open). The root can change itself, the state-toggler or the\nnominator at any time."),(0,i.kt)("h3",{id:"destruction"},"Destruction"),(0,i.kt)("p",null,"A pool can be pushed into the \u201cdestroying\u201d state via one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The state-toggler sets the pool to \u201cdestroying\u201d."),(0,i.kt)("li",{parentName:"ul"},"Any account can set the pool to destroying if over 90% of the pool's active bonded balance has\nbeen slashed. Dismantling a destroying pool:"),(0,i.kt)("li",{parentName:"ul"},"When a pool is in \u2018destroying\u2019 state, unbond_other and withdraw_unbonded_other become\npermissionless, so anyone can help all the delegators exit."),(0,i.kt)("li",{parentName:"ul"},"Once the depositor withdraws, no delegators belong to the pool, and all the pool\u2019s resources are\nwiped from state.")),(0,i.kt)("h2",{id:"slashing"},"Slashing"),(0,i.kt)("p",null,"If a pool\u2019s underlying nomination account is slashed by the staking system, then the slash is\ndistributed evenly across the bonded pool and the unbonding pools from slash era+1 through the slash\napply era. Thus, any delegator who either a) was unbonding or b) was actively bonded in the\naforementioned range of eras will be affected by the slash. In other words, a delegator who may have\nbeen actively bonded during the offence is slashed pro rata based on its stake relative to the total\nslash amount."),(0,i.kt)("p",null,"Unbonding pools need to be slashed to ensure all nominators who were in the bonded pool while it was\nbacking a validator that committed an offence are punished. Without these measures a nominator could\nunbond right after a validator equivocated with no consequences."),(0,i.kt)("p",null,"This strategy is unfair to delegators who joined after the slash, because they get slashed as well,\nbut spares delegators who unbond. The latter is much more important for security: if a pool's\nvalidators are attacking the network, their delegators need to unbond fast! Avoiding additional\nslashes gives them an incentive to do that if validators get repeatedly slashed."))}u.isMDXComponent=!0}}]);