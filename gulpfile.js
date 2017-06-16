const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg')

gulp.task('jpg', () =>
	gulp.src('images/**/*.jpg')
		.pipe(imagemin([mozjpeg({ quality: 80 })]))
		.pipe(gulp.dest('dist/images'))
)

gulp.task('png', () =>
	gulp.src('images/**/*.png')
		.pipe(imagemin([pngquant({ quality: '80' })]))
		.pipe(gulp.dest('dist/images'))
)

gulp.task('svg', () =>
	gulp.src('images/**/*.svg')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
)

gulp.task('gif', () =>
	gulp.src('images/**/*.gif')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
)

gulp.task('default', gulp.series(
  gulp.parallel(
    'jpg',
    'png',
    'svg',
    'gif'
  ),
  (done) => {
    done()
  })
);
