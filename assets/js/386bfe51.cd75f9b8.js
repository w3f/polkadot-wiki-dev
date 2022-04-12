"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[657],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=i.createContext({}),c=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(n),h=o,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?i.createElement(g,r(r({ref:e},u),{},{components:n})):i.createElement(g,r({ref:e},u))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35810:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>p});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],l={id:"contributing",title:"Contributing",sidebar_label:"Contributing",description:"Steps on how to contribute to the Polkadot Wiki and the code of conduct to keep in mind.",slug:"../contributing"},s=void 0,c={unversionedId:"general/contributing",id:"general/contributing",title:"Contributing",description:"Steps on how to contribute to the Polkadot Wiki and the code of conduct to keep in mind.",source:"@site/../docs/general/contributing.md",sourceDirName:"general",slug:"/contributing",permalink:"/docs/contributing",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/contributing.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649079622,formattedLastUpdatedAt:"4/4/2022",frontMatter:{id:"contributing",title:"Contributing",sidebar_label:"Contributing",description:"Steps on how to contribute to the Polkadot Wiki and the code of conduct to keep in mind.",slug:"../contributing"},sidebar:"docs",previous:{title:"Community",permalink:"/docs/community"},next:{title:"Contributors",permalink:"/docs/contributors"}},u=[{value:"How to Contribute",id:"how-to-contribute",children:[],level:2},{value:"Guideline and Rules for Contributing",id:"guideline-and-rules-for-contributing",children:[],level:2},{value:"Heritage",id:"heritage",children:[],level:2},{value:"Helping With Translations",id:"helping-with-translations",children:[],level:2}],d={toc:u};function p(t){var e=t.components,l=(0,o.Z)(t,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The wiki was started and is maintained by Web3 Foundation. It is an open source project and aims\nto be the most extensive resource of knowledge on Polkadot and the Polkadot ecosystem. A large part\nof the material currently focuses on Polkadot directly but it is not opposed to covering\ninformational material for community projects."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Marketing material")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please do not try to pull request any marketing material as this will be rejected."))),(0,a.kt)("p",null,"Nonetheless, pull requests, discussions, and contributions from the community are encouraged. Active\ncommunity members who demonstrate a record of good contributions may be given write access to the\nrepository."),(0,a.kt)("p",null,"Otherwise, Web3 Foundation holds the administrative position and final say on the content that is\nincluded. Specifically, the Technical Education team at the foundation are most directly involved."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Contributing Explainer")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Check out the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=6i55KOcy7B0"},"How to Contribute to the Polkadot Wiki")," video for\nsteps on contributions."))),(0,a.kt)("h2",{id:"how-to-contribute"},"How to Contribute"),(0,a.kt)("p",null,"You can contribute to the wiki on the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-wiki"},"w3f/polkadot-wiki GitHub repository"),". Every page is a\n",(0,a.kt)("a",{parentName:"p",href:"https://guides.github.com/features/mastering-markdown/"},"MarkDown")," file, which is an easy to learn\nsyntax extension to plain text that makes creating links, rendering images, and nice-looking\nformatting simple."),(0,a.kt)("p",null,'Each page has an "Edit this page" link at the bottom of the content. By clicking it you are taken to\nthe GitHub sign-in page, where you can either log in or create an account.'),(0,a.kt)("p",null,"Once logged in, you'll be taken to the GitHub built-in text editor where you can make your edits\ndirectly. When you've completed your changes, you can add any specific details on what was changed\nand commit to a ",(0,a.kt)("strong",{parentName:"p"},"new branch")," to create a new Pull Request to the repository. From there one of the\nmaintainers will review your changes, and either merge them or request changes."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(75952).Z,width:"2044",height:"1402"})," ",(0,a.kt)("img",{src:n(66170).Z,width:"2112",height:"812"})),(0,a.kt)("p",null,'Remember that after you click "Propose Changes", you must also click on "Create Pull Request" on the\nnext page.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(24994).Z,width:"1201",height:"655"})),(0,a.kt)("h2",{id:"guideline-and-rules-for-contributing"},"Guideline and Rules for Contributing"),(0,a.kt)("p",null,"There are a few basic ground-rules for contributors:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"No ",(0,a.kt)("inlineCode",{parentName:"strong"},"--force")," pushes")," or modifying the Git history in any way."),(0,a.kt)("li",{parentName:"ol"},"Pull requests are preferred to issues, especially for small changes such as typos. Issues should\nbe used for generic or broad-based changes or missing content. Suggestions and requests are encouraged."),(0,a.kt)("li",{parentName:"ol"},"Only use ",(0,a.kt)("strong",{parentName:"li"},"non-master branches"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Significant modifications"),", even by contributors, ought to be subject to a ",(0,a.kt)("strong",{parentName:"li"},"pull request")," to\nsolicit feedback from other contributors."),(0,a.kt)("li",{parentName:"ol"},"Pull requests to solicit feedback are ",(0,a.kt)("em",{parentName:"li"},"encouraged")," for any other non-trivial contribution but\nleft to the discretion of the contributor."),(0,a.kt)("li",{parentName:"ol"},"Contributors should attempt to adhere to the prevailing ",(0,a.kt)("inlineCode",{parentName:"li"},"MarkDown")," style, language, and layout."),(0,a.kt)("li",{parentName:"ol"},"Correct grammar should be used at all times. Pull requests with typos will not be merged until\nfixed."),(0,a.kt)("li",{parentName:"ol"},"Care should be taken to remain as objective and informative as possible. There should be no\neditorializing, and external bias should not be present."),(0,a.kt)("li",{parentName:"ol"},"We use a plugin called Prettier to standardize the style across documents. You can run this on\nyour local copy with ",(0,a.kt)("inlineCode",{parentName:"li"},"npx pretty-quick --staged"),", but for simplicity we also have a bot which\nruns this for us in your PRs.")),(0,a.kt)("h2",{id:"heritage"},"Heritage"),(0,a.kt)("p",null,"This document is based on the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Level/community/blob/master/CONTRIBUTING.md"},"Level contribution guidelines"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"helping-with-translations"},"Helping With Translations"),(0,a.kt)("p",null,"The Wiki's default language is ",(0,a.kt)("em",{parentName:"p"},"English"),", though, there is a desire to translate the Wiki\nin as many languages as possible. Another way you can contribute is by helping with translations."),(0,a.kt)("p",null,"There is a feature at the bottom of the main page of the Polkadot Wiki that will redirect you to\n",(0,a.kt)("a",{parentName:"p",href:"https://crowdin.com/project/polkadot-wiki"},"crowdin"),", which is where translation contributions can\nbe made."),(0,a.kt)("p",null,"There, you will see the progress of translating the docs associated with the Wiki in many different\nlanguages."),(0,a.kt)("img",{align:"center",width:"700",height:"350",src:"/img/contributing/translate/polkadot-translate-feature.png"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"The following are steps on how to interact with the crowdin interface for translations. Check out\nthe official ",(0,a.kt)("a",{parentName:"p",href:"https://support.crowdin.com/online-editor/"},"crowdin knowledge base")," as well."),(0,a.kt)("p",{float:"center"},(0,a.kt)("img",{src:"/img/contributing/translate/crowdin-translate-1.png",width:"550",height:"450"}),(0,a.kt)("img",{src:"/img/contributing/translate/crowdin-translate-2.png",width:"550",height:"450"}),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/img/contributing/translate/crowdin-translate-3.png",width:"550",height:"450"}),(0,a.kt)("img",{src:"/img/contributing/translate/crowdin-translate-4.png",width:"550",height:"450"}),(0,a.kt)("br",null),(0,a.kt)("img",{src:"/img/contributing/translate/crowdin-translate-5.png",width:"550",height:"450"}),(0,a.kt)("img",{src:"/img/contributing/translate/crowdin-translate-6.png",width:"550",height:"450"}),(0,a.kt)("br",null)),(0,a.kt)("p",null,"The following shows an example in ",(0,a.kt)("em",{parentName:"p"},"Arabic"),". You can type in your desired translation for each section\nin the provided area, while using the suggestions generated by the crowdin built-in translator."),(0,a.kt)("img",{src:"/img/contributing/translate/crowdin-translate-7.png"}),(0,a.kt)("img",{src:"/img/contributing/translate/crowdin-translate-8.png"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"Make sure to save your translation."),(0,a.kt)("img",{align:"center",width:"800",height:"50",src:"/img/contributing/translate/crowdin-translate-9.png"}))}p.isMDXComponent=!0},75952:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/contributing-69801a2ab9b4924d0057fd15ffeb53ab.png"},24994:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/creating-pull-request-2-dbd958496c4e13a05ce366472d8235f0.png"},66170:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/creating-pull-request-d619fd33e91fa84290fb190070c603f4.png"}}]);