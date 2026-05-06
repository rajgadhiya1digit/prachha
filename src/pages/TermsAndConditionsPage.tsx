import { useEffect, useState } from 'react';

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'introduction', title: '1. Introduction', number: '1' },
    { id: 'acceptance', title: '2. Acceptance of Terms', number: '2' },
    { id: 'services', title: '3. Services Description', number: '3' },
    { id: 'responsibilities', title: '4. User Responsibilities', number: '4' },
    { id: 'intellectual-property', title: '5. Intellectual Property', number: '5' },
    { id: 'payments', title: '6. Payments & Billing', number: '6' },
    { id: 'third-party', title: '7. Third-Party Services', number: '7' },
    { id: 'termination', title: '8. Termination', number: '8' },
    { id: 'liability', title: '9. Limitation of Liability', number: '9' },
    { id: 'indemnification', title: '10. Indemnification', number: '10' },
    { id: 'privacy', title: '11. Privacy Policy Reference', number: '11' },
    { id: 'changes', title: '12. Changes to Terms', number: '12' },
    { id: 'governing-law', title: '13. Governing Law', number: '13' },
    { id: 'contact', title: '14. Contact Information', number: '14' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Welcome to Prachha Tech. Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation - Desktop Only */}
          <aside className="hidden lg:block lg:w-80 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === section.id
                          ? 'bg-red-50 text-red-600 border-l-2 border-red-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <main className="flex-1 min-w-0">
            <div className="space-y-6">
              
              {/* 1. Introduction */}
              <section id="introduction" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to Prachha Tech. These Terms and Conditions ("Terms") govern your access to and use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Prachha Tech is a technology company based in Surat, Gujarat, India, specializing in software development, AI solutions, and digital transformation services. We are committed to providing innovative technology solutions that help businesses thrive in the digital age.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms apply to all users of our services, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
                  </p>
                </div>
              </section>

              {/* 2. Acceptance of Terms */}
              <section id="acceptance" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Your continued use of our services following the posting of any changes to these Terms constitutes acceptance of those changes. You should review this page periodically for any updates.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If you do not agree to any of these Terms, you are not authorized to use or access our services and you must immediately cease such use.
                  </p>
                </div>
              </section>

              {/* 3. Services Description */}
              <section id="services" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Services Description</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Prachha Tech provides the following services:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Custom Software Development:</strong> Tailored software solutions for business needs including web applications, mobile apps, and enterprise systems.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>AI & Machine Learning Solutions:</strong> Advanced AI-powered solutions for automation, data analysis, and intelligent decision-making.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Cloud Services:</strong> Cloud migration, deployment, and management services on leading cloud platforms.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Consulting Services:</strong> Technical consulting and strategic guidance for digital transformation initiatives.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Support and Maintenance:</strong> Ongoing technical support and system maintenance services.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
                  </p>
                </div>
              </section>

              {/* 4. User Responsibilities */}
              <section id="responsibilities" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">User Responsibilities</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Provide accurate, current, and complete information during registration and throughout your use of our services.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Use our services for lawful purposes only and in compliance with all applicable laws and regulations.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Not attempt to gain unauthorized access to our systems, networks, or servers.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Respect intellectual property rights and not infringe on any patents, copyrights, trademarks, or other proprietary rights.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Maintain the confidentiality of your account credentials and notify us immediately of any unauthorized use.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Not engage in any activity that interferes with or disrupts our services or servers.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 5. Intellectual Property */}
              <section id="intellectual-property" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    5
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Intellectual Property</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    All content, trademarks, service marks, logos, and intellectual property on our website and services are owned by Prachha Tech or our licensors. This includes but is not limited to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Software code, applications, and systems developed by Prachha Tech</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Website design, layout, graphics, and visual elements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Documentation, guides, and other written materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Brand names, trademarks, and service marks</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    You may not use, copy, reproduce, distribute, or create derivative works of any our intellectual property without prior written consent from Prachha Tech.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Any unauthorized use of our intellectual property may result in legal action and claims for damages.
                  </p>
                </div>
              </section>

              {/* 6. Payments & Billing */}
              <section id="payments" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    6
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Payments & Billing</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Payment terms are as follows:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Payment Schedules:</strong> Payment schedules will be specified in project agreements and may include milestone-based payments or monthly recurring fees.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Late Payments:</strong> Late payments may incur interest charges at a rate of 1.5% per month or the maximum rate permitted by law, whichever is lower.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Refund Policy:</strong> Refunds are handled on a case-by-case basis and are subject to the terms outlined in individual service agreements.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Price Changes:</strong> All prices are subject to change without prior notice, but any changes will not affect existing agreements.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Payment Methods:</strong> We accept various payment methods including bank transfers, credit cards, and digital payment platforms.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    All payments are due within the timeframe specified in your service agreement. Failure to make timely payments may result in suspension or termination of services.
                  </p>
                </div>
              </section>

              {/* 7. Third-Party Services */}
              <section id="third-party" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    7
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Third-Party Services</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Our services may integrate with or provide access to third-party services, APIs, or platforms. These include:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Cloud hosting providers (AWS, Google Cloud, Azure)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Payment processing services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Analytics and monitoring tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Communication platforms and APIs</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Your use of third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the availability, functionality, or terms of these third-party services.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We do not endorse and are not responsible or liable for any content, advertising, products, services, or other materials on or available from such third-party resources.
                  </p>
                </div>
              </section>

              {/* 8. Termination */}
              <section id="termination" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    8
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Breach of these Terms or any applicable service agreement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Violation of applicable laws or regulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Fraudulent or illegal activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Activities that compromise the security or integrity of our systems</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Upon termination, your right to use the services will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                  </p>
                </div>
              </section>

              {/* 9. Limitation of Liability */}
              <section id="liability" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    9
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    To the maximum extent permitted by law, Prachha Tech shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our services, including but not limited to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Loss of data, information, or business opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Business interruption or loss of profits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Loss of goodwill or reputation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Costs of procurement of substitute goods or services</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Our total liability for any claims arising from or relating to these Terms or our services shall not exceed the amount paid by you for the services in the twelve (12) months preceding the claim.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for consequential or incidental damages, so these limitations may not apply to you.
                  </p>
                </div>
              </section>

              {/* 10. Indemnification */}
              <section id="indemnification" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    10
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Indemnification</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    You agree to indemnify, defend, and hold harmless Prachha Tech and our officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising from or in connection with:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Your use or misuse of our services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Your violation of these Terms or any applicable law</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Your violation of any third-party rights, including intellectual property rights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Any content or information you provide or transmit through our services</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you shall assist and cooperate with us in asserting any available defenses.
                  </p>
                </div>
              </section>

              {/* 11. Privacy Policy Reference */}
              <section id="privacy" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    11
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Privacy Policy Reference</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    By using our services, you consent to the collection and use of information in accordance with our Privacy Policy. Our Privacy Policy is incorporated by reference into these Terms.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Key aspects of our privacy practices include:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Collection of personal information necessary to provide our services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Use of information to improve and personalize our services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Implementation of appropriate security measures to protect your data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Your rights regarding your personal information</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Please review our Privacy Policy for detailed information about our privacy practices.
                  </p>
                </div>
              </section>

              {/* 12. Changes to Terms */}
              <section id="changes" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    12
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Changes to Terms</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When we make changes to these Terms, we will:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Post the updated Terms on our website and update the "Last Updated" date</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Notify users of significant changes via email or website notifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Provide a summary of the changes for easy understanding</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Your continued use of our services after any such changes constitutes acceptance of the modified Terms. If you do not agree to the modified Terms, you must stop using our services.
                  </p>
                </div>
              </section>

              {/* 13. Governing Law */}
              <section id="governing-law" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    13
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Governing Law</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Surat, Gujarat, India.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable.
                  </p>
                </div>
              </section>

              {/* 14. Contact Information */}
              <section id="contact" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    14
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                </div>
                <div className="ml-0 sm:ml-12">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600">📧</span>
                        </div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                      </div>
                      <a href="mailto:info@prachha.tech" className="text-red-600 hover:text-red-700 font-medium">
                        info@prachha.tech
                      </a>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600">📱</span>
                        </div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                      </div>
                      <a href="tel:+919558026870" className="text-red-600 hover:text-red-700 font-medium">
                        +91-955-802-6870
                      </a>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
