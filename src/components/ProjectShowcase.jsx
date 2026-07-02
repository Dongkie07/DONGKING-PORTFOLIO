import { useState } from 'react';
import { Badge } from './Badge.jsx';
import { ButtonLink } from './ButtonLink.jsx';
import { Icon } from './Icon.jsx';
import { hasValidLink } from '../utils/linkHelpers.js';

function getPrimaryProjectAction(project) {
  const codeUrl = project.frontendUrl || project.githubUrl;

  if (hasValidLink(codeUrl)) {
    return {
      href: codeUrl,
      label: project.frontendUrl ? 'Web App Code' : 'Source Code',
      icon: 'code'
    };
  }

  return null;
}


export function ProjectShowcase({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items?.length) return null;

  const total = items.length;
  const activeProject = items[activeIndex];
  const nextSlide = () => setActiveIndex(current => (current + 1) % total);
  const previousSlide = () => setActiveIndex(current => (current - 1 + total) % total);

  return (
    <div className="project-showcase project-showcase-manual" data-reveal>
      <div className="project-showcase-header">
        <p className="eyebrow">Project Slideshow</p>
        <h3>Browse my main project work.</h3>
        <p>
          This keeps the main project details and source code links easy to review without scrolling too much.
        </p>
      </div>

      <div className="project-carousel manual-carousel" aria-label="Project slideshow">
        <button className="project-arrow project-arrow-left" type="button" onClick={previousSlide} aria-label="Previous project">
          <Icon name="arrow" />
        </button>

        <div className="project-track manual-project-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {items.map(project => {
            const primaryAction = getPrimaryProjectAction(project);
            const primaryHref = primaryAction?.href;
            const secondaryCodeHref = project.frontendUrl || project.githubUrl;
            const showSecondaryCode = hasValidLink(secondaryCodeHref) && secondaryCodeHref !== primaryHref;

            return (
              <article className="project-slide manual-project-slide" key={project.title}>
                <div className="project-slide-image landscape-media">
                  {project.mediaType === 'video' ? (
                    <video
                      src={project.videoUrl}
                      poster={project.image}
                      muted
                      loop
                      playsInline
                      autoPlay
                      controls
                      aria-label={`${project.title} screen recording`}
                    />
                  ) : (
                    <img src={project.image} alt={`${project.title} preview`} />
                  )}
                  <span>{project.status}</span>
                </div>

                <div className="project-slide-content">
                  <p className="card-label">{project.period}</p>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>

                  <div className="project-highlights">
                    {project.highlights?.slice(0, 4).map(highlight => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>

                  <div className="badge-list project-slide-badges">
                    {project.techStack.slice(0, 5).map(tech => <Badge key={tech}>{tech}</Badge>)}
                  </div>

                  <div className="project-slide-actions">
                    {primaryAction ? (
                      <ButtonLink href={primaryAction.href}>
                        {primaryAction.label} <Icon name={primaryAction.icon} />
                      </ButtonLink>
                    ) : null}
                    {showSecondaryCode ? (
                      <ButtonLink href={secondaryCodeHref} variant="secondary">
                        Web App <Icon name="code" />
                      </ButtonLink>
                    ) : null}
                    {project.backendUrl ? (
                      <ButtonLink href={project.backendUrl} variant="secondary" disabled={!hasValidLink(project.backendUrl)}>
                        API Repo <Icon name="code" />
                      </ButtonLink>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button className="project-arrow project-arrow-right" type="button" onClick={nextSlide} aria-label="Next project">
          <Icon name="arrow" />
        </button>
      </div>

      <div className="project-slide-footer" aria-label="Project slideshow controls">
        <span>{String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <div className="project-dots">
          {items.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={index === activeIndex ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${project.title}`}
            />
          ))}
        </div>
        <strong>{activeProject.category}</strong>
      </div>
    </div>
  );
}
