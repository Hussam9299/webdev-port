"use client"

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {

  const pathname = usePathname();
  const router = useRouter();

  // Function to open Gmail compose window
  const openGmailCompose = () => {
    const email = 'hussamhaider9299@gmail.com'; // Replace with your actual email
    const subject = 'SEO Consultation Inquiry';
    const body = `Hello,\n\nI'm interested in discussing SEO services for my business.\n\nBest regards,\n[Your Name]`;
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    "Front-End Development",
    "Back-End Development", 
    "E-commerce Solutions",
    "CMS Development"
  ];

  const scrollToSection = (href: string) => {
    // Agar hum home page pe hain, toh directly scroll karo
    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Agar hum home page pe nahi hain, toh pehle home page pe navigate karo
      // phir scroll karo
      router.push(`/${href}`);
    }
  };

  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="font-bold text-2xl gradient-text mb-4">
                WebDev Pro
              </div>
              <p className="leading-relaxed mb-6 max-w-md" style={{ color: "hsl(215, 20%, 65%)" }}>
                Creating beautiful, high-performance websites that help brands shine online. 
                Combining innovative design with flawless code.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 glow-on-hover"
                  aria-label="GitHub"
                >
                  <Github size={18} className="text-primary" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 glow-on-hover"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-primary" />
                </a>
                <a 
                  onClick={openGmailCompose}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 glow-on-hover"
                  aria-label="Email"
                >
                  <Mail size={18} className="text-primary" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="hover:!text-blue-500 transition-colors duration-200 cursor-pointer"
                      style={{ color: "hsl(215, 20%, 65%)" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-sm" style={{ color: "hsl(215, 20%, 65%)" }}>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: "hsl(215, 20%, 65%)" }}>
              © {currentYear} WebDev Pro. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a 
                href="/privacy-policy"
                className="hover:text-primary transition-colors duration-200 text-sm"
                style={{ color: "hsl(215, 20%, 65%)" }}
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="hover:text-primary transition-colors duration-200 text-sm"
                style={{ color: "hsl(215, 20%, 65%)" }}
              >
                Terms of Service
              </a>
              
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-lg border border-primary/20 hover:bg-primary/10"
                aria-label="Back to top"
              >
                <ArrowUp size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;