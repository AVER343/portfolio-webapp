/** @format */

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
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
      <p className="mb-3">
        <p>
          <span className="font-medium">Embarking on a journey</span> to pursue
          my genuine passion for programming, I've become proficient in a core
          stack comprising
          <span className="font-medium">
            {" "}
            React, Next.js, Node.js, MongoDB and many more
          </span>
          . This skill set empowers me to craft dynamic and efficient solutions.
          Additionally, I am well-versed in TypeScript and Prisma, demonstrating
          my commitment to staying abreast of emerging technologies. As a
          proficient IT professional, my history includes successful website
          design, database management, and excellence in network administration.
          My technical prowess is complemented by excellent interpersonal
          skills, facilitating effective engagement with diverse clients.
          Actively seeking challenges for personal and professional growth, I am
          dedicated to continuously enhancing my IT skills.
        </p>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games <span className="font-medium"> 🎮</span>, watching movies
        <span className="font-medium"> 🍿</span>, and sleeping
        <span className="font-medium"> 😴</span>. I also enjoy {" "}
        <span className="font-medium">learning new things 📑</span>.
      </p>
    </motion.section>
  );
}
