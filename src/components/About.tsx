import React from 'react';
import { Users, Award, MapPin, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">من نحن</h2>
            <p className="text-xl text-gray-600">
              فريق متخصص في صيانة مطابخ الألمنيوم بجدة
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                خبرة وتميز في خدمة العملاء
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                نحن فريق متخصص في صيانة وإصلاح مطابخ الألمنيوم في جدة، نتمتع بخبرة واسعة في هذا المجال ونلتزم بتقديم أفضل الخدمات لعملائنا الكرام.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                نستخدم أحدث الأدوات والتقنيات لضمان جودة العمل، ونوفر قطع غيار أصلية وضمان شامل على جميع الأعمال التي ننجزها.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">جودة معتمدة وضمان شامل</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">فريق متخصص ومدرب</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">خدمة في جميع أنحاء جدة</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-gray-800 mb-4">لماذا تختارنا؟</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">خبرة طويلة في صيانة مطابخ الألمنيوم</span>
                </li>
                <li className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">أسعار منافسة وشفافة</span>
                </li>
                <li className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">استجابة سريعة وخدمة متاحة يومياً</span>
                </li>
                <li className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">ضمان على جميع الأعمال</span>
                </li>
                <li className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">قطع غيار أصلية وعالية الجودة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;