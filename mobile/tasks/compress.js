var gulp = require('gulp');
var uglify = require('gulp-uglify');
var build = 'build.js';
var dist = 'www/js/';

gulp.task('compress', ['concat', 'host'], function() {
  return gulp.src(dist+build)
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});