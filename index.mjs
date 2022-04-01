// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-absolute-path@esm/index.mjs";var r=t.isPrimitive,n=e.posix;var d=function(s){return r(s)&&!n(s)},m=t.isPrimitive,o=e.win32;var a,p=s,l=d,j=function(s){return m(s)&&!o(s)};p(a=i?j:l,"posix",l),p(a,"win32",j);var v=a;export{v as default,l as posix,j as win32};
//# sourceMappingURL=index.mjs.map
