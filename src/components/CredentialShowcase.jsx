import { ButtonLink } from './ButtonLink.jsx';
import { Icon } from './Icon.jsx';

export function CredentialShowcase({ items }) {
  const featured = items.filter(item => item.badgeImage);
  const slides = [...featured, ...featured];

  if (!featured.length) return null;

  return (
    <div className="credential-showcase" data-reveal>
      <div className="credential-showcase-header">
        <p className="eyebrow">Verified Credentials</p>
        <h3>Technical certificates with digital badge verification.</h3>
        <p>
          These credentials are presented in a rotating showcase so recruiters can quickly review the certificate, badge, issuer, and verification link.
        </p>
      </div>

      <div className="credential-carousel" aria-label="Verified credential slideshow">
        <div className="credential-track">
          {slides.map((item, index) => (
            <article className="credential-slide" key={`${item.title}-${index}`}>
              <div className="credential-badge-frame">
                <img src={item.badgeImage} alt={`${item.title} verified badge`} />
              </div>
              <p className="card-label">{item.date}</p>
              <h4>{item.title}</h4>
              <p>{item.organizer}</p>
              <div className="credential-slide-actions">
                <ButtonLink href={item.certificateLink} variant="ghost">Certificate <Icon name="arrow" /></ButtonLink>
                <ButtonLink href={item.badgeLink} variant="secondary">Verify <Icon name="arrow" /></ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
