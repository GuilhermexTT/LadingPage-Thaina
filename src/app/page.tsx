'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import thainaMain from "../../styles/imagens/thainaMain_2k.jpg";
import thainaAtendendo from "../../styles/imagens/ThainaAtendendo.jpeg";
import labios from "../../styles/imagens/labios.jpeg";
import rejuvenescimento2 from "../../styles/imagens/rejuvenescimento2.jpeg";
import pacienteBotox from "../../styles/imagens/pacienteBotox.jpeg";
import luciana from "../../styles/imagens/luciana.jpg";
import rubinho from "../../styles/imagens/rubinho.jpg";
import facialProc from "../../styles/imagens/FacialProcedimento.jpeg";
import rejuvProc from "../../styles/imagens/RejuvProcedimento.jpeg";
import corporalProc from "../../styles/imagens/ProcedimentoCorporal.jpeg";

// CMS Imports
import { client } from "../sanity/lib/client";
import { proceduresQuery, testimonialsQuery, siteConfigQuery } from "../sanity/lib/queries";

const WHATSAPP_LINK = "https://wa.me/5511951266988?text=Ol%C3%A1%2C%20Dra.%20Thain%C3%A1!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20conhecer%20melhor%20os%20procedimentos.%20Como%20funciona%20o%20seu%20atendimento%3F";
const INSTAGRAM_LINK = "https://instagram.com/thainacarvalhofisio";
const EMAIL = "thaina.cardoso.carvalho@gmail.com";
const ADDRESS = "Pátio Osasco - torre 2 - sala 211, Osasco, São Paulo";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNiche, setActiveNiche] = useState("facial");
  const [expandedProc, setExpandedProc] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // CMS Data States
  const [procedures, setProcedures] = useState<any[]>(proceduresData);
  const [testimonials, setTestimonials] = useState<any[]>(testimonialsData);
  const [siteConfig, setSiteConfig] = useState<any>({
    whatsapp: WHATSAPP_LINK,
    instagram: INSTAGRAM_LINK,
    email: EMAIL,
    address: ADDRESS
  });

  useEffect(() => {
    // Fetch CMS Data
    const fetchData = async () => {
      try {
        const cmsProcedures = await client.fetch(proceduresQuery);
        if (cmsProcedures?.length > 0) {
          // Merge CMS procedures with hardcoded ones, avoiding duplicates by name
          setProcedures((prev) => [
            ...cmsProcedures,
            ...proceduresData.filter(p => !cmsProcedures.some((cp: any) => cp.name === p.name))
          ]);
        }

        const cmsTestimonials = await client.fetch(testimonialsQuery);
        if (cmsTestimonials?.length > 0) {
          // Merge CMS testimonials
          setTestimonials((prev) => [
            ...cmsTestimonials,
            ...testimonialsData.filter(t => !cmsTestimonials.some((ct: any) => ct.name === t.name))
          ]);
        }

        const cmsConfig = await client.fetch(siteConfigQuery);
        if (cmsConfig) setSiteConfig((prev: any) => ({ ...prev, ...cmsConfig }));
      } catch (error) {
        console.error("CMS Fetch error:", error);
      }
    };

    fetchData();

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <Background />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-1 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-gold/20">
              <Image src={thainaMain} alt="Dra. Thainá Carvalho" fill className="object-cover" priority />
              <div className="absolute inset-0 border-[12px] border-white/10 rounded-[2.5rem]" />
            </div>
            <div className="absolute -z-10 -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-full h-full border-2 border-gold rounded-[2.5rem]" />
          </div>

          <div className="order-2 flex flex-col space-y-8 text-left animate-fade-in-up">
            <div className="flex items-center space-x-2 bg-white/50 self-start px-4 py-2 rounded-full border border-gold/20 shadow-sm">
              <span className="text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-gold tracking-wider uppercase font-body">Atendimento Premium e Seguro</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-title font-bold text-zinco leading-[1.1]">
              {siteConfig.heroTitle ? (
                siteConfig.heroTitle.split('\n').map((line: string, i: number) => (
                  <span key={i}>{line}<br /></span>
                ))
              ) : (
                <>Realce sua Melhor <br /> Versão. <br />
                <span className="text-gold italic">Resultados Naturais,</span> <br /> Avaliações personalizadas.</>
              )}
            </h1>

            <div className="space-y-6 text-lg text-zinco/70 font-body max-w-xl leading-relaxed">
              {siteConfig.heroSubtitle ? (
                <p>{siteConfig.heroSubtitle}</p>
              ) : (
                <>
                  <p>Especialista em Dermatofuncional e Cosmetologia, com atuação em harmonização facial e corporal, rejuvenescimento e tratamentos estéticos avançados com abordagem personalizada para resultados naturais e equilibrados, unindo ciência, técnica e sofisticação.</p>
                  <p>Atendimento individualizado, com foco na sua essência — sem exageros, apenas realçando o que você já tem de melhor.</p>
                </>
              )}
              <div className="pt-2">
                <p className="font-title font-bold text-xl text-zinco">Dra Thainá Carvalho</p>
                <p className="text-gold font-bold tracking-widest text-xs uppercase">CREFITO 3 351518-F</p>
              </div>
            </div>

            <div className="pt-4">
              <Link href={siteConfig.whatsapp} target="_blank" className="inline-flex items-center space-x-3 bg-gold hover:bg-gold/90 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 font-body">
                <span>Quero Agendar Minha Avaliação</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm reveal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white">
              <Image src={thainaAtendendo} alt="Dra. Thainá atendendo" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
          <div className="flex flex-col space-y-8 text-left">
            <h2 className="text-4xl lg:text-5xl font-title font-bold text-zinco leading-tight">Você não precisa mudar quem você é, <br /><span className="text-gold italic">apenas realçar sua melhor versão.</span></h2>
            <div className="space-y-6 text-zinco/80 font-body text-lg leading-relaxed">
              <p>Cada tratamento é pensado de forma individualizada, respeitando sua anatomia, sua essência e seus objetivos. Aqui, a estética é tratada com responsabilidade, técnica e olhar clínico.</p>
              <p className="font-bold text-gold italic">Resultados naturais, sem exageros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-24 px-4 sm:px-6 lg:px-8 bg-soft-beige reveal">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-bold text-gold tracking-widest uppercase font-body">Nossos Serviços</span>
          <h2 className="mt-4 text-4xl lg:text-6xl font-title font-bold text-zinco">Tratamentos de <span className="text-gold italic font-medium">Alta Performance</span></h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { id: "facial", title: "Harmonização Facial", image: facialProc, description: "Realce da beleza com naturalidade e equilíbrio" },
              { id: "pele", title: "Pele e Rejuvenescimento", image: rejuvProc, description: "Tecnologias avançadas para saúde e viço" },
              { id: "corporal", title: "Tratamentos Corporais", image: corporalProc, description: "Modelagem, firmeza e cuidado com o corpo" }
            ].map((niche) => (
              <button key={niche.id} onClick={() => { setActiveNiche(niche.id); const el = document.getElementById('lista-procedimentos'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className={`relative group h-[400px] rounded-[2rem] overflow-hidden transition-all duration-500 shadow-xl ${activeNiche === niche.id ? 'ring-4 ring-gold ring-offset-4 scale-[1.02]' : 'hover:scale-[1.02]'}`}>
                <Image src={niche.image} alt={niche.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinco/90 via-zinco/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                  <h3 className="text-2xl font-title font-bold text-white mb-2">{niche.title}</h3>
                  <p className="text-white/70 text-sm font-body">{niche.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-zinco/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-4 animate-pulse">Selecione uma categoria para ver os detalhes:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              {['facial', 'pele', 'corporal'].map((niche) => (
                <button
                  key={niche}
                  onClick={() => {
                    setActiveNiche(niche);
                    const el = document.getElementById('lista-procedimentos');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`flex-1 py-6 px-4 rounded-2xl transition-all duration-500 font-bold uppercase tracking-[0.2em] text-xs border-2 ${activeNiche === niche
                      ? 'bg-gold text-white border-gold shadow-xl scale-105'
                      : 'bg-white/50 text-zinco/50 border-gold/10 hover:border-gold/30'
                    }`}
                >
                  {niche === 'facial' ? 'Harmonização Facial' : niche === 'pele' ? 'Pele & Rejuvenescimento' : 'Tratamentos Corporais'}
                </button>
              ))}
            </div>
          </div>

          <div id="lista-procedimentos" className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gold/10">
            <div className="space-y-4">
              {procedures.filter(p => p.niche === activeNiche).map((proc, idx) => (
                <div key={idx} className="border-b border-gold/10 last:border-0">
                  <button onClick={() => setExpandedProc(expandedProc === idx ? null : idx)} className="w-full flex items-center justify-between py-6 group text-left">
                    <h4 className="text-xl md:text-2xl font-title font-bold text-zinco group-hover:text-gold transition-colors text-left flex-1 pr-4">{proc.name}</h4>
                    <span className={`text-gold transition-transform duration-300 ${expandedProc === idx ? 'rotate-180' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedProc === idx ? 'max-h-[800px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-lg text-zinco/70 font-body leading-relaxed mb-6">{proc.desc}</p>
                    <Link href="#contato" className="inline-flex items-center space-x-2 text-gold font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                      <span>Agendar este procedimento</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section id="resultados" className="py-24 px-4 sm:px-6 lg:px-8 bg-white reveal">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-bold text-gold tracking-widest uppercase font-body">Resultados Comprovados</span>
          <h2 className="mt-4 text-4xl lg:text-6xl font-title font-bold text-zinco">Transformações <span className="text-gold italic font-medium">Reais</span></h2>
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-zinco/60 font-body text-sm leading-relaxed">
              Resultados reais, respeitando a individualidade de cada paciente. <br />
              As imagens apresentadas possuem autorização prévia. Os resultados podem variar de acordo com características individuais.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Preenchimento Labial", image: labios, badge: "Antes e Depois" },
            { title: "Rejuvenescimento Facial", image: rejuvenescimento2, badge: "Antes e Depois" },
            { title: "Botox Global", image: pacienteBotox, badge: "Antes e Depois" }
          ].map((result, idx) => (
            <div key={idx} className="relative group aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <Image src={result.image} alt={result.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinco/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block bg-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">{result.badge}</span>
                <h3 className="text-2xl font-title font-bold text-white">{result.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-24 px-4 sm:px-6 lg:px-8 bg-soft-beige/50 reveal">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-title font-bold text-zinco">O Que Nossos <span className="text-gold italic font-medium">Pacientes Dizem</span></h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gold/5 flex flex-col relative group hover:shadow-2xl transition-all duration-300">
              <div className="flex space-x-1 mb-6 text-gold">
                {[...Array(5)].map((_, i) => (<svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
              </div>
              <p className="text-zinco/70 italic font-body text-lg leading-relaxed mb-8 flex-grow">"{testimonial.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold/20">
                  <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div><h4 className="font-title font-bold text-zinco text-lg">{testimonial.name}</h4><p className="text-gold text-xs font-body uppercase tracking-widest">{testimonial.role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white reveal">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-bold text-gold tracking-widest uppercase font-body">Esclareça</span>
          <h2 className="mt-4 text-4xl lg:text-6xl font-title font-bold text-zinco">Dúvidas <span className="text-gold italic font-medium">Frequentes</span></h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "Os procedimentos são dolorosos?", a: "Priorizamos o seu conforto máximo através de técnicas avançadas e anestésicos tópicos de alta eficácia." },
            { q: "Quanto tempo dura o resultado do Botox?", a: "A duração do Botox varia entre 4 a 6 meses, dependendo do metabolismo de cada paciente." },
            { q: "O resultado fica artificial?", a: "Pelo contrário. Nossa filosofia é a 'Beleza Natural', focando em realçar traços sem mudar sua essência." },
            { q: "Posso voltar à minha rotina no mesmo dia?", a: "Sim, a maioria dos nossos procedimentos permite o retorno imediato às atividades, seguindo orientações básicas." },
            { q: "Como funciona a avaliação de valores?", a: "Avaliamos cada rosto de forma única para propor um plano de tratamento personalizado e justo." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] shadow-lg border border-gold/5 overflow-hidden transition-all duration-300">
              <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-8 text-left group">
                <h3 className={`text-xl font-title font-bold transition-colors ${activeFaq === idx ? 'text-gold' : 'text-zinco group-hover:text-gold'}`}>{faq.q}</h3>
                <span className={`text-gold transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}><div className="p-8 pt-0 text-zinco/70 font-body leading-relaxed border-t border-gold/5 mt-2">{faq.a}</div></div>
            </div>
          ))}
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8 bg-soft-beige reveal">
        <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-gold/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col space-y-8 text-left">
              <span className="inline-block bg-gold/10 text-gold text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest self-start">Dê o Próximo Passo</span>
              <h2 className="text-4xl lg:text-6xl font-title font-bold text-zinco leading-tight">Pronta para sua <br /><span className="text-gold italic">Melhor Versão?</span></h2>
              <p className="text-lg text-zinco/70 font-body leading-relaxed max-w-md">Entre em contato diretamente comigo. Estou à disposição para esclarecer suas dúvidas e reservar o melhor horário para sua avaliação personalizada.</p>
              <Link href={siteConfig.whatsapp} target="_blank" className="inline-flex items-center space-x-3 bg-gold hover:bg-gold/90 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-2xl self-start">
                <span>Agendar via WhatsApp</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.105.007.246-.04.384.281.144.332.491 1.197.534 1.284.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.101-.177.211-.077.383.101.173.443.729.947 1.177.65.58 1.196.761 1.369.847.173.087.275.072.375-.043s.433-.505.548-.678c.115-.173.231-.144.39-.087.159.058 1.011.477 1.184.564s.289.13.332.202c.045.072.045.419-.1.824z" /></svg>
              </Link>
              <div className="pt-8 border-t border-gold/10">
                <p className="text-xs font-bold text-zinco uppercase tracking-widest mb-4">Acompanhe Nossas Redes</p>
                <Link href={siteConfig.instagram} target="_blank" className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold/20 text-gold hover:bg-gold hover:text-white transition-all shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.059-2.148.262-2.911.558-.788.306-1.457.715-2.123 1.381s-1.075 1.335-1.381 2.123c-.295.763-.499 1.634-.558 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.277.262 2.148.558 2.911.306.788.715 1.457 1.381 2.123s1.335 1.075 2.123 1.381c.763.295 1.634.499 2.911.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.059 2.148-.262 2.911-.558.788-.306 1.457-.715 2.123-1.381s1.075-1.335 1.381-2.123c.295-.763.499-1.634.558-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.277-.262-2.148-.558-2.911-.306-.788-.715-1.457-1.381-2.123s-1.335-1.075-2.123-1.381c-.763-.295-1.634-.499-2.911-.558-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </Link>
              </div>
            </div>
            <div className="bg-soft-beige/30 backdrop-blur-sm p-6 lg:p-10 rounded-[3rem] border-2 border-gold/40 space-y-8 lg:space-y-10 shadow-inner">
              <div className="flex space-x-4 lg:space-x-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-title font-bold text-zinco text-lg lg:text-xl">Nosso Endereço</h3>
                  <p className="text-zinco/60 font-body text-sm lg:text-base">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex space-x-4 lg:space-x-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-title font-bold text-zinco text-lg lg:text-xl">Horário de Atendimento</h3>
                  <p className="text-zinco/60 font-body text-xs lg:text-sm">Segunda a Sábado: 08h às 18h<br />Domingo: Horário da Manhã</p>
                </div>
              </div>

              <div className="flex space-x-4 lg:space-x-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-title font-bold text-zinco text-lg lg:text-xl">Contato Direto</h3>
                  <p className="text-zinco/60 font-body text-sm lg:text-base break-all lg:break-normal">(11) 95126-6988<br />{siteConfig.email}</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden h-64 border border-gold/20 shadow-xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.077241315486!2d-46.776189924546575!3d-23.54350197880922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf015401917f69%3A0xc3f83733c77d61b3!2zUMOhdGlvIE9zYXNjbw!5e0!3m2!1spt-BR!2sbr!4v1714421234567!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-zinco text-soft-beige pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-title font-bold text-white">Dra. Thainá Carvalho <br /><span className="text-gold text-xs uppercase tracking-widest">Harmonização Facial e Corporal</span></h3>
            <p className="text-soft-beige/60 font-body leading-relaxed">Realçando a sua beleza natural com ciência, segurança e muito cuidado em cada detalhe.</p>
            <div className="flex space-x-4">
              <Link href={siteConfig.instagram} target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.059-2.148.262-2.911.558-.788.306-1.457.715-2.123 1.381s-1.075 1.335-1.381 2.123c-.295.763-.499 1.634-.558 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.277.262 2.148.558 2.911.306.788.715 1.457 1.381 2.123s1.335 1.075 2.123 1.381c.763.295 1.634.499 2.911.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.059 2.148-.262 2.911-.558.788-.306 1.457-.715 2.123-1.381s1.075-1.335 1.381-2.123c.295-.763.499-1.634.558-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.277-.262-2.148-.558-2.911-.306-.788-.715-1.457-1.381-2.123s-1.335-1.075-2.123-1.381c-.763-.295-1.634-.499-2.911-.558-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-title font-bold text-lg mb-6 uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-4 font-body">
              {[
                { name: 'Procedimentos', href: '#servicos' },
                { name: 'Sobre Mim', href: '#sobre' },
                { name: 'Antes e Depois', href: '#resultados' },
                { name: 'Depoimentos', href: '#depoimentos' },
                { name: 'FAQ', href: '#faq' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-soft-beige/60 hover:text-gold transition-colors flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40"></span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-title font-bold text-lg mb-6 uppercase tracking-widest">Tratamentos</h4>
            <div className="grid grid-cols-1 gap-6 font-body text-sm">
              <div>
                <Link href="#lista-procedimentos" onClick={() => setActiveNiche("facial")} className="text-gold font-bold mb-2 block hover:underline">Harmonização Facial</Link>
              </div>
              <div>
                <Link href="#lista-procedimentos" onClick={() => setActiveNiche("pele")} className="text-gold font-bold mb-2 block hover:underline">Pele e Rejuvenescimento</Link>
              </div>
              <div>
                <Link href="#lista-procedimentos" onClick={() => setActiveNiche("corporal")} className="text-gold font-bold mb-2 block hover:underline">Corporais</Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-title font-bold text-lg mb-6 uppercase tracking-widest">Contato</h4>
            <ul className="space-y-6 font-body">
              <li className="flex items-start space-x-4">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-soft-beige/60 text-sm leading-relaxed">{siteConfig.address}</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-soft-beige/60 text-sm">(11) 95126-6988</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-soft-beige/60 text-sm truncate">{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-soft-beige/40 text-[10px] uppercase tracking-[0.2em]">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p>© 2024 Dra. Thainá Carvalho. Todos os direitos reservados.</p>
            <p className="font-bold text-gold/60">CREFITO 3 351518-F</p>
          </div>
          <div className="flex space-x-8">
            <Link href="/privacidade" className="hover:text-gold transition-colors">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-gold transition-colors">Termos de Uso</Link>
          </div>
          <p>Desenvolvido com carinho para realçar sua beleza.</p>
        </div>
      </footer>
    </main>
  );
}

const proceduresData = [
  { niche: "facial", name: "Harmonização Facial Full Face", desc: "Planejamento completo para equilíbrio e proporção facial, com resultado natural e sofisticado. Pode associar toxina botulínica, preenchimento com ácido hialurônico, bioestimuladores e fios, visando equilíbrio, proporção e rejuvenescimento global." },
  { niche: "facial", name: "Toxina Botulínica (Botox Full Face)", desc: "Suaviza linhas de expressão e previne rugas, mantendo leveza e naturalidade." },
  { niche: "facial", name: "Preenchimento com Ácido Hialurônico", desc: "Restaura volume, contorno e hidratação da pele de forma harmônica." },
  { niche: "facial", name: "Contorno Mandibular e Mento", desc: "Define o ângulo da face, proporcionando mais estrutura e elegância." },
  { niche: "facial", name: "Escultura Labial", desc: "Realce dos lábios com proporção, hidratação e naturalidade." },
  { niche: "facial", name: "Rinomodelação com Ácido Hialurônico", desc: "Correção estética do nariz sem cirurgia, com resultado imediato." },
  { niche: "facial", name: "Lipo Enzimática de Papada", desc: "Redução da gordura localizada abaixo do queixo, melhorando o contorno facial." },
  { niche: "pele", name: "Bioestimuladores de Colágeno", desc: "Estimula a produção natural de colágeno, melhorando firmeza e qualidade da pele." },
  { niche: "pele", name: "Skinbooster (hidratação profunda)", desc: "Hidratação intensa que melhora textura, viço e elasticidade da pele." },
  { niche: "pele", name: "Bioestimulação com Fios de PDO", desc: "Estimula colágeno e promove efeito regenerador na pele." },
  { niche: "pele", name: "Lifting com Fios de Sustentação", desc: "Reposicionamento dos tecidos com efeito lifting sem cirurgia." },
  { niche: "pele", name: "Peelings Químicos Personalizados", desc: "Renovação da pele, melhora manchas, textura e luminosidade." },
  { niche: "pele", name: "Microagulhamento Facial", desc: "Estimula colágeno e trata cicatrizes, poros e textura da pele." },
  { niche: "pele", name: "Protocolos para Acne e Cicatrizes", desc: "Tratamentos personalizados para controle da acne e melhora das marcas." },
  { niche: "pele", name: "Limpeza de Pele Premium", desc: "Higienização profunda com cuidado e técnica para uma pele saudável." },
  { niche: "pele", name: "Intradermoterapia Capilar", desc: "Tratamento para fortalecimento e crescimento capilar." },
  { niche: "pele", name: "Microagulhamento Capilar", desc: "Estimula o couro cabeludo, auxiliando no combate à queda capilar." },
  { niche: "corporal", name: "Harmonização Corporal", desc: "Planejamento completo para melhorar contorno e proporções corporais." },
  { niche: "corporal", name: "Harmonização Glútea", desc: "Realce do volume e contorno dos glúteos com naturalidade. Planejamento completo que pode associar bioestimuladores de colágeno, técnicas de volumização e contorno, além de protocolos complementares como intradermoterapia corporal, tratamentos para celulite e flacidez e estímulo da qualidade da pele. Indicado para melhorar o formato, projetar o volume, aumentar a firmeza e proporcionar um contorno mais harmônico e natural dos glúteos." },
  { niche: "corporal", name: "Bioestimuladores Corporais", desc: "Melhora da firmeza e qualidade da pele em diversas regiões do corpo." },
  { niche: "corporal", name: "Aplicações para Gordura Localizada", desc: "Redução de medidas com protocolos personalizados." },
  { niche: "corporal", name: "Intradermoterapia Corporal", desc: "Tratamento para celulite, estrias e flacidez." },
  { niche: "corporal", name: "Skinbooster Corporal", desc: "Hidratação profunda e melhora da qualidade da pele corporal." },
  { niche: "corporal", name: "Drenagem Linfática", desc: "Redução de inchaço e melhora da circulação." },
  { niche: "corporal", name: "Massagem Modeladora", desc: "Auxilia na definição corporal e melhora do contorno." },
  { niche: "corporal", name: "Depilação a Laser", desc: "Tecnologia avançada para redução progressiva dos pelos, proporcionando mais conforto, praticidade e melhora da qualidade da pele. Indicado para diversas regiões do corpo, with resultados duradouros e seguros." }
];

const testimonialsData = [
  { name: "Luciana Santos", role: "Paciente", image: luciana, text: "Sempre tive muito medo de agulhas e de resultados artificiais. A Dra. foi incrivelmente paciente, explicou cada passo e o resultado foi exatamente o que eu queria: natural e elegante. Minha autoestima mudou completamente!" },
  { name: "Rubinho", role: "Paciente", image: rubinho, text: "Ficou ótimo, bem discreto, ninguém percebeu que fiz, só falaram que fiquei com a aparência mais descansada. Era exatamente isso que eu queria!" }
];