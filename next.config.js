const flow = require('lodash.flow');
const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');

module.exports = flow(
  withSass,
  withOptimizedImages
)();
