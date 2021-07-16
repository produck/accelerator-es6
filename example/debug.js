import { KEYBOARD, MODIFIER, KEY, register } from '../src/index';
import { CmdOrCtrl } from '../src/combinator';

window.addEventListener('load', () => {
	document.body.appendChild(document.createElement('input'));

	console.log(CmdOrCtrl({ alt: true }));

	register({
		key: KEY.DIGIT_7,
		modifiers: [
			...CmdOrCtrl({ alt: true })
		]
	}, () => console.log('fuck'));
});