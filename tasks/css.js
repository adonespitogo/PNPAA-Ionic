var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var projectRoot = require('cordova-root');
var path = require('path');

gulp.task('concat:sass', function () {

  var assets = require(path.join(projectRoot, "assets.json"));

  return gulp.src(assets.sass)
          .pipe(concat('app.scss'))
          .pipe(gulp.dest(path.join(projectRoot, '.tmp')));
});

gulp.task('sass', ['clean:css', 'concat:sass'], function() {

  var assets = require(path.join(projectRoot, "assets.json"));

  return gulp.src(path.join(projectRoot, '.tmp/app.scss'))
          .pipe(sass({
            errLogToConsole: true
          }))
          .pipe(gulp.dest(path.join(projectRoot, '.tmp/')));
});

gulp.task('css', ['sass'], function () {

  var assets = require(path.join(projectRoot, "assets.json"));

  var cssSrc = [path.join(projectRoot, '.tmp/app.css')].concat(assets.css);

  return gulp.src(cssSrc)
          .pipe(concatCss('app.css'))
          .pipe(minifyCss({
            keepSpecialComments: 0
          }))
          .pipe(gulp.dest('www/css/'));

});
