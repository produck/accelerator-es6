import * as K from '../symbol/key';
import * as M from '../symbol/modifier';
import { MAP as QWERTY_ALL } from './qwerty';

const ALL = Object.assign({}, QWERTY_ALL, {

});

export const to = code => {
	return code in ALL ? ALL[code] : null;
};
