<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isRelativePath

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a relative path.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-relative-path
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var isRelativePath = require( '@stdlib/assert-is-relative-path' );
```

#### isRelativePath( value )

Tests if a `value` is a relative path.

```javascript
var IS_WINDOWS = require( '@stdlib/assert-is-windows' );

var bool;
if ( IS_WINDOWS ) {
    bool = isRelativePath( 'foo\\bar\\baz' );
    // returns true

    bool = isRelativePath( 'C:\\foo\\..\\bar\\baz' );
    // returns false
} else {
    bool = isRelativePath( './foo/bar/baz' );
    // returns true

    bool = isRelativePath( '/foo/../bar/baz' );
    // returns false
}
```

#### isRelativePath.posix( value )

Tests if a `value` is a POSIX relative path.

```javascript
var bool = isRelativePath.posix( './foo/bar/baz' );
// returns true

bool = isRelativePath.posix( '/foo/../bar/baz' );
// returns false
```

#### isRelativePath.win32( value )

Tests if a `value` is a Windows relative path.

```javascript
var bool = isRelativePath.win32( 'foo\\bar\\baz' );
// returns true

bool = isRelativePath.win32( 'C:\\foo\\..\\bar\\baz' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `isRelativePath()` is platform-specific. On Windows platforms, the function is equal to `isRelativePath.win32()`. On POSIX platforms, the function is equal to `isRelativePath.posix()`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isRelativePath = require( '@stdlib/assert-is-relative-path' );

var bool = isRelativePath.posix( 'foo/' );
// returns true

bool = isRelativePath.posix( 'foo' );
// returns true

bool = isRelativePath.posix( '.' );
// returns true

bool = isRelativePath.posix( '' );
// returns true

bool = isRelativePath.posix( '/foo/bar/baz' );
// returns false

bool = isRelativePath.posix( '/foo/..' );
// returns false

bool = isRelativePath.win32( 'foo\\bar\\baz' );
// returns true

bool = isRelativePath.win32( 'foo/bar/baz' );
// returns true

bool = isRelativePath.win32( 'foo/..' );
// returns true

bool = isRelativePath.win32( '.' );
// returns true

bool = isRelativePath.win32( '' );
// returns true

bool = isRelativePath.win32( 'C:\\foo\\bar\\baz' );
// returns false

bool = isRelativePath.win32( '//server' );
// returns false

bool = isRelativePath.win32( '\\\\server' );
// returns false

bool = isRelativePath.win32( 'C:/foo/bar/baz' );
// returns false

bool = isRelativePath.win32( '/foo/..' );
// returns false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/assert-is-relative-path-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: is-relative-path [options] [<path>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --platform name       Platform: 'win32' or 'posix'.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'/foo/bar/baz\n./docs/repl.txt' | is-relative-path --split /\r?\n/

    # Escaped...
    $ echo -n $'/foo/bar/baz\n./docs/repl.txt' | is-relative-path --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ is-relative-path ./foo/bar/baz --platform=posix
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n './docs/repl.txt' | is-relative-path
true
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '/foo/bar/baz\t./docs/repl.txt' | is-relative-path --platform=posix --split '\t'
false
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-absolute-path`][@stdlib/assert/is-absolute-path]</span><span class="delimiter">: </span><span class="description">test if a value is an absolute path.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-relative-path.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-relative-path

[test-image]: https://github.com/stdlib-js/assert-is-relative-path/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-relative-path/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-relative-path/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-relative-path?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-relative-path.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-relative-path/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/assert-is-relative-path#cli
[cli-url]: https://github.com/stdlib-js/assert-is-relative-path/tree/cli
[@stdlib/assert-is-relative-path]: https://github.com/stdlib-js/assert-is-relative-path/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-relative-path/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-relative-path/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-relative-path/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-relative-path/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-relative-path/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-relative-path/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-relative-path/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-relative-path/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/assert/is-absolute-path]: https://github.com/stdlib-js/assert-is-absolute-path

<!-- </related-links> -->

</section>

<!-- /.links -->
