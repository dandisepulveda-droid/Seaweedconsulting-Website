import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown, Waves } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 1.2 }
      );

      // Floating animation for decorative elements
      gsap.to('.hero-float-1', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.hero-float-2', {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div className="hero-bg absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Underwater scene"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a1a]/60 via-transparent to-[#0a1a1a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a1a]/40 via-transparent to-[#0a1a1a]/40" />
      </div>

      {/* Animated caustic light effect */}
      <div className="absolute inset-0 z-[2] opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2d8a8a]/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#4dd0e0]/10 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Decorative floating elements */}
      <div className="hero-float-1 absolute top-1/4 left-[10%] z-[3] opacity-40">
        <Waves className="w-12 h-12 text-[#2d8a8a]" />
      </div>
      <div className="hero-float-2 absolute bottom-1/3 right-[15%] z-[3] opacity-30">
        <Waves className="w-16 h-16 text-[#4dd0e0]" />
      </div>

      {/* Main content */}
      <div className="hero-content relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Pre-title */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-[#0a1a1a]/60 backdrop-blur-sm border border-[#2d8a8a]/50 rounded-full text-[#4dd0e0] text-xs sm:text-sm font-bold tracking-wider uppercase drop-shadow-lg">
            {t('hero.badge')}
          </span>
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
        >
          <span className="block">{t('hero.title')}</span>
          <span className="block text-gradient drop-shadow-[0_4px_20px_rgba(45,138,138,0.5)]">{t('hero.title2')}</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-ripple px-8 py-4 bg-[#2d8a8a] hover:bg-[#3aa8a8] text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#2d8a8a]/50 drop-shadow-lg"
          >
            {t('hero.cta1')}
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border-2 border-white/50 hover:border-[#2d8a8a] bg-[#0a1a1a]/30 backdrop-blur-sm text-white hover:text-[#2d8a8a] font-bold rounded-full transition-all duration-300 drop-shadow-lg"
          >
            {t('hero.cta2')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white hover:text-[#4dd0e0] transition-colors cursor-pointer group drop-shadow-lg"
      >
        <span className="text-xs tracking-wider uppercase font-medium drop-shadow-md">{t('hero.scroll')}</span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-[#4dd0e0] drop-shadow-md" />
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1a1a] to-transparent z-[5]" />
    </section>
  );
};

export default Hero;
