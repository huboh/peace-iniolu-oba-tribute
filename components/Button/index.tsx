import { Poppins } from "@next/font/google";
import { ButtonProps } from "./types";
import { BiLoaderCircle } from 'react-icons/bi';

// hooks
import { useState } from "react";
import { useClassString } from "@/hooks";

// components
import Icon from "./variants/Icon";
import Link from "./variants/Link";

// styles
import styles from "./styles/button.module.scss";

const poppins = Poppins({
  style: "normal",
  preload: true,
  display: "swap",
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  subsets: [
    "latin"
  ],
  fallback: [
    "Roboto",
    "Oxygen",
    "Ubuntu"
  ],
});

export default function Button(props: ButtonProps) {
  const type = props.type || 'button';
  const [isDisabled, setIsDisabled] = useState(props.disabled);
  const className = useClassString(styles["button"], poppins.className, props.style, props.className);

  const onClickHandler = async (event: Parameters<NonNullable<typeof props.onClick>>[0]) => {
    if (props.onClick) {
      try {
        setIsDisabled(true);
        await props.onClick(event);
      } finally {
        setIsDisabled(false);
      }
    };
  };

  return (
    <button type={ type } className={ className } onClick={ onClickHandler } disabled={ props.onClick ? isDisabled : props.disabled }>
      { props.showSpinner ?
        <BiLoaderCircle className={ styles["button-spinner"] } /> : (
          <>
            { props.icon && <span className={ styles["icon-wrapper"] }>{ props.icon }</span> }
            { props.label && <span className={ styles["text-wrapper"] }>{ props.label }</span> }
          </>
        ) }
    </button>
  );
}

Button.Icon = Icon;
Button.Link = Link;