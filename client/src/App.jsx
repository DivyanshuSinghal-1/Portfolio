
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const API_URL = "http://localhost:5000";

const projects = [
  {
    title: "Wealth Management Dashboard",
    description:
      "A dashboard project using Databricks, Node.js, Express and React to display client and SIP data.",
    tech: ["React", "Node.js", "Express", "Databricks"],
    github: "https://github.com/DivyanshuSinghal-1/wealth-mangement",
    demo: "#",
  },
  {
    title: "Amazon Clone",
    description:
      "A frontend e-commerce interface built to practice responsive layouts and reusable UI components.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DivyanshuSinghal-1",
    demo: "#",
  },
  {
    title: "Netflix Clone",
    description:
      "A streaming-platform-inspired frontend project focused on page layout and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DivyanshuSinghal-1",
    demo: "#",
  },
  {
    title: "Sonar Rock vs Mine Prediction",
    description:
      "A machine learning project that classifies sonar signals using a trained prediction model.",
    tech: ["Python", "Pandas", "Machine Learning"],
    github: "https://github.com/",
    demo: "#",
  },
];

const skills = [
  { category: "Programming", items: ["C", "C++", "Python", "JavaScript"] },
  { category: "Web Development", items: ["HTML", "CSS", "React", "Node.js"] },
  {
    category: "Computer Science",
    items: ["DSA", "DBMS", "Operating Systems", "DAA"],
  },
  {
    category: "Data & AI",
    items: ["SQL", "Pandas", "Machine Learning", "Databricks"],
  },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel"] },
];

const education = [
  {
    degree: "B.Tech",
    institution: "JK Lakshmipat University, Jaipur",
    period: "2024 – Present",
    description:
      "Studying computer science, programming, data structures and software development.",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio light"}>
      <header className="navbar">
        <a className="brand" href="#home">
          D<span>.</span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, link]) => (
            <a key={label} href={link} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀" : "☾"}
          </button>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-container" id="home">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="availability">
              <span className="availability-dot" />
              Computer Science Student
            </span>

            <p className="hero-intro">HELLO, I'M</p>
            <h1>
              Divyanshu
              <br />
              <span>Singhal.</span>
            </h1>

            <h2 className="hero-subtitle">
              Aspiring Software Developer & AI Enthusiast
            </h2>

            <p className="hero-description">
              I build web experiences, explore data and machine learning, and
              enjoy solving problems through code.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>
              <a className="btn btn-outline" href="#contact">
                Contact Me
              </a>
            </div>

            {/* RESUME DOWNLOAD BUTTONS */}
            <div className="resume-buttons">
              <a
                className="btn btn-primary"
                href="/resume.pdf"
                download="Divyanshu_Singhal_Resume.pdf"
              >
                Download Resume (PDF) ↓
              </a>

              <a
                className="btn btn-outline"
                href="/resume.docx"
                download="Divyanshu_Singhal_Resume.docx"
              >
                Download Resume (DOCX) ↓
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/DivyanshuSinghal-1"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/divyanshu-singhal-323170321"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="mailto:divyanshusinghal2006@gmail.com">Email ↗</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-symbol">&lt;/&gt;</div>
              <p className="profile-name">Divyanshu Singhal</p>
              <p className="profile-role">Code · Learn · Build</p>
              <div className="profile-tags">
                <span>Web</span>
                <span>AI/ML</span>
                <span>DSA</span>
              </div>
            </div>
            <div className="floating-card floating-top">
              <span>✦</span> Problem Solver
            </div>
            <div className="floating-card floating-bottom">
              <span>⌘</span> Developer
            </div>
          </motion.div>

          <a className="scroll-indicator" href="#about">
            ↓ <span>SCROLL TO EXPLORE</span>
          </a>
        </section>

        {/* ABOUT */}
        <section className="section-container section" id="about">
          <SectionTitle
            eyebrow="GET TO KNOW ME"
            title="About Me"
            description="A little about my background and what drives me."
          />

          <div className="about-grid">
            <div className="about-text">
              <h3>Curious mind. Practical builder.</h3>
              <p>
                I'm a B.Tech student at JK Lakshmipat University, interested in
                software development, artificial intelligence and data-driven
                applications.
              </p>
              <p>
                I enjoy turning ideas into working projects, strengthening my
                programming fundamentals and learning technologies by building
                with them.
              </p>
              <p>
                My current focus is improving my skills in C++, data structures
                and algorithms, frontend development, Python and machine
                learning.
              </p>
              <a className="text-link" href="#contact">
                Let's connect <span>→</span>
              </a>
            </div>

            <div className="about-highlights">
              <article className="highlight-card">
                <span className="highlight-icon">⌘</span>
                <h3>Development</h3>
                <p>Building useful web applications and interfaces.</p>
              </article>
              <article className="highlight-card">
                <span className="highlight-icon">◎</span>
                <h3>Problem Solving</h3>
                <p>Practising algorithms and core CS concepts.</p>
              </article>
              <article className="highlight-card">
                <span className="highlight-icon">✳</span>
                <h3>AI & Data</h3>
                <p>Exploring machine learning and data platforms.</p>
              </article>
              <article className="highlight-card">
                <span className="highlight-icon">↗</span>
                <h3>Continuous Learning</h3>
                <p>Learning through hands-on projects and practice.</p>
              </article>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section-container section" id="skills">
          <SectionTitle
            eyebrow="WHAT I WORK WITH"
            title="Skills & Technologies"
            description="Technologies and concepts I am learning and using."
          />

          <div className="skills-grid">
            {skills.map((group, index) => (
              <motion.article
                className="skill-card"
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{group.category}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section-container section" id="projects">
          <SectionTitle
            eyebrow="SELECTED WORK"
            title="Projects"
            description="A selection of projects I've worked on or explored."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="project-top">
                  <span className="project-icon">&lt;/&gt;</span>
                  <span className="project-index">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="project-note">
            Replace the sample GitHub and demo links with your actual project
            URLs before publishing.
          </p>
        </section>

        {/* EDUCATION */}
        <section className="section-container section" id="education">
          <SectionTitle
            eyebrow="MY JOURNEY"
            title="Education"
            description="My academic background."
          />

          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item" key={item.degree}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.degree}</h3>
                  <h4>{item.institution}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="section-container section contact-section"
          id="contact"
        >
          <SectionTitle
            eyebrow="GET IN TOUCH"
            title="Let's Connect"
            description="Have a project idea or want to talk about technology? Reach out."
          />

          <div className="contact-card">
            <div>
              <p className="contact-kicker">HAVE SOMETHING IN MIND?</p>
              <h3>Let's build something meaningful.</h3>
              <p>
                I'm open to connecting with fellow developers, discussing
                projects and exploring learning opportunities.
              </p>
            </div>

            <a
              className="btn btn-primary"
              href="mailto:divyanshusinghal2006@gmail.com"
            >
              <span>✉</span> Email Me
            </a>
          </div>

          <form
            className="contact-form"
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const formData = new FormData(form);

              const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
              };

              try {
                const response = await fetch(`${API_URL}/api/contact`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });

                const result = await response.json();

                if (!response.ok) {
                  alert(result.message || "Could not send message");
                  return;
                }

                alert("Message submitted successfully!");
                form.reset();
              } catch (error) {
                alert(
                  "Cannot connect to server. Make sure the backend is running."
                );
              }
            }}
          >
            <label>
              Your Name
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </label>

            <label>
              Your Email
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </label>

            <label>
              Your Message
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                required
              />
            </label>

            <button className="btn btn-primary" type="submit">
              Send Message ↗
            </button>
          </form>

          <div className="contact-links">
            <a href="mailto:divyanshusinghal2006@gmail.com">✉ Email</a>
            <a
              href="https://github.com/DivyanshuSinghal-1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/divyanshu-singhal-323170321"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="brand" href="#home">
          D<span>.</span>
        </a>
        <p>Designed & built by Divyanshu Singhal.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
