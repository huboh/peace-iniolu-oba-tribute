import { FC } from 'react';
import { AnimatedComponentProps } from "./types";
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';

const AnimatedComponent: FC<AnimatedComponentProps> = (props) => {
  const tagName = props.tagName || "div";
  const MotionComponent: FC<HTMLMotionProps<typeof tagName>> = (motion as any)[tagName];

  return (
    <AnimatePresence>
      { props.display && (
        <MotionComponent exit={ 'exit' } animate={ 'enter' } initial={ 'initial' } className={ props.className } transition={ props.transition } variants={ props.lifeCycleTransitions }>
          { props.children }
        </MotionComponent>
      ) }
    </AnimatePresence>
  );
};

export {
  AnimatedComponent as default
};