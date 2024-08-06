import projectOne from "@/assets/projectOne.png";
import tubeMate from "@/assets/tubeMate.png";

export interface Project {
  id: number;
  image: any;
  name: string;
  url: string;
  technology: string[];
  bgColor: string;
}

const projectData: Project[] = [
  {
    id: 1,
    image: projectOne,
    name: "Search Engine",
    url: "https://googleclonelite.netlify.app",
    technology: ["React.JS", "Tailwind", "Google API"],
    bgColor: "linear-gradient(135deg, #a772cb 0%, #6aa8f7 100%)",
  },
  {
    id: 2,
    image: tubeMate,
    name: "Tube Mate",
    url: "https://tubematee.netlify.app",
    technology: ["React.JS", "Tailwind", "YouTube API"],

    bgColor: "linear-gradient(135deg, #a772cb 0%, #f76a6a 100%)",
  },
];

export default projectData;
