//require all needed vars
var gulp = require('gulp'); 
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var purify = require('gulp-purifycss');

//Detect when a change in .scss and .css is made and auto sync
gulp.task('check-server',['sass'],function(){
  browserSync.init({
    server: "src/index.html"
  });
  gulp.watch("src/assets/scss/*.scss",['sass']);
  gulp.watch("src/*.html").on('change',browserSync.reload);
  gulp.watch("dist/assets/css/*.css",['css']);
  gulp.watch("src/*.html").on('change',browserSync.reload);
});

//Compile scss into css
gulp.task('sass', function () {
  return gulp.src('src/assets/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream());
 });

 //Remove all unused css
gulp.task('css', function() {
  return gulp.src('dist/assets/css/style.css')
    .pipe(purify(['src/*.html']))
    .pipe(gulp.dest('dist/assets/css/'))
    .pipe(browserSync.stream());
});