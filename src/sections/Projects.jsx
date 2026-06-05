import { SectionHeader } from '../components/SectionHeader.jsx';
import { ProjectShowcase } from '../components/ProjectShowcase.jsx';
import { projects } from '../data/projects.js';

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Selected systems and development work."
          description="Use the arrows to review my main projects quickly. Each slide highlights the purpose, technologies, and role-readiness value of the work."
        />

        <ProjectShowcase items={projects} />
      </div>
    </section>
  );
}
