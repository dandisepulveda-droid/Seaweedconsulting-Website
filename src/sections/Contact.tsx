import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Phone, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section reveal
      const sectionTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo(
            sectionRef.current?.querySelectorAll('.reveal-item') || [],
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
          );
        },
        once: true
      });
      triggersRef.current.push(sectionTrigger);
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Praia Vermelha, Ilha Grande, Rio de Janeiro, Brazil',
      href: '#'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'seaweedconsulting@gmail.com',
      href: 'mailto:seaweedconsulting@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+55 24 999463697',
      href: 'tel:+5524999463697'
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a1a1a] overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2d8a8a]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1a5c5c]/10 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal-item inline-block text-[#2d8a8a] text-sm font-medium tracking-wider uppercase mb-4">
            {t('contact.badge') as string}
          </span>
          <h2 className="reveal-item text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#e8f4f8] mb-6">
            {t('contact.title') as string} <span className="text-gradient">{t('contact.titleHighlight') as string}</span>
          </h2>
          <p className="reveal-item text-[#e8f4f8]/70 text-lg max-w-2xl mx-auto">
            {t('contact.description') as string}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="reveal-item">
              <h3 className="text-2xl font-serif font-bold text-[#e8f4f8] mb-6">
                {t('contact.infoTitle') as string}
              </h3>
              <p className="text-[#e8f4f8]/70 leading-relaxed mb-8">
                {t('contact.infoDesc') as string}
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="reveal-item flex items-start gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#2d8a8a]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d8a8a]/30 transition-colors">
                    <item.icon className="w-5 h-5 text-[#2d8a8a]" />
                  </div>
                  <div>
                    <p className="text-[#e8f4f8]/60 text-sm mb-1">{item.label}</p>
                    <p className="text-[#e8f4f8] font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social proof */}
            <div className="reveal-item glass rounded-xl p-6">
              <p className="text-[#e8f4f8]/60 text-sm mb-4">{t('contact.trustedBy') as string}</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2d8a8a] to-[#1a5c5c] border-2 border-[#0a1a1a] flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">{String.fromCharCode(64 + i)}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[#e8f4f8] font-medium">100+ {t('contact.clients') as string}</p>
                  <p className="text-[#e8f4f8]/60 text-sm">{t('contact.worldwide') as string}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="reveal-item glass rounded-2xl p-6 lg:p-10"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-[#2d8a8a]/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-[#2d8a8a]" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#e8f4f8] mb-2">
                    {t('contact.successTitle') as string}
                  </h3>
                  <p className="text-[#e8f4f8]/70">
                    {t('contact.successDesc') as string}
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-serif font-bold text-[#e8f4f8] mb-6">
                    {t('contact.formTitle') as string}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#e8f4f8]/80">
                        {t('contact.name') as string}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.namePlaceholder') as string}
                        required
                        className="bg-white/5 border-white/10 text-[#e8f4f8] placeholder:text-[#e8f4f8]/30 focus:border-[#2d8a8a] focus:ring-[#2d8a8a]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#e8f4f8]/80">
                        {t('contact.email') as string}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.emailPlaceholder') as string}
                        required
                        className="bg-white/5 border-white/10 text-[#e8f4f8] placeholder:text-[#e8f4f8]/30 focus:border-[#2d8a8a] focus:ring-[#2d8a8a]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="phone" className="text-[#e8f4f8]/80">
                      {t('contact.phone') as string}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.phonePlaceholder') as string}
                      className="bg-white/5 border-white/10 text-[#e8f4f8] placeholder:text-[#e8f4f8]/30 focus:border-[#2d8a8a] focus:ring-[#2d8a8a]/20"
                    />
                  </div>

                  <div className="space-y-2 mb-8">
                    <Label htmlFor="message" className="text-[#e8f4f8]/80">
                      {t('contact.message') as string}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.messagePlaceholder') as string}
                      required
                      rows={5}
                      className="bg-white/5 border-white/10 text-[#e8f4f8] placeholder:text-[#e8f4f8]/30 focus:border-[#2d8a8a] focus:ring-[#2d8a8a]/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2d8a8a] hover:bg-[#3aa8a8] text-white py-6 rounded-xl font-medium transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        {t('contact.sending') as string}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t('contact.send') as string}
                      </>
                    )}
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
