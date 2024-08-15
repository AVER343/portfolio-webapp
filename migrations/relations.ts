import { relations } from "drizzle-orm/relations";
import { users, blogs, education, projects, socialLinks, skills, experience } from "./schema";

export const blogsRelations = relations(blogs, ({one}) => ({
	user: one(users, {
		fields: [blogs.userId],
		references: [users.userId]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	blogs: many(blogs),
	educations: many(education),
	projects: many(projects),
	socialLinks: many(socialLinks),
	skills: many(skills),
	experiences: many(experience),
}));

export const educationRelations = relations(education, ({one}) => ({
	user: one(users, {
		fields: [education.userId],
		references: [users.userId]
	}),
}));

export const projectsRelations = relations(projects, ({one}) => ({
	user: one(users, {
		fields: [projects.userId],
		references: [users.userId]
	}),
}));

export const socialLinksRelations = relations(socialLinks, ({one}) => ({
	user: one(users, {
		fields: [socialLinks.userId],
		references: [users.userId]
	}),
}));

export const skillsRelations = relations(skills, ({one}) => ({
	user: one(users, {
		fields: [skills.userId],
		references: [users.userId]
	}),
}));

export const experienceRelations = relations(experience, ({one}) => ({
	user: one(users, {
		fields: [experience.userId],
		references: [users.userId]
	}),
}));