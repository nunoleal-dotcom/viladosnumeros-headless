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

async function getCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/categories`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error('Failed to fetch categories');
    return res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function Home() {
  const pages = await getPages();
  const posts = await getPosts();
  const categories = await getCategories();

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

      {/* PROJETOS */}
      <section id="projetos" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-blue-900">Nossos Projetos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-40 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🏢 Campo de Ourique</span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-2">📍 Lisboa</p>
                <p className="text-blue-600 font-semibold">Habitação de Qualidade</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-40 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🏗️ Oeiras</span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-2">📍 Área de Lisboa</p>
                <p className="text-blue-600 font-semibold">Serviços Comerciais</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-40 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🌊 Cascais</span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-2">📍 Cascais</p>
                <p className="text-blue-600 font-semibold">Habitação Premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPA */}
      <section id="equipa" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-blue-900">Nossa Equipa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-6xl mb-4">👩‍💼</div>
              <h4 className="text-2xl font-bold text-blue-900 mb-2">Cláudia Daniela Constance Leal</h4>
              <p className="text-blue-600 font-semibold mb-4">Presidente do Conselho de Administração</p>
              <p className="text-gray-700">Antiga jornalista e apresentadora de televisão da RTP Africa</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="text-6xl mb-4">👩‍💻</div>
              <h4 className="text-2xl font-bold text-blue-900 mb-2">Ana Lúcia Jardim Leal</h4>
              <p className="text-blue-600 font-semibold mb-4">Membro do Conselho</p>
              <p className="text-gray-700">CEO da EDINOK, Mestre em Gestão de Projetos pela ISCTE</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-blue-900">Nossos Serviços</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🔍</div>
              <h4 className="text-xl font-bold text-blue-900 mb-4">Aquisição de Propriedades</h4>
              <p className="text-gray-700">Identificação e aquisição de propriedades com elevado potencial de valorização</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🔨</div>
              <h4 className="text-xl font-bold text-blue-900 mb-4">Desenvolvimento e Reabilitação</h4>
              <p className="text-gray-700">Projetos de qualidade em propriedades urbanas, rurais ou mistas</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4">💼</div>
              <h4 className="text-xl font-bold text-blue-900 mb-4">Gestão de Portfólio</h4>
              <p className="text-gray-700">Constituição e gestão estratégica de portfólio imobiliário</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG / NOTÍCIAS */}
      {posts && posts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-4xl font-bold mb-12 text-blue-900">Notícias e Artigos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 6).map((post: any) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="bg-blue-600 h-32 flex items-center justify-center">
                    <span className="text-white text-lg font-bold text-center px-4">{post.title.rendered}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">
                      {post.excerpt?.rendered?.replace(/<[^>]*>/g, '')?.substring(0, 100) || 'Sem descrição'}...
                    </p>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
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
      <section id="contacto" className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center">Entre em Contacto</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl mb-4">📧</div>
              <p className="text-lg mb-2">Email</p>
              <a href="mailto:geral@viladosnumeros.com" className="text-blue-300 hover:text-blue-100">
                geral@viladosnumeros.com
              </a>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📞</div>
              <p className="text-lg mb-2">Telefone</p>
              <a href="tel:913040032" className="text-blue-300 hover:text-blue-100">
                913 040 032
              </a>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <p className="text-lg mb-2">Morada</p>
              <p className="text-blue-300">Praça D. António Ribeiro, nº5 10A, 1750-371 Lisboa</p>
            </div>
          </div>

          <form className="max-w-2xl mx-auto bg-blue-800 rounded-lg p-8">
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Nome</label>
              <input type="text" className="w-full px-4 py-2 rounded bg-blue-700 text-white placeholder-blue-300" placeholder="Seu nome" />
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 rounded bg-blue-700 text-white placeholder-blue-300" placeholder="seu@email.com" />
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Mensagem</label>
              <textarea className="w-full px-4 py-2 rounded bg-blue-700 text-white placeholder-blue-300" rows={5} placeholder="Sua mensagem..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Vila dos Números</h4>
              <p className="text-blue-300">Investimento imobiliário de qualidade em Portugal</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-blue-300">
                <li><a href="#sobre" className="hover:text-white">Quem Somos</a></li>
                <li><a href="#projetos" className="hover:text-white">Projetos</a></li>
                <li><a href="#equipa" className="hover:text-white">Equipa</a></li>
                <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Informação Legal</h4>
              <ul className="space-y-2 text-blue-300">
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos e Condições</a></li>
                <li><a href="#" className="hover:text-white">Política de Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center">
            <p>&copy; 2026 Vila dos Números, SIGI S.A. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
