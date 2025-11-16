import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Heart, Mail, MapPin } from 'lucide-react';

export default function FuneralNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    serviceType: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Service request:', formData);
    alert('Thank you for contacting us. We will reach out to you shortly.');
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', address: '', serviceType: '', message: '' });
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-md border-b border-gray-200">
      {/* Top Info Bar - Hidden on small devices */}
      <div className="bg-gray-800 text-white text-xs border-b border-gray-300 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span className="text-xs sm:text-sm">+91 9311974035</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span className="text-xs sm:text-sm">noidafreezerbox137@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="text-xs sm:text-sm">Available 24/7</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - Fixed sizing */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-32 h-12 sm:w-48 sm:h-16 overflow-hidden">
              <img
                src="/logo-am1.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link
              to="/"
              onClick={() => setActiveLink('home')}
              className={`text-sm font-medium transition-all duration-200 ${activeLink === 'home' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setActiveLink('about')}
              className={`text-sm font-medium transition-all duration-200 ${activeLink === 'about' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              onClick={() => setActiveLink('services')}
              className={`text-sm font-medium transition-all duration-200 ${activeLink === 'services' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Services
            </Link>
            <Link
              to="/blog"
              onClick={() => setActiveLink('blog')}
              className={`text-sm font-medium transition-all duration-200 ${activeLink === 'blog' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setActiveLink('contact')}
              className={`text-sm font-medium transition-all duration-200 ${activeLink === 'contact' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Contact
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-700 text-white px-3 sm:px-5 py-2 rounded-md font-medium hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 shadow-md text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden border-b border-gray-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">Services</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">Contact</Link>

          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsOpen(false);
            }}
            className="w-full bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md mt-4"
          >
            <Phone className="w-5 h-5" />
            Book Now
          </button>
        </div>
      </div>

      {/* Contact Modal - Compressed for Small Devices */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-2 sm:p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg my-2 sm:my-4 mx-2 sm:mx-4">
            {/* Header - Compressed on mobile */}
            <div className="bg-gray-700 text-white p-2 sm:p-4 rounded-t-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h3 className="text-base sm:text-lg font-semibold">Request Service</h3>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>

            {/* Form Content - Compressed spacing on mobile */}
            <div className="p-3 sm:p-6 space-y-2.5 sm:space-y-4">
              {/* Name and Phone in one row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1.5 sm:py-2 px-2 sm:px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md py-1.5 sm:py-2 px-2 sm:px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
              </div>

              {/* Address - Reduced rows on mobile */}
              <div>
                <label htmlFor="address" className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">Address</label>
                <textarea
                  id="address"
                  name="address"
                  rows={1}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md py-1.5 sm:py-2 px-2 sm:px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md py-1.5 sm:py-2 px-2 sm:px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="">Select a service</option>
                  <option value="freezer">Freezer Box</option>
                  <option value="funeral">Funeral Arrangements</option>
                  <option value="cremation">Cremation Support</option>
                  <option value="transport">Transportation</option>
                </select>
              </div>

              {/* Additional Information - Reduced rows on mobile */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  rows={1}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any specific requirements..."
                  className="w-full border border-gray-300 rounded-md py-1.5 sm:py-2 px-2 sm:px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
                />
              </div>

              {/* Action Buttons - Compressed on mobile */}
              <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 font-medium text-sm transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-white bg-gray-700 hover:bg-gray-800 font-medium text-sm transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}