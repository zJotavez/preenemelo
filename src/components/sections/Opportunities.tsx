import { motion } from "motion/react";
import { BookOpen, Users2, Brain, Coffee } from "lucide-react";

export const Opportunities = () => {
  const cards = [
    { 
      icon: Brain, 
      label: "Apoio Emocional", 
      value: "Psicologia", 
      desc: "Suporte e mentoria profissional humana",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=600&auto=format&fit=crop",
      accent: "from-blue-600/40 to-blue-900/60",
      glow: "rgba(59, 130, 246, 0.3)"
    },
    { 
      icon: BookOpen, 
      label: "Material Físico", 
      value: "Apostilas", 
      desc: "Cadernos 100% impressos e atualizados",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop",
      accent: "from-amber-600/40 to-amber-900/60",
      glow: "rgba(245, 158, 11, 0.3)"
    },
    { 
      icon: Users2, 
      label: "Atendimento", 
      value: "Plantões", 
      desc: "Tira-dúvidas presencial individual",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
      accent: "from-blue-600/40 to-blue-900/60",
      glow: "rgba(59, 130, 246, 0.3)"
    },
    { 
      icon: Coffee, 
      label: "Infraestrutura", 
      value: "Conforto", 
      desc: "Salas climatizadas e ambiente premium",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
      accent: "from-amber-600/40 to-amber-900/60",
      glow: "rgba(245, 158, 11, 0.3)"
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-[2.5rem] overflow-hidden relative border border-slate-100 shadow-2xl"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)" }}
        >
          {/* Elementos orgânicos de fundo / Glows */}
          <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center p-8 md:p-20">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span
                  className="text-xs font-black text-slate-300 uppercase tracking-widest"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Apoio Presencial Integral
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight"
                style={{ fontFamily: "Merriweather, Georgia, serif" }}
              >
                Muito além da{" "}
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300"
                >
                  sala de aula.
                </span>
              </h2>
              <p
                className="text-base text-slate-300 mb-10 leading-relaxed font-light"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Acreditamos que a aprovação exige um suporte que vai muito além das teorias acadêmicas. Nossa infraestrutura presencial de alta performance e corpo de mentores estão integralmente à sua disposição para consolidar seu aprendizado e blindar sua mente.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/5">
                <div>
                  <h4
                    className="text-4xl font-black text-blue-400 mb-2"
                    style={{ fontFamily: "Merriweather, Georgia, serif" }}
                  >
                    100%
                  </h4>
                  <p
                    className="text-xs text-slate-400 uppercase tracking-wider font-bold"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    Presencial & Gratuito
                  </p>
                </div>
                <div>
                  <h4
                    className="text-4xl font-black text-amber-400 mb-2"
                    style={{ fontFamily: "Merriweather, Georgia, serif" }}
                  >
                    Acolhimento
                  </h4>
                  <p
                    className="text-xs text-slate-400 uppercase tracking-wider font-bold"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    Igualdade e Impacto
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              {/* Cards de Recursos Físicos e Metodológicos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cards.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: idx * 0.08, 
                      duration: 0.5, 
                      ease: [0.215, 0.61, 0.355, 1] 
                    }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.04,
                      boxShadow: `0 20px 30px -10px ${item.glow}`
                    }}
                    className="relative bg-slate-900/60 rounded-[2rem] p-6 overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 group cursor-pointer"
                  >
                    {/* Imagem de Fundo Unsplash (Colorida e vibrante por padrão) */}
                    <img 
                      src={item.image} 
                      alt={item.value} 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:opacity-60"
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.accent} mix-blend-multiply opacity-40 z-0`} />
                    <div className="absolute inset-0 bg-slate-950/50 group-hover:bg-slate-950/30 transition-colors duration-500 z-0" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-300 group-hover:border-transparent group-hover:rotate-6 transition-all duration-500 shadow-lg">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div
                          className="text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors duration-300"
                          style={{ fontFamily: "Merriweather, Georgia, serif" }}
                        >
                          {item.value}
                        </div>
                        <div
                          className="text-[10px] text-blue-400 uppercase tracking-widest font-black mb-3 group-hover:text-white transition-colors duration-300"
                          style={{ fontFamily: "Lato, sans-serif" }}
                        >
                          {item.label}
                        </div>
                      </div>
                      <div
                        className="text-xs text-slate-400 leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-300"
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
