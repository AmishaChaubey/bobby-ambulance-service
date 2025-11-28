import { useState, useEffect } from "react";
import { Phone, Heart, Activity, AlertCircle, Clock, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function WelcomeSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #DC2626 0px, transparent 1px, transparent 10px, #DC2626 11px),
                            repeating-linear-gradient(-45deg, #DC2626 0px, transparent 1px, transparent 10px, #DC2626 11px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/wel-img.jpg"
                  alt="Emergency Medical Services"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Emergency Badge */}
              <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full flex items-center shadow-lg">
                <AlertCircle className="w-4 h-4 mr-2 animate-pulse" />
                <span className="text-sm font-bold">EMERGENCY</span>
              </div>

              {/* Bottom Stats on Image */}
              <div className="absolute bottom-3 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">5-10</p>
                      <p className="text-xs text-gray-600">Mins Response</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">24/7</p>
                      <p className="text-xs text-gray-600">Available</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">5000+</p>
                      <p className="text-xs text-gray-600">Families</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Top Badge */}
            <div className="inline-flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Activity className="w-4 h-4 mr-2 text-red-600" />
              TRUSTED EMERGENCY SERVICES
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-[#3f9ad1] mb-6 leading-tight">
              When Every <span className="text-red-600">Second</span> Matters
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We provide immediate ambulance response and dignified deadbody transportation services. 
              Our professional team is committed to delivering compassionate care during your most critical moments.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Rapid Response Time</h3>
                  <p className="text-sm text-gray-600">Ambulance arrives within 5-10 minutes</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Professional Team</h3>
                  <p className="text-sm text-gray-600">Trained medical staff and paramedics</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Compassionate Care</h3>
                  <p className="text-sm text-gray-600">Dignified handling with respect</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/services">
                <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Explore Services
                </button>
              </Link>
              <Link to="/contact">
                <button className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Help Now
                </button>
              </Link>
            </div>

            {/* Emergency Contact Card */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-600 font-semibold">Emergency Hotline</p>
                  <p className="text-xl font-bold text-gray-900">+91 9540455867</p>
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}