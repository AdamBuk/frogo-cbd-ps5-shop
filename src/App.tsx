import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CategoriesSection } from './components/CategoriesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AgeVerificationModal } from './components/AgeVerificationModal';
import { PS5BookingModal } from './components/PS5BookingModal';

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-red-600 selection:text-white flex flex-col antialiased">
      {/* 18+ Legal Verification Gate */}
      <AgeVerificationModal />

      {/* Interactive PS5 Chill Zone Booking Modal */}
      <PS5BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
      />

      {/* Main Streetwear/Gaming Boutique Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Headline, Subtitle, CTAs: Produkty & Rezervovat PS5 Room) */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. O nás / PS5 Chill Zone (Private Gaming & CBD Lounge) */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 3. Kategorie (Menu: CBD Květy, Vapes, Joints, PS5 Chill Zone) */}
        <CategoriesSection onOpenBooking={handleOpenBooking} />

        {/* Frequently Asked Questions & Legal Info */}
        <FaqSection />

        {/* 4. Kontakt & Info (Švehlova 633/10 Masarykovo náměstí, Po-Čt 11-21, Pá-So 11-23, Ne 11-20) */}
        <ContactSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer with Czech legal notice */}
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
};

export default App;
