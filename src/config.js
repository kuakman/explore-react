/**
*	RequireJs Config
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
requirejs.config({

	baseUrl: '/',

	paths: {
		react: 'libs/react/react.min',
		reactDOM: 'libs/react/react-dom.min',
		jquery: 'libs/jquery/dist/jquery.min',
		bootstrap: 'libs/bootstrap/dist/js/bootstrap.min',
		bootstrapCSS: 'libs/bootstrap/dist/css/bootstrap.min',
		css: 'libs/require-css/css.min',
		text: 'libs/text/text'
	},

	shim: {
		bootstrap: ['jquery']
	}

});
