var gulp = require('gulp');
var sh = require('shelljs');

gulp.task('debug:android', ['build:assets', 'compress', 'host'], function () {
  return sh.exec('ionic run android', {async: true});
});