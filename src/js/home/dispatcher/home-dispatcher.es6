/**
*	@flow
*	@module home.dispatcher
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import {Dispatcher} from 'flux';

/**
*	Class HomeDispatcher
*	@namespace home.dispatcher
*	@class home.dispatcher.HomeDispatcher
*	@extends flux.Dispatcher
*
*	@requires flux.Dispatcher
**/
export class HomeDispatcher extends Dispatcher {

	/**
	*	@constructor
	**/
	constructor() {
		super();
	}

	/**
	*	Handles a given action
	*	@public
	*	@method handle
	*	@param [action] {home.action.HomeAction} action to
	*	@return home.dispatcher.HomeDispatcher
	**/
	handle(action: HomeAction): home.dispatcher.HomeDispatcher {
		this.dispatch({ source: HomeDispatcher.Actions.view, action: action });
		return this;
	}

	/**
	*	@static
	*	@property Actions
	*	@type Object
	**/
	static get Actions(): Object {
		return {
			view: 'view'
		};
	}

}
