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
    logo: "https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/2512_profilepicture.png",
    companyName: "Mastertrust Capital Services Ltd",
    location: "Delhi, India",
    date: "Jan-2025 - Present",
    role: "Front End Developer - Full Time",
    technology: "Next.js",
    responsibility: [
      "Redesigned dashboard using Next.js and TypeScript, cutting load times by 40% and boosting retention by 18%.",
      "Solved complex frontend issues and used Bitbucket for version control and smooth team collaboration.",
      "Built a reusable component system with designers, reducing new feature dev time by 25%.",
      "Integrated backend APIs with TanStack Query to optimize data fetching and improve UI responsiveness.",
    ],
  },
  {
    id: 2,
    logo: "https://media.licdn.com/dms/image/C4D0BAQHKVMFH-niXIg/company-logo_200_200/0/1637757773341?e=2147483647&v=beta&t=vntN1K4lDPVnScvv95bDBlo0MlqO_jOGRQ0NzqEa5kc",
    companyName: "QuadB Technology",
    location: "Ludhiana, India",
    date: "Jan-2024 - Dec-2024",
    role: "Front End Developer - Full Time",
    technology: "React.js",
    responsibility: [
      "Developed and maintained responsive web applications using React.js, boosting user engagement by 25%.",
      "Optimized payment gateways and streamlined checkout processes, increasing conversion rates by 15%.",
      "Integrated RESTful APIs with backend teams, reducing data fetch times by 30%.",
      "Mentored junior developers, enhancing team code quality by 20%.",
    ],
  },
  {
    id: 3,
    logo: "https://media.licdn.com/dms/image/C4D0BAQHKVMFH-niXIg/company-logo_200_200/0/1637757773341?e=2147483647&v=beta&t=vntN1K4lDPVnScvv95bDBlo0MlqO_jOGRQ0NzqEa5kc",
    companyName: "QuadB Technology",
    location: "Ludhiana, India",
    date: "Aug-2023 - Jan-2024",
    role: "Front End Developer - Intern",
    technology: "React.js",
    responsibility: [
      "Created responsive with React.js, Tailwind CSS, and Ant Design, improving mobile user experience by 40%.",
      "Managed state using Redux, reducing component coupling by 35%.",
      "Developed 3 major features, contributing to a 20% increase in user retention.",
    ],
  },
];

export default experienceData;
