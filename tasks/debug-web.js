var gulp = require('gulp');
var sh = require('shelljs');

gulp.task('debug:web', ['build:assets'], function () {
  return sh.exec('ionic serve', {async: true});
});