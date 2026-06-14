import { useContext } from "react";
import { PetContext } from "../contexts/PetContext";

function ListagemPets() {
  const { petsGlobal } = useContext(PetContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🐾 Pets Disponíveis para Adoção</h2>
      {petsGlobal.length === 0 ? (
        <p>Nenhum pet cadastrado no momento.</p>
      ) : (
        petsGlobal.map((pet, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h3>{pet.nome}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default ListagemPets;