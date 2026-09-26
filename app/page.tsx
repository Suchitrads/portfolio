"use client";

import Image from "next/image";
import { useState } from "react";

const profileImage = "/images/profile-avatar.svg";

const labNodes = [
  {
    id: "ai",
    name: "AI / ML",
    short: "Machine Learning, Deep Learning, NLP, AI Security",
    description:
      "Building intelligent systems that bridge research and real-world impact across language, vision, data, and trustworthy decision-making.",
    tags: ["Python", "TensorFlow", "Scikit-learn", "NLP", "Deep Learning"],
    accent: "cyan",
  },
  {
    id: "security",
    name: "SECURITY",
    short: "Cybersecurity, Digital Forensics, Secure Systems",
    description:
      "Designing resilient security architectures, threat-aware systems, and access control patterns that protect digital environments.",
    tags: ["Cybersecurity", "Digital Forensics", "Access Control", "Secure Systems"],
    accent: "green",
  },
  {
    id: "pqc",
    name: "PQC",
    short: "Post-Quantum Cryptography, ML-KEM, Hybrid Encryption",
    description:
      "Exploring next-generation cryptographic methods to secure data in a world moving beyond classical assumptions.",
    tags: ["ML-KEM", "ML-DSA", "Hybrid Cryptography", "PQC"],
    accent: "violet",
  },
  {
    id: "cloud",
    name: "CLOUD",
    short: "Azure, Cloud Infrastructure, Data Engineering",
    description:
      "Designing cloud-ready systems with scalable storage, telemetry, pipelines, and reliable platform patterns.",
    tags: ["Azure", "Data Factory", "Databricks", "ADLS", "Synapse"],
    accent: "blue",
  },
  {
    id: "development",
    name: "DEVELOPMENT",
    short: "Next.js, React, Node.js, Python, Backend Systems",
    description:
      "Shipping thoughtful products and systems through clean engineering, API design, and product-focused implementation.",
    tags: ["Next.js", "React", "Node.js", "Python", "Tailwind CSS"],
    accent: "teal",
  },
  {
    id: "research",
    name: "RESEARCH",
    short: "Research Areas, Proposals, Experiments, Publications",
    description:
      "Turning research ideas into tested prototypes, technical narratives, and secure system design choices.",
    tags: ["Research", "Proposals", "Experiments", "Documentation"],
    accent: "pink",
  },
  {
    id: "blockchain",
    name: "BLOCKCHAIN",
    short: "Blockchain, IPFS, Smart Contracts, Digital Evidence",
    description:
      "Applying distributed and auditable systems to traceability, evidence custody, and trust-preserving workflows.",
    tags: ["Ganache", "MetaMask", "Smart Contracts", "IPFS"],
    accent: "amber",
  },
] as const;

const researchCards = [
  {
    title: "POST-QUANTUM CRYPTOGRAPHY",
    summary:
      "Exploring cryptographic approaches designed for the post-quantum era and secure system design.",
  },
  {
    title: "AI / ML",
    summary:
      "Machine learning, deep learning, NLP, and intelligent systems with practical implementation patterns.",
  },
  {
    title: "CYBERSECURITY",
    summary:
      "Secure systems, access control, digital evidence, and resilient architecture decisions.",
  },
  {
    title: "MULTIMEDIA SECURITY",
    summary:
      "Researching secure processing, controlled access, and protection of multimedia data environments.",
  },
  {
    title: "CLOUD SECURITY",
    summary:
      "Secure and scalable cloud data systems with architecture-aware safeguards and observability.",
  },
] as const;

const projectSystems = [
  {
    name: "NyayaSetu",
    type: "Blockchain-Driven Digital Evidence Tracking and Custody Preservation",
    description:
      "A custodial evidence platform built around adaptive chain-of-custody, blockchain-backed integrity, and role-aware access flows.",
    architecture: [
      "Evidence",
      "Metadata",
      "IPFS",
      "Blockchain",
      "Access Control",
      "Verification",
    ],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "IPFS", "Ganache", "MetaMask", "Smart Contracts", "JWT", "RBAC"],
    metrics: [
      "Evidence upload: 2–4 seconds for 50 MB",
      "Blockchain transaction: 3–5 seconds on Ganache",
      "Retrieval: <2 seconds for small files",
      "Gas: 85k–120k units",
    ],
  },
  {
    name: "TAP-MQ",
    type: "Temporal Access-Controlled Post-Quantum Multimedia Security",
    description:
      "A secure multimedia workflow focused on time-bound access, policy-aware encryption, and post-quantum security primitives.",
    architecture: [
      "USER",
      "ACCESS POLICY",
      "PQC KEY EXCHANGE",
      "HYBRID ENCRYPTION",
      "SECURE STORAGE",
      "TIME-BOUND ACCESS",
      "DECRYPTION",
    ],
    stack: ["PQC", "Multimedia Security", "Hybrid Encryption", "Access Control", "Key Management", "Secure Storage"],
    metrics: [
      "Design focused on secure multimedia lifecycle management",
      "Policy-driven access patterns for time-bounded retrieval",
      "Hybrid cryptography for resilient communications",
    ],
  },
] as const;

const experienceTimeline = [
  {
    id: "research-assistant",
    title: "Research Assistant — Post-Quantum Cryptography",
    org: "PES University",
    focus: [
      "PQC research",
      "Cryptographic algorithms",
      "Security research",
      "Multimedia security",
      "Research experimentation",
      "Technical documentation",
      "Research proposal development",
    ],
  },
  {
    id: "ai-systems",
    title: "AI / ML and Security Systems",
    org: "Independent Research & Engineering",
    focus: [
      "AI-driven system design",
      "Secure architecture decisions",
      "Cloud-enabled data engineering",
      "Prototype validation",
      "Research-to-product translation",
    ],
  },
] as const;

const skillsMatrix = [
  {
    group: "AI / ML",
    items: ["Python", "TensorFlow", "Scikit-learn", "NLP", "Machine Learning", "Deep Learning"],
  },
  {
    group: "SECURITY",
    items: ["Cybersecurity", "Digital Forensics", "Secure Systems", "Access Control"],
  },
  {
    group: "PQC",
    items: ["ML-KEM", "ML-DSA", "SLH-DSA", "PQC", "Hybrid Cryptography"],
  },
  {
    group: "CLOUD",
    items: ["Azure", "Azure Data Factory", "Databricks", "ADLS", "Azure Synapse Analytics"],
  },
  {
    group: "DEVELOPMENT",
    items: ["Python", "Java", "C", "React", "Next.js", "Node.js", "Tailwind CSS", "APIs"],
  },
  {
    group: "DATA",
    items: ["MongoDB"],
  },
  {
    group: "BLOCKCHAIN",
    items: ["Ganache", "MetaMask", "Smart Contracts", "IPFS"],
  },
] as const;

const architectureLayers = [
  "USER",
  "APPLICATION",
  "INTELLIGENCE",
  "SECURITY",
  "CRYPTOGRAPHY",
  "DATA",
  "CLOUD",
] as const;

const currentExplorations = [
  "PQC",
  "AI SECURITY",
  "MULTIMEDIA SECURITY",
  "CLOUD SECURITY",
  "SECURE AI",
  "INTELLIGENT SYSTEMS",
] as const;

const missionLog = [
  {
    type: "Research",
    title: "Post-quantum security exploration",
    detail: "Investigating cryptographic directions for secure future systems.",
  },
  {
    type: "Projects",
    title: "Platform and system prototyping",
    detail: "Building secure applications across blockchain, cloud, and AI domains.",
  },
  {
    type: "Publications",
    title: "Research writing and technical documentation",
    detail: "Converting experiments into structured knowledge and proposals.",
  },
  {
    type: "Achievements",
    title: "Technical and academic milestones",
    detail: "Documented progress in research, design, and engineering delivery.",
  },
] as const;

const publications = [
  { id: "01", label: "Research Paper", meta: "Draft / Publication-ready", description: "Technical research focused on cryptographic and security problem spaces." },
  { id: "02", label: "Book Chapter", meta: "Planned / Editable", description: "A deeper discussion of secure AI and modern cryptographic systems." },
  { id: "03", label: "Technical Report", meta: "In progress", description: "System design documentation for research and engineering initiatives." },
  { id: "04", label: "Proposal", meta: "Editable", description: "Research proposal covering secure and intelligent system development." },
] as const;

export default function Home() {
  const [selectedDomain, setSelectedDomain] = useState(labNodes[0]);
  const [selectedProject, setSelectedProject] = useState(projectSystems[0]);
  const [selectedExperience, setSelectedExperience] = useState(experienceTimeline[0]);

  return (
    <main className="lab-shell">
      <div className="grid-overlay" />

      <header className="topbar">
        <div className="brand-mark">SUCHITRA</div>
        <nav className="nav-cluster" aria-label="Main navigation">
          <a href="#lab">LAB</a>
          <a href="#research">RESEARCH</a>
          <a href="#projects">PROJECTS</a>
          <a href="#about">ABOUT</a>
        </nav>
      </header>

      <section className="hero-panel">
        <div className="intro-copy">
          <p className="eyebrow">AI × SECURITY × SYSTEMS</p>
          <h1>Building Intelligent Systems. Securing What Comes Next.</h1>
          <p className="headline-copy">
            I work at the intersection of artificial intelligence, cybersecurity,
            post-quantum cryptography, cloud technologies, and software engineering,
            turning research ideas into practical and secure systems.
          </p>
          <div className="cta-row">
            <button type="button" className="primary-action">
              ENTER THE LAB →
            </button>
            <a href="#projects" className="secondary-action">
              VIEW SYSTEMS
            </a>
          </div>
        </div>

        <div className="identity-stack">
          <div className="avatar-card">
            <div className="avatar-frame">
              <Image src={profileImage} alt="Suchitra placeholder avatar" width={220} height={220} priority />
            </div>
            <div className="status-line">
              <span className="status-dot" />
              ONLINE
            </div>
          </div>

          <div className="identity-card">
            <div className="card-header">
              <span className="mini-label">IDENTITY CORE</span>
              <span className="mini-tag">RESEARCH ASSISTANT</span>
            </div>
            <h2>SUCHITRA</h2>
            <p>AI • SECURITY • PQC • CLOUD • DEVELOPMENT</p>
            <ul>
              <li>● RESEARCHING</li>
              <li>● BUILDING</li>
              <li>● LEARNING</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="lab" className="lab-core-section">
        <div className="section-heading">
          <p className="eyebrow">SECURE INTELLIGENCE LAB</p>
          <h2>Interactive research environment</h2>
        </div>

        <div className="lab-viewport">
          <div className="core-orbit">
            <div className="lab-core">
              <span>SECURE</span>
              <span>INTELLIGENCE</span>
              <span>CORE</span>
            </div>

            {labNodes.map((node, index) => {
              const angle = (index / labNodes.length) * Math.PI * 2 - Math.PI / 2;
              const x = Math.cos(angle) * 180;
              const y = Math.sin(angle) * 120;
              const isActive = node.id === selectedDomain.id;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedDomain(node)}
                  className={`lab-node ${node.accent} ${isActive ? "active" : ""}`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  aria-label={`Select ${node.name}`}
                >
                  {node.name}
                </button>
              );
            })}
          </div>

          <aside className="domain-panel">
            <p className="eyebrow">SELECTED DOMAIN</p>
            <h3>{selectedDomain.name}</h3>
            <p>{selectedDomain.description}</p>
            <div className="tag-list">
              {selectedDomain.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="research" className="research-section">
        <div className="section-heading">
          <p className="eyebrow">RESEARCH</p>
          <h2>Focused exploration areas</h2>
        </div>

        <div className="research-grid">
          {researchCards.map((card) => (
            <article key={card.title} className="research-card">
              <div className="card-index">{card.title.split(" ")[0]}</div>
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-heading">
          <p className="eyebrow">SYSTEM MODULES</p>
          <h2>Research-enabled product systems</h2>
        </div>

        <div className="project-layout">
          <div className="project-selector" aria-label="Project selection">
            {projectSystems.map((project) => (
              <button
                key={project.name}
                type="button"
                className={selectedProject.name === project.name ? "project-tab active" : "project-tab"}
                onClick={() => setSelectedProject(project)}
              >
                {project.name}
              </button>
            ))}
          </div>

          <article className="project-panel">
            <div className="project-header-row">
              <div>
                <p className="eyebrow">PROJECT</p>
                <h3>{selectedProject.name}</h3>
              </div>
              <span className="project-type">{selectedProject.type}</span>
            </div>

            <p className="project-body">{selectedProject.description}</p>

            <div className="flow-rail">
              {selectedProject.architecture.map((step, index) => (
                <div key={`${step}-${index}`} className="flow-step">
                  <span>{step}</span>
                  {index < selectedProject.architecture.length - 1 && <span className="flow-arrow">↓</span>}
                </div>
              ))}
            </div>

            <div className="stack-collection">
              {selectedProject.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="metrics-box">
              {selectedProject.metrics.map((metric) => (
                <p key={metric}>{metric}</p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-heading">
          <p className="eyebrow">ABOUT</p>
          <h2>How everything connects</h2>
        </div>

        <div className="architecture-diagram">
          {architectureLayers.map((layer, index) => (
            <div key={layer} className="architecture-layer">
              <div className="layer-label">{layer}</div>
              {index < architectureLayers.length - 1 && <span className="layer-arrow">↓</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading">
          <p className="eyebrow">SYSTEM CAPABILITIES</p>
          <h2>Interactive skills map</h2>
        </div>

        <div className="skills-grid">
          {skillsMatrix.map((group) => (
            <div key={group.group} className="skill-group">
              <h3>{group.group}</h3>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <div className="section-heading">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Research and engineering narrative</h2>
        </div>

        <div className="experience-layout">
          <div className="timeline-column">
            {experienceTimeline.map((item) => (
              <button
                key={item.id}
                type="button"
                className={selectedExperience.id === item.id ? "experience-node active" : "experience-node"}
                onClick={() => setSelectedExperience(item)}
              >
                <span>{item.title}</span>
                <small>{item.org}</small>
              </button>
            ))}
          </div>

          <article className="experience-detail">
            <p className="eyebrow">CURRENT FOCUS</p>
            <h3>{selectedExperience.title}</h3>
            <p className="org-name">{selectedExperience.org}</p>
            <ul>
              {selectedExperience.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="milestones-section">
        <div className="section-heading">
          <p className="eyebrow">MISSION LOG</p>
          <h2>Achievements and initiatives</h2>
        </div>

        <div className="mission-grid">
          {missionLog.map((entry) => (
            <article key={entry.title} className="mission-card">
              <span>{entry.type}</span>
              <h3>{entry.title}</h3>
              <p>{entry.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="publications-section">
        <div className="section-heading">
          <p className="eyebrow">RESEARCH OUTPUT</p>
          <h2>Publications and technical output</h2>
        </div>

        <div className="publication-list">
          {publications.map((paper) => (
            <button key={paper.id} type="button" className="paper-item">
              <span className="paper-id">[{paper.id}]</span>
              <div>
                <strong>{paper.label}</strong>
                <small>{paper.meta}</small>
              </div>
              <p>{paper.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="exploring-section">
        <div className="section-heading">
          <p className="eyebrow">CURRENTLY EXPLORING</p>
          <h2>Active research threads</h2>
        </div>

        <div className="explore-orbit">
          {currentExplorations.map((item, index) => (
            <span
              key={item}
              className="explore-node"
              style={{
                animationDelay: `${index * 0.18}s`,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <p className="eyebrow">HOW I WORK</p>
          <h2>Problem → research → build → validate</h2>
        </div>

        <div className="process-flow">
          {[
            "01 — UNDERSTAND",
            "02 — RESEARCH",
            "03 — BUILD",
            "04 — VALIDATE",
          ].map((step, index) => (
            <div key={step} className="process-step">
              <span>{step}</span>
              {index < 3 && <span className="flow-arrow">→</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-card">
          <p className="eyebrow">CONNECT TO THE LAB</p>
          <h2>Have an interesting research problem, technical challenge, or collaboration idea?</h2>
          <p>Let&apos;s connect.</p>
          <div className="contact-links">
            <a href="mailto:hello@suchitra.dev">Email</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://scholar.google.com" target="_blank" rel="noreferrer">Google Scholar</a>
          </div>
        </div>
      </section>

      <footer className="footer-bar">
        <div className="footer-brand">SUCHITRA</div>
        <p>AI × SECURITY × SYSTEMS</p>
        <p>Researching. Building. Securing.</p>
        <span>© 2026 Suchitra</span>
      </footer>
    </main>
  );
}
