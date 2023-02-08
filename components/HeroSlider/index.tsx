import { FC, ReactElement } from "react";
import { default as dynamic } from "next/dynamic";
import { default as Slider, Slide, Nav, Overlay, } from "../../node_modules/hero-slider/dist";

interface HeroSliderProps {
  children?: ReactElement;
  imagesPaths: string[];
}

const HeroSlider: FC<HeroSliderProps> = (props) => {
  return (
    <Slider
      height="100vh"
      autoplay={ true }
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
      <Nav />
    </Slider>
  );
};

export default dynamic(() => Promise.resolve(HeroSlider), {
  ssr: false
});