import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { GraduationCap, Sparkles, Instagram, Phone, MapPin } from "lucide-react";

export const FinalCta = () => {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden bg-slate-950">
      {/* Background Image com overlay imponente de degradê e mix-blend */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
          alt="Estudantes vibrando com a aprovação" 
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-950/80 via-slate-950 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Card Interativo Flutuante de Alta Vibração Emocional */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
          className="w-full bg-slate-900/40 backdrop-blur-2xl border border-amber-500/20 rounded-[3.5rem] p-10 md:p-16 lg:p-20 text-center shadow-[0_0_100px_rgba(245,158,11,0.04)] hover:border-amber-500/40 transition-colors duration-700 group relative overflow-hidden"
        >
          {/* Esferas de Luz Fluidas no Fundo do Card (Alta Vibração Emocional) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Esfera Azul Profundo */}
            <motion.div
              animate={{
                x: [0, 60, -40, 0],
                y: [0, -40, 40, 0],
                scale: [1, 1.3, 0.8, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-[90px]"
            />
            {/* Esfera Âmbar Dourada */}
            <motion.div
              animate={{
                x: [0, -40, 60, 0],
                y: [0, 30, -50, 0],
                scale: [1, 0.8, 1.25, 1],
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[90px]"
            />
          </div>

          {/* Efeito Glow da Borda */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/10 via-yellow-400/5 to-indigo-500/10 rounded-[3.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000 pointer-events-none z-0" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-amber-600 border border-amber-400/50 rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-amber-500/20 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
            >
              <GraduationCap className="w-10 h-10 text-slate-950" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              O próximo aprovado<br />
              pode ser{" "}
              <span
                className="bg-clip-text text-transparent relative inline-block font-extrabold pb-2"
                style={{ backgroundImage: "linear-gradient(90deg, #fcd34d 0%, #f59e0b 100%)" }}
              >
                você.
                <Sparkles className="absolute -top-4 -right-10 w-8 h-8 text-amber-400 animate-pulse" />
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              As vagas para o nosso curso presencial em <span className="font-bold text-white">Campina Grande - PB</span> são extremamente limitadas. Reserve sua cadeira na sala de aula que vai desenhar sua aprovação com 100% de gratuidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xl rounded-full shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_45px_rgba(245,158,11,0.55)] border-transparent transition-all duration-300"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Garantir Minha Vaga no Projeto
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer minimalista, fino e com acabamento de luxo */}
      <footer className="relative z-10 w-full mt-32 text-center pb-8 border-t border-white/5 pt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium" style={{ fontFamily: "Lato, sans-serif" }}>
            © {new Date().getFullYear()} Pré Enem Elo. Moldando novos horizontes e aprovações.
          </p>
          
          <div className="flex items-center gap-8 text-xs font-extrabold uppercase tracking-widest text-slate-400" style={{ fontFamily: "Lato, sans-serif" }}>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-amber-500 transition-colors group"
            >
              <Instagram className="w-4 h-4 text-amber-500/80 group-hover:text-amber-500 transition-colors" />
              <span>Instagram</span>
            </a>
            
            <a 
              href="https://wa.me/5583999999999" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-amber-500 transition-colors group"
            >
              <Phone className="w-4 h-4 text-amber-500/80 group-hover:text-amber-500 transition-colors" />
              <span>WhatsApp</span>
            </a>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-amber-500 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-amber-500/80 group-hover:text-amber-500 transition-colors" />
              <span>Sede CG</span>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};
