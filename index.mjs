// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.1.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import{posix as i,win32 as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-absolute-path@v0.1.1-esm/index.mjs";function r(s){return e(s)&&!i(s)}function d(s){return e(s)&&!n(s)}var o;s(o=t?d:r,"posix",r),s(o,"win32",d);var m=o;export{m as default,r as posix,d as win32};
//# sourceMappingURL=index.mjs.map
