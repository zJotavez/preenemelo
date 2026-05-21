import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "../ui/Button";

export const Hero = () => {
  const { scrollY } = useScroll();
  
  // Efeito paralaxe na imagem de fundo (move 25% da velocidade do scroll)
  const yBg = useTransform(scrollY, [0, 1000], ["0%", "25%"]);
  
  // Efeito paralaxe no container de textos
  const yText = useTransform(scrollY, [0, 1000], ["0px", "80px"]);

  // Elementos geométricos decorativos com velocidades de paralaxe variadas
  const yCircle1 = useTransform(scrollY, [0, 1000], ["0px", "-150px"]);
  const yCircle2 = useTransform(scrollY, [0, 1000], ["0px", "120px"]);
  const yCircle3 = useTransform(scrollY, [0, 1000], ["0px", "-250px"]);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-brand-void">
      {/* Imagem de Fundo com efeito Paralaxe real */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 scale-105"
      >
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
          alt="Estudantes" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay azul degradê escuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1930] via-[#0a1930]/85 to-[#0a1930]/40" />
        <div className="absolute inset-0 bg-blue-950/45 mix-blend-multiply" />
      </motion.div>

      {/* Elementos geométricos 3D com profundidade de rolagem (Parallax Elements) */}
      {/* Círculo Azul Brilhante Superior Direito */}
      <motion.div
        style={{ y: yCircle1 }}
        className="absolute top-24 right-10 w-96 h-96 rounded-full bg-brand-primary/20 blur-[80px] pointer-events-none z-10"
      />
      {/* Círculo Dourado/Âmbar Esquerdo do Centro */}
      <motion.div
        style={{ y: yCircle2 }}
        className="absolute top-1/2 left-[-100px] w-80 h-80 rounded-full bg-amber-500/10 blur-[90px] pointer-events-none z-10"
      />
      {/* Elemento Geométrico Sutil Interativo */}
      <motion.div
        style={{ y: yCircle3 }}
        className="absolute bottom-20 right-1/4 w-32 h-32 rounded-full border border-white/10 backdrop-blur-sm pointer-events-none z-10 hidden md:block"
        animate={{ 
          rotate: 360, 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Faixa Marquee Superior - Curso 2026 */}
      <div className="absolute top-24 left-0 w-full overflow-hidden bg-amber-500 py-2.5 z-20 flex whitespace-nowrap shadow-lg transform -rotate-1 origin-left">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 18, repeat: Infinity }}
          className="flex whitespace-nowrap gap-10 items-center"
        >
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="text-black font-black uppercase tracking-widest text-sm flex items-center gap-10">
              CURSO DE 2026 - INSCRIÇÕES ABERTAS
              <span className="w-2 h-2 rounded-full bg-black inline-block"></span>
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div 
        style={{ y: yText }}
        className="w-full max-w-7xl mx-auto px-6 pt-36 pb-20 relative z-10 flex flex-col items-start text-left mt-10"
      >
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Seu futuro <br />
            <span className="relative inline-block mt-2">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #fcd34d 0%, #fbbf24 60%, #f59e0b 100%)" }}
              >
                começa agora.
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed"
            style={{ fontFamily: "Lato, sans-serif", fontWeight: 300 }}
          >
            Transforme sua vida através da educação presencial. O Pré Enem Elo conecta jovens talentos à aprovação universitária com suporte emocional, excelência acadêmica e metodologia focada em resultado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto px-10 py-5 bg-amber-500 text-black hover:bg-amber-400 font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-amber-500/20"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Inscrever-se Gratuitamente
            </Button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                <span className="text-xl font-bold text-white">🏆</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl" style={{ fontFamily: "Merriweather, Georgia, serif" }}>100%</span>
                <span className="text-white/70 text-xs uppercase tracking-widest font-bold" style={{ fontFamily: "Lato, sans-serif" }}>Gratuito</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Degradê na base para transição suave para a próxima seção */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};
