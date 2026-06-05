import { ButtonLink } from './ButtonLink.jsx';
import { Icon } from './Icon.jsx';

export function GalleryCard({ item, index }) {
  return (
    <article className="gallery-card premium-card" data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="gallery-image-wrap">
        <img src={item.image} alt={item.title} />
        <span>{item.category}</span>
      </div>
      <div className="gallery-content">
        <p className="card-label">{item.date}</p>
        <div className="gallery-title-row">
          <h3>{item.title}</h3>
          {item.badgeImage && (
            <a className="gallery-badge-link" href={item.badgeLink} target="_blank" rel="noreferrer" aria-label={`Verify ${item.title} badge`}>
              <img src={item.badgeImage} alt={`${item.title} verified badge`} />
            </a>
          )}
        </div>
        <p className="clamped-text short-clamp">{item.description}</p>
        {(item.link || item.badgeLink) && (
          <div className="gallery-action">
            {item.link && <ButtonLink href={item.link} variant="ghost">Open Proof <Icon name="arrow" /></ButtonLink>}
            {item.badgeLink && <ButtonLink href={item.badgeLink} variant="secondary">Verify Badge <Icon name="arrow" /></ButtonLink>}
          </div>
        )}
      </div>
    </article>
  );
}
