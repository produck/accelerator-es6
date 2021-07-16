type Keyboard = (code: number) => number;
type Key = number;

interface ModifierCombination {
	meta?: boolean;
	control?: boolean;
	alt?: boolean;
	shift?: boolean;
}

interface Accelerator {
	key: Key;
	modifiers?: ModifierCombination[];
}

export function setKeyboard(keyboard: Keyboard): void;
export function register(accelerator: Accelerator, listener: () => any): void;
export function unregister(accelerator: Accelerator): void;
export function unregisterAll(): void;
export function isRegistered(accelerator: Accelerator): boolean;
export function isHolding(key: Key): boolean;

export namespace KEYBOARD {
	const QWERTY: Keyboard;
	const AZERTY: Keyboard;
	const DVORAK: Keyboard;
}

export namespace KEY {
	const
		DIGIT_0: number,
		DIGIT_1: number,
		DIGIT_2: number,
		DIGIT_3: number,
		DIGIT_4: number,
		DIGIT_5: number,
		DIGIT_6: number,
		DIGIT_7: number,
		DIGIT_8: number,
		DIGIT_9: number;

	const
		MINUS: number,
		EQUAL: number;

	const
		KEY_A: number,
		KEY_B: number,
		KEY_C: number,
		KEY_D: number,
		KEY_E: number,
		KEY_F: number,
		KEY_G: number,
		KEY_H: number,
		KEY_I: number,
		KEY_J: number,
		KEY_K: number,
		KEY_L: number,
		KEY_M: number,
		KEY_N: number,
		KEY_O: number,
		KEY_P: number,
		KEY_Q: number,
		KEY_R: number,
		KEY_S: number,
		KEY_T: number,
		KEY_U: number,
		KEY_V: number,
		KEY_W: number,
		KEY_X: number,
		KEY_Y: number,
		KEY_Z: number;

	const
		QUOTE: number,
		BACK_QUOTE: number,
		SLASH: number,
		BACK_SLASH: number,
		COMMA: number,
		PERIOD: number,
		SEMICOLON: number,
		BRACKET_LEFT: number,
		BRACKET_RIGHT: number;

	const
		ENTER: number,
		SPACE: number,
		BACKSPACE: number,
		TAB: number;

	const
		F1: number,
		F2: number,
		F3: number,
		F4: number,
		F5: number,
		F6: number,
		F7: number,
		F8: number,
		F9: number,
		F10: number,
		F11: number,
		F12: number;

	const
		NUMPAD_0: number,
		NUMPAD_1: number,
		NUMPAD_2: number,
		NUMPAD_3: number,
		NUMPAD_4: number,
		NUMPAD_5: number,
		NUMPAD_6: number,
		NUMPAD_7: number,
		NUMPAD_8: number,
		NUMPAD_9: number,
		NUMPAD_DECIMAL: number,
		NUMPAD_ADD: number,
		NUMPAD_SUBTRACT: number,
		NUMPAD_MULTIPLY: number,
		NUMPAD_DIVIDE: number,
		NUMPAD_ENTER: number;

	const
		ARROW_UP: number,
		ARROW_DOWN: number,
		ARROW_LEFT: number,
		ARROW_RIGHT: number;

	const
		ESCAPE: number,
		PAUSE: number,
		PAGE_UP: number,
		PAGE_DOWN: number,
		HOME: number,
		END: number,
		INSERT: number,
		DELETE: number,
		CONTEXT_MENU: number;

	const
		NUM_LOCK: number,
		CAPS_LOCK: number,
		SCROLL_LOCK: number;

	const
		MEDIA_TRACK_PREVIOUS: number,
		MEDIA_TRACK_NEXT: number,
		MEDIA_PLAY_PAUSE: number,
		MEDIA_STOP: number;

	const
		AUDIO_VOLUME_MUTE: number,
		AUDIO_VOLUME_DOWN: number,
		AUDIO_VOLUME_UP: number;

	const
		BROWSER_HOME: number,
		BROWSER_SERACH: number,
		BROWSER_FAVORITES: number,
		BROWSER_REFRESH: number,
		BROWSER_STOP: number,
		BROWSER_FORWARD: number,
		BROWSER_BACK: number;
}

export namespace MODIFIER {
	const
		CONTROL: number,
		SHIFT: number,
		ALT: number,
		META: number;
}