"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiRedux, SiNextdotjs, SiFramer, SiTailwindcss, SiExpress, SiNestjs, SiPrisma, SiPostgresql, SiMongodb, SiGo } from "react-icons/si";
import { IconType } from "react-icons";

type TechData = {
  name: string;
  color: string;
  icon: IconType;
};

const techData: TechData[] = [
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: FaJsSquare,
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: SiTypescript,
  },
  {
    name: "React",
    color: "#61DAFB",
    icon: FaReact,
  },
  {
    name: "Redux",
    color: "#764ABC",
    icon: SiRedux,
  },
  {
    name: "Next.js",
    color: "#000000",
    icon: SiNextdotjs,
  },
  {
    name: "Framer Motion",
    color: "#E3008C",
    icon: SiFramer,
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    color: "#339933",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    color: "#000000",
    icon: SiExpress,
  },
  {
    name: "NestJS",
    color: "#E0234E",
    icon: SiNestjs,
  },
  {
    name: "Prisma",
    color: "#2D3748",
    icon: SiPrisma,
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    icon: SiPostgresql,
  },
  {
    name: "MongoDB",
    color: "#47A248",
    icon: SiMongodb,
  },
  {
    name: "Git",
    color: "#F05032",
    icon: FaGitAlt,
  },
  {
    name: "Go",
    color: "#00ADD8",
    icon: SiGo,
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

interface Skill
{
  skillId: number;
  userId: number;
  createdAt: string | null;
  updatedAt: string | null;
  skillName: string;
  proficiencyLevel: string | null;
  category: string | null;
}
export default function Skills({ skills }: { skills: Skill[]; })
{
  const { ref } = useSectionInView("Skills");

  console.log(skills.map(e => ({ s: e.skillId, name: e.skillName })));
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-800">
        { skills.map((skill, index) => (
          <motion.li
            className="bg-white border border-gray-300 rounded-xl px-6 py-4 flex items-center space-x-4 shadow-md dark:bg-white/10 dark:text-white/80"
            key={ index }
            variants={ fadeInAnimationVariants }
            initial="initial"
            whileInView="animate"
            viewport={ { once: true } }
            custom={ index }
          >
            <span style={ { color: techData.filter(e => e.name == skill.skillName)[0]?.color } }>
              { React.createElement(techData.filter(e => e.name == skill.skillName)[0].icon, { className: "w-6 h-6" }) }
            </span>
            <span>{ skill.skillName }</span>
          </motion.li>
        )) }
      </ul>

    </section>
  );
}
