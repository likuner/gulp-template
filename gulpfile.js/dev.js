const gulp = require('gulp')
const webserver = require('gulp-webserver')

const webserverTask = () => {
  return gulp
    .src('../dist')
    .pipe(webserver({
      host: 'localhost',
      port: 8080,
      liveReload: true,
      open: './index.html'
    }))
}

// const watchTask = () => {
//   return gulp
//     .watch(['./src/*'], //)
// }

gulp.task('default', gulp.series(
  webserverTask,
  // watchTask
))