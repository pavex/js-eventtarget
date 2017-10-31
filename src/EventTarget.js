/**
 * @fileoverview Event target controller.
 * @author pavex@ines.cz
 */


export default class EventTarget {


/** @type {Array<Object>} */
	_listeners = [];





/**
 * @private
 * @param {string} event
 * @param {function(o)} listener
 * @return {number|null}
 */
	_findEventListenerIndex(event, listener) {
		for (let index in this._listeners) {
			if (this._listeners.hasOwnProperty(index)) {
				let l = this._listeners[index];
				if (l.event === event && l.listener === listener) {
					return index;
				}
			}
		}
		return null;
	};





/**
 * @param {string} event
 * @param {function(o)} listener
 */
	addEventListener(event, listener) {
		let index = this._findEventListenerIndex(event, listener);
		if (index === null) {
			this._listeners.push({event, listener});
		}
	};





/**
 * @param {string} event
 * @param {function(o)} listener
 */
	removeEventListener(event, listener) {
		let index = this._findEventListenerIndex(event, listener);
		if (index !== null) {
			this._listeners.splice(index, 1);
		}
	};





/**
 * @param {string} event
 * @param {Object=} o
 */
	dispatchEvent(event, o) {
		this._listeners.forEach((l) => {
			if (l.event === event) {
				l.listener.call(this, this, o);
			}
		});
	};





};