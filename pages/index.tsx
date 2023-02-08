import { join } from "path";
import { PageProps } from "@/types";
import { getSiteData } from "@/lib";
import { NextPage, PageConfig } from "next";

// components
import Seo from '@/components/Seo';
import Text from '@/components/Text';
import List from '@/components/List';
import View from '@/components/View';
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Programme from '@/components/cards/Programme';

import styles from "@/styles/home.module.scss";

interface IndexPageProps extends PageProps, Omit<Awaited<ReturnType<typeof getStaticProps>>["props"], ""> { }

const getStaticProps = async () => {
  return {
    props: {
      data: await getSiteData(join(process.cwd(), "data"))
    }
  };
};

const HomePage: NextPage<IndexPageProps> = (props) => {
  return (
    <View className={ props.className }>
      <Seo
        title="Peace Iniolu Oba's Tribute"
      />

      <main>
        <Section className={ styles["home-section"] }>
          <hgroup>
            <Text.Header className={ styles["section-header"] } text="Tributes" />
            <Text.Paragraph text="keep track of upcoming events that celebrate Peace's life. This includes events such as burial and wake keeping, where friends and loved ones can come together to pay their final respects and share memories. We believe that these events are an important way for us to come together as a community and remember Peace Iniolu Oba, and we hope that this section will help keep everyone informed and connected as we honor her life." />
          </hgroup>
        </Section>

        <Section className={ styles["home-section"] } textAlignment={ "center" }>
          <hgroup>
            <Text.Header className={ styles["section-header"] } text="favorite quote" />
            <Text.Paragraph text="keep track of upcoming events that celebrate Peace's life. This includes events such as burial and wake keeping, where friends and loved ones can come together to pay their final respects and share memories. We believe that these events are an important way for us to come together as a community and remember Peace Iniolu Oba, and we hope that this section will help keep everyone informed and connected as we honor her life." />
          </hgroup>
        </Section>

        <Section className={ styles["home-section"] }>
          <hgroup>
            <Text.Header className={ styles["section-header"] } text="Media" />
            <Text.Paragraph text="keep track of upcoming events that celebrate Peace's life. This includes events such as burial and wake keeping, where friends and loved ones can come together to pay their final respects and share memories. We believe that these events are an important way for us to come together as a community and remember Peace Iniolu Oba, and we hope that this section will help keep everyone informed and connected as we honor her life." />
          </hgroup>
        </Section>

        <Section className={ styles["home-section"] }>
          <hgroup>
            <Text.Header className={ styles["section-header"] } text="Programme" />
            <Text.Paragraph text="keep track of upcoming events that celebrate Peace's life. This includes events such as burial and wake keeping, where friends and loved ones can come together to pay their final respects and share memories. We believe that these events are an important way for us to come together as a community and remember Peace Iniolu Oba, and we hope that this section will help keep everyone informed and connected as we honor her life." />
          </hgroup>
          <List
            key_="title"
            items={ props.data.programmes }
            className={ styles["programme-list"] }
            render={ (programme) => <Programme className={ styles["programme"] } programme={ programme } /> }
          />
        </Section>
      </main>
      <Footer />
    </View>
  );
};

export {
  getStaticProps,
  HomePage as default
};