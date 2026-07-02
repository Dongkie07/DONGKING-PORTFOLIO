import { ButtonLink } from '../components/ButtonLink.jsx';
import { Badge } from '../components/Badge.jsx';
import { Icon } from '../components/Icon.jsx';
import { siteConfig } from '../config/siteConfig.js';

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true">
        <span className="grid-glow" />
        <span className="hero-sheen" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">{siteConfig.heroEyebrow}</p>
          <h1>{siteConfig.heroHeadline}</h1>
          <p className="hero-description">{siteConfig.heroDescription}</p>

          <div className="hero-tags">
            {siteConfig.heroTags.map(tag => <Badge key={tag}>{tag}</Badge>)}
          </div>

          <div className="hero-actions">
            <ButtonLink href="#experience">View Experience <Icon name="briefcase" /></ButtonLink>
            <ButtonLink href="#projects" variant="secondary">View Projects <Icon name="arrow" /></ButtonLink>
            <ButtonLink href={siteConfig.resumeUrl} variant="ghost">Resume <Icon name="download" /></ButtonLink>
          </div>
        </div>

        <aside className="portrait-stage" data-reveal aria-label="Profile photo of Romel Cadungon">
          <div className="portrait-frame" aria-hidden="true" />
          <div className="portrait-card">
            <img src={siteConfig.profileImage} alt={`${siteConfig.name} profile`} />
            <div className="portrait-caption">
              <span>{siteConfig.name}</span>
              <small>{siteConfig.role}</small>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
