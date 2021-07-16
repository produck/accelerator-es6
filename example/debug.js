import { KEYBOARD, MODIFIER, KEY, register, Combinator, setKeyboard } from '../src/index';
const { CmdOrCtrl, Control, Shift } = Combinator;

window.addEventListener('load', () => {
	document.body.appendChild(document.createElement('input'));

	register({
		key: KEY.MINUS,
		modifiers: [
			...CmdOrCtrl({ alt: true }),
			Control(Shift()),
			{ alt: true }
		]
	}, () => console.log('fuck'));

	// setKeyboard(KEYBOARD.DVORAK);
});