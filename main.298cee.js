(()=>{"use strict";var e,t,r,o,a,n={882:(e,t,r)=>{var o=r(893),a=r(745),n=r(294),i=r(655),l=r(250),c=(0,n.lazy)((function(){return r.e(223).then(r.bind(r,265))})),s=(0,n.lazy)((function(){return Promise.all([r.e(861),r.e(212)]).then(r.bind(r,395))}));a.createRoot(document.getElementById("root")).render((0,o.jsx)((function(){var e=!(window.location.href.lastIndexOf("/battle")>-1);return(0,o.jsx)(i.VK,{basename:"/reactjs-github-kit",children:(0,o.jsxs)(n.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[(0,o.jsxs)("div",{className:"py-3",children:[(0,o.jsx)("a",{href:"/",className:"mx-8 ".concat(e?"text-orange-500":""),children:"Home"}),(0,o.jsx)("a",{href:"/battle",onClick:function(){var e=localStorage.getItem("battle-userOne"),t=localStorage.getItem("battle-userTwo");e&&localStorage.removeItem("".concat(e)),localStorage.removeItem("battle-userOne"),t&&localStorage.removeItem("".concat(t)),localStorage.removeItem("battle-userTwo")},className:"mx-8 ".concat(e?"":"text-orange-500"),children:"Battle"})]}),(0,o.jsxs)(l.Z5,{children:[(0,o.jsx)(l.AW,{path:"/",element:(0,o.jsx)(c,{})}),(0,o.jsx)(l.AW,{path:"/battle",element:(0,o.jsx)(s,{})})]})]})})}),{}))}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,l),r.exports}l.m=n,e=[],l.O=(t,r,o,a)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],i=!0,c=0;c<r.length;c++)(!1&a||n>=a)&&Object.keys(l.O).every((e=>l.O[e](r[c])))?r.splice(c--,1):(i=!1,a<n&&(n=a));if(i){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);l.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,l.d(a,n),a},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>"js/"+({212:"battle-page",223:"home-page"}[e]||e)+"."+{212:"80b54f",223:"0159f1",861:"c4da01"}[e]+".chunk.js",l.miniCssF=e=>{},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="reactjs-github-kit:",l.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var i,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==a+r){i=f;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",a+r),i.src=e),o[e]=[t];var d=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var a=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.f.j=(t,r)=>{var o=l.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=l.p+l.u(t),i=new Error;l.l(n,(r=>{if(l.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[n,i,c]=r,s=0;if(n.some((t=>0!==e[t]))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(c)var u=c(l)}for(t&&t(r);s<n.length;s++)a=n[s],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(u)},r=self.webpackChunkreactjs_github_kit=self.webpackChunkreactjs_github_kit||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=l.O(void 0,[615],(()=>l(882)));c=l.O(c)})();