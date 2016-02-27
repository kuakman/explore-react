/**
*	@flow
*	@module store
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import $ from 'jquery';
import _s from 'underscore_string';
import {Dispatcher} from 'flux';

/**
*	Class PageStore
*	@namespace store
*	@class store.Store
*
*	@requires jquery
*	@requires flux.Dispatcher
**/
export class Store  {

	/**
	*	@constructor
	*	@param [dispatcher] {Object} dispatcher reference
	*	@param [state] {Object} state reference
	*	@param [...args] {Object} extra arguments
	**/
	constructor(dispatcher = new Dispatcher() : Dispatcher, state = {} : Object, ...args) {
		this._state = state;
		this._token = dispatcher.register(_.bind(this.onAction, this));
	}

	/**
	*	Default Dispatcher Action Handler
	*	@public
	*	@method onAction
	*	@param payload {Object} action's payload
	*	@return Boolean
	**/
	onAction(payload) {
		let type = `on${_s.capitalize(payload.type)}`;
		if(_.def(this[type])) {
			this[type](payload);
			return true;
		}
		return false;
	}

	/**
	*	@public
	*	@property token
	*	@type String
	**/
	get token() {
		return this._token;
	}

	/**
	*	@public
	*	@property state
	*	@type Object
	**/
	get state() {
		return this._state;
	}

}
