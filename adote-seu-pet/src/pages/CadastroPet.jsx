import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { PetContext } from "../contexts/PetContext";

function CadastroPet() {
  const { setPetsGlobal } = useContext(PetContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    raca: "",
    porte: "Pequeno",
    imagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.idade || !formData.raca) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    setPetsGlobal((prevPets) => [...prevPets, formData]);
    alert("🐾 Pet cadastrado com sucesso!");
    navigate("/pets");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📝 Cadastrar Novo Pet
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Nome do Pet *</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Ex: Thor, Mel"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Idade *</label>
          <input
            type="text"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            placeholder="Ex: 2 anos, 5 meses"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Raça *</label>
          <input
            type="text"
            name="raca"
            value={formData.raca}
            onChange={handleChange}
            placeholder="Ex: Poodle, Vira-lata"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Porte</label>
          <select
            name="porte"
            value={formData.porte}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Pequeno">Pequeno</option>
            <option value="Médio">Médio</option>
            <option value="Grande">Grande</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Link da Imagem (URL)</label>
          <input
            type="text"
            name="imagem"
            value={formData.imagem}
            onChange={handleChange}
            placeholder="https://linkdafoto.com/imagem.jpg"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Salvar Pet
        </button>
      </form>
    </div>
  );
}

export default CadastroPet;