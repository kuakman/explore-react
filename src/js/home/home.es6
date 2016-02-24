/**
*	@module home
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import React from 'react';
import {Page} from 'common/ui/page';

/**
*	Class HomePage
*	@namespace home
*	@class home.HomePage
*	@extends common.Page
*
*	@requires common.ui.Page
*	@requires partials.home.HomeJSX
**/
export default class HomePage extends Page {

	/**
	*	@constructor
	**/
	constructor() {
		super({ state: { style: 'bg-primary' } });
	}

	/**
	*	Retrieves Page content
	*	@public
	*	@property content
	*	@type Object
	**/
	get content() {
		return (
			<div className = "content col-xs-12">
				<h4 className = "text-center">{this.props.name}</h4>
			    <p className = "text-center col-xs-12">ReactJS</p>
			</div>
		);
	}

	/**
	*	DisplayName
	*	@public
	*	@override
	*	@property displayName
	*	@type String
	**/
	get displayName() {
		return 'HomePage';
	}

	/**
	*	Static Component Bootstrap
	*	@static
	*	@override
	*	@method bootstrap
	*	@return
	**/
	static bootstrap() {
		Page.bootstrap(<HomePage name="Home" />);
	}

}
