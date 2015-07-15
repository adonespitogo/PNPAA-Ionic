var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', ['clean:css'], function() {

  var assets = require("../assets.json");

  return gulp.src(assets.sass.main)
          .pipe(sass({
            errLogToConsole: true
          }))
          .pipe(gulp.dest('www/css/'))
          .pipe(minifyCss({
            keepSpecialComments: 0
          }))
          .pipe(gulp.dest('www/css/'));
});