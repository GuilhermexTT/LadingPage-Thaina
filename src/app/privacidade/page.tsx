'use client';

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import Link from "next/link";

export default function Privacidade() {
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
            Política de <span className="text-gold italic">Privacidade</span>
          </h1>

          <div className="prose prose-lg prose-zinco max-w-none space-y-12 text-zinco/80 font-body leading-relaxed">
            <div className="bg-soft-beige/30 p-8 rounded-2xl border-l-4 border-gold shadow-sm">
              <p className="italic">A sua privacidade é uma prioridade para a Dra. Thainá Carvalho. Esta Política de Privacidade descreve como as suas informações pessoais são coletadas, usadas e protegidas ao utilizar nosso site e serviços de contato.</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">1</span>
                Coleta de Informações
              </h2>
              <p>Coletamos informações que você nos fornece diretamente ao interagir com o site:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dados de Contato:</strong> Nome, número de telefone/WhatsApp e e-mail, fornecidos ao preencher formulários ou clicar em botões de agendamento.</li>
                <li><strong>Dados de Navegação:</strong> Informações técnicas como endereço IP, tipo de navegador e páginas visitadas, coletadas automaticamente via cookies para melhorar sua experiência.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">2</span>
                Uso das Informações
              </h2>
              <p>Os dados coletados são utilizados exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Realizar o agendamento de consultas e avaliações.</li>
                <li>Enviar informações detalhadas sobre os procedimentos solicitados.</li>
                <li>Prestar um atendimento personalizado e humano.</li>
                <li>Garantir a segurança da navegação no site.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">3</span>
                Proteção de Dados Sensíveis
              </h2>
              <div className="bg-white/50 p-6 rounded-xl border border-gold/5 shadow-inner">
                <p>Informações sobre sua saúde ou objetivos estéticos compartilhadas durante o contato inicial são tratadas com <strong>estrito sigilo profissional</strong>. Não compartilhamos, vendemos ou alugamos seus dados para terceiros ou empresas de marketing.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">4</span>
                Cookies e Tecnologias de Rastreamento
              </h2>
              <p>Utilizamos cookies para entender como os visitantes interagem com o site. Você pode optar por desativar os cookies nas configurações do seu navegador, embora isso possa afetar algumas funcionalidades da página.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">5</span>
                Seus Direitos (LGPD)
              </h2>
              <p>De acordo com a Lei Geral de Proteção de Dados (Lei 13.709/18), você tem o direito de:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmar a existência de tratamento de seus dados.</li>
                <li>Acessar, corrigir ou atualizar suas informações.</li>
                <li>Solicitar a exclusão de seus dados de nossa base de contatos a qualquer momento.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">6</span>
                Segurança
              </h2>
              <p>Implementamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perda ou alteração. O acesso às informações coletadas é restrito à profissional responsável pelo atendimento.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinco flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">7</span>
                Alterações nesta Política
              </h2>
              <p>Esta política pode ser atualizada ocasionalmente para refletir mudanças em nossas práticas ou por razões legais. A versão atualizada estará sempre disponível nesta página.</p>
            </section>

            <div className="pt-12 border-t border-gold/10 text-center">
              <p className="font-title font-bold text-zinco text-xl mb-2">Contato</p>
              <p className="text-zinco/60">Para dúvidas sobre esta Política ou para exercer seus direitos de privacidade, entre em contato através do e-mail:<br />
                <span className="text-gold font-bold">thaina.cardoso.carvalho@gmail.com</span>
              </p>
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
