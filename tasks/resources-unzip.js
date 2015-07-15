var gulp = require('gulp');
var unzip = require('gulp-unzip');

gulp.task('resources:unzip', function () {
  return gulp.src("resources.zip")
    .pipe(unzip())
    .pipe(gulp.dest('./'))
});