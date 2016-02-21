/**
*	@module view.home
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
import React from 'react';
import ReactDOM from 'reactDOM';
import HomeJSX from 'jsx!partials/home/home';

/**
*	Class HomePage
*	@namespace view.home
*	@class view.home.HomePage
*	@extends React.Component
*
*	@requires React
*	@requires ReactDOM
*	@requires jquery
*	@requires partials.HomeHTML
**/
export class HomePage extends React.Component {

	/**
	*	Render Component
	*	@public
	*	@method render
	*	@return view.home.HomePage
	**/
	render() {
		return HomeJSX();
	}

	/**
	*	DisplayName
	*	@public
	*	@property displayName
	*	@type String
	**/
	get displayName() {
		return 'HomePage';
	}

	/**
	*	Static Component Bootstrap
	*	@static
	*	@method bootstrap
	*	@return
	**/
	static bootstrap() {
		return ReactDOM.render(<HomePage />, $('body div.main')[0]);
	}

}
