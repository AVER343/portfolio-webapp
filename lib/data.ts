/** @format */

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaJs, FaVuejs, FaJava } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tweetitImg from "@/public/tweetit.png";
import netflixImg from "@/public/netflix.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Application Developer",
    location: "Gurgaon",
    description: `
  I undertook a multifaceted role. I singel-handedly managed.  I crafted the ReactJS and Redux-saga front-end, managed backend with Node.js and Vertx, and leveraged database expertise in PL/SQL and Redis, significantly enhancing UI and backend.`,
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "Software Engineer",
    location: "Bangalore",
    description: ` I specialized in front-end development using NuxtJS for SSR. I contributed to projects involving Node.js (ExpressJS) with Typescript and MSSQL.`,
    icon: React.createElement(FaVuejs),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineer",
    location: "Noida",
    description: `I worked on developing and maintaining dynamic web applications using CreateJs and VanillaJs along with designing and implementing RESTful APIs with Node.js. Through these skills, I contribute to creating interactive and seamless online educational experiences.`,
    icon: React.createElement(FaJs),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Tweetit",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: tweetitImg,
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix clone to explore Next.js  along with Node.js and CSS in JS for styling.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "CSS in JS"],
    imageUrl: netflixImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
