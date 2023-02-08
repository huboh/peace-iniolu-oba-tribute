import { ReactElement } from "react";

export type ListType = "grid" | "vertical" | "horizontal";

export interface ListProps<T> {
  /**
   * list item key prop
   */
  key_?: T extends object ? keyof T : never;
  type?: ListType;
  items: T[];
  render: (item: T) => ReactElement;
  className?: string;
}