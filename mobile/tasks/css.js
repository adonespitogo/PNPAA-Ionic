var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('concat:sass', function () {

  var assets = require("../assets.json");

  return gulp.src(assets.sass)
          .pipe(concat('app.scss'))
          .pipe(gulp.dest('.tmp'));
});

gulp.task('sass', ['clean:css', 'concat:sass'], function() {

  var assets = require("../assets.json");

  return gulp.src(['.tmp/app.scss'])
          .pipe(sass({
            errLogToConsole: true
          }))
          .pipe(gulp.dest('app/css'));
});

gulp.task('css', ['sass'], function () {

  var assets = require('../assets.json');

  return gulp.src(assets.css)
          .pipe(concatCss('app.css'))
          .pipe(minifyCss({
            keepSpecialComments: 0
          }))
          .pipe(gulp.dest('www/css/'))

          ;
});
