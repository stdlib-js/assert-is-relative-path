// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__;var c=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,c){var l,f,s,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(e,t)||a.call(e,t)?(l=e.__proto__,e.__proto__=r,delete e[t],e[t]=c.value,e.__proto__=l):e[t]=c.value),s="get"in c,p="set"in c,f&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(e,t,c.get),p&&i&&i.call(e,t,c.set),e};function l(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(t,r);return new n}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var s="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function p(){throw new Error("setTimeout has not been defined")}function y(){throw new Error("clearTimeout has not been defined")}var v=p,d=y;function m(e){if(v===setTimeout)return setTimeout(e,0);if((v===p||!v)&&setTimeout)return v=setTimeout,setTimeout(e,0);try{return v(e,0)}catch(t){try{return v.call(null,e,0)}catch(t){return v.call(this,e,0)}}}"function"==typeof s.setTimeout&&(v=setTimeout),"function"==typeof s.clearTimeout&&(d=clearTimeout);var b,h=[],w=!1,g=-1;function _(){w&&b&&(w=!1,b.length?h=b.concat(h):g=-1,h.length&&T())}function T(){if(!w){var e=m(_);w=!0;for(var t=h.length;t;){for(b=h,h=[];++g<t;)b&&b[g].run();g=-1,t=h.length}b=null,w=!1,function(e){if(d===clearTimeout)return clearTimeout(e);if((d===y||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}(e)}}function j(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];h.push(new O(e,t)),1!==h.length||w||m(T)}function O(e,t){this.fun=e,this.array=t}O.prototype.run=function(){this.fun.apply(null,this.array)};var S={},A=[],P={},k={},E={};function x(){}var L=x,C=x,D=x,M=x,N=x,z=x,F=x;function G(e){throw new Error("process.binding is not supported")}function V(){return"/"}function q(e){throw new Error("process.chdir is not supported")}function B(){return 0}var H=s.performance||{},I=H.now||H.mozNow||H.msNow||H.oNow||H.webkitNow||function(){return(new Date).getTime()};function J(e){var t=.001*I.call(H),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var K=new Date;function Q(){return(new Date-K)/1e3}var R={nextTick:j,title:"browser",browser:true,env:S,argv:A,version:"",versions:P,on:L,addListener:C,once:D,off:M,removeListener:N,removeAllListeners:z,emit:F,binding:G,cwd:V,chdir:q,umask:B,hrtime:J,platform:"browser",release:k,config:E,uptime:Q},U="win32"===f(Object.freeze({__proto__:null,addListener:C,argv:A,binding:G,browser:true,chdir:q,config:E,cwd:V,default:R,emit:F,env:S,hrtime:J,nextTick:j,off:M,on:L,once:D,platform:"browser",release:k,removeAllListeners:z,removeListener:N,title:"browser",umask:B,uptime:Q,version:"",versions:P})).platform;function W(e){return"string"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return X&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var $=Object.prototype.hasOwnProperty;var ee="function"==typeof Symbol?Symbol.toStringTag:"";var te=Y()?function(e){var t,r,n,o,i;if(null==e)return Z.call(e);r=e[ee],i=ee,t=null!=(o=e)&&$.call(o,i);try{e[ee]=void 0}catch(t){return Z.call(e)}return n=Z.call(e),t?e[ee]=r:delete e[ee],n}:function(e){return Z.call(e)},re=String.prototype.valueOf;var ne,oe,ie=Y();function ue(e){return"object"==typeof e&&(e instanceof String||(ie?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object String]"===te(e)))}function ae(e){return W(e)||ue(e)}function ce(e){return W(e)&&e.length>0&&47===e.charCodeAt(0)}function le(e){var t,r;return!!W(e)&&(0!==(r=e.length)&&(47===(t=e.charCodeAt(0))||92===t||(t>=65&&t<=90||t>=97&&t<=122)&&r>2&&58===e.charCodeAt(1)&&(47===(t=e.charCodeAt(2))||92===t)))}function fe(e){return W(e)&&!ce(e)}function se(e){return W(e)&&!le(e)}l(ae,"isPrimitive",W),l(ae,"isObject",ue),l(ne=U?le:ce,"posix",ce),l(ne,"win32",le),l(oe=U?se:fe,"posix",fe),l(oe,"win32",se);var pe=oe;export{pe as default,fe as posix,se as win32};
//# sourceMappingURL=mod.js.map