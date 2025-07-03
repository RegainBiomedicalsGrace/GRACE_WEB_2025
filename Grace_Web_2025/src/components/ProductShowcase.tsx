import React from 'react';

interface ProductShowcaseProps {
  translations: any;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ translations }) => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-16 shadow-2xl">
                <div className="w-full h-80 bg-gradient-to-br from-[#0f7ab0] to-[#0f7ab0]/80 rounded-2xl shadow-xl flex items-center justify-center">
                  <img
                    src="/lovable-uploads/229c6d0a-6cc0-41a2-b57b-bcef656ac286.png"
                    alt="GRACE device"
                    className="h-60 object-contain drop-shadow-xl"
                  />
                </div>
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#cfd1c6] rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#0f7ab0] rounded-full opacity-20"></div>
            </div>
          </div>
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-tight">
              {translations?.home?.product?.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
              {translations?.home?.product?.description}
            </p>
            <a
              href="/grace"
              className="group inline-flex items-center gap-3 bg-[#0f7ab0] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#0f7ab0]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {translations?.home?.product?.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
