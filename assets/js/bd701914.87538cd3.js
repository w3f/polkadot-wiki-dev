"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1077],{4366:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>h,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"learn/learn-parachains-faq","title":"Parachains FAQ","description":"Parachains FAQ.","source":"@site/../docs/learn/learn-parachains-faq.md","sourceDirName":"learn","slug":"/learn-parachains-faq","permalink":"/docs/learn-parachains-faq","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-parachains-faq.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1729847256000,"frontMatter":{"id":"learn-parachains-faq","title":"Parachains FAQ","sidebar_label":"Parachains FAQ","description":"Parachains FAQ.","keywords":["parachains","application-specific","sharding","faq"],"slug":"../learn-parachains-faq"},"sidebar":"docs","previous":{"title":"System Parachains","permalink":"/docs/learn-system-chains"},"next":{"title":"Asynchronous Backing","permalink":"/docs/learn-async-backing"}}');var r=t(74848),i=t(28453),o=t(67141);const s={id:"learn-parachains-faq",title:"Parachains FAQ",sidebar_label:"Parachains FAQ",description:"Parachains FAQ.",keywords:["parachains","application-specific","sharding","faq"],slug:"../learn-parachains-faq"},h=void 0,l={},c=[{value:"General",id:"general",level:2},{value:"What is &quot;parachain consensus&quot;?",id:"what-is-parachain-consensus",level:3},{value:"How about parachains that are not Substrate-based?",id:"how-about-parachains-that-are-not-substrate-based",level:3},{value:"Is 100 a hard limit on the number of Parachains that can be supported?",id:"is-100-a-hard-limit-on-the-number-of-parachains-that-can-be-supported",level:3},{value:"What happens to parachains when the number of validators drops below a certain threshold?",id:"what-happens-to-parachains-when-the-number-of-validators-drops-below-a-certain-threshold",level:3},{value:"Parachain Development Kits (PDKs)",id:"parachain-development-kits-pdks",level:3},{value:"Security",id:"security",level:2},{value:"Is security correlated to the number of validators? What about the number of parachains?",id:"is-security-correlated-to-the-number-of-validators-what-about-the-number-of-parachains",level:3},{value:"In what scenarios do parachains need their own security?",id:"in-what-scenarios-do-parachains-need-their-own-security",level:3}];function d(e){const a={a:"a",h2:"h2",h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{message:"Parachain Slot Auctions and Crowdloans will be deprecated right after [Agile Coretime](./learn-agile-coretime) is activated on the network. For existing parachains, the remainder of the lease will automatically be converted to coretime. See more information [here](./learn-agile-coretime#implementation)."}),"\n",(0,r.jsx)(a.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(a.h3,{id:"what-is-parachain-consensus",children:'What is "parachain consensus"?'}),"\n",(0,r.jsx)(a.p,{children:'"Parachain consensus" is special in that it will follow the relay chain. Parachains cannot use other\nconsensus algorithms that provide their own finality. Only sovereign chains (that must bridge to the\nrelay chain via a parachain) can control their own consensus. Parachains have control over how\nblocks are authored and by whom. The relay chain guarantees valid state transitions. Executing a\nblock finality outside the context of the relay chain is outside the scope of trust that the relay\nchain provides.'}),"\n",(0,r.jsx)(a.h3,{id:"how-about-parachains-that-are-not-substrate-based",children:"How about parachains that are not Substrate-based?"}),"\n",(0,r.jsxs)(a.p,{children:["Substrate provides ",(0,r.jsx)(a.a,{href:"https://docs.substrate.io/main-docs/fundamentals/runtime-intro/",children:"FRAME Pallets"}),"\nas part of its framework to seamlessly build a rustic-based blockchain. Part of FRAME are pallets\nthat can be used for consensus. Polkadot, being a Substrate-based chain, relies on BABE as the block\nproduction scheme and GRANDPA as the finality gadget as part of its consensus mechanism.\nCollectively, this is a ",(0,r.jsx)(a.a,{href:"/docs/learn-consensus#hybrid-consensus",children:"Hybrid Consensus Model"}),", where block\nproduction and block finality are separate. Parachains only need to produce blocks as they can rely\non the relay chain to validate the state transitions. Thus, parachains can have their own block\nproduction where the ",(0,r.jsx)(a.a,{href:"/docs/learn-collator",children:"collators"})," act as the block producers, even if the\nparachain is not Substrate-based."]}),"\n",(0,r.jsx)(a.h3,{id:"is-100-a-hard-limit-on-the-number-of-parachains-that-can-be-supported",children:"Is 100 a hard limit on the number of Parachains that can be supported?"}),"\n",(0,r.jsxs)(a.p,{children:["No. The network went through a significant number of optimizations, and there are\n",(0,r.jsx)(a.a,{href:"https://polkadot.network/blog/polkadot-roadmap-roundup/",children:"several updates planned"})," in the near\nfuture. The exact number of parachains that the relay chain can support without any degradation in\nperformance is yet to be discovered. Also, with the\n",(0,r.jsx)(a.a,{href:"https://www.rob.tech/polkadot-blockspace-over-blockchains/",children:"blockspace over blockchains"})," paradigm\nwhich brings on-demand parachains into the picture, there is no hard limit number on the number of\nblockchains that can be supported by the relay chain."]}),"\n",(0,r.jsx)(a.h3,{id:"what-happens-to-parachains-when-the-number-of-validators-drops-below-a-certain-threshold",children:"What happens to parachains when the number of validators drops below a certain threshold?"}),"\n",(0,r.jsxs)(a.p,{children:["The minimal safe ratio of validators per parachain is 5:1. With a sufficiently large set of\nvalidators, the randomness of their distribution along with\n",(0,r.jsx)(a.a,{href:"/docs/learn-parachains-protocol#anv-protocol",children:"availability and validity"})," will make sure security is\non-par. However, should there be a big outage of a popular cloud provider or another network\nconnectivity catastrophe, it is reasonable to expect that the number of validators per chain will\ndrop."]}),"\n",(0,r.jsx)(a.p,{children:"Depending on how many validators went offline, the outcome differs."}),"\n",(0,r.jsx)(a.p,{children:"If a few validators went offline, the parachains whose validator groups are too small to validate a\nblock will skip those blocks. Their block production speed will slow down to an increment of six\nseconds until the situation is resolved and the optimal number of validators is in that parachain's\nvalidator group again."}),"\n",(0,r.jsx)(a.p,{children:"If anywhere from 30% to 50% of the validators go offline, availability will suffer because we need\ntwo-thirds of the validator set to back the parachain candidates. In other words, all parachains\nwill stop until the situation is resolved. Finality will also stop, but low-value transactions on\nthe relay chain should be safe enough to execute, despite common forks. Once the required number of\nvalidators are in the validator set again, parachains will resume block production."}),"\n",(0,r.jsxs)(a.p,{children:["Given that collators are full nodes of the relay chain and the parachain they are running, they will\nbe able to recognize a disruption as soon as it occurs and should stop producing block candidates.\nLikewise, it should be easy for them to recognize when it's safe to restart block production -\nperhaps based on finality delay, validator set size or some other factor that is yet to be decided\nwithin ",(0,r.jsx)(a.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus",children:"Cumulus"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"parachain-development-kits-pdks",children:"Parachain Development Kits (PDKs)"}),"\n",(0,r.jsxs)(a.p,{children:["Parachain Development Kits are a set of tools that enable developers to create their own\napplications as parachains. For more information, see the PDK\ncontent](../build/build-parachains.md#parachain-development-kit-pdk) and\n",(0,r.jsx)(a.a,{href:"/docs/build-pdk",children:"Parachain Development page"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"security",children:"Security"}),"\n",(0,r.jsx)(a.h3,{id:"is-security-correlated-to-the-number-of-validators-what-about-the-number-of-parachains",children:"Is security correlated to the number of validators? What about the number of parachains?"}),"\n",(0,r.jsx)(a.p,{children:"Security is independent of the number of parachains that are connected to the Polkadot relay chain.\nThe correlation of security and the number of validators exists as the higher number of validators\nwill give the network stronger decentralization properties and make it harder to try to take down.\nHowever, the biggest indicator of the security of the network is the economic signal of the number\nof DOT that are bonded and staked. The greater the number of DOT staked by honest validators and\nnominators, the higher the minimum amount of DOT an attacker would need to acquire a validator slot."}),"\n",(0,r.jsx)(a.h3,{id:"in-what-scenarios-do-parachains-need-their-own-security",children:"In what scenarios do parachains need their own security?"}),"\n",(0,r.jsx)(a.p,{children:"Most parachains will not need to worry about their own security, since all state transitions will be\nsecured by the Polkadot relay chain validator set. However, in some cases (which are considered more\nexperimental), parachains may require their own security. In general, these cases will revolve\naround lack of data available to relay chain validators."}),"\n",(0,r.jsxs)(a.p,{children:["One example is if the state transition function is some succinct or zero-knowledge proof, the\nparachain would be responsible for keeping its data available as the relay chain won't have it.\nAdditionally, for chains with their own consensus, like the one that enables fast payments on\n",(0,r.jsx)(a.a,{href:"https://www.youtube.com/watch?v=sf5GMDlG7Uk",children:"Blink Network"}),", there would probably need to be a\nByzantine agreement between stakers before a parachain block is valid. The agreement would be\nnecessary because the data associated with the fast consensus would be unknown to relay chain\nvalidators."]})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},67141:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),r=t(74848);const i=function(e){var a,t=e.message,i=(0,n.useState)(!0),o=i[0],s=i[1];return(0,r.jsx)(r.Fragment,{children:o&&(0,r.jsxs)("div",{className:"message-box",children:[(0,r.jsx)("button",{className:"close-button",onClick:function(){s(!1)},children:"\u2716 "}),(0,r.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(a=t,a.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>s});var n=t(96540);const r={},i=n.createContext(r);function o(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);