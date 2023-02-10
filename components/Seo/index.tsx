import { FC } from "react";
import { NextSeo } from "next-seo";
import { SeoProps } from "./types";

const Seo: FC<SeoProps> = (props) => {
  const title = `${props.title} - ${props.siteName}`;

  return (
    <NextSeo
      { ...props }
      title={ title }
      canonical={ props.canonical }
      description={ props.description }
      additionalMetaTags={ [
        ...(props.additionalMetaTags || []),
        {
          name: "twitter:image",
          content: props.ogImage!,
        },
        {
          name: "twitter:image:src",
          content: props.ogImage!,
        },
        {
          name: "twitter:image:alt",
          content: props.ogAlt!,
        },
        {
          name: "msapplication-config",
          content: "/favicon/browserconfig.xml",
        }
      ]
      }
      additionalLinkTags={ [
        ...(props.additionalLinkTags || []),
        ...[
          {
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            rel: "shortcut icon",
            href: "/favicon.ico"
          },
          {
            rel: "canonical",
            href: (props.canonical ?? props.domain)!,
          },
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/assets/images/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/assets/images/favicon-16x16.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/assets/images/favicon-32x32.png",
          }
        ]
      ] }
      twitter={ {
        ...(props.twitter ?? {}),
        site: props.twitterHandle,
        handle: props.twitterHandle,
        cardType: 'summary_large_image',
      } }
      openGraph={ {
        ...(props.openGraph ?? {}),
        url: props.url ?? props.canonical ?? props.domain,
        type: props.ogType,
        title: props.title,
        locale: props.ogLocale,
        siteName: props.siteName,
        description: props.description,
        images: [
          {
            alt: props.ogAlt ?? props.title,
            url: props.ogImage!,
            width: props.ogWidth ?? 850,
            height: props.ogHeight ?? 650,
            secureUrl: props.ogImage!,
            type: props.ogImageType
          }
        ]
      } }
    />
  );
};

Seo.defaultProps = {
  title: "Peace Iniolu Oba's Tribute",
  domain: process.env.NEXT_PUBLIC_DOMAIN,
  siteName: "Remembering the Life and Legacy of Peace Iniolu Oba",
  canonical: process.env.NEXT_PUBLIC_DOMAIN,
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
  description: "This website is dedicated to preserving the memory and legacy of Peace Iniolu Oba. We pay tribute to their life and achievements, sharing their story with the world. Join us in honoring the life of Peace Iniolu Oba",
  ogAlt: "Peace Iniolu Oba",
  ogType: "website",
  ogWidth: 6016,
  ogHeight: 4016,
  ogImage: `${process.env.NEXT_PUBLIC_DOMAIN}/assets/images/cover.jpg`,
  ogLocale: "en_IE",
  ogImageType: "image/jpg",
};

export {
  Seo as default
};