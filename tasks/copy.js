var gulp = require('gulp');

gulp.task('copy:templates', ['clean:templates'], function () {
  return gulp.src('app/templates/**/*.html').pipe(gulp.dest('www/templates'));
});

gulp.task('copy:images', ['clean:img'], function () {
  return gulp.src('app/img/**/*').pipe(gulp.dest('www/img'));
});

gulp.task('copy:ionic-fonts', ['clean:fonts'], function () {
  return gulp.src('bower_components/ionic/fonts/**/*')
        .pipe(gulp.dest('www/fonts/ionicons'));
});

gulp.task('copy', ['copy:ionic-fonts', 'copy:templates', 'copy:images']);