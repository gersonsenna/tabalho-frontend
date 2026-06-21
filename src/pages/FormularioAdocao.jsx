import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { PetContext } from "../contexts/PetContext";

function FormularioAdocao() {
  const contexto = useContext(PetContext);
  const petsGlobal = contexto?.petsGlobal || [];

  const navigate = useNavigate();
  const location = useLocation();
  const petPreSelecionado = location.state?.petNome || "";

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      petDesejado: petPreSelecionado,
    },
  });

  useEffect(() => {
    if (petPreSelecionado) {
      setValue("petDesejado", petPreSelecionado);
    }
  }, [petPreSelecionado, setValue]);

  const onSubmit = (data) => {
    alert(
      `🐾 Formulário enviado com sucesso!\n\nObrigado, ${data.nome}. Recebemos seu interesse pelo pet ${data.petDesejado}. Entraremos em contato em breve!`
    );
    reset();
    navigate("/pets");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10 mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        ❤️ Formulário de Adoção
      </h2>
      <p className="text-gray-600 text-sm text-center mb-6">
        Preencha os dados abaixo para iniciar o processo de avaliação.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Campo: Nome */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Seu Nome Completo *</label>
          <input
            type="text"
            {...register("nome", { required: "Seu nome é obrigatório" })}
            placeholder="Digite seu nome"
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
              errors.nome ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"
            }`}
          />
          {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
        </div>

        {/* Campo: E-mail */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Seu E-mail *</label>
          <input
            type="email"
            {...register("email", { required: "O e-mail é obrigatório" })}
            placeholder="exemplo@email.com"
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Campo: Telefone */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Telefone para Contato *</label>
          <input
            type="tel"
            {...register("telefone", { required: "O telefone é obrigatório" })}
            placeholder="(XX) 9XXXX-XXXX"
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
              errors.telefone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"
            }`}
          />
          {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone.message}</p>}
        </div>

        {/* Campo: Pet Desejado */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Pet que Deseja Adotar *</label>
          <select
            {...register("petDesejado", { required: "Selecione um pet" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">-- Selecione um pet --</option>
            {/* 🎯 CORRIGIDO: Se a lista estiver vazia (carregando), o app não quebra mais */}
            {petsGlobal.length > 0 ? (
              petsGlobal.map((pet) => (
                <option key={pet.id} value={pet.nome}>
                  {pet.nome} ({pet.tipo})
                </option>
              ))
            ) : (
              <option disabled value="">Nenhum pet encontrado ou buscando...</option>
            )}
          </select>
          {errors.petDesejado && <p className="text-red-500 text-xs mt-1">{errors.petDesejado.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 transition duration-200 shadow-md"
        >
          Enviar Requerimento
        </button>
      </form>
    </div>
  );
}

export default FormularioAdocao;