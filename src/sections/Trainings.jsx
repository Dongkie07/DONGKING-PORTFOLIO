import { SectionHeader } from '../components/SectionHeader.jsx';
import { TrainingCard } from '../components/TrainingCard.jsx';
import { trainings } from '../data/trainings.js';

export function Trainings() {
  return (
    <section className="section" id="trainings">
      <div className="container">
        <SectionHeader
          eyebrow="Trainings & Seminars"
          title="Learning experiences that support professional growth."
          description="Add seminars, webinars, workshops, competitions, and conferences with dates, organizers, and supporting photos or certificates."
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
