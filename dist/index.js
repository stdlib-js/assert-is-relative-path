"use strict";var t=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var a=t(function(f,s){
var q=require('@stdlib/assert-is-string/dist').isPrimitive,h=require('@stdlib/assert-is-absolute-path/dist').posix;function l(i){return q(i)&&!h(i)}s.exports=l
});var v=t(function(W,u){
var x=require('@stdlib/assert-is-string/dist').isPrimitive,R=require('@stdlib/assert-is-absolute-path/dist').win32;function c(i){return x(i)&&!R(i)}u.exports=c
});var n=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=require('@stdlib/assert-is-windows/dist'),o=a(),P=v(),e;p?e=P:e=o;n(e,"posix",o);n(e,"win32",P);module.exports=e;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
