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
          eyebrow="Documentation"
          title="Certificates, screenshots, project records, and participation photos."
          description="A flexible section for organizing important files and images connected to projects, seminars, competitions, and academic milestones."
        />

        <CollectionControls
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
          label="Filter documentation"
        />

        {filteredItems.length > 0 ? (
          <div className="evidence-grid adaptive-grid">
            {filteredItems.map((item, index) => (
              <EvidenceCard key={`${item.title}-${index}`} item={item} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState message="No documentation items are available for this category yet." />
        )}
      </div>
    </section>
  );
}
