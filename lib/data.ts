import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaptop } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiMedalMilitaryBold } from "react-icons/pi";
import portfolioImg from "@/public/portfolio-threejs.png";
import icsImg from "@/public/icsWebsite.png";
import astduioImg from "@/public/astudio.webp";
import shellImg from "@/public/42sh.png";

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
      "I got my bachelor's in aviation management and private pilot license.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2018",
  },
  {
    title: "Australian Army Reserves Officer Cadet",
    location: "Brisbane, Australia",
    description:
      "Gained theorical knowledge on military leadership and training.",
    icon: React.createElement(PiMedalMilitaryBold),
    date: "2017 - 2019",
  },
  {
    title: "Logistics Department Team Leader",
    location: "Helsinki, Finland",
    description:
      "I worked as a team leader in the logistics department at a fast scaling startup.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Graduated Hive Helsinki",
    location: "Helsinki, Finland",
    description:
      "Gained valuable practical experience in software development through Hive Helsinki's pragmatic approach to learning.",
    icon: React.createElement(FaLaptop),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "42sh (School Project)",
    description:
      "My team developed a shell in UNIX environment. The shell included features as terminal control, process control, argument parsing and more.",
    tags: ["C", "UNIX", "Git", "Team Project"],
    imageUrl: shellImg,
    link: "https://github.com/maxrantil/42sh/",
  },
  {
    title: "Three.js Portfolio",
    description:
      "First portfolio website with 3D elements and utilization of Three.js library.",
    tags: ["React", "JavaScript", "Three.js"],
    imageUrl: portfolioImg,
    link: "https://portfolio-website-seven-gilt.vercel.app/",
  },
  {
    title: "Salon Website",
    description:
      "Utilizing Next.js benefits of server side rendering for better search engine optimisation. Additionally, with Instagram fetching for latest instagram post rendering.",
    tags: ["React", "JavaScript", "Next.js", "Instagram API"],
    imageUrl: astduioImg,
    link: "https://astudiolarnaca.com/",
  },
  {
    title: "Conference Website",
    description:
      "Website for conferences management company with utilization of Contentful as easy CMS tool for the client.",
    tags: ["React", "JavaScript", "TypeScript", "Next.js", "Contentful", "Tailwind"],
    imageUrl: icsImg,
    link: "https://next-ics-website.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Three.js",
  "C",
  "Rust",
  "Shell",
  "Neovim",
  "VScode",
  "Linux",
] as const;
