var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
  sass: ['./scss/**/*.scss'],
  src: [
    'app/js/app.js',
    'app/js/controllers.js',
  ]
};

var src = [
  'app/js/app.js',
  'app/js/controllers.js',
];

gulp.task('android', ['build'], function () {
  return sh.exec('ionic run android');
});

gulp.task('default', ['build'], function () {
  return sh.exec('ionic serve');
});

gulp.task('build', ['sass', 'lint', 'concat', 'resources']);

gulp.task('concat', function (done) {
  gulp.src(paths.src)
  .pipe(concat('build.js'))
  .pipe(gulp.dest('www/js/'))
  .on('end', done);
});

gulp.task('lint', function () {
  return gulp.src(paths.src)
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
});

gulp.task('sass', function(done) {
  gulp.src('./scss/app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('resources', function () {
  return sh.exec('ionic resources');
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.src, ['concat']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
