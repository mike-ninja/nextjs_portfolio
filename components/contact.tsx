"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="mb-20 sm:mb-28 w-[min(100%,40rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-5">
        Please contact me direcly at{" "}
        <a className="underline" href="mailto:michelbarutel.work@hotmail.com">
          michelbarutel.work@hotmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack"
        />
        <textarea
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none buttonEffect hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          {" "}
        </button>
      </form>
    </motion.section>
  );
}
