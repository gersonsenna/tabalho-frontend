import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Listagem from "./pages/Listagem";
import Navbar from "./components/Navbar"; // Importando o novo componente

function App() {
  return (
    <BrowserRouter>
      {/* Chamamos o componente Navbar aqui */}
      <Navbar />

      <main className="container mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listagem" element={<Listagem />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;