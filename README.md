
## Ege Çırakman Academic Website

Static site built with [Eleventy](https://www.11ty.dev/).

**Live site:** https://egecirakman.com  
**CV PDF:** https://egecirakman.com/files/Ege_Cirakman_CV.pdf

## Development

```bash
npm install
npm start   # local dev server
npm run build  # production build to docs/
````

 Ensure Eleventy outputs to `docs/` (for GitHub Pages). In `.eleventy.js`:

 ```js
 module.exports = { dir: { output: "docs" } };
 ```

## Content

Edit JSON files in `src/_data/` to update publications, experience, awards, or projects. Pages are Nunjucks templates in `src/`.

## Assets

Binary assets (icons, CV) are excluded from version control (via `.gitignore`). Replace the SVG placeholders in `img/` and add `Ege_Cirakman_CV.pdf` to `files/` when deploying.

## Deploy

The built site in `docs/` is static and can be hosted on GitHub Pages, Netlify, or any static host. Upload the contents of `docs/`.

### GitHub Pages

Commit the generated `docs/` folder and enable GitHub Pages for this repository, choosing **Deploy from `docs/`** under repository settings. Your site will be available at:

```
https://<username>.github.io/<repo>/
```

### Custom Domain

Point your domain's DNS to your hosting provider and configure their custom domain settings.

## Source

You can create a ZIP of the current source with:

```bash
git archive -o website-source.zip HEAD
```
