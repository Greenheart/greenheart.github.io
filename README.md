# [My personal webpage](https://samuelplumppu.se)

---

Project root (`/`) contains the optimized code to be used in production.
The `src/`-directory contains full source code used for development.


## Development
1. Go to `/src/` and start local server: `python3 -m http.server`
2. Make changes
3. [Optimize CSS](https://css.github.io/csso/csso.html) into a single `bundle.min.css`
  * Combine dependencies, the order is important!
  * Vendor prefix `style.css`
  * Put `style.css` last in the optimizer
4. [Optimize JS](https://jscompress.com/) into a single `bundle.min.js`
  * Introduce dependencies in order, `page.js` last
5. [Optimize HTML](https://htmlcompressor.com/compressor/) into `index.html`
  * Make sure to use correct `link`s and `script`s - **remove external resources** & **use `bundle.min`-files**
6. [Optimize images](https://tinypng.com) and store in `/images`. Originals are kept in `/src/images`
7. Move resulting files to `/` and verify.
