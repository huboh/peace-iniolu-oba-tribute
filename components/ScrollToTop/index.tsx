import { FC } from "react";
import dynamic from "next/dynamic";
import { BiArrowToTop } from "react-icons/bi";
import { AnimatePresence, motion, Variant } from 'framer-motion';

// styles
import styles from "./scroll-to-top.module.scss";

// hooks
import useWindowScrollInfo from "../../hooks/useWindowScrollInfo";

const lifeCycleTransitions: Record<string, Variant> = {
  exit: { y: 50, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  initial: { y: 50, opacity: 0 },
};

const ScrollToTop: FC = () => {
  const scrollBar = useWindowScrollInfo();
  const buttonProps = { exit: "exit", animate: "enter", initial: "initial" };
  const onButtonClick = () => window.scrollTo({ behavior: 'smooth', top: 0 });

  return (
    <AnimatePresence >
      { !scrollBar.isScrolledUp && (
        <motion.button
          { ...buttonProps }
          title={ "scroll to top" }
          onClick={ onButtonClick }
          variants={ lifeCycleTransitions }
          className={ styles["scroll-to-top-button"] }
        >
          { <BiArrowToTop /> }
        </motion.button>
      ) }
    </AnimatePresence >
  );
};

export default dynamic(() => Promise.resolve(ScrollToTop), {
  ssr: false
});