import styles from "../../styles/paragraph.module.scss";

import { TextSize } from "../../types";
import { useClassString } from "@/hooks";
import { FC, ReactNode, HTMLAttributes } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  id?: string;
  size?: TextSize;
  text?: string | ReactNode;
  children?: ReactNode;
  className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ id, text, size, children, className, ...props }) => {
  const textSize = styles[size || ""];
  const className_ = useClassString(styles["text-paragraph"], textSize, className);

  return (
    <p { ...props } id={ id } className={ className_ }>
      { text || children }
    </p>
  );
};

export {
  Paragraph as default
};