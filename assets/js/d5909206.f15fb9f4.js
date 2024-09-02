"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5434],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),h=i,y=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return t?a.createElement(y,r(r({ref:n},u),{},{components:t})):a.createElement(y,r({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},48834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var a=t(58168),i=t(98587),o=(t(96540),t(15680)),r=["components"],c={id:"learn-xcm-docs-multilocation-junctions",title:"Junction(s)",sidebar_label:"Junction(s)",description:"The Junction Type in a MultiLocation Struct.",keywords:["xcm","cross-consensus messaging","multilocation","junctions"],slug:"../multilocation-junctions"},l="Junction(s)",s={unversionedId:"learn/xcm/fundamentals/multilocation/learn-xcm-docs-multilocation-junctions",id:"learn/xcm/fundamentals/multilocation/learn-xcm-docs-multilocation-junctions",title:"Junction(s)",description:"The Junction Type in a MultiLocation Struct.",source:"@site/../docs/learn/xcm/fundamentals/multilocation/junction.md",sourceDirName:"learn/xcm/fundamentals/multilocation",slug:"/learn/xcm/fundamentals/multilocation-junctions",permalink:"/docs/learn/xcm/fundamentals/multilocation-junctions",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/fundamentals/multilocation/junction.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1694099593,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"learn-xcm-docs-multilocation-junctions",title:"Junction(s)",sidebar_label:"Junction(s)",description:"The Junction Type in a MultiLocation Struct.",keywords:["xcm","cross-consensus messaging","multilocation","junctions"],slug:"../multilocation-junctions"},sidebar:"docs",previous:{title:"Summary",permalink:"/docs/learn/xcm/fundamentals/multilocation-summary"},next:{title:"Example",permalink:"/docs/learn/xcm/fundamentals/multilocation-example"}},u={},d=[{value:"Junctions Type",id:"junctions-type",level:2},{value:"Junction Type",id:"junction-type",level:2},{value:"Parachain",id:"parachain",level:4},{value:"PalletInstance",id:"palletinstance",level:4},{value:"AccountId32 and AccountKey20",id:"accountid32-and-accountkey20",level:4},{value:"GeneralIndex and GeneralKey",id:"generalindex-and-generalkey",level:4},{value:"AccountIndex64",id:"accountindex64",level:4},{value:"OnlyChild",id:"onlychild",level:4},{value:"Plurality",id:"plurality",level:4},{value:"GlobalConsensus",id:"globalconsensus",level:4},{value:"Multiple ways to create a MultiLocation",id:"multiple-ways-to-create-a-multilocation",level:2}],p={toc:d},h="wrapper";function y(e){var n=e.components,t=(0,i.A)(e,r);return(0,o.yg)(h,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"junctions"},"Junction(s)"),(0,o.yg)("p",null,"In the section on ",(0,o.yg)("a",{parentName:"p",href:"index.html"},"MultiLocations"),", we looked at the MultiLocation struct. We talked\nabout the Multilocation being a way to describe moving from one place in the system hierarchy to\nanother. The ",(0,o.yg)("inlineCode",{parentName:"p"},"parents")," parameter expresses the number of steps up in the hierarchy. In this section,\nwe dive further into the MultiLocation struct and explain how we can use the Junctions type to\ndescribe steps in the system hierarchy. Take a look at the MultiLocation struct again:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"pub struct MultiLocation {\n    pub parents: u8,\n    pub interior: Junctions,\n}\n")),(0,o.yg)("p",null,"The system hierarchy consists of 1-to-n relations. Each place in the system hierarchy can only ever\nhave one parent, so there is only one way up the hierarchy. That is why we can use a ",(0,o.yg)("inlineCode",{parentName:"p"},"u8")," to\ndescribe the number of ",(0,o.yg)("inlineCode",{parentName:"p"},"parents")," we want to move up. But moving down is a bit more difficult, as one\nconsensus system can encapsulate multiple other consensus systems(e.g. a relay chain can have\nmultiple parachains). So to describe the correct steps down the hierarchy, we use the ",(0,o.yg)("inlineCode",{parentName:"p"},"Junctions"),"\n",(0,o.yg)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/doc/xcm/v3/enum.Junctions.html"},"type"),"."),(0,o.yg)("h2",{id:"junctions-type"},"Junctions Type"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"pub enum Junctions {\n    /// The interpreting consensus system.\n    Here,\n    /// A relative path comprising 1 junction.\n    X1(Junction),\n    ...\n    /// A relative path comprising 8 junctions.\n    X8(Junction, Junction, Junction, Junction, Junction, Junction, Junction, Junction),\n}\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"Junctions")," enum can represent zero to eight steps down the hierarchy. When the ",(0,o.yg)("inlineCode",{parentName:"p"},"Here")," variant\nis used, it means that we do not have to take steps down the hierarchy. We can for example describe\nthe current location with ",(0,o.yg)("inlineCode",{parentName:"p"},"{parents: 0, interior: Here}")," or the Parent location with\n",(0,o.yg)("inlineCode",{parentName:"p"},"{parents: 1, interior: Here}"),". If we want to take steps down the hierarchy, we express each step as\na Junction."),(0,o.yg)("h2",{id:"junction-type"},"Junction Type"),(0,o.yg)("p",null,"A ",(0,o.yg)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/doc/xcm/v3/enum.Junction.html"},"Junction")," describes a step\ndown in the Hierarchy. The ",(0,o.yg)("inlineCode",{parentName:"p"},"Junction"),"s are defined as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"pub enum Junction {\n    Parachain(u32),\n    AccountId32 {\n        network: Option<NetworkId>,\n        id: [u8; 32],\n    },\n    AccountIndex64 {\n        network: Option<NetworkId>,\n        index: u64,\n    },\n    AccountKey20 {\n        network: Option<NetworkId>,\n        key: [u8; 20],\n    },\n    PalletInstance(u8),\n    GeneralIndex(u128),\n    GeneralKey {\n        length: u8,\n        data: [u8; 32],\n    },\n    OnlyChild,\n    Plurality {\n        id: BodyId,\n        part: BodyPart,\n    },\n    GlobalConsensus(NetworkId),\n}\n")),(0,o.yg)("h4",{id:"parachain"},"Parachain"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"Parachain")," junction is used to describe a parachain from the point of a relay chain. Each\nparachain has an Id, e.g. Statemine in the Kusama network has Id 1000."),(0,o.yg)("h4",{id:"palletinstance"},"PalletInstance"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"PalletInstance")," junction is used to describe a pallet in one of the parachains or relay chain.\nEach pallet has an Id that can be used for the ",(0,o.yg)("inlineCode",{parentName:"p"},"PalletInstance"),". This junction is mainly used for\nFRAME based systems."),(0,o.yg)("h4",{id:"accountid32-and-accountkey20"},"AccountId32 and AccountKey20"),(0,o.yg)("p",null,"Each of these junctions can be used to describe an account located in the current consensus system.\nThe ",(0,o.yg)("inlineCode",{parentName:"p"},"AccountId32")," is used to describe substrate-based accounts, while the ",(0,o.yg)("inlineCode",{parentName:"p"},"AccountKey20")," is mainly\nused to describe Ethereum or Bitcoin-based accounts or smart contracts. Both junctions express an\naccount based on the context they are used in. If the current location is the relay chain, then the\njunctions describe an account in the relay chain. The same is true for each parachain location."),(0,o.yg)("h4",{id:"generalindex-and-generalkey"},"GeneralIndex and GeneralKey"),(0,o.yg)("p",null,"Non-descript indices and keys within the current context location. The usage will vary widely owing\nto its generality. An example use case for the ",(0,o.yg)("inlineCode",{parentName:"p"},"GeneralIndex")," is to describe an Asset within an\nAssets Parachain."),(0,o.yg)("p",null,"NOTE: If possible, try to avoid using this and instead use a more specific junction."),(0,o.yg)("h4",{id:"accountindex64"},"AccountIndex64"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"AccountIndex64")," can be used to describe an account index. This may be used when the context is\na Frame-based chain and includes e.g. an indices pallet."),(0,o.yg)("h4",{id:"onlychild"},"OnlyChild"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"OnlyChild")," junction can be used to describe the child of a location if there exists a 1-to-1\nrelation between the parent and child in the system hierarchy. The ",(0,o.yg)("inlineCode",{parentName:"p"},"OnlyChild")," junction is currently\nnot used except as a fallback when deriving context."),(0,o.yg)("h4",{id:"plurality"},"Plurality"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"Plurality")," junction is used to describe a pluralistic body existing within the current\nconsensus location. Typical to be used to represent a governance origin of a chain, but could in\nprinciple be used to represent things such as multisigs also. See the\n",(0,o.yg)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/doc/xcm/v3/enum.BodyId.html"},"BodyId documentation")," for a\nbetter understanding of the bodies that the ",(0,o.yg)("inlineCode",{parentName:"p"},"Plurality")," junction can represent."),(0,o.yg)("h4",{id:"globalconsensus"},"GlobalConsensus"),(0,o.yg)("p",null,"A global network (e.g. Polkadot or Kusama) is capable of externalizing its own consensus. This is\nnot generally meaningful outside of the universal level. An example would be describing the Kusama\nrelay chain from the perspective of the Polkadot relay chain as\n",(0,o.yg)("inlineCode",{parentName:"p"},"{parents: 1, interior: GlobalConsensus(Kusama)}"),". An example use case could be routing XCMs between\nglobal consensus networks using bridges."),(0,o.yg)("h2",{id:"multiple-ways-to-create-a-multilocation"},"Multiple ways to create a MultiLocation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"// Current Location\nMultiLocation {parents: 0, interior: Here};\nMultiLocation::new(0, Here);\nMultiLocation::here();\nMultiLocation::default();\nlet _: MultiLocation = Here.into();\n\n// Parent Location\nMultiLocation {parents: 1, interior: Here};\nMultiLocation::parent();\nlet _: MultiLocation = Parent.into();\n\n// Conversion\nMultiLocation { parents: 2, interior: X2(Parachain(1), GeneralIndex(1))};\nlet _: MultiLocation = (Parent, Parent, Parachain(1), GeneralIndex(1)).into();\n")))}y.isMDXComponent=!0}}]);