export type TextAlignment = "left" | "center" | "right";

export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PageProps {
  className: string;
}

export interface Video {
  link: string;
  title: string;
  publishedAt: string;
  description: string;
  isPremiered: boolean;
}

export interface Programme {
  date: string;
  title: string;
  coverImage: Image;
  description: string;
}

export interface Tribute {
  id: string;
  name: string;
  email: string;
  title: string;
  message: string;
  updated: string;
  created: string;
  phoneNumber: string;
  displayImage: string;
  tributeImage?: string;
  relationShip: string;
}

export interface SiteData {
  videos: Video[];
  programmes: Programme[];
}