import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  translations: any;
}

const Hero: React.FC<HeroProps> = ({ translations }) => {
  const handleClinicalStudy = () => {
    window.open('https://forms.google.com/clinical-study', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden flex items-center font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center space-y-12 py-32">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight max-w-6xl mx-auto bg-gradient-to-r from-blue-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              {translations?.home?.hero?.title}
            </h1>
            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              {translations?.home?.hero?.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <button
              onClick={handleClinicalStudy}
              className="group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-12 py-6 text-lg rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              {translations?.home?.hero?.cta1}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/grace"
              className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-lg rounded-full font-medium backdrop-blur-sm flex items-center gap-3 transform hover:-translate-y-1 transition-all duration-300"
            >
              {translations?.home?.hero?.cta2}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-emerald-600/20 pointer-events-none"></div>
      {/* Decorative blurred circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;
