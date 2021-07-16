import * as K from './symbol/key';
import { MAP as QWERTY_MAP } from './qwerty';

const MAP = Object.assign({}, QWERTY_MAP, {
	Minus: K.BRACKET_LEFT,
	Equal: K.BRACKET_RIGHT,

	// A
	KeyB: K.KEY_X,
	KeyC: K.KEY_J,
	KeyD: K.KEY_E,
	KeyE: K.PERIOD,
	KeyF: K.KEY_U,
	KeyG: K.KEY_I,
	KeyH: K.KEY_D,
	KeyI: K.KEY_C,
	KeyJ: K.KEY_H,
	KeyK: K.KEY_T,
	KeyL: K.KEY_N,
	// M
	KeyN: K.KEY_B,
	KeyO: K.KEY_R,
	KeyP: K.KEY_L,
	KeyQ: K.QUOTE,
	KeyR: K.KEY_P,
	KeyS: K.KEY_O,
	KeyT: K.KEY_Y,
	KeyU: K.KEY_G,
	KeyV: K.KEY_K,
	KeyW: K.COMMA,
	KeyX: K.KEY_Q,
	KeyY: K.KEY_F,
	KeyZ: K.SEMICOLON,

	Quote:         K.MINUS,
	Backslash:     K.KEY_Z,
	Comma:         K.KEY_W,
	Period:        K.KEY_V,
	Semicolon:     K.KEY_S,
	BracketLeft:   K.BACK_SLASH,
	BracketRight:  K.EQUAL,
});

export const from = code => {
	return code in MAP ? MAP[code] : null;
};
