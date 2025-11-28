import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Award, Heart, Shield, Truck, Phone, Activity, MapPin, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Response",
      description: "Our ambulances reach you within 5-10 minutes, ensuring critical care when every second counts.",
      bgIcon: "bg-gradient-to-br from-red-500 to-red-700"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Medical Team",
      description: "Highly trained paramedics and medical staff providing professional care during emergencies.",
      bgIcon: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Round-the-clock emergency services ready to assist you whenever the need arises.",
      bgIcon: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Equipment",
      description: "State-of-the-art medical equipment and life-saving technology in all our ambulances.",
      bgIcon: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Wide Coverage",
      description: "Serving multiple cities with a network of strategically located ambulance stations.",
      bgIcon: "bg-gradient-to-br from-orange-500 to-orange-700"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "Providing not just medical assistance but emotional support during critical situations.",
      bgIcon: "bg-gradient-to-br from-pink-500 to-pink-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Diagonal Red Pattern Background */}
 

     

      {/* Top Decorative Element */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-red-600/10 blur-3xl"></div>

      {/* Main Container with max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-serif">
        {/* Section Header */}
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-1 bg-red-600/10 text-red-600 rounded-full text-sm font-semibold mb-4">
            <Activity className="w-4 h-4 mr-2" />
            WHY CHOOSE US
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3f9ad1] mb-4 sm:mb-6">
            Emergency <span className="text-red-600">Medical Services</span> When Every Second Counts
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-2xl mx-auto leading-relaxed">
            We provide rapid ambulance services and dignified deadbody transportation with a commitment to professional care and respect. From emergency response to final journey, we ensure everything is handled with compassion during critical times.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Decoration */}
              <div
                className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 rounded-full ${service.bgIcon} opacity-5 blur-2xl transform translate-x-1/2 -translate-y-1/2`}
              ></div>

              {/* Icon */}
              <div
                className={`w-14 sm:w-16 h-14 sm:h-16 ${service.bgIcon} rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Line */}
              <div className="h-0.5 w-0 bg-red-600 mx-auto mt-3 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>


        {/* Bottom Trust Indicators */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center px-4 sm:px-6 py-3 bg-white rounded-full shadow-md border border-gray-200 gap-3 sm:gap-4">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold">1</div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold">2</div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold">3</div>
            </div>
            <span className="text-gray-700 text-sm sm:text-base font-medium text-center">
              Trusted by 5000+ families during their most critical moments
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;