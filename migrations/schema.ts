import { pgTable, foreignKey, serial, integer, varchar, text, timestamp, date, jsonb, unique, json } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const blogs = pgTable("blogs", {
	postId: serial("post_id").primaryKey().notNull(),
	userId: integer("user_id").notNull().references(() => users.userId),
	title: varchar("title", { length: 150 }).notNull(),
	content: text("content").notNull(),
	tags: varchar("tags", { length: 255 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
});

export const education = pgTable("education", {
	educationId: serial("education_id").primaryKey().notNull(),
	userId: integer("user_id").notNull().references(() => users.userId),
	institutionName: varchar("institution_name", { length: 150 }).notNull(),
	degree: varchar("degree", { length: 100 }),
	fieldOfStudy: varchar("field_of_study", { length: 100 }),
	startDate: date("start_date").notNull(),
	endDate: date("end_date"),
	description: text("description"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
});

export const projects = pgTable("projects", {
	projectId: serial("project_id").primaryKey().notNull(),
	userId: integer("user_id").notNull().references(() => users.userId),
	title: varchar("title", { length: 150 }).notNull(),
	description: text("description"),
	techStack: varchar("tech_stack", { length: 255 }),
	githubLink: varchar("github_link", { length: 255 }),
	liveDemo: varchar("live_demo", { length: 255 }),
	startDate: date("start_date"),
	endDate: date("end_date"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
});

export const socialLinks = pgTable("social_links", {
	linkId: serial("link_id").primaryKey().notNull(),
	userId: integer("user_id").notNull().references(() => users.userId),
	platformName: varchar("platform_name", { length: 100 }).notNull(),
	url: varchar("url", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
});

export const skills = pgTable("skills", {
	skillId: serial("skill_id").primaryKey().notNull(),
	userId: integer("user_id").notNull().references(() => users.userId),
	skillName: varchar("skill_name", { length: 100 }).notNull(),
	proficiencyLevel: varchar("proficiency_level", { length: 50 }),
	category: varchar("category", { length: 100 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	imageUrl: varchar("image_url", { length: 100 }),
	metadata: jsonb("metadata"),
});

export const experience = pgTable("experience", {
	experienceId: serial("experience_id").primaryKey().notNull(),
	userId: integer("user_id").notNull().references(() => users.userId),
	companyName: varchar("company_name", { length: 150 }).notNull(),
	role: varchar("role", { length: 100 }).notNull(),
	description: text("description"),
	startDate: varchar("start_date", { length: 255 }).notNull(),
	endDate: varchar("end_date", { length: 255 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	location: varchar("location", { length: 255 }),
	icon: varchar("icon", { length: 255 }),
});

export const users = pgTable("users", {
	userId: serial("user_id").primaryKey().notNull(),
	name: varchar("name", { length: 100 }).notNull(),
	email: varchar("email", { length: 100 }).notNull(),
	bio: text("bio"),
	profilePicture: varchar("profile_picture", { length: 255 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	aboutMe: json("about_me"),
	introduction: json("introduction"),
	cv: text("cv"),
},
(table) => {
	return {
		usersEmailUnique: unique("users_email_unique").on(table.email),
	}
});