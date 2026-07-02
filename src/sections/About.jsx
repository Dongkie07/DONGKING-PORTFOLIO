import { HeroWorkstation } from '../components/HeroWorkstation.jsx';
import { siteConfig } from '../config/siteConfig.js';

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-workstation-grid about-workstation-grid--reversed">
        <HeroWorkstation />

        <div className="about-copy-stack" data-reveal>
          <div className="about-panel premium-card">
            <span className="about-panel-label">About Me</span>
            <p>
              I am {siteConfig.name}, an Information Technology graduate with hands-on experience in remote administrative work, data organization, and practical web-based system development.
            </p>
            <p>
              My work includes calendar and email coordination, CRM tasks, applicant screening, spreadsheet reporting, dashboard preparation, technical documentation, and project presentation support.
            </p>
            <p>
              This portfolio highlights both my admin and IT background, including system projects, deployment records, demo materials, verified training credentials, and organized project documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
