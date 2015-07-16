var gulp = require('gulp'),
    plugin = require('gulp-cordova-plugin'),
    cordovaLib = require('cordova-lib').cordova,
    projectRoot = cordovaLib.findProjectRoot(),
    path = require('path'),
    pkg = require(path.join(projectRoot, 'package.json')),
    del = require('del'),
    pluginsPath = path.join(projectRoot, 'plugins');

gulp.task('plugins:empty', function (done) {
    del(pluginsPath, done);
});

gulp.task('plugins', ['plugins:empty'], function() {
     return gulp.src(projectRoot)
        .pipe(plugin(pkg.cordovaPlugins));
});