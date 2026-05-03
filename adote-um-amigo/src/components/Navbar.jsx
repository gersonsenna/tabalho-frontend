import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-sky-700 p-4 text-white shadow-md">
      <div className="container mx-auto flex gap-6">
        <Link to="/" className="hover:text-orange-200 transition font-bold">Início</Link>
        <Link to="/cadastro" className="hover:text-orange-200 transition font-bold">Cadastro</Link>
        <Link to="/listagem" className="hover:text-orange-200 transition font-bold">Listagem</Link>
      </div>
    </nav>
  );
}