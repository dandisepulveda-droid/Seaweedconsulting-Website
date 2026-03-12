import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Droplets, Sprout, Recycle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const hasAnimated = useRef(false);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const { t } = useLanguage();

  const stats = [
    {
      icon: TrendingUp,
      value: 17,
      suffix: 'B',
      prefix: '$',
      label: t('stats.stat1.label'),
      description: t('stats.stat1.description')
    },
    {
      icon: Droplets,
      value: 99,
      suffix: '%',
      prefix: '',
      label: t('stats.stat2.label'),
      description: t('stats.stat2.description')
    },
    {
      icon: Sprout,
      value: 6.2,
      suffix: '%',
      prefix: '',
      label: t('stats.stat3.label'),
      description: t('stats.stat3.description')
    },
    {
      icon: Recycle,
      value: 50,
      suffix: 'M',
      prefix: '',
      label: t('stats.stat4.label'),
      description: t('stats.stat4.description')
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const statsTrigger = ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 75%',
        onEnter: () => {
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            
            // Animate cards
            gsap.fromTo(
              statsRef.current?.querySelectorAll('.stat-card') || [],
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
            );

            // Animate counters
            stats.forEach((stat, index) => {
              const obj = { value: 0 };
              gsap.to(obj, {
                value: stat.value,
                duration: 2,
                delay: 0.5 + index * 0.2,
                ease: 'power2.out',
                onUpdate: () => {
                  setCounts(prev => {
                    const newCounts = [...prev];
                    newCounts[index] = Number(obj.value.toFixed(1));
                    return newCounts;
                  });
                }
              });
            });
          }
        },
        once: true
      });
      triggersRef.current.push(statsTrigger);
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  const tags = t('stats.tags') as string[];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a1a1a] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2d8a8a]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#2d8a8a] text-sm font-medium tracking-wider uppercase mb-4">
            {t('stats.badge')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#e8f4f8] mb-6">
            {t('stats.title')} <span className="text-gradient">{t('stats.titleHighlight')}</span>
          </h2>
          <p className="text-[#e8f4f8]/70 text-lg max-w-2xl mx-auto">
            {t('stats.description')}
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card glass rounded-2xl p-6 lg:p-8 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#2d8a8a]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2d8a8a]/30 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-[#2d8a8a]" />
              </div>

              {/* Value */}
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-serif font-bold text-[#e8f4f8]">
                  {stat.prefix}{counts[index]}{stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-medium text-[#e8f4f8] mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#e8f4f8]/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 glass rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#e8f4f8] mb-4">
                {t('stats.sectionTitle')}
              </h3>
              <p className="text-[#e8f4f8]/70 leading-relaxed mb-6">
                {t('stats.sectionDesc')}
              </p>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#2d8a8a]/20 text-[#2d8a8a] text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="/project-6.jpg"
                  alt="Kelp forest ecosystem"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a1a]/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4">
                <p className="text-[#2d8a8a] font-serif text-2xl font-bold">10x</p>
                <p className="text-[#e8f4f8]/60 text-sm">{t('stats.highlight')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
