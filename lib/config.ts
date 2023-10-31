import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";

export const person = {
  name: {
    first: "Michel Philippe",
    last: "Barutel",
  },
  metaData: {
    title: "Michel Philippe | Portfolio",
    description: "Website coded by Michel Philippe Barutel",
  },
  contact: {
    email: "michelbarutel.work@hotmail.com",
  },
  socials: {
    cv:
      "https://www.canva.com/design/DAFyvSa3Ry8/3f6cb6w0-7c3Tsdx27HrWg/view?utm_content=DAFyvSa3Ry8&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    linked: "https://www.linkedin.com/in/michelphilippebarutel/",
    github: "https://github.com/mike-ninja/",
  },
  intro: {
    contact: {
      text: "Let's Connect",
      icon: React.createElement(BsArrowRight),
    },
    resume: {
      text: "Read Resume",
      icon: React.createElement(AiOutlineRead),
    },
  },
} as const;
