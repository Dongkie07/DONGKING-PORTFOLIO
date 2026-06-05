import { SectionHeader } from '../components/SectionHeader.jsx';
import { siteConfig } from '../config/siteConfig.js';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container split-section">
        <SectionHeader
          eyebrow="About Me"
          title="I enjoy exploring how systems, security, and data can solve real-world problems."
          description="This portfolio presents my technical background, capstone work, training credentials, and selected academic milestones."
        />

        <div className="about-panel premium-card" data-reveal>
          <p>
            I am {siteConfig.name}, an Information Technology graduate with experience in web-based system development, database-driven applications, interface design, and technical project documentation.
          </p>
          <p>
            My work focuses on building usable systems, organizing project requirements, preparing dashboards and reports, and presenting outputs clearly for users, advisers, panelists, and future employers.
          </p>
          <p>
            This portfolio highlights my development skills, capstone project experience, verified training credentials, and professional growth activities as I prepare for opportunities in the IT industry.
          </p>
        </div>
      </div>
    </section>
  );
}
