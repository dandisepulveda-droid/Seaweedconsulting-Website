import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const { t } = useLanguage();

  const categories = t('projects.categories') as unknown as Record<string, string>;

  const projects = [
    {
      title: t('projects.project1.title') as string,
      location: 'Rio de Janeiro, Brazil',
      year: '2024',
      image: '/project-1.jpg',
      description: t('projects.project1.description') as string,
      category: categories.harvesting
    },
    {
      title: t('projects.project2.title') as string,
      location: 'Zanzibar, Tanzania',
      year: '2023',
      image: '/project-2.jpg',
      description: t('projects.project2.description') as string,
      category: categories.farming
    },
    {
      title: t('projects.project3.title') as string,
      location: 'Maine, USA',
      year: '2024',
      image: '/project-3.jpg',
      description: t('projects.project3.description') as string,
      category: categories.processing
    },
    {
      title: t('projects.project4.title') as string,
      location: 'São Paulo, Brazil',
      year: '2023',
      image: '/project-4.jpg',
      description: t('projects.project4.description') as string,
      category: categories.research
    },
    {
      title: t('projects.project5.title') as string,
      location: 'Indonesia',
      year: '2022',
      image: '/project-5.jpg',
      description: t('projects.project5.description') as string,
      category: categories.processing
    },
    {
      title: t('projects.project6.title') as string,
      location: 'Chile',
      year: '2024',
      image: '/project-6.jpg',
      description: t('projects.project6.description') as string,
      category: categories.conservation
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

      // Masonry parallax columns
      const leftCol = gridRef.current?.querySelector('.col-left');
      const centerCol = gridRef.current?.querySelector('.col-center');
      const rightCol = gridRef.current?.querySelector('.col-right');

      const parallaxTrigger = ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (leftCol) gsap.set(leftCol, { y: progress * -30 });
          if (centerCol) gsap.set(centerCol, { y: progress * -80 });
          if (rightCol) gsap.set(rightCol, { y: progress * -40 });
        }
      });
      triggersRef.current.push(parallaxTrigger);

      // Card reveal animations
      const cards = gridRef.current?.querySelectorAll('.project-card');
      cards?.forEach((card, index) => {
        const cardTrigger = ScrollTrigger.create({
          trigger: card,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo(
              card,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, delay: index * 0.1, ease: 'power3.out' }
            );
          },
          once: true
        });
        triggersRef.current.push(cardTrigger);
      });
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a1a1a] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a1a] via-[#0d2020] to-[#0a1a1a]" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <span className="reveal-item inline-block text-[#2d8a8a] text-sm font-medium tracking-wider uppercase mb-4">
            {t('projects.badge') as string}
          </span>
          <h2 className="reveal-item text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#e8f4f8] mb-6">
            {t('projects.title') as string} <span className="text-gradient">{t('projects.titleHighlight') as string}</span>
          </h2>
          <p className="reveal-item text-[#e8f4f8]/70 text-lg max-w-2xl mx-auto">
            {t('projects.description') as string}
          </p>
        </div>

        {/* Masonry Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-left space-y-6">
            {projects.filter((_, i) => i % 3 === 0).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* Center Column - Offset */}
          <div className="col-center space-y-6 lg:mt-16">
            {projects.filter((_, i) => i % 3 === 1).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* Right Column */}
          <div className="col-right space-y-6">
            {projects.filter((_, i) => i % 3 === 2).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#2d8a8a] text-[#2d8a8a] hover:bg-[#2d8a8a] hover:text-white rounded-full transition-all duration-300 group"
          >
            {t('projects.cta') as string}
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    location: string;
    year: string;
    image: string;
    description: string;
    category: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card group relative overflow-hidden rounded-2xl img-zoom">
      {/* Image */}
      <div className="aspect-[4/5] relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a1a] via-[#0a1a1a]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#2d8a8a]/80 text-white text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Water fill effect on hover */}
          <div className="water-fill absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10">
            <h3 className="text-xl font-serif font-bold text-[#e8f4f8] mb-2 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            
            <p className="text-[#e8f4f8]/70 text-sm mb-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {project.description}
            </p>
            
            <div className="flex items-center gap-4 text-xs text-[#e8f4f8]/60">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
