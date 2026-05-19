import { motion } from "motion/react";
import { ArrowUpRight, Target, Users, BookOpen, PlayCircle } from "lucide-react";

export const About = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-white">
      {/* Elementos orgânicos de fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-50/50 rounded-bl-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-[400px] bg-amber-50/30 rounded-tr-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col relative z-10"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 self-start">
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
              className="text-lg text-gray-600 mb-10 leading-relaxed"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: 300 }}
            >
              O Pré Enem Elo nasceu com a missão de democratizar o acesso à educação presencial de altíssimo nível. Nossa metodologia une apoio humano, estratégia pedagógica e acompanhamento individual para que cada aluno atinja seu potencial.
            </p>

            <div className="flex flex-col gap-8">
              {[
                { icon: Target, title: "Foco no Resultado", desc: "Preparação estratégica com simulados e metas claras." },
                { icon: Users, title: "Apoio Presencial", desc: "Mentoria de perto e acompanhamento psicológico." },
                { icon: BookOpen, title: "Impacto Social", desc: "Transformando trajetórias através do conhecimento." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:border-blue-100">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg text-gray-800 mb-1 transition-colors duration-300 group-hover:text-blue-700"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — imagem + Video placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-6 relative"
          >
            {/* Foto Orgânica */}
            <div className="relative h-[400px] w-full rounded-[2.5rem] rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-2xl border-4 border-white">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/10 to-transparent pointer-events-none" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-between">
                <div>
                  <p
                    className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    Metodologia Presencial
                  </p>
                  <p
                    className="text-gray-900 font-bold"
                    style={{ fontFamily: "Merriweather, Georgia, serif" }}
                  >
                    Ecossistema de Aprovação
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-md">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Placeholder de Vídeo YouTube */}
            <div className="relative h-[250px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer bg-gray-900">
              {/* Espaço para o iFrame no futuro. Por enquanto exibe uma capa com ícone de play. */}
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                alt="Thumbnail do Vídeo" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-8 h-8 text-white ml-1" />
                </div>
                <span 
                  className="text-white font-bold tracking-wide"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Conheça o Coordenador
                </span>
                <span 
                  className="text-white/70 text-xs mt-1"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  [Espaço para Vídeo do YouTube]
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
