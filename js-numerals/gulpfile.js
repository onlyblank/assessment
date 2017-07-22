const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('tests', function() {
  return gulp.src(['test/test-*.js'], {read: false})
	.pipe(mocha({reporter: 'nyan'}))
});