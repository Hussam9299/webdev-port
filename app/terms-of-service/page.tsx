'use client';

import React from 'react';
import useSmoothWheelScroll from '@/hooks/useSmoothWheelScroll';

const TermsOfService = () => {

  // Smooth scroll hook use karein
    useSmoothWheelScroll({
      speed: 0.4,      // Scroll speed
      smoothness: 0.85 // Smoothness level
    });

  return (
    <div className="min-h-screen bg-[#05080f] text-white">
      {/* Header */}
      <header className="bg-[#05080f] py-8 pt-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Please read these terms carefully before using our web development services.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
          
          {/* Effective Date */}
          <div className="mb-8 p-4 bg-[#6d70ff]/10 rounded-lg border border-[#6d70ff]/30">
            <p className="text-[#9e55ff] font-semibold">
              Effective Date: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Agreement Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By accessing or using WebDev Pro&apos;s services, you agree to be bound by these Terms of Service 
              and our Privacy Policy. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          {/* Services Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">2. Services Description</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              WebDev Pro provides full stack web development services including but not limited to:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-[#9e55ff] mb-2">Frontend Development</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• React, Next.js, TypeScript</li>
                  <li>• Responsive UI/UX Design</li>
                  <li>• Progressive Web Apps</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-[#9e55ff] mb-2">Backend Development</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Node.js, Python, PHP</li>
                  <li>• Database Design & API</li>
                  <li>• Cloud Deployment</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">3. User Responsibilities</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#9e55ff] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Provide accurate and complete information for project requirements
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#9e55ff] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Timely feedback and approval during development phases
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#9e55ff] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Secure your account credentials and notify us of unauthorized access
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#9e55ff] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Compliance with all applicable laws and regulations
                </p>
              </div>
            </div>
          </section>

          {/* Payments & Billing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">4. Payments & Billing</h2>
            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-[#9e55ff] mb-3">Payment Terms</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Project Deposits</span>
                  <span className="text-[#6d70ff] font-semibold">50% upfront</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Milestone Payments</span>
                  <span className="text-[#6d70ff] font-semibold">As agreed in contract</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Final Payment</span>
                  <span className="text-[#6d70ff] font-semibold">Before delivery</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Late Payments</span>
                  <span className="text-red-400 font-semibold">1.5% monthly interest</span>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">5. Intellectual Property</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#6d70ff]/10 p-5 rounded-lg border border-[#6d70ff]/30">
                <h4 className="font-semibold text-white mb-3">Client Ownership</h4>
                <p className="text-gray-300 text-sm">
                  Upon full payment, clients receive full ownership of the delivered code, 
                  designs, and assets created specifically for their project.
                </p>
              </div>
              <div className="bg-[#9e55ff]/10 p-5 rounded-lg border border-[#9e55ff]/30">
                <h4 className="font-semibold text-white mb-3">Our Rights</h4>
                <p className="text-gray-300 text-sm">
                  We retain rights to reusable code components, frameworks, and tools 
                  developed internally unless otherwise specified in writing.
                </p>
              </div>
            </div>
          </section>

          {/* Project Timeline & Deliverables */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">6. Project Timeline & Deliverables</h2>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-[#9e55ff] mb-2">Development Phases</h4>
                <ol className="list-decimal list-inside text-gray-300 space-y-2">
                  <li>Discovery & Planning (1-2 weeks)</li>
                  <li>Design & Prototyping (2-3 weeks)</li>
                  <li>Development & Implementation (4-8 weeks)</li>
                  <li>Testing & Quality Assurance (1-2 weeks)</li>
                  <li>Deployment & Training (1 week)</li>
                </ol>
              </div>
              <p className="text-gray-300 text-sm italic">
                * Timelines are estimates and may vary based on project complexity and client responsiveness.
              </p>
            </div>
          </section>

          {/* Limitations of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">7. Limitations of Liability</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
              <p className="text-yellow-200 text-sm">
                <strong>Important:</strong> WebDev Pro&apos;s total liability for any claim arising from 
                our services shall not exceed the total amount paid by the client for the specific project.
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We are not liable for indirect, incidental, or consequential damages including 
              lost profits, data loss, or business interruption. Clients are responsible for 
              maintaining adequate backups and insurance.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">8. Termination</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded border border-gray-700">
                <span className="text-gray-300">By Client</span>
                <span className="text-green-400 font-semibold">Written notice required</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded border border-gray-700">
                <span className="text-gray-300">By WebDev Pro</span>
                <span className="text-red-400 font-semibold">For breach of terms</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded border border-gray-700">
                <span className="text-gray-300">Refund Policy</span>
                <span className="text-[#9e55ff] font-semibold">Pro-rata for unused services</span>
              </div>
            </div>
          </section>

          {/* Confidentiality */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">9. Confidentiality</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Both parties agree to maintain the confidentiality of proprietary information 
              received from the other party. This includes business strategies, technical 
              information, and project details.
            </p>
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h4 className="font-semibold text-[#9e55ff] mb-2">Non-Disclosure</h4>
              <p className="text-gray-300 text-sm">
                Confidentiality obligations survive termination of these terms and continue 
                for 3 years after project completion, except for trade secrets which remain 
                protected indefinitely.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">10. Governing Law & Disputes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-[#9e55ff]">Jurisdiction</h4>
                <p className="text-gray-300 text-sm">
                  These terms are governed by the laws of the state where WebDev Pro is registered.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-[#9e55ff]">Dispute Resolution</h4>
                <p className="text-gray-300 text-sm">
                  Parties agree to mediate disputes before pursuing litigation. 
                  Mediation costs are shared equally.
                </p>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">11. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of our 
              services after changes constitutes acceptance of the modified terms. Material 
              changes will be communicated via email or website notice.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">12. Contact Information</h2>
            <div className="bg-gradient-to-r from-[#6d70ff]/20 to-[#9e55ff]/20 p-6 rounded-lg border border-[#6d70ff]/30">
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-[#9e55ff] font-semibold">Email: legal@webdevpro.com</p>
                <p className="text-[#9e55ff] font-semibold">Phone: +1 (555) 123-WEBDEV</p>
                <p className="text-gray-300 text-sm">
                  We aim to respond to all legal inquiries within 48 hours.
                </p>
              </div>
            </div>
          </section>

          {/* Acceptance */}
          <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
            <p className="text-green-400 font-semibold">
              By using our services, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;