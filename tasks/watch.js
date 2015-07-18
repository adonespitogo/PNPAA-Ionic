var gulp = require('gulp');
var projectRoot = require('cordova-root');
var path = require('path');

gulp.task('watch', function() {

  var assets = require(path.join(projectRoot, 'assets.json'));

  gulp.watch(assets.sass.concat(assets.css), ['css']);
  gulp.watch(assets.js.src, ['lint', 'concat', 'host']);
  gulp.watch('assets.json', ['build:assets']);
  gulp.watch('app/**/*.html', ['copy']);
});