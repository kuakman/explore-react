/**
*	@flow
*	@module ui.list
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import React from 'react';

/**
*	Class ListItem
*	@namespace ui.list
*	@class ui.list.ListItem
*	@extends React.Component
*
*	@requires React
**/
export class ListItem extends React.Component {

	/**
	*	@constructor
	*	@param [attrs] {Object} attributes
	**/
	constructor(...args) {
		super(...args);
	}

	/**
	*	Render Component
	*	@public
	*	@method render
	*	@return Object
	**/
	render() : Object {
		return <li className = "list-group-item">{this.props.content}</li>;
	}

	/**
	*	DisplayName
	*	@public
	*	@property displayName
	*	@type String
	**/
	get displayName() : String {
		return 'ListItem';
	}

}
