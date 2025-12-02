"use client"

import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Clock,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_qzmycfq',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_m5uen7b', 
        form.current, 
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'B-W4uYlpgy0AT4FSG',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitting(false);
          setSubmitStatus('success');
          setFormData({  name: "", email: "", company: "", project: "", budget: "", timeline: "", message: ""});
          
          // Show success toast
          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you within 24 hours.",
          });
          
          // Clear success status after 5 seconds
          setTimeout(() => {
            setSubmitStatus('idle');
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
          setSubmitStatus('error');
          
          // Show error toast
          toast({
            title: "Error",
            description: "Failed to send message. Please try again or contact me through other channels.",
            variant: "destructive"
          });
          
          // Clear error status after 5 seconds
          setTimeout(() => {
            setSubmitStatus('idle');
          }, 5000);
        },
      );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hussamhaider9299@gmail.com",
      href: "mailto:hussamhaider9299@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 318 2212507",
      href: "tel:+15551234567"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: null
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hussam-haider-5bb960242", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something 
              <span className="gradient-text"> Great Together</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "hsl(215, 20%, 65%)" }}>
              Have a project in mind? we'd love to hear about it and discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Start a Project</CardTitle>
                  <p style={{ color: "hsl(215, 20%, 65%)" }}>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Status message */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-900/20 border border-green-800 rounded-lg text-green-500">
                     Message sent successfully!
                    </div>
                  )}
            
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-900/20 border border-red-800 rounded-lg text-red-500">
                      Failed to send message. Please try again or contact us through other channels.
                    </div>
                  )}

                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-background/50 border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-background/50 border-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Company and Project Type */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-background/50 border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="project">Project Type</Label>
                        <select
                          id="project"
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-primary/20 bg-background/50 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="">Select project type</option>
                          <option value="website">New Website</option>
                          <option value="redesign">Website Redesign</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="webapp">Web Application</option>
                          <option value="maintenance">Maintenance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget and Timeline */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-primary/20 bg-background/50 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="">Select budget range</option>
                          <option value="5k-10k">$5k - $10k</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k+">$50k+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-primary/20 bg-background/50 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-2months">1-2 months</option>
                          <option value="3-6months">3-6 months</option>
                          <option value="6months+">6+ months</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-hero w-full text-lg py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-black cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2 text-black" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            className="hover:text-primary transition-colors text-sm cursor-pointer"
                            onClick={openGmailCompose}
                            style={{ color: "hsl(215, 20%, 65%)" }}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm" style={{ color: "hsl(215, 20%, 65%)" }}>{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 glow-on-hover"
                        aria-label={social.label}
                      >
                        <social.icon size={20} className="text-primary" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Why Work With Me */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Why Work With Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "5+ years of experience",
                      "100% client satisfaction",
                      "Fast response time",
                      "Quality guarantee",
                      "Ongoing support"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span className="text-sm" style={{ color: "hsl(215, 20%, 65%)" }}>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;