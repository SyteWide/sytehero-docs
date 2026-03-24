// Custom Docusaurus plugin to integrate Tailwind CSS via PostCSS pipeline.
module.exports = function tailwindPlugin(/* context, options */) {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(require('tailwindcss'));
      postcssOptions.plugins.push(require('autoprefixer'));
      return postcssOptions;
    },
  };
};
