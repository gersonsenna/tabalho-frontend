import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-sm flex justify-between items-center border-b border-slate-100">
      <Link to="/" className="text-xl font-black text-orange-600">
        🐾 PetAdote
      </Link>

      <div className="flex gap-6 font-bold text-slate-600">
        <Link to="/" className="hover:text-orange-600 transition">
          Início
        </Link>

        <Link to="/pets" className="hover:text-orange-600 transition">
          Listagem
        </Link>

        <Link to="/pets/novo" className="hover:text-orange-600 transition">
          Cadastro
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;