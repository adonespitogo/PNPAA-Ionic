var gulp = require('gulp'),
    plugin = require('gulp-cordova-plugin'),
    plugins = require('../package.json').cordovaPlugins,
    del = require('del'),
    shell = require('shelljs');

gulp.task('plugins:empty', function () {
  return shell.rm('-r', 'plugins');
});

gulp.task('plugins', ['plugins:empty'], function() {

return gulp.src('plugins')
      .pipe(plugin(plugins));
});