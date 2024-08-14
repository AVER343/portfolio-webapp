/** @format */

"use server";
import { db } from "@/src/db/drizzle";
import { skills } from "@/src/db/schema";

export const findAll = async () => {
  const data = await db.select().from(skills);
  return data;
};
