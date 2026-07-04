import { SectionHeader } from '../components/SectionHeader.jsx';
import { TrainingCard } from '../components/TrainingCard.jsx';
import { trainings } from '../data/trainings.js';

export function Trainings() {
  return (
    <section className="section" id="trainings">
      <div className="container">
        <SectionHeader
          eyebrow="Credentials & Training"
          title="Certificates and training I completed."
          description="Training and seminars that helped me build skills in IT customer support, data analytics, data science, workplace readiness, and communication."
        />

        <div className="timeline-grid adaptive-grid">
          {trainings.map((training, index) => (
            <TrainingCard key={`${training.title}-${index}`} training={training} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
