import React from 'react';
import { ArrowRight, CheckCircle, Zap, Heart, Shield, Users, Play, BarChart3 } from 'lucide-react';

interface GraceProps {
  translations: any;
}

const Grace: React.FC<GraceProps> = ({ translations }) => {
  const handleClinicalStudy = () => {
    window.open('https://forms.google.com/clinical-study', '_blank');
  };

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section - What is GRACE */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-16 shadow-2xl">
                  <div className="w-full h-96 bg-gradient-to-br from-[#0f7ab0] to-[#0f7ab0]/80 rounded-2xl shadow-xl flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/229c6d0a-6cc0-41a2-b57b-bcef656ac286.png" 
                      alt="GRACE device" 
                      className="h-72 object-contain drop-shadow-xl" 
                    />
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#cfd1c6] rounded-full opacity-20"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#0f7ab0] rounded-full opacity-20"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
                {translations?.grace?.what?.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {translations?.grace?.what?.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-tight">
              {translations?.grace?.how?.title}
            </h2>
          </div>
          
          {/* Video or Animation Placeholder */}
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-16">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f7ab0]/10 to-[#0f7ab0]/20"></div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#0f7ab0] rounded-full flex items-center justify-center">
                  <Play className="w-12 h-12 text-white ml-1" />
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 text-lg">
              {translations?.grace?.how?.video}
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0f7ab0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-[#0f7ab0]">1</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{translations?.grace?.how?.steps?.placement?.title}</h3>
              <p className="text-gray-600">{translations?.grace?.how?.steps?.placement?.desc}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0f7ab0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-[#0f7ab0]">2</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{translations?.grace?.how?.steps?.activation?.title}</h3>
              <p className="text-gray-600">{translations?.grace?.how?.steps?.activation?.desc}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0f7ab0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light text-[#0f7ab0]">3</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{translations?.grace?.how?.steps?.result?.title}</h3>
              <p className="text-gray-600">{translations?.grace?.how?.steps?.result?.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section - Before and After */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center tracking-tight">
            {translations?.grace?.action?.title}
          </h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            {translations?.grace?.action?.desc}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before Video */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">
                {translations?.grace?.action?.before?.title}
              </h3>
              <div className="aspect-video bg-red-50 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden border-2 border-red-100">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                {translations?.grace?.action?.before?.desc}
              </p>
            </div>

            {/* After Video */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">
                {translations?.grace?.action?.after?.title}
              </h3>
              <div className="aspect-video bg-green-50 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden border-2 border-green-100">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                {translations?.grace?.action?.after?.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Cards */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center tracking-tight">
            {translations?.grace?.benefits?.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#0f7ab0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-[#0f7ab0]" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{translations?.grace?.benefits?.b1?.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {translations?.grace?.benefits?.b1?.desc}
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#0f7ab0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-[#0f7ab0]" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{translations?.grace?.benefits?.b2?.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {translations?.grace?.benefits?.b2?.desc}
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#0f7ab0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-[#0f7ab0]" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{translations?.grace?.benefits?.b3?.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {translations?.grace?.benefits?.b3?.desc}
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#0f7ab0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-[#0f7ab0]" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{translations?.grace?.benefits?.b4?.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {translations?.grace?.benefits?.b4?.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Results Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-tight">
              {translations?.grace?.results?.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {translations?.grace?.results?.desc}
            </p>
          </div>
          
          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-[#0f7ab0]/5 to-[#0f7ab0]/10 rounded-3xl p-8 text-center">
              <div className="text-5xl font-light text-[#0f7ab0] mb-4">{translations?.grace?.results?.r1?.value}</div>
              <p className="text-lg font-medium text-gray-900 mb-2">{translations?.grace?.results?.r1?.title}</p>
              <p className="text-gray-600">{translations?.grace?.results?.r1?.desc}</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-3xl p-8 text-center">
              <div className="text-5xl font-light text-green-600 mb-4">{translations?.grace?.results?.r2?.value}</div>
              <p className="text-lg font-medium text-gray-900 mb-2">{translations?.grace?.results?.r2?.title}</p>
              <p className="text-gray-600">{translations?.grace?.results?.r2?.desc}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-3xl p-8 text-center">
              <div className="text-5xl font-light text-purple-600 mb-4">{translations?.grace?.results?.r3?.value}</div>
              <p className="text-lg font-medium text-gray-900 mb-2">{translations?.grace?.results?.r3?.title}</p>
              <p className="text-gray-600">{translations?.grace?.results?.r3?.desc}</p>
            </div>
          </div>
          
          {/* Charts Placeholder */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">{translations?.grace?.results?.chartsTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center">
                <img
                  src="/lovable-uploads/523b3c28-a85a-43eb-97a4-27ee4d4d50ea.png"
                  alt="Effectiveness Chart: Before vs After"
                  className="h-48 object-contain drop-shadow-xl"
                />
                {/* <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-[#0f7ab0] mx-auto mb-4" />
                  <p className="text-gray-600">{translations?.grace?.results?.charts1}</p>
                </div> */}
              </div>
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center">
                <img
                  src="/lovable-uploads/74a46a49-a1ad-450f-904a-128d9560ba44.png"
                  alt="Effectiveness Chart: Progress Over Time"
                  className="h-48 object-contain drop-shadow-xl"
                />
                {/* <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600">{translations?.grace?.results?.charts2}</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center tracking-tight">
            {translations?.grace?.carousel?.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-blue-600 text-lg">{translations?.grace?.carousel?.slide1?.title}</span>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{translations?.grace?.carousel?.slide1?.desc}</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <span className="text-green-600 text-lg">{translations?.grace?.carousel?.slide2?.title}</span>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{translations?.grace?.carousel?.slide2?.desc}</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <span className="text-purple-600 text-lg">{translations?.grace?.carousel?.slide3?.title}</span>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{translations?.grace?.carousel?.slide3?.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#0f7ab0] to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
            {translations?.grace?.cta?.title}
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            {translations?.grace?.cta?.desc}
          </p>
          <button
            onClick={handleClinicalStudy}
            className="group bg-white text-[#0f7ab0] px-12 py-5 rounded-full font-medium text-xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 mx-auto shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            {translations?.grace?.cta?.button}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Grace;
