import { ButtonLink } from '../components/ButtonLink.jsx';
import { Icon } from '../components/Icon.jsx';
import { siteConfig } from '../config/siteConfig.js';

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-card" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2>Open to IT opportunities, collaboration, and project discussions.</h2>
        <p>
          For employment opportunities, project inquiries, or professional connections, you may reach me through the links below.
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
