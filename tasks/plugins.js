// reinstall cordova plugins
// reinstall android platform
// reinstall crosswalk browser

var gulp = require('gulp'),
    plugin = require('gulp-cordova-plugin'),
    cordovaLib = require('cordova-lib').cordova,
    projectRoot = cordovaLib.findProjectRoot(),
    path = require('path'),
    pkg = require(path.join(projectRoot, 'package.json')),
    del = require('del'),
    pluginsPath = path.join(projectRoot, 'plugins'),
    shell = require('shelljs');

gulp.task('platform:remove:android', function () {
    return shell.exec('ionic platform rm android');
});

gulp.task('plugins:empty', function (done) {
    del(pluginsPath, done);
});

gulp.task('add:crosswalk:browser', ['platform:remove:android', 'plugins:empty'], function () {
    return shell.exec('ionic browser add crosswalk');
});

gulp.task('plugins', ['plugins:empty', 'platform:remove:android', 'add:crosswalk:browser'], function() {
     return gulp.src(projectRoot)
        .pipe(plugin(pkg.cordovaPlugins));
});