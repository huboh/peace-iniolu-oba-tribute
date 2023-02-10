import { Variant, Transition } from 'framer-motion';
import { ReactNode, ReactHTML } from 'react';

export interface LifeCycleTransition extends Record<"exit" | "enter" | "initial", Variant> { }

export interface AnimatedComponentProps {
  display: boolean;
  className?: string;
  children?: ReactNode;
  tagName?: keyof ReactHTML;
  transition?: Transition;
  lifeCycleTransitions?: LifeCycleTransition;
}
