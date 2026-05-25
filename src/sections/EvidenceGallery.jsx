import { SectionHeader } from '../components/SectionHeader.jsx';
import { EvidenceCard } from '../components/EvidenceCard.jsx';
import { CollectionControls } from '../components/CollectionControls.jsx';
import { EmptyState } from '../components/EmptyState.jsx';
import { useCollectionFilter } from '../hooks/useCollectionFilter.js';
import { evidenceItems } from '../data/evidenceItems.js';

export function EvidenceGallery() {
  const { activeCategory, categories, filteredItems, setActiveCategory } = useCollectionFilter(evidenceItems, 'category');

  return (
    <section className="section alt-section" id="evidence">
      <div className="container">
        <SectionHeader
          eyebrow="Evidence Gallery"
          title="Certificates, screenshots, photos, and proof of work."
          description="This gallery is future-ready: add certificates, awards, competition photos, presentation shots, and system screenshots while maintaining a clean and consistent layout."
        />

        <CollectionControls
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
          label="Filter evidence"
        />

        {filteredItems.length > 0 ? (
          <div className="evidence-grid adaptive-grid">
            {filteredItems.map((item, index) => (
              <EvidenceCard key={`${item.title}-${item.date}`} item={item} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState message="Add an item in src/data/evidenceItems.js and it will appear here automatically." />
        )}
      </div>
    </section>
  );
}
