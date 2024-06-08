export interface Experience {
  id: number;
  logo: string;
  companyName: string;
  location: string;
  date: string;
  role: string;
  technology: string;
  responsibility: string[];
}

const experienceData: Experience[] = [
  {
    id: 1,
    logo: "https://media.licdn.com/dms/image/C4D0BAQHKVMFH-niXIg/company-logo_200_200/0/1637757773341?e=2147483647&v=beta&t=vntN1K4lDPVnScvv95bDBlo0MlqO_jOGRQ0NzqEa5kc",
    companyName: "QuadB Technology",
    location: "Ludhiana, India",
    date: "Aug-2023 - Present",
    role: "Front End Developer",
    technology: "React.js",
    responsibility: [
      "Designed and developed over 15 complete React and NextJS full theme templates, showcasing proficiency in front-end design and development.",
      "Managed both front-end and back-end aspects, utilizing NextJS API Routes for seamless integration.",
      "Integrated Stripe Payment Gateway for seamless and secure transactions.",
      "Successfully deployed the application on Vercel for optimal performance and accessibility.",
    ],
  },
];

export default experienceData;
