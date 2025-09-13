# Ege Çırakman Academic Website

Static site built with [Eleventy](https://www.11ty.dev/).

**Live site:** https://egecirakman.com

**CV PDF:** https://egecirakman.com/files/Ege_Cirakman_CV.pdf

## Development

```bash
npm install
npm start   # local dev server
npm run build  # production build to _site/
```

## Content

Edit JSON files in `src/_data/` to update publications, experience, awards, or projects. Pages are Nunjucks templates in `src/`.
## Assets

Binary assets (icons, CV) are excluded. Replace the SVG placeholders in `img/` and add `Ege_Cirakman_CV.pdf` to `files/` when deploying.


## Deploy

The built site in `_site/` is static and can be hosted on GitHub Pages, Netlify, or any static host. Upload contents of `_site/`.

### Custom Domain

Point your domain's DNS to your hosting provider and configure their custom domain settings.
