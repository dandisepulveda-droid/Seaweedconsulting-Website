import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'EN' | 'ES' | 'PT';

interface Translations {
  [key: string]: string | string[] | Translations;
}

const translations: Record<Language, Translations> = {
  EN: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      faq: 'FAQ',
      blog: 'Blog',
    },
    hero: {
      badge: 'Leading Experts in Seaweed Farming',
      title: 'Seaweed',
      title2: 'Consulting',
      subtitle: 'Sustainable Solutions for a Growing World',
      cta1: 'Explore Our Services',
      cta2: 'Learn More',
      scroll: 'Scroll to Explore',
    },
    about: {
      badge: 'About Us',
      title: 'We Are',
      titleHighlight: 'SeaweedConsulting',
      description1: 'A Brazilian Consulting Firm with over 20 years of experience supporting businesses in the seaweed industry. We combine innovative techniques and timeless insights to provide you with the best possible solutions.',
      description2: 'Our premium seaweed products enhance agricultural productivity and sustainability. Trust our expertise to help your business achieve continued growth and success. Discover how our innovative products can revolutionize your agricultural practices and drive sustainable development.',
      description3: 'Led by Miguel Sepulveda, a Marine Biologist and specialist in Seaweed Farming, our team has developed projects across Brazil, Chile, Peru, Ecuador, Caribbean, Mozambique, Zanzibar, Tunisia, Morocco, and more.',
      cta: 'Read Our Story',
      stats: {
        countries: 'Countries Served',
        experience: 'Years Experience',
        projects: 'Projects Completed',
        solutions: 'Sustainable Solutions',
      },
      badge2: 'Certified',
      badge3: 'Marine Experts',
    },
    services: {
      badge: 'What We Offer',
      title: 'Our',
      titleHighlight: 'Services',
      description: 'Unique solutions tailored to your seaweed business needs. From market analysis to regulatory compliance, we\'ve got you covered.',
      service1: {
        title: 'Market Analysis',
        description: 'In-depth analysis of the seaweed market, including trends, key players, and growth opportunities. Make informed decisions with comprehensive market intelligence.',
        features: ['Market Trends', 'Competitor Analysis', 'Growth Forecasting', 'Price Intelligence'],
      },
      service2: {
        title: 'Product Development',
        description: 'From conceptualization to market launch, we help develop new seaweed-based products with formulation support and production optimization.',
        features: ['Formulation R&D', 'Ingredient Sourcing', 'Process Optimization', 'Quality Testing'],
      },
      service3: {
        title: 'Supply Chain Management',
        description: 'End-to-end supply chain optimization from sourcing to delivery. We ensure efficient procurement, logistics, and quality control.',
        features: ['Procurement', 'Logistics', 'Quality Control', 'Inventory Management'],
      },
      service4: {
        title: 'Regulatory Support',
        description: 'Navigate the complex regulatory landscape with our expert guidance on labeling, safety testing, certifications, and compliance.',
        features: ['Compliance Consulting', 'Certification Support', 'Safety Testing', 'Label Review'],
      },
      cta: 'Learn More',
    },
    projects: {
      badge: 'Our Portfolio',
      title: 'Featured',
      titleHighlight: 'Projects',
      description: 'Explore our work across the globe. From sustainable farming to cutting-edge research, our projects speak for themselves.',
      cta: 'View All Projects',
      categories: {
        harvesting: 'Harvesting',
        farming: 'Farming',
        processing: 'Processing',
        research: 'Research',
        conservation: 'Conservation',
      },
      project1: {
        title: 'Offshore Harvest Operations',
        description: 'Large-scale seaweed harvesting with sustainable practices',
      },
      project2: {
        title: 'Tropical Seaweed Farm',
        description: 'Aerial view of our extensive farming operations',
      },
      project3: {
        title: 'Quality Harvest Collection',
        description: 'Premium seaweed selection for food-grade products',
      },
      project4: {
        title: 'Research & Development Lab',
        description: 'Advanced biotechnology research for product innovation',
      },
      project5: {
        title: 'Traditional Drying Facility',
        description: 'Combining traditional methods with modern quality control',
      },
      project6: {
        title: 'Marine Ecosystem Restoration',
        description: 'Kelp forest restoration for biodiversity enhancement',
      },
    },
    stats: {
      badge: 'Industry Impact',
      title: 'The Power of',
      titleHighlight: 'Seaweed',
      description: 'Seaweed farming is transforming industries and helping the planet. Here\'s the impact we\'re making together.',
      stat1: {
        label: 'Global Market by 2035',
        description: 'Seaweed farming industry projected growth',
      },
      stat2: {
        label: 'Methane Reduction',
        description: 'Potential reduction in cattle emissions',
      },
      stat3: {
        label: 'Annual Growth Rate',
        description: 'CAGR for seaweed farming market',
      },
      stat4: {
        label: 'Tons of CO₂',
        description: 'Annual carbon sequestration potential',
      },
      sectionTitle: 'Why Seaweed Matters',
      sectionDesc: 'Seaweed is one of the most sustainable crops on Earth. It requires no freshwater, no fertilizer, and no land. It grows rapidly, absorbs CO₂, and provides habitat for marine life. From food to biofuels, cosmetics to pharmaceuticals, seaweed is the resource of the future.',
      tags: ['Carbon Negative', 'Ocean Friendly', 'Sustainable', 'Nutrient Rich'],
      highlight: 'Faster growth than land plants',
    },
    contact: {
      badge: 'Get in Touch',
      title: 'Contact',
      titleHighlight: 'Us',
      description: 'Ready to start your seaweed project? Reach out to us and let\'s discuss how we can help you achieve your goals.',
      infoTitle: 'Let\'s Talk',
      infoDesc: 'Whether you\'re looking to start a new seaweed farm, develop products, or need expert consulting, we\'re here to help. Reach out through any of the channels below.',
      formTitle: 'Send us a Message',
      name: 'Full Name',
      namePlaceholder: 'John Doe',
      email: 'Email Address',
      emailPlaceholder: 'john@example.com',
      phone: 'Phone Number (Optional)',
      phonePlaceholder: '+1 234 567 890',
      message: 'Your Message',
      messagePlaceholder: 'Tell us about your project...',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent!',
      successDesc: 'We\'ll get back to you within 24 hours.',
      trustedBy: 'Trusted by industry leaders',
      clients: 'Clients',
      worldwide: 'Worldwide',
    },
    footer: {
      tagline: 'Leading experts in sustainable seaweed farming. Transforming oceans into opportunities for a better future.',
      company: 'Company',
      services: 'Services',
      resources: 'Resources',
      legal: 'Legal',
      backToTop: 'Back to top',
      copyright: 'All rights reserved.',
    },
  },
  ES: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      projects: 'Proyectos',
      contact: 'Contacto',
      faq: 'FAQ',
      blog: 'Blog',
    },
    hero: {
      badge: 'Expertos Líderes en Cultivo de Algas',
      title: 'Seaweed',
      title2: 'Consulting',
      subtitle: 'Soluciones Sostenibles para un Mundo en Crecimiento',
      cta1: 'Explora Nuestros Servicios',
      cta2: 'Conoce Más',
      scroll: 'Desplázate para Explorar',
    },
    about: {
      badge: 'Sobre Nosotros',
      title: 'Somos',
      titleHighlight: 'SeaweedConsulting',
      description1: 'Una empresa consultora brasileña con más de 20 años de experiencia apoyando a empresas en la industria de las algas. Combinamos técnicas innovadoras y conocimientos atemporales para brindarte las mejores soluciones posibles.',
      description2: 'Nuestros productos premium de algas mejoran la productividad y sostenibilidad agrícola. Confía en nuestra experiencia para ayudar a tu negocio a lograr un crecimiento continuo y el éxito. Descubre cómo nuestros productos innovadores pueden revolucionar tus prácticas agrícolas e impulsar el desarrollo sostenible.',
      description3: 'Dirigido por Miguel Sepulveda, Biólogo Marino y especialista en Cultivo de Algas, nuestro equipo ha desarrollado proyectos en Brasil, Chile, Perú, Ecuador, el Caribe, Mozambique, Zanzíbar, Túnez, Marruecos y más.',
      cta: 'Lee Nuestra Historia',
      stats: {
        countries: 'Países Atendidos',
        experience: 'Años de Experiencia',
        projects: 'Proyectos Completados',
        solutions: 'Soluciones Sostenibles',
      },
      badge2: 'Certificados',
      badge3: 'Expertos Marinos',
    },
    services: {
      badge: 'Lo Que Ofrecemos',
      title: 'Nuestros',
      titleHighlight: 'Servicios',
      description: 'Soluciones únicas adaptadas a las necesidades de tu negocio de algas. Desde análisis de mercado hasta cumplimiento regulatorio, te tenemos cubierto.',
      service1: {
        title: 'Análisis de Mercado',
        description: 'Análisis profundo del mercado de algas, incluyendo tendencias, actores clave y oportunidades de crecimiento. Toma decisiones informadas con inteligencia de mercado integral.',
        features: ['Tendencias del Mercado', 'Análisis de Competidores', 'Pronóstico de Crecimiento', 'Inteligencia de Precios'],
      },
      service2: {
        title: 'Desarrollo de Productos',
        description: 'Desde la conceptualización hasta el lanzamiento al mercado, ayudamos a desarrollar nuevos productos a base de algas con soporte de formulación y optimización de producción.',
        features: ['I+D de Formulación', 'Suministro de Ingredientes', 'Optimización de Procesos', 'Pruebas de Calidad'],
      },
      service3: {
        title: 'Gestión de Cadena de Suministro',
        description: 'Optimización integral de la cadena de suministro desde el abastecimiento hasta la entrega. Garantizamos una adquisición, logística y control de calidad eficientes.',
        features: ['Adquisición', 'Logística', 'Control de Calidad', 'Gestión de Inventario'],
      },
      service4: {
        title: 'Soporte Regulatorio',
        description: 'Navega el complejo panorama regulatorio con nuestra guía experta en etiquetado, pruebas de seguridad, certificaciones y cumplimiento.',
        features: ['Consultoría de Cumplimiento', 'Soporte de Certificación', 'Pruebas de Seguridad', 'Revisión de Etiquetas'],
      },
      cta: 'Conoce Más',
    },
    projects: {
      badge: 'Nuestro Portafolio',
      title: 'Proyectos',
      titleHighlight: 'Destacados',
      description: 'Explora nuestro trabajo en todo el mundo. Desde cultivo sostenible hasta investigación de vanguardia, nuestros proyectos hablan por sí mismos.',
      cta: 'Ver Todos los Proyectos',
      categories: {
        harvesting: 'Cosecha',
        farming: 'Cultivo',
        processing: 'Procesamiento',
        research: 'Investigación',
        conservation: 'Conservación',
      },
      project1: {
        title: 'Operaciones de Cosecha en Alta Mar',
        description: 'Cosecha de algas a gran escala con prácticas sostenibles',
      },
      project2: {
        title: 'Granja Tropical de Algas',
        description: 'Vista aérea de nuestras extensas operaciones de cultivo',
      },
      project3: {
        title: 'Colección de Cosecha de Calidad',
        description: 'Selección premium de algas para productos de grado alimenticio',
      },
      project4: {
        title: 'Laboratorio de I+D',
        description: 'Investigación avanzada en biotecnología para innovación de productos',
      },
      project5: {
        title: 'Instalación de Secado Tradicional',
        description: 'Combinando métodos tradicionales con control de calidad moderno',
      },
      project6: {
        title: 'Restauración de Ecosistemas Marinos',
        description: 'Restauración de bosques de kelp para mejora de biodiversidad',
      },
    },
    stats: {
      badge: 'Impacto en la Industria',
      title: 'El Poder de las',
      titleHighlight: 'Algas',
      description: 'El cultivo de algas está transformando industrias y ayudando al planeta. Este es el impacto que estamos logrando juntos.',
      stat1: {
        label: 'Mercado Global para 2035',
        description: 'Crecimiento proyectado de la industria de cultivo de algas',
      },
      stat2: {
        label: 'Reducción de Metano',
        description: 'Reducción potencial en emisiones de ganado',
      },
      stat3: {
        label: 'Tasa de Crecimiento Anual',
        description: 'CAGR para el mercado de cultivo de algas',
      },
      stat4: {
        label: 'Toneladas de CO₂',
        description: 'Potencial de secuestro de carbono anual',
      },
      sectionTitle: 'Por Qué las Algas Importan',
      sectionDesc: 'Las algas son uno de los cultivos más sostenibles de la Tierra. No requieren agua dulce, fertilizantes ni tierra. Crecen rápidamente, absorben CO₂ y proporcionan hábitat para la vida marina. Desde alimentos hasta biocombustibles, cosméticos hasta farmacéuticos, las algas son el recurso del futuro.',
      tags: ['Carbono Negativo', 'Amigable con el Océano', 'Sostenible', 'Rico en Nutrientes'],
      highlight: 'Crecimiento 10x más rápido que las plantas terrestres',
    },
    contact: {
      badge: 'Ponte en Contacto',
      title: 'Contáct',
      titleHighlight: 'anos',
      description: '¿Listo para iniciar tu proyecto de algas? Comunícate con nosotros y hablemos de cómo podemos ayudarte a alcanzar tus objetivos.',
      infoTitle: 'Hablemos',
      infoDesc: 'Ya sea que busques iniciar una nueva granja de algas, desarrollar productos o necesites consultoría experta, estamos aquí para ayudarte. Comunícate a través de cualquiera de los canales a continuación.',
      formTitle: 'Envíanos un Mensaje',
      name: 'Nombre Completo',
      namePlaceholder: 'Juan Pérez',
      email: 'Correo Electrónico',
      emailPlaceholder: 'juan@ejemplo.com',
      phone: 'Teléfono (Opcional)',
      phonePlaceholder: '+34 234 567 890',
      message: 'Tu Mensaje',
      messagePlaceholder: 'Cuéntanos sobre tu proyecto...',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      successTitle: '¡Mensaje Enviado!',
      successDesc: 'Te responderemos dentro de 24 horas.',
      trustedBy: 'Confiado por líderes de la industria',
      clients: 'Clientes',
      worldwide: 'En todo el mundo',
    },
    footer: {
      tagline: 'Expertos líderes en cultivo sostenible de algas. Transformando océanos en oportunidades para un futuro mejor.',
      company: 'Empresa',
      services: 'Servicios',
      resources: 'Recursos',
      legal: 'Legal',
      backToTop: 'Volver arriba',
      copyright: 'Todos los derechos reservados.',
    },
  },
  PT: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      projects: 'Projetos',
      contact: 'Contato',
      faq: 'FAQ',
      blog: 'Blog',
    },
    hero: {
      badge: 'Especialistas Líderes em Cultivo de Algas',
      title: 'Seaweed',
      title2: 'Consulting',
      subtitle: 'Soluções Sustentáveis para um Mundo em Crescimento',
      cta1: 'Explore Nossos Serviços',
      cta2: 'Saiba Mais',
      scroll: 'Role para Explorar',
    },
    about: {
      badge: 'Sobre Nós',
      title: 'Somos a',
      titleHighlight: 'SeaweedConsulting',
      description1: 'Uma empresa consultora brasileira com mais de 20 anos de experiência apoiando empresas na indústria de algas. Combinamos técnicas inovadoras e conhecimentos atemporais para oferecer as melhores soluções possíveis.',
      description2: 'Nossos produtos premium de algas melhoram a produtividade e sustentabilidade agrícola. Confie em nossa experiência para ajudar seu negócio a alcançar crescimento contínuo e sucesso. Descubra como nossos produtos inovadores podem revolucionar suas práticas agrícolas e impulsionar o desenvolvimento sustentável.',
      description3: 'Liderado por Miguel Sepulveda, Biólogo Marinho e especialista em Cultivo de Algas, nossa equipe desenvolveu projetos no Brasil, Chile, Peru, Equador, Caribe, Moçambique, Zanzibar, Tunísia, Marrocos e mais.',
      cta: 'Leia Nossa História',
      stats: {
        countries: 'Países Atendidos',
        experience: 'Anos de Experiência',
        projects: 'Projetos Concluídos',
        solutions: 'Soluções Sustentáveis',
      },
      badge2: 'Certificados',
      badge3: 'Especialistas Marinhos',
    },
    services: {
      badge: 'O Que Oferecemos',
      title: 'Nossos',
      titleHighlight: 'Serviços',
      description: 'Soluções únicas adaptadas às necessidades do seu negócio de algas. Desde análise de mercado até conformidade regulatória, temos você coberto.',
      service1: {
        title: 'Análise de Mercado',
        description: 'Análise aprofundada do mercado de algas, incluindo tendências, principais players e oportunidades de crescimento. Tome decisões informadas com inteligência de mercado abrangente.',
        features: ['Tendências de Mercado', 'Análise de Concorrentes', 'Previsão de Crescimento', 'Inteligência de Preços'],
      },
      service2: {
        title: 'Desenvolvimento de Produtos',
        description: 'Da conceptualização ao lançamento no mercado, ajudamos a desenvolver novos produtos à base de algas com suporte de formulação e otimização de produção.',
        features: ['P&D de Formulação', 'Sourcing de Ingredientes', 'Otimização de Processos', 'Testes de Qualidade'],
      },
      service3: {
        title: 'Gestão da Cadeia de Suprimentos',
        description: 'Otimização completa da cadeia de suprimentos desde o sourcing até a entrega. Garantimos aquisição, logística e controle de qualidade eficientes.',
        features: ['Aquisição', 'Logística', 'Controle de Qualidade', 'Gestão de Estoque'],
      },
      service4: {
        title: 'Suporte Regulatório',
        description: 'Navegue pelo complexo cenário regulatório com nossa orientação especializada em rotulagem, testes de segurança, certificações e conformidade.',
        features: ['Consultoria de Conformidade', 'Suporte de Certificação', 'Testes de Segurança', 'Revisão de Rótulos'],
      },
      cta: 'Saiba Mais',
    },
    projects: {
      badge: 'Nosso Portfólio',
      title: 'Projetos',
      titleHighlight: 'Destacados',
      description: 'Explore nosso trabalho ao redor do mundo. Do cultivo sustentável à pesquisa de ponta, nossos projetos falam por si mesmos.',
      cta: 'Ver Todos os Projetos',
      categories: {
        harvesting: 'Colheita',
        farming: 'Cultivo',
        processing: 'Processamento',
        research: 'Pesquisa',
        conservation: 'Conservação',
      },
      project1: {
        title: 'Operações de Colheita Offshore',
        description: 'Colheita de algas em larga escala com práticas sustentáveis',
      },
      project2: {
        title: 'Fazenda Tropical de Algas',
        description: 'Vista aérea de nossas extensas operações de cultivo',
      },
      project3: {
        title: 'Coleção de Colheita de Qualidade',
        description: 'Seleção premium de algas para produtos de grau alimentício',
      },
      project4: {
        title: 'Laboratório de P&D',
        description: 'Pesquisa avançada em biotecnologia para inovação de produtos',
      },
      project5: {
        title: 'Instalação de Secagem Tradicional',
        description: 'Combinando métodos tradicionais com controle de qualidade moderno',
      },
      project6: {
        title: 'Restauração de Ecossistemas Marinhos',
        description: 'Restauração de florestas de kelp para melhoria da biodiversidade',
      },
    },
    stats: {
      badge: 'Impacto na Indústria',
      title: 'O Poder das',
      titleHighlight: 'Algas',
      description: 'O cultivo de algas está transformando indústrias e ajudando o planeta. Este é o impacto que estamos alcançando juntos.',
      stat1: {
        label: 'Mercado Global até 2035',
        description: 'Crescimento projetado da indústria de cultivo de algas',
      },
      stat2: {
        label: 'Redução de Metano',
        description: 'Redução potencial em emissões de gado',
      },
      stat3: {
        label: 'Taxa de Crescimento Anual',
        description: 'CAGR para o mercado de cultivo de algas',
      },
      stat4: {
        label: 'Toneladas de CO₂',
        description: 'Potencial de sequestro de carbono anual',
      },
      sectionTitle: 'Por Que as Algas Importam',
      sectionDesc: 'As algas são uma das culturas mais sustentáveis da Terra. Não requerem água doce, fertilizantes ou terra. Crescem rapidamente, absorvem CO₂ e fornecem habitat para a vida marinha. De alimentos a biocombustíveis, cosméticos a farmacêuticos, as algas são o recurso do futuro.',
      tags: ['Carbono Negativo', 'Amigável com o Oceano', 'Sustentável', 'Rico em Nutrientes'],
      highlight: 'Crescimento 10x mais rápido que plantas terrestres',
    },
    contact: {
      badge: 'Entre em Contato',
      title: 'Fale',
      titleHighlight: 'Conosco',
      description: 'Pronto para iniciar seu projeto de algas? Entre em contato conosco e vamos discutir como podemos ajudá-lo a alcançar seus objetivos.',
      infoTitle: 'Vamos Conversar',
      infoDesc: 'Seja para iniciar uma nova fazenda de algas, desenvolver produtos ou precisar de consultoria especializada, estamos aqui para ajudar. Entre em contato através de qualquer um dos canais abaixo.',
      formTitle: 'Envie uma Mensagem',
      name: 'Nome Completo',
      namePlaceholder: 'João Silva',
      email: 'Endereço de Email',
      emailPlaceholder: 'joao@exemplo.com',
      phone: 'Telefone (Opcional)',
      phonePlaceholder: '+55 24 99946-3697',
      message: 'Sua Mensagem',
      messagePlaceholder: 'Conte-nos sobre seu projeto...',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      successTitle: 'Mensagem Enviada!',
      successDesc: 'Responderemos em até 24 horas.',
      trustedBy: 'Confiado por líderes da indústria',
      clients: 'Clientes',
      worldwide: 'No mundo todo',
    },
    footer: {
      tagline: 'Especialistas líderes em cultivo sustentável de algas. Transformando oceanos em oportunidades para um futuro melhor.',
      company: 'Empresa',
      services: 'Serviços',
      resources: 'Recursos',
      legal: 'Legal',
      backToTop: 'Voltar ao topo',
      copyright: 'Todos os direitos reservados.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string): string | string[] => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value as string[];
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
