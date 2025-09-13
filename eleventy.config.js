module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"files": "files"});
  eleventyConfig.addPassthroughCopy({"img": "img"});
  eleventyConfig.addPassthroughCopy({"src/styles": "styles"});
  eleventyConfig.addPassthroughCopy({"src/js": "js"});
  eleventyConfig.addWatchTarget("src/styles/");
  eleventyConfig.addWatchTarget("src/js/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      // Output build to docs/ for GitHub Pages
      output: "docs"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
