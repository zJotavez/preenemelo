import { motion } from "motion/react";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Lucas R.",
      course: "Medicina",
      university: "UFRJ",
      quote: "O Pré Enem Elo não me deu apenas matérias para estudar, me deu uma estratégia e confiança para o dia da prova. Sem o acompanhamento deles, minha aprovação continuaria sendo um sonho distante.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Sabrina T.",
      course: "Direito",
      university: "USP",
      quote: "A clínica de redação destruiu meus bloqueios. Pulei de 600 para 960 em menos de seis meses. A didática dos professores é surreal. Eles realmente se importam com cada evolução nossa.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Felipe M.",
      course: "Eng. de Software",
      university: "UNICAMP",
      quote: "A plataforma me permitiu estudar no meu ritmo, mas sempre com foco no que a TRI mais valorizava. Quando cheguei na prova de matemática, parecia que eu estava fazendo mais um simulado do Elo.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            Vozes da <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-primary">Aprovação</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Histórias reais de alunos que transformaram suas vidas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-neon/10" />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border border-white/20" />
                <div>
                  <h4 className="text-white font-bold font-display">{t.name}</h4>
                  <p className="text-brand-neon text-sm">{t.course} • {t.university}</p>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed italic relative z-10">
                "{t.quote}"
              </p>
              
              {/* ELO Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-6xl md:text-8xl leading-none text-slate-100/[0.02] tracking-tighter select-none pointer-events-none z-0">
                ELO
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
