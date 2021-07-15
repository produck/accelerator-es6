type Keyboard = (code: number) => number;

export function setKeyboard(keyboard: Keyboard): void;
export function isRegistered(token: string): boolean;
export function register(token: string, listener: () => any): void;
export function unregister(token: stirng): void;
export function unregisterAll(): void;
export function isHolding(key: number): boolean;

export namespace KEYBOARD {
	const QWERTY: Keyboard;
	const AZERTY: Keyboard;
	const DVORAK: Keyboard;
}

export namespace KEY {
	const
}

export namespace MODIFIER {
	const
		Control: number,
		Shift: number,
		Alt: number,
		Meta: number;
}