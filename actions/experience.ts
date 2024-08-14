/** @format */

"use server";
import { db } from "@/src";
import { experience } from "@/src/db/schema";

// Find all experiences
export async function findAll() {
  return await db.select().from(experience);
}

export interface ExperienceModel {
    experienceId: number;
    userId: number;
    createdAt: string | null;
    updatedAt: string | null;
    companyName: string;
    location: string | null;
    role: string;
    description: string | null;
    startDate: string;
    endDate: string | null;
    icon: string | null;
}
