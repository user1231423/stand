//require all needed vars
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var mustache = require('gulp-mustache');
/* var purify = require('gulp-purifycss'); */

//Detect when a change in .scss and .css is made and auto sync
gulp.task('check-server', function () {
  browserSync.init({
    server: "dist"
  });
  gulp.watch(['src/assets/scss/*.scss'], ['compile-sass']).on('change', browserSync.reload);
  gulp.watch('src/views/*.mustache',['compile-mustache']).on('change', browserSync.reload);
});

//Compile scss into css
gulp.task('compile-sass', function () {
  return gulp.src('src/assets/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css/'))
    .pipe(browserSync.stream());
});

/* //Move html files
gulp.task('move-html', function () {
  gulp.src("src/*.html")
  .pipe(gulp.dest('dist/'));
}); */

//Move fonts file
gulp.task('copy-fonts', function () {
  gulp.src([
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/font-awesome/fonts/*'
  ])
    .pipe(gulp.dest('dist/assets/fonts'))
});

//Compile mustache to html
gulp.task('compile-mustache',function(){
  return gulp.src(['src/views/*.mustache'])
      .pipe(mustache({},
          {
              'extension':'.html'
          },{})).on('error', function(error) {
          // We have an error
          console.log(error);
      })
      .pipe(gulp.dest('dist/')); //sent to dist root
});

/* //Remove all unused css
gulp.task('clean-css', function() {
  return gulp.src('dist/assets/css/main.css')
    .pipe(purify(['src/*.css']))
    .pipe(gulp.dest('dist/assets/css/'))
    .pipe(browserSync.stream());
}); */
