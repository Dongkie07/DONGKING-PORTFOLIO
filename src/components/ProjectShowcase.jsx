import { useState } from 'react';
import { Badge } from './Badge.jsx';
import { ButtonLink } from './ButtonLink.jsx';
import { Icon } from './Icon.jsx';
import { hasValidLink } from '../utils/linkHelpers.js';

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
        <h3>Review my work without endless scrolling.</h3>
        <p>
          A compact project view designed for faster hiring review, with direct navigation for each selected system and prototype.
        </p>
      </div>

      <div className="project-carousel manual-carousel" aria-label="Project slideshow">
        <button className="project-arrow project-arrow-left" type="button" onClick={previousSlide} aria-label="Previous project">
          <Icon name="arrow" />
        </button>

        <div className="project-track manual-project-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {items.map(project => (
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
                  {project.installUrl ? (
                    <ButtonLink href={project.installUrl} disabled={!hasValidLink(project.installUrl)}>
                      Install Guide <Icon name="arrow" />
                    </ButtonLink>
                  ) : (
                    <ButtonLink href={project.liveUrl} disabled={!hasValidLink(project.liveUrl)}>
                      Live Demo <Icon name="arrow" />
                    </ButtonLink>
                  )}
                  <ButtonLink href={project.frontendUrl || project.githubUrl} variant="secondary" disabled={!hasValidLink(project.frontendUrl || project.githubUrl)}>
                    Web App <Icon name="code" />
                  </ButtonLink>
                  {project.backendUrl ? (
                    <ButtonLink href={project.backendUrl} variant="secondary" disabled={!hasValidLink(project.backendUrl)}>
                      API Repo <Icon name="code" />
                    </ButtonLink>
                  ) : null}
                  <ButtonLink href={project.demoVideoUrl} variant="ghost" disabled={!hasValidLink(project.demoVideoUrl)}>
                    Demo <Icon name="play" />
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
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
