import React from 'react';
import { Phone, Star, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/WhatsApp Image 2025-05-04 at 23.37.35_8cd46a5a.jpg')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            صيانة مطابخ الألمنيوم
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-blue-200">
              بجدة - خدمات احترافية
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            نوفر أفضل خدمات صيانة وإصلاح مطابخ الألمنيوم في جدة
            <br />
            بجودة عالية وأسعار منافسة
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:+966547815202"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-xl flex items-center space-x-3 space-x-reverse transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>اتصل الآن: 0547815202</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>خدمة متميزة</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <MapPin className="w-5 h-5 text-red-400" />
              <span>جدة وضواحيها</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Phone className="w-5 h-5 text-green-400" />
              <span>استجابة سريعة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;