import { motion } from "motion/react";
import { Calculator, Book, Globe2, FlaskConical, PenTool } from "lucide-react";

export const EnemAreas = () => {
  const areas = [
    { 
      name: "Matemática", 
      accent: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", 
      abbr: "MAT", 
      desc: "Lógica, álgebra e geometria",
      icon: Calculator
    },
    { 
      name: "Linguagens", 
      accent: "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)", 
      abbr: "LIN", 
      desc: "Interpretação e literatura",
      icon: Book
    },
    { 
      name: "Ciências Humanas", 
      accent: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)", 
      abbr: "HUM", 
      desc: "História, geografia e filosofia",
      icon: Globe2
    },
    { 
      name: "Ciências da Natureza", 
      accent: "linear-gradient(135deg, #10b981 0%, #047857 100%)", 
      abbr: "NAT", 
      desc: "Biologia, física e química",
      icon: FlaskConical
    },
    { 
      name: "Redação", 
      accent: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)", 
      abbr: "RED", 
      desc: "Domínio e argumentação textual",
      icon: PenTool
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] overflow-hidden relative border border-blue-50 shadow-lg p-10 md:p-16"
          style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)" }}
        >
          {/* Luzes decorativas */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/3 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mx-auto lg:mx-0">
                <span
                  className="text-xs font-bold text-gray-800 uppercase tracking-widest"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Áreas do ENEM
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "Merriweather, Georgia, serif" }}
              >
                Domine as áreas do{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #1a56c4 0%, #f59e0b 100%)" }}
                >
                  ENEM
                </span>
              </h2>
              <p
                className="text-gray-600 text-lg leading-relaxed"
                style={{ fontFamily: "Lato, sans-serif", fontWeight: 300 }}
              >
                Nossa metodologia é estruturada exatamente sobre a matriz de referência do exame, garantindo preparo emocional e técnico para você atingir a nota máxima.
              </p>
            </div>

            <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 z-10">
              {areas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.03,
                    boxShadow: "0 15px 30px -10px rgba(0,0,0,0.08)"
                  }}
                  className={`group relative h-48 bg-white rounded-3xl flex flex-col justify-between p-6 overflow-hidden transition-all duration-300 border border-gray-100/80 cursor-pointer ${idx === 4 ? 'sm:col-span-2 md:col-span-1' : ''}`}
                >
                  {/* Fundo colorido translúcido que cresce no hover */}
                  <div
                    className="absolute inset-0 opacity-[0.01] group-hover:opacity-[0.05] transition-all duration-500 scale-95 group-hover:scale-100"
                    style={{ background: area.accent }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-[0.03] group-hover:opacity-[0.12] group-hover:scale-150 transition-all duration-700 origin-bottom-right"
                    style={{ background: area.accent }}
                  />
                  
                  <div className="flex justify-between items-start">
                    <div
                      className="text-sm font-black tracking-widest transition-colors duration-300 group-hover:text-amber-500"
                      style={{ fontFamily: "Lato, sans-serif", color: area.accent.includes('3b82f6') ? '#1d4ed8' : area.accent.includes('a855f7') ? '#7e22ce' : area.accent.includes('f59e0b') ? '#b45309' : area.accent.includes('10b981') ? '#047857' : '#be123c' }}
                    >
                      {area.abbr}
                    </div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" style={{ background: area.accent }}>
                      <area.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3
                      className="font-bold text-lg text-gray-800 mb-1 group-hover:text-brand-primary transition-colors duration-300"
                      style={{ fontFamily: "Merriweather, Georgia, serif" }}
                    >
                      {area.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300" style={{ fontFamily: "Lato, sans-serif" }}>
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
