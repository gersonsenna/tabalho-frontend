import { createContext, useState } from "react";

const PetContext = createContext();

function PetProvider({ children }) {
  const [petsGlobal, setPetsGlobal] = useState([]);

  return (
    <PetContext.Provider value={{ petsGlobal, setPetsGlobal }}>
      {children}
    </PetContext.Provider>
  );
}

export { PetProvider, PetContext };