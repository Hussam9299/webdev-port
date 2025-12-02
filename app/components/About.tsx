"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/app/components/ui/card";
import { Code2, Rocket, Users, Zap } from "lucide-react";
import Image from "next/image";

const About = () => {
  const [rotation, setRotation] = useState(0);

  // Continuous rotation effect
  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    
    const rotateContinuously = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      // Calculate rotation based on time elapsed for smooth continuous rotation
      const elapsed = timestamp - startTime;
      const rotationSpeed = 0.036; // degrees per millisecond (360 degrees every 10 seconds)
      const newRotation = (elapsed * rotationSpeed) % 360;
      
      setRotation(newRotation);
      animationFrameId = requestAnimationFrame(rotateContinuously);
    };
    
    animationFrameId = requestAnimationFrame(rotateContinuously);
    
    // Cleanup on component unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const principles = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing every aspect for lightning-fast load times and smooth interactions"
    },
    {
      icon: Users,
      title: "User-Centered",
      description: "Designing with the end user in mind, creating intuitive and accessible experiences"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Leveraging cutting-edge technologies to build modern, future-proof solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Us</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "hsl(215, 20%, 65%)" }}>
              Passionate about crafting digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img 
                  src="webdev.png" 
                  alt="Professional Web Developer" 
                  className="w-full h-auto object-cover"
                  style={{ 
                    transform: `rotate(${rotation}deg)`
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Turning Ideas Into 
                <span className="gradient-text"> Digital Reality</span>
              </h3>
              
              <div className="space-y-4 leading-relaxed" style={{ color: "hsl(215, 20%, 65%)" }}>
                <p>
                  With a deep passion for technology and design, We specialize in creating beautiful, 
                  high-performance websites that not only look stunning but deliver exceptional user experiences.
                </p>
                
                <p>
                  Our approach combines modern design principles with clean, efficient code to build 
                  websites that perform exceptionally well across all devices and platforms. Our believe 
                  in the power of collaboration and work closely with clients to bring their vision to life.
                </p>
                
                <p>
                  When we're not coding, you'll find us exploring the latest web technologies, 
                  contributing to open source projects, or mentoring aspiring developers. 
                  we're committed to continuous learning and staying at the forefront of web development.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {["7+ Years Experience", "68+ Projects Completed", "100% Client Satisfaction"].map((stat) => (
                  <span 
                    key={stat}
                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Development Principles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <principle.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{principle.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(215, 20%, 65%)" }}>
                    {principle.description}
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

export default About;