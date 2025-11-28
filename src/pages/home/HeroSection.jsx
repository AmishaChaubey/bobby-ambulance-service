import { useState, useEffect } from "react";
import { Phone, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// Using more placeholder images for a better slideshow effect
const images = [
  "/Home-banner1.jpg", // Ambulance
  "/home-banner2.jpg", // Medical team
  "/banner6.png", // Helicopter
];

export default function ImprovedHeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Slightly longer interval for a more relaxed feel
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
      <section className="relative w-full min-h-screen mt-20 overflow-hidden bg-gray-900">
        {/* Background Image Slider */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out scale-110"
          style={{ backgroundImage: `url(${images[index]})` }}
        />

        {/* Animated Background Shapes for Depth */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
             Swift Response, 
              <br />
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                Compassionate Care
              </span>
            </h1>

            {/* Added Subheading for more context */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Your trusted partner in rapid, professional, and compassionate emergency medical services. Available 24/7, ready to respond.
            </p>

            {/* Trust Indicators */}
            <div className="flex justify-center gap-8 mb-10 text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="text-sm font-medium">24/7 Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Certified Professionals</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg shadow-2xl hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300">
                  Our Services
                </button>
              </Link>

              <Link to="/contact">
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-900 font-bold text-lg shadow-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Contact Us Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === index
                  ? "bg-white w-10 h-3"
                  : "bg-white/40 w-3 h-3 hover:bg-white/60"
              }`}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
}