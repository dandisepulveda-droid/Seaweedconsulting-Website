import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Globe, Users, Leaf } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal animation
      const contentTrigger = ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            contentRef.current?.querySelectorAll('.reveal-item') || [],
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(contentTrigger);

      // Image blob animation
      const imageTrigger = ScrollTrigger.create({
        trigger: imageRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            imageRef.current,
            { scale: 0.8, opacity: 0, rotation: -5 },
            { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(imageTrigger);

      // Parallax effect on image
      const parallaxTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          if (imageRef.current) {
            gsap.set(imageRef.current, { y: self.progress * -50 });
          }
        }
      });
      triggersRef.current.push(parallaxTrigger);
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  const stats = [
    { icon: Globe, value: '15+', label: t('about.stats.countries') as string },
    { icon: Award, value: '20+', label: t('about.stats.experience') as string },
    { icon: Users, value: '100+', label: t('about.stats.projects') as string },
    { icon: Leaf, value: '50+', label: t('about.stats.solutions') as string },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a1a1a] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2d8a8a]/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div ref={imageRef} className="relative order-2 lg:order-1">
            {/* Blob shape container */}
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="blob-shape relative overflow-hidden aspect-[3/4]">
                <img
                  src="/about-image.jpg"
                  alt="Marine biologist with seaweed"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a1a]/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 glass rounded-2xl p-4 lg:p-6 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2d8a8a] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#e8f4f8] font-serif text-lg font-semibold">{t('about.badge2') as string}</p>
                    <p className="text-[#e8f4f8]/60 text-sm">{t('about.badge3') as string}</p>
                  </div>
                </div>
              </div>

              {/* Bio-glow effect */}
              <div className="absolute -inset-4 bg-[#2d8a8a]/20 rounded-full blur-3xl -z-10 animate-pulse-glow" />
            </div>
          </div>

          {/* Content side */}
          <div ref={contentRef} className="order-1 lg:order-2">
            <div className="reveal-item">
              <span className="inline-block text-[#2d8a8a] text-sm font-medium tracking-wider uppercase mb-4">
                {t('about.badge') as string}
              </span>
            </div>

            <h2 className="reveal-item text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#e8f4f8] mb-6 leading-tight">
              {t('about.title') as string} <span className="text-gradient">{t('about.titleHighlight') as string}</span>
            </h2>

            <div className="reveal-item space-y-4 text-[#e8f4f8]/70 leading-relaxed mb-8">
              <p>{t('about.description1') as string}</p>
              <p>{t('about.description2') as string}</p>
              <p>{t('about.description3') as string}</p>
            </div>

            {/* Stats grid */}
            <div className="reveal-item grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-[#2d8a8a] mx-auto mb-2" />
                  <p className="text-2xl font-serif font-bold text-[#e8f4f8]">{stat.value}</p>
                  <p className="text-xs text-[#e8f4f8]/60">{stat.label as string}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="reveal-item mt-10">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-[#2d8a8a] hover:text-[#4dd0e0] font-medium transition-colors group"
              >
                {t('about.cta') as string}
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
