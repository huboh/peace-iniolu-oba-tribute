import { FC } from "react";
import { useClassString } from "@/hooks";
import { default as Image, ImageProps } from "../../variants/Image";

// styles
import styles from "../../styles/image.module.scss";

const StyledImage: FC<ImageProps> = (props) => {
  const className = useClassString(styles["styled-image"], props.className);

  return (
    <Image
      { ...props }
      className={ className }
    />
  );
};

export {
  StyledImage as default
};