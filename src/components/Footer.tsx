import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/prachha-tech.jpeg'
import { Link } from 'react-router-dom';


export function Footer() {
  const services = [
    'Custom Software Development',
    'Enterprise Mobility Solutions',
    'Cloud Solutions',
    'AI & Machine Learning',
    'Cybersecurity',
    'UI/UX Design',
  ];

  const industries = [
    'Healthcare',
    'Finance & Banking',
    'E-Commerce',
    'Education',
    'Real Estate',
    'Logistics',
  ];

  const company = [
    {link:'/about' , title:'About Us'},
    {link:'/team' , title:'Our Team'},
    {link:'/careers' , title:'Careers'},
    {link:'/projects' , title:'Portfolio'},
    {link:'/blog' , title:'Blog'},
    {link:'/contact' , title:'Contact'},
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src={'/navbar/prachha-navlogo.jpg'} alt="Prachha Tech" className="h-12 w-auto mb-6 rounded-md" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Turning ideas into digital success. We deliver innovative technology solutions that 
              transform businesses and drive growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF0000] flex-shrink-0 mt-1" />
                <span className="text-sm">PRACHHA HOUSE, 3rd Floor,
                Beside Diamond City hotel, Bamanji Sheri,
                Rughnathpura Road, Lal Darwaja, Surat - 395003</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF0000] flex-shrink-0" />
                <span className="text-sm">+91-955-802-6870</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF0000] flex-shrink-0" />
                <span className="text-sm">info@prachha.tech</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-[#FF0000] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-[#FF0000] transition-colors">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="text-sm hover:text-[#FF0000] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get the latest updates on technology trends and our services</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF0000]"
              />
              <button className="bg-[#FF0000] hover:bg-[#CC0000] text-white px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-400">
              © 2026 Prachha Tech. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm hover:text-[#FF0000] transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-[#FF0000] transition-colors">Terms of Service</a>
              <a href="#" className="text-sm hover:text-[#FF0000] transition-colors">Cookie Policy</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF0000] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF0000] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/prachhatech/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF0000] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/prachhatech/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF0000] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
