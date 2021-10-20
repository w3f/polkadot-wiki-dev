(self.webpackChunk=self.webpackChunk||[]).push([[6140],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>p,kt:()=>h});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function h(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65779:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>u});var n=t(22122),o=t(19756),r=(t(67294),t(3905)),i=["components"],l={id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",slug:"../learn-crowdloans"},c=void 0,s={unversionedId:"learn/learn-crowdloans",id:"learn/learn-crowdloans",isDocsHomePage:!1,title:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",source:"@site/../docs/learn/learn-crowdloans.md",sourceDirName:"learn",slug:"/learn-crowdloans",permalink:"/ru-RU/docs/learn-crowdloans",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-crowdloans.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1634693968,formattedLastUpdatedAt:"20.10.2021",frontMatter:{id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",slug:"../learn-crowdloans"},sidebar:"docs",previous:{title:"Parachain Slots Auction",permalink:"/ru-RU/docs/learn-auction"},next:{title:"Teleporting Assets",permalink:"/ru-RU/docs/learn-teleport"}},p=[{value:"Starting a Crowdloan Campaign",id:"starting-a-crowdloan-campaign",children:[],level:2},{value:"Supporting a Crowdloan Campaign",id:"supporting-a-crowdloan-campaign",children:[],level:2}],d={toc:p};function u(e){var a=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot allows parachains to source tokens\nfor their parachain bids in a decentralised crowdloan."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For information on how to participate in the crowdloan and parachain auction testing on\nRococo, please see the ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"Rococo content"),"",".")),(0,r.kt)("h2",{id:"starting-a-crowdloan-campaign"},"Starting a Crowdloan Campaign"),(0,r.kt)("p",null,"Anyone who has registered a parachain can create a new crowdloan campaign for a slot\nby depositing a specified number of tokens. A campaign is configured as a\nrange of slots (i.e. the duration of the ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-parachains"},"parachain"),"\n"," will bid for), a cap, and a duration.\nThe duration can last over several auctions, meaning that the team will not need to restart the\ncampaign just because they do not secure a slot on their first attempt."),(0,r.kt)("p",null,"When setting the parameters of a crowdloan campaign, consider the following:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Important"),": a crowdloan campaign can start well before the auction slot is opened."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"The campaign creation form requires setting a crowdloan cap ","\u2014"," the maximum amount a campaign\ncan collect. A team can still win an ",(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/learn-auction"},"auction")," if the cap is not reached."),(0,r.kt)("li",{parentName:"ul"},'Set the desired end of the crowdloan in the "Ending block" field. This helps to ensure that the\ncrowdloan is live during the entire duration of the auction. For example, if an auction starts in\nthree days and will last for five days, you may want to set your crowdloan to end in 10 days, or a\nsimilar timescale. '))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One way of calculating the ending block number is adding:  ",(0,r.kt)("inlineCode",{parentName:"p"},"(10 * 60 * 24 * 7) * (x * 6) + y")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"x")," is the number of auction periods you want the crowdloan to continue for ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"y")," is the current block number"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   (Blocks/Min * Hour/Min * Day/Hour * Week/Day) * (x * Week/Period).\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"First period" field refers to the first period you want to bid for. If the current auction\nencompasses periods ',(0,r.kt)("inlineCode",{parentName:"p"},"(3, 4, 5, 6)"),", your first period can be at least ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),". The last slot must also\nbe within that range.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can only cancel an ongoing crowdloan if no contributions have been made. Your deposit will be\nreturned to you."))))),(0,r.kt)("p",null,"Prior to the start of the crowdloan campaign, the owner will upload the parachain data. Once\nthe crowdloan is live, ",(0,r.kt)("strong",{parentName:"p"},"the parachain configuration will be locked")," and will be deployed as\nthe parachain's runtime.  Of course, once the parachain is running it can always change via\nruntime upgrades (as determined through its own local governance)."),(0,r.kt)("h2",{id:"supporting-a-crowdloan-campaign"},"Supporting a Crowdloan Campaign"),(0,r.kt)("p",null,""),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important"),": The minimum balance for contributions for a crowdloan campaign is currently set to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/runtime/polkadot/src/lib.rs#L1196"},"5 DOTs"),".\nThis is in an attempt to make crowdloans as accessible as possible while maintaining a balance to\njustify the use of the network's resources.")),(0,r.kt)("p",null,"Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate\nby sending a special transaction that references the campaign's index. Tokens used to participate\nmust be transferable ","\u2014"," that is, not locked for any reason, including staking, vesting, and\ngovernance ","\u2014"," because they will be moved into a module-controlled account that was generated\nuniquely for this campaign."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important"),": All crowdloan contributions are handled by the Crowdloan module\u2019s logic where a\ncampaign is identified by an index, not by address. ",(0,r.kt)("strong",{parentName:"p"},"Never transfer tokens to an address in\nsupport of a campaign."))),(0,r.kt)("p",null,"It is up to individual parachain teams to decide if and how they want to reward participants who\nforgo staking and choose to lock their tokens in support of the parachain\u2019s campaign. As one can\nimagine, rewards will take many forms and may vary widely among projects."),(0,r.kt)("p",null,"If a crowdloan campaign is successful, that parachain will be on-boarded to the Relay Chain. The\ncollective tokens will be locked in that parachain's account for the entire duration that it is\nactive."),(0,r.kt)("p",null,"Participants will be able to reclaim their tokens in one of two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the campaign was successful, then the parachain will enter a retirement phase at the end of its\nlease. During this phase, participants can withdraw the tokens with which they participated."),(0,r.kt)("li",{parentName:"ul"},"If the campaign was unsuccessful, then this retirement phase will begin at the campaign's\nconfigured end, and participants can likewise withdraw their tokens.")),(0,r.kt)("p",null,"Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without\nwinning a slot, anyone can trigger the refund of crowdloan contributions back to their original\nowners. All contributions must be returned before the crowdloan is entirely deleted from the system."),(0,r.kt)("p",null,"Many projects will have dashboards available that allow users to participate in their crowdloans.\nPolkadotJS apps also offers a breakdown of ongoing crowdloans on the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"},"Apps page"),"."),(0,r.kt)("p",null,"Here is an example of the crowdloans in play during the very first Kusama auction."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"crowdloan dashboard",src:t(83700).Z})),(0,r.kt)("p",null,"Furthermore, check out this video on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YrTxDufrcQM"},"How to Participate in Crowdloans")," for steps on how to\naccess available crowdloans on PolkadotJS apps."))}u.isMDXComponent=!0},83700:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/kusama-crowdloans-0237f5d573dee5e221b51678b2ed25f1.png"}}]);