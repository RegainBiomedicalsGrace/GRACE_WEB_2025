import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  translations: any;
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ translations, currentLanguage, onLanguageChange }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || (path === '/' && location.pathname === '/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/229c6d0a-6cc0-41a2-b57b-bcef656ac286.png" 
              alt="Regain Biomedical" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              to="/"
              className={`text-gray-700 hover:text-[#0f7ab0] transition-colors duration-300 font-medium text-lg ${
                isActive('/') ? 'text-[#0f7ab0] font-semibold' : ''
              }`}
            >
              {translations?.nav?.home}
            </Link>
            <Link
              to="/grace"
              className={`text-gray-700 hover:text-[#0f7ab0] transition-colors duration-300 font-medium text-lg ${
                isActive('/grace') ? 'text-[#0f7ab0] font-semibold' : ''
              }`}
            >
              {translations?.nav?.grace}
            </Link>
            <Link
              to="/documents"
              className={`text-gray-700 hover:text-[#0f7ab0] transition-colors duration-300 font-medium text-lg ${
                isActive('/documents') ? 'text-[#0f7ab0] font-semibold' : ''
              }`}
            >
              {translations?.nav?.documents}
            </Link>
            <Link
              to="/team"
              className={`text-gray-700 hover:text-[#0f7ab0] transition-colors duration-300 font-medium text-lg ${
                isActive('/team') ? 'text-[#0f7ab0] font-semibold' : ''
              }`}
            >
              {translations?.nav?.team}
            </Link>
          </div>

          {/* Language Switcher and CTA Button */}
          <div className="flex items-center space-x-4 text-gray-700">
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
            <a
              href="https://forms.gle/ntHJyV361k1wXvif7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold shadow transition-colors duration-300 text-base"
            >
              {currentLanguage === 'es' ? 'Únete al estudio' : (translations?.home?.hero?.cta1 || 'Join the Clinical Study')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
