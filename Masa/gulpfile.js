var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('compileSass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./src/css'));
});

gulp.task('jtSass',function(){
	gulp.watch('./src/sass/*.scss',['compileSass']);	
});

var browserSync = require('browser-sync');
gulp.task('server',function(){
	browserSync({
		//代理php端口
		proxy:'http://localhost:1000',
		//动态识别的类型
		files:['./src/**/*.html','./src/**/*.css','./src/**/*.js','./src/api/*.php']
	});
	gulp.watch('./src/sass/*.scss',['compileSass']);
});