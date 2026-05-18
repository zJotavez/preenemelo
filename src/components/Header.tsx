import { motion } from "motion/react";
import { Button } from "./ui/Button";

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 w-full z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-neon to-brand-primary flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.4)]">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 17l10 5 10-5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-display font-bold text-xl text-white tracking-wide">Pré Enem Elo</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-white hover:text-brand-neon transition-colors">O Projeto</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Metodologia</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Professores</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Impacto Social</a>
        </nav>

        {/* CTA */}
        <Button variant="outline" size="sm" className="hidden sm:inline-flex rounded-xl font-semibold border-white/10 text-white hover:bg-white/5">
          Área do Aluno
        </Button>
      </div>
    </motion.header>
  );
};
