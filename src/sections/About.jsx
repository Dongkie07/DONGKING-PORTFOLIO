import { SectionHeader } from '../components/SectionHeader.jsx';
import { siteConfig } from '../config/siteConfig.js';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container split-section">
        <SectionHeader
          eyebrow="About Me"
          title="A professional portfolio built around systems, achievements, and presentation quality."
          description="This portfolio is designed to grow with every new system, certificate, seminar, competition, award, and documented achievement added over time."
        />

        <div className="about-panel premium-card" data-reveal>
          <p>
            I am {siteConfig.name}, a technology-focused system developer with strong interest in web development, system design, dashboards, databases, and professional project presentation.
          </p>
          <p>
            I build practical and user-focused systems while documenting each milestone through project screenshots, source code, demo links, certificates, event photos, trainings, seminars, and competitions.
          </p>
          <p>
            This portfolio works as a living archive of my work, keeping every new accomplishment organized, consistent, and visually polished without overcrowding the design.
          </p>
        </div>
      </div>
    </section>
  );
}
