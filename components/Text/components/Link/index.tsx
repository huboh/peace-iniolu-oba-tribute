import styles from "../../styles/link.module.scss";

import { FC, ReactNode } from "react";
import { useClassString } from "@/hooks";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
  text: string;
  children?: ReactNode;
  className?: string;
}

const Link: FC<LinkProps> = ({ children, text, ...props }) => {
  return (
    <NextLink { ...props } className={ useClassString(styles["link"], props.className) }>
      { text || children }
    </NextLink>
  );
};

export {
  Link as default
};