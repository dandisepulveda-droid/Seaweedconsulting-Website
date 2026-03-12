import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home') as string, href: '#home' },
    { name: t('nav.about') as string, href: '#about' },
    { name: t('nav.services') as string, href: '#services' },
    { name: t('nav.projects') as string, href: '#projects' },
    { name: t('nav.contact') as string, href: '#contact' },
  ];

  const languages = ['ES', 'EN', 'PT'] as const;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a1a1a]/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2d8a8a] to-[#1a5c5c] rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-white font-serif text-xl font-bold">S</span>
              </div>
              <span className="text-[#e8f4f8] font-serif text-xl font-semibold hidden sm:block">
                Seaweed<span className="text-[#2d8a8a]">Consulting</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="nav-link text-[#e8f4f8]/80 hover:text-[#e8f4f8] text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right side - Language & CTA */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language selector */}
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4 text-[#2d8a8a]" />
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 text-xs font-medium transition-colors ${
                      language === lang
                        ? 'text-[#2d8a8a]'
                        : 'text-[#e8f4f8]/50 hover:text-[#e8f4f8]/80'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="btn-ripple px-5 py-2 bg-[#2d8a8a] hover:bg-[#3aa8a8] text-white text-sm font-medium rounded-full transition-colors"
              >
                {t('nav.contact')}
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#e8f4f8]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-[#0a1a1a]/95 backdrop-blur-xl" />
        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-[#e8f4f8] text-2xl font-serif font-medium hover:text-[#2d8a8a] transition-colors"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile language selector */}
          <div className="flex items-center gap-4 mt-8">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  language === lang
                    ? 'text-[#2d8a8a] border border-[#2d8a8a] rounded'
                    : 'text-[#e8f4f8]/50'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
