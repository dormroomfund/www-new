const flow = require('lodash.flow');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = flow(
  withSass,
  withImages
)();
