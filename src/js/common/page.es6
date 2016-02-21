/**
*	@module common
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
import React from 'react';
import ReactDOM from 'reactDOM';
import _ from 'underscore';

/**
*	Class Page
*	@namespace common
*	@class common.Page
*	@extends React.Component
*
*	@requires React
*	@requires ReactDOM
**/
export class Page extends React.Component {

	/**
	*	@constructor
	**/
	constructor(attrs = { state: {} }) {
		super();
		this.template = attrs.template;
		this.state = _.extend({ style: 'bg-default' }, attrs.state);
	}

	/**
	*	Render Component
	*	@public
	*	@method render
	*	@return common.Page
	**/
	render() {
		return this._template();
	}

	/**
	*	Get Template
	*	@public
	*	@property template
	*	@type Function
	**/
	get template() {
		return this._template;
	}

	/**
	*	Set Template
	*	@public
	*	@property template
	*	@type Function
	**/
	set template(template) {
		this._template = template;
	}

	/**
	*	DisplayName
	*	@public
	*	@property displayName
	*	@type String
	**/
	get displayName() {
		return 'Page';
	}

	/**
	*	Static Component Bootstrap
	*	@static
	*	@method bootstrap
	*	@param [component] {React.Component} page component to be render
	*	@return
	**/
	static bootstrap(component = <Page />) {
		return ReactDOM.render(component, $('body')[0]);
	}

}
