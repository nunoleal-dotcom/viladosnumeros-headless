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

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Para Investidores</h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Oportunidades de investimento imobiliário com retorno comprovado e gestão profissional
          </p>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">Indicadores Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* KPI 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-5xl font-bold text-blue-900 mb-3">6</div>
              <p className="text-lg font-bold text-gray-800 mb-2">Projectos em Portfólio</p>
              <p className="text-sm text-gray-600">Grande Lisboa & Algarve</p>
            </div>

            {/* KPI 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-5xl font-bold text-blue-900 mb-3">270K</div>
              <p className="text-lg font-bold text-gray-800 mb-2">m² Totais Desenvolvidos</p>
              <p className="text-sm text-gray-600">Área construída</p>
            </div>

            {/* KPI 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-5xl font-bold text-green-600 mb-3">100%</div>
              <p className="text-lg font-bold text-gray-800 mb-2">Taxa de Ocupação</p>
              <p className="text-sm text-gray-600">Rentabilidade operacional</p>
            </div>

            {/* KPI 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-5xl font-bold text-blue-900 mb-3">6%</div>
              <p className="text-lg font-bold text-gray-800 mb-2">Dividend Yield Médio</p>
              <p className="text-sm text-gray-600">Retorno anualizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12">Sobre a Vila dos Números</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Perfil da Empresa</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vila dos Números é uma Sociedade de Investimento e Gestão Imobiliária (SIGI) portuguesa, especializada em investimento imobiliário de médio e longo prazo em Portugal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Operamos sob o regime tributário especial SIGI (Decreto-Lei nº 19/2019, de 28 de Janeiro) com foco estratégico nas regiões de Grande Lisboa e Algarve.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Objetivos de Investimento</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-blue-900 font-bold">✓</span>
                  <span className="text-gray-700">Valorização de capital através de constituição de portfólio imobiliário</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 font-bold">✓</span>
                  <span className="text-gray-700">Aquisição e desenvolvimento de propriedades urbanas e mistas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 font-bold">✓</span>
                  <span className="text-gray-700">Gestão estratégica com retornos consistentes aos investidores</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-900 font-bold">✓</span>
                  <span className="text-gray-700">Excelência operacional e transparência na gestão</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Management Team */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">Equipa de Gestão</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-bold text-blue-900 mb-2">Cláudia Daniela Constance Leal</p>
                <p className="text-sm text-gray-700 mb-3">Presidente do Conselho de Administração</p>
                <p className="text-sm text-gray-600 leading-relaxed">Antiga apresentadora da RTP-África, formada em Linguística e Literatura. Responsável por Direção Geral de Investimentos, Recursos Humanos e Comunicação.</p>
              </div>
              <div>
                <p className="font-bold text-blue-900 mb-2">Ana Lúcia Jardim Leal</p>
                <p className="text-sm text-gray-700 mb-3">Vogal do Conselho de Administração</p>
                <p className="text-sm text-gray-600 leading-relaxed">CEO da EDINOK, Mestre em Gestão de Projetos. Responsável por Direção Fiscal e Financeira e Direção Comercial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTATION SECTION */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">Documentação & Informação</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* COLUNA 1: INFORMAÇÃO GERAL */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-2">
                <span className="text-3xl">📋</span> Documentos Legais
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block bg-white text-blue-900 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition border border-blue-200 text-center"
                >
                  Estatutos
                </a>
                <a
                  href="#"
                  className="block bg-white text-blue-900 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition border border-blue-200 text-center"
                >
                  Certidão Permanente
                </a>
                <a
                  href="#"
                  className="block bg-white text-blue-900 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition border border-blue-200 text-center"
                >
                  Regulamento
                </a>
              </div>
            </div>

            {/* COLUNA 2: INFORMAÇÃO FINANCEIRA */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-2">
                <span className="text-3xl">📊</span> Informação Financeira
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block bg-white text-blue-900 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition border border-blue-200 text-center"
                >
                  Contas Anuais 2024
                </a>
                <a
                  href="#"
                  className="block bg-white text-blue-900 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition border border-blue-200 text-center"
                >
                  Contas Anuais 2023
                </a>
                <a
                  href="#"
                  className="block bg-white text-blue-900 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition border border-blue-200 text-center"
                >
                  Relatório Anual 2024
                </a>
              </div>
            </div>

            {/* COLUNA 3: COMUNICADOS */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-2">
                <span className="text-3xl">📰</span> Comunicados & Notícias
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block bg-white text-blue-900 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition border border-blue-200 text-center"
                >
                  Admissão Euronext Access
                </a>
                <a
                  href="#"
                  className="block bg-white text-blue-900 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition border border-blue-200 text-center"
                >
                  Press Releases
                </a>
                <a
                  href="#"
                  className="block bg-white text-blue-900 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition border border-blue-200 text-center"
                >
                  Notícias & Eventos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Investir?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Entre em contacto connosco para conhecer melhor as oportunidades de investimento
          </p>
          <a
            href="/#contacto"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Contacte-nos Agora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2026 Vila dos Números, SIGI S.A. Todos os direitos reservados.</p>
          <p className="text-gray-400 text-sm mt-2">Investimento imobiliário de qualidade em Portugal</p>
        </div>
      </footer>
    </div>
  );
}
