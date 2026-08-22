'use client';

import Link from 'next/link';

export default function AboutPage() {
  const metrics = [
    {
      number: '6',
      label: 'Projectos em Portfólio',
      description: 'Investimentos imobiliários estratégicos'
    },
    {
      number: '270K',
      label: 'm² Totais Desenvolvidos',
      description: 'Área de construção utilizada'
    },
    {
      number: '100%',
      label: 'Taxa de Ocupação',
      description: 'Rentabilidade operacional comprovada'
    },
    {
      number: '6%',
      label: 'Dividend Yield Médio',
      description: 'Retorno anualizado aos investidores'
    },
    {
      number: '€8.7B',
      label: 'Valor de Portfólio',
      description: 'Avaliação total 2024'
    },
    {
      number: 'SIGI',
      label: 'Regime Especial',
      description: 'Decreto-Lei 19/2019'
    },
    {
      number: '2',
      label: 'Regiões Estratégicas',
      description: 'Lisboa e Algarve'
    },
    {
      number: '2019',
      label: 'Desde o Início',
      description: 'Crescimento consistente'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="bg-white border-b-2 border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src="/logo.png" alt="Vila dos Números" className="h-16 w-auto" />
          </Link>

          <nav className="flex gap-8 items-center">
            <Link href="/#sobre" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">SOBRE</Link>
            <Link href="/#projetos" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">PROJETOS</Link>
            <Link href="/#equipa" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">EQUIPA</Link>
            <Link href="/investors" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">INVESTIDORES</Link>
            <Link href="/#contacto" className="text-gray-700 hover:text-gray-900 transition text-sm font-semibold uppercase tracking-wide">CONTACTO</Link>

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
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            Vila dos Números, S.A.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
            Uma Sociedade de Investimento e Gestão Imobiliária (SIGI) atuando no setor multifamiliar, focado no desenvolvimento, reabilitação, aquisição e gestão de comunidades residenciais em Portugal.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Perseguindo apreciação de capital através da constituição e gestão estratégica de portfólio imobiliário de qualidade em Portugal.
          </p>
        </div>
      </section>

      {/* KEY METRICS SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-20">
            Indicadores Chave
          </h2>

          {/* Grid 4 colunas - 2 linhas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-10 hover:shadow-lg transition duration-300"
              >
                {/* Número Grande */}
                <div className="mb-6">
                  <p className="text-5xl md:text-6xl font-bold text-blue-900">
                    {metric.number}
                  </p>
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {metric.label}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Data Footer */}
          <div className="text-center pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Dados e informação em 22 de Agosto de 2026
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT DETAILS SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* LEFT COLUMN */}
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                A Nossa Missão
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Vila dos Números compromete-se com o desenvolvimento e gestão de propriedades imobiliárias de qualidade superior, criando comunidades residenciais sustentáveis que melhoram a qualidade de vida dos seus residentes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Através de investimentos estratégicos e gestão profissional, buscamos gerar retornos consistentes para os nossos investidores enquanto mantemos os mais altos padrões de excelência operacional.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                A Nossa Visão
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ser reconhecida como uma das principais sociedades de investimento imobiliário em Portugal, conhecida pela qualidade dos seus projectos, transparência na gestão e compromisso com a sustentabilidade.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Expandir o portfólio através de oportunidades estratégicas que ofereçam valor superior aos investidores e contribuam positivamente para o desenvolvimento urbano em Portugal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Descubra os Nossos Projectos
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Conheça em detalhe o nosso portfólio de investimento imobiliário
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/#projetos"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Ver Projetos
            </a>
            <a
              href="/investors"
              className="bg-transparent text-white px-8 py-4 rounded-lg font-bold border-2 border-white hover:bg-blue-800 transition"
            >
              Para Investidores
            </a>
          </div>
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
