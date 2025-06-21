import React from 'react';
import { Phone, MapPin, Wrench } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">صيانة مطابخ الألمنيوم</h3>
                <p className="text-gray-400">جدة - السعودية</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              نحن متخصصون في تقديم أفضل خدمات صيانة وإصلاح مطابخ الألمنيوم في جدة، 
              بجودة عالية وأسعار منافسة.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• صيانة مطابخ الألمنيوم</li>
              <li>• إصلاح الأضرار والخدوش</li>
              <li>• تركيب مطابخ جديدة</li>
              <li>• تجديد المطابخ القديمة</li>
              <li>• قطع غيار أصلية</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-green-400" />
                <a
                  href="tel:+966547815202"
                  className="text-green-400 hover:text-green-300 font-semibold"
                >
                  0547815202
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">جدة وجميع الضواحي</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © ٢٠٢٥ صيانة مطابخ الألمنيوم - جدة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;