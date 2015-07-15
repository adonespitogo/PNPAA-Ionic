
var gulp = require('gulp');
var android = require('gulp-cordova-build-android');

gulp.task('release:android', ['build:assets','compress', 'host'], function() {
    return gulp.src('../')
        .pipe(android({
          storeFile: '/home/adones/Projects/Phonegap/PNPAA-Ionic/mobile/pnpaa-release.keystore',
          keyAlias: 'alias_name'
        }))
        .pipe(gulp.dest('releases/android/'));
});