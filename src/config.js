/**
*	RequireJs Config
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
requirejs.config({

	baseUrl: '/',

	paths: {
		react: 'libs/react/react',
		reactDOM: 'libs/react/react-dom.min',
		flux: 'libs/flux/dist/Flux.min',

		jquery: 'libs/jquery/dist/jquery.min',
		bootstrap: 'libs/bootstrap/dist/js/bootstrap.min',
		bootstrapCSS: 'libs/bootstrap/dist/css/bootstrap.min',
		underscore: 'libs/underscore/underscore-min',
		underscore_string: 'libs/underscore.string/dist/underscore.string.min',
		jsx: 'js/common/jsx',
		mixins: 'js/common/mixins',

		babelpolyfill: 'libs/babel/polyfill.min',
		babelhelpers: 'libs/babel/helpers',
		css: 'libs/require-css/css.min',
		text: 'libs/text/text'
	},

	shim: {
		underscore_string: ['underscore'],
		jquery: ['underscore_string'],
		mixins: ['jquery'],
		bootstrap: ['mixins', 'jquery'],
		react: ['babelhelpers', 'babelpolyfill'],
		flux: ['react']
	}

});
