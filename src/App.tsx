import { Hero, Concept, Why } from "./sections/Introduction";
import { Possibilities, Organic, Dedicated } from "./sections/Core";
import { CasaDoJu, Proposal, Continues, Ending } from "./sections/Commercial";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <main className="bg-brand-light text-brand-dark min-h-screen font-sans relative">
      <Hero />
      <Concept />
      <Why />
      <Possibilities />
      <Organic />
      <Dedicated />
      <CasaDoJu />
      <Proposal />
      <Continues />
      <Ending />
      
      <WhatsAppButton />
    </main>
  );
}
