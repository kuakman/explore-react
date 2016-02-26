/**
*	@flow
*	@module home.store
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import {HomeDispatcher} from 'home/dispatcher/home-dispatcher';
import {Map} from 'immutable';

/**
*	Class HomeStore
*	@namespace home.store
*	@class home.store.HomeStore
*	@extends flux.utils.Store
*
*	@requires home.dispatcher.HomeDispatcher
*	@requires Immutable.Map
**/
export class HomeStore {

	/**
	*	@constructor
	**/
	constructor() {
		this.dispatcher = new HomeDispatcher();
		this.state = new Map();
	}

	/**
	*	@public
	*	@property styles
	*	@type String
	**/
	get styles(): String {
		return 'bg-primary';
	}

}
