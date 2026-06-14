import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { listar } from "../services/petService";

function ListagemPets() {
  const [dados, setDados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const carregar = async () => {
      const resposta = await listar();
      setDados(resposta);
    };
    carregar();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-4">Listagem de Pets</h1>
      <button 
        onClick={() => navigate("/pets/novo")}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold mb-4"
      >
        Novo Pet
      </button>

      <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
        <thead className="bg-slate-100 text-left text-slate-600">
          <tr>
            <th className="p-3">Nome do Pet</th>
            <th className="p-3">Tipo</th>
            <th className="p-3">Idade</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id} className="border-t border-slate-100">
              <td className="p-3 font-medium">{item.nome}</td>
              <td className="p-3">{item.tipo}</td>
              <td className="p-3">{item.idade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListagemPets;