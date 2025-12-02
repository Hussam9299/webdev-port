"use client"

import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Portfolio from "@/app/components/Portfolio";
import Contact from "@/app/components/Contact";
import useSmoothWheelScroll from '@/hooks/useSmoothWheelScroll';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// Create a separate component for the hash logic
function HomeContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // URL se hash nikal kar us section pe scroll karo
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [searchParams]);

  // Smooth scroll hook use karein
  useSmoothWheelScroll({
    speed: 0.4,      // Scroll speed
    smoothness: 0.85 // Smoothness level
  });

  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
};

export default Home;