import { ReactNode } from "react";

export interface ListProps {
  listItems: (string | ReactNode)[];
  children?: ReactNode;
  className?: string;
  column?: "column-2";
  listIcon?: string;
}
