import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Users, Truck, Shield, Heart, Phone, Star, CheckCircle } from "lucide-react";

const ServiceSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      img: "/img1.jpg",
      title: "Emergency Ambulance Service",
      description: "24/7 rapid response ambulance service with trained medical staff and life-saving equipment.",
      icon: <Clock className="w-6 h-6" />,
      features: ["5-10 min response time", "Advanced life support", "Trained paramedics"],
      link: "/services",
      emergency: true
    },
    {
      img: "/img6.jpg",
      title: "Freezer Box on Rent",
      description: "Premium quality freezer boxes with temperature control to preserve with dignity and respect.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Temperature controlled", "Hygienic", "Available 24/7"],
      link: "/services",
      emergency: false
    },
    {
      img: "/img2.jpg",
      title: "Dead Body Transportation",
      description: "Dignified and respectful transportation services ensuring safe and proper handling during transfers.",
      icon: <Truck className="w-6 h-6" />,
      features: ["Dignified transport", "Proper handling", "Nationwide coverage"],
      link: "/services",
      emergency: false
    },
    {
      img: "/blog-img/8.jpg",
      title: "Funeral Assistance",
      description: "Complete support for funeral arrangements, documentation, and handling throughout the process.",
      icon: <Heart className="w-6 h-6" />,
      features: ["Documentation help", "Respectful handling", "Complete guidance"],
      link: "/services",
      emergency: false
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 py-20 overflow-hidden">


    

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
        
          <h2 className="text-5xl font-bold text-[#3f9ad1] mb-4 font-serif">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Providing dignified and respectful services during difficult times with 24/7 emergency support
          </p>
        </div>

     

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative group rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 ${
                  isActive ? "shadow-2xl" : "shadow-lg"
                }`}
              >
                {/* Emergency Badge */}
                {service.emergency && (
                  <div className="absolute top-0 left-0 z-20 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-lg">
                    EMERGENCY
                  </div>
                )}

                {/* Card Background */}
                <div className="bg-white h-full">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isActive ? "scale-110" : "scale-100"
                      }`}
                    />
                    {/* Image Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-40"
                    }`}></div>
                    
                    {/* Icon */}
                    <div className={`absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive ? "scale-110" : "scale-100"
                    }`}>
                      <div className="text-red-600">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4 text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-5">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center mb-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <Link 
                      to={service.link}
                      className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-500 shadow-md text-center inline-block relative z-10 ${
                        isActive
                          ? "bg-red-600 text-white hover:bg-red-700"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-red-800 transition-all duration-500 ${
                  isActive ? "w-full" : "w-0"
                }`}></div>
              </div>
            );
          })}
        </div>

     
      </div>
    </section>
  );
};

export default ServiceSection;