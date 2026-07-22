import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Pricing />
      <ContactForm />
    </main>
  );
}
