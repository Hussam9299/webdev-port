import { Button } from "@/app/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStack = [
    "React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "MongoDB"
  ];

  // Function to open Gmail compose window
  const openGmailCompose = () => {
    const email = 'hussamhaider9299@gmail.com'; // Replace with your actual email
    const subject = 'SEO Consultation Inquiry';
    const body = `Hello,\n\nI'm interested in discussing SEO services for my business.\n\nBest regards,\n[Your Name]`;
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="hero-workspace.jpg" 
          alt="Web Developer Workspace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Where Innovative Design 
            <span className="gradient-text text-shadow"> Meets </span>
            Flawless Code
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: "hsl(215, 20%, 65%)" }}>
            We build fast, responsive, and intuitive websites that help brands shine online. 
            Combining modern design principles with clean, efficient code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection("#work")} 
              className="btn-hero text-lg bg-linear-to-r from-blue-500 to-purple-500 px-8 py-4 cursor-pointer"
            >
              View Our Work
            </Button>
            <Button 
              onClick={() => scrollToSection("#contact")} 
              variant="outline"
              className="text-lg px-8 py-4 bg-[#000000] border border-blue-950! text-white rounded-xl hover:bg-[#081529] hover:text-black cursor-pointer"
            >
              Start a Project
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 glow-on-hover"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hussam-haider-5bb960242" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 glow-on-hover"
            >
              <Linkedin size={24} />
            </a>
            <a 
              onClick={openGmailCompose}
              className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 glow-on-hover cursor-pointer"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="glass-card p-6 max-w-2xl mx-auto mb-16">
            <h3 className="text-lg font-semibold mb-4 text-center">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-[#0f1d33]! border-2! border-[#1b273b]! rounded-full text-sm font-medium hover:bg-[#0c2752]! transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection("#about")}
            className="animate-bounce mx-auto block p-2 rounded-full hover:bg-primary/10 transition-colors duration-200"
          >
            <ArrowDown size={24} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;