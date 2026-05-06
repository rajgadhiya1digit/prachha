import { useEffect, useState } from 'react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'definitions', title: 'Definitions' },
    { id: 'personal-data', title: 'Personal Data We Collect' },
    { id: 'purpose', title: 'Purpose of Processing' },
    { id: 'legal-basis', title: 'Legal Basis for Processing' },
    { id: 'collection', title: 'Collection Methods' },
    { id: 'sharing', title: 'Data Sharing & Transfers' },
    { id: 'retention', title: 'Data Retention' },
    { id: 'rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies & Tracking Technologies' },
    { id: 'security', title: 'Data Security' },
    { id: 'links', title: 'Links to Other Sites' },
    { id: 'changes', title: 'Changes to This Privacy Policy' },
    { id: 'contact', title: 'Contact Us' },
  ];

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
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
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Table of Contents Sidebar */}
          <aside className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-md p-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Navigation</h3>
              <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-red-50 text-red-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8">
              {/* Header with Trust Signals */}
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-red-100 rounded-full mb-4 sm:mb-6">
                  <svg className="w-7 h-7 sm:w-10 sm:h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Privacy Policy
                </h1>
                <div className="h-1 w-16 sm:w-24 bg-red-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                  Your privacy matters to us. This policy outlines how Prachha Tech collects, uses, and protects your personal information. We're committed to transparency and data security in all our operations.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <section id="introduction" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">1</span>
                    <span className="leading-tight">Introduction</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    At Prachha Tech, we are committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy explains how we collect, use, store, and protect your data when you visit our website, 
                    use our services, or interact with our company.
                  </p>
                </section>

                <section id="definitions" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">2</span>
                    <span className="leading-tight">Definitions</span>
                  </h2>
                  <div className="space-y-2 sm:space-y-3 text-gray-700 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p><strong>Usage Data:</strong> Data collected automatically either generated by the use of our Service or from the Service infrastructure itself.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p><strong>Cookies:</strong> Small files stored on your device (computer or mobile device) that track your browsing behavior.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p><strong>Data Controller:</strong> Prachha Tech determines the purposes and means of the processing of Personal Data.</p>
                    </div>
                  </div>
                </section>

                <section id="personal-data" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">3</span>
                    <span className="leading-tight">Personal Data We Collect</span>
                  </h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">We may collect and process the following categories of personal data:</p>
                  <div className="space-y-2 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Identity Data:</strong> Name, company name, job title</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Contact Data:</strong> Email address, phone number, website link</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Technical Data:</strong> IP address, browser type, device identifiers, system logs</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Usage Data:</strong> Interactions with our website/services, access times, and feature usage</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Business Information:</strong> Company details, project requirements, business inquiries</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Information you provide:</strong> Inquiry forms, uploaded resumes, or other voluntarily shared details</p>
                    </div>
                  </div>
                </section>

                <section id="purpose" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">4</span>
                    <span className="leading-tight">Purpose of Processing</span>
                  </h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">We process personal data for the following lawful business purposes:</p>
                  <div className="space-y-2 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">To provide and improve our services, website performance, and user experience</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">To engage with prospective and existing clients for business development</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">To communicate service updates, respond to inquiries, and provide support</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">To ensure the security and integrity of our systems</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">To comply with legal, regulatory, or contractual obligations</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">For recruitment and employment purposes</p>
                    </div>
                  </div>
                </section>

                <section id="legal-basis" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">5</span>
                    <span className="leading-tight">Legal Basis for Processing</span>
                  </h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">We rely on the following lawful bases:</p>
                  <div className="space-y-2 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Consent:</strong> Particularly for marketing communications, cookies, and tracking</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Contractual Necessity:</strong> To deliver requested services or enter into business agreements</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Legitimate Interests:</strong> Improving services, maintaining security, operational analytics</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Legal Obligation:</strong> Compliance with statutory requirements, audit, or regulatory disclosures</p>
                    </div>
                  </div>
                </section>

                <section id="collection" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">6</span>
                    <span className="leading-tight">Collection Methods</span>
                  </h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">We collect data through:</p>
                  <div className="space-y-2 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">Forms, resumes, and direct inquiries submitted via our website</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">Cookies, analytics tools, and web beacons (with consent where required)</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">Communications via email, chat, or phone</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">Business meetings and networking events</p>
                    </div>
                  </div>
                </section>

                <section id="sharing" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">7</span>
                    <span className="leading-tight">Data Sharing & Transfers</span>
                  </h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">We may share your personal data with:</p>
                  <div className="space-y-2 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Service Providers & Partners:</strong> Third-party vendors (e.g., cloud hosting, analytics, IT support) under strict contractual obligations</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Legal Authorities:</strong> When required by law, regulation, or in response to lawful requests</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Business Transactions:</strong> In case of merger, acquisition, or sale, provided safeguards are in place</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Cross-border transfers:</strong> Where data is transferred internationally, we ensure appropriate safeguards to protect your data</p>
                    </div>
                  </div>
                </section>

                <section id="retention" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">8</span>
                    <span className="leading-tight">Data Retention</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy 
                    or to comply with applicable legal and regulatory requirements. Data that is no longer required will be 
                    securely deleted or anonymized.
                  </p>
                </section>

                <section id="rights" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">9</span>
                    <span className="leading-tight">Your Rights</span>
                  </h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">Depending on your jurisdiction, you may exercise the following rights:</p>
                  <div className="space-y-2 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Right to access:</strong> Your personal data</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Right to correction:</strong> Update inaccurate or incomplete data</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Right to erasure:</strong> Delete your personal data (subject to legal or contractual obligations)</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Right to withdraw consent:</strong> At any point (for consent-based processing)</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Right to restrict or object:</strong> To processing in certain cases</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700"><strong>Right to data portability:</strong> Transfer your data to another service provider</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3 sm:mt-4 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    You may exercise these rights by contacting us at <a href="mailto:info@prachha.tech" className="text-red-600 hover:text-red-700 font-semibold">info@prachha.tech</a>
                  </p>
                </section>

                <section id="cookies" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">10</span>
                    <span className="leading-tight">Cookies & Tracking Technologies</span>
                  </h2>
                  <p className="text-gray-700 mb-3 sm:mb-4 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">Our website uses cookies and similar technologies to:</p>
                  <div className="space-y-2 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">Ensure secure and reliable access</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">Monitor system performance and optimize functionality</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">Analyze website usage and engagement (subject to consent where legally required)</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700">Remember your preferences and settings</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3 sm:mt-4 ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    You can manage your cookie preferences through your browser settings.
                  </p>
                </section>

                <section id="security" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">11</span>
                    <span className="leading-tight">Data Security</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    We adopt industry best practices to ensure data confidentiality, integrity, and availability. 
                    Our approach includes encryption, secure data storage, regular risk assessments, access controls, 
                    and continuous monitoring to protect your personal information from unauthorized access, 
                    alteration, disclosure, or destruction.
                  </p>
                </section>

                <section id="links" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">12</span>
                    <span className="leading-tight">Links to Other Sites</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    Our website may contain links to third-party websites. We are not responsible for the privacy 
                    practices of these external sites. We encourage you to review the privacy policies of any 
                    third-party sites you visit.
                  </p>
                </section>

                <section id="changes" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">13</span>
                    <span className="leading-tight">Changes to This Privacy Policy</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed ml-2 sm:ml-10 max-w-full sm:max-w-3xl text-sm sm:text-base">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new Privacy Policy on this page. You are advised to review this Privacy Policy 
                    periodically for any changes.
                  </p>
                </section>

                <section id="contact" className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-red-600 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-medium flex-shrink-0">14</span>
                    <span className="leading-tight">Contact Us</span>
                  </h2>
                  <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 ml-0 sm:ml-10 max-w-full sm:max-w-3xl">
                    <p className="text-gray-700 mb-3 sm:mb-4 font-medium text-sm sm:text-base">If you have any questions about this Privacy Policy or your data protection rights, please contact us:</p>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-red-600 text-sm sm:text-base flex-shrink-0">📧</span>
                        <p className="text-gray-700 text-sm sm:text-base"><strong>Email:</strong> <a href="mailto:info@prachha.tech" target='_blank' className="text-red-600 hover:text-red-700 font-semibold">info@prachha.tech</a></p>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-red-600 text-sm sm:text-base flex-shrink-0">📱</span>
                        <p className="text-gray-700 text-sm sm:text-base"><strong>Phone:</strong> <a href="tel:+919558026870" className="text-red-600 hover:text-red-700 font-semibold">+91-955-802-6870</a></p>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="text-red-600 text-sm sm:text-base flex-shrink-0 mt-0.5">📍</span>
                        <p className="text-gray-700 text-sm sm:text-base"><strong>Address:</strong> PRACHHA HOUSE, 3rd Floor, Beside Diamond City hotel, Bamanji Sheri, Rughnathpura Road, Lal Darwaja, Surat - 395003</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
