import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Stats from './sections/Stats';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ParticleField from './components/ParticleField';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Initialize scroll animations
    const sections = document.querySelectorAll('.section-animate');
    
    sections.forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          });
        },
        once: true
      });
      triggersRef.current.push(trigger);
    });

    // Parallax effect for hero
    const heroTrigger = ScrollTrigger.create({
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set('.hero-bg', { y: progress * 100 });
        gsap.set('.hero-content', { y: progress * -150, opacity: 1 - progress * 0.5 });
      }
    });
    triggersRef.current.push(heroTrigger);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#0a1a1a] overflow-x-hidden">
      {/* Global particle effect */}
      <ParticleField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stats />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
