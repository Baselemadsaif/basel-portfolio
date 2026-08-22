const stats = [
  { value: "2", label: "Years of experience" },
  { value: "2", label: "Professional certifications" },
  { value: "14+", label: "DevOps technologies" },
];

const experience = [
  {
    period: "JUNE 2025 TO PRESENT",
    role: "DevOps / AIOps",
    company: "Optimum Partners · Amman, Jordan",
    detail:
      "Building and securing automated infrastructure across Linux and Google Cloud, with hands-on delivery using containers, infrastructure as code, CI/CD, and secrets management.",
    skills: ["Linux hardening", "Docker", "Terraform & Ansible", "GCP", "GitHub Actions"],
  },
  {
    period: "AUGUST 2024 TO PRESENT",
    role: "HelpDesk Engineer & Administrator",
    company: "Optimum Partners · Amman, Jordan",
    detail:
      "Managing identity and access through Okta, resolving technical and access issues, supporting user lifecycles, and enforcing secure authentication policies including MFA.",
    skills: ["Okta SSO", "Identity & access", "Technical support", "MFA", "User provisioning"],
  },
];

const certificates = [
  {
    number: "01",
    year: "GOOGLE CLOUD",
    title: "Associate Cloud Engineer",
    issuer: "Professional certification",
    detail: "Deploying, securing, and operating solutions on Google Cloud Platform.",
  },
  {
    number: "02",
    year: "GOOGLE CLOUD",
    title: "Professional Cloud Security Engineer",
    issuer: "Professional certification",
    detail: "Designing and implementing secure workloads and infrastructure on Google Cloud.",
  },
  {
    number: "03",
    year: "KODEKLOUD",
    title: "DevOps Engineering Learning Path",
    issuer: "Hands-on professional development",
    detail: "Practical DevOps skills developed through structured labs and engineering exercises.",
  },
  {
    number: "04",
    year: "KODEKLOUD",
    title: "Docker Certified Associate",
    issuer: "KodeKloud certification",
    detail: "Docker administration, images, networking, storage, orchestration, and container security.",
  },
];

const knowledge = [
  {
    number: "01",
    title: "Cloud & infrastructure",
    copy: "I provision and secure cloud and Linux environments with repeatable infrastructure as code and reliable network configuration.",
    topics: ["Google Cloud", "Terraform", "Ansible", "Nginx"],
  },
  {
    number: "02",
    title: "Containers & delivery",
    copy: "I build containerized services and delivery workflows that move code through testing, analysis, releases, and deployment.",
    topics: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "SonarQube"],
  },
  {
    number: "03",
    title: "Systems & security",
    copy: "I combine Linux administration with identity, endpoint, and secrets-management practices to keep systems dependable and access controlled.",
    topics: ["Linux", "Okta SSO", "IAM", "Vault", "CrowdStrike"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="profile-avatar" href="#top" aria-label="Basel Al-Saif home">
          <img src="/basel-al-saif.jpg" alt="" width="1304" height="1254" />
        </a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#certificates">Certificates</a>
          <a href="#knowledge">Knowledge</a>
        </div>
        <a className="nav-cta" href="mailto:baselemadsaif@gmail.com">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">BASEL AL-SAIF · DEVOPS ENGINEER</div>
        <h1>DevOps engineering for<br /><em>reliable systems.</em></h1>
        <p className="hero-copy">
          I&apos;m a Junior DevOps Engineer building secure, automated, and scalable systems
          across cloud infrastructure, CI/CD, containerization, and Linux.
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
      </section>

      <section className="statement section-shell" aria-labelledby="statement-title">
        <p className="section-kicker">ABOUT ME</p>
        <div>
          <h2 id="statement-title">Cloud infrastructure, automation, and security.</h2>
          <p>
            My background combines enterprise IT support, identity and access management, Linux systems,
            and practical DevOps engineering. I hold a BSc in Computer Science from the University of Jordan
            and two professional certifications in cloud engineering and security.
          </p>
        </div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">EXPERIENCE</p>
              <h2 id="experience-title">Professional experience.</h2>
            </div>
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
        </div>
      </section>

      <section className="certificates-section section-shell" id="certificates" aria-labelledby="certificates-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">CERTIFICATIONS</p>
            <h2 id="certificates-title">Certifications and training.</h2>
          </div>
          <p className="section-intro">Cloud credentials and practical coursework supporting my work across infrastructure, security, automation, and software delivery.</p>
        </div>
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.number}>
              <div className="certificate-top">
                <span>{certificate.number}</span>
                <span>{certificate.year}</span>
              </div>
              <p className="issuer">{certificate.issuer}</p>
              <h3>{certificate.title}</h3>
              <p className="certificate-detail">{certificate.detail}</p>
              <a
                className="certificate-source"
                href="https://www.linkedin.com/in/basel-al-saif-162b951b9/details/certifications/"
                target="_blank"
                rel="noreferrer"
              >
                View on LinkedIn <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="knowledge-section" id="knowledge" aria-labelledby="knowledge-title">
        <div className="section-shell">
          <div className="section-heading light-heading">
            <div>
              <p className="section-kicker">TECHNICAL SKILLS</p>
              <h2 id="knowledge-title">Tools and technologies.</h2>
            </div>
            <p className="section-intro">A practical toolkit covering cloud platforms, containers, automation, delivery pipelines, Linux administration, and access security.</p>
          </div>
          <div className="knowledge-grid">
            {knowledge.map((item) => (
              <article className="knowledge-card" key={item.number}>
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
        <p className="section-kicker">CONTACT</p>
        <div className="contact-main">
          <h2>Get in touch.</h2>
          <a className="contact-button" href="mailto:baselemadsaif@gmail.com">
            <span>Send an email</span><strong>↗</strong>
          </a>
        </div>
        <div className="contact-details" aria-label="Contact details">
          <a href="mailto:baselemadsaif@gmail.com">
            <span>Email</span>
            <strong>baselemadsaif@gmail.com</strong>
          </a>
          <a href="tel:+962778621178">
            <span>Phone</span>
            <strong>+962 778621178</strong>
          </a>
          <a href="https://www.linkedin.com/in/basel-al-saif-162b951b9/" target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <strong>Connect ↗</strong>
          </a>
        </div>
        <div className="footer-line">
          <strong className="footer-name">BASEL AL-SAIF</strong>
          <p>© 2026 · AMMAN, JORDAN</p>
          <div><a href="https://www.linkedin.com/in/basel-al-saif-162b951b9/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
      </footer>
    </main>
  );
}
