import { useState, useContext } from "react";
import { PetContext } from "../contexts/PetContext";

function CadastroPet() {
  const { setPetsGlobal } = useContext(PetContext);
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome) return;

    setPetsGlobal((prev) => [...prev, { nome }]);
    setNome("");
    alert("Pet cadastrado com sucesso!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 Cadastrar Novo Pet</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome do pet" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CadastroPet;