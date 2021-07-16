import * as MODIFIER from './layout/symbol/modifier';

const isBoolean = any => typeof any === 'boolean';

export const normalizeModifierCombination = (_combination = {}) => {
	const combination = {
		control: false,
		alt: false,
		shift: false,
		meta: false
	};

	const {
		control: _control = combination.control,
		alt: _alt = combination.alt,
		shift: _shift = combination.shift,
		meta: _meta = combination.meta
	} = _combination;

	if (!isBoolean(_control)) {
		throw new Error('Invalid `.modifiers[].control`, a boolean expected');
	}

	if (!isBoolean(_alt)) {
		throw new Error('Invalid `.modifiers[].alt`, a boolean expected');
	}

	if (!isBoolean(_shift)) {
		throw new Error('Invalid `.modifiers[].shift`, a boolean expected');
	}

	if (!isBoolean(_meta)) {
		throw new Error('Invalid `.modifiers[].meta`, a boolean expected');
	}

	combination.shift = _shift;
	combination.alt = _alt;
	combination.control = _control;
	combination.meta = _meta;

	return combination;
};

export const normalize = (_options = {}) => {
	const options = {
		modifiers: []
	};

	const {
		key: _key,
		modifiers: _modifiers = options.modifiers
	} = _options;

	if (typeof _key !== 'number') {
		throw new Error('Invalid `.key` and required.');
	}

	if (!Array.isArray(_modifiers)) {
		throw new Error('Invalid `.modifiers`, an array expected.');
	}

	options.modifiers = _modifiers.map(normalizeModifierCombination);
	options.key = _key;

	return options;
};

export const StateListFromAccelerator = accelerator => {
	const { key, modifiers } = normalize(accelerator);

	return modifiers.map(combination => {
		let state = 0x0000;

		if (combination.control) {
			state |= MODIFIER.CONTROL;
		}

		if (combination.alt) {
			state |= MODIFIER.ALT;
		}

		if (combination.shift) {
			state |= MODIFIER.SHIFT;
		}

		if (combination.meta) {
			state |= MODIFIER.META;
		}

		return state | key;
	});
};