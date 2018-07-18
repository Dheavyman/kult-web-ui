const gulp = require('gulp')
const browserSync = require('browser-sync').create();

gulp.task('vendor', () => {
  gulp.src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
  ])
  .pipe(gulp.dest('./vendor/bootstrap'))

  gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
  .pipe(gulp.dest('./vendor/jquery'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('dev', ['vendor', 'browserSync'], () => {
  gulp.watch('./**/*.css', browserSync.reload)
  gulp.watch('./*.html', browserSync.reload);
});
