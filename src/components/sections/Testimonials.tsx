import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Clock, ArrowRight, Newspaper, Calendar } from "lucide-react";
import { teachers } from "../../data/teachers";

export const Testimonials = () => {
  const navigate = useNavigate();
  const solange = teachers.find(t => t.id === "solange") || teachers[0];
  const matheus = teachers.find(t => t.id === "matheus-glaydson") || teachers[1];
  const fabio = teachers.find(t => t.id === "fabio-alves") || teachers[2];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-slate-50">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Portal Header Accent */}
        <div className="border-b-2 border-slate-900 pb-6 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-slate-900 text-white shadow-sm">
              <Newspaper className="w-3.5 h-3.5" />
              <span
                className="text-[10px] font-extrabold uppercase tracking-widest"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Caderno de Opinião
              </span>
            </div>
            
            <h2
              className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              ELO <span className="text-amber-600">NEWS</span>
            </h2>
          </div>

          <div 
            className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-wider border-t md:border-t-0 md:border-l border-slate-300 pt-3 md:pt-0 md:pl-6"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            <Calendar className="w-4 h-4 text-amber-600" />
            <span>Campina Grande, PB — Edição Especial 2026</span>
          </div>
        </div>

        {/* News Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* MATÉRIA PRINCIPAL (DESTAQUE GRANDE - SOLANGE REDAÇÃO) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate(`/professor/${solange.id}`)}
            className="lg:col-span-2 flex flex-col md:flex-row justify-between bg-slate-950 text-white rounded-[2.5rem] overflow-hidden border border-slate-900 shadow-2xl relative group cursor-pointer hover:border-amber-500/40 hover:shadow-amber-500/5 transition-all duration-500"
          >
            {/* Hover Glow Light */}
            <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Left Content Column */}
            <div className="p-8 md:p-12 flex flex-col justify-between md:w-3/5 z-10 relative">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-amber-600 text-slate-950 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded">
                    EXCLUSIVO
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>5 min de leitura</span>
                  </div>
                </div>

                <h3
                  className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight group-hover:text-amber-400 transition-colors duration-300"
                  style={{ fontFamily: "Merriweather, Georgia, serif" }}
                >
                  MÉTODO DE EXCELÊNCIA: Como alcançar a nota 1000 na Redação do ENEM 2026
                </h3>

                <p 
                  className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-light"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  "A escrita e a literatura revelam sua capacidade crítica. Vou te guiar rumo à nota máxima no ENEM."
                </p>

                <p 
                  className="text-slate-300 text-sm leading-relaxed border-l-2 border-amber-500 pl-4 italic mb-8"
                  style={{ fontFamily: "Merriweather, Georgia, serif" }}
                >
                  {solange.shortBio}
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 border-t border-slate-800 pt-6 mt-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-md scale-110" />
                  <img
                    src={solange.photo}
                    alt={solange.name}
                    className="w-12 h-12 rounded-full object-cover border border-amber-500 relative z-10"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide" style={{ fontFamily: "Lato, sans-serif" }}>
                    Profª. {solange.name}
                  </h4>
                  <p className="text-[10px] text-amber-500 font-extrabold uppercase tracking-widest">
                    {solange.subject}
                  </p>
                </div>
                <div className="ml-auto w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-slate-950 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="md:w-2/5 relative h-64 md:h-auto min-h-[320px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-l from-transparent via-slate-950/70 to-slate-950 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent md:hidden z-10" />
              <img
                src={solange.photo}
                alt={solange.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* MATÉRIAS SECUNDÁRIAS (COLUNA LATERAL COM 2 MATÉRIAS) */}
          <div className="flex flex-col gap-6 lg:col-span-1 justify-between">
            
            {/* CARD 2: FÁBIO ALVES (FÍSICA) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => navigate(`/professor/${fabio.id}`)}
              className="bg-white text-slate-900 rounded-[2rem] p-8 border border-slate-100 shadow-md relative group cursor-pointer hover:shadow-xl hover:border-amber-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-1/2 min-h-[220px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase tracking-wider">
                    FÍSICA & EXATAS
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>3 min</span>
                  </div>
                </div>

                <h3
                  className="text-lg font-bold mb-3 text-slate-900 group-hover:text-amber-600 transition-colors duration-300 leading-snug"
                  style={{ fontFamily: "Merriweather, Georgia, serif" }}
                >
                  EXATAS SEM MISTÉRIO: Doutor ensina lógica integrativa para vencer as questões temidas
                </h3>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-4">
                <img
                  src={fabio.photo}
                  alt={fabio.name}
                  className="w-9 h-9 rounded-full object-cover border border-emerald-600"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-800" style={{ fontFamily: "Lato, sans-serif" }}>
                    {fabio.name}
                  </h4>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                    {fabio.subject}
                  </p>
                </div>
                <div className="ml-auto w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-slate-950 transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* CARD 3: MATHEUS GLAYDSON (HISTÓRIA) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => navigate(`/professor/${matheus.id}`)}
              className="bg-white text-slate-900 rounded-[2rem] p-8 border border-slate-100 shadow-md relative group cursor-pointer hover:shadow-xl hover:border-amber-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-1/2 min-h-[220px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase tracking-wider">
                    HISTÓRIA
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>4 min</span>
                  </div>
                </div>

                <h3
                  className="text-lg font-bold mb-3 text-slate-900 group-hover:text-amber-600 transition-colors duration-300 leading-snug"
                  style={{ fontFamily: "Merriweather, Georgia, serif" }}
                >
                  NARRATIVAS DA HISTÓRIA: Entender o passado para interpretar o presente e a prova do ENEM
                </h3>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-4">
                <img
                  src={matheus.photo}
                  alt={matheus.name}
                  className="w-9 h-9 rounded-full object-cover border border-amber-700"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-800" style={{ fontFamily: "Lato, sans-serif" }}>
                    Prof. {matheus.name}
                  </h4>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                    {matheus.subject}
                  </p>
                </div>
                <div className="ml-auto w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-slate-950 transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
