"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/send-emails";
import SubitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { person } from "@/lib/config";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

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
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me direcly at{" "}
        <a
          href={`mailto:${person.contact.email}`}
          className="underline"
        >
          {person.contact.email}
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          required
          name="senderEmail"
          type="email"
          maxLength={500}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <textarea
          required
          name="message"
          maxLength={5000}
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <SubitBtn />
      </form>
    </motion.section>
  );
}
