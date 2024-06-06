import vsCode from "@/assets/asset 55.svg";
import gitlab from "@/assets/asset 56.svg";
import github from "@/assets/asset 57.svg";
import postman from "@/assets/asset 60.svg";

export interface Develop {
  id: number;
  image: string;
  name: string;
}

const developData: Develop[] = [
  {
    id: 1,
    image: vsCode,
    name: "Visual Studio Code",
  },
  {
    id: 2,
    image: github,
    name: "Github",
  },
  {
    id: 3,
    image: gitlab,
    name: "Gitlab",
  },
  {
    id: 4,
    image: postman,
    name: "Postman",
  },
];

export default developData;
