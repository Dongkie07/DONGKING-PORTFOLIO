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
          eyebrow="Portfolio Gallery"
          title="Certificates, screenshots, photos, and project highlights."
          description="This gallery is future-ready: add certificates, awards, competition photos, presentation shots, and system screenshots while keeping the layout clean and consistent."
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
          <EmptyState message="Add an item in src/data/galleryItems.js and it will appear here automatically." />
        )}
      </div>
    </section>
  );
}
