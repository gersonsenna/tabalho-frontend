import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ListagemPets from "./pages/ListagemPets";
import CadastroPet from "./pages/CadastroPet";
import { PetProvider } from "./contexts/PetContext";
import Login from "./pages/Login.jsx";
import Registrar from "./pages/Registrar.jsx";
import GerenciarPets from "./pages/GerenciarPets.jsx";

  
function App() {
  return (
    <PetProvider>
      <Navbar />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<ListagemPets />} />
          <Route path="/pets/novo" element={<CadastroPet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/pets/gerenciar" element={<GerenciarPets />} />
        </Routes>
      </main>
    </PetProvider>
  );
}

export default App;