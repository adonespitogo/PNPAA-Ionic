var gulp = require('gulp');
var replace = require('gulp-replace');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sh = require('shelljs');
var del = require('del');
var build = 'build.js';
var dist = '../www/js/';


gulp.task('clean:css', function (done) {
  del(['www/css/**/*'], done);
});

gulp.task('clean:fonts', function (done) {
  del(['www/fonts/**/*'], done);
});

gulp.task('clean:img', function (done) {
  del(['www/img/**/*'], done);
});

gulp.task('clean:js', function (done) {
  del(['www/js/**/*'], done);
});

gulp.task('clean:templates', function (done) {
  del(['www/templates/**/*'], done);
});