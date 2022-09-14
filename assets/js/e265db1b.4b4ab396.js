"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9828],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(o),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return o?n.createElement(m,r(r({ref:t},d),{},{components:o})):n.createElement(m,r({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},1039:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),r=["components"],s={id:"maintain-guides-how-to-use-polkadot-validator-setup",title:"How to use Polkadot Validator Setup",sidebar_label:"How to use Polkadot Validator Setup",description:"Steps on Web3 Foundation's supported validator setup.",keywords:["validator setup","validator","configuration"],slug:"../maintain-guides-how-to-use-polkadot-validator-setup"},l="Polkadot Validator Setup",p={unversionedId:"maintain/maintain-guides-how-to-use-polkadot-validator-setup",id:"maintain/maintain-guides-how-to-use-polkadot-validator-setup",title:"How to use Polkadot Validator Setup",description:"Steps on Web3 Foundation's supported validator setup.",source:"@site/../docs/maintain/maintain-guides-how-to-use-polkadot-validator-setup.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-use-polkadot-validator-setup",permalink:"/docs/maintain-guides-how-to-use-polkadot-validator-setup",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-use-polkadot-validator-setup.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649959155,formattedLastUpdatedAt:"Apr 14, 2022",frontMatter:{id:"maintain-guides-how-to-use-polkadot-validator-setup",title:"How to use Polkadot Validator Setup",sidebar_label:"How to use Polkadot Validator Setup",description:"Steps on Web3 Foundation's supported validator setup.",keywords:["validator setup","validator","configuration"],slug:"../maintain-guides-how-to-use-polkadot-validator-setup"},sidebar:"docs",previous:{title:"Secure Validator",permalink:"/docs/maintain-guides-secure-validator"},next:{title:"Set Up a Validator with NGINX Reverse Proxy",permalink:"/docs/maintain-guides-how-to-setup-a-validator-with-reverse-proxy"}},d={},u=[{value:"Dependencies",id:"dependencies",level:2},{value:"NodeJS",id:"nodejs",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Terraform",id:"terraform",level:3},{value:"Ansible",id:"ansible",level:3},{value:"Deployment",id:"deployment",level:2},{value:"Step One: Clone the repository",id:"step-one-clone-the-repository",level:3},{value:"Step Two: Generate the SSH keys",id:"step-two-generate-the-ssh-keys",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Getting the authorization keys",id:"getting-the-authorization-keys",level:4},{value:"Log in to the Google Cloud console",id:"log-in-to-the-google-cloud-console",level:5},{value:"Configuration Options",id:"configuration-options",level:4}],c={toc:u};function h(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polkadot-validator-setup"},"Polkadot Validator Setup"),(0,i.kt)("p",null,"The following guide will walk you through using Web3 Foundation's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-validator-setup"},"polkadot validator setup")," to\noffer a potential setup for your validator that aims to prevent some types of potential attacks\nat the TCP layer and layers below. This will work for Polkadot and Kusama out of the box, and,\nif you're using another Substrate-based chain, it should work with some tweaks."),(0,i.kt)("admonition",{title:"This setup should not be assumed to include the best security practices",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It is up to you to add additional security hardening."),(0,i.kt)("p",{parentName:"admonition"},"Also, the current version of polkadot validator setup doesn't allow for the creation\nand configuration of sentry nodes."),(0,i.kt)("p",{parentName:"admonition"},"There are two ways that the setup can be configured:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Platform & Application Layer")," which allows for configuring the credentials for\ninfrastructure providers, then executes the Terraform process to automatically deploy\nthe required machines (Platform Layer) and setup the Application Layer. This configuration\nuses ",(0,i.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," for defining and managing your infrastructure.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application Layer")," which allows for setting up Debian-based machines, where you only\nneed basic SSH access and configure those in an inventory. The Ansible scripts will setup\nthe entire Application Layer. This configuration uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.ansible.com/"},"Ansible"),"\nas an automation tool for setting up the VPN, Firewall, and the validator node. It supports\na few different cloud providers such as AWS, Microsoft Azure, GCP, and Packet."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Please file an ",(0,i.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://github.com/w3f/polkadot-validator-setup/issues"},"issue")," if you would like to make a feature request or report a bug for this setup"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"The initial step is to install the software dependencies for running the validator setup scripts. We\nwill need to acquire NodeJS, Yarn, Terraform, and Ansible. Usually, these are readily available using\nyour operating system's package manager. Instructions may vary depending on which system you are on;\nthe instructions below demonstrate the commands for a user of a ",(0,i.kt)("em",{parentName:"p"},"Debian")," or ",(0,i.kt)("em",{parentName:"p"},"Ubuntu-based")," system."),(0,i.kt)("h3",{id:"nodejs"},"NodeJS"),(0,i.kt)("p",null,"We recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," as a tool to manage different NodeJS versions across projects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get install curl\ncurl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -\nsudo apt-get install nodejs\nnode -v  (Check your node version)\n")),(0,i.kt)("h3",{id:"yarn"},"Yarn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -\necho "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list\nsudo apt update\nsudo apt install yarn\n')),(0,i.kt)("h3",{id:"terraform"},"Terraform"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get install unzip\nwget https://releases.hashicorp.com/terraform/1.1.7/terraform_1.1.7_linux_amd64.zip\nunzip terraform_1.1.7_linux_amd64.zip\nsudo mv terraform /usr/local/bin/\nterraform --version  (Check whether it is configured properly)\n")),(0,i.kt)("h3",{id:"ansible"},"Ansible"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-add-repository ppa:ansible/ansible\nsudo apt-get update\nsudo apt-get install ansible -y\nsudo apt-get install python -y\n")),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("h3",{id:"step-one-clone-the-repository"},"Step One: Clone the repository"),(0,i.kt)("p",null,"The first step is to clone the ",(0,i.kt)("inlineCode",{parentName:"p"},"polkadot-validator-setup")," guide locally."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ git clone https://github.com/w3f/polkadot-validator-setup.git\n")),(0,i.kt)("p",null,"Now you can ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"polkadot-validator-setup")," directory and start to change the\nconfigurations to match your custom deployment. However, before we start tweaking those, let's start\nby creating two new SSH keys that we (or rather, the Ansible playbooks) will use to access the\nmachines."),(0,i.kt)("h3",{id:"step-two-generate-the-ssh-keys"},"Step Two: Generate the SSH keys"),(0,i.kt)("p",null,"We will use ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Secure_Shell"},"SSH"),", a remote shell tool, to access our validator. You will\nfirst use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," command to generate a key for your validator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ ssh-keygen -m pem -f id_rsa_validator\n$ ssh-keygen -m pem -f id_rsa_public\n")),(0,i.kt)("p",null,"Be sure to add these keys to your SSH agent. First make sure your SSH agent is evaluated, then add\nthe keys to them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ eval $(ssh-agent)\n$ ssh-add id_rsa_validator\n$ ssh-add id_rsa_public\n")),(0,i.kt)("p",null,"For this tutorial we will not set a passphrase for the SSH key, although usually that would be\nrecommended."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"After you have installed all the required software and made your ssh keys, you can start to\nconfigure your infrastructure deployment by following the instructions. Start by cloning the\n",(0,i.kt)("inlineCode",{parentName:"p"},"polkadot-validator-setup")," repository locally, and installing the package dependencies. Then\ncustomize the configuration how you want it."),(0,i.kt)("p",null,"First run yarn to install the NodeJS dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ yarn\n")),(0,i.kt)("p",null,"Now you can copy the configuration sample and start to customize it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ cp config/main.sample.json config/main.json\n# now you should customize config/main.json\n")),(0,i.kt)("p",null,"Under ",(0,i.kt)("inlineCode",{parentName:"p"},"validators")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"publicNodes"),", specify which cloud provider you want to use, the type of\nmachine specification, the number of validators you are going to deploy, the machine location, and\nthe user to use for SSH."),(0,i.kt)("h4",{id:"getting-the-authorization-keys"},"Getting the authorization keys"),(0,i.kt)("p",null,"The validator setup supports Google Cloud, AWS, Microsoft Azure, and Packet. For this\ntutorial we will be using Google Cloud."),(0,i.kt)("h5",{id:"log-in-to-the-google-cloud-console"},"Log in to the Google Cloud console"),(0,i.kt)("p",null,"You will need to log in to the google cloud console in order to access your authorization keys."),(0,i.kt)("p",null,"In the IAM&Admin panel you will navigate to service accounts. Download JSON for service account key."),(0,i.kt)("p",null,"Make sure to also auth into your account like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ gcloud auth login\n")),(0,i.kt)("p",null,"And don't forget to enable the compute engine!"),(0,i.kt)("h4",{id:"configuration-options"},"Configuration Options"),(0,i.kt)("p",null,"The other options can be mostly self explanatory. Here's some tips on what they are and how you can\nuse them:"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalFlags")," option, configure any of the additional flags you want to run for your\nvalidator. If you want to run with a specific name, this is where you would enter it."),(0,i.kt)("p",null,"Under the ",(0,i.kt)("inlineCode",{parentName:"p"},"polkadotBinary.url")," field you can provide the release that is hosted in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot/releases"},"W3F\nrepository")," or use an alternate one that you build and publish yourself."),(0,i.kt)("p",null,"By enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeExporter"),", Ansible will install and configure the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"node_exporter"),", which will\nexpose hardware-level metrics of your node in a format compatible with Prometheus."),(0,i.kt)("p",null,"The field ",(0,i.kt)("inlineCode",{parentName:"p"},"machineType:")," will configure the machine's hardware specifications, check\n",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/machine-types"},"here")," for the configuration options for GCP. The other hosting providers should\nhave similar pages in their documentation."),(0,i.kt)("p",null,"Under ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," the option are ",(0,i.kt)("inlineCode",{parentName:"p"},"gcp")," (Google Cloud Provider), ",(0,i.kt)("inlineCode",{parentName:"p"},"aws")," (AWS), ",(0,i.kt)("inlineCode",{parentName:"p"},"azure")," (Microsoft\nAzure) and ",(0,i.kt)("inlineCode",{parentName:"p"},"packet")," for Packet."),(0,i.kt)("p",null,"The field ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," is the number of instances you would like to create."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"zone")," fields are for the location of the machine, for GCP check\n",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/regions-zones/"},"here"),", other cloud providers will have similar documentation."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"telemetryUrl")," field will send your node's information to a specific telemetry server. You could\nsend all your nodes' data (e.g. IP address) to the public endpoint, but it is highly recommended\nthat that you set up your own telemetry server to protect your validator\u2019s data from being exposed\nto the public. If you want to do that, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-telemetry"},"substrate telemetry source"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you decided to send your node\u2019s information to public telemetry, the name for your\nvalidator and public node that is displayed on the telemetry would look something like\n",(0,i.kt)("inlineCode",{parentName:"p"},"PROJECT_NAME-sv-public-0")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"PROJECT_NAME-sv-validator-0"),".")),(0,i.kt)("p",null,"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"projectId")," to be the name of the project you want to use in GCP."),(0,i.kt)("p",null,"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"sshUser")," to be the user that manages your machine."),(0,i.kt)("p",null,"For different cloud providers, you need to set the corresponding credentials as environment\nvariables, for example, on GCP you only need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"GOOGLE_APPLICATION_CREDENTIALS"),". This variable\nis the path to the JSON file containing the credentials of the service account you wish to use; this\nservice account needs to have write access to compute and network resources if you use GCP. For\nothers, you can check that by referring to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-validator-setup#prerequisites"},"README"),"."),(0,i.kt)("admonition",{title:"Environment variables for Ansible",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Besides that, you need two additional environment variables that will allow Ansible to connect to\nthe created machines. These values of these variables will be the keys that you generated at the\nbeginning of the guide."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SSH_ID_RSA_PUBLIC")," - Path to private SSH key you want to use for the public nodes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SSH_ID_RSA_VALIDATOR")," - Path to private SSH key you want to use for the validator"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You will need to configure the Compute Engine API and enable billing on your GCP accounts\nto properly run these scripts.")),(0,i.kt)("p",null,"After everything is configured properly, you can start to run the deployment with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ scripts/deploy.sh\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'Certain steps of the process may hang, however the scripts are idempotent so you simply need\nto re-run them and when the deployment and configuration is completed, you should see some output\nthat looks like what\'s below. You are able to find the validator\u2019s session keys by searching for\n"show rotateKeys output".')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TASK [polkadot-validator-session-info : retrieve session info] *****************\n\nok: [34.80.70.172]\n\n\nPLAY RECAP *********************************************************************\n\n34.80.224.231              : ok=41   changed=1    unreachable=0    failed=0    skipped=11   rescued=0    ignored=0\n\n34.80.70.172               : ok=49   changed=1    unreachable=0    failed=0    skipped=14   rescued=0    ignored=0\n\n35.189.183.66              : ok=41   changed=1    unreachable=0    failed=0    skipped=11   rescued=0    ignored=0\n\nDone\nDone in 131.85s.\n")),(0,i.kt)("p",null,"Also you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"sshUser")," to access one of the created instances that shows above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'TASK [polkadot-validator : show rotateKeys output] *****************************\n\nok: [34.80.70.172] => {\n    "rotate_keys": {\n        "changed": false,\n        "connection": "close",\n        "content_length": "295",\n        "content_type": "application/json; charset=utf-8",\n        "cookies": {},\n        "cookies_string": "",\n        "date": "Sun, 24 Nov 2019 12:13:42 GMT",\n        "elapsed": 0,\n        "failed": false,\n        "json": {\n            "id": 1,\n            "jsonrpc": "2.0",\n            "result": "0xf126b68841f51988b37780fa5b224b2aa86888a8d3962a63595dbc4d85baac2dee7c9900c8ddfad1991a8884e58273f06d5c1dbfc3dc6000c037185ccead9d692a3b3396cdd7e2def520682d65ad7e8ca234fb17630b428752e6150462998b4362a2b7e201657c8084ae8215bd142458ccd69506d08b18925dc897fb95f54249"\n        },\n        "msg": "OK (295 bytes)",\n        "redirected": false,\n        "status": 200,\n        "url": "http://localhost:9933"\n    }\n}\n')),(0,i.kt)("p",null,'The result "0xf126b68841f5\u2026..95f54249" is your session key. Set this to your controller account in\n',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Polkadot-JS Apps"),"."),(0,i.kt)("p",null,"After accessing one of the machines through SSH, you can keep track of the node\u2019s status by running\n",(0,i.kt)("inlineCode",{parentName:"p"},"journalctl --follow -u polkadot"),", which will show the latest synced block information."),(0,i.kt)("p",null,"Every time you change something in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.json"),", you can simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/deploy.sh")," to update\nit."),(0,i.kt)("p",null,"Congratulations! You have successfully deployed a secure validator. Free feel to open an issue if\nyou have any suggestions."))}h.isMDXComponent=!0}}]);