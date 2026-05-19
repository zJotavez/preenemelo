import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { teachers } from "../../data/teachers";

export const Testimonials = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span
              className="text-xs font-bold uppercase tracking-widest text-amber-600"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Incentivo
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Mensagens dos{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #f59e0b 0%, #d97706 100%)" }}
            >
              Especialistas
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Lato, sans-serif", fontWeight: 300 }}
          >
            Nossa equipe preparou palavras de encorajamento para você que está nessa jornada rumo à aprovação.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {teachers.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-[2rem] relative border border-gray-100 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-400 group overflow-hidden flex flex-col justify-between"
            >
              {/* Background Accent Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                style={{ background: `linear-gradient(135deg, transparent 0%, ${t.accentColor} 100%)` }} 
              />
              
              <Quote 
                className="absolute top-6 right-6 w-12 h-12 opacity-10 transform -scale-x-100 transition-transform duration-500 group-hover:scale-[1.2] group-hover:-scale-x-[1.2]" 
                style={{ color: t.accentColor }}
              />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full scale-110 opacity-20 blur-md transition-all duration-300 group-hover:scale-125" style={{ background: t.accentColor }} />
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 shadow-sm relative z-10"
                    style={{ borderColor: t.accentColor }}
                  />
                </div>
                <div>
                  <h4
                    className="text-gray-900 font-bold text-lg leading-tight"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    Prof. {t.name}
                  </h4>
                  <p 
                    className="text-xs font-bold uppercase tracking-widest mt-1" 
                    style={{ fontFamily: "Lato, sans-serif", color: t.accentColor === "#b45309" ? "#d97706" : t.accentColor === "#065f46" ? "#047857" : t.accentColor }}
                  >
                    {t.subject}
                  </p>
                </div>
              </div>
              
              <div className="relative z-10">
                <p
                  className="text-gray-600 leading-relaxed italic text-base"
                  style={{ fontFamily: "Merriweather, Georgia, serif" }}
                >
                  "{t.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
