import * as Dom from './dom';
import * as KEYBOARD from './layout/index';
import * as KEY from './layout/symbol/key';
import * as MODIFIER from './layout/symbol/modifier';

import { from } from './layout/qwerty';

const INIT_HOLDING = 0b0000000000000000;
const NOOP = () => {};

let
	listenerMap = {},
	holding = INIT_HOLDING,
	currentKeyboard = from;

const KeyCodeHandler = handler => event => handler(currentKeyboard(event.code));

const holdKeyValue = KeyCodeHandler(code => {
	holding |= code;

	if (0x00FF & code) {
		console.log('holding: ', holding.toString(2));
		(listenerMap[holding] || NOOP)();
		holding &= ~code;
	}
});

const releaseKeyValue = KeyCodeHandler(code => holding &= ~code);
const releaseAll = () => holding = INIT_HOLDING;

Dom.addEventListener(Dom.WINDOW, 'keydown', holdKeyValue);
Dom.addEventListener(Dom.WINDOW, 'keyup', releaseKeyValue);
Dom.addEventListener(Dom.WINDOW, 'blur', releaseAll);

export const
	setKeyboard = keyboard => currentKeyboard = keyboard,
	isRegistered = token => {},
	register = (token, listener) => listenerMap[token] = listener,
	unregister = token => delete listenerMap[token],
	unregisterAll = () => listenerMap = {},
	isHolding = key => (holding & key) === key;

export { KEYBOARD, KEY, MODIFIER };