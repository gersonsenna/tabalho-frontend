import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ListagemPets from "./pages/ListagemPets";
import CadastroPet from "./pages/CadastroPet";
import { PetProvider } from "./contexts/PetContext";

function App() {
  return (
    <PetProvider>
      <Navbar />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<ListagemPets />} />
          <Route path="/pets/novo" element={<CadastroPet />} />
        </Routes>
      </main>
    </PetProvider>
  );
}

export default App;