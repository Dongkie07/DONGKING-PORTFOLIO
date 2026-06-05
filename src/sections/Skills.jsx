import { SectionHeader } from '../components/SectionHeader.jsx';
import { Badge } from '../components/Badge.jsx';
import { skillGroups } from '../data/skills.js';

export function Skills() {
  return (
    <section className="section alt-section" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="Core Skills"
          title="Technical and professional capabilities."
          description="A focused overview of the tools, development areas, and workplace strengths I can bring to system development and IT-related roles."
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
