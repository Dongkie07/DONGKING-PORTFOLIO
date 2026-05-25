export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
