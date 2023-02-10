import { AppType } from "next/app";
import { Toaster } from "react-hot-toast";
import { Poppins } from "@next/font/google";
import { StrictMode } from "react";

import "@/styles/main.scss";
import useClassString from "@/hooks/useClassString";
import ErrorBoundary from "@/components/ErrorBoundary";

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

const App: AppType = (props) => {
  const Component = props.Component;
  const pageProps = props.pageProps;
  const className = useClassString(poppins.className);

  return (
    <StrictMode>
      <ErrorBoundary>
        <Component
          { ...{ ...pageProps, className } }
        />

        <Toaster
          position={ "top-center" }
          containerClassName={ className }
        />
      </ErrorBoundary>
    </StrictMode>
  );
};

export {
  App as default
};