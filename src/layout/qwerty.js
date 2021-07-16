/**
 * KeyboardEvent.code, reference from:
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values
 *
 * QWERTY
 */

import * as K from './symbol/key';
import * as M from './symbol/modifier';

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

	KeyA: K.KEY_A,
	KeyB: K.KEY_B,
	KeyC: K.KEY_C,
	KeyD: K.KEY_D,
	KeyE: K.KEY_E,
	KeyF: K.KEY_F,
	KeyG: K.KEY_G,
	KeyH: K.KEY_H,
	KeyI: K.KEY_I,
	KeyJ: K.KEY_J,
	KeyK: K.KEY_K,
	KeyL: K.KEY_L,
	KeyM: K.KEY_M,
	KeyN: K.KEY_N,
	KeyO: K.KEY_O,
	KeyP: K.KEY_P,
	KeyQ: K.KEY_Q,
	KeyR: K.KEY_R,
	KeyS: K.KEY_S,
	KeyT: K.KEY_T,
	KeyU: K.KEY_U,
	KeyV: K.KEY_V,
	KeyW: K.KEY_W,
	KeyX: K.KEY_X,
	KeyY: K.KEY_Y,
	KeyZ: K.KEY_Z,

	Quote:        K.QUOTE,
	Backquote:    K.BACK_QUOTE,
	Slash:        K.SLASH,
	Backslash:    K.BACK_SLASH,
	Comma:        K.COMMA,
	Period:       K.PERIOD,
	Semicolon:    K.SEMICOLON,
	BracketLeft:  K.BRACKET_LEFT,
	BracketRight: K.BRACKET_RIGHT,

	Enter:        K.ENTER,
	Space:        K.SPACE,
	Backspace:    K.BACKSPACE,
	Tab:          K.TAB,

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

	NumLock:        K.NUM_LOCK,
	Numpad0:        K.NUMPAD_0,
	Numpad1:        K.NUMPAD_1,
	Numpad2:        K.NUMPAD_2,
	Numpad3:        K.NUMPAD_3,
	Numpad4:        K.NUMPAD_4,
	Numpad5:        K.NUMPAD_5,
	Numpad6:        K.NUMPAD_6,
	Numpad7:        K.NUMPAD_7,
	Numpad8:        K.NUMPAD_8,
	Numpad9:        K.NUMPAD_9,
	NumpadDecimal:  K.NUMPAD_DECIMAL,
	NumpadAdd:      K.NUMPAD_ADD,
	NumpadSubtract: K.NUMPAD_SUBTRACT,
	NumpadMultiply: K.NUMPAD_MULTIPLY,
	NumpadDivide:   K.NUMPAD_DIVIDE,
	NumpadEnter:    K.NUMPAD_ENTER,

	Escape: K.ESCAPE,

	ArrowUp:    K.ARROW_UP,
	ArrowDown:  K.ARROW_DOWN,
	ArrowLeft:  K.ARROW_LEFT,
	ArrowRight: K.ARROW_RIGHT,

	ControlLeft:  M.CONTROL,
	ControlRight: M.CONTROL,
	ShiftLeft:    M.SHIFT,
	ShiftRight:   M.SHIFT,
	AltLeft:      M.ALT,
	AltRight:     M.ALT,
	MetaLeft:     M.META,
	MetaRight:    M.META,

	CapsLock:      K.CAPS_LOCK,
	Pause:         K.PAUSE,
	ScrollLock:    K.SCROLL_LOCK,
	PageUp:        K.PAGE_UP,
	PageDown:      K.PAGE_DOWN,
	Home:          K.HOME,
	End:           K.END,
	Insert:        K.INSERT,
	Delete:        K.DELETE,
	ContextMenu:   K.CONTEXT_MENU,

	MediaTrackPrevious: K.MEDIA_TRACK_PREVIOUS,
	MediaTrackNext:     K.MEDIA_TRACK_NEXT,
	MediaPlayPause:     K.MEDIA_PLAY_PAUSE,
	MediaStop:          K.MEDIA_STOP,

	AudioVolumeMute:    K.AUDIO_VOLUME_MUTE,
	AudioVolumeDown:    K.AUDIO_VOLUME_DOWN,
	AudioVolumeUp:      K.AUDIO_VOLUME_UP,

	BrowserHome:       K.BROWSER_HOME,
	BrowserSearch:     K.BROWSER_SERACH,
	BrowserFavorites:  K.BROWSER_FAVORITES,
	BrowserRefresh:    K.BROWSER_REFRESH,
	BrowserStop:       K.BROWSER_STOP,
	BrowserForward:    K.BROWSER_FORWARD,
	BrowserBack:       K.BROWSER_BACK,

	// IntlBackslash: 0x0056,
	// PrintScreen:   0xE037,
};

export const from = code => {
	return code in MAP ? MAP[code] : null;
};
