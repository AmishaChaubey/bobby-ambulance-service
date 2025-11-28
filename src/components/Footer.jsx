import React from 'react';
import { 
  FaPhoneAlt, FaAmbulance, FaMapMarkerAlt, FaEnvelope, 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, 
  FaClock, FaHeart, FaArrowUp, FaSnowflake, FaUserMd, 
  FaWhatsapp 
} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-700 relative overflow-hidden">

      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 py-3 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <FaAmbulance className="text-white text-xl mr-3" />
            <span className="text-white font-medium">24/7 Emergency Services Available</span>
          </div>
          <a
            href="tel:+919540455867"
            className="bg-white text-red-700 px-4 py-2 rounded-full font-bold flex items-center hover:bg-gray-100 transition-colors"
          >
            <FaPhoneAlt className="mr-2" />
            Call Now: (+91) 9540455867
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img className='h-15 object-contain' src='/bobby-logo.png' alt="Bobby Ambulance Services Logo" />
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Providing dignified ambulance and freezer box services with compassion, speed, and professionalism.
              Your trusted partner in critical moments.
            </p>

        
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-gray-900 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Our Services', link: '/services' },
                { name: 'Emergency Contact', link: '/contact' },
                { name: 'Blogs', link: '/blog' }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-600 hover:text-red-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-gray-900 relative pb-2">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { text: 'Emergency Ambulance', icon: <FaAmbulance className="mr-2" /> },
                { text: 'Dead Body Transportation', icon: <FaAmbulance className="mr-2" /> },
                { text: 'Freezer Box Services', icon: <FaSnowflake className="mr-2" /> },
                { text: 'Funeral Arrangements', icon: <FaHeart className="mr-2" /> }
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-red-500 transition-colors flex items-center"
                  >
                    <span className="text-red-500">{service.icon}</span> {service.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-gray-900 relative pb-2">
              Contact Information
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500"></span>
            </h4>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 text-lg mt-1" />
                <div className="text-gray-600">
                  <p>505, Gaur City Center,</p>
                  <p>Sec-4, Greater Noida, UP 201009</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-red-500 text-lg mt-1" />
                <div className="text-gray-600">
                  <a href="tel:+919540455867" className="hover:text-red-500">
                    (+91) 9540455867
                  </a>
                  <p className="flex items-center mt-1 hover:text-green-600"></p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="text-red-500 text-lg mt-1" />
                <a
                  href="mailto:bobbyambulance@gmail.com"
                  className="text-gray-600 hover:text-red-500"
                >
                  bobbyambulance@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FaClock className="text-red-500 text-lg mt-1" />
                <div className="text-gray-600">
                  <p>24/7 Emergency Service</p>
                  <p>Office: Open 24 hours</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Bobby Ambulance Services. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="text-gray-600 hover:text-red-500 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-600 hover:text-red-500 text-sm">
              Terms of Service
            </Link>
            <a
              href="https://deboxtechnology.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-500 text-sm"
            >
              Developed by Debox Technology
            </a>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 text-white rounded-full 
        flex items-center justify-center shadow-lg hover:bg-red-700 transition-all hover:scale-110"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
