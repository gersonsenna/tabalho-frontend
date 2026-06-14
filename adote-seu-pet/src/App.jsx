import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ListagemPets from "./pages/ListagemPets";
import CadastroPet from "./pages/CadastroPet";

function App() {
  return (
    <BrowserRouter>
      {/* A Navbar fica fixa no topo de todas as páginas */}
      <Navbar />

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<ListagemPets />} />
          <Route path="/pets/novo" element={<CadastroPet />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;