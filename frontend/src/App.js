import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { usePageView, useScrollDepth } from "./lib/track";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Audience } from "./components/Audience";
import { Benefits } from "./components/Benefits";
import { Authority } from "./components/Authority";
import { Facility } from "./components/Facility";
import { Modalities } from "./components/Modalities";
import { Team } from "./components/Team";
import { SocialProof } from "./components/SocialProof";
import { HowItWorks } from "./components/HowItWorks";
import { Faq } from "./components/Faq";
import { LocationSection } from "./components/LocationSection";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

function App() {
  usePageView();
  useScrollDepth();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="App bg-ink" data-testid="landing-page">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Audience />
        <Benefits />
        <Authority />
        <Facility />
        <Modalities />
        <Team />
        <SocialProof />
        <HowItWorks />
        <Faq />
        <LocationSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
