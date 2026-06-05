import { Badge } from '../components/Badge.jsx';
import { ButtonLink } from '../components/ButtonLink.jsx';
import { Icon } from '../components/Icon.jsx';

const capstoneHighlights = [
  'Integrated open-source vulnerability scanners into one project workflow',
  'Processed scanner outputs into structured and readable security findings',
  'Presented analytics-ready results through a dashboard interface',
  'Completed major capstone stages from defense presentations to deployment and exhibit presentation'
];

const capstoneStats = [
  { value: '2026', label: 'Exhibit and deployment year' },
  { value: '4', label: 'Team members recognized' },
  { value: '8+', label: 'Milestones documented' }
];

export function CapstoneSpotlight() {
  return (
    <section className="section capstone-section" id="capstone">
      <div className="container capstone-shell">
        <div className="capstone-copy" data-reveal>
          <p className="eyebrow">Featured Capstone Project</p>
          <h2>Restack: Open-source vulnerability scanning with data analytics.</h2>
          <p>
            Restack is the strongest project in this portfolio because it combines system development, cybersecurity, data processing, dashboard presentation, deployment, and formal academic presentation.
          </p>

          <div className="badge-list capstone-badges">
            <Badge>Cybersecurity</Badge>
            <Badge>Data Analytics</Badge>
            <Badge>Dashboard</Badge>
            <Badge>Capstone Project</Badge>
          </div>

          <ul className="capstone-list">
            {capstoneHighlights.map(item => (
              <li key={item}><Icon name="check" /> {item}</li>
            ))}
          </ul>

          <div className="capstone-actions">
            <ButtonLink href="#projects">View Project Details <Icon name="arrow" /></ButtonLink>
            <ButtonLink href="#defense-journey" variant="secondary">View Capstone Journey <Icon name="spark" /></ButtonLink>
          </div>
        </div>

        <div className="capstone-visual" data-reveal>
          <div className="capstone-photo-main">
            <img src="/images/portfolio/restack-capstone-booth.jpg" alt="Restack capstone booth exhibit" />
            <span>Project Exhibit</span>
          </div>
          <div className="capstone-photo-stack">
            <img src="/images/portfolio/restack-deployment-team.jpg" alt="Restack deployment completion photo with evaluator" />
            <img src="/images/portfolio/restack-project-exhibit-certificate.jpg" alt="Restack project exhibit certificate" />
          </div>
        </div>

        <div className="capstone-stats" data-reveal>
          {capstoneStats.map((stat, index) => (
            <div key={stat.label} className="capstone-stat premium-card" data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
