import { KEYBOARD, MODIFIER, KEY, register } from '../src/index';

window.addEventListener('load', () => {
	document.body.appendChild(document.createElement('input'));

	register({
		key: KEY.DIGIT_7,
		modifiers: [
			{ control: true },
			{ alt: true },
			{ control: true, alt: true }
		]
	}, () => console.log('fuck'));
});