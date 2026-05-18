import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { Sparkles } from "lucide-react";

export const FinalCta = () => {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden">
      {/* Background Cinematic Lighting for CTA */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[800px] h-[400px] bg-brand-primary opacity-30 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute w-[400px] h-[300px] bg-brand-neon opacity-20 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card rounded-[3rem] p-12 md:p-24 border border-white/10 relative overflow-hidden"
        >
          {/* subtle particles inside card */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDB2NjBIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCAwaC0xHYzYwaDFWTTB6TTAgNjB2LTFoNjBWNjB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9zdmc+')] opacity-20" />

          {/* ELO Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[12rem] md:text-[20rem] leading-none text-slate-100/[0.02] tracking-tighter select-none pointer-events-none z-0">
            ELO
          </div>

          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 mx-auto bg-brand-primary/20 border border-brand-neon/50 rounded-2xl flex items-center justify-center mb-8 box-glow"
            >
              <Sparkles className="w-8 h-8 text-brand-neon" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              O próximo aprovado <br/> pode ser <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-white text-glow">você.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
            >
              As vagas são limitadas. Garanta seu lugar no projeto que vai transformar a sua trajetória e te colocar dentro da universidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button size="lg" className="w-full sm:w-auto text-lg shadow-[0_0_40px_rgba(56,189,248,0.5)]">
                Quero Fazer Parte
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer minimal */}
      <footer className="relative z-10 w-full mt-24 text-center pb-8 border-t border-white/5 pt-8">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Pré Enem Elo. Todos os direitos reservados.</p>
        <div className="flex items-center justify-center gap-4 mt-4 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </footer>
    </section>
  );
};
