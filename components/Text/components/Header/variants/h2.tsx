import h2Styles from "../styles/h2.module.scss";
import headerStyles from "../styles/header.module.scss";

import { FC } from "react";
import { HeaderProps } from "../types";
import { useClassString } from "@/hooks";

const H2: FC<HeaderProps> = ({ id, text, size, color, className, children, ...props }) => {
  const sizeAttr = h2Styles[size || ""];
  const colorAttr = headerStyles[color || ""];
  const className_ = useClassString(headerStyles["text-header"], h2Styles["h2"], sizeAttr, colorAttr, className);

  return (
    <h2 { ...props } className={ className_ } id={ id }>
      { text || children }
    </h2>
  );
};

export {
  H2 as default
};