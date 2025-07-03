import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PreFooterCTAProps {
  translations: any;
}

const PreFooterCTA: React.FC<PreFooterCTAProps> = ({ translations }) => {
  const handleClinicalStudy = () => {
    window.open('https://forms.google.com/clinical-study', '_blank');
  };

  return (
    <section className="py-32 bg-gradient-to-br from-[#cfd1c6]/30 to-[#cfd1c6]/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-tight">
          {translations?.home?.prefootercta?.title}
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
          {translations?.home?.prefootercta?.description}
        </p>
        <button
          onClick={handleClinicalStudy}
          className="group bg-[#0f7ab0] text-white px-12 py-5 rounded-full font-medium text-xl hover:bg-[#0f7ab0]/90 transition-all duration-300 flex items-center gap-3 mx-auto shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
        >
          {translations?.home?.prefootercta?.cta}
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default PreFooterCTA;
