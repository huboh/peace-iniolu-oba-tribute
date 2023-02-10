import { useEventListener } from "../";
import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const matchMedia = window.matchMedia(query);
  const [matches, setMatches] = useState(matchMedia.matches);

  useEffect(() => {
    setMatches(matchMedia.matches);
  }, [matchMedia.matches]);

  useEventListener({
    target: matchMedia,
    eventType: 'change',
    eventHandler: ({ matches }) => setMatches(matches)
  });

  return matches;
};

export {
  useMediaQuery as default
};