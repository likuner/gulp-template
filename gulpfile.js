const gulp = require('gulp')
const less = require('gulp-less')
const cleanCss = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('less', function() {
  return gulp.src('./src/styles/*.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest('./dist/styles'))
})

gulp.task('default', gulp.parallel('less'))