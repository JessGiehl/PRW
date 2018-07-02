var gulp = require('gulp');
var sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('default', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('scss', function() {
  return gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
})

gulp.task('watch', function() {
  gulp.watch('./scss/*.scss', ['scss'])
})
