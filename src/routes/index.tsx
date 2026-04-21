import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ArrowDownRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: 'AF Business Services | Precise Bookkeeping & Enterprise Accounting' },
      { name: 'description', content: 'Audit-ready financials, strategic tax planning, and expert accounting guidance for scaling businesses in Orlando and beyond. Bilingual support (EN/ES).' }
    ]
  })
})

const translations = {
  EN: {
    nav: { services: "Services", about: "About Us", testimonials: "Testimonials", initiate: "Contact Us" },
    hero: {
      location: "Orlando, FL / Nationwide",
      title1: "Financial",
      title2: "Clarity",
      title3: "Delivered.",
      desc: "Everything you need to start and run your business with confidence. We handle the compliance, paperwork, and tax strategy so you can focus on scaling.",
      cta: "Get Started",
    },
    services: [
      { num: "01", title: "Business Formation", desc: "Start your business with confidence. End-to-end registration for LLCs, Corporations, and DBAs across all 50 states." },
      { num: "02", title: "Financial Bookkeeping", desc: "Meticulous transaction management and reconciliation. Clean, organized files and monthly reporting." },
      { num: "03", title: "Tax Strategy & Prep", desc: "Professional preparation for individuals and entities. Minimized liability and total IRS compliance." },
      { num: "04", title: "Payroll & Sales Tax", desc: "Accurate processing in full compliance with state regulations and labor laws. Zero unnecessary fines." }
    ],
    reviews: [
      { name: "Alybe Moreno", text: "Excellent professional. Filed my tax return quickly, guaranteeing excellent advice on tax credits and deductions according to state and IRS laws.", rating: "5.0" },
      { name: "Gabriela Vestita", text: "A person you can trust, attentive, professional and fast, 100% recommended.", rating: "5.0" },
      { name: "Nelson Guedez", text: "Ariana thank you very much for your services, congratulations for your special and careful attention, your professional and outstanding advice highlights your ethics.", rating: "5.0" }
    ],
    stats: [
      { label: "States Served", value: "50" },
      { label: "Years Experience", value: "6+" },
      { label: "Five-Star Reviews", value: "160+" },
      { label: "Bilingual Support", value: "EN/ES" }
    ],
    sections: {
      marquee: "SYSTEMATIC BOOKKEEPING • STRATEGIC TAX ARCHITECTURE • ENTERPRISE FORMATION • PAYROLL COMPLIANCE • ",
      capabilities: "Services",
      index: "Overview.",
      capDesc: "We don't just balance books; we build financial systems that empower scaling enterprises to make decisive, data-backed moves.",
      coreComp: "// Our Expertise",
      director: "About the Founder",
      founder: "Founder",
      aboutP1: "Behind every optimized enterprise is an immaculate set of books. Ariana Glode brings forensic-level financial expertise to clients nationwide, holding an Associate Degree in Accounting Technology.",
      aboutP2: "Originally from Venezuela and based in Orlando since 2015, Ariana launched AF Business Services in 2021. By bridging the gap with fluent English and Spanish support, she ensures diverse business owners have the high-level financial clarity needed to scale without friction.",
      licensed: "+ Licensed Professional",
      bilingual: "+ Bilingual [EN/ES]",
      strategic: "+ Strategic Planning",
      rapid: "+ Rapid Communication",
      clientInt: "Testimonials",
      verified: "Verified Reviews",
      secure: "Secure Form",
      initiate: "Contact",
      protocol: "Us.",
      formName: "01. Full Name",
      formEmail: "02. Email Address",
      formReq: "03. How can we help?",
      formOption1: "Business Formation",
      formOption2: "Financial Bookkeeping",
      formOption3: "Tax Strategy & Prep",
      formOption4: "Payroll & Sales Tax",
      formCta: "Send Message",
      footerDesc: "Professional bookkeeping, tax preparation, and business formation services. Built for scale."
    }
  },
  ES: {
    nav: { services: "Servicios", about: "Sobre Nosotros", testimonials: "Testimonios", initiate: "Contáctanos" },
    hero: {
      location: "Orlando, FL / Nacional",
      title1: "Claridad",
      title2: "Financiera",
      title3: "Entregada.",
      desc: "Todo lo que necesitas para iniciar y administrar tu negocio con confianza. Manejamos el cumplimiento, papeleo y estrategia fiscal para que puedas enfocarte en escalar.",
      cta: "Empezar Ahora",
    },
    services: [
      { num: "01", title: "Formación de Empresas", desc: "Inicia tu negocio con confianza. Registro completo para LLCs, Corporaciones y DBAs en los 50 estados." },
      { num: "02", title: "Contabilidad Financiera", desc: "Gestión meticulosa de transacciones y conciliación. Archivos limpios, organizados y reportes mensuales." },
      { num: "03", title: "Estrategia y Prep. Fiscal", desc: "Preparación profesional para individuos y entidades. Responsabilidad minimizada y cumplimiento total con el IRS." },
      { num: "04", title: "Nómina e Impuestos", desc: "Procesamiento exacto en pleno cumplimiento con las regulaciones estatales y laborales. Cero multas innecesarias." }
    ],
    reviews: [
      { name: "Alybe Moreno", text: "Excelente profesional. Presento mi declaración de impuestos rápidamente garantizando un excelente asesoramiento sobre los créditos y deducciones fiscales.", rating: "5.0" },
      { name: "Gabriela Vestita", text: "Una persona en la que puedes confiar, atenta, profesional y rápida , 100% recomendada.", rating: "5.0" },
      { name: "Nelson Guedez", text: "Ariana muchas gracias por sus servicios, felicitaciones por su atención tan especial y esmerada, su asesoría tan profesional y destacada hace notar su ética.", rating: "5.0" }
    ],
    stats: [
      { label: "Estados Atendidos", value: "50" },
      { label: "Años de Experiencia", value: "6+" },
      { label: "Reseñas de Cinco Estrellas", value: "160+" },
      { label: "Soporte Bilingüe", value: "EN/ES" }
    ],
    sections: {
      marquee: "CONTABILIDAD SISTEMÁTICA • ARQUITECTURA FISCAL ESTRATÉGICA • FORMACIÓN EMPRESARIAL • CUMPLIMIENTO DE NÓMINA • ",
      capabilities: "Servicios",
      index: "Resumen.",
      capDesc: "No solo cuadramos cuentas; construimos sistemas financieros que empoderan a las empresas en crecimiento a tomar decisiones basadas en datos.",
      coreComp: "// Nuestra Experiencia",
      director: "Sobre la Fundadora",
      founder: "Fundadora",
      aboutP1: "Detrás de cada empresa optimizada hay una contabilidad impecable. Ariana Glode aporta experiencia financiera a nivel forense a clientes en todo el país, con un Grado Asociado en Tecnología Contable.",
      aboutP2: "Originaria de Venezuela y radicada en Orlando desde 2015, Ariana lanzó AF Business Services en 2021. Al cerrar la brecha con soporte fluido en inglés y español, asegura que diversos dueños de negocios tengan la claridad financiera necesaria para escalar sin fricción.",
      licensed: "+ Profesional Licenciada",
      bilingual: "+ Bilingüe [EN/ES]",
      strategic: "+ Planificación Estratégica",
      rapid: "+ Comunicación Rápida",
      clientInt: "Testimonios",
      verified: "Reseñas Verificadas",
      secure: "Formulario Seguro",
      initiate: "Contáctanos",
      protocol: ".",
      formName: "01. Nombre Completo",
      formEmail: "02. Correo Electrónico",
      formReq: "03. ¿Cómo podemos ayudar?",
      formOption1: "Formación de Empresas",
      formOption2: "Contabilidad Financiera",
      formOption3: "Estrategia Fiscal",
      formOption4: "Nómina e Impuestos",
      formCta: "Enviar Mensaje",
      footerDesc: "Servicios profesionales de contabilidad, preparación de impuestos y formación empresarial. Construidos para escalar."
    }
  }
}

function LandingPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false }))
  const [lang, setLang] = useState<'EN' | 'ES'>('EN')

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const t = translations[lang]

  return (
    <div className="min-h-screen bg-[#EAE8E3] text-[#0A0A0A] font-sans selection:bg-[#0A0A0A] selection:text-[#EAE8E3]">
      
      {/* Editorial Top Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#EAE8E3] border-b border-[#0A0A0A] flex justify-between items-stretch h-16 mix-blend-normal">
        <div className="flex items-center px-6 border-r border-[#0A0A0A] min-w-[120px] md:min-w-[200px]">
          <span className="font-serif text-3xl font-bold tracking-tighter leading-none flex items-start">
            AF<span className="text-[10px] font-sans ml-1 mt-1">©</span>
          </span>
        </div>
        
        <div className="hidden md:flex flex-1 items-center justify-end px-8 gap-12 font-mono text-[10px] uppercase tracking-[0.2em]">
          <a href="#services" className="hover:line-through transition-all">{t.nav.services}</a>
          <a href="#about" className="hover:line-through transition-all">{t.nav.about}</a>
          <a href="#testimonials" className="hover:line-through transition-all">{t.nav.testimonials}</a>
        </div>

        <button 
          onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')} 
          className="flex items-center justify-center px-6 border-l border-[#0A0A0A] bg-transparent text-[#0A0A0A] font-mono text-[10px] uppercase tracking-[0.2em] transition-colors relative group"
        >
          <div className="flex gap-2 items-center">
             <span className={lang === 'EN' ? "font-bold" : "opacity-50 group-hover:opacity-100 transition-opacity"}>EN</span>
             <span className="opacity-30">/</span>
             <span className={lang === 'ES' ? "font-bold" : "opacity-50 group-hover:opacity-100 transition-opacity"}>ES</span>
          </div>
          {/* Subtle indicator dot for active state */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-6">
            <div className={`h-1 w-1 rounded-full bg-[#0A0A0A] transition-opacity ${lang === 'EN' ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`h-1 w-1 rounded-full bg-[#0A0A0A] transition-opacity ${lang === 'ES' ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </button>

        <a href="#contact" className="flex items-center justify-center px-8 border-l border-[#0A0A0A] bg-[#0A0A0A] text-[#EAE8E3] font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-[#EAE8E3] hover:text-[#0A0A0A] transition-colors cursor-crosshair">
          {t.nav.initiate}
        </a>
      </nav>

      {/* Hero Grid - Terminal / GQ Hybrid */}
      <section className="pt-16 min-h-screen flex flex-col">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 border-b border-[#0A0A0A]">
          
          {/* Left Hero Text */}
          <div className="col-span-1 lg:col-span-7 flex flex-col border-b lg:border-b-0 lg:border-r border-[#0A0A0A]">
            <div className="border-b border-[#0A0A0A] p-4 md:p-6 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.2em]">
              <span>{t.hero.location}</span>
              <span>SYS.TIME: {time} EST</span>
            </div>
            
            <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
              <h1 className="font-serif text-[12vw] lg:text-[7vw] leading-[0.85] tracking-tighter uppercase mb-12">
                {t.hero.title1}<br/>
                <span className="italic text-black/70">{t.hero.title2}</span><br/>
                {t.hero.title3}
              </h1>
              <div className="max-w-lg">
                <p className="font-sans text-xl md:text-2xl font-light leading-snug">
                  {t.hero.desc}
                </p>
              </div>
            </div>
            
            <div className="border-t border-[#0A0A0A] flex">
               <a href="#contact" className="flex-1 p-6 md:p-8 flex justify-between items-center font-serif text-2xl md:text-4xl uppercase tracking-tighter hover:bg-[#0A0A0A] hover:text-[#EAE8E3] transition-colors group cursor-crosshair">
                 <span>{t.hero.cta}</span>
                 <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform" />
               </a>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="col-span-1 lg:col-span-5 bg-[#0A0A0A] relative min-h-[50vh] lg:min-h-auto overflow-hidden group">
            <motion.div style={{ y }} className="absolute inset-[-10%] w-[120%] h-[120%]">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
                alt="Architecture" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000"
              />
            </motion.div>
            <div className="absolute inset-0 border-[16px] border-[#EAE8E3]/10 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#EAE8E3]/50">
              IMG.REF // 001
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="border-b border-[#0A0A0A] overflow-hidden py-4 bg-[#0A0A0A] text-[#EAE8E3]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] gap-8"
        >
          {Array(8).fill(t.sections.marquee).map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#0A0A0A]">
        {t.stats.map((s, i) => (
          <div key={i} className="p-6 md:p-8 border-r last:border-r-0 border-[#0A0A0A] border-b lg:border-b-0 flex flex-col justify-between min-h-[160px] md:min-h-[200px] hover:bg-black/5 transition-colors">
            <div className="flex justify-between items-start mb-8">
               <span className="font-mono text-[10px] uppercase tracking-[0.2em]">0{i+1}</span>
               <ArrowDownRight className="h-4 w-4 opacity-30" />
            </div>
            <div>
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter block mb-2">{s.value}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">{s.label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Services / Capabilities - Terminal List Style */}
      <section id="services" className="border-b border-[#0A0A0A] grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-4 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-[#0A0A0A] flex flex-col justify-between">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl tracking-tighter uppercase leading-[0.9]">{t.sections.capabilities}</h2>
            <p className="mt-8 font-sans text-lg font-light leading-relaxed max-w-sm">
              {t.sections.capDesc}
            </p>
          </div>
          <div className="mt-12 lg:mt-0 font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
            {t.sections.coreComp}
          </div>
        </div>
        
        <div className="lg:col-span-8 flex flex-col">
          {t.services.map((service, i) => (
            <div key={i} className="group border-b last:border-b-0 border-[#0A0A0A] p-6 md:p-12 flex flex-col md:flex-row gap-6 md:gap-12 justify-between hover:bg-[#0A0A0A] hover:text-[#EAE8E3] transition-colors duration-300 cursor-crosshair">
              <div className="flex gap-8 items-start">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] mt-2 opacity-50">/{service.num}</span>
                <h3 className="font-serif text-4xl md:text-5xl uppercase tracking-tighter max-w-sm leading-[0.9]">{service.title}</h3>
              </div>
              <div className="md:w-1/2 flex flex-col justify-between items-start md:items-end gap-8">
                <p className="font-sans text-lg font-light leading-snug md:text-right opacity-80">
                  {service.desc}
                </p>
                <div className="flex h-10 w-10 items-center justify-center border border-current rounded-full group-hover:bg-[#EAE8E3] group-hover:text-[#0A0A0A] transition-colors">
                  <ArrowRight className="h-4 w-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Director / About Section - Editorial Split */}
      <section id="about" className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#0A0A0A]">
        <div className="relative min-h-[60vh] lg:min-h-full bg-[#EAE8E3] group flex items-center justify-center p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-[#0A0A0A] overflow-hidden order-last lg:order-first">
          <div className="relative w-full max-w-sm aspect-[4/5] bg-black/5 overflow-hidden shadow-[12px_12px_0px_rgba(10,10,10,1)] border border-[#0A0A0A]">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1000,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/jLkyrm/image/19571883/file/812c58f7748d8f4e307c3d2a18db48c8.jpg"
              alt="Ariana - Founder"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_2px_rgba(10,10,10,1)]"></div>
            <div className="absolute bottom-4 right-4 bg-[#0A0A0A] text-[#EAE8E3] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
              FIG. 01 // FOUNDER
            </div>
          </div>
        {/* Decorative background lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>

        <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-center order-first lg:order-last">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] mb-12 flex items-center gap-4">
            <span className="h-px w-8 bg-[#0A0A0A]"></span>
            {t.sections.director}
          </div>

          <h2 className="font-serif text-6xl md:text-[6vw] uppercase tracking-tighter leading-[0.8] mb-12">
            Ariana.<br/>
            <span className="italic text-black/50">{t.sections.founder}</span>
          </h2>

          <div className="space-y-8 font-sans text-xl md:text-2xl font-light leading-snug max-w-lg">
            <p>{t.sections.aboutP1}</p>
            <p>{t.sections.aboutP2}</p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-y-4 font-mono text-[10px] uppercase tracking-[0.2em] pt-8 border-t border-[#0A0A0A]">
            <div>{t.sections.licensed}</div>
            <div>{t.sections.bilingual}</div>
            <div>{t.sections.strategic}</div>
            <div>{t.sections.rapid}</div>
          </div>
        </div>
      </section>

      {/* Testimonials - Google Review Style */}
      <section id="testimonials" className="border-b border-[#0A0A0A] bg-[#F8F9FA]">
        <div className="p-6 md:p-12 border-b border-[#0A0A0A] flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6 bg-[#EAE8E3]">
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter uppercase leading-none">{t.sections.clientInt}</h2>
          <div className="flex items-center gap-3">
          <a href="https://www.google.com/search?q=af+business+services&rlz=1C1VDKB_enUS1046US1046&oq=af&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIOCAEQRRg5GEMYgAQYigUyDAgCEAAYQxiABBiKBTIMCAMQABhDGIAEGIoFMgYIBBBFGDwyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQgxMTM3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-gray-800 underline decoration-1 underline-offset-2">{t.sections.verified} <br/> 5.0 Rating (160+ Reviews)</span>
          </a>
          </div>
        </div>
        <div className="p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold text-lg">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-sans font-bold text-sm text-gray-900">{r.name}</div>
                    <div className="text-xs text-gray-500">1 month ago</div>
                  </div>
                </div>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <div className="flex text-[#fbbc04]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                "{r.text}"
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Contact Form - Stark Brutalist */}
      <section id="contact" className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#0A0A0A]">
        <div className="lg:col-span-5 bg-[#0A0A0A] text-[#EAE8E3] p-6 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-[#0A0A0A] flex flex-col justify-between min-h-[50vh]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] mb-12 flex items-center gap-4 opacity-50">
              <span className="h-px w-8 bg-[#EAE8E3]"></span>
              {t.sections.secure}
            </div>
            <h2 className="font-serif text-6xl md:text-[6vw] uppercase tracking-tighter leading-[0.85]">
              {t.sections.initiate}<br/>
              <span className="italic opacity-70">{t.sections.protocol}</span>
            </h2>
          </div>
          
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] mt-20 grid gap-6 border-t border-white/20 pt-8">
            <div className="grid grid-cols-[80px_1fr]">
              <span className="opacity-50">LOC:</span>
              <span>10135 Hartford Maroon Rd<br/>Orlando, FL 32827</span>
            </div>
            <div className="grid grid-cols-[80px_1fr]">
              <span className="opacity-50">TEL:</span>
              <span>(407) 437-7119</span>
            </div>
            <div className="grid grid-cols-[80px_1fr]">
              <span className="opacity-50">EML:</span>
              <span>contact@afbusiness.com</span>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7 p-6 md:p-12 lg:p-20 flex flex-col justify-center bg-[#EAE8E3]">
          <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col relative group">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50 group-focus-within:opacity-100 transition-opacity">{t.sections.formName}</label>
              <input type="text" className="bg-transparent border-b border-[#0A0A0A] text-2xl md:text-4xl font-serif py-3 focus:outline-none focus:border-b-[3px] transition-all rounded-none" placeholder="AF Business Services" />
            </div>
            
            <div className="flex flex-col relative group">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50 group-focus-within:opacity-100 transition-opacity">{t.sections.formEmail}</label>
              <input type="email" className="bg-transparent border-b border-[#0A0A0A] text-2xl md:text-4xl font-serif py-3 focus:outline-none focus:border-b-[3px] transition-all rounded-none" placeholder="email@domain.com" />
            </div>
            
            <div className="flex flex-col relative group">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50 group-focus-within:opacity-100 transition-opacity">{t.sections.formReq}</label>
              <select className="bg-transparent border-b border-[#0A0A0A] text-2xl md:text-4xl font-serif py-3 focus:outline-none focus:border-b-[3px] transition-all rounded-none cursor-pointer appearance-none">
                <option>{t.sections.formOption1}</option>
                <option>{t.sections.formOption2}</option>
                <option>{t.sections.formOption3}</option>
                <option>{t.sections.formOption4}</option>
              </select>
            </div>
            
            <div className="flex flex-col relative group mt-4">
              <button className="self-start text-4xl md:text-6xl font-serif uppercase tracking-tighter hover:italic transition-all flex items-center gap-6 group/btn">
                {t.sections.formCta}
                <div className="h-16 w-16 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center group-hover/btn:bg-[#0A0A0A] group-hover/btn:text-[#EAE8E3] transition-colors">
                  <ArrowRight className="h-8 w-8 group-hover/btn:translate-x-2 transition-transform" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Massive Footer */}
      <footer className="p-6 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 bg-[#0A0A0A] text-[#EAE8E3]">
        <div>
          <div className="font-serif text-[20vw] md:text-[15vw] leading-[0.75] tracking-tighter uppercase mb-4">
            AF<span className="text-[5vw] align-top">©</span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-50 max-w-sm mt-8">
            {t.sections.footerDesc}
          </p>
        </div>
        
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] flex flex-col items-start md:items-end gap-2 opacity-50">
          <p>SYS.VER // 2024.1</p>
          <p>© {new Date().getFullYear()} AF Business Services</p>
          <p>All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 pt-4 border-t border-white/20 w-full justify-start md:justify-end">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
