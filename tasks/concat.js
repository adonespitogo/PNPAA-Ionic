var gulp = require('gulp');
var concat = require('gulp-concat');
var build = 'build.js';
var dist = 'www/js/';
var projectRoot = require('cordova-root');
var path = require('path');

gulp.task('concat', ['lint', 'clean:js'], function () {

  var assets = require(path.join(projectRoot, "assets.json"));

  src = assets.js.libs.concat(assets.js.src);
  return gulp.src(src)
  .pipe(concat(build))
  .pipe(gulp.dest(dist));
});