import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Heart, Mail, MapPin } from 'lucide-react';

export default function FuneralNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // UPDATED formData: Added email
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // UPDATED EMAIL SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/vinay ambulance/backend/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          subject: `Service Request - ${formData.serviceType || "General Inquiry"}`,
          message:
            `New Service Request:\n\n` +
            `Name: ${formData.name}\n` +
            `Phone: ${formData.phone}\n` +
            `Email: ${formData.email}\n` +
            `Address: ${formData.address}\n` +
            `Service Type: ${formData.serviceType}\n\n` +
            `Message: ${formData.message}`,
        }),
      });

      const data = await res.json();
      console.log("Service modal response:", data);

      if (data.success) {
        alert("✅ Service request sent successfully! We will contact you shortly.");
        setFormData({ name: "", phone: "", email: "", address: "", serviceType: "", message: "" });
        setIsModalOpen(false);
      } else {
        alert("❌ " + data.message);
      }

    } catch (error) {
      console.error("Service form submission error:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    }
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-md border-b border-gray-200">
      {/* Top Info Bar */}
      <div className="bg-red-700 text-white text-xs border-b border-gray-300 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span className="text-xs sm:text-sm">+91 9540455867</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span className="text-xs sm:text-sm">bobbyambulance@gmail.com</span>
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

          <Link to="/" className="flex items-center gap-2">
            {/* Fixed logo container with proper Tailwind classes */}
            <div className="w-32 h-16 sm:w-48 sm:h-20 overflow-hidden">
              <img src="/bobby-logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link to="/" onClick={() => setActiveLink('home')}
              className={`text-sm font-medium ${activeLink === 'home' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
              Home
            </Link>

            <Link to="/about" onClick={() => setActiveLink('about')}
              className={`text-sm font-medium ${activeLink === 'about' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
              About Us
            </Link>

            <Link to="/services" onClick={() => setActiveLink('services')}
              className={`text-sm font-medium ${activeLink === 'services' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
              Services
            </Link>

            <Link to="/blog" onClick={() => setActiveLink('blog')}
              className={`text-sm font-medium ${activeLink === 'blog' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
              Blog
            </Link>

            <Link to="/contact" onClick={() => setActiveLink('contact')}
              className={`text-sm font-medium ${activeLink === 'contact' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
              Contact
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-red-700 text-white px-3 sm:px-5 py-2 rounded-lg flex items-center gap-2 shadow-md text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4" /> <span className="hidden sm:inline">Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 p-1"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white transition-all duration-300 overflow-hidden border-b border-gray-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-gray-900 py-2">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-gray-900 py-2">About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-gray-900 py-2">Services</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-gray-900 py-2">Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-gray-900 py-2">Contact</Link>

          <button
            onClick={() => { setIsModalOpen(true); setIsOpen(false); }}
            className="w-full bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 shadow-md mt-4"
          >
            <Phone className="w-5 h-5" /> Book Now
          </button>
        </div>
      </div>

      {/* MODAL WITH SCROLLBAR REMOVED */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[95vh] flex flex-col">

            <div className="bg-red-700 text-white p-2 sm:p-4 rounded-t-lg flex justify-between items-center flex-shrink-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                <h3 className="text-base sm:text-lg font-semibold">Request Service</h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-white">
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            <div className="p-3 sm:p-6 space-y-3 sm:space-y-4 overflow-y-auto flex-grow">

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-700">Full Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-gray-700">Phone Number *</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-700">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-700">Address</label>
                <textarea
                  name="address"
                  rows={1}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm resize-none"
                />
              </div>

              {/* Service type */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-700">Service Type</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                >
                  <option value="">Select Service</option>
                  <option value="freezer">Freezer Box</option>
                  <option value="funeral">Funeral Arrangements</option>
                  <option value="cremation">Cremation Support</option>
                  <option value="transport">Transportation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-700">Additional Info</label>
                <textarea
                  name="message"
                  rows={1}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2 flex-shrink-0">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 border border-gray-300 py-2 rounded-md text-gray-700 bg-white"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  className="flex-1 py-2 rounded-md text-white bg-red-700 hover:bg-red-800"
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