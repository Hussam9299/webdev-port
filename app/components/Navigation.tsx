"use client"

import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    // Agar hum home page pe hain, toh directly scroll karo
    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else {
      // Agar hum home page pe nahi hain, toh pehle home page pe navigate karo
      // phir scroll karo
      router.push(`/${href}`);
      setIsOpen(false);
    }
  };

  // Function to open Gmail compose window
  const openGmailCompose = () => {
    const email = 'hussamhaider9299@gmail.com';
    const subject = 'SEO Consultation Inquiry';
    const body = `Hello,\n\nI'm interested in discussing SEO services for my business.\n\nBest regards,\n[Your Name]`;
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="font-bold text-xl gradient-text cursor-pointer"
            onClick={() => router.push('/')}
          >
            WebDev Pro
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-blue-500 transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="btn-hero bg-gradient-to-r from-blue-500 to-purple-500 text-black font-semibold px-8 py-4 rounded-xl shadow-lg no-underline cursor-pointer"
              onClick={openGmailCompose}
            >
              <Mail className="w-4 h-4" />
              Email Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden cursor-pointer hover:bg-purple-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-card mt-2 p-4 rounded-xl">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
                style={{ color: "hsl(215, 20%, 65%)" }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={openGmailCompose}
              className="btn-hero bg-gradient-to-r from-blue-500 to-purple-500 text-black font-semibold px-8 py-4 rounded-xl shadow-lg no-underline cursor-pointer w-full mt-4"
            >
              Start a Project
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;