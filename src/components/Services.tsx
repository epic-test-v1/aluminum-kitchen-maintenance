import React from 'react';
import { Wrench, Settings, Hammer, Sparkles, Shield, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'صيانة شاملة',
      description: 'صيانة دورية وإصلاح جميع أنواع مطابخ الألمنيوم'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'تركيب وتجهيز',
      description: 'تركيب مطابخ جديدة وتجهيز المساحات'
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'إصلاح الأضرار',
      description: 'إصلاح الخدوش والتلف والمشاكل الميكانيكية'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'تجديد وتطوير',
      description: 'تجديد المطابخ القديمة وتحديثها'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'ضمان الجودة',
      description: 'ضمان على جميع الأعمال والقطع المستخدمة'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'خدمة سريعة',
      description: 'استجابة سريعة وإنجاز في الوقت المحدد'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات صيانة مطابخ الألمنيوم بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;