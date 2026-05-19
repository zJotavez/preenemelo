import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { PlayCircle, FileText, PenTool, LayoutDashboard, BrainCircuit, HeartHandshake } from "lucide-react";

export const Benefits = () => {
  // Configuração do carrossel: loop infinito, arraste ativado e autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true })
  ]);

  const benefits = [
    {
      icon: PlayCircle,
      title: "Aulas Completas e Presenciais",
      desc: "Conteúdo focado no que realmente cai no ENEM, com interação olho no olho e didática de excelência.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: FileText,
      title: "Material Didático Exclusivo",
      desc: "Apostilas físicas completas e provas inéditas com modelo TRI, elaboradas por especialistas.",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: PenTool,
      title: "Clínica de Redação Presencial",
      desc: "Correção detalhada lado a lado com o professor para você alcançar a nota 1000 na redação.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: HeartHandshake,
      title: "Acompanhamento Humano",
      desc: "Mentoria individualizada para lidar com a ansiedade e construir rotinas de estudo sólidas no presencial.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: BrainCircuit,
      title: "A Melhor Equipe da Região",
      desc: "Professores experientes e comprometidos com a sua aprovação, sempre disponíveis para tirar dúvidas.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: LayoutDashboard,
      title: "Preparação Estratégica",
      desc: "Análise de desempenho constante para direcionar os estudos onde você mais precisa evoluir.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-blue-100/50 border border-blue-200">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span
                className="text-xs font-bold uppercase tracking-widest text-blue-800"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Diferenciais do Presencial
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              A estrutura da{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #1a56c4 0%, #3b82f6 100%)" }}
              >
                Aprovação
              </span>
            </h2>
            <p
              className="text-gray-600 text-lg max-w-xl"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: 300 }}
            >
              Interação real, foco total e ambiente projetado para maximizar o seu aprendizado.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex gap-2"
          >
            <div className="p-3 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest" style={{ fontFamily: "Lato, sans-serif" }}>Arraste para ver mais ➔</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carrossel Embla */}
      <div className="relative w-full max-w-[1400px] mx-auto cursor-grab active:cursor-grabbing">
        <div className="overflow-hidden px-4 md:px-12 py-4" ref={emblaRef}>
          <div className="flex gap-6 md:gap-8">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative flex-shrink-0 w-[85vw] sm:w-[350px] lg:w-[400px] h-[450px] rounded-3xl overflow-hidden group shadow-lg border-2 border-transparent hover:border-blue-400/50 transition-colors"
              >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 shadow-xl">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "Merriweather, Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-white/80 leading-relaxed text-sm" 
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
