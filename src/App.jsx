import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSecttion from "./pages/home/HeroSection";
import WelcomeSection from "./pages/home/Welcome";
import StatsBar from "./pages/home/Stats";
import WhyChooseUs from "./pages/home/WhyChooseUs";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ServicesPage from "./pages/Services";
import CallToAction from "./pages/home/Cta";
import Testimonials from "./pages/home/Testimonial";
import BlogList from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/BlogDetails";
import ServiceSection from "./pages/home/ServiceSection";

import Call from './components/Call'
import CallIcon from "./components/Call";
import WhatsAppIcon from "./pages/home/Icon";


const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="w-full min-h-screen flex flex-col">
                <HeroSecttion />
                {/* <StatsBar /> */}
                <WelcomeSection />
               
                <WhyChooseUs />
                 <CallToAction />
                <ServiceSection />
                <Testimonials />
              </div>
            }
          />

          {/* Other Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <CallIcon/>
<WhatsAppIcon/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
