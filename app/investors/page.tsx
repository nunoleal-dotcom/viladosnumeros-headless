'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function InvestorsPage() {
  const [activeTab, setActiveTab] = useState('geral');
  const [selectedYear, setSelectedYear] = useState('todos');

  const documents = {
    geral: [
      { title: 'Estatutos Sociais', date: '2024', year: 2024 },
      { title: 'Certidão Permanente', date: '2024', year: 2024 },
      { title: 'Regulamento de Funcionamento', date: '2023', year: 2023 },
    ],
    assembleia: [
      { title: 'Convocatória Assembleia Geral - 2024', date: '15/03/2024', year: 2024 },
      { title: 'Boletim de Voto - 2024', date: '15/03/2024', year: 2024 },
      { title: 'Ata da Assembleia Geral - 2024', date: '20/04/2024', year: 2024 },
      { title: 'Convocatória Assembleia Geral - 2023', date: '10/03/2023', year: 2023 },
      { title: 'Boletim de Voto - 2023', date: '10/03/2023', year: 2023 },
    ],
    financeira: [
      { title: 'Contas Anuais 2024', date: '31/12/2024', year: 2024 },
      { title: 'Relatório de Gestão 2024', date: '31/12/2024', year: 2024 },
      { title: 'Parecer do Auditor 2024', date: '31/12/2024', year: 2024 },
      { title: 'Contas Anuais 2023', date: '31/12/2023', year: 2023 },
      { title: 'Relatório de Gestão 2023', date: '31/12/2023', year: 2023 },
    ],
    comunicados: [
      { title: 'Comunicado Admissão Euronext Access', date: '01/01/2024', year: 2024 },
      { title: 'Press Release - Resultados 2024', date: '28/02/2024', year: 2024 },
      { title: 'Comunicado - Novo Projeto Adquirido', date: '15/02/2024', year: 2024 },
      { title: 'Comunicado - Investimento Lisboa', date: '10/01/2023', year: 2023 },
    ],
  };

  const getDocuments = () => {
    const tabDocs = documents[activeTab as keyof typeof documents] || [];
    if (selectedYear === 'todos') return tabDocs;
    return tabDocs.filter(doc => doc.year === parseInt(selectedYear));
  };

  const years = ['todos', '2024', '2023', '2022'];

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
            <a href="/#equipa" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">
              EQUIPA
            </a>
            <a href="/investors" className="text-gray-900 transition text-sm font-semibold uppercase tracking-wide border-b-2 border-gray-900">
              INVESTIDORES
            </a>
            <a href="/#contacto" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">
              CONTACTO
            </a>

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

      {/* HERO */}
      <section className="relative h-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=200&fit=crop"
          alt="Portfólio de Projetos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h2 className="text-2xl font-bold text-white">Acionistas e Investidores</h2>
            <p className="text-xs text-gray-100 mt-1">
              Informação corporativa, documentação legal e relatórios financeiros
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* TABS */}
        <div className="flex gap-1 mb-8 border-b-2 border-gray-300 overflow-x-auto pb-4">
          <button
            onClick={() => setActiveTab('geral')}
            className={`px-6 py-2 font-semibold text-sm uppercase whitespace-nowrap transition border-b-2 ${
              activeTab === 'geral'
                ? 'text-teal-700 border-teal-700'
                : 'text-gray-600 border-transparent hover:text-teal-700'
            }`}
          >
            Informação Geral
          </button>
          <button
            onClick={() => setActiveTab('assembleia')}
            className={`px-6 py-2 font-semibold text-sm uppercase whitespace-nowrap transition border-b-2 ${
              activeTab === 'assembleia'
                ? 'text-teal-700 border-teal-700'
                : 'text-gray-600 border-transparent hover:text-teal-700'
            }`}
          >
            Assembleia Geral
          </button>
          <button
            onClick={() => setActiveTab('financeira')}
            className={`px-6 py-2 font-semibold text-sm uppercase whitespace-nowrap transition border-b-2 ${
              activeTab === 'financeira'
                ? 'text-teal-700 border-teal-700'
                : 'text-gray-600 border-transparent hover:text-teal-700'
            }`}
          >
            Informação Financeira
          </button>
          <button
            onClick={() => setActiveTab('comunicados')}
            className={`px-6 py-2 font-semibold text-sm uppercase whitespace-nowrap transition border-b-2 ${
              activeTab === 'comunicados'
                ? 'text-teal-700 border-teal-700'
                : 'text-gray-600 border-transparent hover:text-teal-700'
            }`}
          >
            Comunicados
          </button>
        </div>

        {/* YEAR FILTER */}
        <div className="flex gap-3 mb-4 flex-wrap">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition border-2 ${
                selectedYear === year
                  ? 'bg-teal-600 text-white border-teal-600'
                  : 'bg-white text-teal-600 border-teal-600 hover:bg-teal-50'
              }`}
            >
              {year === 'todos' ? 'Todos' : year}
            </button>
          ))}
        </div>

        {/* DOCUMENTS LIST */}
        <div className="space-y-2">
          {getDocuments().length > 0 ? (
            getDocuments().map((doc, index) => (
              <a
                key={index}
                href={`/documents/${doc.title.toLowerCase().replace(/\s+/g, '-')}.pdf`}
                download
                className="w-full text-left flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md hover:border-teal-300 transition group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition">
                  <span className="text-2xl">📄</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 group-hover:text-teal-700 transition leading-tight">{doc.title}</h3>
                  <p className="text-sm text-gray-500 leading-tight">{doc.date}</p>
                </div>
                <div className="flex-shrink-0 text-gray-400 group-hover:text-teal-600 transition">
                  →
                </div>
              </a>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500">Sem documentos disponíveis para este período</p>
            </div>
          )}
        </div>


        {/* CONTACT FORM */}
        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-blue-900 mb-2 text-center">Contacte-nos</h3>
          <p className="text-gray-600 text-center mb-8">Envie-nos uma mensagem e entraremos em contacto dentro de 24 horas</p>

          <form className="space-y-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                <input
                  type="text"
                  placeholder="João Silva"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  placeholder="joao@empresa.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Empresa</label>
                <input
                  type="text"
                  placeholder="Nome da sua empresa"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  placeholder="+351 913 040 032"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Assunto *</label>
              <input
                type="text"
                placeholder="Qual é o assunto da sua mensagem?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem *</label>
              <textarea
                placeholder="Descreva em detalhes a sua mensagem..."
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                required
              />
            </div>

            <div className="flex items-center gap-3 pt-4">
              <input type="checkbox" id="agree" className="w-4 h-4 text-blue-900 rounded focus:ring-2 focus:ring-blue-500" />
              <label htmlFor="agree" className="text-sm text-gray-600">
                Concordo que os meus dados sejam processados de acordo com a <a href="#" className="text-blue-900 font-semibold hover:underline">política de privacidade</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition duration-200 mt-8"
            >
              Enviar Mensagem
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 pt-12 border-t border-gray-200">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm hover:shadow-md hover:border-blue-300 transition">
              <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-2">Email</p>
              <p className="text-sm font-semibold text-gray-900">investidores@viladosnumeros.com</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm hover:shadow-md hover:border-blue-300 transition">
              <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-2">Telefone</p>
              <p className="text-sm font-semibold text-gray-900">+351 913 040 032</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm hover:shadow-md hover:border-blue-300 transition">
              <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-2">Localização</p>
              <p className="text-sm font-semibold text-gray-900">Lisboa, Portugal</p>
            </div>
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
