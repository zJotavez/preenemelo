import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Rocket, BookOpenCheck, LineChart, Trophy } from "lucide-react";

export const Journey = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      icon: Rocket,
      title: "Início do Elo",
      desc: "Você entra no projeto, participa do acolhimento presencial inicial e desenha suas metas de curso e faculdade.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: BookOpenCheck,
      title: "Imersão e Prática",
      desc: "Acesso integral às aulas presenciais diárias, resolução exaustiva de questões e redações corrigidas individualmente.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: LineChart,
      title: "Simulados e Ajustes",
      desc: "Testes mensais sob condições reais de prova, diagnóstico TRI e lapidação fina de lacunas pedagógicas.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: Trophy,
      title: "A Grande Aprovação",
      desc: "Você domina o ENEM, conquista sua vaga nas melhores universidades públicas e transforma de vez sua realidade.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224b94?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-32 px-6 overflow-hidden bg-slate-950">
      {/* Background Animado com Nebulosa e Partículas */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-15"
            style={{ background: 'conic-gradient(from 0deg, transparent 0%, #3b82f6 25%, transparent 50%, #f59e0b 75%, transparent 100%)' }}
          />
        ) : (
          <div 
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-10"
            style={{ background: 'conic-gradient(from 0deg, transparent 0%, #3b82f6 25%, transparent 50%, #f59e0b 75%, transparent 100%)' }}
          />
        )}
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-3xl" />
        
        {/* Partículas Flutuantes performáticas (desativadas no mobile) */}
        {!isMobile && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full pointer-events-none"
            style={{
              background: i % 2 === 0 ? "#60a5fa" : "#fbbf24",
              top: `${Math.sin(i * 1.7) * 45 + 50}%`,
              left: `${Math.cos(i * 2.3) * 45 + 50}%`,
              opacity: 0.15,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 15, 0],
              opacity: [0.1, 0.35, 0.1],
            }}
            transition={{
              duration: 7 + (i % 5) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 4) * 1.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-500/5 border border-white/10 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            <span
              className="text-[10px] font-black uppercase tracking-widest text-slate-300"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Jornada do Aluno
            </span>
          </div>
          <motion.h2
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            A Caminhada da{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-amber-300"
            >
              Conquista
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Linha Fina Central de Fundo */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />
          
          {/* Linha Iluminada Ativa em Scroll (estática em 100% no mobile para evitar lag) */}
          <motion.div 
            className="absolute left-[39px] md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-blue-500 via-amber-400 to-amber-500 md:-translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"
            style={{ height: isMobile ? "100%" : lineHeight }}
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Visual Node Inativo */}
                <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-slate-900 border border-slate-800 rounded-full md:-translate-x-1/2 flex items-center justify-center z-10">
                  <step.icon className="w-5 h-5 text-slate-600" />
                </div>
                
                {/* Visual Node Ativo (Iluminado no Scroll) - Estático no mobile */}
                <motion.div
                  initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  whileInView={isMobile ? {} : { opacity: 1, scale: 1 }}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                  className="absolute left-4 md:left-1/2 w-12 h-12 bg-gradient-to-br from-blue-600 to-amber-500 border border-white/20 rounded-full md:-translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(245,158,11,0.6)]"
                >
                  <step.icon className="w-5 h-5 text-white" />
                </motion.div>

                {/* Conteúdo do Card Ajustado de Tamanho - Animações simplificadas no mobile */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 flex flex-col group ${idx % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                  <motion.div
                    initial={isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={isMobile ? {} : { opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                    className={`relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-[430px] border border-white/5 group-hover:border-amber-500/20 transition-colors duration-500 bg-slate-900/40`}
                  >
                    {/* Foto de Fundo do Card */}
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    
                    {/* Overlay Escuro Premium */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    {/* Conteúdo de Texto */}
                    <div className="relative z-10 p-6 md:p-8 flex flex-col gap-2">
                      <div
                        className="text-amber-400 text-[10px] font-black uppercase tracking-widest"
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        Etapa 0{idx + 1}
                      </div>
                      <h3
                        className="text-xl font-bold text-white tracking-tight"
                        style={{ fontFamily: "Merriweather, Georgia, serif" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light" style={{ fontFamily: "Lato, sans-serif" }}>
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
