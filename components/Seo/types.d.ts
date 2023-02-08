import { NextSeoProps } from "next-seo";
export interface SeoProps extends NextSeoProps {
  title: string;
  siteName?: string;
  description?: string;
  twitterHandle?: string;

  url?: string;
  domain?: string;
  canonical?: string;

  ogAlt?: string;
  ogType?: string;
  ogImage?: string;
  ogWidth?: number;
  ogHeight?: number;
  ogLocale?: string;
}