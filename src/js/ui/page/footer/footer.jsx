/**
*	@flow
*	@module ui.page.footer
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import React from 'react';
import ReactDOM from 'reactDOM';

/**
*	Class Footer
*	@namespace ui.page.footer
*	@class ui.page.footer.Footer
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
	constructor(attrs = { store: {} } : Object) {
		super();
		this.store = attrs.store;
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
			<div className = {'footer col-xs-12 ' + this.store.styles}>
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
	get displayName(): String {
		return 'Footer';
	}

}
