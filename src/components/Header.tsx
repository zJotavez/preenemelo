import { motion } from "motion/react";
import { Button } from "./ui/Button";

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 w-full z-50 px-6 py-5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-sm">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 17l10 5 10-5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span
            className="font-heading font-bold text-lg text-white tracking-wide"
            style={{ fontFamily: "Lato, sans-serif", letterSpacing: "0.05em" }}
          >
            Pré Enem Elo
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-white/90 hover:text-white transition-colors tracking-wide">O Projeto</a>
          <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide">Metodologia</a>
          <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide">Professores</a>
          <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide">Impacto Social</a>
        </nav>

        {/* CTA */}
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:inline-flex rounded-lg font-semibold border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
        >
          Área do Aluno
        </Button>
      </div>
    </motion.header>
  );
};
