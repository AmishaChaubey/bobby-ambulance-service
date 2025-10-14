// Home Services with Animated Hover Design
import React, { useState } from "react";
import { HeartPulse, Clock, Stethoscope, PhoneCall } from "lucide-react";

const ServiceSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      icon: HeartPulse,
      title: "Emergency Ambulance",
      description:
        "Fast and reliable emergency ambulance service equipped with life-saving equipment and trained paramedics to respond anytime, anywhere.",
    },
    {
      icon: Stethoscope,
      title: "ICU & Cardiac Ambulance",
      description:
        "Fully equipped ICU and cardiac care ambulances with ventilators, defibrillators, and oxygen support for critical patients.",
    },
    {
      icon: Clock,
      title: "Timely Medical Response",
      description:
        "We understand every second counts. Our rapid response team ensures the quickest route and fastest dispatch to save valuable time.",
    },
    {
      icon: PhoneCall,
      title: "24/7 Helpline Support",
      description:
        "Our emergency helpline is open round-the-clock to ensure immediate assistance and ambulance dispatch when you need it the most.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 font-serif">
            Our <span className="text-red-900">Services</span>
          </h2>
          <p className="text-xl text-gray-600">
            Delivering safe, quick, and professional medical transport with compassion
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative group rounded-2xl p-8 border border-gray-200 bg-white shadow-md transition-all duration-500 transform
                  hover:-translate-y-3 hover:shadow-xl overflow-hidden`}
              >
                {/* Gradient overlay animation */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#96080B] to-[#C8252C] opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Glow border on hover */}
                <div
                  className={`absolute inset-0 border-1 rounded-2xl transition-all duration-500 ${
                    isActive ? "border-red-200" : "border-transparent"
                  }`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-xl transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-br from-[#96080B] to-[#C8252C] scale-110 rotate-3 shadow-lg"
                      : "bg-gray-100"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      isActive ? "text-white" : "text-[#96080B]"
                    } transition-colors duration-500`}
                  />
                </div>

                {/* Text */}
                <h3
                  className={`text-medium font-bold mb-3 transition-colors duration-500 ${
                    isActive ? "text-[#96080B]" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
