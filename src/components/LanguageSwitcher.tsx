
import React from 'react';

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, onLanguageChange }) => {
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    onLanguageChange(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-gray-700 hover:text-[#0f7ab0] transition-colors duration-300 font-medium tracking-wide text-lg"
    >
      ES | EN
    </button>
  );
};

export default LanguageSwitcher;
