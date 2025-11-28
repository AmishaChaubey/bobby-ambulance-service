import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ChevronDown, Send, User, MessageSquare, PhoneCall } from 'lucide-react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => window.scrollTo(0, 0), []);

  const contactInfo = [
    {
      icon: PhoneCall,
      title: '24/7 Support Line',
      detail: '+91 9540455867',
      subdDetail: '',
      color: 'from-red-700 to-red-800'
    },
    {
      icon: Mail,
      title: 'Email Support',
      detail: 'bobbyambulance@gmail.com',
      subdDetail: '',
      color: 'from-red-700 to-red-800'
    },
    {
      icon: MapPin,
      title: 'Our Location',
      detail: '505, Gaur City Center, Sector 4, Greater Noida, 201009',
      subdDetail: '',
      color: 'from-red-700 to-red-800'
    }
  ];

  const faqs = [
    { question: 'What freezer box sizes do you offer?', answer: 'We provide multiple freezer box sizes to accommodate different needs - from compact 4ft boxes for home use to larger 6ft and 7ft commercial-grade units.' },
    { question: 'How quickly can you deliver a freezer box?', answer: 'We offer same-day delivery across Noida, Greater Noida, and Delhi NCR. Emergency requests are prioritized.' },
    { question: 'What is included in the rental service?', answer: 'Our rental includes delivery, installation, temperature monitoring, and pickup with 24/7 support.' },
    { question: 'Do you serve areas outside Greater Noida?', answer: 'Yes, we serve Noida, Greater Noida, Ghaziabad, Delhi, Faridabad, and other NCR regions.' },
    { question: 'What temperature do the freezer boxes maintain?', answer: 'They maintain -10°C to -25°C with digital displays and alerts.' },
    { question: 'Are the freezer boxes regularly sanitized?', answer: 'Yes, sanitized with hospital-grade disinfectants before each use.' },
    { question: 'What payment methods do you accept?', answer: 'Cash, UPI, cards, and bank transfers.' },
    { question: 'Is there a minimum rental period?', answer: 'Yes, rentals start from 24 hours with flexible durations.' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/bobby ambulance/backend/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Contact form response:", data);

      if (data.success) {
        alert("✅ Message sent successfully! We’ll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        alert("❌ Failed to send message: " + data.message);
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
    <section className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/banner8.png')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90"></div>
        </div>
        
 
        {/* Hero Content */}
        <div className="relative h-full flex items-center text-left px-6">
          <div className="max-w-5xl mt-10">
         
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
              Contact Us for 
              <br />
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
             Immediate Support
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Professional ambulance services and freezer box rentals with rapid response and compassionate care
            </p>
       
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className={`group bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg p-8 hover:-translate-y-3 transition-all border border-gray-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{info.title}</h3>
                <p className="text-base font-semibold text-gray-800 mb-2">{info.detail}</p>
                <p className="text-sm text-gray-600">{info.subdDetail}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 border border-gray-100 transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">We'll respond within 24 hours</p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl" placeholder="Enter your name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl" placeholder="your.email@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Phone Number</label>
                <div className="relative">
                  <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl" placeholder="+91 9999999999" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Subject</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl" placeholder="What can we help you with?" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl resize-none" placeholder="Please describe your requirements..."></textarea>
                </div>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-red-700 to-red-800 text-white py-4 px-6 rounded-xl font-semibold hover:from-black hover:to-gray-900 transition-all flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          <div className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="p-6 bg-gradient-to-r from-red-700 to-red-800">
              <h3 className="text-2xl font-bold text-white mb-2">Visit Our Office</h3>
              <p className="text-gray-300 text-sm">Galaxy Diamond Plaza, Sector-4, Greater Noida</p>
            </div>
            <iframe title="Vinay Funeral & cremation service" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28021.382002794104!2d77.42547347946997!3d28.609592654146276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s505%2C%20Gaur%20City%20Center%2C%20Sector%204%2C%20Greater%20Noida%2C%20201009!5e0!3m2!1sen!2sin!4v1764335278324!5m2!1sen!2sin" className="w-full h-full grayscale hover:grayscale-0 transition-all"></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3f9ad1]  mb-4  font-serif">Frequently Asked <span className='text-red-700'>Questions</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to know about our freezer box rental services</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 50}ms` }}>
              <button className="w-full p-6 text-left flex justify-between items-start gap-4" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <h3 className="font-bold text-lg text-gray-900 flex-1">{faq.question}</h3>
                <ChevronDown className={`w-6 h-6 text-gray-800 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-6 pb-6 text-gray-700 transition-all overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}