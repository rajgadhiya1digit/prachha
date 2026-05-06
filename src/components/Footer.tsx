import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
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
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16">
      
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className=" space-y-2">
            <div className="flex items-center gap-3">
              <img src={'/navbar/prachhalogo.png'} alt="Prachha Tech" className="h-12 w-auto rounded-md shadow-lg shadow-red-500/20" />
            </div>
            <p className="text-gray-400 leading-relaxed text-base font-semibold pb-3">
              Turning ideas into digital success. We deliver innovative technology solutions that 
              transform businesses and drive growth.
            </p>
            
            <div>
              <div className="group flex items-start gap-4 mb-4 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors text-[15px]">
                  PRACHHA HOUSE, 3rd Floor,<br />
                  Beside Diamond City hotel, Bamanji Sheri,<br />
                  Rughnathpura Road, Lal Darwaja, Surat - 395003
                </span>
              </div>
              
              <a href='tel:+919558026870' 
              className="group flex items-center gap-4 mb-4 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+91-955-802-6870</span>
              </a>
              
              <a href='mailto:info@prachha.tech' target='_blank'
              className="group flex items-center gap-4 pb-3 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">info@prachha.tech</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1"></div>
              <h3 className="text-white uppercase font-bold tracking-wider px-3 text-lg relative">
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-red-500/20 blur-xl -z-10"></div>
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1"></div>
            </div>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="group">
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1"></div>
              <h3 className="text-white uppercase font-bold tracking-wider px-3 text-lg relative">
                <span className="relative z-10">Industries</span>
                <div className="absolute inset-0 bg-red-500/20 blur-xl -z-10"></div>
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1"></div>
            </div>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index} className="group">
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1"></div>
              <h3 className="text-white uppercase font-bold tracking-wider px-3 text-lg relative">
                <span className="relative z-10">Company</span>
                <div className="absolute inset-0 bg-red-500/20 blur-xl -z-10"></div>
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1"></div>
            </div>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index} className="group">
                  <Link to={item.link} className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-400 flex items-center gap-2 font-semibold">
              <span>© 2026 Prachha Tech. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 font-semibold">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-red-400 transition-colors duration-300 hover:underline">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-sm text-gray-400 hover:text-red-400 transition-colors duration-300 hover:underline">Terms of Service</Link>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/prachhatech/" target="_blank" rel="noreferrer" className="group w-10 h-10 bg-gradient-to-br from-gray-700/80 to-gray-600/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-red-500/20 border border-gray-600/50">
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" aria-label="Linkedin"/>
              </a>
              <a href="https://www.instagram.com/prachhatech/" target="_blank" rel="noreferrer" className="group w-10 h-10 bg-gradient-to-br from-gray-700/80 to-gray-600/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-red-500/20 border border-gray-600/50">
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" aria-label="Instagram"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
