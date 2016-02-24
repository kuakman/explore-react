/**
*	@module common.footer
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import React from 'react';
import ReactDOM from 'reactDOM';

/**
*	Class Footer
*	@namespace common.footer
*	@class common.footer.Footer
*	@extends React.Component
*
*	@requires React
*	@requires ReactDOM
**/
export class Footer extends React.Component {

	/**
	*	@constructor
	*	@param [attrs] {Object} constructor attributes
	**/
	constructor(attrs = { state: {} }) {
		super();
		this.state = _.extend({}, attrs.state);
	}

	/**
	*	Render Component
	*	@public
	*	@override
	*	@method render
	*	@return Object
	**/
	render() {
		return (
			<div className = {'footer col-xs-12 ' + this.state.style}>
				<p className = "text-center">Powered by ReactJS/JSX</p>
			</div>
		);
	}

	/**
	*	DisplayName
	*	@public
	*	@property displayName
	*	@type String
	**/
	get displayName() {
		return 'Footer';
	}

}
