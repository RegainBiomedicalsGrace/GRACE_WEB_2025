
import { useState, useEffect } from 'react';

export const useTranslations = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [translations, setTranslations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get saved language from localStorage
    const savedLanguage = localStorage.getItem('regain-language') || 'es';
    setCurrentLanguage(savedLanguage);
    loadTranslations(savedLanguage);
  }, []);

  const loadTranslations = async (language: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/lang/lang-${language}.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error('Error loading translations:', error);
      // Fallback to Spanish if there's an error
      if (language !== 'es') {
        loadTranslations('es');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('regain-language', language);
    loadTranslations(language);
  };

  return {
    currentLanguage,
    translations,
    isLoading,
    changeLanguage
  };
};
