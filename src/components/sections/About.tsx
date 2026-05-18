import { motion } from "motion/react";
import { ArrowUpRight, Target, Users, BookOpen } from "lucide-react";

export const About = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Muito mais que um <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-primary">
                cursinho padrão.
              </span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 font-sans leading-relaxed">
              O Pré Enem Elo nasceu com a missão de democratizar o acesso à educação de altíssimo nível. Nossa metodologia une tecnologia, apoio humano e uma estratégia afiada para garantir que cada aluno atinja seu potencial máximo e conquiste a aprovação.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { icon: Target, title: "Foco no Resultado", desc: "Preparação estratégica com simulados e metas." },
                { icon: Users, title: "Apoio Total", desc: "Mentoria e acompanhamento psicológico." },
                { icon: BookOpen, title: "Impacto Social", desc: "Transformando o futuro através do conhecimento." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-neon">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Holographic/Glass Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] rounded-3xl glass-card overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center" />
            
            {/* Tech Lines Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwIDB2NDBIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik00MCAwaC0xdjQwaDFWMHpNMCA0MHYtMWg0MFY0MHoiIGZpbGw9InJnYmEoNTYsIDE4OSwgMjQ4LCAwLjE1KSIvPjwvc3ZnPg==')] opacity-50" />

            {/* Glowing Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-neon/20 rounded-full blur-[80px]" />

            {/* ELO Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[12rem] md:text-[16rem] leading-none text-slate-100/[0.04] tracking-tighter select-none pointer-events-none z-0">
              ELO
            </div>

            <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm text-brand-neon font-semibold mb-1 uppercase tracking-wider">Metodologia</p>
                <p className="text-white font-medium">Ecossistema de Aprovação</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
