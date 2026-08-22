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
    image: '/images/properties/campo-ourique-1.jpg',
    gallery: [
      '/images/properties/campo-ourique-1.jpg',
      '/images/properties/campo-ourique-2.jpg',
      '/images/properties/campo-ourique-3.jpg',
      '/images/properties/campo-ourique-4.jpg',
      '/images/properties/campo-ourique-5.jpg',
      '/images/properties/campo-ourique-6.jpg',
      '/images/properties/campo-ourique-7.jpg'
    ]
  },
  {
    id: 2,
    name: 'Oeiras',
    location: 'Oeiras',
    region: 'lisboa',
    type: 'Serviços',
    description: 'Fração autónoma destinada a serviços, composta por open space, zona de copa, duas instalações sanitárias e varanda. 139 m² de área útil.',
    image: '/images/properties/img-oeiras.jpg',
    gallery: ['/images/properties/img-oeiras.jpg']
  },
  {
    id: 3,
    name: 'Cascais',
    location: 'Cascais',
    region: 'lisboa',
    type: 'Habitação',
    description: 'Moradia com acabamentos premium e design contemporâneo. Propriedade de luxo com vistas e localização privilegiada.',
    image: '/images/properties/cascais-1.jpg',
    gallery: [
      '/images/properties/cascais-1.jpg',
      '/images/properties/cascais-2.jpg',
      '/images/properties/cascais-3.jpg',
      '/images/properties/cascais-4.jpg'
    ]
  },
  {
    id: 4,
    name: 'Faro',
    location: 'Faro',
    region: 'algarve',
    type: 'Habitação e estacionamento',
    description: 'Oportunidade de investimento no coração do Algarve. Propriedade com excelentes perspectivas de rentabilidade.',
    image: '/images/properties/QUARTO-STUDIO.jpg',
    gallery: ['/images/properties/QUARTO-STUDIO.jpg']
  },
  {
    id: 5,
    name: 'Boliqueime - Patã de Cima',
    location: 'Algarve',
    region: 'algarve',
    type: 'Turismo em Espaço Rural',
    description: 'Projeto de turismo em espaço rural com potencial significativo. Localizado em zona de elevado valor paisagístico.',
    image: '/images/properties/VARANDA.jpg',
    gallery: ['/images/properties/VARANDA.jpg']
  },
  {
    id: 6,
    name: 'São Brás de Alportel - Pedro de Amigos',
    location: 'Algarve',
    region: 'algarve',
    type: 'Terreno Rústico',
    description: 'Investimento em terreno rústico com elevado potencial de valorização. Propriedade estrategicamente localizada no Algarve.',
    image: '/images/properties/sala.jpg',
    gallery: ['/images/properties/sala.jpg']
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

  return (
    <div className="relative w-full h-64 md:h-80 bg-gray-300 rounded-lg overflow-hidden group">
      {/* Main Image */}
      <img
        src={images[currentIndex]}
        alt={`Gallery image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => setImageError(true)}
        onLoad={() => setImageError(false)}
      />

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

          <button
            onClick={onClose}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition"
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
              {/* Carrossel de Imagens */}
              <ImageCarousel images={[project.image, ...project.gallery]} />

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
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur bg-white/95">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="Vila dos Números" className="h-12 w-auto" />
          </a>
          <nav className="flex gap-12">
            <a href="#sobre" className="text-gray-700 hover:text-blue-900 transition text-sm font-medium">SOBRE</a>
            <a href="#projetos" className="text-gray-700 hover:text-blue-900 transition text-sm font-medium">PROJETOS</a>
            <a href="#equipa" className="text-gray-700 hover:text-blue-900 transition text-sm font-medium">EQUIPA</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-900 transition text-sm font-medium">CONTACTO</a>
          </nav>
        </div>
      </header>

      {/* HERO COM IMAGEM DE FUNDO */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/properties/img-ourique.jpg)',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h2 className="text-7xl font-bold text-white mb-6 leading-tight">Vila dos Números</h2>
            <p className="text-2xl text-gray-100 mb-8 leading-relaxed">
              Especializada em investimento imobiliário de médio e longo prazo em Portugal. Portfólio estratégico nas regiões de Grande Lisboa e Algarve.
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

      {/* SOBRE */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-blue-900">Quem Somos</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                A Vila dos Números atua como sociedade de investimento imobiliário sob regime SIGI, perseguindo apreciação de capital de médio e longo prazo através da constituição e gestão de portfólio.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Com foco nas regiões da Grande Lisboa e Algarve, desenvolvemos projetos de qualidade em propriedades urbanas, rurais ou mistas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 h-80 flex flex-col items-center justify-center text-center shadow-lg">
              <div className="text-6xl font-bold text-blue-900 mb-3">15+</div>
              <p className="text-xl text-gray-700 font-semibold mb-2">Projetos em Portfólio</p>
              <p className="text-gray-600">Investimento estratégico em propriedades de qualidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS COM CARROSSEL */}
      <ProjectsSection projects={projects} />

      {/* EQUIPA */}
      <section id="equipa" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-blue-900">Nossa Equipa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl h-96 flex items-center justify-center text-white text-7xl overflow-hidden shadow-lg group-hover:shadow-2xl transition mb-6">
                👩‍💼
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-2">Cláudia Daniela Constance Leal</h4>
              <p className="text-blue-600 font-semibold mb-3">Presidente do Conselho de Administração</p>
              <p className="text-gray-700 leading-relaxed">Antiga jornalista e apresentadora de televisão da RTP Africa com vasta experiência em media e gestão de negócios.</p>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl h-96 flex items-center justify-center text-white text-7xl overflow-hidden shadow-lg group-hover:shadow-2xl transition mb-6">
                👩‍💻
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-2">Ana Lúcia Jardim Leal</h4>
              <p className="text-blue-600 font-semibold mb-3">Membro do Conselho</p>
              <p className="text-gray-700 leading-relaxed">CEO da EDINOK, Mestre em Gestão de Projetos pela ISCTE com especialização em investimento imobiliário.</p>
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
      <section id="contacto" className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-center">Entre em Contacto</h2>
          <p className="text-center text-blue-100 text-lg mb-16">Fale connosco sobre as oportunidades de investimento</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl mb-4">📧</div>
              <p className="text-sm text-blue-300 mb-2">EMAIL</p>
              <a href="mailto:geral@viladosnumeros.com" className="text-white hover:text-blue-200 font-bold">
                geral@viladosnumeros.com
              </a>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📞</div>
              <p className="text-sm text-blue-300 mb-2">TELEFONE</p>
              <a href="tel:913040032" className="text-white hover:text-blue-200 font-bold">
                +351 913 040 032
              </a>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <p className="text-sm text-blue-300 mb-2">MORADA</p>
              <p className="text-white">Praça D. António Ribeiro, nº5 10A<br/>1750-371 Lisboa</p>
            </div>
          </div>

          <form className="max-w-2xl mx-auto bg-blue-800 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Nome *</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Email *</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="seu@email.com" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2 text-sm">Assunto</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Assunto da sua mensagem" />
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2 text-sm">Mensagem *</label>
              <textarea className="w-full px-4 py-3 rounded-lg bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={6} placeholder="Sua mensagem..."></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 rounded-lg transition">
              Enviar Mensagem
            </button>
          </form>
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
