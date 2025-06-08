import { FaLaptopCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";

export const skills: any = [
  {
    name: "Frontend Development",
    icon: <FaLaptopCode />,
    description:
      "Building responsive and interactive user interfaces with modern frameworks and libraries.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Backend Development",
    icon: <FaServer />,
    description:
      "Developing robust server-side applications and RESTful APIs with scalable architecture.",
    technologies: ["Node.js", "Express", "GraphQL", "REST APIs"],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Database Management",
    icon: <FaDatabase />,
    description:
      "Designing and optimizing database schemas for efficient data storage and retrieval.",
    technologies: ["MongoDB", "PostgreSQL", "Redis", "Prisma"],
    color: "from-purple-500 to-violet-500",
  },
  {
    name: "Cloud & DevOps",
    icon: <FaCloud />,
    description:
      "Deploying and managing applications on cloud platforms with CI/CD pipelines.",
    technologies: ["AWS", "Docker", "Vercel", "GitHub Actions"],
    color: "from-orange-500 to-red-500",
  },
];
