export type JourneyId = "bca" | "mca" | "research-assistant";
export type JourneyTab =
  | "overview"
  | "research"
  | "ai"
  | "security"
  | "pqc"
  | "cloud"
  | "development"
  | "projects"
  | "proposals";

export type JourneyEntry = {
  id: JourneyId;
  type: "education" | "experience";
  title: string;
  subtitle: string;
  phase: string;
  start: string;
  end: string;
  institution: string;
  current?: boolean;
  description: string;
  focus: string[];
  technologies?: string[];
};

export const journeyEntries: JourneyEntry[] = [
  {
    id: "bca",
    type: "education",
    title: "BCA",
    subtitle: "Bachelor of Computer Applications",
    phase: "FOUNDATION",
    start: "2019",
    end: "2022",
    institution: "Academic Foundation",
    description:
      "Built the foundation in computer applications, programming, software development, databases, and core computing concepts.",
    focus: [
      "Programming",
      "Computer Applications",
      "Software Development",
      "Databases",
      "Web Technologies",
      "Problem Solving",
    ],
    technologies: ["Programming", "Databases", "Web Technologies", "Problem Solving"],
  },
  {
    id: "mca",
    type: "education",
    title: "MCA",
    subtitle: "Master of Computer Applications",
    phase: "SPECIALIZATION",
    start: "2023",
    end: "2025",
    institution: "Advanced Computing",
    description:
      "Expanded my technical foundation into advanced computing, AI/ML, software engineering, cybersecurity, emerging technologies, and research-oriented problem solving.",
    focus: [
      "AI / ML",
      "Software Engineering",
      "Cybersecurity",
      "Cloud Technologies",
      "Blockchain",
      "Research",
      "Emerging Technologies",
    ],
    technologies: ["AI / ML", "Software Engineering", "Cybersecurity", "Cloud Technologies", "Blockchain"],
  },
  {
    id: "research-assistant",
    type: "experience",
    title: "RESEARCH ASSISTANT",
    subtitle: "Research",
    phase: "RESEARCH",
    start: "September 2025",
    end: "Present",
    institution: "PES University",
    current: true,
    description:
      "I work across emerging technology research and practical system development, with a focus on Post-Quantum Cryptography, AI/ML, cybersecurity, multimedia security, cloud technologies, and secure software systems. My work involves exploring research problems, evaluating existing approaches, developing technical solutions, building prototypes, analyzing results, and preparing research documentation and proposals.",
    focus: [
      "PQC",
      "AI / ML",
      "Cybersecurity",
      "Multimedia Security",
      "Cloud / Data Engineering",
      "Secure Software Systems",
      "Research Documentation",
    ],
    technologies: [
      "Python",
      "Java",
      "C",
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "Tailwind CSS",
      "MongoDB",
      "REST APIs",
      "Socket.IO",
      "Blockchain",
      "IPFS",
      "Smart Contracts",
    ],
  },
];

export const journeyTabOptions: { id: JourneyTab; label: string }[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "research", label: "RESEARCH" },
  { id: "ai", label: "AI / ML" },
  { id: "security", label: "SECURITY" },
  { id: "pqc", label: "PQC" },
  { id: "cloud", label: "CLOUD" },
  { id: "development", label: "DEVELOPMENT" },
  { id: "projects", label: "PROJECTS" },
  { id: "proposals", label: "PROPOSALS" },
];

export const journeyResearchAreas: Record<JourneyTab, { headline: string; detail: string; items: string[] }> = {
  overview: {
    headline: "Research focus",
    detail:
      "My current work spans research exploration, prototype development, technical analysis, and secure system implementation across AI/ML, PQC, security, cloud, and software engineering.",
    items: [
      "Post-Quantum Cryptography and hybrid security design",
      "AI/ML-driven system experimentation and intelligent applications",
      "Secure application and digital evidence research",
      "Research documentation, architecture design, and proposal preparation",
    ],
  },
  research: {
    headline: "Research direction",
    detail:
      "I work across literature review, emerging technology exploration, technical experimentation, result analysis, and research documentation to translate ideas into actionable systems and proposals.",
    items: [
      "Literature exploration and research direction identification",
      "Technical documentation and architecture design",
      "Experimentation and result analysis",
      "Research paper and proposal preparation",
    ],
  },
  ai: {
    headline: "AI / ML work",
    detail:
      "I explore AI-powered systems for information collection, classification, ranking, summarization, and personalized intelligence workflows, with a focus on practical and security-aware deployment.",
    items: [
      "Machine Learning and Deep Learning",
      "NLP and intelligent systems",
      "TensorFlow and Scikit-learn experimentation",
      "AI security and AI-powered applications",
      "AI Radar for collection, classification, ranking, summarization, and personalization",
    ],
  },
  security: {
    headline: "Cybersecurity research",
    detail:
      "My work includes secure systems design, digital forensics, evidence integrity, access control, security analysis, and secure application design, with NyayaSetu as a major applied example.",
    items: [
      "Cybersecurity research and secure systems",
      "Digital forensics and evidence integrity",
      "Access control and secure application design",
      "Security analysis and system hardening",
      "NyayaSetu — blockchain-driven digital evidence tracking and custody preservation",
    ],
  },
  pqc: {
    headline: "Post-quantum cryptography",
    detail:
      "I study PQC algorithms, migration strategies, and hybrid cryptography for secure data and multimedia systems, with experimentation informed by practical library and implementation work.",
    items: [
      "ML-KEM, ML-DSA, SLH-DSA, Falcon / FN-DSA, NTRU, FrodoKEM, Classic McEliece",
      "PQC implementations and migration planning",
      "Hybrid cryptography and secure key management",
      "liboqs, PQClean, SageMath, and associated cryptographic experimentation",
      "TAP-MQ / Temporal Access-Controlled Post-Quantum Multimedia Security",
    ],
  },
  cloud: {
    headline: "Cloud and data technologies",
    detail:
      "I work with cloud and data technologies as part of technical exploration, research, and system development, with a practical focus on secure and data-aware architectures.",
    items: [
      "Microsoft Azure",
      "Azure Data Factory",
      "Databricks",
      "ADLS",
      "Azure Synapse Analytics",
      "Cloud and data engineering exploration",
    ],
  },
  development: {
    headline: "System and prototype development",
    detail:
      "My role includes practical prototyping, implementation planning, and full-stack system development across research-inspired products and secure application workflows.",
    items: [
      "Python, Java, C, React, Next.js, Node.js, FastAPI, Tailwind CSS",
      "MongoDB, REST APIs, Socket.IO, WebSockets, event-driven architecture",
      "Blockchain, IPFS, smart contracts, and secure prototype design",
      "Real-Time Chat Application, AI Radar, NYAYASETU, TAP-MQ / PQC multimedia security research",
    ],
  },
  projects: {
    headline: "Project work",
    detail:
      "The current research role includes practical delivery and experimentation across applied projects spanning AI, security, blockchain, real-time communication, and secure multimedia systems.",
    items: [
      "NYAYASETU — Blockchain-Driven Digital Evidence Tracking and Custody Preservation",
      "AI RADAR — Personalized AI Intelligence Platform",
      "Real-Time Chat Application — event-driven communication systems",
      "TAP-MQ / PQC multimedia security research direction",
    ],
  },
  proposals: {
    headline: "Proposal and funding work",
    detail:
      "I contribute to identifying research problems, reviewing emerging technology domains, evaluating proposal opportunities, and preparing technical summaries and project documentation.",
    items: [
      "Identifying research problem statements and emerging technology domains",
      "Reviewing funding opportunities and evaluating proposal calls",
      "Preparing technical concepts, summaries, and project documentation",
      "Exploring opportunities from DST, Samgnya, C-DOT, ANRF, MeitY, and related research bodies",
    ],
  },
};
