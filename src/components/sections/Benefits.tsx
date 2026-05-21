import { useCallback } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { PlayCircle, FileText, PenTool, LayoutDashboard, BrainCircuit, HeartHandshake, ChevronLeft, ChevronRight } from "lucide-react";

export const Benefits = () => {
  // Configuração do carrossel: loop infinito, arraste ativado e autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const benefits = [
    {
      icon: PlayCircle,
      title: "Aulas Presenciais e Imersivas",
      desc: "Conteúdo presencial dinâmico, focado no ENEM, com interação direta dos professores em sala.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: FileText,
      title: "Material Físico Exclusivo",
      desc: "Apostilas impressas completas e listas de exercícios inéditas moldadas no padrão TRI.",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: PenTool,
      title: "Clínica de Redação Individual",
      desc: "Correção detalhada ao lado do professor para você atingir nota 1000 na Redação do ENEM.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: HeartHandshake,
      title: "Apoio Psicológico Ativo",
      desc: "Mentoria humana integral para combater a ansiedade e equilibrar sua rotina de estudos.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: BrainCircuit,
      title: "Corpo Docente de Elite",
      desc: "Professores especialistas e experientes com didática de alta performance para o vestibular.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: LayoutDashboard,
      title: "Mentoria de Desempenho",
      desc: "Acompanhamento estratégico constante de seus simulados para direcionar sua evolução.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-[#fafafa]">
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span
                className="text-xs font-black uppercase tracking-widest text-blue-900"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Diferenciais do Presencial
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              A estrutura da{" "}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
              >
                Aprovação
              </span>
            </h2>
            <p
              className="text-slate-500 text-lg max-w-xl font-light"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Interação humana, foco total e metodologia de ponta desenhada para transformar o seu resultado.
            </p>
          </motion.div>
          
          {/* Navegação por Setas Customizadas Premium */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Carrossel Embla */}
      <div className="relative w-full max-w-[1400px] mx-auto cursor-grab active:cursor-grabbing">
        <div className="overflow-hidden px-4 md:px-8 py-4" ref={emblaRef}>
          <div className="flex gap-6">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -15px rgba(26, 86, 196, 0.15)"
                }}
                className="relative flex-shrink-0 w-[290px] sm:w-[320px] h-[380px] rounded-[2rem] overflow-hidden group shadow-md border border-slate-200/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer bg-white"
              >
                {/* Background Image com zoom suave */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-400 group-hover:border-transparent group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <item.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300"
                    style={{ fontFamily: "Merriweather, Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-slate-300 leading-relaxed text-xs font-light group-hover:text-white transition-colors duration-300" 
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
