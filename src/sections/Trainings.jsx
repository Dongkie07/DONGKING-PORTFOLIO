import { SectionHeader } from '../components/SectionHeader.jsx';
import { TrainingCard } from '../components/TrainingCard.jsx';
import { trainings } from '../data/trainings.js';

export function Trainings() {
  return (
    <section className="section" id="trainings">
      <div className="container">
        <SectionHeader
          eyebrow="Credentials & Training"
          title="Certifications and professional development."
          description="Technical credentials and seminars that strengthened my foundation in data analytics, data science, workplace readiness, and professional communication."
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
