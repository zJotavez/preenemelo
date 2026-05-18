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
      desc: "Você entra no projeto, conhece a plataforma e define suas metas de curso e faculdade."
    },
    {
      icon: BookOpenCheck,
      title: "Imersão e Prática",
      desc: "Acesso às aulas, resolução de milhares de questões focadas e redações semanais."
    },
    {
      icon: LineChart,
      title: "Simulados e Lapidação",
      desc: "Testes sob pressão, análise de TRI e direcionamento de estudos para fechar lacunas."
    },
    {
      icon: Trophy,
      title: "A Aprovação",
      desc: "Você domina o exame, garante sua vaga na universidade e transforma seu futuro."
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold"
          >
            A Jornada da <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-primary">Transformação</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 md:-translate-x-1/2" />
          
          {/* Active Animated Line */}
          <motion.div 
            className="absolute left-[23px] md:left-1/2 top-0 w-[2px] bg-brand-neon md:-translate-x-1/2 box-glow"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Visual Node */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-brand-darker border-2 border-slate-700 rounded-full md:-translate-x-1/2 flex items-center justify-center z-10 transition-colors duration-500">
                  <step.icon className="w-5 h-5 text-slate-500" />
                </div>
                
                {/* Lit Node Overlay (framer motion based on scroll could be complex, we will just use whileInView) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ margin: "-50% 0px -50% 0px" }} // Trigger exactly at center
                  className="absolute left-0 md:left-1/2 w-12 h-12 bg-brand-primary border-2 border-brand-neon rounded-full md:-translate-x-1/2 flex items-center justify-center z-20 box-glow"
                >
                  <step.icon className="w-5 h-5 text-white" />
                </motion.div>

                <div className="w-full md:w-1/2 pl-16 md:pl-0 flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`glass p-8 rounded-3xl border border-white/5 ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                  >
                    <div className={`text-brand-neon font-mono text-sm font-bold mb-2 ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                      FASE 0{idx + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-display relative z-10">{step.title}</h3>
                    <p className="text-slate-400 text-base leading-relaxed relative z-10">{step.desc}</p>
                    
                    {/* ELO Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-6xl md:text-8xl leading-none text-slate-100/[0.02] tracking-tighter select-none pointer-events-none z-0">
                      ELO
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
