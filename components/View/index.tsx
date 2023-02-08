import viewStyles from "./view.module.scss";
import { FC, ReactNode } from "react";
import { useClassString } from "../../hooks";

interface ViewProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

const View: FC<ViewProps> = (props) => {
  const id = props.id;
  const children = props.children;
  const className = useClassString(viewStyles["view"], props.className);

  return (
    <section id={ id } className={ className }>
      { children }
    </section>
  );
};

export {
  View as default
};