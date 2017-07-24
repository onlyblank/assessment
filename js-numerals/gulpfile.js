const gulp = require('gulp');
const mocha = require('gulp-mocha');
const sass = require('gulp-sass');
const inject = require('gulp-inject');

gulp.task('tests', function() {
  return gulp.src(['test/test-*.js'], {read: false})
	.pipe(mocha({reporter: 'nyan'}))
});
 
gulp.task('styles', function(){
  var injectAppFiles = gulp.src('src/assets/sass/*.scss', {read: false});
 
  function transformFilepath(filepath) {
    return '@import "' + filepath + '";';
  }
 
  var injectAppOptions = {
    transform: transformFilepath,
    starttag: '// inject:app',
    endtag: '// endinject',
    addRootSlash: false
  };
 
  return gulp.src('src/assets/sass/main.scss')
    .pipe(inject(injectAppFiles, injectAppOptions))
    .pipe(sass())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('html', ['styles'],function(){
	var injectFiles = gulp.src(['dist/styles/main.css']);

	var injectOptions = {
    addRootSlash: false,
    ignorePath: ['src', 'dist']
  };

  return gulp.src('src/index.html')
  	.pipe(inject(injectFiles, injectOptions))
    .pipe(gulp.dest('dist'))
});