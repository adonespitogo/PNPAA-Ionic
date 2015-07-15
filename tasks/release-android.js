
var gulp = require('gulp');
var android = require('gulp-cordova-build-android');
var del = require('del');
var path = require('path');
var cordovaLib = require('cordova-lib').cordova;

var releaseAPK = process.env.apk === 'x86'? 'android-x86-release.apk' : 'android-armv7-release.apk'

var projectRoot = cordovaLib.findProjectRoot();


gulp.task('release:android', ['build:assets','compress', 'host'], function(done) {

    del(['platforms/android/build/outputs/apk/'], function () {

      gulp.src('../')
      .pipe(android({
        storeFile: path.join(projectRoot, 'pnpaa-release.keystore'),
        keyAlias: 'alias_name',
        releaseApk: releaseAPK
      }))
      .pipe(gulp.dest('releases/android/'))
      .on('end', done);

    });
});