import { FC } from "react";
import { Video } from "@/types";
import { useClassString } from "@/hooks";

// components
import Text from "@/components/Text";
import styles from "./video.module.scss";

interface VideoProps {
  video: Video;
  className?: string;
}

const Video: FC<VideoProps> = (props) => {
  const video = props.video;
  const style = styles[video.isPremiered ? "premiered" : ""];
  const className = useClassString(styles["video"], style, props.className);

  return (
    <div className={ className }>
      <iframe
        src={ video.link }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        width="560"
        height="315"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
      <hgroup>
        <Text.Header
          text={ video.title }
        />
        <Text.Paragraph>
          { video.isPremiered ? "premiers " : null }
          <time dateTime={ new Date(video.publishedAt).toJSON() }>
            { new Date(video.publishedAt).toDateString() }
          </time>
        </Text.Paragraph>
      </hgroup>

      <Text.Paragraph
        text={ video.description }
        className={ styles["description"] }
      />
    </div>
  );
};

export {
  Video as default
};