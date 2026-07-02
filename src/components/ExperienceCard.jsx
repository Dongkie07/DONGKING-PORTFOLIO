import { Badge } from './Badge.jsx';
import { Icon } from './Icon.jsx';

export function ExperienceCard({ experience, index }) {
  return (
    <article className="experience-card premium-card" data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="experience-card-top">
        <p className="card-label">{experience.period}</p>
        <span className="experience-mode">{experience.mode}</span>
      </div>

      <div>
        <h3>{experience.role}</h3>
        <p className="organizer">{experience.company}</p>
      </div>

      <p>{experience.summary}</p>

      <ul className="experience-list">
        {experience.outcomes.map(outcome => (
          <li key={outcome}>
            <Icon name="check" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      <div className="badge-list experience-tools">
        {experience.tools.map(tool => <Badge key={tool}>{tool}</Badge>)}
      </div>

      <div className="experience-foot">
        <strong>{experience.metric.value}</strong>
        <span>{experience.metric.label}</span>
      </div>
    </article>
  );
}
