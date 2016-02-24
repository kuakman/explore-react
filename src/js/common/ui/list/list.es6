/**
*	@module common.ui.list
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import React from 'react';

/**
*	Class List
*	@namespace common.ui.list
*	@class common.ui.list.List
*	@extends React.Component
*
*	@requires React
*	@requires ReactDOM
**/
export class List extends React.Component {

	/**
	*	@constructor
	*	@method constructor
	*	@param [attrs] {Object} constructor attributes
	**/
	constructor() {
		super();
		this.template = <ul className={this.props.className}></ul>;
	}

	/**
	*	Render Component
	*	@public
	*	@method render
	*	@return Object
	**/
	render() {
		return this.template();
	}

	/**
	*	Get ClassName
	*	@public
	*	@property className
	*	@type String
	**/
	get className() {
		return 'list-group';
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
