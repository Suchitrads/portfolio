"use client";

import Image from "next/image";
import { useState, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
import {
  journeyEntries,
  journeyResearchAreas,
  journeyTabOptions,
  type JourneyEntry,
  type JourneyId,
  type JourneyTab,
} from "./journey-data";
import { projects, type Project } from "./project-data";
import { milestones, type Milestone } from "./milestone-data";

const profileImage = "/images/profile-avatar.png";
const contactLinks = {
  email: "dssuchitra0710@gmail.com",
  phone: "+91 8919781966",
  github: "https://github.com/Suchitrads",
  linkedin: "https://www.linkedin.com/in/dssuchitra",
};
const emailHref = `mailto:${contactLinks.email}`;
const phoneHref = `https://wa.me/${contactLinks.phone.replace(/\D/g, "")}`;
const dialHref = `tel:${contactLinks.phone}`;

function handlePhoneLinkClick(event: ReactMouseEvent<HTMLAnchorElement>) {
  const isPhone = /iPhone|iPod|Android.*Mobile|Windows Phone|IEMobile|BlackBerry/i.test(navigator.userAgent);
  if (!isPhone) return;

  event.preventDefault();
  window.location.href = dialHref;
}

type DomainId = "cloud" | "ai" | "development" | "security" | "pqc" | "blockchain" | "research";
type PortfolioView = "profile" | "journey" | "projects" | "milestones";
type DialogType =
  | { type: "about" }
  | { type: "domain"; id: DomainId }
  | { type: "projects" }
  | { type: "project"; id: Project["id"] }
  | { type: "milestone"; id: Milestone["id"] }
  | { type: "journey"; id: JourneyId }
  | { type: "contact" }
  | { type: "resume" };

type DomainNode = {
  id: DomainId;
  label: string;
  icon: string;
  accent: "cyan" | "green" | "violet" | "gray";
  position: { left: string; top: string };
  description: string;
  focus: string[];
  technologies: string[];
};

const domainNodes: DomainNode[] = [
  {
    id: "cloud",
    label: "CLOUD",
    icon: "☁",
    accent: "cyan",
    position: { left: "19%", top: "27%" },
    description: "Working with cloud and data technologies for scalable, data-driven, and secure systems.",
    focus: ["Cloud Infrastructure", "Data Engineering", "Scalable Systems", "Secure Data"],
    technologies: ["Microsoft Azure", "Azure Data Factory", "Databricks", "ADLS", "Azure Synapse Analytics"],
  },
  {
    id: "ai",
    label: "AI / ML",
    icon: "✦",
    accent: "cyan",
    position: { left: "50%", top: "13%" },
    description: "I work with machine learning, deep learning, NLP, and intelligent systems, with an interest in applying AI to practical and security-focused problems.",
    focus: ["Machine Learning", "Deep Learning", "NLP", "AI Security", "Intelligent Systems"],
    technologies: ["Python", "TensorFlow", "Scikit-learn"],
  },
  {
    id: "development",
    label: "DEVELOPMENT",
    icon: "</>",
    accent: "gray",
    position: { left: "81%", top: "27%" },
    description: "I build practical web applications, backend systems, APIs, and real-time applications, combining modern frontend and backend technologies.",
    focus: ["Frontend Development", "Backend Development", "APIs", "Real-Time Applications", "Full-Stack Systems"],
    technologies: ["Python", "Java", "C", "React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "Socket.IO"],
  },
  {
    id: "security",
    label: "SECURITY",
    icon: "◈",
    accent: "green",
    position: { left: "20%", top: "66%" },
    description: "My security work focuses on secure systems, digital evidence, access control, integrity, and security-oriented application design.",
    focus: ["Cybersecurity", "Digital Forensics", "Secure Systems", "Access Control", "Evidence Integrity"],
    technologies: ["Cybersecurity", "Digital Forensics", "Secure Systems", "Access Control", "Evidence Integrity"],
  },
  {
    id: "pqc",
    label: "PQC",
    icon: "◎",
    accent: "violet",
    position: { left: "80%", top: "66%" },
    description: "My research explores cryptographic approaches designed to address security challenges from future quantum computing and their practical application to secure systems.",
    focus: ["Post-Quantum Cryptography", "PQC Migration", "Hybrid Cryptography", "Secure Key Management", "Multimedia Security"],
    technologies: ["ML-KEM", "ML-DSA", "SLH-DSA", "Hybrid Encryption"],
  },
  {
    id: "blockchain",
    label: "BLOCKCHAIN",
    icon: "◉",
    accent: "cyan",
    position: { left: "33%", top: "86%" },
    description: "I use blockchain and decentralized technologies to build systems requiring traceability, integrity, and tamper-evident records.",
    focus: ["Smart Contracts", "Blockchain Records", "Decentralized Storage", "Evidence Integrity", "Chain of Custody"],
    technologies: ["Ethereum", "Solidity", "Ganache", "MetaMask", "IPFS"],
  },
  {
    id: "research",
    label: "RESEARCH",
    icon: "✧",
    accent: "violet",
    position: { left: "67%", top: "86%" },
    description: "My research interests sit at the intersection of AI, cybersecurity, post-quantum cryptography, cloud technologies, multimedia security, and secure intelligent systems.",
    focus: ["Post-Quantum Cryptography", "AI / ML", "Cybersecurity", "Multimedia Security", "Cloud Security", "Blockchain", "Secure Intelligent Systems"],
    technologies: ["Post-Quantum Cryptography", "AI / ML", "Cybersecurity", "Multimedia Security", "Cloud Security"],
  },
];

function DomainIcon({ id }: { id: DomainId }) {
  const iconPaths: Record<DomainId, ReactNode> = {
    cloud: <path d="M19 18H7a4 4 0 0 1-.5-8A6.5 6.5 0 0 1 19 8.5a4.75 4.75 0 0 1 0 9.5Z" />,
    ai: <><path d="M12 5a3 3 0 0 0-5.8 1.2A3.5 3.5 0 0 0 4 12a3.5 3.5 0 0 0 2.2 5.8A3 3 0 0 0 12 19Z" /><path d="M12 5a3 3 0 0 1 5.8 1.2A3.5 3.5 0 0 1 20 12a3.5 3.5 0 0 1-2.2 5.8A3 3 0 0 1 12 19ZM8 9h1m-2 5h2m7-5h-1m2 5h-2m-3-8v13" /></>,
    development: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-12-2 14" /></>,
    security: <><path d="M12 3 20 6v5c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6l8-3Z" /><path d="m9 12 2 2 4-4" /></>,
    pqc: <><ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(45 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(-45 12 12)" /><circle cx="12" cy="12" r="1.5" /></>,
    blockchain: <><rect x="3" y="12" width="7" height="8" rx="1" /><rect x="14" y="4" width="7" height="7" rx="1" /><rect x="14" y="15" width="7" height="5" rx="1" /><path d="M10 16h4m0-8h-4v8" /></>,
    research: <><path d="M9 3h6m-5 0v6l-5.2 9.2A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.8L14 9V3" /><path d="M8 16h8m-6-4h4" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[id]}
    </svg>
  );
}

const projectById = Object.fromEntries(projects.map((project) => [project.id, project])) as Record<string, Project>;

export default function Home() {
  const [dialog, setDialog] = useState<DialogType | null>(null);
  const [selectedDomainId, setSelectedDomainId] = useState<DomainId>("ai");
  const [enteredLab, setEnteredLab] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState<PortfolioView>("profile");
  const [journeyTab, setJourneyTab] = useState<JourneyTab>("overview");

  const openDomain = (id: DomainId) => {
    setSelectedDomainId(id);
    setDialog({ type: "domain", id });
  };

  const closeDialog = () => setDialog(null);
  const backToProjects = () => setDialog({ type: "projects" });
  const closeMenu = () => setMenuOpen(false);

  const openView = (view: PortfolioView) => {
    setActiveView(view);
    if (view === "journey") {
      setJourneyTab("overview");
    }
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderJourneyDialog = (entry: JourneyEntry) => {
    const tabConfig = journeyResearchAreas[journeyTab];

    return (
      <div className="modal-backdrop" onClick={closeDialog}>
        <div className="modal-card wide journey-modal" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="close-button" onClick={closeDialog} aria-label="Close journey details">
            ×
          </button>
          <div className="modal-kicker">{entry.type.toUpperCase()}</div>
          <div className="journey-modal-header">
            <div>
              <h3>{entry.title}</h3>
              <p className="subtitle">{entry.start} — {entry.end}</p>
            </div>
            {entry.current && <span className="current-badge">CURRENT</span>}
          </div>
          <p className="modal-copy">{entry.institution}</p>
          <p className="journey-description">{entry.description}</p>

          {entry.id === "research-assistant" ? (
            <>
              <div className="journey-tabs" aria-label="Journey areas">
                {journeyTabOptions.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`journey-tab ${journeyTab === tab.id ? "active" : ""}`}
                    onClick={() => setJourneyTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="journey-tab-panel">
                <div className="journey-tab-header">
                  <span className="journey-tab-label">{tabConfig.headline}</span>
                </div>
                <p>{tabConfig.detail}</p>
                <ul>
                  {tabConfig.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="focus-list">
              <div className="focus-label">FOCUS AREAS</div>
              <div className="tag-cloud">
                {entry.focus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          )}

          <div className="focus-list">
            <div className="focus-label">{entry.id === "research-assistant" ? "CURRENT AREAS" : "FOCUS AREAS"}</div>
            <div className="tag-cloud">
              {(entry.technologies ?? entry.focus).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDialog = () => {
    if (!dialog) return null;

    if (dialog.type === "about") {
      return (
        <div className="modal-backdrop" onClick={closeDialog}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-button" onClick={closeDialog} aria-label="Close dialog">
              ×
            </button>
            <div className="modal-header-row">
              <div className="avatar-mini">
                <Image src={profileImage} alt="Suchitra profile avatar" width={90} height={90} priority />
              </div>
              <div>
                <div className="modal-kicker">ABOUT</div>
                <h3>SUCHITRA</h3>
                <p>RESEARCH ASSISTANT · RESEARCHER · ENGINEER</p>
              </div>
            </div>
            <p className="modal-copy">
              I work at the intersection of AI/ML, cybersecurity, post-quantum cryptography, cloud technologies, and software engineering, turning research ideas into practical and secure systems.
            </p>
            <div className="tag-cloud">
              <span>AI / ML</span>
              <span>CYBERSECURITY</span>
              <span>PQC</span>
              <span>CLOUD</span>
              <span>SOFTWARE ENGINEERING</span>
            </div>
          </div>
        </div>
      );
    }

    if (dialog.type === "contact") {
      return (
        <div className="modal-backdrop" onClick={closeDialog}>
          <div className="modal-card narrow" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-button" onClick={closeDialog} aria-label="Close dialog">
              ×
            </button>
            <div className="modal-kicker">CONTACT</div>
            <h3>LET&apos;S CONNECT</h3>
            <p className="modal-copy">
              Interested in research, AI, cybersecurity, cryptography, cloud technologies, or building secure systems?
            </p>
            <div className="contact-list">
              <a href={emailHref} title={`Email ${contactLinks.email}`}><span aria-hidden="true">✉︎</span> Email</a>
              <a href={phoneHref} onClick={handlePhoneLinkClick} target="_blank" rel="noopener noreferrer" title={`Call ${contactLinks.phone} on phone or open WhatsApp on desktop`}><span aria-hidden="true">☎︎</span> Phone</a>
              <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">in</span> LinkedIn</a>
              <a href={contactLinks.github} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">GH</span> GitHub</a>
            </div>
          </div>
        </div>
      );
    }

    if (dialog.type === "resume") {
      return (
        <section className="resume-viewer-backdrop" role="dialog" aria-modal="true" aria-label="Resume PDF viewer">
          <header className="resume-toolbar">
            <button className="resume-back" type="button" onClick={closeDialog}>
              <span aria-hidden="true">←</span> BACK TO PORTFOLIO
            </button>
            <span className="resume-file-label">SUCHITRA · RESUME</span>
            <a className="resume-download" href="/Suchitra_resume.pdf" download="Suchitra-Resume.pdf">
              DOWNLOAD RESUME <span aria-hidden="true">↓</span>
            </a>
          </header>
          <iframe className="resume-document" src="/Suchitra_resume.pdf#view=FitH" title="Suchitra resume PDF" />
        </section>
      );
    }

    if (dialog.type === "projects") {
      return (
        <div className="modal-backdrop" onClick={closeDialog}>
          <div className="modal-card wide project-explorer" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-button" onClick={closeDialog} aria-label="Close dialog">
              ×
            </button>
            <div className="explorer-heading">
              <div><div className="modal-kicker">PROJECT WORKSTATION</div><h3>PROJECTS</h3></div>
              <span>{String(projects.length).padStart(2, "0")} SYSTEMS</span>
            </div>
            <div className="project-module-list">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  className="project-module"
                  onClick={() => setDialog({ type: "project", id: project.id })}
                >
                  <span className="project-module-number">{project.number}</span>
                  <span className="project-module-copy"><strong>{project.name}</strong><small>{project.categories.join(" · ")}</small></span>
                  <span className="project-module-arrow" aria-hidden="true">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (dialog.type === "journey") {
      const selectedJourney = journeyEntries.find((entry) => entry.id === dialog.id) ?? journeyEntries[0];
      return renderJourneyDialog(selectedJourney);
    }

    if (dialog.type === "project") {
      const project = projectById[dialog.id];
      return (
        <div className="modal-backdrop" onClick={backToProjects}>
          <div className="modal-card wide" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-button" onClick={backToProjects} aria-label="Back to projects">
              ←
            </button>
            <div className="modal-kicker">PROJECT {project.number}</div>
            <h3>{project.name}</h3>
            <p className="subtitle">{project.subtitle}</p>
            <p className="modal-copy">{project.description}</p>
            <div className="focus-list">
              <div className="focus-label">SKILLS / TECHNOLOGIES</div>
              <div className="tag-cloud">
                {project.skills.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="project-source">
              <span className="focus-label">PUBLISHED LINK</span>
              <a href={project.publishedLink} target="_blank" rel="noopener noreferrer">Open published project ↗</a>
            </div>
          </div>
        </div>
      );
    }

    if (dialog.type === "milestone") {
      const milestone = milestones.find((item) => item.id === dialog.id) ?? milestones[0];
      return (
        <div className="modal-backdrop" onClick={closeDialog}>
          <div className="modal-card wide milestone-dialog" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-button" onClick={closeDialog} aria-label="Close milestone dialog">×</button>
            <div className="milestone-dialog-image"><Image src={milestone.image} alt={milestone.imageAlt} fill sizes="(max-width: 760px) calc(100vw - 72px), 560px" /></div>
            <div className="modal-kicker">MILESTONE {milestone.number} · {milestone.label}</div>
            <h3>{milestone.title}</h3>
            <p className="modal-copy">{milestone.description}</p>
          </div>
        </div>
      );
    }

    const activeDomain = domainNodes.find((node) => node.id === dialog.id) ?? domainNodes[0];
    return (
      <div className="modal-backdrop" onClick={closeDialog}>
        <div className="modal-card" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="close-button" onClick={closeDialog} aria-label="Close dialog">
            ×
          </button>
          <div className="modal-header-row">
            <div className="modal-badge">{activeDomain.icon}</div>
            <div>
              <div className="modal-kicker">{activeDomain.label}</div>
              <h3>{activeDomain.label}</h3>
            </div>
          </div>
          <p className="modal-copy">{activeDomain.description}</p>
          <div className="focus-list">
            <div className="focus-label">FOCUS</div>
            <ul>
              {activeDomain.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="focus-list">
            <div className="focus-label">TECHNOLOGIES</div>
            <div className="tag-cloud">
              {activeDomain.technologies.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="portfolio-app">
      <div className="ambient-grid" aria-hidden="true">
        <span className="ambient-node node-one" />
        <span className="ambient-node node-two" />
        <span className="ambient-node node-three" />
        <span className="ambient-node node-four" />
      </div>

      {!enteredLab && (
        <section className="welcome-screen" aria-label="Welcome to AI and Secure Systems">
          <div className="welcome-orbit orbit-a" />
          <div className="welcome-orbit orbit-b" />
          <div className="welcome-content">
            <p className="welcome-identity"><span /> RESEARCH · ENGINEERING · INNOVATION</p>
            <h1 className="welcome-title">
              <span>DIGITAL</span>
              <span className="gradient-text">PORTFOLIO</span>
            </h1>
            <p className="welcome-identity">SUCHITRA — RESEARCH ASSISTANT · AI · SECURITY · CRYPTOGRAPHY · CLOUD</p>
            <p className="welcome-tagline">Building Intelligent Systems. Securing What Comes Next.</p>
            <button className="enter-button" type="button" onClick={() => setEnteredLab(true)}>
              EXPLORE PROFILE <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      )}

      <div className={`site-content ${enteredLab ? "is-entered" : ""}`}>
        <header className="site-header">
          <a className="site-brand" href="#lab" aria-label="Suchitra — AI and Secure Systems profile" onClick={closeMenu}>
            <span className="brand-emblem" aria-hidden="true">◈</span>
            <span>SUCHITRA</span>
          </a>
          <nav className={`desktop-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
            <button className={`section-nav ${activeView === "profile" ? "active" : ""}`} type="button" onClick={() => openView("profile")}>PROFILE</button>
            <button className={`section-nav ${activeView === "journey" ? "active" : ""}`} type="button" onClick={() => openView("journey")}>JOURNEY</button>
            <button className={`section-nav ${activeView === "projects" ? "active" : ""}`} type="button" onClick={() => openView("projects")}>PROJECTS</button>
            <button className={`section-nav ${activeView === "milestones" ? "active" : ""}`} type="button" onClick={() => openView("milestones")}>MILESTONES</button>
            <button className="mobile-menu-action" type="button" onClick={() => { closeMenu(); setDialog({ type: "contact" }); }}>LET&apos;S CONNECT</button>
            <button className="mobile-menu-action" type="button" onClick={() => { closeMenu(); setDialog({ type: "resume" }); }}>VIEW FULL RESUME</button>
          </nav>
          <div className="header-actions">
            <button className="header-action contact-action" type="button" onClick={() => setDialog({ type: "contact" })}>LET&apos;S CONNECT</button>
            <button className="header-action resume-action" type="button" onClick={() => setDialog({ type: "resume" })}>RESUME</button>
          </div>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <span /> <span /> <span />
          </button>
        </header>

        {activeView === "profile" && <>
        <section className="hero-section content-width" id="lab">
          <div className="hero-copy">
            <div className="identity-panel">
              <button className="identity-avatar" type="button" onClick={() => setDialog({ type: "about" })} aria-label="Open identity card">
                <Image src={profileImage} alt="Suchitra researcher avatar" width={96} height={96} priority />
                <span>TAP TO EXPAND</span>
              </button>
            </div>
            <div className="hero-text">
              <p className="eyebrow">RESEARCH ASSISTANT · AI · SECURITY · CRYPTOGRAPHY · CLOUD</p>
              <h2>SUCHITRA</h2>
              <p className="hero-tagline">Building Intelligent Systems. Securing What Comes Next.</p>
              <p className="hero-description">I work at the intersection of artificial intelligence, cybersecurity, post-quantum cryptography, cloud technologies, and software engineering, turning research ideas into practical and secure systems.</p>
              <div className="role-chips"><span>RESEARCHER</span><span>ENGINEER</span><span>BUILDER</span></div>
            </div>
          </div>

          <div className="domain-browser" id="domains">
            <div className="core-map" aria-label="Intelligence Core connected to research domains">
              <svg className="map-connections" viewBox="0 0 1000 640" preserveAspectRatio="none" aria-hidden="true">
                {domainNodes.map((node) => (
                  <line
                    key={node.id}
                    x1="500"
                    y1="320"
                    x2={String(Number.parseFloat(node.position.left) * 10)}
                    y2={String(Number.parseFloat(node.position.top) * 6.4)}
                    className={`connection-${node.accent}`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                ))}
              </svg>
              <div className="map-orbit map-orbit-primary" aria-hidden="true" />
              <div className="map-orbit map-orbit-secondary" aria-hidden="true" />
              <button className="map-core" type="button" onClick={() => setDialog({ type: "about" })} aria-label="Open Intelligence Core profile">
                <span className="map-core-symbol" aria-hidden="true">◉</span>
                <span>INTELLIGENCE<br />CORE</span>
              </button>
              {domainNodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  className={`map-node map-node-${node.id} accent-${node.accent} ${selectedDomainId === node.id ? "selected" : ""}`}
                  style={node.position}
                  onClick={() => openDomain(node.id)}
                  onMouseEnter={() => setSelectedDomainId(node.id)}
                  aria-label={`${node.label}: ${node.description}`}
                >
                  <span className="map-node-icon"><DomainIcon id={node.id} /></span>
                  <span className="map-node-label">{node.label}</span>
                  <span className="map-node-tooltip" role="tooltip">{node.description}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
        <div className="research-ticker" aria-label="Research and technology topics">
          <div className="ticker-track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy}>
                {["AI / ML", "CLOUD INFRASTRUCTURE", "CYBERSECURITY", "POST-QUANTUM CRYPTOGRAPHY", "SOFTWARE DEVELOPMENT", "BLOCKCHAIN", "DATA ENGINEERING", "SECURE SYSTEMS"].map((item) => <span key={item}><i>◆</i>{item}</span>)}
              </div>
            ))}
          </div>
        </div>
        </>}

        {activeView === "journey" && (
          <section className="portfolio-view content-width journey-view" aria-labelledby="journey-title">
            <div className="view-heading journey-heading">
              <p className="eyebrow">CAREER / ACADEMIC TIMELINE</p>
              <h1 id="journey-title">MY JOURNEY</h1>
              <p>FOUNDATION → SPECIALIZATION → RESEARCH</p>
            </div>

            <div
              className="journey-layout"
              aria-label="Professional journey timeline"
            >
              <div className="journey-timeline" aria-label="Journey timeline list">
                {journeyEntries.map((entry, index) => {
                  const side = index % 2 === 0 ? "left" : "right";

                  return (
                    <button
                      key={entry.id}
                      type="button"
                      className={`journey-node ${side} ${entry.current ? "is-current" : ""}`}
                      style={{ animationDelay: `${index * 160}ms` }}
                      onClick={() => {
                        setJourneyTab("overview");
                        setDialog({ type: "journey", id: entry.id });
                      }}
                      aria-label={`${entry.title} details`}
                    >
                      <span className="journey-date">{entry.start} — {entry.end}</span>
                      <span className="journey-title">{entry.title}</span>
                      <span className="journey-subtitle">{entry.subtitle}</span>
                      <span className="journey-phase">{entry.phase}</span>
                      {entry.current && <span className="journey-current">● CURRENT</span>}
                    </button>
                  );
                })}
              </div>

            </div>
          </section>
        )}

        {activeView === "projects" && (
          <section className="portfolio-view content-width" aria-labelledby="projects-title">
            <div className="view-heading">
              <p className="eyebrow">SELECTED BUILDS // SYSTEMS IN MOTION</p>
              <h1 id="projects-title">Projects</h1>
            </div>
            <div className="projects-workstation">
              <button className="project-laptop" type="button" onMouseEnter={() => setDialog({ type: "projects" })} onClick={() => setDialog({ type: "projects" })} aria-label="Open Projects workstation">
                <span className="laptop-screen">
                  <span className="laptop-screen-line">PROJECTS</span>
                  <span className="laptop-cursor" aria-hidden="true">_</span>
                </span>
                <span className="laptop-base" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>
                <span className="laptop-label">PROJECT ARCHIVE · {String(projects.length).padStart(2, "0")} SYSTEMS</span>
              </button>
            </div>
          </section>
        )}

        {activeView === "milestones" && (
          <section className="portfolio-view content-width" aria-labelledby="milestones-title">
            <div className="view-heading">
              <p className="eyebrow">MILESTONES // PROOF OF PRACTICE</p>
              <h1 id="milestones-title">Milestones</h1>
              <p>Selected moments of technical performance, teamwork, and applied problem solving.</p>
            </div>
            <div className="milestone-grid">
              {milestones.map((milestone) => (
                <button className="milestone-card" type="button" key={milestone.id} onClick={() => setDialog({ type: "milestone", id: milestone.id })}>
                  <span className="milestone-card-image"><Image src={milestone.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" /></span>
                  <span className="milestone-card-content"><span className="experience-index">{milestone.number} / {milestone.label}</span><strong>{milestone.title}</strong><span>{milestone.description}</span><i>OPEN MILESTONE ↗</i></span>
                </button>
              ))}
            </div>
          </section>
        )}

        <footer className="site-footer content-width">
          <div className="footer-bottom">
            <span>© 2026 Suchitra</span>
            <div className="footer-links" aria-label="Contact links">
              <a href={emailHref} aria-label={`Email ${contactLinks.email}`} title={`Email ${contactLinks.email}`}>✉︎</a>
              <a href={phoneHref} onClick={handlePhoneLinkClick} target="_blank" rel="noopener noreferrer" aria-label={`Call ${contactLinks.phone} on phone or open WhatsApp on desktop`} title={`Call or WhatsApp ${contactLinks.phone}`}>☎︎</a>
              <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile" title="LinkedIn">in</a>
              <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile" title="GitHub">GH</a>
            </div>
            <span>AI &amp; SECURE SYSTEMS</span>
          </div>
        </footer>
      </div>

      
      {renderDialog()}
    </main>
  );
}
