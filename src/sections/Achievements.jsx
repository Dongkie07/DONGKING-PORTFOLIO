import { SectionHeader } from '../components/SectionHeader.jsx';
import { AchievementCard } from '../components/AchievementCard.jsx';
import { achievements } from '../data/achievements.js';

export function Achievements() {
  return (
    <section className="section alt-section" id="achievements">
      <div className="container">
        <SectionHeader
          eyebrow="Achievements"
          title="Recognitions, participation, leadership, and academic milestones."
          description="Use this section for awards, organization work, project defenses, academic recognition, and other career highlights."
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
