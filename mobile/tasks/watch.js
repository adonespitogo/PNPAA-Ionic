var gulp = require('gulp');
var assets = require("../assets.json");

gulp.task('watch', function() {


  gulp.watch(assets.sass, ['css']);
  gulp.watch(assets.js.src, ['lint', 'concat']);
  gulp.watch('assets.json', ['build:assets']);
  gulp.watch('app/**/*.html', ['copy']);
});