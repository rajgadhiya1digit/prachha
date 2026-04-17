import React from 'react'
import golden_hero1 from "../assets/golden-hero-1.jpg"
import golden_hero2 from "../assets/golden-hero-2.jpg"
import golden_s1 from "../assets/golden-s1.png"
import golden_s2 from "../assets/golden-s2.png"
import golden_s3 from "../assets/golden-s3.png"
import golden_s4 from "../assets/golden-s4.png"
import golden_video from "../assets/344663aec6ba422e9789b455f676ccf1.mp4"
import ears_hero1 from "../assets/ears-hero-1.png"
import ears_hero2 from "../assets/ears-hero-2.png"
import ed_s1 from "../assets/ed-s1.png"
import ed_s2 from "../assets/ed-s2.png"
import ed_s3 from "../assets/ed-s3.png"
import ed_s4 from "../assets/ed-s4.png"
import ed_s5 from "../assets/ed-s5.png"
import { FiActivity, FiVideo, FiFileText } from "react-icons/fi";
import { FaChartLine, FaMoneyCheckAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

export const projectData = [
  {
    id: "1",
    category: "E-Commerce",
    title: "Golden Bird Jewels",
    image: '/projectimg/goldenbird/golden-brids.png',
    hero_images: ['/projectimg/goldenbird/golden-hero-1.jpg', 'projectimg/goldenbird/golden-hero-2.jpg'],
    description: "Golden Bird Jewels is a Shopify-based lab-grown diamond jewelry brand focused on the US market.",

    overview: [
      "Golden Bird Jewels is a premium jewelry brand specializing in exquisite engagement rings, diamond necklaces, and custom-designed jewelry. This project involved creating a luxury e-commerce platform that reflects the elegance of the brand while offering a seamless user experience. The focus was on high-quality visuals, intuitive navigation, and interactive features to showcase each piece of jewelry in its finest detail.",

      "Every design element was crafted to provide a seamless browsing experience, highlight premium jewelry pieces, and engage visitors through immersive visuals."
    ],

    purpose: {
      desc: "To create a premium online jewelry platform that reflects brand elegance and enhances customer experience.",
      points: [
        "Deliver a visually appealing and luxury-focused website",
        "Build trust and increase customer engagement"
      ]
    },

    scope: {
      desc: "Covers the design and development of a modern, responsive e-commerce jewelry website.",
      points: [
        "Develop user-friendly navigation with product filtering",
        "Integrate high-quality images, sliders, and responsive layouts"
      ]
    },

    objectives: {
      desc: "Focus on improving performance, usability, and overall shopping experience.",
      points: [
        "Ensure fast loading and smooth user interaction",
        "Enhance product discovery and mobile responsiveness"
      ]
    },

    gallery: [
      { type: "image", src: '/projectimg/goldenbird/golden-s1.png' },
      { type: "image", src: '/projectimg/goldenbird/golden-s2.png' },
      { type: "image", src: '/projectimg/goldenbird/golden-s3.png' },
      { type: "image", src: '/projectimg/goldenbird/golden-s4.png' },
      { type: "video", src: '/projectimg/goldenbird/344663aec6ba422e9789b455f676ccf1.mp4'},
    ],

    industry: "Luxury Jewelry",
    techStack: ["Shopify"],
    tags: ["Shopify"],
    status: "Active",
    timeline: "6 Months",
    demo_link:"https://www.goldenbirdjewels.com/",

    features: [
      {
        title: "Real-time Vitals",
        desc: "Track patient vitals with AI-powered alerts.",
        icon: FiActivity,
      },
      {
        title: "Encrypted Consults",
        desc: "Secure video consultations with doctors.",
        icon: FiVideo,
      },
      {
        title: "Smart Prescriptions",
        desc: "Automated digital prescription system.",
        icon: FiFileText,
      },
    ],

    frontend: ["React 18", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express", "Redis"],

    impact: {
      avialable: "24/7",
      latency: 1.5,
      efficiency: 40.2,
    },
  },

  {
    id: "2",
    category: "E-Commerce",
    title: "Ouros Jewels",
    image: '/projectimg/ouros/ouros.png',
    hero_images: ['/projectimg/ouros/ouros-hero1.png', '/projectimg/ouros/ouros-hero2.png'],
    description:
      "Ouros Jewels is a luxury lab-grown diamond jewelry brand offering custom and premium designs.",

    overview: [
      "FinicalHub was designed as a comprehensive financial management ecosystem aimed at simplifying complex business transactions and analytics into a unified digital experience. The platform addresses the growing need for real-time financial visibility, enabling businesses to monitor cash flow, track expenses, and manage transactions with precision and ease. By combining intuitive UI with powerful backend processing, FinicalHub empowers organizations to make faster and more informed financial decisions.",
      "Focus was on real-time analytics and secure transaction processing.One of the primary challenges in building FinicalHub was ensuring high-level security while maintaining seamless performance across large volumes of transactional data. To tackle this, we implemented a scalable architecture supported by optimized database queries and secure API integrations. ",
    ],

    purpose: {
      desc: "To build a modern and conversion-focused jewelry website that highlights product quality and enhances user trust.",
      points: [
        "Create a visually appealing platform for showcasing fine jewelry",
        "Improve customer trust and increase online sales"
      ]
    },

    scope: {
      desc: "Includes the design and development of a scalable, responsive e-commerce platform.",
      points: [
        "Develop intuitive navigation and advanced product filtering",
        "Implement responsive layouts with high-quality product visuals"
      ]
    },

    objectives: {
      desc: "Focus on delivering a seamless, high-performing e-commerce experience that enhances usability and drives conversions.",
      points: [
        "Optimize website speed and ensure smooth user interactions",
        "Enhance product discovery with intuitive navigation and mobile responsiveness"
      ]

    },

    gallery: [
      { type: "image", src: '/projectimg/ouros/ouros-s1.png' },
      { type: "image", src: '/projectimg/ouros/ouros-s2.png' },
      { type: "image", src:'/projectimg/ouros/ouros-s3.png' },
      { type: "image", src: '/projectimg/ouros/ouros-s4.png'},
      { type: "video", src: '/projectimg/ouros/838c73a3a83e453f849373f9eaab2b97.HD-720p-4.5Mbps-49467533.mp4' },
    ],


    industry: "Luxury Jewelry",
    techStack: ["Shopify"],
    tags: ["Shopify", "Shopify Plugins"],
    status: "Completed",
    timeline: "4 Months",
    demo_link:"https://www.ourosjewels.com/",

    features: [
      {
        title: "Live Transactions",
        desc: "Track all payments in real-time.",
        icon: FaMoneyCheckAlt,
      },
      {
        title: "Analytics Dashboard",
        desc: "Detailed financial insights and reports.",
        icon: FaChartLine,
      },
      {
        title: "Fraud Detection",
        desc: "AI-based suspicious activity detection.",
        icon: MdSecurity,
      },
    ],

    frontend: ["React", "Tailwind CSS"],
    backend: ["Node.js", "MongoDB"],

    impact: {
      avialable: "24/7",
      latency: 2.5,
      efficiency: 45.5,
    },
  },

  {
    id: "3",
    category: "E-Commerce",
    title: "Ears Decore",
    image: '/projectimg/earsdecore/ears-decore.png',
    hero_images: ['/projectimg/earsdecore/ears-hero-1.png', 'public/projectimg/earsdecore/ears-hero-2.png'],
    description:
      "EarsDecor is a UK-based custom jewelry brand specializing in trendy, high-quality earrings designed for modern style lovers",

    industry: "Luxury Jewelry",
    techStack: ["Shopify", ],
    tags: ["React", "Mobile App"],
    status: "Active",
    timeline: "6 Months",
    demo_link:"https://earsdecor.com/",

    overview: [
      "EarsDecor is a UK-based jewelry brand focused on creating trendy, customizable earrings for modern consumers who value style, individuality, and everyday elegance. The brand specializes in a wide range of designs—from minimal everyday studs to bold statement pieces—crafted to suit both casual wear and special occasions.",

      "With a strong emphasis on personalization and current fashion trends, EarsDecor allows customers to express their unique identity through thoughtfully designed jewelry. Each piece is created with attention to detail, comfort, and quality, making it ideal for daily wear as well as meaningful gifting.",
    ],

    purpose: {
      desc: "To build a trend-driven, visually engaging e-commerce platform that highlights unique earring designs while connecting with modern, style-conscious audiences.",
      points: [
        "Showcase aesthetic, customizable earrings for Gen Z and young fashion buyers",
        "Build strong brand identity and trust through premium visuals and storytelling"
      ]
    },

    scope: {
      desc: "Includes the design and development of a scalable, mobile-first e-commerce experience focused on seamless browsing and personalization.",
      points: [
        "Develop smooth navigation with category-based and style-based filtering (aesthetic, trendy, minimal, etc.)",
        "Create a responsive UI optimized for mobile shopping and social-driven traffic"
      ]
    },

    objectives: {
      desc: "Focused on delivering a fast, intuitive, and visually immersive shopping experience that increases engagement and conversions.",
      points: [
        "Enhance product discovery with trend-based collections and easy filtering",
        "Improve conversion rates through fast performance, trust signals, and user-friendly checkout flow"
      ]
    },

    gallery: [
      { type: "image", src: '/projectimg/earsdecore/ed-s1.png' },
      { type: "image", src: '/projectimg/earsdecore/ed-s2.png' },
      { type: "image", src: '/projectimg/earsdecore/ed-s3.png' },
      { type: "image", src: '/projectimg/earsdecore/ed-s4.png' },
      { type: "image", src: '/projectimg/earsdecore/ed-s5.png' },
    ],

    frontend: ["React", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Stripe API"],

    impact: {
      avialable: "24/7",
      latency: 3,
      efficiency: 47.5,
    },
  },
];
