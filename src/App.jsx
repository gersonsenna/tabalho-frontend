import { Routes, Route, Navigate } from "react-router"; // 🎯 Adicionado: Navigate
import { PetProvider } from "./contexts/PetContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ListagemPets from "./pages/ListagemPets";
import CadastroPet from "./pages/CadastroPet";
import Login from "./pages/Login.jsx";
import Registrar from "./pages/Registrar.jsx";
import GerenciarPets from "./pages/GerenciarPets.jsx";
import FormularioAdocao from "./pages/FormularioAdocao.jsx";

function App() {
  return (
    <PetProvider>
      {/* A Navbar fica fora do <main> para ocupar a largura total da tela no topo */}
      <Navbar />
      
      <main className="p-6">
        <Routes>
          {/* 🌐 ROTAS PÚBLICAS */}
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<ListagemPets />} />
          <Route path="/adotar" element={<FormularioAdocao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          
          {/* 🔒 ROTAS ADMINISTRATIVAS */}
          <Route path="/pets/novo" element={<CadastroPet />} />
          <Route path="/pets/gerenciar" element={<GerenciarPets />} />

          {/* 🛡️ ROTA DE SEGURANÇA: Se o link não existir, volta para a Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </PetProvider>
  );
}

export default App;