/**
*	@flow
*	@module common.dispatcher
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import _ from 'underscore';
import {Dispatcher as FluxDispatcher} from 'flux';

/**
*	Class Dispatcher
*	@namespace common.dispatcher
*	@class common.dispatcher.Dispatcher
*	@extends flux.Dispatcher
*
*	@requires underscore
*	@requires flux.Dispatcher
**/
class Dispatcher extends FluxDispatcher {

	/**
	*	Returns action's payload when valid, otherwise an exception will be thrown
	*	@public
	*	@method validate
	*	@throws Error
	*	@param payload {Object} action's payload
	*	@return Object
	**/
	validate(payload) {
		if(!_.def(payload))
			throw new Error(`Payload not defined`);
		let pd = JSON.stringify(payload, null, 2);
		if(!_.def(payload.source))
			throw new Error(`Payload 'source' property cannot be null: ${pd}`);
		if(!_.def(payload.type))
			throw new Error(`Payload 'type' property cannot be null: ${pd}`);
		if(!_.isString(payload.type))
			throw new Error(`Payload 'type' property must be a string: ${pd}`);
		return payload;
	}

	/**
	*	Default Action Dispatching
	*	@public
	*	@override
	*	@method dispatch
	*	@param payload {Object} action's payload
	*	@return String
	**/
	dispatch(payload = {} : Object) : String {
		return super.dispatch(this.validate(payload));
	}

	/**
	*	Handles a given action and returns a token reference
	*	@public
	*	@method handleView
	*	@param action {Object} action's payload
	*	@return String
	**/
	handleView(action = {} : Object) : String {
		return this.dispatch(_.extend(action, { source: this.actions.view }));
	}

	/**
	*	Handles a given action and returns a token reference
	*	@public
	*	@method handleStore
	*	@param action {Object} action's payload
	*	@return String
	**/
	handleStore(action = {} : Object) : String {
		return this.dispatch(_.extend(action, { source: this.actions.store }));
	}

	/**
	*	@public
	*	@property actions
	*	@type Object
	**/
	get actions(): Object {
		return {
			view: 'view-action',
			store: 'store-action'
		};
	}

}

export const dispatcher = new Dispatcher();
