/**
*	@flow
*	@module home
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import React from 'react';
import {Page} from 'ui/page/page';
import {HomeStore} from 'home/store/home-store';

/**
*	Class HomePage
*	@namespace home
*	@class home.HomePage
*	@extends ui.page.Page
*
*	@requires React
*	@requires ui.page.Page
*	@requires home.store.HomeStore
**/
export class HomePage extends Page {

	/**
	*	@constructor
	**/
	constructor() {
		super({ store: new HomeStore() });
	}

	/**
	*	Retrieves Page content
	*	@public
	*	@property content
	*	@type Object
	**/
	get content(): Object {
		return (
			<div className = "content col-xs-12">
				<h4 className = "text-center">{this.props.name}</h4>
			    <p className = "text-center col-xs-12">ReactJS</p>
			</div>
		);
	}

	/**
	*	Component Mounting
	*	@public
	*	@override
	*	@method componentDidMount
	*	@return home.HomePage
	**/
	componentDidMount(): home.HomePage {
		return super.componentDidMount();
	}

	/**
	*	Component Unmounting
	*	@public
	*	@override
	*	@method componentWillUnmount
	*	@return home.HomePage
	**/
	componentWillUnmount(): home.HomePage {
		return super.componentWillUnmount();
	}

	/**
	*	DisplayName
	*	@public
	*	@override
	*	@property displayName
	*	@type String
	**/
	get displayName(): String {
		return 'HomePage';
	}

	/**
	*	Static Component Bootstrap
	*	@static
	*	@override
	*	@method bootstrap
	**/
	static bootstrap() {
		Page.bootstrap(<HomePage name="Home" />);
	}

}
