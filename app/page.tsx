'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

async function getPages() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/pages?per_page=100`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error('Failed to fetch pages');
    return res.json();
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

async function getPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts?per_page=20`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Project data with regions and images
const projects = [
  {
    id: 1,
    name: 'Campo de Ourique',
    location: 'Lisboa',
    region: 'lisboa',
    type: 'Habitação de Qualidade',
    description: 'Projeto de reabilitação em pleno coração de Lisboa',
    image: 'https://images.unsplash.com/photo-1578683078519-67c36ca11d4f?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    name: 'Oeiras',
    location: 'Oeiras',
    region: 'lisboa',
    type: 'Serviços Comerciais',
    description: 'Espaço comercial moderno na Área de Lisboa',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    name: 'Cascais',
    location: 'Cascais',
    region: 'lisboa',
    type: 'Habitação Premium',
    description: 'Propriedade de luxo com vista para o mar',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    name: 'Faro',
    location: 'Faro',
    region: 'algarve',
    type: 'Investimento Imobiliário',
    description: 'Oportunidade no coração do Algarve',
    image: 'https://images.unsplash.com/photo-1560806674-9a308ad5aaa0?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    name: 'São Brás de Alportel',
    location: 'Algarve',
    region: 'algarve',
    type: 'Desenvolvimento Rural',
    description: 'Projeto de desenvolvimento sustentável',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25442c?w=800&h=600&fit=crop'
  },
  {
    id: 6,
    name: 'Boliqueime',
    location: 'Algarve',
    region: 'algarve',
    type: 'Habitação Residencial',
    description: 'Complexo residencial em zona privilegiada',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
  },
];

// Client component for interactive projects section
function ProjectsSection({ projects }: { projects: any[] }) {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredProjects = selectedRegion === 'all'
    ? projects
    : projects.filter(p => p.region === selectedRegion);

  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-blue-900 mb-4">Nossos Projetos</h2>
          <p className="text-xl text-gray-600">Portfolio de investimento imobiliário</p>
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

        {/* GRID DE PROJETOS FILTRADOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Imagem do Projeto */}
              <div className="relative overflow-hidden rounded-lg h-64 shadow-lg hover:shadow-2xl transition mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                {/* Overlay com informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-semibold text-blue-300 mb-1">{project.type}</p>
                    <p className="text-lg font-bold">{project.name}</p>
                  </div>
                </div>
              </div>

              {/* Informações do Card */}
              <div className="mt-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold text-blue-900 flex-1">{project.name}</h4>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-2">📍 {project.location}</span>
                </div>
                <p className="text-blue-600 font-semibold text-xs mb-2 uppercase tracking-wide">{project.type}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                <button className="mt-4 text-blue-900 hover:text-blue-600 font-bold text-sm transition">
                  Ver Detalhes →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Nenhum projeto encontrado para esta região.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default async function Home() {
  const pages = await getPages();
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">Vila dos Números</h1>
          <nav className="flex gap-12">
            <a href="#sobre" className="text-gray-700 hover:text-blue-900 transition text-sm font-medium">SOBRE</a>
            <a href="#projetos" className="text-gray-700 hover:text-blue-900 transition text-sm font-medium">PROJETOS</a>
            <a href="#equipa" className="text-gray-700 hover:text-blue-900 transition text-sm font-medium">EQUIPA</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-900 transition text-sm font-medium">CONTACTO</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-6xl font-bold mb-6 leading-tight">Construindo o Futuro</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">Especializada em investimento imobiliário de médio e longo prazo em Portugal. Portfólio estratégico nas regiões de Grande Lisboa e Algarve.</p>
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded font-bold transition">
              Explorar Projetos
            </button>
          </div>
        </div>
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
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-900 mb-2">15+</div>
                <p className="text-gray-700">Projetos em Portfólio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS COM FILTROS INTERATIVOS */}
      <ProjectsSection projects={projects} />

      {/* EQUIPA */}
      <section id="equipa" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-blue-900">Nossa Equipa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg h-80 flex items-center justify-center text-white text-6xl overflow-hidden shadow-lg group-hover:shadow-xl transition mb-6">
                👩‍💼
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-2">Cláudia Daniela Constance Leal</h4>
              <p className="text-blue-600 font-semibold mb-3">Presidente do Conselho de Administração</p>
              <p className="text-gray-700">Antiga jornalista e apresentadora de televisão da RTP Africa com vasta experiência em media e gestão de negócios.</p>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg h-80 flex items-center justify-center text-white text-6xl overflow-hidden shadow-lg group-hover:shadow-xl transition mb-6">
                👩‍💻
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-2">Ana Lúcia Jardim Leal</h4>
              <p className="text-blue-600 font-semibold mb-3">Membro do Conselho</p>
              <p className="text-gray-700">CEO da EDINOK, Mestre em Gestão de Projetos pela ISCTE com especialização em investimento imobiliário.</p>
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
              <div className="text-4xl mb-4 group-hover:scale-110 transition">🔍</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Aquisição de Propriedades</h4>
              <p className="text-gray-700 leading-relaxed">Identificação e aquisição de propriedades com elevado potencial de valorização em mercados selecionados.</p>
            </div>

            <div className="group border-l-4 border-blue-600 pl-6 py-4 hover:border-blue-900 transition">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">🔨</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Desenvolvimento e Reabilitação</h4>
              <p className="text-gray-700 leading-relaxed">Projetos de qualidade em propriedades urbanas, rurais ou mistas com foco em agregação de valor.</p>
            </div>

            <div className="group border-l-4 border-blue-800 pl-6 py-4 hover:border-blue-600 transition">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">💼</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Gestão de Portfólio</h4>
              <p className="text-gray-700 leading-relaxed">Constituição e gestão estratégica de portfólio imobiliário com maximização de retorno.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG / NOTÍCIAS */}
      {posts && posts.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-16 text-blue-900">Notícias e Artigos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 6).map((post: any) => (
                <div key={post.id} className="group">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-48 flex items-center justify-center text-white overflow-hidden shadow-lg group-hover:shadow-xl transition mb-4">
                    <h3 className="text-center font-bold px-4 line-clamp-3">{post.title.rendered}</h3>
                  </div>
                  <div className="px-2">
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                      {post.excerpt?.rendered?.replace(/<[^>]*>/g, '')?.substring(0, 100) || 'Sem descrição'}...
                    </p>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-600 font-bold text-sm">
                      Ler mais →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-4 text-center">Entre em Contacto</h2>
            <p className="text-center text-blue-100 text-lg mb-16">Fale connosco sobre as oportunidades de investimento</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <p className="text-sm text-blue-300 mb-2">EMAIL</p>
                <a href="mailto:geral@viladosnumeros.com" className="text-white hover:text-blue-200 font-bold">
                  geral@viladosnumeros.com
                </a>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <p className="text-sm text-blue-300 mb-2">TELEFONE</p>
                <a href="tel:913040032" className="text-white hover:text-blue-200 font-bold">
                  +351 913 040 032
                </a>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <p className="text-sm text-blue-300 mb-2">MORADA</p>
                <p className="text-white">Praça D. António Ribeiro, nº5 10A<br/>1750-371 Lisboa</p>
              </div>
            </div>

            <form className="bg-blue-800 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Nome *</label>
                  <input type="text" className="w-full px-4 py-3 rounded bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Email *</label>
                  <input type="email" className="w-full px-4 py-3 rounded bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2 text-sm">Assunto</label>
                <input type="text" className="w-full px-4 py-3 rounded bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Assunto da sua mensagem" />
              </div>
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2 text-sm">Mensagem *</label>
                <textarea className="w-full px-4 py-3 rounded bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={6} placeholder="Sua mensagem..."></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 rounded-lg transition">
                Enviar Mensagem
              </button>
            </form>
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
