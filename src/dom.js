export const
	WINDOW = window;

/**
 *
 * @param {EventTarget} emitter
 * @param {string} eventType
 * @param {Function} listener
 */
export const addEventListener = (emitter, eventType, listener) => {
	emitter.addEventListener(eventType, listener);
};