import { FC } from "react";
import { Poppins } from "@next/font/google";
import { ErrorScreenProps } from "./types";
import { TbInfoCircle, TbRefresh } from "react-icons/tb";

import Button from "../Button";
import styles from "./error-screen.module.scss";
import useClassStrings from "../../hooks/useClassString";

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

const DefaultErrorTitle = "Sorry, This is embarrassing but there's been a problem.";
const DefaultErrorMessage = "Click the button below to reload the page. We might be having some technical issues, if this keep happening please contact us";

const ErrorScreen: FC<ErrorScreenProps> = (props) => {
  const title = props.title || DefaultErrorTitle;
  const message = props.message || props.error?.message || DefaultErrorMessage;
  const className = useClassStrings(styles["error-screen-wrapper"], poppins.className, props.className);

  return (
    <div className={ className }>
      <TbInfoCircle
        className={ styles["error-icon"] }
      />

      <div className={ styles["message-wrapper"] }>
        <h1 className={ styles["title"] }>{ title }</h1>
        <p className={ styles["message"] }>{ message }</p>
      </div>

      <Button
        icon={ props.ctaIcon || <TbRefresh /> }
        label={ props.ctaText || "reload page" }
        onClick={ () => props.ctaFunction?.() ?? window.location.reload() }
      />
    </div>
  );
};

export {
  ErrorScreen as default
};