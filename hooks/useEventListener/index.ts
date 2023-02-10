import { useEffect } from 'react';
import { UseEventListener } from './types';
import { getTarget, getListener } from './utils';

export const useEventListener: UseEventListener = (props) => useEffect(() => {
  const type = props.eventType;
  const options = props.eventOptions;
  const target = getTarget(props.target);
  const handler = props.eventHandler.bind(target!);

  if (!target) return;

  const attachListener = getListener(target, 'addEventListener');
  const removeListener = getListener(target, 'removeEventListener');

  !Array.isArray(type)
    ? attachListener(type, handler, options)
    : type.forEach(event => attachListener(event, handler, options));

  return () => {
    !Array.isArray(type)
      ? removeListener(type, handler, options)
      : type.forEach(event => removeListener(event, handler, options));
  };
},
  [props.eventHandler, props.eventOptions, props.eventType, props.target]
);

export {
  useEventListener as default
};
