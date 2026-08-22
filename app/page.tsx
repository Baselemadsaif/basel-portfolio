const stats = [
  { value: "04+", label: "Years of growth" },
  { value: "12", label: "Certificates earned" },
  { value: "08", label: "Core strengths" },
];

const experience = [
  {
    period: "2024 TO PRESENT",
    role: "Operations & Project Specialist",
    company: "Independent · Amman, Jordan",
    detail:
      "Turning evolving ideas into organized plans, aligning people and priorities, and moving work from intention to delivery.",
    skills: ["Project planning", "Problem solving", "Stakeholder support"],
  },
  {
    period: "2022 TO 2024",
    role: "Team & Client Support",
    company: "Cross-functional environment",
    detail:
      "Supported day-to-day delivery with calm communication, structured follow-through, and a strong eye for what people need next.",
    skills: ["Communication", "Documentation", "Coordination"],
  },
];

const certificates = [
  {
    number: "01",
    year: "2026",
    title: "Project Management Foundations",
    issuer: "Professional development",
    detail: "Planning, prioritization, risk awareness, and dependable project delivery.",
  },
  {
    number: "02",
    year: "2025",
    title: "Data & Digital Literacy",
    issuer: "Continuing education",
    detail: "Using digital tools and evidence to make clearer, faster decisions.",
  },
  {
    number: "03",
    year: "2025",
    title: "Effective Communication",
    issuer: "Professional development",
    detail: "Clear writing, thoughtful collaboration, and audience-aware presentation.",
  },
];

const knowledge = [
  {
    number: "01",
    title: "Project thinking",
    copy: "I break ambitious outcomes into practical steps, visible priorities, and achievable milestones.",
    topics: ["Planning", "Prioritization", "Delivery"],
  },
  {
    number: "02",
    title: "Digital fluency",
    copy: "I learn tools quickly and use technology to simplify work, organize information, and reveal insights.",
    topics: ["Research", "Digital tools", "Data literacy"],
  },
  {
    number: "03",
    title: "People & communication",
    copy: "I listen carefully, write clearly, and help different perspectives move toward shared understanding.",
    topics: ["Collaboration", "Writing", "Presentation"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="Basel home">B.</a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#certificates">Certificates</a>
          <a href="#knowledge">Knowledge</a>
        </div>
        <a className="nav-cta" href="mailto:hello@example.com">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="eyebrow"><span /> PORTFOLIO · 2026</div>
        <h1>I turn knowledge<br />into <em>impact.</em></h1>
        <p className="hero-copy">
          I&apos;m Basel, a curious professional focused on thoughtful work,
          continuous learning, and results that speak clearly.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#experience">Explore my work <span>↓</span></a>
          <a className="text-link" href="#certificates">View certificates <span>↗</span></a>
        </div>

        <div className="stats" aria-label="Career highlights">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="vertical-note">BASED IN AMMAN · AVAILABLE WORLDWIDE</div>
      </section>

      <section className="statement section-shell" aria-labelledby="statement-title">
        <p className="section-kicker">/ A QUICK INTRODUCTION</p>
        <div>
          <h2 id="statement-title">Curiosity is my starting point.<br /><span>Useful work is the goal.</span></h2>
          <p>
            I bring structure to complexity and momentum to good ideas. My work sits at the intersection
            of people, process, and continuous learning. Every project is a chance to make
            something clearer, stronger, and more useful.
          </p>
        </div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">/ 01 EXPERIENCE</p>
              <h2 id="experience-title">Where I&apos;ve made<br /><span>things happen.</span></h2>
            </div>
            <p className="section-intro">A career built through responsibility, collaboration, and the habit of leaving systems better than I found them.</p>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.period}>
                <p className="period">{item.period}</p>
                <div className="experience-main">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                </div>
                <div className="experience-detail">
                  <p>{item.detail}</p>
                  <div className="tag-list">
                    {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="edit-note">This portfolio is ready for your exact roles, dates, and achievements.</p>
        </div>
      </section>

      <section className="certificates-section section-shell" id="certificates" aria-labelledby="certificates-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">/ 02 CERTIFICATES</p>
            <h2 id="certificates-title">Proof of<br /><span>progress.</span></h2>
          </div>
          <p className="section-intro">Learning that moves beyond theory. These selected credentials support the way I think, collaborate, and deliver.</p>
        </div>
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.number}>
              <div className="certificate-top">
                <span>{certificate.number}</span>
                <span>{certificate.year}</span>
              </div>
              <div className="certificate-mark" aria-hidden="true">✓</div>
              <p className="issuer">{certificate.issuer}</p>
              <h3>{certificate.title}</h3>
              <p className="certificate-detail">{certificate.detail}</p>
              <a href="#contact" aria-label={`Add credential for ${certificate.title}`}>Add credential <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="knowledge-section" id="knowledge" aria-labelledby="knowledge-title">
        <div className="knowledge-orbit" aria-hidden="true" />
        <div className="section-shell">
          <div className="section-heading light-heading">
            <div>
              <p className="section-kicker">/ 03 KNOWLEDGE</p>
              <h2 id="knowledge-title">What I bring<br />to the table.</h2>
            </div>
            <p className="section-intro">A practical blend of structured thinking, digital confidence, and human-centered communication.</p>
          </div>
          <div className="knowledge-grid">
            {knowledge.map((item) => (
              <article className="knowledge-card" key={item.number}>
                <span className="knowledge-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <div className="tag-list blue-tags">
                  {item.topics.map((topic) => <span key={topic}>{topic}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="contact-section section-shell" id="contact">
        <p className="section-kicker">/ LET&apos;S CONNECT</p>
        <div className="contact-main">
          <h2>Have a good idea?<br /><span>Let&apos;s give it momentum.</span></h2>
          <a className="contact-button" href="mailto:hello@example.com">
            <span>Start a conversation</span><strong>↗</strong>
          </a>
        </div>
        <div className="footer-line">
          <a className="monogram" href="#top">B.</a>
          <p>© 2026 BASEL · AMMAN, JORDAN</p>
          <div><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
