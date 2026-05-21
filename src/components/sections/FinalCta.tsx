import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { GraduationCap, Sparkles } from "lucide-react";

export const FinalCta = () => {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden bg-slate-900">
      {/* Background Image Imponente */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
          alt="Estudantes vibrando com a aprovação" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        <div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Card Interativo Flutuante */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-10 md:p-16 lg:p-20 text-center shadow-2xl shadow-blue-900/50 hover:border-blue-400/50 transition-colors duration-500 group relative overflow-hidden"
        >
          {/* Efeito Hover Glow no Card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-amber-400 to-blue-600 rounded-[3rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 border border-blue-400 rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
            >
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              O próximo aprovado<br />
              pode ser{" "}
              <span
                className="bg-clip-text text-transparent relative inline-block"
                style={{ backgroundImage: "linear-gradient(90deg, #fcd34d 0%, #f59e0b 100%)" }}
              >
                você.
                <Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-amber-400 animate-pulse" />
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              As vagas para o curso presencial de 2026 são limitadas. Garanta seu lugar no projeto que vai transformar a sua trajetória com 100% de gratuidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-12 py-5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-xl rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] border-transparent transition-all duration-300"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Fazer Minha Inscrição Agora
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer minimalista e elegante */}
      <footer className="relative z-10 w-full mt-32 text-center pb-8 border-t border-white/10 pt-10">
        <p className="text-white/40 text-sm font-semibold tracking-wide" style={{ fontFamily: "Lato, sans-serif" }}>
          © {new Date().getFullYear()} Pré Enem Elo. Moldando futuros.
        </p>
        <div className="flex items-center justify-center gap-8 mt-4 text-xs font-bold uppercase tracking-widest text-white/30" style={{ fontFamily: "Lato, sans-serif" }}>
          <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-amber-400 transition-colors">WhatsApp</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Localização</a>
        </div>
      </footer>
    </section>
  );
};
