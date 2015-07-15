var gulp = require('gulp'),
    plugin = require('gulp-cordova-plugin'),
    plugins = require('../package.json').cordovaPlugins,
    del = require('del'),
    shell = require('shelljs');

gulp.task('android:install', function() {
    return gulp.src('dist')
    .pipe(plugin(plugins));
});