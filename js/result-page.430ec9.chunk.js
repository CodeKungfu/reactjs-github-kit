"use strict";(self.webpackChunkreactjs_github_kit=self.webpackChunkreactjs_github_kit||[]).push([[495],{486:(e,t,r)=>{r.d(t,{q:()=>o});var n=r(893),s=r(294),a=r(730);function c(e){var t=e.url,r=e.srcset,c=(0,s.useRef)();return(0,a.Z)({target:c,onIntersect:function(){c.current&&(c.current.src=t,c.current.srcset=r)}}),(0,n.jsx)("img",{ref:c,width:"100",height:"100",alt:"",className:"w-[60%] mx-auto"})}function o(e){var t=e.url,r=function(e){var t="".concat(e,"&s=100 640w"),r="".concat(e,"&s=120 768w"),n="".concat(e,"&s=160 1024w"),s="".concat(e,"&s=200 1280w"),a="".concat(e,"&s=400 1536w");return"".concat(t,", ").concat(r,", ").concat(n,", ").concat(s,", ").concat(a)}(t);return(0,n.jsx)(c,{url:t,srcset:r})}},447:(e,t,r)=>{r.d(t,{J:()=>s});var n=r(893);function s(e){var t=e.className;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("i",{className:t})})}},797:(e,t,r)=>{r.d(t,{q:()=>a});var n=r(893),s=r(447);function a(e){var t=e.load;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{display:t?"block":"none"},className:"text-center",children:(0,n.jsx)(s.J,{className:"fa-solid fa-spinner text-blue-600 text-5xl"})})})}},730:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(294);function s(e){var t=e.target,r=e.onIntersect;(0,n.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&r()}))}),{rootMargin:"0px",threshold:0}),n=t&&t.current;if(n)return e.observe(n),function(){e.unobserve(n)}}),[t,r])}},536:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(893),s=r(294),a=r(250),c=r(797),o=r(486),l=r(447);function i(e){return(0,n.jsx)("div",{className:"flex-1 p-2",children:(0,n.jsxs)("div",{className:"bg-[rgba(235,235,235,1)] py-4 max-w-[200px] mx-auto",children:[(0,n.jsx)("div",{className:"px-4 mb-2 text-center",children:e.title}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)(o.q,{url:e.data.avatar_url})}),(0,n.jsxs)("div",{className:"px-4",children:[(0,n.jsxs)("div",{className:"mb-2 flex items-center justify-center font-bold text-center text-sm",children:["Scores: ",e.data.public_repos]}),(0,n.jsx)("div",{className:"mb-4 flex items-center justify-center",children:(0,n.jsx)("a",{href:e.data.html_url,target:"_blank",rel:"noopener noreferrer",className:"font-bold text-red-500 text-center text-sm truncate hover:text-purple-600",title:e.data.login,children:e.data.login})}),(0,n.jsxs)("div",{className:"flex items-center mb-2",children:[(0,n.jsx)(l.J,{className:"fa-solid fa-location-arrow text-stone-800"}),(0,n.jsx)("div",{className:"ml-2 flex-auto text-xs truncate",children:e.data.location})]}),(0,n.jsxs)("div",{className:"flex items-center mb-2",children:[(0,n.jsx)(l.J,{className:"fa-solid fa-users text-stone-800"}),(0,n.jsx)("div",{className:"ml-2 flex-auto text-xs truncate",children:e.data.followers})]}),(0,n.jsxs)("div",{className:"flex items-center mb-2",children:[(0,n.jsx)(l.J,{className:"fa-solid fa-user-plus text-stone-800"}),(0,n.jsx)("div",{className:"ml-2 flex-auto text-xs truncate",children:e.data.following})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(l.J,{className:"fa-solid fa-code text-stone-800"}),(0,n.jsx)("div",{className:"ml-2 flex-auto text-xs truncate",children:e.data.public_repos})]})]})]})})}var u=r(928),d=function(e,t,r,n){return new(r||(r=Promise))((function(s,a){function c(e){try{l(n.next(e))}catch(e){a(e)}}function o(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,o)}l((n=n.apply(e,t||[])).next())}))},f=function(e,t){var r,n,s,a,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,o[0]&&(c=0)),c;)try{if(r=1,n&&(s=2&o[0]?n.return:o[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,o[1])).done)return s;switch(n=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,n=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!((s=(s=c.trys).length>0&&s[s.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){c.label=o[1];break}if(6===o[0]&&c.label<s[1]){c.label=s[1],s=o;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(o);break}s[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],n=0}finally{r=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};function x(e){return new Promise((function(t,r){fetch("https://api.github.com/users/".concat(e)).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){t(e)})).catch((function(e){e.json().then((function(e){r((null==e?void 0:e.message)||"Something went wrong")}))}))}))}function h(){var e=this,t=(0,a.s0)(),r=(0,u.dF)(),o=r.githubUserOne,l=r.githubUserTwo,h=(0,s.useState)(null),m=h[0],p=h[1],v=(0,s.useState)(null),b=v[0],g=v[1];(0,s.useEffect)((function(){o&&j(),l&&w()}),[o,l]);var j=function(){return d(e,void 0,void 0,(function(){var e,t;return f(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,x(o)];case 1:return e=r.sent(),p(e),[3,3];case 2:return t=r.sent(),console.log(t),[3,3];case 3:return[2]}}))}))},w=function(){return d(e,void 0,void 0,(function(){var e,t;return f(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,x(l)];case 1:return e=r.sent(),g(e),[3,3];case 2:return t=r.sent(),console.log(t),[3,3];case 3:return[2]}}))}))},y=function(){t("/battle")};if(!o||!l)return(0,n.jsxs)("div",{className:"py-4 h-full flex flex-col items-center",children:[(0,n.jsx)("h1",{className:"pb-4",children:"用户信息不足"}),(0,n.jsx)("button",{onClick:y,className:"bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",children:"reset"})]});if(!m||!b)return(0,n.jsx)("div",{className:"py-4 h-full flex flex-col items-center",children:(0,n.jsx)(c.q,{load:!0})});var N=m.public_repos>b.public_repos?o:l;return(0,n.jsxs)("div",{className:"py-4 h-full flex flex-col items-center",children:[(0,n.jsxs)("div",{className:"flex w-full mb-10",children:[(0,n.jsx)("div",{className:"w-1/2",children:(0,n.jsx)(i,{title:N===o?"Winner":"Loser",data:m})}),(0,n.jsx)("div",{className:"w-1/2",children:(0,n.jsx)(i,{title:N===l?"Winner":"Loser",data:b})})]}),(0,n.jsx)("button",{onClick:y,className:"bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",children:"reset"})]})}},928:(e,t,r)=>{function n(){return new URLSearchParams(window.location.search).get("language")||"All"}function s(e,t){return void 0===e&&(e="All"),void 0===t&&(t=1),"All"===e?"https://api.github.com/search/repositories?q=stars%3A%3E1&sort=stars&order=desc&type=Repositories&page=".concat(t,"&per_page=10"):"https://api.github.com/search/repositories?q=stars%3A%3E1%20language%3A".concat(e,"&sort=stars&order=desc&type=Repositories&page=").concat(t,"&per_page=10")}r.d(t,{IF:()=>s,dF:()=>a,yE:()=>n});var a=function(){var e=new URLSearchParams(window.location.search);return{githubUserOne:e.get("userOne")||"",githubUserTwo:e.get("userTwo")||""}}}}]);