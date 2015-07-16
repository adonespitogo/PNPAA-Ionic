var gulp = require('gulp');
var zip = require('gulp-zip');
var projectRoot = require('cordova-root');

gulp.task('resources:zip', function () {
    return gulp.src('resources/**/*')
        .pipe(zip('resources.zip'))
        .pipe(gulp.dest(projectRoot));
});