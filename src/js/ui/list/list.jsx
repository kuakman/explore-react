/**
*	@flow
*	@module ui.list
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import React from 'react';
import _ from 'underscore';
import {ListItem} from 'ui/list/list-item';

/**
*	Class List
*	@namespace ui.list
*	@class ui.list.List
*	@extends React.Component
*
*	@requires React
*	@requires underscore
*	@requires ui.list.ListItem
**/
export class List extends React.Component {

	/**
	*	@constructor
	*	@param [attrs] {Object} constructor attributes
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
		return (
			<ul className = "list-group">{this.content}</ul>
		);
	}

	/**
	*	@public
	*	@property content
	*	@type Array
	**/
	get content() : Array {
		return _.map(this.props.items, function(it) { return this.item(it); }, this);
	}

	/**
	*	Default Item Strategy
	*	@public
	*	@method item
	*	@param it {Object} item reference
	*	@return ui.list.ListItem
	**/
	item(it) : Object {
		return <ListItem key = {it.id}
			content = {(this.props.renderer) ? this.props.renderer(it) : it.content} />;
	}

	/**
	*	DisplayName
	*	@public
	*	@property displayName
	*	@type String
	**/
	get displayName() : String {
		return 'List';
	}

}
