var gulp = require('gulp');
var sh = require('shelljs');

gulp.task('serve', ['build:assets'], function () {
  return sh.exec('ionic serve', {async: true});
});