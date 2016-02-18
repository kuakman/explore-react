var path = require('path'),
	gulp = require('gulp'),
	clean = require('gulp-clean'),
	bower = require('gulp-bower'),
	less = require('gulp-less');

// Clean Tasks

gulp.task('clean', function() {
	return gulp.src(['dist/js'], { read: false })
		.pipe(clean());
});

gulp.task('clean-dependencies', function() {
	return gulp.src('dist/libs', { read: false })
		.pipe(clean());
});

gulp.task('clean-css', function() {
	return gulp.src('dist/css', { read: false })
		.pipe(clean());
});

// Build Tasks

gulp.task('dependencies', function() {
	return bower({ directory: './dist/libs' });
});

gulp.task('css', ['clean-styles'], function() {
	return gulp.src('src/css/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('babel', function() {
	return gulp.src('src/**/*.es6')
		.pipe(babel({
			presets: ['es2015'],
			plugins: ['transform-es2015-modules-amd']
		}))
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('build', ['clean', 'dependencies', 'css']);
