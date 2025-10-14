import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const testimonials = [
    {
      name: "RAJESH AMBULANCE DRIVER",
      text: "Working with Pari Ambulance has been a rewarding experience. The team values patient care, teamwork, and professionalism. Our goal is to provide safe, prompt, and reliable service every time.",
    },
    {
      name: "GAURAV SINGH",
      text: "Pari Ambulance handled my father's emergency transport efficiently. The staff was attentive, professional, and followed all necessary safety measures. Their service truly eased our stress during a critical time.",
    },
    {
      name: "ABBAS RAMPURAWALA",
      text: "I am grateful to Pari Ambulance for their prompt intercity service. The drivers and medical team were courteous and professional. They ensured smooth and safe transport with excellent care throughout.",
    },
    {
      name: "PRIYA SHARMA",
      text: "During my mother's cardiac emergency, Pari Ambulance arrived quickly and handled everything professionally. Their skilled paramedics and swift response ensured she received timely care and support.",
    },
    {
      name: "DR. VIKRAM PATEL",
      text: "Pari Ambulance stands out for its skilled medical team and advanced equipment. I recommend their services to anyone needing reliable and professional medical transport, ensuring patient safety always.",
    },
    {
      name: "ANJALI MEHTA",
      text: "Pari Ambulance made my father's inter-city transfer smooth and stress-free. The team provided continuous updates and compassionate care, demonstrating professionalism and dedication at every step.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    return Array.from({ length: cardsPerView }, (_, i) =>
      testimonials[(currentIndex + i) % testimonials.length]
    );
  };

  // Responsive logic
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 px-3 sm:px-6 lg:px-8 overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-red-800 mb-10 sm:mb-16 font-serif tracking-wide">
          TESTIMONIALS
        </h1>

        <div className="relative flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-[-10px] sm:left-[-20px] lg:left-[-35px] top-1/2 -translate-y-1/2 z-10 bg-white/90 border border-red-300 text-red-800 rounded-full p-1.5 sm:p-2 md:p-3 shadow-md hover:bg-red-50 hover:scale-105 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-10px] sm:right-[-20px] lg:right-[-35px] top-1/2 -translate-y-1/2 z-10 bg-white/90 border border-red-300 text-red-800 rounded-full p-1.5 sm:p-2 md:p-3 shadow-md hover:bg-red-50 hover:scale-105 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Testimonials Grid */}
          <div
            className={`grid transition-all duration-500 ${
              cardsPerView === 1
                ? "grid-cols-1"
                : cardsPerView === 2
                ? "grid-cols-2 gap-6 sm:gap-8"
                : "grid-cols-3 gap-6 sm:gap-8"
            } px-0 sm:px-4`}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className={`relative ${
                  index === 1 && cardsPerView > 1 ? "sm:-mt-6 lg:-mt-8" : ""
                }`}
              >
                <div
                  className={`${
                    index === 1 && cardsPerView > 1
                      ? "bg-red-800 text-white"
                      : "bg-white text-gray-800"
                  } rounded-lg shadow-xl p-5 sm:p-7 min-h-[150px] flex flex-col justify-between transition-all duration-300`}
                >
                  <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {testimonial.text}
                  </p>
                  <p className="font-bold text-sm sm:text-base tracking-wide">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-10 sm:mt-12 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-red-800 w-8"
                  : "bg-red-300 hover:bg-red-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
