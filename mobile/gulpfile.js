var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sh = require('shelljs');
var build = 'build.js';
var dist = './www/js/';

gulp.task('serve', ['build'], function () {
  return sh.exec('ionic serve', {async: true});
});

gulp.task('android', ['resources', 'build', 'compress'], function () {
  return sh.exec('ionic run android', {async: true});
});

gulp.task('default', ['android']);

gulp.task('build', ['sass', 'lint', 'concat', 'copy']);

gulp.task('concat', function () {

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

gulp.task('sass', function() {

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

gulp.task('resources', function () {
  return sh.exec('ionic resources');
});

gulp.task('copy', ['copy-ionic-fonts', 'copy-templates', 'copy-images']);

gulp.task('copy-templates', function () {
  return gulp.src('app/templates/**/*.html').pipe(gulp.dest('www/templates'));
});

gulp.task('copy-images', function () {
  return gulp.src('app/img/**/*').pipe(gulp.dest('www/img'));
});

// gulp.task('copy-jquery-ui-images', function () {
//   return gulp.src('bower_components/jquery-ui/themes/smoothness/images/**/*')
//   .pipe(gulp.dest('www/bower_components/jquery-ui/themes/smoothness/images/'));
// });

gulp.task('copy-ionic-fonts', function () {
  return gulp.src('bower_components/ionic/fonts/**/*').pipe(gulp.dest('www/fonts/ionicons'));
});

gulp.task('compress', ['concat'], function() {
  return gulp.src(dist+build)
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

var pluginsTask = require('./tasks/plugins');
gulp.task('plugins', function () {
  pluginsTask();
});


var platformsTask = require('./tasks/platforms');
gulp.task('platforms', function () {
  platformsTask();
});

gulp.task('watch', function() {

  var assets = require("./assets.json");

  gulp.watch(assets.sass.all, ['sass']);
  gulp.watch(assets.js.src, ['lint', 'concat']);
  gulp.watch('./assets.json', ['build']);
  gulp.watch('app/**/*.html', ['copy']);
});
