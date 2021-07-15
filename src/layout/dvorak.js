import * as K from './symbol/key';
import { MAP as QWERTY_MAP } from './qwerty';

const MAP = Object.assign({}, QWERTY_MAP, {
	Minus: K.BracketLeft,
	Equal: K.BracketRight,

	// A
	KeyB: K.KeyX,
	KeyC: K.KeyJ,
	KeyD: K.KeyE,
	KeyE: K.Period,
	KeyF: K.KeyU,
	KeyG: K.KeyI,
	KeyH: K.KeyD,
	KeyI: K.KeyC,
	KeyJ: K.KeyH,
	KeyK: K.KeyT,
	KeyL: K.KeyN,
	// M
	KeyN: K.KeyB,
	KeyO: K.KeyR,
	KeyP: K.KeyL,
	KeyQ: K.Quote,
	KeyR: K.KeyP,
	KeyS: K.KeyO,
	KeyT: K.KeyY,
	KeyU: K.KeyG,
	KeyV: K.KeyK,
	KeyW: K.Comma,
	KeyX: K.KeyQ,
	KeyY: K.KeyF,
	KeyZ: K.Semicolon,

	Quote:         K.MINUS,
	Backslash:     K.KeyZ,
	Comma:         K.KeyW,
	Period:        K.KeyV,
	Semicolon:     K.KeyS,
	BracketLeft:   K.Backslash,
	BracketRight:  K.EQUAL,
});

export const from = code => {
	return code in MAP ? MAP[code] : null;
};
