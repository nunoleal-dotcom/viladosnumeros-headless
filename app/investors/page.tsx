'use client';

import Link from 'next/link';

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="bg-white border-b-2 border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src="/logo.png" alt="Vila dos Números" className="h-16 w-auto" />
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

      {/* HERO - ESTILO DOURADO */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Acionistas e Investidores</h1>
          <p className="text-xl text-yellow-50">Informações e documentação para stakeholders</p>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Métricas Chave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Properties */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">5</div>
              <p className="text-gray-600 font-semibold">Properties em Portfólio</p>
              <p className="text-sm text-gray-500 mt-2">Grande Lisboa & Algarve</p>
            </div>

            {/* Area */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">270K</div>
              <p className="text-gray-600 font-semibold">m² Totais</p>
              <p className="text-sm text-gray-500 mt-2">Área desenvolvida</p>
            </div>

            {/* Occupancy */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-600 font-semibold">Ocupação</p>
              <p className="text-sm text-gray-500 mt-2">Taxa de rentabilidade</p>
            </div>

            {/* Dividend Yield */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">6%</div>
              <p className="text-gray-600 font-semibold">Dividend Yield</p>
              <p className="text-sm text-gray-500 mt-2">Retorno anualizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-blue-900">Vila dos Números - Perfil da Empresa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Sobre a Empresa</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Vila dos Números é uma sociedade de investimento imobiliário sob regime SIGI, especializada em investimento
                de médio e longo prazo em Portugal, com foco nas regiões de Grande Lisboa e Algarve.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A empresa persegue apreciação de capital através da constituição e gestão estratégica de portfólio imobiliário,
                desenvolvendo projetos de qualidade em propriedades urbanas, rurais ou mistas.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Equipa Gestora</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-blue-900">Cláudia Daniela Constance Leal</p>
                  <p className="text-sm text-gray-600">Presidente do Conselho de Administração</p>
                  <p className="text-sm text-gray-500">Antiga jornalista e apresentadora da RTP Africa</p>
                </div>
                <div>
                  <p className="font-bold text-blue-900">Ana Lúcia Jardim Leal</p>
                  <p className="text-sm text-gray-600">Membro do Conselho</p>
                  <p className="text-sm text-gray-500">CEO da EDINOK, Mestre em Gestão de Projetos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTOS - 3 COLUNAS */}
      <section className="py-20 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Documentação</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* COLUNA 1: INFORMAÇÃO GERAL */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Informação Geral</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block bg-white text-gray-800 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  📄 Estatutos
                </a>
                <a
                  href="#"
                  className="block bg-white text-gray-800 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  ✓ Certidão Permanente
                </a>
                <a
                  href="#"
                  className="block bg-white text-gray-800 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  📋 Regulamento
                </a>
              </div>
            </div>

            {/* COLUNA 2: INFORMAÇÃO FINANCEIRA */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Informação Financeira</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block bg-white text-gray-800 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  📊 Contas Anuais 2024
                </a>
                <a
                  href="#"
                  className="block bg-white text-gray-800 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  📊 Contas Anuais 2023
                </a>
                <a
                  href="#"
                  className="block bg-white text-gray-800 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  📊 Contas Anuais 2022
                </a>
                <a
                  href="#"
                  className="block bg-white text-gray-800 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  📊 Relatório Anual 2024
                </a>
              </div>
            </div>

            {/* COLUNA 3: COMUNICADOS */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Comunicados & Notícias</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block bg-white text-gray-800 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  📰 Admissão Euronext Access
                </a>
                <a
                  href="#"
                  className="block bg-white text-gray-800 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  📰 Press Releases
                </a>
                <a
                  href="#"
                  className="block bg-white text-gray-800 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  📰 Notícias & Eventos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">Contacte-nos</h2>
          <p className="text-xl text-gray-600 mb-8">Para informações de investimento</p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div>
              <p className="text-gray-600 mb-2">📧 Email</p>
              <a href="mailto:investidores@viladosnumeros.com" className="text-blue-900 font-bold text-lg hover:text-blue-600">
                investidores@viladosnumeros.com
              </a>
            </div>
            <div>
              <p className="text-gray-600 mb-2">📞 Telefone</p>
              <a href="tel:913040032" className="text-blue-900 font-bold text-lg hover:text-blue-600">
                +351 913 040 032
              </a>
            </div>
            <div>
              <p className="text-gray-600 mb-2">📍 Morada</p>
              <p className="text-blue-900 font-bold">Lisboa, Portugal</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 Vila dos Números, SIGI S.A. Todos os direitos reservados.</p>
          <p className="text-blue-300 text-sm mt-2">Investimento imobiliário de qualidade em Portugal</p>
        </div>
      </footer>
    </div>
  );
}
