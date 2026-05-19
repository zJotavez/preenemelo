import { useEffect, useState } from "react";
import { motion } from "motion/react";

export const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Fundo branco ao azul profundo — degradê formal */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,_#ffffff_0%,_#dbeafe_25%,_#93c5fd_55%,_#2563EB_80%,_#0f1c38_100%)]" />

      {/* Overlay suave para aumentar profundidade */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.05)_0%,_rgba(15,28,56,0.65)_100%)]" />

      {/* Mancha de luz azul sutil no topo */}
      <motion.div
        className="absolute top-[-5%] left-[20%] w-[60%] h-[45%] rounded-full bg-blue-200 opacity-30 blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          y: [0, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mancha de luz branca sutil à esquerda */}
      <motion.div
        className="absolute top-[10%] left-[-5%] w-[35%] h-[40%] rounded-full bg-white opacity-20 blur-[100px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Textura de papel sutil */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
};
