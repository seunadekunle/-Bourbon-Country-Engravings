/*! For license information please see 275.0eeed54f.chunk.js.LICENSE.txt */
(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[275],{7757:function(t,r,e){t.exports=e(9727)},275:function(t,r,e){"use strict";function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.r(r),e.d(r,{default:function(){return w}});var i=e(885),a=e(7757),c=e.n(a),u=e(2791),s=e(984),f=e(8931);function l(t){var r="https://www.paypal.com/sdk/js";t.sdkBaseURL&&(r=t.sdkBaseURL,delete t.sdkBaseURL);var e=function(t,r){var e="",n="";Array.isArray(t)?t.length>1?(e="*",n=t.toString()):e=t.toString():"string"===typeof t&&t.length>0?e=t:"string"===typeof r&&r.length>0&&(e="*",n=r);return{"merchant-id":e,"data-merchant-id":n}}(t["merchant-id"],t["data-merchant-id"]),n=Object.assign({},t,e),o=Object.keys(n).filter((function(t){return"undefined"!==typeof n[t]&&null!==n[t]&&""!==n[t]})).reduce((function(t,r){var e=n[r].toString();return"data-"===r.substring(0,5)?t.dataAttributes[r]=e:t.queryParams[r]=e,t}),{queryParams:{},dataAttributes:{}}),i=o.queryParams,a=o.dataAttributes;return{url:r+"?"+h(i),dataAttributes:a}}function h(t){var r="";return Object.keys(t).forEach((function(e){0!==r.length&&(r+="&"),r+=e+"="+t[e]})),r}function p(t,r){void 0===r&&(r={});var e=document.createElement("script");return e.src=t,Object.keys(r).forEach((function(t){e.setAttribute(t,r[t]),"data-csp-nonce"===t&&e.setAttribute("nonce",r["data-csp-nonce"])})),e}function d(t,r){if(void 0===r&&(r=y()),g(t,r),"undefined"===typeof window)return r.resolve(null);var e=l(t),n=e.url,o=e.dataAttributes,i=o["data-namespace"]||"paypal",a=v(i);return function(t,r){var e=document.querySelector('script[src="'+t+'"]');if(null===e)return null;var n=p(t,r),o=Object.assign({},e.dataset);if(delete o.uidAuto,Object.keys(o).length!==Object.keys(n.dataset).length)return null;var i=!0;return Object.keys(o).forEach((function(t){o[t]!==n.dataset[t]&&(i=!1)})),i?e:null}(n,o)&&a?r.resolve(a):function(t,r){void 0===r&&(r=y());g(t,r);var e=t.url,n=t.attributes;if("string"!==typeof e||0===e.length)throw new Error("Invalid url.");if("undefined"!==typeof n&&"object"!==typeof n)throw new Error("Expected attributes to be an object.");return new r((function(t,r){if("undefined"===typeof window)return t();!function(t){var r=t.url,e=t.attributes,n=t.onSuccess,o=t.onError,i=p(r,e);i.onerror=o,i.onload=n,document.head.insertBefore(i,document.head.firstElementChild)}({url:e,attributes:n,onSuccess:function(){return t()},onError:function(){return r(new Error('The script "'+e+'" failed to load.'))}})}))}({url:n,attributes:o},r).then((function(){var t=v(i);if(t)return t;throw new Error("The window."+i+" global variable is not available.")}))}function y(){if("undefined"===typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function v(t){return window[t]}function g(t,r){if("object"!==typeof t||null===t)throw new Error("Expected an options object.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected PromisePonyfill to be a function.")}var m=e(184);function w(){var t=(0,u.useRef)(),r=(0,f.k6)(),e=(0,u.useContext)(s.x),n=e.total,a=e.cartctx,l=e.order,h=e.checkoutsort,p=n.TotalCartPrice,y=h.filteredcheck,v=(0,i.Z)(a,1)[0],g=(0,i.Z)(l,1)[0];return(0,u.useEffect)((function(){var e=function(){var e=o(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({"client-id":"AcVPwH6c4zhgvpb2Oel9HE5dPeSsq4i2Po_PhZ_CZEk49Z5cuJmasT-8n7g8v6kgHXPNpnvUQqivZQ0D",currency:"USD"});case 2:e.sent.Buttons({createOrder:function(t,r,e){return r.order.create({intent:"CAPTURE",purchase_units:[{description:y.title,amount:{currency_code:"USD",value:p}}]})},onApprove:function(){var t=o(c().mark((function t(e,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.order.capture();case 2:t.sent,r.push("/final"),v([]),g([]);case 6:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),onError:function(t){console.log(t),alert("We encountered an error on the payment part")}}).render(t.current);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,m.jsx)("div",{children:(0,m.jsx)("div",{ref:t})})}},9727:function(t){var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(T){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?d:h,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=d,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function v(){}function g(){}function m(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(A([])));E&&E!==e&&n.call(E,i)&&(w=E);var x=m.prototype=v.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:r,done:!0}}return g.prototype=m,u(x,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new k(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=A,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=r}catch(e){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}}]);
//# sourceMappingURL=275.0eeed54f.chunk.js.map