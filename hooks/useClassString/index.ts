import { useMemo } from "react";

export const useClassString = (...classNames: (string | undefined)[]) => {
  return useMemo(() => classNames.reduce((a, b) => `${(a || "").trim() + " " + (b || "").trim()}`.trim(), ""), [...classNames]);
};

export {
  useClassString as default
};