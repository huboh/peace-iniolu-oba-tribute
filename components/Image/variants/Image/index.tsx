import { FC } from "react";
import { useClassString } from "@/hooks";
import { default as NextImage, ImageProps as NextImageProps } from "next/image";

// styles
import styles from "../../styles/image.module.scss";

export interface ImageProps extends NextImageProps {
  roundedBorder?: boolean;
}

const Image: FC<ImageProps> = (props) => {
  const border = props.roundedBorder ? "round-border" : "";
  const className = useClassString(styles["image"], styles[border || "round-border"], props.className);

  return (
    <NextImage
      { ...props }
      className={ className }
      placeholder={ props.placeholder }
    />
  );
};

export {
  Image as default
};