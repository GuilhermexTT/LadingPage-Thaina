'use client';

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import Link from "next/link";

export default function Termos() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen">
      <Navbar scrolled={scrolled} />
      <Background />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gold/10">
          <h1 className="text-4xl md:text-5xl font-title font-bold text-zinco mb-12 text-center">
            Termos de Uso e <span className="text-gold italic">Condições Gerais</span>
          </h1>

          <div className="prose prose-lg prose-zinco max-w-none space-y-12 text-zinco/80 font-body leading-relaxed">
            <div className="bg-soft-beige/30 p-8 rounded-2xl border-l-4 border-gold shadow-sm">
              <p className="italic">Bem-vindo(a) ao site oficial da Dra. Thainá Carvalho. Ao navegar ou utilizar este site, você concorda com os termos e condições descritos abaixo. Caso não concorde com qualquer parte destes termos, recomendamos que não utilize nossos serviços digitais.</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">1</span>
                Caráter Informativo
              </h2>
              <p>Todo o conteúdo disponível neste site (textos, imagens, vídeos e descrições de procedimentos) possui caráter estritamente informativo e educativo.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>As informações aqui contidas não substituem, em hipótese alguma, uma consulta presencial ou avaliação profissional individualizada.</li>
                <li>Os resultados de procedimentos estéticos variam de pessoa para pessoa, dependendo de fatores biológicos e histórico clínico.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">2</span>
                Agendamentos e Consultas
              </h2>
              <p>O site permite que o usuário inicie um contato para agendamento de avaliações.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Avaliação Obrigatória:</strong> Nenhum procedimento será realizado sem uma consulta prévia para análise das necessidades e condições de saúde do paciente.</li>
                <li><strong>Cancelamentos:</strong> Solicitamos que cancelamentos ou reagendamentos de consultas sejam feitos com, no mínimo, 24 horas de antecedência.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">3</span>
                Propriedade Intelectual
              </h2>
              <p>Todo o conteúdo visual e textual deste site é de propriedade exclusiva da Dra. Thainá Carvalho.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>É proibida a reprodução, cópia ou distribuição de qualquer imagem de "Antes e Depois" ou textos explicativos sem autorização prévia por escrito.</li>
                <li>O uso indevido de fotos da profissional ou de pacientes poderá acarretar medidas judiciais cabíveis.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">4</span>
                Proteção de Dados (LGPD)
              </h2>
              <p>Respeitamos a sua privacidade. Os dados fornecidos através de contato são utilizados exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Realizar o agendamento de consultas.</li>
                <li>Enviar informações sobre os tratamentos solicitados.</li>
                <li>Seus dados não serão compartilhados com terceiros sem o seu consentimento explícito.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">5</span>
                Limitação de Responsabilidade
              </h2>
              <p>A Dra. Thainá Carvalho empenha-se em manter as informações do site atualizadas. No entanto, não se responsabiliza por eventuais erros técnicos de digitação ou por decisões tomadas pelo usuário baseadas apenas na leitura do conteúdo online, sem a devida orientação profissional.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">6</span>
                Alterações nos Termos
              </h2>
              <p>Reservamo-nos o direito de atualizar estes termos a qualquer momento para refletir mudanças na legislação ou em nossas práticas internas. Recomendamos a visita periódica a esta página.</p>
            </section>

            <div className="pt-12 border-t border-gold/10 text-center">
              <p className="font-title font-bold text-zinco text-xl mb-2">Foro e Jurisdição</p>
              <p className="text-zinco/60">Para dirimir quaisquer controvérsias oriundas deste termo, fica eleito o foro da comarca de Osasco/SP.</p>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <Link href="/" className="bg-gold text-white px-8 py-4 rounded-xl font-bold hover:bg-gold/90 transition-all shadow-xl hover:-translate-y-1">
              Voltar para o Início
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-zinco text-soft-beige/40 text-[10px] uppercase tracking-[0.2em] py-8 text-center border-t border-white/5">
        <p>© 2024 Dra. Thainá Carvalho. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
