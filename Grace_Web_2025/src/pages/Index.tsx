import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import Navigation from '../components/Navigation';
import Home from './Home';

const Index = () => {
  const { currentLanguage, translations, isLoading, changeLanguage } = useTranslations();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation 
        translations={translations}
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
      />
      <Home translations={translations} />
    </div>
  );
};

export default Index;
