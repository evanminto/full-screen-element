!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t,e,r,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var u=t.apply(e,n);function a(t){r(u,o,i,a,c,"next",t)}function c(t){r(u,o,i,a,c,"throw",t)}a(void 0)}))}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){return c(t)}function f(t,r){return!r||"object"!=((n=r)&&n.constructor===Symbol?"symbol":typeof n)&&"function"!=typeof r?e(t):r;var n}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=l(t);if(e){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t,e){return p(t,e)}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function g(t,e,r){return(g=d()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&y(o,r.prototype),o}).apply(null,arguments)}function m(t,e,r){return g.apply(null,arguments)}function b(t){var e="function"==typeof Map?new Map:void 0;return b=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return m(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,t)},b(t)}function w(t){return b(t)}var E={},x=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),u=new T(n||[]);return i._invoke=function(t,e,r){var n=s;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=k(u,r);if(a){if(a===v)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?y:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=y,r.method="throw",r.arg=c.arg)}}}(t,r,u),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(F([])));E&&E!==r&&n.call(E,i)&&(b=E);var x=m.prototype=d.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,u,a){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,u,a)}),(function(t){r("throw",t,u,a)})):e.resolve(s).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,a)}))}a(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function F(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,u=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return u.next=u}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=m,c(x,"constructor",m),c(m,"constructor",g),g.displayName=c(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(O.prototype),c(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var u=new O(l(e,r,n,o),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},L(x),c(x,a,"Generator"),c(x,i,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=F,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc)return o("end");if(u.tryLoc<=this.prev){var c=n.call(u,"catchLoc"),l=n.call(u,"finallyLoc");if(c&&l){if(this.prev<u.catchLoc)return o(u.catchLoc,!0);if(this.prev<u.finallyLoc)return o(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return o(u.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return o(u.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(E);try{regeneratorRuntime=x}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=x:Function("r","regeneratorRuntime = r")(x)}var L=function(t){"use strict";v(r,t);var e=s(r);function r(){return o(this,r),e.call(this,r.eventName,{bubbles:!0,composed:!0})}return r}(w(Event));function O(t){return k.apply(this,arguments)}function k(){return(k=n(t(E).mark((function e(r){return t(E).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!("requestFullscreen"in r)){t.next=4;break}return t.abrupt("return",r.requestFullscreen({navigationUI:"hide"}));case 4:if(!("webkitRequestFullscreen"in r)){t.next=6;break}return t.abrupt("return",r.webkitRequestFullscreen({navigationUI:"hide"}));case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}h(L,"eventName","full-screen-toggle");var _=function(e){"use strict";v(i,e);var r=s(i);function i(){return o(this,i),r.apply(this,arguments)}return a(i,[{key:"toggle",value:function(){var e=this;return n(t(E).mark((function r(){return t(E).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(document.fullscreenElement!==e&&document.webkitFullscreenElement!==e){t.next=2;break}return t.abrupt("return","exitFullscreen"in document?document.exitFullscreen():"webkitExitFullscreen"in document?document.webkitExitFullscreen():void 0);case 2:return t.abrupt("return",O(e));case 3:case"end":return t.stop()}}),r)})))()}},{key:"connectedCallback",value:function(){var t=this;this.addEventListener(L.eventName,(function(){return t.toggle()}))}}]),i}(w(HTMLElement));h(_,"tagName","full-screen");var j=new WeakSet,T=function(t){"use strict";v(n,t);var r=s(n);function n(){var t;return o(this,n),i(e(t=r.apply(this,arguments)),j),t}return a(n,[{key:"connectedCallback",value:function(){if(this.addEventListener("click",function(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return r}(this,j,F).bind(this)),document.fullscreenEnabled||document.webkitFullscreenEnabled){var t=this.querySelector('template[data-behavior="'.concat(n.behaviors.TEMPLATE,'"]'))||this.querySelector("template");t&&t.replaceWith(t.content.cloneNode(!0))}}}]),n}(w(HTMLElement));function F(t){(t.target.closest('[data-behavior="'.concat(T.behaviors.TOGGLE,'"]'))||t.target.closest("button"))&&(t.preventDefault(),this.dispatchEvent(new L))}h(T,"tagName","full-screen-toggle"),h(T,"behaviors",{BUTTON:"full-screen-toggle-button",TEMPLATE:"full-screen-toggle-template"}),customElements.define(_.tagName,_),customElements.define(T.tagName,T)}();
//# sourceMappingURL=index.js.map
