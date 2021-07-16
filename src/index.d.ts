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
		DIGIT_0: Key,
		DIGIT_1: Key,
		DIGIT_2: Key,
		DIGIT_3: Key,
		DIGIT_4: Key,
		DIGIT_5: Key,
		DIGIT_6: Key,
		DIGIT_7: Key,
		DIGIT_8: Key,
		DIGIT_9: Key;

	const
		MINUS: Key,
		EQUAL: Key;

	const
		KEY_A: Key,
		KEY_B: Key,
		KEY_C: Key,
		KEY_D: Key,
		KEY_E: Key,
		KEY_F: Key,
		KEY_G: Key,
		KEY_H: Key,
		KEY_I: Key,
		KEY_J: Key,
		KEY_K: Key,
		KEY_L: Key,
		KEY_M: Key,
		KEY_N: Key,
		KEY_O: Key,
		KEY_P: Key,
		KEY_Q: Key,
		KEY_R: Key,
		KEY_S: Key,
		KEY_T: Key,
		KEY_U: Key,
		KEY_V: Key,
		KEY_W: Key,
		KEY_X: Key,
		KEY_Y: Key,
		KEY_Z: Key;

	const
		QUOTE: Key,
		BACK_QUOTE: Key,
		SLASH: Key,
		BACK_SLASH: Key,
		COMMA: Key,
		PERIOD: Key,
		SEMICOLON: Key,
		BRACKET_LEFT: Key,
		BRACKET_RIGHT: Key;

	const
		ENTER: Key,
		SPACE: Key,
		BACKSPACE: Key,
		TAB: Key;

	const
		F1: Key,
		F2: Key,
		F3: Key,
		F4: Key,
		F5: Key,
		F6: Key,
		F7: Key,
		F8: Key,
		F9: Key,
		F10: Key,
		F11: Key,
		F12: Key;

	const
		NUMPAD_0: Key,
		NUMPAD_1: Key,
		NUMPAD_2: Key,
		NUMPAD_3: Key,
		NUMPAD_4: Key,
		NUMPAD_5: Key,
		NUMPAD_6: Key,
		NUMPAD_7: Key,
		NUMPAD_8: Key,
		NUMPAD_9: Key,
		NUMPAD_DECIMAL: Key,
		NUMPAD_ADD: Key,
		NUMPAD_SUBTRACT: Key,
		NUMPAD_MULTIPLY: Key,
		NUMPAD_DIVIDE: Key,
		NUMPAD_ENTER: Key;

	const
		ARROW_UP: Key,
		ARROW_DOWN: Key,
		ARROW_LEFT: Key,
		ARROW_RIGHT: Key;

	const
		ESCAPE: Key,
		PAUSE: Key,
		PAGE_UP: Key,
		PAGE_DOWN: Key,
		HOME: Key,
		END: Key,
		INSERT: Key,
		DELETE: Key,
		CONTEXT_MENU: Key;

	const
		NUM_LOCK: Key,
		CAPS_LOCK: Key,
		SCROLL_LOCK: Key;

	const
		MEDIA_TRACK_PREVIOUS: Key,
		MEDIA_TRACK_NEXT: Key,
		MEDIA_PLAY_PAUSE: Key,
		MEDIA_STOP: Key;

	const
		AUDIO_VOLUME_MUTE: Key,
		AUDIO_VOLUME_DOWN: Key,
		AUDIO_VOLUME_UP: Key;

	const
		BROWSER_HOME: Key,
		BROWSER_SERACH: Key,
		BROWSER_FAVORITES: Key,
		BROWSER_REFRESH: Key,
		BROWSER_STOP: Key,
		BROWSER_FORWARD: Key,
		BROWSER_BACK: Key;
}

export namespace MODIFIER {
	const
		CONTROL: Key,
		SHIFT: Key,
		ALT: Key,
		META: number;
}