import * as Dom from './dom';
import * as KEYBOARD from './layout/index';
import * as KEY from './layout/symbol/key';
import * as MODIFIER from './layout/symbol/modifier';
import { StateListFromAccelerator } from './accelerator';

const INIT_HOLDING = 0b0000000000000000;
const NOOP = () => {};

let
	listenerMap = {},
	holding = INIT_HOLDING,
	currentKeyboard = KEYBOARD.QWERTY;

const KeyCodeHandler = handler => event => handler(currentKeyboard(event.code));
const releaseKeyValue = KeyCodeHandler(code => holding &= ~code);
const releaseAll = () => holding = INIT_HOLDING;
const holdKeyValue = KeyCodeHandler(code => {
	holding |= code;

	if (0x00FF & code) {
		(listenerMap[holding] || NOOP)();
		holding &= ~code;
	}
});

Dom.addEventListener(Dom.WINDOW, 'keydown', holdKeyValue);
Dom.addEventListener(Dom.WINDOW, 'keyup', releaseKeyValue);
Dom.addEventListener(Dom.WINDOW, 'blur', releaseAll);

const register = (accelerator, listener) => {
	StateListFromAccelerator(accelerator)
		.forEach(state => listenerMap[state] = listener);
};

const unregister = (accelerator) => {
	StateListFromAccelerator(accelerator)
		.forEach(state => delete listenerMap[state]);
};

const setKeyboard = keyboard => currentKeyboard = keyboard;
const unregisterAll = () => listenerMap = {};
const isHolding = key => (holding & key) === key;

export { KEYBOARD, KEY, MODIFIER };
export { register, unregister, setKeyboard, unregisterAll, isHolding };
export * as Combinator from './combinator';