import React from 'react';

interface AboutProps {
  translations: any;
}

const About: React.FC<AboutProps> = ({ translations }) => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-tight">
              {translations?.home?.about?.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {translations?.home?.about?.content}
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              {translations?.home?.about?.commitment}
            </p>
          </div>
          
          {/* Team Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#cfd1c6]/20 to-[#cfd1c6]/40 rounded-3xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Equipo en laboratorio"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0f7ab0]/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
