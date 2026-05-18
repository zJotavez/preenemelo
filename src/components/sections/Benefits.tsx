import { motion } from "motion/react";
import { PlayCircle, FileText, PenTool, LayoutDashboard, BrainCircuit, HeartHandshake } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: PlayCircle,
      title: "Aulas Completas",
      desc: "Conteúdo focado no que realmente cai no ENEM, com didática de excelência."
    },
    {
      icon: FileText,
      title: "Simulados e Materiais",
      desc: "Apostilas exclusivas e provas inéditas com modelo TRI."
    },
    {
      icon: PenTool,
      title: "Clínica de Redação",
      desc: "Correção detalhada e método para você alcançar a nota 1000."
    },
    {
      icon: HeartHandshake,
      title: "Acompanhamento Humano",
      desc: "Mentoria individual para lidar com a ansiedade e criar rotinas."
    },
    {
      icon: BrainCircuit,
      title: "Professores Especialistas",
      desc: "A melhor equipe docente da região focada na sua aprovação."
    },
    {
      icon: LayoutDashboard,
      title: "Preparação Estratégica",
      desc: "Análise de dados de performance para focar nos seus pontos fracos."
    }
  ];

  return (
    <section className="relative w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            A estrutura da <span className="text-brand-neon">Aprovação</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Tudo o que você precisa para dominar o ENEM, em um só lugar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative p-8 glass-card rounded-3xl hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* ELO Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-6xl md:text-8xl leading-none text-slate-100/[0.02] group-hover:text-slate-100/[0.04] transition-colors duration-500 tracking-tighter select-none pointer-events-none z-0">
                ELO
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-dark/50 border border-brand-primary/30 flex items-center justify-center mb-6 text-brand-neon group-hover:scale-110 group-hover:text-white transition-all duration-500 box-glow">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
