import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ambulance } from "lucide-react";
import { blogData } from "./data";
import { IoBookOutline } from "react-icons/io5";


export default function BlogList() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Header */}
  <section className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/banner11.png')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90"></div>
        </div>
        
 
        {/* Hero Content */}
        <div className="relative h-full flex items-center text-left px-6">
          <div className="max-w-5xl mt-10">
         
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
            Helpful Resources for 
              <br />
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
             Families and Caregivers
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
Learn more about emergency preparedness, ambulance services, and respectful funeral planning            </p>
       
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 📰 Blog Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-200"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-58 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <button
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  className="text-gray-800 font-semibold hover:text-gray-600 transition"
                >
                  Learn More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
