import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Clock, Award, Phone, ArrowRight, CheckCircle, Shield, Zap, Activity, Star, Ambulance, AlertCircle, Lightbulb, Target, MapPin, ThumbsUp, TrendingUp, Globe, HeadphonesIcon, User } from "lucide-react";

export default function AboutPageRedesign() {
  const [activeStory, setActiveStory] = useState(0);
  const [counterStart, setCounterStart] = useState(false);
  const counterRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCounterStart(true);
        }
      },
      { threshold: 0.3 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => counterRef.current && observer.unobserve(counterRef.current);
  }, []);

  const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!counterStart) return;
      
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        const currentCount = Math.floor(percentage * end);
        setCount(currentCount);
        
        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [counterStart, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  const journeySteps = [
    {
      year: "2014",
      title: "The Beginning",
      description: "Started with a single ambulance",
      icon: Ambulance
    },
    {
      year: "2017",
      title: "Expanding Services",
      description: "Introduced freezer box preservation",
      icon: Shield
    },
    {
      year: "2020",
      title: "24/7 Operations",
      description: "Round-the-clock service established",
      icon: Clock
    },
    {
      year: "2025",
      title: "Today",
      description: "Serving 500+ families",
      icon: Heart
    }
  ];

  const testimonials = [
    { name: "Disha Kumari", text: "Their timely freezer box service brought us great relief during a very difficult time.", rating: 5 },
    { name: "Murari Singh", text: "A very professional and respectful team. They handled everything with utmost care.", rating: 5 },
    { name: "Rita Kumari", text: "Quick response and well-maintained freezer box. Truly dependable service.", rating: 5 }
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & Director",
      bio: "With over 15 years of experience in emergency medical services, Rajesh founded our organization with a vision to provide dignified care."
    },
    {
      name: "Priya Sharma",
      position: "Operations Manager",
      bio: "Priya ensures our 24/7 operations run smoothly, coordinating our team of dedicated professionals."
    },
    {
      name: "Amit Singh",
      position: "Head of Medical Services",
      bio: "Amit leads our medical team, ensuring the highest standards of care and professionalism in all our services."
    }
  ];

  const values = [
    { icon: Heart, title: "Compassion", desc: "Empathy in every action" },
    { icon: Zap, title: "Swift Response", desc: "Minutes matter in emergencies" },
    { icon: Shield, title: "Trust", desc: "Building lasting relationships" },
    { icon: Award, title: "Excellence", desc: "Highest standards of care" },
    { icon: Users, title: "Community", desc: "Serving our neighbors" },
    { icon: Lightbulb, title: "Innovation", desc: "Modern solutions for care" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Banner Image */}
      <section className="relative h-[80vh] sm:h-[90vh] md:h-screen overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/banner6.png')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="w-full max-w-5xl mt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight text-white">
              Compassion, 
              <br />
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                Service, Respect
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl">
              At our core, we are dedicated to saving lives and honoring memories with utmost care and professionalism
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3f9ad1] mb-4 font-serif">
                Our <span className="text-red-700">Story</span>
              </h2>

              <div className="space-y-4 text-gray-600">
                <p className="text-base sm:text-lg leading-relaxed">
                  What started as a small initiative with just one vehicle and a desire to help people in critical moments has now grown into a trusted and respected emergency service provider.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  From the beginning, our focus has always been on compassion, dignity, and professional care. We understand that emergencies can be overwhelming, and our team is committed to offering support that brings comfort and reassurance when families need it the most.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  Over time, we have expanded our services, improved our facilities, and strengthened our team—yet our core values remain unchanged. Every call we respond to is handled with the same sincerity, dedication, and respect that shaped our foundation.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  Today, we stand as a reliable name in emergency medical transport and dignified body preservation, proudly serving families with care, responsibility, and trust.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#3f9ad1]/10 to-red-700/10 rounded-2xl p-6 sm:p-8 border border-[#3f9ad1]/20">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#3f9ad1] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                      <p className="text-gray-600 mb-3">
                        To provide compassionate, dignified emergency medical and preservation services to families in their time of need.
                      </p>
                      <p className="text-gray-600">
                        Above all, we believe in serving with heart—supporting families not just as a service provider, but as a responsible companion during their most sensitive times.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                      <p className="text-gray-600 mb-2">
                        To be the most trusted provider of emergency and preservation services, known for our compassion and professionalism.
                      </p>
                      <p className="text-gray-600">
                        With continuous improvement, advanced facilities, and a dedicated team, we aim to set the benchmark for reliability, dignity, and excellence in emergency response.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3f9ad1] mb-4 font-serif">
              Our <span className="text-red-700">Journey</span>
            </h2>
            <p className="text-lg text-gray-600">
              A decade of dedication to serving our community
            </p>
          </div>

          <div className="relative">
            {/* Mobile Timeline - Vertical */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Mobile Version */}
                    <div className="md:hidden flex items-start w-full">
                      <div className="absolute left-6 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-red-700 to-red-800 rounded-full flex items-center justify-center shadow-md z-10">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-16 bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm w-full">
                        <div className="text-red-700 font-bold text-base mb-1">{step.year}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Desktop Version */}
                    <div className={`hidden md:block w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                        <div className="text-red-700 font-bold text-base mb-1">{step.year}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>

                    {/* Desktop Center Icon */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-red-700 to-red-800 rounded-full items-center justify-center shadow-md z-10">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="hidden md:block w-5/12"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section ref={counterRef} className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/blog-img/fu.jpg')" }}
        ></div>
        
        {/* Color Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Impact
            </h2>
            <p className="text-lg sm:text-xl text-blue-100">
              Making a difference in our community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: 10, suffix: "+", label: "Years of Service", icon: Clock },
              { value: 500, suffix: "+", label: "Families Helped", icon: Users },
              { value: 100, suffix: "%", label: "Satisfaction Rate", icon: ThumbsUp },
              { value: 24, suffix: "/7", label: "Always Available", icon: Zap }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-red-200" />
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-white">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-blue-100 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3f9ad1] mb-4 font-serif">
              Our<span className="text-red-700"> Values</span> 
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              The principles that guide our work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#3f9ad1] transition-colors">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#3f9ad1] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3f9ad1] mb-4 font-serif">
              What Families <span className="text-red-700"> Say</span> 
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Real experiences from those we've helped
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-md"
              >
                <div className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-[#3f9ad1] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">"</span>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">— {testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#3f9ad1] to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need Our Services?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">
            We're here to help 24/7. Contact us for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="bg-white text-[#3f9ad1] font-bold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-white hover:text-[#3f9ad1] transition-colors">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}