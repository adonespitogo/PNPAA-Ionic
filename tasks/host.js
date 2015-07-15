var gulp = require('gulp');
var replace = require('gulp-replace');
var build = 'build.js';
var dist = '../www/js/';

gulp.task('host', ['concat'], function () {

  var host = process.env.host || 'http://192.168.1.178:1337';

  return gulp.src(dist+build)
          .pipe(replace(/http\:\/\/localhost\:1337/, host))
          .pipe(gulp.dest(dist));
});