import { GetTarget, GetListener } from "../types";

/**
 * accepts an `EventTarget` object or a `React.RefObject<EventTarget>` & returns the event target object.
 * @param target a union of `EventTarget` | `React.RefObject<EventTarget>`,
 * @returns the event target
 */
export const getTarget: GetTarget = (target: any) => target?.current ?? target;

/**
 * gets the event listener function on the provided target
 * @param target target on which to attach the event listener
 * @param listenerType type of listener either `addEventListener` or `removeEventListener`
 * @returns a function that when called adds or remove the listener type on the target
 */
export const getListener: GetListener = (target, listenerType) => (type, handler, options) => {
  target?.[listenerType]?.(type, handler, options);
};