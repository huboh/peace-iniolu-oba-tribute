import { NextPage } from "next";
import { PageProps } from "../types";
import { useRouter } from "next/router";
import { ErrorProps } from "next/error";

// components
import Seo from "../components/Seo";
import View from "../components/View";
import ErrorScreen from "../components/ErrorScreen";

const ServerErrorPage: NextPage<PageProps & ErrorProps> = (props) => {
  const router = useRouter();
  const canonical = process.env.NEXT_PUBLIC_DOMAIN + router.asPath;

  return (
    <View className={ props.className }>
      <Seo
        title="(500) Internal Server Error"
        noindex={ true }
        nofollow={ true }
        canonical={ canonical }
      />
      <ErrorScreen
        title="(500) Internal Server Error"
      />
    </View>
  );
};

export {
  ServerErrorPage as default
};