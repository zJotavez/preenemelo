import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, GraduationCap, Briefcase, Star, Quote, ChevronDown } from "lucide-react";
import { teachers } from "../data/teachers";
import { Header } from "../components/Header";

export const TeacherPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const teacher = teachers.find((t) => t.id === id);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yImageValue = isMobile ? 0 : yImage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!teacher) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Merriweather, Georgia, serif" }}>
            Professor não encontrado
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:underline"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  // Cor de destaque light para texto
  const accentLight =
    teacher.accentColor === "#b45309"
      ? "#fbbf24"
      : teacher.accentColor === "#065f46"
      ? "#34d399"
      : "#c4b5fd";

  return (
    <div className="min-h-screen bg-gray-50" ref={containerRef}>
      {/* ─── HERO DA PÁGINA DO PROFESSOR ─── */}
      <section
        className="relative w-full min-h-[90vh] flex items-end overflow-hidden"
        style={{
          background: `linear-gradient(160deg, #050B14 0%, #111827 50%, ${teacher.accentColor} 100%)`,
        }}
      >
        {/* Foto Parallax de Fundo */}
        <motion.div 
          style={{ y: yImageValue }}
          className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity"
        >
          <img src={teacher.photo} alt={teacher.name} className="w-full h-[120%] object-cover object-top blur-sm scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-[#050B14]" />
        </motion.div>

        {/* Luzes de fundo */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full blur-[200px] opacity-30 pointer-events-none"
          style={{ background: teacher.accentColor }}
        />
        
        {/* Botão voltar */}
        <div className="absolute top-8 left-8 z-30">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-all hover:-translate-x-1"
            style={{ fontFamily: "Lato, sans-serif", fontSize: "0.875rem" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Início
          </button>
        </div>

        {/* Conteúdo do hero */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Texto à esquerda */}
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg"
              style={{ background: `${teacher.accentColor}80` }}
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span
                className="text-xs font-bold text-white uppercase tracking-widest"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Especialista em {teacher.subjectFull}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              Prof.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, #ffffff 0%, ${accentLight} 100%)` }}
              >
                {teacher.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg mb-10"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: 300 }}
            >
              {teacher.shortBio}
            </motion.p>

            {/* KPIs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {teacher.highlights.map((h, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors">
                  <div
                    className="text-3xl font-black mb-1"
                    style={{ fontFamily: "Merriweather, Georgia, serif", color: accentLight }}
                  >
                    {h.value}
                  </div>
                  <div
                    className="text-white/50 text-[10px] uppercase tracking-widest font-bold"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    {h.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Foto à direita - Flutuante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end hidden md:flex"
          >
            {/* Elemento de background orgânico */}
            <div
              className="absolute bottom-0 right-10 w-[400px] h-[500px] rounded-t-[200px] opacity-20"
              style={{ background: `linear-gradient(to top, ${teacher.accentColor}, transparent)` }}
            />
            <div className="relative w-full max-w-md h-[600px] -mb-16 rounded-t-full overflow-hidden shadow-2xl border-4 border-white/5 backdrop-blur-sm z-10">
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to top, #050B14 0%, transparent 40%)` }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* ─── CITAÇÃO ─── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: teacher.accentColor }}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Quote className="w-16 h-16 text-white/20 mx-auto mb-6 transform -scale-x-100" />
          <blockquote
            className="text-2xl md:text-4xl font-medium text-white leading-relaxed italic mb-8"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            "{teacher.quote}"
          </blockquote>
          <div className="inline-flex items-center gap-4 bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
              <img src={teacher.photo} alt={teacher.name} className="w-full h-full object-cover" />
            </div>
            <p
              className="text-white/90 text-sm font-bold uppercase tracking-widest"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              {teacher.name}
            </p>
          </div>
        </div>
      </section>

      {/* ─── BIOGRAFIA & FORMAÇÃO (Layout Lado a Lado) ─── */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24">
          
          {/* Biografia */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div
                className="w-1.5 h-12 rounded-full"
                style={{ background: teacher.accentColor }}
              />
              <h2
                className="text-4xl font-bold text-gray-900"
                style={{ fontFamily: "Merriweather, Georgia, serif" }}
              >
                A Trajetória
              </h2>
            </div>
            <div className="space-y-6">
              {teacher.fullBio.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-gray-600 text-lg leading-relaxed"
                  style={{ fontFamily: "Lato, sans-serif", fontWeight: 300 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Formação Acadêmica */}
          <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] opacity-10" style={{ background: teacher.accentColor }} />
            
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ background: teacher.accentColor }}>
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: "Merriweather, Georgia, serif" }}
              >
                Formação
              </h2>
            </div>

            <div className="space-y-6 relative">
              <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gray-200" />
              {teacher.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 relative"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-white border border-gray-200 text-gray-600 font-bold text-sm shadow-sm relative z-10"
                    style={{ fontFamily: "Merriweather, Georgia, serif" }}
                  >
                    {edu.year.slice(2)}
                  </div>
                  <div className="pt-2">
                    <h3
                      className="font-bold text-gray-900 text-base mb-1"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium" style={{ fontFamily: "Lato, sans-serif" }}>
                      {edu.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIÊNCIA ─── */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm mx-auto">
              <Briefcase className="w-5 h-5" style={{ color: teacher.accentColor }} />
              <span
                className="text-xs font-bold text-gray-800 uppercase tracking-widest"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Histórico Profissional
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-gray-900"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              Experiência Prática
            </h2>
          </div>

          <div className="relative">
            {/* Linha vertical centralizada */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full opacity-20"
              style={{ background: `linear-gradient(to bottom, ${teacher.accentColor}, transparent)` }}
            />
            
            <div className="space-y-12">
              {teacher.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Node central */}
                  <div
                    className="hidden md:flex relative z-10 w-14 h-14 rounded-2xl flex-shrink-0 items-center justify-center border-4 border-white shadow-xl"
                    style={{ background: idx === 0 ? teacher.accentColor : "#f8fafc", color: idx === 0 ? "#fff" : "#94a3b8" }}
                  >
                    <Star className="w-6 h-6" />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className={`w-full md:w-[calc(50%-3rem)] bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-50 to-transparent rounded-tr-3xl opacity-50" />
                    <div className="flex flex-col gap-4 mb-4 relative z-10">
                      <div>
                        <span
                          className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-widest"
                          style={{ fontFamily: "Lato, sans-serif", color: teacher.accentColor, backgroundColor: `${teacher.accentColor}15` }}
                        >
                          {exp.period}
                        </span>
                        <h3
                          className="font-bold text-gray-900 text-xl mb-1"
                          style={{ fontFamily: "Merriweather, Georgia, serif" }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="font-bold text-gray-400 text-sm"
                          style={{ fontFamily: "Lato, sans-serif" }}
                        >
                          {exp.institution}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-base leading-relaxed relative z-10" style={{ fontFamily: "Lato, sans-serif" }}>
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden"
        style={{ background: `linear-gradient(160deg, #050B14 0%, #111827 40%, ${teacher.accentColor} 100%)` }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Quer aprender com o Prof. <span style={{ color: accentLight }}>{teacher.name.split(" ")[0]}</span>?
          </motion.h2>
          <p
            className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed"
            style={{ fontFamily: "Lato, sans-serif", fontWeight: 300 }}
          >
            Faça parte do Pré Enem Elo e tenha acesso às aulas, materiais exclusivos e correções presenciais — 100% gratuito.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button
              className="px-10 py-5 bg-white font-black rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "Lato, sans-serif", color: teacher.accentColor, fontSize: "1.1rem" }}
              onClick={() => navigate("/")}
            >
              Inscrever-se Gratuitamente
            </button>
            <button
              className="px-8 py-5 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-colors duration-300"
              style={{ fontFamily: "Lato, sans-serif" }}
              onClick={() => navigate("/")}
            >
              Ver outros professores
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
