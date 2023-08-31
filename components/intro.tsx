"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Anastasia Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
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
        <span className="font-bold">Hello, I'm Anastasia</span> I'm a{"  "}
        <span className="font-bold">full-stack developer</span> with{"  "}
        <span className="font-bold">2 years</span>{" "}
        of experience. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{"   "}
        <span className="underline">React (Next.js)</span>.
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
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none buttonEffect hover:bg-gray-950 cursor-pointer"
        >
          Let's Connect{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="https://www.canva.com/design/DAFm624vqfU/GCbjHlKOXLF3QIaeFb3j6Q/view#1"
          target="_blank"
          rel="noreferrer"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none buttonEffect cursor-pointer borderBlack"
        >
          Read Resume{" "}
          <AiOutlineRead className="opacity-70 group-hover:-translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/michelphilippebarutel/"
          target="_blank"
          rel="noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full cursor-pointer borderBlack outline-none buttonEffect hover:text-gray-950"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/mike-ninja/"
          target="_blank"
          rel="noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] cursor-pointer borderBlack outline-none buttonEffect hover:text-gray-950"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
