var gulp = require('gulp');
var sh = require('shelljs');

gulp.task('debug:android', ['build:assets', 'host'], function (done) {
  return sh.exec('ionic run android', {async: true}, done);
});