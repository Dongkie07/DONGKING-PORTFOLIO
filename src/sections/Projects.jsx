import { SectionHeader } from '../components/SectionHeader.jsx';
import { ProjectCard } from '../components/ProjectCard.jsx';
import { CollectionControls } from '../components/CollectionControls.jsx';
import { EmptyState } from '../components/EmptyState.jsx';
import { useCollectionFilter } from '../hooks/useCollectionFilter.js';
import { projects } from '../data/projects.js';

export function Projects() {
  const { activeCategory, categories, filteredItems, setActiveCategory } = useCollectionFilter(projects, 'category');

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Systems and Programs"
          title="Selected systems, programs, and documented project work."
          description="Each project is organized with category filters, responsive cards, clear descriptions, and space for code, live demos, videos, and future additions."
        />

        <CollectionControls
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
          label="Filter projects"
        />

        {filteredItems.length > 0 ? (
          <div className="projects-grid adaptive-grid">
            {filteredItems.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState message="Add a project in src/data/projects.js and it will appear here automatically." />
        )}
      </div>
    </section>
  );
}
