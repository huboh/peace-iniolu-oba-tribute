import { FC } from "react";
import { SocialLinks } from "@/lib/constants";

import List from "@/components/List";
import Button from "@/components/Button";
import styles from "./socialIcons.module.scss";
import useClassString from "@/hooks/useClassString";

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: FC<SocialIconsProps> = (props) => {
  return (
    <List
      key_="label"
      items={ SocialLinks }
      className={ useClassString(styles["social-icons"], props.className) }
      render={ (item) => <Button.Link href={ item.link } icon={ item.icon } /> }
    />
  );
};

export {
  SocialIcons as default
};