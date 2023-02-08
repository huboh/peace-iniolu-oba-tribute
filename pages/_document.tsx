import { FC } from "react";
import { Head, Html, Main, NextScript } from "next/document";

const Document: FC = () => {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export {
  Document as default
};