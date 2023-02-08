import styles from '../../styles/button.module.scss';
import linkStyles from '../../styles/button-link.module.scss';

import { FC, ReactNode } from 'react';
import { ButtonStyle } from '../../types';
import { useClassString } from '@/hooks';
import { LinkProps as NextLinkProps, default as NextLink } from "next/link";

export interface LinkProps extends NextLinkProps {
  text?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  linkStyle?: ButtonStyle;
}

const Link: FC<LinkProps> = ({ text, href, icon, linkStyle, children, ...rest }) => {
  const label = text || children;
  const className = useClassString(styles["button"], linkStyles["button-link"], styles[linkStyle || ""], linkStyles[linkStyle || ""], rest.className);

  return (
    <NextLink { ...rest } href={ href } className={ className }>
      { icon && <span className={ styles["icon-wrapper"] }>{ icon }</span> }
      { label && <span className={ styles["text-wrapper"] }>{ label }</span> }
    </NextLink>
  );
};

export {
  Link as default
};