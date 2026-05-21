import { motion } from "motion/react";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

export const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop", // Sala de aula focada
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", // Convivência presencial
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop", // Biblioteca de suporte
  ];

  const handleDirectionsClick = () => {
    window.open("https://www.google.com/maps/dir/?api=1&destination=R.+Paulo+de+Frontin,+217+-+Centro,+Campina+Grande+-+PB,+58407-368", "_blank");
  };

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 shadow-md">
            <MapPin className="w-4 h-4 text-blue-600 animate-pulse" />
            <span
              className="text-xs font-black text-blue-900 uppercase tracking-widest"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Nossa Sede
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Conheça nosso{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
            >
              Espaço Presencial
            </span>
          </h2>
          <p
            className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Uma infraestrutura presencial completa e moderna, planejada nos mínimos detalhes para maximizar o seu conforto, concentração e bem-estar durante toda a jornada letiva.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Coluna de Fotos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full min-h-[400px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="sm:col-span-2 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-64 sm:h-72 group cursor-pointer bg-white"
            >
              <img src={images[0]} alt="Sala de Aula Principal" className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
              <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-48 sm:h-56 group cursor-pointer bg-white"
            >
              <img src={images[1]} alt="Espaço de Convivência" className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-48 sm:h-56 group cursor-pointer bg-white"
            >
              <img src={images[2]} alt="Área de Estudos" className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
            </motion.div>
          </div>

          {/* Coluna do Mapa e Infos */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden"
          >
            {/* Mapa Interativo Google Maps Real */}
            <div className="relative w-full h-[320px] bg-slate-100 overflow-hidden group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2862804245645!2d-35.882900725350785!3d-7.208169992797203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a38f61537233bb%3A0xe54c13a29fa0bf54!2sR.%20Paulo%20de%20Frontin%2C%20217%20-%20Centro%2C%20Campina%20Grande%20-%20PB%2C%2058407-368!5e0!3m2!1spt-BR!2sbr!4v1716315800000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 opacity-95 group-hover:opacity-100 transition-all duration-700 pointer-events-auto"
                title="Sede Pré Enem Elo"
              />
              {/* Overlay suave nas bordas para blend estético */}
              <div className="absolute inset-0 border-b border-slate-100 pointer-events-none" />
            </div>

            {/* Endereço e Infos */}
            <div className="p-8 md:p-10 flex flex-col gap-6 flex-grow justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Merriweather, Georgia, serif" }}>
                  Pré Enem Elo – Sede Oficial
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light" style={{ fontFamily: "Lato, sans-serif" }}>
                  Rua Paulo de Frontin, 217 - Centro<br />
                  Campina Grande - PB, CEP: 58407-368
                </p>
              </div>

              <div className="w-full h-[1px] bg-slate-100" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 mb-0.5" style={{ fontFamily: "Lato, sans-serif" }}>Funcionamento</span>
                    <span className="block text-xs text-slate-400" style={{ fontFamily: "Lato, sans-serif" }}>Segunda a Sexta: 18h às 22h</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 mb-0.5" style={{ fontFamily: "Lato, sans-serif" }}>Matrículas & Dúvidas</span>
                    <span className="block text-xs text-slate-400" style={{ fontFamily: "Lato, sans-serif" }}>Atendimento presencial ativo</span>
                  </div>
                </div>
              </div>

              {/* Botão de Como Chegar Premium */}
              <button 
                onClick={handleDirectionsClick}
                className="mt-4 w-full flex items-center justify-center gap-2 py-4 bg-slate-900 hover:bg-blue-600 text-white text-sm font-black rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg cursor-pointer"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                <Navigation className="w-4 h-4 fill-white" />
                Como Chegar à Sede
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
