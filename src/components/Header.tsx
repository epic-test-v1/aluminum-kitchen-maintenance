import React, { useState } from 'react';
import { Phone, Menu, X, Wrench } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="bg-blue-600 p-2 rounded-full">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">صيانة مطابخ الألمنيوم</h1>
              <p className="text-sm text-gray-600">جدة - السعودية</p>
            </div>
          </div>

          {/* Phone Number - Desktop */}
          <div className="hidden md:flex items-center space-x-3 space-x-reverse bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
            <Phone className="w-5 h-5" />
            <a href="tel:+966547815202" className="font-semibold text-lg">
              0547815202
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-right py-2 text-gray-700 hover:text-blue-600"
              >
                خدماتنا
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-right py-2 text-gray-700 hover:text-blue-600"
              >
                من نحن
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-right py-2 text-gray-700 hover:text-blue-600"
              >
                اتصل بنا
              </button>
              <a
                href="tel:+966547815202"
                className="flex items-center justify-center space-x-2 space-x-reverse bg-green-500 text-white py-3 rounded-lg font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>0547815202</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;