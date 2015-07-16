var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var projectRoot = require('cordova-root');
var path = require('path');

gulp.task('lint', function () {

  var assets = require(path.join(projectRoot, "assets.json"));

  return gulp.src(assets.js.src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});