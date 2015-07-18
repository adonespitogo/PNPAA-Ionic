var gulp = require('gulp');

gulp.task('build:assets', ['css', 'concat', 'host', 'copy']);