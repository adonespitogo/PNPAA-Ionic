var gulp = require('gulp'),
    plugin = require('gulp-cordova-plugin'),
    plugins = require('../package.json').cordovaPlugins,
    del = require('del'),
    shell = require('shelljs');;

gulp.task('plugins', function(done) {
    del(['platforms/android'], function () {
        return gulp.src('dist')
                .pipe(plugin(plugins))
                .on('end', function () {
                    shell.cd('../');
                    shell.exec('ionic platform add android');
                });
    });
});