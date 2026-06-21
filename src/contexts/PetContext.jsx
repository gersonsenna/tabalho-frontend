import { createContext, useState, useEffect } from "react";

const PetContext = createContext();

export function PetProvider({ children }) {
  const [petsGlobal, setPetsGlobal] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erroApi, setErroApi] = useState(null);
  const [estaLogado, setEstaLogado] = useState(() => {
    const loginSalvo = localStorage.getItem("usuario_logado");
    return loginSalvo === "true";
  });

  const API_URL = "http://localhost:3001/pets";

  // GET - Buscar os pets da API
  const buscarPets = async () => {
    try {
      setCarregando(true);
      setErroApi(null);
      const resposta = await fetch(API_URL);
      if (!resposta.ok) throw new Error("Não foi possível conectar ao servidor.");
      const dados = await resposta.json();
      setPetsGlobal(dados);
    } catch (erro) {
      console.error("Erro na requisição GET:", erro);
      setErroApi("⚠️ O servidor local está offline. Certifique-se de rodar 'npm run server'.");
    } finally { 
      setCarregando(false);
    }
  };

  useEffect(() => {
    Promise.resolve().then(() => buscarPets());
  }, []);

  useEffect(() => {
    localStorage.setItem("usuario_logado", estaLogado.toString());
  }, [estaLogado]);

  const efectuarLogout = () => {
    setEstaLogado(false);
    localStorage.removeItem("usuario_logado");
  };

  // POST - Cadastrar novo pet
  const adicionarPetAPI = async (novoPet) => {
    try {
      const resposta = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoPet),
      });
      if (resposta.ok) {
        const petCriado = await resposta.json();
        setPetsGlobal((prev) => [...prev, petCriado]);
        return true;
      }
      return false;
    } catch (erro) {
      console.error("Erro no POST:", erro);
      return false;
    }
  };

  // PUT - Editar pet
  const atualizarPetAPI = async (id, petAtualizado) => {
    try {
      const resposta = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(petAtualizado),
      });
      if (resposta.ok) {
        setPetsGlobal((prev) =>
          prev.map((pet) => (pet.id === id ? { ...pet, ...petAtualizado } : pet))
        );
        return true;
      }
      return false;
    } catch (erro) {
      console.error("Erro no PUT:", erro);
      return false;
    }
  };

  // DELETE - Excluir pet
  const excluirPetAPI = async (id) => {
    try {
      const resposta = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (resposta.ok) {
        setPetsGlobal((prev) => prev.filter((pet) => pet.id !== id));
        return true;
      }
      return false;
    } catch (erro) {
      console.error("Erro no DELETE:", erro);
      return false;
    }
  };

  return (
    <PetContext.Provider
      value={{
        petsGlobal,
        setPetsGlobal,
        carregando,
        erroApi,
        estaLogado,
        setEstaLogado,
        efectuarLogout,
        adicionarPetAPI, 
        atualizarPetAPI,
        excluirPetAPI,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}

export { PetContext };