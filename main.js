(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?v:h,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",v="completed",p={};function m(){}function y(){}function g(){}var L={};L[i]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(_([])));E&&E!==n&&r.call(E,i)&&(L=E);var x=g.prototype=m.prototype=Object.create(L);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return y.prototype=x.constructor=g,g.constructor=y,y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(S.prototype),S.prototype[a]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),u(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),q(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;q(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(){var t=document.querySelectorAll(".js-scroll");if(t[0].classList.add("ativo"),t.length){var e=.6*window.innerHeight;window.addEventListener("scroll",(function(){t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}))}}function e(){function t(){document.querySelectorAll("[data-numero]").forEach((function(t){var e=+t.innerText,n=Math.floor(e/100),r=0,o=setInterval((function(){r+=n,t.innerText=r,r>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}))}var e=new MutationObserver((function(n){n[0].target.classList.contains("ativo"),e.disconnect(),t()}));t();var n=document.querySelector(".numeros");e.observe(n,{attributes:!0})}function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}t();var i,a,c,u,s,l,f,h,d,v,p,m,y=n(757),g=n.n(y);!function(){var t=document.querySelectorAll('.js-menu a[href^="#"]');if(t.length){var e=function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href"),n=document.querySelector(e);n.offsetTop,n.scrollIntoView({behavior:"smooth",block:"start"})};t.forEach((function(t){t.addEventListener("click",e)}))}}(),t(),i=document.querySelectorAll(".js-tabmenu li"),a=document.querySelectorAll(".js-tabcontent section"),i.length&&a.length&&(a[0].classList.add("ativo"),i.forEach((function(t,e){t.addEventListener("click",(function(){!function(t){a.forEach((function(t){t.classList.remove("ativo")})),a[t].classList.add("ativo")}(e)}))}))),function(){var t=document.querySelectorAll(".js-accordion dt");function e(){this.classList.toggle("ativo"),this.nextElementSibling.classList.toggle("ativo")}t[0].classList.add("ativo"),t[0].nextElementSibling.classList.add("ativo"),t.length&&t.forEach((function(t){t.addEventListener("click",e)}))}(),function(){var t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');if(t&&e&&n){var r=function(t){t.preventDefault(),n.classList.toggle("ativo")};t.addEventListener("click",r),e.addEventListener("click",r),n.addEventListener("click",(function(t){t.target===this&&r(t)}))}}(),function(){var t=document.querySelectorAll("[data-tooltip]");function e(t){var e=function(t){var e=t.getAttribute("aria-label"),n=document.createElement("div");return n.classList.add("tooltip"),n.innerText=e,document.body.appendChild(n),n}(this);e.style.top=t.pageY+"px",e.style.left=t.pageX+"px",n.tooltipBox=e,r.tooltipBox=e,r.element=this,this.addEventListener("mouseleave",r),this.addEventListener("mousemove",n)}var n={handleEvent:function(t){this.tooltipBox.style.top=t.pageY+20+"px",this.tooltipBox.style.left=t.pageX+20+"px"}},r={handleEvent:function(){this.tooltipBox.remove()}};t.forEach((function(t){t.addEventListener("mouseover",e)}))}(),function(){function t(t){var e,n,r,o=this;t.preventDefault(),this.classList.add("active"),e=this,n=function(){o.classList.remove("active")},(r=document.documentElement).addEventListener("click",(function t(o){e.contains(o.target)||(r.removeEventListener("click",t),n())}))}document.querySelectorAll("[data-dropdown]").forEach((function(e){["touchstart","click"].forEach((function(n){e.addEventListener(n,t)}))}))}(),c=document.querySelector('[data-menu="button"]'),u=document.querySelector('[data-menu="list"]'),c.addEventListener("click",(function(t){c.classList.toggle("active"),u.classList.toggle("active")})),e(),l=(s=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),f=s.dataset.horario.split(",").map(Number),d=(h=new Date).getDay(),v=h.getHours(),p=-1!==l.indexOf(d),m=v>=f[0]&&v<f[1],p&&m&&s.classList.add("aberto"),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((function(t){console.log(Error(t))})),function(){function t(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3>\n                     <span data-numero>").concat(t.total,"</span>\n                     "),e}function n(){return(n=o(g().mark((function n(r){var o,i,a;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(r);case 2:return o=n.sent,n.next=5,o.json();case 5:i=n.sent,a=document.querySelector(".numeros-grid"),i.forEach((function(e){var n=t(e);a.appendChild(n)})),e();case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(t){n.apply(this,arguments)}("./animaisapi.json")}()})()})();