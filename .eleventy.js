// .eleventy.js
module.exports = function (eleventyConfig) {
  // Pass-through CSS folder so it's copied as-is
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    permalink: true,
  });
  return {
    dir: {
      input: ".", // Source folder
      includes: "_includes", // For header and footer includes
      layouts: "_layouts", // For default layout
      output: "_site", // Output folder
    },
  };
};
