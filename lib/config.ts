import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";

export const person = {
  name: {
    first: "Michel Philippe",
    last: "Barutel",
  },
  contact: {
    // phone: "+3584578347332",
    email: "michelbarutel.work@hotmail.com",
  },
  socials: {
    cv: "https://www.canva.com/design/DAFm624vqfU/GCbjHlKOXLF3QIaeFb3j6Q/view#1",
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
  }
} as const;
