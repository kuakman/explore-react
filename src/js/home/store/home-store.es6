/**
*	@flow
*	@module home.store
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import $ from 'jquery'
import {Store} from 'common/store/store';
import {HomeDispatcher} from 'home/dispatcher/home-dispatcher';
import {Map} from 'immutable';

/**
*	Class HomeStore
*	@namespace home.store
*	@class home.store.HomeStore
*	@extends common.store.Store
*
*	@requires jquery
*	@requires common.store.Store
*	@requires home.dispatcher.HomeDispatcher
*	@requires Immutable.Map
**/
export class HomeStore extends Store {

	/**
	*	@constructor
	*	@param [...args] {Object} constructor arguments
	**/
	constructor(...args) {
		super(HomeDispatcher, Map({ 'items': [
				{ id: 1, content: 'Item 1' },
				{ id: 2, content: 'Item 2' },
				{ id: 3, content: 'Item 3' }]
			})
		, ...args);
	}

	/**
	*	AddItem Action Handler
	*	@public
	*	@method onAddItem
	*	@param payload {Object} payload reference
	*	@return Array
	**/
	onAddItem(payload) {
		console.log(`onAddItem(${JSON.stringify(payload)});`);
		$(this).trigger('change', this.state.get('items'));
	}

	/**
	*	RemoveItem Action Handler
	*	@public
	*	@method onRemoveItem
	*	@param payload {Object} payload reference
	*	@return Array
	**/
	onRemoveItem(payload) {
		console.log(`onRemoveItem(${JSON.stringify(payload)});`);
		$(this).trigger('change', this.state.get('items'));
	}

}
