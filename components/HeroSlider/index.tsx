import { useClassString } from "@/hooks";
import { FC, ReactElement } from "react";
import { default as dynamic } from "next/dynamic";
import { default as Slider, Slide, Nav, Overlay, } from "../../node_modules/hero-slider/dist";

import styles from "./heroslider.module.scss";

interface HeroSliderProps {
  className?: string;
  children?: ReactElement;
  imagesPaths: string[];
}

const HeroSlider: FC<HeroSliderProps> = (props) => {
  const className = useClassString(styles["slider"], props.className);

  return (
    <Slider
      height="100vh"
      autoplay={ true }
      className={ className }
      animations={ { slidingAnimation: "fade" } }
      controller={ { slidingDelay: 200, slidingDuration: 1000 } }
    >
      { props.children && <Overlay>{ props.children }</Overlay> }
      { props.imagesPaths.map((image) =>
        <Slide
          key={ image }
          background={ {
            backgroundImageSrc: image,
            backgroundAnimation: "zoom",
            maskBackgroundBlendMode: "darken",
            backgroundImageBlendMode: "darken",
            backgroundColor: "rgba(17, 17, 17, 0.7)",
          } }
        />
      ) }
      <Nav
        color="inherit"
        activeColor="var(--primary-color)"
      />
    </Slider>
  );
};

export default dynamic(() => Promise.resolve(HeroSlider), {
  ssr: false
});