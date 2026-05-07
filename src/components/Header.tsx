// import { useState } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { Button } from './ui/button';
// import { Link } from 'react-router-dom';
// import logo from '../assets/prachha-tech.jpeg'

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50">
//       {/* Announcement Bar */}
//       <div className="bg-[#FF0000] text-white py-2 px-4 text-center">
//         <p className="text-sm">
//           🎉 Limited Time Offer: Get 20% off on all Digital Transformation Services - Contact Us Today!
//         </p>
//       </div>

//       {/* Main Header */}
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-18">
//             {/* Logo */}
//             <div className="flex items-center">
//               <Link to="/">
//                 <img src={logo} alt="Prachha Tech" className="h-16 w-auto" />
//               </Link>
              
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center gap-8 text-sm font-[500]">
//               <Link to="/" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                 Home
//               </Link>
//               <Link
//                 to="/industries"
//                 className="text-gray-700 hover:text-[#FF0000] transition-colors flex items-center gap-1"
//               >
//                 Industries <ChevronDown className="w-4 h-4" />
//               </Link>
//               <Link to="/services" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                 Services
//               </Link>
//               <Link to="/projects" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                 Projects
//               </Link>
//               <Link to="/contact" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                 Contact
//               </Link>
//               <Link to="/about" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                 About Us
//               </Link>
//               <Link to="/blog" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                 Blog
//               </Link>
//               {/* <Button className="text-white bg-[#FF0000] hover:bg-[#CC0000]">
//                 Get Started
//               </Button> */}
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden text-gray-700"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <nav className="lg:hidden py-4 border-t">
//               <div className="flex flex-col space-y-4">
//                 <Link to="/" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                   Home
//                 </Link>
//                 <Link to="/industries" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                   Industries
//                 </Link>
//                 <Link to="/services" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                   Services
//                 </Link>
//                 <Link to="/projects" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                   Projects
//                 </Link>
//                 <Link to="/contact" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                   Contact
//                 </Link>
//                 <Link to="/about" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                   About Us
//                 </Link>
//                 <Link to="/blog" className="text-gray-700 hover:text-[#FF0000] transition-colors">
//                   Blog
//                 </Link>
//                 {/* <Button className=" bg-[#FF0000] hover:bg-[#CC0000] w-full">
//                   Get Started
//                 </Button> */}
//               </div>
//             </nav>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from 'lucide-react';
import { RiArrowRightSLine } from "react-icons/ri";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product", path: "/product" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];

const Header = () => {

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isProductActive = location.pathname.startsWith('/product');
  const isAboutActive = location.pathname.startsWith('/about') || location.pathname === '/career' || location.pathname === '/team';

  return (
    <header className="sticky top-0 left-0 w-full z-50">
      {/* Glass Navbar */}
      <div className=" bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">

          <div className="flex items-center shrink-0">
              <Link to="/">
               <img src={'/navbar/prachhalogo.png'} alt="Prachha Tech" className="h-12 sm:h-14 w-auto" loading="lazy" />
             </Link>
              
          </div>

          {/* Desktop Menu */}
           <nav className="hidden lg:flex items-center gap-4 lg:gap-6 font-medium text-gray-700 uppercase tracking-wide">

            <div className="relative group">

              <div onClick={()=>setOpen(!open)}
                className={`flex items-center gap-1 cursor-pointer hover:text-red-500 ${isProductActive ? 'text-red-500' : ''}`}>
                Product
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200 will-change-transform" />
              </div>

              {/* DROPDOWN */}
              <div className="absolute left-0 top-full text-sm hidden group-hover:block bg-white shadow-xl rounded-sm border w-56 overflow-hidden">

                <Link
                  to={'/product/one_store'}
                  className={`block px-4 py-2 hover:bg-red-50 hover:text-red-500 transition border-b-2 border-gray-200 ${isActive('/product/one_store') ? 'bg-red-50 text-red-500' : ''}`}
                >
                  One Store
                </Link>

                <Link
                  to={'/product/wherit'}
                  className={`block px-4 py-2 hover:bg-red-50 hover:text-red-500 transition border-b-2 border-gray-200 ${isActive('/product/wherit') ? 'bg-red-50 text-red-500' : ''}`}
                >
                  Wherit
                </Link>

              </div>
            </div>

            <Link to="/services" className={`hover:text-red-500 ${isActive('/services') ? 'text-red-500' : ''}`}>Services</Link>
            <Link to="/projects" className={`hover:text-red-500 ${isActive('/projects') ? 'text-red-500' : ''}`}>portfolio </Link>
            <Link to="/blog" className={`hover:text-red-500 ${isActive('/blog') ? 'text-red-500' : ''}`}>Blog</Link>
             <Link to="/contact" className={`hover:text-red-500 ${isActive('/contact') ? 'text-red-500' : ''}`}>Contact</Link>
            
            <div className="relative group">
              <div onClick={()=>setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1 cursor-pointer hover:text-red-500 ${isAboutActive ? 'text-red-500' : ''}`}>
                About
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200 will-change-transform" />
              </div>

              {/* ABOUT DROPDOWN */}
              <div className="absolute left-0 top-full text-sm hidden group-hover:block bg-white shadow-xl rounded-sm border w-48 overflow-hidden">
                <Link
                  to={'/about'}
                  className={`block px-4 py-2 hover:bg-red-50 hover:text-red-500 transition border-b-2 border-gray-200 ${isActive('/about') ? 'bg-red-50 text-red-500' : ''}`}
                >
                  About Us
                </Link>
                <Link
                  to={'/career'}
                  className={`block px-4 py-2 hover:bg-red-50 hover:text-red-500 transition border-b-2 border-gray-200 ${isActive('/career') ? 'bg-red-50 text-red-500' : ''}`}
                >
                  Career
                </Link>
                <Link
                  to={'/team'}
                  className={`block px-4 py-2 hover:bg-red-50 hover:text-red-500 transition ${isActive('/team') ? 'bg-red-50 text-red-500' : ''}`}
                >
                  Team
                </Link>
              </div>
            </div>

            <Link to="/contact">
              <button className="flex items-center bg-gradient-to-r from-red-600  to-orange-500  hover:bg-orange-600 rounded-full pl-7 pr-1.5 py-1.5  transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                <span className="text-white font-bold text-sm tracking-wide mr-4">Get Started</span>
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                  <RiArrowRightSLine />
                </span>
              </button>
            </Link>

          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-2xl text-gray-800"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-0 right-0 w-full h-full bg-white z-[999] p-6 will-change-transform"
          >

            {/* HEADER */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setMenuOpen(false)}>
                <FiX className="text-2xl" />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-6 text-lg font-medium">

              <Link onClick={() => setMenuOpen(false)} to="/" className={isActive('/') ? 'text-red-500' : ''}>Home</Link>
              <Link onClick={() => setMenuOpen(false)} to="/services" className={isActive('/services') ? 'text-red-500' : ''}>Services</Link>

              {/* PRODUCT MOBILE DROPDOWN */}
              <div>
                <button
                  onClick={() => setProductOpen(!productOpen)}
                  className="flex items-center justify-between w-full"
                >
                  Product
                  <ChevronDown
                    className={`transition ${productOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {productOpen && (
                  <div className="mt-3 ml-3 flex flex-col gap-3 text-gray-600">
                    <Link onClick={() => setMenuOpen(false)} to={"/product/one_store"} className={isActive('/product/one_store') ? 'text-red-500' : ''}>
                      One Store
                    </Link>
                    <Link onClick={() => setMenuOpen(false)} to={"/product/wherit"} className={isActive('/product/wherit') ? 'text-red-500' : ''}>
                      Wherit
                    </Link>
                  </div>
                )}
              </div>

              <Link onClick={() => setMenuOpen(false)} to="/projects" className={isActive('/projects') ? 'text-red-500' : ''}>Portfolio</Link> 
              <Link onClick={() => setMenuOpen(false)} to="/blog" className={isActive('/blog') ? 'text-red-500' : ''}>Blog</Link>
              
              {/* ABOUT MOBILE DROPDOWN */}
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center justify-between w-full"
                >
                  About
                  <ChevronDown
                    className={`transition ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {aboutOpen && (
                  <div className="mt-3 ml-3 flex flex-col gap-3 text-gray-600">
                    <Link onClick={() => setMenuOpen(false)} to="/about" className={isActive('/about') ? 'text-red-500' : ''}>
                      About Us
                    </Link>
                    <Link onClick={() => setMenuOpen(false)} to="/career" className={isActive('/career') ? 'text-red-500' : ''}>
                      Career
                    </Link>
                    <Link onClick={() => setMenuOpen(false)} to="/team" className={isActive('/team') ? 'text-red-500' : ''}>
                      Team
                    </Link>
                  </div>
                )}
              </div>
              
              <Link onClick={() => setMenuOpen(false)} to="/contact" className={isActive('/contact') ? 'text-red-500' : ''}>Contact Us</Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}

export default Header;