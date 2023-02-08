import { join } from "path";
import { SiteData } from "@/types";
import { readFile } from "fs/promises";

export const getSiteData = async (directory?: string): Promise<SiteData> => {
  const path = join(directory || "/", "index.json");
  const data = await readFile(path, { encoding: "utf-8" });

  return JSON.parse(data) ?? [];
};