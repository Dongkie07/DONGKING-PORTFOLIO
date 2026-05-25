import { ButtonLink } from '../components/ButtonLink.jsx';
import { Icon } from '../components/Icon.jsx';
import { siteConfig } from '../config/siteConfig.js';

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-card" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2>Let’s connect and build something worth showing.</h2>
        <p>
          For collaborations, project inquiries, academic documentation, or portfolio review, reach me through my contact links below.
        </p>

        <div className="contact-actions">
          <ButtonLink href={`mailto:${siteConfig.email}`}>Email Me <Icon name="mail" /></ButtonLink>
          <ButtonLink href={siteConfig.githubUrl} variant="secondary">GitHub <Icon name="code" /></ButtonLink>
          <ButtonLink href={siteConfig.linkedInUrl} variant="ghost">LinkedIn <Icon name="arrow" /></ButtonLink>
        </div>
      </div>
    </section>
  );
}
