"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1077],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var n=t(96540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),h=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=h(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(t),u=o,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var h=2;h<r;h++)i[h]=t[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67141:(e,a,t)=>{t.d(a,{A:()=>o});var n=t(96540);const o=function(e){var a,t=e.message,o=(0,n.useState)(!0),r=o[0],i=o[1];return n.createElement(n.Fragment,null,r&&n.createElement("div",{className:"message-box"},n.createElement("button",{className:"close-button",onClick:function(){i(!1)}},"\u2716 "),n.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(a=t,a.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},99143:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>h,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=t(58168),o=t(98587),r=(t(96540),t(15680)),i=t(67141),s=["components"],l={id:"learn-parachains-faq",title:"Parachains FAQ",sidebar_label:"Parachains FAQ",description:"Parachains FAQ.",keywords:["parachains","application-specific","sharding","faq"],slug:"../learn-parachains-faq"},h=void 0,c={unversionedId:"learn/learn-parachains-faq",id:"learn/learn-parachains-faq",title:"Parachains FAQ",description:"Parachains FAQ.",source:"@site/../docs/learn/learn-parachains-faq.md",sourceDirName:"learn",slug:"/learn-parachains-faq",permalink:"/docs/learn-parachains-faq",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-parachains-faq.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1715081757,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"learn-parachains-faq",title:"Parachains FAQ",sidebar_label:"Parachains FAQ",description:"Parachains FAQ.",keywords:["parachains","application-specific","sharding","faq"],slug:"../learn-parachains-faq"},sidebar:"docs",previous:{title:"Parachain Crowdloans",permalink:"/docs/learn-crowdloans"},next:{title:"Asynchronous Backing",permalink:"/docs/learn-async-backing"}},d={},p=[{value:"General",id:"general",level:2},{value:"What is &quot;parachain consensus&quot;?",id:"what-is-parachain-consensus",level:3},{value:"How about parachains that are not Substrate-based?",id:"how-about-parachains-that-are-not-substrate-based",level:3},{value:"Is 100 a hard limit on the number of Parachains that can be supported?",id:"is-100-a-hard-limit-on-the-number-of-parachains-that-can-be-supported",level:3},{value:"What happens to parachains when the number of validators drops below a certain threshold?",id:"what-happens-to-parachains-when-the-number-of-validators-drops-below-a-certain-threshold",level:3},{value:"Parachain Development Kits (PDKs)",id:"parachain-development-kits-pdks",level:3},{value:"Security",id:"security",level:2},{value:"Is security correlated to the number of validators? What about the number of parachains?",id:"is-security-correlated-to-the-number-of-validators-what-about-the-number-of-parachains",level:3},{value:"In what scenarios do parachains need their own security?",id:"in-what-scenarios-do-parachains-need-their-own-security",level:3},{value:"Slot Auctions",id:"slot-auctions",level:2},{value:"How will parachain slots be distributed?",id:"how-will-parachain-slots-be-distributed",level:3},{value:"Why doesn&#39;t everyone bid for the max length?",id:"why-doesnt-everyone-bid-for-the-max-length",level:3},{value:"How does this mechanism help ensure parachain diversity?",id:"how-does-this-mechanism-help-ensure-parachain-diversity",level:3},{value:"Why is randomness difficult on blockchains?",id:"why-is-randomness-difficult-on-blockchains",level:3},{value:"Are there other ways of acquiring a slot besides the candle auction?",id:"are-there-other-ways-of-acquiring-a-slot-besides-the-candle-auction",level:3},{value:"How are auctions scheduled?",id:"how-are-auctions-scheduled",level:3}],u={toc:p},m="wrapper";function y(e){var a=e.components,t=(0,o.A)(e,s);return(0,r.yg)(m,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(i.A,{message:"Parachain Slot Auctions and Crowdloans will be deprecated right after [Agile Coretime](/docs/learn-agile-coretime) is activated on the network. For existing parachains, the remainder of the lease will automatically be converted to coretime. See more information [here](/docs/learn-agile-coretime#implementation).",mdxType:"MessageBox"}),(0,r.yg)("h2",{id:"general"},"General"),(0,r.yg)("h3",{id:"what-is-parachain-consensus"},'What is "parachain consensus"?'),(0,r.yg)("p",null,'"Parachain consensus" is special in that it will follow the Polkadot\nRelay Chain. Parachains cannot use other consensus algorithms that\nprovide their own finality. Only sovereign chains (that must bridge to the Relay Chain via a\nparachain) can control their own consensus. Parachains have control over how blocks are authored and\nby whom. Polkadot  guarantees valid state\ntransitions. Executing a block finality outside the context of the relay chain is outside the scope\nof trust that Polkadot  provides.'),(0,r.yg)("h3",{id:"how-about-parachains-that-are-not-substrate-based"},"How about parachains that are not Substrate-based?"),(0,r.yg)("p",null,"Substrate provides ",(0,r.yg)("a",{parentName:"p",href:"https://docs.substrate.io/main-docs/fundamentals/runtime-intro/"},"FRAME Pallets"),"\nas part of its framework to seamlessly build a rustic-based blockchain. Part of FRAME are pallets\nthat can be used for consensus. Polkadot\nbeing a Substrate-based chain rely on BABE as the block production scheme and GRANDPA as the\nfinality gadget as part of its consensus mechanism. Collectively, this is a\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-consensus#hybrid-consensus"},"Hybrid Consensus Model"),", where block production and block\nfinality are separate. Parachains only need to produce blocks as they can rely on the relay chain to\nvalidate the state transitions. Thus, parachains can have their own block production where the\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-collator"},"collators")," act as the block producers, even if the parachain is not\nSubstrate-based."),(0,r.yg)("h3",{id:"is-100-a-hard-limit-on-the-number-of-parachains-that-can-be-supported"},"Is 100 a hard limit on the number of Parachains that can be supported?"),(0,r.yg)("p",null,"No.Polkadot  network went through a\nsignificant number of optimizations, and there are\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.network/blog/polkadot-roadmap-roundup/"},"several updates planned")," in the near\nfuture. The exact number of parachains that the Relay Chain can support without any degradation in\nperformance is yet to be discovered. Also, with the\n",(0,r.yg)("a",{parentName:"p",href:"https://www.rob.tech/polkadot-blockspace-over-blockchains/"},"blockspace over blockchains")," paradigm\nwhich brings on-demand parachains into the picture, there is no hard limit number on the number of\nblockchains that can be supported by Polkadot\n."),(0,r.yg)("h3",{id:"what-happens-to-parachains-when-the-number-of-validators-drops-below-a-certain-threshold"},"What happens to parachains when the number of validators drops below a certain threshold?"),(0,r.yg)("p",null,"The minimal safe ratio of validators per parachain is 5:1. With a sufficiently large set of\nvalidators, the randomness of their distribution along with\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-parachains-protocol#anv-protocol"},"availability and validity")," will make sure security is\non-par. However, should there be a big outage of a popular cloud provider or another network\nconnectivity catastrophe, it is reasonable to expect that the number of validators per chain will\ndrop."),(0,r.yg)("p",null,"Depending on how many validators went offline, the outcome differs."),(0,r.yg)("p",null,"If a few validators went offline, the parachains whose validator groups are too small to validate a\nblock will skip those blocks. Their block production speed will slow down to an increment of six\nseconds until the situation is resolved and the optimal number of validators is in that parachain's\nvalidator group again."),(0,r.yg)("p",null,"If anywhere from 30% to 50% of the validators go offline, availability will suffer because we need\ntwo-thirds of the validator set to back the parachain candidates. In other words, all parachains\nwill stop until the situation is resolved. Finality will also stop, but low-value transactions on\nthe Relay Chain should be safe enough to execute, despite common forks. Once the required number of\nvalidators are in the validator set again, parachains will resume block production."),(0,r.yg)("p",null,"Given that collators are full nodes of the Relay Chain and the parachain they are running, they will\nbe able to recognize a disruption as soon as it occurs and should stop producing block candidates.\nLikewise, it should be easy for them to recognize when it's safe to restart block production -\nperhaps based on finality delay, validator set size or some other factor that is yet to be decided\nwithin ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus"},"Cumulus"),"."),(0,r.yg)("h3",{id:"parachain-development-kits-pdks"},"Parachain Development Kits (PDKs)"),(0,r.yg)("p",null,"Parachain Development Kits are a set of tools that enable developers to create their own\napplications as parachains. For more information, see the PDK\ncontent](/docs/build-pdk#parachain-development-kit-pdk) and\n",(0,r.yg)("a",{parentName:"p",href:"/docs/build-pdk"},"Parachain Development page"),"."),(0,r.yg)("h2",{id:"security"},"Security"),(0,r.yg)("h3",{id:"is-security-correlated-to-the-number-of-validators-what-about-the-number-of-parachains"},"Is security correlated to the number of validators? What about the number of parachains?"),(0,r.yg)("p",null,"Security is independent of the number of parachains that are connected to the Polkadot Relay Chain.\nThe correlation of security and the number of validators exists as the higher number of validators\nwill give the network stronger decentralization properties and make it harder to try to take down.\nHowever, the biggest indicator of the security of the network is the economic signal of the number\nof DOT that are bonded and staked. The greater the number of DOT staked by honest validators and\nnominators, the higher the minimum amount of DOT an attacker would need to acquire a validator slot."),(0,r.yg)("h3",{id:"in-what-scenarios-do-parachains-need-their-own-security"},"In what scenarios do parachains need their own security?"),(0,r.yg)("p",null,"Most parachains will not need to worry about their own security, since all state transitions will be\nsecured by the Polkadot Relay Chain validator set. However, in some cases (which are considered more\nexperimental), parachains may require their own security. In general, these cases will revolve\naround lack of data available to Relay Chain validators."),(0,r.yg)("p",null,"One example is if the state transition function is some succinct or zero-knowledge proof, the\nparachain would be responsible for keeping its data available as the Relay Chain won't have it.\nAdditionally, for chains with their own consensus, like the one that enables fast payments on\n",(0,r.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=sf5GMDlG7Uk"},"Blink Network"),", there would probably need to be a\nByzantine agreement between stakers before a parachain block is valid. The agreement would be\nnecessary because the data associated with the fast consensus would be unknown to Relay Chain\nvalidators."),(0,r.yg)("h2",{id:"slot-auctions"},"Slot Auctions"),(0,r.yg)("h3",{id:"how-will-parachain-slots-be-distributed"},"How will parachain slots be distributed?"),(0,r.yg)("p",null,"Parachain slots are acquirable through auction. For more information on the auction process, please\nsee the ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-auction"},"parachain slot auctions")," article. Additionally, parachains will be able\nto access the Relay Chain ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-parachains#on-demand-parachains"},"on-demand"),"."),(0,r.yg)("h3",{id:"why-doesnt-everyone-bid-for-the-max-length"},"Why doesn't everyone bid for the max length?"),(0,r.yg)("p",null,"For the duration of the slot, the tokens used for bidding in the auction are locked up. This\nsuggests there is an opportunity cost associated with bidding, as the tokens could have been\nleveraged for something else."),(0,r.yg)("h3",{id:"how-does-this-mechanism-help-ensure-parachain-diversity"},"How does this mechanism help ensure parachain diversity?"),(0,r.yg)("p",null,"The method for dividing the parachain slots into intervals was partly inspired by the desire to\nallow for a greater amount of parachain diversity, while preventing particularly large and\nwell-funded parachains from hoarding slots. By making each period a\nthree-month duration but the\noverall slot a 2-year duration, the mechanism can cope with well-funded parachains, ensuring they secure a slot\nat the end of their lease, while gradually allowing other parachains to enter the ecosystem to\noccupy the durations that are not filled. For example, if a large, well-funded parachain has already\nacquired a slot for range 1 - 8, they would be very interested in getting the next slot that would\nopen for 2 - 9. Under this mechanism, that parachain could acquire just period 9 (since that is the\nonly one required) and allow the 2 - 8 range of the second parachain slot to be occupied by another\nparty."),(0,r.yg)("h3",{id:"why-is-randomness-difficult-on-blockchains"},"Why is randomness difficult on blockchains?"),(0,r.yg)("p",null,"Generating a random number trustlessly on a transparent and open network opens up the possibility\nfor bad actors to attempt to alter or manipulate the randomness. There have been a few solutions\nthat have been proposed, including hash-onions like ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/randao/randao"},"RANDAO")," and\n",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Verifiable_random_function"},"verifiable random functions")," (VRFs). The\nlatter is what Polkadot uses as a base for its\nrandomness."),(0,r.yg)("h3",{id:"are-there-other-ways-of-acquiring-a-slot-besides-the-candle-auction"},"Are there other ways of acquiring a slot besides the candle auction?"),(0,r.yg)("p",null,"Aa parachain slot can also be acquired through a secondary market where a 3rd party has already won\na parachain slot and has the ability to resell the slot along with the associated deposit of tokens\nthat are locked up to another buyer. This would allow the seller to get liquid tokens in exchange\nfor the parachain slot and the buyer to acquire the slot as well as the deposited tokens."),(0,r.yg)("p",null,"A number of system or common-good parachains may be granted slots by the\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"governance")," of the Relay Chain. System parachains can be recognized by\na parachain ID lower than 1_000, and common-good parachains by a parachain ID between 1_000 and\n1_999. Other parachains will have IDs 2_000 or higher. Such parachains would not have to bid for or\nrenew their slots as they would be considered essential to the ecosystem's future."),(0,r.yg)("h3",{id:"how-are-auctions-scheduled"},"How are auctions scheduled?"),(0,r.yg)("p",null,"The parachain slot auctions are scheduled through the governance. At least 2/3 of the Council can\ninitiate an auction, however, Root origin (via referendum) is needed to cancel an auction. Here is a\nproposal that gives a glimpse of what goes into planning auctions schedule -\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/post/863"},"Proposed Polkadot Auction Schedule 2022"),"."))}y.isMDXComponent=!0}}]);