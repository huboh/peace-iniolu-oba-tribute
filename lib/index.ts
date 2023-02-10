import { join } from "path";
import { SiteData } from "@/types";
import { readFile, readdir } from "fs/promises";

export const getSiteData = async (directory?: string): Promise<SiteData> => {
  return JSON.parse(await readFile(join(directory || "/", "index.json"), { encoding: "utf-8" })) ?? [];
};

export const getSliderImagesPaths = async () => {
  return (await readdir(join(process.cwd(), "public/assets/images/slider-images"))).map((path) => `assets/images/slider-images/${path}`);
};