var gulp = require('gulp');
var unzip = require('gulp-unzip');
var projectRoot = require('cordova-root');
var path = require('path');

gulp.task('resources:unzip', function () {
  return gulp.src(path.join(projectRoot, "resources.zip"))
    .pipe(unzip())
    .pipe(gulp.dest(path.join(projectRoot, "resources/")))
});