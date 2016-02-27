/**
*	@flow
*	@module ui.page
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
import React from 'react';
import ReactDOM from 'reactDOM';
import $ from 'jquery';
import {Header} from 'ui/page/header/header';
import {Footer} from 'ui/page/footer/footer';

/**
*	Class Page
*	@namespace ui.page
*	@class ui.page.Page
*	@extends React.Component
*
*	@requires React
*	@requires ReactDOM
*	@requires ui.page.header.Header
*	@requires ui.page.footer.Footer
**/
export class Page extends React.Component {

	/**
	*	@constructor
	*	@param [attrs] {Object} constructor attributes
	**/
	constructor(attrs = { store: {} } : Object, action = {} : Object) {
		super();
		this._store = attrs.store;
		this._action = attrs.action;
	}

	/**
	*	Component Mounting
	*	@public
	*	@method componentDidMount
	*	@return ui.page.Page
	**/
	componentDidMount() : ui.page.Page {
		$(this.store).on('change', this.onChange);
		return this;
	}

	/**
	*	Component Unmounting
	*	@public
	*	@method componentWillUnmount
	*	@return ui.page.Page
	**/
	componentWillUnmount() : common.page.ui.Page {
		$(this.store).off('change', this.onChange);
		return this;
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
				<Header name = {this.props.name} store = {this.store} />
				{this.content}
				<Footer store = {this.store} />
			</div>
		);
	}

	/**
	*	Change Handler
	*	@public
	*	@method onChange
	*	@return
	**/
	onChange() : common.page.ui.Page {
		this.setState(this.store.state);
		return this;
	}

	/**
	*	Retrieves Page content
	*	@public
	*	@property content
	*	@type Object
	**/
	get content(): Object {
		return {};
	}

	/**
	*	Retrieves Page Store
	*	@public
	*	@property store
	*	@type Object
	**/
	get store(): Object {
		return this._store;
	}

	/**
	*	Retrieves Page Actions
	*	@public
	*	@property action
	*	@type Object
	**/
	get action(): Object {
		return this._action;
	}

	/**
	*	DisplayName
	*	@public
	*	@property displayName
	*	@type String
	**/
	get displayName(): String {
		return 'Page';
	}

	/**
	*	Static Component Bootstrap
	*	@static
	*	@method bootstrap
	*	@param [component] {React.Component} page component to be render
	**/
	static bootstrap(component = <Page name="Page" />) {
		ReactDOM.render(component, $('body')[0]);
	}

}
