Fork of ttf2woff
========

ttf2woff converts TTF fonts to WOFF format. That can be useful for different
webfont generation tools.

This is node.js partial port of original woff CLI tools
http://people.mozilla.com/~jkew/woff/

## About this fork

Add the `compressor` option to use [fflate](https://github.com/101arrowz/fflate) instead of `pako`, the default is still `pako`.

Enable fflate:

```js
ttf2woff(some_font, { compressor: 'fflate' });
```

Usage
-----

Install:

``` bash
npm install -g ttf2woff
```

Usage example:

``` bash
ttf2woff fontello.ttf fontello.woff
```


Authors
-------

* Viktor Semykin <thesame.ml@gmail.com>


License
-------

Copyright (c) 2013 [Vitaly Puzrin](https://github.com/puzrin).
Released under the MIT license. See
[LICENSE](https://github.com/nodeca/ttf2woff/blob/master/LICENSE) for details.

