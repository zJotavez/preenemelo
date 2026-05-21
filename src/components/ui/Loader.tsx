import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const FRASES = [
  "Conectando você ao seu futuro...",
  "O melhor preparatório gratuito para o Enem 2026...",
  "Sua vaga na universidade pública começa aqui...",
  "Aulas presenciais e material de excelência...",
  "Elo: Conectando sonhos a conquistas!"
];

export const Loader = () => {
  const [visible, setVisible] = useState(true);
  const [fraseIndex, setFraseIndex] = useState(0);

  useEffect(() => {
    // Evita rodar o loader em todas as recargas de rota se já carregado nesta sessão
    const isLoaded = sessionStorage.getItem("elo_loader_shown");
    if (isLoaded) {
      setVisible(false);
      return;
    }

    // Rotaciona as frases motivacionais
    const fraseInterval = setInterval(() => {
      setFraseIndex((prev) => (prev + 1) % FRASES.length);
    }, 700);

    // Finaliza o carregador após 2.6 segundos
    const timer = setTimeout(() => {
      sessionStorage.setItem("elo_loader_shown", "true");
      setVisible(false);
    }, 2800);

    return () => {
      clearInterval(fraseInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: "circle(0% at 50% 50%)",
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-void text-white"
          style={{ clipPath: "circle(150% at 50% 50%)" }}
        >
          {/* Fundo decorativo brilhante */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 max-w-md px-6 text-center">
            {/* Logo do ELO Animado */}
            <div className="relative flex items-center justify-center w-24 h-24">
              {/* Círculos dinâmicos em órbita/pulsação */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-brand-neon/30"
              />
              <motion.div 
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-2 rounded-full border border-amber-400/40"
              />
              
              {/* O símbolo do "Elo" feito com SVG estilizado */}
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {/* Texto de Identidade */}
            <div className="flex flex-col gap-2">
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-amber-200 bg-clip-text text-transparent font-display"
              >
                PRÉ-ENEM ELO
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.4 }}
                className="text-xs uppercase tracking-[0.2em] text-brand-neon font-medium"
              >
                Educação que Conecta
              </motion.p>
            </div>

            {/* Frases Dinâmicas */}
            <div className="h-12 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={fraseIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm text-blue-100/80 font-sans italic"
                >
                  {FRASES[fraseIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            
            {/* Barra de Progresso Suave */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-brand-primary to-amber-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
