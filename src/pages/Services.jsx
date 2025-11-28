import React, { useState, useEffect } from 'react';
import {
  Shield,
  Activity,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Heart,
  Home,
  Car,
  User,
  Sparkles,
  Feather,
  Trees,
  Sun,
  Headphones,
  Zap,
  Award,
  Users,
  Calendar,
  Ambulance,
  Snowflake,
  AlertCircle
} from 'lucide-react';
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Ambulance,
      title: 'Emergency Ambulance',
      image: "/blog-img/fu.jpg",
      description: 'Rapid response 24/7 emergency medical transport with advanced life support',
      features: ['24/7 Availability', 'Advanced Life Support', 'GPS Tracked Vehicles', 'Trained Paramedics'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-red-600',
    },
    {
      icon: Snowflake,
      title: 'Freezer Box Service',
      image: "/blog-img/11.jpg",
      description: 'Professional preservation with temperature-controlled freezer box rental',
      features: ['Temperature Controlled', 'Hygienic Equipment', 'Doorstep Delivery', 'Professional Setup'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-red-600',
    },
    {
      icon: Car,
      title: 'Patient Transport',
      image: "/blog-img/9.jpg",
      description: 'Non-emergency medical transport for hospital transfers',
      features: ['Wheelchair Accessible', 'Medical Supervision', 'Comfortable Journey', 'Affordable Rates'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-red-600',
    },
    {
      icon: Heart,
      title: 'ICU Ambulance',
      image: "/blog-img/8.jpg",
      description: 'Mobile ICU with ventilators and critical care equipment',
      features: ['Ventilator Support', 'Cardiac Monitoring', 'Critical Care Team', 'Advanced Equipment'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-red-600',
    },
  ];

  const stats = [
    { icon: Ambulance, value: '10,000+', label: 'Emergency Responses', color: 'text-red-600' },
    { icon: Users, value: '50+', label: 'Medical Staff', color: 'text-blue-600' },
    { icon: Clock, value: '24/7', label: 'Availability', color: 'text-emerald-600' },
    { icon: Award, value: '15+', label: 'Years Experience', color: 'text-purple-600' },
  ];

  const processSteps = [
    { title: 'Call Us', description: 'Reach our 24/7 emergency hotline', icon: Phone, color: 'from-red-500 to-red-600' },
    { title: 'Rapid Dispatch', description: 'Nearest ambulance sent immediately', icon: Zap, color: 'from-orange-500 to-orange-600' },
    { title: 'Expert Care', description: 'Trained paramedics provide support', icon: Activity, color: 'from-blue-500 to-blue-600' },
    { title: 'Safe Transport', description: 'Swift and secure journey', icon: Shield, color: 'from-emerald-500 to-emerald-600' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner12.png')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/90"></div>
        </div>

        <div className="relative h-full flex items-center text-left px-6">
          <div className="max-w-5xl mt-10">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
              Comprehensive Emergency <br />
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
               & Funeral Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl">
              From rapid ambulance response to dignified funeral arrangements, we deliver care with professionalism and empathy
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-blue-100 rounded-full px-6 py-2 mb-4">
              <Sparkles className="w-4 h-4 mr-2 text-red-600" />
              <span className="text-sm font-bold text-gray-700">OUR SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#3f9ad1]">
              Comprehensive <span className="text-red-700">Care Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to="/contact"
                  className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 cursor-pointer hover:shadow-2xl transition-all"
                >
                  <div className="relative p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} mb-6`}>
                      <Icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className={`w-4 h-4 ${service.iconColor} mr-2`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="w-full text-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-bold cursor-pointer">
                      Book Service <ArrowRight className="inline ml-2 w-5 h-5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#3f9ad1]">
              Quick Response <span className="text-red-700">Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all">
                    <div className={`w-16 h-16 mx-auto mt-6 mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 bg-white">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-red-700 mb-6">
            Need Emergency Assistance?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Our team is available 24/7 for immediate medical help
          </p>

          <button className="group bg-gray-100 text-red-600 px-10 py-5 rounded-full font-black text-lg shadow-2xl">
            <Phone className="mr-3 w-6 h-6 inline" />
            Request Callback
          </button>
        </div>
      </section>
    </div>
  );
}
