export function CollectionControls({ categories, activeCategory, onChange, label = 'Filter collection' }) {
  return (
    <div className="collection-controls" aria-label={label} data-reveal>
      {categories.map(category => (
        <button
          key={category}
          type="button"
          className={`filter-pill${activeCategory === category ? ' is-active' : ''}`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
