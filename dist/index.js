"use strict";var t=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(q){throw (e=0, q)}};};var a=t(function(W,s){
var h=require('@stdlib/assert-is-string/dist').isPrimitive,l=require('@stdlib/assert-is-absolute-path/dist').posix;function x(i){return h(i)&&!l(i)}s.exports=x
});var v=t(function(b,u){
var R=require('@stdlib/assert-is-string/dist').isPrimitive,c=require('@stdlib/assert-is-absolute-path/dist').win32;function p(i){return R(i)&&!c(i)}u.exports=p
});var n=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/assert-is-windows/dist'),o=a(),P=v(),r;S?r=P:r=o;n(r,"posix",o);n(r,"win32",P);module.exports=r;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
