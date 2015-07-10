var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sh = require('shelljs');

var paths = {
  sass: ['app/**/*.scss'],
  libs: [
    'app/lib/ionic/js/ionic.bundle.js',
  ],
  src: [
    'app/js/app.js',
    'app/js/controllers.js',
  ]
};

var build = 'build.js';
var dist = 'www/js';

gulp.task('android', ['build', 'compress'], function () {
  return sh.exec('ionic run android');
});

gulp.task('default', ['build'], function () {
  return sh.exec('ionic serve');
});

gulp.task('build', ['sass', 'lint', 'concat', 'copy', 'resources']);

gulp.task('concat', function () {
  src = paths.libs.concat(paths.src);
  return gulp.src(src)
  .pipe(concat(build))
  .pipe(gulp.dest(dist));
});

gulp.task('lint', function (done) {

  return gulp.src(paths.src)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sass', function(done) {
  gulp.src('./app/scss/app.scss')
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

gulp.task('copy', ['copy-ionic-fonts', 'copy-templates', 'copy-images']);

gulp.task('copy-templates', function () {
  return sh.exec('cp -a app/templates/. www/templates/');
});

gulp.task('copy-images', function () {
  return sh.exec('cp -a app/img/. www/img/');
});

gulp.task('copy-ionic-fonts', function () {
  return sh.exec('cp -a app/lib/ionic/fonts/. www/fonts/ionicons/');
});

gulp.task('compress', function() {
  return gulp.src(dist+'/'+build)
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.src, ['concat']);
});
