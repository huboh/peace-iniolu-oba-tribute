import styles from "@/styles/home.module.scss";

import { NextPage } from "next";
import { PageProps } from "@/types";
import { default as PocketBase } from "pocketbase";
import { normalizeTribute, getSliderImagesPaths } from "@/lib";
import { default as Masonry, ResponsiveMasonry } from "react-responsive-masonry";

// components
import Seo from '@/components/Seo';
import Text from '@/components/Text';
import View from '@/components/View';
import Section from "@/components/Section";
import HeroForm from "@/components/HeroForm";
import Tribute from "@/components/cards/Tribute";
import HeroSlider from '@/components/HeroSlider';

interface TributesPageProps extends PageProps, Omit<Awaited<ReturnType<typeof getServerSideProps>>["props"], ""> { }

const getServerSideProps = async () => {
  const images = await getSliderImagesPaths();
  const client = new PocketBase(process.env.NEXT_PUBLIC_POCKET_BASE_API);
  const tributes = await client.collection("tributes").getList(1, 20);

  return {
    props: {
      images, tributes: tributes.items.map((record) => normalizeTribute(record, client))
    }
  };
};

const TributesPage: NextPage<TributesPageProps> = (props) => {
  return (
    <View className={ props.className }>
      <Seo
        title="Peace Iniolu Oba's Tribute"
      />
      <main>
        <HeroSlider imagesPaths={ props.images }>
          <Section className={ styles["hero"] }>
            <div className={ styles["form"] }>
              <Text.Paragraph className={ styles["notice"] }>
                This website is undergoing maintenance and improvements at the moment, however, we invite you to leave a tribute in honor of preserving the legacy of peace.
              </Text.Paragraph>
              <HeroForm className={ styles["form"] } />
            </div>

            <hgroup>
              <Text.Header.H1 text="Peace Iniolu Oba." />
              <Text.Header.H2 text="1993 - 2023" style={ { fontWeight: 600 } } />
            </hgroup>
          </Section>
        </HeroSlider>

        <Section className={ styles["tributes"] } textAlignment={ "center" }>
          <Text.Header.H1
            text="Tributes"
          />

          <ResponsiveMasonry columnsCountBreakPoints={ { 350: 1, 760: 2, 1160: 3 } }>
            <Masonry className={ styles["tributes"] }>
              { props.tributes.map((tribute) => <Tribute key={ tribute.id } tribute={ tribute } />) }
            </Masonry>
          </ResponsiveMasonry>
        </Section>
      </main>
    </View >
  );
};

export {
  getServerSideProps,
  TributesPage as default
};