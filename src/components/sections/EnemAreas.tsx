import { motion } from "motion/react";
import { Calculator, Book, Globe2, FlaskConical, PenTool } from "lucide-react";

export const EnemAreas = () => {
  const areas = [
    { 
      name: "Matemática", 
      accent: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      glowColor: "rgba(59, 130, 246, 0.4)",
      abbr: "MAT", 
      desc: "Lógica, álgebra e geometria espacial",
      icon: Calculator,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop"
    },
    { 
      name: "Linguagens", 
      accent: "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)",
      glowColor: "rgba(168, 85, 247, 0.4)",
      abbr: "LIN", 
      desc: "Interpretação textual e literatura nacional",
      icon: Book,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop"
    },
    { 
      name: "Ciências Humanas", 
      accent: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
      glowColor: "rgba(245, 158, 11, 0.4)",
      abbr: "HUM", 
      desc: "História geral, geografia e filosofia",
      icon: Globe2,
      image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=600&auto=format&fit=crop"
    },
    { 
      name: "Ciências da Natureza", 
      accent: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
      glowColor: "rgba(16, 185, 129, 0.4)",
      abbr: "NAT", 
      desc: "Biologia molecular, física e química",
      icon: FlaskConical,
      image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=600&auto=format&fit=crop"
    },
    { 
      name: "Redação", 
      accent: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",
      glowColor: "rgba(244, 63, 94, 0.4)",
      abbr: "RED", 
      desc: "Domínio cult e argumentação textual",
      icon: PenTool,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=600&auto=format&fit=crop"
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] overflow-hidden relative border border-slate-100 shadow-2xl p-8 md:p-16"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)" }}
        >
          {/* Luzes decorativas nebulosas de fundo */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
            
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-lg mx-auto lg:mx-0">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                <span
                  className="text-xs font-black text-slate-300 uppercase tracking-widest"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Matriz de Referência
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight"
                style={{ fontFamily: "Merriweather, Georgia, serif" }}
              >
                Foco total na prova do{" "}
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-amber-300 to-amber-500"
                >
                  ENEM
                </span>
              </h2>
              <p
                className="text-slate-300 text-base leading-relaxed font-light"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Nossa metodologia presencial é moldada nos mínimos detalhes sobre o padrão do exame. Desenvolvemos o repertório técnico e o equilíbrio mental essenciais para você alcançar notas de excelência.
              </p>
            </div>
 
            <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {areas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.04,
                    boxShadow: `0 20px 40px -10px ${area.glowColor}`
                  }}
                  className={`group relative h-48 rounded-3xl flex flex-col justify-between p-6 overflow-hidden transition-all duration-500 border border-white/5 cursor-pointer bg-slate-900/60 ${idx === 4 ? 'sm:col-span-2 md:col-span-1' : ''}`}
                >
                  {/* Foto temática da Unsplash de Fundo */}
                  <img 
                    src={area.image} 
                    alt={area.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-40"
                  />

                  {/* Gradiente Overlay de cor para legibilidade e ambientação */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-0" />
                  
                  {/* Glow sutil da cor da disciplina no fundo */}
                  <div 
                    className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: area.accent }}
                  />
                  
                  <div className="flex justify-between items-start relative z-10">
                    <div
                      className="text-xs font-black tracking-widest transition-colors duration-300 group-hover:text-white"
                      style={{ 
                        fontFamily: "Lato, sans-serif",
                        color: area.accent.includes('#3b82f6') ? '#60a5fa' : area.accent.includes('#a855f7') ? '#c084fc' : area.accent.includes('#f59e0b') ? '#fbbf24' : area.accent.includes('#10b981') ? '#34d399' : '#f87171' 
                      }}
                    >
                      {area.abbr}
                    </div>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" style={{ background: area.accent }}>
                      <area.icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3
                      className="font-bold text-base text-white mb-1 group-hover:text-amber-300 transition-colors duration-300"
                      style={{ fontFamily: "Merriweather, Georgia, serif" }}
                    >
                      {area.name}
                    </h3>
                    <p className="text-[11.5px] text-slate-400 leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-300" style={{ fontFamily: "Lato, sans-serif" }}>
                      {area.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
