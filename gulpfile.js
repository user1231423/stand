//require all needed vars
var gulp = require('gulp'); 
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var purify = require('gulp-purifycss');

//Detect when a change in files is made and sync with browser
gulp.task('serve',['sass'],function(){
  browserSync.init({
    server: "src/index.html"
  });
  gulp.watch("src/assets/scss/*.scss",['sass']);
  gulp.watch("src/*.html").on('change',browserSync.reload);
});

//Compile scss into css
gulp.task('sass', function () {
  return gulp.src('src/assets/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream());
 });

 
gulp.task('css', function() {
  return gulp.src('dist/assets/css/style.css')
    .pipe(purify(['src/*.html']))
    .pipe(gulp.dest('dist/assets/css/'));
});