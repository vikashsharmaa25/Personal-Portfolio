import projectOne from "@/assets/projectOne.png";
import tubeMate from "@/assets/tubeMate.png";
import OWR from "@/assets/variation.png";

export interface Project {
  id: number;
  image: any;
  name: string;
  url: string;
  technology: string[];
  bgColor: string;
  category: "Frontend" | "Backend" | "Full Stack";
}

const projectData: Project[] = [
  {
    id: 1,
    image: OWR,
    name: "OWR business store",
    url: "https://business.owr.app/",
    technology: [
      "React.JS",
      "Tailwind",
      "Ant design",
      "node.JS",
      "Express.JS",
      "Postgresql",
    ],
    bgColor: "#50E3C2",
    category: "Full Stack",
  },
  {
    id: 2,
    image: tubeMate,
    name: "Tube Mate",
    url: "https://tubematee.netlify.app",
    technology: ["React.JS", "Tailwind", "YouTube API"],
    bgColor: "#50E3C2",
    category: "Frontend",
  },
  {
    id: 3,
    image: projectOne,
    name: "Search Engine",
    url: "https://googleclonelite.netlify.app",
    technology: ["React.JS", "Tailwind", "Google API"],
    bgColor: "#4A90E2",
    category: "Frontend",
  },
];

export default projectData;
