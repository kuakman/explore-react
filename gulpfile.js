var path = require('path'),
	gulp = require('gulp'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	bower = require('gulp-bower'),
	less = require('gulp-less'),
	jsx = require('gulp-jsx'),
	ejs = require('gulp-ejs-precompiler'),
	html = require('gulp-html-extend');

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
	return gulp.src(['dist/css', '!dist/libs'], { read: false })
		.pipe(clean());
});

gulp.task('clean-ejs', function() {
	return gulp.src(['dist/partials/**/*.*', '!dist/libs'], { read: false })
		.pipe(clean());
});

gulp.task('clean-ejs', function() {
	return gulp.src(['dist/**/*.html', '!dist/libs'], { read: false })
		.pipe(clean());
});

// Build Tasks

gulp.task('dependencies', function() {
	return bower({ directory: './dist/libs' });
});

gulp.task('css', ['clean-css'], function() {
	return gulp.src('src/css/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('ejs', ['clean-ejs'], function() {
	return gulp.src('src/partials/*.*')
		.pipe(ejs({
			templateVarName: 'html',
			compileDebug: true,
			client: true
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('./dist/partials'))
});

gulp.task('html' ['clean-html'], function() {
	return gulp.src('./src/**/*.html')
		.pipe(extender({ annotations: true, verbose: false }))
		.pipe(gulp.dest('./dist'));
});

gulp.task('babel', function() {
	return gulp.src('src/**/*.es6')
		.pipe(jsx({
			factory: 'React.createClass'
		}))
		.pipe(babel({
			presets: ['es2015'],
			plugins: ['transform-es2015-modules-amd']
		}))
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('build', ['clean', 'dependencies', 'babel', 'css', 'ejs', 'html']);
