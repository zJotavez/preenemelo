import { motion } from "motion/react";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

export const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop", // Sala de aula
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", // Recepção / Espaço de estudo
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop", // Biblioteca / Foco
  ];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 shadow-sm">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span
              className="text-xs font-bold text-blue-800 uppercase tracking-widest"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Nossa Sede
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Conheça nosso{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #1a56c4 0%, #3b82f6 100%)" }}
            >
              Espaço Presencial
            </span>
          </h2>
          <p
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Lato, sans-serif", fontWeight: 300 }}
          >
            Uma infraestrutura completa, pensada em cada detalhe para maximizar o seu conforto e concentração durante toda a jornada de aprovação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Coluna de Fotos (Carrossel ou Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full min-h-[400px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="sm:col-span-2 relative rounded-3xl overflow-hidden shadow-lg border-4 border-white h-64 sm:h-72 group"
            >
              <img src={images[0]} alt="Sala de Aula Principal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white h-48 sm:h-56 group"
            >
              <img src={images[1]} alt="Espaço de Convivência" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white h-48 sm:h-56 group"
            >
              <img src={images[2]} alt="Área de Estudos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
          </div>

          {/* Coluna do Mapa e Infos */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            {/* Mapa Interativo Placeholder */}
            <div className="relative w-full h-[300px] bg-gray-200 group cursor-pointer overflow-hidden">
              {/* Fake Map Image para visualização enquanto não temos o link real */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
                alt="Mapa do Local" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-3 shadow-xl animate-bounce">
                  <MapPin className="w-8 h-8" />
                </div>
                <span className="bg-white/90 backdrop-blur text-gray-900 font-bold px-4 py-2 rounded-lg text-sm shadow-sm">
                  Abrir no Google Maps
                </span>
              </div>
            </div>

            {/* Endereço e Infos */}
            <div className="p-8 md:p-10 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Merriweather, Georgia, serif" }}>
                  Pré Enem Elo
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "Lato, sans-serif" }}>
                  Rua [Nome da Rua], [Número] - [Bairro]<br />
                  [Cidade] - [Estado], [CEP]
                </p>
              </div>

              <div className="w-full h-[1px] bg-gray-100" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-gray-900 mb-0.5" style={{ fontFamily: "Lato, sans-serif" }}>Horário de Funcionamento</span>
                    <span className="block text-sm text-gray-500" style={{ fontFamily: "Lato, sans-serif" }}>Seg a Sex: 07h às 22h</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-gray-900 mb-0.5" style={{ fontFamily: "Lato, sans-serif" }}>Contato</span>
                    <span className="block text-sm text-gray-500" style={{ fontFamily: "Lato, sans-serif" }}>[Número do WhatsApp]</span>
                  </div>
                </div>
              </div>

              <button className="mt-4 w-full flex items-center justify-center gap-2 py-4 bg-gray-900 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors duration-300">
                <Navigation className="w-5 h-5" />
                Como Chegar
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
