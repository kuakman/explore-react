/**
*	@flow
*	@module home.action
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import {HomeDispatcher} from 'home/dispatcher/home-dispatcher';

/**
*	Class HomeAction
*	@namespace home.action
*	@class home.action.HomeAction
*
*	@requires home.dispatcher.HomeDispatcher
**/
export class HomeAction {

	/**
	*	@constructor
	*	@param [...args] {Object} constructor arguments
	*	@return home.action.HomeAction
	**/
	constructor(...args) {
		return this;
	}

	/**
	*	Add a new item
	*	@public
	*	@method addItem
	*	@return Object
	**/
	addItem() : Object {
		let id = this.getItems().length;
		return HomeDispatcher.handleView({ type: 'addItem', id: id, content: `Item ${id.toString()}` });
	}

	/**
	*	Remove an existing item
	*	@public
	*	@method removeItem
	*	@return Object
	**/
	removeItem(id : Number) : Object {
		return HomeDispatcher.handleView({ type: 'removeItem', id: id });
	}

}
