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

export interface Programme {
  date: string;
  title: string;
  coverImage: Image;
  description: string;
}

export interface SiteData {
  programmes: Programme[];
}