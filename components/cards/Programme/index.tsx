import { FC } from "react";
import { Programme } from "@/types";
import { useClassString } from "@/hooks";

// styles
import styles from "./programme.module.scss";

// components
import Text from "@/components/Text";
import Image from "@/components/Image";

interface ProgrammeProps {
  className?: string;
  programme: Programme;
}

const Programme: FC<ProgrammeProps> = (props) => {
  const programme = props.programme;
  const className = useClassString(styles["programme"], props.className);

  return (
    <div className={ className }>
      <Image
        alt={ programme.coverImage.alt }
        src={ programme.coverImage.src }
        width={ programme.coverImage.width }
        height={ programme.coverImage.height }
        className={ styles["image"] }
      />
      <hgroup>
        <time dateTime={ new Date(programme.date).toJSON() } className={ styles["time"] }>
          <Text.Paragraph
            text={ new Date(programme.date).toDateString() }
            className={ styles["description"] }
          />
        </time>
        <Text.Header
          size="extra-small"
          text={ programme.title }
          className={ styles["header"] }
        />
      </hgroup>
      <Text.Paragraph
        text={ programme.description }
        className={ styles["description"] }
      />
    </div>
  );
};

export {
  Programme as default
};