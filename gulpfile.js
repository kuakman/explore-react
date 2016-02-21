var path = require('path'),
	_ = require('underscore'),
	gulp = require('gulp'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	source = require('vinyl-source-stream'),
	rename = require('gulp-rename'),
	externalHelpers = require('babel-core').buildExternalHelpers(),
	bower = require('gulp-bower'),
	babel = require('gulp-babel'),
	less = require('gulp-less'),
	jsx = require('gulp-jsx'),
	jade = require('gulp-jade'),
	connect = require('gulp-connect'),
	favicon = require('serve-favicon'),
	compression = require('compression');

// Clean Tasks

gulp.task('clean', function() {
	return gulp.src(['./dist/**/*.js', '!./dist/{libs,libs/**}'], { read: false })
		.on('error', function() { this.emit('end'); })
		.pipe(clean());
});

gulp.task('clean-dependencies', function() {
	return gulp.src('./dist/libs', { read: false })
		.on('error', function() { this.emit('end'); })
		.pipe(clean());
});

gulp.task('clean-css', function() {
	return gulp.src(['./dist/css'], { read: false })
		.on('error', function() { this.emit('end'); })
		.pipe(clean());
});

gulp.task('clean-jsx', function() {
	return gulp.src(['./dist/partials'], { read: false })
		.on('error', function() { this.emit('end'); })
		.pipe(clean());
});

gulp.task('clean-html', function() {
	return gulp.src(['./dist/html'], { read: false })
		.on('error', function() { this.emit('end'); })
		.pipe(clean());
});

// Build Tasks

gulp.task('babel-helpers', ['babel-polyfill'], function() {
	var stream = source('helpers.js');
	stream.end(externalHelpers);
	return stream.pipe(gulp.dest('./dist/libs/babel/'));
});

gulp.task('babel-polyfill', ['clean'], function() {
	return gulp.src(['./node_modules/babel-polyfill/dist/polyfill*.js'])
		.pipe(gulp.dest('./dist/libs/babel'));
});

gulp.task('dependencies', ['clean', 'babel-polyfill', 'babel-helpers'], function() {
	return bower({ directory: './dist/libs' });
});

gulp.task('css', ['babel', 'clean-css'], function() {
	return gulp.src('./src/styles/**/*.less')
		.on('error', function() { this.emit('end'); })
		.pipe(less())
		.pipe(gulp.dest('./dist/styles'))
		.pipe(connect.reload());
});

gulp.task('jade-jsx', ['clean-jsx'], function() {
	return gulp.src('./src/partials/**/*.jade')
		.on('error', function() { this.emit('end'); })
		.pipe(jade())
		.pipe(rename({ extname: ".jsx" }))
		.pipe(gulp.dest('./src/.tmp'));
});

gulp.task('jsx', ['jade-jsx'], function() {
	return gulp.src('./src/.tmp/**/*.jsx')
		.on('error', function() { this.emit('end'); })
		.pipe(jsx({ factory: 'React.createElement' }))
		.pipe(gulp.dest('./dist/partials'));
});

gulp.task('clean-tmp-jsx', ['jsx'], function() {
	return gulp.src('./src/.tmp', { force: true, read: false })
		.on('error', function() { this.emit('end'); })
		.pipe(clean())
		.pipe(connect.reload());
});

gulp.task('html', ['jsx', 'clean-html'], function() {
	return gulp.src(['./src/html/**/*.jade', '!./src/html/master.jade', '!./src/html/common/**/*.*'])
		.pipe(jade({ pretty: true }))
		.pipe(gulp.dest('./dist/html'))
		.pipe(connect.reload());
});

gulp.task('babel', ['dependencies'], function() {
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

gulp.task('build', ['clean', 'dependencies', 'babel', 'css', 'html']);

// Server Tasks

gulp.task('serve', function() {
	connect.server({
		root: './dist',
		port: 9494,
		livereload: false,
		middleware: function() {
			return [compression(), favicon(__dirname + '/src/favicon.ico', { maxAge: 1000 })];
		}
	});
});

gulp.task('serve-live', function() {
	connect.server({
		root: './dist',
		port: 9494,
		livereload: true,
		middleware: function() {
			return [compression(), favicon(__dirname + '/src/favicon.ico', { maxAge: 1000 })];
		}
	});
});

gulp.task('watch-babel', function() {
	gulp.watch(['./src/**/{*.es6,*.js}'], ['babel', 'clean-tmp-jsx']);
});

gulp.task('watch-css', function() {
	gulp.watch(['./src/styles/**/*.less'], ['css', 'clean-tmp-jsx']);
});

gulp.task('watch-jsx', function() {
	gulp.watch(['./src/partials/**/*.jade'], ['jsx', 'clean-tmp-jsx']);
});

gulp.task('watch-html', function() {
	gulp.watch(['./src/**/*.jade'], ['html', 'clean-tmp-jsx']);
});

gulp.task('live', ['serve-live', 'watch-html', 'watch-jsx', 'watch-css', 'watch-babel']);

gulp.task('default', ['serve']);
