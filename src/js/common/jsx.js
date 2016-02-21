/**
*	Require Custom JSX Loader
**/
define(['module', 'underscore', 'react'], function(module, _, React) {

	var jsx = {

		/**
		*	Jsx Loader Version
		*	@public
		*	@property version
		*	@type String
		**/
		version: '0.1.0',

		/**
		*	Transform a given JSX precompiled into Javascript suitable to be interpreted by React.
		*	@public
		*	@method transform
		*	@param rawJSX {String} raw JSX
		*	@return String
		**/
		transform: function(rawJSX) {
			return 'var template = function() { return ' + rawJSX + '; };';
		},

		/**
		*	Load Strategy
		*	@public
		*	@override
		*	@method load
		*	@param name {String} resource name to load
		*	@param req {Function} local require function used to load other modules
		*	@param onLoad {Function} callback reference
		*	@param config {Object} configuration object
		**/
		load: function(name, req, onLoad, config) {
			if(!config.isBuild) {
				$.get(req.toUrl(name + '.jsx'), $.proxy(this.onSuccess, this, onLoad))
					.fail($.proxy(this.onError, this, onLoad));
			}
		},

		/**
		*	Success Handler
		*	@public
		*	@method onError
		*	@param callback {Function} default callback
		*	@param err {Object} error reference
		**/
		onSuccess: function(callback, content) {
			eval(this.transform(content));
			return callback(template);
		},

		/**
		*	Error Handler
		*	@public
		*	@method onError
		*	@param callback {Function} default callback
		*	@param err {Object} error reference
		**/
		onError: function(callback, err) {
			callback.error(err);
		}
	};

	return jsx;

});
