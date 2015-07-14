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
var dist = './www/js/';

gulp.task('serve', ['build'], function () {
  return sh.exec('ionic serve', {async: true});
});

gulp.task('android', ['build', 'compress', 'host'], function () {
  return sh.exec('ionic run android', {async: true});
});

gulp.task('default', ['android']);

gulp.task('build', ['sass', 'concat', 'copy']);

gulp.task('concat', ['lint', 'clean-js'], function () {

  var assets = require("./assets.json");

  src = assets.js.libs.concat(assets.js.src);
  return gulp.src(src)
  .pipe(concat(build))
  .pipe(gulp.dest(dist));
});

gulp.task('lint', function (done) {

  var assets = require("./assets.json");

  return gulp.src(assets.js.src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('sass', ['clean-css'], function() {

  var assets = require("./assets.json");

  return gulp.src(assets.sass.main)
          .pipe(sass({
            errLogToConsole: true
          }))
          .pipe(gulp.dest('./www/css/'))
          .pipe(minifyCss({
            keepSpecialComments: 0
          }))
          .pipe(gulp.dest('./www/css/'));
});

gulp.task('copy', ['copy-ionic-fonts', 'copy-templates', 'copy-images']);

gulp.task('copy-templates', ['clean-templates'], function () {
  return gulp.src('app/templates/**/*.html').pipe(gulp.dest('www/templates'));
});

gulp.task('copy-images', ['clean-img'], function () {
  return gulp.src('app/img/**/*').pipe(gulp.dest('www/img'));
});

gulp.task('host', ['concat'], function () {

  var host = process.env.host || 'http://192.168.1.178:1337';

  return gulp.src(dist+build)
          .pipe(replace(/http\:\/\/localhost\:1337/, host))
          .pipe(gulp.dest(dist));
});

// gulp.task('copy-jquery-ui-images', function () {
//   return gulp.src('bower_components/jquery-ui/themes/smoothness/images/**/*')
//   .pipe(gulp.dest('www/bower_components/jquery-ui/themes/smoothness/images/'));
// });

gulp.task('copy-ionic-fonts', ['clean-fonts'], function () {
  return gulp.src('bower_components/ionic/fonts/**/*')
        .pipe(gulp.dest('www/fonts/ionicons'));
});

gulp.task('compress', ['concat', 'host'], function() {
  return gulp.src(dist+build)
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

var pluginsTask = require('./tasks/plugins');
gulp.task('plugins', function () {
  pluginsTask();
});

gulp.task('clean-css', function (done) {
  del(['www/css/**/*'], done);
});

gulp.task('clean-fonts', function (done) {
  del(['www/fonts/**/*'], done);
});

gulp.task('clean-img', function (done) {
  del(['www/img/**/*'], done);
});

gulp.task('clean-js', function (done) {
  del(['www/js/**/*'], done);
});

gulp.task('clean-templates', function (done) {
  del(['www/templates/**/*'], done);
});

gulp.task('watch', function() {

  var assets = require("./assets.json");

  gulp.watch(assets.sass.all, ['sass']);
  gulp.watch(assets.js.src, ['lint', 'concat']);
  gulp.watch('./assets.json', ['build']);
  gulp.watch('app/**/*.html', ['copy']);
});

var deployAndroid = require('./tasks/deploy.google-play');
gulp.task('build:android', function () {
  return deployAndroid(gulp);
});

gulp.task('zipalign', function () {
  return sh.exec('zipalign -v 4 releases/android/unsigned.apk releases/android/release.apk');
});

