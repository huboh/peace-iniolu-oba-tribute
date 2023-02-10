import { HOME } from "@/lib/constants";
import { TbHome } from "react-icons/tb";
import { NextPage } from "next";
import { PageProps } from "../types";
import { useRouter } from "next/router";

// hooks
import { useClassString } from "../hooks";

// styles
import styles from "../styles/404.module.scss";

// components
import Seo from "../components/Seo";
import View from "../components/View";
import Text from "../components/Text";
import Button from "../components/Button";
import Section from "../components/Section";

const NotFoundPage: NextPage<PageProps> = (props) => {
  const router = useRouter();
  const canonical = process.env.NEXT_PUBLIC_DOMAIN + router.asPath;
  const className = useClassString(styles["not-found"], props.className);

  return (
    <View className={ className }>
      <Seo
        title="(404) Page Not found"
        noindex={ true }
        nofollow={ true }
        canonical={ canonical }
      />
      <main className={ "main" }>
        <Text.Header.H1 text={ "(404) Page Not Found" } size={ "medium" } />
        <Text.Paragraph text={ "couldn't find the requested resource 🙃" } />
        <Button.Link href={ HOME } icon={ <TbHome /> } text={ "Go Back Home" } />
      </main>
    </View>
  );
};

export {
  NotFoundPage as default
};