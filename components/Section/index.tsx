import styles from "./section.module.scss";

import { FC, ReactNode } from "react";
import { TextAlignment } from "@/types";
import { useClassString } from "@/hooks";

export interface SectionProps {
  id?: string;
  children?: ReactNode;
  className?: string;
  textAlignment?: TextAlignment;
}

const Section: FC<SectionProps> = (props) => {
  const id = props.id;
  const children = props.children;
  const className = useClassString(styles["section"], styles[props.textAlignment || ""], props.className);

  return (
    <section id={ id } className={ className }>
      { children }
    </section>
  );
};

export {
  Section as default
};