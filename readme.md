Snow.js
=======

Falling snow for a website.  Gently wafting appearance similar to a pleasant snow observed by the author.  Should run in browsers that support HTML [`<canvas>`](https://caniuse.com/?search=canvas), CSS [`pointer-events`](https://caniuse.com/?search=pointer-events) and JS [`requestAnimationFrame`](https://caniuse.com/?search=requestAnimationFrame), though not tested thoroughly.  Uses a bit of processor continuously but to me it is worth it to help enjoy winter.

To use, load `snow.js` and `snow.css` in your HTML, like:

``` html
<link rel="stylesheet" href="/lib/@tobymackenzie/snow.js/snow.css" />
<script src="/lib/@tobymackenzie/snow.js/snow.js"></script>
```

There are other variants of the JS that use HTML or SVG nodes.  I'm not sure if I will keep these.  Canvas seems to have the best performance, though that is hard to test.  The `CanvasSnowView` is the current version used by `snow.js`, and I may remove the others and combine the canvas stuff into `SnowView`.

License
------

<footer>
<p>SPDX-License-Identifier: 0BSD</p>
</footer>
