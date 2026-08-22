'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('administracao');

  const teamMembers = {
    administracao: [
      {
        name: 'Cláudia Daniela Constance Leal',
        role: 'Presidente do Conselho de Administração',
        date: '15/03/1977',
        bio: 'Administradora na Sociedade Vila dos Números SIGI, S.A. com responsabilidade em Direção Geral de Investimentos, Recursos Humanos e Comunicação.'
      },
      {
        name: 'Ana Lúcia Jardim Leal',
        role: 'Vogal do Conselho de Administração',
        date: '28/09/1977',
        bio: 'CEO da EDINOK, Mestre em Gestão de Projetos. Responsável por Direção Fiscal e Financeira e Direção Comercial.'
      }
    ],
    gestao: [
      {
        name: 'Cláudia Daniela Constance Leal',
        role: 'Direção de Investimentos',
        date: 'Desde 2018',
        bio: 'Gestão estratégica de portfólio imobiliário e relações internacionais.'
      },
      {
        name: 'Ana Lúcia Jardim Leal',
        role: 'Direção Financeira',
        date: 'Desde 2022',
        bio: 'Gestão fiscal, financeira e planejamento comercial.'
      }
    ]
  };

  const getMembers = () => {
    return teamMembers[activeTab as keyof typeof teamMembers] || [];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="bg-white border-b-2 border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition">
            <img src="/logo.png" alt="Vila dos Números" className="h-16 w-auto" />
            <div className="hidden sm:block border-l border-gray-300 pl-4">
              <p className="text-sm font-bold text-blue-900">Vila dos Números – SIGI, S.A.</p>
              <p className="text-xs text-gray-600 tracking-wide">PROPERTY DEVELOPMENT</p>
            </div>
          </Link>
          <nav className="flex gap-8 items-center">
            <a href="/#sobre" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">
              SOBRE
            </a>
            <a href="/#projetos" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">
              PROJETOS
            </a>
            <a href="/#equipa" className="text-gray-900 transition text-sm font-semibold uppercase tracking-wide border-b-2 border-gray-900">
              EQUIPA
            </a>
            <a href="/investors" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">
              INVESTIDORES
            </a>
            <a href="/#contacto" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">
              CONTACTO
            </a>

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

      {/* HERO */}
      <section className="relative h-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=200&fit=crop"
          alt="Equipa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h2 className="text-2xl font-bold text-white">Administração</h2>
            <p className="text-xs text-gray-100 mt-1">
              Conheça a equipa de liderança da Vila dos Números
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* TABS */}
        <div className="flex gap-1 mb-8 border-b-2 border-gray-300 overflow-x-auto pb-4">
          <button
            onClick={() => setActiveTab('administracao')}
            className={`px-6 py-2 font-semibold text-sm uppercase whitespace-nowrap transition border-b-2 ${
              activeTab === 'administracao'
                ? 'text-blue-900 border-blue-900'
                : 'text-gray-600 border-transparent hover:text-blue-900'
            }`}
          >
            Administração
          </button>
          <button
            onClick={() => setActiveTab('gestao')}
            className={`px-6 py-2 font-semibold text-sm uppercase whitespace-nowrap transition border-b-2 ${
              activeTab === 'gestao'
                ? 'text-blue-900 border-blue-900'
                : 'text-gray-600 border-transparent hover:text-blue-900'
            }`}
          >
            Gestão
          </button>
        </div>

        {/* TEAM MEMBERS */}
        <div className="space-y-4">
          {getMembers().map((member, index) => (
            <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 leading-tight">{member.name}</h3>
                  <p className="text-sm text-blue-900 font-semibold leading-tight">{member.role}</p>
                  <p className="text-xs text-gray-500 leading-tight">{member.date}</p>
                  <p className="text-sm text-gray-600 mt-1">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-gray-900 rounded-lg overflow-hidden shadow-lg border border-amber-200 p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-4 leading-tight">Juntos Construímos</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Uma equipa de profissionais experientes dedicados a criar valor através de investimento imobiliário estratégico em Portugal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contacto" className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition text-center">
                  Contacte-nos
                </a>
                <a href="/investors" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition text-center border-2 border-blue-900">
                  Investidores
                </a>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center space-y-4">
              <div className="flex gap-4 items-start bg-white bg-opacity-40 p-4 rounded-lg border border-amber-100">
                <span className="text-3xl">🎯</span>
                <div>
                  <p className="font-bold text-gray-900">Experiência</p>
                  <p className="text-sm text-gray-700">Mais de 20 anos em gestão imobiliária</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white bg-opacity-40 p-4 rounded-lg border border-amber-100">
                <span className="text-3xl">📈</span>
                <div>
                  <p className="font-bold text-gray-900">Resultados</p>
                  <p className="text-sm text-gray-700">Portfólio de €8.7B em valor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2026 Vila dos Números, SIGI S.A. Todos os direitos reservados.</p>
          <p className="text-gray-400 text-sm mt-2">Investimento imobiliário de qualidade em Portugal</p>
        </div>
      </footer>
    </div>
  );
}
