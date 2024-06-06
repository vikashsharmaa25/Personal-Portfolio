import html from "@/assets/asset 36.svg";
import Css from "@/assets/asset 37.svg";
import javascript from "@/assets/asset 11.svg";
import Scss from "@/assets/asset 39.svg";
import Bootstrap from "@/assets/asset 40.svg";
import React from "@/assets/asset 8.svg";
import Redux from "@/assets/asset 41.svg";
import NextJs from "@/assets/asset 6.svg";
import ReactHookForm from "@/assets/asset 44.svg";
import Tailwind from "@/assets/asset 10.svg";
import MaterialUi from "@/assets/asset 45.svg";
import FramerMotion from "@/assets/asset 51.svg";
import AntDesign from "@/assets/asset 48.svg";
import ReactQuery from "@/assets/asset 53.svg";
import Git from "@/assets/asset 54.svg";

export interface Skill {
  id: number;
  image: string;
  name: string;
}

const skillsData: Skill[] = [
  {
    id: 1,
    image: html,
    name: "HTML5",
  },
  {
    id: 2,
    image: Css,
    name: "CSS3",
  },
  {
    id: 3,
    image: javascript,
    name: "Javascript",
  },
  {
    id: 4,
    image: Scss,
    name: "SCSS",
  },
  {
    id: 5,
    image: Bootstrap,
    name: "Bootstrap",
  },
  {
    id: 6,
    image: React,
    name: "React",
  },
  {
    id: 7,
    image: Redux,
    name: "Redux",
  },
  {
    id: 8,
    image: NextJs,
    name: "Next.js",
  },
  {
    id: 9,
    image: ReactHookForm,
    name: "React Hook Form",
  },
  {
    id: 10,
    image: Tailwind,
    name: "Tailwind CSS",
  },
  {
    id: 11,
    image: MaterialUi,
    name: "Material-UI",
  },
  {
    id: 12,
    image: FramerMotion,
    name: "Framer Motion",
  },
  {
    id: 13,
    image: AntDesign,
    name: "Ant Design",
  },
  {
    id: 14,
    image: ReactQuery,
    name: "React Query",
  },
  {
    id: 15,
    image: Git,
    name: "Git",
  },
];

export default skillsData;
