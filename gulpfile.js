var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sh = require('shelljs');

var paths = {
  sass: ['app/**/*.scss'],
  libs: [
    'bower_components/ionic/js/ionic.bundle.js',
  ],
  src: [
    'app/js/app.js',
    'app/js/controllers.js',
  ]
};

var build = 'build.js';
var dist = 'www/js';

gulp.task('serve', ['build'], function () {
  return sh.exec('ionic serve');
});

gulp.task('android', ['build', 'compress', 'resources'], function () {
  return sh.exec('ionic run android');
});

gulp.task('default', ['android']);

gulp.task('build', ['sass', 'lint', 'concat', 'copy']);

gulp.task('concat', function () {
  src = paths.libs.concat(paths.src);
  return gulp.src(src)
  .pipe(concat(build))
  .pipe(gulp.dest(dist));
});

gulp.task('lint', function (done) {

  return gulp.src(paths.src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('sass', function() {
  return gulp.src('./app/scss/app.scss')
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

gulp.task('copy-ionic-fonts', function () {
  return gulp.src('bower_components/ionic/fonts/**/*').pipe(gulp.dest('www/fonts/ionicons'));
});

gulp.task('compress', function() {
  return gulp.src(dist+'/'+build)
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.src, ['concat']);
  gulp.watch('app/**/*.html', ['copy']);
});
