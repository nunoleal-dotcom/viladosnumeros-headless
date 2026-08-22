'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Removed WordPress API calls due to CORS issues - using static project data instead

// Project data with regions and images
const projects = [
  {
    id: 1,
    name: 'Campo de Ourique',
    location: 'Lisboa',
    region: 'lisboa',
    type: 'Habitação',
    description: 'Propriedade Total, composto por R/C, 1º andar, 2º andar e águas-furtadas. 239 m² de área de construção. Totalmente renovado.',
    locationDescription: 'Prédio urbano, inserido numa zona estabilizada e residencial de 1ª habitação onde ocorrem outros tipos de ocupação compatíveis com habitação servida de todo o tipo de equipamentos, serviços e comércio local bem como alojamento local (turismo)',
    image: '/images/properties/campo-ourique-1.jpg',
    video: '/videos/campo-ourique.mp4',
    gallery: [
      '/images/properties/campo-ourique-1.jpg',
      '/images/properties/campo-ourique-2.jpg',
      '/images/properties/campo-ourique-3.jpg',
      '/images/properties/campo-ourique-4.jpg',
      '/images/properties/campo-ourique-5.jpg',
      '/images/properties/campo-ourique-6.jpg',
      '/images/properties/campo-ourique-7.jpg'
    ],
    details: {
      coordinates: '38.719052, -9.167897',
      rendaPotencial: '5.975,00€/Mês',
      valorMercado: '1.383.800,00€',
      anoConstruction: '1928',
      typeImovel: 'Prédio Urbano',
      areaConstruction: '239 m²',
      areaTerrain: '100 m²',
      numberOfFloors: '4',
      condition: 'Totalmente renovado'
    }
  },
  {
    id: 2,
    name: 'Oeiras',
    location: 'Oeiras',
    region: 'lisboa',
    type: 'Serviços',
    description: 'Fração autónoma destinada a serviços, composta por open space, zona de copa, duas instalações sanitárias e varanda. 139 m² de área útil.',
    locationDescription: 'A zona envolvente é essencialmente habitacional de 1ª habitação com edifícios multifamiliares com cérceas de 5 a 7 pisos em Zona servida de diversidade abrangente de serviços e equipamentos. O imóvel está inserido em zona com infraestruturas executadas com acessos às principais vias de conexão a Lisboa a distarem no máximo 1,7km, aproximadamente. Zona infraestruturada com boa rede de transportes públicos nomeadamente rede municipal rodoviária e rede ferroviária – distando a estação de comboios de Santo Amaro a 1 Km de distância.',
    image: '/images/properties/img-oeiras.jpg',
    video: '/videos/oeiras.mp4',
    gallery: [
      '/images/properties/img-oeiras.jpg',
      '/images/properties/LOUNGE.jpg',
      '/images/properties/SALA-ESTAR.jpg',
      '/images/properties/SALA-JANTAR.jpg'
    ],
    details: {
      coordinates: '38.694452, -9.311073',
      rendaPotencial: '3.000€/Mês',
      valorMercado: '309.700,00€',
      anoConstruction: '2013',
      typeImovel: 'Prédio urbano',
      areaConstruction: '139 m²',
      areaTerrain: '1.840 m²',
      numberOfFloors: '3 acima + 2 abaixo',
      condition: 'Muito bom'
    }
  },
  {
    id: 3,
    name: 'Cascais',
    location: 'Cascais',
    region: 'lisboa',
    type: 'Habitação',
    description: 'Moradia com acabamentos premium e design contemporâneo. Propriedade de luxo com vistas e localização privilegiada.',
    locationDescription: 'O imóvel insere-se no núcleo central de Cascais, numa zona habitacional de densidade média baixa com imóveis unifamiliares de características e volumetria similares. A zona é servida por comércio tradicional de rua, mercado Municipal e a cerca de 150m grandes superfícies comerciais; na envolvente próxima poder-se-á encontrar escolas, centro de Saúde de cascais a 150m, clínicas, farmácia, hotel e entidades bancárias. Zona servida de excelente rede de transportes públicos, com transporte rodoviário e ferroviário numa distância a pé.',
    image: '/images/properties/cascais-1.jpg',
    video: '/videos/cascais1.mp4',
    gallery: [
      '/images/properties/cascais-1.jpg',
      '/images/properties/cascais-2.jpg',
      '/images/properties/cascais-3.jpg',
      '/images/properties/cascais-4.jpg'
    ],
    details: {
      coordinates: '38°42\'10"N, 9°25\'12"W',
      rendaPotencial: '20.000€/Mês',
      valorMercado: '3.634.102,00€',
      anoConstruction: '1962 (inicial) / 2023 (renovação)',
      typeImovel: 'Prédio urbano',
      areaConstruction: '680 m²',
      areaTerrain: '1.460 m²',
      numberOfFloors: '3 acima + 2 abaixo',
      condition: 'Novo'
    }
  },
  {
    id: 4,
    name: 'Faro',
    location: 'Faro',
    region: 'algarve',
    type: 'Habitação e estacionamento',
    description: 'Oportunidade de investimento no coração do Algarve. Propriedade com excelentes perspectivas de rentabilidade.',
    locationDescription: 'Situado no centro da cidade de Faro, principal artéria da cidade, em zona urbana consolidada, com bons acessos e ótimas áreas de circulação envolvente. Inserida numa zona composta por edifícios de habitação multifamiliar de cércea elevada, com comércio e/ou serviços ao nível do R/C e por vezes 1ºandar. Zona servida em pleno pela rede de transportes públicos municipais, regionais e nacionais. O imóvel está localizado junto das principais infraestruturas urbanas bem como de todos os serviços (tribunal; escolas; superfícies comerciais; cartórios, finanças, conservatórias e outras)',
    image: '/images/properties/QUARTO-STUDIO.jpg',
    video: '/videos/faro.mp4',
    gallery: [
      '/images/properties/QUARTO-STUDIO.jpg',
      '/images/properties/LOUNGE.jpg',
      '/images/properties/SALA-ESTAR.jpg',
      '/images/properties/BNH.jpg'
    ],
    details: {
      coordinates: '37.017838, -7.927055',
      rendaPotencial: '1.350€/Mês',
      valorMercado: '320.700,00€',
      anoConstruction: '1995',
      typeImovel: 'Fração autónoma T2 + estacionamento',
      areaConstruction: '132 m²',
      areaTerrain: '919,50 m²',
      numberOfFloors: '2 pisos',
      condition: 'Muito bom'
    }
  },
  {
    id: 5,
    name: 'Boliqueime - Patã de Cima',
    location: 'Algarve',
    region: 'algarve',
    type: 'Turismo em Espaço Rural',
    description: 'Projeto de turismo em espaço rural com potencial significativo. Localizado em zona de elevado valor paisagístico.',
    locationDescription: 'O imóvel localiza-se na localidade de Patã de Cima, a 3 km de Boliqueime, numa zona considerada rural composta por moradias isoladas a norte da N125 – via confrontante. O imóvel encontra-se localizado a cerca de 10 km de Albufeira, com todo o comércio e serviços que a cidade turística tem para oferecer a menos de 10 km de Vilamoura, localidade igualmente turística, com praias e destinado e ocupado essencialmente por segunda habitação, com comércio direcionado para a atividade turística. A zona está servida de excelentes acessos, a cerca de 32 km do Aeroporto de Faro e a menos de 6 km do nó de acesso da A22',
    image: '/images/properties/boliqueime-exterior-1.jpg',
    gallery: [
      '/images/properties/boliqueime-exterior-1.jpg',
      '/images/properties/boliqueime-bedroom.jpg',
      '/images/properties/boliqueime-courtyard.jpg',
      '/images/properties/boliqueime-pool-area.jpg',
      '/images/properties/boliqueime-patio.jpg',
      '/images/properties/boliqueime-exterior-2.jpg',
      '/images/properties/boliqueime-common-area.jpg'
    ],
    details: {
      coordinates: '37°07\'21.8"N 8°10\'54.8"W',
      valorMercado: '3.284.000,00€',
      anoConstruction: '1951 (existente) / 2023 (em construção)',
      typeImovel: 'Prédio misto',
      areaConstruction: '1.022,3 m² (11 unidades alojamento)',
      areaTerrain: '24.335,50 m²',
      numberOfFloors: '1 + 1',
      condition: 'Em renovação'
    }
  },
  {
    id: 6,
    name: 'São Brás de Alportel - Pedro de Amigos',
    location: 'Algarve',
    region: 'algarve',
    type: 'Terreno Rústico',
    description: 'Investimento em terreno rústico com elevado potencial de valorização. Propriedade estrategicamente localizada no Algarve.',
    locationDescription: 'Próximo do Centro e da Barragem do Arimbo, com pouco interesse comercial dado tratar-se de uma zona sem habitações e com terrenos com grandes desníveis de difícil acesso; pese embora tenha grande atratividade e potencial a nível turístico. Dista menos de 5 Km do Centro de S. Brás de Alportel; menos de 6km de Alportel; a cerca de 20km do aeroporto internacional de Faro e acerca de 10Km do nó de acesso à A22, acesso feito pela emblemática N2.',
    image: '/images/properties/2-Andar-sala.jpg',
    gallery: [
      '/images/properties/2-Andar-sala.jpg',
      '/images/properties/SALA-ESTAR.jpg',
      '/images/properties/BNH.jpg',
      '/images/properties/Escadas-detalhe.jpg',
      '/images/properties/VARANDA.jpg',
      '/images/properties/LOUNGE.jpg'
    ],
    details: {
      coordinates: '37°7\'21.91"N, 8°10\'54.86"W',
      valorMercado: '779.877€',
      typeImovel: 'Terreno rústico',
      areaConstruction: 'Sem construção',
      areaTerrain: '1.896.478,00 m²',
      potentialConstruction: 'Habitação (500m²) / Turismo (2000m²)',
      numberOfFloors: 'Máx 2 (incluindo semienterrados)',
      condition: 'Muito bom'
    }
  },
];

// Image Carousel Component
function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const currentItem = images[currentIndex];
  const isVideo = currentItem?.endsWith('.mp4') || currentItem?.endsWith('.webm');

  return (
    <div className="relative w-full h-64 md:h-80 bg-gray-300 rounded-lg overflow-hidden group">
      {/* Main Image or Video */}
      {isVideo ? (
        <video
          src={currentItem}
          className="w-full h-full object-cover"
          controls
          autoPlay
          muted
          playsInline
        />
      ) : (
        <img
          src={currentItem}
          alt={`Gallery item ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImageError(true)}
          onLoad={() => setImageError(false)}
        />
      )}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full transition z-10"
      >
        ←
      </button>
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full transition z-10"
      >
        →
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded text-sm font-semibold">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
}

// Modal Component for Project Details
function ProjectModal({ project, onClose }: { project: any; onClose: () => void }) {
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const allImages = [project.image, ...project.gallery];

  const goToPrevious = () => {
    setModalImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setModalImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right text-gray-500 hover:text-gray-800 text-3xl z-20 bg-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          ✕
        </button>

        {/* Large Image with Carousel */}
        <div className="relative w-full bg-gray-300">
          {/* Main Large Image */}
          <img
            src={allImages[modalImageIndex]}
            alt={`${project.name} - ${modalImageIndex + 1}`}
            className="w-full h-96 md:h-[500px] object-cover"
          />

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full transition text-2xl"
          >
            ←
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full transition text-2xl"
          >
            →
          </button>

          {/* Counter */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg font-bold">
            {modalImageIndex + 1}/{allImages.length}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-2">{project.name}</h2>
          <p className="text-blue-600 font-semibold text-lg mb-4">{project.type}</p>
          <p className="text-gray-500 text-lg mb-6">📍 {project.location}</p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Thumbnail Gallery */}
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Todas as Imagens</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {allImages.map((img: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setModalImageIndex(idx)}
                className={`rounded-lg overflow-hidden border-2 transition ${
                  idx === modalImageIndex
                    ? 'border-blue-900'
                    : 'border-gray-300 hover:border-blue-600'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumb ${idx + 1}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>

          {/* LOCALIZAÇÃO */}
          {project.locationDescription && (
            <div className="border-t pt-6 mt-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Localização e Enquadramento Urbano</h3>
              <p className="text-gray-700 leading-relaxed text-sm">{project.locationDescription}</p>
            </div>
          )}

          {/* DETALHES DO PROJETO */}
          <div className="border-t pt-6 mt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Informações do Projeto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.details && Object.entries(project.details).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-3 rounded">
                  <p className="text-xs text-gray-600 font-semibold uppercase">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                  <p className="text-sm text-gray-800 font-medium">{value as string}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition mt-6"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

// Client component for interactive projects section
function ProjectsSection({ projects }: { projects: any[] }) {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = selectedRegion === 'all'
    ? projects
    : projects.filter(p => p.region === selectedRegion);

  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-blue-900 mb-4">Nossos Projetos</h2>
          <p className="text-xl text-gray-600">Portfolio de investimento imobiliário com galeria de imagens</p>
        </div>

        {/* FILTROS INTERATIVOS */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedRegion('all')}
            className={`px-6 py-2 rounded font-medium transition whitespace-nowrap ${
              selectedRegion === 'all'
                ? 'bg-blue-900 text-white hover:bg-blue-800'
                : 'border border-gray-300 text-gray-700 hover:border-blue-900'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setSelectedRegion('lisboa')}
            className={`px-6 py-2 rounded font-medium transition whitespace-nowrap ${
              selectedRegion === 'lisboa'
                ? 'bg-blue-900 text-white hover:bg-blue-800'
                : 'border border-gray-300 text-gray-700 hover:border-blue-900'
            }`}
          >
            Grande Lisboa
          </button>
          <button
            onClick={() => setSelectedRegion('algarve')}
            className={`px-6 py-2 rounded font-medium transition whitespace-nowrap ${
              selectedRegion === 'algarve'
                ? 'bg-blue-900 text-white hover:bg-blue-800'
                : 'border border-gray-300 text-gray-700 hover:border-blue-900'
            }`}
          >
            Algarve
          </button>
        </div>

        {/* GRID COM CARROSSEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Carrossel de Imagens e Vídeos */}
              <ImageCarousel images={project.video ? [project.video, project.image, ...project.gallery] : [project.image, ...project.gallery]} />

              {/* Informações do Card */}
              <div className="mt-6 bg-white rounded-lg p-6 border border-gray-100 hover:border-blue-900 transition">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-blue-900">{project.name}</h4>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-2">📍 {project.location}</span>
                </div>
                <p className="text-blue-600 font-semibold text-xs mb-3 uppercase tracking-wider">{project.type}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{project.description}</p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-blue-900 hover:text-blue-600 font-bold text-sm transition"
                >
                  Ver Detalhes →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Nenhum projeto encontrado para esta região.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="bg-white border-b-2 border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src="/logo.png" alt="Vila dos Números" className="h-16 w-auto" />
          </a>

          {/* Navigation */}
          <nav className="flex gap-8 items-center">
            <a href="#sobre" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">SOBRE</a>
            <a href="#projetos" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">PROJETOS</a>
            <a href="#equipa" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">EQUIPA</a>
            <a href="/investors" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">INVESTIDORES</a>
            <a href="#contacto" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">CONTACTO</a>

            {/* Language Selector */}
            <div className="flex gap-3 ml-4 pl-4 border-l border-gray-200">
              <a href="#" className="text-gray-800 font-bold text-xs hover:text-gray-600 transition">PT</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-600 text-xs hover:text-gray-800 transition">EN</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-600 text-xs hover:text-gray-800 transition">FR</a>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO COM VÍDEO DE FUNDO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Vídeo de Fundo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h2 className="text-7xl font-bold text-white mb-6 leading-tight">Vila dos Números</h2>
            <p className="text-2xl text-gray-100 mb-8 leading-relaxed">
              Uma Sociedade de Investimento e Gestão Imobiliária (SIGI) atuando no setor multifamiliar, focado no desenvolvimento, reabilitação, aquisição e gestão de comunidades residenciais distintas em mercados selecionados em Portugal.
            </p>
            <div className="flex gap-4">
              <a href="#projetos" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition text-lg">
                Explorar Projetos
              </a>
              <a href="/investors" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold transition text-lg border border-white">
                Para Investidores
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white text-3xl">↓</div>
      </section>

      {/* SOBRE COM BACKGROUND ELEGANTE */}
      <section id="sobre" className="relative py-32 bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-blue-900 text-center">Vila dos Números - Quem Somos</h2>
          <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            A Vila dos Números atua como sociedade de investimento imobiliário sob regime SIGI, perseguindo apreciação de capital de médio e longo prazo através da constituição e gestão estratégica de portfólio em Portugal.
          </p>

          {/* INDICADORES - GRID 2x4 COM PROFUNDIDADE - PADRONIZADO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* PROJETOS */}
            <div className="group bg-white rounded-2xl p-10 text-center border-2 border-blue-100 shadow-2xl hover:shadow-3xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-900 mb-3">6</div>
              <p className="text-gray-800 font-bold text-lg">Projetos em Portfólio</p>
              <p className="text-sm text-gray-500 mt-3">Lisboa & Algarve</p>
            </div>

            {/* ÁREA */}
            <div className="group bg-white rounded-2xl p-10 text-center border-2 border-blue-100 shadow-2xl hover:shadow-3xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-900 mb-3">270K</div>
              <p className="text-gray-800 font-bold text-lg">m² Totais</p>
              <p className="text-sm text-gray-500 mt-3">Área desenvolvida</p>
            </div>

            {/* OCUPAÇÃO */}
            <div className="group bg-white rounded-2xl p-10 text-center border-2 border-blue-100 shadow-2xl hover:shadow-3xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-900 mb-3">100%</div>
              <p className="text-gray-800 font-bold text-lg">Taxa de Ocupação</p>
              <p className="text-sm text-gray-500 mt-3">Rentabilidade operacional</p>
            </div>

            {/* DIVIDEND YIELD */}
            <div className="group bg-white rounded-2xl p-10 text-center border-2 border-blue-100 shadow-2xl hover:shadow-3xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-900 mb-3">6%</div>
              <p className="text-gray-800 font-bold text-lg">Dividend Yield</p>
              <p className="text-sm text-gray-500 mt-3">Retorno anualizado</p>
            </div>

            {/* VALOR TOTAL */}
            <div className="group bg-white rounded-2xl p-10 text-center border-2 border-blue-100 shadow-2xl hover:shadow-3xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-900 mb-3">€8.7B</div>
              <p className="text-gray-800 font-bold text-lg">Valor de Portfólio</p>
              <p className="text-sm text-gray-500 mt-3">Avaliação total 2024</p>
            </div>

            {/* REGIME SIGI */}
            <div className="group bg-white rounded-2xl p-10 text-center border-2 border-blue-100 shadow-2xl hover:shadow-3xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-900 mb-3">SIGI</div>
              <p className="text-gray-800 font-bold text-lg">Regime Especial</p>
              <p className="text-sm text-gray-500 mt-3">Decreto-Lei 19/2019</p>
            </div>

            {/* REGIÕES */}
            <div className="group bg-white rounded-2xl p-10 text-center border-2 border-blue-100 shadow-2xl hover:shadow-3xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-900 mb-3">2</div>
              <p className="text-gray-800 font-bold text-lg">Regiões Estratégicas</p>
              <p className="text-sm text-gray-500 mt-3">Lisboa & Algarve</p>
            </div>

            {/* ANO FUNDAÇÃO */}
            <div className="group bg-white rounded-2xl p-10 text-center border-2 border-blue-100 shadow-2xl hover:shadow-3xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="text-5xl font-bold text-blue-900 mb-3">2019</div>
              <p className="text-gray-800 font-bold text-lg">Desde o Início</p>
              <p className="text-sm text-gray-500 mt-3">Crescimento consistente</p>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm mt-8">Dados e informação a 22/08/2026.</p>
        </div>
      </section>

      {/* PROJETOS COM CARROSSEL */}
      <ProjectsSection projects={projects} />

      {/* EQUIPA */}
      <section id="equipa" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-20 text-blue-900 text-center">Administração</h2>

          {/* MEMBRO 1 */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="rounded-xl h-96 overflow-hidden shadow-xl">
              <img
                src="/images/team-member-1.jpg"
                alt="Cláudia Daniela Constance Leal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-4">
              <h3 className="text-4xl font-bold text-blue-900 mb-2">Cláudia Daniela Constance Leal</h3>
              <p className="text-sm text-gray-600 mb-4">Nascida a 15 de Março de 1977</p>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-8">Presidente do Conselho de Administração</div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-blue-900 mb-3">2018 - Presente</h4>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>✓ Administradora na Sociedade Vila dos Números SIGI, S.A.</li>
                    <li className="ml-4">• Direção Geral de Investimentos e Gestão de Património</li>
                    <li className="ml-4">• Direção Geral de Recursos Humanos</li>
                    <li className="ml-4">• Direção de Comunicação e Marketing</li>
                    <li>✓ Correspondente da Televisão de Moçambique em Portugal (desde 2022)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-3">2012 - 2018</h4>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>✓ Apresentadora do programa Bem-vindos da RTP-África</li>
                    <li>✓ Gestão e Coordenação de Informação e Conteúdos</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-3">2008 - 2010</h4>
                  <p className="text-gray-700">Gestão e Coordenação de Informação na TV Zimbo em Angola</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-3">2006 - 2008</h4>
                  <p className="text-gray-700">Coordenadora Geral de Formação e Informação na OCHA/IRIN das Nações Unidas em Angola</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-3">1998 - 2005</h4>
                  <p className="text-gray-700">Editora, Jornalista e Apresentadora da Televisão de Moçambique</p>
                </div>

                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm text-gray-700"><span className="font-bold">Formação:</span> Licenciada em Linguística e Literatura. Atualmente estudante de Doutoramento em Estudos Africanos no ISCTE-IUL.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SEPARADOR */}
          <div className="my-16 border-t border-gray-300"></div>

          {/* MEMBRO 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl font-bold text-blue-900 mb-2">Ana Lúcia Jardim Leal</h3>
              <p className="text-sm text-gray-600 mb-4">Nascida a 28 de Setembro de 1977</p>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-8">Vogal do Conselho de Administração</div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-blue-900 mb-3">2022 - Presente</h4>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>✓ Administradora na Sociedade Vila dos Números - SIGI, S.A.</li>
                    <li className="ml-4">• Direção Fiscal e Financeira</li>
                    <li className="ml-4">• Direção Comercial e de Planeamento</li>
                    <li>✓ CEO da EDINOK</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-3">2016 - 2022</h4>
                  <p className="text-gray-700">Administradora na Sociedade Vila dos Números, S.A.</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-3">2014 - 2022</h4>
                  <p className="text-gray-700">Manager de Corporate Strategy na empresa Voxatlas, Unipessoal, Lda.</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-3">2015 - 2016</h4>
                  <p className="text-gray-700">Project Manager na empresa Bravegeneration, S.A.</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-3">2010 - 2014</h4>
                  <p className="text-gray-700">Project Leader - Operational Quality Engineer Department na empresa Nokia Corporation</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-3">2003 - 2010</h4>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>✓ Geographic Analyst, DMO Q Specialist e Database Quality Engineer na empresa NAVTEQ</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-3">2000 - 2003</h4>
                  <p className="text-gray-700">Gestora de Qualidade na empresa Ensul Meci - Gestão de Projetos de Engenharia, S.A.</p>
                </div>

                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm text-gray-700"><span className="font-bold">Formação:</span> Licenciada em Geografia pela Universidade de Lisboa. Mestre em Gestão de Projetos no Instituto Universitário de Lisboa (ISCTE).</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-xl h-96 overflow-hidden shadow-xl">
              <img
                src="/images/team-member-2.jpg"
                alt="Ana Lúcia Jardim Leal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-blue-900">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group border-l-4 border-blue-900 pl-6 py-4 hover:border-blue-600 transition">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🔍</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Aquisição de Propriedades</h4>
              <p className="text-gray-700 leading-relaxed">Identificação e aquisição de propriedades com elevado potencial de valorização em mercados selecionados.</p>
            </div>

            <div className="group border-l-4 border-blue-600 pl-6 py-4 hover:border-blue-900 transition">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🔨</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Desenvolvimento e Reabilitação</h4>
              <p className="text-gray-700 leading-relaxed">Projetos de qualidade em propriedades urbanas, rurais ou mistas com foco em agregação de valor.</p>
            </div>

            <div className="group border-l-4 border-blue-800 pl-6 py-4 hover:border-blue-600 transition">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">💼</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Gestão de Portfólio</h4>
              <p className="text-gray-700 leading-relaxed">Constituição e gestão estratégica de portfólio imobiliário com maximização de retorno.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* ESQUERDA - CONTACTOS */}
            <div>
              <h2 className="text-5xl font-bold text-blue-900 mb-4">Entre em Contacto</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Contacte-nos para conhecer as oportunidades de investimento em imobiliário português.
              </p>

              {/* 3 CARDS DE CONTACTO */}
              <div className="space-y-8">
                {/* EMAIL */}
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</p>
                  <a href="mailto:geral@viladosnumeros.com" className="text-2xl font-bold text-blue-900 hover:text-blue-600 transition">
                    geral@viladosnumeros.com
                  </a>
                </div>

                {/* TELEFONE */}
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Telefone</p>
                  <a href="tel:+351913040032" className="text-2xl font-bold text-blue-900 hover:text-blue-600 transition">
                    +351 913 040 032
                  </a>
                </div>

                {/* MORADA */}
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Morada</p>
                  <p className="text-lg text-blue-900 font-semibold leading-relaxed">
                    Praça D. António Ribeiro, nº5 10A<br/>
                    <span className="text-gray-700">1750-371 Lisboa, Portugal</span>
                  </p>
                </div>
              </div>
            </div>

            {/* DIREITA - FORMULÁRIO */}
            <div>
              <form className="space-y-6">
                {/* NOME E EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Nome *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* ASSUNTO */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Assunto</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Assunto da sua mensagem"
                  />
                </div>

                {/* MENSAGEM */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Mensagem *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    placeholder="A sua mensagem..."
                  ></textarea>
                </div>

                {/* BOTÃO */}
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white font-semibold py-4 rounded-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Os seus dados serão processados de acordo com a nossa política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-bold mb-4">Vila dos Números</h4>
              <p className="text-blue-300 text-sm">Investimento imobiliário de qualidade em Portugal. Portfólio estratégico em Grande Lisboa e Algarve.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Navegação</h4>
              <ul className="space-y-2">
                <li><a href="#sobre" className="text-blue-300 hover:text-white text-sm transition">Quem Somos</a></li>
                <li><a href="#projetos" className="text-blue-300 hover:text-white text-sm transition">Projetos</a></li>
                <li><a href="#equipa" className="text-blue-300 hover:text-white text-sm transition">Equipa</a></li>
                <li><a href="#contacto" className="text-blue-300 hover:text-white text-sm transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-300 hover:text-white text-sm transition">Política de Privacidade</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white text-sm transition">Termos e Condições</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white text-sm transition">Política de Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-blue-300">
                <li>📧 geral@viladosnumeros.com</li>
                <li>📞 +351 913 040 032</li>
                <li>📍 Lisboa, Portugal</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
            <p>&copy; 2026 Vila dos Números, SIGI S.A. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
