
import React from 'react';
import { Download, FileText, FileArchive, BookOpen } from 'lucide-react';

interface DocumentsProps {
  translations: any;
}

const Documents: React.FC<DocumentsProps> = ({ translations }) => {
  const documents = [
    {
      id: 1,
      title: 'Pitch Deck GRACE',
      description: 'Presentación completa del dispositivo GRACE y su potencial comercial',
      type: 'PDF',
      size: '2.5 MB',
      icon: FileText,
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Resumen del Estudio Clínico',
      description: 'Resultados preliminares y metodología del estudio clínico en curso',
      type: 'PDF',
      size: '1.8 MB',
      icon: FileArchive,
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Artículo: Temblor Esencial - Revisión 2024',
      description: 'Revisión científica sobre las últimas investigaciones en temblor esencial',
      type: 'PDF',
      size: '3.2 MB',
      icon: BookOpen,
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Protocolo de Investigación',
      description: 'Protocolo detallado del estudio clínico y metodología aplicada',
      type: 'PDF',
      size: '2.1 MB',
      icon: FileText,
      downloadUrl: '#'
    },
    {
      id: 5,
      title: 'Hoja Informativa para Pacientes',
      description: 'Información completa para pacientes interesados en participar',
      type: 'PDF',
      size: '1.2 MB',
      icon: FileText,
      downloadUrl: '#'
    },
    {
      id: 6,
      title: 'Publicación: Tecnología Vibrotáctil',
      description: 'Artículo científico sobre la tecnología detrás de GRACE',
      type: 'PDF',
      size: '4.1 MB',
      icon: BookOpen,
      downloadUrl: '#'
    }
  ];

  const handleDownload = (url: string, title: string) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading: ${title}`);
    // window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#cfd1c6]/20 to-[#cfd1c6]/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            {translations?.documents?.title || 'Documentos'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {translations?.documents?.subtitle || 'Accede a toda la documentación técnica, estudios clínicos y recursos sobre GRACE y el temblor esencial.'}
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc) => {
              const IconComponent = doc.icon;
              return (
                <div
                  key={doc.id}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-[#0f7ab0]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0f7ab0]/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-[#0f7ab0]" />
                    </div>
                    <div className="text-right">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        {doc.type}
                      </span>
                      <p className="text-gray-500 text-sm mt-1">{doc.size}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0f7ab0] transition-colors">
                    {doc.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {doc.description}
                  </p>
                  
                  <button
                    onClick={() => handleDownload(doc.downloadUrl, doc.title)}
                    className="w-full bg-[#0f7ab0] text-white py-3 px-6 rounded-xl font-medium hover:bg-[#0f7ab0]/90 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
                  >
                    <Download className="w-5 h-5" />
                    Descargar
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
            ¿Necesitas más información?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Si requieres documentación adicional o tienes preguntas específicas sobre nuestros estudios, no dudes en contactarnos.
          </p>
          <button className="bg-[#0f7ab0] text-white px-12 py-4 rounded-full font-medium text-lg hover:bg-[#0f7ab0]/90 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            Contactar al Equipo
          </button>
        </div>
      </section>
    </div>
  );
};

export default Documents;
