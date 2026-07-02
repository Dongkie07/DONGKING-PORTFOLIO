import { SectionHeader } from '../components/SectionHeader.jsx';
import { Badge } from '../components/Badge.jsx';
import { skillGroups } from '../data/skills.js';

export function Skills() {
  return (
    <section className="section alt-section" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="Core Skills"
          title="Tools and skills I use in actual work."
          description="A practical mix of admin, CRM, reporting, data, IT support, and web development skills."
        />

        <div className="skills-grid adaptive-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card premium-card" data-reveal style={{ transitionDelay: `${index * 70}ms` }} key={group.category}>
              <h3>{group.category}</h3>
              <div className="badge-list">
                {group.skills.map(skill => <Badge key={skill}>{skill}</Badge>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
