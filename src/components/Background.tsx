import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Particles = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-brand-neon opacity-20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 10px 2px rgba(56, 189, 248, 0.4)",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -100, -200],
            opacity: [0, 0.5, 0],
            x: p.x % 2 === 0 ? [0, 20, 0, -20, 0] : [0, -20, 0, 20, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export const Background = () => {
  return (
    <div className="fixed inset-0 z-0 bg-brand-darker pointer-events-none overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_#0F172A_0%,_#0B1120_40%,_#0d2163_100%)] opacity-80" />
      
      {/* Ethereal Glow Blobs */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-primary opacity-20 blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1], 
          x: [0, 50, 0],
          y: [0, 30, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-neon opacity-10 blur-[150px]"
        animate={{ 
          scale: [1, 1.3, 1], 
          x: [0, -60, 0],
          y: [0, -40, 0] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-[40%] left-[60%] w-[40%] h-[40%] rounded-full bg-brand-secondary opacity-10 blur-[100px]"
        animate={{ 
          scale: [1, 1.5, 1], 
          x: [0, -30, 0],
          y: [0, 50, 0] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDB2NjBIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCAwaC0xLjV2NjBoMS41VDB6TTAgNjB2LTEuNWg2MFY2MHoiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykiLz48L3N2Zz4=')] opacity-30" />

      {/* Particles */}
      <Particles />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0B1120_100%)] opacity-80" />
    </div>
  );
};
