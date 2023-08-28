"use strict";(self.webpackChunkreactjs_github_kit=self.webpackChunkreactjs_github_kit||[]).push([[223],{486:(e,t,r)=>{r.d(t,{q:()=>c});var n=r(893),a=r(294);function s(e){var t=e.url,r=e.srcset,s=(0,a.useState)(!1),c=s[0],o=s[1],l=(0,a.useRef)(),i=function(e){var t=e[0];t.isIntersecting&&o(t.isIntersecting)};return(0,a.useEffect)((function(){var e=new IntersectionObserver(i);return l.current&&e.observe(l.current),function(){l.current&&e.unobserve(l.current)}}),[]),(0,n.jsx)("img",{ref:l,width:"100",height:"100",alt:"",src:c?t:"",srcSet:c?r:"",className:"w-[60%] mx-auto"})}function c(e){var t=e.url,r=function(e){var t="".concat(e,"&s=100 640w"),r="".concat(e,"&s=120 768w"),n="".concat(e,"&s=160 1024w"),a="".concat(e,"&s=200 1280w"),s="".concat(e,"&s=400 1536w");return"".concat(t,", ").concat(r,", ").concat(n,", ").concat(a,", ").concat(s)}(t);return(0,n.jsx)(s,{url:t,srcset:r})}},447:(e,t,r)=>{r.d(t,{J:()=>a});var n=r(893);function a(e){var t=e.className;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("i",{className:t})})}},265:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(893),a=r(294);function s(e){return(0,n.jsx)("div",{className:"flex items-center justify-center my-2",children:["All","JavaScript","Ruby","Java","CSS","Python"].map((function(t){var r=t.toLocaleLowerCase()===e.language.toLocaleLowerCase();return(0,n.jsx)("button",{className:"mx-2 ".concat(r?"text-orange-500":""),onClick:function(){return e.change(t)},children:t},t)}))})}var c=r(486),o=r(447);function l(e){var t=e.data;return(0,n.jsx)("div",{className:"flex-1 lg:w-[25%] lg:max-w-[25%] lg:min-w-[25%] md:w-[33.3%] md:max-w-[33.3%] md:min-w-[33.3%] w-[50%] max-w-[50%] min-w-[50%] p-2",children:(0,n.jsxs)("div",{className:"bg-gray-400 py-4 ",children:[(0,n.jsxs)("div",{className:"px-4 mb-2 text-center",children:["#",e.indexKey]}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)(c.q,{url:t.owner.avatar_url})}),(0,n.jsxs)("div",{className:"px-4",children:[(0,n.jsx)("div",{className:"mb-4 flex items-center justify-center",children:(0,n.jsx)("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer",className:"font-bold text-red-500 text-center text-sm truncate hover:text-purple-600",title:t.name,children:t.name})}),(0,n.jsxs)("div",{className:"flex items-center mb-2",children:[(0,n.jsx)(o.J,{className:"fa-solid fa-user text-orange-400"}),(0,n.jsx)("div",{className:"ml-2 flex-auto text-xs truncate",children:t.owner.login})]}),(0,n.jsxs)("div",{className:"flex items-center mb-2",children:[(0,n.jsx)(o.J,{className:"fa-solid fa-star text-yellow-400"}),(0,n.jsxs)("div",{className:"ml-2 flex-auto text-xs truncate",children:[(0,n.jsx)("span",{className:"font-bold mr-1",children:t.stargazers_count}),"stars"]})]}),(0,n.jsxs)("div",{className:"flex items-center mb-2",children:[(0,n.jsx)(o.J,{className:"fa-solid fa-code-fork text-blue-400"}),(0,n.jsxs)("div",{className:"ml-2 flex-auto text-xs truncate",children:[(0,n.jsx)("span",{className:"font-bold mr-1",children:t.forks_count}),"forks"]})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(o.J,{className:"fa-solid fa-triangle-exclamation text-red-400"}),(0,n.jsxs)("div",{className:"ml-2 flex-auto text-xs truncate",children:[(0,n.jsx)("span",{className:"font-bold mr-1",children:t.open_issues}),"open issues"]})]})]})]})},t.id)}function i(e){var t=e.load;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{display:t?"block":"none"},className:"text-center",children:(0,n.jsx)(o.J,{className:"fa-solid fa-spinner text-blue-600 text-5xl"})})})}function u(e){var t=e.load,r=e.loadMore,s=(0,a.useRef)();return function(e){var t=e.target,r=e.onIntersect;(0,a.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&r()}))}),{rootMargin:"0px",threshold:0}),n=t&&t.current;if(n)return e.observe(n),function(){e.unobserve(n)}}),[t,r])}({target:s,onIntersect:function(){s.current&&t&&r()}}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{ref:s,style:{display:t?"block":"none"},className:"text-center",children:(0,n.jsx)(o.J,{className:"fa-solid fa-spinner text-blue-600 text-5xl"})})})}function d(e){var t=e.load,r=e.items,a=e.loadMore,s=e.total,c=e.error;return t&&0===r.length?(0,n.jsx)(i,{load:t}):t||0!==r.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"flex items-center justify-around flex-wrap mx-2",children:r.map((function(e,t){return(0,n.jsx)(l,{data:e,indexKey:t+1},"".concat(e.id,"-").concat(t))}))}),(0,n.jsx)(u,{load:0!=r.length&&r.length<s&&!c,loadMore:a})]}):(0,n.jsx)("div",{className:"py-10 text-sm text-center text-slate-500",children:"No Data"})}function f(e){var t=e.error,r=(0,a.useState)(!1),s=r[0],c=r[1];return(0,a.useEffect)((function(){c(!!t)}),[t]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{display:s?"block":"none"},children:(0,n.jsx)("div",{className:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center",children:(0,n.jsxs)("div",{className:"bg-white rounded p-4",children:[(0,n.jsx)("h2",{className:"text-xl font-bold mb-2",children:"接口异常"}),(0,n.jsx)("p",{children:t}),(0,n.jsx)("button",{onClick:function(){return c(!1)},className:"mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Close"})]})})})})}var x=r(928),m=function(){return m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},m.apply(this,arguments)},h=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,s=t.length;a<s;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};function g(){var e=(0,a.useState)(0),t=e[0],r=e[1],c=(0,a.useState)(!0),o=c[0],l=c[1],i=(0,a.useState)([]),u=i[0],g=i[1],v=(0,a.useState)({page:1,language:(0,x.yE)()}),p=v[0],j=v[1],w=(0,a.useRef)({}),b=(0,a.useState)(""),N=b[0],y=b[1];(0,a.useEffect)((function(){S(p.language,p.page)}),[]);var S=function(e,t){l(!0),y(null);var n=(0,x.IF)(e,t);fetch(n).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(n){var a=(null==n?void 0:n.items)||[],s=1===t?a:h(h([],u,!0),a,!0);g(s),1===t&&w.current&&(w.current[e]=s),r((null==n?void 0:n.total_count)||0)})).catch((function(e){e.json().then((function(e){y((null==e?void 0:e.message)||"Error")}))})).finally((function(){return l(!1)}))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{language:p.language,change:function(e){var t;y(null),j({language:e,page:1});var r=(null===(t=w.current)||void 0===t?void 0:t[e])||[];r.length>0?g(r):(g([]),S(e,1)),window.history.replaceState({},"","?language=".concat(e))}}),(0,n.jsx)(f,{error:N}),(0,n.jsx)(d,{error:N,load:o,items:u,total:t,loadMore:function(){o||N||(j(m(m({},p),{page:p.page+1})),S(p.language,p.page+1))}})]})}},928:(e,t,r)=>{function n(){return new URLSearchParams(window.location.search).get("language")||"All"}function a(e,t){return void 0===e&&(e="All"),void 0===t&&(t=1),"All"===e?"https://api.github.com/search/repositories?q=stars%3A%3E1&sort=stars&order=desc&type=Repositories&page=".concat(t,"&per_page=10"):"https://api.github.com/search/repositories?q=stars%3A%3E1%20language%3A".concat(e,"&sort=stars&order=desc&type=Repositories&page=").concat(t,"&per_page=10")}function s(){var e=new URLSearchParams(window.location.search).get("userOne")||"",t=new URLSearchParams(window.location.search).get("userTwo")||"";if(e&&t){var r=localStorage.getItem("".concat(e))||"",n=localStorage.getItem("".concat(t))||"";if(r&&n)return!0}return!1}function c(){var e=new URLSearchParams(window.location.search).get("userOne")||"",t=new URLSearchParams(window.location.search).get("userTwo")||"";if(e&&t)try{var r=localStorage.getItem("".concat(e))||"",n=localStorage.getItem("".concat(t))||"";return{userOne:e,userTwo:t,userOneData:r?JSON.parse(r):{},userTwoData:r?JSON.parse(n):{}}}catch(r){return{userOne:e,userTwo:t,userOneData:{},userTwoData:{}}}return{userOne:e,userTwo:t,userOneData:{},userTwoData:{}}}r.d(t,{IF:()=>a,NJ:()=>c,Vp:()=>s,yE:()=>n})}}]);