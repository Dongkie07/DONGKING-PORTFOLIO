export function GalleryCard({ item, index }) {
  return (
    <article className="gallery-card premium-card" data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="gallery-image-wrap">
        <img src={item.image} alt={item.title} />
        <span>{item.category}</span>
      </div>
      <div className="gallery-content">
        <p className="card-label">{item.date}</p>
        <h3>{item.title}</h3>
        <p className="clamped-text short-clamp">{item.description}</p>
      </div>
    </article>
  );
}
