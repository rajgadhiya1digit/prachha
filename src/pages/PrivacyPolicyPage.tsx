import { useEffect, useState } from 'react';

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'introduction', title: '1. Introduction', number: '1' },
    { id: 'definitions', title: '2. Definitions', number: '2' },
    { id: 'personal-data', title: '3. Personal Data We Collect', number: '3' },
    { id: 'purpose', title: '4. Purpose of Processing', number: '4' },
    { id: 'legal-basis', title: '5. Legal Basis for Processing', number: '5' },
    { id: 'collection', title: '6. Collection Methods', number: '6' },
    { id: 'sharing', title: '7. Data Sharing & Transfers', number: '7' },
    { id: 'retention', title: '8. Data Retention', number: '8' },
    { id: 'rights', title: '9. Your Rights', number: '9' },
    { id: 'cookies', title: '10. Cookies & Tracking Technologies', number: '10' },
    { id: 'security', title: '11. Data Security', number: '11' },
    { id: 'changes', title: '12. Changes to This Privacy Policy', number: '12' },
    { id: 'contact', title: '13. Contact Us', number: '13' },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your privacy matters to us. This policy outlines how Prachha Tech collects, uses, and protects your personal information.
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
                    At Prachha Tech, we are committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy explains how we collect, use, store, and protect your data when you visit our website, 
                    use our services, or interact with our company.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We are a technology company based in Surat, Gujarat, India, specializing in software development, AI solutions, and digital transformation services. 
                    This policy applies to all users of our website and services.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    By using our services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, 
                    use, and sharing of your information as described herein.
                  </p>
                </div>
              </section>

              {/* 2. Definitions */}
              <section id="definitions" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Definitions</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    For the purposes of this Privacy Policy, the following terms have the following meanings:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person. This includes, but is not limited to, name, email address, phone number, and other contact information.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Usage Data:</strong> Data collected automatically either generated by the use of our Service or from the Service infrastructure itself. This includes IP addresses, browser types, and access times.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Cookies:</strong> Small files stored on your device (computer or mobile device) that track your browsing behavior and preferences.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Data Controller:</strong> Prachha Tech determines the purposes and means of the processing of Personal Data.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Data Processor:</strong> Any natural or legal person who processes the data on behalf of the Data Controller.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 3. Personal Data We Collect */}
              <section id="personal-data" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Personal Data We Collect</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We may collect and process the following categories of personal data:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Identity Data:</strong> Name, company name, job title, and professional information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Contact Data:</strong> Email address, phone number, website link, and other contact details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Technical Data:</strong> IP address, browser type, device identifiers, system logs, and technical usage information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Usage Data:</strong> Interactions with our website/services, access times, pages viewed, and feature usage patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Business Information:</strong> Company details, project requirements, business inquiries, and professional needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Voluntarily Provided Information:</strong> Inquiry forms, uploaded resumes, project proposals, or other details you choose to share</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We only collect data that is necessary for the purposes outlined in this Privacy Policy and we take reasonable steps to ensure that the data is accurate and up-to-date.
                  </p>
                </div>
              </section>

              {/* 4. Purpose of Processing */}
              <section id="purpose" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Purpose of Processing</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We process personal data for the following lawful business purposes:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>To provide and improve our services, website performance, and overall user experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>To engage with prospective and existing clients for business development and relationship management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>To communicate service updates, respond to inquiries, and provide technical support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>To ensure the security and integrity of our systems and protect against unauthorized access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>To comply with legal, regulatory, or contractual obligations and audit requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>For recruitment, employment, and human resources purposes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>To analyze website usage and improve our digital presence and marketing efforts</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 5. Legal Basis for Processing */}
              <section id="legal-basis" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    5
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Legal Basis for Processing</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We rely on the following lawful bases for processing your personal data:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Consent:</strong> Particularly for marketing communications, cookies, and tracking technologies where explicit consent is required by law</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Contractual Necessity:</strong> To deliver requested services, respond to inquiries, or enter into business agreements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Legitimate Interests:</strong> For improving our services, maintaining security, operational analytics, and legitimate business purposes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Legal Obligation:</strong> Compliance with statutory requirements, legal proceedings, audit, or regulatory disclosures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Vital Interests:</strong> To protect essential interests in emergency situations</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We will always ensure that our processing activities are proportionate and necessary for the stated purposes.
                  </p>
                </div>
              </section>

              {/* 6. Collection Methods */}
              <section id="collection" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    6
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Collection Methods</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We collect data through various methods:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Direct Collection:</strong> Contact forms, inquiry submissions, resumes, and information you voluntarily provide through our website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Automated Collection:</strong> Cookies, analytics tools, web beacons, and similar technologies (with consent where legally required)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Communication Channels:</strong> Email exchanges, phone calls, chat conversations, and other direct communications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Business Interactions:</strong> Meetings, networking events, conferences, and professional engagements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Third-Party Sources:</strong> Publicly available information and legitimate business directories where appropriate</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 7. Data Sharing & Transfers */}
              <section id="sharing" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    7
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Data Sharing & Transfers</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We may share your personal data with:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Service Providers & Partners:</strong> Third-party vendors including cloud hosting providers, analytics services, IT support, and other business partners under strict contractual obligations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Legal Authorities:</strong> When required by law, regulation, court order, or in response to lawful requests from government agencies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Business Transactions:</strong> In case of merger, acquisition, or sale of assets, provided appropriate safeguards are in place to protect your data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Cross-border transfers:</strong> Where data is transferred internationally, we ensure appropriate safeguards including standard contractual clauses or other legal mechanisms</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We do not sell your personal data to third parties for marketing purposes.
                  </p>
                </div>
              </section>

              {/* 8. Data Retention */}
              <section id="retention" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    8
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or to comply with applicable legal and regulatory requirements.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our retention periods are determined based on:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>The nature and purpose of the data collection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Legal and regulatory requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Business needs and contractual obligations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Your preferences and consent</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Data that is no longer required will be securely deleted or anonymized in accordance with our data retention policies.
                  </p>
                </div>
              </section>

              {/* 9. Your Rights */}
              <section id="rights" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    9
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Depending on your jurisdiction, you may exercise the following rights:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Right to Access:</strong> Request access to your personal data and information about how we process it</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete personal data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal or contractual obligations)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time for consent-based processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Right to Restrict Processing:</strong> Request restriction of processing in certain circumstances</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Right to Object:</strong> Object to processing based on legitimate interests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    You may exercise these rights by contacting us at <a href="mailto:info@prachha.tech" className="text-red-600 hover:text-red-700 font-medium">info@prachha.tech</a>. We will respond to your request within the timeframes required by applicable law.
                  </p>
                </div>
              </section>

              {/* 10. Cookies & Tracking Technologies */}
              <section id="cookies" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    10
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Cookies & Tracking Technologies</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Our website uses cookies and similar technologies to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Ensure secure and reliable access to our website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Monitor system performance and optimize functionality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Analyze website usage and engagement patterns (subject to consent where legally required)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Remember your preferences and settings for improved user experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Provide personalized content and relevant information</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect your experience on our website.
                  </p>
                </div>
              </section>

              {/* 11. Data Security */}
              <section id="security" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    11
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We adopt industry best practices to ensure data confidentiality, integrity, and availability. Our security measures include:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Encryption:</strong> Data encryption in transit and at rest using industry-standard protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Access Controls:</strong> Role-based access control and principle of least privilege</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Regular Assessments:</strong> Periodic security audits and risk assessments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Employee Training:</strong> Regular security awareness training for all staff members</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span><strong>Incident Response:</strong> Established procedures for handling security incidents</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    While we take reasonable measures to protect your personal information, no method of transmission over the internet or method of electronic storage is 100% secure.
                  </p>
                </div>
              </section>

              {/* 12. Changes to This Privacy Policy */}
              <section id="changes" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    12
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
                </div>
                <div className="ml-0 sm:ml-12 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When we make changes, we will:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Post the updated Privacy Policy on our website with an updated effective date</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Notify users of significant changes through email or website notifications where appropriate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span>Provide a summary of key changes for easy understanding</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    You are advised to review this Privacy Policy periodically for any changes. Your continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </div>
              </section>

              {/* 13. Contact Us */}
              <section id="contact" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    13
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                </div>
                <div className="ml-0 sm:ml-12">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you have any questions about this Privacy Policy or your data protection rights, please contact us:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600">📧</span>
                        </div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                      </div>
                      <a href="mailto:info@prachha.tech" target='_blank'
                      className="text-red-600 hover:text-red-700 font-medium">
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
