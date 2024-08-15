/** @format */

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaJs, FaVuejs, FaJava } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tweetitImg from "@/public/tweetit.png";
import netflixImg from "@/public/netflix.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Tweetit",
    description: `Architected and developed a unique Social Media Platform with realtime chat showcasing full-stack proficiency.`,
    tags: ["React", "MongoDB", "Node.js"],
    imageUrl: tweetitImg,
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix clone to explore Next.js  along with Node.js(TS) and CSS in JS for styling.",
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
