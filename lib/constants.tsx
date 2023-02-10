import { TbBrandTwitter, TbBrandFacebook, TbBrandInstagram, TbBrandYoutube } from "react-icons/tb";

export const HOME = "/";
export const POCKETBASE_ENDPOINT = process.env.NEXT_PUBLIC_POCKET_BASE_API;

export const FooterLinks = [
  { label: "home", link: "" },
  { label: "about", link: "" },
  { label: "tribute", link: "" },
  { label: "contact", link: "" },
  { label: "programmes", link: "" },
];

export const AboutLinks = [
  { label: "stories", link: "" },
  { label: "gallery", link: "" },
  { label: "family tree", link: "" },
];

export const SocialLinks = [
  { label: "twitter", icon: <TbBrandTwitter />, link: "" },
  { label: "youtube", icon: <TbBrandYoutube />, link: "" },
  { label: "facebook", icon: <TbBrandFacebook />, link: "" },
  { label: "instagram", icon: <TbBrandInstagram />, link: "" },
];