import { useContext } from "react";
import { PetContext } from "../contexts/PetContext";

function ListagemPets() {
  const { petsGlobal, setPetsGlobal } = useContext(PetContext);

  const handleAdotar = (indexParaRemover) => {
    const confirmacao = window.confirm("Você tem certeza que deseja adotar este pet?");
    if (confirmacao) {
      setPetsGlobal((prevPets) => prevPets.filter((_, index) => index !== indexParaRemover));
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        🐾 Pets Disponíveis para Adoção
      </h2>

      {petsGlobal.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-xl font-medium">Nenhum pet cadastrado no momento.</p>
          <p className="text-sm mt-1">Vá até a tela de cadastro para adicionar um companheiro!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {petsGlobal.map((pet, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col justify-between">
              <div>
                {pet.imagem ? (
                  <img
                    src={pet.imagem}
                    alt={pet.nome}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                    <span className="text-4xl">🐶</span>
                  </div>
                )}
                
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pet.nome}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><span className="font-semibold">Raça:</span> {pet.raca}</p>
                    <p><span className="font-semibold">Idade:</span> {pet.idade}</p>
                    <p><span className="font-semibold">Porte:</span> {pet.porte}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => handleAdotar(index)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200 mt-2"
                >
                  Adoptar Me! ✨
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListagemPets;