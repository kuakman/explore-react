/**
*	@flow
*	@module ui.page.header
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import React from 'react';
import ReactDOM from 'reactDOM';

/**
*	Class Header
*	@namespace ui.page.header
*	@class ui.page.header.Header
*	@extends React.Component
*
*	@requires React
*	@requires ReactDOM
**/
export class Header extends React.Component {

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
			<div className = {'header col-xs-12 ' + this.store.styles}>
				<h2 className = "text-center">{this.props.name}</h2>
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
		return 'Header';
	}

}
