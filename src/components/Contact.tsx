import React from 'react';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">تواصل معنا</h2>
          <p className="text-xl text-gray-600">
            نحن هنا لخدمتكم في أي وقت
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">رقم الهاتف</h4>
                    <a
                      href="tel:+966547815202"
                      className="text-2xl font-bold text-green-600 hover:text-green-700"
                    >
                      0547815202
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">منطقة الخدمة</h4>
                    <p className="text-gray-600">
                      جدة وجميع الأحياء والضواحي المحيطة
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">ساعات العمل</h4>
                    <p className="text-gray-600">
                      يومياً من ٨ صباحاً إلى ١٠ مساءً
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">استجابة سريعة</h4>
                    <p className="text-gray-600">
                      نرد على اتصالاتكم فوراً ونحدد موعد الزيارة
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">احصل على خدمة فورية</h3>
              <p className="mb-8 leading-relaxed">
                لا تتردد في الاتصال بنا الآن للحصول على استشارة مجانية وتحديد موعد للصيانة. 
                فريقنا جاهز لخدمتكم في أي وقت.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:+966547815202"
                  className="flex items-center justify-center space-x-3 space-x-reverse bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-6 h-6" />
                  <span>اتصل الآن: 0547815202</span>
                </a>
                
                <div className="text-center text-blue-200 text-sm">
                  متاح ٢٤ ساعة للطوارئ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;