export type Project = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  skills: string[];
  categories: string[];
  concepts: string[];
  measurements: string[];
  publishedLink: string;
};

export const projects: Project[] = [
  {
    id: "nyayasetu",
    number: "01",
    name: "NYAYASETU",
    subtitle: "Blockchain-Driven Digital Evidence Tracking and Custody Preservation",
    description: "A blockchain-based digital evidence management system designed to preserve the integrity, traceability, and chain of custody of digital evidence.",
    skills: ["Next.js", "React", "Node.js", "MongoDB", "IPFS", "Ganache", "Solidity", "MetaMask", "JWT", "Role-Based Access Control", "Blockchain"],
    categories: ["BLOCKCHAIN", "SECURITY"],
    concepts: ["Digital Evidence", "Chain of Custody", "Blockchain Integrity", "IPFS Storage", "Role-Based Access", "Evidence Verification"],
    measurements: [
      "Evidence upload: 2–4 seconds for 50 MB",
      "Blockchain transaction: 3–5 seconds on Ganache",
      "Retrieval: <2 seconds for small files",
      "Gas: 85k–120k units",
    ],
    publishedLink: "https://nyaya-setu-jade.vercel.app/",
  },
  {
    id: "ai-radar",
    number: "02",
    name: "AI RADAR",
    subtitle: "Personalized AI Intelligence Feed",
    description: "An AI-powered intelligence platform that collects, analyzes, ranks, summarizes, and personalizes information from the rapidly changing AI ecosystem.",
    skills: ["FastAPI", "React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "TanStack Query", "Gemini", "PostgreSQL / SQLite", "RSS / Atom / APIs", "AI/ML"],
    categories: ["AI", "INTELLIGENCE"],
    concepts: ["Automated Collection", "AI Classification", "Deduplication", "Topic Extraction", "Importance Scoring", "Novelty Detection", "Personalization"],
    measurements: [],
    publishedLink: "https://ai-radar-1-hpad.onrender.com",
  },
  {
    id: "realtime-chat",
    number: "03",
    name: "REAL-TIME CHAT APPLICATION",
    subtitle: "WebSocket-Based Real-Time Messaging System",
    description: "A real-time messaging application built using Node.js, Express, Socket.IO, and React to enable live bidirectional communication between connected users.",
    skills: ["JavaScript", "HTML", "CSS", "Node.js", "Express", "Socket.IO", "React", "WebSockets", "REST APIs"],
    categories: ["WEBSOCKETS", "FULL STACK"],
    concepts: ["Real-Time Messaging", "WebSocket Communication", "Usernames", "Join/Leave Notifications", "Typing Indicators", "Live Broadcasting", "Event-Driven Architecture", "REST APIs"],
    measurements: [],
    publishedLink: "https://real-time-chat-mauve.vercel.app/",
  },
];
