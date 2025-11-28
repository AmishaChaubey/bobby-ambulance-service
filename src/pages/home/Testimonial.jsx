import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Heart, Shield, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  
  const testimonials = [
    {
      name: "DR. ANJALI SHARMA",
      text: "Their ambulance response time was exceptional during the critical emergency. The team was professional and handled the situation with utmost care.",
      rating: 5,
      role: "Medical Professional",
      service: "Ambulance Service",
      icon: <Clock className="w-5 h-5" />
    },
    {
      name: "VIKRAM MALHOTRA",
      text: "When we lost our father, their deadbody transportation service was respectful and prompt. They guided us through the entire process with compassion.",
      rating: 5,
      role: "Family Member",
      service: "Deadbody Transport",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      name: "MEERA PATEL",
      text: "The mortuary freezer box they provided was well-maintained and gave us peace of mind during our difficult time. Their team showed great empathy.",
      rating: 5,
      role: "Client",
      service: "Mortuary Service",
      icon: <Shield className="w-5 h-5" />
    },
    {
      name: "RAHUL VERMA",
      text: "Their ambulance service was available 24/7 when we needed it most. The paramedics were skilled and compassionate throughout the journey.",
      rating: 5,
      role: "Emergency Contact",
      service: "Ambulance Service",
      icon: <Clock className="w-5 h-5" />
    },
    {
      name: "SUNITA RAO",
      text: "The hearse vehicle was dignified and well-equipped. The staff handled all arrangements with sensitivity and respect for our traditions.",
      rating: 5,
      role: "Family Member",
      service: "Hearse Service",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      name: "DR. RAJEEV KHANNA",
      text: "As a healthcare professional, I'm impressed with their deadbody preservation standards. They maintain proper hygiene and protocols.",
      rating: 5,
      role: "Medical Professional",
      service: "Deadbody Preservation",
      icon: <Shield className="w-5 h-5" />
    }
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
      else setCardsPerView(2);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
       
          <h2 className="text-4xl font-bold text-[#3f9ad1]  mb-3">Client<span className="text-red-600"> Experiences</span> </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from those who have experienced our compassionate care during critical moments
          </p>
        </div>

        <div className="relative">
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 -translate-x-3 md:-translate-x-6"
          >
            <ChevronLeft className="w-6 h-6 text-red-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 translate-x-3 md:translate-x-6"
          >
            <ChevronRight className="w-6 h-6 text-red-600" />
          </button>

          {/* Testimonials Cards */}
          <div className="grid md:grid-cols-2 gap-6 px-8 md:px-16">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Service Badge */}
                <div className="absolute top-0 right-0 bg-[#3f9ad1] text-white text-xs px-3 py-1 rounded-bl-lg flex items-center gap-1">
                  {testimonial.icon}
                  {testimonial.service}
                </div>
                
                {/* Avatar and info */}
                <div className="flex items-start mb-4 relative z-10">
                  <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 font-bold mr-3 flex-shrink-0 border-2 border-[#3f9ad1]">
                    {getInitials(testimonial.name)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    {/* Rating stars */}
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Hover effect decoration */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-red-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need our services? We're here for you 24/7</p>
          <div className="inline-flex items-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
              Emergency: +91 9540455867
            </button>
        <Link to='/contact'>   <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-full transition-colors duration-300">
              Contact Us
            </button></Link> 
          </div>
        </div>
      </div>
    </div>
  );
}