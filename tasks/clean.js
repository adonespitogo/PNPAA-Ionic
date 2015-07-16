var gulp = require('gulp');
var del = require('del');


gulp.task('clean:css', function (done) {
  del(['www/css/**/*'], done);
});

gulp.task('clean:fonts', function (done) {
  del(['www/fonts/**/*'], done);
});

gulp.task('clean:img', function (done) {
  del(['www/img/**/*'], done);
});

gulp.task('clean:js', function (done) {
  del(['www/js/**/*'], done);
});

gulp.task('clean:templates', function (done) {
  del(['www/**/*.html'], done);
});

gulp.task('clean', ['clean:css', 'clean:fonts', 'clean:img', 'clean:js', 'clean:templates']);