import { ReactNode } from "react";

export interface ListProps<T> {
  key_?: T extends object ? keyof T : never;
  column?: "column-2";
  listItems: T[];
  listIcon?: string;
  className?: string;
  itemComponent: (item: T) => ReactElement;
}
