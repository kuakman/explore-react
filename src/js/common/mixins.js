/**
*	Underscore Mixins
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
define(['jsx'], function() {

	_.mixin({

		/**
		*	Assing object to path Strategy
		*	@static
		*	@method namespace
		*	@param path {String} path
		*	@param o {Object} object
		*	@param [ctx] {Object} context
		*	@return Function
		**/
		ns: function(path, o, ctx) {
			if(!path || !_.isString(path) || !o)
				throw new Error('_.ns() requires a namespace (in dot notation) and a function (or object)');
			var parts = path.split('.'), part = (ctx) ? ctx : {};
			var obj, name, ps = parts.length;
			for(var i = 0; i < ps; i++) {
				obj = part; name = parts[i];
				part = (part[name]) ? part[name] : (part[name] = {});
			}
			return (obj[name] = o);
		}

	});

});
