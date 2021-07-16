/*!
 * @produck/shortcut v0.1.0
 * (c) 2020-2021 ChaosLee
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.shortcut = {}));
}(this, (function (exports) { 'use strict';

	const
		WINDOW = window;

	/**
	 *
	 * @param {EventTarget} emitter
	 * @param {string} eventType
	 * @param {Function} listener
	 */
	const addEventListener = (emitter, eventType, listener) => {
		emitter.addEventListener(eventType, listener);
	};

	const
		DIGIT_0 = 0x0A,
		DIGIT_1 = 0x01,
		DIGIT_2 = 0x02,
		DIGIT_3 = 0x03,
		DIGIT_4 = 0x04,
		DIGIT_5 = 0x05,
		DIGIT_6 = 0x06,
		DIGIT_7 = 0x07,
		DIGIT_8 = 0x08,
		DIGIT_9 = 0x09,

		MINUS = 0x0E,
		EQUAL = 0x0F,

		KEY_A = 0x10,
		KEY_B = 0x11,
		KEY_C = 0x12,
		KEY_D = 0x13,
		KEY_E = 0x14,
		KEY_F = 0x15,
		KEY_G = 0x16,
		KEY_H = 0x17,
		KEY_I = 0x18,
		KEY_J = 0x19,
		KEY_K = 0x1A,
		KEY_L = 0x1B,
		KEY_M = 0x1C,
		KEY_N = 0x1D,
		KEY_O = 0x1E,
		KEY_P = 0x1F,
		KEY_Q = 0x20,
		KEY_R = 0x21,
		KEY_S = 0x22,
		KEY_T = 0x23,
		KEY_U = 0x24,
		KEY_V = 0x25,
		KEY_W = 0x26,
		KEY_X = 0x27,
		KEY_Y = 0x28,
		KEY_Z = 0x29,

		QUOTE =         0x30,
		BACK_QUOTE =    0x31,
		SLASH =         0x32,
		BACK_SLASH =    0x33,
		COMMA =         0x34,
		PERIOD =        0x35,
		SEMICOLON =     0x36,
		BRACKET_LEFT =  0x37,
		BRACKET_RIGHT = 0x38,

		ENTER =        0x39,
		SPACE =        0x3A,
		BACKSPACE =    0x3B,
		TAB =          0x3C,

		F1 =  0x40,
		F2 =  0x41,
		F3 =  0x42,
		F4 =  0x43,
		F5 =  0x44,
		F6 =  0x45,
		F7 =  0x46,
		F8 =  0x47,
		F9 =  0x48,
		F10 = 0x49,
		F11 = 0x4A,
		F12 = 0x4B,

		NUMPAD_0 =        0x50,
		NUMPAD_1 =        0x51,
		NUMPAD_2 =        0x52,
		NUMPAD_3 =        0x53,
		NUMPAD_4 =        0x54,
		NUMPAD_5 =        0x55,
		NUMPAD_6 =        0x56,
		NUMPAD_7 =        0x57,
		NUMPAD_8 =        0x58,
		NUMPAD_9 =        0x59,
		NUMPAD_DECIMAL =  0x5A,
		NUMPAD_ADD =      0x5B,
		NUMPAD_SUBTRACT = 0x5C,
		NUMPAD_MULTIPLY = 0x5D,
		NUMPAD_DIVIDE =   0x5E,
		NUMPAD_ENTER =    0x5F,

		ARROW_UP =    0x61,
		ARROW_DOWN =  0x62,
		ARROW_LEFT =  0x63,
		ARROW_RIGHT = 0x64,

		ESCAPE =         0x81,
		PAUSE =          0x82,
		PAGE_UP =        0x83,
		PAGE_DOWN =      0x84,
		HOME =           0x85,
		END =            0x86,
		INSERT =         0x87,
		DELETE =         0x88,
		CONTEXT_MENU =   0x89,

		NUM_LOCK =    0xF1,
		CAPS_LOCK =   0xF2,
		SCROLL_LOCK = 0xF3,

		MEDIA_TRACK_PREVIOUS = 0x90,
		MEDIA_TRACK_NEXT =     0x91,
		MEDIA_PLAY_PAUSE =     0x92,
		MEDIA_STOP =           0x93,

		AUDIO_VOLUME_MUTE =    0xA0,
		AUDIO_VOLUME_DOWN =    0xA1,
		AUDIO_VOLUME_UP =      0xA2,

		BROWSER_HOME =         0xB0,
		BROWSER_SERACH =       0xB1,
		BROWSER_FAVORITES =    0xB2,
		BROWSER_REFRESH =      0xB3,
		BROWSER_STOP =         0xB4,
		BROWSER_FORWARD =      0xB5,
		BROWSER_BACK =         0xB6;

	var key = /*#__PURE__*/Object.freeze({
		__proto__: null,
		DIGIT_0: DIGIT_0,
		DIGIT_1: DIGIT_1,
		DIGIT_2: DIGIT_2,
		DIGIT_3: DIGIT_3,
		DIGIT_4: DIGIT_4,
		DIGIT_5: DIGIT_5,
		DIGIT_6: DIGIT_6,
		DIGIT_7: DIGIT_7,
		DIGIT_8: DIGIT_8,
		DIGIT_9: DIGIT_9,
		MINUS: MINUS,
		EQUAL: EQUAL,
		KEY_A: KEY_A,
		KEY_B: KEY_B,
		KEY_C: KEY_C,
		KEY_D: KEY_D,
		KEY_E: KEY_E,
		KEY_F: KEY_F,
		KEY_G: KEY_G,
		KEY_H: KEY_H,
		KEY_I: KEY_I,
		KEY_J: KEY_J,
		KEY_K: KEY_K,
		KEY_L: KEY_L,
		KEY_M: KEY_M,
		KEY_N: KEY_N,
		KEY_O: KEY_O,
		KEY_P: KEY_P,
		KEY_Q: KEY_Q,
		KEY_R: KEY_R,
		KEY_S: KEY_S,
		KEY_T: KEY_T,
		KEY_U: KEY_U,
		KEY_V: KEY_V,
		KEY_W: KEY_W,
		KEY_X: KEY_X,
		KEY_Y: KEY_Y,
		KEY_Z: KEY_Z,
		QUOTE: QUOTE,
		BACK_QUOTE: BACK_QUOTE,
		SLASH: SLASH,
		BACK_SLASH: BACK_SLASH,
		COMMA: COMMA,
		PERIOD: PERIOD,
		SEMICOLON: SEMICOLON,
		BRACKET_LEFT: BRACKET_LEFT,
		BRACKET_RIGHT: BRACKET_RIGHT,
		ENTER: ENTER,
		SPACE: SPACE,
		BACKSPACE: BACKSPACE,
		TAB: TAB,
		F1: F1,
		F2: F2,
		F3: F3,
		F4: F4,
		F5: F5,
		F6: F6,
		F7: F7,
		F8: F8,
		F9: F9,
		F10: F10,
		F11: F11,
		F12: F12,
		NUMPAD_0: NUMPAD_0,
		NUMPAD_1: NUMPAD_1,
		NUMPAD_2: NUMPAD_2,
		NUMPAD_3: NUMPAD_3,
		NUMPAD_4: NUMPAD_4,
		NUMPAD_5: NUMPAD_5,
		NUMPAD_6: NUMPAD_6,
		NUMPAD_7: NUMPAD_7,
		NUMPAD_8: NUMPAD_8,
		NUMPAD_9: NUMPAD_9,
		NUMPAD_DECIMAL: NUMPAD_DECIMAL,
		NUMPAD_ADD: NUMPAD_ADD,
		NUMPAD_SUBTRACT: NUMPAD_SUBTRACT,
		NUMPAD_MULTIPLY: NUMPAD_MULTIPLY,
		NUMPAD_DIVIDE: NUMPAD_DIVIDE,
		NUMPAD_ENTER: NUMPAD_ENTER,
		ARROW_UP: ARROW_UP,
		ARROW_DOWN: ARROW_DOWN,
		ARROW_LEFT: ARROW_LEFT,
		ARROW_RIGHT: ARROW_RIGHT,
		ESCAPE: ESCAPE,
		PAUSE: PAUSE,
		PAGE_UP: PAGE_UP,
		PAGE_DOWN: PAGE_DOWN,
		HOME: HOME,
		END: END,
		INSERT: INSERT,
		DELETE: DELETE,
		CONTEXT_MENU: CONTEXT_MENU,
		NUM_LOCK: NUM_LOCK,
		CAPS_LOCK: CAPS_LOCK,
		SCROLL_LOCK: SCROLL_LOCK,
		MEDIA_TRACK_PREVIOUS: MEDIA_TRACK_PREVIOUS,
		MEDIA_TRACK_NEXT: MEDIA_TRACK_NEXT,
		MEDIA_PLAY_PAUSE: MEDIA_PLAY_PAUSE,
		MEDIA_STOP: MEDIA_STOP,
		AUDIO_VOLUME_MUTE: AUDIO_VOLUME_MUTE,
		AUDIO_VOLUME_DOWN: AUDIO_VOLUME_DOWN,
		AUDIO_VOLUME_UP: AUDIO_VOLUME_UP,
		BROWSER_HOME: BROWSER_HOME,
		BROWSER_SERACH: BROWSER_SERACH,
		BROWSER_FAVORITES: BROWSER_FAVORITES,
		BROWSER_REFRESH: BROWSER_REFRESH,
		BROWSER_STOP: BROWSER_STOP,
		BROWSER_FORWARD: BROWSER_FORWARD,
		BROWSER_BACK: BROWSER_BACK
	});

	const
		CONTROL$1 =  0b1000000000000000,
		SHIFT$1 =    0b0100000000000000,
		ALT$1 =      0b0010000000000000,
		META$1 =     0b0001000000000000;

	var modifier = /*#__PURE__*/Object.freeze({
		__proto__: null,
		CONTROL: CONTROL$1,
		SHIFT: SHIFT$1,
		ALT: ALT$1,
		META: META$1
	});

	/**
	 * KeyboardEvent.code, reference from:
	 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values
	 *
	 * QWERTY
	 */

	const MAP$1 = {
		Digit0: DIGIT_0,
		Digit1: DIGIT_1,
		Digit2: DIGIT_2,
		Digit3: DIGIT_3,
		Digit4: DIGIT_4,
		Digit5: DIGIT_5,
		Digit6: DIGIT_6,
		Digit7: DIGIT_7,
		Digit8: DIGIT_8,
		Digit9: DIGIT_9,

		Minus: MINUS,
		Equal: EQUAL,

		KeyA: KEY_A,
		KeyB: KEY_B,
		KeyC: KEY_C,
		KeyD: KEY_D,
		KeyE: KEY_E,
		KeyF: KEY_F,
		KeyG: KEY_G,
		KeyH: KEY_H,
		KeyI: KEY_I,
		KeyJ: KEY_J,
		KeyK: KEY_K,
		KeyL: KEY_L,
		KeyM: KEY_M,
		KeyN: KEY_N,
		KeyO: KEY_O,
		KeyP: KEY_P,
		KeyQ: KEY_Q,
		KeyR: KEY_R,
		KeyS: KEY_S,
		KeyT: KEY_T,
		KeyU: KEY_U,
		KeyV: KEY_V,
		KeyW: KEY_W,
		KeyX: KEY_X,
		KeyY: KEY_Y,
		KeyZ: KEY_Z,

		Quote:        QUOTE,
		Backquote:    BACK_QUOTE,
		Slash:        SLASH,
		Backslash:    BACK_SLASH,
		Comma:        COMMA,
		Period:       PERIOD,
		Semicolon:    SEMICOLON,
		BracketLeft:  BRACKET_LEFT,
		BracketRight: BRACKET_RIGHT,

		Enter:        ENTER,
		Space:        SPACE,
		Backspace:    BACKSPACE,
		Tab:          TAB,

		F1:  F1,
		F2:  F2,
		F3:  F3,
		F4:  F4,
		F5:  F5,
		F6:  F6,
		F7:  F7,
		F8:  F8,
		F9:  F9,
		F10: F10,
		F11: F11,
		F12: F12,

		NumLock:        NUM_LOCK,
		Numpad0:        NUMPAD_0,
		Numpad1:        NUMPAD_1,
		Numpad2:        NUMPAD_2,
		Numpad3:        NUMPAD_3,
		Numpad4:        NUMPAD_4,
		Numpad5:        NUMPAD_5,
		Numpad6:        NUMPAD_6,
		Numpad7:        NUMPAD_7,
		Numpad8:        NUMPAD_8,
		Numpad9:        NUMPAD_9,
		NumpadDecimal:  NUMPAD_DECIMAL,
		NumpadAdd:      NUMPAD_ADD,
		NumpadSubtract: NUMPAD_SUBTRACT,
		NumpadMultiply: NUMPAD_MULTIPLY,
		NumpadDivide:   NUMPAD_DIVIDE,
		NumpadEnter:    NUMPAD_ENTER,

		Escape: ESCAPE,

		ArrowUp:    ARROW_UP,
		ArrowDown:  ARROW_DOWN,
		ArrowLeft:  ARROW_LEFT,
		ArrowRight: ARROW_RIGHT,

		ControlLeft:  CONTROL$1,
		ControlRight: CONTROL$1,
		ShiftLeft:    SHIFT$1,
		ShiftRight:   SHIFT$1,
		AltLeft:      ALT$1,
		AltRight:     ALT$1,
		MetaLeft:     META$1,
		MetaRight:    META$1,

		CapsLock:      CAPS_LOCK,
		Pause:         PAUSE,
		ScrollLock:    SCROLL_LOCK,
		PageUp:        PAGE_UP,
		PageDown:      PAGE_DOWN,
		Home:          HOME,
		End:           END,
		Insert:        INSERT,
		Delete:        DELETE,
		ContextMenu:   CONTEXT_MENU,

		MediaTrackPrevious: MEDIA_TRACK_PREVIOUS,
		MediaTrackNext:     MEDIA_TRACK_NEXT,
		MediaPlayPause:     MEDIA_PLAY_PAUSE,
		MediaStop:          MEDIA_STOP,

		AudioVolumeMute:    AUDIO_VOLUME_MUTE,
		AudioVolumeDown:    AUDIO_VOLUME_DOWN,
		AudioVolumeUp:      AUDIO_VOLUME_UP,

		BrowserHome:       BROWSER_HOME,
		BrowserSearch:     BROWSER_SERACH,
		BrowserFavorites:  BROWSER_FAVORITES,
		BrowserRefresh:    BROWSER_REFRESH,
		BrowserStop:       BROWSER_STOP,
		BrowserForward:    BROWSER_FORWARD,
		BrowserBack:       BROWSER_BACK,

		// IntlBackslash: 0x0056,
		// PrintScreen:   0xE037,
	};

	const from$2 = code => {
		return code in MAP$1 ? MAP$1[code] : null;
	};

	// import * as K from './symbol/key';

	const ALL = Object.assign({}, MAP$1, {

	});

	const from$1 = code => {
		return code in ALL ? ALL[code] : null;
	};

	const MAP = Object.assign({}, MAP$1, {
		Minus: BRACKET_LEFT,
		Equal: BRACKET_RIGHT,

		// A
		KeyB: KEY_X,
		KeyC: KEY_J,
		KeyD: KEY_E,
		KeyE: PERIOD,
		KeyF: KEY_U,
		KeyG: KEY_I,
		KeyH: KEY_D,
		KeyI: KEY_C,
		KeyJ: KEY_H,
		KeyK: KEY_T,
		KeyL: KEY_N,
		// M
		KeyN: KEY_B,
		KeyO: KEY_R,
		KeyP: KEY_L,
		KeyQ: QUOTE,
		KeyR: KEY_P,
		KeyS: KEY_O,
		KeyT: KEY_Y,
		KeyU: KEY_G,
		KeyV: KEY_K,
		KeyW: COMMA,
		KeyX: KEY_Q,
		KeyY: KEY_F,
		KeyZ: SEMICOLON,

		Quote:         MINUS,
		Backslash:     KEY_Z,
		Comma:         KEY_W,
		Period:        KEY_V,
		Semicolon:     KEY_S,
		BracketLeft:   BACK_SLASH,
		BracketRight:  EQUAL,
	});

	const from = code => {
		return code in MAP ? MAP[code] : null;
	};

	var index = /*#__PURE__*/Object.freeze({
		__proto__: null,
		AZERTY: from$1,
		QWERTY: from$2,
		DVORAK: from
	});

	const isBoolean = any => typeof any === 'boolean';

	const normalizeModifierCombination = (_combination = {}) => {
		const combination = {
			control: false,
			alt: false,
			shift: false,
			meta: false
		};

		const {
			control: _control = combination.control,
			alt: _alt = combination.alt,
			shift: _shift = combination.shift,
			meta: _meta = combination.meta
		} = _combination;

		if (!isBoolean(_control)) {
			throw new Error('Invalid `.modifiers[].control`, a boolean expected');
		}

		if (!isBoolean(_alt)) {
			throw new Error('Invalid `.modifiers[].alt`, a boolean expected');
		}

		if (!isBoolean(_shift)) {
			throw new Error('Invalid `.modifiers[].shift`, a boolean expected');
		}

		if (!isBoolean(_meta)) {
			throw new Error('Invalid `.modifiers[].meta`, a boolean expected');
		}

		combination.shift = _shift;
		combination.alt = _alt;
		combination.control = _control;
		combination.meta = _meta;

		return combination;
	};

	const normalize = (_options = {}) => {
		const options = {
			modifiers: []
		};

		const {
			key: _key,
			modifiers: _modifiers = options.modifiers
		} = _options;

		if (typeof _key !== 'number') {
			throw new Error('Invalid `.key` and required.');
		}

		if (!Array.isArray(_modifiers)) {
			throw new Error('Invalid `.modifiers`, an array expected.');
		}

		options.modifiers = _modifiers.map(normalizeModifierCombination);
		options.key = _key;

		return options;
	};

	const StateListFromAccelerator = accelerator => {
		const { key, modifiers } = normalize(accelerator);

		return modifiers.map(combination => {
			let state = 0x0000;

			if (combination.control) {
				state |= CONTROL$1;
			}

			if (combination.alt) {
				state |= ALT$1;
			}

			if (combination.shift) {
				state |= SHIFT$1;
			}

			if (combination.meta) {
				state |= META$1;
			}

			return state | key;
		});
	};

	function CommandOrControl(combination) {
		return [CONTROL, META].map(BASE => {
			return normalizeModifierCombination(Object.assign({}, combination, BASE));
		});
	}

	const
		CONTROL = { control: true },
		SHIFT = { shift: true },
		ALT = { alt: true },
		META = { meta: true };

	function Control(combination = {}) {
		return normalizeModifierCombination(Object.assign({}, combination, CONTROL));
	}

	function Meta(combination = {}) {
		return normalizeModifierCombination(Object.assign({}, combination, META));
	}

	function Alt(combination = {}) {
		return normalizeModifierCombination(Object.assign({}, combination, ALT));
	}

	function Shift(combination = {}) {
		return normalizeModifierCombination(Object.assign({}, combination, SHIFT));
	}

	var combinator = /*#__PURE__*/Object.freeze({
		__proto__: null,
		CommandOrControl: CommandOrControl,
		CmdOrCtrl: CommandOrControl,
		Meta: Meta,
		Command: Meta,
		Cmd: Meta,
		Super: Meta,
		Alt: Alt,
		Option: Alt,
		Control: Control,
		Shift: Shift
	});

	const INIT_HOLDING = 0b0000000000000000;
	const NOOP = () => {};

	let
		listenerMap = {},
		holding = INIT_HOLDING,
		currentKeyboard = from$2;

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

	addEventListener(WINDOW, 'keydown', holdKeyValue);
	addEventListener(WINDOW, 'keyup', releaseKeyValue);
	addEventListener(WINDOW, 'blur', releaseAll);

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

	exports.Combinator = combinator;
	exports.KEY = key;
	exports.KEYBOARD = index;
	exports.MODIFIER = modifier;
	exports.isHolding = isHolding;
	exports.register = register;
	exports.setKeyboard = setKeyboard;
	exports.unregister = unregister;
	exports.unregisterAll = unregisterAll;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
