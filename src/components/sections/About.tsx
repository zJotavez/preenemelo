import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Target, Users, BookOpen, PlayCircle } from "lucide-react";

export const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollY } = useScroll();

  // Movimento de paralaxe oposto para dar um efeito de profundidade incrível à direita
  const yImage = useTransform(scrollY, [200, 1400], ["0px", "-50px"]);
  const yVideo = useTransform(scrollY, [200, 1400], ["0px", "50px"]);
  const yBgShape = useTransform(scrollY, [200, 1400], ["0px", "-100px"]);

  const yImageValue = isMobile ? "0px" : yImage;
  const yVideoValue = isMobile ? "0px" : yVideo;
  const yBgShapeValue = isMobile ? "0px" : yBgShape;

  return (
    <section className="relative w-full py-28 px-6 overflow-hidden bg-white">
      {/* Elementos orgânicos de fundo com paralaxe sutil */}
      <motion.div 
        style={{ y: yBgShapeValue }}
        className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-50/70 rounded-bl-full blur-3xl -z-10" 
      />
      <div className="absolute bottom-0 left-0 w-1/4 h-[400px] bg-amber-50/40 rounded-tr-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col relative z-10"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 self-start shadow-sm transition-all hover:scale-105 hover:bg-blue-100/50">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span
                className="text-xs font-bold uppercase tracking-widest text-blue-700"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Sobre o Projeto
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.2]"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              Muito mais que um{" "}
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #1a56c4 0%, #3b82f6 100%)" }}
                >
                  cursinho padrão.
                </span>
                {/* Linha ondulada decorativa embaixo */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-400 opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p
              className="text-lg text-gray-600 mb-10 leading-relaxed font-light"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              O Pré Enem Elo nasceu com a missão de democratizar o acesso à educação presencial de altíssimo nível. Nossa metodologia une apoio humano, estratégia pedagógica e acompanhamento individual para que cada aluno atinja seu potencial.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { 
                  icon: Target, 
                  title: "Foco no Resultado", 
                  desc: "Preparação focada e estratégica baseada nas estatísticas reais do ENEM, com simulados recorrentes e metas de notas calculadas para sua vaga." 
                },
                { 
                  icon: Users, 
                  title: "Apoio Presencial", 
                  desc: "Presença real e diária de professores qualificados, mentoria acadêmica lado a lado e acompanhamento pedagógico e emocional humano." 
                },
                { 
                  icon: BookOpen, 
                  title: "Impacto Profissional", 
                  desc: "Desenvolvimento de competências intelectuais e de escrita crítica que destravam o seu futuro universitário e profissional." 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    y: -6, 
                    x: 4,
                    scale: 1.02,
                    boxShadow: "0 15px 30px -10px rgba(26, 86, 196, 0.12)"
                  }}
                  className="flex items-start gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:-rotate-3 group-hover:shadow-md">
                    <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg text-slate-850 mb-1.5 transition-colors duration-300 group-hover:text-blue-750"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed group-hover:text-slate-650 transition-colors duration-300" style={{ fontFamily: "Lato, sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Imagem + Vídeo com Efeito Paralaxe Oposto */}
          <div className="flex flex-col gap-8 relative">
            
            {/* Foto Orgânica Real da Escola/Universidade */}
            <motion.div 
              style={{ y: yImageValue }}
              className="relative h-[400px] w-full rounded-[2.5rem] rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-2xl border-4 border-white z-10 cursor-pointer group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/10 to-transparent pointer-events-none group-hover:opacity-90 transition-opacity" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-between transition-transform duration-300 group-hover:scale-[1.02]">
                <div>
                  <p
                    className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    Estudo Presencial e Humano
                  </p>
                  <p
                    className="text-gray-900 font-bold"
                    style={{ fontFamily: "Merriweather, Georgia, serif" }}
                  >
                    Ecossistema Prático de Aprovação
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Vídeo do YouTube do Coordenador com reprodução sob demanda */}
            <motion.div 
              style={{ y: yVideoValue }}
              className="relative h-[250px] w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-950 z-20"
            >
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  src="https://www.youtube.com/embed/vhiacyAUPmw?autoplay=1&rel=0&modestbranding=1"
                  title="Conheça o Coordenador - Pré ENEM Elo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 w-full h-full cursor-pointer group"
                >
                  <img 
                    src="https://img.youtube.com/vi/vhiacyAUPmw/maxresdefault.jpg" 
                    alt="Capa do Vídeo do Coordenador" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                    onError={(e) => {
                      // Fallback caso maxresdefault não esteja disponível
                      (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/vhiacyAUPmw/hqdefault.jpg";
                    }}
                  />
                  {/* Gradiente sutil escuro para legibilidade do texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-955 via-gray-950/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 mb-3 group-hover:scale-110 group-hover:bg-blue-600/90 group-hover:border-transparent transition-all duration-500 shadow-2xl">
                      <PlayCircle className="w-8 h-8 text-white ml-0.5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span 
                      className="text-white font-bold tracking-wide text-lg group-hover:text-amber-300 transition-colors duration-300"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      Conheça o Coordenador
                    </span>
                    <span 
                      className="text-white/80 text-xs mt-1 font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      Clique para assistir ao vídeo
                    </span>
                  </div>
                </div>
              )}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
