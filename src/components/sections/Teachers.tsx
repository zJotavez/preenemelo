import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export const Teachers = () => {
  const teachers = [
    {
      name: "Mariana Silva",
      subject: "Redação",
      bio: "Especialista em nota 1000 e corretora oficial.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "João Pedro",
      subject: "Matemática",
      bio: "Mestre na TRI para alavancar a sua nota.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Carolina Mendes",
      subject: "Biologia",
      bio: "Descomplicando a Natureza com didática impecável.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "André Costa",
      subject: "História",
      bio: "A linha do tempo do mundo contada como um filme.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-brand-neon w-6 h-6" />
              <span className="text-brand-neon font-semibold tracking-wider uppercase text-sm">Corpo Docente</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Os arquitetos da sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-primary">vitória</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden glass-card p-2"
            >
              {/* Glow Frame on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              
              <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-4">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                
                {/* Subject Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 z-20">
                  <span className="text-xs font-semibold text-white tracking-widest uppercase">{teacher.subject}</span>
                </div>
              </div>

              <div className="px-4 pb-4">
                <h3 className="font-display text-xl font-bold text-white mb-1 relative z-10">{teacher.name}</h3>
                <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors relative z-10">{teacher.bio}</p>
              </div>

              {/* ELO Watermark */}
              <div className="absolute bottom-[-10px] right-2 font-display font-black text-7xl leading-none text-slate-100/[0.03] group-hover:text-slate-100/[0.05] transition-colors tracking-tighter select-none pointer-events-none z-0">
                ELO
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
