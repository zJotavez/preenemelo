import { motion } from "motion/react";
import { BookOpen, Users2, Brain, Coffee } from "lucide-react";

export const Opportunities = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-[2.5rem] overflow-hidden relative border border-blue-50 shadow-xl"
          style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)" }}
        >
          {/* Elementos orgânicos de fundo */}
          <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-amber-400/10 blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center p-10 md:p-20">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span
                  className="text-xs font-bold text-blue-700 uppercase tracking-widest"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Apoio Presencial Integral
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]"
                style={{ fontFamily: "Merriweather, Georgia, serif" }}
              >
                Muito além da{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #1a56c4 0%, #3b82f6 100%)" }}
                >
                  sala de aula.
                </span>
              </h2>
              <p
                className="text-lg text-gray-600 mb-10 leading-relaxed"
                style={{ fontFamily: "Lato, sans-serif", fontWeight: 300 }}
              >
                Acreditamos que a aprovação exige mais do que apenas conteúdo. Nossa infraestrutura e equipe estão preparadas para oferecer um ecossistema completo de suporte pedagógico e emocional presencial.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4
                    className="text-4xl font-black text-blue-700 mb-2"
                    style={{ fontFamily: "Merriweather, Georgia, serif" }}
                  >
                    100%
                  </h4>
                  <p
                    className="text-sm text-gray-500 uppercase tracking-wide font-bold"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    Foco no Aluno
                  </p>
                </div>
                <div>
                  <h4
                    className="text-4xl font-black text-amber-500 mb-2"
                    style={{ fontFamily: "Merriweather, Georgia, serif" }}
                  >
                    +Acesso
                  </h4>
                  <p
                    className="text-sm text-gray-500 uppercase tracking-wide font-bold"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    Igualdade de Ensino
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              {/* Cards de Recursos Físicos e Metodológicos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Brain, label: "Apoio Emocional", value: "Psicologia", desc: "Acompanhamento profissional" },
                  { icon: BookOpen, label: "Material Físico", value: "Apostilas", desc: "Conteúdo 100% impresso e atualizado" },
                  { icon: Users2, label: "Atendimento", value: "Plantões", desc: "Tira-dúvidas presencial individual" },
                  { icon: Coffee, label: "Infraestrutura", value: "Conforto", desc: "Salas climatizadas e ambiente adequado" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-3xl p-6 shadow-md border border-white hover:border-blue-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div
                      className="text-xl font-black text-gray-900 mb-1"
                      style={{ fontFamily: "Merriweather, Georgia, serif" }}
                    >
                      {item.value}
                    </div>
                    <div
                      className="text-xs text-blue-600 uppercase tracking-widest font-bold mb-2"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-sm text-gray-500"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      {item.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
