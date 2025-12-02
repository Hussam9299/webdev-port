import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { 
  Layout, 
  Server, 
  ShoppingCart, 
  FileText, 
  Smartphone, 
  Zap,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Front-End Development",
      description: "Building beautiful and responsive user interfaces with modern frameworks like React, Vue, and Angular.",
      features: [
        "Responsive Web Design",
        "Interactive UI Components",
        "Performance Optimization",
        "Cross-Browser Compatibility"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      icon: Server,
      title: "Back-End Development",
      description: "Creating robust and scalable server-side logic, APIs, and database solutions.",
      features: [
        "RESTful API Development",
        "Database Design & Optimization",
        "Authentication Systems",
        "Cloud Integration"
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Developing custom online stores with seamless shopping experiences and secure payment processing.",
      features: [
        "Custom Shopping Cart",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing System"
      ],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"]
    },
    {
      icon: FileText,
      title: "CMS Development",
      description: "Building custom themes and plugins for content management systems with user-friendly admin interfaces.",
      features: [
        "Custom Theme Development",
        "Plugin Development",
        "Content Management",
        "SEO Optimization"
      ],
      technologies: ["WordPress", "Strapi", "Sanity", "Contentful"]
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Ensuring your website works flawlessly across all devices with mobile-first design principles.",
      features: [
        "Mobile-First Design",
        "Progressive Web Apps",
        "Touch-Friendly Interfaces",
        "App Store Deployment"
      ],
      technologies: ["React Native", "PWA", "Ionic", "Flutter"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing websites for speed, accessibility, and search engine rankings.",
      features: [
        "Core Web Vitals Optimization",
        "SEO Implementation",
        "Accessibility Compliance",
        "Speed Optimization"
      ],
      technologies: ["Lighthouse", "GTmetrix", "WebPageTest", "Analytics"]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "hsl(215, 20%, 65%)" }}>
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="glass-card hover-lift h-full">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(215, 20%, 65%)" }}>
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                      What's Included
                    </h5>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm" style={{ color: "hsl(215, 20%, 65%)" }}>
                          <CheckCircle size={16} className="text-primary mr-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center glass-card p-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto leading-relaxed" style={{ color: "hsl(215, 20%, 65%)" }}>
              Let's discuss how we can help bring your vision to life with a custom web solution 
              that drives results and exceeds expectations.
            </p>
            <Button onClick={scrollToContact} className="btn-hero bg-linear-to-r from-blue-500 to-purple-500 text-lg px-8 py-4 cursor-pointer">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;