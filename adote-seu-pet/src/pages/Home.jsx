import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-extrabold text-orange-600 mb-4">🐾 Adote seu Pet</h1>
      <p className="text-slate-600 mb-6 text-lg">Encontre o companheiro ideal para sua casa de forma simples!</p>
      <button 
        onClick={() => navigate("/pets")}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-sm"
      >
        Ver Pets Disponíveis
      </button>
    </div>
  );
}

export default Home;