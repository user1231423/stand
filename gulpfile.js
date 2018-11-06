//require all needed vars
var gulp = require('gulp'); 
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

//Detect when a change in files is made and sync with browser
gulp.task('serve',['sass'],function(){
  browserSync.init({
    server: "dist/"
  });
  gulp.watch("src/assets/scss/*.scss",['sass']);
  gulp.watch("*.html").on('change',browserSync.reload);
});

//Compile scss into css
gulp.task('sass', function () {
  return gulp.src('src/assets/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream());
 });