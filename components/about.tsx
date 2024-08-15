/** @format */

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About({ aboutMe }: { aboutMe: any; })
{
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <DescriptionComponent { ...aboutMe } />
    </motion.section>
  );
}

const DescriptionComponent = (props: {
  journeyIntro: string;
  skillSetIntro: string;
  skillSetDetails: string;
  technicalSkills: string;
  personalGrowth: string;
  personalInterests: string;
  hobbies: string[];
  learning: string;
}) =>
{
  const {
    journeyIntro,
    skillSetIntro,
    skillSetDetails,
    technicalSkills,
    personalGrowth,
    personalInterests,
    hobbies,
    learning,
  } = props;
  return (
    <div>
        <p>
        <span className="font-medium">{ journeyIntro } </span> { skillSetIntro }{ " " }
        <span className="font-medium">{ skillSetDetails } </span>
        { technicalSkills } { personalGrowth }
        
      </p>
      <p>
        <span className="italic">{ personalInterests }</span>, I { hobbies[0] }
        <span className="font-medium"> { hobbies[1] }</span>,
        <span className="font-medium"> { hobbies[2] }</span>.
        <span className="font-medium"> { learning }.</span>
      </p>
    </div>
  );
};
