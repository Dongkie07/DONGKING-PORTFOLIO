export function EvidenceCard({ item, index }) {
  return (
    <article className="evidence-card premium-card" data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="evidence-image-wrap">
        <img src={item.image} alt={item.title} />
        <span>{item.category}</span>
      </div>
      <div className="evidence-content">
        <p className="card-label">{item.date}</p>
        <h3>{item.title}</h3>
        <p className="clamped-text short-clamp">{item.description}</p>
      </div>
    </article>
  );
}
