// tailwind.config.js
module.exports = {
  content: [
    "./_layouts/**/*.html", // Layouts
    "./_includes/**/*.html", // Partials/Includes
    "./pages/**/*.html", // Pages
    "./index.html", // Homepage
  ],
  theme: {
    extend: {
      colors: {
        "liu-cc-background": "#66e2d3",
        "liu-cc-shaded-background": "#61d7cd",
        "liu-cc-checkbox-background": "#28666c",
        "liu-cc-arrow-background": "#55c4bc",
        "liu-cc-toggle-readonly-background": "#55c4bc",
        "liu-cc-chatbot-bg-color": "#a3e6eb",
        "liu-box-background": "#cdf6ee",
        "liu-box-fg-color": "#b9eef2",
      },
    },
  },
  plugins: [],
};
