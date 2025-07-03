
import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  translations: any;
}

const Footer: React.FC<FooterProps> = ({ translations }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/229c6d0a-6cc0-41a2-b57b-bcef656ac286.png" 
                alt="Regain Biomedical" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {translations?.footer?.description || "Desarrollamos soluciones médicas accesibles, portátiles y efectivas para mejorar la calidad de vida."}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/regainbiomedical" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0f7ab0] transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/regainbiomedical" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0f7ab0] transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/channel/regainbiomedical" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0f7ab0] transition-colors duration-300"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations?.footer?.quickLinks || "Enlaces Rápidos"}</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">{translations?.nav?.home}</a></li>
              <li><a href="/grace" className="text-gray-300 hover:text-white transition-colors">{translations?.nav?.grace}</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-white transition-colors">{translations?.nav?.team}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations?.footer?.contact || "Contacto"}</h3>
            <div className="space-y-2 text-gray-300">
              <p>Santiago, Chile</p>
              <p>contacto@regainbiomedical.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Regain Biomedical. {translations?.footer?.rights || "Todos los derechos reservados."}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
