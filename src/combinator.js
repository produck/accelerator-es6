import { normalizeModifierCombination } from './accelerator';

function CommandOrControl(combination) {
	return [CONTROL, META].map(BASE => {
		return normalizeModifierCombination(Object.assign({}, combination, BASE));
	});
}

const
	CONTROL = { control: true },
	SHIFT = { shift: true },
	ALT = { alt: true },
	META = { meta: true };

function Control(combination = {}) {
	return normalizeModifierCombination(Object.assign({}, combination, CONTROL));
}

function Meta(combination = {}) {
	return normalizeModifierCombination(Object.assign({}, combination, META));
}

function Alt(combination = {}) {
	return normalizeModifierCombination(Object.assign({}, combination, ALT));
}

function Shift(combination = {}) {
	return normalizeModifierCombination(Object.assign({}, combination, SHIFT));
}

export {
	CommandOrControl,
	CommandOrControl as CmdOrCtrl,

	Meta,
	Meta as Command,
	Meta as Cmd,
	Meta as Super,

	Alt,
	Alt as Option,

	Control,
	Shift,
};
