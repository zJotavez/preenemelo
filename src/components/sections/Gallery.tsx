import { motion } from "motion/react";
import { useRef } from "react";

export const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "https://images.unsplash.com/photo-1427504494785-319ce515cd69?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              A energia da <span className="text-brand-neon">Aprovação</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Uma comunidade de mentes brilhantes focadas no mesmo objetivo final.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full">
        <div 
          ref={scrollRef}
          className="flex gap-6 px-6 md:px-[calc((100vw-80rem)/2+1.5rem)] overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10"
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] aspect-[4/5] sm:aspect-[3/4] snap-center rounded-[2rem] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent opacity-80 z-20 pointer-events-none" />
              
              <img 
                src={src} 
                alt="Student moment" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
              />
              
              {/* Subtle tech border */}
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-30 pointer-events-none group-hover:border-brand-neon/30 transition-colors duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
