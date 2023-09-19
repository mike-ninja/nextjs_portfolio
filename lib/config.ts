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
      "https://www.canva.com/design/DAFu3ijg3eg/LD_7Mt6yyJylQsREKgpchw/view?utm_content=DAFu3ijg3eg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
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
