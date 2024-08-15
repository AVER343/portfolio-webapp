/** @format */

"use server";
import { db } from "@/src/db/drizzle";
import { users } from "@/src/db/schema";
import { revalidatePath } from "next/cache";

export const findById = async (id: number = 1) => {
  revalidatePath("/");
  const data = await db.select().from(users);
  console.log({ data });
  return data[0];
};
