const gulp = require('gulp')
const less = require('gulp-less')
const cleanCss = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const htmlmin = require('gulp-htmlmin')
const del = require('del')

const lessTask = () => {
  return gulp
    .src('./src/styles/*.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest('./dist/styles'))
}

const jsTask = () => {
  return gulp
    .src('./src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
      plugins: ['@babel/plugin-transform-runtime']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

const htmlTask = () => {
  return gulp
    .src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('./dist'))
}

const assetTask = () => {
  return gulp
    .src('./src/assets/*')
    .pipe(gulp.dest('./dist/assets'))
}

const delTask = () => {
  return del(['./dist'])
}

gulp.task('default', gulp.series(
  delTask,
  gulp.parallel(
    lessTask,
    jsTask,
    htmlTask,
    assetTask
  )
))