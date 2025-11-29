import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "/Home-banner1.jpg",
  "/home-banner2.jpg",
  "/banner6.png",
];

export default function ImprovedHeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }

        @media (max-width: 640px) {
          .hide-mobile-shapes {
            display: none !important;
          }
        }
      `}</style>

      <section className="relative w-full 
        min-h-[60vh]       /* Mobile small height */
        sm:min-h-[70vh]    /* Tablets */
        lg:min-h-[90vh]    /* Desktop slightly shorter */
        mt-16 sm:mt-20 overflow-hidden bg-gray-900">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out 
          scale-105 sm:scale-110"
          style={{ backgroundImage: `url(${images[index]})` }}
        />

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden hide-mobile-shapes">
          <div className="absolute -top-40 -right-40 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center 
          min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh] 
          px-4 sm:px-6 lg:px-10 text-center">

          <div className="max-w-3xl animate-fade-in-up">

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold mb-5 sm:mb-6 leading-tight text-white px-2">
              Swift Response, 
              <br />
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                Compassionate Care
              </span>
            </h1>

            {/* Sub text */}
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
              Fast, reliable and trusted emergency medical services — available 24/7 for your safety.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full px-2">

              <Link to="/services" className="w-full sm:w-auto flex justify-center">
                <button
                  className="
                    w-32 sm:w-40 lg:w-auto
                    px-3 py-2
                    text-xs sm:text-sm lg:text-lg
                    rounded-lg
                    bg-gradient-to-r from-red-600 to-red-700 text-white font-bold
                    shadow-xl hover:from-red-700 hover:to-red-800
                    transform hover:scale-[1.03] transition-all duration-300
                  "
                >
                  Our Services
                </button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto flex justify-center">
                <button
                  className="
                    w-32 sm:w-40 lg:w-auto
                    px-3 py-2
                    text-xs sm:text-sm lg:text-lg
                    rounded-lg
                    bg-white text-gray-900 font-bold shadow-xl
                    hover:bg-gray-100 transform hover:scale-[1.03] transition-all duration-300
                    flex items-center justify-center gap-1 sm:gap-2
                  "
                >
                  <Phone className="w-3 h-3 sm:w-5 sm:h-5" />
                  Contact Us
                </button>
              </Link>

            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === index
                  ? "bg-white w-6 sm:w-8 h-2 sm:h-3"
                  : "bg-white/40 w-2 sm:w-3 h-2 sm:h-3 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

      </section>
    </>
  );
}
