import { Navbar } from './components/Navbar.jsx';
import { CursorGlow } from './components/CursorGlow.jsx';
import { Hero } from './sections/Hero.jsx';
import { About } from './sections/About.jsx';
import { WorkExperience } from './sections/WorkExperience.jsx';
import { Skills } from './sections/Skills.jsx';
import { Projects } from './sections/Projects.jsx';
import { CapstoneSpotlight } from './sections/CapstoneSpotlight.jsx';
import { DefenseJourney } from './sections/DefenseJourney.jsx';
import { Achievements } from './sections/Achievements.jsx';
import { Trainings } from './sections/Trainings.jsx';
import { PortfolioGallery } from './sections/PortfolioGallery.jsx';
import { Contact } from './sections/Contact.jsx';
import { Footer } from './sections/Footer.jsx';
import { useScrollReveal } from './hooks/useScrollReveal.js';

export default function App() {
  useScrollReveal();

  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Skills />
        <Projects />
        <CapstoneSpotlight />
        <DefenseJourney />
        <Achievements />
        <Trainings />
        <PortfolioGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
