import { ButtonLink } from './ButtonLink.jsx';
import { Icon } from './Icon.jsx';

export function TrainingCard({ training, index }) {
  return (
    <article className="timeline-card premium-card" data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="timeline-dot" />
      <p className="card-label">{training.date}</p>
      <div className="training-headline">
        <div>
          <h3>{training.title}</h3>
          <p className="organizer">{training.organizer}</p>
        </div>
        {training.badgeImage && (
          <a className="training-badge-link" href={training.badgeLink} target="_blank" rel="noreferrer" aria-label={`Verify ${training.title} badge`}>
            <img src={training.badgeImage} alt={`${training.title} verified badge`} />
          </a>
        )}
      </div>
      <p className="clamped-text short-clamp">{training.description}</p>
      <span className="reference-note">Credential: {training.credential}</span>
      {(training.certificateLink || training.badgeLink) && (
        <div className="training-actions">
          {training.certificateLink && <ButtonLink href={training.certificateLink} variant="ghost">View Certificate <Icon name="arrow" /></ButtonLink>}
          {training.badgeLink && <ButtonLink href={training.badgeLink} variant="secondary">Verify Badge <Icon name="arrow" /></ButtonLink>}
        </div>
      )}
    </article>
  );
}
