import { AppType } from "next/app";
import { Open_Sans } from "@next/font/google";
import { StrictMode } from "react";

import "@/styles/main.scss";
import useClassString from "@/hooks/useClassString";
import ErrorBoundary from "@/components/ErrorBoundary";

const font = Open_Sans({
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

const App: AppType = (props) => {
  const Component = props.Component;
  const pageProps = props.pageProps;
  const className = useClassString(font.className);

  return (
    <StrictMode>
      <ErrorBoundary>
        <Component { ...{ ...pageProps, className } } />
      </ErrorBoundary>
    </StrictMode>
  );
};

export {
  App as default
};