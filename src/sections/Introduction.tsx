import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FadeIn } from "../components/AnimatedText";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] w-full flex flex-col overflow-hidden bg-brand-dark text-brand-light">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
          alt="Apartment Interior" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-brand-dark"></div>
      </motion.div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 flex flex-col items-center text-center my-auto pt-20 pb-4">
        <FadeIn direction="none" delay={0.2}>
          <p className="text-brand-purple uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-[10px] md:text-xs mb-4 md:mb-6 flex items-center gap-2 md:gap-3 justify-center">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            Um projeto A Casa do Ju
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.9] mb-4 md:mb-8">
            IMERSÃO<br />
            <span className="italic font-light">DE CONTEÚDO</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} className="max-w-3xl">
          <p className="text-xl md:text-3xl lg:text-4xl font-serif italic mb-3 md:mb-6">
            Quando o espaço deixa de ser cenário e passa a fazer parte de uma história.
          </p>
          <p className="text-base md:text-lg text-brand-light/70 font-sans font-light leading-relaxed max-w-2xl mx-auto px-4 md:px-0">
            Uma proposta de criação intensiva que transforma a experiência de viver o espaço em conteúdos de lifestyle e entretenimento, construídos através de storytelling.
          </p>
        </FadeIn>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-1 md:gap-2 pb-6 md:pb-10 mt-auto"
      >
        <span className="text-xs uppercase tracking-widest text-brand-light/50">Descubra</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-brand-purple" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export function Concept() {
  return (
    <section className="pt-16 md:pt-24 lg:pt-32 pb-4 md:pb-8 px-6 bg-brand-light relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="w-full md:w-5/12 order-2 md:order-1 relative">
            <FadeIn direction="right">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                alt="Lifestyle moment" 
                className="w-full aspect-[4/5] object-cover"
              />
            </FadeIn>
            <motion.div 
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full border border-brand-purple/20 hidden md:flex items-center justify-center mix-blend-multiply"
            >
              <div className="w-32 h-32 rounded-full border border-brand-purple/40" />
            </motion.div>
          </div>
          
          <div className="w-full md:w-7/12 order-1 md:order-2">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
                Mais do que mostrar um espaço. <span className="italic text-brand-purple">Viver uma experiência</span> dentro dele.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-6 text-base md:text-lg text-brand-dark/80 font-light leading-relaxed">
                <p>
                  A Imersão de Conteúdo nasce da ideia de substituir uma ação publicitária pontual por uma presença contínua e contextualizada.
                </p>
                <p>
                  Durante a experiência, o imóvel passa a fazer parte da rotina, das histórias e dos conteúdos produzidos pela Casa do Ju.
                </p>
                <p>
                  O objetivo é criar diferentes pontos de contato entre o público e o espaço, mostrando seus ambientes não apenas através de um tour, mas sendo realmente utilizados, vividos e inseridos em situações capazes de despertar desejo, identificação e curiosidade.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-12 relative z-10 w-full">
          <FadeIn direction="up" delay={0.1}>
            <span className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark animate-pulse-text block leading-none transition-colors duration-500 cursor-default" style={{animationDelay: '0s'}}>VIVER</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <span className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark animate-pulse-text block leading-none transition-colors duration-500 cursor-default" style={{animationDelay: '1.3s'}}>CRIAR</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.5}>
            <span className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark animate-pulse-text block leading-none transition-colors duration-500 cursor-default" style={{animationDelay: '2.6s'}}>COMPARTILHAR</span>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="pt-8 md:pt-12 pb-10 md:pb-14 lg:pb-16 px-6 bg-brand-light relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
          alt="Texture" 
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif max-w-4xl mb-12 leading-tight">
            Uma boa história precisa de tempo para acontecer.
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-8 md:mb-10">
          <div className="w-full md:w-5/12">
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-3xl lg:text-4xl font-serif italic text-brand-purple mb-4">
                Diferentes dias criam diferentes histórias.
              </p>
              <p className="text-base md:text-lg text-brand-dark/80 font-light leading-relaxed mb-4">
                Manhãs, noites, rotina de trabalho, momentos de lazer, encontros, experiências, celebrações e situações espontâneas permitem que o mesmo espaço seja apresentado de formas completamente diferentes.
              </p>
              <p className="text-base md:text-lg text-brand-dark/80 font-light leading-relaxed">
                Ao invés de concentrar toda a comunicação em uma única gravação, a imersão permite que o apartamento apareça naturalmente em múltiplos contextos, formatos e narrativas.
              </p>
            </FadeIn>
          </div>
          
          <div className="w-full md:w-7/12 flex flex-col gap-4 md:pl-12 justify-center">
            {[
              "Novas perspectivas.",
              "Múltiplos contextos.",
              "Formatos dinâmicos.",
              "Uma narrativa unificada."
            ].map((text, i) => (
              <div key={i}>
                <FadeIn delay={0.3 + (i * 0.1)} direction="left">
                  <div className="border-b border-brand-dark/10 pb-4 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <h3 
                      className="text-xl md:text-3xl lg:text-4xl font-serif text-brand-dark animate-pulse-text md:group-hover:text-brand-purple transition-colors duration-500 flex items-center justify-between"
                      style={{animationDelay: `${i * 0.5}s`}}
                    >
                      <span>{text}</span>
                      <span className="text-brand-purple/40 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-pulse-glow" style={{animationDelay: `${i * 0.5 + 0.5}s`}} />
                      </span>
                    </h3>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>

        <FadeIn>
          <div className="relative pt-4 pb-6 md:pt-6 md:pb-8 flex items-center justify-center text-center">
            <div className="relative inline-flex p-[1px] w-full max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden group">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_75%,#8A4FFF_100%)] origin-center"
              />
              <div className="relative z-10 bg-[#0d0914] p-8 md:p-12 text-center rounded-lg w-full h-full">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-brand-light">
                  O apartamento deixa de ser apenas o assunto do conteúdo e passa a ser <span className="text-brand-purple italic">o lugar onde o conteúdo acontece.</span>
                </h2>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
