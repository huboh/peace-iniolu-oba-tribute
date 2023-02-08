import { ReactNode, ButtonHTMLAttributes, MouseEventHandler } from "react";

export type ButtonStyle = 'opaque' | 'transparent' | 'see-through';

export interface ButtonProps {
  icon?: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  label?: string;
  style?: ButtonStyle;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  showSpinner?: boolean;
}