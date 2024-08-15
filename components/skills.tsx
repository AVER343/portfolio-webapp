"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import * as SkillActions from '@/actions/skills';
import { ICON_MAP } from "@/lib/iconMap";
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

export default function Skills() {
  const { ref } = useSectionInView("Skills");
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

  const [skills, setSkills] = useState<Skill[]>([]);
  const getSkills = async () =>
  {
    const data = await SkillActions.findAll();
    setSkills(data);
  };
  useEffect(() =>
  {
    getSkills();
  }, [])
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        { skills.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <>
              { skill.skillName }</>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
