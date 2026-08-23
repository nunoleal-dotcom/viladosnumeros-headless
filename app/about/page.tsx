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
          {getMembers().map((member, index) => {
            const initials = member.name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
            const colors = [
              'bg-blue-500',
              'bg-purple-500',
              'bg-pink-500',
              'bg-indigo-500',
              'bg-teal-500',
              'bg-orange-500'
            ];
            const bgColor = colors[index % colors.length];

            return (
              <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${bgColor} rounded-full flex items-center justify-center`}>
                    <span className="text-lg font-bold text-white">{initials}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900 leading-tight">{member.name}</h3>
                    <p className="text-sm text-blue-900 font-semibold leading-tight">{member.role}</p>
                    <p className="text-xs text-gray-500 leading-tight">{member.date}</p>
                    <p className="text-sm text-gray-600 mt-1">{member.bio}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Contacte-nos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-8 rounded-xl border-2 border-blue-100 shadow-md hover:shadow-lg hover:border-blue-200 transition">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">📧</span>
              <p className="text-sm text-gray-600 font-bold uppercase tracking-wide">Email</p>
            </div>
            <p className="text-lg font-semibold text-gray-900">investidores@viladosnumeros.com</p>
          </div>
          <div className="bg-amber-50 p-8 rounded-xl border-2 border-blue-100 shadow-md hover:shadow-lg hover:border-blue-200 transition">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">📞</span>
              <p className="text-sm text-gray-600 font-bold uppercase tracking-wide">Telefone</p>
            </div>
            <p className="text-lg font-semibold text-gray-900">+351 913 040 032</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-gray-800 py-8 mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-semibold">&copy; 2026 Vila dos Números, SIGI S.A. Todos os direitos reservados.</p>
          <p className="text-gray-600 text-sm mt-2">Investimento imobiliário de qualidade em Portugal</p>
        </div>
      </footer>
    </div>
  );
}
