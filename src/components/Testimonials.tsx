import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
  translations: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ translations }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: translations?.home?.testimonials?.testimonial1,
      author: translations?.home?.testimonials?.author1,
      age: translations?.home?.testimonials?.age1,
      avatar: translations?.home?.testimonials?.avatar1
    },
    {
      text: translations?.home?.testimonials?.testimonial2,
      author: translations?.home?.testimonials?.author2,
      age: translations?.home?.testimonials?.age2,
      avatar: translations?.home?.testimonials?.avatar2
    },
    {
      text: translations?.home?.testimonials?.testimonial3,
      author: translations?.home?.testimonials?.author3,
      age: translations?.home?.testimonials?.age3,
      avatar: translations?.home?.testimonials?.avatar3
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            {translations?.home?.testimonials?.title}
          </h2>
        </div>
        
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-gray-50 rounded-3xl p-12 text-center min-h-[300px] flex flex-col justify-center relative overflow-hidden">
            <Quote className="w-12 h-12 text-[#0f7ab0] mx-auto mb-8 opacity-60" />
            
            <div className="transition-all duration-500 ease-in-out">
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-light italic">
                "{testimonials[currentTestimonial]?.text}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[currentTestimonial]?.avatar}
                  alt={testimonials[currentTestimonial]?.author}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <p className="text-lg font-medium text-gray-900">
                    {testimonials[currentTestimonial]?.author}
                  </p>
                  <p className="text-gray-500">
                    {testimonials[currentTestimonial]?.age} años
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-[#0f7ab0]" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-[#0f7ab0]" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-[#0f7ab0]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
