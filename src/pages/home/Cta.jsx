import { Link } from "react-router-dom";
import { Phone, AlertCircle } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative bg-white py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #DC2626 0px, transparent 1px, transparent 10px, #DC2626 11px),
                            repeating-linear-gradient(-45deg, #DC2626 0px, transparent 1px, transparent 10px, #DC2626 11px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

  

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side - Message */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              <AlertCircle className="w-4 h-4 mr-2 animate-pulse" />
              24/7 EMERGENCY RESPONSE
            </div>
            
            <h2 className="text-3xl font-bold text-[#3f9ad1] mb-2">
              Need Emergency <span className="text-red-600">Assistance?</span>
            </h2>
            
            <p className="text-gray-600 mb-4">
              Professional ambulance services available 24/7. Call us now for immediate help.
            </p>
          </div>

          {/* Right Side - Emergency Number */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-red-600 rounded-xl p-2 text-white text-center">
              <p className="text-sm font-medium mb-1">Emergency Helpline</p>
              <p className="text-lg font-bold">+91 7678309495</p>
            </div>
            
            <a href="tel:+919876543210" className="bg-[#3f9ad1] hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}