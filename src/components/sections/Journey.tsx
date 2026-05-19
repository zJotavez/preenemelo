import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Rocket, BookOpenCheck, LineChart, Trophy } from "lucide-react";

export const Journey = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      icon: Rocket,
      title: "Início do Elo",
      desc: "Você entra no projeto, conhece a plataforma e define suas metas de curso e faculdade.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: BookOpenCheck,
      title: "Imersão e Prática",
      desc: "Acesso às aulas presenciais, resolução de milhares de questões focadas e redações semanais.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: LineChart,
      title: "Simulados e Lapidação",
      desc: "Testes sob pressão, análise TRI e direcionamento de estudos para fechar lacunas de conhecimento.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: Trophy,
      title: "A Aprovação",
      desc: "Você domina o exame, garante sua vaga na universidade e transforma seu futuro de vez.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-32 px-6 overflow-hidden bg-slate-900">
      {/* Background Animado */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-20"
          style={{ background: 'conic-gradient(from 0deg, transparent 0%, #3b82f6 20%, transparent 40%, #8b5cf6 60%, transparent 80%)' }}
        />
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            <span
              className="text-xs font-bold uppercase tracking-widest text-blue-300"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Jornada do Aluno
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            A Jornada da{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #60a5fa 0%, #c084fc 100%)" }}
            >
              Transformação
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />
          
          {/* Active Animated Line */}
          <motion.div 
            className="absolute left-[39px] md:left-1/2 top-0 w-[4px] bg-gradient-to-b from-blue-400 to-purple-500 md:-translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 md:gap-32">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Visual Node */}
                <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-slate-800 border-2 border-slate-700 rounded-full md:-translate-x-1/2 flex items-center justify-center z-10">
                  <step.icon className="w-5 h-5 text-slate-500" />
                </div>
                
                {/* Lit Node Overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                  className="absolute left-4 md:left-1/2 w-12 h-12 bg-blue-600 border-2 border-blue-300 rounded-full md:-translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(37,99,235,0.8)]"
                >
                  <step.icon className="w-5 h-5 text-white" />
                </motion.div>

                <div className="w-full md:w-1/2 pl-24 md:pl-0 flex flex-col group">
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    className={`relative rounded-3xl overflow-hidden shadow-2xl ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                  >
                    {/* Foto de Fundo do Card */}
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Escuro */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40 opacity-90 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Borda Decorativa */}
                    <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-blue-500/50 transition-colors duration-500" />

                    {/* Conteúdo */}
                    <div className="relative z-10 p-8 md:p-10">
                      <div
                        className={`text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        Fase 0{idx + 1}
                      </div>
                      <h3
                        className="text-2xl font-bold text-white mb-3"
                        style={{ fontFamily: "Merriweather, Georgia, serif" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
