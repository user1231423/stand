//require all needed vars
var gulp = require('gulp'); 
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var purify = require('gulp-purifycss');

//Detect when a change in .scss and .css is made and auto sync
gulp.task('check-server',['compile-sass'],function(){
  browserSync.init({
    server: "dist/"
  });
  gulp.watch("src/assets/scss/*.scss",['compile-sass']);
  gulp.watch("src/assets/scss/*.scss").on('change',browserSync.reload);
  gulp.watch("src/*.html",['move-html']);
  gulp.watch("src/*.html").on('change',browserSync.reload);
});

//Compile scss into css
gulp.task('compile-sass', function () {
    gulp.src('src/assets/scss/style.scss')
    .pipe(gulp.dest('dist/assets/css'))
 });

 //Get Font Awesome fonts
 gulp.task('move-fonts', function() {
    gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('dist/assets/fonts/'))
})

//move html files to dist
gulp.task('move-html', function() {
    gulp.src("src/*.html")
    .pipe(gulp.dest('dist/'));
});

 //Remove all unused css
/* gulp.task('css', function() {
  return gulp.src('dist/assets/css/style.css')
    .pipe(purify(['src/a*.css']))
    .pipe(gulp.dest('dist/assets/css/'))
    .pipe(browserSync.stream());
}); */