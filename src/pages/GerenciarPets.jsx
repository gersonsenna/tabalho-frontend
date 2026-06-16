import { useContext, useState } from "react";
import { PetContext } from "../contexts/PetContext";
import { Link } from "react-router";

function GerenciarPets() {
  const { petsGlobal, carregando, estaLogado, atualizarPetAPI, excluirPetAPI } = useContext(PetContext);
  const [petEmEdicao, setPetEmEdicao] = useState(null); // Agora guarda o ID do pet

  const [nomeEditado, setNomeEditado] = useState("");
  const [racaEditada, setRacaEditada] = useState("");
  const [idadeEditada, setIdadeEditada] = useState("");
  const [porteEditado, setPorteEditado] = useState("Médio");
  const [tipoEditado, setTipoEditado] = useState("Cão");

  if (!estaLogado) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md text-center border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">🔒 Acesso Restrito</h2>
        <p className="text-gray-600 mb-6">Você precisa estar logado para gerenciar o catálogo.</p>
        <Link to="/login" className="inline-block bg-orange-600 text-white font-bold py-2 px-6 rounded hover:bg-orange-700 transition">
          Ir para o Login
        </Link>
      </div>
    );
  }

  const handleExcluir = async (id, nome) => {
    const confirmacao = window.confirm(`Tem certeza que deseja excluir permanentemente o pet "${nome}"?`);
    if (confirmacao) {
      const sucesso = await excluirPetAPI(id);
      if (sucesso) alert("🗑️ Pet removido da API!");
    }
  };

  const iniciarEdicao = (pet) => {
    setPetEmEdicao(pet.id);
    setNomeEditado(pet.nome);
    setRacaEditada(pet.raca);
    setIdadeEditada(pet.idade);
    setPorteEditado(pet.porte || "Médio");
    setTipoEditado(pet.tipo || "Cão");
  };

  const salvarEdicao = async (petOriginal) => {
    if (!nomeEditado || !racaEditada || !idadeEditada) {
      alert("Por favor, preencha os campos obrigatórios!");
      return;
    }

    const dadosAtualizados = {
      ...petOriginal,
      nome: nomeEditado,
      raca: racaEditada,
      idade: idadeEditada,
      porte: porteEditado,
      tipo: tipoEditado,
    };

    const sucesso = await atualizarPetAPI(petOriginal.id, dadosAtualizados);
    if (sucesso) {
      setPetEmEdicao(null);
      alert("📝 Alterações salvas com sucesso via HTTP PUT!");
    }
  };

  if (carregando) {
    return <div className="text-center mt-20 text-gray-500">Buscando dados no servidor...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">⚙️ Painel de Gerenciamento</h2>
      <p className="text-center text-gray-500 mb-8">Conectado diretamente à API REST.</p>

      {petsGlobal.length === 0 ? (
        <div className="text-center p-8 bg-gray-50 rounded-lg text-gray-500">Nenhum pet encontrado na API.</div>
      ) : (
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold text-sm">
                  <th className="p-4">Foto / Nome</th>
                  <th className="p-4">Tipo / Raça</th>
                  <th className="p-4">Idade / Porte</th>
                  <th className="p-4 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
                {petsGlobal.map((pet) => (
                  <tr key={pet.id} className="hover:bg-gray-50 transition">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {pet.imagem ? (
                          <img src={pet.imagem} alt={pet.nome} className="w-12 h-12 rounded-full object-cover border" />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">🐾</div>
                        )}
                        {petEmEdicao === pet.id ? (
                          <input type="text" value={nomeEditado} onChange={(e) => setNomeEditado(e.target.value)} className="p-1 border border-orange-400 rounded w-32" />
                        ) : (
                          <span className="font-bold text-gray-800">{pet.nome}</span>
                        )}
                      </div>
                    </td>

                    <td className="p-4">
                      {petEmEdicao === pet.id ? (
                        <div className="flex flex-col gap-1">
                          <select value={tipoEditado} onChange={(e) => setTipoEditado(e.target.value)} className="p-1 border border-orange-400 rounded text-xs">
                            <option value="Cão">Cão</option>
                            <option value="Gato">Gato</option>
                            <option value="Outro">Outro</option>
                          </select>
                          <input type="text" value={racaEditada} onChange={(e) => setRacaEditada(e.target.value)} className="p-1 border border-orange-400 rounded text-xs" />
                        </div>
                      ) : (
                        <div>
                          <p className="font-medium text-gray-700">{pet.tipo}</p>
                          <p className="text-xs text-gray-400">{pet.raca}</p>
                        </div>
                      )}
                    </td>

                    <td className="p-4">
                      {petEmEdicao === pet.id ? (
                        <div className="flex flex-col gap-1">
                          <input type="text" value={idadeEditada} onChange={(e) => setIdadeEditada(e.target.value)} className="p-1 border border-orange-400 rounded text-xs" />
                          <select value={porteEditado} onChange={(e) => setPorteEditado(e.target.value)} className="p-1 border border-orange-400 rounded text-xs">
                            <option value="Pequeno">Pequeno</option>
                            <option value="Médio">Médio</option>
                            <option value="Grande">Grande</option>
                          </select>
                        </div>
                      ) : (
                        <div>
                          <p>{pet.idade}</p>
                          <span className="inline-block bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs mt-0.5">{pet.porte || "Médio"}</span>
                        </div>
                      )}
                    </td>

                    <td className="p-4 text-center">
                      {petEmEdicao === pet.id ? (
                        <div className="flex justify-center gap-2">
                          <button onClick={() => salvarEdicao(pet)} className="bg-orange-600 text-white font-semibold py-1 px-3 rounded text-xs">✓ Salvar</button>
                          <button onClick={() => setPetEmEdicao(null)} className="bg-gray-200 text-gray-600 font-semibold py-1 px-3 rounded text-xs">Cancelar</button>
                        </div>
                      ) : (
                        <div className="flex justify-center gap-2">
                          <button onClick={() => iniciarEdicao(pet)} className="border border-orange-500 text-orange-600 font-semibold py-1 px-3 rounded text-xs">✏️ Editar</button>
                          <button onClick={() => handleExcluir(pet.id, pet.nome)} className="bg-orange-600 text-white font-semibold py-1 px-3 rounded text-xs">🗑️ Excluir</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default GerenciarPets;