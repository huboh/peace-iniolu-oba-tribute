import { HTMLProps, ReactNode } from "react";
import { TextSize, TextColor } from "../../types";

export interface HeaderProps extends Omit<HTMLProps<HTMLHeadingElement>, "size"> {
  id?: string;
  text?: string;
  size?: TextSize;
  color?: TextColor;
  className?: string;
  children?: ReactNode;
}
