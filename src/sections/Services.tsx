import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Beaker, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const { t } = useLanguage();

  const services = [
    {
      number: '01',
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      icon: TrendingUp,
      image: '/service-market.jpg',
      features: t('services.service1.features') as string[]
    },
    {
      number: '02',
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      icon: Beaker,
      image: '/service-product.jpg',
      features: t('services.service2.features') as string[]
    },
    {
      number: '03',
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      icon: Truck,
      image: '/service-supply.jpg',
      features: t('services.service3.features') as string[]
    },
    {
      number: '04',
      title: t('services.service4.title'),
      description: t('services.service4.description'),
      icon: ShieldCheck,
      image: '/service-regulatory.jpg',
      features: t('services.service4.features') as string[]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const headerTrigger = ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            headerRef.current?.querySelectorAll('.reveal-item') || [],
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(headerTrigger);

      // Cards stagger animation
      const cardsTrigger = ScrollTrigger.create({
        trigger: cardsRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo(
            cardsRef.current?.querySelectorAll('.service-card') || [],
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(cardsTrigger);
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a1a1a] overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2d8a8a]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1a5c5c]/10 rounded-full blur-3xl" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <span className="reveal-item inline-block text-[#2d8a8a] text-sm font-medium tracking-wider uppercase mb-4">
            {t('services.badge')}
          </span>
          <h2 className="reveal-item text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#e8f4f8] mb-6">
            {t('services.title')} <span className="text-gradient">{t('services.titleHighlight')}</span>
          </h2>
          <p className="reveal-item text-[#e8f4f8]/70 text-lg max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative h-full glass rounded-2xl overflow-hidden card-lift">
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title as string}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      activeCard === index ? 'scale-110 saturate-100' : 'scale-100 saturate-50'
                    }`}
                  />
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    activeCard === index 
                      ? 'bg-gradient-to-t from-[#0a1a1a] via-[#0a1a1a]/80 to-[#0a1a1a]/40' 
                      : 'bg-gradient-to-t from-[#0a1a1a] via-[#0a1a1a]/90 to-[#0a1a1a]/70'
                  }`} />
                </div>

                {/* Content */}
                <div className="relative p-6 lg:p-8 h-full flex flex-col min-h-[400px]">
                  {/* Number */}
                  <span className="text-6xl lg:text-7xl font-serif font-bold text-[#2d8a8a]/20 absolute top-4 right-4">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#2d8a8a]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2d8a8a]/40 transition-colors">
                    <service.icon className="w-7 h-7 text-[#2d8a8a]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#e8f4f8] mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#e8f4f8]/70 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className={`grid grid-cols-2 gap-2 mb-6 transition-all duration-500 ${
                    activeCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {(service.features as string[]).map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#2d8a8a] rounded-full" />
                        <span className="text-sm text-[#e8f4f8]/60">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`inline-flex items-center gap-2 text-[#2d8a8a] font-medium transition-all duration-500 ${
                      activeCard === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                    }`}
                  >
                    {t('services.cta')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
