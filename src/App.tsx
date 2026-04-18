import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import  Header  from './components/Header';
import { AIBanner } from './components/AIBanner';
import { Industries } from './components/Industries';
import { Clients } from './components/Clients';
import { Services } from './components/Services';
import { DevelopmentProcess } from './components/DevelopmentProcess';
import { Projects } from './components/Projects';
import { WhyChoose } from './components/WhyChoose';
import { AboutUs } from './components/AboutUs';
import { Blog } from './components/Blog';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ProjectDetails } from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';
import { Hero } from './components/Hero';
import Homehero from './components/Homehero';

// Lazy load route components
const CeoProfile = lazy(() => import('./pages/CeoProfile'));
const CtoProfile = lazy(() => import('./pages/CtoProfile'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactusPage = lazy(() => import('./pages/ContactusPage'));
const InqueryPage = lazy(() => import('./pages/InqueryPage'));
const AboutusPage = lazy(() => import('./pages/AboutusPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const One_store = lazy(() => import('./pages/products/One_store'));
const Wherit = lazy(() => import('./pages/products/Wherit'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailsPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

export default function App() {
  return (
    // <div className="min-h-screen pt-[50px]">
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Homehero />
            {/* <AIBanner /> */}
            <Industries />
            <Clients />
            <Services />
            <DevelopmentProcess />
            <Projects />
            <WhyChoose />
            <AboutUs />
            <Blog />
            <CTA />
          </>
        } />
        <Route path="/industries" element={<Industries />} />
        <Route path="/services" element={<Suspense fallback={<div>Loading...</div>}><ServicesPage /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><AboutusPage /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><ContactusPage /></Suspense>} />
        <Route path="/inquery" element={<Suspense fallback={<div>Loading...</div>}><InqueryPage /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<div>Loading...</div>}><BlogPage /></Suspense>} />
        <Route path="/blog_details/:id" element={<Suspense fallback={<div>Loading...</div>}><BlogDetailPage /></Suspense>} />

        <Route path="/projects" element={<Suspense fallback={<div>Loading...</div>}><ProjectPage /></Suspense>} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        <Route path="/team/ceo/vijay-sarkheliya" element={<Suspense fallback={<div>Loading...</div>}><CeoProfile /></Suspense>} />
        <Route path="/team/cto/hitesh-sarkheliya" element={<Suspense fallback={<div>Loading...</div>}><CtoProfile /></Suspense>} />

        <Route path="/product/one_store" element={<Suspense fallback={<div>Loading...</div>}><One_store /></Suspense>} />
        <Route path="/product/wherit" element={<Suspense fallback={<div>Loading...</div>}><Wherit /></Suspense>} />


      </Routes>
      <Footer />
      </>
    // </div>
  );
}
