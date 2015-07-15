
var gulp = require('gulp');
var android = require('gulp-cordova-build-android');
var del = require('del');
var path = require('path');
var cordovaLib = require('cordova-lib').cordova;


var projectRoot = cordovaLib.findProjectRoot();


gulp.task('release:android', ['build:assets','compress', 'host'], function(done) {

    del(['releases/android/*', 'platforms/android/build/outputs/apk/'], function () {

      gulp.src('../')
      .pipe(android({
        storeFile: path.join(projectRoot, 'pnpaa-release.keystore'),
        keyAlias: 'alias_name',
        releaseApk: 'android-armv7-release.apk'
      }))
      .pipe(gulp.dest('releases/android/'))
      .on('end', done);

    });
});