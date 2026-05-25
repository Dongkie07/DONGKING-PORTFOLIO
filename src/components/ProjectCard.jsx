import { Badge } from './Badge.jsx';
import { ButtonLink } from './ButtonLink.jsx';
import { Icon } from './Icon.jsx';
import { hasValidLink } from '../utils/linkHelpers.js';

export function ProjectCard({ project, index }) {
  const animationDelay = `${index * 70}ms`;
  const visibleHighlights = project.highlights.slice(0, 4);

  return (
    <article className="project-card premium-card" data-reveal style={{ transitionDelay: animationDelay }}>
      <div className="project-image-wrap">
        <img src={project.image} alt={`${project.title} preview`} className="project-image" />
        <div className="project-overlay" />
        <span className="project-category">{project.category}</span>
        {project.status && <span className="project-status">{project.status}</span>}
      </div>

      <div className="project-content">
        <div className="project-heading">
          <p className="card-label">{project.period}</p>
          <h3>{project.title}</h3>
        </div>

        <p className="clamped-text">{project.description}</p>

        <ul className="feature-list compact-list">
          {visibleHighlights.map(item => (
            <li key={item}><Icon name="check" /> {item}</li>
          ))}
        </ul>

        <div className="badge-list compact-badges">
          {project.techStack.map(tech => <Badge key={tech}>{tech}</Badge>)}
        </div>

        <div className="project-actions">
          <ButtonLink href={project.liveUrl} disabled={!hasValidLink(project.liveUrl)}>
            Live Demo <Icon name="arrow" />
          </ButtonLink>
          <ButtonLink href={project.githubUrl} variant="secondary" disabled={!hasValidLink(project.githubUrl)}>
            Code <Icon name="code" />
          </ButtonLink>
          <ButtonLink href={project.demoVideoUrl} variant="ghost" disabled={!hasValidLink(project.demoVideoUrl)}>
            Demo Video <Icon name="play" />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
