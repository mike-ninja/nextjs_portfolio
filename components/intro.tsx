"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { person } from "@/lib/config";
import Me from "@/public/me.png";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Me}
              alt="Michel Philippe Barutel Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-36 w-36 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🌊
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Mike,</span> a graduate from{" "}
        <span className="font-bold underline">
          <Link
            href="https://www.hive.fi/en/about-hive"
            target="_blank"
            rel="noreferrer"
          >
            Hive Helsinki
          </Link>
        </span>, a prestigious{" "}
        <span className="italic">programming school</span> among the{" "}
        <span className="italic underline">
          <Link
            href="https://www.42network.org/about-us/"
            target="_blank"
            rel="noreferrer"
          >
            42 Schools Network
          </Link>
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          onClick={() => {
            setTimeOfLastClick(Date.now());
            setActiveSection("Contact");
          }}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none buttonEffect hover:bg-gray-950 cursor-pointer dark:bg-gray-950 z-[99]"
        >
          Let's Connect{" "}
          <span className="opacity-70 group-hover:translate-x-1 transition">
            {person.intro.contact.icon}
          </span>
        </Link>
        <a
          href={person.socials.cv}
          target="_blank"
          rel="noreferrer"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none buttonEffect cursor-pointer borderBlack dark:bg-white/10 z-[99]"
        >
          Read Resume{" "}
          <span className="opacity-70 group-hover:translate-x-1 transition">
            {person.intro.resume.icon}
          </span>
        </a>
        <div className="flex gap-2">
          <a
            href={person.socials.linked}
            target="_blank"
            rel="noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full cursor-pointer borderBlack outline-none buttonEffect hover:text-gray-950 dark:bg-white/10 dark:text-white/60 z-[99]"
          >
            <BsLinkedin />
          </a>
          <a
            href={person.socials.github}
            target="_blank"
            rel="noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] cursor-pointer borderBlack outline-none buttonEffect hover:text-gray-950 dark:bg-white/10 dark:text-white/60 z-[99]"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
