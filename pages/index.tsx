import styles from "@/styles/home.module.scss";
import linkStyles from "@/components/Text/styles/link.module.scss";
import PeaceObaImage from "@/public/assets/images/from-glory-to-glory.png";

import { NextPage } from "next";
import { PageProps } from "@/types";
import { getTributes } from "@/lib/tributes";
import { PT_Serif, Dancing_Script } from "@next/font/google";
import { getSliderImagesPaths, getSiteData } from "@/lib";
import { default as Masonry, ResponsiveMasonry } from "react-responsive-masonry";

// components
import Seo from '@/components/Seo';
import Text from '@/components/Text';
import View from '@/components/View';
import List from '@/components/List';
import Image from "@/components/Image";
import Section from "@/components/Section";
import HeroForm from "@/components/HeroForm";
import Video from "@/components/cards/Video";
import Tribute from "@/components/cards/Tribute";
import HeroSlider from '@/components/HeroSlider';
import ScrollToTop from "@/components/ScrollToTop";

interface TributesPageProps extends PageProps, Omit<Awaited<ReturnType<typeof getServerSideProps>>["props"], ""> { }

const ptSerif = PT_Serif({
  style: "normal",
  preload: true,
  display: "swap",
  weight: [
    "400",
    "700",
  ],
  subsets: [
    "latin"
  ],
  fallback: [
    "Roboto",
    "Oxygen",
    "Ubuntu"
  ],
});

const dancingScript = Dancing_Script({
  style: "normal",
  preload: true,
  display: "swap",
  weight: [
    "400",
    "500",
    "600",
    "700",
  ],
  subsets: [
    "latin"
  ],
  fallback: [
    "Roboto",
    "Oxygen",
    "Ubuntu"
  ],
});

const getServerSideProps = async () => {
  const [images, tributes, { videos }] = await Promise.all([
    getSliderImagesPaths(),
    getTributes(),
    getSiteData()
  ]);

  return {
    props: {
      videos,
      images,
      tributes,
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
        <Section className={ styles["hero"] }>
          <HeroSlider imagesPaths={ props.images }>
            <div className={ styles["hero-text"] }>
              <div className={ styles["form"] }>
                <Text.Paragraph
                  className={ styles["notice"] }
                  text="This website is undergoing maintenance and improvements at the moment, however, we invite you to leave a tribute in honor of preserving the legacy of Peace."
                />
                <HeroForm
                  className={ styles["form"] }
                />
              </div>
              <hgroup>
                <Text.Header.H1
                  text="Peace Iniolu Oba."
                  className={ ptSerif.className }
                />
                <Text.Header.H2
                  size={ "large" }
                  text={ "1993 - 2023" }
                  className={ `${styles["lifespan"]} ${dancingScript.className}` }
                />
              </hgroup>
            </div>
          </HeroSlider>
        </Section>

        <Section className={ styles["about"] }>
          <Text.Header.H1
            text="About Peace"
          />

          <section className={ styles["about-wrapper"] }>
            <Image
              src={ PeaceObaImage }
              alt={ "peace iniolu oba" }
              priority={ true }
              placeholder={ "blur" }
              className={ styles["about-img"] }
            />
            <Text.Paragraph>
              Peace Iniolu Oba was a gifted songwriter, recording artist, and worship minister with a passion for leading people in powerful, Spirit-filled worship experiences. With a mandate to reunite the saints of God and prepare them for the soon-coming king, Jesus, she made a significant impact in the gospel music industry with her soul-stirring voice and anointed songs.
            </Text.Paragraph>
            <Text.Paragraph>
              Her debut album, <a
                rel="noreferrer"
                href="https://kingdomboiz.com/peace-iniolu-releases-her-debut-album-for-free-download-my-king/"
                target="_blank"
                className={ `${linkStyles["link"]} ${styles["link"]}` }
              >
                &quot;My King&quot;
              </a> released in 2015, was a testament to her talent and her unwavering commitment to spreading the gospel of Jesus Christ through music. The album received widespread critical acclaim and featured the hit single <a
                rel="noreferrer"
                href="https://youtu.be/0AUdDFRNyxs"
                target="_blank"
                className={ `${linkStyles["link"]} ${styles["link"]}` }
              >
                &quot;Songs of the Spirit&quot;
              </a> which further solidified her place in the gospel music scene.
            </Text.Paragraph>
            <Text.Paragraph>
              Aside from her music career, Peace Iniolu Oba was a happily married woman, blessed with an amazing daughter, and the proud wife of <a
                rel="noreferrer"
                href="https://instagram.com/mrgbengaoba?igshid=YmMyMTA2M2Y="
                target="_blank"
                className={ `${linkStyles["link"]} ${styles["link"]}` }
              >
                Pastor Gbenga Oba.
              </a> She was a true servant of God, using her gifts and talents to bring glory to His name and to touch the lives of those she encountered.
            </Text.Paragraph>
            <Text.Paragraph>
              Overall, Peace Iniolu Oba was a shining example of what it means to live a life dedicated to God and to use one&apos;s talents for His kingdom. Her music, her worship, and her testimony inspired and uplifted all who had the privilege of encountering her.
            </Text.Paragraph>
          </section>
        </Section>

        <Section className={ styles["youtube"] } textAlignment={ "center" }>
          <hgroup className={ styles["section-heading"] }>
            <Text.Header.H1
              text="on-screen memories"
            />
            <Text.Paragraph
              text="Here is a little compilation of some memorable moments on youtube showcasing her talents and passion, these videos give us a glimpse into Peace's world and allow us to relive some of her cherished moments."
            />
          </hgroup>

          <List
            key_={ "link" }
            items={ props.videos }
            render={ (video) => <Video video={ video } /> }
          />
        </Section>

        <Section className={ styles["tributes"] } textAlignment={ "center" }>
          <hgroup className={ styles["section-heading"] }>
            <Text.Header.H1
              text="Wall of Tributes"
            />
            <Text.Paragraph
              text="showcase of the love and admiration that Peace inspired in her friends and family. Read on to see how Peace touched the lives of those around her and why she will always be remembered with fondness and respect."
            />
          </hgroup>

          <ResponsiveMasonry columnsCountBreakPoints={ { 350: 1, 760: 2, 1160: 3 } }>
            <Masonry className={ styles["tributes"] }>
              { props.tributes.items.map((tribute) => <Tribute key={ tribute.id } tribute={ tribute } />) }
            </Masonry>
          </ResponsiveMasonry>
        </Section>

        <ScrollToTop />
      </main>
    </View >
  );
};

export {
  getServerSideProps,
  TributesPage as default
};