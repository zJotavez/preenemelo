import React from "react";
import { motion } from "motion/react";

interface PageTransitionProps {
  children: React.ReactNode;
}

// Variantes para as faixas da cortina geométrica (Mask Reveal)
const overlayVariants = {
  initial: {
    skewY: 10,
    y: "-100%",
  },
  animate: {
    y: "100%",
    transition: {
      duration: 1.1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.9,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

// Variantes para o conteúdo da página (Slide + Fade)
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.01, -0.05, 0.95],
      delay: 0.2, // espera as cortinas começarem a abrir
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Cortinas coloridas para o Mask Reveal Geométrico */}
      {/* Faixa 1: Azul Profundo */}
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-x-0 top-0 h-[120vh] z-[999] bg-brand-dark pointer-events-none origin-top"
        style={{ transformOrigin: "top" }}
      />

      {/* Faixa 2: Azul ELO */}
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-x-0 top-0 h-[120vh] z-[1000] bg-brand-primary pointer-events-none origin-top"
        style={{ 
          transformOrigin: "top",
          transitionDelay: "0.1s" 
        }}
      />

      {/* Faixa 3: Dourado/Âmbar da marca */}
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-x-0 top-0 h-[120vh] z-[1001] bg-amber-500 pointer-events-none origin-top"
        style={{ 
          transformOrigin: "top",
          transitionDelay: "0.2s" 
        }}
      />

      {/* Conteúdo Real da Página */}
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
};
