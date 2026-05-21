import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowLeft, Clock, Calendar, User, Newspaper, GraduationCap, ChevronDown } from "lucide-react";
import { news } from "../data/news";

export const NewsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = news.find((n) => n.id === id);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Merriweather, Georgia, serif" }}>
            Matéria não encontrada
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-amber-500/20">
      {/* ─── HERO DA MATÉRIA ─── */}
      <section
        className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-end overflow-hidden"
        style={{
          background: `linear-gradient(160deg, #050B14 0%, #0f172a 60%, #1e293b 100%)`,
        }}
      >
        {/* Foto de Fundo com Opacidade */}
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src={article.photo} 
            alt={article.title} 
            className="w-full h-full object-cover object-center blur-[2px] scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950" />
        </div>

        {/* Botão voltar */}
        <div className="absolute top-8 left-6 sm:left-8 z-30">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-all hover:-translate-x-1 cursor-pointer shadow-lg"
            style={{ fontFamily: "Lato, sans-serif", fontSize: "0.875rem" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Início
          </button>
        </div>

        {/* Conteúdo do hero da notícia */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-16 pt-32 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md"
          >
            <Newspaper className="w-3.5 h-3.5 text-amber-400" />
            <span
              className="text-[10px] font-black text-amber-400 uppercase tracking-widest"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              {article.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            {article.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8 font-light"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            {article.subtitle}
          </motion.p>

          {/* Metadados */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-slate-400 text-xs sm:text-sm border-t border-white/10 w-full pt-6"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>{article.readTime}</span>
            </div>
          </motion.div>
        </div>

        {/* Indicador de rolagem */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 hidden sm:block animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* ─── CORPO DO ARTIGO & AUTOR ─── */}
      <section className="py-20 px-6 bg-white relative z-10 shadow-2xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.8fr_0.7fr] gap-16 items-start">
          
          {/* Texto Completo do Artigo */}
          <article className="prose prose-slate lg:prose-lg max-w-none text-slate-700">
            <div className="space-y-8">
              {article.content.map((paragraph, idx) => {
                // Letra capitular no primeiro parágrafo
                if (idx === 0) {
                  return (
                    <p
                      key={idx}
                      className="text-lg sm:text-xl leading-relaxed font-light first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:text-amber-600 first-letter:font-serif"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      {paragraph}
                    </p>
                  );
                }

                // Linha de citação ou lista se começar com número
                if (/^\d\./.test(paragraph)) {
                  return (
                    <div 
                      key={idx}
                      className="bg-slate-50 border-l-4 border-amber-500 rounded-r-xl p-5 my-6 shadow-sm"
                    >
                      <p className="font-bold text-slate-800 text-base sm:text-lg leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
                        {paragraph}
                      </p>
                    </div>
                  );
                }

                return (
                  <p
                    key={idx}
                    className="text-base sm:text-lg leading-relaxed font-light"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>

          {/* Card Lateral do Autor (Professor) */}
          <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200/60 shadow-xl shadow-slate-100/50 sticky top-24">
            <h3 
              className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Sobre o Autor
            </h3>
            
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-md scale-110" />
                <img
                  src={article.author.photo}
                  alt={article.author.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-amber-500 relative z-10 shadow-lg"
                />
              </div>

              <h4
                className="text-xl font-bold text-slate-900 mb-1"
                style={{ fontFamily: "Merriweather, Georgia, serif" }}
              >
                Profª. {article.author.name}
              </h4>
              
              <span
                className="text-xs font-extrabold text-amber-600 uppercase tracking-wider mb-4"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                {article.author.role}
              </span>

              <p 
                className="text-slate-500 text-sm leading-relaxed mb-6 font-light"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Especialista pedagógica integrando o corpo docente de elite do Pré ENEM Elo, focada no sucesso e desenvolvimento crítico do aluno.
              </p>

              <button
                onClick={() => navigate(`/professor/${article.author.teacherId}`)}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors duration-300 text-xs uppercase tracking-widest shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                <User className="w-4 h-4" />
                Ver Perfil Completo
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─── CTA MATRÍCULA FINAL ─── */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden bg-slate-950 border-t border-slate-900"
      >
        {/* Background Universitário Decorativo */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] opacity-5 mix-blend-overlay object-cover" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 mx-auto text-amber-500 shadow-xl">
            <GraduationCap className="w-6 h-6 animate-pulse" />
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Sua vaga na universidade federal está te esperando
          </h2>
          <p
            className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed font-light"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Inscreva-se hoje no Pré ENEM Elo de Campina Grande (PB). Estude de graça com os autores dessas matérias e transforme sua realidade!
          </p>

          <button
            className="px-10 py-5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black rounded-xl shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer text-sm sm:text-base uppercase tracking-widest border border-amber-300/30"
            style={{ fontFamily: "Lato, sans-serif" }}
            onClick={() => navigate("/")}
          >
            Inscrever-se Gratuitamente
          </button>
        </div>
      </section>
    </div>
  );
};
