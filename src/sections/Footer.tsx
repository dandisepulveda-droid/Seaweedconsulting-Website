import { ArrowUp, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: t('nav.about'), href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    services: [
      { name: t('services.service1.title'), href: '#services' },
      { name: t('services.service2.title'), href: '#services' },
      { name: t('services.service3.title'), href: '#services' },
      { name: t('services.service4.title'), href: '#services' }
    ],
    resources: [
      { name: t('nav.blog'), href: '#' },
      { name: 'Case Studies', href: '#projects' },
      { name: t('nav.faq'), href: '#' },
      { name: 'Documentation', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#0a1a1a] border-t border-white/5">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2d8a8a]/50 to-transparent" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2d8a8a] to-[#1a5c5c] rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl font-bold">S</span>
              </div>
              <span className="text-[#e8f4f8] font-serif text-xl font-semibold">
                Seaweed<span className="text-[#2d8a8a]">Consulting</span>
              </span>
            </a>
            <p className="text-[#e8f4f8]/60 text-sm leading-relaxed mb-6 max-w-xs">
              {t('footer.tagline')}
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 hover:bg-[#2d8a8a]/20 rounded-lg flex items-center justify-center text-[#e8f4f8]/60 hover:text-[#2d8a8a] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-[#e8f4f8] font-medium mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-[#e8f4f8]/60 hover:text-[#2d8a8a] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-[#e8f4f8] font-medium mb-4">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-[#e8f4f8]/60 hover:text-[#2d8a8a] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="text-[#e8f4f8] font-medium mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-[#e8f4f8]/60 hover:text-[#2d8a8a] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-[#e8f4f8] font-medium mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#e8f4f8]/60 hover:text-[#2d8a8a] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#e8f4f8]/40 text-sm">
            © {new Date().getFullYear()} SeaweedConsulting. {t('footer.copyright')}
          </p>
          
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#e8f4f8]/60 hover:text-[#2d8a8a] transition-colors group"
          >
            <span className="text-sm">{t('footer.backToTop')}</span>
            <div className="w-8 h-8 bg-white/5 group-hover:bg-[#2d8a8a]/20 rounded-full flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
