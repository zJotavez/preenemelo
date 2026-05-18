import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { Monitor, Edit3, BarChart2, Clock, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center z-10 relative">
        
        {/* LEFT COLUMN - TEXT AND CTA */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-2 mb-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-md"
          >
            <span className="text-xs font-bold tracking-widest text-brand-neon uppercase">Inscrições Abertas 2024</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-white mb-6 leading-[1.1]"
          >
            Seu futuro <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-brand-neon drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">começa agora.</span>
              <div className="absolute bottom-1 left-0 w-full h-[40%] bg-brand-primary/30 blur-[15px] -z-10" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-300 md:text-xl font-sans mb-10 max-w-xl leading-relaxed"
          >
            Transforme sua vida através da educação. O Pré Enem Elo conecta jovens talentos à aprovação universitária com tecnologia, suporte emocional e excelência acadêmica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto px-8 bg-brand-secondary hover:bg-brand-primary">
              Começar Agora
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto px-8 bg-white/5 border border-white/10 hover:bg-white/10">
              Conhecer o Projeto
            </Button>
          </motion.div>

          {/* KPI STATS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10 w-full"
          >
            <div>
              <div className="text-3xl font-bold font-display text-white mb-1">92%</div>
              <div className="text-xs text-brand-neon uppercase font-semibold tracking-wider">Aprovação</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-display text-white mb-1">+5k</div>
              <div className="text-xs text-brand-neon uppercase font-semibold tracking-wider">Impactados</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-display text-white mb-1">100%</div>
              <div className="text-xs text-brand-neon uppercase font-semibold tracking-wider">Gratuito</div>
            </div>
          </motion.div>
        </div>
        
        {/* RIGHT COLUMN - THE CARDS AND THE HUGE ELO WATERMARK */}
        <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
          
          {/* THE "ELO" HUGE BACKGROUND */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[12rem] md:text-[18rem] lg:text-[22rem] leading-none text-slate-100/[0.02] tracking-tighter select-none pointer-events-none z-0"
          >
            ELO
          </motion.div>

          {/* WIDGETS/CARDS GRID */}
          <div className="relative z-10 w-full max-w-lg lg:ml-auto flex flex-col gap-4">
            
            {/* Top Span Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 relative overflow-hidden group hover:border-brand-primary/30 transition-colors"
            >
              <div className="absolute right-4 top-4 text-brand-neon/30 group-hover:text-brand-neon/60 transition-colors">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-xs font-bold text-brand-neon uppercase tracking-widest mb-2">Destaque</div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug w-[80%] mb-5">
                Tecnologia aplicada ao aprendizado inteligente
              </h3>
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-brand-dark border-2 border-[#111827] flex items-center justify-center text-xs text-brand-neon font-bold">1</div>
                <div className="w-8 h-8 rounded-full bg-brand-dark/80 border-2 border-[#111827] flex items-center justify-center text-xs text-brand-neon font-bold">2</div>
                <div className="w-8 h-8 rounded-full bg-brand-primary/20 border-2 border-[#111827] flex items-center justify-center text-xs text-brand-neon font-bold">+9k</div>
              </div>
            </motion.div>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Monitor, title: "Aulas Ao Vivo", desc: "Interação em tempo real com especialistas." },
                { icon: Edit3, title: "Redação Nota Mil", desc: "Correções detalhadas com foco em performance." },
                { icon: BarChart2, title: "Simulados", desc: "Questões inéditas baseadas no novo ENEM." },
                { icon: Clock, title: "Cronograma", desc: "Gestão de tempo personalizada por aluno." },
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + (idx * 0.1) }}
                  className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:-translate-y-1 hover:border-brand-primary/30 transition-all cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-brand-neon" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
