var path = require('path'),
	gulp = require('gulp'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	bower = require('gulp-bower'),
	babel = require('gulp-babel'),
	less = require('gulp-less'),
	jsx = require('gulp-jsx'),
	ejs = require('gulp-ejs-precompiler'),
	html = require('gulp-html-extend');

// Clean Tasks

gulp.task('clean', function() {
	return gulp.src(['./dist/**/*.js', '!./dist/{libs,libs/**}'], { read: false })
		.pipe(clean());
});

gulp.task('clean-dependencies', function() {
	return gulp.src('./dist/libs', { read: false })
		.pipe(clean());
});

gulp.task('clean-css', function() {
	return gulp.src(['./dist/css', '!./dist/{libs,libs/**}'], { read: false })
		.pipe(clean());
});

gulp.task('clean-ejs', function() {
	return gulp.src(['./dist/partials/**/*.*'], { read: false })
		.pipe(clean());
});

gulp.task('clean-html', function() {
	return gulp.src(['./dist/**/*.html', '!./dist/{libs,libs/**}'], { read: false })
		.pipe(clean());
});

// Build Tasks

gulp.task('dependencies', ['clean'], function() {
	return bower({ directory: './dist/libs' });
});

gulp.task('css', ['babel', 'clean-css'], function() {
	return gulp.src('./src/css/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('ejs', ['css', 'clean-ejs'], function() {
	return gulp.src('./src/partials/*.*')
		.pipe(ejs({
			templateVarName: 'html',
			compileDebug: true,
			client: true
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('./dist/partials'))
});

gulp.task('html', ['ejs', 'clean-html'], function() {
	return gulp.src(['./src/**/*.html', '!./src/master.html'])
		.pipe(html({ annotations: false, verbose: false }))
		.pipe(gulp.dest('./dist'));
});

gulp.task('babel', ['dependencies'], function() {
	return gulp.src(['./src/**/*.es6', './src/config.js'])
		.pipe(jsx({
			factory: 'React.createClass'
		}))
		.pipe(babel({
			only: /\.es6$/,
			presets: ['react', 'es2015'],
			plugins: ['transform-es2015-modules-amd']
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('build', ['clean', 'dependencies', 'babel', 'css', 'ejs', 'html']);
