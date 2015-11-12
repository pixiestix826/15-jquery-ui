var Merge = require('broccoli-merge-trees');
var Sass = require('broccoli-sass');

var stylePaths = [
  'sass',
  'bower_components/normalize-css',
  'bower_components/bourbon/app/assets/stylesheets',
  'bower_components/neat/app/assets/stylesheets',
  'bower_components/font-awesome/scss',
];

var styles = new Sass(stylePaths, 'app.scss', 'app.css');

var scripts = Babel('src', {
  browserPolyfill: true,
  stage: 0,
  moduleIds: true,
  moudles: 'amd',
});

scripts = Concat(scripts, {
  inputFiles: [
    '**/*.js',
  ],
  outputFile: '/app.js',
});

module.exports = new Merge(['public', styles, 'bower_components/font-awesome/fonts'], {overwrite: true});
