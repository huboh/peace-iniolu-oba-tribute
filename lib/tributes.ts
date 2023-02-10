import { Tribute } from "@/types";
import { POCKETBASE_ENDPOINT } from "./constants";
import { Record, default as PocketBase } from "pocketbase";

export const getTributes = async () => {
  const client = new PocketBase(POCKETBASE_ENDPOINT);
  const tributes = await client.collection("tributes").getList(1, 100);

  return {
    ...tributes,
    items: tributes.items.map((tribute) => normalizeTribute(tribute, client))
  };
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
    phoneNumber: record.phoneNumber,
    relationShip: record.relationShip,
    displayImage: record.displayImage && client.getFileUrl(record, record.displayImage),
    tributeImage: record.tributeImage && client.getFileUrl(record, record.tributeImage),
  };
};