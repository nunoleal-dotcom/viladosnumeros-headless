import Link from 'next/link';

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

export default async function Home() {
  const pages = await getPages();

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Vila dos Números</h1>
          <nav className="flex gap-8">
            <a href="#sobre" className="hover:text-blue-300 transition">Sobre</a>
            <a href="#projetos" className="hover:text-blue-300 transition">Projetos</a>
            <a href="#equipa" className="hover:text-blue-300 transition">Equipa</a>
            <a href="#contacto" className="hover:text-blue-300 transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Construindo o Futuro</h2>
          <p className="text-xl mb-8">Especializada em investimento imobiliário de médio e longo prazo em Portugal</p>
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold transition">
            Saiba Mais
          </button>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8 text-blue-900">Quem Somos</h3>
          <p className="text-lg text-gray-700 mb-4">
            A Vila dos Números atua como sociedade de investimento imobiliário sob regime SIGI, perseguindo apreciação de capital de médio e longo prazo através da constituição e gestão de portfólio.
          </p>
          <p className="text-lg text-gray-700">
            Com foco nas regiões da Grande Lisboa e Algarve, desenvolvemos projetos de qualidade em propriedades urbanas, rurais ou mistas.
          </p>
        </div>
      </section>

      {/* PÁGINAS DINÂMICAS */}
      {pages && pages.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-4xl font-bold mb-12 text-blue-900">Conteúdo do Site</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pages.slice(0, 6).map((page: any) => (
                <div key={page.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">
                    {page.title.rendered}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {page.excerpt?.rendered?.replace(/<[^>]*>/g, '')?.substring(0, 100) || 'Sem descrição'}...
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Total de páginas carregadas: {pages.length}
            </p>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 Vila dos Números. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
