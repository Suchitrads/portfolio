export type Milestone = {
  id: "ctf" | "hackathon";
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  label: string;
};

export const milestones: Milestone[] = [
  {
    id: "ctf",
    number: "01",
    title: "First Place · Intracollegiate IT Fest 2023",
    description: "Achieved first place in the Intracollegiate IT Fest 2023, demonstrating excellence in IT skills and teamwork.",
    image: "/ctf.jpg",
    imageAlt: "Intracollegiate IT Fest 2023 milestone",
    label: "IT FEST / 2023",
  },
  {
    id: "hackathon",
    number: "02",
    title: "Second Place · 24-Hour Hackathon",
    description: "Secured second place in a 24-hour Hackathon organized by the Center of Cybercrime Investigation Training and Research (CCITR), PES University 2025.",
    image: "/hackathon.jpg",
    imageAlt: "CCITR PES University hackathon milestone",
    label: "CCITR / PES UNIVERSITY / 2025",
  },
];