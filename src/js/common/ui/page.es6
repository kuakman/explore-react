/**
*	@module common
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
import React from 'react';
import ReactDOM from 'reactDOM';
import _ from 'underscore';
import {Header} from 'common/header/header';
import {Footer} from 'common/footer/footer';

/**
*	Class Page
*	@namespace common
*	@class common.Page
*	@extends React.Component
*
*	@requires React
*	@requires ReactDOM
*	@requires underscore
*	@requires common.header.Header
*	@requires common.footer.Footer
**/
export class Page extends React.Component {

	/**
	*	@constructor
	**/
	constructor(attrs = {}) {
		super();
		this.state = _.extend({ style: 'bg-primary' }, attrs.state);
	}

	/**
	*	Render Component
	*	@public
	*	@method render
	*	@return Object
	**/
	render() {
		return (
			<div className = "main container-fluid page">
				<Header name = {this.props.name} state = {this.state} />
				{this.content}
				<Footer state = {this.state} />
			</div>
		);
	}

	/**
	*	Retrieves Page content
	*	@public
	*	@property content
	*	@type Object
	**/
	get content() {
		return '';
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
	static bootstrap(component = <Page name="Page" />) {
		return ReactDOM.render(component, $('body')[0]);
	}

}
