import { FC } from "react";
import { Tribute } from "@/types";
import { useClassString } from "@/hooks";

import Moment from "react-moment";
import Text from "@/components/Text";
import Image from "@/components/Image";
import styles from "./tribute.module.scss";

interface TributeProps {
  tribute: Tribute;
  className?: string;
}

const Tribute: FC<TributeProps> = (props) => {
  const tribute = props.tribute;
  const className = useClassString(styles["tribute"], props.className);

  return (
    <article className={ className }>
      { tribute.tributeImage && (
        <Image
          width={ 500 }
          height={ 500 }
          alt={ tribute.name }
          src={ tribute.tributeImage }
          className={ styles["tribute-image"] }
        />
      ) }

      <Text.Header text={ tribute.title } className={ styles["title"] } />
      <Text.Paragraph text={ tribute.message } className={ styles["message"] } />

      <div className={ styles["message-profile"] }>
        <Image
          width={ 200 }
          height={ 200 }
          alt={ tribute.name }
          src={ tribute.displayImage }
          className={ styles["display-image"] }
        />
        <div>
          <Text.Header className={ styles["name"] }>
            <span className={ styles["text"] }>{ tribute.name }</span>
            <span className={ styles["time"] }><Moment fromNow={ true }>{ tribute.created }</Moment></span>
          </Text.Header>

          <Text.Paragraph
            text={ tribute.relationShip }
            className={ styles["relationship"] }
          />
        </div>
      </div>
    </article>
  );
};

export {
  Tribute as default
};