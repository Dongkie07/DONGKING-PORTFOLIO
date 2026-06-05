import { SectionHeader } from '../components/SectionHeader.jsx';
import { GalleryCard } from '../components/GalleryCard.jsx';
import { CollectionControls } from '../components/CollectionControls.jsx';
import { EmptyState } from '../components/EmptyState.jsx';
import { useCollectionFilter } from '../hooks/useCollectionFilter.js';
import { galleryItems } from '../data/galleryItems.js';

export function PortfolioGallery() {
  const { activeCategory, categories, filteredItems, setActiveCategory } = useCollectionFilter(galleryItems, 'category');

  return (
    <section className="section alt-section" id="gallery">
      <div className="container">
        <SectionHeader
          eyebrow="Gallery"
          title="Certificates, project photos, and capstone documentation."
          description="A curated collection of project milestones, verified technical credentials, and professional development activities arranged for quick review."
        />

        <CollectionControls
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
          label="Filter gallery"
        />

        {filteredItems.length > 0 ? (
          <div className="gallery-grid adaptive-grid">
            {filteredItems.map((item, index) => (
              <GalleryCard key={`${item.title}-${item.date}`} item={item} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState message="No gallery items are available for this category yet." />
        )}
      </div>
    </section>
  );
}
