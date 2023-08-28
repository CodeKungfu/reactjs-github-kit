"use strict";(self.webpackChunkreactjs_github_kit=self.webpackChunkreactjs_github_kit||[]).push([[223],{486:(e,t,a)=>{a.d(t,{q:()=>l});var r=a(893),n=a(294),s=a(730);function c(e){var t=e.url,a=e.srcset,c=(0,n.useRef)();return(0,s.Z)({target:c,onIntersect:function(){c.current&&(c.current.src=t,c.current.srcset=a)}}),(0,r.jsx)("img",{ref:c,width:"100",height:"100",alt:"",className:"w-[60%] mx-auto"})}function l(e){var t=e.url,a=function(e){var t="".concat(e,"&s=100 640w"),a="".concat(e,"&s=120 768w"),r="".concat(e,"&s=160 1024w"),n="".concat(e,"&s=200 1280w"),s="".concat(e,"&s=400 1536w");return"".concat(t,", ").concat(a,", ").concat(r,", ").concat(n,", ").concat(s)}(t);return(0,r.jsx)(c,{url:t,srcset:a})}},447:(e,t,a)=>{a.d(t,{J:()=>n});var r=a(893);function n(e){var t=e.className;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("i",{className:t})})}},730:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(294);function n(e){var t=e.target,a=e.onIntersect;(0,r.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&a()}))}),{rootMargin:"0px",threshold:0}),r=t&&t.current;if(r)return e.observe(r),function(){e.unobserve(r)}}),[t,a])}},516:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(893),n=a(294);function s(e){return(0,r.jsx)("div",{className:"flex items-center justify-center my-2",children:["All","JavaScript","Ruby","Java","CSS","Python"].map((function(t){var a=t.toLocaleLowerCase()===e.language.toLocaleLowerCase();return(0,r.jsx)("button",{className:"mx-2 ".concat(a?"text-orange-500":""),onClick:function(){return e.change(t)},children:t},t)}))})}var c=a(486),l=a(447);function o(e){var t=e.data;return(0,r.jsx)("div",{className:"flex-1 lg:w-[25%] lg:max-w-[25%] lg:min-w-[25%] md:w-[33.3%] md:max-w-[33.3%] md:min-w-[33.3%] w-[50%] max-w-[50%] min-w-[50%] p-2",children:(0,r.jsxs)("div",{className:"bg-gray-400 py-4 ",children:[(0,r.jsxs)("div",{className:"px-4 mb-2 text-center",children:["#",e.indexKey]}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(c.q,{url:t.owner.avatar_url})}),(0,r.jsxs)("div",{className:"px-4",children:[(0,r.jsx)("div",{className:"mb-4 flex items-center justify-center",children:(0,r.jsx)("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer",className:"font-bold text-red-500 text-center text-sm truncate hover:text-purple-600",title:t.name,children:t.name})}),(0,r.jsxs)("div",{className:"flex items-center mb-2",children:[(0,r.jsx)(l.J,{className:"fa-solid fa-user text-orange-400"}),(0,r.jsx)("div",{className:"ml-2 flex-auto text-xs truncate",children:t.owner.login})]}),(0,r.jsxs)("div",{className:"flex items-center mb-2",children:[(0,r.jsx)(l.J,{className:"fa-solid fa-star text-yellow-400"}),(0,r.jsxs)("div",{className:"ml-2 flex-auto text-xs truncate",children:[(0,r.jsx)("span",{className:"font-bold mr-1",children:t.stargazers_count}),"stars"]})]}),(0,r.jsxs)("div",{className:"flex items-center mb-2",children:[(0,r.jsx)(l.J,{className:"fa-solid fa-code-fork text-blue-400"}),(0,r.jsxs)("div",{className:"ml-2 flex-auto text-xs truncate",children:[(0,r.jsx)("span",{className:"font-bold mr-1",children:t.forks_count}),"forks"]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(l.J,{className:"fa-solid fa-triangle-exclamation text-red-400"}),(0,r.jsxs)("div",{className:"ml-2 flex-auto text-xs truncate",children:[(0,r.jsx)("span",{className:"font-bold mr-1",children:t.open_issues}),"open issues"]})]})]})]})},t.id)}function i(e){var t=e.load;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:{display:t?"block":"none"},className:"text-center",children:(0,r.jsx)(l.J,{className:"fa-solid fa-spinner text-blue-600 text-5xl"})})})}var u=a(730);function d(e){var t=e.load,a=e.loadMore,s=(0,n.useRef)();return(0,u.Z)({target:s,onIntersect:function(){s.current&&t&&a()}}),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{ref:s,style:{display:t?"block":"none"},className:"text-center",children:(0,r.jsx)(l.J,{className:"fa-solid fa-spinner text-blue-600 text-5xl"})})})}function x(e){var t=e.load,a=e.items,n=e.loadMore,s=e.total,c=e.error;return t&&0===a.length?(0,r.jsx)(i,{load:t}):t||0!==a.length?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"flex items-center justify-around flex-wrap mx-2",children:a.map((function(e,t){return(0,r.jsx)(o,{data:e,indexKey:t+1},"".concat(e.id,"-").concat(t))}))}),(0,r.jsx)(d,{load:0!=a.length&&a.length<s&&!c,loadMore:n})]}):(0,r.jsx)("div",{className:"py-10 text-sm text-center text-slate-500",children:"No Data"})}function f(e){var t=e.error,a=(0,n.useState)(!1),s=a[0],c=a[1];return(0,n.useEffect)((function(){c(!!t)}),[t]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:{display:s?"block":"none"},children:(0,r.jsx)("div",{className:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center",children:(0,r.jsxs)("div",{className:"bg-white rounded p-4",children:[(0,r.jsx)("h2",{className:"text-xl font-bold mb-2",children:"接口异常"}),(0,r.jsx)("p",{children:t}),(0,r.jsx)("button",{onClick:function(){return c(!1)},className:"mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Close"})]})})})})}var m=a(928),h=function(){return h=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},h.apply(this,arguments)},g=function(e,t,a){if(a||2===arguments.length)for(var r,n=0,s=t.length;n<s;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))};function v(){var e=(0,n.useState)(0),t=e[0],a=e[1],c=(0,n.useState)(!0),l=c[0],o=c[1],i=(0,n.useState)([]),u=i[0],d=i[1],v=(0,n.useState)({page:1,language:(0,m.yE)()}),p=v[0],j=v[1],w=(0,n.useRef)({}),b=(0,n.useState)(""),N=b[0],y=b[1];(0,n.useEffect)((function(){S(p.language,p.page)}),[]);var S=function(e,t){o(!0),y(null);var r=(0,m.IF)(e,t);fetch(r).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(r){var n=(null==r?void 0:r.items)||[],s=1===t?n:g(g([],u,!0),n,!0);d(s),1===t&&w.current&&(w.current[e]=s),a((null==r?void 0:r.total_count)||0)})).catch((function(e){e.json().then((function(e){y((null==e?void 0:e.message)||"Error")}))})).finally((function(){return o(!1)}))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{language:p.language,change:function(e){var t;y(null),j({language:e,page:1});var a=(null===(t=w.current)||void 0===t?void 0:t[e])||[];a.length>0?d(a):(d([]),S(e,1)),window.history.replaceState({},"","?language=".concat(e))}}),(0,r.jsx)(f,{error:N}),(0,r.jsx)(x,{error:N,load:l,items:u,total:t,loadMore:function(){l||N||(j(h(h({},p),{page:p.page+1})),S(p.language,p.page+1))}})]})}},928:(e,t,a)=>{function r(){return new URLSearchParams(window.location.search).get("language")||"All"}function n(e,t){return void 0===e&&(e="All"),void 0===t&&(t=1),"All"===e?"https://api.github.com/search/repositories?q=stars%3A%3E1&sort=stars&order=desc&type=Repositories&page=".concat(t,"&per_page=10"):"https://api.github.com/search/repositories?q=stars%3A%3E1%20language%3A".concat(e,"&sort=stars&order=desc&type=Repositories&page=").concat(t,"&per_page=10")}function s(){var e=new URLSearchParams(window.location.search).get("userOne")||"",t=new URLSearchParams(window.location.search).get("userTwo")||"";if(e&&t){var a=localStorage.getItem("".concat(e))||"",r=localStorage.getItem("".concat(t))||"";if(a&&r)return!0}return!1}function c(){var e=new URLSearchParams(window.location.search).get("userOne")||"",t=new URLSearchParams(window.location.search).get("userTwo")||"";if(e&&t)try{var a=localStorage.getItem("".concat(e))||"",r=localStorage.getItem("".concat(t))||"";return{userOne:e,userTwo:t,userOneData:a?JSON.parse(a):{},userTwoData:a?JSON.parse(r):{}}}catch(a){return{userOne:e,userTwo:t,userOneData:{},userTwoData:{}}}return{userOne:e,userTwo:t,userOneData:{},userTwoData:{}}}a.d(t,{IF:()=>n,NJ:()=>c,Vp:()=>s,yE:()=>r})}}]);