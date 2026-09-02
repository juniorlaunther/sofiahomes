import { FadeIn } from "../components/AnimatedText";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ChevronDown, Asterisk, Sparkles, ArrowRight, Camera, Coffee, Users, Image, Video, LayoutDashboard, ChevronRight, HandHeart, Play, Pause } from "lucide-react";

function ExpandableTopic({ title, desc, delay, isLight = false, defaultOpen = false, icon: Icon }: { title: string, desc: string, delay: number, isLight?: boolean, defaultOpen?: boolean, icon?: any }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <FadeIn delay={delay}>
      <div 
        className={`flex flex-col h-full group cursor-pointer md:cursor-auto ${isLight ? 'border-brand-light/20' : 'border-brand-dark/10'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-8 h-[1px] mb-4 transition-all duration-300 group-hover:w-16 ${isLight ? 'bg-brand-light' : 'bg-brand-purple'}`}></div>
        <div className="flex justify-between items-start md:block">
          <div className="flex items-start gap-3 md:block">
            {Icon && <Icon className={`w-5 h-5 mb-1 md:mb-3 flex-shrink-0 mt-0.5 md:mt-0 ${isLight ? 'text-brand-light/70' : 'text-brand-purple/70'}`} />}
            <h4 className={`text-xl md:text-2xl font-serif mb-2 transition-colors duration-300 pr-4 md:pr-0 ${isLight ? 'text-brand-light group-hover:text-brand-light/70' : 'text-brand-dark group-hover:text-brand-purple'}`}>
              {title}
            </h4>
          </div>
          <ChevronDown className={`w-5 h-5 flex-shrink-0 md:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${isLight ? 'text-brand-light' : 'text-brand-purple'}`} />
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

export function Possibilities() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const territories = [
    {
      title: "LIFESTYLE",
      desc: "Rotina, manhãs, noites, refeições, trabalho, experiências e momentos cotidianos.",
      img: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "ENTRETENIMENTO",
      desc: "Humor, situações, narrativas, desafios e formatos com potencial de compartilhamento.",
      img: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "CASA & DESIGN",
      desc: "Arquitetura, decoração, ambientes, funcionalidades e detalhes do espaço.",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
    },
    {
      title: "ARTE & CRIATIVIDADE",
      desc: "Conteúdos integrando o universo do Ateliê do Ju ao apartamento.",
      img: "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "FAMÍLIA & CONEXÕES",
      desc: "Experiências afetivas, encontros, comemorações e momentos reais.",
      img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "CONTEÚDO DE MARCA",
      desc: "Produções criadas especificamente para apresentar e valorizar o imóvel e a experiência de estar nele.",
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    const scrollPosition = e.currentTarget.scrollLeft;
    const cardWidth = e.currentTarget.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < territories.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    const newIndex = Math.min(activeIndex + 1, territories.length - 1);
    const cardWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
    setActiveIndex(newIndex);
  };

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    const newIndex = Math.max(activeIndex - 1, 0);
    const cardWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
    setActiveIndex(newIndex);
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-brand-light px-6 border-t border-brand-dark/10">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif max-w-4xl mb-8 md:mb-16 leading-tight">
            Um espaço. <span className="italic text-brand-purple">Muitas possibilidades.</span>
          </h2>
        </FadeIn>

        <div className="md:hidden flex items-center justify-between mb-6 border-b border-brand-dark/10 pb-4">
          <div className="text-brand-purple text-[10px] sm:text-xs uppercase tracking-widest font-bold flex items-center gap-2">
            Deslize ou toque
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              className={`p-2 rounded-full flex items-center justify-center transition-colors ${activeIndex === 0 ? 'text-brand-dark/20' : 'text-brand-purple hover:bg-brand-purple/10'}`}
              aria-label="Anterior"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <span className="text-xs font-serif tracking-widest text-brand-dark/60 font-medium w-8 text-center">
              {activeIndex + 1}<span className="opacity-50">/{territories.length}</span>
            </span>
            <button 
              onClick={scrollNext}
              disabled={activeIndex === territories.length - 1}
              className={`p-2 rounded-full flex items-center justify-center transition-colors ${activeIndex === territories.length - 1 ? 'text-brand-dark/20' : 'text-brand-purple hover:bg-brand-purple/10'}`}
              aria-label="Próximo"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pb-8 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {territories.map((item, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-0 snap-center flex flex-col relative group bg-brand-purple md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none">
              <div className="aspect-[4/3] md:aspect-square relative mb-4 md:mb-6 overflow-hidden bg-brand-dark/5 rounded-xl md:rounded-none">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
                <div className="absolute top-4 right-4 text-brand-light/90 font-serif text-3xl md:text-4xl lg:text-5xl drop-shadow-md">0{i+1}</div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-brand-light md:text-brand-dark mb-2 md:mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-brand-light/80 md:text-brand-dark/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Organic() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const examples = [
    {
      title: "“Bora dar um susto na pobreza?”",
      desc: "Uma abertura divertida para conteúdos mostrando a chegada e experiências dentro de um apartamento de alto padrão.",
      icon: Sparkles
    },
    {
      title: "ROTINA NA COBERTURA",
      desc: "Manhã, café, trabalho, almoço, noite, organização, descanso e situações cotidianas.",
      icon: Coffee
    },
    {
      title: "ROTINA DE RICO",
      desc: "Conteúdo de entretenimento brincando com a experiência de viver temporariamente uma realidade diferente.",
      icon: Users
    },
    {
      title: "ATELIÊ TEMPORÁRIO",
      desc: "Desenhando e criando em diferentes ambientes do apartamento.",
      icon: LayoutDashboard
    },
    {
      title: "UM DIA TRABALHANDO DAQUI",
      desc: "Lifestyle integrado à rotina real de criação.",
      icon: LayoutDashboard
    },
    {
      title: "RECEBENDO QUEM EU AMO",
      desc: "Momentos em família, refeições e possíveis comemorações dentro do espaço.",
      icon: HandHeart
    },
    {
      title: "CONTEÚDOS ESPONTÂNEOS",
      desc: "Trends, situações, humor, pensamentos e ideias que surgirem naturalmente durante os dias.",
      icon: Video
    },
    {
      title: "FOTOGRAFIA E LIFESTYLE",
      desc: "Produção de fotos e vídeos que também poderão continuar sendo utilizados em conteúdos posteriores.",
      icon: Camera
    }
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    const scrollPosition = e.currentTarget.scrollLeft;
    const cardWidth = e.currentTarget.clientWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < examples.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    const newIndex = Math.min(activeIndex + 1, examples.length - 1);
    const cardWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
    setActiveIndex(newIndex);
  };

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    const newIndex = Math.max(activeIndex - 1, 0);
    const cardWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (!isAutoScrolling || typeof window === 'undefined' || window.innerWidth >= 768) return;
    
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      
      const newIndex = activeIndex >= examples.length - 1 ? 0 : activeIndex + 1;
      const cardWidth = scrollRef.current.clientWidth;
      
      scrollRef.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
      setActiveIndex(newIndex);
    }, 3500); // 3.5 seconds
    
    return () => clearInterval(interval);
  }, [activeIndex, isAutoScrolling, examples.length]);

  const handleInteraction = () => {
    setIsAutoScrolling(false);
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-brand-purple text-brand-light px-6 relative overflow-hidden">
      {/* Decorative large background text to remove the "empty" feel */}
      <div className="absolute top-10 -left-10 text-[15rem] md:text-[20rem] font-serif font-bold text-brand-light/[0.03] pointer-events-none whitespace-nowrap z-0 leading-none">
        ORGÂNICO
      </div>
      
      {/* Abstract geometric graphic element */}
      <div className="absolute right-0 top-1/3 w-64 h-64 border-[1px] border-brand-light/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute right-0 top-1/3 w-96 h-96 border-[1px] border-brand-light/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <Asterisk className="w-5 h-5 text-brand-light/50" />
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-brand-light font-bold">Conteúdo Orgânico</p>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight max-w-4xl">
            A presença do apartamento vai muito além dos conteúdos publicitários.
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 md:mb-16">
          <FadeIn delay={0.2} className="w-full md:w-1/2">
            <p className="text-base md:text-lg text-brand-light/80 font-light leading-relaxed">
              Durante a imersão, a produção da Casa do Ju continuará acontecendo normalmente. A diferença é que, naquele período, o apartamento passa a ser o cenário natural dessa rotina.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="w-full md:w-1/2">
            <p className="text-base md:text-lg text-brand-light/80 font-light leading-relaxed">
              Isso permite que o imóvel apareça de forma recorrente em conteúdos cujo assunto principal pode ser lifestyle, humor, arte, família ou cotidiano, criando exposição orgânica sem transformar cada aparição em uma publicidade tradicional.
            </p>
          </FadeIn>
        </div>

        <div className="md:hidden flex items-center justify-between mb-6 border-b border-brand-light/10 pb-4">
          <div className="text-brand-light text-[10px] sm:text-xs uppercase tracking-widest font-bold flex items-center gap-2">
            Deslize ou toque
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              className={`p-2 rounded-full flex items-center justify-center transition-colors ${activeIndex === 0 ? 'text-brand-light/20' : 'text-brand-light hover:bg-brand-light/10'}`}
              aria-label="Anterior"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs font-serif tracking-widest text-brand-light/60 font-medium w-3 text-center">
                {activeIndex + 1}
              </span>
              <button 
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                className="p-1.5 rounded-full hover:bg-brand-light/10 text-brand-light/60 hover:text-brand-light transition-colors"
                aria-label={isAutoScrolling ? "Pausar rolagem automática" : "Iniciar rolagem automática"}
              >
                {isAutoScrolling ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
              </button>
              <span className="text-xs font-serif tracking-widest text-brand-light/60 font-medium w-3 text-center opacity-50">
                {examples.length}
              </span>
            </div>
            <button 
              onClick={scrollNext}
              disabled={activeIndex === examples.length - 1}
              className={`p-2 rounded-full flex items-center justify-center transition-colors ${activeIndex === examples.length - 1 ? 'text-brand-light/20' : 'text-brand-light hover:bg-brand-light/10'}`}
              aria-label="Próximo"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onTouchStart={handleInteraction}
          onMouseDown={handleInteraction}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:border-t md:border-brand-light/20 md:pt-12 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {examples.map((ex, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-0 snap-center">
              <FadeIn delay={i * 0.1} className="h-full">
                <div className="h-full flex flex-col p-6 md:p-6 rounded-2xl bg-brand-dark/20 border border-brand-light/10 md:bg-transparent md:border-none md:p-0 md:rounded-none group relative overflow-hidden text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-light/10 flex items-center justify-center text-brand-light group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                      <ex.icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-serif text-brand-light group-hover:text-brand-light/70 transition-colors duration-300">
                      {ex.title}
                    </h4>
                  </div>
                  <p className="text-sm md:text-base text-brand-light/70 font-light leading-relaxed flex-grow">
                    {ex.desc}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

        <FadeIn>
          <div className="relative inline-flex p-[1px] w-full shadow-2xl rounded-lg overflow-hidden group">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_75%,#8A4FFF_100%)] origin-center"
            />
            <div className="relative z-10 bg-[#0d0914] p-8 md:p-12 text-center rounded-lg w-full h-full">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif leading-tight max-w-4xl mx-auto text-brand-light">
                Nem todo conteúdo precisa falar sobre o apartamento <span className="italic text-brand-purple">para fazer o público desejar estar nele.</span>
              </h3>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ExpandableNumberCard({ type, i, isOpen, onToggle }: { type: { title: string, desc: string }, i: number, isOpen: boolean, onToggle: () => void }) {
  return (
    <FadeIn delay={i * 0.2}>
      <div 
        className="flex flex-col h-full border-l border-brand-purple/30 pl-6 md:pl-8 relative group cursor-pointer"
        onClick={onToggle}
      >
        <span className="absolute -left-1.5 -top-1 text-brand-purple">
          <div className="w-3 h-3 rounded-full bg-brand-purple animate-pulse-glow" style={{ animationDelay: `${i * 0.5}s` }} />
        </span>
        <div className="text-brand-purple/60 text-5xl lg:text-6xl font-serif mb-4 mt-2 leading-none animate-pulse-glow transition-all duration-300" style={{ animationDelay: `${i * 0.5}s` }}>
          0{i+1}
        </div>
        <div className="flex justify-between items-start">
          <h3 className="text-xl md:text-2xl font-serif mb-3 text-brand-light group-hover:text-brand-purple transition-colors duration-300 pr-4">{type.title}</h3>
          <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 text-brand-light ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
          <p className="text-brand-light/70 text-base font-light leading-relaxed flex-grow">
            {type.desc}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export function Dedicated() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const types = [
    {
      title: "APRESENTAÇÃO E IMPACTO",
      desc: "Um conteúdo pensado para apresentar a experiência, despertar curiosidade e gerar alcance."
    },
    {
      title: "EXPERIÊNCIA E LIFESTYLE",
      desc: "O imóvel mostrado através da vivência real, fazendo o público imaginar como seria estar naquele espaço."
    },
    {
      title: "TOUR E PRODUTO",
      desc: "Um conteúdo mais direcionado aos ambientes, diferenciais, arquitetura e possibilidades de hospedagem."
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-brand-dark text-brand-light px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        {/* Subtle background pattern or noise could go here */}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-brand-purple font-bold mb-4">Conteúdos Dedicados</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight max-w-4xl">
            E quando o apartamento for o <span className="italic text-brand-purple">protagonista?</span>
          </h2>
          <p className="text-base md:text-lg text-brand-light/70 font-light leading-relaxed max-w-2xl mb-12 md:mb-16">
            Além da presença orgânica durante a imersão, alguns conteúdos serão desenvolvidos especificamente para apresentar a experiência, os diferenciais e o potencial do imóvel.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12 md:mb-16">
          {types.map((type, i) => (
            <div key={i}>
              <ExpandableNumberCard 
                type={type} 
                i={i} 
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </div>
          ))}
        </div>

        <FadeIn>
          <div className="border border-brand-light/10 p-6 md:p-8 text-center relative overflow-hidden bg-brand-light/5">
            <p className="relative z-10 text-base md:text-lg font-light text-brand-light/90">
              Formatos e Conceitos finais podem ser desenvolvidos em conjunto com o proprietário de acordo com os objetivos comerciais da propriedade.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
