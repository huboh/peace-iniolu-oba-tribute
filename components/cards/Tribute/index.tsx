import { FC } from "react";
import { Tribute } from "@/types";
import { useClassString } from "@/hooks";

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
    <div className={ className }>
      { tribute.tributeImage && (
        <img
          width={ 500 }
          height={ 500 }
          alt={ tribute.name }
          src={ tribute.tributeImage }
          className={ `${styles["tribute-image"]} img` }
        />
      ) }

      <Text.Header text={ tribute.title } className={ styles["title"] } />
      <Text.Paragraph text={ tribute.message } className={ styles["message"] } />

      <div className={ styles["message-profile"] }>
        <img
          width={ 500 }
          height={ 500 }
          alt={ tribute.name }
          src={ tribute.displayImage }
          className={ `${styles["display-image"]} img` }
        />
        <div>
          <Text.Header text={ tribute.name } className={ styles["name"] } />
          <Text.Paragraph text={ tribute.relationShip } className={ styles["relationship"] } />
        </div>
      </div>
    </div>
  );
};

export {
  Tribute as default
};