import { SectionHeader } from '../components/SectionHeader.jsx';
import { AchievementCard } from '../components/AchievementCard.jsx';
import { achievements } from '../data/achievements.js';

export function Achievements() {
  return (
    <section className="section alt-section" id="achievements">
      <div className="container">
        <SectionHeader
          eyebrow="Achievements"
          title="Certificates, milestones, and activities."
          description="A simple record of my technical training, capstone work, and student development activities."
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
