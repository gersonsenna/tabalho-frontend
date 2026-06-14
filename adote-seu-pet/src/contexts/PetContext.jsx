import { createContext, useState, useEffect } from "react";

const PetContext = createContext();

function PetProvider({ children }) {
  const [petsGlobal, setPetsGlobal] = useState(() => {
    const savedPets = localStorage.getItem("pets");
    return savedPets ? JSON.parse(savedPets) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(petsGlobal));
  }, [petsGlobal]);

  return (
    <PetContext.Provider value={{ petsGlobal, setPetsGlobal }}>
      {children}
    </PetContext.Provider>
  );
}

export { PetProvider, PetContext };

