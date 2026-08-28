import React, { useState } from "react";
import NotificationBar from "./components/NotificationBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CritiqueSection from "./components/CritiqueSection";
import PainPoints from "./components/PainPoints";
import StorySection from "./components/StorySection";
import Curriculum from "./components/Curriculum";
import Bonuses from "./components/Bonuses";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CheckoutModal from "./components/CheckoutModal";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToPricing = (e) => {
    e?.preventDefault();
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <NotificationBar />
      <Navbar onGetGuide={scrollToPricing} />
      <main>
        <Hero onCTAClick={scrollToPricing} />
        <CritiqueSection />
        <PainPoints />
        <StorySection />
        <Curriculum />
        <Bonuses />
        <Testimonials />
        <Pricing onCheckoutClick={() => setIsCheckoutOpen(true)} />
        <FAQ />
      </main>
      <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
      <PrivacyPolicyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </div>
  );
}

export default App;
