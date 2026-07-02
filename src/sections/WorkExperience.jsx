import { SectionHeader } from '../components/SectionHeader.jsx';
import { ExperienceCard } from '../components/ExperienceCard.jsx';
import { ProofPoint } from '../components/ProofPoint.jsx';
import { experienceStats, workExperiences } from '../data/workExperience.js';

export function WorkExperience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="Work Experience"
          title="Experience from real admin, data, and IT work."
          description="These are the roles I have handled so far, from remote operations to internship work, reporting, dashboards, and IT support."
        />

        <div className="experience-summary-strip" data-reveal>
          {experienceStats.map(stat => (
            <ProofPoint key={stat.label} value={stat.value} label={stat.label} className="experience-proof" />
          ))}
        </div>

        <div className="experience-grid">
          {workExperiences.map((experience, index) => (
            <ExperienceCard key={`${experience.role}-${experience.period}`} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
