import { SectionHeader } from '../components/SectionHeader.jsx';
import { AchievementCard } from '../components/AchievementCard.jsx';
import { achievements } from '../data/achievements.js';

export function Achievements() {
  return (
    <section className="section alt-section" id="achievements">
      <div className="container">
        <SectionHeader
          eyebrow="Achievements"
          title="Recognitions, certifications, and professional development."
          description="This section brings together technical training, capstone recognition, and selected participation records that support my readiness for professional IT work."
        />

        <div className="achievement-grid adaptive-grid">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.title} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
