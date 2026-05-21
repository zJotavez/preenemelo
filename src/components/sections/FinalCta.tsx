import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { GraduationCap, Sparkles, Instagram, Phone, MapPin } from "lucide-react";

export const FinalCta = () => {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden bg-slate-950">
      {/* Background Image com overlay imponente de degradê e mix-blend */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
          alt="Estudantes vibrando com a aprovação" 
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-950/80 via-slate-950 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Card Interativo Flutuante de Alta Vibração Emocional */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
          className="w-full bg-slate-900/40 backdrop-blur-2xl border border-amber-500/20 rounded-[3.5rem] p-10 md:p-16 lg:p-20 text-center shadow-[0_0_100px_rgba(245,158,11,0.04)] hover:border-amber-500/40 transition-colors duration-700 group relative overflow-hidden"
        >
          {/* Esferas de Luz Fluidas no Fundo do Card (Alta Vibração Emocional) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Esfera Azul Profundo */}
            <motion.div
              animate={{
                x: [0, 60, -40, 0],
                y: [0, -40, 40, 0],
                scale: [1, 1.3, 0.8, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-[90px]"
            />
            {/* Esfera Âmbar Dourada */}
            <motion.div
              animate={{
                x: [0, -40, 60, 0],
                y: [0, 30, -50, 0],
                scale: [1, 0.8, 1.25, 1],
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[90px]"
            />
          </div>

          {/* Efeito Glow da Borda */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/10 via-yellow-400/5 to-indigo-500/10 rounded-[3.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000 pointer-events-none z-0" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-amber-600 border border-amber-400/50 rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-amber-500/20 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
            >
              <GraduationCap className="w-10 h-10 text-slate-950" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              O próximo aprovado<br />
              pode ser{" "}
              <span
                className="bg-clip-text text-transparent relative inline-block font-extrabold pb-2"
                style={{ backgroundImage: "linear-gradient(90deg, #fcd34d 0%, #f59e0b 100%)" }}
              >
                você.
                <Sparkles className="absolute -top-4 -right-10 w-8 h-8 text-amber-400 animate-pulse" />
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              As vagas para o nosso curso presencial em <span className="font-bold text-white">Campina Grande - PB</span> são extremamente limitadas. Reserve sua cadeira na sala de aula que vai desenhar sua aprovação com 100% de gratuidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xl rounded-full shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_45px_rgba(245,158,11,0.55)] border-transparent transition-all duration-300"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Garantir Minha Vaga no Projeto
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer minimalista, fino e com acabamento de luxo */}
      <footer className="relative z-10 w-full mt-32 border-t border-white/5 pt-20 pb-12 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Grade Principal do Rodapé */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
            {/* Coluna 1: Identidade */}
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-black text-white font-display tracking-tight flex items-center gap-2">
                PRÉ ENEM <span className="text-amber-400">ELO</span>
              </span>
              <p className="text-slate-400 text-sm leading-relaxed font-light" style={{ fontFamily: "Lato, sans-serif" }}>
                Transformando realidades através da educação presencial de alta performance. Cursinho 100% gratuito voltado à aprovação na universidade pública.
              </p>
            </div>

            {/* Coluna 2: Navegação */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider" style={{ fontFamily: "Lato, sans-serif" }}>
                Navegação
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-400" style={{ fontFamily: "Lato, sans-serif" }}>
                <li>
                  <a href="#about" className="hover:text-amber-400 transition-colors duration-200">Sobre o Projeto</a>
                </li>
                <li>
                  <a href="#benefits" className="hover:text-amber-400 transition-colors duration-200">Diferenciais</a>
                </li>
                <li>
                  <a href="#areas" className="hover:text-amber-400 transition-colors duration-200">Áreas do ENEM</a>
                </li>
                <li>
                  <a href="#teachers" className="hover:text-amber-400 transition-colors duration-200">Nossos Professores</a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Páginas */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider" style={{ fontFamily: "Lato, sans-serif" }}>
                Páginas
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-400" style={{ fontFamily: "Lato, sans-serif" }}>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors duration-200">Processo Seletivo 2026</a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors duration-200">Cronograma de Aulas</a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors duration-200">Regulamento Interno</a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors duration-200">Central de Dúvidas</a>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Contato & Atendimento */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider" style={{ fontFamily: "Lato, sans-serif" }}>
                Sede CG
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed font-light" style={{ fontFamily: "Lato, sans-serif" }}>
                Rua Paulo de Frontin, 217 - Centro<br />
                Campina Grande - PB
              </p>
              <div className="flex flex-col gap-1.5 text-xs text-amber-400" style={{ fontFamily: "Lato, sans-serif" }}>
                <span className="block font-bold">Atendimento Presencial:</span>
                <span className="block text-slate-400">Segunda a Sexta — 18h às 22h</span>
              </div>
            </div>
          </div>

          {/* Seção Central: Parceria ELO e suas Bandeiras */}
          <div className="border-t border-white/5 py-10 mb-10 text-center">
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-6" style={{ fontFamily: "Lato, sans-serif" }}>
              Parcerias Elo & Suas Bandeiras
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-40 hover:opacity-60 transition-opacity duration-500">
              {/* Bandeira 1 */}
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                <span className="w-6 h-6 rounded bg-amber-500 flex items-center justify-center text-slate-950 font-black text-xs">E</span>
                <span className="text-sm font-bold text-white tracking-wider">ELO SOCIAL</span>
              </div>
              {/* Bandeira 2 */}
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                <span className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white font-black text-xs">U</span>
                <span className="text-sm font-bold text-white tracking-wider">UNIÃO CG</span>
              </div>
              {/* Bandeira 3 */}
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                <span className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-xs">I</span>
                <span className="text-sm font-bold text-white tracking-wider">INSTITUTO ELO</span>
              </div>
              {/* Bandeira 4 */}
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                <span className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-white font-black text-xs">F</span>
                <span className="text-sm font-bold text-white tracking-wider">FUTURO CG</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-600 mt-4" style={{ fontFamily: "Lato, sans-serif" }}>
              Os links e conexões das bandeiras serão configurados posteriormente.
            </p>
          </div>

          {/* Linha Inferior com Assinatura e Redes Sociais */}
          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-slate-500 text-sm font-medium" style={{ fontFamily: "Lato, sans-serif" }}>
                © {new Date().getFullYear()} Pré Enem Elo. Todos os direitos reservados.
              </p>
              
              {/* Assinatura profissional JvSitePro direcionando para o instagram */}
              <motion.a 
                href="https://www.instagram.com/jvsitepro/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                className="text-xs text-slate-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-1 group mt-1"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                <span>Criado por</span>
                <span className="font-extrabold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-yellow-200 transition-all duration-300">
                  JvSitePro
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:animate-ping inline-block"></span>
              </motion.a>
            </div>
            
            <div className="flex items-center gap-8 text-xs font-extrabold uppercase tracking-widest text-slate-400" style={{ fontFamily: "Lato, sans-serif" }}>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-amber-500 transition-colors group"
              >
                <Instagram className="w-4 h-4 text-amber-500/80 group-hover:text-amber-500 transition-colors" />
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://wa.me/5583999999999" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-amber-500 transition-colors group"
              >
                <Phone className="w-4 h-4 text-amber-500/80 group-hover:text-amber-500 transition-colors" />
                <span>WhatsApp</span>
              </a>
              
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-amber-500 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-amber-500/80 group-hover:text-amber-500 transition-colors" />
                <span>Sede CG</span>
              </a>
            </div>
          </div>

        </div>
      </footer>
    </section>
  );
};
