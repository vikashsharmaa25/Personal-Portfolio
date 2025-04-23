export interface ProjectProps {
  id: number;
  image: any;
  name: string;
  description: string;
  url: string;
  github?: string;
  technology: string[];
  category: "Frontend" | "Backend" | "Full Stack";
  featured?: boolean;
}
export interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}