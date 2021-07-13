import * as Dom from './dom';

const INIT_HOLDING = 0b0000000000000000;

let holding = INIT_HOLDING;

function isModifier() {

}

const KeyCodeHandler = callback => event => callback(event.code);

const holdKeyValue = KeyCodeHandler(code => {

});

const releaseKeyValue = KeyCodeHandler(code => {

});

const releaseAll = () => holding = INIT_HOLDING;

addEventListener(Dom.WINDOW, 'keydown', holdKeyValue);
addEventListener(Dom.WINDOW, 'keyup', releaseKeyValue);
addEventListener(Dom.WINDOW, 'blur', releaseAll);