/**
*	@flow
*	@module home.ui
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import React from 'react';
import {HomeStore} from 'home/store/home-store';
import {HomeAction} from 'home/action/home-action';
import {Page} from 'ui/page/page';
import {List} from 'ui/list/list';

/**
*	Class HomePage
*	@namespace home.ui
*	@class home.ui.HomePage
*	@extends ui.page.Page
*
*	@requires React
*	@requires home.store.HomeStore
*	@requires ui.page.Page
*	@requires ui.list.List
**/
export class HomePage extends Page {

	/**
	*	@constructor
	**/
	constructor() {
		super({ store: new HomeStore(), action: new HomeAction() });
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
			    <List items = {this.store.state.get('items')} renderer = {this.item} />
			</div>
		);
	}

	/**
	*	List Custom Renderer
	*	@public
	*	@method item
	*	@param it {Object} item reference
	*	@return Object
	**/
	item(it : Object) : Object {
		return <a className = "btn btn-link">
			{it.content}
		</a>;
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
