export interface EducationData {
  id: number;
  date: string;
  degree: string;
  degreeLevel: string;
  degreeShortName: string;
  degreeName: string;
  college: string;
  location: string;
}

const educationData: EducationData[] = [
  {
    id: 1,
    date: "2020 - 2023",
    degree: "Graduation",
    degreeLevel: "Bachelor’s Degree",
    degreeShortName: "BCA",
    degreeName: "Bachelor of Computer Applications",
    college: "PSIT College of Higher Education",
    location: "Bhauti, Kanpur, India",
  },
  {
    id: 2,
    date: "2017-2019",
    degree: "Secondry",
    degreeLevel: "Intermediate",
    degreeShortName: "PCM",
    degreeName: "Physics, Chemistry, Mathematics",
    college: "RBT Vidayalaya",
    location: "Purva, Deoria, India",
  },
];

export default educationData;
