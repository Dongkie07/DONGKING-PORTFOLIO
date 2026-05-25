import { Icon } from './Icon.jsx';

export function AchievementCard({ achievement, index }) {
  return (
    <article className="achievement-card premium-card" data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="achievement-icon"><Icon name="trophy" /></div>
      <p className="card-label">{achievement.type}</p>
      <h3>{achievement.title}</h3>
      <p className="clamped-text short-clamp">{achievement.description}</p>
      <span className="reference-note">Reference: {achievement.reference}</span>
    </article>
  );
}
