var gulp = require('gulp'); 
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('src/assets/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css'));
 });