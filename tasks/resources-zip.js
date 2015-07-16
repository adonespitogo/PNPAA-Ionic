var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('resources:zip', function () {
    return gulp.src('resources/**/*')
        .pipe(zip('resources.zip'))
        .pipe(gulp.dest('./'));
});