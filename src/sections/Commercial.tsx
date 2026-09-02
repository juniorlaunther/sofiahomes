import { FadeIn } from "../components/AnimatedText";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Asterisk, Users, Sparkles, Video, Camera, HandHeart, Image, Instagram, Youtube, Facebook } from "lucide-react";

function TiktokIcon(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function ExpandableTopic({ title, desc, delay, isLight = false }: { title: string, desc: string, delay: number, isLight?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <FadeIn delay={delay}>
      <div 
        className={`flex flex-col h-full group cursor-pointer md:cursor-auto ${isLight ? 'border-brand-light/20' : 'border-brand-dark/10'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-8 h-[1px] mb-4 transition-all duration-300 group-hover:w-16 ${isLight ? 'bg-brand-light' : 'bg-brand-purple'}`}></div>
        <div className="flex justify-between items-start md:block">
          <h4 className={`text-lg md:text-xl font-serif mb-2 transition-colors duration-300 pr-4 md:pr-0 ${isLight ? 'text-brand-light group-hover:text-brand-light/70' : 'text-brand-dark group-hover:text-brand-purple'}`}>
            {title}
          </h4>
          <ChevronDown className={`w-5 h-5 md:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${isLight ? 'text-brand-light' : 'text-brand-purple'}`} />
        </div>
        <div className={`overflow-hidden transition-all duration-500 md:max-h-[500px] md:opacity-100 ${isOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0 md:mt-2'}`}>
          <p className={`text-sm font-light leading-relaxed ${isLight ? 'text-brand-light/80' : 'text-brand-dark/70'}`}>
            {desc}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export function CasaDoJu() {
  const stats = [
    { value: "+170mil", label: "seguidores", icon: Instagram },
    { value: "+23mil", label: "inscritos", icon: Youtube },
    { value: "+70mil", label: "seguidores", icon: TiktokIcon },
    { value: "+106mil", label: "seguidores", icon: Facebook },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-brand-light px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] border border-brand-purple/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 text-center lg:text-left uppercase tracking-widest">A CASA DO JU</h2>
              
              {/* Mobile Image - Shown after title on mobile, hidden on desktop */}
              <div className="w-full relative mb-8 lg:hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" 
                  alt="A Casa do Ju" 
                  className="w-full aspect-video object-cover grayscale transition-all duration-700"
                />
              </div>

              <div className="space-y-4 text-base md:text-lg text-brand-dark/80 font-light leading-relaxed text-center lg:text-left">
                <p>
                  A Casa do Ju nasceu dentro do universo de casa, transformação, decoração, criatividade e vida real.
                </p>
                <p>
                  Hoje, essa narrativa se expande naturalmente para lifestyle, experiências, arte, entretenimento e cotidiano, mantendo os espaços e a forma de viver como elementos importantes das histórias.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-8 md:mt-10 pt-8 border-t border-brand-dark/10 justify-items-center lg:justify-items-start">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="w-full flex justify-center lg:justify-start">
                    <FadeIn delay={i * 0.1} className="w-full">
                      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-brand-purple mb-1 md:mb-2 w-full">
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <span className="text-xl md:text-3xl font-serif">{stat.value}</span>
                        </div>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-dark/60">{stat.label}</span>
                      </div>
                    </FadeIn>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Desktop Image - Hidden on mobile */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 hidden lg:block">
            <FadeIn direction="left">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" 
                alt="A Casa do Ju" 
                className="w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] object-cover grayscale md:hover:grayscale-0 transition-all duration-700"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Proposal() {
  const scope = [
    {
      title: "PERÍODO DE IMERSÃO",
      desc: "7 dias consecutivos.",
      icon: Asterisk
    },
    {
      title: "PRESENÇA NO IMÓVEL",
      desc: "Vivência integral durante o período para produção de conteúdos em diferentes dias, horários, ambientes e situações.",
      icon: Users
    },
    {
      title: "PRODUÇÃO ORGÂNICA",
      desc: "Produção intensiva de conteúdos da Casa do Ju utilizando o apartamento como cenário e parte da narrativa. A produção orgânica não ficará limitada a uma quantidade específica de publicações, já que a proposta é justamente permitir criação espontânea e intensiva ao longo da experiência.",
      icon: Sparkles
    },
    {
      title: "CONTEÚDOS DEDICADOS",
      desc: "Até 3 conteúdos desenvolvidos especificamente com foco no apartamento, na propriedade ou na experiência.",
      icon: Video
    },
    {
      title: "STORIES",
      desc: "Presença recorrente durante a imersão, acompanhando diferentes momentos da experiência.",
      icon: Camera
    },
    {
      title: "COLLABS",
      desc: "Possibilidade de publicação dos conteúdos dedicados em colaboração entre A Casa do Ju e o perfil indicado pelo proprietário.",
      icon: HandHeart
    },
    {
      title: "FOTOGRAFIA",
      desc: "Produção de registros de lifestyle e conteúdo editorial dentro do espaço.",
      icon: Image
    },
    {
      title: "MARCAÇÕES E IDENTIFICAÇÃO",
      desc: "Identificação do apartamento e direcionamentos relacionados à reserva nos conteúdos comerciais previamente acordados.",
      icon: ArrowUpRight
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-brand-dark text-brand-light px-6 relative overflow-hidden">
      {/* Decorative rich background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-dark via-[#1a1525] to-brand-purple/20 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20 relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-brand-purple/30 rounded-full bg-brand-purple/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-brand-purple" />
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-brand-purple">Proposta Comercial</span>
              <Sparkles className="w-4 h-4 text-brand-purple" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              Uma primeira <span className="italic text-brand-purple drop-shadow-md">Imersão de Conteúdo</span> <br className="hidden md:block"/>dentro da cobertura.
            </h2>
            <p className="text-base md:text-lg text-brand-light/80 font-light leading-relaxed max-w-2xl mx-auto">
              Para explorar todo o potencial da experiência e permitir que diferentes histórias aconteçam naturalmente dentro do espaço, a proposta é realizar uma imersão criativa integral no apartamento.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
          {scope.map((item, i) => {
            const isHighlighted = item.title === "PERÍODO DE IMERSÃO";
            
            return (
              <div key={i}>
                <FadeIn delay={i * 0.1} className="h-full">
                  {isHighlighted ? (
                    <div className="relative inline-flex p-[1px] w-full h-full rounded-2xl overflow-hidden group">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_75%,#8A4FFF_100%)] origin-center"
                      />
                      <div className="h-full flex flex-col p-6 md:p-8 rounded-2xl bg-[#0d0914] relative z-10 text-left w-full">
                        <div className="w-12 h-12 rounded-full bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center mb-6 text-brand-purple group-hover:scale-110 transition-transform duration-500 relative z-10">
                          <item.icon className="w-5 h-5" />
                        </div>
                        
                        <h4 className="text-xl md:text-2xl font-serif mb-3 text-brand-light group-hover:text-brand-purple transition-colors duration-300 relative z-10">
                          {item.title}
                        </h4>
                        <p className="text-sm md:text-base text-brand-light/70 font-light leading-relaxed flex-grow relative z-10">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col p-6 md:p-8 rounded-2xl bg-gradient-to-br from-brand-light/5 to-transparent border border-brand-light/10 hover:border-brand-purple/40 transition-colors duration-500 group relative overflow-hidden text-left">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-purple/20 transition-all duration-500"></div>
                      
                      <div className="w-12 h-12 rounded-full bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center mb-6 text-brand-purple group-hover:scale-110 transition-transform duration-500 relative z-10">
                        <item.icon className="w-5 h-5" />
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-serif mb-3 text-brand-light group-hover:text-brand-purple transition-colors duration-300 relative z-10">
                        {item.title}
                      </h4>
                      <p className="text-sm md:text-base text-brand-light/70 font-light leading-relaxed flex-grow relative z-10">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Continues() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-brand-dark text-brand-light flex items-center justify-center px-6">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-dark via-[#15101f] to-brand-dark pointer-events-none"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-5 leading-tight">
            A experiência termina.<br />
            <span className="italic text-brand-purple">O conteúdo continua.</span>
          </h2>
          <p className="text-sm md:text-base font-light text-brand-light/80 mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
            Nem todo material produzido durante a imersão precisa ser publicado imediatamente. Fotos, vídeos, momentos e diferentes narrativas podem continuar aparecendo nos perfis após o encerramento da experiência, prolongando a presença do apartamento dentro do universo da Casa do Ju.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="relative inline-flex p-[1px] w-full sm:w-auto mx-auto shadow-2xl rounded-sm overflow-hidden group">
            {/* Animated rotating background beam */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_75%,#8A4FFF_100%)] origin-center"
            />
            
            {/* Inner Content */}
            <div className="relative flex flex-col items-center justify-center p-6 md:p-8 lg:p-10 bg-[#0d0914] w-full h-full rounded-sm z-10">
              <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-serif text-brand-light/90 w-full text-center mb-1 md:mb-2">7 dias de experiência podem gerar</span>
              <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-serif text-brand-purple mt-1 whitespace-nowrap leading-none px-2 md:px-0 drop-shadow-md">SEMANAS DE CONTEÚDO.</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function Ending() {
  return (
    <section id="contato-final" className="py-16 md:py-24 lg:py-32 px-6 bg-brand-purple text-brand-light flex flex-col items-center justify-center text-center relative overflow-hidden">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute -top-[50vw] -left-[50vw] w-[150vw] h-[150vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none opacity-50"
      />
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 leading-tight">
            Vamos transformar esse espaço em <span className="italic font-light">uma história?</span>
          </h2>
          <p className="text-base md:text-lg font-light text-white/90 max-w-2xl mx-auto leading-relaxed mb-12 md:mb-16">
            Essa proposta foi pensada especialmente para transformar a experiência de viver a cobertura em uma sequência de conteúdos capaz de unir arquitetura, lifestyle, entretenimento, criatividade e histórias reais.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-lg md:text-xl lg:text-2xl font-serif italic mb-12 md:mb-16 border-b border-white/20 pb-4 md:pb-6 px-4 md:px-12 inline-block">
            A Casa do Ju &times; [Nome do Proprietário]
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-4 bg-brand-dark text-brand-light px-8 md:px-12 lg:px-16 py-4 md:py-5 text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:bg-black transition-colors rounded-none w-full sm:w-auto animate-continuous-scale"
          >
            Vamos Conversar
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowUpRight className="w-5 h-5 text-brand-purple group-hover:text-white transition-colors" />
            </motion.span>
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
}
