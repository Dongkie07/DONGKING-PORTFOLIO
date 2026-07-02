import { SectionHeader } from '../components/SectionHeader.jsx';
import { Badge } from '../components/Badge.jsx';
import { defenseMilestones } from '../data/defenseMilestones.js';

export function DefenseJourney() {
  return (
    <section className="section defense-section" id="defense-journey">
      <div className="container">
        <SectionHeader
          eyebrow="Capstone Journey"
          title="Restack journey from proposal to final defense."
          description="These photos show how the project moved through planning, defense presentations, deployment preparation, and final evaluation."
        />

        <div className="defense-feature" data-reveal>
          <div className="defense-feature-image">
            <img src="/images/portfolio/restack-final-defense.jpg" alt="Restack final defense presentation" />
            <span>Final Defense</span>
          </div>
          <div className="defense-feature-copy">
            <p className="eyebrow">Project Presentation</p>
            <h3>Restack went through defense, revisions, deployment, and exhibit presentation.</h3>
            <p>
              The final defense was one of the biggest milestones. The photos below show the project journey in order.
            </p>
            <div className="badge-list">
              <Badge>Title Defense</Badge>
              <Badge>Outline Defense</Badge>
              <Badge>Pre-Deployment</Badge>
              <Badge>Final Defense</Badge>
            </div>
          </div>
        </div>

        <div className="defense-timeline">
          {defenseMilestones.map((item, index) => (
            <article className="defense-card premium-card" key={item.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="defense-number">0{index + 1}</div>
              <img src={item.image} alt={`${item.title} documentation`} />
              <div className="defense-card-content">
                <p className="card-label">{item.stage}</p>
                <h3>{item.title}</h3>
                <p className="clamped-text short-clamp">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
