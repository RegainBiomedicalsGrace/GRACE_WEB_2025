
import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Linkedin } from 'lucide-react';

interface TeamProps {
  translations: any;
}

const Team: React.FC<TeamProps> = ({ translations }) => {
  const teamMembers = [
    {
      id: 'member1',
      image: '/lovable-uploads/d6b15b75-0058-42b6-a5cc-b561e721c725.png',
      linkedin: 'https://www.linkedin.com/in/rubensaaib/'
    },
    {
      id: 'member2',
      image: '/lovable-uploads/523b3c28-a85a-43eb-97a4-27ee4d4d50ea.png',
      linkedin: 'https://www.linkedin.com/in/cedric-little-b5345b2/'
    },
    {
      id: 'member3',
      image: '/lovable-uploads/e7d50d70-a1f2-420b-b1de-0f10c5eabed0.png',
      linkedin: 'https://www.linkedin.com/in/pablo-andrés-prato-benavides-220067130/?originalSubdomain=cl'
    },
    {
      id: 'member4',
      image: '/lovable-uploads/e7e988c1-4146-483a-acd9-6ba68a702689.png',
      linkedin: 'https://www.linkedin.com/in/felipe-nagel-9ba4bb159/'
    },
    {
      id: 'member5',
      image: '/lovable-uploads/74a46a49-a1ad-450f-904a-128d9560ba44.png',
      linkedin: 'https://www.linkedin.com/in/mathias-reusser-76a98b24b/'
    },
    {
      id: 'member6',
      image: '/lovable-uploads/41da353d-35de-481b-943c-bbd49b4e10ba.png',
      linkedin: 'https://www.linkedin.com/in/bastian-vasquez-salazar/'
    }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
            Nuestro Equipo
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Conoce a las personas detrás de la innovación. Somos un equipo interdisciplinario comprometido con la innovación médica desde Chile.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white rounded-3xl overflow-hidden"
                onClick={() => window.open(member.linkedin, '_blank')}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={translations?.team?.members?.[member.id]?.name}
                      className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* LinkedIn Icon Overlay */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Linkedin className="w-6 h-6 text-[#0f7ab0]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">
                      {translations?.team?.members?.[member.id]?.name}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {translations?.team?.members?.[member.id]?.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
