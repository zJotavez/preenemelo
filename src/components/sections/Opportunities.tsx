import { motion } from "motion/react";

export const Opportunities = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[3rem] overflow-hidden relative border border-white/10 p-10 md:p-20">
          
          {/* Abstract bg element */}
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)] opacity-10 translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_var(--color-brand-neon)_0%,_transparent_70%)] opacity-10 -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

          {/* ELO Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[12rem] md:text-[20rem] leading-none text-slate-100/[0.03] tracking-tighter select-none pointer-events-none z-0">
            ELO
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-neon" />
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Apoio Integral</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Ampliando <span className="text-brand-neon">Horizontes</span>.
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Acreditar na educação é investir no futuro. O projeto proporciona oportunidades reais de crescimento, oferecendo incentivo e ferramentas para que alunos de diferentes realidades desenvolvam habilidades além da prova.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-display font-bold text-white mb-2">100%</h4>
                  <p className="text-sm text-slate-400 uppercase tracking-wide">Foco no Aluno</p>
                </div>
                <div>
                  <h4 className="text-4xl font-display font-bold text-white mb-2">+Acesso</h4>
                  <p className="text-sm text-slate-400 uppercase tracking-wide">Igualdade de Ensino</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square relative flex items-center justify-center p-8"
            >
              {/* Data Visualization / Abstract representation */}
              <div className="relative w-full h-full max-h-[400px]">
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M10,90 Q50,50 90,10" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="0.5" className="animate-pulse" />
                  <path d="M10,50 Q50,0 90,50" fill="none" stroke="rgba(56, 189, 248, 0.1)" strokeWidth="0.5" />
                  <path d="M10,10 Q50,90 90,90" fill="none" stroke="rgba(56, 189, 248, 0.1)" strokeWidth="0.5" />
                </svg>

                {/* Floating nodes */}
                <motion.div 
                  className="absolute top-[10%] right-[10%] w-16 h-16 rounded-full glass flex items-center justify-center border-brand-neon/30 box-glow"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-brand-neon font-mono text-xs">+Futuro</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-[20%] left-[10%] w-20 h-20 rounded-full glass flex items-center justify-center border-brand-primary/30"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="text-white font-mono text-xs">Transformação</span>
                </motion.div>

                <motion.div 
                  className="absolute top-[40%] right-[40%] w-24 h-24 rounded-full bg-brand-primary/20 backdrop-blur-xl flex items-center justify-center border border-brand-neon/50 box-glow"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <span className="text-white font-display font-bold">+Aprovação</span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
