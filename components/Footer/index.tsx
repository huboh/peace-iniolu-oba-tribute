import { FC } from "react";
import { AboutLinks, FooterLinks } from "@/lib/constants";

// components
import Text from "@/components/Text";
import List from "@/components/List";
import SocialIcons from "@/components/SocialIcons";

// styles
import footerStyles from "./footer.module.scss";

interface FooterProps {
  id?: string;
}

const Footer: FC<FooterProps> = (props) => {
  const id = props.id;
  const className = footerStyles["footer"];

  return (
    <footer id={ id } className={ className }>
      <ul className={ footerStyles["primary-footer"] }>
        <li>
          <Text.Header.H1
            size="small"
            text="glass empire"
            className={ footerStyles["column-header"] }
          />
          <Text.Paragraph
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis vitae aspernatur, accusamus aut expedita ratione eligendi! At repellendus architecto facere?"
          />
          <SocialIcons
            className={ footerStyles["social-icons"] }
          />
        </li>

        <li>
          <Text.Header.H1
            size="extra-small"
            text="links"
            className={ footerStyles["column-header"] }
          />

          <List
            key_="label"
            type="vertical"
            items={ FooterLinks }
            className={ footerStyles["column-list"] }
            render={ (item) => <Text.Link href={ item.link } text={ item.label } /> }
          />
        </li>

        <li>
          <Text.Header.H1
            size="extra-small"
            text="about"
            className={ footerStyles["column-header"] }
          />

          <List
            key_="label"
            type="vertical"
            items={ AboutLinks }
            className={ footerStyles["column-list"] }
            render={ (item) => <Text.Link href={ item.link } text={ item.label } /> }
          />
        </li>

        <li>
          <Text.Header.H1
            size="extra-small"
            text="funeral"
            className={ footerStyles["column-header"] }
          />
          <Text.Paragraph
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis vitae aspernatur, accusamus aut expedita ratione eligendi! At repellendus architecto facere?"
          />
          <Text.Paragraph
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis vitae aspernatur, accusamus aut expedita ratione eligendi! At repellendus architecto facere?"
          />
        </li>
      </ul>
      <Text.Paragraph className={ footerStyles["secondary-footer"] }>
        &#169; { (new Date()).getFullYear() } Glass Empire.
      </Text.Paragraph>
    </footer>
  );
};

export {
  Footer as default
};