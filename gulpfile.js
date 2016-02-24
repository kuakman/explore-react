var path = require('path'),
	_ = require('underscore'),
	gulp = require('gulp'),
	sequence = require('run-sequence'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	source = require('vinyl-source-stream'),
	rename = require('gulp-rename'),
	externalHelpers = require('babel-core').buildExternalHelpers(),
	bower = require('gulp-bower'),
	babel = require('gulp-babel'),
	less = require('gulp-less'),
	jade = require('gulp-jade'),
	connect = require('gulp-connect'),
	favicon = require('serve-favicon'),
	compression = require('compression');

// Clean Tasks

gulp.task('clean-babel', function() {
	return gulp.src('./dist/js/**/*.js', { force: false, read: false })
		.pipe(clean());
});

gulp.task('clean-dependencies', function() {
	return gulp.src('./dist/libs/', { force: false, read: false })
		.pipe(clean());
});

gulp.task('clean-css', function() {
	return gulp.src(['./dist/css/'], { force: false, read: false })
		.pipe(clean());
});

gulp.task('clean-html', function() {
	return gulp.src('./dist/html/', { force: false, read: false })
		.pipe(clean());
});

// Dependencies Tasks
gulp.task('babel-helpers', function() {
	var stream = source('helpers.js');
	stream.end(externalHelpers);
	stream.pipe(gulp.dest('./dist/libs/babel/'));
	return stream;
});

gulp.task('babel-polyfill', function() {
	return gulp.src(['./node_modules/babel-polyfill/dist/polyfill*.js'])
		.pipe(gulp.dest('./dist/libs/babel'));
});

gulp.task('dependencies', ['babel-polyfill', 'babel-helpers'], function() {
	return bower({ directory: './dist/libs' });
});

// Build Tasks

gulp.task('html', ['clean-html'], function() {
	return gulp.src(['./src/html/**/*.jade', '!./src/html/master.jade', '!./src/html/common/**/*.*'])
		.pipe(jade({ pretty: true }))
		.pipe(gulp.dest('./dist/html'))
		.pipe(connect.reload());
});

gulp.task('css', ['clean-css'], function() {
	return gulp.src('./src/styles/**/*.less')
		.on('error', function() { this.emit('end'); })
		.pipe(less())
		.pipe(gulp.dest('./dist/styles'))
		.pipe(connect.reload());
});

gulp.task('babel', ['clean-babel'], function() {
	return gulp.src(['./src/**/*.es6', './src/**/*.js'])
		.pipe(babel({
			only: /\.es6$/,
			comments: false,
			presets: ['react', 'es2015'],
			plugins: [['transform-es2015-modules-amd', { strict: true }], 'external-helpers']
		}))
		.pipe(gulp.dest('./dist'))
		.pipe(connect.reload());
});

gulp.task('build', function() {
	return sequence(
		'dependencies',
		'babel',
		'css',
		'html'
	);
});

// Server Tasks

gulp.task('serve', function() {
	return connect.server({
		root: './dist',
		port: 9393,
		livereload: false,
		middleware: function() {
			return [compression(), favicon(__dirname + '/src/favicon.ico', { maxAge: 1000 })];
		}
	});
});

gulp.task('serve-live', function() {
	return connect.server({
		root: './dist',
		port: 9393,
		livereload: true,
		middleware: function() {
			return [compression(), favicon(__dirname + '/src/favicon.ico', { maxAge: 1000 })];
		}
	});
});

gulp.task('watch-babel', function() {
	gulp.watch(['./src/**/{*.es6,*.js}'], ['babel']);
});

gulp.task('watch-css', function() {
	gulp.watch(['./src/styles/**/*.less'], ['css']);
});

gulp.task('watch-html', function() {
	gulp.watch(['./src/**/*.jade'], ['html']);
});

gulp.task('live', function() {
	return sequence(
		['watch-html', 'watch-css', 'watch-babel'],
		'serve-live'
	);
});

gulp.task('default', ['serve']);
