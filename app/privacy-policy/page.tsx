'use client';

import React from 'react';
import useSmoothWheelScroll from '@/hooks/useSmoothWheelScroll';

const PrivacyPolicy = () => {

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how WebDev Pro protects and manages your data.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
          
          {/* Last Updated */}
          <div className="mb-8 p-4 bg-[#6d70ff]/10 rounded-lg border border-[#6d70ff]/30">
            <p className="text-[#9e55ff] font-semibold">
              Last Updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to WebDev Pro (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting 
              your privacy and ensuring the security of your personal information. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our 
              website and use our full stack web development services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-[#9e55ff] mb-3">Personal Information</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Name and contact details (email, phone number)</li>
              <li>Company information and project requirements</li>
              <li>Billing and payment information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#9e55ff] mb-3">Technical Information</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">3. How We Use Your Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-[#9e55ff] mb-2">Service Delivery</h4>
                <p className="text-gray-300 text-sm">
                  To provide and maintain our web development services, process payments, and communicate about your projects.
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-[#9e55ff] mb-2">Improvement</h4>
                <p className="text-gray-300 text-sm">
                  To analyze website usage and improve our services, user experience, and customer support.
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-[#9e55ff] mb-2">Marketing</h4>
                <p className="text-gray-300 text-sm">
                  To send promotional materials, updates, and information about new services (with your consent).
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-[#9e55ff] mb-2">Security</h4>
                <p className="text-gray-300 text-sm">
                  To protect against fraudulent activities, enhance security, and comply with legal obligations.
                </p>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              information with:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
              <li>Successor entities in case of merger or acquisition</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze 
              website traffic, and understand user behavior. You can control cookie preferences through 
              your browser settings.
            </p>
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h4 className="font-semibold text-[#9e55ff] mb-2">Types of Cookies We Use:</h4>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies for performance monitoring</li>
                <li>Preference cookies for personalized experience</li>
                <li>Marketing cookies for relevant advertising</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">6. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction. 
              However, no method of transmission over the Internet is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">7. Your Rights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#6d70ff]/10 p-4 rounded-lg border border-[#6d70ff]/30">
                <h4 className="font-semibold text-white mb-2">Access & Correction</h4>
                <p className="text-gray-300 text-sm">
                  Request access to and correction of your personal information.
                </p>
              </div>
              <div className="bg-[#9e55ff]/10 p-4 rounded-lg border border-[#9e55ff]/30">
                <h4 className="font-semibold text-white mb-2">Data Portability</h4>
                <p className="text-gray-300 text-sm">
                  Receive your data in a structured, machine-readable format.
                </p>
              </div>
              <div className="bg-[#6d70ff]/10 p-4 rounded-lg border border-[#6d70ff]/30">
                <h4 className="font-semibold text-white mb-2">Withdraw Consent</h4>
                <p className="text-gray-300 text-sm">
                  Withdraw your consent for data processing at any time.
                </p>
              </div>
              <div className="bg-[#9e55ff]/10 p-4 rounded-lg border border-[#9e55ff]/30">
                <h4 className="font-semibold text-white mb-2">Deletion</h4>
                <p className="text-gray-300 text-sm">
                  Request deletion of your personal information under certain circumstances.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">8. Contact Us</h2>
            <div className="bg-linear-to-r from-[#6d70ff]/20 to-[#9e55ff]/20 p-6 rounded-lg border border-[#6d70ff]/30">
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-[#9e55ff] font-semibold">Email: hussamhaider9299@gmail.com</p>
                <p className="text-gray-300">We typically respond within 24-48 hours.</p>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-bold text-[#6d70ff] mb-4">9. Policy Updates</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or legal requirements. We will notify you of any material changes by posting the updated 
              policy on our website with a new effective date. We encourage you to review this policy 
              periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;