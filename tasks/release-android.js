
var gulp = require('gulp');
var android = require('gulp-cordova-build-android');
var del = require('del');
var path = require('path');
var cordovaLib = require('cordova-lib').cordova;

var releaseAPK = process.env.apk === 'x86'? 'android-x86-release.apk' : 'android-armv7-release.apk'

var projectRoot = cordovaLib.findProjectRoot();

gulp.task('release:android:apk:x86', function (done) {
  releaseAPK = 'android-x86-release.apk';
  done();
});


gulp.task('release:android:apk:armv7', function (done) {
  releaseAPK = 'android-armv7-release.apk';
  done();
});


gulp.task('release:android', ['build:assets','compress', 'host', 'release:version:increment'], function(done) {

    del(['platforms/android/build/outputs/apk/'], function () {

      gulp.src(projectRoot)
      .pipe(android({
        storeFile: path.join(projectRoot, 'pnpaa-release.keystore'),
        keyAlias: 'alias_name',
        releaseApk: releaseAPK
      }))
      .pipe(gulp.dest('releases/android/'))
      .on('end', done);

    });
});

gulp.task('release:android:x86', ['release:android:apk:x86', 'release:android']);
gulp.task('release:android:armv7', ['release:android:apk:armv7', 'release:android']);