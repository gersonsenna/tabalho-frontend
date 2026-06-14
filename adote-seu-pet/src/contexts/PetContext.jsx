import { createContext, useState, useEffect } from "react";

const PetContext = createContext();

function PetProvider({ children }) {
  const [petsGlobal, setPetsGlobal] = useState(() => {
    const savedPets = localStorage.getItem("pets");
    return savedPets ? JSON.parse(savedPets) : [];
  });

  const [estaLogado, setEstaLogado] = useState(() => {
    const loginSalvo = localStorage.getItem("usuario_logado");
    return loginSalvo === "true";
  });

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(petsGlobal));
    localStorage.setItem("usuario_logado", estaLogado.toString());
  }, [petsGlobal, estaLogado]);

  return (
    <PetContext.Provider value={{ petsGlobal, setPetsGlobal, estaLogado, setEstaLogado }}>
      {children}
    </PetContext.Provider>
  );
}

export { PetProvider, PetContext };

