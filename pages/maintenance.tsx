import { Poppins } from "@next/font/google";
import { NextPage } from "next";
import { PageProps } from "../types";
import { useRouter } from "next/router";
import { ErrorProps } from "next/error";
import { TiWarningOutline } from "react-icons/ti";

// components
import Seo from "../components/Seo";
import View from "../components/View";
import styles from "../components/ErrorScreen/error-screen.module.scss";
import useClassString from "../hooks/useClassString";

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

const MaintenancePage: NextPage<PageProps & ErrorProps> = (props) => {
  const router = useRouter();
  const canonical = process.env.NEXT_PUBLIC_DOMAIN + router.asPath;
  const className = useClassString(styles["error-screen-wrapper"], poppins.className, props.className);

  return (
    <View className={ props.className }>
      <Seo
        title="Maintenance"
        noindex={ true }
        nofollow={ true }
        canonical={ canonical }
      />

      <div className={ className }>
        <TiWarningOutline
          className={ styles["error-icon"] }
        />

        <div className={ styles["message-wrapper"] }>
          <h1 className={ styles["title"] }>we&apos;ll be back!</h1>
          <p className={ styles["message"] }>Temporarily down for scheduled maintenance to improve your experience. Please check back soon.</p>
        </div>
      </div>
    </View>
  );
};

export {
  MaintenancePage as default
};