(self.webpackChunk=self.webpackChunk||[]).push([[2884],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},53582:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>u,default:()=>c});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i=["components"],s={id:"maintain-guides-how-to-upgrade",title:"How to Upgrade Your Validator",sidebar_label:"How to Upgrade Your Validator"},l=void 0,d={unversionedId:"maintain/maintain-guides-how-to-upgrade",id:"maintain/maintain-guides-how-to-upgrade",isDocsHomePage:!1,title:"How to Upgrade Your Validator",description:"Validators perform critical functions for the network, and as such, have strict uptime requirements.",source:"@site/../docs/maintain/maintain-guides-how-to-upgrade.md",sourceDirName:"maintain",slug:"/maintain/maintain-guides-how-to-upgrade",permalink:"/zh-CN/docs/maintain/maintain-guides-how-to-upgrade",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-upgrade.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1628523122,formattedLastUpdatedAt:"2021/8/9",frontMatter:{id:"maintain-guides-how-to-upgrade",title:"How to Upgrade Your Validator",sidebar_label:"How to Upgrade Your Validator"},sidebar:"docs",previous:{title:"Set Up a Validator with NGINX Reverse Proxy",permalink:"/zh-CN/docs/maintain/maintain-guides-how-to-setup-a-validator-with-reverse-proxy"},next:{title:"Monitor your node",permalink:"/zh-CN/docs/maintain/maintain-guides-how-to-monitor-your-node"}},u=[{value:"Key Components",id:"key-components",children:[{value:"Session Keys",id:"session-keys",children:[]},{value:"Database",id:"database",children:[]}]},{value:"Steps",id:"steps",children:[{value:"Session <code>N</code>",id:"session-n",children:[]},{value:"Session <code>N+1</code>",id:"session-n1",children:[]}]}],p={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Validators perform critical functions for the network, and as such, have strict uptime requirements.\nValidators may have to go offline for periods of time to upgrade the client software or the host\nmachine. Usually, standard upgrades will only require you to stop your server, replace the binary\nand spin it up again. Validators may also need to perform maintenance, such as resizing a disk,\nwhere you cannot continue running the node on the current server. This guide will walk you through\nupgrading your machine and keeping your validator online."),(0,r.kt)("p",null,"The process can take several hours, so make sure you understand the instructions first and plan\naccordingly."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: keep an eye out on new releases from the community and upgrade/downgrade accordingly.")),(0,r.kt)("h2",{id:"key-components"},"Key Components"),(0,r.kt)("h3",{id:"session-keys"},"Session Keys"),(0,r.kt)("p",null,"Session keys are stored in the client and used to sign validator operations. They are what link your\nvalidator node to your Controller account. You cannot change them mid-Session."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn/learn-keys"},"More info about keys in Polkadot.")),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("p",null,"Validators keep a database with all of their votes. If two machines have the same Session keys but\ndifferent databases, they risk equivocating. For this reason, we will generate new Session keys each\ntime we change machines."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn/learn-staking/#slashing"},"More info about equivocation.")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,'You will need to start a second validator to operate while you upgrade your primary. Throughout\nthese steps, we will refer to the validator that you are upgrading as "Validator A" and the second\none as "Validator B."'),(0,r.kt)("h3",{id:"session-n"},"Session ",(0,r.kt)("inlineCode",{parentName:"h3"},"N")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start a second node. Once it is synced, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"--validator"),' flag. This is "Validator B."'),(0,r.kt)("li",{parentName:"ol"},"Generate Session keys in Validator B."),(0,r.kt)("li",{parentName:"ol"},"Submit a ",(0,r.kt)("inlineCode",{parentName:"li"},"set_key")," extrinsic from your Controller account with your new Session keys."),(0,r.kt)("li",{parentName:"ol"},"Take note of the Session that this extrinsic was executed in.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It is imperative that your Validator A keep running in this Session.")," ",(0,r.kt)("inlineCode",{parentName:"p"},"set_key")," only takes effect\nin the next Session."),(0,r.kt)("h3",{id:"session-n1"},"Session ",(0,r.kt)("inlineCode",{parentName:"h3"},"N+1")),(0,r.kt)("p",null,"Validator B is now acting as your validator. You can safely take Validator A offline. See note at\nbottom."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop Validator A."),(0,r.kt)("li",{parentName:"ol"},"Perform your system or client upgrade."),(0,r.kt)("li",{parentName:"ol"},"Start Validator A and sync the database."),(0,r.kt)("li",{parentName:"ol"},"Generate new Session keys in Validator A."),(0,r.kt)("li",{parentName:"ol"},"Submit a ",(0,r.kt)("inlineCode",{parentName:"li"},"set_key")," extrinsic from your Controller account with your new Session keys for\nValidator A."),(0,r.kt)("li",{parentName:"ol"},"Take note of the Session that this extrinsic was executed in.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Again, it is imperative that Validator B keep running until the next Session.")),(0,r.kt)("p",null,"Once the Session changes, Validator A will take over. You can safely stop Validator B."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," To verify that the Session has changed, make sure that a block in the new Session is\nfinalized. You should see log messages like this to indicate the change:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2019-10-28 21:44:13 Applying authority set change scheduled at block #450092\n2019-10-28 21:44:13 Applying GRANDPA set change to new set with 20 authorities\n")))}c.isMDXComponent=!0}}]);