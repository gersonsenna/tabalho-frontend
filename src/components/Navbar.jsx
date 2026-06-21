import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { PetContext } from "../contexts/PetContext";

function Navbar() {
  const { estaLogado, efectuarLogout } = useContext(PetContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    efectuarLogout();
    alert("👋 Você saiu da sua conta.");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-sm border-b border-gray-100">
      {/* LOGO DO SITE */}
      <div className="text-orange-600 font-bold text-xl flex items-center gap-1">
        🐾 PetAdote
      </div>
      
      {/* LINKS DA NAVBAR (APARECEM LÁ EM CIMA) */}
      <div className="flex gap-6 font-medium text-gray-700 items-center">
        <Link to="/" className="hover:text-orange-600 transition">Início</Link>
        
        {/* 🎯 LINK 1: Leva para o catálogo de pets */}
        <Link to="/pets" className="hover:text-orange-600 transition">Ver Pets</Link>
        
        {/* 🎯 LINK 2: Adiciona o Formulário de Adoção na Navbar */}
        <Link to="/adotar" className="hover:text-orange-600 transition">Adoção</Link>
        
        {/* 🟠 LINKS ADMINISTRATIVOS: Só aparecem se o admin estiver logado */}
        {estaLogado && (
          <>
            <Link to="/pets/novo" className="hover:text-orange-600 transition">Cadastro</Link>
            <Link to="/pets/gerenciar" className="hover:text-orange-600 transition">Gerenciar</Link>
          </>
        )}
        
        {/* BOTÃO DE LOGIN / LOGOUT */}
        {estaLogado ? (
          <button 
            onClick={handleLogout}
            className="bg-gray-200 text-gray-700 font-bold py-1.5 px-4 rounded hover:bg-gray-300 transition text-sm"
          >
            Sair
          </button>
        ) : (
          <Link 
            to="/login" 
            className="bg-orange-600 text-white font-bold py-1.5 px-4 rounded hover:bg-orange-700 transition shadow-sm text-sm"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;