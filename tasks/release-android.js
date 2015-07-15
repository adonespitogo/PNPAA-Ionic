
var gulp = require('gulp');
var android = require('gulp-cordova-build-android');
var del = require('del');

gulp.task('release:android', ['build:assets','compress', 'host'], function(done) {

    del(['releases/android/*', 'platforms/android/build/outputs/apk/'], function () {

      gulp.src('../')
      .pipe(android({
        storeFile: '/home/adones/Projects/Phonegap/PNPAA-Ionic/mobile/pnpaa-release.keystore',
        keyAlias: 'alias_name',
        releaseApk: 'android-armv7-release.apk'
      }))
      .pipe(gulp.dest('releases/android/'))
      .on('end', done);

    });
});