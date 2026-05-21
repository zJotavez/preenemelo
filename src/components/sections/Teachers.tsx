import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { teachers } from "../../data/teachers";

export const Teachers = () => {
  const navigate = useNavigate();

  // Configuração do carrossel Embla para loop infinito
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  ]);

  // Duplicando a lista para garantir que o carrossel infinito pareça cheio mesmo com poucos professores
  const carouselTeachers = [...teachers, ...teachers, ...teachers];

  return (
    <section className="relative w-full py-28 px-6 overflow-hidden bg-[#050B14]">
      {/* Luzes de fundo de estúdio imponentes */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[500px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span
                className="text-xs font-bold text-gray-200 uppercase tracking-widest"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Corpo Docente de Elite
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              Os arquitetos da sua{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #fcd34d 0%, #fbbf24 100%)" }}
              >
                aprovação.
              </span>
            </h2>

            <p
              className="text-gray-400 text-lg max-w-2xl leading-relaxed"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: 300 }}
            >
              Conheça os especialistas por trás da nossa metodologia. Profissionais apaixonados por educação e focados no seu resultado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block pb-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "Lato, sans-serif" }}>Arraste para explorar</span>
              <div className="h-[1px] w-12 bg-gray-600"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carrossel Infinito de tela infinita, transbordando de ponta a ponta na janela física */}
      <div className="relative w-full cursor-grab active:cursor-grabbing z-20 overflow-hidden">
        <div className="overflow-hidden w-full px-4 md:px-12 lg:px-24 py-4" ref={emblaRef}>
          <div className="flex gap-6 md:gap-8">
            {carouselTeachers.map((teacher, idx) => {
              // Paletas adaptadas para combinar com as cores de destaque dos professores
              const accentBase = teacher.accentColor === "#b45309" ? "amber" : teacher.accentColor === "#065f46" ? "emerald" : "indigo";
              
              return (
                <motion.div
                  key={`${teacher.id}-${idx}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (idx % 3) * 0.1, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.015,
                    boxShadow: `0 25px 50px -12px ${teacher.accentColor}33`,
                  }}
                  onClick={() => navigate(`/professor/${teacher.id}`)}
                  className="relative flex-shrink-0 w-[85vw] sm:w-[320px] lg:w-[400px] h-[550px] rounded-3xl overflow-hidden group shadow-2xl transition-all duration-300 border border-white/5 hover:border-[var(--teacher-accent)] cursor-pointer"
                  style={{ 
                    // @ts-ignore
                    "--teacher-accent": teacher.accentColor 
                  }}
                >
                  {/* Foto de Fundo com zoom e rotação suave */}
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-1"
                  />
                  
                  {/* Sobreposições escuras/coloridas baseadas na foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent opacity-90 group-hover:opacity-85 transition-opacity duration-300" />
                  <div 
                    className="absolute inset-0 opacity-30 mix-blend-color group-hover:opacity-40 transition-opacity duration-300" 
                    style={{ backgroundColor: teacher.accentColor }}
                  />

                  {/* Borda interna brilhante (Glow Ring) no Hover */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-3xl pointer-events-none transition-all duration-300 z-20" />

                  {/* Detalhes Superiores */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                    <div
                      className="px-3 py-1.5 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest shadow-lg transition-transform duration-300 group-hover:scale-105"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      {teacher.subject}
                    </div>
                  </div>

                  {/* Informações do Professor */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <h3
                      className="text-3xl font-bold text-white mb-2 leading-tight group-hover:text-amber-300 transition-colors duration-300"
                      style={{ fontFamily: "Merriweather, Georgia, serif" }}
                    >
                      {teacher.name}
                    </h3>
                    <p
                      className="text-gray-300 text-sm font-bold mb-4 uppercase tracking-wider"
                      style={{ fontFamily: "Lato, sans-serif", color: teacher.accentColor === "#b45309" ? "#fbbf24" : teacher.accentColor === "#065f46" ? "#34d399" : "#c4b5fd" }}
                    >
                      {teacher.subjectFull}
                    </p>
                    <p
                      className="text-gray-400 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      {teacher.shortBio}
                    </p>

                    <div
                      className="flex items-center gap-3 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 w-fit px-5 py-2.5 rounded-full transition-all duration-300 backdrop-blur-md group-hover:bg-[var(--teacher-accent)] group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      <span>Perfil Completo</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
