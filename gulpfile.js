var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
var concatCSS    = require('gulp-concat-css');
var ftp    = require('gulp-concat-css');

gulp.task('test', function(){
	console.log('OK!');
});

//static server
//gulp.task('serve', ['sass'], function(){
gulp.task('serve', function(){
	
	browserSync.init({
		server: {
			baseDir: "src/"
		}
	});

	// gulp.watch("src/sass/*.sass", ['sass']); для будущего
	gulp.watch("src/css/*.css").on('change', browserSync.reload);
	gulp.watch("src/js/*.js").on('change', browserSync.reload);
	gulp.watch("src/*.html").on('change', browserSync.reload);

});

// компиляция sass файлов
/*gulp.task('sass', function(){
	return gulp.src("src/sass/*.sass")
		.pipe(sass())
		.pipe(autoPrefixer({
			browsers: 'last 2 versions',
			cascade: false
		}))
		.pipe(concatCSS('mega.css'))
		.pipe(gulp.dest("src/css"))
		.pipe(browserSync.stream());
});*/

// gulp.task ('ftp', function(){
// 	return gulp.src('src/**')
//		.pipe(ftp({
//			host: '',
//			user: '',
//			pass: '',
//          remotePath: 'path/stream',
//		}))
// 		.pipe(gutil.noop());
// });

gulp.task('default', ['serve']);