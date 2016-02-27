/**
*	Underscore Mixins
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
define(['underscore', 'jquery'], function() {

	_.mixin({

		/**
		*	Returns true if a given object is not null and not undefined, otherwise returns false
		*	@public
		*	@method def
		*	@param o {Object} object to evaluate
		*	@return Boolean
		**/
		def: function(o) {
			return (!_.isNull(o) && !_.isUndefined(o));
		}
	
	});

});
