import { ListProps } from "./types";
import { useClassString } from "@/hooks";
import listStyles from "./list.module.scss";

const List = <T = any>(props: ListProps<T>) => {
  const type = props.type || "horizontal";
  const className = useClassString(listStyles["list"], listStyles[type], props.className);
  const getItemKey = (item: T, d: number): any => (typeof item === "object" ? ((item!)[props.key_!] || d) : d);

  return (
    <ul className={ className }>
      { props.items.map((item, index) => <li key={ getItemKey(item, index) } className={ listStyles["list-item"] }>{ props.render(item) }</li>) }
    </ul>
  );
};

export {
  List as default
};