import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Listagem from "./pages/Listagem";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar com Tailwind */}
      <nav className="bg-sky-700 p-4 text-white shadow-md">
        <div className="container mx-auto flex gap-6">
          <Link to="/" className="hover:text-orange-200 transition font-bold">Início</Link>
          <Link to="/cadastro" className="hover:text-orange-200 transition font-bold">Cadastro</Link>
          <Link to="/listagem" className="hover:text-orange-200 transition font-bold">Listagem</Link>
        </div>
      </nav>

      {/* Área onde as páginas aparecem */}
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