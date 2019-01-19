const flow = require('lodash.flow');
const withSass = require('@zeit/next-sass');
const withStylus = require('@zeit/next-stylus');
const withOptimizedImages = require('next-optimized-images');

module.exports = flow(
  withSass,
  withStylus,
  withOptimizedImages
)();
