/**
*	@flow
*	@module ui.list
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import React from 'react';

/**
*	Class List
*	@namespace ui.list
*	@class ui.list.List
*	@extends React.Component
*
*	@requires React
**/
export class List extends React.Component {

	/**
	*	@constructor
	*	@param [attrs] {Object} constructor attributes
	**/
	constructor(attrs = {}) {
		super();
	}

	/**
	*	Render Component
	*	@public
	*	@method render
	*	@return Object
	**/
	render() {
		return (
			<ul className = "list-group">{this.content}</ul>
		);
	}

	/**
	*	Retrieve Content
	*	@public
	*	@property content
	*	@type Object
	**/
	get content() {
		return {};
	}

	/**
	*	DisplayName
	*	@public
	*	@property displayName
	*	@type String
	**/
	get displayName() {
		return 'List';
	}

}
