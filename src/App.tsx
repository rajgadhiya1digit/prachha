import { Routes, Route } from 'react-router-dom';
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
import UserDetails from './pages/CeoProfile';
import CeoProfile from './pages/CeoProfile';
import CtoProfile from './pages/CtoProfile';
import ServicesPage from './pages/ServicesPage';
import ContactusPage from './pages/ContactusPage';
import InqueryPage from './pages/InqueryPage';
import AboutusPage from './pages/AboutusPage';
import BlogPage from './pages/BlogPage';
import ScrollToTop from './components/ScrollToTop';
import PrachhaTechClient from './pages/products/One_store';
import One_store from './pages/products/One_store';
import Wherit from './pages/products/Wherit';
import { Hero } from './components/Hero';
import Homehero from './components/Homehero';
import BlogDetailPage from './pages/BlogDetailsPage';
import ProjectPage from './pages/ProjectPage';

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
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/contact" element={<ContactusPage />} />
        <Route path="/inquery" element={<InqueryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog_details/:id" element={<BlogDetailPage />} />

        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        <Route path="/team/ceo/vijay-sarkheliya" element={<CeoProfile />} />
        <Route path="/team/cto/hitesh-sarkheliya" element={<CtoProfile />} />

        <Route path="/product/one_store" element={<One_store />} />
        <Route path="/product/wherit" element={<Wherit />} />


      </Routes>
      <Footer />
      </>
    // </div>
  );
}
