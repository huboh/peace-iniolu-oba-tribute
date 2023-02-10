import { useState, useRef } from "react";
import { useEventListener } from "../useEventListener";

const getScrollData = (lastScrollPosition: number) => {
  return {
    isScrolledUp: window.scrollY <= 50,
    isScrollingUp: window.scrollY < lastScrollPosition,
    isScrollingDown: window.scrollY > lastScrollPosition,
  };
};

export const useWindowScrollInfo = () => {
  const lastScrollPositionRef = useRef(0);
  const [currentScrollInfo, setCurrentScrollInfo] = useState(getScrollData(lastScrollPositionRef.current));

  useEventListener({
    target: window,
    eventType: "scroll",
    eventHandler: async (event) => {
      const window = event.currentTarget as Window;
      const currentScrollPosition = window.scrollY;
      const lastScrollPosition = lastScrollPositionRef.current;

      const isScrolledUp = currentScrollPosition <= 50;
      const isScrollingUp = currentScrollPosition < lastScrollPosition;
      const isScrollingDown = currentScrollPosition > lastScrollPosition;

      if (
        currentScrollInfo.isScrolledUp !== isScrolledUp ||
        currentScrollInfo.isScrollingUp !== isScrollingUp ||
        currentScrollInfo.isScrollingDown !== isScrollingDown
      ) {
        setCurrentScrollInfo(getScrollData(lastScrollPosition));
      };

      lastScrollPositionRef.current = currentScrollPosition;
    }
  });

  return currentScrollInfo;
};


export {
  useWindowScrollInfo as default
};