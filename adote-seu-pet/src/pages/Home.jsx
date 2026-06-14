import { Link } from "react-router";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen -mt-6">
      {/* SEÇÃO HERO (BANNER PRINCIPAL) */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <span className="bg-orange-100 text-orange-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            🐾 Adote um Amigo
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
            Encontre o companheiro ideal para a sua casa!
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Centenas de cães e gatos estão esperando por um lar cheio de amor. Faça a diferença na vida de um animalzinho hoje mesmo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="/pets"
              className="bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition shadow-md"
            >
              Ver Pets para Adoção
            </Link>
            <Link
              to="/login"
              className="border border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition bg-white"
            >
              Área Administrativa
            </Link>
          </div>
        </div>

        {/* ILUSTRAÇÃO OU CARD DE DESTAQUE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative bg-orange-100 rounded-3xl p-8 max-w-sm w-full shadow-inner text-center">
            <div className="text-7xl mb-4">🐶🐱</div>
            <h3 className="text-xl font-bold text-gray-800">Transforme Vidas</h3>
            <p className="text-gray-600 text-sm mt-2">
              Adotar é um ato de responsabilidade e carinho. Salve um pet abandonado!
            </p>
            <div className="absolute -top-4 -right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              Amor Incondicional
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE BENEFÍCIOS / MOTIVOS */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Por que adotar um pet?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-orange-600 text-3xl mb-3">❤️</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Companheirismo</h3>
              <p className="text-gray-600 text-sm">
                Animais de estimação trazem alegria, reduzem o estresse e preenchem a casa com afeto contínuo.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-orange-600 text-3xl mb-3">🏠</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Abrir Espaço para Outros</h3>
              <p className="text-gray-600 text-sm">
                Quando você adota, o abrigo ganha uma vaga livre para salvar e tratar de outro animal de rua necessitado.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-orange-600 text-3xl mb-3">✨</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Gratidão Eterna</h3>
              <p className="text-gray-600 text-sm">
                Pets que passaram pelo abandono reconhecem uma segunda chance e desenvolvem um vínculo extremamente leal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ SIMPLES */}
      <footer className="text-center py-8 text-gray-400 text-sm bg-gray-900 text-white mt-auto">
        <p>© 2026 PetAdote - Trabalho de Frontend React. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;