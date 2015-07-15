var gulp = require('gulp');

gulp.task('watch', function() {

  var assets = require("../assets.json");

  gulp.watch(assets.sass, ['css']);
  gulp.watch(assets.js.src, ['lint', 'concat']);
  gulp.watch('assets.json', ['build:assets']);
  gulp.watch('app/**/*.html', ['copy']);
});