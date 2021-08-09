(self.webpackChunk=self.webpackChunk||[]).push([[1708],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>u});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(a),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return a?o.createElement(m,r(r({ref:t},c),{},{components:a})):o.createElement(m,r({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var h=2;h<i;h++)r[h]=a[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},82625:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>h,toc:()=>c,default:()=>p});var o=a(22122),n=a(19756),i=(a(67294),a(3905)),r=["components"],s={id:"learn-dyor",title:"How to Do Your Own Research (DYOR)",sidebar_label:"How to Do Your Own Research"},l=void 0,h={unversionedId:"learn-dyor",id:"learn-dyor",isDocsHomePage:!1,title:"How to Do Your Own Research (DYOR)",description:"Many projects are being built, or intend to build, on both Polkadot and Kusama. However, many claim",source:"@site/../docs/learn-dyor.md",sourceDirName:".",slug:"/learn-dyor",permalink:"/zh-CN/docs/learn-dyor",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-dyor.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1628505113,formattedLastUpdatedAt:"2021/8/9",frontMatter:{id:"learn-dyor",title:"How to Do Your Own Research (DYOR)",sidebar_label:"How to Do Your Own Research"},sidebar:"docs",previous:{title:"How to Protect Yourself from Scams",permalink:"/zh-CN/docs/learn-scams"},next:{title:"Frequently Asked Questions (FAQs)",permalink:"/zh-CN/docs/faq"}},c=[{value:"&quot;Powered by Polkadot&quot; or &quot;Polka&quot; prefix clarification",id:"powered-by-polkadot-or-polka-prefix-clarification",children:[]},{value:"&quot;Hard&quot; metrics to look for when you DYOR",id:"hard-metrics-to-look-for-when-you-dyor",children:[]},{value:"&quot;Soft&quot; metrics",id:"soft-metrics",children:[]},{value:"Crowdloans",id:"crowdloans",children:[{value:"Additional material",id:"additional-material",children:[]},{value:"One last piece of advice",id:"one-last-piece-of-advice",children:[]}]}],d={toc:c};function p(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Many projects are being built, or intend to build, on both Polkadot and Kusama. However, many claim\nto do so but have either no such intention, they don't have the resources to pull it through, or\nthey're outright trying to scam people by misusing the Polkadot and Kusama brands."),(0,i.kt)("p",null,"Telling legitimate projects from the \"not so honest\" ones isn't always an easy task. This guide is\nmeant to help you find out how to do your research better when you come across a project that seems\ninteresting. What it's ",(0,i.kt)("strong",{parentName:"p"},"not")," meant to do, is label any single project as legitimate or not, or\nmake that decision for you."),(0,i.kt)("p",null,"Furthermore, a legitimate project doesn't necessarily mean it will also be a successful one, and\n",(0,i.kt)("strong",{parentName:"p"},"this guide is not meant to be viewed as financial or investment advice.")),(0,i.kt)("h3",{id:"powered-by-polkadot-or-polka-prefix-clarification"},'"Powered by Polkadot" or "Polka" prefix clarification'),(0,i.kt)("p",null,'The statement "Powered by Polkadot" on many projects\' sites is often a cause of confusion. This\nusually means that the project is building, or intends to build, on the Polkadot ecosystem, using\n',(0,i.kt)("a",{parentName:"p",href:"https://substrate.dev"},"Substrate"),". But any project can claim that, so the existence of this\nstatement on a project's site infers no information about the project's legitimacy, and it's\ncertainly not a \"seal of approval\" by Web3 Foundation."),(0,i.kt)("p",null,'The same thing goes for projects that have the "Polka" prefix in their name. Many projects use that\nto associate themselves with the ecosystem, some legitimately and others only to piggyback on\nPolkadot\'s reputation.'),(0,i.kt)("h2",{id:"hard-metrics-to-look-for-when-you-dyor"},'"Hard" metrics to look for when you DYOR'),(0,i.kt)("h4",{id:"1-association-with-entities-you-trust"},"1. Association with entities you trust"),(0,i.kt)("p",null,'New projects usually try to increase their credibility by associating themselves with well-known\nentities. The thinking is simple: "These entities that have a good reputation trust us, so if you\ntrust them, by association, you should trust us too". Indeed, association with a trusted entity can\nbe a strong indicator of the legitimacy of a project.'),(0,i.kt)("p",null,"For example, if a project has received a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program"},"Web3 Foundation Grant")," and has achieved at least one\nmilestone, this is an indication that the project is indeed building on the Polkadot ecosystem, and\nif they have delivered all of their milestones, then their code is most likely of reasonable\nquality."),(0,i.kt)("p",null,"And Web3 Foundation is not the only entity in the ecosystem that gives grants. There are other\nreputable teams in the ecosystem that have developed platforms or prospective parachains and give\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program#other-grant-programs"},"grants")," for projects to build on\nor expand their project. These are also indicators that a project is committed to building on the\nbroader Polkadot ecosystem."),(0,i.kt)("p",null,"Or receiving funding from VCs that you trust and are known to be involved with other reputable\nPolkadot projects can also be a good indicator. Or participating in the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.substrate.io/builders-program/"},"Substrate Builders Program"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"However"),", claiming such associations and having them is not always the same thing. ",(0,i.kt)("strong",{parentName:"p"},"You always\nneed to verify any claims a project makes"),", and that's probably the most critical takeaway from\nthis guide."),(0,i.kt)("p",null,"For example, if a project has the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/grant-badge-guidelines.md"},"Web3 Foundation Grant badge"),"\non their site or claims to have received a grant, check to see if they have received one and that it\nhasn't been terminated. The complete list of projects that have successfully applied for a grant can\nbe found\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/accepted_grant_applications.md"},"here"),",\nwhere you can see what each project has delivered and if, perhaps, their grant has been terminated."),(0,i.kt)("p",null,"The same thing goes for VC funding or another grant, or any advertised association for that matter.\nCheck on the corresponding sites to make sure such claims are valid."),(0,i.kt)("p",null,"Also, make sure you understand the ",(0,i.kt)("em",{parentName:"p"},"scope")," of the association. Going back to the Web3 grants\nexample, they have a precise scope. They are granted for specific deliverables, and the review team\nonly checks the code and evaluates these deliverables ",(0,i.kt)("em",{parentName:"p"},"of the particular project"),". To make this more\ntangible, you can check the scope of every Open Grants project\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/tree/master/applications"},"here")," and their evaluations\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grant-Milestone-Delivery/tree/master/evaluations"},"here"),"."),(0,i.kt)("p",null,"So, having received a Web3 grant provides no information about the general practices of a team, the\nlongevity of the project besides the scope of the grant, or other projects the team might be\nbuilding, which is why the badge rules clearly state that it shouldn't be displayed on the team's\nlanding page."),(0,i.kt)("p",null,"Similarly, if a project claims to have partnered with a reputable entity, verify its scope and if it\nis indeed a partnership by searching their site for projects they have partnered with, their press\nreleases, or by contacting them directly. And if you see such claims about Web3 Foundation, you can\nbe sure they're false because Web3 Foundation ",(0,i.kt)("strong",{parentName:"p"},"does not")," partner with, or endorse, ecosystem\nprojects."),(0,i.kt)("h4",{id:"2-open-source"},"2. Open source"),(0,i.kt)("p",null,"An open-source project promotes transparency, builds trust, and ensures the project team isn't doing\nsomething suspicious behind the scenes. Additionally, it makes it very easy to track the project's\nprogress and see how active the team is in developing it."),(0,i.kt)("p",null,"That doesn't mean, though, that any closed source project isn't legitimate or the team behind it has\nsomething to hide. Many teams choose to keep their code private to protect their intellectual\nproperty. Several teams that wish to keep what what they're doing under wraps apply for a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program"},"General Grant"),". The applications are private, as is\ntheir evaluation by the review team, but their deliverables are still open source."),(0,i.kt)("p",null,"Another thing that an open-source project allows you to see is if they have copied any code from\nother open sources. This isn't necessarily bad, since no one re-invents the wheel, but copied code\nshould attribute to the source. If it doesn't, this should raise some red flags because the project\nteam tries to feign expertise by passing someone else's code as their own."),(0,i.kt)("p",null,"A forked repo is easy to spot since it points to the original repo, but partially copied code might\nnot be as easy to find. A quick\n",(0,i.kt)("a",{parentName:"p",href:"https://duckduckgo.com/?q=search+for+copied+source+code+plagiarism&t=ffab&ia=web"},"search")," can\nprovide you with some ways and tools to look for plagiarism."),(0,i.kt)("p",null,"So, a project being closed source isn't necessarily a red flag, it just limits the ability to verify\nthe project in that regard, but there are indirect ways as described below. However, a project being\nopen source is undoubtedly a good, strong indicator of its legitimacy because shady or poor\npractices seldom stay hidden for long in open source code."),(0,i.kt)("h4",{id:"3-active-development"},"3. Active development"),(0,i.kt)("p",null,"If a project team constantly updates their product, it is always a good indication that they are\nserious and passionate about building. Regularly releasing new features and upgrades, fixing bugs,\nupdating their site and notifying the community of these changes are good earmarks of a legitimate\nproject."),(0,i.kt)("p",null,"Additionally, active development ",(0,i.kt)("em",{parentName:"p"},"usually")," also means good development to be used as an ",(0,i.kt)("em",{parentName:"p"},"indirect"),"\nindicator for a closed source project."),(0,i.kt)("p",null,"An open-source project, of course, provides the ability to monitor the development activity through\nits GitHub repo directly."),(0,i.kt)("h4",{id:"4-solid-documentation"},"4. Solid documentation"),(0,i.kt)("p",null,"The existence of solid documentation should be considered mandatory for any project that wants to be\ntaken seriously. A couple of years ago, this meant a whitepaper, but lately, we've seen a shift to\nother forms of documentation, like wiki pages describing the various aspects."),(0,i.kt)("p",null,"No matter the form of the documentation, it needs to exist, and the more detailed it is, the better.\nThis is where the project is explained in detail, and the prospective investor and user can read how\nit works, its goals and how the team aims to attain them."),(0,i.kt)("p",null,"The documentation will give you an idea of the technical expertise of the team, too. If they analyse\ntheir technology and the technical aspects, they indicate that they know what they're doing. On the\nother hand, if they focus only on tokenomics or analyse their project only in broad, vague terms,\nperhaps that's an indication that they don't have a clear path to their goals."),(0,i.kt)("p",null,"If you're looking for an example of what good documentation looks like, look no further than our own\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network"},"wiki"),". Of course, you shouldn't expect to find such extensive\ndocumentation on newly launched projects. Our wiki, after all, covers a whole ecosystem and was\npopulated over the course of years. And it's still updated all the time. But it's a good example of\nthe emphasis a good project should give on documentating what it does and how."),(0,i.kt)("h4",{id:"5-reputable-team"},"5. Reputable team"),(0,i.kt)("p",null,"Some teams display their team members prominently on their site, along with their social media\nprofiles (usually LinkedIn) and GitHub accounts, for development team members. This gives\nprospective users and investors the ability to verify the team's credentials, track records and\nexpertise."),(0,i.kt)("p",null,"But the keyword here is ",(0,i.kt)("strong",{parentName:"p"},"verify"),"! Don't take what you see on the project's team at face value.\nLook them up and verify their track record. Do a Google search for the team members mentioned. If it\ncomes up empty, or the only results are regarding the project, it's an indication that their team\nmembers are fake. Their photos on their site, if there are any, will also probably be stock photos,\nor in other words, also fake. These are usually easily recognisable, but here is a\n",(0,i.kt)("a",{parentName:"p",href:"https://helpdeskgeek.com/how-to/free-reverse-image-search-tools/"},"guide")," on how to do a reverse\nimage search, if you want to be thorough."),(0,i.kt)("p",null,"In some other cases, some developers prefer to maintain their anonymity, using pseudonyms, or the\nteam members aren't mentioned at all. This isn't necessarily a bad thing. Perhaps the team is a\nstrong proponent of privacy, or they want their work to speak for itself. Still, you should try and\nfind out who's behind the project and what they're doing. For developers, their Github activity\nmight speak louder than being mentioned by name. Other team members might be heavily engaged in\ntheir community, providing guidance and answers, which is always a good sign."),(0,i.kt)("p",null,"But if the team are ghosts that don't show up anywhere and only engage with the community through\nproxies, that's a red flag right there, and you should be very sceptical."),(0,i.kt)("p",null,"Besides their community, projects that are serious about building on Polkadot usually engage with\nthe broader Polkadot community. They are active in the various\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/community/"},"Polkadot and Kusama channels"),", and some of them are\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/polkadot-ambassador-program/"},"Polkadot Ambassadors"),", or generally\nprominent members of the ecosystem."),(0,i.kt)("h4",{id:"6-clear-integration-with-polkadot"},"6. Clear integration with Polkadot"),(0,i.kt)("p",null,"There are many ways for a project to build on Polkadot and Kusama. Perhaps the most direct one is to\naim to become a parachain. Some of the most notable Polkadot projects are already parachains on\nKusama or gearing up to become one, and most of them will shoot for a Polkadot parachain too when\nthey become live."),(0,i.kt)("p",null,"Of course, getting a parachain slot on either of the two main networks is not guaranteed, and all\nprojects will need to win an ",(0,i.kt)("a",{parentName:"p",href:"https://kusama.network/auctions/"},"auction")," for a parachain slot."),(0,i.kt)("p",null,"Verifying which projects are currently parachains on Kusama can be quickly done by visiting the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/parachains"},"parachains")," page on polkadot.js.org/apps. In the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/parachains/parathreads"},"parathreads")," page you can see which projects\nare gearing up to claim a parachain slot, the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/parachains/auctions"},"auctions")," page shows which projects are bidding\nfor the next slot, and the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/parachains/crowdloan"},"crowdloan")," page\nwhich projects are gathering funds from their community to participate in auctions."),(0,i.kt)("p",null,"But not all projects that build a chain using ",(0,i.kt)("a",{parentName:"p",href:"https://substrate.dev"},"Substrate")," aim to become a\nparachain. Some use it simply because of its infrastructure to build their customised chain, without\nany plans to connect to the Relay Chain. And other projects may aim to become a parachain only on\nKusama or directly on Polkadot."),(0,i.kt)("p",null,"However, building a potential parachain is not the only way to build on Polkadot and expand its\necosystem. A project might aim to build a DeFi platform on a parachain, launch a stablecoin or other\ntoken on Statemint, build a decentralised exchange, or any other dApp that one might think of,\nwithout ever touching the Relay Chain. And that's the beauty of Polkadot!"),(0,i.kt)("p",null,"But in all of those cases, their plans to build on Polkadot, whatever they may be, should be clearly\nstated on their site and in their documentation. Most importantly, though, you should look for an\nexplanation of ",(0,i.kt)("em",{parentName:"p"},"how")," they plan to achieve that integration. A roadmap that places the integration at\nsome point in the future means close to nothing without clearly stating the steps to get there. And\nthese should be evaluated in tandem with your research on the technical expertise of the team."),(0,i.kt)("p",null,'This is especially true for projects that are already running on another network, like on Ethereum\nor Binance Smart Chain, and have issued tokens there. Many projects do that either to raise funds\nand test their infrastructure or because they aim to build a "multi-chain" solution or both. But\nbecause those projects aren\'t currently built on Substrate, the existence of a clear and robust\nintegration plan with Polkadot should be essential in your research to ensure that they will indeed\nbuild on Polkadot one day.'),(0,i.kt)("h2",{id:"soft-metrics"},'"Soft" metrics'),(0,i.kt)("p",null,'The items above are what you should look at first when evaluating a project and should carry most of\nthe weight in your decision. The reason is that they are hard to fake or manipulate, provided, of\ncourse, that you are able to verify the information found. Hence we called them "hard" metrics.'),(0,i.kt)("p",null,"But there are other things to look for that might point to a project's legitimacy but can be more\neasily manipulated, so they shouldn't affect your decision heavily. These are called \"soft\" metrics."),(0,i.kt)("h4",{id:"1-site-quality"},"1. Site quality"),(0,i.kt)("p",null,"The quality of a project's site could sometimes provide insights into the legitimacy of a project. A\npoorly constructed site, with typos and grammatical errors, or poor styling, a site that's a\ntemplate without any serious effort to improve or change it, a site that holds little information\nabout the project, without links to their GitHub or other resources, and generally a site that\ndoesn't feel professional, are indications that the team is not serious about this project."),(0,i.kt)("p",null,"But that doesn't mean that all well-designed sites are also solid projects. This is a soft metric,\nafter all. Many projects that don't have any plans to build anything substantial still have\nexcellent, or even beautiful-looking, sites. They put many resources into how they present\nthemselves visually to mislead. So, an excellent site doesn't necessarily indicate a legitimate\nproject, a poor site might indicate an illegitimate one, but the site quality alone usually isn't\nenough to reach a conclusion. None of these metrics are; you need to look into all of them to make\nan educated decision."),(0,i.kt)("h4",{id:"2-social-media-presence"},"2. Social media presence"),(0,i.kt)("p",null,"Having a vibrant community is a good indication of a legitimate project. A team that engages with\ntheir community gives updates, answers questions, holds AMAs, posts articles, is a team that's\ninterested in keeping their community members engaged and informed."),(0,i.kt)("p",null,"At the same time, though, social media presence and engagement can be easily faked and manipulated.\nCreating a Telegram group or a Discord server and filling it with thousands of bots is very easy.\nAlthough any bot users need to be identified on Discord according to its terms, scammers don't care\nabout terms and conditions."),(0,i.kt)("p",null,"A team that tweets five times a day or posts a Medium article every other day isn't necessarily\nbuilding something substantial."),(0,i.kt)("p",null,'So, make sure that you verify that their social media presence and engagement is genuine. Join their\nchannels, ask questions and see first-hand what the community and the admins look like. If you\'re\nseeing a lot of users posting very brief comments, like "Good project", "To the moon", "Thank you"\netc, without really engaging, be very skeptical and watch more closely, as these are probably bots.\nAdditionally, verify any information shared by the team on social media and check what other people\nare saying. But verify those comments too, whether they\'re positive or negative.'),(0,i.kt)("h4",{id:"3-media-presence"},"3. Media presence"),(0,i.kt)("p",null,"Close to social media presence is media presence; third-party articles, mentions in YouTube videos\nand general promotions of the project."),(0,i.kt)("p",null,'When it comes to articles, the first thing to check is if the article is genuine coverage or a paid\npress release, especially when a project puts this coverage prominently on their page. Or if the\nauthor has any vested interest in promoting the project. You can check their previous articles to\nsee if they systematically "shill" this project or projects in general.'),(0,i.kt)("p",null,'The same thing, if not even more, goes for YouTubers and influencers in general. Many of them do\nthis for a living or as a way to "pump" projects they have invested in. Finding good influencers\nthat provide as objective info as possible usually involves its own separate research.'),(0,i.kt)("p",null,"That's not to say that media exposure is terrible. It is probably the most abundant source of\ninformation outside the project itself, but at the same time, it requires extensive cross-checking\nand verification of information."),(0,i.kt)("h4",{id:"4-email-communication"},"4. Email communication"),(0,i.kt)("p",null,"Nowadays, many projects use Telegram, Discord, or similar apps for community engagement, as well as\nthe sole channel for communication and support. But having an email registered with their domain,\nbesides providing another channel of communication, can be considered an additional credibility\ncriterion."),(0,i.kt)("p",null,"Furthermore, receiving emails from the project's domain makes it easy to verify that the\ncommunication is authentic (but look out for spoofed emails!). On the other hand, communicating\nthrough personal emails or using a public email provider, like Google or Yahoo, might point to a\nnot-too serious team or one that's spread too thin and could only be overlooked if the project is in\nits very early stages."),(0,i.kt)("h2",{id:"crowdloans"},"Crowdloans"),(0,i.kt)("p",null,"With the recent launch of ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/mirror-learn-parachains"},"parachains")," on Kusama, many projects that aim\nto become a parachain launched a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/mirror-learn-crowdloans"},"crowdloan")," to gather the necessary\nfunds to participate in the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/mirror-learn-auction"},"parachain auctions"),". But with all the buzz\naround the Kusama parachain launch and the imminent Polkadot launch, many scams may also surface.\nSo, crowdloans need their own section to make sure that you're participating safely."),(0,i.kt)("p",null,"First of all, only projects that aim to become a parachain should have a crowdloan. If a project\nisn't a parachain candidate, there shouldn't be a crowdloan associated with it."),(0,i.kt)("p",null,"The surest way to participate in a parachain crowdloan is the native way through the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"},"Crowdloan module"),"\non Polkadot-JS Apps. This issues a special extrinsic that locks your funds until the parachain slot\nlease period ends and guarantees that you'll get your stake back after that. You can learn more\nabout crowdloans through the link above and ",(0,i.kt)("a",{parentName:"p",href:"https://kusama.network/auctions"},"here"),"."),(0,i.kt)("p",null,"Many parachain candidates offer a way to participate through their site as well. But you should\nensure that they are using the crowdloan pallet in the background, and they're simply wrapping that\nin a nicer, more user-friendly UI. If instead, their crowdloan interface ",(0,i.kt)("em",{parentName:"p"},"transfers")," funds to an\naccount, these funds will be totally under their control, and this means you need to fully trust\nthat the team will use the funds for the crowdloan, return your share to you when the lease period\nends or if they don\u2019t get a spot, and will secure them properly. If they're doing something like\nthat, it should be explicitly mentioned in their site and documentation."),(0,i.kt)("p",null,"That being said, some teams have been doing token sales or swaps in an attempt to get a head start\nin raising funds for the auctions, but these are ",(0,i.kt)("strong",{parentName:"p"},"not crowdloans")," and still require full trust in\nthe team. So, if you plan to participate in these token swaps, make sure the project is reputable\nand that you're getting the correct information through their official site and social media\nchannels."),(0,i.kt)("p",null,"Similarly, several centralised exchanges are creating ways to participate in crowdloans through\ntheir platforms, while some wallets are integrating crowdloan functionality to their apps. And more\nare sure to follow. Any legitimate effort should be using the native crowdloans module in the\nbackground and offering a more streamlined user experience. Making sure that's the case is necessary\nbefore using these services, but in any case, it still involves trusting the exchange or the service\nprovider."),(0,i.kt)("h3",{id:"additional-material"},"Additional material"),(0,i.kt)("p",null,"Fact-checking is a skill necessary not only for DYOR but for filtering out the ton of information\nthat we come across daily on the internet. If you're interested in learning more about how to check\nfacts and verify claims, have a look at the following material."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A very nice YouTube series on the art of fact-checking that covers a lot of ground can be found\n",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=L4aNmdL3Hr0&list=PL8dPuuaLjXtN07XYqqWSKpPrtNDiCHTzU"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},"Another great resource on fact-checking, for those who prefer to read, can be found\n",(0,i.kt)("a",{parentName:"li",href:"https://webliteracy.pressbooks.com"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},"Wikipedia article on ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Fact-checking"},"fact-checking"))),(0,i.kt)("p",null,"Finally, you should also check our complementary guide on ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-scams"},"how to identify scams"),".\nIt's not about projects but how to identify outright scams and avoid them, as well as how to protect\nyour sensitive information."),(0,i.kt)("h3",{id:"one-last-piece-of-advice"},"One last piece of advice"),(0,i.kt)("p",null,"Once you've read all this material and have done your research and have identified a project as\nlegitimate, one more thing you need to make sure of is that you understand what the project does and\nwhat new thing it aims to bring to the ecosystem."),(0,i.kt)("p",null,"This doesn't fall under fact-checking and verifying claims, but it's important to mention: fully\nunderstanding what something does and its prospecive impact is an integral part of making an\ninformed decision, so don't overlook it."))}p.isMDXComponent=!0}}]);