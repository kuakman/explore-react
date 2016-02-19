/**
*	Karma Configuration for Boneyard Annotation
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
module.exports = function(config) {

    config.set({

        basePath: './',

        frameworks: ['mocha', 'expect', 'requirejs'],

        files: [
            'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js',
            './src/**/*.es6',
            './test/**/*.es6'
        ],

        exclude: [],

        preprocessors: {
            './src/**/*.es6': ['babel', 'coverage'],
            './test/**/*.es6': ['babel']
        },

        reporters: ['nyan', 'coverage'],

        babelPreprocessor: {
            options: {
				presets: ['react', 'es2015'],
                sourceMap: 'inline'
            },
            filename: function (file) {
                return file.originalPath.replace(/\.es6$/, '.js');
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        },

        coverageReporter: {
            reporters: [
                { type: 'html', dir: 'coverage/' },
                { type: 'lcov', dir: 'coverage/' }
            ]
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_ERROR,

        autoWatch: true,

        browsers: ['PhantomJS'],

        singleRun: true
    });

};
