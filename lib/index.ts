import { join } from "path";
import { SiteData, Tribute } from "@/types";
import { readFile, readdir } from "fs/promises";
import { Record, default as PocketBase } from "pocketbase";

export const getSiteData = async (directory?: string): Promise<SiteData> => {
  return JSON.parse(await readFile(join(directory || "/", "index.json"), { encoding: "utf-8" })) ?? [];
};

export const getSliderImagesPaths = async () => {
  return (await readdir(join(process.cwd(), "public/assets/images/slider-images"))).map((path) => `assets/images/slider-images/${path}`);
};

export const normalizeTribute = (record: Record, client: PocketBase): Tribute => {
  return {
    id: record.id,
    name: record.name,
    email: record.email,
    title: record.title,
    message: record.message,
    updated: record.updated,
    created: record.created,
    relationShip: record.relationShip,
    displayImage: record.displayImage && client.getFileUrl(record, record.displayImage),
    tributeImage: record.tributeImage && client.getFileUrl(record, record.tributeImage),
  };
};