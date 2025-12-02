"use client"

import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Corporate Website",
      description: "A modern website for BlackRock (a global asset manager and technology provider dedicated to helping more and more people experience financial well-being.)",
      image: "blackrock.png",
      technologies: ["Wordpress", "Elementor", "Plugins"],
      category: "Corporate",
      liveUrl: "https://www.blackrock.com/",
      githubUrl: "https://github.com",
      testimonial: "Our new website perfectly represents our brand and has significantly improved client inquiries.",
      client: "BalckRock Co."
    },
    {
      title: "Corporate Website",
      description: "A modern for White & Case Co. White & Case is a global law firm with longstanding offices in the markets that matter today.",
      image: "white&case.png",
      technologies: ["Next.js", "MongoDB", "Sanity.io", "Typescript", "Tailwind CSS"],
      category: "Corporate",
      liveUrl: "https://www.whitecase.com/",
      githubUrl: "https://github.com",
      testimonial: "Finally, a website that articulates what we do with clarity and impact. The messaging is sharp, the value proposition is front and center, and it speaks directly to our ideal clients.",
      client: "White & Case Co."
    },
    {
      title: "Corporate Website",
      description: "A modern corporate website built for offering the world's finest Serviced offices, Virtual offices, Coworking and Meeting rooms.",
      image: "servcorp.png",
      technologies: ["Wordpress", "Elementor", "Plugins"],
      category: "Corporate",
      liveUrl: "https://www.servcorp.com",
      githubUrl: "https://github.com",
      testimonial: "The new site doesn't just look beautiful; it feels like an authentic extension of our company's culture and values. We've received numerous compliments on its sophisticated and professional aesthetic.",
      client: "Servcorp Limited"
    },
    {
      title: "Corporate Website",
      description: "A modern website for a financial institution that help entrepreneurs create jobs and economic opportunity through rigorous business education programs, access to capital, and networking.",
      image: "goldmansachs.png",
      technologies: ["Wordpress", "Elementor", "Plugins"],
      category: "Corporate",
      liveUrl: "https://www.goldmansachs.com",
      githubUrl: "https://github.com",
      testimonial: "This website has completely transformed our digital presence. It positions us as a modern, authoritative leader in our industry, and we feel immense pride when directing potential partners to it.",
      client: "GoldmanSachs Co."
    },
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built for a growing retail brand. Features include shopping cart, secure payments, and admin dashboard.",
      image: "quickcart.png",
      technologies: ["Next.js", "MongoDB", "Typescript", "Tailwind CSS"],
      category: "E-Commerce",
      liveUrl: "https://quick-cart-omega-eight.vercel.app/",
      githubUrl: "https://github.com",
      testimonial: "The new website increased our online sales by 150% in the first quarter. The user experience is incredible!",
      client: "QuickCart Co."
    },
    {
      title: "E-Commerce Platform",
      description: "A sleek, high-performance front-end design crafted for a modern e-commerce brand. The interface features an intuitive product, responsive layout, and a visually engaging product detail view. Built with clean, scalable UI architecture and optimized for speed, accessibility, and seamless integration with any backend API.",
      image: "timecraft.png",
      technologies: ["Next.js", "MongoDB", "Typescript", "Tailwind CSS"],
      category: "E-Commerce",
      liveUrl: "https://my-web-lake-iota.vercel.app/",
      githubUrl: "https://github.com",
      testimonial: "The new website increased our online sales by 150% in the first quarter. The user experience is incredible!",
      client: "TimeCraft Co."
    },
    {
      title: "Creative Portfolio",
      description: "A stunning portfolio website for a seo agency showcasing their work through immersive galleries and interactive elements.",
      image: "seoexpert.png",
      technologies: ["Next.js", "MongoDB","Typescript", "Tailwind CSS"],
      category: "Portfolio",
      liveUrl: "https://seo-port-1.vercel.app/",
      githubUrl: "https://github.com",
      testimonial: "The portfolio website has become our best sales tool. Clients are impressed before we even meet!",
      client: "SEOExpert Agency"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section id="work" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "hsl(215, 20%, 65%)" }}>
              Showcasing recent projects that demonstrate expertise in modern web development
            </p>
          </div>

          {/* Featured Project */}
          <Card className="glass-card overflow-hidden mb-12">
            <div className="grid lg:grid-cols-2">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent lg:hidden"></div>
              </div>

              {/* Project Details */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="leading-relaxed mb-6" style={{ color: "hsl(215, 20%, 65%)" }}>
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h5 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mb-6 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                  <p className="text-sm italic mb-2" style={{ color: "hsl(215, 20%, 65%)" }}>
                    "{project.testimonial}"
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    — {project.client}
                  </p>
                </div>

                {/* Project Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    asChild
                    className="btn-hero bg-linear-to-r from-blue-500 to-purple-500 flex-1 text-black!"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} className="mr-2 text-black" />
                      View Live Site
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Project Navigation */}
          <div className="flex justify-center items-center gap-6">
            <Button 
              onClick={prevProject}
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full border border-primary/20 hover:bg-primary/10"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentProject ? "bg-primary" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>

            <Button 
              onClick={nextProject}
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full border border-primary/20 hover:bg-primary/10"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* All Projects Grid */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, index) => (
              <Card 
                key={index} 
                className={`glass-card hover-lift cursor-pointer transition-all duration-200 ${
                  index === currentProject ? "ring-2 ring-primary/50" : ""
                }`}
                onClick={() => setCurrentProject(index)}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {proj.category}
                  </Badge>
                  <h4 className="font-semibold mb-2">{proj.title}</h4>
                  <p className="text-sm line-clamp-2" style={{ color: "hsl(215, 20%, 65%)" }}>
                    {proj.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;