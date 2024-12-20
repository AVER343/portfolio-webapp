/** @format */

"use server";
import { db } from "@/src/db/drizzle";
import { users } from "@/src/db/schema";

export const findById = async (id: number = 1) =>
{
  const data = await db.select().from(users).limit(1);
  return data[0];
};
