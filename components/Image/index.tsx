import StyledImage from "./variants/StyledImage";
import Img, { ImageProps } from "./variants/Image";

export default function Image(props: ImageProps) {
  return <Img { ...props } />;
}

Image.Default = Img;
Image.Styled = StyledImage;