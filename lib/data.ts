import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaptop } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiMedalMilitaryBold } from "react-icons/pi";
import astduioImg from "@/public/astudio.webp";
import shellImg from "@/public/42sh.png";
import IndigenousImg from "@/public/ics_indigenous.png";
import nOneImg from "@/public/none-websites.webp";

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
    name: "Projects",
    hash: "#projects",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Aviation Management",
    location: "Brisbane, Australia",
    description:
      "I obtained a Bachelor's degree in Aviation Management and acquired a Private Pilot License.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2018",
  },
  {
    title: "Australian Army Reserves Officer Cadet",
    location: "Brisbane, Australia",
    description:
      "Acquired theoretical knowledge in the fields of military leadership and training.",
    icon: React.createElement(PiMedalMilitaryBold),
    date: "2017 - 2019",
  },
  {
    title: "Logistics Department Team Leader",
    location: "Helsinki, Finland",
    description:
      "I served as a team leader within the logistics department of a rapidly growing startup.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Graduated Hive Helsinki",
    location: "Helsinki, Finland",
    description:
      "Accumulated valuable practical experience in software development by actively engaging with Hive Helsinki's hands-on and pragmatic learning methodology.",
    icon: React.createElement(FaLaptop),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "42sh (School Project)",
    description:
      "Our team engineered a UNIX environment shell, encompassing functionalities such as terminal control, process management, and advanced argument parsing, among other capabilities.",
    tags: ["C", "UNIX", "Git", "Team Project"],
    imageUrl: shellImg,
    link: "https://github.com/maxrantil/42sh/",
  },
  {
    title: "Salon Website",
    description:
      "Utilizing the advantages of Next.js, including server-side rendering, to enhance search engine optimization. Furthermore, implementing Instagram data fetching for real-time rendering of the latest Instagram posts.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind", "Instagram API"],
    imageUrl: astduioImg,
    link: "https://astudiolarnaca.com/",
  },
  {
    title: "Indigenous Conference Services Website",
    description:
      "Development of a conference management company website, featuring the integration of Contentful as a user-friendly Content Management System (CMS) to empower the client workflow.",
    tags: [
      "TypeScript",
      "Next.js",
      "Contentful",
      "Tailwind",
    ],
    imageUrl: IndigenousImg,
    link: "https://next-ics-website-git-xeroupdate-mike-ninja.vercel.app/",
  },
  {
    title: "N1 Website Agency",
    description:
      "Web development agency website with a focus on modern design and user experience.",
    tags: [
      "TypeScript",
      "Next.js",
      "Framer Motion",
      "Tailwind",
    ],
    imageUrl: nOneImg,
    link: "https://nonewebsites.com.au",
  },
] as const;

export const skillsData = [
  "C",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Redux",
  "Three.js",
  "Framer Motion",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Apollo",
  "Git",
  "Bash",
  "Neovim",
  "VScode",
  "Linux",
] as const;
