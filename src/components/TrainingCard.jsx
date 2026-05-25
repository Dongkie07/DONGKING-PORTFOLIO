export function TrainingCard({ training, index }) {
  return (
    <article className="timeline-card premium-card" data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="timeline-dot" />
      <p className="card-label">{training.date}</p>
      <h3>{training.title}</h3>
      <p className="organizer">{training.organizer}</p>
      <p className="clamped-text short-clamp">{training.description}</p>
      <span className="reference-note">Reference: {training.proof}</span>
    </article>
  );
}
