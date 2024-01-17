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
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have a degree in{" "}
        <span className="font-medium">Aviation Management</span>{" "}
        and profesional managerial experience as a{" "}
        <span className="font-medium">Department Team Leader</span>. I decided
        to pursue my passion for programming. I enrolled in a coding bootcamp,
        Hive Helsinki, and learned{" "}
        <span className="font-medium">
          low level software development
        </span>. Since graduation, I have devoted my time to{" "}
        <span className="font-medium">full-stack development</span>.{" "}
      </p>

      <p className="mb-3">
        <span className="italic">My favorite part of programming</span>{" "}
        is the endless posibilities of creating a useful, robust, and easily
        maintanable software. I <span className="underline">love</span>{" "}
        the feeling of coming up with ideas to further improve the project. My
        core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with{" "}
        <span className="font-medium">
          Typescript and C{" "}
        </span>
        programming.{" "}
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, rock climbing, and hiking.
      </p>
    </motion.section>
  );
}
