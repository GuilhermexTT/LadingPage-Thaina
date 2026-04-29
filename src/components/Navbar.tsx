'use client';
import Link from 'next/link';

interface Props {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: Props) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col leading-tight">
              <span className="text-xl font-title font-bold text-zinco">
                Dra Thainá Carvalho
              </span>
              <span className="text-[9px] tracking-[0.2em] font-body text-gold uppercase font-semibold">
                HARMONIZAÇÃO FACIAL E CORPORAL
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="#servicos"
              className="text-sm font-medium text-zinco/80 hover:text-gold transition-colors font-body"
            >
              Procedimentos
            </Link>
            <Link
              href="#resultados"
              className="text-sm font-medium text-zinco/80 hover:text-gold transition-colors font-body"
            >
              Antes e Depois
            </Link>
            <Link
              href="#depoimentos"
              className="text-sm font-medium text-zinco/80 hover:text-gold transition-colors font-body"
            >
              Depoimentos
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#contato" className="bg-gold text-white px-8 py-3 rounded-xl font-bold hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Agendar Consulta
            </Link>
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button
              className="text-zinco hover:text-gold focus:outline-none"
              aria-label="Abrir menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

