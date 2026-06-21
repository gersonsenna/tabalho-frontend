import { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { PetContext } from "../contexts/PetContext";

function CadastroPet() {
  // Puxa com sucesso a função HTTP POST mapeada no estado global
  const { adicionarPetAPI } = useContext(PetContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      tipo: "Cão",
      raca: "",
      idade: "",
      porte: "Médio",
      imagem: "",
      descricao: "",
    },
  });

  const onSubmit = async (data) => {
    // 🐾
    if (!data.imagem || data.imagem.trim() === "") {
      data.imagem = "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop";
    }

    // Dispara o método HTTP POST configurado no contexto para salvar no db.json
    const sucesso = await adicionarPetAPI(data);
    
    if (sucesso) {
      alert("🐾 Pet cadastrado com sucesso!");
      navigate("/pets"); // Redireciona o usuário de volta para o catálogo completo
    } else {
      alert("❌ Ocorreu um erro ao salvar o pet.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📝 Cadastrar Novo Pet
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Campo: Nome */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Nome do Pet *</label>
          <input
            type="text"
            {...register("nome", { required: "O nome do pet é obrigatório" })}
            placeholder="Ex: Thor, Mel"
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
              errors.nome ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"
            }`}
          />
          {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
        </div>

        {/* Linha: Tipo e Porte */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Tipo *</label>
            <select
              {...register("tipo")}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="Cão">Cão</option>
              <option value="Gato">Gato</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Porte *</label>
            <select
              {...register("porte")}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </select>
          </div>
        </div>

        {/* Linha: Raça e Idade */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Raça *</label>
            <input
              type="text"
              {...register("raca", { required: "A raça é obrigatória" })}
              placeholder="Ex: Poodle, Vira-lata"
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
                errors.raca ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"
              }`}
            />
            {errors.raca && <p className="text-red-500 text-xs mt-1">{errors.raca.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Idade *</label>
            <input
              type="text"
              {...register("idade", { required: "A idade é obrigatória" })}
              placeholder="Ex: 2 anos"
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
                errors.idade ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"
              }`}
            />
            {errors.idade && <p className="text-red-500 text-xs mt-1">{errors.idade.message}</p>}
          </div>
        </div>

        {/* Campo: URL da Imagem */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">URL da Imagem</label>
          <input
            type="text"
            {...register("imagem")}
            placeholder="https://linkdafoto.com/imagem.jpg"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Campo: Descrição */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Descrição</label>
          <textarea
            {...register("descricao", { 
              maxLength: { value: 200, message: "Máximo de 200 caracteres" }
            })}
            placeholder="Conte um pouco sobre o pet... (Opcional)"
            rows="3"
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
              errors.descricao ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"
            }`}
          />
          {errors.descricao && <p className="text-red-500 text-xs mt-1">{errors.descricao.message}</p>}
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 transition duration-200"
        >
          Salvar Pet
        </button>
      </form>
    </div>
  );
}

export default CadastroPet;