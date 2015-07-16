var gulp = require('gulp'),
    plugin = require('gulp-cordova-plugin'),
    pkg = require('../package.json'),
    del = require('del'),
    path = require('path');


var cordovaLib = require('cordova-lib').cordova;
var projectRoot = cordovaLib.findProjectRoot();
var pluginsPath = path.join(projectRoot, 'plugins');

gulp.task('plugins:empty', function (done) {
    del(pluginsPath, done);
});

gulp.task('plugins', ['plugins:empty'], function() {
     return gulp.src(projectRoot)
        .pipe(plugin(pkg.cordovaPlugins));
});