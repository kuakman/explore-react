/**
*	@module home
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import React from 'react';
import {Page} from 'common/page';
import HomeJSX from 'jsx!partials/home/home';

/**
*	Class HomePage
*	@namespace home
*	@class home.HomePage
*	@extends common.Page
*
*	@requires common.Page
*	@requires partials.home.HomeJSX
**/
export class HomePage extends Page {

	/**
	*	Constructor
	*	@constructor
	**/
	constructor() {
		super({ template: HomeJSX });
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
		Page.bootstrap(<HomePage />);
	}

}
