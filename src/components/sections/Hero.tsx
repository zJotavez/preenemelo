import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "../ui/Button";
import { Sparkles, ArrowRight, GraduationCap } from "lucide-react";

export const Hero = () => {
  const { scrollY } = useScroll();
  
  // Efeito paralaxe na imagem de fundo e nos elementos de luz (move 15% da velocidade do scroll)
  const yBg = useTransform(scrollY, [0, 1000], ["0%", "15%"]);
  const yText = useTransform(scrollY, [0, 1000], ["0px", "60px"]);

  // Elementos de luz dinâmicos (nebulosas de fundo)
  const yLight1 = useTransform(scrollY, [0, 1000], ["0px", "-100px"]);
  const yLight2 = useTransform(scrollY, [0, 1000], ["0px", "100px"]);

  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-[110vh] flex flex-col justify-center overflow-hidden bg-brand-void pt-20">
      {/* Imagem de Fundo em Paralaxe Suave */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 scale-105"
      >
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
          alt="Estudantes" 
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Overlay azul degradê com mais vibração e emoção */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0b1b3d]/90 to-[#020617]" />
        <div className="absolute inset-0 bg-[#0f172a]/70 mix-blend-multiply" />
      </motion.div>

      {/* Nebulosas de Fundo Animadas e Dinâmicas (Efeito Degradê Emocionante) */}
      <motion.div
        style={{ y: yLight1 }}
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.45, 0.35],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/30 blur-[120px] pointer-events-none z-10"
      />
      <motion.div
        style={{ y: yLight2 }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 left-[-10%] w-[600px] h-[600px] rounded-full bg-amber-500/20 blur-[130px] pointer-events-none z-10"
      />

      {/* Faixas Cruzadas em X (Marquees de Inscrições Abertas) */}
      {/* Faixa 1: Rotacionada para Baixo (\) */}
      <div className="absolute top-28 sm:top-36 left-0 w-[120%] -left-[10%] overflow-hidden bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 py-3.5 z-20 flex whitespace-nowrap shadow-2xl transform -rotate-3 origin-center border-y border-amber-300/30">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 22, repeat: Infinity }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="text-[#020617] font-black uppercase tracking-widest text-xs sm:text-sm flex items-center gap-12" style={{ fontFamily: "Lato, sans-serif" }}>
              INSCRIÇÕES ABERTAS - CURSO 2026
              <span className="w-2.5 h-2.5 rounded-full bg-[#020617] inline-block shadow-sm"></span>
              PRÉ ENEM ELO
              <span className="w-2.5 h-2.5 rounded-full bg-[#020617] inline-block shadow-sm"></span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Faixa 2: Rotacionada para Cima (/) formando o X */}
      <div className="absolute top-28 sm:top-36 left-0 w-[120%] -left-[10%] overflow-hidden bg-[#0c1e3d] py-3.5 z-20 flex whitespace-nowrap shadow-2xl transform rotate-3 origin-center border-y border-blue-400/20">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="text-amber-400 font-black uppercase tracking-widest text-xs sm:text-sm flex items-center gap-12" style={{ fontFamily: "Lato, sans-serif" }}>
              VAGAS PRESENCIAIS LIMITADAS
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shadow-sm"></span>
              MATRÍCULAS 100% GRATUITAS
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shadow-sm"></span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Grid Principal do Conteúdo */}
      <motion.div 
        style={{ y: yText }}
        className="w-full max-w-7xl mx-auto px-6 pt-52 pb-24 relative z-10 mt-10 md:mt-2"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Coluna da Esquerda: Textos e Botão (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
            
            {/* Tag/Badge de Lançamento */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200" style={{ fontFamily: "Lato, sans-serif" }}>
                Cursinho Preparatório Presencial • 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              Seu futuro <br />
              <span className="relative inline-block mt-2">
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500"
                >
                  começa agora.
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: 300 }}
            >
              Transforme sua vida através da educação presencial. O Pré Enem Elo conecta jovens talentos à aprovação universitária com suporte emocional, excelência acadêmica e metodologia focada em resultado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full"
            >
              {/* Botão de Inscrição com Efeito Pulsante e Shimmer */}
              <div className="relative group w-full sm:w-auto">
                {/* Onda de Radar/Glow de Fundo */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 opacity-60 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse pointer-events-none" />
                <Button
                  size="lg"
                  className="relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-[#020617] hover:from-amber-400 hover:to-yellow-300 font-black text-lg rounded-xl transition-all duration-300 shadow-xl border border-amber-300/30 overflow-hidden flex items-center justify-center gap-3"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Quero me Inscrever 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </Button>
              </div>

              {/* Destaque do 100% Gratuito Premium (Sem emoji de taça) */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-600/30 p-[1px] shadow-2xl backdrop-blur-md border border-blue-400/20 self-start sm:self-auto flex-shrink-0">
                <div className="bg-[#0b1b3d]/90 px-6 py-3.5 rounded-2xl flex items-center gap-4">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-md animate-ping" />
                    <span className="text-amber-400 text-3xl font-black tracking-tight" style={{ fontFamily: "Merriweather, Georgia, serif" }}>100%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs uppercase tracking-widest font-black leading-none" style={{ fontFamily: "Lato, sans-serif" }}>CURSO PRESENCIAL</span>
                    <span className="text-amber-400 text-[10px] uppercase tracking-widest font-bold leading-none mt-1" style={{ fontFamily: "Lato, sans-serif" }}>TOTALMENTE GRATUITO</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coluna da Direita: Card Universitário 3D Interativo (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center w-full relative z-10"
          >
            {/* Card com efeito de rotação 3D no hover e borda brilhante */}
            <motion.div
              whileHover={{ 
                rotateX: -6, 
                rotateY: 10,
                scale: 1.03,
                z: 50
              }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="relative w-full max-w-[420px] h-[480px] rounded-[2.5rem] bg-gradient-to-br from-blue-500/10 to-amber-500/5 border border-white/10 p-5 shadow-2xl flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Glow circular de fundo do card que acompanha o mouse indiretamente */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600/20 to-amber-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Imagem Premium de Graduação da Unsplash com efeito Parallax 3D */}
              <div className="absolute inset-4 rounded-[2rem] overflow-hidden z-0">
                <motion.img 
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224b94?q=80&w=1000&auto=format&fit=crop" 
                  alt="Futuro dos Alunos - Aprovação" 
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                {/* Overlays de gradiente para legibilidade e cor */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/30 to-transparent z-10" />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10" />
              </div>

              {/* Elementos flutuantes dentro do card 3D */}
              {/* Badge Superior */}
              <div 
                className="relative z-10 self-start px-4 py-2 bg-[#020617]/80 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2 shadow-lg"
                style={{ transform: "translateZ(40px)" }}
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest" style={{ fontFamily: "Lato, sans-serif" }}>
                  O Seu Futuro Universitário
                </span>
              </div>

              {/* Conteúdo de Texto na Base */}
              <div 
                className="relative z-10 flex flex-col items-start gap-2"
                style={{ transform: "translateZ(50px)" }}
              >
                <div className="inline-block px-3 py-1 bg-amber-500 text-black text-[9px] font-black uppercase tracking-widest rounded-md" style={{ fontFamily: "Lato, sans-serif" }}>
                  META 2026
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight" style={{ fontFamily: "Merriweather, Georgia, serif" }}>
                  Conquiste a sua vaga federal.
                </h3>
                <p className="text-slate-300 text-xs font-light leading-relaxed max-w-[90%]" style={{ fontFamily: "Lato, sans-serif" }}>
                  Estude em um ambiente presencial de alta performance e prepare-se para transformar a sua realidade social.
                </p>
              </div>

              {/* Moldura iluminada */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-amber-500/20 transition-colors duration-500 pointer-events-none z-20" />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Degradê orgânico na base para transição extra suave à próxima seção */}
      <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
    </section>
  );
};
