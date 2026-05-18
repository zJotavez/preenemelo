import { motion } from "motion/react";

export const EnemAreas = () => {
  const areas = [
    { name: "Matemática", color: "from-blue-500 to-cyan-400", abbr: "MAT" },
    { name: "Linguagens", color: "from-pink-500 to-rose-400", abbr: "LIN" },
    { name: "Ciências Humanas", color: "from-amber-500 to-orange-400", abbr: "HUM" },
    { name: "Ciências da Natureza", color: "from-green-500 to-emerald-400", abbr: "NAT" },
    { name: "Redação", color: "from-purple-500 to-indigo-400", abbr: "RED" },
  ];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-10 md:p-16 border border-white/5 relative"
        >
          {/* Subtle bg glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-brand-neon to-transparent opacity-50" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/3">
              <h2 className="font-display text-4xl font-bold mb-4">
                Domine as áreas do <span className="text-brand-neon">ENEM</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Método focado na matriz de referência do exame para maximizar seus acertos e contornar os distratores.
              </p>
            </div>

            <div className="lg:w-2/3 w-full grid grid-cols-2 md:grid-cols-3 gap-4">
              {areas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative h-40 glass rounded-2xl flex flex-col justify-between p-6 overflow-hidden hover:border-brand-primary/50 transition-colors"
                >
                  <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${area.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
                  
                  {/* ELO Watermark */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-6xl leading-none text-slate-100/[0.02] group-hover:text-slate-100/[0.04] transition-colors tracking-tighter select-none pointer-events-none z-0">
                    ELO
                  </div>
                  
                  <div className="text-sm font-bold flex-1 text-slate-500 font-mono tracking-wider relative z-10">
                    {area.abbr}
                  </div>
                  <h3 className="font-semibold text-lg text-white font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 relative z-10">
                    {area.name}
                  </h3>
                </motion.div>
              ))}
              
              {/* Extra dummy card for grid balance if needed, or just let it flow. 5 items in 3 cols leaves 1 empty slot */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="col-span-2 md:col-span-1 h-40 rounded-2xl border border-dashed border-slate-700 flex items-center justify-center p-6 text-center"
              >
                <span className="text-sm text-slate-500 font-medium">+ Estratégia de Prova</span>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
