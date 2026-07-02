import { SectionHeader } from '../components/SectionHeader.jsx';
import { ProjectShowcase } from '../components/ProjectShowcase.jsx';
import { projects } from '../data/projects.js';

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Systems and projects I worked on."
          description="Use the arrows to browse the main systems I built or contributed to, including the tools used and what each project was made for."
        />

        <ProjectShowcase items={projects} />
      </div>
    </section>
  );
}
