import { ButtonLink } from '../components/ButtonLink.jsx';
import { Badge } from '../components/Badge.jsx';
import { Icon } from '../components/Icon.jsx';
import { siteConfig } from '../config/siteConfig.js';

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true">
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <span className="orb orb-three" />
        <span className="grid-glow" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <div className="status-chip"><Icon name="spark" /> {siteConfig.professionalNote}</div>
          <p className="eyebrow">{siteConfig.heroEyebrow}</p>
          <h1>{siteConfig.heroHeadline}</h1>
          <p className="hero-description">{siteConfig.heroDescription}</p>

          <div className="hero-tags">
            {siteConfig.heroTags.map(tag => <Badge key={tag}>{tag}</Badge>)}
          </div>

          <div className="hero-actions">
            <ButtonLink href="#projects">View Projects <Icon name="arrow" /></ButtonLink>
            <ButtonLink href="#gallery" variant="secondary">View Gallery <Icon name="spark" /></ButtonLink>
          </div>
        </div>

        <div className="portrait-stage" data-reveal>
          <div className="portrait-frame" aria-hidden="true" />
          <div className="portrait-card">
            <img src={siteConfig.profileImage} alt={`${siteConfig.name} formal portrait`} />
          </div>
          <div className="portrait-caption">
            <span>{siteConfig.name}</span>
            <small>{siteConfig.role}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
