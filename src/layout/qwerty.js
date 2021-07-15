/**
 * KeyboardEvent.code, reference from:
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values
 *
 * QWERTY
 */

import * as K from '../symbol/key';
import * as M from '../symbol/modifier';

export const MAP = {
	Digit0: K.DIGIT_0,
	Digit1: K.DIGIT_1,
	Digit2: K.DIGIT_2,
	Digit3: K.DIGIT_3,
	Digit4: K.DIGIT_4,
	Digit5: K.DIGIT_5,
	Digit6: K.DIGIT_6,
	Digit7: K.DIGIT_7,
	Digit8: K.DIGIT_8,
	Digit9: K.DIGIT_9,

	Minus: K.MINUS,
	Equal: K.EQUAL,

	KeyA: K.KeyA,
	KeyB: K.KeyB,
	KeyC: K.KeyC,
	KeyD: K.KeyD,
	KeyE: K.KeyE,
	KeyF: K.KeyF,
	KeyG: K.KeyG,
	KeyH: K.KeyH,
	KeyI: K.KeyI,
	KeyJ: K.KeyJ,
	KeyK: K.KeyK,
	KeyL: K.KeyL,
	KeyM: K.KeyM,
	KeyN: K.KeyN,
	KeyO: K.KeyO,
	KeyP: K.KeyP,
	KeyQ: K.KeyQ,
	KeyR: K.KeyR,
	KeyS: K.KeyS,
	KeyT: K.KeyT,
	KeyU: K.KeyU,
	KeyV: K.KeyV,
	KeyW: K.KeyW,
	KeyX: K.KeyX,
	KeyY: K.KeyY,
	KeyZ: K.KeyZ,

	Quote:        K.Quote,
	Backquote:    K.Backquote,
	Slash:        K.Slash,
	Backslash:    K.Backslash,
	Comma:        K.Comma,
	Period:       K.Period,
	Semicolon:    K.Semicolon,
	BracketLeft:  K.BracketLeft,
	BracketRight: K.BracketRight,

	Enter:        K.Enter,
	Space:        K.Space,
	Backspace:    K.Backspace,
	Tab:          K.Tab,

	F1:  K.F1,
	F2:  K.F2,
	F3:  K.F3,
	F4:  K.F4,
	F5:  K.F5,
	F6:  K.F6,
	F7:  K.F7,
	F8:  K.F8,
	F9:  K.F9,
	F10: K.F10,
	F11: K.F11,
	F12: K.F12,

	NumLock: K.NumLock,
	Numpad0: K.Numpad0,
	Numpad1: K.Numpad1,
	Numpad2: K.Numpad2,
	Numpad3: K.Numpad3,
	Numpad4: K.Numpad4,
	Numpad5: K.Numpad5,
	Numpad6: K.Numpad6,
	Numpad7: K.Numpad7,
	Numpad8: K.Numpad8,
	Numpad9: K.Numpad9,
	NumpadDecimal:  K.NumpadDecimal,
	NumpadAdd:      K.NumpadAdd,
	NumpadSubtract: K.NumpadSubtract,
	NumpadMultiply: K.NumpadMultiply,
	NumpadDivide:   K.NumpadDivide,
	NumpadEnter:    K.NumpadEnter,

	Escape: K.Escape,

	ArrowUp:    K.ArrowUp,
	ArrowDown:  K.ArrowDown,
	ArrowLeft:  K.ArrowLeft,
	ArrowRight: K.ArrowRight,

	ControlLeft:  M.Control,
	ControlRight: M.Control,
	ShiftLeft:    M.Shift,
	ShiftRight:   M.Shift,
	AltLeft:      M.Alt,
	AltRight:     M.Alt,
	MetaLeft:     M.Meta,
	MetaRight:    M.Meta,

	CapsLock:      K.CapsLock,
	Pause:         K.Pause,
	ScrollLock:    K.ScrollLock,
	PageUp:        K.PageUp,
	PageDown:      K.PageDown,
	Home:          K.Home,
	End:           K.End,
	Insert:        K.Insert,
	Delete:        K.Delete,
	ContextMenu:   K.ContextMenu,

	// IntlBackslash: 0x0056,
	// PrintScreen:   0xE037,
};

export const to = code => {
	return code in MAP ? MAP[code] : null;
};