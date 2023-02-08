import { FC } from "react";
import { ListProps } from "./types";
import { useClassString } from "@/hooks";

// styles
import styles from "../../styles/list.module.scss";

const List: FC<ListProps> = (props) => {
  const column = styles[props.column || ""];
  const listIcon = props.listIcon || "~";
  const className = useClassString(styles["list"], column, props.className);

  return (
    <ul className={ className }>
      { props.listItems.map((listItem, index) => (
        <li key={ `list-item-${index}` } className={ styles["list-item"] } data-list-icon={ listIcon }>
          { listItem }
        </li>
      )) }
    </ul>
  );
};

export {
  List as default
};